import React, { Component } from 'react'

class LoremIpsum extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         numParagraphs: 1
      }
    //   this.increment = this.increment.bind(this)
    //   this.decrement = this.decrement.bind(this)
    }

    increment () {
        this.setState({numParagraphs: this.state.numParagraphs + 1})
    }

    decrement () {
        if (this.state.numParagraphs === 0) return
        this.setState({numParagraphs: this.state.numParagraphs -  1})
    }

    render() {  
        return (
            <section className="content">
                <h1 className="title">Number of Lorem Ipsum paragraphs: {this.state.numParagraphs}</h1>
                    <div className="buttons">
                        <button className="button is-info is-medium"
                                onClick={() => this.increment()}>
                            Add Paragraph
                        </button>
                        <button className="button is-info is-medium"
                                onClick={() => this.decrement()}>
                            Remove Paragraph
                        </button>
                    </div>
                    {[...Array(this.state.numParagraphs)].map((item, index) => <p key={index}>{loremipsum}</p>)}
            </section>
            )
    }
}

const loremipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus at magna
     sit amet tristique. Suspendisse ut varius dui, tincidunt semper sapien. Nullam bibendum eros lectus, 
     eu posuere velit ultrices sed. Proin consectetur lacus nec metus ullamcorper, ac tempus felis 
     eleifend. Donec eu euismod nisl. Morbi fringilla justo sit amet blandit dictum. Fusce sollicitudin 
     ipsum ut mauris posuere pharetra. Praesent vitae elit nec ex placerat faucibus a in diam. Sed 
     bibendum sit amet dui at facilisis. Vivamus vitae felis lacinia, gravida lectus id, placerat ipsum. 
     Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer feugiat, sem in interdum 
     tempor, nisi enim mollis nibh, luctus laoreet massa ligula nec ex.`

export default LoremIpsum
