import React from 'react';
import IFormItem from "../../models/IFormItem";
import classes from '../Form/formItem.module.css'
import CheckboxComponent from "../Elements/CheckboxComponent/CheckboxComponent";


export default FormItem;
type MyProps = {
    item: IFormItem,
};
function FormItem(props: MyProps): JSX.Element {
    const imgSrc = props.item.selectedFile ? URL.createObjectURL(props.item.selectedFile) : '';
    return (
        <div className={`${classes.form__item} flex flex-col mb-8`} data-testid="formItem">
            <div className="px-5" data-testid="firstName">
                { props.item.firstName }
            </div>
            <div className="px-5" data-testid="lastName">
                { props.item.lastName }
            </div>
            <div className="px-5" data-testid="zipCode">
                { props.item.zipCode }
            </div>
            <div className="px-5" data-testid="deliveryDate">
                { props.item.deliveryDate }
            </div>
            <div className="px-5" data-testid="birthDay">
                { props.item.birthDay }
            </div>
            <div className="px-5" data-testid="selectedOptionCountry">
                { props.item.selectedOptionCountry }
            </div>
            <div className="px-5" data-testid="selectedOptionState">
                { props.item.selectedOptionState }
            </div>
            <div className="px-5">
                <CheckboxComponent
                    id="isAgreedWithPersonalData"
                    label={'I consist to my personal data'}
                    checked={props.item.isAgreedWithPersonalData }
                    disabled={true}
                />
            </div>
            <div className="px-5">
                { props.item.selectedOptionGender }
            </div>
            <div className="px-5">
                <CheckboxComponent
                    id="isReceivePromo"
                    label={'Receive Promo'}
                    checked={props.item.isReceivePromo}
                    disabled={true}
                />
            </div>
            {
                imgSrc && <img src={imgSrc} data-testid="formItemFileImage" alt="uploaded file" />
            }
        </div>
    )
}