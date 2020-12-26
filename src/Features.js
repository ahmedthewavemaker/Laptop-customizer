import React, { Component } from 'react';
import Selected from './Selected';



class Features extends Component {
    render() {
       
        
        const {feature, idx}= this.props;
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
            return (
            <   Selected 
            feature={feature}
            item = {item}
            selected={this.props.selected} 
            updateFeature={this.props.updateFeature} />
            )
            
        })



        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        )
    }
}


export default Features;