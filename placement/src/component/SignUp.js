import { useState } from "react"
import sign from "../img/new sign.jpg"
import './styles/styles.css'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function SignUp() {
    const navigate = useNavigate()
    let jump = true

    const handleSignup = async (e) => {
        // console.log("efdd",name, email,password,degree,year);

        e.preventDefault()

        var mail = document.getElementById("email").value;

        var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

        if (regx.test(mail)) {
            console.log("Correct email")
            jump = false

        }
        else {
            alert("Please enter correct email!")

            window.location.href = "/"
            // navigate("/")
        }

        if (jump == false) {
            const data = {
                username, email, password
            }

            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
            const res = await response.json();
            console.log(res)
            if (res.message === "User Already Exist") {
                alert('This user already exist, Please login')
                window.location.href = "/LogIn"
            }
            else {
                alert("You have successfully entered");
                window.location.href = "/home";
            }
        }
    }
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [degree, setDegree] = useState("");
    return (
        <div>
            <Helmet>
                <title>
                    SignUp
                </title>
            </Helmet>
            <header className="head">
                <form>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        <div className="signupleft">

                            <h3 className="sign_h3">Sign Up</h3>
                            <h5 className="sign_h5">Already have an account <span>Login Here</span></h5>

                            <label for="html">Name:</label><br></br>
                            <input type="text" name="name" placeholder="Enter your name" required="true" onChange={(e) => setName(e.target.value)} /><br></br>
                            {/* <label for="html">Full Name:</label><br></br>
                        <input type="text" name="name" placeholder="Enter your full name" required = "true" /><br></br> */}
                            <label for="html">Email:</label><br></br>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required="true" onChange={(e) => setEmail(e.target.value)} /><br></br>

                            <label for="html">Password:</label><br></br>
                            <input type="password" name="password" placeholder="Enter your password" required="true" onChange={(e) => setPassword(e.target.value)} /><br></br>

                            <input type="radio" className="input" value="radio" required="true" /><span>By signing up you agree to receive updates and special offers.</span><br></br>
                            <button type="button" className="signupbtn" onClick={(e) => handleSignup(e)}>Sign Up</button>
                        </div>
                        <div>
                            <img src={sign} height="400" width="400" alt="img" className="Signing" />
                        </div>
                    </div>
                </form>
            </header>
        </div>

    )
} export default SignUp;