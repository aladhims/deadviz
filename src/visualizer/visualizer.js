/*global chrome*/
import React, {useEffect, useState} from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import DeadlineVisualizer from "./deadlineVisualizer";
import Welcome from "./welcome";
import {isEmptyObject} from "../utils";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const limitNumberOfBoxes = 30;
const day = "day";
const week = "week";
const month = "month";
const year = "year";

const chooseRandomDeadline = deadlines => {
    const random = Math.ceil(Math.random() * 100);
    const index = random % deadlines.length;

    return parseData(deadlines[index]);
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
            boxes.push({passed: false, info: remainingTime});
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