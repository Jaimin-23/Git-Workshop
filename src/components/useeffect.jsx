import { useEffect } from "react";
import {}

export default function useeffect()

function increment(){
    setCount(count+1);
}

function decrement(){
    setQty(qty-1);
}

function display(){
    console.log("useEfect ex.")
}

useEffect(()=>{
    display();
},[count])
 

return 