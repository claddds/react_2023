import React from 'react';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";

// 1. App를 BrowserRouter로 감싼다.
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        {/**첫 페이지를 의미한다. */}
        <Route path="/">
          <DayList />
        </Route> 

        <Route path="/day">
          <Day />
        </Route>
        </Routes>
      </div>
    </BrowserRouter>
  ); 
}
export default App;