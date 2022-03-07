import React from 'react';
import { Badge, Avatar } from '@material-ui/core';
import { Notifications, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">rAdmin v1.0</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">
                                <Badge badgeContent={4} color="primary">
                                    <Notifications />
                                </Badge>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <Language />
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <Settings />
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topbar