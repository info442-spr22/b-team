import React from 'react';
import logo from '../logo.png'
import SignIn from './signin';


const Splash = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div>
                <header>
                    <h1>Better Educators</h1>
                    <SignIn/>
                </header>
            </div>
        </div>
    );
}
export default Splash;