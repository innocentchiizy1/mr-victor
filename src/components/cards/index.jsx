import Button from "../button/index";
import { clsx } from "clsx";
import image1 from "./front.jpeg";
import image2 from "./one.jpeg";
import image3 from "./two.jpeg";
import image4 from "./last.jpeg";
import image5 from "./back.jpeg";
// import { react } from "@vitejs/plugin-react-swc";
import styled from "styled-components";
import useBookStore from "./store/bookStore";

const Container = styled.div`
  height: 100vh;
  /* display: grid; */
  /* place-items: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #b7d3f2;

  .paper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    perspective: 1500px;
  }
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  transition: transform 0.5s;
`;

const Width = styled.div`
  width: 95%;
  margin: auto;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  width: 100%;

  margin-top: 20px;
`;

const Paper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  perspective: 1500px;
  z-index: ${(props) => props.zIndex};
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left;
  transition: transform 2s;
  backface-visibility: hidden;
  border-radius: 9px;

  &.flipped {
    transform: rotateY(-180deg);
  }

  &.bg-1 {
    background-color: #fe9393;
  }

  &.bg-2 {
    background-color: #fff;
  }
  &.bg-3 {
    background-color: #fff;
  }
  &.bg-4 {
    background-color: #fff;
  }

  &.bg-5 {
    background-color: #fe9393;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Cards = () => {
  const {
    paper1Flipped,
    paper2Flipped,
    paper3Flipped,
    paper4Flipped,
    paper5Flipped,
  } = useBookStore();

  const goNextPage = () => {
    const currentLocation = useBookStore.getState().currentLocation;
    const maxLocation = useBookStore.getState().numOfPapers + 1;

    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          useBookStore.setState({ paper1Flipped: true });
          break;
        case 2:
          useBookStore.setState({ paper2Flipped: true });
          break;
        case 3:
          useBookStore.setState({ paper3Flipped: true });

          break;
        case 4:
          useBookStore.setState({ paper4Flipped: true });

          break;
        case 5:
          useBookStore.setState({ paper5lipped: true });

          break;
        default:
          throw new Error("unknown state");
      }
      useBookStore.setState({ currentLocation: currentLocation + 1 });
    }
  };

  const goPrevPage = () => {
    const currentLocation = useBookStore.getState().currentLocation;

    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          useBookStore.setState({ paper1Flipped: false });
          break;
        case 3:
          useBookStore.setState({ paper2Flipped: false });
          break;
        case 4:
          useBookStore.setState({ paper3Flipped: false });
          break;
        case 5:
          useBookStore.setState({ paper4Flipped: false });
          break;
        case 6:
          useBookStore.setState({ paper5Flipped: false });
          break;

        default:
          break;
      }

      useBookStore.setState({ currentLocation: currentLocation - 1 });
    }
  };

  return (
    <Container>
      <Width>
        <Inner>
          <Paper zIndex={5}>
            <Front className={clsx("bg-1", paper1Flipped && "flipped")}>
              <img src={image1}></img>
            </Front>
          </Paper>
          <Paper zIndex={4}>
            <Front className={clsx("bg-2", paper2Flipped && "flipped")}>
              <img src={image2}></img>
            </Front>
          </Paper>
          <Paper zIndex={3}>
            <Front className={clsx("bg-3", paper3Flipped && "flipped")}>
              <img src={image3}></img>
            </Front>
          </Paper>
          <Paper zIndex={2}>
            <Front className={clsx("bg-4", paper4Flipped && "flipped")}>
              <img src={image4}></img>
            </Front>
          </Paper>
          <Paper zIndex={1}>
            <Front className={clsx("bg-5", paper5Flipped && "flipped")}>
              <img src={image5}></img>
              {/* <p>5</p> */}
            </Front>
          </Paper>
        </Inner>
        <ButtonContainer>
          <Button onClick={goPrevPage}>{"<"}</Button>
          <Button onClick={goNextPage}>{">"}</Button>
        </ButtonContainer>
      </Width>
    </Container>
  );
};

export default Cards;
