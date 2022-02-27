import { type } from "@testing-library/user-event/dist/type";
import { getApi } from "../api";
import { getImgAva } from "./profile-reducer";

const AUTH = 'auth';
const LOG_IN = 'log-in';
const EXIT = 'log-out';



const HEADER_REDIRECT = 'redirect'
const LOADING = 'loading'; 
const LOGIN_ERROR = 'login-error';
const AUTH_ERROR = 'auth-error';



const authAc = (user) => ({ type: AUTH, user: user });
const loginAc = (user) => ({ type: LOG_IN, user: user })
const exitAc = ()=> ({type:EXIT});



const redirectAc = (bool) => ({ type: HEADER_REDIRECT, value: bool })
const loadingAc = (bool)=> ({type:LOADING , value :bool})
const loginErrorAc = (bool)=> ({type:LOGIN_ERROR , value:bool} );
const authErrorAc = (bool)=> ({type:AUTH_ERROR , value:bool} );


// function getLocalStorage () {
//     let { name, email, privilege } = JSON.parse(localStorage.getItem('user')) || {name:null , status:null , email:null};
//     return { name, email, privilege}; 
// }


let defaultState = {
    name: false,
    avaImg: null,
    email: false,
    privilege: false,
    
    redirect: false,
    loading:false,

    loginError:false,
    authError:false

}


const HeaderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOG_IN:
            let { name, email, privilege } = action.user
            return {
                ...state,
                name: name,
                email: email,
                privilege: privilege,
                loginError:false,
                authError: false
            }

        case EXIT:
            return {
                ...state,
                name: null,
                email: null,
                privilege:null,
                avaImg: null,
                redirect: false,
                loading: false,
                loginError: false,
                authError: false
            }

        
        case HEADER_REDIRECT:
            return {
                ...state,
                redirect: action.value
            }

        case LOADING : 
            return {
                ...state,
                loading : action.value
            }

        
        
        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.value
            }
        case AUTH_ERROR:
            return {
                ...state,
                authError: action.value,
                redirect: false,
                loading: false,
            }
        default: return state;
    }
}




// регистрация пользователя
export const authTh = (user) => {
    let { email, password, name } = user;
    return async (dispatch) => {
        let connect = await getApi.authUser({ email: email, password: password, name: name });
        if (connect.data === 0) {
            dispatch(redirectAc(true))
            dispatch(authAc(connect.data));
        } else {
            dispatch(authErrorAc(true))
        }
    }
}





// вход в аккаунт
export const loginTh = (user) => {
    return async (dispatch) => {
        let infoUser = await getApi.loginUser(user);
        if (infoUser.data !== 1) {
            dispatch(loginAc(infoUser.data));
            console.log(infoUser.data);
            dispatch(getImgAva(user?.email));

        } else {
            console.log(infoUser.data);
            dispatch(loginErrorAc(true));
        }

        dispatch(loadingAc(false))

    }
}



// Выход из аккаунта
export const exitTh = ()=> {
    return (dispatch)=> {
        dispatch(exitAc())
        localStorage.removeItem('user');
    }
}




// сохранение аккаунта при повторным заходе
export const repeatLogin = ()=> {
    return  (dispatch)=> {
        // let cookies = getLocalStorage();
            dispatch(loginTh());
            // dispatch(getImgAva());
    }
}





export default HeaderReducer;