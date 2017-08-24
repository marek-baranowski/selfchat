import React from 'react';
import {css} from 'glamor';
import {InputGroup, InputGroupButton, Input, Button} from 'reactstrap';
import {
    commitMutation,
    graphql,
} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';
import environment from '../../Environment';

const footerStyle = css({
    height: 50
});

// 2
const mutation = graphql`
    mutation ChatFooterMutation($input: CreateMessageInput!) {
        createMessage(input: $input) {
            message {
                id
                content
            }
        }
    }
`;
// 3
const func = (content) => {
    // 4
    const variables = {
        input: {
            content,
            clientMutationId: ""
        },
    };
// 5
    commitMutation(
        environment,
        {
            mutation,
            variables,
            updater: (proxyStore) => {
                // console.log(proxyStore.getRootField('createMessage'));
                const createMessageField = proxyStore.getRootField('createMessage');
                const newMessage = createPostField.getLinkedRecord('message');
            },
            onCompleted: () => {
                console.log('udalo sie');
                // callback()
            },
            onError: err => console.error(err),
        },
    )
};

const ChatFooter = () => {
    return (
        <div {...footerStyle}>
            <InputGroup>
                <Input />
                <InputGroupButton><Button onClick={() => func('hey')}>Send</Button></InputGroupButton>
            </InputGroup>
        </div>
    );
};

export default ChatFooter;