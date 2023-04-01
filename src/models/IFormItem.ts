export default interface IFormItem {
    id?: string,
    firstName: string;
    lastName: string;
    zipCode: string;
    deliveryDate: string;
    birthDay: string;
    selectedOptionCountry: string;
    selectedOptionState: string;
    isAgreedWithPersonalData: boolean,
    selectedOptionGender: string,
    isReceivePromo: boolean,
    selectedFile: null | File;
}