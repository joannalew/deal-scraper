import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = ({ session }) => {
    let user = session.user;
    return ({
        user
    });
};

const mapDispatchToProps = dispatch => {

    return ({

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);