import { create } from "zustand";

const useBookStore = create(() => ({
  paper1Flipped: false,
  paper2Flipped: false,
  paper3Flipped: false,
  paper1ZIndex: 3,
  paper2ZIndex: 2,
  paper3ZIndex: 1,
  currentLocation: 1,
  numOfPapers: 3,
  maxLocation: 4, // You can set this according to your needs
}));

export default useBookStore;
