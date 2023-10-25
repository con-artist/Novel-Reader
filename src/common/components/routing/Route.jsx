import React from "react";
import { useRouter } from "next/router";

const Route = ({ path, children, isBaseRoute = false }) => {
  const router = useRouter();

  return (
    <>
      {(router.asPath.startsWith(path) &&
        path.slice(1) === router.asPath.split("/")[1]) ||
      isBaseRoute ? (
        <>{children}</>
      ) : (
        <></>
      )}
    </>
  );
};

export default Route;
