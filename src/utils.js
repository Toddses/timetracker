// @flow

const formatSeconds = (seconds: number) => {
  return new Date(1000 * seconds).toISOString().substr(11, 8);
};

const isoStringToSeconds = (isoString: string) => {
  const seconds =
    parseInt(isoString.substr(0, 2)) * 3600 +
    parseInt(isoString.substr(3, 2)) * 60 +
    parseInt(isoString.substr(6, 2));

  return seconds;
};

export { formatSeconds, isoStringToSeconds };
