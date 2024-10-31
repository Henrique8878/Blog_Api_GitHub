import gitHubIcon from '../assets/iconGitHub.png'
import iconConstruction from '../assets/iconConstruction.png'
import iconPerson from '../assets/iconPerson.png'
import vectorComentary from '../assets/vectorComentary.png'
import vectorCalendar from '../assets/vectorCalendar.png'
import { useContext } from 'react'
import { ContextApiExport } from '../contexts/contextApp'

interface typePropsFooterCard{
    typePage:"home"|"issue"
}


export function FooterCardProfile({typePage}:typePropsFooterCard){
    const {login, followers,company,comments,updated_at} = useContext(ContextApiExport)
    return(

        typePage=="home"?(
        <div className='flex gap-4'>
            <div className='flex gap-2'>
                <img src={gitHubIcon} alt="" className="w-6 h-6" />
                <span  className='font-Nunito text-xl text-base_text leading-pattern'>{login}</span>
            </div>
            <div className='flex gap-2'>
                <img src={iconConstruction} alt="" className="w-6 h-6" />
                <span  className='font-Nunito text-xl text-base_text leading-pattern'>{company!=undefined&&company!=null?`${company}`:'Nenhuma'}</span>
            </div>
            <div className='flex gap-2'>
                <img src={iconPerson} alt="" className="w-6 h-6" />
                <span  className='font-Nunito text-xl text-base_text leading-pattern'>{followers} {followers!=undefined&&followers>1?'seguidores':'seguidor'}</span>
            </div>
        </div>
        ):
        (
        <div className='flex gap-8'>
            <div className='flex gap-2'>
                <img src={gitHubIcon} alt="" className="w-6 h-6" />
                <span  className='font-Nunito text-xl text-base_text leading-pattern'>{login}</span>
            </div>
            <div className='flex gap-2'>
                <img src={vectorCalendar} alt="" className="w-6 h-6" />
                <span  className='font-Nunito text-xl text-base_text leading-pattern'>{updated_at}</span>
            </div>
            <div className='flex gap-2'>
                <img src={vectorComentary} alt="" className="w-6 h-6" />
                <span  className='font-Nunito text-xl text-base_text leading-pattern'>{comments!=undefined&&comments>1?`{${comments}} comentários`:`{${comments} comentário}`}</span>
        </div>
</div>
        )
    )
}