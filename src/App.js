import React, { Component } from 'react'
import { isRouteErrorResponse } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItems from './components/NewsItems';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API

  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
    <Router>
      <Navbar/>
    <LoadingBar
        color="red"
        progress={this.state.progress}
        
      />   
      

        
       
      
        <Routes>
        <Route path='/' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  country="in" pageSize={8} category="general"/>}></Route>
        <Route path='/Business' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}   key="Business" country="in" pageSize={8} category="Business"/>}></Route>
        <Route path='/entertainment' element={<News   setProgress={this.setProgress} apiKey={this.apiKey}  key="Entertainment" country="in" pageSize={8} category="Entertainment"/>} ></Route>
        <Route path='/general' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}   key="General" country="in" pageSize={8} category="General"/>}></Route>
        <Route path='/health' element={<News   setProgress={this.setProgress} apiKey={this.apiKey}  key="Health" country="in" pageSize={8} category="Health"/>}></Route>
        <Route path='/science' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}   key="Science" country="in" pageSize={8} category="Science"/>}></Route>
        <Route path='/sports' element={<News  setProgress={this.setProgress}  apiKey={this.apiKey}  key="Sports" country="in" pageSize={8} category="Sports"/>}></Route>
        <Route path='/technology' element={<News  setProgress={this.setProgress} apiKey={this.apiKey}   key="Technology" country="in" pageSize={8} category="Technology"/>}></Route>

       
      </Routes> 
    </Router>
       

      </div>
    )
  }
}



