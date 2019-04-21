import _ from "lodash";
import numberToEnglish from "../model/numberToEnglish";

export default (req, res) => {
  // Prepare input to be processed
  // TODO: validation in middleware run before this controller

  const { numberInDigits } = req.params;
  res.send(numberToEnglish(Number.parseInt(numberInDigits.replace(/'/g, ""))));
};
