import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
const Team =()=>{
    return(
        <body>

{/* <!--navigation--> */}
<Navigation/>

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
<Footer/>

{/* <!--scroll to top--> */}
<div class="scroll-top">
    <i class="fa fa-angle-up" aria-hidden="true"></i>
</div>

</body>
    );
}

export default Team;