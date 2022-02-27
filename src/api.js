import axios from "axios";


const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://fugicar1.ru/profile/',
    headers: {
        // 'content-type': 'application/json;charset=utf-8'
    }

});




// Get me 
export const getApi = {
    // авторизация пользователя
    authUser(user) {
        return instance.post(`auth`, JSON.stringify(user))
    },

    // вход в акк
    loginUser(user) {
        return instance.post('login', JSON.stringify(user))
    },

    // // Изменит информацию о пользователе
    setInfoUser(info) {
        let {  email , status, birthday, country, city } = info;
        return instance.get(`?setUserInfo=""&
            email="${email}"&
            status="${status}"&
            birthday="${birthday}"&
            country="${country}"&
            city="${city}"
        `);
    },

    // Получение информаций о пользователе
    getInfoUser(email) {
        return instance.get(`?getInfoUser=""&email="${email}"`);
    },


    // изменить аву изображение
    setImg(email , file) {
        let formData = new FormData();
        formData.append("image" , file.file);
        formData.append("email" ,  email);
        return instance.post(`setImg` , formData );
    },


    getImg(email) {
        return instance.post('getImgAva', JSON.stringify({email:email}));
    }
    

}