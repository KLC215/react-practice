import React from 'react';
import { render } from 'react-dom';

/**
 *  Entry Component
 */
class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello React!</h1>
                    </div>
                </div>
            </div>
        );
    }

}

render(<App />, document.getElementById('app'));