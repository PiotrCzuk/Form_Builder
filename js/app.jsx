import React from 'react';
import ReactDom from 'react-dom';
import AddInput from './components/add_input.jsx';





class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            count: 0,
            clicked: false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            clicked: true,
            count: this.state.count+1
        });
    };

    displayForm(){
        let forms = [];
        for(let i = 0; i < this.state.count; i++){
            forms.push(
                <div key={i}>
                    <AddInput value={this.state.value[i] || ''} />
                </div>
            )
        }
        return forms || null;
    }

    render () {
        return (
            <section>
                <h1>Form Builder</h1>
                {this.state.clicked ? this.displayForm() : null}
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