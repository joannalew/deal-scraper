import { connect } from 'react-redux';
import SearchResultItem from './search_result_item';

const mapStateToProps = (state, ownProps) => ({
    item: ownProps.item,
    idx: ownProps.idx
});

export default connect(mapStateToProps, null)(SearchResultItem);