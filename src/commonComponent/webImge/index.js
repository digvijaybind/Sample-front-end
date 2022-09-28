import React from 'react';
import WaveBackground from "../../assets/image/hyperbridge/wave1.png"

import './webImage.scss';

const WebImage = ({ content }) => {
    return (
        <div style={{ background: `url(${WaveBackground})`, backgroundRepeat: "no-repeat", height: '100vh', p: "50px" }}>
            <div>{content}</div>

        </div>
    )
}

export default WebImage;