import React from 'react';
import ReactDom from 'react-dom';



class Question extends React.Component {
    render() {
        if (this.props.info == false) {
            return null
        }else {
            return (
                <div>
                    <form>
                        <label>Question:
                        <input type='text'/>
                        </label>
                    </form>
                </div>
            )
        }
    }
}


class AddInput extends React.Component {
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
                <Question info={this.state.clicked}/>
                <button onClick={this.handleClick}>Add Input</button>
            </section>
        )
    }
}


class App extends React.Component {
    render () {
        return (
            <AddInput/>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDom.render(
        <App/>,
        document.getElementById('app')
    );
});