import { getApi } from '../api';

const SET_INFO_USER = 'set-info-user';
const LOADING_PROFILE = 'loading-profile';
const SET_IMG_AVA = 'image-ava';

const setInfoUserAc = (info) => ({ type: SET_INFO_USER, value: info });
const loadingProfileAc = (bool) => ({ type: LOADING_PROFILE, value: bool })
const setImgAc = (img)=> ({type:SET_IMG_AVA , img:img});


let defaultState = {
    birthday: "",
    status: "",
    country: "",
    city: "",

    imgAva:false,

    // isInfo:false,

    loadingProfile: false,
}



const ProfileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_INFO_USER:
            let {status , country , city , birthday} = action.value;
            return {
                ...state,
                birthday: birthday,
                status: status,
                country: country,
                city: city,
                loadingProfile: false,
                // isInfo:true
            }

        case LOADING_PROFILE:
            return {
                ...state,
                loadingProfile: action.value,
                // isInfo:false
            }

        case SET_IMG_AVA: 
            return {
                ...state,
                imgAva:action.img
            }
        
        default: return state;
    }
}





// Изменит информацию о пользователе
export const setInfoUserTh = (info) => {
    return async (dispatch) => {
        let setInfo = await getApi.setInfoUser(info);

    }
}


// Получение информаций о пользователе
export const getInfoUserTh = (email) => {
    return async (dispatch) => {
        dispatch(loadingProfileAc(true))
        let get = await getApi.getInfoUser(email);
        if(get.data !== 1) {
            dispatch(setInfoUserAc(get.data));
        }else {
            dispatch(loadingProfileAc(false));
        }


    }
}


// изменить аву имж
export const setImgAvaTh = (email , file)=> {
    return async (dispatch)=> {
        let setImg = await getApi.setImg(email , file);
        if(setImg.data !== 1) {
            dispatch(setImgAc(setImg.data))
        }
    }
}


export const getImgAva = (email)=> {
    return async (dispatch)=> {
        if(!email) return;
        
        let getImg = await getApi.getImg(email);
        if (getImg.data !== 1) {
            dispatch(setImgAc(getImg.data))
        }
    }
}



export default ProfileReducer;