import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = {
  "Maharashtra": [
      {
          "title": "COVID Start",
          "company_name": "Maharashtra",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "The first case of COVID-19 in Maharashtra was confirmed on March 9, 2020.",
              "The largest single-day spike in COVID-19 cases in Maharashtra was reported on April 18, 2021.",
              "The first wave of COVID-19 in Maharashtra extended from March 2020 to mid-February 2021, with the least number of daily cases (656) recorded on February 12, 2021.",
              "Implementing strict lockdown measures and establishing COVID-19 testing and treatment facilities across the state.",
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Maharashtra",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The second wave of COVID-19 in Maharashtra hit between February-July 2021, with the peak of the disease during April-May 2021.",
              "As of February 28, 2022, there were over 2.7 million confirmed cases of COVID-19 in Maharashtra.",
              "As of June 6, 2022, there were 7,429 active COVID-19 cases in Maharashtra, and the health authorities warned of a potential increase in cases during June and July.",
              "Ramping up vaccination efforts and ensuring adequate healthcare infrastructure to handle the surge in cases."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Maharashtra",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "The second wave of COVID-19 in Maharashtra gradually subsided from February 2022 onwards, with a decline in daily cases and increased vaccination coverage.",
              "As of January 31, 2023, the number of active COVID-19 cases in Maharashtra had significantly reduced compared to the peak of the second wave.",
              "Continuing to follow preventive measures, monitoring COVID-19 variants, and promoting public awareness to prevent future outbreaks."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Maharashtra",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, there were over 44.9 million confirmed cases of COVID-19 in India, with over 531,000 deaths. The specific number of cases in Maharashtra during this time period is not available.",
              "Collaborating with healthcare experts, government agencies, and communities to implement targeted measures and prevent the spread of the virus.",
              "Regularly monitoring the COVID-19 situation, conducting testing, and ensuring timely healthcare support for affected individuals.",
              "Continuing vaccination drives and promoting adherence to COVID-19 protocols to mitigate the impact of the ongoing pandemic."
          ]
      }
  ],

  "Gujarat": [
      {
          "title": "COVID Start",
          "company_name": "Gujarat",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "The first case of COVID-19 in Gujarat was confirmed on March 19, 2020.",
              "The daily COVID-19 cases in Gujarat started increasing rapidly from April 2020.",
              "Implementing preventive measures such as lockdowns, travel restrictions, and promoting public awareness about the virus.",
              "Establishing dedicated COVID-19 hospitals and quarantine centers to handle the increasing number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Gujarat",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Gujarat was observed during the second wave, which occurred between April 2021 and June 2021.",
              "As of February 28, 2022, Gujarat had reported a significant number of confirmed cases and active infections.",
              "The state health department initiated measures to enhance healthcare infrastructure and oxygen supply to manage the surge in cases.",
              "Implementing strict containment measures and mass vaccination drives to control the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Gujarat",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "From January 2022 onwards, Gujarat witnessed a gradual decline in COVID-19 cases and a decrease in the positivity rate.",
              "As of January 31, 2023, the number of active COVID-19 cases in Gujarat had significantly reduced compared to the peak of the second wave.",
              "Continuing to emphasize COVID-19 vaccination, monitoring emerging variants, and ensuring preparedness to respond to any resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Gujarat",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, there were over 44.9 million confirmed cases of COVID-19 in India, with over 531,000 deaths. The specific number of cases in Gujarat during this time period is not available.",
              "Collaborating with healthcare professionals, local authorities, and community leaders to ensure effective pandemic response and control measures.",
              "Promoting COVID-appropriate behavior, conducting regular testing, and ensuring timely medical support for those in need.",
              "Strengthening healthcare infrastructure and preparing for potential future waves or new variants of the virus."
          ]
      }
  ],
  "Rajasthan": [
      {
          "title": "COVID Start",
          "company_name": "Rajasthan",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "The first case of COVID-19 in Rajasthan was confirmed on March 2, 2020.",
              "The daily COVID-19 cases in Rajasthan started increasing rapidly from April 2020.",
              "Implementing preventive measures such as lockdowns, travel restrictions, and promoting public awareness about the virus.",
              "Establishing dedicated COVID-19 hospitals and quarantine centers to handle the increasing number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Rajasthan",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Rajasthan was observed during the second wave, which occurred between April 2021 and June 2021.",
              "As of February 28, 2022, Rajasthan had reported a significant number of confirmed cases and active infections.",
              "The state health department initiated measures to enhance healthcare infrastructure and oxygen supply to manage the surge in cases.",
              "Implementing strict containment measures and mass vaccination drives to control the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Rajasthan",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "From January 2022 onwards, Rajasthan witnessed a gradual decline in COVID-19 cases and a decrease in the positivity rate.",
              "As of January 31, 2023, the number of active COVID-19 cases in Rajasthan had significantly reduced compared to the peak of the second wave.",
              "Continuing to emphasize COVID-19 vaccination, monitoring emerging variants, and ensuring preparedness to respond to any resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Rajasthan",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, there were over 44.9 million confirmed cases of COVID-19 in India, with over 531,000 deaths. The specific number of cases in Rajasthan during this time period is not available.",
              "Collaborating with healthcare professionals, local authorities, and community leaders to ensure effective pandemic response and control measures.",
              "Promoting COVID-appropriate behavior, conducting regular testing, and ensuring timely medical support for those in need.",
              "Strengthening healthcare infrastructure and preparing for potential future waves or new variants of the virus."
          ]
      }
  ],

  "Punjab": [
      {
          "title": "COVID Start",
          "company_name": "Punjab",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "The first case of COVID-19 in Punjab was confirmed on March 7, 2020.",
              "The daily COVID-19 cases in Punjab started increasing rapidly from April 2020.",
              "Implementing preventive measures such as lockdowns, travel restrictions, and promoting public awareness about the virus.",
              "Establishing dedicated COVID-19 hospitals and quarantine centers to handle the increasing number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Punjab",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Punjab was observed during the second wave, which occurred between April 2021 and June 2021.",
              "As of February 28, 2022, Punjab had reported a significant number of confirmed cases and active infections.",
              "The state health department initiated measures to enhance healthcare infrastructure and oxygen supply to manage the surge in cases.",
              "Implementing strict containment measures and mass vaccination drives to control the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Punjab",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "From January 2022 onwards, Punjab witnessed a gradual decline in COVID-19 cases and a decrease in the positivity rate.",
              "As of January 31, 2023, the number of active COVID-19 cases in Punjab had significantly reduced compared to the peak of the second wave.",
              "Continuing to emphasize COVID-19 vaccination, monitoring emerging variants, and ensuring preparedness to respond to any resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Punjab",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, there were over 44.9 million confirmed cases of COVID-19 in India, with over 531,000 deaths. The specific number of cases in Punjab during this time period is not available.",
              "Collaborating with healthcare professionals, local authorities, and community leaders to ensure effective pandemic response and control measures.",
              "Promoting COVID-appropriate behavior, conducting regular testing, and ensuring timely medical support for those in need.",
              "Strengthening healthcare infrastructure and preparing for potential future waves or new variants of the virus."
          ]
      }
  ],

  "Delhi": [
      {
          "title": "COVID Start",
          "company_name": "Delhi",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "The first case of COVID-19 in Delhi was confirmed on March 2, 2020.",
              "The daily COVID-19 cases in Delhi started increasing rapidly from April 2020.",
              "Implementing preventive measures such as lockdowns, travel restrictions, and promoting public awareness about the virus.",
              "Establishing dedicated COVID-19 hospitals and quarantine centers to handle the increasing number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Delhi",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Delhi was observed during the second wave, which occurred between April 2021 and June 2021.",
              "As of February 28, 2022, Delhi had reported a significant number of confirmed cases and active infections.",
              "The state health department initiated measures to enhance healthcare infrastructure and oxygen supply to manage the surge in cases.",
              "Implementing strict containment measures and mass vaccination drives to control the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Delhi",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "From January 2022 onwards, Delhi witnessed a gradual decline in COVID-19 cases and a decrease in the positivity rate.",
              "As of January 31, 2023, the number of active COVID-19 cases in Delhi had significantly reduced compared to the peak of the second wave.",
              "Continuing to emphasize COVID-19 vaccination, monitoring emerging variants, and ensuring preparedness to respond to any resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Delhi",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, there were over 44.9 million confirmed cases of COVID-19 in India, with over 531,000 deaths. The specific number of cases in Delhi during this time period is not available.",
              "Collaborating with healthcare professionals, local authorities, and community leaders to ensure effective pandemic response and control measures.",
              "Promoting COVID-appropriate behavior, conducting regular testing, and ensuring timely medical support for those in need.",
              "Strengthening healthcare infrastructure and preparing for potential future waves or new variants of the virus."
          ]
      }
  ],

  "Haryana": [
      {
          "title": "COVID Start",
          "company_name": "Haryana",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "The first case of COVID-19 in Haryana was confirmed on March 4, 2020.",
              "The daily COVID-19 cases in Haryana started increasing rapidly from April 2020.",
              "Implementing preventive measures such as lockdowns, travel restrictions, and promoting public awareness about the virus.",
              "Establishing dedicated COVID-19 hospitals and quarantine centers to handle the increasing number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Haryana",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Haryana was observed during the second wave, which occurred between April 2021 and June 2021.",
              "As of February 28, 2022, Haryana had reported a significant number of confirmed cases and active infections.",
              "The state health department initiated measures to enhance healthcare infrastructure and oxygen supply to manage the surge in cases.",
              "Implementing strict containment measures and mass vaccination drives to control the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Haryana",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "From January 2022 onwards, Haryana witnessed a gradual decline in COVID-19 cases and a decrease in the positivity rate.",
              "As of January 31, 2023, the number of active COVID-19 cases in Haryana had significantly reduced compared to the peak of the second wave.",
              "Continuing to emphasize COVID-19 vaccination, monitoring emerging variants, and ensuring preparedness to respond to any resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Haryana",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, there were over 44.9 million confirmed cases of COVID-19 in India, with over 531,000 deaths. The specific number of cases in Haryana during this time period is not available.",
              "Collaborating with healthcare professionals, local authorities, and community leaders to ensure effective pandemic response and control measures.",
              "Promoting COVID-appropriate behavior, conducting regular testing, and ensuring timely medical support for those in need.",
              "Strengthening healthcare infrastructure and preparing for potential future waves or new variants of the virus."
          ]
      }
  ],


  "Uttar Pradesh (UP)": [
      {
          "title": "COVID Start",
          "company_name": "Uttar Pradesh",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "The first case of COVID-19 in Uttar Pradesh was confirmed on March 4, 2020.",
              "The number of COVID-19 cases in Uttar Pradesh started increasing rapidly from April 2020.",
              "Implementing strict lockdown measures, travel restrictions, and promoting public awareness to mitigate the spread of the virus.",
              "Setting up dedicated COVID-19 hospitals and quarantine facilities to accommodate the rising number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Uttar Pradesh",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Uttar Pradesh occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Uttar Pradesh reported a significant surge in confirmed cases and active infections.",
              "The state authorities focused on enhancing healthcare infrastructure, including increasing oxygen supply and bed capacity.",
              "Implementing stringent containment measures and ramping up vaccination efforts to control the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Uttar Pradesh",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Uttar Pradesh witnessed a gradual decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Uttar Pradesh had significantly reduced compared to the peak of the second wave.",
              "Continuing to emphasize COVID-19 vaccination, monitoring emerging variants, and ensuring preparedness to respond to any future outbreaks."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Uttar Pradesh",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, there were over 5.2 million confirmed cases of COVID-19 in Uttar Pradesh, with more than 73,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community leaders to implement effective pandemic response strategies.",
              "Continuing to promote COVID-appropriate behavior, conducting extensive testing, and ensuring prompt medical assistance for those in need.",
              "Enhancing healthcare infrastructure and maintaining vigilance to prevent potential surges or new variants of the virus."
          ]
      }
  ],

  "Madhya Pradesh (MP)": [
      {
          "title": "COVID Start",
          "company_name": "Madhya Pradesh",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Madhya Pradesh confirmed its first case of COVID-19 on March 20, 2020.",
              "The number of COVID-19 cases in Madhya Pradesh started increasing rapidly from April 2020.",
              "Implementing preventive measures such as lockdowns, travel restrictions, and public awareness campaigns to curb the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and quarantine facilities to cater to the growing number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Madhya Pradesh",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Madhya Pradesh occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Madhya Pradesh witnessed a significant surge in confirmed cases and active infections.",
              "The state government focused on augmenting healthcare infrastructure and ensuring an adequate supply of medical resources.",
              "Implementing strict containment measures and conducting extensive vaccination drives to mitigate the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Madhya Pradesh",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Madhya Pradesh observed a gradual decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Madhya Pradesh had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize COVID-19 vaccination, monitoring emerging variants, and maintaining preparedness to tackle future challenges."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Madhya Pradesh",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Madhya Pradesh reported over 2.8 million confirmed cases of COVID-19, with more than 30,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community stakeholders to ensure effective pandemic management.",
              "Continuing to promote and enforce COVID-appropriate behavior, scaling up testing capacity, and providing necessary medical support.",
              "Strengthening healthcare infrastructure and staying vigilant to address any potential resurgence or new variants of the virus."
          ]
      }
  ],

  "Kerala": [
      {
          "title": "COVID Start",
          "company_name": "Kerala",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Kerala reported its first case of COVID-19 on January 30, 2020.",
              "The number of COVID-19 cases in Kerala increased steadily from March 2020.",
              "Implementing early and proactive measures such as contact tracing, testing, and public awareness campaigns.",
              "Establishing dedicated COVID-19 hospitals and isolation centers to manage the growing number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Kerala",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Kerala occurred during the second wave, particularly between May 2021 and July 2021.",
              "As of February 28, 2022, Kerala witnessed a surge in confirmed cases and faced challenges in managing the high caseload.",
              "The state government focused on bolstering healthcare infrastructure and enhancing testing and treatment facilities.",
              "Implementing strict lockdown measures, travel restrictions, and community engagement to control the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Kerala",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Kerala experienced a decline in COVID-19 cases and a reduction in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Kerala had significantly decreased compared to the peak of the second wave.",
              "Continuing to emphasize COVID-19 vaccination, monitoring emerging variants, and maintaining vigilance to prevent future outbreaks."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Kerala",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Kerala reported over 3.5 million confirmed cases of COVID-19, with more than 11,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to implement effective pandemic control measures.",
              "Continuing to promote COVID-appropriate behavior, conducting extensive testing, and ensuring accessible healthcare facilities for all.",
              "Strengthening the state's healthcare infrastructure and preparing for any potential future waves or new variants of the virus."
          ]
      }
  ],

  "Karnataka": [
      {
          "title": "COVID Start",
          "company_name": "Karnataka",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Karnataka reported its first case of COVID-19 on March 8, 2020.",
              "The number of COVID-19 cases in Karnataka started increasing from March 2020.",
              "Implementing early containment measures, contact tracing, and public awareness campaigns to control the spread of the virus.",
              "Setting up dedicated COVID-19 care centers and isolation facilities to manage the rising number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Karnataka",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Karnataka occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Karnataka witnessed a significant surge in confirmed cases and faced challenges in healthcare capacity.",
              "The state government focused on augmenting healthcare infrastructure, including oxygen supply and ICU facilities.",
              "Implementing strict lockdown measures, travel restrictions, and accelerating vaccination efforts to mitigate the impact of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Karnataka",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Karnataka observed a gradual decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Karnataka had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize COVID-19 vaccination, monitoring emerging variants, and strengthening healthcare infrastructure.",
              "Focusing on economic recovery and restoring normalcy while maintaining necessary precautions to prevent future outbreaks."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Karnataka",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Karnataka reported over 4.2 million confirmed cases of COVID-19, with more than 50,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community stakeholders to implement effective pandemic control strategies.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable access to healthcare services.",
              "Preparing for potential future waves, enhancing surveillance systems, and fostering research and innovation in tackling the virus."
          ]
      }
  ],


  "Tamil Nadu": [
      {
          "title": "COVID Start",
          "company_name": "Tamil Nadu",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Tamil Nadu reported its first case of COVID-19 on March 7, 2020.",
              "The number of COVID-19 cases in Tamil Nadu started increasing from March 2020.",
              "Implementing early containment measures, including strict lockdowns and travel restrictions, to curb the spread of the virus.",
              "Setting up dedicated COVID-19 hospitals and testing centers to manage the rising number of cases."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Tamil Nadu",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Tamil Nadu occurred during the second wave, particularly between May 2021 and July 2021.",
              "As of February 28, 2022, Tamil Nadu witnessed a significant surge in confirmed cases and faced challenges in healthcare capacity.",
              "The state government focused on expanding healthcare infrastructure, including ICU beds and oxygen supply.",
              "Implementing strict containment measures, mass testing, and accelerating vaccination efforts to control the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Tamil Nadu",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Tamil Nadu observed a gradual decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Tamil Nadu had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future outbreaks.",
              "Focusing on reviving the economy and providing support to affected sectors for post-pandemic recovery."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Tamil Nadu",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Tamil Nadu reported over 3.8 million confirmed cases of COVID-19, with more than 45,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, enhancing testing capabilities, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, improving medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Andhra Pradesh": [
      {
          "title": "COVID Start",
          "company_name": "Andhra Pradesh",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Andhra Pradesh reported its first case of COVID-19 on March 12, 2020.",
              "The number of COVID-19 cases in Andhra Pradesh started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 hospitals and quarantine centers to provide healthcare and isolation facilities."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Andhra Pradesh",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Andhra Pradesh occurred during the second wave, particularly between May 2021 and July 2021.",
              "As of February 28, 2022, Andhra Pradesh witnessed a significant surge in confirmed cases and faced challenges in healthcare capacity.",
              "The state government focused on ramping up healthcare infrastructure, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, testing, and contact tracing to curb the spread of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Andhra Pradesh",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Andhra Pradesh witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Andhra Pradesh had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future outbreaks.",
              "Focusing on economic recovery and providing support to affected sectors for post-pandemic revival."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Andhra Pradesh",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Andhra Pradesh reported over 3.2 million confirmed cases of COVID-19, with more than 30,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare infrastructure.",
              "Continuing to promote COVID-appropriate behavior, expanding testing capabilities, and ensuring vaccine accessibility for all.",
              "Preparing for potential future waves, enhancing medical facilities, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Telangana": [
      {
          "title": "COVID Start",
          "company_name": "Telangana",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Telangana reported its first case of COVID-19 on March 2, 2020.",
              "The number of COVID-19 cases in Telangana started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to mitigate the spread of the virus.",
              "Setting up dedicated COVID-19 hospitals and quarantine centers to provide necessary healthcare facilities."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Telangana",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Telangana occurred during the second wave, particularly between May 2021 and July 2021.",
              "As of February 28, 2022, Telangana witnessed a significant surge in confirmed cases, challenging the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures such as lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Telangana",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Telangana witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Telangana had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Telangana",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Telangana reported over 1.8 million confirmed cases of COVID-19, with more than 15,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Chhattisgarh": [
      {
          "title": "COVID Start",
          "company_name": "Chhattisgarh",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Chhattisgarh reported its first case of COVID-19 on March 18, 2020.",
              "The number of COVID-19 cases in Chhattisgarh started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to curb the spread of the virus.",
              "Setting up dedicated COVID-19 care centers and hospitals to provide medical assistance and isolation facilities."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Chhattisgarh",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Chhattisgarh occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Chhattisgarh witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {


          "title": "COVID End",
          "company_name": "Chhattisgarh",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Chhattisgarh witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Chhattisgarh had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Chhattisgarh",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Chhattisgarh reported over 1.2 million confirmed cases of COVID-19, with more than 10,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Odisha": [
      {
          "title": "COVID Start",
          "company_name": "Odisha",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Odisha reported its first case of COVID-19 on March 15, 2020.",
              "The number of COVID-19 cases in Odisha started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Setting up dedicated COVID-19 hospitals and quarantine centers to provide healthcare facilities and isolation."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Odisha",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Odisha occurred during the second wave, particularly between May 2021 and July 2021.",
              "As of February 28, 2022, Odisha witnessed a significant surge in confirmed cases, posing challenges to the healthcare infrastructure.",
              "The state government focused on expanding medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Odisha",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Odisha witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Odisha had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Odisha",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Odisha reported over 1.4 million confirmed cases of COVID-19, with more than 8,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],
  "West Bengal": [
      {
          "title": "COVID Start",
          "company_name": "West Bengal",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "West Bengal reported its first case of COVID-19 on March 17, 2020.",
              "The number of COVID-19 cases in West Bengal started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "West Bengal",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in West Bengal occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, West Bengal witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "West Bengal",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, West Bengal witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in West Bengal had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "West Bengal",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, West Bengal reported over 2.5 million confirmed cases of COVID-19, with more than 30,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Bihar": [
      {
          "title": "COVID Start",
          "company_name": "Bihar",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Bihar reported its first case of COVID-19 on March 22, 2020.",
              "The number of COVID-19 cases in Bihar started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Setting up dedicated COVID-19 hospitals and quarantine centers to provide healthcare facilities and isolation."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Bihar",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Bihar occurred during the second wave, particularly between May 2021 and July 2021.",
              "As of February 28, 2022, Bihar witnessed a significant surge in confirmed cases, posing challenges to the healthcare infrastructure.",
              "The state government focused on expanding medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Bihar",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Bihar witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Bihar had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Bihar",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Bihar reported over 3 million confirmed cases of COVID-19, with more than 20,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Jharkhand": [
      {
          "title": "COVID Start",
          "company_name": "Jharkhand",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Jharkhand reported its first case of COVID-19 on March 31, 2020.",
              "The number of COVID-19 cases in Jharkhand started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Setting up dedicated COVID-19 hospitals and quarantine centers to provide healthcare facilities and isolation."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Jharkhand",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Jharkhand occurred during the second wave, particularly between May 2021 and July 2021.",
              "As of February 28, 2022, Jharkhand witnessed a significant surge in confirmed cases, posing challenges to the healthcare infrastructure.",
              "The state government focused on expanding medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Jharkhand",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Jharkhand witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Jharkhand had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Jharkhand",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Jharkhand reported over 1.8 million confirmed cases of COVID-19, with more than 10,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],
  "Uttarakhand": [
      {
          "title": "COVID Start",
          "company_name": "Uttarakhand",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Uttarakhand reported its first case of COVID-19 on March 15, 2020.",
              "The number of COVID-19 cases in Uttarakhand started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Uttarakhand",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Uttarakhand occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Uttarakhand witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Uttarakhand",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Uttarakhand witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Uttarakhand had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Uttarakhand",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Uttarakhand reported over 250,000 confirmed cases of COVID-19, with more than 4,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Himachal Pradesh": [
      {
          "title": "COVID Start",
          "company_name": "Himachal Pradesh",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Himachal Pradesh reported its first case of COVID-19 on March 20, 2020.",
              "The number of COVID-19 cases in Himachal Pradesh started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Himachal Pradesh",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Himachal Pradesh occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Himachal Pradesh witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Himachal Pradesh",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Himachal Pradesh witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Himachal Pradesh had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Himachal Pradesh",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Himachal Pradesh reported over 150,000 confirmed cases of COVID-19, with more than 2,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Jammu and Kashmir": [
      {
          "title": "COVID Start",
          "company_name": "Jammu and Kashmir",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Jammu and Kashmir reported its first case of COVID-19 on March 18, 2020.",
              "The number of COVID-19 cases in Jammu and Kashmir started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Jammu and Kashmir",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Jammu and Kashmir occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Jammu and Kashmir witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Jammu and Kashmir",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Jammu and Kashmir witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Jammu and Kashmir had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Jammu and Kashmir",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Jammu and Kashmir reported over 350,000 confirmed cases of COVID-19, with more than 5,000 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],
  "Sikkim": [
      {
          "title": "COVID Start",
          "company_name": "Sikkim",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Sikkim reported its first case of COVID-19 on March 23, 2020.",
              "The number of COVID-19 cases in Sikkim started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Sikkim",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Sikkim occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Sikkim witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Sikkim",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Sikkim witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Sikkim had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Sikkim",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Sikkim reported over 20,000 confirmed cases of COVID-19, with more than 300 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Assam": [
      {
          "title": "COVID Start",
          "company_name": "Assam",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Assam reported its first case of COVID-19 on March 31, 2020.",
              "The number of COVID-19 cases in Assam started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Assam",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Assam occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Assam witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Assam",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Assam witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Assam had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Assam",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Assam reported over 250,000 confirmed cases of COVID-19, with more than 2,500 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Manipur": [
      {
          "title": "COVID Start",
          "company_name": "Manipur",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Manipur reported its first case of COVID-19 on March 24, 2020.",
              "The number of COVID-19 cases in Manipur started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Manipur",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Manipur occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Manipur witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Manipur",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Manipur witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Manipur had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Manipur",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Manipur reported over 40,000 confirmed cases of COVID-19, with more than 600 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Meghalaya": [
      {
          "title": "COVID Start",
          "company_name": "Meghalaya",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Meghalaya reported its first case of COVID-19 on April 13, 2020.",
              "The number of COVID-19 cases in Meghalaya started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Meghalaya",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Meghalaya occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Meghalaya witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Meghalaya",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Meghalaya witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Meghalaya had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Meghalaya",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Meghalaya reported over 12,000 confirmed cases of COVID-19, with more than 150 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Mizoram": [
      {
          "title": "COVID Start",
          "company_name": "Mizoram",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Mizoram reported its first case of COVID-19 on March 24, 2020.",
              "The number of COVID-19 cases in Mizoram started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Mizoram",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Mizoram occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Mizoram witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Mizoram",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Mizoram witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Mizoram had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Mizoram",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Mizoram reported over 15,000 confirmed cases of COVID-19, with more than 50 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Nagaland": [
      {
          "title": "COVID Start",
          "company_name": "Nagaland",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Nagaland reported its first case of COVID-19 on March 25, 2020.",
              "The number of COVID-19 cases in Nagaland started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Nagaland",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Nagaland occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Nagaland witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Nagaland",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Nagaland witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Nagaland had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Nagaland",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Nagaland reported over 20,000 confirmed cases of COVID-19, with more than 250 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Tripura": [
      {
          "title": "COVID Start",
          "company_name": "Tripura",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Tripura reported its first case of COVID-19 on March 23, 2020.",
              "The number of COVID-19 cases in Tripura started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Tripura",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Tripura occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Tripura witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Tripura",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Tripura witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Tripura had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Tripura",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Tripura reported over 50,000 confirmed cases of COVID-19, with more than 700 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ],

  "Arunachal Pradesh": [
      {
          "title": "COVID Start",
          "company_name": "Arunachal Pradesh",
          "icon": "starbucks",
          "iconBg": "#383E56",
          "date": "March 2020 - April 2021",
          "points": [
              "Arunachal Pradesh reported its first case of COVID-19 on April 2, 2020.",
              "The number of COVID-19 cases in Arunachal Pradesh started increasing from March 2020.",
              "Implementing early containment measures, including lockdowns and travel restrictions, to control the spread of the virus.",
              "Establishing dedicated COVID-19 treatment centers and isolation facilities to provide medical assistance and care."
          ]
      },
      {
          "title": "COVID Peak",
          "company_name": "Arunachal Pradesh",
          "icon": "tesla",
          "iconBg": "#E6DEDD",
          "date": "Jan 2021 - Feb 2022",
          "points": [
              "The peak of COVID-19 cases in Arunachal Pradesh occurred during the second wave, particularly between April 2021 and June 2021.",
              "As of February 28, 2022, Arunachal Pradesh witnessed a significant surge in confirmed cases, straining the healthcare infrastructure.",
              "The state government focused on augmenting medical resources, including ICU beds and oxygen supply.",
              "Implementing strict measures like lockdowns, mass testing, and contact tracing to control the transmission of the virus."
          ]
      },
      {
          "title": "COVID End",
          "company_name": "Arunachal Pradesh",
          "icon": "shopify",
          "iconBg": "#383E56",
          "date": "Jan 2022 - Jan 2023",
          "points": [
              "Starting from January 2022, Arunachal Pradesh witnessed a decline in COVID-19 cases and a decrease in the positivity rate.",
              "By January 31, 2023, the number of active COVID-19 cases in Arunachal Pradesh had significantly reduced compared to the peak of the second wave.",
              "Continuing to prioritize vaccination, surveillance, and monitoring of emerging variants to prevent future waves.",
              "Focusing on economic recovery, supporting affected sectors, and promoting safe practices for a post-pandemic resurgence."
          ]
      },
      {
          "title": "COVID Current",
          "company_name": "Arunachal Pradesh",
          "icon": "meta",
          "iconBg": "#E6DEDD",
          "date": "Jan 2023 - Present",
          "points": [
              "As of May 14, 2023, Arunachal Pradesh reported over 25,000 confirmed cases of COVID-19, with more than 300 deaths.",
              "Collaborating with healthcare professionals, local authorities, and community organizations to strengthen the healthcare system.",
              "Continuing to enforce COVID-appropriate behavior, expanding testing capacity, and ensuring equitable vaccine distribution.",
              "Preparing for potential future waves, enhancing medical infrastructure, and investing in research and development for better pandemic management."
          ]
      }
  ]


}
// const experiences = [
//   {
//     title: "Covid start",
//     company_name: "Maharashtra",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "The first case of COVID-19 in Maharashtra was confirmed on March 9, 2020",
//       "The largest single-day spike in COVID-19 cases in Maharashtra was reported on April 18, 2021",
//       "IAs of May 20, 2021, the first wave of COVID-19 in Maharashtra extended from March 2020 to mid-February 2021, with the least number of daily cases (656) recorded on February 12, 2021",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Covid peak",
//     company_name: "Maharashtra",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "The second wave of COVID-19 in Maharashtra hit between February-July 2021, with the peak of the disease during April-May 2021",
//       "As of February 28, 2022, there were over 2.7 million confirmed cases of COVID-19 in Maharashtra",
//       "IAs of June 6, 2022, there were 7,429 active COVID-19 cases in Maharashtra, and the health minister warned that cases were likely to increase in June and July",
//       "The total number of confirmed cases increased to 335 on 1 April, with 30 people in Mumbai, 2 in Pune and 1 in Buldhana testing positive. The death toll rose to 16 after 4 people, including one in Dharavi,[50] died from the virus in Mumbai",
//     ],
//   },
//   {
//     title: "COVID end",
//     company_name: "Maharashtra",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "The second wave of COVID-19 in Maharashtra hit between February-July 2021, with the peak of the disease during April-May 2021",
//       "As of February 28, 2022, there were over 2.7 million confirmed cases of COVID-19 in Maharashtra",
//       "IAs of June 6, 2022, there were 7,429 active COVID-19 cases in Maharashtra, and the health minister warned that cases were likely to increase in June and July",
//       "The total number of confirmed cases increased to 335 on 1 April, with 30 people in Mumbai, 2 in Pune and 1 in Buldhana testing positive. The death toll rose to 16 after 4 people, including one in Dharavi,[50] died from the virus in Mumbai",
//     ],
//   },
//   {
//     title: "Covid chances",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "As of May 14, 2023, there were over 44.9 million confirmed cases of COVID-19 in India, with over 531,000 deaths. It is unclear how many of these cases were specifically in Maharashtra during this time period",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "On 23 April, the state reported a spike of 778 fresh cases of coronavirus. In addition, six people in Mumbai, five in Pune, and one each in Navi Munbai, Nandurbar and Dhule died, taking the overall death toll to 283.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
