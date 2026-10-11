export const siteConfig = {
  name: "Lauren Luksay",
  title: "UBC Engineering Physics Student",
  description: "Portfolio website of Lauren Luksay",
  accentColor: "#4f8277",

  resumeUrl: "/resume.pdf",

  social: {
    email: "laurenluksay@icloud.com",
    linkedin: "https://www.linkedin.com/in/laurenluksay",
    github: "https://github.com/laurenluksay",
    twitter: "",
  },

  aboutMe:
    "Hi, welcome to my portfolio website! I’m Lauren, a fourth-year Engineering Physics student at the University of British Columbia. I’m passionate about mechanical design and robotics, and I’ve built hands-on experience across the full design process, from concept and CAD to prototyping, fabrication, and testing. I’m currently looking for co-op and internship opportunities where I can keep learning and contribute to meaningful engineering work. I’m always happy to connect with people and organizations working on interesting problems, so feel free to explore my work and reach out with any questions or opportunities.",
 
    skills: [
      "SolidWorks",
      "Onshape",
      "Machine Shop Certified (Lathe, Mill, Waterjet)",
      "Laser Cutting",
      "3D Printing",
      "Technical Writing & Documentation",
      "Iterative Design & Testing",
    ],

  projects: [
    {
      name: "The Scorpion: Autonomous Competition Robot",
      description:
        "Lead mechanical engineer on a four-person team that designed, built, and competed a fully autonomous robot in UBC's ENPH 253 competition. Designed the drivetrain, chassis, and a four-degree-of-freedom arm, and developed a claw-mounted LiDAR system for precise object pickup.",
      link: "/projects/Scorpion",
      image: "/projects/scorpion/robotFront.jpg",
      skills: ["Onshape", "Laser Cutting", "3D Printing", "Machining", "Sensor Integration"],
    },
    {
      name: "Machined Phone Stand",
      description:
        "Machined an adjustable phone stand from aluminum and brass using the waterjet cutter, mill, and lathe.",
      link: "/projects/MachinedPhoneStand",
      image: "/projects/phoneStand/phoneStand.jpg",
      skills: ["Milling", "Lathe Work", "Waterjet Cutting", "Tool Grinding"],
    },
    {
      name: "Closed-Loop Motor Speed Control",
      description:
        "Built a closed-loop motor speed controller from discrete analog and digital components, using optical sensing, digital counting, and an integrating amplifier to hold a DC motor at a set speed.",
      link: "/projects/MotorSpeedControl",
      image: "/projects/motorSpeedControl/finalSetup.jpg",
      skills: ["Circuit Design", "Analog and Digital Electronics", "Oscilloscope Debugging", "Feedback Control"],
    },
  ],

  experience: [
    {
      company: "UBC Uncrewed Aircraft Systems (UAS)",
      title: "Aircraft Team Member",
      dateRange: "September 2026 - Present",
      image: "/experience/ubcUas/UASLogo.png",
      bullets: [
        "Collaborate with a 60+ member team to design and build a new autonomous UAV each year for the AEAC and SUAS international competitions.",
        "Develop airframe structures using carbon fibre composites, machined aluminium, and 3D-printed parts.",
        "Designing the suspended landing gear and the propeller motor and ESC mounts for the carbon fibre spars.",
      ],
      link: "/experience/UBCUAS",
    },
    {
      company: "UBC Supermileage",
      title: "Powertrain Team Member",
      dateRange: "September 2025 - August 2026",
      image: "/experience/supermileage/SupermileageLogo.png",
      bullets: [
        "Collaborated on the design and optimization of powertrain systems across the engine and drivetrain subdivisions to maximize vehicle efficiency.",
        "Designed and modified CAD assemblies for vehicle subsystems, including PCB enclosures and revisions to the cable-actuated braking system.",
        "Contributed to concept generation and weighted decision matrix evaluation for a drivetrain redesign, and assisted with ECU tuning and testing.",
      ],
      link: "/experience/Supermileage",
    },
    {
      company: "Chem-E Car UBC",
      title: "Mechanical Engineering Team Member",
      dateRange: "September 2024 - August 2025",
      image: "/experience/chemECar/ChemECarLogo.png",
      bullets: [
        "Designed SolidWorks parts and assemblies for the drivetrain and chassis, iterating through 3D-printed prototypes to optimize manufacturability, rigidity, and weight.",
        "Developed the motor, gear, and shaft system and integrated it into the chassis for reliable power transmission and precise alignment.",
        "Designed the chemical reaction and battery chambers for secure containment, ease of assembly, and sensor integration.",
      ],
      link: "/experience/ChemECar",
    },
  ],

  education: [
    {
      school: "University of British Columbia",
      degree: "Bachelor of Applied Science, Engineering Physics",
      dateRange: "September 2023 - Expected May 2029",
      achievements: [
        "Average: 92%",
        "Dean's Scholar",
        "BC Scholarship Society Women in Technology Scholarship (2026)",
        "UBC Trek Excellence Scholarship, awarded to the top 5% of the faculty (2025)",
        "UBC Presidential Scholars Award (2023)",
        "Relevant coursework in mechanics of materials, fluid mechanics, heat and thermodynamics, engineering materials, classical mechanics, circuit analysis, analog and digital electronics, autonomous robotics, and software development",
        "Transcript available upon request",
      ],
    },
  ],
};
