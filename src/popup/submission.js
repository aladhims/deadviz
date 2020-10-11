import React from "react";
import styled from 'styled-components';
import dayjs from 'dayjs';

import { Form, Input, Tooltip, Button, Slider } from 'antd';
import DatePicker from "./DatePicker";
import { QuestionCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';

const StyledForm = styled(Form)`
    padding: 16px;
`;

const StyledButton = styled(Button)`
    margin-top: 16px;
`;

const Submission = ({ onSubmit }) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        onSubmit(values);
        form.resetFields();
    };

    return (
        <StyledForm
            requiredMark={false}
            form={form}
            onFinish={onFinish}>
            <Form.Item name="name" label={
                <span>
                    Name&nbsp;
                    <Tooltip title="What's your plan/goal?">
                        <QuestionCircleOutlined />
                    </Tooltip>
                </span>
            } hasFeedback rules={[{ required: true, message: 'Please input your plan/goal', whitespace: true }]}>
                <Input placeholder="My ultimate goal" />
            </Form.Item>
            <Form.Item name="start" label={
                <span>
                    Start&nbsp;
                    <Tooltip title="Goal's Start Date">
                        <QuestionCircleOutlined />
                    </Tooltip>
                </span>
            }
                initialValue={dayjs()}
                hasFeedback
                dependencies={['end']}
                rules={[
                    { type: 'object', required: true, message: 'Please select start time' },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('end') > value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The start date should be before end date');
                        },
                    })]}>
                <DatePicker initialValues={dayjs()} className="full-width" />
            </Form.Item>
            <Form.Item name="end" label={
                <span>
                    End&nbsp;
                    <Tooltip title="Goal's End Date">
                        <QuestionCircleOutlined />
                    </Tooltip>
                </span>
            }
                hasFeedback
                initialValue={dayjs().add(1, 'y')}
                dependencies={['start']}
                rules={[
                    { type: 'object', required: true, message: 'Please select end time' },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('start') < value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The end date should be after start date');
                        },
                    })]}>
                <DatePicker initialValues={dayjs().add(1, 'y')} className="full-width" />
            </Form.Item>
            <Form.Item name="priority" style={{ width: '100%' }} hasFeedback
                label={
                    <span>
                        Priority&nbsp;
                    <Tooltip title="Goal's Priority">
                            <QuestionCircleOutlined />
                        </Tooltip>
                    </span>
                }>
                <Slider style={{ width: '85%' }} defaultValue={0.5} max={1.0} min={0.0} marks={false} step={0.01} />
            </Form.Item>
            <Form.Item>
                <StyledButton size="large" icon={<UnorderedListOutlined />} shape="round" className="centered" type="primary"
                    htmlType="submit">
                    Add to List
                </StyledButton>
            </Form.Item>
        </StyledForm>
    );
}

export default Submission;