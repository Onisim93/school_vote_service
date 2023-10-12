import React from 'react';
import "./header.css";

const Banner = () => {
    return (
        <div className={"banner"}>
            <div style={{
                fontSize: "60px",
                width: "100%",
                margin: "auto",
                textShadow: "2px -2px 15px grey"
            }}>
                <p style={{margin: "0 0 0 10%"}}>Vote service</p>

                <p style={{margin: "0 0 0 20%"}}>Perspectiva school</p>
            </div>
        </div>
    );
};

export default Banner;