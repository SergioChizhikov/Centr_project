import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Contact from "./components/Contact/Contact";
import {Route, BrowserRouter} from "react-router-dom";
import Aboutus from "./components/About/Aboutus";
import Services from "./components/Services/Services";
import Carousel_2 from "./components/Carousel/CarouselAbout";
import Training from "./components/Training/Training";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Route exact path="/" render={() => {
                    return <div>
                        <Main/>
                    </div>
                }}/>
                <Route path="/blog" render={() => {
                    return <div>
                        <Blog/>
                    </div>
                }}/>
                <Route path="/contact" render={() => {
                    return <div>
                        <Contact/>
                    </div>
                }}/>
                <Route path="/about" render={() => {
                    return <div>
                        <Aboutus/>
                    </div>
                }}/>
                <Route path="/services" render={() => {
                    return <div>
                        <Services/>
                    </div>
                }}/>

                <Route path="/car" render={() => {
                    return <div className="mt-200">
                        <Carousel_2/>
                    </div>
                }}/>
                <Route path="/training" render={() => {
                    return <div>
                        <Training/>
                    </div>
                }}/>
                <Footer/>

            </BrowserRouter>
        </div>
    );
}

export default App;