import React, { Component } from 'react';
import PriceChart from './price_chart';

class PriceGraph extends Component {

    state = {
        datasets: [
            {
                color: 'light-blue',
                values: [40, 30, 40, 35, 37, 35, 40]
                // this.props.item.priceHistory
            }
        ]
    };

    render() {
        return (
            <div className='graph'>
                <PriceChart className="chart"
                    // title='Price History (30 days)'
                    type='line'
                    height={400}
                    data={{
                        labels: [
                            1, 5, 10, 15, 20, 25, 30
                        ],
                        datasets: this.state.datasets
                    }}
                    colors={['light-blue']}
                    show_dots={false}
                    heatline
                    region_fill
                    isNavigable
                    valuesOverPoints
                />
            </div>
        )
    }
}

export default PriceGraph;