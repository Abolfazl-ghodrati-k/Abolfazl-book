import React from "react";
import {
  SiFirebase,
  SiTypescript,
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiSass,
  SiTailwindcss,
  SiMaterialui,
  SiVuedotjs,
  SiNuxtdotjs,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="w-full skills">
      <div className="stuff [&>*]:m-1 max-w-[596px]">
        <span className="stuff-1">
          <Skill
            icon={SiFirebase}
            fill="#124559"
            link={"https://firebase.google.com/"}
            name="Firebase"
          />
        </span>
        <span className="stuff-1">
          <Skill
            icon={SiTypescript}
            fill="#124559"
            link={"https://www.typescriptlang.org/"}
            name="Typescript"
          />
        </span>
        <span className="stuff-1">
          <Skill
            icon={SiExpress}
            fill="#124559"
            link={"https://expressjs.com/"}
            name="Express"
          />
        </span>
        <span className="stuff-1">
          <Skill fill="#124559" link={"https://www.sanity.io/"} name="Sanity" />
        </span>
      </div>
      <div className="react-family [&>*]:m-1 max-w-[596px]">
        <span className="react-i">
          <Skill
            icon={SiReact}
            fill="#124559"
            link={"https://reactjs.org/"}
            name="React"
          />
        </span>
        <span className="react-i">
          <Skill
            icon={TbBrandNextjs}
            fill="#124559"
            link={"https://nextjs.org"}
            name="Next"
          />
        </span>
        <span className="react-i">
          <Skill
            icon={SiRedux}
            fill="#124559"
            link={"https://redux.js.org/"}
            name="Redux"
          />
        </span>
        <span className="react-i">
          <Skill
            icon={SiReduxsaga}
            fill="#124559"
            link={"https://redux-saga.js.org/"}
            name="Redux-saga"
          />
        </span>
      </div>
      <div className="styling [&>*]:m-1 max-w-[596px]">
        <span className="styling-i">
          <Skill
            icon={SiSass}
            fill="#124559"
            link={"https://sass-lang.com/"}
            name="Sass"
          />
        </span>
        <span className="styling-i">
          <Skill
            icon={SiTailwindcss}
            fill="#124559"
            link={"https://tailwindcss.com/"}
            name="Tailwind"
          />
        </span>
        <span className="styling-i">
          <Skill
            icon={SiMaterialui}
            fill="#124559"
            link={"https://mui.com/"}
            name="Materialui"
          />
        </span>
        <span className="styling-i">
          <Skill
            fill="#124559"
            link={"https://getbootstrap.com/"}
            name="Bootstrap"
          />
        </span>
      </div>
      <div className="vue-family [&>*]:m-1 max-w-[596px]">
        <span className="vue-i">
          <Skill
            icon={SiVuedotjs}
            fill="#124559"
            link={"https://vuejs.org/"}
            name="Vue"
          />
        </span>
        <span className="vue-i">
          <Skill
            icon={SiNuxtdotjs}
            fill="#124559"
            link={"https://nuxtjs.org/"}
            name="Nuxt"
          />
        </span>
        <span className="vue-i">
          <Skill fill="#124559" link={"https://vuex.vuejs.org/"} name="Vuex" />
        </span>
        <span className="vue-i">
          <Skill
            fill="#124559"
            link={"https://pinia.vuejs.org/"}
            name="Pinia"
          />
        </span>
      </div>
    </div>
  );
}

export default Skills;
