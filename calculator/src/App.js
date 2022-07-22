import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import CalculatorPage from './pages/CalculatorPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Calculator" element={<CalculatorPage />} exact />
          <Route path="/Quote" element={<Quote />} exact />
        </Routes>
      </Router>
    );
  }
}
export default App;
