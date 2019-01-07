import { connect } from 'react-redux';
import ItemShow from './item_show';
import { getItem, addFollower, removeFollower } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => {

    let id = ownProps.match.params.id;
    return ({
        item: state.entities.items[id],
        user: state.session.user
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        getItem: (id) => dispatch(getItem(id)),
        addFollower: data => dispatch(addFollower(data)),
        removeFollower: data => dispatch(removeFollower(data))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);