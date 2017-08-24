import React from 'react';
import Post from '../Post';
import {
    createFragmentContainer,
    graphql
} from 'react-relay';
import {css, media} from 'glamor';
import {breakpoints} from '../../consts';
import MessageList from '../MessageList';
import Message from '../Message';
import ChatHeader from '../ChatHeader';
import ChatFooter from '../ChatFooter';

const containerStyle = css({
        backgroundColor: 'hsla(0,0%,100%,.85)',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    media(`(min-width: ${breakpoints.tablet})`, {
        margin: '0 auto',
        width: '600px',
        padding: '0 5px',
        borderRadius: '5px',
        boxShadow: '0 1px 5px #aaa',
    })
);
const messageListStyle = css({
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
});

class Test extends React.Component {
  render () {
      console.log(124, this.props.viewer);
      return (
          <div className="App">
              <div {...containerStyle}>
                  <ChatHeader />
                  <div {...messageListStyle}>
                      {this.props.viewer.allMessages.edges.map(({node}) => <Message {...{message: node}} />)}
                  </div>
                  <ChatFooter />
              </div>
          </div>
      )
  }
}

export default createFragmentContainer(Test, graphql`
    fragment Test_viewer on Viewer {
        allMessages(last: 100, orderBy: createdAt_DESC) @connection(key: "Test_allMessages", filters: []) {
            edges {
                node {
                    ...Message_message
                }
            }
        }
    }
`)