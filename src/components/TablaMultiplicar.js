import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    state = {
        tabla: []
    }

    componentDidMount = () => {
        console.log(this.props)
        let num = parseInt(this.props.num);
        let aux = [];
        for (let i = 0; i <= 10; i++) {
            aux.push(num*i)
        }
        this.setState({
            tabla: aux
        })
    }

  render() {
    return (
      <div>
        <h1>Tabla Multiplicar Rutas Número {this.props.num}</h1>
        <ul>
            {
                this.state.tabla.map((res, index) => {
                    return(
                        <li key={index}>{this.props.num} * {index} = {res}</li>
                    )
                })
            }
        </ul>
        <h3><a href="/">VOLVER</a></h3>

      </div>
    )
  }
}
