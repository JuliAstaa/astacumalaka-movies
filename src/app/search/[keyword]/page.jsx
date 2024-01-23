"use client";

import { Provider } from "react-redux";
import store from "@/app/store";
import React from "react";
import { Suspense } from "react";
import SearchMovie from "@/components/Movies/SearchMovie/SearchMovie";

const Page = ({ params }) => {
  return (
    <Provider store={store}>
      <Suspense>
        <main className="w-full min-h-screen h-full bg-black">
          <SearchMovie keyword={params.keyword} />
        </main>
      </Suspense>
    </Provider>
  );
};

export default Page;
