"use client";

import { useState } from "react";

import Header from "../../components/header";
import ProjectPageLayout from "../../components/projectPageLayout";
import Loading from "../../components/loading";

import projectInfo from "../../data/bounce";
import { Page } from "../../types";

export default function Bounce() {
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
