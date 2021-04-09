import React from "react";
import Card from "../Card";
import Footer from "../Footer";


const projects = [
  {
    id: 0,
    image: "../../imgs/rendezvoodle2.png",
    name: "Rendezvoodle - St. Louis",
    githubLink: "https://github.com/anniemcfarland7/rendezvoodle-2.0",
    deployedLink: "http://rendezvoodlestl.herokuapp.com/",
  },
  {
    id: 1,
    image: "../../imgs/rendezvoodle.png",
    name: "Rendezvoodle",
    githubLink: "https://github.com/anniemcfarland7/rendezvoodle",
    deployedLink: "https://anniemcfarland7.github.io/Rendezvoodle/",
  },
  {
    id: 2,
    image: "./imgs/employeedirectory.gif",
    name: "Employee Directory",
    githubLink: "https://github.com/anniemcfarland7/employee-directory",
    deployedLink: "https://anniemcfarland7.github.io/employee-directory/",
  },
  {
    id: 3,
    image: "./imgs/burger.gif",
    name: "Eat Da Burger",
    githubLink:
      "https://github.com/anniemcfarland7/Node-Express-Handlebars-Eat-Da-Burger",
    deployedLink: "https://annie-eat-da-burger.herokuapp.com/",
  },
  {
    id: 4,
    image: "./imgs/budgettracker.png",
    name: "Budget Tracker",
    githubLink: "https://github.com/anniemcfarland7/budget-tracker",
    deployedLink: "https://annie-budget-tracker.herokuapp.com/",
  },
  {
    id: 5,
    image: "./imgs/notetaker.png",
    name: "Note Taker",
    githubLink: "https://github.com/anniemcfarland7/note-taker",
    deployedLink: "note-taker-annie.herokuapp.com/",
  },
];

function Projects() {
  return (
    <main>
      <div className="container">
        <div className="row row-cols-md-3 mx-auto mt-5">
          {projects.map((project) => (
            <Card
              className="card"
              key={project.id}
              image={project.image}
              name={project.name}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default Projects;
