import React, { Component } from 'react';
import Features from './Features';



class Customize extends Component {

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
         return(
            <Features features={this.props.features}
            idx={idx}
            feature={feature}
            selected={this.props.selected} 
            updateFeature={this.props.updateFeature}/>

         )
            })

            return (

                <form className="main__form" >
                    <h2>Customize your laptop</h2>
                    {features}
                    
                </form>
            )

        }
}


    export default Customize;