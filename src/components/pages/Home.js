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
                    McFarland and I am currently enrolled in Trilogy's Coding
                    Bootcamp at Washington University in St. Louis, Missouri. So
                    far, school has been very challenging, but rewarding and
                    fun!
                    <br></br>
                    <br></br>
                    Before my decision to begin my coding journey, I gained a
                    lot of experience in managament and sales. In 2014, I earned
                    a Bachelor of Science in Business from Southwest Baptist
                    University in Bolivar, Missouri. Shortly after, I started my
                    career in Business Management/Sales at Sherwin-Williams
                    Paint Company. I was soon promoted to an Assistant Manager
                    role, and two years later when the time came for a promotion
                    to Store Manager, I expressed my interest in moving to the
                    city of San Francisco, California. I was then promoted and
                    transfered to Daly City, California where I ran my own
                    store, and I lived in the Richmond District of San
                    Francisco, about five minutes from the Golden Gate Bridge.
                    It was one of the best times of my life!
                    <br></br>
                    <br></br>
                    The store I ran was about 5 years old, and averaged around
                    $400,000 in sales per year. Within my first year of
                    managing, I doubled that number and recieved mutiple awards
                    within the Bay Area district for top tier customer service.
                    Those were some of my greatest accomplishments from that
                    career. Afterwards, I was promoted to a Property Management
                    Outside Sales Representative for the city of San Francisco
                    and the Bay Area. However, as most of you are aware, the
                    cost of living in San Francisco stayed high, and
                    unfortunately my salary just was not cutting it. I began my
                    interest in software development around this time, but it
                    just didn't seem possible with my background.
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
                    searcing and finding several bootcamp options, I decided to
                    take the leap with Washington University. This is just the
                    beginning, and although I realize it is very challenging, I
                    am excited for the ride! Please click the "Contact" tab if
                    you would like to ask me anything further!
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
