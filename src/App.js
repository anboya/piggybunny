import './App.css';
import 'antd/dist/antd.css'
import React, { Component } from 'react'
import { Route, Redirect,Switch} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import Shop from './components/Shop'
import Comics from './components/Comics'
import About from './components/About';
import Footer from './components/Footer';
export default class App extends Component {

 
  render() {
    return (
      <section style={{fontFamily:'Open Sans',fontSize:18}}>
        <Header />
        <main style={{ paddingTop: '120px' }}>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/comics' component={Comics} />
            <Route path='/shop' component={Shop} />
            <Redirect to='/home' />
          </Switch>
        </main>
        <Footer />
    </section>
    )
  }
}
