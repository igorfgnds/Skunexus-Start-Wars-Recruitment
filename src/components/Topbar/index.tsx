import { Navbar } from 'reactstrap'
import { Link } from 'react-router-dom'
import './index.css'

const Topbar = (): JSX.Element => {
  return (
    <Navbar color='primary' fixed='top'>
      <Link to='/' className='title'>
        SkuNexus
      </Link>
    </Navbar>
  )
}
export default Topbar
