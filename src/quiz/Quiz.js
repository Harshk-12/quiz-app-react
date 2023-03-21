import React,{useEffect, useState} from 'react'
import {questions} from './questions'





function Quiz() {
    let[quest, setquest]=useState([])
    let[value,setvalue]=useState([])
    let [option,setoption]=useState('')

        useEffect(()=>{
        setquest(questions)
        console.log(questions)
        
    },[])


        function handleclick(){
        //   if(value)'
        }

  return (
   <>

<h1 style={{fontSize:'3rem', marginLeft:'1rem'}}>Let's Play Quiz</h1>
   <div>
    {
      
        quest.map((item,id)=>{
            return <>
             <div key={item.id}>
{/* QUESTION */}
    <h1>{item.question} </h1>
{
    // OPTIONS array 
item.options.map((ele,index)=>{
    return (
        <div key={index}>
            <input type="radio" name='option' value={ele} onChange={(e)=>setvalue(e.target.value)}/>
            {console.log(value)}
            <span>{ele}</span>

        </div>
    )
    
})

}
<br/> 
<button type='submit' onClick={(e)=>handleclick(e)}>submit</button>

</div>
<hr/>
    
    </>
   })
    }
    

   </div>


   












</>
  )
}




export default Quiz