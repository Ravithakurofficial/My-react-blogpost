import React from "react";
import Header from "./header";
import Banner from "./banner";
import Link from "./link";
import AllPost from "./allpost";
import Location from "./location";

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Link />
            <div style={{display : 'flex', marginTop : '1%'}}>
                <AllPost />
                <Location />
            </div>
            
        </div>
    );
}

export default Home;
