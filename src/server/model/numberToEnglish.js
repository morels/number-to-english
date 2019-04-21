import _ from "lodash";

function convertChunk(depthMax) {
  let depth = depthMax;
  let hasPrintedSomething = false;
  return chunk => {
    const [h, da, u] = chunk;

    let chunkInLetters;

    // handle all-zeros use case
    if (Number.parseInt(chunk.join("")) === 0) {
      chunkInLetters = depth === 0 ? readDigit({ dau: 0 }) : "";
    } else {
      chunkInLetters = _.compact([
        Number.parseInt(h) ? readDigit({ h: Number.parseInt(h) }) : "",
        Number.parseInt(da + u) &&
        (Number.parseInt(h) || (hasPrintedSomething && depth === 0))
          ? "and"
          : "",
        Number.parseInt(da + u)
          ? readDigit({ dau: Number.parseInt(da + u) })
          : "",
        readDigit({ depth })
      ]).join(" ");
    }

    console.log(
      "---------\n",
      `chunkInLetters ${chunkInLetters}`,
      Number.parseInt(da + u),
      ` depth ${depth}`
    );
    // Keep track of previous chunks printed.
    // E.g. 1000001 => "one million and one"
    hasPrintedSomething = hasPrintedSomething || chunkInLetters.length > 0;

    depth--;
    return chunkInLetters;
  };
}

function normalize(numberAsString) {
  //filla di zeri il numero
  // let digits = !options
  //   ? numberInDigits.split()
  //   : ("0".repeat(3 - numberInDigits.length) + numberInDigits).split();
  console.log("typeof numberAsString", typeof numberAsString);
  if (numberAsString.length % 3)
    return "0".repeat(3 - (numberAsString.length % 3)) + numberAsString;
  return numberAsString;
}

function readDigit(readable) {
  const DEPTH = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion"
  ];

  const LESS_THAN_TWENTY = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];

  const TENTHS_LESS_THAN_HUNDRED = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  console.log("readable", readable);

  if (readable.dau >= 0) {
    return readable.dau >= 20
      ? readable.dau % 10 === 0
        ? TENTHS_LESS_THAN_HUNDRED[Math.floor(readable.dau / 10)]
        : [
            TENTHS_LESS_THAN_HUNDRED[Math.floor(readable.dau / 10)],
            LESS_THAN_TWENTY[readable.dau % 10]
          ].join("-")
      : LESS_THAN_TWENTY[readable.dau];
  } else if (readable.h >= 0) {
    return `${LESS_THAN_TWENTY[readable.h]} hundred`;
  } else if (readable.depth >= 0) {
    return DEPTH[readable.depth];
  }
}

export default numberInDigits => {
  // controlli:
  // togli tutti gli zeri a sx e a dx
  // controlla con una regex se è wellformed
  const DECIMAL_SEPARATOR = ".";
  let numberAsString = numberInDigits + "",
    dotPosition = numberAsString.indexOf(DECIMAL_SEPARATOR),
    decimalPart =
      dotPosition !== -1 ? numberAsString.slice(0, dotPosition) : "",
    integerPart =
      dotPosition !== -1
        ? numberAsString.slice(
            numberAsString.indexOf(DECIMAL_SEPARATOR),
            numberAsString.length - 1
          )
        : numberAsString;

  console.log({
    DECIMAL_SEPARATOR,
    numberAsString,
    dotPosition,
    decimalPart,
    integerPart
  });

  //procedurale per splittare i segmenti Look ahead
  const normalizedInteger = normalize(integerPart);
  const levels = normalizedInteger.length / 3 - 1;
  const chunks = _.chunk(normalizedInteger, 3);

  console.log({ chunks }, decimalPart.length ? "si" : "no");

  let result = _.compact([
    _.compact(chunks.map(convertChunk(levels))).join(" "),
    decimalPart.length
      ? decimalPart
          .split()
          .map(dau => readDigit({ dau: Number.parseInt(dau) }))
          .join()
      : ""
  ]).join(DECIMAL_SEPARATOR);
};
