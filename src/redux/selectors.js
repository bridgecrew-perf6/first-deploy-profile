
export const UserName = (state) => state.header.name;

export const headerLoading = (state)=> state.header.loading;
export const headerLoginError = (state) => state.header.loginError;
export const headerAuthError = (state) => state.header.authError;

export const HeaderRedirect = (state)=> state.header.redirect


export const getEmail = (state)=> state.header.email;


// profile reducer state
export const getStatus = (state)=> state.profile.status;
export const getCountry = (state)=> state.profile.country;
export const getCity = (state)=> state.profile.city;
export const getBirthday = (state) => state.profile.birthday;
export const isLoadingProfile = (state) => state.profile.loadingProfile;
export const getImgAva = (state) => state.profile.imgAva;

