import React, { useEffect, useState } from 'react';

export default function Api1209() {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setState(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {state.map((list) => (
                    <li key={list.id}>{list.title}</li> // Added key for list items
                ))}
            </ul>
        </div>
    );
}
