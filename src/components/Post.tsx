import { dateFormatter } from "../utils/formatterData"

interface typePropsPost{
    key:number,
    title:string,
    updated_at:string,
    body:string
}
export function Post({title,updated_at,body}:typePropsPost){
    return(
        <>
            <article className="flex flex-col gap-8 justify-around bg-base_post p-12 w-[100%] rounded-lg">
                            <div className="flex justify-between">
                                <h1 className="font-Nunito text-3xl text-white w-[60%]">{title}</h1>
                                <span className="font-Nunito text-base_span text-lg">{dateFormatter.format(new Date(updated_at))}</span>
                            </div>
                            <span className='line-clamp-4 text-base_span font-Nunito text-lg text-justify leading-10'>{body}
                            </span>
            </article>
        </>
    )
}
        
        
        


    
