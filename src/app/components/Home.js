import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super();
        this.state        = {
            age     : props.initialAge,
            status  : 0,
            homeLink: props.initialLinkName
        };
        this.onMakeOlder  = this.onMakeOlder.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
        console.log("Constructor");
    }

    componentWillMount() {
        console.log("This is ComponentWillMount");
    }

    componentDidMount() {
        console.log("This is ComponentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("This is ComponentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("This is ShouldComponentUpdate", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("This is ComponentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("This is ComponentWillMount", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("This is ComponentWillUnmount");
    }


    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
           homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>{ this.props.name }</p>
                <p>{ this.state.age }</p>
                <p>Status: { this.state.status }</p>
                <hr/>
                <button className="btn btn-primary"
                        onClick={this.onMakeOlder}>
                    Make me older!
                </button>
                <hr/>
                <button className="btn btn-primary"
                        onClick={ this.props.greet }>
                    Greet
                </button>
                <hr/>
                <input type="text"
                       value={ this.state.homeLink }
                       onChange={ (event) => this.onHandleChange(event) }
                />
                <button className="btn btn-primary"
                        onClick={ this.onChangeLink }>
                    Change Header Link
                </button>
            </div>
        );
    }

}

Home.propTypes = {
    name           : React.PropTypes.string,
    initialAge     : React.PropTypes.number,
    greet          : React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};

export default Home;