import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import UserLayout from './components/Layout/UserLayout';
import AdminLayout from './components/Admin/AdminLayout';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPages from './pages/CollectionPages';
import ProductsDetails from './components/Products/ProductsDetails';
import Checkout from './components/Cart/Checkout';
import Payment from './components/Cart/Payment';
import Completion from './pages/Completion';
import OrderdetailsPage from './pages/OrderdetailsPage';
import MyOrders from './pages/MyOrders';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from './components/Admin/UserManagement';
import AboutUs from './components/Common/AboutUs';
import ProductManagement from './components/Admin/ProductManagement';
import EditPage from './components/Admin/EditPage';
import OrderManagement from './components/Admin/OrderManagement';
import { Provider } from "react-redux";
import store from '../redux/store';
import ProtecedRoutes from './components/Common/ProtecedRoutes';
import BlogSection from './pages/Blog';
import BlogPost from './pages/Blog'
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function AnimatedAppRoutes() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>

      {isHomePage ? (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<UserLayout />}>
              <Route
                index
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      ) : (
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collections/:collection" element={<CollectionPages />} />
            <Route path="products/:id" element={<ProductsDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
            <Route path="completion" element={<Completion />} />
            <Route path="order/:id" element={<OrderdetailsPage />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="about" element={<PageWrapper><AboutUs /></PageWrapper>} />
            <Route path="ContactPage" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="blog" element={<PageWrapper><BlogSection /></PageWrapper>} />
            <Route path="blog/:id" element={<PageWrapper><BlogPost /></PageWrapper>} />
          </Route>
          <Route path="/admin" element={<ProtecedRoutes role="admin"><AdminLayout /></ProtecedRoutes>}>
            <Route index element={<PageWrapper><AdminHomePage /></PageWrapper>} />
            <Route path="users" element={<PageWrapper><UserManagement /></PageWrapper>} />
            <Route path="products" element={<PageWrapper><ProductManagement /></PageWrapper>} />
            <Route path="products/:id/edit" element={<PageWrapper><EditPage /></PageWrapper>} />
            <Route path="orders" element={<PageWrapper><OrderManagement /></PageWrapper>} />
          </Route>
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="bottom-right" />
        <AnimatedAppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
