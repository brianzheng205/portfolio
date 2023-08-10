"use client";

import { useState } from "react";

import Header from "../../components/header";
import ProjectPageLayout from "../../components/projectPageLayout";
import Loading from "../../components/loading";

import projectInfo from "../../data/ideaNavigator";
import { Page } from "../../types";

export default function IdeaNavigator() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header activePageRouter={Page.Projects} setLoading={setLoading} />
          <ProjectPageLayout {...projectInfo} />
        </>
      )}
    </>
  );
}
