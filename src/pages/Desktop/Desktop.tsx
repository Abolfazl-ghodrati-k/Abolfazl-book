import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BounceLoader } from "react-spinners";
import { GoTasklist } from "react-icons/go";
import { VscTerminalCmd } from "react-icons/vsc";
import { BsCalculator } from "react-icons/bs";
import { DiCode } from "react-icons/di";

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
import AudioPlayerWrapper from "../../Components/AudioPlayer/AudioPlayerWrapper";

function Desktop() {
  const dispatch = useDispatch();
  // @ts-expect-error TS(2339): Property 'cmd' does not exist on type 'unknown'.
  const cmd = useSelector((state) => state.cmd);
  // @ts-expect-error TS(2339): Property 'todo' does not exist on type 'unknown'.
  const todo = useSelector((state) => state.todo);
  // @ts-expect-error TS(2339): Property 'fileManager' does not exist on type 'unk... Remove this comment to see the full error message
  const fileManager = useSelector((state) => state.fileManager);
  // @ts-expect-error TS(2339): Property 'contactme' does not exist on type 'unkno... Remove this comment to see the full error message
  const contactme = useSelector((state) => state.contactme);
  // @ts-expect-error TS(2339): Property 'portfolio' does not exist on type 'unkno... Remove this comment to see the full error message
  const portfolio = useSelector((state) => state.portfolio);
  // @ts-expect-error TS(2339): Property 'setting' does not exist on type 'unknown... Remove this comment to see the full error message
  const setting = useSelector((state) => state.setting);
  // @ts-expect-error TS(2339): Property 'shutdown' does not exist on type 'unknow... Remove this comment to see the full error message
  const shutdown = useSelector((state) => state.shutdown);
  // @ts-expect-error TS(2339): Property 'desktop' does not exist on type 'unknown... Remove this comment to see the full error message
  const maximizedApp = useSelector((state) => state.desktop.Maximized);
  // @ts-expect-error TS(2339): Property 'loading' does not exist on type 'unknown... Remove this comment to see the full error message
  const loading = useSelector((store) => store.loading.loading);
  // @ts-expect-error TS(2339): Property 'weather' does not exist on type 'unknown... Remove this comment to see the full error message
  const weather = useSelector((store) => store.weather);
  // @ts-expect-error TS(2339): Property 'calculator' does not exist on type 'unkn... Remove this comment to see the full error message
  const calculator = useSelector((store) => store.calculator);
  // @ts-expect-error TS(2339): Property 'code' does not exist on type 'unknown'.
  const code = useSelector((store) => store.code);

  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  const { Order, Orders } = useOrder();
  const Indexs = useIndex();
  const desktop = useRef();

  useEffect(() => {
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    desktop.current.style.setProperty("--fileIndex", Indexs[1].zIndex);
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    desktop.current.style.setProperty("--codeIndex", Indexs[5].zIndex);
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    desktop.current.style.setProperty("--cmdIndex", Indexs[0].zIndex);
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    desktop.current.style.setProperty("--settingIndex", Indexs[2].zIndex);
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    desktop.current.style.setProperty("--calcIndex", Indexs[3].zIndex);
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
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

      {fileManager.Music_isOpen && <AudioPlayerWrapper />}

      {maximizedApp === 0 && (
        <div className="absolute right-1 top-1 flex flex-col justify-center content-center gap-4 [&>*]:bg-CMD-100 [&>*]:p-1 [&>*]:rounded-md">
          <div className="flex flex-col items-center justify-center text-white">
            {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; size:... Remove this comment to see the full error message */}
            <IconContainer
              onClick={() => openApp("CMD", "CMD")}
              icon={VscTerminalCmd}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">CMD</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; size:... Remove this comment to see the full error message */}
            <IconContainer
              onClick={() => openApp("CALCULATOR", "CALCULATOR")}
              icon={BsCalculator}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">Calculator</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            {/* @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; size:... Remove this comment to see the full error message */}
            <IconContainer
              onClick={() => openApp("TODO", "TODO")}
              icon={GoTasklist}
              size={"50px"}
              isDesktop
            />
            <p className="text-[.9rem]">Todo app</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            {/*  @ts-expect-error TS(2739): Type '{ onClick: () => void; icon: IconType; size:... Remove this comment to see the full error message */}
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
        // @ts-expect-error TS(2741): Property 'zIndex' is missing in type '{ children: ... Remove this comment to see the full error message
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
        // @ts-expect-error TS(2741): Property 'zIndex' is missing in type '{ onClick: (... Remove this comment to see the full error message
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
