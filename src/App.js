import logo from './logo.svg';
import './App.css';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Todo from './pages/Todo'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/LoginForm" element={<LoginForm />}></Route>
        <Route path="/SignupForm" element={<SignupForm />}></Route>

        <Route path="/Todo" element={<Todo />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
