import {useState, useCallback} from 'react';


export default function useinput(initailValue = null){
    const [value, setValue] = useState(initailValue);
    
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return [value, handler]; 
}