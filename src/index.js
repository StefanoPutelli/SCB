import React from 'react'
import ReactDOM from "react-dom";
import data from './csvjson.json'


const myStyle = {
    textalign: "center",
    display:"flex"
}


function Header({ title }) {
  return <h1 style={{textAlign:'center'}}>{title}</h1>
}

function Subtitle({subTitle}){
  return <h2 style={{textAlign:'center'}}>{subTitle}</h2>
}

// function ButtonZAP(){
//     return (<div style={myStyle}>
//                 <button onClick={getCel} style={{margin:'auto'}}>ZAP</button>
//             </div>
//             )
// }

function List(props){
  let cel = []
  for(let i = 0; i < data.length; i++){
    if(data[i].Height < parseInt(props.name)){
      cel.push(data[i].Name + " " + data[i].Height)
    }
  }
  const lista = cel.map((dato) =>  <li>{dato}</li>);
  return(
    <li style={{textAlign:'center'}}>{lista}</li>
  )
}

class FormNome extends React.Component {

    formStyle={
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    render() {
      return (
        <div>
        <form style={this.formStyle}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />        
          </label>
        </form>
        {this.state.value ? (<List name={this.state.value}/>) : <h2 style={{textAlign:'center'}}>Insert a value above</h2>}
        </div>
      );
    }
  }


function HomePage() {
  return (
    <div>
      <Header title="BOOST YOUR SELF CONFIDENCE" />
      <Subtitle subTitle="Insert your height and find VIPs shorter than you!"/>
      <FormNome/>

    </div>
  )
}

ReactDOM.render(HomePage(),document.getElementById('homepage'))
