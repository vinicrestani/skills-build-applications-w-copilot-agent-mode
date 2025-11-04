

import React from 'react';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import logo from './logo192.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container className="mt-4">
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 rounded d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
              <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
              <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
              <Nav.Link as={Link} to="/users">Users</Nav.Link>
              <Nav.Link as={Link} to="/workouts">Workouts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="text-center"><h1 className="display-4">Bem-vindo ao Octofit Tracker!</h1><p className="lead">Acompanhe suas atividades, equipes, treinos e mais!</p></div>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
