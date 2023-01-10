const getRandomSize = (min: number, max: number) => 
[ min, max ]
    .map(value => {
      const unrounded = Math.random() * (max - min) + min;
      const remainder = unrounded % 100;
      return unrounded - remainder;
    })
    .join("/");

export default getRandomSize;
