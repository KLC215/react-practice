import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Home from './components/Home';

/**
 *  Entry Component
 */
class App extends React.Component {

    constructor() {
        super();

        this.state = {
            homeLink   : "Home",
            homeMounted: true
        };

        this.onChangeLinkName    = this.onChangeLinkName.bind(this);
        this.onChangeHomeMounted = this.onChangeHomeMounted.bind(this);
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {

        let homeCmp = "";

        if (this.state.homeMounted) {
            homeCmp = (
                <Home name={"KLC"}
                      initialAge={21}
                      greet={ this.onGreet }
                      changeLink={ this.onChangeLinkName }
                      initialLinkName={ this.state.homeLink }
                />
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={ this.state.homeLink }/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        { homeCmp }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button className="btn btn-primary"
                                onClick={ this.onChangeHomeMounted }>
                            (Un)Mount Home Component
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

render(
    <App />,
    document.getElementById('app')
);