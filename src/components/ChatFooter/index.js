import React from 'react';
import {css} from 'glamor';
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';

const footerStyle = css({
    height: 50
});

const ChatFooter = () => {
    return (
        <div {...footerStyle}>
            <InputGroup>
                <Input />
                <InputGroupButton><Button>Send</Button></InputGroupButton>
            </InputGroup>
        </div>
    );
};

export default ChatFooter;