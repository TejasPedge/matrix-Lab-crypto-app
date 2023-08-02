import logo from './logo.svg';
import './App.css';
import { Box, Image } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <Box 
     style = {{  background : "url(BGImage9398.png) 50%", backgroundRepeat : "no-repeat", backgroundSize : "cover",backgroundPosition : "center"}}
     height={'100vh'}
     color = {'#fff'}
    >
      <Box background={'rgba(0, 0, 0, 0.749)'} height={'100vh'}>
        <Sidebar />
        <AllRoutes />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
