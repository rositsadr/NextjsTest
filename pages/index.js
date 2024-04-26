import { Hero } from "../sections";
import { Main } from "../sections";

 
const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  image: {src: "/img/video.png", alt: "", width: 1000, height: 1680 },
  title: "Managed agency selection",
  description: "Stengthen your onboarding process",
  brief: {
    text: "Brief", 
    description: "Complete <b> brief writing or simple guideance </b> on what to include, we've got you coverd.",
    image: {src: "/img/briefIcon.png", alt: "", width: 100, height: 100},
  },
  search: {
    text: "Search",
    description: "In-depth agency search covering; <b> criteria matching <b> door knocking and due-dilligence vetting.",
    image:{src: "/img/searchIcon.png", alt: "", width: 100, height: 100 },
  },
  pitch: {
    text: "Pitch",
    description: "Comprehensive <b>pitch management<b>, including comms, diary management and pitch hosting.",
    image: {src: "/img/pitchIcon.png", alt: "", width: 100, height: 100 },
  }, 
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        {/* <Hero {...heroProps} /> */}
        <Main {...mainProps} />
      </div>
    </>
  );
}