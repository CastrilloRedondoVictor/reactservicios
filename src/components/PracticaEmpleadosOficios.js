import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class PracticaEmpleadosOficios extends Component {

    selectOficio = React.createRef();


    state = {
        oficios: [],
        empSelected: []
    }

    componentDidMount = () => {

        let request = 'api/Empleados'

        axios.get(Global.urlEmpleados + request).then((response) => {
            let emps = []
            response.data.map((resp, index) => {
                if (!emps.includes(resp.oficio)) {
                    emps.push(resp.oficio)
                }
            })
            this.setState({
                oficios: emps
            })
        })

    }

    buscarEmpleados = (e) => {

        e.preventDefault();

        let oficio = this.selectOficio.current.value

        let request = 'api/Empleados/EmpleadosOficio/' + oficio

        axios.get(Global.urlEmpleados + request).then((response) => {
            this.setState({
                empSelected: response.data
            })
        })
    }

  render() {
    return (
      <div>
        <h1>Practica Empleados Oficios</h1>
        <form onSubmit={this.buscarEmpleados}>
          <select ref={this.selectOficio}>
              {
                  this.state.oficios.map((oficio, index) => {
                      return(<option value={oficio} key={index}>{oficio}</option>)
                  })
              }
          </select>
          <button type='submit'>BUSCAR</button>
        </form>
        {
            this.state.empSelected.map((emp, index) => {
                return(<h3 key={index}>{emp.apellido}</h3>)
            })
        }
      </div>
    )
  }
}
