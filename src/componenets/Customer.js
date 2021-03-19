import React from "react";

class Customer extends React.Component{

    render(){
            return (
                <div>
                   <CustomerInfo name={this.props.name} age={this.props.age} addr= {this.props.addr}/>
                   <CustomerProfile name={this.props.name} image={this.props.image} />
                </div>
            );
    }
}


class CustomerInfo extends React.Component{

    render(){
            return (
                <div>
                    <p> {this.props.name}</p>
                    <p> {this.props.age}</p>                   
                    <p> {this.props.addr}</p>  
                </div>
            );
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}


export default Customer;