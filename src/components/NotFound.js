
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={{ borderRadius: ".4rem", boxShadow: "0 5px 20px grey", borderColor: "transparent", background: "rgba(251, 255, 0, 0.1", margin: "auto", width: "80vw", padding: "1rem", marginTop: "20vh" }}>
            <h1 style={{ fontSize: "5vw", padding: "1rem" }}> Opps! Component Not Found!</h1>
            <Link style={{ color: "orange", textDecoration: "none" }} to="/saideepClasses">{'< '} Go Back To Home</Link>

        </div>

    );
}

export default NotFound;