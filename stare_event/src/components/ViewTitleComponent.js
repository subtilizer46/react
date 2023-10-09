import React from 'react';

class ViewTitleComponent extends React.Component {
    // Define Constructor
    constructor(props){
        super(props);
        this.state ={
            inputValue: ''
        }
    }

    // Define handleValChange method
    handleValChange = (e) => {
        this.setState({ inputValue: e.target.value });
        this.props.onChange(e);
        
    }

    render() {
        return (
            <div className="ViewTitleComponent">
                <form>
                    <div>
                        <label>View Title:</label>
                        {/* Define input field to handle changes */}
                        <input type="text" value={this.state.inputValue} onChange={this.handleValChange} />
                    </div>
                </form>
                <p>Title value: {this.props.input}</p>
            </div>
        );
    }
}
export default ViewTitleComponent;