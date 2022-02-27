import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { loginTh } from '../../../redux/header-reducer';
import { getEmail, headerLoading, headerLoginError, UserName } from '../../../redux/selectors';
import Login from './Login';


class LoginContainer extends React.Component {



    render() {
        return (
            <Login {...this.props}/>
        )
    }
} 


let mapStateToProps = (state)=> {
    return {
        name:UserName(state),
        loading:headerLoading(state),
        email: getEmail(state),
        loginError:headerLoginError(state)
    }
}


export default compose(
    connect(mapStateToProps , {loginTh})
)(LoginContainer)