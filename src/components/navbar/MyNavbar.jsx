import {  Container,  Nav, Navbar, Offcanvas } from "react-bootstrap";
import './MyNavbar.css'
import { NavLink } from "react-router-dom";

function MyNavbar (){
    const expand = 'md'
    return(
        
        <Navbar key={expand} expand={expand} style={{backgroundColor : '#ccc'}} className=" mb-3 py-3">
          <Container  >
            <Navbar.Brand className="lalezar">بلاگ نکست وان کد </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  بلاگ نکست وان کد
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className='nav-link' to={'/'}>صفحه اصلی</NavLink>
                  <NavLink className='nav-link' to={'/add-article'}>ساخت مقاله</NavLink>
                  <NavLink className='nav-link' to={'/about'}> درباره ما</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
          
       

        
    )
}

export default MyNavbar;