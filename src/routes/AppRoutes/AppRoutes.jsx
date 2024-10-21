import { Routes, Route } from "react-router-dom";
import {
  Home,
  Shop,
  Cart,
  Order,
  NotFound,
  SignUp,
  Login,
  Finish,
  Main,
  Profile,
  ProfileOrders,
  Settings,
} from "../../pages";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/signup" />;
  } else {
    return children;
  }
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products/:id" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/checkout" element={<Finish />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile/*"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      >
        <Route index element={<Settings />} />
        <Route path="settings" element={<Settings />} />
        <Route path="orders" element={<ProfileOrders />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
