import { useState, useEffect } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function Projects() {
  const restPath = "https://camrogers.ca/portfolio-cms/wp-json/wp/v2/project/";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <section id="projects">
      <h2>
        <span className="tag">&lt;h2&gt;</span>Projects
        <span className="tag">&lt;/h2&gt;</span>
      </h2>

      <div className="projects-grid">
        {isLoaded ? (
          restData.map((projectData, i) => (
            <article key={i}>
              <figure>
                <img
                  src={`${projectData.acf.project_image}`}
                  alt={"{projectData.title.rendered} screenshot"}
                />
              </figure>
              <h3>
                <span className="tag">&lt;h3&gt;</span>
                {projectData.title.rendered}
                <span className="tag">&lt;/h3&gt;</span>
              </h3>
              <p>
                <span className="tag">&lt;p&gt;</span>
                {projectData.acf.short}
                <span className="tag">&lt;/p&gt;</span>
              </p>

              <Link to={`/single/${projectData.id}`} className="btn">
                Learn More
              </Link>
            </article>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
}

export default Projects;
