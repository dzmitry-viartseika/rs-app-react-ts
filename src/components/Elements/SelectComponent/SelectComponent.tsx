import React, {ChangeEvent} from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';

interface ISelectListItem {
    value: string,
    name: string,
}

type ISelectProps = {
    id: string,
    items: ISelectListItem[],
    value: string,
    register: UseFormRegisterReturn,
    label: string,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
function SelectComponent ({ id, items, label, register }: ISelectProps) {
    return (
        <div>
            <label>
                { label }
                <select id={id}  {...register} defaultValue="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">Select an option</option>
                    { items.map((item: ISelectListItem) => {
                       return <option key={item.value} value={item.value}>{item.name}</option>
                    }) }
                </select>
            </label>
        </div>
    );
}

export default SelectComponent;