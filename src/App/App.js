import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header_&_Footer/Header';
import HomePage from '../Components/HomePage/HomePage';
import Footer from '../Components/Header_&_Footer/Footer';
import Login from '../Components/Login_&_Regis/Login';
import StaticForm from '../Components/Login_&_Regis/Register';
import ContactUs from '../Components/ExtraPages/ContactUs';
import AboutUs from '../Components/ExtraPages/AboutUs';
import Courses from '../Components/ExtraPages/Courses';
import BlogPage from '../Components/ExtraPages/BlogPage';
import AdminLogin from '../Components/Admin/AdminLogin';
import AdminDashboard from '../Components/Admin/AdminDashboard';
import ForgotPassword from '../Components/ForgotPass/ForgotPass';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<StaticForm />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
