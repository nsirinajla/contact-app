import React from 'react'
import axios from 'axios'

class ModifyContact extends React.Component{
constructor(props){
  super(props)
    this.state={
      name:"",
      tel:"",
      email:""
   }
}
componentDidMount=()=>{
  axios.get(`/contact/${this.props.id.match.params.id}`).then(
    res=>this.setState({
        name :res.data.name,
        tel :res.data.tel,
        email :res.data.email,
    })
  )
}
//pour modifier dans le backend
updateContact=(value)=>{
  axios.put(`/contact/${this.props.id.match.params.id}`,{...value})
}

handleState = e =>{
  this.setState({
    [e.target.name]:e.target.value
  })
}
addContact =(value)=>{
  axios.post('/contacts',{...value})
}
  render(){

    return <div className="add-contact-container">
    <h1>Modify contact page</h1>
<form style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
       <label> Contact Name </label>
       <input name="name" onChange={this.handleState} value={this.state.name}/>

       <label> Contact Tel</label>
       <input  name="tel" onChange={this.handleState} value={this.state.tel}/>

       <label> Contact Email </label>
       <input   name="email" onChange={this.handleState} value={this.state.email}/>

       <input type ="button" value ="modify contact" onClick={()=>this.updateContact(this.state)}/>
</form>
      </div>
                  }}
  export default  ModifyContact  ;
