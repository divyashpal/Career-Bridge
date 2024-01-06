import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from "react"
import { Helmet } from 'react-helmet';

function OopsQuestions() {

    const [apidata, setapiData] = useState([])
    useEffect(() => {
        fetch("http://localhost:6900/").then((result) => {

            result.json().then((data) => {
                setapiData(data)
            })
        }
        )
    }, [])


    return (
        <div className='center que_bg nav_shadow'>
            <Helmet>
        <title>
          OopsQuestions
        </title>
      </Helmet>
            {/* <h2 className='os_pad' style={{backgroundColor:"white", marginTop:"20px", marginBottom:"-9px"}}>Os Ques...</h2> */}
            <h2 className='oops_pad'>Oops Concept Qu<span></span></h2>
            {

                apidata.map((data, key) => {
                    return (

                        <div className='que_box'>
                            <Accordion>
                                <Accordion.Item eventKey={key}>
                                    <Accordion.Header>{data.question} ?</Accordion.Header>
                                    <Accordion.Body style={{ overflowY: "auto", height: "80px" }} >{data.answer}</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* <hr></hr> */}
                            <br></br>
                        </div>

                    )

                })
            }
        </div>
    )
}

export default OopsQuestions;