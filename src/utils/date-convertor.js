const convertUnixTime = (timeStamp) => {
  const dateObject = new Date(timeStamp * 1000);
  const humanDateFormat = dateObject.toLocaleString("en-GB", {
    weekday: "short",
  });
  return humanDateFormat;
};

export default convertUnixTime;
