import { createContext, ReactNode } from "react";
import { useEffect, useState } from "react"
import {api} from '../lib/LibAxios'


interface typeDataPost{
    avatar_url?:string
    html_url?:number
    followers?:number
    folowwing?:number 
    location?:string 
    login?:string 
    public_repos?:number 
    bio?:string 
    name?:string 
    company?:string
    comments?:number
    updated_at?:string
}

interface typeChildren{
    children:ReactNode
}

export const ContextApiExport = createContext({
        
} as typeDataPost)
    
export function ContextApi({children}:typeChildren){

    const [data,seData] = useState<typeDataPost>({})

    function receiveDataGitHub(){
        api.get("/users/Henrique8878").then((response)=>{
            seData(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.error("Erro na solicitação" + error)
        })
    }

    useEffect(()=>{
        receiveDataGitHub()
    },[])

   
    return(
        <>
             <ContextApiExport.Provider value={data}>
                {children}
             </ContextApiExport.Provider>
        </>
           
    )
}



  





