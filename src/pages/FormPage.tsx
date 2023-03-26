import React, { Component } from 'react';
import FormItem from "../components/Form/FormItem";
import IFormItem from '../models/IFormItem';
import ValidationForm from "../components/Form/Validation/ValidationForm";
class FormPage extends Component {

    state = {
        firstName: '',
        lastName: '',
        zipCode: '',
        deliveryDate: '',
        birthDay: '',
        country: '',
        state: '',
        acceptPersonalData: '',
        gender: '',
        isReceivePromo: '',
        profileImage: null,
        formList: [],
        firstNameError: '',
        lastNameError: '',
        zipCodeError: '',
        deliveryDateError: '',
        birthDayError: '',
        genderError: '',
        countryError: '',
        stateError: '',
        isReceivePromoError: '',
        acceptPersonalDataError: '',
        profileImageError: '',
    }

    componentDidMount() {
        const formDataList = localStorage.getItem('formDataList');
        if (formDataList) {
            const result = JSON.parse(formDataList)
            this.setState({ formList: result })
        }
    }

    submitData = () => {
        const { firstName, lastName, zipCode, deliveryDate, birthDay, country, state, acceptPersonalData, gender, isReceivePromo, profileImage, formList } = this.state;
        if (
            firstName &&
            lastName &&
            firstName[0] === firstName[0].toUpperCase() &&
            lastName[0] === lastName[0].toUpperCase() &&
            zipCode &&
            deliveryDate &&
            birthDay &&
            acceptPersonalData &&
            isReceivePromo &&
            gender &&
            country &&
            state
        ) {
            const result = {
                firstName,
                lastName,
                country,
                state,
                gender,
                birthDay,
                zipCode,
                deliveryDate,
                acceptPersonalData,
                isReceivePromo,
                profileImage,
                id: Math.random().toString(16),
            } as IFormItem;
            this.setState({
                formList: [...formList, result],
            });
            const list = JSON.stringify([...this.state.formList, result])
            localStorage.setItem('formDataList', list)
            alert('The form has been sent!');
        } else {
            alert('The form has not been sent');
            if (!firstName) {
                this.setState({firstNameError: 'Enter FirstName'})
            }
            if (firstName && firstName[0] !== firstName.toUpperCase()) {
                this.setState({firstNameError: 'Enter First letter UpperCase'})
            }
            if (lastName && lastName[0] !== lastName.toUpperCase()) {
                this.setState({lastNameError: 'Enter First letter UpperCase'})
            }
            if (!lastName) {
                this.setState({lastNameError: 'Enter LastName'})
            }
            if (!zipCode) {
                this.setState({zipCodeError: 'Enter ZipCode'})
            }
            if (!deliveryDate) {
                this.setState({deliveryDateError: 'Select Delivery Date'})
            }
            if (!birthDay) {
                this.setState({birthDayError: 'Select BirthDate'})
            }
            if (!gender) {
                this.setState({genderError: 'Enter Gender'})
            }
            if (!acceptPersonalData) {
                this.setState({acceptPersonalDataError: 'Accept personal Data'})
            }
            if (!isReceivePromo) {
                this.setState({isReceivePromoError: 'Receive promos'})
            }
            if (!country) {
                this.setState({countryError: 'Select country'})
            }
            if (!state) {
                this.setState({stateError: 'Select country'})
            }
            if (!birthDay) {
                this.setState({birthDayError: 'Enter birthday'})
            }
            if (!deliveryDate) {
                this.setState({deliveryDateError: 'Enter Delivery Date'})
            }
            if (!profileImage) {
                this.setState({profileImageError: 'Set up profileImage'})
            }
        }
    }

    handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        const { value } = target;
        this.setState({
            firstName: value,
        });
    }

    handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        const { value } = target;
        this.setState({
            lastName: value,
        });
    }

    handleChangeZipCode = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        const { value } = target;
        this.setState({
            zipCode: value,
        });
    }

    handleChangeDeliveryDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        const { value } = target;
        this.setState({
            deliveryDate: value,
        });
    }

    handleChangeBirthDay = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        const { value } = target;
        this.setState({
            birthDay: value,
        });
    }

    handleCheckAcceptPersonalData = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        const { value } = target;
        this.setState({
            acceptPersonalData: value,
        });
    }

    handleCheckIsReceivePromo = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        const { value } = target;
        this.setState({
            isReceivePromo: value,
        })
    }

    handleSelectCountry = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const target = event.target as HTMLSelectElement;
        const { value } = target;
        this.setState({
            country: value,
        });
    }

    handleSelectState = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const target = event.target as HTMLSelectElement;
        const { value } = target;
        this.setState({
            state: value,
        });
    }

    handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        const { value } = target;
        this.setState({
            gender: value,
        });
    }

     handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files) {
            this.setState({
                profileImage: event.target.files[0]
            })
        }
    };

    render() {
        const { formList } = this.state;
        return (
            <div>
                <h1 className="title mb-6" data-testid="pageTitle">FORM PAGE</h1>
                <div className="app-form">
                    <div className="flex justify-center align-items flex-col">
                        <div className="mb-4">
                            <label htmlFor="small-input"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FirstName</label>
                            <input type="text"
                                   id="small-input"
                                   data-testid="firstnameInput"
                                   value={this.state.firstName}
                                   name="firstName" onChange={this.handleChangeFirstName}
                                   className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            { !this.state.firstName || this.state.firstName[0] !== this.state.firstName[0].toUpperCase() ? <ValidationForm textError={this.state.firstNameError} /> : null }

                        </div>
                        <div className="mb-4">
                            <label htmlFor="small-input"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LastName</label>
                            <input type="text"
                                   id="small-input"
                                   value={this.state.lastName} name="lastName" onChange={this.handleChangeLastName}
                                   className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            { !this.state.lastName || this.state.lastName[0] !== this.state.lastName[0].toUpperCase() ? <ValidationForm textError={this.state.lastNameError} /> : null }

                        </div>
                        <div className="mb-4">
                            <label htmlFor="small-input"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZipCode</label>
                            <input type="text"
                                   id="small-input"
                                   value={this.state.zipCode} name="zipCode" onChange={this.handleChangeZipCode}
                                   className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            { !this.state.zipCode ? <ValidationForm textError={this.state.zipCodeError} /> : null }
                        </div>
                        <div className="mb-4">
                            <label htmlFor="small-input"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivery Date</label>
                            <input type="date"
                                   id="small-input"
                                   value={this.state.deliveryDate} name="deliveryDate" onChange={this.handleChangeDeliveryDate}
                                   className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            { !this.state.deliveryDate ? <ValidationForm textError={this.state.deliveryDateError} /> : null }
                        </div>
                        <div className="mb-4">
                            <label htmlFor="small-input"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BirthDay</label>
                            <input type="date"
                                   id="small-input"
                                   value={this.state.birthDay} name="birthDay" onChange={this.handleChangeBirthDay}
                                   className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            { !this.state.birthDay ? <ValidationForm textError={this.state.birthDayError} /> : null }
                        </div>
                        <div className="mb-4">
                            <input id="checked-checkbox" type="checkbox" checked={!!this.state.acceptPersonalData} name="acceptPersonalData" onChange={this.handleCheckAcceptPersonalData}
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checked-checkbox"
                                       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I consent to my personal data</label>
                            { !this.state.acceptPersonalData ? <ValidationForm textError={this.state.acceptPersonalDataError} /> : null }
                        </div>
                        <div className="mb-4">
                            <input id="checked-checkbox1" type="checkbox" checked={!!this.state.isReceivePromo} name="isReceivePromo" onChange={this.handleCheckIsReceivePromo}
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checked-checkbox1"
                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receive Promo</label>
                            { !this.state.gender ? <ValidationForm textError={this.state.isReceivePromoError} /> : null }
                        </div>
                        <div className="mb-4">
                            <input className="mx-1" type="radio" value="Male" name="gender" onChange={this.handleChangeGender} /> Male
                            <input className="mx-1" type="radio" value="Female" name="gender" onChange={this.handleChangeGender} /> Female
                            { !this.state.gender ? <ValidationForm textError={this.state.genderError}/> : null }
                        </div>
                        <div className="mb-4">
                            <label htmlFor="countries"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
                                option</label>
                            <select id="countries"
                                    value={this.state.country} onChange={this.handleSelectCountry}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                            { !this.state.country ? <ValidationForm textError={this.state.countryError}/> : null }
                        </div>
                        <div className="mb-4">
                            <label htmlFor="state"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
                                option</label>
                            <select id="state"
                                    value={this.state.state} onChange={this.handleSelectState}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Choose state</option>
                                <option value="state1">state 1</option>
                                <option value="state2">state 2</option>
                                <option value="state3">state 3</option>
                                <option value="state4">state 4</option>
                            </select>
                            { !this.state.state ? <ValidationForm textError={this.state.stateError}/> : null }
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                   htmlFor="file_input">Upload file</label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="file_input_help" id="file_input"  accept="image/*" type="file" onChange={this.handleFileChange}/>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG,
                                    PNG, JPG or GIF (MAX. 800x400px).</p>
                            { !this.state.profileImage ? <ValidationForm textError={this.state.profileImageError}/> : null }
                        </div>
                        <button type="button"
                                onClick={this.submitData}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit Data
                        </button>
                    </div>
                </div>
                <div className="my-10" data-testid="formList">
                    {formList && formList.length ? formList.map((item: IFormItem) => {
                        return <FormItem item={item} />
                    }) : <h5 data-testid="formText">You can add your first data</h5>}
                </div>
            </div>
        );
    }
}

export default FormPage;