import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Chat from "./pages/Chat";
import Home from './pages/Home';
import "./styles/App.css"


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
