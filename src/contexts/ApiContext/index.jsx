import React, { createContext, useContext, useState } from "react";
import { BACKEND_URL } from "../../config";

export const ApiContext = createContext();
const failureMsg = "Something went wrong. Please try again.";

export const ApiProvider = ({ children }) => {
  const doPost = (url, data, onSuccess, onFail, isPut) => {
    return fetch(BACKEND_URL + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (!response) {
          throw failureMsg;
        }
        if (response.error) {
          throw response.result;
        } else {
          !onSuccess || onSuccess(response);
        }
        return response;
      })
      .catch((error) => {
        !onFail || onFail(error);
        return {
          error: true,
          result: error,
        };
      });
  };

  const functions = {
    doPost,
  };
  return (
    <ApiContext.Provider value={[functions]}>{children}</ApiContext.Provider>
  );
};

export const useApi = () => {
  const sessionManager = useContext(ApiContext);
  return sessionManager || [{}, () => {}];
};
