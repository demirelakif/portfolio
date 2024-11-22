export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiances", link: "#experiances" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am versatile, entrepreneurial, and always striving for self-improvement.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-end bg-black-100 bg-opacity-30 rounded-xl pl-4 py-3",
    exClassName:"bg-black-100 bg-opacity-10 rounded-xl pl-4 py-3",
    img: "/ako-1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I constantly seek to stay updated.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech aficionado fueled by a passion for crafting innovative solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a Full Stack Video Conferancing App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to Learn More About Me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "GitGel: Blockchain Based Taxi Application",
    des: "This taxi app enables payments via in-app Ethereum wallets, is a Teknofest 2024 finalist, and received a 1M TL KOSGEB grant.",
    img: "/gitgel.png",
    iconLists: ["/re.svg","/solidity.svg","/expo.svg","/mongo.svg","/js.svg", "/figma.svg"],
    link: "https://www.youtube.com/watch?v=CKHgJQWFOak",
  },
  {
    id: 2,
    title: " Mobile Pitch Booking Application",
    des: "The app allows football field owners and users to manage pitches, make reservations, and handle user management efficiently.",
    img: "/mvScr.png",
    iconLists: ["/re.svg","/expo.svg","/mongo.svg","/js.svg", "/figma.svg"],
    link: "https://github.com/demirelakif/hali-saha-mobile",
  },
  {
    id: 3,
    title: "CarBidding Website",
    des: "A web application for vehicle offer sales using .NET, Blazor, and Entity Framework Core.",
    img: "/carBidding.png",
    iconLists: ["/dotnet.svg", "/blazor.svg", "/entity-framework.png"],
    link: "https://github.com/demirelakif/BlazorEFCore_CarBidding",
  },
  {
    id: 4,
    title: "ChatBot Website",
    des: "This project is a chatbot application powered by Node.js, Express, Express-Session and MongoDB.",
    img: "/chatbot.png",
    iconLists: ["/re.svg","/mongo.svg","/js.svg"],
    link: "https://github.com/demirelakif/ChatBotApplication",
  },
  {
    id: 5,
    title: "Video Conferencing App",
    des: "This project is a Zoom clone built with Next.js and Tailwind CSS, allowing users to conduct video and audio calls. It integrates Stream for media streaming and utilizes Clerk for secure authentication.",
    img: "/videoConferance.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://video-conferancing-app.vercel.app/",
  },
  {
    id: 5,
    title: "Game Scout",
    des: "Game Scout is a web app for gamers to discover popular games and access detailed information using the RAWG API and web scraping techniques. Explore, search, and sort games with up-to-date data.",
    img: "/game-scout.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/python.png", "/psql.svg"],
    link: "https://akifs-game-scout.vercel.app/",
  },
  {
    id: 6,
    title: "UAV Manufacturing System",
    des: "UAV Manufacturing System is a Django-based web application designed for managing unmanned aerial vehicles (UAVs) and associated parts. This project allows users to produce and manage both UAVs and parts, track inventory, and assign roles to staff members.",
    img: "/uav.png",
    iconLists: ["/django.svg", "/tail.svg", "/docker.svg", "/swagger.png", "/python.png", "/psql.svg"],
    link: "https://github.com/demirelakif/uav-manufacturing-django",
  },
];
export const techStackData = [
  {
      title: ".Net",
      image:"/dotnet.svg"
  },
  {
      title: "Blazor",
      image:"/blazor.svg"
  },
  {
      title: "Entity Framework",
      image:"/entity-framework.png"
  },
  {
      title: "Express.js",
      image:"/express.png"
  },
  {
      title: "Python",
      image:"/python.png"
  },
  {
    title: "Java",
    image:"/java.png"
},
  {
      title: "Javascript",
      image:"/js.svg"
  },
  {
      title: "TypeScript",
      image:"/ts.svg"
  },
  {
      title: "Node.js",
      image:"/nodejs.png"
  },
  {
      title: "React/React-Native",
      image:"/react.png"
  },
  {
      title: "MongoDB",
      image:"/mongo.svg"
  },
  {
      title: "Next.js",
      image:"/next.svg"
  },
  {
      title: "Solidity",
      image:"/solidity.svg"
  },
  {
      title: "Tailwind",
      image:"/tail.svg"
  },
  {
      title: "Figma",
      image:"/figma.svg"
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Created API software using Python, managing data flow and optimizing cross-system interactions.Developed AI models from scratch, enhancing datarecognition capabilities. Curated and prepared essential datasets foroptimal model performance. Integrated AI models into other systems via APIs for user-friendly access.",
    date:"09/2021-10/2022",
    className: "md:col-span-2",
    thumbnail: "/nacsoft.jpeg",
  },
  {
    id: 2,
    title: "Full Stack Engineer / Founder",
    date:"12/2023-10/2024",
    desc: "As one of the co-founders of Bloksoft, I developed the mobile taxi application GitGel using React Native and integrated blockchain technologies using Solidity and Node.js. We were accepted into the TUBITAK-2209 program and secured a grant of 1 million TL through the KOSGEB Mobility-Oriented Advanced Entrepreneur Support Program",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/bloksoft.jpeg",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    desc: "Developed a web application for vehicle offer sales using .NET, Blazor, and Entity Framework Core.",
    date:"09/2024-10/2024",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/datakod.png",
  },
  {
    id: 4,
    title: "Freelance Experiances",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/demirelakif"
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/demirelakif"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/akif-demirel/"
  },
];
