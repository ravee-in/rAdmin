import React from 'react';
import { Badge, Avatar } from '@material-ui/core';
import { Notifications, Language, Settings, Person, ExitToApp } from '@material-ui/icons';
import { confirm } from "react-confirm-box";
import './topbar.css'

const Topbar = () => {

    const options = {
        labels: {
            confirmable: "Confirm",
            cancellable: "Cancel"
        }
    }

    const handleLogout = async () => {
        const result = await confirm("Are you sure?", options);
        if (result) {
            console.log("You click yes!");
            return;
        }
        console.log("You click No!");
    };

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">rAdmin v1.0</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/" title='Notifications'>
                                <Badge badgeContent={4} color="primary">
                                    <Notifications />
                                </Badge>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" title='Language'>
                                <Language />
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href='#' role="button" id="userProfile" data-bs-toggle="dropdown" aria-expanded="false">
                                <Avatar alt="Travis Howard" src="/images/2.jpg" />
                            </a>

                            <ul class="dropdown-menu userProfile_Menu bg-light" aria-labelledby="userProfile">
                                <li><a class="dropdown-item disabled" href="#">Hello, User</a></li>
                                <hr className="seprator" />
                                <li><a class="dropdown-item" href="#"><Person /> Profile</a></li>
                                <li><a class="dropdown-item" href="#"><Settings /> Settings</a></li>
                                <li><a class="dropdown-item" href="#" onClick={handleLogout}><ExitToApp /> Log Out?</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topbar