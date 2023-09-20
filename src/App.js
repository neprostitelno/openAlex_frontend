import './App.css';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import Footer from "./components/footer/footer";

function App() {
    return <div className='app'>
        <div className="app__content">
            <header className="app__header">
                <Header/>
            </header>
            <main className="app__main">
                <Routes>
                    <Route path='/'
                           element={<HomePage/>}/>
                </Routes>
            </main>
            <footer className="app__footer">
                <Footer/>
            </footer>
        </div>
    </div>
}

export default App;
