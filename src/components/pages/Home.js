import React from "react";
import Footer from "../Footer";

function Home() {
  return (
    <main>
      <div className="card-group">
        <div className="mb-3 mt-5 mx-auto" style={{ maxWidth: "90%" }}>
          <div className="row">
            <div className="col-md-2">
              <div className="card">
                <div className="card-body">
                  <img
                    className="profilepic"
                    src="imgs/ProfilePic.jpeg"
                    alt="Profile"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">About Me</h1>
                  <p className="card-text text-responsive">
                  Hey, everyone! Welcome to my portfolio. My name is Annie
                   McFarland and I have recently completed my Certificate in
                   Full Stack Web Development at Washington University in St.
                   Louis, Missouri.
                   <br></br>
                   <br></br>
                   Before my decision to begin my coding journey, I gained a
                   lot of experience in management and sales. I started my
                   career at Sherwin-Williams Paint Company and shortly after,
                   I was promoted to an Assistant Manager role. Two years
                   later, I expressed my interest in moving to San Francisco,
                   California. I was then promoted to the Store Manager of Daly
                   City, California, and moved to the Richmond District of San
                   Francisco. That location was about five minutes from the
                   Golden Gate Bridge, and it was one of the best times of my
                   life! My lifestyle consisted of beaches, hiking, amazing
                   food, and fun friendly culture!
                   <br></br>
                   <br></br>
                   One year later, I was promoted to a Property Management
                   Outside Sales Representative for the city of San Francisco
                   and the Bay Area. However, as most are aware, the cost of
                   living in San Francisco stayed high, and unfortunately my
                   salary just was not cutting it. I began my interest in
                   software development around this time, but I didn't think it
                   would be possible with my background.
                   <br></br>
                   <br></br>
                   Finally, I made the decision to leave my comfort zone and
                   broaden my skill set, so I moved back home to St. Louis and
                   began working as an Account Executive in the transportation
                   industry for Worldwide Express. My desire to transition my
                   career to web development grew stronger and stronger, and
                   then COVID hit us hard in March 2020. I began to dive into
                   the coding world during the after hours of my corporate job,
                   and found a love for coding. However, I knew I still needed
                   more experience and credibility. Six months later, after
                   searching and finding several bootcamp options, I decided to
                   take the leap with Washington University. This is just the
                   beginning, and although I realize coding can be very
                   challenging, I am excited for the ride! Please click the
                   "Contact" tab if you would like to contact me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
