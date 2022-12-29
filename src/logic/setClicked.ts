const setClicked = (
  cardsArray: typeof card[],
  card: {
    id: number;
    image: string;
    clicked: boolean;
  },
  inputId: number,
) =>
  cardsArray.map( ( { id, image } ) =>
  ( {
    clicked: id === inputId,
    id,
    image,
  } ) );

export default setClicked;
