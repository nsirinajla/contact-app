import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class ContactItem extends React.Component{
deleteContact =(value)=>{
  axios.delete(`/contact/${value}`)
}

render(){
  const item =this.props.item
  return <div style={{border:"3px solid grey"}}>
          <h1> Contact name : {item.name}</h1>
            <h1>contact phone:{item.phone}</h1>
              <h1>contact email:{item.email}</h1>

              <Link to={`/modify_contact/${item._id}`}>
              <input type ="button" value="modifier"/>
              </Link>
                <input type ="button" value="suprimer"  onClick={()=>this.deleteContact(item._id)}/>
  </div>

}}
export default  ContactItem
