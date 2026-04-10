import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/Style.css';
import Header from './components/Header.js';
import Introduction from './components/Introduction.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Consulting from './components/Consulting.js';
import Footer from './components/Footer.js';

const App = () => {
    return(
    <div>
        <Header/>
        <div className="body">
            <Introduction/>
            <About/>
            <Experience/>
            <Consulting/>
            <Projects/>
            <Footer/>
        </div>
    </div>
    )
};

ReactDOM.render(
    <App />, document.getElementById('root'));
