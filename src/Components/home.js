import React, { useState, useEffect } from "react";
import Header from "./header";
import Banner from "./banner";
import Link from "./link";
import AllPost from "./allpost";
import Location from "./location";
import Post368 from "./post368";
import "bootstrap/dist/css/bootstrap.min.css";
import Modals from "./modal";

function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showModal, setShowModal] = useState(false);

    const handleCreateAccount = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {!isMobile && <Header />}
            {isMobile && <img onClick={handleCreateAccount} src="Topbanner.svg" style={{height : '15%'}} alt="topbanner" />}
            <Banner />
            
            <div className="container mt-3">
                <div className="row">
                    {/* Show Link component only if not mobile */}
                    {!isMobile && (
                        <div className="">
                            <Link />
                        </div>
                    )}

                    {/* Show Post368 component only if mobile */}
                    {isMobile && (
                        <div className="" style={{ width: '35%', height: '35%', marginRight: '5%', color: 'black', fontWeight: 'bold' }}>
                            <Post368 />
                        </div>
                    )}
                    
                    <div className="col-lg-7 col-md-7 col-12">
                        <AllPost />
                    </div>

                    {/* Show Location component only if not mobile */}
                    {!isMobile && (
                        <div className="col-lg-3 col-md-5 d-none d-md-block">
                            <Location />
                        </div>
                    )}
                </div>
            </div>
            <Modals  showModal={showModal} handleCloseModal={handleCloseModal} />
        </div>
    );
}

export default Home;
