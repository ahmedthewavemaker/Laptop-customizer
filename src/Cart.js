import React, { Component } from 'react';
import Summary from './Summary';
import Total from './Total';

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            return(
                <Summary 
                feature={feature}
                idx={idx} 
                features={this.props.features} 
                selected={this.props.selected}/>
            )
            
        });

        
            return(
                <Total  
                summary={summary}
                selected={this.props.selected}/>
            )
    }
}

export default Cart;