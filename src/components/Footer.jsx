import React from "react";
import { faLinkedin  , faGithub , faYoutube, faReddit, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = ()=>{
    return <>
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
    </>;
}
export default Footer ;