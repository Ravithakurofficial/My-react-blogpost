import React from "react";

function Banner() {
    return (
        <div className="container1" style={{ zIndex: 1, background: 'url(https://eco-n-tech.com/wp-content/cache/thumb/ec/890ddcd1c2ce5ec_3806x1034.png) center center / cover no-repeat', height: '500px', display: 'flex', alignItems: 'flex-end' }}>
            <div className="container1-text" style={{ textAlign: 'left', padding: '20px', marginLeft: '3%' }}>
                <h1 className="text-white">Computer Engineering</h1>
                <p className="text-white mb-5">142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
}

export default Banner;
