import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Components/Cart";
import { Collections } from "../Components/Collections";
import { FooterPart } from "../Components/FooterPart";
import { HeaderPart } from "../Components/HeaderPart";
import { LandingPage } from "../Components/LandingPage";
import { MensSunglasses } from "../Components/MensSunglasses";
import { Payment } from "../Components/Payment";
import { Process } from "../Components/Process";
import { SignIn } from "../Components/SignIn";
import { SignUp } from "../Components/SignUp";
import { Success } from "../Components/Success";
import { WomensSunglasses } from "../Components/WomensSunglasses";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <>
      <HeaderPart />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/mensunglasses"
          element={
            <PrivateRoute>
              <MensSunglasses />
            </PrivateRoute>
          }
        />
        <Route
          path="/womensunglasses"
          element={
            <PrivateRoute>
              <WomensSunglasses />
            </PrivateRoute>
          }
        />
        <Route
          path="/collections"
          element={
            <PrivateRoute>
              <Collections />
            </PrivateRoute>
          }
        />
        <Route path="/process" element={<Process />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/thanks" element={<Success />} />
      </Routes>
      <FooterPart />
    </>
  );
};
