import { useState, useEffect } from 'react';

const api = 'http://www.splashbase.co/api/v1/images/search?query=';

const useResource = (query = 'cars') => {
    const [resources, setResources] = useState([]);
    const [url, setUrl] = useState(`${api}${query}`);

    const fetchResources = async resource => {
        const response = await fetch(resource);
        const data = await response.json();
        setResources(data.images);
    };

    useEffect(() => {
        fetchResources(url);
    }, [url]);

    return [resources];
};

export default useResource;
