import React from "react"
import s from './profile.module.css';
import st from '../news/Sidebar/sidebar.module.css';
import { Col, Button, InputGroup } from 'react-bootstrap';
import ProfileSidebar from "./Profile-Sidebar";
import { Field, Formik, useField } from "formik";
import * as yup from 'yup';
import { useState } from "react";
import { useEffect } from "react";

export default function Profile(props) {

    let { status, country, city, birthday } = props;

    let [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (props.city) {
            setDisabled(true);
        } else {
            return false;
        }
    }, [props.city])

    let formValidations = yup.object().shape({
        status: yup.string().max(50).min(3),
        birthday: yup.string(),
        country: yup.string().max(32).min(3),
        city: yup.string().max(32).min(3),
    })

    const MyTextArea = ({ label, ...props }) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input> and alse replace ErrorMessage entirely.
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <textarea className="text-area"  data-err={(meta.touched && meta.error) && 'err'} {...field} {...props} />

            </>
        );
    };


    return (
        <div className="row box">
            <Col className={s.profile__info} lg={9}>
                {/* <div className={s.profile__info_name}>Erzhan Siman</div> */}

                <Formik
                    initialValues={{ status: status, birthday: birthday, country: country, city: city }}
                    onSubmit={(value) => {
                        value['email'] = props.email;
                        props.setInfoUserTh(value);
                        setDisabled(true);
                    }}
                    validationSchema={formValidations}
                >
                    {({ handleSubmit, handleChange, handleBlur  ,values, errors, onSubmit, setFieldValue, touched }) => (
                        <form >
                            <fieldset disabled={disabled}>
                                <legend>Erzhan Siman</legend>
                                {/* <MyTextArea name='status' placeholder="Print your status" data-set={(errors.status && touched.status) && 'err'} /> */}
                                <textarea name='status' 
                                    value={values.status || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="text-area" 
                                    data-set={(errors.status && touched.status) && 'err'}
                                    placeholder="Print your status" 

                                />
                                <div className={s.profile__info_line}></div>

                                <div className={s.profile__info_box}>
                                    <div className={`${s.profile__info_input} ${s.profile__info_birthday}`}>
                                        <label className={s.profile__info_key} htmlFor="birthday">Birthday</label>
                                        <Field name='birthday' id='birthday' type='date' data-set={(errors.birthday && touched.birthday) && 'err'} />
                                    </div>

                                    <div className={`${s.profile__info_input} ${s.profile__info_country}`}>
                                        <label className={s.profile__info_key} htmlFor="country">Country</label>
                                        <Field name='country' id='country' type='text' data-set={(errors.country && touched.country) && 'err'} />
                                    </div>

                                    <div className={`${s.profile__info_input} ${s.profile__info_city}`}>
                                        <label className={s.profile__info_key} htmlFor="city">City</label>
                                        <Field name='city' id='city' type='text' data-set={(errors.city && touched.city) && 'err'} />
                                    </div>
                                </div>


                            </fieldset>
                            <div className={s.profile__btn_box}>
                                <Button variant="primary" type="submit" disabled={disabled}  onClick={handleSubmit}>
                                    Set info
                                </Button>
                                <Button onClick={() => setDisabled(false)} >
                                    Edit info
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Col>

            <ProfileSidebar {...props} />


        </div>
    )
}
