import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { getInfoUserTh, setImgAvaTh, setInfoUserTh } from "../../redux/profile-reducer";
import { getBirthday, getCity, getCountry, getEmail, getImgAva, getStatus, isLoadingProfile } from '../../redux/selectors';
import Profile from "./Profile";


class ProfileContainer extends React.Component {

    constructor(props) {
        super(props)

        
    }
    
    
    componentDidMount() {
        if(this.props.email) {
            this.props.getInfoUserTh(this.props.email)
        }
    }


    render() {
        return (
            (!this.props.loadingProfile) 
            ? <Profile {...this.props}/> 
            :   <h1>Loading</h1>
            
        )
    }
}



let mapStateToProps = (state)=> {
    return {
        email: getEmail(state),

        birthday: getBirthday(state),
        status: getStatus(state),
        country: getCountry(state),
        city: getCity(state),
        loadingProfile: isLoadingProfile(state),
        imgAva:getImgAva(state),
    }
}


export default compose(
    connect(mapStateToProps , {setInfoUserTh , getInfoUserTh , setImgAvaTh})
)(ProfileContainer)




