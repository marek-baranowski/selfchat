import React from 'react';
import {css} from 'glamor';
import {
    createFragmentContainer,
    graphql
} from 'react-relay';
import Message from '../../components/Message';

const messageListStyle = css({
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
});

const MessageList = ({viewer}) => {
    return (
        <div {...messageListStyle}>
            {viewer.messages.map((message) => <Message {...{message}} />)}
        </div>
    );
};

export default createFragmentContainer(MessageList, graphql`
    fragment MessageList_viewer on Viewer {
        allMessages(last: 100, orderBy: createdAt_DESC) @connection(key: "MessageList_allMessages", filters: []) {
            edges {
                node {
                    ...Message_message
                }
            }
        }
    }
`)