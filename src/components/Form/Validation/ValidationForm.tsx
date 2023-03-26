import React, { Component } from 'react';
import IState from '../../../models/IState';

type MyProps = {
    textError: string,
};
class ValidationForm extends Component<MyProps, IState> {
    render() {
        const { textError } = this.props;
        return (
            <div data-testid="formError">
                <p className="text-red-500 text-xs mt-2 app-form__validation">
                    { textError }
                </p>
            </div>
        );
    }
}

export default ValidationForm;