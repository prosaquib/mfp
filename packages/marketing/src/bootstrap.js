import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Mount Fn to start up the app

const mount = (el) => {
    ReactDOM.render(
        <App/>,                             // First arg says what needs to be rendered
        el                                  // where it will be rendered (el)
    );
};

//If we are running in development and in isolation, call mount immediately

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketting-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}

//We are running through container and we should export the mount function

export { mount };

