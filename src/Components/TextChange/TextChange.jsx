import React from 'react'
import { useState,useEffect} from 'react'
const TextChange=()=> {
    const texts =["Hi, I'm Ehtisham","Hi, I'm Ehtisham","I'm Ehtisham",];
    const [currentText, setCurrentText] = useState("");
    const [endvalue,setendValue] = useState(true);
    const [isForward,setIsForward] = useState(true);
    const [index,setIndex] =useState(0);
    useEffect(() =>
        {
            const intervalId =setInterval(() => {
          setCurrentText(texts[index].substring(0,endvalue));
          if(isForward){
            setendValue((prev)=> prev + 1);
            }
            else{
                setendValue((prev)=> prev -1);
            }
            if(endvalue > texts[index].length+10){
               setIsForward(false) 
            }
            if (endvalue <2.1){
                setIsForward(true)
                setIndex((prev)=>prev&texts.length)
            }

            },50);
      return ()=>clearInterval(intervalId)
    

         }, [endvalue,isForward,index,texts]);
  return (
    <div className='transition ease duration-300'>
       {currentText} </div>
  )
}

export default TextChange