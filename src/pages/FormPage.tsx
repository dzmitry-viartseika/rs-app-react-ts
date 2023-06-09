import React from 'react';
import FormItem from "../components/Form/FormItem";
import IFormItem from '../models/IFormItem';
import InputComponent from "../components/Elements/InputComponent/InputComponent";
import CheckboxComponent from "../components/Elements/CheckboxComponent/CheckboxComponent";
import SelectComponent from "../components/Elements/SelectComponent/SelectComponent";
import statesList from "../constants/statesList";
import countryList from "../constants/countryList";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import genderList from "../constants/genderList";
import {useDispatch, useSelector} from "react-redux";
import {setFormCards} from "../store/formCardsSlice";
import {RootState} from "../store/store";

export interface IState {
    userForm: {
        userList: IFormItem[],
    };
}

function FormPage(): JSX.Element {
    const dispatch = useDispatch();
    const formListArray = useSelector((state: RootState) => state.formCards.userList);
    const { register, reset, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            zipCode: '',
            deliveryDate: '',
            birthDay: '',
            selectedFile: null,
            selectedOptionGender: '',
            selectedOptionCountry: '',
            selectedOptionState: '',
            isAgreedWithPersonalData: false,
            isReceivePromo: false,
        }
    });
    const onSubmit: SubmitHandler<IFormItem> = (data) => {
        const file = (data.selectedFile as FileList)[0] as File;
        const newUser = {
            ...data,
            selectedFile: file,
            id: Math.random().toString(16),
        } as IFormItem;
        dispatch(setFormCards(newUser))
        alert('The form has been sent!');
        reset();
    };

    return (
        <div data-cy="formText">
            <h1 className="title mb-6" data-cy="pageTitle" data-testid="pageTitle">FORM PAGE</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="app-form">
                <div className="flex justify-center align-items flex-col">
                    <Controller control={control} name="firstName" rules={{
                        required: 'FirstName is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error} }) => (
                            <>
                                <InputComponent
                                    label={'firstName'}
                                    type={'text'}
                                    value={value}
                                    onChange={(newValue) => onChange(newValue)}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>

                    <Controller control={control} name="lastName" rules={{
                        required: 'LastName is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error} }) => (
                            <>
                                <InputComponent
                                    label={'lastName'}
                                    type={'text'}
                                    value={value}
                                    onChange={(newValue) => onChange(newValue)}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>


                    <Controller control={control} name="zipCode" rules={{
                        required: 'ZipCode is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error} }) => (
                            <>
                                <InputComponent
                                    label={'zipCode'}
                                    type={'text'}
                                    value={value}
                                    onChange={(newValue) => onChange(newValue)}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>

                    <Controller control={control} name="deliveryDate" rules={{
                        required: 'deliveryDate is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error} }) => (
                            <>
                                <InputComponent
                                    label={'deliveryDate'}
                                    type={'date'}
                                    value={value}
                                    onChange={(newValue) => onChange(newValue)}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>

                    <Controller control={control} name="birthDay" rules={{
                        required: 'birthDay is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error} }) => (
                            <>
                                <InputComponent
                                    label={'birthDay'}
                                    type={'date'}
                                    value={value}
                                    onChange={(newValue) => onChange(newValue)}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>

                    <Controller control={control} name="isAgreedWithPersonalData" rules={{
                        required: 'isAgreedWithPersonalData is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error} }) => (
                            <>
                                <CheckboxComponent
                                    id="isAgreedWithPersonalData"
                                    label={'I consist to my personal data'}
                                    checked={value}
                                    onChange={(newValue) => onChange(newValue)}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>

                    <Controller control={control} name="isReceivePromo" rules={{
                        required: 'isReceivePromo is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error} }) => (
                            <>
                                <CheckboxComponent
                                    id="isReceivePromo"
                                    label={'Receive Promo'}
                                    checked={value}
                                    onChange={(newValue) => onChange(newValue)}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>

                    <Controller control={control} name="selectedOptionGender" rules={{
                        required: 'selectedOptionGender is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error} }) => (
                            <>
                                <SelectComponent
                                    id="selectedOptionGender"
                                    error={errors.selectedOptionGender}
                                    register={register('selectedOptionGender')}
                                    label="Select Gender"
                                    value={value}
                                    onChange={(newValue) => onChange(newValue)}
                                    items={genderList}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>


                    <Controller control={control} name="selectedOptionCountry" rules={{
                        required: 'selectedOptionCountry is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error} }) => (
                            <>
                                <SelectComponent
                                    id="selectedOptionCountry"
                                    register={register('selectedOptionCountry')}
                                    label="Select Country"
                                    value={value}
                                    onChange={(newValue) => onChange(newValue)}
                                    items={countryList}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>

                    <Controller control={control} name="selectedOptionState" rules={{
                        required: 'selectedOptionState is required',
                    }} render={
                        ({ field: {onChange, value}, fieldState: {error}}) => (
                            <>
                                <SelectComponent
                                    id="selectedOptionState"
                                    register={register('selectedOptionState')}
                                    label="Select State"
                                    value={value}
                                    onChange={(newValue) => onChange(newValue)}
                                    items={statesList}
                                />
                                {
                                    error && (
                                        <div data-cy="formError">
                                            <p className="text-red-500 text-xs mt-2 app-form__validation">
                                                { error.message }
                                            </p>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }>
                    </Controller>

            <div className="my-3">
                Profile Image
                <input
                    {...register("selectedFile", { required: true })}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help" id="file_input"  accept="image/*" type="file"/>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG,
                    PNG, JPG or GIF (MAX. 800x400px).</p>
                {errors.selectedFile && <div data-cy="formError">
                    <p className="text-red-500 text-xs mt-2 app-form__validation">
                        The file is required
                    </p>
                </div>}
            </div>
                    <button
                    type="submit"
                    data-cy="button--submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Submit Data
                    </button>
                </div>
            </form>
            <div className="my-10 flex flex-wrap" data-cy="formList">
                {formListArray && formListArray.length ? formListArray.map((item: IFormItem, index: number) => {
                    return <FormItem item={item} key={index}/>
                }) : <div>FormList is empty</div>}
            </div>
        </div>
    )
}


export default FormPage;