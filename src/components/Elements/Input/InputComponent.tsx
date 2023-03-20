import React, { Component } from 'react';
import './inputComponent.css';
class InputComponent extends Component {

    constructor(props: string) {
        super(props);
        console.log('props', this.props)
        // this.state = {value: ''};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateValue(event: any) {
        console.log('event', event.target.value)
    }


    // handleChange(event: any) {
    //     console.log('event', event)
    //     this.setState({value: event.target.value})
    // }
    //
    // handleSubmit(event: any) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        const { value } = this.props;
        // {/*value={value}*/}
        // onChange={this.handleChange}
        return (
            <>
                <div className="floating-label">
                    <input
                        placeholder="Placeholder"
                        className="floating-label__input"
                        value={value}
                        onInput={this.updateValue}
                    />
                    <label className="floating-label__label">Placeholder</label>
                </div>
            </>
        );
    }
}

export default InputComponent;