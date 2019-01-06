import React from 'react';
import SearchResultContainer from './search_result_container';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchResults(this.state)
            .then(() => console.log("success"));
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <label>
                                <span>Find</span>
                                <span>
                                    <input type="text" value={this.state.query} onChange={this.update('query')} />
                                </span>
                            </label>
                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>

                <div>
                    <SearchResultContainer />
                </div>
            </div>
        );
    }
}

export default Search;