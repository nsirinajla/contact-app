import React from 'react'
import axios from 'axios'

class AddContact extends React.Component{
constructor(props){
  super(props)
    this.state={
      name:"",
      tel:"",
    email:""
   }
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

    <h1>Add contact page</h1>
<form style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
       <label> Contact Name </label>
       <input name="name" onChange={this.handleState}/>

       <label> Contact Thelephone</label>
       <input  name="tel" onChange={this.handleState}/>

       <label> Contact Email </label>
       <input   name="email" onChange={this.handleState}/>

       <input type ="button" value ="add contact" onClick={()=>this.addContact(this.state)}/>
</form>
      </div>
                  }}
  export default AddContact;
