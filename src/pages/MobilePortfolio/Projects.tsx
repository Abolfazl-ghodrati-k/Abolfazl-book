import React from "react";
import Projectcard from "./Projectcard";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-start">
      {/* @ts-expect-error TS(2739): Type '{ title: string; skills: string[]; bg: strin... Remove this comment to see the full error message */}
      <Projectcard
        title={"cyrus-coin"}
        skills={["react", "pureCss", "fullyResponsive"]}
        bg={"white"}
      />
      {/* @ts-expect-error TS(2739): Type '{ title: string; skills: string[]; bg: strin... Remove this comment to see the full error message */}
      <Projectcard
        title={"Yola"}
        skills={["react", "pureCss", "fullyResponsive", "Tailwind"]}
        bg={"#111"}
      />
      {/* @ts-expect-error TS(2739): Type '{ title: string; skills: string[]; bg: strin... Remove this comment to see the full error message */}
      <Projectcard
        title={"Abolfazl-shop"}
        skills={["react", "pureCss", "fullyResponsive", "sanity"]}
        bg={"red"}
      />
    </div>
  );
}

export default Projects;
