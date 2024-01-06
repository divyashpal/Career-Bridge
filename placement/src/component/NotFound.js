import { Helmet } from "react-helmet"

function NotFound() {

    return (
        <div>
            <Helmet>
                <title>
                NotFound
                </title>
            </Helmet>
            <h1>404 Page Not Found</h1>
        </div>
    )
}

export default NotFound