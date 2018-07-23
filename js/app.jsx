import React from 'react';
import ReactDom from 'react-dom';
import AddInput from './components/add_input.jsx';





class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            clicked: true
        })
}

    render () {
        return (
            <section>
                <h1>Form Builder</h1>
                <AddInput info={this.state.clicked}/>
                <button onClick={this.handleClick}>Add Input</button>
            </section>
        )
    }
}


class App extends React.Component {
    render () {
        return (
            <Form/>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDom.render(
        <App/>,
        document.getElementById('app')
    );
});