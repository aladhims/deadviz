import React from "react";
import styled, {keyframes} from "styled-components";
import PropTypes from "prop-types";
import {Divider, Layout, Tooltip} from 'antd';

const {Header, Footer, Content} = Layout;

const Container = styled.div`
    left: 50%;
  position: relative;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const BoxContainer = styled.div`
    display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
`;

const FadeIn = keyframes`
      0% {
        opacity: 0;
        transform: scale(0);
      }
    
      50% {
        transform: scale(1.5);
      }
    
      100% {
        opacity: 1;
        transform: scale(1);
      }
`

const Box = styled.div`
    flex-grow: 0;
    border-radius: 4px;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    height: 30px;
    margin: 4px;
    width: 30px;
    cursor: pointer;
    background-color: #fff;
    animation: 0.1s ease-in-out both ${FadeIn};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.25s ease-in-out;
    animation-delay: ${props => props.delay * 0.1}s;
    
    &:hover {
       box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

`;

const PassedBox = styled(Box)`
    background-color: red;
`;

const Title = styled(Divider)`
    font-size: 20px !important;
`;

const DeadlineVisualizer = ({deadline}) => {
    document.title = `${deadline.name} - ${deadline.summary}`;
    return (
        <Layout style={{height: '100vh', width: '100vw'}}>
            <Header style={{backgroundColor: '#fff'}}>
                <Title>{deadline.name}</Title>
            </Header>
            <Content>
                <Container>
                    <BoxContainer>
                        {deadline.boxes.map((item, index) => item.passed ?
                            <Tooltip title={item.info} color="red">
                                <PassedBox key={index} delay={index + 1}/>
                            </Tooltip>
                            :
                            <Tooltip title={item.info}>
                                <Box key={index} delay={index + 1}/>
                            </Tooltip>)}
                    </BoxContainer>
                </Container>
            </Content>
            <Footer style={{backgroundColor: '#fff'}}>
                <Divider>{deadline.summary}</Divider>
            </Footer>
        </Layout>
    );
}

DeadlineVisualizer.propTypes = {
    deadline: PropTypes.shape({
        name: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        boxes: PropTypes.arrayOf(PropTypes.shape({
            info: PropTypes.string.isRequired,
            passed: PropTypes.bool.isRequired
        })).isRequired
    }).isRequired
}

export default DeadlineVisualizer;
