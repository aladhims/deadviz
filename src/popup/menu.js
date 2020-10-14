/*global chrome*/
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Tabs} from 'antd';
import {AimOutlined, BarsOutlined, SettingTwoTone} from '@ant-design/icons';

import { isEmptyObject } from "../utils";
import DeadlineList from "./deadlineList";
import Submission from "./submission";



const {TabPane} = Tabs;

const StyledTabs = styled(Tabs)`
    width: 300px;
`;

const StyledSetting = styled(SettingTwoTone)`
    margin-right: 16px;
`;

const newTabURL = "chrome://newtab/";

const Menu = () => {
    const [deadlines, setDeadlines] = useState([]);
    const [existingPinnedDeadline, setExistingPinnedDeadline] = useState({});

    useEffect(() => {
        chrome.storage.sync.get(['deadlines', 'pinned'], data => {
            console.log(data);
            if (!data) {
                return
            }

            if (!!data.pinned) {
                setExistingPinnedDeadline(data.pinned);
            }

            if (!!data.deadlines) {
                setDeadlines(data.deadlines);
            }

        });
    }, []);

    const newTabReload = () => {
        chrome.tabs.getCurrent(tab => {
            if (tab.url === newTabURL) {
                chrome.tabs.reload();
            }
        });
    }

    const handleDelete = (id, index) => {
        const newDeadlines = [...deadlines.slice(0, index), ...deadlines.slice(index + 1)];
        chrome.storage.sync.set({deadlines: newDeadlines}, () => {
            console.log(`Deadline with ID ${id} has been deleted`);
            setDeadlines(newDeadlines);
            newTabReload();
        });
    }

    const handleAdd = ({name, start, end}) => {
        const deadline = {
            id: Date.now(),
            name,
            start: start.toJSON(),
            end: end.toJSON()
        };

        const newDeadlines = [...deadlines, deadline];

        chrome.storage.sync.set({deadlines: newDeadlines}, function () {
            console.log('new goal/plan has been added');
            setDeadlines(newDeadlines);
            newTabReload();
        });
    }

    const handlePin = (index) => {
        const pinnedDeadline = deadlines[index];
        const newDeadlines = [...deadlines.slice(0, index), ...deadlines.slice(index + 1)];

        // check if there is no existing pinned deadline
        if (!isEmptyObject(existingPinnedDeadline)) {
            newDeadlines.push(existingPinnedDeadline);
        }

        // if there is an existing pinned deadline then swap
        chrome.storage.sync.set({
            deadlines: newDeadlines,
            pinned: pinnedDeadline,
        }, function () {
            console.log('a new pinned deadline has been set');
            setExistingPinnedDeadline(pinnedDeadline)
            setDeadlines(newDeadlines);
            newTabReload();
        });
    };

    const handleUnpin = () => {
        if (isEmptyObject(existingPinnedDeadline)) {
            return
        }

        deadlines.push(existingPinnedDeadline);
        chrome.storage.sync.set({
            deadlines,
            pinned: {},
        }, function () {
            console.log('a new pinned deadline has been set');
            setExistingPinnedDeadline({})
            setDeadlines(deadlines);
            newTabReload();
        });
    }


    return (
        <StyledTabs tabBarExtraContent={<StyledSetting twoToneColor="#a6a6a6"/>} defaultActiveKey="1" centered
                    animated={true}>
            <TabPane tab={
                <span>
                    <AimOutlined/>
                    New
                </span>
            } key="1">
                <Submission onSubmit={handleAdd}/>
            </TabPane>
            <TabPane tab={
                <span>
                    <BarsOutlined/>
                    List
                </span>
            } key="2">
                <DeadlineList
                    pinned={isEmptyObject(existingPinnedDeadline) ? undefined : existingPinnedDeadline}
                    data={deadlines}
                    onPin={handlePin}
                    onUnpin={handleUnpin}
                    onDelete={handleDelete}/>
            </TabPane>
        </StyledTabs>
    );
}

export default Menu;
