import React from 'react'
import {Route}from 'react-router-dom'
import Contact from './Contact'
import AddContact from './AddContact'
import ModifyContact from './ModifyContact'

 class Routes extends React.Component{
   render(){
     return <div>
     <Route exact path ="/contact" component={Contact}/> 
     <Route exact path ="/add_contact" component={AddContact}/>
     <Route exact path ="/modify_contact/:id" render={(props)=><ModifyContact id={props}/>}/>



     </div>
   }
 }
 export default Routes
