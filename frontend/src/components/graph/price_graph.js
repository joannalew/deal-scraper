import React, { Component } from 'react';
import PriceChart from './price_chart';


class PriceGraph extends Component { 

    state = {
        datasets: [
            {
                color: 'light-blue',
                values: [
                    (Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100,
                    (Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100,
                    (Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100,
                    (Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100,
                    (Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100,
                    (Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100,
                    (Math.random() * (1.1 - 0.9) + 0.9).toFixed(4) * this.props.itemPrice.match(/\d/g).join("")/100
                ]
            }
        ]
    };

    render() {
        return (
            <div className='Graph'>
                <PriceChart
                    title='Price History (30 days)'
                    type='line'
                    height={250}
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