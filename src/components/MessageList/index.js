import React from 'react';
import {css} from 'glamor';
import Message from '../../components/Message';

const messageListStyle = css({
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
});

const MessageList = ({messages}) => {
    return (
        <div {...messageListStyle}>
            {messages.map((message) => <Message {...{message}} />)}
        </div>
    );
};

export default MessageList;