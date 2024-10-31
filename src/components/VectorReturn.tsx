import { Link } from "react-router-dom"
import vectorReturn from '../assets/vectorReturn.png'


interface typeObjectsReturn{
    link_return:string
}
export function VectorReturn({link_return}:typeObjectsReturn){
    return(
        <span className='flex items-center gap-4'>
            <Link to={link_return}>
                <img src={vectorReturn} alt="" className='w-4 h-4'/>
            </Link> 
            <Link to={link_return} className="text-blue">VOLTAR</Link>
        </span>
    )
}