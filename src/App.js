import React, { useState } from "react";
import { WelcomePage } from "./comp/WelcomePage";
import { CoursePage } from "./comp/CoursePage";
import { ModulePage } from "./comp/ModulePage";
import { Route } from "./comp/Route";
import { questions } from "./comp/data";

const moduleContent = [
  {
      header: 'Methodological foundations of scientific knowledge.',
      text: '1.1 Introduction to the course. 1.2 Methodological foundations of scientific knowledge. 1.3 Main features of scientific knowledge.',
      week: 'Week 1',
      num: '1',
      googleLink: 'https://docs.google.com/presentation/d/10eRD33OkeY2_Rb5h2NmLUXPm9Lpg-58C/edit#slide=id.p1',
      quiz: questions[0]
  },
  {
      header: 'Methodological foundations of scientific knowledge.',
      text: '2.1 Methods of scientific knowledge. 2.2 Ethical and aesthetic foundations of the methodology. 2.3 Cycles of scientific activity.',
      week: 'Week 2',
      num: '2',
      googleLink: 'https://docs.google.com/presentation/d/1LB-TVOXNHx6meDGQWLHa6iux4g450IKp/edit#slide=id.p1',
      quiz: questions[1]
  },
  {
      header: 'Modern approaches to the organization of research activities.',
      text: '3.1 Choice of direction of scientific research. 3.2 Stages of research work. Drawing up a plan for your own scientific research. 3.3 Search for scientific information. Accumulation, processing and storage of scientific information.',
      week: 'Week 3',
      num: '3',
      googleLink: 'https://docs.google.com/presentation/d/1Ew6IT-42Qnsbqa5dqbW2RRA7QVrIgsxT/edit#slide=id.p1',
      quiz: questions[2]
  },
  {
      header: 'Theoretical and experimental studies.',
      text: '4.1 Theoretical studies. Methods and features of theoretical research. 4.2 Structure and models of theoretical research. 4.3 General information about experimental studies. Processing of experimental studies. 4.4 Field and field studies.',
      week: 'Week 4',
      num: '4',
      googleLink: 'https://docs.google.com/presentation/d/1XPVka9McfLiMCJa4bGYTlQwffKNq1F0H/edit#slide=id.p1',
      quiz: questions[3]
  },
  {
      header: 'Experimental technique.',
      text: "5.1 Methodology and planning of the experiment. 5.2 Metrological support of experimental studies. 5.3 Organization of the experimenter's workplace. Influence of psychological factors on the course and quality of the experiment.",
      week: 'Week 5',
      num: '5',
      googleLink: 'https://docs.google.com/presentation/d/1ZpnglQIrOFo09CNIA4G6K5HKp3S162eo/edit#slide=id.p1',
      quiz: questions[4]
  },
  {
      header: 'Presentation and presentation of the results of scientific activity.',
      text: '6.1 Processing and registration of research results. Requirements for the design of scientific work. 6.2 Oral presentation of information. Presentation and report of the research results. 6.3 Justification of the conclusions of the scientific work. Reliability assessment results of scientific research.',
      week: 'Week 6',
      num: '6',
      googleLink: 'https://docs.google.com/presentation/d/1IeYv8XbJyi3ISJl7ffZ2tPV4mkWHhE3m/edit#slide=id.p1',
      quiz: questions[5]
  },
  {
      header: 'Approbation of the results of scientific activity.',
      text: '7.1 Publication of scientific results research. 7.2 The order of pre-defense of scientific research.',
      week: 'Week 7',
      num: '7',
      googleLink: 'https://docs.google.com/presentation/d/1-YYNWiztl2hJUjMvRcRFstJUBHM_7_RWkTA9UqRWNg8/edit#slide=id.p1',
      quiz: questions[6]
  },
  {
      header: 'The concept and structure of the thesis, project, dissertation.',
      text: '8.1 The concept and features of the thesis, project. 8.2 The structure of the thesis, project. 8.3 Formulation of the purpose and objectives of the study.',
      week: 'Week 8',
      num: '8',
      googleLink: 'https://docs.google.com/presentation/d/1apnIQ3JlTcBNC-QmWAPSY0meCR8sj3zgB8akgsG0Ul8/edit#slide=id.p1',
      quiz: questions[7]
  },
  {
      header: 'Fundamentals of inventive creativity.',
      text: '9.1 General information. Objects of the invention. 9.2 Conditions for the patentability of an invention. Conditions for the patentability of a utility model. Conditions for the patentability of an industrial design. 9.3 Patent search.',
      week: 'Week 9',
      num: '9',
      googleLink: 'https://docs.google.com/presentation/d/1P2np-jsFzxCAMpkslrO33ri0LPSWMut0K_T6s5jPPiM/edit#slide=id.p1',
      quiz: questions[8]
  },
  {
      header: 'The role of science in modern society.',
      text: '10.1 Social functions of science. 10.2 Science and morality. 10.3 Contradictions in science and practice.',
      week: 'Week 10',
      num: '10',
      googleLink: 'https://docs.google.com/presentation/d/1ztqWVdac_1psfJm6YoyT-Gc0sUFb4yh5PRnoRn6nBxg/edit#slide=id.p1',
      quiz: questions[9]
  }
  
]

export const App = () => {
  const [week, setWeek] = useState(moduleContent[0])
  return (
    <div>
      <Route path="/">
        <WelcomePage />
      </Route>
      <Route path="/course">
        <CoursePage setWeek={setWeek} moduleContent={moduleContent} />
      </Route>
      <Route path={`/module/${week.num}`}>
        <ModulePage week={week} />
      </Route>
    </div>
  );
};
