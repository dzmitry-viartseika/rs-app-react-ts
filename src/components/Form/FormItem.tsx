import React, { Component } from 'react';
import IState from '../../models/IState';
import IFormItem from "../../models/IFormItem";

type MyProps = {
    item: IFormItem,
};
class FormItem extends Component<MyProps, IState> {
    render() {
        const { item: { firstName, lastName, zipCode, deliveryDate, birthDay, country, state, acceptPersonalData, gender, isReceivePromo } } = this.props;
        return (
            <div className="flex justify-center items-center mb-8" data-testid="formItem">
                <div className="w-40 px-5">
                    { firstName }
                </div>
                <div className="w-40 px-5">
                    { lastName }
                </div>
                <div className="w-40 px-5">
                     { zipCode }
                </div>
                <div className="w-40 px-5">
                     { deliveryDate }
                </div>
                <div className="w-40 px-5">
                    { birthDay }
                </div>
                <div className="w-40 px-5">
                     { country }
                </div>
                <div className="w-40 px-5">
                    { state }
                </div>
                <div className="w-40 px-5">
                    {acceptPersonalData }
                </div>
                <div className="w-40 px-5">
                    { gender }
                </div>
                <div className="w-40 px-5">
                     {isReceivePromo }
                </div>
            </div>
        );
    }
}

export default FormItem;