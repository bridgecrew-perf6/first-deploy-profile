import React from 'react';
import { compose } from 'redux';
import { authTh } from '../../redux/header-reducer';
import Auth from './Auth';
import { headerAuthError, headerLoading, HeaderRedirect, UserName } from '../../redux/selectors';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

class AuthContainer extends React.Component {

    

    render() {
        return (
            (this.props.redirect)
                ? <Navigate to="/login" />
                : (
                    <Auth {...this.props} />
                )
        )
    }

}

let mapStateToProps = (state) => {
    return {
        name: UserName(state),
        redirect: HeaderRedirect(state),
        authError: headerAuthError(state),
        loading : headerLoading(state)
    }
}


export default compose(connect(mapStateToProps, { authTh }))(AuthContainer)