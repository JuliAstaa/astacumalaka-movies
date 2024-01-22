"use client";

import { Provider } from "react-redux";
import store from "@/app/store";
import React from "react";
import { Suspense } from "react";
import DetailMovie from "@/components/Movies/DetailMovie/DetailMovie";

const page = ({ params }) => {
  return (
    <Provider store={store}>
      <Suspense>
        <main className="w-full min-h-screen h-full bg-black">
          <DetailMovie movieID={params.movieID} />
        </main>
      </Suspense>
    </Provider>
  );
};

export default page;
