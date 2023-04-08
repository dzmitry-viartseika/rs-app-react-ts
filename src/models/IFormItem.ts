
export default interface IFormItem {
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
    selectedFile?: FileList | File | Blob | MediaSource | undefined | null;
}