import { connect } from 'react-redux';
import { fetchResults } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    fetchResults: query => dispatch(fetchResults(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
