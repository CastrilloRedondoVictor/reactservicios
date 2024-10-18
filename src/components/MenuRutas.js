import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <h2><a href="/">Home</a></h2>
        <h3><a href="/tablaMultiplicar/1">Tabla del 1</a></h3>
        <h3><a href="/tablaMultiplicar/3">Tabla del 3</a></h3>
        <h3><a href="/tablaMultiplicar/5">Tabla del 5</a></h3>
        <h3><a href="/enlaceErroneo">Enlace erroneo</a></h3>
      </div>
    )
  }
}
