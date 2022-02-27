import React from 'react'; 
import { connect } from 'react-redux';
import { compose } from 'redux';
import { exitTh, repeatLogin } from '../../redux/header-reducer';
import { getImgAva, UserName } from '../../redux/selectors';
import NavUI from './Nav';


class NavContainer extends React.Component {
    

    componentDidMount() {
    }


    render() {
        return (
            <NavUI {...this.props}/>
        )
    }
}


let mapStateToProps = (state)=> {
    return {
        name:UserName(state),
        ava:getImgAva(state)
    }
}



export default compose(connect(mapStateToProps, { exitTh, repeatLogin }))(NavContainer);    


