import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview'
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
        <Routes>
          <Route exact path="/" element={<Shop/>}/>
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path="/review" element={<OrderReview/>}/>
          <Route exact path="/inventory" element={<Inventory/>}/>
          <Route exact path = '/order' element={
          <PrivateRoute>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          }/>
          <Route path = '/login' element={<Login></Login>}/>
          <Route path='/register' element={<Register></Register>}/>
          <Route exact path="*" element ={<NotFound/>}>
          </Route>
        </Routes>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
