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
            .then(() => console.log("success"));
    }

    ChangeColor() {
        var lableText = document.getElementById('rad2');
        lableText.style.color = "red";
    }

    render() {
        return (
            <div>
                <div>
                    <marquee className="search-options">Adidas, iPhone, Nike, SmartWater, Supreme, Mug, Coffee, Jordans, Off-White, Charger, Molton Brown, Gucci, App Academy Shirts, Valentino, Louboutin, Protein Bars, Beats</marquee>
                    <form className="search-form" onSubmit={ this.handleSubmit }>
                        <span className="search-text">Find Your Deal Now!</span>
                        <label>
                            <span>
                                <input className="search-input-bar" type="text" value={this.state.query} onChange={this.update('query')} onclick="ChangeColor();" />
                            </span>
                        </label>
                        <div className='radio-buttons' >
                            <div>
                                <input type='radio' name='store' value='ebay' onChange={this.update('store')}/>
                                <span className="checkmark">Ebay</span>
                            </div>
                            <div>
                                <input type='radio' name='store' value='etsy' onChange={this.update('store')}/>
                                <span className="checkmark">Etsy</span>
                            </div>
                            <div>
                                <input type='radio' name='store' value='amazon' onChange={this.update('store')}/>
                                <span className="checkmark">Amazon</span>
                            </div>
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