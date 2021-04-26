import React, {useState} from 'react';
import {Link, useHistory, Route, BrowserRouter} from 'react-router-dom';
import './login.style.css'
import userService from '../../services/user-service'
import Profile from "../profile/profile";

const LoginPage = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirectPage, setRedirectPage] = useState("")

    const login = () => {
        userService.login(credentials)
            .then((user) => {
                if (user === undefined) {
                    alert("user is undefined")
                } else {
                    window.location.href = "/profile"

                    // <BrowserRouter>
                    //     <Route path={"/profile"}>
                    //         <Profile/>
                    //     </Route>
                    // </BrowserRouter>

                }
            })

    }

    return (
        <div className="container-fluid">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Sign In</li>

                </ol>
            </nav>

            <div className="wbdv-login-heading">
                <h1>Sign In</h1>
            </div>


            <br/>
            <div className="container-lg">
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label wbdv-label">
                            Username: </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Alice"
                                   onChange = {(e) => {setUsername(e.target.value); setCredentials({...credentials, username: e.target.value})}}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label wbdv-label">
                            Password: </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="123qwe#$%"
                                   onChange = {(e) => {setPassword(e.target.value); setCredentials({...credentials, password: e.target.value})}}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <div
                                  className="btn btn-block wbdv-login-button"
                                  onClick = {() => login()}>
                                Sign In
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <Link to="/register"
                                          className=" btn wbdv-signup-pw-button">
                                        Sign Up
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link to=""
                                          className="btn float-right wbdv-signup-pw-button">
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;