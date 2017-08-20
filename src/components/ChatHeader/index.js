import React from 'react';
import {css} from 'glamor';

const headerStyle = css({
    height: 50
});

const ChatHeader = () => {
    return (
        <div {...headerStyle}>
            header
        </div>
    );
};

export default ChatHeader;