import PropTypes from "prop-types";
import { Wrapper, Image } from "./actor.style";

export default function Actor(props) {
  const { name, character, imageUrl } = props;

  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};
