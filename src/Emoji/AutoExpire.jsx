import React, { useState, useEffect } from "react";

const AutoExpire = ({ children, i, emoji }) => {
  const [isExpire, setExpire] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExpire(true);
    }, 6000);
  }, []);
  if (isExpire) {
    return null;
  }

  return <>{children}</>;
};

export default AutoExpire;
