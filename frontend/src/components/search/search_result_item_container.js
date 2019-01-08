import { connect } from 'react-redux';
import { createNewItem } from '../../actions/item_actions';
import SearchResultItem from './search_result_item';

const mapStateToProps = (state, ownProps) => ({
    item: ownProps.item,
    idx: ownProps.idx,
    currentUser: state.session.user,
    history: ownProps.history
});

const mapDispatchToProps = dispatch => ({
    createNewItem: data => dispatch(createNewItem(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultItem);