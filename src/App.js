import React, {Component} from 'react';
import {css, media} from 'glamor';
import {breakpoints} from './consts';

import ListPage from './components/ListPage';
import Test from './components/Test';
import {
    QueryRenderer,
    graphql
} from 'react-relay';
import environment from './Environment';

const AppAllPostQuery = graphql`
    query AppAllPostQuery {
        viewer {
            ...Test_viewer
        }
    }
`;

class App extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={AppAllPostQuery}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        return <Test viewer={props.viewer} />
                    }
                    return <div>Loading</div>
                }}
            />
        );
    }
}

export default App;
