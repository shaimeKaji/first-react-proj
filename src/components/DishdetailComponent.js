import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishdetailComponent extends Component{
    
    render(){
        if (this.props.dishDetails != null){
            return(
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.dishDetails.image} alt={this.props.dishDetails.name} />
                    <CardBody>
                      <CardTitle tag="h6">{this.props.dishDetails.name}</CardTitle>
                      <CardText>{this.props.dishDetails.description}</CardText>
                    </CardBody>
                </Card>
            </div>
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