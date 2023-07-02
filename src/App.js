import './App.css';
import Carousel from './slickSlider/SlickSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin  , faGithub , faYoutube, faReddit, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">
     

{/* <!--navigation--> */}
<section class="smart-scroll">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-dark">
            <a class="navbar-brand heading-black" href="/">
                <img src={require('./img/Tenacity Logo White Transparent.png')} type="image/png" height="60px" alt="tenacity-logo"/>
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
                <img class="floating-img" src={require("./img/Saly-38.png")} width="60%" alt="hero-img"/>
                <h1 class="heading-black text-capitalize">&lt;/Hello World<span class="auto-type"></span>&gt;</h1>
                <p class="-lead py-3">Tenacity is a student driven community that provides an inclusive and collaborative space to all</p>
                <a href="https://chat.whatsapp.com/EYnBrXo5ug1L4mZVKumV9p">
                <button class="btn btn-primary d-inline-flex flex-row align-items-center">
                    Join The Community
                    <em class="ml-2" data-feather="arrow-right"></em>
                </button></a>
            </div>
        </div>
    </div>
</section>

{/* <!-- features section --> */}
<section class="pt-6 pb-7" id="features">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto text-center">
                <h2 class="heading-black">Tenacity offers everything you need.</h2>
                <p class="text-muted -lead">At Tenacity, we create an enriching and valuable experience for all members. Whether it's through connecting them with clients or providing internship opportunities, we are committed to helping our members succeed.</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-10 mx-auto">
                <div class="row feature-boxes">
                    <div class="col-md-6 box">
                        <div class="icon-box box-primary">
                            <div class="icon-box-inner">
                                <span data-feather="edit-3" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Discover, Learn, Earn and Mentor</h5>
                        <p class="text-muted">Discover new skills and interests, learn from experts and peers, earn through practical application of skills, and mentor others in their journey. With a focus on hands-on learning and real-world application. </p>
                    </div>
                    <div class="col-md-6 box">
                        <div class="icon-box box-success">
                            <div class="icon-box-inner">
                                <span data-feather="heart" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Partnering with the Brands You Love</h5>
                        <p class="text-muted">We partner with top brands you know and love to bring you a dynamic and meaningful experience. Participate in engaging workshops, gain valuable internship opportunities, and collaborate on projects.</p>
                    </div>
                    <div class="col-md-6 box">
                        <div class="icon-box box-danger">
                            <div class="icon-box-inner">
                                <span data-feather="book" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Unlock Your Potential with Tenacity</h5>
                        <p class="text-muted">Unleash your full potential with powerful resources for learning and growth. From expert mentors to cutting-edge tools, Tenacity provides everything you need to advance your skills and reach your goals.</p>
                    </div>
                    <div class="col-md-6 box">
                        <div class="icon-box box-info">
                            <div class="icon-box-inner">
                                <span data-feather="globe" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Global Presence</h5>
                        <p class="text-muted">We are a community with a presence in multiple countries and regions. Regardless of location, Tenacity members are united in their passion for technology and design and their desire to create positive change.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-6">
            <div class="col-md-6 mr-auto">
                <h2>Tenacity is more than just a community.</h2>
                <p class="mb-5"> Whether you're a student, entrepreneur, designer, developer, or any other creative, Tenacity offers something for everyone. It's a space where you can connect with like-minded individuals, pursue your passions, and make a real impact in the world. Join the Tenacity community and become part of something greater than just a group of individuals - become part of a movement that is shaping the future.</p>
                <a href="https://chat.whatsapp.com/EYnBrXo5ug1L4mZVKumV9p" class="btn btn-light">
                    Join The Movement
                </a>
            </div>
            <div class="col-md-5">
                <div class="slick-about">
                    <br/>
                 <Carousel/>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!--pricing section--> */}
<section class="py-7 bg-dark section-angle top-right bottom-right" id="pricing">
    <div class="container">
        <div class="row mt-6">
            <div class="col-md-4 mr-auto">
                <h3>Everything is covered.</h3>
                <p class="lead">
                    In Tenacity, you'll find everything you need for growth - discover, learn, earn, mentor, connect, and make an impact.
                </p>
            </div>
            <div class="col-md-7 offset-md-1">
                <ul class="features-list">
                    <li>Network and collaborate</li>
                    <li>Find your passion</li>
                    <li>Learn from scratch</li>
                    <li>Access to resources</li>
                    <li>Internships oppurtunities</li>
                    <li>Like minded individuals</li>
                    <li>Community support</li>
                </ul>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-8 col-12 divider top-divider mx-auto pt-5 text-center">
                <h3 class="text-shine">Want early access to our Discord Server?</h3>
                <p class="mb-4">Connect with other like-minded individuals, participate in discussions, and gain access to resources and tools that will help you grow</p>
                <a href="https://dsc.gg/tenacity-community">
                <button class="btn btn-primary">
                    Join Discord Server
                </button></a>
            </div>
        </div>
    </div>
</section>

{/* <!--faq section--> */}
<section class="py-7" id="faq">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto text-center">
                <h2>Frequently Asked Questions</h2>
                <p class="text-muted -lead">Answers to most common questions.</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-10 mx-auto">
                <div class="row">
                    <div class="col-md-6 mb-5">
                        <h6>What kind of activities and events does the Tenacity community organize?</h6>
                        <p class="text-muted faq">We organize a variety of activities and events such as networking events, workshops, mentorship programs, and social gatherings.</p>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h6>Is there a membership fee to join the Tenacity community?</h6>
                        <p class="text-muted faq">There is no membership fee to join us.</p>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h6>How can I make the most of my Tenacity community experience?</h6>
                        <p class="text-muted faq">To make the most of your Tenacity community experience, we encourage you to attend events, participate in discussions, and take advantage of mentorship and networking opportunities.</p>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h6>How can I get involved and become a leader in the Tenacity community?</h6>
                        <p class="text-muted faq">There are several ways to get involved and become a leader in the Tenacity community, such as volunteering for events, organizing your own events, or becoming a mentor.</p>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h6>What is the Tenacity community? And How is Tenacity community different from a regular college club?</h6>
                        <p class="text-muted faq">A college club is typically focused on a specific interest or activity, such as a sports club or a debate club. College clubs are usually affiliated with the college or university, and their main goal is to provide students with an opportunity to pursue their interests and passions. Tenacity community is different in a way that it is not limited to the college or university, it is open for everyone and its goal is to support individuals in achieving personal and professional goals, not just providing an opportunity to pursue interests and passions.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-6 mx-auto text-center">
                <h5 class="mb-4">Have more questions?</h5>
                <a href="mailto:tenacitycommunity@gmail.com" class="btn btn-primary">Contact us</a>
            </div>
        </div>
    </div>
</section>

{/* <!--team section--> */}
<section class="py-7 bg-dark section-angle top-left bottom-left" id="team">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto text-center">
                <h2 class="heading-black">Core Team</h2>
                <p class="text-muted -lead">Meet our team! We're a group of dedicated students working together to achieve our goals</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-4">
                <div class="card">
                        <img class="card-img-top img-raised" src={require("./img/team-1.png" )}alt="Blog 1"/>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>Taufeeq Riyaz</h5></a>
                        <p class="text-muted small-xl mb-2">Founder And Design Lead</p>
                        <p class="card-text">The driving force behind the community, dedicated to fostering a positive and inclusive environment for all members.<br/>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                        <img class="card-img-top img-raised" src={require("./img/team-2.png")} alt="Blog 2"/>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>Radhika Pisipati</h5></a>
                        <p class="text-muted small-xl mb-2">Content Writer</p>
                        <p class="card-text">The mind behind all the craft engaging and informative pieces that keep our members and audience informed.<br/>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                        <img class="card-img-top img-raised" src={require("./img/team-3.png")} alt="Blog 3"/>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>Srivarenya Thuluva</h5></a>
                        <p class="text-muted small-xl mb-2">Product Manager</p>
                        <p class="card-text">Bringing amazing products and services to life, responsible for our community development.<br/>&nbsp; </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-6">
            <div class="col-md-6 mx-auto text-center">
                <a href="/team" class="btn btn-primary">View all team members</a>
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
                    <li><a style={{textDecoration: "none"}} href="/campus_rep_apply.html">Campus Representative</a></li>
                    <li><a style={{textDecoration: "none"}} href="/apply.html">Join The Team</a></li>
                    <li><a style={{textDecoration: "none"}} href="mailto:tenacitycommunity@gmail.com">Partner With Us</a></li>
                </ul>
            </div>
            <div class="col-sm-2">
                <h5>Community</h5>
                <ul class="list-unstyled">
                    <li><a style={{textDecoration: "none"}} href="/soon">Cohorts</a></li>
                    <li><a style={{textDecoration: "none"}} href="/soon">Workshops</a></li>
                </ul>
            </div>
            <div class="col-sm-2">
                <h5>Legal</h5>
                <ul class="list-unstyled">
                    <li><a style={{textDecoration: "none"}} href="/soon">Privacy</a></li>
                    <li><a style={{textDecoration: "none"}} href="/CodeOfConduct">Code Of Conduct</a></li>
                </ul>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-muted text-center small-xl">
                &copy; 2023 Tenacity - All Rights Reserved
            </div>
            <div class="col-12 text-muted text-center small-xl">
                Made with &lt;/&gt; and &lt;3 by <a href="https://github.com/orgs/tenacity-community/people" style={{color: "lightgrey", textDecoration: "none"}} target="_blank">Tenacity Tech Team</a>
            </div>
        </div>
    </div>
</footer>
    </div>
  );
}

export default App;
