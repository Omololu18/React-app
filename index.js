import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from "./button";
import NewComponent from "./NewComponent";

ReactDOM.render(
    <div>
        <NewComponent/>
        <App/> 

        <Button/>
        <Button/>
        <button> HTML BUTTON</button>
    </div>, document.getElementById('root'));

