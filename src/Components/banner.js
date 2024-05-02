import React from "react";
import "./Banner.css"; // Import your custom CSS for detailed styles

function Banner() {
    return (
        <div className="container-fluid p-0">
            <div className="banner-background">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner-text">
                                <h1 className="text-white">Computer Engineering</h1>
                                <h5 className="text-white md-5">142,765 Computer Engineers follow this</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
