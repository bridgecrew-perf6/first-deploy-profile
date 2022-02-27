import { Image , Button } from "react-bootstrap";
import s from "./sidebar.module.css";
import profile_bg from "../../../assets/img/profile-ava-bg.png";
import React, { useState } from "react";


const Sidebar = (props)=> {

    // let [name , setName] = useState('');
    let values = React.createRef()

    let showFullName = (e)=> {
        let name = values.current.innerText;

    }


    return (
        <>
            <div className={` ${s.sidebar}`}>
                <div className={`${s.sidebar__ava}`}>
                    <div className={s.sidebar__img_bg}>
                        <Image src={profile_bg} />
                    </div>
                    <div className={s.sidebar__img_ava}>
                        <Image width={100} height={100} src="https://placeimg.com/171/180/any" />
                    </div>
                    <div className={s.sidebar__name}>Dmitry Kargaev</div>
                    <div className={s.sidebar__skil}>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.</div>
                    
                    <Button variant="primary" className={s.sidebar__btn} onClick={() => console.log("Primary")}>
                        write new article
                    </Button>
                </div>

                <div className={`${s.sidebar__users}`}>
                    <h3 className={`${s.sidebar__users_title}`}>Recommended users</h3>
                    <div className={`${s.sidebar__users_box}`}>
                        
                        <div    className={`${s.sidebar__user}`}>
                            <div className={`${s.sidebar__user_img}`}>
                                <img src="#" alt="user" />
                            </div>
                            <div className={`${s.sidebar__user_name}`} data-title={`Erzhan Siman allo  hello worrdl`} >Erzhan Siman allo  hello worrdl</div>
                        </div>

                        <div  className={`${s.sidebar__user}`}>
                            <div className={`${s.sidebar__user_img}`}>
                                <img src="#" alt="user" />
                            </div>
                            <div data-title={`Erzhan Siman `} className={`${s.sidebar__user_name}`}>Erzhan Siman  </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}


export default Sidebar;