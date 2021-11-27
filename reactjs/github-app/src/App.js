import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./provider/github-provider";

const App = () => {
  return (
    <main>
      <GithubProvider></GithubProvider>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
};

export default App;
