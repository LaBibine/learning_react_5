import React from 'react';


//Une premiere facon de recuperer la valeur dans le DOM

{/* class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.input = null
  }

  handleClick(e) {
    console.log(e, this.input.value)
  }

  render () {
    return <>
      <input type="text" ref={(ref) => this.input = ref} />
      <button onClick={this.handleClick}>Tester</button>
    </>
  }
} */}


//C'est toujours la meme chose pour recuper dans le DOM on cree une ref qu'on passe a l'element et quand on a besoin on utilise la ref.current 
// et on récupère la valeur. Si il y a des champs non controlles et on veut recuperer la valeur ou la changer ou brancher des composants exeternes a react
// Ce sont les deux seules raisons d'utiliser ref

{/*class Home extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.input = React.createRef()
  }

  handleClick (e) {
    console.log(this.input.current.value)
  }

  render() {
    return <>
      <input type="text" ref={this.input} />
      <button onClick={this.handleClick}>Tester</button>
    </>
  }
} */}

//Une autre approche

{/*const Field = React.forwardRef(function (props, ref) {
  return <div className="form-group">
    <input type="text" className="form-control" ref={ref} />
  </div>
})

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.input = React.createRef()
  }

  handleClick (e) {
    console.log(this.input.current.value)
  }

  render() {
    console.log(this.input)
    return <>
      <Field ref={this.input}/>
      <button onClick={this.handleClick}>Tester</button>
    </>
  }
} */}

// une autre approche avec des class plutot que des functions mais un peu moins evidente

class Field extends React.Component {
  render () {
    return <div className="form-group">
      <label htmlFor="">{this.props.label}</label>
    <input type="text" className="form-control" ref={this.props.forwardRef} />
  </div>
  }
}

const FieldWithRef = React.forwardRef((props, ref) => {
  return <Field forwardRef={ref} {...props}/>
} )
class Home extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.input = React.createRef()
  }

  handleClick (e) {
    console.log(this.input.current.value)
  }

  render() {
    console.log(this.input)
    return <>
      <FieldWithRef ref={this.input}/>
      <button onClick={this.handleClick}>Tester</button>
    </>
  }
}

export default Home;