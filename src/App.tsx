import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Previews from './components/previews/Previews';
import Article from './components/article/Article';
import './App.css';

const App : React.FC = () => {
    return (
        <main className="app">
            <BrowserRouter>
                <Route exact path="/" component={ Previews } />
                <Route exact path="/articles" component={ Previews } />
                <Route path="/articles/:id" component={ Article } />
            </BrowserRouter>
        </main>
    );
}

export default App;
