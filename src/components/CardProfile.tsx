import { FooterCardProfile } from './FooterCardProfile'
import { VectorLink } from './VectorLink'
import { VectorReturn } from './VectorReturn'
import {ContextApiExport} from '../contexts/contextApp'
import { useContext, useState } from 'react'




interface patternPropsCard{
    typeCard:"home"| "issue",
    title:string,
    link:string
}

export function CardProfile({typeCard,title,link}:patternPropsCard){
    const {bio,name,avatar_url} = useContext(ContextApiExport)
    const [LINK_RETURN] = useState("http://localhost:5173/")
    return(

        typeCard=="home"?(
            <div className="absolute grid grid-cols-[1fr_5fr] pr-8 pl-8 pt-8 gap-8 -bottom-32 w-[60%] h-64 bg-base_profile">
            <img src={avatar_url} alt="" className="w-48 h-48 rounded-3xl"/>
            <aside className="flex flex-col gap-5 justify-start">
                <div className="flex justify-between ">
                    <h2 className="font-Nunito leading-pattern text-3xl top-8 text-base_title">{name}</h2>
                    <VectorLink typePage='home' link = {link}/>
                </div>
                <span className='font-Nunito text-xl text-base_text leading-pattern line-clamp-1'>{bio}</span>
                <FooterCardProfile typePage='home'/>
            </aside>
        </div>
        ):
        (
            <div className="absolute pr-8 pl-8 pt-8 gap-8 -bottom-32 w-[60%] h-64 bg-base_profile">
           
            <aside className="flex flex-col gap-10 justify-start">
                <div className="flex justify-between ">
                    <VectorReturn link_return={LINK_RETURN}/>
                    <VectorLink typePage='issue' link={link}/>
                </div>
                <article className='flex flex-col gap-5'>
                    <h2 className="font-Nunito leading-pattern text-3xl top-8 text-base_title">{title}</h2>
                  <FooterCardProfile typePage='issue'/>
                </article>
            </aside>
        </div>
        )
    )
}
                    
                   