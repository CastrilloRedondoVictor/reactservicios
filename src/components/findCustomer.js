import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class FindCustomer extends Component {

    customerId = React.createRef();

    state = {
        customer: null
    }

    findCustomer = (e) => {

        e.preventDefault()

        let id = this.customerId.current.value

        let request = 'customers/' + id + '.json'
        axios.get(Global.urlCustomers + request).then((response) => {
            this.setState({
                customer: response.data.customer
            })
        })
    }
    


  render() {
    return (
      <div>
        <form onSubmit={this.findCustomer}>
            <input type="text" ref={this.customerId} />
            <button type='submit'>BUSCAR</button>
        </form>

        {
            this.state.customer &&
            (
                <div>
                    <h3>{this.state.customer.contactName}</h3>
                    <h3>{this.state.customer.address}</h3>
                    <h3>{this.state.customer.city}</h3>
                    <h3>{this.state.customer.phone}</h3>
                </div>
            )
        }
      </div>
    )
  }
}
