import { useState } from "react";


const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(localStorage.getItem(key) || initialValue);

    const setStorage = (value) => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [value, setStorage];
};

export default useLocalStorage