import { useState } from "react"

const useLocalStorage = (key,initialValue) => {
    let [value,setValue] = useState(()=>{
        let stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    }) 
    let setLocalStorgeValue = (newValue) => {
        setValue(newValue)
        localStorage.setItem(key,JSON.stringify(newValue))
    }
   
   
    
    return [value,setLocalStorgeValue]
}
export default useLocalStorage