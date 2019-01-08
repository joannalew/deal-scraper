import { connect } from 'react-redux';
import PriceChart from './price_chart';

const mapStateToProps = (state, ownProps) => {

    let id = ownProps.match.params.id;
    return ({
        item: state.entities.items[id],
    });
};

export default connect(mapStateToProps, null)(PriceChart);