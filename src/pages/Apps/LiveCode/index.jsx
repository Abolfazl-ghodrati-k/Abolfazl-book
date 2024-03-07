/* eslint-disable no-unused-vars */
import { Resizable } from "re-resizable";
import React, { useEffect, useMemo, useState } from "react";
import Draggable from "react-draggable";
import { useSelector } from "react-redux";
import MacNav from "../../../Components/MacNav";
import Users from "./components/Users";
import MonacoEditorWrapper from "./components/MonacoEditorWrapper";

const users = [
  {
    role: "owner",
    email: "admin@example.com",
    status: "online",
  },
  {
    role: "editor",
    email: "editor@example.com",
    status: "online",
  },
  {
    role: "visitor",
    email: "visitor@example.com",
    status: "online",
  },
];

const LiveCode = ({ onClick }) => {
  const [PositionX, setPositionX] = useState(40);
  const [PositionY, setPositionY] = useState(40);
  const [Width, setWidth] = useState(600);
  const [Height, setHeight] = useState(400);
  // TODO: check to see if user has an account
  // * options: have a global store for user, login modal
  const { user, token } = useSelector((state) => state.user);

  const { isMaximized, rooms, activeRoom } = useSelector((state) => state.code);

  const selectedRoom = useMemo(() => {
    if (rooms) {
      return rooms?.find((room) => room.id === activeRoom);
    }
  }, [activeRoom, rooms]);

  useEffect(() => {
    if (isMaximized) {
      setPositionX(0);
      setPositionY(0);
    }
  }, [isMaximized]);

  return (
    <Draggable
      bounds="parent"
      cancel=".cancelcode"
      handle=".handlecode"
      defaultClassName="react-draggable code"
      defaultPosition={{ x: PositionX, y: PositionY }}
      position={{ x: PositionX, y: PositionY }}
      onStop={(e, data) => {
        setPositionX(data?.x);
        setPositionY(data?.y);
      }}
    >
      <Resizable
        bounds={"window"}
        minWidth={400}
        minHeight={300}
        defaultSize={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div
          onClick={onClick}
          className={`bg-CMD rounded w-full h-full ${
            isMaximized
              ? "min-w-[100vw] min-h-[89vh] "
              : `max-w-[${Width}] max-h-[${Height}]`
          } flex flex-col`}
        >
          <div className="handlecode border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-white pl-3">Live coding v1.0.0</h3>
            <div className="flex items-center justify-end gap-4">
              {selectedRoom && <Users users={selectedRoom.users} />}
              <div className="flex justify-end p-3 items-center border-l border-gray-100">
                <MacNav
                  type={"MINIMIZE"}
                  Page={"CODE"}
                  name={"CODE"}
                  isMaximized={isMaximized}
                />
                <MacNav
                  type={"MAXIMIZE"}
                  Page={"CODE"}
                  name={"CODE"}
                  isMaximized={isMaximized}
                />
                <MacNav
                  type={"CLOSE"}
                  Page={"CODE"}
                  name={"CODE"}
                  isMaximized={isMaximized}
                />
              </div>
            </div>
          </div>
          {selectedRoom && (
            <div className="w-full h-[calc(100%-41px)]">
              <MonacoEditorWrapper room={selectedRoom} />
            </div>
          )}
        </div>
      </Resizable>
    </Draggable>
  );
};

export default LiveCode;
