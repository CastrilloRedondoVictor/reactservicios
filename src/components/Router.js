import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' ></Route>
            <Route path='/' ></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
