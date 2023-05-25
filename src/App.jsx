import Nav from './Nav';
// import {Home, About, Shop, ShopItem} from './pages';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Nav />}>
            {/* <Route index element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/shop">
              <Route index element={<Shop />}/>
              <Route path=":id" element={<ShopItem />}/>
            </Route>
            <Route path="*" element={<h1>Not found</h1>}></Route> */}
          </Route>
        </Routes>
    </div>
  )
}

export default App
