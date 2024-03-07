import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BounceLoader } from "react-spinners";
import { GoTasklist } from "react-icons/go";
import { VscTerminalCmd } from "react-icons/vsc";
import { BsCalculator } from "react-icons/bs";
import { DiCode } from "react-icons/di"

import useOrder from "../../Hooks/useOrder";
import useIndex from "../../Hooks/useIndex";

import Layout from "../../Components/Layout/Layout";
import ModalLayout from "../../Components/Layout/ModalLayout";
import { ToastContainer } from "react-toastify";

import FileManagerApp from "../FileManager";
import ContactmeApp from "../Contact";
import PortfolioApp from "../Portfolio/Portfolio";
import SettingApp from "../Setting";
import ShutDownApp from "../ShutDown";
import CMDApp from "../Apps/CMD/CMDApp";
import TodoApp from "../Apps/Todo";
import CalculatorApp from "../Apps/Calculator";
import Code from "../Apps/LiveCode";

import Weather from "../Widgets/Weather";
import Shorthands from "../../Shorthands";
import BottomNav from "../../BottomNav";
import IconContainer from "../../Components/Icon/IconContainer";
import AudioPlayer from "../../Components/AudioPlayer";

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
    desktop.current.style.setProperty("--fileIndex", Indexs[1].zIndex);
    desktop.current.style.setProperty("--codeIndex", Indexs[5].zIndex);
    desktop.current.style.setProperty("--cmdIndex", Indexs[0].zIndex);
    desktop.current.style.setProperty("--settingIndex", Indexs[2].zIndex);
    desktop.current.style.setProperty("--calcIndex", Indexs[3].zIndex);
    desktop.current.style.setProperty("--todoIndex", Indexs[4].zIndex);
  }, [Indexs]);

  const ChangingCurrentOrder = () => {
    if (Order === 0) {
      dispatch({ type: "CHANGE_ORDER", payload: 0 });
    } else {
      dispatch({ type: "CHANGE_ORDER", payload: Order - 1 });
    }
  };

  const openApp = (appName, orderType) => {
    dispatch({ type: `OPEN_${appName}` });
    dispatch({ type: `ORDER_${orderType}`, payload: Order });
    if (appName === orderType && orderType?.isOpen) {
      return;
    } else {
      ChangingCurrentOrder();
    }
  };

  const IncreaseLowerOrders = (ClickedComponent) => {
    if (Order === 0) {
      dispatch({ type: `ORDER_${ClickedComponent.name}`, payload: 1 });
      Orders.forEach((app) => {
        if (app.order < ClickedComponent.order && app.order) {
          dispatch({ type: `ORDER_${app.name}`, payload: app.order + 1 });
        }
      });
    } else {
      dispatch({ type: `ORDER_${ClickedComponent.name}`, payload: Order + 1 });
      Orders.forEach((app) => {
        if (app.order < ClickedComponent.order && app.order) {
          dispatch({ type: `ORDER_${app.name}`, payload: app.order + 1 });
        }
      });
    }
  };

  const setOrder = (type) => {
    Orders.forEach((app) => {
      if (app.name === type && Order === app.order) {
        return;
      } else if (app.name === type) {
        IncreaseLowerOrders(app);
      }
    });
  };

  return (
    <div
      className={`bg-no-repeat bg-cover bg-center h-full w-full -z-10 relative desktop max-w-[100vw] max-h-[100vh] overflow-hidden ${
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

      {weather.show && (
        <div className="absolute z-[10000000]">
          <Weather />
        </div>
      )}

      {fileManager.Music_isOpen && <AudioPlayer />}

      {maximizedApp === 0 && (
        <div className="absolute right-1 top-1 flex flex-col justify-center content-center gap-4 [&>*]:bg-CMD-100 [&>*]:p-1 [&>*]:rounded-md">
          <div className="flex flex-col items-center justify-center text-white">
            <IconContainer
              onClick={() => openApp("CMD", "CMD")}
              icon={VscTerminalCmd}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">CMD</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <IconContainer
              onClick={() => openApp("CALCULATOR", "CALCULATOR")}
              icon={BsCalculator}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">Calculator</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <IconContainer
              onClick={() => openApp("TODO", "TODO")}
              icon={GoTasklist}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">Todo app</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <IconContainer
              onClick={() => openApp("CODE", "CODE")}
              icon={DiCode}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">Live Code</p>
          </div>
        </div>
      )}

      {cmd.isOpen && !cmd.isMinimized && (
        <CMDApp onClick={() => setOrder("CMD")} />
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
        <FileManagerApp onClick={() => setOrder("FILE_MANAGER")} />
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
