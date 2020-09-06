import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url, setLoading) {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            setData(response);
            setLoading(false);
        }
        setLoading(true);
        fetchData();
    }, [ url, setLoading ]);

    return data;
}