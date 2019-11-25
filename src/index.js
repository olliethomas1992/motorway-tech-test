import React from 'react';
import ReactDOM from 'react-dom';
import useResource from './useResource';
import './index.css';
import Item from './components/Item';

const App = () => {
    const [resources] = useResource('cars');

    return (
        <div className="grid">
            {resources.map(image => (
                <Item key={image.id} image={image} />
            ))}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
