import { useContext, useState } from "react"
import { CardProfile } from "../components/CardProfile"
import { Post } from "../components/Post"
import { api } from "../lib/LibAxios"
import { ContextApiExport } from "../contexts/contextApp"
import { Link } from "react-router-dom"



interface ObjectresponseSearch{
    number:number,
    id:number,
    title:string,
    updated_at:string,
    body:string
}

interface typeResponseSearch{
    items:ObjectresponseSearch[],
}



export function ListGitHub(){

    const {login} = useContext(ContextApiExport)
    const[LINK_GITHUB] = useState("https://github.com/Henrique8878")
   
    const [title,setTitle] = useState("")
    const [posts,setPosts] = useState<typeResponseSearch>({items:[]})
    const [handleInput,setHandleInput] = useState("")

    function receivePostGitHub(query:string){
        api.get(`/search/issues`,{
            params:{
                q:`${query} repo:${login}/Blog_Api_GitHub`
            }
        }).then((response)=>{
            setPosts(response.data)
        }).catch((error)=>{
            console.log(`O erro foi ${error}`)
        })
    }

        

    return(
        <div className="w-screen h-screen">
           <header className="relative flex justify-center h-96 bg-bg_title bg-cover bg-center">
            <CardProfile typeCard="home" title={title} link={LINK_GITHUB}/>
            </header>
            <main className="flex flex-col gap-20 items-center pt-44 pb-44 bg-base_background">
                <article className='flex justify-center flex-wrap gap-8 w-[60%]'>
                    <section className='flex flex-col gap-5 w-[100%]'>
                        <div className="flex justify-between items-center w-[100%] ">
                            <span className="font-Nunito leading-pattern text-2xl top-8 text-base_title">Publicações</span>
                            <span className="font-Nunito text-base_span text-lg">6 publicações</span>
                        </div>
                            <form className="flex flex-col gap-5 items-center " onSubmit={(e)=>{
                                e.preventDefault()
                                receivePostGitHub(handleInput)
                                
                                }}>
                                <input type="text" placeholder='Buscar conteúdo' className='flex pl-4 py-5 rounded-lg bg-[#040f1a] border border-[#1c2e41] placeholder:text-base_label placeholder:text-xl outline-none text-white text-2xl w-[100%]' onChange={(e)=>setHandleInput(e.target.value)}
                                
                                />
                                <button type="submit" className="w-80 py-2 bg-[#040f1a] border border-[#1c2e41] text-xl text-base_label hover:opacity-55 text-white duration-100">Pesquisar</button>
                            </form>
                    </section>
                </article>
                        
                {posts?.items.length==0?<h1 className="text-6xl"></h1>:  <div className='flex justify-between flex-wrap gap-8 w-[60%]'>
                    {posts!=undefined&&posts.items.map((post)=>(
                        
                        <Link to={`/issue/${post.number}`} onClick={()=>setTitle(post.title)}>
                            <Post
                            
                                key={post.id}
                                title={post.title}
                                updated_at={post.updated_at}
                                body={post.body}
                            />
                        </Link>
                    ))}
                </div>}   
            </main>
        </div>
    )
}



       
        

   
                        
              
                        




 



    

            
    
