import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    render() {
        return (
            <div>
                <span>This is the search component</span>
            </div>
        );
    }
}

export default Search;