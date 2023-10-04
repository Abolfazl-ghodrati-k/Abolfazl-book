import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BounceLoader } from "react-spinners";

//pages
import FileManagerApp from "../FileManager";
import ContactmeApp from "../Contact";
import PortfolioApp from "../Portfolio/Portfolio";
import SettingApp from "../Setting";
import ShutDownApp from "../ShutDown";
import CMDApp from "../Apps/CMD/CMDApp";
import TodoApp from "../Apps/Todo";
import CalculatorApp from "../Apps/Calculator";
import Code from "../Apps/LiveCode";

//widgets
import Weather from "../Widgets/Weather";

//Components
import Shorthands from "../../Shorthands";
import BottomNav from "../../BottomNav";
import IconContainer from "../../Components/Icon/IconContainer";
import AudioPlayer from "../../Components/AudioPlayer";

//css
import "./style.css";

//icons
import { GoTasklist } from "react-icons/go";
import { VscTerminalCmd } from "react-icons/vsc";
import { BsCalculator } from "react-icons/bs";
import { DiCode } from "react-icons/di";

// action types
import {
  OPEN_CALCULATOR,
  OPEN_CMD,
  OPEN_CODE,
  OPEN_TODO,
} from "../../redux/actionTypes";

//HOOKS
import useOrder from "../../Hooks/useOrder";
import useIndex from "../../Hooks/useIndex";

import Layout from "../../Components/Layout/Layout";
import ModalLayout from "../../Components/Layout/ModalLayout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Desktop() {
  const dispatch = useDispatch();

  const cmd = useSelector((state) => state.cmd);
  const todo = useSelector((state) => state.todo);
  const fileManager = useSelector((state) => state.fileManager);
  const contactme = useSelector((state) => state.contactme);
  const portfolio = useSelector((state) => state.portfolio);
  const setting = useSelector((state) => state.setting);
  const shutdown = useSelector((state) => state.shutdown);
  const maximizedApp = useSelector((state) => state.desktop.Maximized);
  const loading = useSelector((store) => store.loading.loading);
  const weather = useSelector((store) => store.weather);
  const calculator = useSelector((store) => store.calculator);
  const code = useSelector((store) => store.code);

  const { Order, Orders } = useOrder();

  const Indexs = useIndex();

  const desktop = useRef();

  useEffect(() => {
    console.log(Indexs);
    desktop.current.style.setProperty("--fileIndex", Indexs[1].zIndex);
    desktop.current.style.setProperty("--codeIndex", Indexs[5].zIndex);
    desktop.current.style.setProperty("--cmdIndex", Indexs[0].zIndex);
    desktop.current.style.setProperty("--settingIndex", Indexs[2].zIndex);
    desktop.current.style.setProperty("--calcIndex", Indexs[3].zIndex);
    desktop.current.style.setProperty("--todoIndex", Indexs[4].zIndex);
  });

  const ChangingCurrentOrder = () => {
    if (Order === 0) {
      dispatch({ type: "CHANGE_ORDER", payload: 0 });
    } else {
      dispatch({ type: "CHANGE_ORDER", payload: Order - 1 });
    }
  };

  // click handlers
  const CmdClicked = () => {
    dispatch({ type: OPEN_CMD });
    dispatch({ type: "ORDER_CMD", payload: Order });
    if (cmd?.isOpen) {
      return;
    } else {
      ChangingCurrentOrder();
    }
  };

  const CalculatorClicked = () => {
    dispatch({ type: OPEN_CALCULATOR });
    dispatch({ type: "ORDER_CALCULATOR", payload: Order });
    if (calculator?.isOpen) {
      return;
    } else {
      ChangingCurrentOrder();
    }
  };

  // const AppClicked = (appName) => {
  //   dispatch({ type: `OPEN_${appName}` });
  //   dispatch({ type: `ORDER_${appName}`, payload: Order });
  // };

  const TodoClicked = () => {
    dispatch({ type: OPEN_TODO });
    dispatch({ type: "ORDER_TODO", payload: Order });
    if (todo?.isOpen) {
      return;
    } else {
      ChangingCurrentOrder();
    }
  };

  const codeClicked = () => {
    dispatch({ type: OPEN_CODE });
    dispatch({ type: "ORDER_CODE", payload: Order });
    if (code?.isOpen) {
      return;
    } else {
      ChangingCurrentOrder();
    }
  };

  // const Types = ["CMD", "TODO", "SETTING", "FILE_MANAGER"];

  const IncreaseLowerOrders = (ClickedComponent) => {
    //checks if all apps are on screen or not if yes then when an app is clicked thats order will be 1
    // and were sure that all aps are on screen so i can simply increase all orders
    if (Order === 0) {
      dispatch({ type: `ORDER_${ClickedComponent.name}`, payload: 1 });
      Orders.forEach((app) => {
        if (app.order < ClickedComponent.order && app.order) {
          dispatch({ type: `ORDER_${app.name}`, payload: app.order + 1 });
          return "what?";
        }
      });
      // and if all aps arnt clicked ill set clicked component to top and increase the orders by checking a condition
      //that is there any closed app or not .
    } else {
      dispatch({ type: `ORDER_${ClickedComponent.name}`, payload: Order + 1 });
      Orders.forEach((app) => {
        if (app.order < ClickedComponent.order && app.order) {
          dispatch({ type: `ORDER_${app.name}`, payload: app.order + 1 });
          return "what?";
        }
      });
    }
  };

  const setOrder = (type) => {
    Orders.forEach((app) => {
      // 1. Checks if clicked component has latest order
      if (app.name === type && Order === app.order) {
        return;
        // 2. Checks which components have been clicked
      } else if (app.name === type) {
        // 3. Finds clicked component order and changes previous orders
        console.log(app.name, type)
        IncreaseLowerOrders(app);
      }
    });
  };

  return (
    <div
      className={`bg-no-repeat bg-cover bg-center h-full w-full -z-10 relative desktop max-w-[100vw] max-h-[100vh] overflow-hiddem ${
        setting.color ? "" : "bg-fill"
      } min-w-[700px]`}
      style={{
        backgroundColor: setting?.color,
        backgroundImage: `url(${setting?.image})`,
      }}
      ref={desktop}
    >
      <ToastContainer position="bottom-right" />
      {loading && (
        <div className="absolute right-0 z-[10000] left-0 bottom-0 top-0 bg-[#4b6632] text-[white] w-full h-full flex justify-center items-center">
          <BounceLoader size={200} />
        </div>
      )}

      {/* Widgets */}
      {weather.show && (
        <div className="absolute z-[10000000]">
          <Weather />
        </div>
      )}
      {/* End of Widgets */}

      {fileManager.Music_isOpen && <AudioPlayer />}
      {/* //Apps icons */}
      {/* <CalculatorApp /> */}

      {maximizedApp === 0 && (
        <div className="absolute right-1 top-1 flex flex-col justify-center content-center gap-4 [&>*]:bg-CMD-100 [&>*]:p-1 [&>*]:rounded-md">
          <div className="flex flex-col items-center justify-center text-white">
            <IconContainer
              onClick={CmdClicked}
              icon={VscTerminalCmd}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">CMD</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <IconContainer
              onClick={CalculatorClicked}
              icon={BsCalculator}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">Calculator</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <IconContainer
              onClick={TodoClicked}
              icon={GoTasklist}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">Todo app</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <IconContainer
              onClick={codeClicked}
              icon={DiCode}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">Live Code</p>
          </div>
        </div>
      )}
      {cmd.isOpen && !cmd.isMinimized && (
        <CMDApp
          onClick={() => {
            // console.log("im setting order");
            setOrder("CMD");
          }}
        />
      )}

      {code.isOpen && !code.isMinimized && (
        <Code onClick={() => setOrder("CODE")} />
      )}

      {calculator.isOpen && !calculator.isMinimized && (
        <CalculatorApp onClick={() => setOrder("CALCULATOR")} />
      )}
      {todo.isOpen && !todo.isMinimized && (
        <TodoApp onClick={() => setOrder("TODO")} />
      )}
      {shutdown.isOpen && (
        <ModalLayout>
          <ShutDownApp />
        </ModalLayout>
      )}
      {setting.isOpen && !setting.isMinimized && (
        <SettingApp
          onClick={() => setOrder("SETTING")}
          zIndex={Indexs[2].zIndex}
        />
      )}
      {portfolio.isOpen && (
        <Layout type={"PORTFOLIO"}>
          <PortfolioApp />
        </Layout>
      )}
      {contactme.isOpen && (
        <ModalLayout zIndex={null}>
          <ContactmeApp />
        </ModalLayout>
      )}
      {fileManager.isOpen && !fileManager.isMinimized && (
        <FileManagerApp
          onClick={() => {
            setOrder("FILE_MANAGER");
          }}
        />
      )}

      <Shorthands />

      <BottomNav
        IncreaseLowerOrders={IncreaseLowerOrders}
        ChangingCurrentOrder={ChangingCurrentOrder}
      />
    </div>
  );
}
export default Desktop;
