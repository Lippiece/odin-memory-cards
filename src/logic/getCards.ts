import getRandomSize from "../logic/getRandomSize";

const getCards = () =>
  Array.from({ length: 15 }, (_, index) => ({
    clicked: false,
    id     : index + 1,
    image  : `https://picsum.photos/${getRandomSize(300, 800)}`,
  }));

export default getCards;
