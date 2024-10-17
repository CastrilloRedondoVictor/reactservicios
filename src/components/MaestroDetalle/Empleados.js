import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleados extends Component {

    state = {
        empleados: []
    }


    componentDidMount = () => {
        this.loadEmpleados();
    }

    componentDidUpdate = () => {
        this.loadEmpleados();
    }

    loadEmpleados = () => {
        let departamento = this.props.idDepartamento

        let request = 'api/Empleados/EmpleadosDepartamento/' + departamento

        axios.get(Global.urlEmpleados + request).then((response) => {
            this.setState({
                empleados: response.data
            })
        })
    }

  render() {
    return (
      <div>
        <h1>Empleados</h1>
        {
            this.state.empleados.map((empleado, index) => {
                return(<h3 key={index}>{empleado.apellido}</h3>)
            })
        }
      </div>
    )
  }
}
