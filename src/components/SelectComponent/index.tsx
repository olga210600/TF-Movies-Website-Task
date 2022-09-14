import React, {useCallback} from "react";
import {ISelectComponent} from "./type";
import {Select} from "./style";

const SelectComponent: React.FC<ISelectComponent> = ({options, value, field: {name}, form: {setFieldValue}}) => {
    const handleChange = useCallback((e) => {

        if (e.target.value) {
            setFieldValue(name, e.target.value);
        }
    }, [name, setFieldValue]);

    return (

        <Select onChange={handleChange}>
            {
                options.map((option, index) => (
                    <option key={index} value={option.value} selected={value === option.value}>{option.label}</option>
                ))
            }
        </Select>
    )
}

export default SelectComponent