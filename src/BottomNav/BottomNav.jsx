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
import {
  OPEN_FILE_MANAGER,
  OPEN_CONTACTME,
  OPEN_SETTING,
  OPEN_SHUT_DOWN,
  RESIZE_CMD,
  RESIZE_CALCULATOR,
  RESIZE_TODO,
} from "../redux/actionTypes";
import useOrder from "../Hooks/useOrder";
import ResumeImage from "../Assets/Icons/resume.png"; // You should import the Resume image

function BottomNav({ IncreaseLowerOrders, ChangingCurrentOrder }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Order, Orders } = useOrder();

  const navState = {
    Browser: useSelector((state) => state.browser),
    FILE_MANAGER: useSelector((state) => state.fileManager),
    Contact: useSelector((state) => state.contactme),
    Portfolio: useSelector((state) => state.portfolio),
    SETTING: useSelector((state) => state.setting),
    ShutDown: useSelector((state) => state.shutdown),
    CMD: useSelector((state) => state.cmd),
    TODO: useSelector((state) => state.todo),
    CALCULATOR: useSelector((state) => state.calculator),
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
              {navState.FILE_MANAGER.isOpen ? "FileManager" : null}
            </p>
            <IconContainer
              icon={BsFolder}
              state={navState.FILE_MANAGER.isOpen}
              size={"50px"}
              onClick={() => handleAppClick("FILE_MANAGER", OPEN_FILE_MANAGER)}
            />
          </div>
          <div className="relative group">
            <p className={`hidden group-hover:block absolute -top-9 -right-4`}>
              {navState.Contact.isOpen ? "ContactME" : null}
            </p>
            <IconContainer
              icon={IoIosContact}
              state={navState.Contact.isOpen}
              size={"50px"}
              onClick={() => handleAppClick("Contact", OPEN_CONTACTME)}
            />
          </div>
          <div className="flex content-center relative group">
            <p className={`hidden group-hover:block absolute -top-9 -left-1`}>
              Portfolio
            </p>
            <IconContainer
              onClick={navigateToPortfolio}
              img={true}
              icon={ResumeImage}
              state={navState.Portfolio.isOpen}
              size={"50px"}
            />
          </div>
          <div>
            <IconContainer
              onClick={() => handleAppClick("SETTING", OPEN_SETTING)}
              icon={FiSettings}
              state={navState.SETTING.isOpen}
              size={"50px"}
            />
          </div>
          <div>
            <IconContainer
              onClick={() => handleAppClick("ShutDown", OPEN_SHUT_DOWN)}
              icon={GrPowerShutdown}
              state={navState.ShutDown.isOpen}
              size={"50px"}
            />
          </div>
          {navState.CMD.isOpen && (
            <div>
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
