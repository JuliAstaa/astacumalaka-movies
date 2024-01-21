"use client";

import { Provider } from "react-redux";
import store from "../store";
import React from "react";
import PopularMovies from "@/components/Movies/Popular/PopularMovies";
import { Suspense } from "react";

const page = () => {
  return (
    <Provider store={store}>
      <Suspense>
        <main className="w-full min-h-screen h-full bg-black">
          <PopularMovies />
        </main>
      </Suspense>
    </Provider>
  );
};

export default page;
