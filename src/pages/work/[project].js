import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import CaseStudy from "../../components/CaseStudies/CaseStudy/CaseStudy";
import dummyData from "../../components/CaseStudies/caseStudyData.json";

const project = () => {
  const router = useRouter();
  const { project } = router.query;
  const caseData = dummyData.find((item) => item.url === project);

  return (
    <div>
      <Head>
        <title>My Case Studies!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!caseData ? <p>loading</p> : <CaseStudy project={caseData} />}
      <div className="back">
        <Link href="/work">back</Link>
      </div>
    </div>
  );
};

export default project;
