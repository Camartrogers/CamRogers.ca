import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { AnimatePresence, motion } from "framer-motion";

const PageHome = () => {
  const restPath = "https://camrogers.ca/portfolio-cms/wp-json/wp/v2/pages/22";
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
    <>
      {isLoaded ? (
        <AnimatePresence>
          <motion.div
            className="home-wrapper"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <article id="about">
              <h2>
                <span className="tag">&lt;h2&gt;</span>My Story
                <span className="tag">&lt;/h2&gt;</span>
              </h2>
              <p>
                <span className="tag">&lt;p&gt;</span>
                {restData.acf.my_story}
                <span className="tag">&lt;/p&gt;</span>
              </p>
            </article>
            <Projects />
            <Contact />
          </motion.div>
        </AnimatePresence>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PageHome;
