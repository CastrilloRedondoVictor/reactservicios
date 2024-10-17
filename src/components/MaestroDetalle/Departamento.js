import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import Empleados from './Empleados'

export default class Departamento extends Component {

    state = {
        departamentos: [],
        departamento: 0,
    }

    selectDepartamento = React.createRef();


    loadDepartamentos = () => {
        let request = 'api/departamentos'

        axios.get(Global.urlDepartamentos + request).then((response) => {
            this.setState({
                departamentos: response.data
            })
        })
    }

    setDepartamento = (e) => {
        e.preventDefault()
        this.setState({
            departamento: this.selectDepartamento.current.value
        })
    }


    componentDidMount = () => {
        this.loadDepartamentos();
    }

  render() {
    return (
      <div>
        <h1>Departamento</h1>
        <form onSubmit={this.setDepartamento}>
            <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((dep, index) => {
                        return(<option value={dep.Numero} key={index}>{dep.Nombre}</option>)
                    })
                }
            </select>
            <button type='submit'>BUSCAR</button>
        </form>
        {
            this.state.departamento != 0 &&
            (
                <Empleados idDepartamento={this.state.departamento}></Empleados>
            )
        }
      </div>
    )
  }
}
