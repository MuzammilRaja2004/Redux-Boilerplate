import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const Deposite = () => {
  const dispatch = useDispatch();
  // const  = bindActionCreators(dispatch,actionCreators)
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div className="container">
      <h2>Deposite/Withdraw</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={()=>{withdrawMoney(100)}}
      >
        -
      </button>
      Update Amount
      <button
        className="btn btn-primary mx-2"
        onClick={()=>{depositMoney(100)}}
      >
        +
      </button>
    </div>
  );
};

export default Deposite;
