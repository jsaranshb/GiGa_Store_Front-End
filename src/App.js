import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CartScreen from './screens/CartScreen';
import CategoryScreen from './screens/CategoryScreen';
import {LoginScreen} from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path="/" element={ <HomeScreen /> } />
              <Route path='/category/:id' element={ <CategoryScreen /> } />
              <Route path="/product/:id" element={ <ProductScreen /> } />
              <Route path='/cart/:id' element={ <CartScreen /> } />
              <Route path='/cart/' element={ <CartScreen /> } />
              <Route path='/login/' element={ <LoginScreen /> } />
              <Route path='/register/' element={ <RegisterScreen /> } />
              <Route path='/profile/' element={ <ProfileScreen /> } />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
