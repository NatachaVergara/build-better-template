import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AppRoutes from './Routes/AppRoutes';

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
