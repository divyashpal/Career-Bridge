
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/styles.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';
function Categories() {
  return (
    <div>
      <Helmet>
        <title>
          Categories
        </title>
      </Helmet>
      <header className='catTop'>
        <main className='catMain'>
          <div className='bg_cat box nav_shadow' style={{ marginTop: "11px" }}>
            <div style={{ position: "relative", top: "8%" }} className='cat-width'>
              <Row>
                <Col sm={5} className='category' style={{ position: "relative", left: "31%" }}>
                  <Link to='/dsasheet'>
                    <Card className='cat-width shadow' style={{ width: "40vw" }}>
                      <Card.Body className='Body cartBody1' style={{ width: "40vw" }}>
                        <Card.Title><span className='link'>Data Structure and Algorithm Sheet</span></Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>
              <div style={{ position: "relative", left: "25%" }}>
                <Row className="text-center">

                  <Col sm={4} className='category'>
                    <Link to='/aptitude'>
                      <Card>
                        <Card.Body className='shadow1'>
                          <Card.Title className='link'>Aptitude</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>

                  <Col sm={4} className='category'>
                    <Link to='/reasoning'>
                      <Card>
                        <Card.Body className=' shadow1'>
                          <Card.Title className='link'>Reasoning</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </Row>

                <Row className="text-center">
                  <Col sm={4} className='category'>
                    <Link to='/dbmsquestions'>
                      <Card>
                        <Card.Body className=' shadow1'>
                          <Card.Title className='link'>DBMS</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>

                  <Col sm={4} className='category' >
                    <Link to='/osquestions'> <Card>
                      <Card.Body className=' shadow1'>
                        <Card.Title className='link'>Operating System</Card.Title>
                      </Card.Body>
                    </Card>
                    </Link>
                  </Col>
                </Row>

                <Row className="text-center">
                  <Col sm={4} className='category'>
                    <Link to='/oopsquestions'><Card>
                      <Card.Body className=' shadow1'>
                        <Card.Title className='link'>OOP's</Card.Title>
                      </Card.Body>
                    </Card>
                    </Link>
                  </Col>

                  <Col sm={4} className='category' >
                    <Link to='/networkquestions'><Card>
                      <Card.Body className=' shadow1'>
                        <Card.Title className='link'>Computer Network</Card.Title>
                      </Card.Body>
                    </Card>
                    </Link>
                  </Col>
                </Row>

              </div>

            </div>
          </div >
        </main>
      </header>
      <Footer />
    </div>

  );
}


export default Categories;
