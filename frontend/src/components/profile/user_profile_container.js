import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { getFollows } from '../../actions/item_actions';

const mapStateToProps = state => {
    return ({
        user: state.session.user,
        items: state.entities.items
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        getFollows: id => dispatch(getFollows(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);