/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef, useCallback} from "react";
import {Tag, Input} from 'antd';
import {  PlusCircleOutlined  } from '@ant-design/icons';
import styled from "styled-components";
import {ChromeStorage} from '../../db/chromeSotrage';

const Tags = styled(Tag)`
    margin-bottom: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    height: 25px;
`;

const NewTag = styled(Tag)`
    height: 25px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    &:hover {
      cursor: pointer;
    }
`;

const CustomTag = ({deadlineTag, tagItem}) => {
  const  [tags, setTags] = useState([]);
  const  [inputVisible, setInputVisible] = useState(false);
  const  [inputValue, setInputValue] = useState('');
  const refInput = useRef(null);

  const handleClose = (indexTag) => {
    ChromeStorage.removeTag(deadlineTag.id,tagItem.index, indexTag)
  };

  const showInput =  useCallback(() => {
    setInputVisible(true);
    if(refInput.current != null) {
      refInput.current.focus();
    }
  },[refInput]);
  

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };


  const updateSotrageTag = (tag) => {;
    ChromeStorage.getDeadline(deadlineTag.id).then
        ( deadline => {
            if(deadline.tag) {
              // eslint-disable-next-line no-unused-expressions
              deadline.tag[tagItem.index].push(tag);
            } else {
              const newTags = Array.from(Array(deadlineTag.boxes.length), () => []);
              newTags[tagItem.index].push(tag);
              deadline.tag = newTags;
            }
            ChromeStorage.saveDeadline(deadline).then(result => {
              updateCacheTag();
            });
        });
  }

  const handleInputConfirm = () => {
    if (inputValue) {
      if (tags) {
        setTags([...tags, inputValue]);
      } else {
        setTags(inputValue);
      }
      updateSotrageTag(inputValue);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const updateCacheTag = () => {
    ChromeStorage.getTag(tagItem.index, deadlineTag.id).then((tags) => {
      setTags(tags);
    });
  }

  useEffect(() => {
    setInputVisible(false);
   if (tagItem) {
      updateCacheTag();
   }
  },[tagItem, deadlineTag]);


    return (
           (tagItem != null ? tagItem.item.passed : false)  && (
              <>
              {(tags) && (tags.map((item, index) => { return ( 
                      <> 
                          <Tags
                              className="edit-tag"
                              key={index}
                              closable={true}
                              onClose={(e) => {handleClose(index)}}
                              >{item}
                          </Tags>
                      </>)}))
              }
              {inputVisible && (
                  <Input
                    type="text"
                    size="small"
                    ref={refInput}
                    className="tag-input"
                    value={inputValue}
                    onChange={ (e)=>{ handleInputChange(e)}}
                    onPressEnter={ (e)=>{ handleInputConfirm(e)} }
                  />
              )}
              {!inputVisible && (
                  <NewTag className="site-tag-plus" onClick={()=>{showInput()}}>
                     <PlusCircleOutlined /> New Tag
                  </NewTag>
              )}
          </>        
          )
         
    );
};

export default CustomTag;