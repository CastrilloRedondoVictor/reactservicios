import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import TablaMultiplicar from './TablaMultiplicar'
import Home from './Home'
import NotFound from './NotFound'

export default class Router extends Component {
  render() {

    function GetComponentTablaMultiplicar () {
        let {num} = useParams()
        return <TablaMultiplicar num={num} />
    }

    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home /> }></Route>
            <Route path="/tablaMultiplicar/:num" element={ <GetComponentTablaMultiplicar/> }/>

            <Route path='*' element={ <NotFound /> }></Route>

        </Routes>
      </BrowserRouter>
    )
  }
}
