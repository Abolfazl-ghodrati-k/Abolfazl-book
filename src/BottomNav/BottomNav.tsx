import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconContainer from "../Components/Icon";
import { BsFolder } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { GrPowerShutdown } from "react-icons/gr";
import { BsCalculator } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { VscTerminalCmd } from "react-icons/vsc";
import { DiCode } from "react-icons/di";
import {
  OPEN_FILE_MANAGER,
  OPEN_CONTACTME,
  OPEN_SETTING,
  OPEN_SHUT_DOWN,
  RESIZE_CMD,
  RESIZE_CALCULATOR,
  RESIZE_TODO,
  RESIZE_CODE,
} from "../redux/actionTypes";
import useOrder from "../Hooks/useOrder";
// @ts-expect-error TS(2307): Cannot find module '../Assets/Icons/resume.png' or... Remove this comment to see the full error message
import ResumeImage from "../Assets/Icons/resume.png"; // You should import the Resume image

function BottomNav({ IncreaseLowerOrders, ChangingCurrentOrder }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  const { Order, Orders } = useOrder();

  const navState = {
    // @ts-expect-error TS(2339): Property 'browser' does not exist on type 'unknown... Remove this comment to see the full error message
    Browser: useSelector((state) => state.browser),
    // @ts-expect-error TS(2339): Property 'fileManager' does not exist on type 'unk... Remove this comment to see the full error message
    FILE_MANAGER: useSelector((state) => state.fileManager),
    // @ts-expect-error TS(2339): Property 'contactme' does not exist on type 'unkno... Remove this comment to see the full error message
    Contact: useSelector((state) => state.contactme),
    // @ts-expect-error TS(2339): Property 'portfolio' does not exist on type 'unkno... Remove this comment to see the full error message
    Portfolio: useSelector((state) => state.portfolio),
    // @ts-expect-error TS(2339): Property 'setting' does not exist on type 'unknown... Remove this comment to see the full error message
    SETTING: useSelector((state) => state.setting),
    // @ts-expect-error TS(2339): Property 'shutdown' does not exist on type 'unknow... Remove this comment to see the full error message
    ShutDown: useSelector((state) => state.shutdown),
    // @ts-expect-error TS(2339): Property 'cmd' does not exist on type 'unknown'.
    CMD: useSelector((state) => state.cmd),
    // @ts-expect-error TS(2339): Property 'todo' does not exist on type 'unknown'.
    TODO: useSelector((state) => state.todo),
    // @ts-expect-error TS(2339): Property 'calculator' does not exist on type 'unkn... Remove this comment to see the full error message
    CALCULATOR: useSelector((state) => state.calculator),
    // @ts-expect-error TS(2339): Property 'code' does not exist on type 'unknown'.
    CODE: useSelector((state) => state.code),
  };

  const setOrder = (type) => {
    Orders?.forEach((app) => {
      if (app.name === type && Order === app.order) {
        return;
      } else if (app.name === type) {
        IncreaseLowerOrders(app);
      }
    });
  };

  const handleAppClick = (type, action) => {
    if (navState[type].isOpen) {
      handleAppResize(type);
      setOrder(type);
    } else {
      dispatch({ type: action });
      dispatch({ type: `ORDER_${type}`, payload: Order });
      ChangingCurrentOrder();
    }
  };

  const handleAppResize = (type) => {
    if (navState[type].isMinimized) {
      const payload = {
        minimized: false,
        maximized: navState[type].isMaximized,
      };
      dispatch({ type: `RESIZE_${type}`, payload });
    }
  };

  const navigateToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <div className={`w-full absolute bottom-2 z-0`}>
      <div className={`bg-CMD ml-auto lg:mx-auto max-w-[600px]  rounded-lg`}>
        <div className="flex justify-center content-center [&>*]:py-1 [&>*]:px-[2px] ">
          <div className="relative group">
            <p className={`hidden group-hover:block absolute -top-9 -right-4`}>
              FileManager
            </p>
            {/* @ts-expect-error TS(2739): Type '{ icon: IconType; state: any; size: string; ... Remove this comment to see the full error message */}
            <IconContainer
              icon={BsFolder}
              state={navState.FILE_MANAGER.isOpen}
              size={"50px"}
              onClick={() => handleAppClick("FILE_MANAGER", OPEN_FILE_MANAGER)}
            />
          </div>
          <div className="relative group">
            <p className={`hidden group-hover:block absolute -top-9 -right-4`}>
              ContactME
            </p>
            {/* @ts-expect-error TS(2739): Type '{ icon: IconType; state: any; size: string; ... Remove this comment to see the full error message */}
            <IconContainer
              icon={IoIosContact}
              state={navState.Contact.isOpen}
              size={"50px"}
              onClick={() => handleAppClick("Contact", OPEN_CONTACTME)}
            />
          </div>
          <div className="relative group">
            <p className={`hidden group-hover:block absolute -top-9 -left-1`}>
              Portfolio
            </p>
            {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; img: boolean; icon: a... Remove this comment to see the full error message */}
            <IconContainer
              onClick={navigateToPortfolio}
              img={true}
              icon={ResumeImage}
              state={navState.Portfolio.isOpen}
              size={"50px"}
            />
          </div>
          <div className=" relative group">
            <p className={`hidden group-hover:block absolute -top-9 -left-1`}>
              Settings
            </p>
            {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; state... Remove this comment to see the full error message */}
            <IconContainer
              onClick={() => handleAppClick("SETTING", OPEN_SETTING)}
              icon={FiSettings}
              state={navState.SETTING.isOpen}
              size={"50px"}
            />
          </div>
          <div className=" relative group">
            <p className={`hidden group-hover:block absolute -top-9 -left-1`}>
              Shutdown
            </p>
            {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; state... Remove this comment to see the full error message */}
            <IconContainer
              onClick={() => handleAppClick("ShutDown", OPEN_SHUT_DOWN)}
              icon={GrPowerShutdown}
              state={navState.ShutDown.isOpen}
              size={"50px"}
            />
          </div>

          {/* Dynamic bottom nav items */}
          {navState.CODE.isOpen && (
            <div>
              {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; state... Remove this comment to see the full error message */}
              <IconContainer
                onClick={() => handleAppClick("CODE", RESIZE_CODE)}
                icon={DiCode}
                state={navState.CODE.isOpen}
                size={"50px"}
              />
            </div>
          )}

          {navState.CMD.isOpen && (
            <div>
              {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; state... Remove this comment to see the full error message */}
              <IconContainer
                onClick={() => handleAppClick("CMD", RESIZE_CMD)}
                icon={VscTerminalCmd}
                state={navState.CMD.isOpen}
                size={"50px"}
              />
            </div>
          )}
          {navState.TODO.isOpen && (
            <div>
              {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; state... Remove this comment to see the full error message */}
              <IconContainer
                onClick={() => handleAppClick("TODO", RESIZE_TODO)}
                icon={GoTasklist}
                state={navState.TODO.isOpen}
                size={"50px"}
              />
            </div>
          )}
          {navState.CALCULATOR.isOpen && (
            <div>
              {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; state... Remove this comment to see the full error message */}
              <IconContainer
                onClick={() => handleAppClick("CALCULATOR", RESIZE_CALCULATOR)}
                icon={BsCalculator}
                state={navState.CALCULATOR.isOpen}
                size={"50px"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

BottomNav.propTypes = {
  IncreaseLowerOrders: PropTypes.func.isRequired,
  ChangingCurrentOrder: PropTypes.func.isRequired,
};

export default BottomNav;
