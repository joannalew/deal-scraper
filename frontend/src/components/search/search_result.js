import React from 'react';
import SearchResultItemContainer from './search_result_item_container';
import {withRouter} from 'react-router-dom'

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let results = this.props.items.map((item, idx) => {
            return (
                <SearchResultItemContainer key={item.storeId} item={item} idx={idx + 1} history={this.props.history} />
            )
        });

        return (
            <div className="ul-results-wrapper">
                <ul className="ul-results">
                    { results }
                </ul>
            </div>
        )
    }
};

export default withRouter(SearchResult);