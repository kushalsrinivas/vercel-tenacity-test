import React from "react";
import { faLinkedin  , faGithub , faYoutube, faReddit, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CodeOfConduct = ()=>{
    return(
        <>



{/* <!--navigation--> */}
<section class="smart-scroll">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-dark">
            <a class="navbar-brand heading-black" href = '/'>
                <img src={require("../img/Tenacity Logo White Transparent.png")} height="60px" alt="tenacity-logo"/>
            </a>
            <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span data-feather="grid"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="https://lu.ma/taufeeq/events?past=1">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="https://medium.com/@tenacitycommunity">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#team">Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#faq">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll d-flex flex-row align-items-center text-primary" href="https://chat.whatsapp.com/EYnBrXo5ug1L4mZVKumV9p">
                            <em data-feather="external-link" width="18" height="18" class="mr-2"></em>
                            Join Community
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</section>

{/* <!--hero header--> */}
<section class="py-7 py-md-0 bg-hero" id="home">
    <div class="container">
        <div class="row vh-md-100">
            <div class="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                <img class="floating-img" src={require("../img/Saly-39.png")} width="40%" alt="hero-img"/>
                <h1 class="heading-black text-capitalize">Code Of Conduct</h1>
                <p class="lead py-3"> In order to ensure a safe and enjoyable experience for all members, we ask that you please adhere to the following code of conduct.</p>
                <a href="https://chat.whatsapp.com/EYnBrXo5ug1L4mZVKumV9p">
                <button class="btn btn-primary d-inline-flex flex-row align-items-center">
                    Join The Community
                    <em class="ml-2" data-feather="arrow-right"></em>
                </button></a>
            </div>
        </div>
        <div class="code-of-conduct-container">
            <ul class="code-of-conduct"> 
                <li>All members must communicate in a respectful manner at all times. Any form of hate speech, discrimination, or harassment will not be tolerated and may result in a warning, mute, kick or ban from the server. Treat others the way you want to be treated.</li>
                <li>Spamming messages, links, or emojis are not allowed and may result in a warning or mute.</li>
                <li>Posting any NSFW content is strictly prohibited and will result in an immediate ban from the server.</li>
                <li>You will be asked to change your name or picture if the staff deems them inappropriate.</li>
                <li>Do not share your own personal information or the personal information of others without their consent. This includes full names, addresses, phone numbers, email addresses, social media profiles, personal photos, or any other sensitive information.</li>
                <li>Threats to other users of DDoS, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.</li>
                <li>Harassment and bullying of any kind will not be tolerated. If you are being harassed or bullied, please inform the core team or mods immediately. Any members found to be engaging in harassment or bullying will be warned, muted, kicked, or banned from the server, depending on the severity of the offense.</li>
                <li>Make sure all the rules are compliant with the <a href="https://discord.com/terms">terms of service</a> of Discord.</li>
                <li>Do not use the server to advertise your own server, product, or service. This includes DMing other members to advertise your server, product, or service.</li>
                <li>Any member who violates these rules will be warned and if necessary, further action will be taken, including but not limited to mute, kick and ban. Any severe violations will result in reporting to the appropriate authorities for legal action.</li>
                <li>If you see someone breaking the rules, please report it to a moderator.</li>
                <li>As we grow, these rules are subject to change at any time without prior notice to keep our community safe.</li>
            </ul>
            </div>
    </div>
</section>





{/* <!--footer--> */}
<footer class="py-6">
    <div class="container">
        <div class="row">
            <div class="col-sm-5 mr-auto">
                <h5>About Tenacity</h5>
                <p class="text-muted">We are a community where students come to learn, grow, network, and mentor each other. At Tenacity, we believe that by bringing together a diverse group of students, we can create an enriching and valuable experience for all members. </p>
                <ul class="list-inline social social-sm">
                    <li class="list-inline-item">
                        <a href="https://instagram.com/tenacity_community"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://twitter.com/tenacitycomm"><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.linkedin.com/company/tenacity-community/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://github.com/tenacity-community"><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.youtube.com/@tenacitycommunity"><FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} /></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.reddit.com/r/tenacitycommunity/"><FontAwesomeIcon icon={faReddit} style={{color: "#ffffff",}} /></a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-2">
                <h5>Join</h5>
                <ul class="list-unstyled">
                    <li><a style={{textDecoration: "none"}} href="/soon">Become A Mentor</a></li>
                    <li><a style={{textDecoration: "none"}}  href="/campus_rep_apply.html">Campus Representative</a></li>
                    <li><a style={{textDecoration: "none"}}  href="/apply.html">Join The Team</a></li>
                    <li><a style={{textDecoration: "none"}}  href="mailto:tenacitycommunity@gmail.com">Partner With Us</a></li>
                </ul>
            </div>
            <div class="col-sm-2">
                <h5>Community</h5>
                <ul class="list-unstyled">
                    <li><a style={{textDecoration: "none"}}  href="/soon">Cohorts</a></li>
                    <li><a style={{textDecoration: "none"}}  href="/soon">Workshops</a></li>
                </ul>
            </div>
            <div class="col-sm-2">
                <h5>Legal</h5>
                <ul class="list-unstyled">
                    <li><a style={{textDecoration: "none"}}  href="/soon">Privacy</a></li>
                    <li><a style={{textDecoration: "none"}}  href="/codeOfConduct">Code Of Conduct</a></li>
                </ul>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-muted text-center small-xl">
                &copy; 2023 Tenacity - All Rights Reserved
            </div>
            <div class="col-12 text-muted text-center small-xl">
                Made with &lt;/&gt; and &lt;3 by <a href="https://taufeeq.ml" style={{color: "lightgrey", textDecoration: "none"}} target="_blank">taufeeq.ml</a>
            </div>
        </div>
    </div>
</footer>

{/* <!--scroll to top--> */}
<div class="scroll-top">
    <i class="fa fa-angle-up" aria-hidden="true"></i>
</div>



        </>
    );
}
export default CodeOfConduct;