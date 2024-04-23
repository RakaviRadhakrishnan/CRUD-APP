import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function Adduser({user, setUser}){
    const history = useHistory()
    //defining states
    const [ID,setID] = useState("")
    const [Name,setName] = useState("")
    const [Email,setEmail] = useState("")
    const [Batch,setBatch] = useState("")
    const [Experience,setExperience] = useState("")
    

    const AddNewuser=()=>{
        const newUser ={
            ID,
            Name,
            Email,
            Batch,
            Experience

        }
        console.log(newUser)
        setUser([...user, newUser])
        history.push("/")
        
        setName("");
        setID("");
        setEmail("");
        setBatch("");
        setExperience("");
        
    }
    return(
        <BaseApp
        title={"Add a New User"}
        >
              <div>
                <input 
                placeholder="ID"
                value={ID}
                type="text"
                onChange={(event)=>setID(event.target.value)}
                />
                <input 
                placeholder="Name"
                value={Name}
                type="text"
                onChange={(event)=>setName(event.target.value)}
                />
                <input 
                placeholder="Email"
                value={Email}
                type="text"
                onChange={(event)=>setEmail(event.target.value)}
                />
                <input 
                placeholder="Batch"
                value={Batch}
                type="text"
                onChange={(event)=>setBatch(event.target.value)}
                />
                <input 
                placeholder="Experience"
                value={Experience}
                type="number"
                onChange={(event)=>setExperience(event.target.value)}
                />
        
                 <button
                onClick={AddNewuser}
                >
                    Add
                    </button>
        
        </div>
        </BaseApp>
    )
 }
       
  
