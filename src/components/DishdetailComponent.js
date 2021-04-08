import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishdetailComponent extends Component{
    
    render(){
        if (this.props.dishDetails != null){
            return(
                <div>
                <Card>
                    <CardImg top src={this.props.dishDetails.image} alt={this.props.dishDetails.name} />
                    <CardBody>
                      <CardTitle tag="h6">{this.props.dishDetails.name}</CardTitle>
                      <CardText>{this.props.dishDetails.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}
export default DishdetailComponent;