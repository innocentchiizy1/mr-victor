import Button from "../button/index";
import React from "react"; // Import React
import { clsx } from "clsx";
import image1 from "./frontt.jpeg";
import image2 from "./front.jpg";
import image3 from "./two.jpeg";
import image4 from "./last.jpg";
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
    cursor: pointer;
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

const Link = styled.a`
  top: 75%;
  left: 50%;
  text-decoration: underline;
  color: black;
  font-size: 9px;
  transform: translate(-50%, 50%);
  position: absolute;
  color: #f4949d;
  font-weight: bold;
`;

const ImageAndLink = styled(Front)`
  background: red;
  height: 100%;

  pointer-events: auto;
  img {
    height: 100%;
    object-fit: contain;
    position: absolute;

    width: 100%;
  }

  &.flipped {
    transform: rotateY(-180deg);
  }

  a {
    cursor: pointer;
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

  const [zIndexForLink, setZIndexForLink] = React.useState(2); // Initial z-index

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
          // Add a delay before setting z-index to 5
          setTimeout(() => {
            setZIndexForLink(5);
          }, 500); // Adjust the delay time as needed
          break;
        case 4:
          useBookStore.setState({ paper4Flipped: true });
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
          setZIndexForLink(2);
          break;
        case 5:
          useBookStore.setState({ paper4Flipped: false });
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
              <img src={image1} alt="Image 1" />
            </Front>
          </Paper>
          <Paper zIndex={4}>
            <Front className={clsx("bg-2", paper2Flipped && "flipped")}>
              <img src={image2} alt="Image 2" />
            </Front>
          </Paper>
          <Paper zIndex={3}>
            <Front className={clsx("bg-3", paper3Flipped && "flipped")}>
              <img src={image3} alt="Image 3" />
            </Front>
          </Paper>
          <Paper zIndex={zIndexForLink}>
            <ImageAndLink className={clsx("bg-4", paper4Flipped && "flipped")}>
              <img src={image4} alt="Image 4" />
              <Link
                href="https://www.myregistry.com/wedding-registry/francess-oko-and-christian-nwabunike-mississauga-on/3941340"
                target="_blank"
              >
                CLICK HERE TO GIFT THE COUPLES
              </Link>
            </ImageAndLink>
          </Paper>
          <Paper zIndex={1}>
            <Front className={clsx("bg-5", paper5Flipped && "flipped")}>
              <img src={image5} alt="Image 5" />
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
