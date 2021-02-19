import React, {Component} from 'react';
import {travel} from './travel-search/travel';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      search:null,
      dataTravel:travel,
    };
  }
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  
  render(){
    
    const trav = this.state.dataTravel.filter((data)=>{
      
      const str=JSON.stringify(data.Airport.Name)
      if(this.state.search == null)
        return null
        else if(str.toLowerCase().includes(this.state.search.toLowerCase()))
        return data
    }).map(data=>{
      return(
        <div>
          <ul>
            <li className="listStyle">
              <span className="idStyle">Name: {data.Airport?data.Airport.Name:""}</span><br></br>
              <span className="idStyle">Year: {data.Time?data.Time.Year:""}</span><br></br>
              <span className="idStyle">Airport Code: {data.Airport?data.Airport.Code:""}</span><br></br>
              <hr className="hrStyle"/>
            </li>
          </ul>
        </div>
      )
    })

    return(
      <div>
        <h1 className="heading"> </h1>
        <input type="text" placeholder="Search Airport" className="elementStyle" onChange={(e)=>this.searchSpace(e)}/>
        <button className="buttonStyle" onClick={(e)=>{this.searchSpace(e)}}>Search</button>
        {trav}
      </div>
    )
  }
}



export default App;