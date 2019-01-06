import React from 'react';
import SearchResultItemContainer from './search_result_item_container';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let results = this.props.items.map((item, idx) => {
            return (
                <SearchResultItemContainer key={item.storeId} item={item} idx={idx + 1} />
            )
        });

        return (
            <div>
                <ul>
                    { results }
                </ul>
            </div>
        )
    }
};

export default SearchResult;