import React from 'react';
import { players } from './api';
import SearchResults from './components/search_results'

function App() {
  return (
    <div>
       <SearchResults masterList={players}/>
    </div>
  );
}

export default App;
