import {Link} from 'react-router-dom'
import vectorLink from '../assets/vectorLink.png'

interface typePropsVectorLink{
    typePage:"home"|"issue",
    link:string
}

export function VectorLink({typePage,link}:typePropsVectorLink){
    return(

        typePage=="home"?(
        <span className='flex items-center gap-4'>
            <Link to={link} className="text-blue">GITHUB</Link>
            <Link to={link}>
                <img src={vectorLink} alt="" className='w-4 h-4'/>
            </Link> 
        </span>
        ):
        (
        <span className='flex items-center gap-4'>
            <Link to={link} className="text-blue">VER NO GITHUB</Link>
            <Link to={link}>
                <img src={vectorLink} alt="" className='w-4 h-4'/>
            </Link> 
        </span>
        )
    )
}
            