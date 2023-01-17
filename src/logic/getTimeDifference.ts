const getTimeDifference = (formerDate: Date, latterDate: Date) => {
  const difference = latterDate.getTime() - formerDate.getTime();
  const minutes    = Math.floor(difference / 60_000);
  const seconds    = ((difference % 60_000) / 1000).toFixed(0);
  return `${minutes}:${Number(seconds) < 10 ? "0" : ""}${seconds}`;
};

export default getTimeDifference;
