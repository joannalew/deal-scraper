import React, { Component } from 'react';
import PriceChart from './price_chart';


class PriceGraph extends Component { 

    state = {
        datasets: [
            {
                color: 'light-blue',
                values: [
                    Math.round((Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100 * 100),
                    Math.round((Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100 * 100),
                    Math.round((Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100 * 100),
                    Math.round((Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100 * 100),
                    Math.round((Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100 * 100),
                    Math.round((Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100 * 100),
                    Math.round((Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100 * 100)
                ]
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