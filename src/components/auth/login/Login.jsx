import React from "react"
import s from "../auth.module.css"
import { Field, Formik } from "formik"
import { Form } from "react-bootstrap";
import * as yup from 'yup';
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";



export default function Login (props) {

    // let [loading , setLoading] = useState(false);
    // useEffect(()=> {
    //     setLoading(props.loading);
    // }, [props.loading])


    const { t, i18n } = useTranslation();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }

    

    let formValidations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().max(32).min(3).required(),
        
    })



    return (
        <>
            <Formik
                initialValues={{ password: '', email: (props.email) ? props.email : '' } }   
                onSubmit={(values) => {
                    props.loginTh(values);
                }}
                validationSchema={formValidations}
            >

                {({ handleSubmit, values, errors, onSubmit, setFieldValue, touched }) => (
                    <form className={`${s.auth__form}`}>
                        
                        <h2 className={`${s.auth__title} common__title `}>{t("nav.login")}</h2>

                        {(props.name) && (<h2 className={s.auth__h2}>{props.name} {t("login.login")}</h2>)}
                        {(props.loginError) && (<h2 className={s.auth__h2}>{t("nav.err")}</h2>)}
                        <div className={s.auth__input_box}>
                            <Field className={`${s.auth__input}`} placeholder=" " id="email" name="email" type="email" data-set={(errors.email && touched.email) && 'err'} />
                            <label className={`${s.auth__label} langues`} htmlFor="email">{t("auth.email")}</label>
                        </div>

                        <div className={s.auth__input_box}>
                            <Field className={`${s.auth__input}` } placeholder=" " id="password" name="password" type="password" data-set={(errors.password && touched.password) && 'err'} />
                            <label className={`${s.auth__label} langues`} htmlFor="password" >{t("auth.password")}</label>
                        </div>

                        <button className={`${s.auth__btn}`} disabled={props.loading} type="submit" onClick={handleSubmit}>{t("auth.send")}</button>

                    </form>
                )}



            </Formik>
        </>
    )
}