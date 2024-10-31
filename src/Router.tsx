import {Routes,Route} from 'react-router-dom'
import { ListGitHub } from './pages/ListGitHub'
import { Issue } from './pages/Issue'




export function Router(){
    return(
        <Routes>
                <Route path='/' element={<ListGitHub/>}/>
                <Route path='/issue/:id' element={<Issue/>}/>
        </Routes>
    )
}
            
            
