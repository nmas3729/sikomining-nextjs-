'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="main-sec" id="home">
        <header id="header-sec" className="sticky-header">
          <div className="container">
            <nav className="navbar navbar-expand-lg align-items-start">
              <a className="navbar-brand" href="#home">
                <Image 
                  src="/images/logo.webp" 
                  width={120} 
                  height={56} 
                  alt="Siko Mining logo" 
                  style={{ height: 'auto' }} 
                  priority
                />
              </a>
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span></span><span></span><span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><a className="nav-link scroll" href="#vision">Vision</a></li>
                  <li className="nav-item"><a className="nav-link scroll" href="#services">Services</a></li>
                  <li className="nav-item"><a className="nav-link scroll" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link scroll" href="#founder">The Team</a></li>
                  <li className="nav-item"><a className="nav-link scroll" href="#media">Media</a></li>
                  <li className="nav-item"><a className="nav-link scroll" href="#contact">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <div className="banner-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="block">
                  <h1>We Support The <span>Junior Mining</span> Sector</h1>
                  <p>With accessible & sustainable mining services that guarantee success.</p>
                  <div className="btn-block banner-btn">
                    <a href="#contact-us" className="my-btn scroll">Contact</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="block banner-img-sec">
                   <Image
                    className="img-fluid"
                    src="/images/banner-img.webp"
                    alt="Siko Mining hero"
                    width={1600}
                    height={500}
                    priority
                    placeholder="blur"
                    blurDataURL="/images/banner-small.jpg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-logo-sec">
          <div className="container">
            <ul>
              <li><Image src="/images/top-logo1.webp" width={120} height={40} alt="Partner logo 1" style={{ height: 'auto' }} /></li>
              <li><Image src="/images/top-logo2.webp" width={120} height={40} alt="Partner logo 2" style={{ height: 'auto' }} /></li>
              <li><Image src="/images/top-logo3.webp" width={120} height={40} alt="Partner logo 3" style={{ height: 'auto' }} /></li>
            </ul>
          </div>
        </div>

        <div className="mission-sec">
          <div className="container" id="vision">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-col">
                  <img src="/images/mission-img.jpg" alt="" />
                  <div className="img-bg">
                    <img src="/images/img-bg.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h2>Our Mission & <span>Vision</span></h2>
                <p>Our purpose is to facilitate the junior mining sector's growth, and to be leaders in supporting its total mining value chain, providing easy access to quality services it normally has difficulty accessing.</p>
                <p>Through partnerships with experienced companies and individuals, as well as the valuable skills we have amassed over 60 years, we have identified and filled the gaps that stifle the junior mining sector's progress. Siko Mining will provide what is needed to achieve sustainable success in this sector, in turn uplifting the lives of those involved and the communities around them.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="list-sec help-sec">
          <div className="container" id="clients">
            <h2>We'll Give You <span>Access To</span></h2>
            <div className="row">
              <div className="my-col col-lg-4 col-md-6">
                <div className="block">
                  <div className="list-icon">
                    <img src="/images/help-logo1.png" alt="" />
                  </div>
                  <h5>Contracting Expertise & Mining Consultancy</h5>
                  <p>60 years of combined practical experience, as well as the insights gained from our industry networking, makes us the best consultants.</p>
                </div>
              </div>
              <div className="my-col col-lg-4 col-md-6">
                <div className="block">
                  <div className="list-icon">
                    <img src="/images/help-logo2.svg" alt="" />
                  </div>
                  <h5>Fine Coal & Pelletising Technology</h5>
                  <p>We've got our own technology and our connections within the industry give us access to fine coal stocks.</p>
                </div>
              </div>
              <div className="my-col col-lg-4 col-md-6">
                <div className="block">
                  <div className="list-icon">
                    <img src="/images/help-logo3.svg" alt="" />
                  </div>
                  <h5>Mining Project Management Skills</h5>
                  <p>Get expertise based on our extensive academic background, and the experience we gained assisting Eskom's cost-plus mines.</p>
                </div>
              </div>
            </div>

            <div className="qoute-sec">
              <div className="left-qoute">
                <img src="/images/quote-left.svg" alt="" />
              </div>
              <div className="qoute-content">
                <h3>There are no secrets to success. It is the result of preparation, hard work, and learning from failure.</h3>
                <h6>Colin Powell</h6>
              </div>
              <div className="right-qoute">
                <img src="/images/quote-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="list-sec services-sec">
          <div className="container" id="services">
            <h2>Our <span>Services</span></h2>
            <div className="row">
              <div className="my-col col-lg-4">
                <div className="block">
                  <div className="list-icon">
                    <img src="/images/services-logo4.png" alt="" />
                  </div>
                  <h5>Rehabilitation</h5>
                  <p>We are fully equipped to carry out mine rehabilitation as an essential part of the mining process.</p>
                </div>
              </div>
              <div className="my-col col-lg-4">
                <div className="block">
                  <div className="list-icon">
                    <img src="/images/services-logo1.png" alt="" />
                  </div>
                  <h5>Dry Bulk Commodity Transportation & Material</h5>
                  <p>Our association with the biggest coal transporters, Eskom, gives us experience in transporting bulk commodities, as well as handling material, e.g. crushing, screening and conveying.</p>
                </div>
              </div>
              <div className="my-col col-lg-4">
                <div className="block">
                  <div className="list-icon">
                    <img src="/images/services-logo3.png" alt="" />
                  </div>
                  <h5>Commodity Trading</h5>
                  <p>We have strong capabilities in commodity trading, with a particular focus on coal. Our team brings deep expertise in market analysis, contract structuring, and risk management across the coal value chain. This enables us to navigate complex markets and deliver consistent value to our trading partners</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="my-col col-lg-4">
                <div className="block">
                  <div className="list-icon">
                    <img src="/images/services-logo3.png" alt="" />
                  </div>
                  <h5>Mining</h5>
                  <p>We are actively pursuing our own permits, prospecting rights, and mining rights as part of our strategic growth in the sector. Our team is experienced in navigating regulatory frameworks and geological assessments to secure and develop viable mining assets. This approach reflects our commitment to building a strong, self-sustaining mining portfolio.</p>
                </div>
              </div>
            </div>
            <div className="btn-block text-center">
              <a href="#" className="my-btn">Contact</a>
            </div>
          </div>
        </div>

        <div className="stats-sec text-center" id="counter-up">
          <div className="container">
            <h2>Our <span>Stats</span></h2>
            <ul>
              <li><h4 className="counter">+3MT</h4><h6>Tons of Coal Moved</h6></li>
              <li><h4>90%</h4><h6>Output Efficiency</h6></li>
              <li><h4>10/10</h4><h6>Client Satisfaction</h6></li>
              <li><h4>+33</h4><h6>Years in the Business</h6></li>
            </ul>
          </div>
        </div>

        <section id="media">
          <div className="media-container">
            <div className="media-title-wrapper">
              <h2 className="media-title">Our Media</h2>
            </div>
            <div className="video-grid">
              <div className="video-player-container">
                <div className="video-showcase-wrapper">
                  <video controls muted loop playsInline>
                    <source src="/videos/Mining.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="video-player-container">
                <div className="video-showcase-wrapper">
                  <video controls muted loop playsInline>
                    <source src="/videos/WhatsApp Video 2025-06-20 at 4.14.30 PM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="video-player-container">
                <div className="video-showcase-wrapper">
                  <video controls muted loop playsInline>
                    <source src="/videos/WhatsApp Video 2025-07-12 at 3.02.25 PM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="image-carousel-section" style={{ marginTop: '3rem' }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.75rem', color: '#1f2937', marginBottom: '2rem' }}>Our Gallery</h3>
            <div className="owl-carousel image-gallery-slider">

              <div className="item">
                <div className="image-showcase-wrapper dark-card">
                  <a className="image-popup-link" href="/images/worker1.png">
                    <img src="/images/worker1.png" alt="Mining Operations" />
                  </a>
                  <div className="gallery-caption">MINING OPERATIONS</div>
                </div>
              </div>
              <div className="item">
                <div className="image-showcase-wrapper dark-card">
                  <a className="image-popup-link" href="/images/worker2.jpg">
                    <img src="/images/worker2.jpg" alt="On-Site Team" />
                  </a>
                  <div className="gallery-caption">ON-SITE TEAM</div>
                </div>
              </div>
              <div className="item">
                <div className="image-showcase-wrapper dark-card">
                  <a className="image-popup-link" href="/images/worker3.jpg">
                    <img src="/images/worker3.jpg" alt="Equipment & Crew" />
                  </a>
                  <div className="gallery-caption">EQUIPMENT & CREW</div>
                </div>
              </div></div>
          </div>
        </section>

        <div className="worked-sec text-center">
          <div className="container">
            <div className="block">
              <h2>We'Ve <span>Worked</span> With</h2>
              <ul>
                <li><img src="/images/worked-logo1.png" alt="" /></li>
                <li><img src="/images/worked-logo2.png" alt="" /></li>
                <li><img src="/images/worked-logo3.png" alt="" /></li>
                <li><img src="/images/worked-logo4.png" alt="" /></li>
                <li><img src="/images/worked-logo5.png" alt="" /></li>
                <li><img src="/images/worked-logo6.png" alt="" /></li>
                <li><img src="/images/JAE-PNG-CHECK.png" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="we-sec">
          <div className="container" id="about">
            <div className="row">
              <div className="col-lg-6">
                <h2>Who are <span>We?</span></h2>
                <p>Siko Mining Services Pty Ltd ("SMS") is a level 2 BBBEE-compliant mining entity.</p>
                <p>With over 60 years of experience in the mining sector, SMS has identified major gaps over the years, particularly within the Junior Mining sector.</p>
                <div className="more-btn my-hover-reverse">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="img-col">
                  <img src="/images/we-img.jpg" alt="" />
                  <div className="img-bg">
                    <img src="/images/img-bg.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - Meet The Team */}
        <div className="team-sec text-center">
          <div className="container" id="founder">
            <h2>Meet The <span>Team</span></h2>

            {/* 1. Bonani Siko - CEO - Image LEFT */}
            <div className="row">
              <div className="col-md-5">
                <div className="img-sec-left">
                  <div className="main-img-left">
                    <img src="/images/team-img2.jpg" alt="Bonani Siko" />
                  </div>
                  <img src="/images/team-bg.png" alt="" />
                </div>
              </div>
              <div className="col-md-7 my-sec team-text">
                <h6>CEO\Executive Director</h6>
                <h5>Bonani Siko</h5>
                <p>Bonani Siko is a qualified Mining Engineer with a National Diploma in Coal Mining, a National Higher Diploma in Coal Mining, a B-Tech in Mining Engineering at the University of Johannesburg (UJ), as well as a certificate from an executive development program with the University of Cape Town (UCT). He further has a mine manager's certificate of competency with South Africa's Department of Mining Resources (DMR).</p>
                <div id="owner2-div" className="collapse">
                  <p>He is currently a director at Siko Mining Services (SMS), and has been a general manager at Wescoal Holdings Pty Ltd, heading their mining operations (appointed under Section 4.1 of the Mine Health and Safety Act) for almost 4 years. Aside from the general manager role, Bonani also served as a director at Wescoal Mining Pty Ltd and Aztolinx Pty Ltd.</p>
                  <p>Bonani has extensive experience in the coal mining space and mining in general. He had the opportunity to complete the total coal mining value chain through Eskom's primary energy division, a role he served as their Senior Manager of Coal Operations, in support of coal supply agreements between Eskom's coal-fired power stations, and the mining houses. Additionally, Bonani acted as Divisional Executive at Eskom's primary energy division, and CEO at Wescoal Mining.</p>
                  <p>Bonani is an active member of the South African Colliery Manager's Association (SACMA), and the Institute of Directors Southern Africa (IoDSA). He has more than 30 years' experience in the mining industry.</p>
                </div>
                <div className="more-btn my-hover-reverse">
                  <a href="#" data-toggle="collapse" data-target="#owner2-div">Read More</a>
                </div>
              </div>
            </div>

            {/* 2. Lusito Mthethwa - Finance Director - Image RIGHT (alternating) */}
            <div className="row my-row">
              <div className="col-md-7 my-sec team-text">
                <h6>Finance Director</h6>
                <h5>Lusito Mthethwa</h5>
                <p>Lusito Mthethwa is the Finance Director at Siko Mining and Founder and CEO at Dispersive Consulting, specializing in Accounting, Tax, and Advisory services.</p>
                <div id="lusito-div" className="collapse">
                  <p>With extensive experience in financial management and advisory services, Lusito brings valuable expertise to Siko Mining's financial strategy and operations.</p>
                </div>
                <div className="more-btn my-hover-reverse">
                  <a href="#" data-toggle="collapse" data-target="#lusito-div">Read More</a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="img-sec-right">
                  <div className="main-img-right">
                    <img src="/images/lusito.png" alt="Lusito Mthethwa" />
                  </div>
                  <img src="/images/team-bg.png" alt="" />
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="testimonials-sec text-center">
          <div className="container" id="testimonials">
            <h2><span>Testimonials</span></h2>
            <div className="owl-carousel testimonial-slider">
              {[1, 2, 3].map((i) => (
                <div className="item" key={i}>
                  <div className="tm-top">
                    <div className="tm-img">
                      <img src="/images/tm-img.png" alt="" />
                    </div>
                    <div className="tm-title">
                      <h4>Jessica Doe</h4>
                      <h6>Client</h6>
                    </div>
                  </div>
                  <div className="tm-content">
                    <p>{i} Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <div className="container" id="contact">
          <h2>Get in Touch <span>With Us!</span></h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-block">
                <form action="/api/contact" method="post" id="myForm">
                  <input type="text" name="Name" placeholder="Enter Your Name" />
                  <input type="text" name="Email" placeholder="Enter Your Email" />
                  <textarea name="Message" placeholder="Message..."></textarea>
                  <div className="btn-block banner-btn text-left">
                    <input 
                      type="button" 
                      value="Submit" 
                      className="my-btn" 
                      onClick={() => window.location.href = 'mailto:info@sikomining.co.za'} 
                    />
                    {/* <img src="/images/loading_form.gif" width="30" height="30" alt="" id="loading_img" style={{ display: 'none' }} /> */}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-block">
                <div className="footer-right-top">
                  <p>Fill in your details below to schedule a free consultation to discuss a strategy forward.</p>
                </div>
                <div className="footer-right-middle">
                  <ul>
                    <li><h5>Mail Us</h5></li>
                    <li><a href="mailto:info@sikomining.co.za">info@sikomining.co.za</a></li>
                  </ul>
                </div>
                <div className="footer-right-bottom">
                  <ul>
                    <li><h5>Location</h5></li>
                    <li><p>210 Pilgrims Rest, Reedstream Park, Rietspruit, Mpumalanga, South Africa 2231</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <ul>
            <li><a className="scroll" href="#services">Vision</a></li>
            <li><a className="scroll" href="#about">Services</a></li>
            <li><a className="scroll" href="#benefits">Clients</a></li>
            <li><a className="scroll" href="#faqs">About</a></li>
            <li><a className="scroll" href="#testimonials">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer-copyright text-center">
          <div className="container">
            <p className="copyright-text">
              Copyright © All Rights Reserved, Siko Mining Services (Pty) Ltd.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
