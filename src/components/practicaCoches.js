import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class PracticaCoches extends Component {


    inpMarca = React.createRef();


    state = {
        coches: [],
        cochesFiltrados: []
    }

    getCoches = () => {
        let request = 'webresources/coches'
        axios.get(Global.urlCoches + request).then((response) => {
            this.setState({
                coches: response.data,
                cochesFiltrados: response.data
            })
        })
    }


    componentDidMount = () => {
        this.getCoches();
    }

    buscarCoche = (e) => {
        e.preventDefault();

        let marca = this.inpMarca.current.value

        if(marca) {
            let cochesMarca = this.state.coches.filter(coche => coche.marca.toLowerCase() == marca.toLowerCase())
            this.setState({
                cochesFiltrados: cochesMarca
            })
        } else {
            this.getCoches();
        }
    }


  render() {
    return (
      <div>
        <h1>Buscador Coches</h1>
        <hr />
        <form onSubmit={this.buscarCoche}>
            <label>Marca: </label>
            <input type="text" ref={this.inpMarca} />
            <button type='submit'>BUSCAR</button>
        </form>
        <hr />
        <table border='1'>
            <thead>
                <tr>
                    <th>Coche</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.cochesFiltrados.length > 0 ?
                    (
                        this.state.cochesFiltrados.map((coche, index) => {
                            return(
                                <tr key={index -1}>
                                    <td key={index}>{coche.marca} {coche.modelo}</td>
                                    <td key={index + 1}>{coche.conductor}</td>
                                    <td key={index + 2}><img  style={{width: '200px', height: '150px'}} src={coche.imagen}></img></td>
                                </tr>
                            )
                        })
                    ):
                    (
                        <tr><td>No hay coches</td></tr>
                    )
                }
            </tbody>
        </table>
      </div>
    )
  }
}
