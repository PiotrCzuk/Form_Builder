import React from 'react';


class AddInput extends React.Component {
    render() {
        if (this.props.info == false) {
            return null
        }else {
            return (
                <div>
                    <form>
                        <label>Question
                            <input type='text' name='input_question'/>
                        </label>
                        <label>Type
                            <select>
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
}

export default AddInput;