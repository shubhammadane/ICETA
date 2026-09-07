/**
 * CENTRALIZED CONFERENCE CONFIGURATION
 * 
 * Update information here to automatically propagate across all components,
 * pages, headers, footers, meta tags, and call-to-actions.
 */

export const conferenceData = {
  // Primary Conference Identity
  shortName: "ICETAQC 2027",
  fullName: "International Conference on Emerging Technologies in Artificial Intelligence, Quantum Computing and Cybersecurity",
  year: "2027",
  edition: "1st International Edition",
  
  // Organizing Institution & Department
  institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
  institutionShort: "GECA",
  department: "Department of Computer Science and Engineering",
  departmentShort: "Dept. of CSE",
  stateAndCountry: "Maharashtra, India",
  venue: "Government College of Engineering, Chhatrapati Sambhajinagar, Maharashtra, India",
  locationTag: "2027 | Chhatrapati Sambhajinagar, Maharashtra, India",
  
  // Official Contact
  contactEmail: "vikul.pawar@geca.ac.in",
  institutionWebsite: "https://geca.ac.in",

  // External Form Integrations (Google Forms)
  // When URLs are provided, action buttons open the form in a new tab.
  // When left as empty strings, components display a graceful "Portal will be announced soon" status.
  links: {
    paperSubmission: "", // Set Google Form URL here
    registration: "",    // Set Google Form URL here
    contactForm: "",     // Optional Google Form inquiry URL
  },

  // Conference Supporting Text
  description: "An international platform for researchers, academicians, industry professionals, practitioners and students to exchange ideas, present original research and explore emerging developments across Artificial Intelligence, Quantum Computing, Cybersecurity and next-generation computing.",

  // Conference Objectives (10 Core Objectives)
  objectives: [
    "Provide an international forum for presenting original research.",
    "Promote research in Artificial Intelligence and Machine Learning.",
    "Explore developments in Quantum Computing and Quantum AI.",
    "Address contemporary challenges in Cybersecurity and Post-Quantum Security.",
    "Encourage interdisciplinary research in emerging computing technologies.",
    "Connect academic researchers with industry practitioners.",
    "Promote international research collaboration.",
    "Facilitate dissemination of high-quality peer-reviewed research.",
    "Identify emerging research challenges and future directions.",
    "Encourage interaction among researchers, students and experts."
  ],

  // Conference Format
  format: {
    type: "Hybrid International Conference",
    mode: "In-Person & Online Participation",
    components: [
      { name: "Keynote Lectures", desc: "Plenary sessions delivered by eminent international scholars and researchers." },
      { name: "Invited Talks", desc: "Specialized technical sessions on breakthrough paradigms in emerging computing." },
      { name: "Technical Paper Sessions", desc: "Peer-reviewed oral paper presentations across 6 specialized tracks." },
      { name: "Poster Sessions", desc: "Interactive display sessions for ongoing research and student work." },
      { name: "Panel Discussions", desc: "Deliberations on AI ethics, quantum readiness, and cybersecurity defense." },
      { name: "Industry Sessions", desc: "Technology exhibits and applied computing showcases by industry partners." },
      { name: "Networking Opportunities", desc: "Structured scientific exchanges among scholars, faculty, and practitioners." }
    ]
  },

  // Technical Tracks & Topics
  tracks: [
    {
      id: "track-1",
      number: "Track 1",
      title: "Artificial Intelligence, Machine Learning and Computer Vision",
      shortTitle: "AI, ML & Computer Vision",
      icon: "Brain",
      description: "Fundamental and applied research in artificial intelligence, learning algorithms, cognitive perception, and visual computing.",
      topics: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Image Processing",
        "Digital Image Processing",
        "Computer Vision",
        "Image Segmentation",
        "Image Enhancement and Restoration",
        "Object Detection and Recognition",
        "Pattern Recognition",
        "Generative AI",
        "Large Language Models",
        "Natural Language Processing",
        "Explainable AI",
        "AI Optimization",
        "Reinforcement Learning",
        "AI Applications"
      ]
    },
    {
      id: "track-2",
      number: "Track 2",
      title: "Quantum Computing and Quantum AI",
      shortTitle: "Quantum Computing & Quantum AI",
      icon: "Atom",
      description: "Theoretical frameworks, physical models, quantum algorithms, quantum machine learning, and quantum communication protocols.",
      topics: [
        "Quantum Computing",
        "Quantum Algorithms",
        "Quantum Machine Learning",
        "Quantum Optimization",
        "Quantum Cryptography",
        "Quantum Artificial Intelligence",
        "Quantum Information Processing",
        "Quantum Communication",
        "Quantum Applications"
      ]
    },
    {
      id: "track-3",
      number: "Track 3",
      title: "Cybersecurity and Post-Quantum Security",
      shortTitle: "Cybersecurity & Post-Quantum",
      icon: "ShieldCheck",
      description: "Next-generation cryptographic defense, threat intelligence, network resiliency, privacy engineering, and post-quantum security models.",
      topics: [
        "Cybersecurity",
        "AI for Cybersecurity",
        "Network Security",
        "Information Security",
        "Blockchain Security",
        "Privacy and Data Protection",
        "Post-Quantum Cryptography",
        "Cyber Threat Intelligence",
        "Security Analytics",
        "Secure Computing"
      ]
    },
    {
      id: "track-4",
      number: "Track 4",
      title: "Intelligent and Emerging Computing",
      shortTitle: "Intelligent & Emerging Computing",
      icon: "Cpu",
      description: "Ubiquitous, distributed, edge-to-cloud computing architectures, digital twins, robotics, and next-generation wireless communications.",
      topics: [
        "Internet of Things",
        "Edge Computing",
        "Cloud Computing",
        "Digital Twins",
        "Robotics",
        "6G Technologies",
        "Intelligent Information Retrieval",
        "Next-Generation Computing",
        "Distributed Computing",
        "Smart Systems"
      ]
    },
    {
      id: "track-5",
      number: "Track 5",
      title: "Data Science and Intelligent Analytics",
      shortTitle: "Data Science & Analytics",
      icon: "Database",
      description: "Advanced analytics pipelines, high-dimensional statistical modeling, knowledge discovery, and decision intelligence systems.",
      topics: [
        "Data Science",
        "Big Data Analytics",
        "Predictive Analytics",
        "Data Mining",
        "Knowledge Discovery",
        "Statistical Learning",
        "Intelligent Decision Support",
        "Business Intelligence",
        "Data Visualization",
        "Responsible Data Analytics"
      ]
    },
    {
      id: "track-6",
      number: "Track 6",
      title: "Emerging Applications of Artificial Intelligence",
      shortTitle: "Emerging AI Applications",
      icon: "Sparkles",
      description: "Cross-disciplinary deployments of AI across healthcare, smart cities, sustainable development, robotics, agriculture, and industry.",
      topics: [
        "AI in Healthcare",
        "AI in Education",
        "AI in Agriculture",
        "AI in Finance",
        "Smart Cities",
        "Autonomous Systems",
        "Human-AI Interaction",
        "AI for Sustainable Development",
        "Responsible and Ethical AI",
        "AI Applications in Industry"
      ]
    }
  ],

  // Call for Papers Guidelines
  callForPapers: {
    invitation: "Researchers, academicians, scientists, industry professionals, practitioners and students are invited to submit original research papers addressing theoretical, methodological, experimental and applied aspects of the conference themes.",
    originalityNotice: "Submitted manuscripts should present original research contributions and should not have been previously published or simultaneously submitted elsewhere.",
    submissionRequirements: [
      {
        title: "Original Research",
        desc: "Must present novel theoretical findings, original engineering models, or comprehensive empirical evaluations."
      },
      {
        title: "Relevant to Conference Tracks",
        desc: "Manuscripts must align directly with one of the six designated technical tracks."
      },
      {
        title: "Academic Formatting",
        desc: "Standard academic formatting guidelines with structured abstract, methodology, results, and conclusion."
      },
      {
        title: "Proper Citations",
        desc: "Rigorous attribution of literature with standard reference indexing and peer-reviewed bibliographic entries."
      },
      {
        title: "Ethical Research Practices",
        desc: "Strict compliance with scholarly ethics, research integrity, and responsible AI publication guidelines."
      },
      {
        title: "Plagiarism Compliance",
        desc: "Zero tolerance for plagiarism. Manuscripts will undergo rigorous similarity screening prior to peer review."
      },
      {
        title: "PDF Manuscript",
        desc: "All submissions must be compiled into a single clean PDF document conforming to the template."
      }
    ],
    googleFormFieldsSuggested: [
      "Author Name",
      "Email Address",
      "Phone / WhatsApp Contact",
      "Affiliation / Department",
      "Institution Name",
      "Country",
      "Paper Title",
      "Conference Track",
      "List of All Authors",
      "Corresponding Author",
      "Abstract (max 250 words)",
      "Keywords (3 to 6 keywords)",
      "Paper PDF Upload"
    ]
  },

  // Peer Review Process
  peerReview: {
    model: "Double-Blind Peer Review",
    summary: "Each submitted manuscript will undergo rigorous evaluation by at least two independent, qualified reviewers with domain expertise.",
    evaluationCriteria: [
      { name: "Originality", desc: "Novelty of the concepts, hypotheses, or technological framework presented." },
      { name: "Technical Quality", desc: "Soundness of mathematical formulations, models, and computational designs." },
      { name: "Scientific Contribution", desc: "Clear advancement over existing state-of-the-art literature." },
      { name: "Relevance", desc: "Direct alignment with the conference tracks and computational scope." },
      { name: "Methodology", desc: "Rigor and appropriateness of experimental setup, benchmarks, and data." },
      { name: "Experimental Validation", desc: "Verifiable empirical results, comparative baselines, and statistical validity." },
      { name: "Clarity", desc: "Quality of scientific writing, figures, notation, and logical structure." },
      { name: "Overall Contribution", desc: "Significance and long-term utility for the global research community." }
    ],
    workflow: [
      { step: 1, title: "Submission", desc: "Author submits manuscript in PDF format via official submission portal." },
      { step: 2, title: "Plagiarism Screening", desc: "Preliminary editorial desk check and similarity index verification." },
      { step: 3, title: "Reviewer Assignment", desc: "Allocation to at least two subject matter experts without author identity disclosure." },
      { step: 4, title: "Double-Blind Review", desc: "Rigorous technical assessment against standardized academic criteria." },
      { step: 5, title: "Author Revision", desc: "Authors address reviewer comments and recommendations if revisions are required." },
      { step: 6, title: "Final Decision", desc: "Technical Program Chairs review evaluations and formulate consensus decision." },
      { step: 7, title: "Acceptance", desc: "Official decision notification with reviewer feedback transmitted to authors." },
      { step: 8, title: "Conference Presentation", desc: "Mandatory oral presentation of accepted research by a registered author." },
      { step: 9, title: "Camera-Ready Submission", desc: "Final manuscript incorporating feedback formatted to publisher requirements." },
      { step: 10, title: "Editorial Processing", desc: "Final proceedings curation, proofing, and submission for volume publication." }
    ]
  },

  // Tentative Important Dates (No exact fake dates invented)
  importantDates: [
    { activity: "Conference Announcement", date: "January 2027", status: "Upcoming" },
    { activity: "Call for Papers", date: "January 2027", status: "Upcoming" },
    { activity: "Paper Submission Opens", date: "January 2027", status: "Upcoming" },
    { activity: "Paper Submission Deadline", date: "May 2027", status: "Upcoming" },
    { activity: "Notification of Acceptance", date: "June 2027", status: "Upcoming" },
    { activity: "Camera-Ready Submission", date: "July 2027", status: "Upcoming" },
    { activity: "Author Registration", date: "July 2027", status: "Upcoming" },
    { activity: "Conference Sessions", date: "August / September 2027", status: "Tentative" }
  ],

  // Publication Route & Policies
  publication: {
    proposedRoute: "Selected high-quality, peer-reviewed and presented papers will be considered for publication with Springer Nature as conference proceedings or an appropriate edited volume, subject to Springer Nature's editorial evaluation and publication policies.",
    disclaimer: "Publication arrangements are subject to Springer Nature's proposal evaluation and applicable editorial policies.",
    guidelines: [
      "All accepted papers must be presented by at least one registered author during the scheduled conference session.",
      "Only presented papers meeting standard peer-review benchmarks and Springer Nature editorial standards will be forwarded for proceedings inclusion.",
      "Authors will be required to submit signed copyright consent / publishing agreement forms upon acceptance.",
      "Plagiarism screening is mandatory; papers exceeding permitted similarity thresholds will be rejected without appeal."
    ]
  },

  // Committee (Strictly authentic: Dr. Vikul J. Pawar, other roles TBA)
  committee: {
    leadership: [
      {
        role: "General Chair",
        name: "Dr. Vikul J. Pawar",
        designation: "Head, Department of Computer Science and Engineering",
        department: "Department of Computer Science and Engineering",
        institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
        country: "India",
        image: null, // Will trigger "Photo Coming Soon" placeholder
        bio: "Dr. Vikul J. Pawar serves as the Head of the Department of Computer Science and Engineering at Government College of Engineering, Chhatrapati Sambhajinagar, Maharashtra, India. His leadership and research focus span advanced computer systems, intelligent computing, and academic research promotion.",
        profileLink: ""
      },
      {
        role: "Technical Program Chair",
        name: "To be Announced",
        designation: "Distinguished Academician / Researcher",
        department: "Department of Computer Science and Engineering",
        institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
        country: "India",
        image: null,
        bio: "",
        profileLink: ""
      },
      {
        role: "Publication Chair",
        name: "To be Announced",
        designation: "To be Announced",
        department: "Department of Computer Science and Engineering",
        institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
        country: "India",
        image: null,
        bio: "",
        profileLink: ""
      },
      {
        role: "Conference Secretary",
        name: "To be Announced",
        designation: "To be Announced",
        department: "Department of Computer Science and Engineering",
        institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
        country: "India",
        image: null,
        bio: "",
        profileLink: ""
      },
      {
        role: "Finance Chair",
        name: "To be Announced",
        designation: "To be Announced",
        department: "Department of Computer Science and Engineering",
        institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
        country: "India",
        image: null,
        bio: "",
        profileLink: ""
      },
      {
        role: "Publicity Chair",
        name: "To be Announced",
        designation: "To be Announced",
        department: "Department of Computer Science and Engineering",
        institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
        country: "India",
        image: null,
        bio: "",
        profileLink: ""
      },
      {
        role: "Registration Chair",
        name: "To be Announced",
        designation: "To be Announced",
        department: "Department of Computer Science and Engineering",
        institution: "Government College of Engineering, Chhatrapati Sambhajinagar",
        country: "India",
        image: null,
        bio: "",
        profileLink: ""
      }
    ],
    advisoryNotice: "International Advisory Committee — To Be Announced",
    advisoryMembers: [] // Configurable: when verified, add members here
  },

  // Keynote Speakers (No fictional identities)
  keynoteSpeakers: {
    statusNotice: "Distinguished keynote speakers will be announced soon.",
    speakers: [] // Configurable: when verified, add objects: { name, designation, institution, country, image, bio, topic, profileLink }
  },

  // Registration Categories & Details
  registration: {
    notice: "Registration details will be announced soon.",
    status: "Upcoming",
    categories: [
      {
        title: "Author (Academic / Faculty)",
        description: "For academicians, faculty members, and research scientists presenting an accepted paper.",
        includes: ["Full conference admission", "Paper presentation session", "Conference digital proceedings", "Certificate of presentation"]
      },
      {
        title: "Student Author",
        description: "For registered undergraduate, graduate, and PhD scholars presenting an accepted paper.",
        includes: ["Full conference admission", "Paper presentation session", "Conference digital proceedings", "Student certificate of presentation"]
      },
      {
        title: "Industry Professional",
        description: "For practitioners, engineers, and researchers affiliated with corporate or industrial organizations.",
        includes: ["Full conference admission", "Industry networking sessions", "Conference proceedings", "Certificate of participation/presentation"]
      },
      {
        title: "Non-Author Participant",
        description: "For delegates and attendees seeking to attend keynote lectures, sessions, and technical tracks.",
        includes: ["Access to all keynote talks", "Access to technical tracks", "Participant certificate"]
      },
      {
        title: "International Participant",
        description: "For international authors, researchers, and attendees participating either online or on campus.",
        includes: ["Full hybrid/online or on-site access", "Presentation slot", "Digital proceedings", "International certificate"]
      }
    ]
  },

  // Institutional Section: Government College of Engineering, Chhatrapati Sambhajinagar
  institutional: {
    name: "Government College of Engineering, Chhatrapati Sambhajinagar",
    shortName: "GECA",
    departmentName: "Department of Computer Science and Engineering",
    location: "Railway Station Road, Osmanpura, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431005, India",
    overview: "Government College of Engineering, Chhatrapati Sambhajinagar is one of the premier autonomous engineering institutions established by the Government of Maharashtra. The college boasts a legacy of academic excellence, cutting-edge technical education, and pioneering research contributions across engineering disciplines.",
    departmentOverview: "The Department of Computer Science and Engineering is committed to delivering state-of-the-art education and research in emerging paradigms of computing. With dedicated faculty, modern computing laboratories, and high-impact industry liaisons, the department actively conducts research in Artificial Intelligence, Cyber Defense, Cloud Systems, and Data Science.",
    highlights: [
      { title: "Autonomous Status", desc: "Autonomous engineering institute affiliated to Dr. Babasaheb Ambedkar Marathwada University." },
      { title: "Academic Programs", desc: "Undergraduate (B.Tech), Postgraduate (M.Tech), and Doctoral (Ph.D.) research programs in CSE." },
      { title: "Research Facilities", desc: "Advanced laboratories dedicated to Artificial Intelligence, Networks, Database Systems, and Computing." },
      { title: "Institutional Legacy", desc: "Decades of fostering top-tier engineering talent, competitive innovators, and academic researchers." }
    ],
    officialNotice: "Official institutional information will be updated as further conference documentation is released."
  },

  // Quick Navigation Links
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tracks", path: "/tracks" },
    { name: "Call for Papers", path: "/call-for-papers" },
    { name: "Important Dates", path: "/important-dates" },
    { name: "Committee", path: "/committee" },
    { name: "Speakers", path: "/speakers" },
    { name: "Publication", path: "/publication" },
    { name: "Registration", path: "/registration" },
    { name: "Contact", path: "/contact" }
  ]
};

// Convenience link constants for direct consumption
export const conferenceLinks = conferenceData.links;
