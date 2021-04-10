import  React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }

    renderCampsite(campsite){
        return(
            <div class="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    render() {
        if(this.props.campsite != null){
            return(
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                </div>
            );
        }else {
            return(
                <div></div>
            );
        }
    };
}

export default CampsiteInfo;