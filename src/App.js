import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IntegralCalculator from './Components/IntegralCalculator';
import NavBar from './Components/NavBar';
import Graph from './Components/Graph';
import MethodInfo from './Components/MethodInfo';
import {DataProvider} from './Components/DataProvider';
import QuestionsAndAnswersPage from './Components/QuestionsAndAnswers';

function App() {

  return (
    <DataProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/graph" element={<Graph/>} />
          <Route path="/trapezoid-method" element={<MethodInfo />} />
          <Route path="/" element={<IntegralCalculator/>} />
          <Route path="/qna" element={<QuestionsAndAnswersPage/>} />
        </Routes>

      </div>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
