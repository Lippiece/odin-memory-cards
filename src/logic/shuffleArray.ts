const shuffleArray = ( array: object[] ) =>
  [ array ].sort( () => Math.random() - 0.5 );


export default shuffleArray;
