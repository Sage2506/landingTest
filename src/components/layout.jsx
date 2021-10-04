import { Component } from "react";
import Header from "./header";
import Footer from "./footer";
export class Layout extends Component {
 render(){
   return(
     <div className="main-container" >
       <Header />
         {this.props.children}
       <Footer/>
     </div>
   )
 }
}