import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/SessionContext";
import React from "react";
export const ProtectedRoute = ({ children }) => {
  const [, { isAuthed,isAdmin }] = useAuth();
  if (isAuthed() == false) {
    return <Navigate to="/" replace />;
  } 
  else if(isAdmin())
  {
    return <Navigate to="/admin" replace />;
  } else
  return <>{children}</>;
};
export const AdminRoute = ({ children }) => {
  const [, { isAdmin }] = useAuth();
  if (isAdmin() == false) {
    return <Navigate to="/" replace />;
  } else return <>{children}</>;
};
export const MIN_REINVEST_VALUE = 7.56;
export const MIN_DEPOSITE_VALUE = 72;
export const BONUS_RATE = 2.67;
