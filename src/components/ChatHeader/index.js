import React from 'react';
import {css} from 'glamor';

const headerStyle = css({
    height: 30,
    borderBottom: '1px solid #ecf0f1'
});

const ChatHeader = () => {
    return (
        <div {...headerStyle}>
            <p className="text-muted">header</p>
        </div>
    );
};

export default ChatHeader;