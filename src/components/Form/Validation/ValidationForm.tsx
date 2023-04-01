import React from 'react';

type MyProps = {
    textError: string,
};

function ValidationForm (props: MyProps): JSX.Element {

    return (
        <div data-testid="formError">
            <p className="text-red-500 text-xs mt-2 app-form__validation">
                { props.textError }
            </p>
        </div>
    )
}

export default ValidationForm;