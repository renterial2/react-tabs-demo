import React, { Component } from 'react'
import LoginForm from './LoginForm'
import Success from './Success'

class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: '',
         showAlert: false,
         alertMessage: '',
         success: false
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChangeUserName = this.handleChangeUserName.bind(this)
      this.handleChangePassword = this.handleChangePassword.bind(this)
    }
    
    handleChangeUserName (e) {
        // console.log('username event', e.target.value)
        this.setState({username: e.target.value})
    }

    handleChangePassword (e) {
        // console.log('password event', e.target.value)
        this.setState({password : e.target.value})
    }

    handleSubmit (e) {
        e.preventDefault()
        if (!this.state.username) {
            this.setState({showAlert: true, alertMessage: 'Please enter a username'})
        }
        else if (!this.state.password) {
            this.setState({showAlert: true, alertMessage: 'Please enter a password'})
        } else {
            this.clearAlert()
            this.setState({success: true})
        }
    }

    clearAlert () {
        this.setState({showAlert: false, alertMessage: ''})
    }

    resetForm () {
        this.clearAlert()
        this.setState({username: '', password: '', success: false})
    }

    render() {
        return (
            <section className="content">
                <div style={{height: '40px'}} />
                    <div className="columns is-centered">
                        <div className="column is-half">
                            {this.state.success ? 
                            <Success reset={() => this.resetForm()}/> : 
                            <LoginForm handleSubmit={this.handleSubmit} 
                                       usernameVal={this.passwordVal}
                                       passwordVal={this.passwordVal}
                                       showAlert={this.showAlert}
                                       alertMessage={this.alertMessage}
                                       handleChangeUserName={this.handleChangeUserName}
                                       handleChangePassword={this.handleChangePassword}/>}
                        </div>
                    </div>
                </section>
        )
    }
}

export default Login