
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './styles/styles.css';
import career from "../img/career.jpg"
import { Helmet } from 'react-helmet';

function NavBar() {
  return (
    <div className='sticky'>
      <Helmet>
        <title>
          Navbar
        </title>
      </Helmet>
      <Navbar
        expand="lg" className='nav_shadow'
      // className="bg-body-tertiary"
      // bg="dark"
      // data-bs-theme="light"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link className="nav-link nav" to="/">
              <span className='career'><img className='car' src={career}></img></span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className=' hover'>
                <Link className="nav-link  nav" to="/">
                  <span className=' nav'>Home</span>

                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link hover" to="/about">
                  <span className='nav'>About Us</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link hover" to="/categories">
                  <span className='nav'>Categories</span>

                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link hover" to="/interviewprompt">
                  <span className='nav'>Interview prompts</span>

                </Link>
              </Nav.Link>
              <div>
                {/* <NavDropdown title={<span> Questions</span>}  id="navbarScrollingDropdown" className='navMar hover' style={{color:"black", fontWeight:"bold"}}> */}
                <NavDropdown title={<span className='ques'> Questions</span>} id="navbarScrollingDropdown" className='navMar hover'>
                  <NavDropdown.Item>
                    <Link className="nav-link hover" to="/aptitude">
                      <span className='nav'>Aptitude MCQ's</span>

                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="nav-link hover" to="/reasoning">
                      <span className='nav'>Reasoning MCQ's</span>

                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link className="nav-link hover" to="/dsasheet">
                      <span className='nav'>Dsa Sheet</span>

                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}
            {/* <Link to="/SignUp">
              <Button variant="outline-success" style={{ border: "none" }} >SignUp</Button>
            </Link>

            <Link to = "/LogIn">
            <Button variant="outline-success" style={{ margin: '7px' }}>LogIn</Button>
            </Link> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
