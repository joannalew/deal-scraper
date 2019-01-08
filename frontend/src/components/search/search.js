import React from 'react';
import SearchResultContainer from './search_result_container';
import './search.css';

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
                    <form className="search-form" onSubmit={ this.handleSubmit }>
                        <span className="search-text">Find Your Deal Now!</span>
                        <label>
                            <span>
                                <input className="search-input-bar" type="text" value={this.state.query} onChange={this.update('query')} />
                            </span>
                        </label>
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