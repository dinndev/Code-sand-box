import React, { useState } from "react";
import { generate } from "short-id";
import Emoji from "./Emoji";
import EmojiButton from "./EmojiButton";
import EmojiBoardWrapper from "./EmojiBoardWrapper";
import EmojiBubble from "./EmojiBubble";
import AutoExpire from "./AutoExpire";
const EmojiBoard = () => {
  const [emojiQue, setEmojique] = useState([]);
  const emojis = [
    { label: "Thumbs up", id: generate(), symbol: "👍🏼" },
    { label: "Lol", id: generate(), symbol: "😂 " }
  ];
  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const randomPosOrNeg = (max, min) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    randomNumber *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    return randomNumber;
  };
  const handleEmojiClick = (label, symbol, e) => {
    setEmojique([
      ...emojiQue,
      {
        label,
        symbol,
        size: randomNumber(3, 2),
        left: randomNumber(100, 0),
        one: randomPosOrNeg(200, 50),
        two: randomPosOrNeg(200, 50)
      }
    ]);
  };
  const handleEmojiKeydown = (e, symbol, label) => {
    if (e.key === "Enter") {
      setEmojique([
        ...emojiQue,
        {
          label,
          symbol,
          size: randomNumber(3, 2),
          left: randomNumber(100, 0),
          one: randomPosOrNeg(200, 50),
          two: randomPosOrNeg(200, 50),
          id: generate()
        }
      ]);
    }
  };
  return (
    <>
      <EmojiBoardWrapper>
        {emojis.map(({ label, symbol, id }) => (
          <EmojiButton
            onClick={(e) => handleEmojiClick(label, symbol, e)}
            onKeyDown={(e) => handleEmojiKeydown(e, label, symbol)}
          >
            <Emoji key={id} label={label} size="2rem" symbol={symbol} />
          </EmojiButton>
        ))}
      </EmojiBoardWrapper>
      <div>
        {emojiQue.map(({ one, two, symbol, label, id, size, left }) => {
          return (
            <AutoExpire emoji={emojiQue}>
              <EmojiBubble
                key={id}
                symbol={symbol}
                label={label}
                left={left}
                one={one}
                two={two}
                size={size}
              />
            </AutoExpire>
          );
        })}
      </div>
    </>
  );
};

export default EmojiBoard;
