import { React, useEffect, useState } from "react";
import IconContainer from "../Components/Icon";
// importing icons
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { BsFolder } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import Resume from "../Assets/Icons/resume.png";
import { FiSettings } from "react-icons/fi";
import { GrPowerShutdown } from "react-icons/gr";
import { BsCalculator } from "react-icons/bs";
//
import { GoTasklist } from "react-icons/go";
import { VscTerminalCmd } from "react-icons/vsc";
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
  RESIZE_CMD,
  MINIMIZE_TODO,
  MINIMIZE_FILE_MANAGER,
  MINIMIZE_SETTING,
  RESIZE_FILE_MANAGER,
  APP_MAXIMIZED,
  OPEN_MODAL,
  RESIZE_CALCULATOR,
  RESIZE_TODO,
  RESIZE_SETTING,
} from "../redux/actionTypes";
import useOrder from "../Hooks/useOrder";
import { useNavigate } from "react-router";

function BottomNav({ IncreaseLowerOrders, ChangingCurrentOrder }) {
  const dispatch = useDispatch();

  const NavState = {
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
  const Modalcount = useSelector((state) => state.desktop.Modals);

  const navigate = useNavigate()

  const maximizedApp = useSelector((state) => state.desktop.Maximized);

  const { Order, Orders } = useOrder();

  const setOrder = (type) => {
    console.log(type);
    Orders.map((app) => {
      // 1. Checks if clicked component has latest order
      if (app.name == type && Order == app.order) {
        return;
        // 2. Checks which components have been clicked
      } else if (app.name == type) {
        console.log(
          "well clicked application is: ",
          app.name,
          " and its order is: ",
          app.order,
          "|| im Increasing lower orders"
        );
        // 3. Finds clicked component order and changes previous orders
        IncreaseLowerOrders(app);
      }
    });
  };

  const BrowserClicked = () => {
    dispatch({ type: OPEN_BROWSER });
    if (NavState.Browser.isOpen) {
      dispatch({ type: CLOSE_BROWSER });
    }
  };
  const FileManagerClicked = () => {
    // checks if component is opened or not if no: open it, set current order to component, decrease current order
    if (NavState.FILE_MANAGER.isOpen) {
      // dispatch({ type: CLOSE_FILE_MANAGER });
      if (NavState.FILE_MANAGER.isMinimized) {
        if (NavState.FILE_MANAGER.isMaximized) {
          dispatch({
            type: RESIZE_FILE_MANAGER,
            payload: { minimized: false, maximized: true },
          });
        } else {
          dispatch({
            type: RESIZE_FILE_MANAGER,
            payload: { minimized: false, maximized: false },
          });
        }
      }
      setOrder("FILE_MANAGER");
    } else {
      dispatch({ type: OPEN_FILE_MANAGER });
      dispatch({ type: "ORDER_FILE_MANAGER", payload: Order });
      ChangingCurrentOrder();
    }
  };
  const ContactmeClicked = () => {
    dispatch({ type: OPEN_CONTACTME });
    if (NavState.Contact.isOpen) {
      return;
    }
    if (Modalcount) {
      dispatch({ type: OPEN_MODAL, payload: Modalcount + 1 });
    } else {
      dispatch({ type: OPEN_MODAL, payload: 1 });
    }
  };
  const ResumeClicked = () => {
    navigate("/portfolio")
  };
  const SETTINGClicked = () => {
    if (NavState.SETTING.isOpen) {
      if (NavState.SETTING.isMinimized) {
        if (NavState.SETTING.isMaximized) {
          dispatch({
            type: RESIZE_SETTING,
            payload: { minimized: false, maximized: true },
          });
        } else {
          dispatch({
            type: RESIZE_SETTING,
            payload: { minimized: false, maximized: false },
          });
        }
      }
      setOrder("SETTING");
    } else {
      dispatch({ type: OPEN_SETTING });
      dispatch({ type: "ORDER_SETTING", payload: Order });
      ChangingCurrentOrder();
    }
  };
  const ShutDownClicked = () => {
    dispatch({ type: OPEN_SHUT_DOWN });
    if (NavState.ShutDown.isOpen) {
      return;
    }
    if (Modalcount) {
      dispatch({ type: OPEN_MODAL, payload: Modalcount + 1 });
    } else {
      dispatch({ type: OPEN_MODAL, payload: 1 });
    }
  };
  const CMDClicked = () => {
    if (NavState.CMD.isMinimized) {
      if (NavState.CMD.isMaximized) {
        dispatch({
          type: RESIZE_CMD,
          payload: { maximized: true, minimized: false },
        });
      } else if (!NavState.CMD.isMaximized) {
        dispatch({
          type: RESIZE_CMD,
          payload: { maximized: false, minimmized: false },
        });
      }
      setOrder("CMD");
    } else {
      setOrder("CMD");
    }
  };
  const CALCULATORClicked = () => {
    if (NavState.CALCULATOR.isMinimized) {
      if (NavState.CALCULATOR.isMaximized) {
        dispatch({
          type: RESIZE_CALCULATOR,
          payload: { maximized: true, minimized: false },
        });
      } else if (!NavState.CALCULATOR.isMaximized) {
        dispatch({
          type: RESIZE_CALCULATOR,
          payload: { maximized: false, minimmized: false },
        });
      }
      setOrder("CALCULATOR");
    } else {
      setOrder("CALCULATOR");
    }
  };
  const TODOClicked = () => {
    if (NavState.TODO.isMinimized) {
      if (NavState.TODO.isMaximized) {
        dispatch({
          type: RESIZE_TODO,
          payload: { maximized: true, minimized: false },
        });
      } else if (!NavState.TODO.isMaximized) {
        dispatch({
          type: RESIZE_TODO,
          payload: { maximized: false, minimmized: false },
        });
      }
      setOrder("TODO");
    } else {
      setOrder("TODO");
    }
  };

  return (
    <>
      <div className={`w-full absolute bottom-2 z-0`}>
        <div className={`bg-CMD ml-auto lg:mx-auto max-w-[600px]  rounded-lg`}>
          <div className="flex justify-center content-center [&>*]:py-1 [&>*]:px-[2px] ">
            {/* Browser */}
            <div>
              <IconContainer
                onClick={BrowserClicked}
                icon={MdOutlineOpenInBrowser}
                state={NavState.Browser.isOpen}
                size={"50px"}
              />
            </div>
            {/* File manager */}
            <div>
              <IconContainer
                icon={BsFolder}
                state={NavState.FILE_MANAGER.isOpen}
                size={"50px"}
                onClick={FileManagerClicked}
              />
            </div>
            {/* Contact me */}
            <div>
              <IconContainer
                icon={IoIosContact}
                state={NavState.Contact.isOpen}
                size={"50px"}
                onClick={ContactmeClicked}
              />
            </div>
            {/* Portfolio */}
            <div className="flex content-center">
              <IconContainer
                onClick={ResumeClicked}
                img={true}
                icon={Resume}
                state={NavState.Portfolio.isOpen}
                size={"50px"}
              />
            </div>
            {/* SETTING */}
            <div>
              <IconContainer
                onClick={SETTINGClicked}
                icon={FiSettings}
                state={NavState.SETTING.isOpen}
                size={"50px"}
              />
            </div>
            {/* ShutDown */}
            <div>
              <IconContainer
                onClick={ShutDownClicked}
                icon={GrPowerShutdown}
                state={NavState.ShutDown.isOpen}
                size={"50px"}
              />
            </div>
            {/* CMD */}
            {NavState.CMD.isOpen && (
              <div>
                <IconContainer
                  onClick={CMDClicked}
                  icon={VscTerminalCmd}
                  state={NavState.CMD.isOpen}
                  size={"50px"}
                />
              </div>
            )}
            {/* TODO */}
            {NavState.TODO.isOpen && (
              <div>
                <IconContainer
                  onClick={TODOClicked}
                  icon={GoTasklist}
                  state={NavState.TODO.isOpen}
                  size={"50px"}
                />
              </div>
            )}
            {NavState.CALCULATOR.isOpen && (
              <div>
                <IconContainer
                  onClick={CALCULATORClicked}
                  icon={BsCalculator}
                  state={NavState.CALCULATOR.isOpen}
                  size={"50px"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
