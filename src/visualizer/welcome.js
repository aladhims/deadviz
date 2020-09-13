import React from "react";
import styled from "styled-components";
import { Typography, Image } from "antd";

const { Title } = Typography;

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const FormattedImage = styled(Image)`
    margin-top: 16px;
`;

const Welcome = () => (
    <Container>
        <Title>No Plan/Deadline to Visualize</Title>
        <Title level={4} type="secondary">add plans/deadlines in the deadviz popup extension above</Title>
        <FormattedImage
            width={200}
            src="https://i.imgur.com/VPE0UUE.png"
        />
    </Container>
);

export default Welcome;