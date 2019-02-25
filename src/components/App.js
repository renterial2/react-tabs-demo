import React, { Component } from 'react'
import '../styles/App.css'
import Tabs from './Tabs'
import HelloReact from './HelloReact'
import LoremIpsum from './LoremIpsum'
import Login from './Login'
import MyForm from './MyForm'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      activeTab: 0
    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab(newTab) {
    this.setState({activeTab: newTab })
  }
  
  render() {
    return (
      <section className="section">
        <div className="container">
          <Tabs activeTab={this.state.activeTab}
                changeTab={this.changeTab}/>
          {this.state.activeTab  === 0 ? <HelloReact /> : null}
          {this.state.activeTab  === 1 ? <LoremIpsum /> : null}
          {this.state.activeTab  === 2 ? <Login /> : null} 
          {this.state.activeTab  === 3 ? <MyForm /> : null}
        </div>
      </section>
    )
  }
}

export default App