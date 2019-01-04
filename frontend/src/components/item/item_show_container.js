import { connect } from 'react-redux';
import ItemShow from './item_show';
import { getItem } from '../../actions/item_actions';

const mapStateToProps = ({ entities }) => {

    return ({
        item: entities.items
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        getItem: (id) => dispatch(getItem(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);