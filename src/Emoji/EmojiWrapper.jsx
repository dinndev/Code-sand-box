import React from "react";

const EmojiWrapper = ({ symbol, label , className}) => {
  return (
    <span symbol={symbol} className={className} label={label}>
      {symbol}
    </span>
  );
};

export default EmojiWrapper;
