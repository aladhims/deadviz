import React, { Fragment } from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

import {List, Button, Popconfirm, Divider} from 'antd';
import {DeleteOutlined, PushpinFilled} from '@ant-design/icons';
import PinnedDeadline from "./pinnedDeadline";

const Container = styled.div`
  width: 100%;
  height: 100%;  
`;

const StyledList = styled(List)`
    padding: 16px;
`;

const DeadlineList = ({pinned, data, onPin, onUnpin, onDelete}) => {
    const formatDate = date => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const formatDescription = item => `${formatDate(new Date(item.start))} ~ ${formatDate(new Date(item.end))}`;

    return (
        <Container>
            {pinned ? <Fragment>
                <PinnedDeadline
                    title={pinned.name}
                    description={formatDescription(pinned)}
                    onUnpin={onUnpin}
                />
                <Divider />
            </Fragment> : null}
            <StyledList
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[
                            <Popconfirm
                                title="Are you sure？"
                                okText="Yes"
                                placement="left"
                                cancelText="No"
                                onConfirm={() => onPin(index)}>
                                <PushpinFilled />
                            </Popconfirm>,
                            <Popconfirm
                                title="Are you sure？"
                                okText="Yes"
                                placement="left"
                                cancelText="No"
                                onConfirm={() => onDelete(item.id, index)}>
                                <Button
                                    type="primary"
                                    danger
                                    shape="circle"
                                    icon={
                                        <DeleteOutlined />
                                    }/>
                            </Popconfirm>]}>
                        <List.Item.Meta
                            title={item.name}
                            description={formatDescription(item)}
                        />
                    </List.Item>
                )}
            />
        </Container>
    );
}

const pinnedPropTypes = PropTypes.shape({
    end: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired
}).isRequired;

DeadlineList.propTypes = {
    pinned: pinnedPropTypes,
    data: PropTypes.shape({
        deadlines: PropTypes.arrayOf(pinnedPropTypes).isRequired,
        pinned: pinnedPropTypes,
    }).isRequired,
    onPin: PropTypes.func.isRequired,
    onUnpin: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default DeadlineList;
