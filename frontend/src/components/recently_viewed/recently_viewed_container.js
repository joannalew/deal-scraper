import { connect } from 'react-redux';
import RecentlyViewedItems from './recently_viewed';
import { recentlyViewed} from '../../util/item_util';

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