import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import axios from "axios";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>

        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [State, setstate] = useState("Maharashtra");
  const [prediction, setprediction] = useState(0)
  const handle = async (state) => {
    axios.post("http://localhost:8000/", { state }, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      console.log("result:", res.data["Predicted Cases of Kerala"]);
      setprediction(Math.ceil(res.data["Predicted Cases of Kerala"]));
    }
    ).catch((err) => {
      console.log(err);
    }
    )

  }
  useEffect(() => {
    // replace % with space
    let path = window.location.pathname.split("/")[1].replace(/%20/g, " ");
    setstate(path);
    // console.log(window.location.pathname.split("/")[1])
    if (experiences[path] === undefined) {
      window.location.href = "/Maharashtra"
    }
    // call handle 
    handle(path);
  }, [window.location.pathname])
  // console.log(State)
  return (
    <>
      <center>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            {State}, India
          </h2>
        </motion.div>
      </center>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences[State].map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <button style={{ color: 'white ', padding: "1rem 1rem", marginLeft: "42.7vw" }} onClick={e => alert(`Prediction ${prediction}`)}>
        Predict cases upto 31 days
      </button>
    </>
  );
};

export default SectionWrapper(Experience, "work");
