import { Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import About from "./About"
import Categories from "./component/Categories"
import Aptitude from "./component/Aptitude"
import Reasoning from "./component/Reasoning"
import DsaSheet from "./component/DsaSheet"
import DbmsQuestions from "./component/DbmsQuestions"
import OsQuestion from "./component/OsQuestion"
import OopsQuestions from "./component/OopsQuestions"
import NetworkQuestions from "./component/NetworkQuestions"
import Copytoclip from "./component/Copytoclip"
import SignUp from "./component/SignUp"
import Login from "./component/Login"
import NotFound from "./component/NotFound"
import { Helmet } from "react-helmet"

function Routing() {

    return (
        <div>
            <Helmet>
                <title>
                    Routing
                </title>
            </Helmet>
            <Routes>
                <Route path="/home" Component={Home}></Route>
                <Route path="/about" Component={About}></Route>
                <Route path="/categories" Component={Categories}></Route>
                <Route path="/aptitude" Component={Aptitude}></Route>
                <Route path="/reasoning" Component={Reasoning}></Route>
                <Route path="/dsasheet" Component={DsaSheet}></Route>
                <Route path="/dbmsquestions" Component={DbmsQuestions}></Route>
                <Route path="/osquestions" Component={OsQuestion}></Route>
                <Route path="/oopsquestions" Component={OopsQuestions}></Route>
                <Route path="/networkquestions" Component={NetworkQuestions}></Route>
                <Route path="/interviewprompt" Component={Copytoclip}></Route>
                <Route path="/" Component={SignUp}></Route>
                <Route path="/LogIn" Component={Login}></Route>
                <Route path="*" Component={NotFound}></Route>


            </Routes>
        </div>
    )

}

export default Routing