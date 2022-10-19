import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Navigate,
} from 'react-router-dom';
import './App.css';

import Home from './screens/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './screens/About';
import Tickets from './screens/Tickets';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Account from './screens/Account';

function App() {
  const params = useParams();
  console.log(params);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/account" element={<Account />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
