import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NovoLivro from './pages/NovoLivro'
import EditarLivro from './pages/EditarLivro'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='novo' element={<NovoLivro/>}/>
                <Route path='/editar/:id' element={<EditarLivro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes