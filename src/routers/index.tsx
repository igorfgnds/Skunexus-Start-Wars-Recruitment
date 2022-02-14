import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Films from '../pages/Films'
import Planets from '../pages/Planets'
import Residents from '../pages/Residents'
import Topbar from '../components/Topbar'
import { Container } from 'reactstrap'

export const Routers = () => {
  return (
    <Container fluid>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/' element={<Planets />} />
          <Route path='/films' element={<Films />} />
          <Route path='/residents' element={<Residents />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}
