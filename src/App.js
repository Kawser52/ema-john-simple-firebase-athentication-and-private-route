import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview'
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Shop/>}/>
        <Route exact path="/Shop" element={<Shop/>}/>
        <Route exact path="/review" element={<OrderReview/>}></Route>
        <Route exact path="/inventory" element={<Inventory/>}></Route>
        <Route exact path = '/order' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route exact path="*" element ={<NotFound/>}>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
