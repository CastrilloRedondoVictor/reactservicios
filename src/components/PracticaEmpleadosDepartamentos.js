import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class PracticaEmpleadosDepartamentos extends Component {

    selectDepartamento = React.createRef();

    state = {
        departamentos: [],
        empleados: [],
    }

    componentDidMount = () => {

        let request = 'api/departamentos'

        axios.get(Global.urlDepartamentos + request).then((response) => {
            this.setState({
                departamentos: response.data
            })
        })

    }


    buscarEmpleados = (e) =>{
        e.preventDefault()
        let departamento = this.selectDepartamento.current.value

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
        <h1>Practica Empleados Departamentos</h1>
        <form onSubmit={this.buscarEmpleados}>
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
            this.state.empleados.map((emp, index) => {
                return(<h3 key={index}>{emp.apellido}</h3>)
            })
        }
      </div>
    )
  }
}
