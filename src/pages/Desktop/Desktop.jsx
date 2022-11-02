import React from "react";
import { useSelector, useDispatch } from "react-redux";

//pages
import FileManager from "../FileManager";
import Contactme from "../Contact";
import Portfolio from "../Portfolio";
import Setting from "../Setting";
import ShutDown from "../ShutDown";
import CMD from "../Apps/CMD/CMD";
import Todo from "../Apps/Todo";

//Components
import BottomNav from "../../BottomNav";
import IconContainer from "../../Components/Icon/IconContainer";

//css
import "./style.css";

//icons
import { FcTodoList } from "react-icons/fc";
import { VscTerminalCmd } from "react-icons/vsc";
import { OPEN_CMD, OPEN_TODO } from "../../redux/actionTypes";

//HOOKS
import useOrder from "../../Hooks/useOrder";
import useIndex from "../../Hooks/useIndex";

// import Draggable from "react-draggable";
// import { Resizable } from "re-resizable";
import Layout from "../../Components/Layout/Layout";
import { useEffect } from "react";
import ModalLayout from "../../Components/Layout/ModalLayout";

import Draggable from "react-draggable";
import AudioPlayer from "../../Components/AudioPlayer";
import { useRef } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

// hooks
// import useOpenedApps from "../../Hooks/useOpenedApps";
// import useOrder from "../../Hooks/useOrder";

function Desktop() {
  // const [Order, setorder] = useState(Number);

  const dispatch = useDispatch();

  const cmd = useSelector((state) => state.cmd);
  const todo = useSelector((state) => state.todo);
  const fileManager = useSelector((state) => state.fileManager);
  const contactme = useSelector((state) => state.contactme);
  const portfolio = useSelector((state) => state.portfolio);
  const setting = useSelector((state) => state.setting);
  const shutdown = useSelector((state) => state.shutdown);
  const maximizedApp = useSelector((state) => state.desktop.Maximized);

  const { Order, Orders } = useOrder();

  const Indexs = useIndex();

  const desktop = useRef();

  useEffect(() => {
    desktop.current.style.setProperty("--fileIndex", Indexs[1].zIndex);
    desktop.current.style.setProperty("--cmdIndex", Indexs[0].zIndex);
    desktop.current.style.setProperty("--todoIndex", Indexs[1].zIndex);
    desktop.current.style.setProperty("--settingIndex", Indexs[2].zIndex);
  });

  const ChangingCurrentOrder = () => {
    if (Order == 0) {
      dispatch({ type: "CHANGE_ORDER", payload: 0 });
    } else {
      dispatch({ type: "CHANGE_ORDER", payload: Order - 1 });
    }
  };

  // click handlers
  const CmdClicked = () => {
    dispatch({ type: OPEN_CMD });
    dispatch({ type: "ORDER_CMD", payload: Order });
    if (cmd.isOpen) {
      return;
    } else {
      ChangingCurrentOrder();
    }
  };

  const TodoClicked = () => {
    dispatch({ type: OPEN_TODO });
    dispatch({ type: "ORDER_TODO", payload: Order });
    if (todo.isOpen) {
      return;
    } else {
      ChangingCurrentOrder();
    }
  };

  // const Types = ["CMD", "TODO", "SETTING", "FILE_MANAGER"];

  const IncreaseLowerOrders = (ClickedComponent) => {
    //checks if all apps are on screen or not if yes then when an app is clicked thats order will be 1
    // and were sure that all aps are on screen so ican simply increase all orders
    if (Order == 0) {
      console.log("all aps are opened?")
      dispatch({ type: `ORDER_${ClickedComponent.name}`, payload: 1 });
      Orders.map((app) => {
        if (app.order < ClickedComponent.order && app.order) {
          dispatch({ type: `ORDER_${app.name}`, payload: app.order + 1 });
          return;
        }
      });
      // and if all aps arnt clicked ill set clicked component to top and increase the orders by checking a condition
      //that is there any closed app or not .
    } else {
      console.log("you are increasing lower orders");
      dispatch({ type: `ORDER_${ClickedComponent.name}`, payload: Order + 1 });
      Orders.map((app) => {
        if (app.order < ClickedComponent.order && app.order) {
          dispatch({ type: `ORDER_${app.name}`, payload: app.order + 1 });
          return;
        }
      });
    }
  };

  const setOrder = (type) => {
    Orders.map((app) => {
      // 1. Checks if clicked component has latest order
      if (app.name == type && Order == app.order) {
        return;
        // 2. Checks which components have been clicked
      } else if (app.name == type) {
        // 3. Finds clicked component order and changes previous orders
        IncreaseLowerOrders(app);
      }
    });
  };

  return (
    <Router>
      <div
        className={`h-full w-full -z-10 relative desktop ${setting.color ? '':'bg-fill'}`}
        style={{ backgroundColor: setting.color }}
        ref={desktop}
      >
        {fileManager.Music_isOpen && (
          <div className="absolute z-[100000]">
            <Draggable>
              <div className="p-1">
                <AudioPlayer />
              </div>
            </Draggable>
          </div>
        )}
        {/* //Apps icons */}

        {maximizedApp === 0 && (
          <div className="absolute right-1 top-1 flex flex-col justify-center content-center">
            <div>
              <IconContainer
                onClick={CmdClicked}
                icon={VscTerminalCmd}
                size={"50px"}
                isDesktop
              />
            </div>
            {/* <div>
          <IconContainer
            onClick={TodoClicked}
            icon={FcTodoList}
            size={"50px"}
            isDesktop
          />
        </div> */}
          </div>
        )}
        {cmd.isOpen && !cmd.isMinimized && (
          <CMD
            onClick={() => {
              // console.log("im setting order");
              setOrder("CMD");
            }}
          />
        )}
        {todo.isOpen && (
          <div onClick={setOrder("TODO")}>
            <Todo />
          </div>
        )}
        {shutdown.isOpen && (
          <ModalLayout>
            <ShutDown />
          </ModalLayout>
        )}
        {setting.isOpen && (
          <Setting
            onClick={() => setOrder("SETTING")}
            zIndex={Indexs[2].zIndex}
          />
        )}
        {portfolio.isOpen && (
          <Layout type={"PORTFOLIO"}>
            <Portfolio />
          </Layout>
        )}
        {contactme.isOpen && (
          <ModalLayout zIndex={null}>
            <Contactme />
          </ModalLayout>
        )}
        {fileManager.isOpen && !fileManager.isMinimized && (
          <FileManager
            onClick={() => {
              setOrder("FILE_MANAGER");
            }}
            zIndex={Indexs[1].zIndex}
          />
        )}

        <BottomNav
          IncreaseLowerOrders={IncreaseLowerOrders}
          ChangingCurrentOrder={ChangingCurrentOrder}
        />
      </div>
    </Router>
  );
}
export default Desktop;
