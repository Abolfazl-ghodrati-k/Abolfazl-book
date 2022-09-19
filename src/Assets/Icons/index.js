// // Minimize icon windows
// import { FaRegWindowMinimize } from "react-icons/fa";
// //Maximize icon windows
// import { VscChromeMaximize } from "react-icons/vsc";
// //Cloas icon windows
// import { AiOutlineClose } from "react-icons/ai";
// // App icons
// // Cmd
// import { VscTerminalCmd } from "react-icons/vsc";
// // Todo
// import { FcTodoList } from "react-icons/fc";
// // Chevron forward
// import { IoChevronForwardOutline } from "react-icons/io";
// // Dot
// import { BsDot } from "react-icons/bs";
// //Shut down
// import { GrPowerShutdown } from "react-icons/gr";
// // Setting icon
// import { FiSettings } from "react-icons/fi";
// //Resume icon
// import Resume from "./resume.png";
// // Contact us
// import { IoIosContact } from "react-icons/io";
// //Folders
// import { BsFolder } from "react-icons/bs";
// // File browser
// import { MdOutlineOpenInBrowser } from "react-icons/md";
// //Gmail
// import { FaGoogle } from "react-icons/fa";
// //Telegram
// import { FaTelegram } from "react-icons/fa";
// //Instagram
// import { FaInstagram } from "react-icons/fa";
// //Linkedin
// import { BsLinkedin } from "react-icons/bs";
// //Twitter
// import { FaTwitter } from "react-icons/fa";
// //Phone
// import { AiTwotonePhone } from "react-icons/ai";
// //whatsapp
// import { FaWhatsapp } from "react-icons/fa";

import { React, useEffect, useState } from "react";

export const MacNav = ({ type }) => {
  const [BackGround, setBackGround] = useState("");
  useEffect(() => {
    if (type === "MINIMIZE") {
      setBackGround("#FFC700");
    } else if (type === "MAXIMIZE") {
      setBackGround("#A07913");
    } else if (type === "CLOSE") {
      setBackGround("#840000");
    }
  });

  const ClickHandler = (type) => {
    switch (type) {
      case "MINIMIZE":
        console.log("Minimize");
        break;
      case "MAXIMIZE":
        console.log("MAXIMIZE");
        break;
      case "CLOSE":
        console.log("close");
        break;
      default:
        break;
    }
  };
  return (
    <div style={{width:"15px", height:"15px", borderRadius:"50%",backgroundColor: BackGround}} onClick={()=>{
        ClickHandler(type)
    }}>

    </div>
  );
};
