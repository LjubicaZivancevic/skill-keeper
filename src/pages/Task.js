import React from "react";

function Task() {
  return (
    <div className="App">
      <section className="Content">
        <h1 className="Heading">Skill Keeper</h1>
        <div className="Text">
          <h3>Overview</h3>
          <p>
            The task represents an application to create skills, people and jobs
            and add compile them all together.
          </p>
          <h3>Workflow</h3>
          <ul>
            <li>
              As a user I want to be able to add new skills to the skill list.
              The skills should have a name and optionally an image (ex.
              javascript logo for javascript).
            </li>
            <li>
              Once the skills are added, I as a user want to see them all listed
              on a separate page. The list should be sortable by name.
            </li>
            <li>
              After skills are added, I want to create a user profile and assign
              some skills to it.
            </li>
            <li>
              When the page for making user profile is open, user should be able
              to add name, user photo (url link to the image is enough), date of
              birth, location and skills. Skills are shown in form of a list and
              are added by clicking on them. Bonus feature is to make list
              filterable through input field on the top.
            </li>

            <li>
              When new user profile is saved, it should be shown on the profiles
              overview page. Profiles should be sortable by name, filterable by
              skills and searchable by user name.
            </li>

            <li>
              The bonus feature is to create a predictable search, activating
              after typing three letters.
            </li>

            <li>
              By clicking on each profile from the list, user should see the
              details about it.
            </li>

            <li>
              When on profiles or skills page, in both lists next to the each
              element should be a edit and delete button, which when it is
              clicked gives possibility to edit or delete item.
            </li>
          </ul>
          <h3>API endpoints</h3>
          <h5>
            <em>Profiles</em>
          </h5>
          <h5>GET / POST</h5>
          https://6195285474c1bd00176c6be7.mockapi.io/profiles
          <h5> GET BY ID / PUT / DELETE</h5>
          /profiles/:id
          <br />
          <br />
          <h5>
            <em>Skills</em>
          </h5>
          <h5>GET / POST</h5>
          https://6195285474c1bd00176c6be7.mockapi.io/skills
          <h5>GET BY ID / PUT / DELETE</h5>
          /skills/:id
          <h3>Additional information</h3>
          Try to focus on providing as much features as possible. Great design
          is a bonus.
          <br />
          <br />
          <em>Good luck</em>
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </section>
    </div>
  );
}

export default Task;
