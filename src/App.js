import React, {Component} from 'react';
import {css, media} from 'glamor';
import {breakpoints} from './consts';
import MessageList from './components/MessageList';
import ChatHeader from './components/ChatHeader';
import ChatFooter from './components/ChatFooter';

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

const messages = [
    {content: 'blablabla'},
    {content: 'rqwerwerf'},
    {content: 'blablfdsfafafabla'},
    {content: '513451341345134'},
    {content: 'fadfsdfasfddasf'},
    {content: 'fasfcxzvxc'}
];

class App extends Component {
    render() {
        return (
            <div className="App" {...containerStyle}>
                <ChatHeader />
                <MessageList {...{messages}} />
                <ChatFooter />
            </div>
        );
    }
}

export default App;
