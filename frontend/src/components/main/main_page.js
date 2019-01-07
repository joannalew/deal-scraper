import React from 'react';
import './main_page.css';

class MainPage extends React.Component {

    render() {
        return (
            <div className="main_page_wrapper">
                <div className="main_page">
                    <div className="main_block_left"></div>
                    <div className="main_words">
                        <h1 className="main_title">Deal Cliq</h1>
                        <h2 className="main_description">The Best Deals at the Tip of Your Fingers</h2>
                    </div>
                    <div className="main_image"></div>
                    <div className="main_block_right"></div>
                </div>
                <div className="main_page_items">
                    <div className="main_items_block_left"></div>
                    <h2 className="main_page_items_title">Recently Viewed Items</h2>
                </div>
                <footer>
                    
                </footer>
            </div>
        );
    }
}

export default MainPage;