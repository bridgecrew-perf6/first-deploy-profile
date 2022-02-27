import React from "react"
import { Col, Button, InputGroup } from 'react-bootstrap';
import s from './profile.module.css';
import st from '../news/Sidebar/sidebar.module.css';
import { Field, FieldArray, Formik } from "formik";
import * as yup from "yup";



export default function ProfileSidebar(props) {


   

    const validationSchema = yup.object().shape({
        file: yup.array().of(yup.object().shape({
            file: yup.mixed().test('fileSize', 'Размер файла больше 10 байт', (value) => {
                if (!value) return false
                return value.size < 10000
            }).required(),
            type: yup.string().oneOf([`image/gif`, 'image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'], 'Добавьте файл с правильным форматов').required(),
            name: yup.string().required()
        }).typeError('Добавьте файл')).required()

    });

    const getFileSchema = (file) => (file && {
        file: file,
        type: file.type,
        name: file.name
    })




    return (
        <Col className={s.profile__sidebar} lg={3}>
            <div className={s.profile__img_box}>
                <div className={s.profile__img}>
                    
                    <img src={ (props.imgAva) ? (`data:image/jpeg;base64,${props.imgAva}`) : '' } alt="profile" />
                </div>
                <Formik
                    initialValues={{ file: undefined }}
                    onSubmit={(value) => {
                        console.log(value['file'][0]);
                        props.setImgAvaTh(props.email, value['file'][0])
                    }}
                    validationSchema={validationSchema}


                >
                    {({ handleSubmit, handleChange, handleBlur, values, errors, onSubmit, setFieldValue, touched }) => (
                        <form >
                            {/* // <Field name='file' type='file' className={s.profile__edit_file} data-set={(errors.file && touched.file) && 'err'} /> */}
                            <FieldArray name={`file`}>
                                {(arrayHelper) => (
                                    <>
                                            <input
                                                type={`file`}
                                                name={`file`}
                                                className={s.profile__file}
                                                onChange={(event) => {
                                                    const { files } = event.target
                                                    const file = getFileSchema(files.item(0))
                                                    if (!file) {
                                                        arrayHelper.remove(0)
                                                    }
                                                    if (Array.isArray(values.file)) {
                                                        arrayHelper.replace(0, file)
                                                    } else {
                                                        arrayHelper.push(file)
                                                    }
                                                }}
                                            />
                                        
                                    </>
                                )}
                            </FieldArray>
                            <Button className={s.profile__edit_img} variant="primary" onClick={handleSubmit} >Edit photo</Button>
                        </form>
                    )}

                </Formik>
            </div>
            <div className={s.profile__friends}>
                <div className={`${st.sidebar__users}`}>
                    <div className={s.profile__friends_count}>
                        <span>Friends <span className={s.count}>20</span></span>
                    </div>
                    <div className={`${st.sidebar__users_box}`}>
                        <div className={`${st.sidebar__user}`}>
                            <div className={`${st.sidebar__user_img}`}>
                                <img src="#" alt="user" />
                            </div>
                            <div className={`${st.sidebar__user_name}`} data-title={`Erzhan Siman allo  hello worrdl`} >Erzhan Siman allo  hello worrdl</div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}