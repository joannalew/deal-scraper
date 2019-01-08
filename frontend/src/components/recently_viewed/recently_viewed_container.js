import { connect } from 'react-redux';
import RecentlyViewedItems from './recently_viewed';
import { recentlyViewed} from '../../actions/item_actions';

const mapStateToProps = state => {

    return ({
        items: Object.values(state.entities.items)
    });
};

const MapDispatchToProps = dispatch => {

    return ({
        recentlyViewed: () => dispatch(recentlyViewed())
    });
};

export default connect(mapStateToProps, MapDispatchToProps)(RecentlyViewedItems);