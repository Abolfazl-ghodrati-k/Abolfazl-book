import { React, useEffect, useState } from "react";
import IconContainer from "../Components/Icon";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { BsFolder } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import Resume from "../Assets/Icons/resume.png";
import { FiSettings } from "react-icons/fi";
import { GrPowerShutdown } from "react-icons/gr";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  OPEN_BROWSER,
  OPEN_FILE_MANAGER,
  OPEN_CONTACTME,
  OPEN_PORTFOLIO,
  OPEN_SETTING,
  OPEN_SHUT_DOWN,
  CLOSE_CONTACTME,
  CLOSE_BROWSER,
  CLOSE_FILE_MANAGER,
  CLOSE_PORTFOLIO,
  CLOSE_SETTING,
  CLOSE_SHUT_DOWN,
} from "../redux/actionTypes";

function BottomNav() {
  const dispatch = useDispatch();

  const NavState = {
    onBrowser: useSelector((state) => state.browser.isOpen),
    onFileManager: useSelector((state) => state.fileManager.FileManager_isOpen),
    onContact: useSelector((state) => state.contactme.isOpen),
    onPortfolio: useSelector((state) => state.portfolio.isOpen),
    onSetting: useSelector((state) => state.setting.isOpen),
    onShutDown: useSelector((state) => state.shutdown.isOpen),
  };
  useEffect(() => {
    console.log(NavState);
  }, [NavState]);

  const BrowserClicked = () => {
    dispatch({ type: OPEN_BROWSER });
    if (NavState.onBrowser) {
      dispatch({ type: CLOSE_BROWSER });
    }
  };
  const FileManagerClicked = () => {
    dispatch({ type: OPEN_FILE_MANAGER });
    if (NavState.onFileManager) {
      dispatch({ type: CLOSE_FILE_MANAGER });
    }
  };
  const ContactmeClicked = () => {
    dispatch({ type: OPEN_CONTACTME });
    if(NavState.onContact){
      dispatch({type: CLOSE_CONTACTME})
    }
  };
  const ResumeClicked = () => {
    dispatch({ type: OPEN_PORTFOLIO });
    if(NavState.onPortfolio){
      dispatch({type: CLOSE_PORTFOLIO})
    }
  };
  const SettingClicked = () => {
    dispatch({ type: OPEN_SETTING });
    if(NavState.onSetting){
      dispatch({type: CLOSE_SETTING})
    }
  };
  const ShutDownClicked = () => {
    dispatch({ type: OPEN_SHUT_DOWN });
    if(NavState.onShutDown){
      dispatch({type: CLOSE_SHUT_DOWN})
    }
  };

  return (
    <div className=" w-full absolute bottom-2">
      <div className="bg-CMD mx-auto max-w-[40vw]  rounded-lg">
        <div className="flex justify-center content-center [&>*]:py-1 [&>*]:px-[2px] ">
          <div>
            <IconContainer
              onClick={BrowserClicked}
              icon={MdOutlineOpenInBrowser}
              state={NavState.onBrowser}
              size={"50px"}
            />
          </div>
          <div>
            <IconContainer
              icon={BsFolder}
              state={NavState.onFileManager}
              size={"50px"}
              onClick={FileManagerClicked}
            />
          </div>
          <div>
            <IconContainer
              icon={IoIosContact}
              state={NavState.onContact}
              size={"50px"}
              onClick={ContactmeClicked}
            />
          </div>
          <div className="flex content-center">
            <IconContainer
              onClick={ResumeClicked}
              img={true}
              icon={Resume}
              state={NavState.onPortfolio}
              size={"50px"}
            />
          </div>
          <div>
            <IconContainer
              onClick={SettingClicked}
              icon={FiSettings}
              state={NavState.onSetting}
              size={"50px"}
            />
          </div>
          <div>
            <IconContainer
              onClick={ShutDownClicked}
              icon={GrPowerShutdown}
              state={NavState.onShutDown}
              size={"50px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
