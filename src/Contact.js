import React from 'react'
import axios from 'axios'
import ContactItem from './ContactItem'



class Contact extends React.Component {
constructor (props){
  super (props)
  this.state={
    contacts:[]
  }
}

componentDidMount(){
axios.get('/contacts').then(
  res=>{
    this.setState({
  contacts:res.data
    })
  }
)
}

  render (){
    return <div className ="Contacts-container">
    <h1>Hello</h1>
    <div style={{display : 'flex'}}>
    {this.state.contacts.map((el,i)=>{
      return <ContactItem item={el}/>
    })
  }
</div>
    </div>
  }

}
export default Contact
