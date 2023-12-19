import automate from "../assets/automate.png";
import { useState } from "react";
import axios from "axios"; // Import the axios library
import { redirect } from "react-router-dom";

export default function Signin() {
    const [formData, setFormData] = useState({
        "email": "",
        "password": ""
    });
    async function handleLogin(e: any) {
        console.log(formData);
        e.preventDefault();
        await axios.post("http://localhost:3100/users/signin", { // Use the 'post' function from axios
            email: formData.email,
            password: formData.password
        });
        redirect("/")
    }
    // Rest of the code...

    return (
        <div className="container-fluid col-4" style={{ position: "relative", top: "150px" }}>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleLogin}>
                    <img src={automate} alt="automate" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                    <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                    </label>
                    </div>
                    <input className="btn btn-primary w-100 py-2" type="submit" value="Sign In"/>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                </form>
            </main>
        </div>
    )
}