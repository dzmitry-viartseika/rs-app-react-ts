import React, { useState, ChangeEvent} from 'react';
import FormItem from "../components/Form/FormItem";
import IFormItem from '../models/IFormItem';
import ValidationForm from "../components/Form/Validation/ValidationForm";
import InputComponent from "../components/Elements/InputComponent/InputComponent";
import CheckboxComponent from "../components/Elements/CheckboxComponent/CheckboxComponent";
import SelectComponent from "../components/Elements/SelectComponent/SelectComponent";
import ButtonComponent from "../components/Elements/ButtonComponent/ButtonComponent";
import statesList from "../constants/statesList";
import countryList from "../constants/countryList";

function FormPage(): JSX.Element {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [birthDay, setBirthday] = useState('');
    const [isAgreedWithPersonalData, setIsAgreedWithPersonalData] = useState(false);
    const [isReceivePromo, setIsReceivePromo] = useState(false);
    const [selectedOptionGender, setSelectedOptionGender] = useState('');
    const [selectedOptionCountry, setSelectedOptionCountry] = useState('');
    const [selectedOptionState, setSelectedOptionState] = useState('');
    const [selectedFile, setSelectedFile] = useState<null | File>(null);
    const [errorMessageFirstName, setErrorMessageFirstName] = useState('');
    const [errorMessageLastName, setErrorMessageLastName] = useState('');
    const [errorMessageZipCode, setErrorMessageZipCode] = useState('');
    const [errorMessageDeliveryDate, setErrorMessageDeliveryDate] = useState('');
    const [errorMessageBirthday, setErrorMessageBirthday] = useState('');
    const [errorMessageWithPersonalData, setErrorMessageWithPersonalData] = useState('');
    const [errorMessageIsReceivePromo, setErrorMessageIsReceivePromo] = useState('');
    const [errorMessageGender, setErrorMessageGender] = useState('');
    const [errorMessageCountry, setErrorMessageCountry] = useState('');
    const [errorMessageState, setErrorMessageState] = useState('');
    const [errorMessageFile, setErrorMessageFile] = useState('');
    const [formList, setFormList] = useState<IFormItem[]>([]);

    const onChangeHandlerFirstName = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setFirstName((target.value));
        // validate input value
        if (target.value.length < 3) {
            setErrorMessageFirstName('Input must be at least 3 characters long');
        } else {
            setErrorMessageFirstName('');
        }
    }

    const onChangeHandlerLastName = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setLastName((target.value));
        if (target.value.length < 3) {
            setErrorMessageLastName('Input must be at least 3 characters long');
        } else {
            setErrorMessageLastName('');
        }
    }

    const onChangeHandlerZipCode = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setZipCode((target.value));
        if (target.value.length < 3) {
            setErrorMessageZipCode('Input must be at least 2 characters long');
        } else {
            setErrorMessageZipCode('');
        }
    }

    const onChangeHandlerDeliveryDate = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setDeliveryDate((target.value))
        if (!target.value) {
            setErrorMessageDeliveryDate('Input must be fulfilled');
        } else {
            setErrorMessageDeliveryDate('');
        }
    }

    const onChangeHandlerBirthday = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setBirthday((target.value))
        if (!target.value) {
            setErrorMessageBirthday('Input must be fulfilled');
        } else {
            setErrorMessageBirthday('');
        }
    }

    const onChangeHandlerisAgreedWithPersonalData = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setIsAgreedWithPersonalData(target.checked);
        if (!target.checked) {
            setErrorMessageWithPersonalData('Input must be fulfilled');
        } else {
            setErrorMessageWithPersonalData('');
        }
    }

    const onChangeHandlerReceivePromo = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setIsReceivePromo(target.checked);
        if (!target.checked) {
            setErrorMessageIsReceivePromo('Input must be fulfilled');
        } else {
            setErrorMessageIsReceivePromo('');
        }
    }

    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setSelectedOptionGender(target.value);
        if (!target.value) {
            setErrorMessageGender('Input must be fulfilled');
        } else {
            setErrorMessageGender('');
        }
    }

    const handleOptionChangeCountry = (event: ChangeEvent<HTMLSelectElement>): void => {
        setSelectedOptionCountry(event.target.value);
        if (!event.target.value) {
            setErrorMessageCountry('Input must be fulfilled');
        } else {
            setErrorMessageCountry('');
        }
    }

    const handleOptionChangeState = (event: ChangeEvent<HTMLSelectElement>): void => {
        setSelectedOptionState(event.target.value);
        if (!event.target.value) {
            setErrorMessageState('Input must be fulfilled');
        } else {
            setErrorMessageState('');
        }
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        console.log('file', file)
        setSelectedFile(file);
        if (!file) {
            setErrorMessageFile('Input must be fulfilled');
        } else {
            setErrorMessageFile('');
        }
    }

    const handleClickEvent = () => {
        const result = {
            firstName,
            lastName,
            zipCode,
            deliveryDate,
            birthDay,
            isAgreedWithPersonalData,
            isReceivePromo,
            selectedFile,
            selectedOptionCountry,
            selectedOptionGender,
            selectedOptionState,
            id: Math.random().toString(16),
        }

        if (firstName &&
            lastName &&
            zipCode &&
            deliveryDate &&
            birthDay &&
            isAgreedWithPersonalData &&
            isReceivePromo &&
            selectedFile &&
            selectedOptionCountry &&
            selectedOptionGender &&
            selectedOptionState) {
            setFormList([...formList, result])
            alert('The form has been sent!');
            resetFormState();

        } else {
            if(!firstName) {
                setErrorMessageFirstName('The field is required')
            }
            if (firstName && firstName[0] !== firstName.toUpperCase()) {
                setErrorMessageFirstName('Enter First letter UpperCase')
            }
            if(!lastName) {
                setErrorMessageLastName('The field is required')
            }
            if (lastName && lastName[0] !== lastName.toUpperCase()) {
                setErrorMessageLastName('Enter First letter UpperCase')
            }
            if(!zipCode) {
                setErrorMessageZipCode('The field is required')
            }
            if(!deliveryDate) {
                setErrorMessageDeliveryDate('The field is required')
            }
            if(!birthDay) {
                setErrorMessageBirthday('The field is required')
            }
            if(!isAgreedWithPersonalData) {
                setErrorMessageWithPersonalData('The field is required')
            }
            if(!isReceivePromo) {
                setErrorMessageIsReceivePromo('The field is required')
            }
            if(!selectedOptionGender) {
                setErrorMessageGender('The field is required')
            }
            if(!selectedOptionCountry) {
                setErrorMessageCountry('The field is required')
            }
            if(!selectedOptionState) {
                setErrorMessageState('The field is required')
            }
            if(!selectedFile) {
                setErrorMessageFile('The field is required')
            }
            alert('The form has not been sent');
        }
    }

    const resetFormState = () => {
        setFirstName('')
        setLastName('')
        setZipCode('')
        setDeliveryDate('')
        setBirthday('')
        setIsAgreedWithPersonalData(false)
        setIsReceivePromo(false)
        setSelectedOptionGender('')
        setSelectedOptionCountry('')
        setSelectedOptionState('')
        setSelectedFile(null)
    }

    return (
        <div data-testid="formText">
            <h1 className="title mb-6" data-testid="pageTitle">FORM PAGE</h1>
            <div className="app-form">
                <div className="flex justify-center align-items flex-col">
            <InputComponent
                label={'First Name'}
                type={'text'}
                value={firstName}
                errorMessage={errorMessageFirstName}
                onChange={onChangeHandlerFirstName}
            />

            <InputComponent
                label={'Last Name'}
                type={'text'}
                value={lastName}
                errorMessage={errorMessageLastName}
                onChange={onChangeHandlerLastName}
            />

            <InputComponent
                label={'Zip Code'}
                type={'text'}
                value={zipCode}
                errorMessage={errorMessageZipCode}
                onChange={onChangeHandlerZipCode}
            />

            <InputComponent
                label={'Delivery Date'}
                type={'date'}
                value={deliveryDate}
                errorMessage={errorMessageDeliveryDate}
                onChange={onChangeHandlerDeliveryDate}
            />

            <InputComponent
                label={'Birthday'}
                type={'date'}
                value={birthDay}
                errorMessage={errorMessageBirthday}
                onChange={onChangeHandlerBirthday}
            />

            <CheckboxComponent
                label={'I consist to my personal data'}
                checked={isAgreedWithPersonalData}
                errorMessage={errorMessageWithPersonalData}
                onChange={onChangeHandlerisAgreedWithPersonalData}
            />

            <CheckboxComponent
                label={'Receive Promo'}
                checked={isReceivePromo}
                errorMessage={errorMessageIsReceivePromo}
                onChange={onChangeHandlerReceivePromo}
            />

            <label className="mb-2">
                <input
                    type="radio"
                    name="option"
                    value="Male"
                    checked={selectedOptionGender === 'Male'}
                    onChange={handleOptionChange}
                />
                <span className="ml-1">Male</span>
            </label>

            <label>
                <input
                    type="radio"
                    name="option"
                    value="Female"
                    checked={selectedOptionGender === 'Female'}
                    onChange={handleOptionChange}
                />
                <span className="ml-1">Female</span>
            </label>

            <ValidationForm textError={errorMessageGender} />

            <SelectComponent
                label="Select Country"
                value={selectedOptionCountry}
                onChange={handleOptionChangeCountry}
                errorMessage={errorMessageCountry}
                items={countryList}
            />

            <SelectComponent
                label="Select State"
                value={selectedOptionState}
                onChange={handleOptionChangeState}
                errorMessage={errorMessageState}
                items={statesList}
            />

            <div className="my-3">
                Profile Image
                <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help" id="file_input"  accept="image/*" type="file" onChange={handleFileChange}/>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG,
                    PNG, JPG or GIF (MAX. 800x400px).</p>
                <ValidationForm textError={errorMessageFile} />
            </div>

            <ButtonComponent
                type="submit"
                buttonText={'Submit Data'}
                onClick={handleClickEvent}
            />

                </div>
            </div>
            <div className="my-10 flex flex-wrap" data-testid="formList">
                {formList && formList.length ? formList.map((item: IFormItem) => {
                    return <FormItem item={item} key={item.id}/>
                }) : null}
            </div>
        </div>
    )
}


export default FormPage;