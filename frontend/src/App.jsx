import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Card from './Components/Card'
import TopBar from './Components/Top_bar'
import LOGIN from './LOGIN';
import Home from './Home';
import Men_tshirts from './men_tshirts';
import PaymentPage from './Components/payment';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LOGIN/>}  />
        <Route path="/" element={<Home/>}  />
        
        <Route path="/men_tees" element={<Men_tshirts/>}  />
        <Route path="/payment" element={<PaymentPage/>}  />
        

      </Routes>


    </Router>
  )
}

export default App
