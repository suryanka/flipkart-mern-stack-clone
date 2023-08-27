import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DataProvider from "./Context/DataProvider";
import DetailView from "./Components/Details/DetailView";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products/:id' element={<DetailView/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Box>
      </Router>
    </DataProvider>
  );
}

export default App;
