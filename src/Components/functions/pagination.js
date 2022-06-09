export const decrease = (start, end) => {
  // do not allow pagination below 0
  if (Number(start) === 0) {
    return {
      start: "0",
      end: "10",
    };
  } else {
    // decrease startNum and endNum (ftx api pagination)

    return {
      start: (Number(start) - 10).toString(),
      end: (Number(end) - 10).toString(),
    };
  }
};

export const increase = (start, end) => {
  // increase startNum and endNum (ftx api pagination)

  return {
    start: (Number(start) + 10).toString(),
    end: (Number(end) + 10).toString(),
  };
};

export const decreaseCards = (start, end) => {
  // do not allow pagination below 0
  if (Number(start) === 0) {
    return {
      start: "0",
      end: "12",
    };
  } else {
    // decrease startNum and endNum (ftx api pagination)

    return {
      start: (Number(start) - 12).toString(),
      end: (Number(end) - 12).toString(),
    };
  }
};

export const increaseCards = (start, end) => {
  // increase startNum and endNum (ftx api pagination)

  return {
    start: (Number(start) + 12).toString(),
    end: (Number(end) + 12).toString(),
  };
};
