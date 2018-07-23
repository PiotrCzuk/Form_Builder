import React from 'react';


class AddInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            chosen: ""
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    };

    render() {
            return (
                <div>
                    <form>
                        <label>Question
                            <input onChange={this.handleChange} id='question' value={this.state.question} type='text' name='input_question'/>
                        </label>
                        <label>Type
                            <select onChange={this.handleChange} id='chosen' value={this.state.chosen}>
                                <option value='Yes/No'>YES/NO</option>
                                <option value='Text'>Text</option>
                                <option value='Number'>Number</option>
                            </select>
                        </label>
                    </form>
                </div>
            )
    }
}

export default AddInput;