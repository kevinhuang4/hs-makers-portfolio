import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Have ideas for projects? Let's make it happen</h1>
            <SocialIcon url="https://www.instagram.com/kevin.huang4/" className="icon"></SocialIcon>
            <SocialIcon url="https://discord.gg/VxpPxyBb" className="icon"></SocialIcon>
            <SocialIcon url="https://www.facebook.com/Kevin.ZiH4/" className="icon"></SocialIcon>
            <SocialIcon url="https://www.linkedin.com/in/kevin-huang-57771521b/" className="icon"></SocialIcon>
            <SocialIcon url="https://github.com/kevinhuang4" className="icon"></SocialIcon>
            <SocialIcon url="https://www.reddit.com/user/imkevineer" className="icon"></SocialIcon>
            <SocialIcon url="mailto:zih020@ucsd.edu" className="icon"></SocialIcon>
        </div>
    );
}

export default Contact;