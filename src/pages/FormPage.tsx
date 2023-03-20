import React, { Component } from 'react';
import InputComponent from "../components/Elements/Input/InputComponent";


class FormPage extends Component {

    state = {
        firstName: '',
        lastName: '',
        zipCode: '',
        deliveryDate: '',
        birthDay: '',
        country: '',
        state: '',
        acceptPersonalData: false,
        gender: '',
        isReceivePromo: false,
        profileImage: '',
        formList: [],
    }

    submitData = () => {
        console.log('this.state', this.state)
        // this.setState({value: event.target.value})
    }

    handleChange = () => {
        // this.setState({value: event.target.value})
    }

    render() {
        const { firstName } = this.state;
        return (
            <>
                <h1 className="title mb-6" data-testid="pageTitle">FORM PAGE</h1>
                <InputComponent value={firstName} handleChange={this.handleChange}/>
                <button onClick={this.submitData}>Submit Data</button>
            </>
        );
    }
}

export default FormPage;