import React from "react";
const Navigation = ()=>{
    return <section class="smart-scroll">
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
</section>;
}

export default Navigation;