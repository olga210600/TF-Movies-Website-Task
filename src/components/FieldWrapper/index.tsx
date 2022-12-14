import React             from 'react';
import { Field }         from "formik";
import { IFieldWrapper } from "./type";
import {
    ErrorMessage,
    FormField
}                        from "../ModalWindow/style";


const FieldWrapper: React.FC<IFieldWrapper> = ({
    fieldName,
    fieldId,
    fieldLabel,
    placeholder,
    errors,
    touched
}) => {
    return (
        <FormField isError={errors[fieldName] && touched[fieldName]}>
          <label htmlFor={fieldName}>{fieldLabel}</label>

          <Field id={fieldId} name={fieldName} placeholder={placeholder}/>

          {errors[fieldName] && touched[fieldName] && (
              <ErrorMessage>{errors[fieldName]}</ErrorMessage>
          )}
        </FormField>
    );
};

export default FieldWrapper;