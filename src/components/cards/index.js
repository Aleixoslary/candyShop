import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

import '../../assets/css/cards/Cards.css'

class index extends Component {
    constructor(props) {
        super(props);

        this.state = {amount: this.props.amount};
    }

    soma=() =>{
        let result = this.state.amount + 1
        this.setState({amount: result})
    }

  render() {
    return (
            <div className="card">
                <img src={this.props.image} className="cardImg"/>
                <div className="cardBox">Preço: {this.props.price}</div>
                <div className="cardBox">Quantidade: {this.state.amount} unidades</div>

                <button className="cardBtn" onClick={this.soma}>Aumentar Quantidade</button>
                <p><button className="cardBtn">Comprar</button></p>
            </div>
    )
  }
}

export default index;