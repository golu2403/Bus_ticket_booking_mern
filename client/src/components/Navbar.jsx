import React from 'react';
 


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0dcaf0' }}>
            <a className="navbar-brand" href="#">
            <img src="/logo.jpg" alt="Bus Booking Logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> {/* Circular logo */}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100 justify-content-between">
                    <div className="d-flex">
                        <li className="nav-item active mx-2">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/adminsignup">Admin</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/signup">SignUp</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/signin">SignIn</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

