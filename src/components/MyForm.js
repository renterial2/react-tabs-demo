import React, { Component } from 'react'

class MyForm extends Component {
    constructor(props) {
      super(props);
      this.state = {fName: '', lName: '', loves: 'bananas'}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event, key) {
        this.setState({[key]: event.target.value})
    }
    
    handleSubmit(event) {
        // alert('Form submission: ' + this.state.fName + ' ' + this.state.lName + ' loves ' + this.state.loves + '!')
        var text = this.state.fName + ' ' + this.state.lName + ' loves ' + this.state.loves + '! '
        var i
        for (i = 0; i < 501; i++) {
            document.getElementById("text").insertAdjacentHTML("afterend", text + "<br></br>")
        }
    event.preventDefault()
    }

    render() {
        return (
            <span>
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input 
                        name="fName"
                        value={this.state.fName}
                        onChange={event => this.handleChange(event, 'fName')} />
                </label>
                <br></br>
                <label>
                    Last Name:
                    <input 
                        name="lName" 
                        value={this.state.lName}
                        onChange={event => this.handleChange(event, 'lName')} />
                </label>
                <br></br>
                <label>
                    Select what which you love:
                    <select 
                        value={this.state.loves}
                        onChange={event => this.handleChange(event, 'loves')} >
                            <option value="bananas">bananas</option>
                            <option value="apples">apples</option>
                            <option value="pears">pears</option>
                            <option value="kiwis">kiwis</option>
                            <option value="lamp">lamp!</option>
                    </select>
                </label>
                <br></br>
                <input type="submit" value="Submit Form"/>
            </form>
            <br></br>
            <p id="text"></p>
            </span>
        )
    }
}

export default MyForm