import React from 'react';


// Une premiere facon de recuperer la valeur dans le DOM

// class Home extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//     this.input = null
//   }

//   handleClick(e) {
//     console.log(e, this.input.value)
//   }

//   render () {
//     return <>
//       <input type="text" ref={(ref) => this.input = ref} />
//       <button onClick={this.handleClick}>Tester</button>
//     </>
//   }
// }


//C'est toujours la meme chose pour recuper dans le DOM on cree une ref qu'on passe a l'element et quand on a besoin on utilise la ref.current 
// et on récupère la valeur

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
    return <>
      <input type="text" ref={this.input} />
      <button onClick={this.handleClick}>Tester</button>
    </>
  }
}

export default Home;