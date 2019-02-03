import React from 'react';
import SearchResultContainer from './search_result_container';
import './search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            store: 'ebay'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchResults(this.state)
    }

    render() {
        return (
            <div>
                <div>
                    <marquee className="search-options">Yeezy, iPhone, SmartWater, Supreme, Mug, Coffee, Jordan, Nike, Charger, Molton Brown, Louboutin, App Academy Shirts, Subway, Beats, Northface, Valentino, Protein Bars, Gucci</marquee>
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <span className="search-text">Find Your Deal Now!</span>
                        <label>
                            <span>
                                <input className="search-input-bar" type="text" value={this.state.query} onChange={this.update('query')} />
                            </span>
                        </label>
                        <div className='radio-buttons'>
                            <div>
                                <label className="radio-container">
                                    <input type='radio' name='store' value='ebay' onChange={this.update('store')} />
                                    <span class="circle"></span>
                                    <p>Ebay</p>
                                </label>
                            </div>
                            <div>
                                <label className="radio-container">
                                    <input type='radio' name='store' value='etsy' onChange={this.update('store')} />
                                    <span class="circle"></span>
                                    <p>Etsy</p>
                                </label>
                            </div>
                            <div>
                                <label className="radio-container">
                                    <input type='radio' name='store' value='amazon' onChange={this.update('store')} />
                                    <span class="circle"></span>
                                    <p>Amazon</p>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button className="search-submit" type="submit">Submit</button>
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