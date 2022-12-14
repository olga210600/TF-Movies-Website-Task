// @ts-nocheck
import React                        from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form }      from "formik";
import { validateSchema }           from "./schema";
import { userLogIn, adminLogIn }    from "../../store/reducers/moviesReducer";
import { Link }                     from '../../components/RouterNavigation/style';
import { PATHS }                    from '../../components/RouterNavigation';
import { createBrowserHistory }     from "history";
import {
    Wrapper,
    FormField,
    ErrorMessage,
    PageHeader,
    CompleteWrapper,
    MainPageLinkWrapper,
    LabelWrapper,
    StarPassword,
    StarEmail,
    LogInWrapper
}                                   from "./styles";

const RegistrationForm = () => {
    const isAuthorized: boolean = useSelector((state: any) => state.moviesList.isAuthorized);
    const isAdmin: boolean      = useSelector((state: any) => state.moviesList.isAdmin);

    const dispatch    = useDispatch();
    const history     = createBrowserHistory();
    const currentPage = history.location.pathname;

    const getUser = (object) => {
        const userInfo = Object.values(object);

        if (userInfo[0] === process.env.REACT_APP_ADMIN_LOGIN && userInfo[1] === process.env.REACT_APP_ADMIN_PASSWORD) {
            dispatch(adminLogIn(isAdmin))
        } else {
            dispatch(userLogIn(isAuthorized))
        }
    }

    return (
        <Wrapper>
            <MainPageLinkWrapper>
                <Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}>
                    Main page
                </Link>
            </MainPageLinkWrapper>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={() => {
                }}
                validationSchema={validateSchema}
                validateOnMount
            >
                {({values, errors, touched}) => {

                    return (
                        <Form>
                            <PageHeader>Registration</PageHeader>

                            <FormField isError={errors?.email && touched.email}>
                                <LabelWrapper>
                                    <label htmlFor="email">Email</label>

                                    <StarEmail>*</StarEmail>
                                </LabelWrapper>

                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="jane@acme.com"
                                    type="email"
                                />

                                {errors?.email && touched.email && <ErrorMessage>{errors?.email}</ErrorMessage>}
                            </FormField>

                            <FormField isError={errors?.password && touched.password}>
                                <LabelWrapper>
                                    <label htmlFor="password"> Password</label>

                                    <StarPassword>*</StarPassword>
                                </LabelWrapper>

                                <Field id="password" name="password" placeholder="123"/>

                                {errors?.password && touched.password && (
                                    <ErrorMessage>{errors?.password}</ErrorMessage>
                                )}
                            </FormField>

                            {
                                errors?.email || errors?.password ?
                                    <CompleteWrapper>Complete all fields</CompleteWrapper> :

                                    <LogInWrapper>
                                        <Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}
                                              onClick={() => getUser(values)}
                                        >
                                            Log in
                                        </Link>
                                    </LogInWrapper>
                            }
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

export default RegistrationForm;

