import React from 'react';
import './main_page.css';
import RecentlyViewedItemsContainer from '../recently_viewed/recently_viewed_container';

class MainPage extends React.Component {

    render() {
        return (
            <div>
            <div className="main_page_wrapper">
                <div className='main-page-inner'>
                    <div className="main_page">
                        {/* <div className="main_block_left"></div> */}
                        <div className='overlay'></div>
                        <div className="main_words">
                            <h1 className="main_title">Deal Cliq</h1>
                            <h2 className="main_description">The Best Deals at Your Fingertips</h2>
                            <ul className='main-page-list'>
                                <li>Search through a variety of items</li>
                                <li>Find the deals you want fast</li>
                                <li>Enjoy our eye opening deals</li>
                                <li>If you're not satisfied, we're not satisfied</li>
                            </ul>
                        </div>
                        {/* <div className="main_image"></div>
                        <div className="main_block_right"></div> */}
                    </div>
                </div>
            </div>
            <div className='main-page-inner'>
                <div className="main_page_items">
                    {/* <div className="main_items_block_left"></div> */}
                    <div className="main_page_items_title">Recently Viewed Items</div>
                    <div className='recently-viewed-items'>
                        <RecentlyViewedItemsContainer />
                    </div>
                </div>
                <footer>
                    
                </footer>
            </div>
            </div>
        );
    }
}

export default MainPage;