import { useState } from "react"
export default function Counter(props){
return (
<div className="Button"> 
    <h1>{props.counter}</h1> 
    <button onClick= {()=>props.SetCounter(props.counter + 1)}> Button</button>
    <button onClick= {()=>props.SetCounter(0)}> Reset</button>
</div>




)}