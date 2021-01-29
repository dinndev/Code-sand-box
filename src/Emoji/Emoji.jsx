import EmojiWrapper from "./EmojiWrapper";
import styled from "styled-components";

const Emoji = styled(EmojiWrapper)`
  font-size: ${({ size }) => (size ? size : "4rem")};
`;

export default Emoji;
