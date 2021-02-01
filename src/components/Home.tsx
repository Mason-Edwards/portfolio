import React from 'react';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";

import Nav from './Nav';



function Home() {
    return (
        <div className="page">
            <Nav />

            <section id="main">
                <div id="mainContent">
                    <h1>freelance web developer</h1>
                    <h2>Hi there, I'm a freelance website developer, and second year computer science student at university
                        <br />
                        If you are interested in getting a website then dont be afraid to <Link to="/contactMe"><span> contact me</span></Link>
                    </h2>
                </div>
            </section>

            <section id="aboutMe">
                <div id="aboutMeContent" data-aos="fade-up">
                    <h1>About Me</h1>
                    <h2>My name is Mason, i am currently a second year student studying computer science at Oxford Brookes University.
                        <br /> I have recently started working more on my web development skills and this website is a product of that.
                        <br /> As well as web development i also program using other languages like c++, python and java.
                        <br /> I am currently trying to build a portfolio so that i can demonstrate my skills, which starts with this website.
                    </h2>
                </div>
                <div id="ghDiv" data-aos="fade-up">
                    <a href="https://github.com/Mason-Edwards" title="Github">
                        <foreignObject x='0' y='0' width='100px' height='100px'>
                            <img
                                width='50px'
                                height='50px'
                                src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}
                                alt="Github Logo"
                                style={{ borderRadius: '50%', display: 'block' }}
                            />
                        </foreignObject>

                    </a>
                </div>
            </section>
        </div>
    );
}

export default Home;
