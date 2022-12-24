import React from "react";
import { useRouter } from "next/router";

import DetailNews from "../../components/DetailNews";

function Article() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <DetailNews />
    </>
  );
}

export default Article;
