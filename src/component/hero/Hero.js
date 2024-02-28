import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const { expenses, money } = useSelector((s) => s);
  console.log(expenses);
  console.log(money);

  ///////////
  const dispatch = useDispatch();

  const takeMoney = (sun) => {
    dispatch({ type: "TAKE_MONEY", payload: sun });
    dispatch({ type: "GET_MONEY", payload: sun });
  };

  const getMoney = (sun) => {
    // dispatch({ type: "GET_MONEY", payload: sun });
  };
  ///////////

  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="expenses">
            <h1>{expenses}</h1>
          </div>
          {/* ///// */}
          <button onClick={() => takeMoney(+prompt())}>Покупка</button>

          {/* //// */}
          <div className="money">
            <h1>{money}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
