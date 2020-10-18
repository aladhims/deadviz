/*global chrome*/
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import DeadlineVisualizer from "./deadlineVisualizer";
import Welcome from "./welcome";
import { isEmptyObject } from "../utils";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const limitNumberOfBoxes = 30;
const day = "day";
const week = "week";
const month = "month";
const year = "year";

const getMaxPriorityElement = prioritized => {
    const topPriorities = [prioritized[0]];
    // Get all the top priority deadlines
    prioritized.slice(1).forEach((item) => {
        if (item.priority === topPriorities[0].priority) {
            topPriorities.push(item);
        }
    })

    // Get a random number between 0 and 1 (exclusive)
    // We take a threshold of 0.001 so if the random() method produces 1 (rare) we don't overflow the indexing limits
    // Also taking the absolute value so (-0.001) doesn't come up in any case.
    // This randomNumber will generate a index at which our priority will lie.
    const randomNumber = Math.abs(Math.random() - 0.001);
    var index = Math.floor(randomNumber * topPriorities.length);
    return topPriorities[index];
}

const chooseRandomDeadline = deadlines => {
    // first sort the array based on priority
    const prioritized = deadlines.sort((a, b) => (b.priority - a.priority));
    // check if the priority elements have multiple items
    const maxPriority = prioritized.length === 1 ? prioritized[0] : getMaxPriorityElement(prioritized);

    return parseData(maxPriority);
};

const parseData = deadline => {
    let startDate = dayjs(deadline.start);
    let endDate = dayjs(deadline.end);
    let timeUnit = day;
    let diff = dayjs.duration(endDate.diff(startDate));
    let numOfBoxes = Math.ceil(diff.asDays());
    if (numOfBoxes > limitNumberOfBoxes) {
        timeUnit = week;
        numOfBoxes = Math.ceil(diff.asWeeks());
    }

    // if the number of boxes are still big, then convert it to month
    if (numOfBoxes > limitNumberOfBoxes) {
        timeUnit = month;
        numOfBoxes = Math.ceil(diff.asMonths());
    }

    // still big, convert it to years
    if (numOfBoxes > limitNumberOfBoxes) {
        timeUnit = year;
        numOfBoxes = Math.ceil(diff.asYears());
    }

    const now = dayjs();

    let passedBoxCount = 0;

    let boxes = [];

    for (let i = 1; i <= numOfBoxes; i++) {
        const remainingTime = startDate.from(now);
        const passedTime = now.to(startDate);

        if (startDate.isAfter(now)) {
            boxes.push({ passed: false, info: remainingTime });
        } else {
            passedBoxCount++;
            boxes.push({passed: true, info: passedTime, index: i });
        }

        startDate = startDate.add(1, timeUnit);
    }

    const remaining = numOfBoxes - passedBoxCount;
    const percentage = (passedBoxCount / numOfBoxes * 100).toFixed(2);
    if (remaining > 1) {
        timeUnit = `${timeUnit}s`;
    }

    return {
        name: deadline.name,
        boxes,
        summary: `${remaining} ${timeUnit} remaining (${percentage}%)`,
        id: deadline.id,
    };
};

const Visualizer = () => {
    const [deadline, setDeadline] = useState({});
    const [deadlineExists, setDeadlineExists] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        chrome.storage.sync.get(['deadlines', 'pinned'], data => {
            if (!data) {
                return
            }

            // check if any pinned deadline exists
            if (!isEmptyObject(data.pinned)) {
                setDeadline(parseData(data.pinned));
                setDeadlineExists(true);
                setLoading(false);
                return
            }

            if (!!data && !!data.deadlines) {
                setDeadline(chooseRandomDeadline(data.deadlines));
                setDeadlineExists(true);
            }

            setLoading(false);
        })
    }, []);

    if (loading) {
        return <div />
    }
    return deadlineExists ? <DeadlineVisualizer deadline={deadline} /> : <Welcome />;
}

export default Visualizer;
