import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset'

type ButtonProps = {
    children?: string;
    buttonText: string,
    type?: ButtonType,
    disabled?: boolean,
    onClick: () => void;
}
const ButtonComponent = ({ buttonText, type, disabled = false, onClick }: ButtonProps) => {
    return (
        <button type={type} disabled={disabled} onClick={onClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            { buttonText }
        </button>
    )
};

export default ButtonComponent;