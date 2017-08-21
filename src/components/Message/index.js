import React from 'react';
import {css} from 'glamor';

const messageStyle = css({
    margin: '10px 5px 5px'
});

const messageContentStyle = css({
    display: 'inline-block',
    wordWrap: 'break-word',
    padding: '8px 14px',
    borderRadius: '7px',
    color: '#3d3c40',
    maxWidth: '65%',
    backgroundColor: '#5ad427'
});

const MessageList = ({message}) => {
    return (
        <div {...messageStyle}>
            <div {...messageContentStyle}>{message.content}</div>
        </div>
    );
};

export default MessageList;