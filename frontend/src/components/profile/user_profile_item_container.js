import { connect } from 'react-redux';
import { addFollower, removeFollower } from '../../actions/item_actions';
import UserProfileItem from './user_profile_item';

const mapStateToProps = (state, ownProps) => ({
    item: ownProps.item,
    idx: ownProps.idx,
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    addFollower: data => dispatch(addFollower(data)),
    removeFollower: data => dispatch(removeFollower(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileItem);