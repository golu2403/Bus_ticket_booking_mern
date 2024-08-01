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
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Bus Tickets</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Hotels</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Offers</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">My Account</a>
                        </li>
                    </div>
                    <form className="form-inline">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                            <button className="btn btn-outline-success" type="submit" style={{ marginLeft: '10px' }}>Search</button>
                            </div>
                        </div>
                    </form>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

