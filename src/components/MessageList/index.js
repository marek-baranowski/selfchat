import React from 'react';
import {css} from 'glamor';

const messageListStyle = css({
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
});

const MessageList = () => {
    return (
        <div {...messageListStyle}>
            <div>xxx</div>
            <div>xxx</div>
            <div>xxx</div>
            <div>xxx</div>
            <div>xxx</div>
            <div>xxx</div>
            <div>xxx</div>
            <div>xxx</div>
        </div>
    );
};

export default MessageList;