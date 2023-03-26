import React from "react";
import { useDispatch, useSelector } from "react-redux";


export  const withStore = (Component, requested_store) => {
  return (props) => {
    const store = useSelector((store) => store[requested_store]);
    const dispatch = useDispatch()

    return <Component store={store} dispatch={dispatch} {...props} />;
  };
};