// getItem pobieranie wrtosci z taskArr, która będzie pobierana z tablicy z obiektami dodanymi przez formularz
// setItem kopia tablicy z taskami po zmianie w momenci dodania danych z formularza.

import { useEffect, useState } from 'react';

const useStorage = (key, initialValue) => {
    const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

    const [value, setValue] = useState(storedValue);
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useStorage;
