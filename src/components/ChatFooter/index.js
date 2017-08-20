import React from 'react';
import {css} from 'glamor';

const footerStyle = css({
    height: 50
});

const ChatFooter = () => {
    return (
        <div {...footerStyle}>
            footer
        </div>
    );
};

export default ChatFooter;