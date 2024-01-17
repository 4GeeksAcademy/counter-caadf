import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

let root = ReactDOM.createRoot(document.querySelector('#root'))
let counter = 0
setInterval(function () {


    let uno = Math.floor((counter / 1) % 10);
    let dos = Math.floor((counter / 10) % 10);
    let tres = Math.floor((counter / 100) % 10);
    let cuatro = Math.floor((counter / 1000) % 10);
    root.render(<App
        digitouno={uno}
        digitodos={dos}
        digitotres={tres}
        digitocuatro={cuatro}

    />)
    
    counter++;

}, 1000)


