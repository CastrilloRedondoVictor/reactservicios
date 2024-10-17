import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class ServicioCustomers extends Component {


    state = {
        customers: []
    }

    

    componentDidMount = () => {
    let request = 'customers.json'
        axios.get(Global.urlCustomers + request).then((response) => {
            this.setState({
                customers: response.data.results
            })
        })
    }


  render() {
    return (
      <div>
        <h1>Servicio API Costumers</h1>
        {
            this.state.customers.map((customer, index) => {
                return(<h3 key={index}>{customer.contactName}</h3>)
            })
        }
      </div>
    )
  }
}
