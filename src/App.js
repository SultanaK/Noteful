import React from 'react';
import Mainpage  from './components/Mainpage';
import Header  from './components/Header';
import Note  from './components/Note';
import Folder  from './components/Folder'; 
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import STORE from './store'; 
import './App.css';
class App extends React.Component {
  state = STORE
  
  
  render(){
    const {folders, notes}= this.state
    return( 
      <div className="App"> 
        <Header />
        <BrowserRouter>
              <Switch>
                  <Route exact path="/" 
                  component={(props)=> {
                          return <Mainpage 
                          folders={folders} notes={notes}/>
                  }} />
                  <Route path="/note/:note_id" 
                  component={(props)=>{
                          return <Note notes={notes}/>
                  }}/> 
                  <Route path="/folder/:folder_id" component={Folder} /> 
                  <Route  component={Error} /> 
              </Switch> 
        </BrowserRouter>
       </div>
          
    )
  }
  
}

export default App;
