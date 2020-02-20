import React, { Component } from "react";
import './Conversor.css';

export default class Conversor extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        }
        this.converter = this.converter.bind(this)
    }

    converter() {
        let for_to = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${for_to}&compact=y`

        if (this.state.moedaA_valor ===  ""  || this.state.moedaA_valor === undefined) {
            alert("Nenhum valor informado!!");
            this.state.moedaB_valor = 0;
        } else {
            fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[for_to].val;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
                this.setState({ moedaB_valor });
            });     
        }
    }
    
    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=> this.setState({moedaA_valor: event.target.value})} />
                <input type="button" className="btnConverter" value="Converter" onClick={this.converter} />
                <h2>Valor convertido: {this.state.moedaB_valor}</h2>
            </div>
        );
    }
}