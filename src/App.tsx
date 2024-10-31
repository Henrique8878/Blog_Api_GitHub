import {Router} from './Router'
import {BrowserRouter} from 'react-router-dom'
import {ContextApi} from './contexts/contextApp'

export function App(){
  return(
    <ContextApi>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ContextApi>
  )
}
    