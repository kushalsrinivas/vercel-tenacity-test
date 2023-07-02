import React from "react";
const Team =()=>{
    return(
        <body>

{/* <!--navigation--> */}
<section class="smart-scroll">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-dark">
            <a class="navbar-brand heading-black" href="/">
                <img src={require("../img/Tenacity Logo White Transparent.png")} height="60px"/>
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

{/* <!--team section--> */}
<section class="py-7 bg-hero section-angle top-left bottom-left" id="team">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto text-center">
                <h2 class="heading-black">Our Team</h2>
                <p class="text-muted -lead">Meet our team! We're a group of dedicated students working together to achieve our goals</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-4">
                <div class="card">
                        <img class="card-img-top img-raised" src={require("../img/team-1.png" )}alt="Blog 1"/>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>Taufeeq Riyaz</h5></a>
                        <p class="text-muted small-xl mb-2">Founder And Design Lead</p>
                        <p class="card-text">The driving force behind the community, dedicated to fostering a positive and inclusive environment for all members.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                        <img class="card-img-top img-raised" src={require("../img/team-2.png")} alt="Blog 2"/>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>Radhika Pisipati</h5></a>
                        <p class="text-muted small-xl mb-2">Content Writer</p>
                        <p class="card-text">The mind behind all the craft engaging and informative pieces that keep our members and audience informed.<br/>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                        <img class="card-img-top img-raised" src={require("../img/team-3.png")} alt="Blog 3"/>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>Srivarenya Thuluva</h5></a>
                        <p class="text-muted small-xl mb-2">Product Manager</p>
                        <p class="card-text">Bringing amazing products and services to life, responsible for our community development.<br/>&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="container">
        <div class="row mt-5">
            <div class="col-md-4">
                <div class="card">
                        <img class="card-img-top img-raised" src={require("../img/team-5.png")} alt="Blog 2"/>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>Apoorva Hegde</h5></a>
                        <p class="text-muted small-xl mb-2">Social Media Intern</p>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
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
                        <a href="https://instagram.com/tenacity_community"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://twitter.com/tenacitycomm"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.linkedin.com/company/tenacity-community/"><i class="fa fa-linkedin"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://github.com/tenacity-community"><i class="fa fa-github"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.youtube.com/@tenacitycommunity"><i class="fa fa-youtube-play"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.reddit.com/r/tenacitycommunity/"><i class="fa fa-reddit"></i></a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-2">
                <h5>Join</h5>
                <ul class="list-unstyled">
                    <li><a href="/soon">Become A Mentor</a></li>
                    <li><a href="/campus_rep_apply.html">Campus Representative</a></li>
                    <li><a href="/apply.html">Join The Team</a></li>
                    <li><a href="mailto:tenacitycommunity@gmail.com">Partner With Us</a></li>
                </ul>
            </div>
            <div class="col-sm-2">
                <h5>Community</h5>
                <ul class="list-unstyled">
                    <li><a href="/soon">Cohorts</a></li>
                    <li><a href="/soon">Workshops</a></li>
                </ul>
            </div>
            <div class="col-sm-2">
                <h5>Legal</h5>
                <ul class="list-unstyled">
                    <li><a href="/soon">Privacy</a></li>
                    <li><a style={{textDecoration: "none"}} href="/codeOfConduct">Code Of Conduct</a></li>
                </ul>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-muted text-center small-xl">
                &copy; 2023 Tenacity - All Rights Reserved
            </div>
            <div class="col-12 text-muted text-center small-xl">
                Made with &lt;/&gt; and &lt;3 by <a href="https://taufeeq.ml" style={{color: "lightgrey" ,textDecoration: "none"}} target="_blank">taufeeq.ml</a>
            </div>
        </div>
    </div>
</footer>

{/* <!--scroll to top--> */}
<div class="scroll-top">
    <i class="fa fa-angle-up" aria-hidden="true"></i>
</div>

</body>
    );
}

export default Team;