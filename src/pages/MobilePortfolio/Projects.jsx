import React from "react";
import Projectcard from "./Projectcard";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-start">
      <Projectcard title={'cyrus-coin'} skills={['react','pureCss','fullyResponsive']} bg={'white'}/>
      <Projectcard title={'Yola'} skills={['react','pureCss','fullyResponsive','Tailwind']} bg={'#111'}/>
      <Projectcard title={'Abolfazl-shop'} skills={['react','pureCss','fullyResponsive','sanity']} bg={'red'}/>
    </div>
  );
}

export default Projects;
