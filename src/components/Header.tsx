import Link from 'next/link';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText,} from 'reactstrap';


const Header = () => {

   return (

      <Navbar container="lg" color='dark' dark>
        <NavbarBrand href="/" className="me-auto">Mercadinho Bit</NavbarBrand>


          <Nav >
               <Link href="/Products" className='navbar-brand'>Produtos</Link>
          </Nav>

          <Nav >
            <Link href="/Cart" className='navbar-brand'>Carrinho</Link>
          </Nav>

          
      </Navbar>

   )



}

export default Header