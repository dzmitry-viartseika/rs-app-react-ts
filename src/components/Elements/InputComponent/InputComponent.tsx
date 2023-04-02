import React, {ChangeEventHandler }  from 'react';
import ValidationForm from "../../Form/Validation/ValidationForm";

type InputProps = {
    label: string,
    type: string,
    value: string,
    errorMessage?: string,
    className?: string,
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
const InputComponent = ({ value, label, type, className, placeholder, onChange, errorMessage }: InputProps) => {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={label}>
                <div>{label}</div>
                <input
                    id={label}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={`${className} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
                    placeholder={placeholder}
                />
            </label>
            { errorMessage ? <ValidationForm textError={errorMessage} /> : null }
        </div>
    )
};

export default InputComponent;