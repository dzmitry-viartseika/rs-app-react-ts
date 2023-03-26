export default interface IFormItem {
    id?: string,
    firstName: string;
    lastName: string;
    zipCode: string;
    deliveryDate: string;
    birthDay: string;
    country: string;
    state: string;
    acceptPersonalData: string,
    gender: string,
    isReceivePromo: string,
    profileImage: File | null;
}
export default interface IForm {
    firstName: string;
    lastName: string;
    zipCode: string;
    deliveryDate: string;
    birthDay: string;
    country: string;
    state: string;
    acceptPersonalData: string,
    gender: string,
    isReceivePromo: string,
    profileImage: File | null;
    formList: IFormItem[],
    firstNameError: string;
    lastNameError: string;
    zipCodeError: string;
    deliveryDateError: string;
    birthDayError: string;
    genderError: string;
    countryError: string;
    stateError: string;
    isReceivePromoError: string;
    acceptPersonalDataError: string;
}

