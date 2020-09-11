import React from "react";
import styled from "styled-components";
import {Popconfirm, Typography} from 'antd';
import {PushpinTwoTone} from '@ant-design/icons';

const { Title } = Typography;

const Container = styled.div`
    text-align: center;
    position: relative;
`;

const Unpin = styled.span`
    position: absolute;
    top: 0px;
    right: 16px;
`;

const PinnedDeadline = ({title, description, onUnpin}) => (
    <Container>
        <Title level={3} strong>{title}</Title>
        <Title level={5} type="secondary">{description}</Title>
        <Unpin>
            <Popconfirm
                title="Are you sure？"
                okText="Yes"
                placement="left"
                cancelText="No"
                onConfirm={() => onUnpin()}>
                <PushpinTwoTone height={32} width={32}/>
            </Popconfirm>
        </Unpin>
    </Container>
);

export default PinnedDeadline;

