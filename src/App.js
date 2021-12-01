import React from "react";
import Portfolio from "./Components/Portfolio/portfolio";
import NavBar from "./Components/NavBar";
import './App.css';


function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    }
  ]

  return (
    <div className="App">
    
  <NavBar />

  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome Blinks!</div>
        <div className="intro-heading text-uppercase">BLACKPINK IN YOUR AREA</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">More About Blackpink</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">NEWS</h2>
          <h3 className="section-subheading text-muted">How Blackpink became the biggest K-pop girl band in the world? With their new album just around the corner, Jennie, Jisoo, Rosé and Lisa are on the periphery of global success. From breaking streaming records to causing a storm on the front row, we examine how the four-piece became one of the biggest girl bands in pop.</h3>
        </div>
      </div>
      <div className="row text-center">
      </div>
    </div>
  </section>
  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Members</h2>
          <h3 className="section-subheading text-muted">Blackpink is family ever after</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>3 Januari 1995</h4>
                  <h4 className="subheading">KIM JISOO</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Kim Jisoo is a member of BLACKPINK as the main vocal and visual. Before becoming a trainee at YG, she was known by many people because she was a very beautiful young woman. She is very popular in school because of her pretty face and because of her talent. He used to study at the High School of Performing Arts School. He ended up changing schools when his family moved to Seoul, South Korea. In 2012, she was revealed through "Who's That Girl?" Teaser by label, followed by two photos in January of the following year.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>16 January 1996</h4>
                  <h4 className="subheading">Jennie Kim</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">known mononymously as Jennie, is a South Korean singer and rapper. Born and raised in South Korea, Kim studied in New Zealand at the age of eight for five years, before returning to South Korea in 2010. She debuted as a member of the girl group Blackpink formed by YG Entertainment in August 2016. In November 2018, Jennie made her debut as a solo artist with the single "Solo".</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>11 February 1997</h4>
                  <h4 className="subheading">Roséanne Park</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Roseanne Park, known mononymously as Rosé, is a Korean-New Zealand singer and dancer based in South Korea. Born in New Zealand and raised in Australia, Rosé signed with South Korean label YG Entertainment following an audition in 2012, training there for four years.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>27 March 1997</h4>
                  <h4 className="subheading">Lisa</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lalisa Manobal, known mononymously as Lisa, is a Thai rapper, singer, and dancer based in South Korea. She is a member of the South Korean girl group Blackpink formed by YG Entertainment. Lisa made her solo debut with her single album Lalisa in September 2021. </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">The First About BLACKPINK</h2>
          <h3 className="section-subheading text-muted">First Single, first Mini Slbum, and the first Full Album.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <h4>Boombayah</h4>
            <p className="text-muted">Blackpink released their debut single album Square One in August 2016, which includes the songs "Boombayah" and "Whistle". "Whistle" debuted atop the Gaon Digital Chart while "Boombayah" became the group's first number-one hit on the Billboard World Digital Song Sales chart.</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <h4>Squeare Up</h4>
            <p className="text-muted">Square Up is the first Korean mini-album by BLACKPINK. It is available in two versions and contains 4 tracks, with "Ddu-Du Ddu-Du" and "Forever Young" serving as the album's double title tracks. "Square Up", which means "stick together" and "prepare to fight", has a message of "let's stand up to the challenge", exploring a mature concept. The album was released digitally on June 15, 2018, and physically on June 20, 2018.</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <h4>The Album</h4>
            <p className="text-muted">The Album is the first Korean studio album (second overall) by the South Korean girl group Blackpink. It was released on October 2, 2020, by YG Entertainment and distributed through YG Plus and Interscope Records. It is the group's first full-length work since their debut in 2016.[4] For the album, Blackpink recorded over ten new songs and worked with a variety of producers, including Teddy, Tommy Brown, R. Tee, Steven Franks, and 24. Eight songs made the final tracklist, including two collaborations: "Ice Cream" with Selena Gomez, and "Bet You Wanna" featuring Cardi B. The album explores the themes of love and the complexities of growing up. Musically, The Album utilizes pop, R&B, hip hop, EDM, and trap elements.</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Message from BLINKS</h2>
          <h3 className="section-subheading text-muted">Sending your love to us, Blinks</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Your Website 2019</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;