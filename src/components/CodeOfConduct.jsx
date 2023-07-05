import React from "react";
import { faLinkedin  , faGithub , faYoutube, faReddit, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "./Footer";
import Navigation from "./Navigation";


const CodeOfConduct = ()=>{
    return(
        <>



{/* <!--navigation--> */}
<Navigation/>

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
<Footer/>

{/* <!--scroll to top--> */}
<div class="scroll-top">
    <i class="fa fa-angle-up" aria-hidden="true"></i>
</div>



        </>
    );
}
export default CodeOfConduct;