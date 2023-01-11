import { useState } from "react"

export default function Input(props){

    return(
           <form>
                <input type="number" value = {props.counter}  placeholder = "Enter a number"   name="" id="" onChange = {(e)=>{props.SetCounter(parseInt(e.target.value))}}/>
                
           </form> 
    )
}