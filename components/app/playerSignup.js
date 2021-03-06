import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useImmerReducer } from "use-immer";

import { DefaultCard } from "../UIComponents/cards";
import { DarkButton } from "../UIComponents/buttons";
import { DefaultInput } from "../UIComponents/inputs";

import styles from "../../styles/app/playerSignup.module.css";

const PlayerSignup = ({ gameState, changeState }) => {
  const [inputValue, setInputValue] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("PLAYER 1");

  const validateState = {
    playerOne: {
      value: "",
      foundError: false,
      errorMessage: "",
    },

    playerTwo: {
      value: "",
      foundError: false,
      errorMessage: "",
      isUnique: false,
    },
    submitCount: 0,
  };

  function reducer(draft, action) {
    switch (action.type) {
      case "player1ValidateImmediately":
        draft.playerOne.value = action.value;
        draft.playerOne.foundError = false;
        draft.playerOne.errorMessage = "";

        if (
          parseInt(draft.playerOne.value) ||
          parseFloat(draft.playerOne.value)
        ) {
          draft.playerOne.foundError = true;
          draft.playerOne.errorMessage = "Player 1 name cannot be a number";
        }

        if (draft.playerOne.value.length > 15) {
          draft.playerOne.foundError = true;
          draft.playerOne.errorMessage =
            "Player 1 name cannot be longer than 15 characters";
        }
        if (
          draft.playerOne.value &&
          !/^([a-zA-Z0-9]+)$/.test(draft.playerOne.value)
        ) {
          draft.playerOne.foundError = true;
          draft.playerOne.errorMessage =
            "Player 1 name can only contain letters and numbers.";
        }
        break;

      case "player1ValidateAfterDelay":
        if (draft.playerOne.value.length < 3) {
          draft.playerOne.foundError = true;
          draft.playerOne.errorMessage =
            "Player 1 name must be at least 3 characters long";
        }
        if (draft.playerOne.value.trim() == "") {
          draft.playerOne.foundError = true;
          draft.playerOne.errorMessage = "Player 1 name cannot be empty";
        }
        if (draft.playerOne.value.split(" ").length > 1) {
          draft.playerOne.foundError = true;
          draft.playerOne.errorMessage =
            "Player 1 name must not contain spaces";
        }
        break;

      case "player2ValidateImmediately":
        draft.playerTwo.value = action.value;
        draft.playerTwo.foundError = false;
        draft.playerTwo.errorMessage = "";

        if (
          parseInt(draft.playerTwo.value) ||
          parseFloat(draft.playerTwo.value)
        ) {
          draft.playerTwo.foundError = true;
          draft.playerTwo.errorMessage = "Player 2 name cannot be a number";
        }
        if (draft.playerTwo.value.length > 10) {
          draft.playerTwo.foundError = true;
          draft.playerTwo.errorMessage =
            "Player 2 name cannot be longer than 10 characters";
        }
        if (
          draft.playerTwo.value &&
          !/^([a-zA-Z0-9]+)$/.test(draft.playerTwo.value)
        ) {
          draft.playerTwo.foundError = true;
          draft.playerTwo.errorMessage =
            "Player 2 name can only contain letters and numbers.";
        }
        break;

      case "player2ValidateAfterDelay":
        if (draft.playerTwo.value.length < 3) {
          draft.playerTwo.foundError = true;
          draft.playerTwo.errorMessage =
            "Player 2 name must be at least 3 characters long";
        }
        if (draft.playerTwo.value.trim() == "") {
          draft.playerTwo.foundError = true;
          draft.playerTwo.errorMessage = "Player 2 name cannot be empty";
        }
        if (draft.playerTwo.value.split(" ").length > 1) {
          draft.playerTwo.foundError = true;
          draft.playerTwo.errorMessage =
            "Player 2 name must not contain spaces";
        }
        break;

      case "playerNamesAreUnique":
        if (
          draft.playerTwo.value.toLowerCase() ==
          draft.playerOne.value.toLowerCase()
        ) {
          draft.playerTwo.foundError = true;
          draft.playerTwo.errorMessage =
            "Player 2 and player 1 must have unique names";
        }
        break;

      case "submitPlayerName":
        if (!draft.playerOne.foundError || !draft.playerTwo.foundError) {
          draft.submitCount++;
        }
        break;

      default:
        return draft;
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, validateState);

  useEffect(() => {
    if (state.playerOne.value) {
      const delay = setTimeout(
        () => dispatch({ type: "player1ValidateAfterDelay" }),
        750
      );
      return () => clearTimeout(delay);
    }
  }, [state.playerOne.value]);

  useEffect(() => {
    if (state.playerTwo.value) {
      const delay = setTimeout(
        () => dispatch({ type: "player2ValidateAfterDelay" }),
        750
      );
      return () => clearTimeout(delay);
    }
  }, [state.playerTwo.value]);

  useEffect(() => {}, [state.submitCount]);

  async function SubmitHandler(e) {
    e.preventDefault();
    if (currentPlayer == "PLAYER 1") {
      dispatch({
        type: "player1ValidateImmediately",
        value: state.playerOne.value,
      });
      dispatch({
        type: "player1ValidateAfterDelay",
        value: state.playerOne.value,
      });

      if (!state.playerOne.foundError && state.playerOne.value.trim() != "") {
        try {
          const response = await Axios.post("/signup", {
            playerName: state.playerOne.value,
          });

          if (response) {
            console.log(response);

            dispatch({ type: "submitPlayerName" });

            changeState((draft) => {
              draft.playerOne = inputValue.trim();
            });

            setInputValue("");
            setCurrentPlayer("PLAYER 2");
          }
        } catch (e) {
          console.log(e);
        }
      }
    } else if (currentPlayer == "PLAYER 2") {
      dispatch({
        type: "player2ValidateImmediately",
        value: state.playerTwo.value,
      });
      dispatch({
        type: "player2ValidateAfterDelay",
        value: state.playerTwo.value,
      });
      dispatch({ type: "playerNamesAreUnique", value: state.playerTwo.value });

      if (!state.playerTwo.foundError && state.playerTwo.value.trim() != "") {
        try {
          const response = await Axios.post("/signup", {
            playerName: state.playerTwo.value,
          });

          if (response) {
            console.log(response);
            changeState((draft) => {
              draft.currentState = "PLAY_GAME";
              draft.playerTwo = inputValue.trim();
            });

            setCurrentPlayer("");
            setInputValue("");
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  const ChangeHandler = (value) => {
    if (currentPlayer == "PLAYER 1") {
      dispatch({ type: "player1ValidateImmediately", value: value });
    } else if (currentPlayer == "PLAYER 2") {
      dispatch({ type: "player2ValidateImmediately", value: value });
      dispatch({ type: "playerNamesAreUnique", value: value });
    }
    setInputValue(value);
  };

  return (
    <div>
      <DefaultCard id={styles.inputCard}>
        <DefaultInput
          onChange={(e) => ChangeHandler(e.target.value)}
          value={inputValue}
          name="playerInput"
          id={styles.signupInput}
          type="text"
          placeholder={`${currentPlayer} NAME HERE`}
        />
        <div id={styles.errorMessage}>
          {" "}
          {currentPlayer == "PLAYER 1"
            ? state.playerOne.errorMessage
            : state.playerTwo.errorMessage}{" "}
        </div>
        <DarkButton id={styles.signupBtn} onClick={SubmitHandler}>
          {" "}
          Submit{" "}
        </DarkButton>
      </DefaultCard>
    </div>
  );
};

export default PlayerSignup;
