import back from "./back.jpeg";
import front from "./front.jpeg";
import one from "./one.jpeg";
// import React from "react";
import styled from "styled-components";
import two from "./two.jpeg";
import useBookStore from "../../store/bookStore";
const Container = styled.div`
  height: 300px;
  position: relative;
  transform: ${(props) => props.transform};
  width: 100%;
  transition: transform 2s;

  /* overflow: scroll; */

  .back-content {
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Paper = styled.div`
  position: absolute;
  inset: 0;
  perspective: 1500px;

  &#p1 {
    background: #fe9393;
    z-index: ${(props) => props.index};
    /* z-index: 3; */
  }

  &#p2 {
    z-index: ${(props) => props.index};
    /* z-index: 2; */
    background: #fff;
  }

  &#p3 {
    z-index: ${(props) => props.index};
    /* z-index: 1; */
    background: #fe9393;
  }
`;

const Page = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left;
  transition: transform 2s;

  &.flip {
    transform: rotateY(-180deg);
  }
`;

const Front = styled(Page)`
  z-index: 1;
  backface-visibility: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Books = () => {
  const {
    paper1Flipped,
    paper2Flipped,
    paper3Flipped,
    paper1ZIndex,
    paper2ZIndex,
    paper3ZIndex,
    bookTransform,
  } = useBookStore();

  return (
    <Container transform={bookTransform}>
      <Paper id="p1" index={paper1ZIndex}>
        <Front className={paper1Flipped && "flip"}>
          <img src={front} />
        </Front>
        {/* <Back className={paper1Flipped && "flip"}>
          <div className="back-content">Back One</div>
        </Back> */}
      </Paper>
      <Paper id="p2" index={paper2ZIndex}>
        <Front className={paper2Flipped && "flip"}>
          <img src={one} />
        </Front>
        {/* <Back className={paper2Flipped && "flip"}>
          <div className="back-content">Back Two</div>
        </Back> */}
      </Paper>
      <Paper id="p3" index={paper3ZIndex}>
        <Front className={paper3Flipped && "flip"}>
          <img src={back} />
        </Front>
        {/* <Back className={paper3Flipped && "flip"}>
          <div className="back-content">Back Three</div>
        </Back> */}
      </Paper>
    </Container>
  );
};

export default Books;
