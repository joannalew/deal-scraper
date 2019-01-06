import { connect } from 'react-redux';
import ItemShow from './item_show';
import { getItem } from '../../actions/item_actions';

const mapStateToProps = ({ entities }, ownProps) => {

    let id = ownProps.match.params.id;
    return ({
        item: entities.items[id]
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        getItem: (id) => dispatch(getItem(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);