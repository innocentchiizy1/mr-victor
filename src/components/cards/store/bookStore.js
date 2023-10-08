import { create } from "zustand";

const useBookStore = create(() => ({
  paper1Flipped: false,
  paper2Flipped: false,
  paper3Flipped: false,
  paper4Flipped: false,
  paper5Flipped: false,
  currentLocation: 1,
  numOfPapers: 5,
  maxLocation: 5, // You can set this according to your needs
}));

export default useBookStore;
