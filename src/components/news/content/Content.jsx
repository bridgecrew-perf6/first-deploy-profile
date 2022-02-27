import { Form, FormGroup, FormLabel, Button, Image } from 'react-bootstrap';
import s from './content.module.css';
import send_logo from "../../../assets/img/send.svg";
import { Field, Formik, useField } from 'formik';
import * as yup from "yup";
import Posts from './posts/Posts';

const Content = (props) => {

    const MyTextArea = ({ label, ...props }) => {
        // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
        // which we can spread on <input> and alse replace ErrorMessage entirely.
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <textarea className="text-area" data-err={(meta.touched && meta.error) && 'err'} {...field} {...props} />

            </>
        );
    };

    const yupValidations = yup.object().shape({
        textarea: yup.string().required("not text")
    })

    return (
        <>
            <Formik
                initialValues={{ textarea: "", file: "" }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={yupValidations}
            >
                {({ handleSubmit, values, error, onSubmit, setFieldValue }) => (
                    <form className={`mb-3 ${s.post__box} common__post_box` }>
                        <label htmlFor="newPost" className={` ${s.post__label} common__label`}>NEW POST</label>
                        <MyTextArea name={`textarea`} id={`newPost`} placeholder="What’s on your mind?" className={`${s.post__textarea} common__textarea`} />
                        <div className={`${s.post__file_box} common__send_box`}>
                            <input id="file" name="file" type="file" onChange={(event) => {
                                setFieldValue("file", event.currentTarget.files[0]);
                            }} className={s.post__file} />
                            <button type='submit' className={`${s.post__btn} common__send_btn`} onClick={handleSubmit}>
                                <Image src={send_logo} />
                            </button>
                        </div>


                    </form>
                )}

            </Formik>

            
            <Posts/>
            <Posts/>
        </>
    )
};


export default Content;