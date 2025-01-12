import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import Contact from "../components/Contact";
import { AnimatePresence, motion } from "framer-motion";

function PageSingle() {
  const { projectId } = useParams();

  const restPath = `https://camrogers.ca/portfolio-cms/wp-json/wp/v2/project/${projectId}`;

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

  function componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidMount();

  return (
    <>
      {isLoaded ? (
        <AnimatePresence>
          <motion.div
            className="single-wrapper"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section className="single-desc">
              <div>
                <h2 className="single-header">
                  <span className="tag">&lt;h2&gt;</span>
                  {restData.title.rendered}
                  <span className="tag">&lt;/h2&gt;</span>
                </h2>

                <p>
                  <span className="tag">&lt;p&gt;</span>
                  {restData.acf.project_description}
                  <span className="tag">&lt;/p&gt;</span>
                </p>
              </div>

              <div className="link-wrapper">
                {restData.acf.github_link ? (
                  <a
                    className="github-link btn"
                    href={restData.acf.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="github-link btn">No repo available</span>
                )}

                <a
                  className="live-site btn"
                  href={restData.acf.live_site}
                  target="_blank"
                >
                  Live Site
                </a>
              </div>
            </section>
            {isLoaded ? (
              <figure>
                <img
                  className="project-image"
                  src={`${restData.acf.project_image}`}
                  alt={"{projectData.title.rendered} screenshot"}
                />
              </figure>
            ) : (
              <Loading />
            )}
            <section>
              <h3 className="single-header">
                <span className="tag">&lt;h3&gt;</span>Skills
                <span className="tag">&lt;/h3&gt;</span>
              </h3>
              <p>
                <span className="tag">&lt;p&gt;</span>
                {restData.acf.skills}
                <span className="tag">&lt;/p&gt;</span>
              </p>{" "}
            </section>
            <section>
              <h3 className="single-header">
                <span className="tag">&lt;h3&gt;</span>What I Learned
                <span className="tag">&lt;/h3&gt;</span>
              </h3>
              <p>
                <span className="tag">&lt;p&gt;</span>
                {restData.acf.learned}
                <span className="tag">&lt;/p&gt;</span>
              </p>
            </section>
            <Contact />
          </motion.div>
        </AnimatePresence>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default PageSingle;
