import React, { useState } from 'react';
import Joke from './joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Gallery from './Gallery'
import Matrix from './matrix';

function App() {
    const [ userQuery, setUserQuery ] = useState('');

    const updateUserQuery = event => {
      setUserQuery(event.target.value)
    }

    const searchQuery = () => {
      window.open(`https://www.google.com/search?q=${userQuery}`, '_blank');
    }

    const handleKeyPress = event => {
      if( event.key === 'Enter' ) {
        searchQuery();
      }
    }
    
    return (
      <div className="App">
        <h1>Hello Gugu</h1>
        <div className="form">
          <input type="text" value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress}/>
          <div>{userQuery}</div>
          <button onClick={searchQuery}>Search</button>
        </div>
        <hr />
        <Joke />
        <hr/>
        <Stories />
        <hr />
        <Tasks />
        <hr/>
        <Gallery />
        <hr/>
        <Matrix />
      </div>
    );
} 

export default App;
