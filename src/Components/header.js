import React, { useState } from "react";
import Modals from "./modal";

function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleCreateAccount = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="header-container container d-none d-lg-flex align-items-center justify-content-between p-3">
            <div className="header-img" style={{ zIndex: 1 }}>
                <img src="logo11.svg" width="162.57px" height="24px" alt="Logo" />
            </div>
            <div className="header-form">
                <form className="d-flex" style={{ width: '360px', borderRadius: '21px' }}>
                    <button className="custom-search" type="submit">
                        <img alt="Search" style={{ border: 'none' }} className="search-img"
                            src="searchbutton.svg"
                            width="22" height="22" />
                    </button>
                    <input className="form-control custom-input-search" type="search"
                        placeholder="Search for your favorite groups in ATG" aria-label="Search" />
                </form>
            </div>
            <div className="header-button">
                <button id="show" className="btn custom-btn-create p-0 m-0" onClick={handleCreateAccount}>
                    Create Account. <span className="text-primary fw-bold">It's Free!<img
                            className="rounded-circle" alt="Profile"
                            src="arrowdownword.svg" /></span>
                </button>
            </div>

            <Modals showModal={showModal} handleCloseModal={handleCloseModal} />
        </div>
    );
}

export default Header;
