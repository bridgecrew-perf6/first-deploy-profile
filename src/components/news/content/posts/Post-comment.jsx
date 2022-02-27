import React, { useState } from "react";
import { Button, Collapse, Image } from 'react-bootstrap';
import s from '.././content.module.css';

import { Field, Formik, useField } from 'formik';
import * as yup from "yup";
import send_logo from "../../../../assets/img/send.svg";


export default function PostComment(props) {
    const [open, setOpen] = useState(false);

    const LikeSvg = ({ height = 21, width = 15, color = "blue" }) => {
        return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox="0 0 16 16">
            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
        </svg>
    }

    const CommentSvg = ({ height = 21, width = 15, color = "blue" }) => {
        return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        </svg>
    }



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
            <div className={`${s.posted__info}`}>
                <button className={`${s.posted__like_btn}`} aria-label="like">
                    <span className={`${s.posted__like_img}`}>{<LikeSvg />}</span>
                    <span className={`${s.posted__like_count}`}>25</span>
                </button>
                <button
                    className={`${s.posted__comment_btn}`}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    aria-label="comment">
                    <span className={`${s.posted__comment_img}`}>{<CommentSvg />}</span>
                    <span className={`${s.posted__comment_count}`}>25</span>
                </button>
            </div>

            <Collapse in={open}>
                <div id="example-collapse-text" className={`${s.posted__comments}`}>
                    <div className={`${s.posted__author}`}>
                        <div className={`${s.posted__ava}`}>
                            <img src="" alt="ava" />
                        </div>
                        <div className={`${s.posted__author_info}`}>
                            <div className={`${s.posted__name}`}>Erzhan Siman</div>
                            <div className={`${s.posted__title}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi obcaecati blanditiis, repellat alias quisquam ad optio saepe eum fuga inventore commodi consequatur repellendus quia magni possimus ut porro aspernatur?</div>
                        </div>
                    </div>

                    <Formik
                        initialValues={{ textarea: "", }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                        validationSchema={yupValidations}
                    >
                        {({ handleSubmit, values, error, onSubmit, setFieldValue }) => (
                            <form className={`mb-3  common__post_box`}>
                                <MyTextArea name={`textarea`} id={`newPost`} placeholder="What’s on your mind?" className={` common__textarea`} />
                                <div className={` common__send_box`}>
                                    <button type='submit' className={` common__send_btn`} onClick={handleSubmit}>
                                        <Image src={send_logo} />
                                    </button>
                                </div>
                            </form>
                        )}

                    </Formik>
                </div>


            </Collapse>
        </>
    )
}