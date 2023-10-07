import { BiChevronsLeft } from "react-icons/bi";
import { BiChevronsRight } from "react-icons/bi";
import Books from "../books";
import Button from "../button";
// import React from "react";
import styled from "styled-components";
import useBookStore from "../../store/bookStore";

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;

const Inner = styled.div`
  height: 600px;
  width: 400px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const SwipeBook = () => {
  const goNextPage = () => {
    const currentLocation = useBookStore.getState().currentLocation;
    const maxLocation = useBookStore.getState().numOfPapers + 1;

    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          useBookStore.setState({ paper1Flipped: true, paper1ZIndex: 1 });
          break;
        case 2:
          useBookStore.setState({ paper2Flipped: true, paper2ZIndex: 2 });
          break;
        case 3:
          useBookStore.setState({ paper3Flipped: true, paper3ZIndex: 3 });

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
          useBookStore.setState({ paper1Flipped: false, paper1ZIndex: 3 });
          break;
        case 3:
          useBookStore.setState({ paper2Flipped: false, paper2ZIndex: 2 });
          break;
        case 4:
          useBookStore.setState({ paper3Flipped: false, paper3ZIndex: 1 });
          break;
        default:
          break;
      }

      useBookStore.setState({ currentLocation: currentLocation - 1 });
    }
  };

  return (
    <Container>
      <Inner>
        <Books />
        <ButtonContainer>
          <Button onClick={goPrevPage}>
            <BiChevronsLeft size={20} />
          </Button>
          <Button onClick={goNextPage}>
            <BiChevronsRight size={20} />
          </Button>
        </ButtonContainer>
      </Inner>
    </Container>
  );
};

export default SwipeBook;
