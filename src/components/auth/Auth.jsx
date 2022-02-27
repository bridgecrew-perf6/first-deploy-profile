import React from "react"
import s from "./auth.module.css"
import { Field, Formik } from "formik"
import { Form } from "react-bootstrap";
import * as yup from 'yup';
import { useState } from "react";
import { useTranslation } from "react-i18next";



export default function Auth(props) {

    // let [loading ,setLoading] = useState(false);

    const { t, i18n } = useTranslation();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }



    let formValidations = yup.object().shape({
        name: yup.string().min(4).max(25).matches(/^[A-Za-z,.а-яА-ЯёЁ0-9\s ]*$/, 'Please enter valid name').required(),
        email: yup.string().email().required(),
        password: yup.string().max(32).min(3).required(),
        passwordConfirm: yup.string().oneOf([yup.ref('password')]).required()
    })


    return (
        <Formik
            initialValues={{ name: "", email: '', password: "", passwordConfirm: "" }}
            onSubmit={(values) => {
                props.authTh(values);
                // setLoading(true)
            }}
            validationSchema={formValidations}
        >

            {({ handleSubmit, values, errors, onSubmit, setFieldValue, touched }) => (
                <form className={`${s.auth__form}`}>
                    
                    <h2 className={`${s.auth__title} common__title `}>{t("auth.title")}</h2>

                    {(props.name) && <h2 className={s.auth__h2}>{t("auth.auth")}{props.name}</h2>}
                    {(props.authError) && <h2 className={s.auth__h2} data-set="err" >{t("auth.err")}</h2>}

                    <div className={s.auth__input_box}>
                        <Field className={`${s.auth__input}`} placeholder=" " id="name" name="name" type="name" data-set={(errors.name && touched.name) && 'err'} />
                        <label className={`${s.auth__label} langues`} htmlFor="name">{t("auth.name")}</label>
                    </div>

                    <div className={s.auth__input_box}>
                        <Field className={`${s.auth__input}`} placeholder=" " id="email" name="email" type="email" data-set={(errors.email && touched.email) && 'err'} />
                        <label className={`${s.auth__label} langues`} htmlFor="email">{t("auth.email")}</label>
                    </div>

                    <div className={s.auth__input_box}>
                        <Field className={`${s.auth__input}`} placeholder=" " id="password" name="password" type="password" data-set={(errors.password && touched.password) && 'err'} />
                        <label className={`${s.auth__label} langues`} htmlFor="password" >{t("auth.password")}</label>
                    </div>

                    <div className={s.auth__input_box}>
                        <Field id="confirmPassword" placeholder=" " className={`${s.auth__input}`} name="passwordConfirm" type="password" data-set={(errors.passwordConfirm && touched.passwordConfirm) && 'err'} />
                        <label className={`${s.auth__label} langues`} htmlFor="confirmPassword">{t("auth.password_confirm")}</label>
                    </div>
                    

                    <button className={`${s.auth__btn}`} disabled={props.loading || props.name} type="submit" onClick={handleSubmit}>{t("auth.send")}</button>
                </form>
            )}



        </Formik>
    )
}