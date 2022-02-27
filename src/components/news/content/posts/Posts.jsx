import React, { useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import s from '.././content.module.css';
import img_posted from '../../../../assets/img/posted-img.jpg';
import PostComment from "./Post-comment";

export default function Posts(props) {
    const [open, setOpen] = useState(false);

   


    return (
        <div className={`${s.posted}`}>
            <div className={`${s.posted__author}`}>
                <div className={`${s.posted__ava}`}>
                    <img src="" alt="ava" />
                </div>
                <div className={`${s.posted__author_info}`}>
                    <div className={`${s.posted__name}`}>Erzhan Siman</div>
                    <div className={`${s.posted__title}`}>Frontend</div>
                </div>
            </div>


            <div>
                <div>Er
                </div>
                <Collapse in={open}>
                    <div id="example-collapse-text" className={`${s.posted__text}`}>
                        zhan  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </div>
            <Button
                className={`${s.posted__more_btn}`}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Reade more
            </Button>

            <div className={`${s.posted__img}`}>
                <img src={img_posted} alt="img" />
            </div>

            
            <PostComment/>

        </div>
    )
}

