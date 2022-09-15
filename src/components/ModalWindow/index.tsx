import React, { useMemo }      from 'react';
import { Formik, Field, Form } from "formik";
import { validateSchema }      from "./schema";
import { v4 as uuidv4 }        from 'uuid';
import isEmpty                 from 'lodash/isEmpty';
import FieldWrapper            from "../FieldWrapper";
import { IModalWindow }        from "./type";
import SelectComponent         from "../SelectComponent";
import {
    CurrentBtnWrapper,
    CloseBtn,
    ModalContent,
    Modal,
    Header,
    CurrentBtn,
    ErrorMessage,
    FormField
}                              from './style'

const getInitialValues = (data) => ({
    name        : data?.name ?? "",
    image       : data?.image ?? "",
    year        : data?.year ?? "",
    genre       : data?.genre ?? "",
    description : data?.description ?? "",
    director    : data?.director ?? "",
    video       : data?.video ?? "",
    id          : data?.id ?? uuidv4(),
});

const ModalWindow: React.FC<IModalWindow> = ({
     date,
     options,
     currentFunction,
     currentButton,
     handleClose
}) => {

    const initialValues = useMemo(() => getInitialValues(date), [date]);

    return (
        <Modal>
            <ModalContent>
                <div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={() => {
                        }}
                        validationSchema={validateSchema}
                        validateOnMount
                    >

                        { ({values, errors, touched}) => {

                            return (
                                <Form>
                                    <Header>Fill in the movie fields</Header>

                                    <FieldWrapper fieldName='name'
                                                  fieldId='name'
                                                  placeholder='Movie name'
                                                  fieldLabel='Movie name:'
                                                  errors={errors}
                                                  touched={touched}
                                    />

                                    <FieldWrapper fieldName='image'
                                                  fieldId='image'
                                                  placeholder='Movie image URL'
                                                  fieldLabel='Movie image:'
                                                  errors={errors}
                                                  touched={touched}
                                    />

                                    <FieldWrapper fieldName='year'
                                                  fieldId='year'
                                                  placeholder='Movie year'
                                                  fieldLabel='Movie year:'
                                                  errors={errors}
                                                  touched={touched}
                                    />

                                    <FormField isError={errors?.genre && touched.genre}>
                                        <label htmlFor="genre">Genre</label>

                                        <Field
                                            id="genre"
                                            name="genre"
                                            value={values?.genre}
                                            options={options}
                                            component={SelectComponent}
                                        />

                                        {errors?.genre && touched.genre && (
                                            <ErrorMessage>{errors?.genre}</ErrorMessage>
                                        )}
                                    </FormField>

                                    <FieldWrapper fieldName='description'
                                                  fieldId='description'
                                                  placeholder='Movie description'
                                                  fieldLabel='Movie description:'
                                                  errors={errors}
                                                  touched={touched}
                                    />

                                    <FieldWrapper fieldName='director'
                                                  fieldId='director'
                                                  placeholder='Movie director'
                                                  fieldLabel='Movie director:'
                                                  errors={errors}
                                                  touched={touched}
                                    />

                                    <FieldWrapper fieldName='video'
                                                  fieldId='video'
                                                  placeholder='Movie video URL'
                                                  fieldLabel='Movie video:'
                                                  errors={errors}
                                                  touched={touched}
                                    />

                                    <CurrentBtnWrapper>
                                        <CurrentBtn type="submit"
                                                    disabled={!isEmpty(errors)}
                                                    onClick={() => {
                                                        handleClose()
                                                        currentFunction(values)

                                                    }}>
                                            {currentButton}
                                        </CurrentBtn>
                                    </CurrentBtnWrapper>

                                    <CloseBtn onClick={() => {handleClose()}}>
                                        &#10006;
                                    </CloseBtn>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </ModalContent>
        </Modal>
    );
};

export default ModalWindow;