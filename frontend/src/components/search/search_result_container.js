import { connect } from 'react-redux';
import SearchResult from './search_result';

const mapStateToProps = state => ({
    items: state.search.items
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
