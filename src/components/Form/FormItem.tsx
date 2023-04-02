import React from 'react';
import IFormItem from "../../models/IFormItem";
import classes from '../Form/formItem.module.css'
import CheckboxComponent from "../Elements/CheckboxComponent/CheckboxComponent";


export default FormItem;
type MyProps = {
    item: IFormItem,
};
function FormItem(props: MyProps): JSX.Element {

    return (
        <div className={`${classes.form__item} flex flex-col mb-8`} data-testid="formItem">
            <div className="px-5">
                { props.item.firstName }
            </div>
            <div className="px-5">
                { props.item.lastName }
            </div>
            <div className="px-5">
                { props.item.zipCode }
            </div>
            <div className="px-5">
                { props.item.deliveryDate }
            </div>
            <div className="px-5">
                { props.item.birthDay }
            </div>
            <div className="px-5">
                { props.item.selectedOptionCountry }
            </div>
            <div className="px-5">
                { props.item.selectedOptionState }
            </div>
            <div className="px-5">
                <CheckboxComponent
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
                    label={'Receive Promo'}
                    checked={props.item.isReceivePromo}
                    disabled={true}
                />
            </div>
            {
                    props.item.selectedFile ? <img src={URL.createObjectURL(props.item.selectedFile)} data-testid="formItemFileImage" alt="uploaded file" />: null
            }
        </div>
    )
}