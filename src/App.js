import './App.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AppRoutes from './Routes/AppRoutes';

AOS.init();

function App() {
  let title = 'Build Better'
  document.title = title;
  
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
     
    </div>
  );
}

export default App;
