import React, { useContext } from "react";

import { DarkButton, TransparentButton } from "../UIComponents/buttons";

const StartPage = ({ gameState, changeState }) => {
  const StartGameHandler = (e) => {
    changeState((draft) => {
      draft.currentState = "PLAYER_SIGNUP";
    });
  };

  return (
    <div className="mainContent">
      <TransparentButton className="alignCenter"> Tutorials </TransparentButton>
      <DarkButton className="alignCenter" onClick={StartGameHandler}>
        {" "}
        Let&apos;s Begin{" "}
      </DarkButton>
    </div>
  );
};

export default StartPage;
