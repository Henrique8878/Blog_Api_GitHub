import { useParams } from "react-router-dom"
import { CardProfile } from "../components/CardProfile"
import { VariablesCard } from "../components/VariablesCard"
import { api } from "../lib/LibAxios"
import { useEffect, useState } from "react"

interface typeObjectsIssue{
    body:string,
    comments:number,
    title:string
}


export function Issue(){
    const {id} = useParams()
    const [LINK] = useState(`https://github.com/Henrique8878/Blog_Api_GitHub/issues/${id}`)
    const [issue,setIssue] = useState<typeObjectsIssue>({
        body:"",
        comments:0,
        title:""
    })



    function requestPostUnique(){
        api.get(`/repos/Henrique8878/Blog_Api_GitHub/issues/${id}`)
        .then((response)=>{
            setIssue(response.data)
            console.log(response.data)
        }).catch((erro)=>{
            console.log(`O erro foi de ${erro}`)
        })
    }


    useEffect(()=>{
        requestPostUnique()
        
    },[])
    return(

        <div className="w-screen h-screen">
            <header className="relative flex justify-center h-96 bg-bg_title bg-cover bg-center">
                <CardProfile typeCard="issue" title={issue.title} link={LINK} comments={issue.comments}/>
            </header>
            <main className="flex flex-col gap-20 items-center pt-44 pb-44 bg-base_background">
               <article className="flex flex-col gap-8 w-[60%]">
                    <span className="font-Nunito text-xl text-base_text">{issue.body}
                    </span>
                    <section className="flex flex-col gap-2">
                        <h2 className="underline text-blue text-xl">Dynamic Typing</h2>
                        <span className="font-Nunito text-xl text-base_text">JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                        </span>
                        <div className="flex flex-col gap-5 bg-base_post mt-5 font-Nunito p-5 rounded-md">
                          <VariablesCard typeVariableOrNo="variable"/>
                           <VariablesCard typeVariableOrNo="assignment"/>
                           <VariablesCard typeVariableOrNo="assignment"/>
                        </div>
                    </section>
               </article>
            </main>
        </div>
    )
}
        




        
                           
                           