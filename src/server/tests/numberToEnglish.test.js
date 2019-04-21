import numberToEnglish from "../model/numberToEnglish";

class Test {
  static assertEquals(cb, result, label) {
    test(label||result, () => {
      expect(cb).toBe(result);
    });
  }

  static expectError(label, cb) {
    test(label, () => {
      expect(cb).toThrow("NaN Exception");
    });
  }
}

Test.assertEquals(numberToEnglish(1), "one", "1 -> one");
Test.assertEquals(numberToEnglish(5), "five", "5 -> five");
Test.assertEquals(numberToEnglish(10), "ten", "10 -> ten");
Test.assertEquals(numberToEnglish(11), "eleven", "11 -> eleven");
Test.assertEquals(numberToEnglish(12), "twelve", "12 -> twelve");
Test.assertEquals(numberToEnglish(18), "eighteen", "18 -> eighteen");
Test.assertEquals(numberToEnglish(20), "twenty", "20 -> twenty");
Test.assertEquals(
  numberToEnglish(19000),
  "nineteen thousand",
  "19000 -> nineteen thousand"
);
Test.assertEquals(
  numberToEnglish(319000),
  "three hundred and nineteen thousand",
  "319000 -> don't forget the 'and'"
);
Test.assertEquals(
  numberToEnglish(1000000),
  "one million",
  "1000000 -> one million"
);
Test.assertEquals(
  numberToEnglish(1000001),
  "one million and one",
  "1000001 -> one million and one"
);
Test.assertEquals(
  numberToEnglish(1011011),
  "one million eleven thousand and eleven",
  "1011011 -> one million eleven thousand and eleven"
);
Test.assertEquals(
  numberToEnglish(1101101),
  "one million one hundred and one thousand one hundred and one",
  "all the ands"
);
Test.assertEquals(numberToEnglish(-6000006), "negative six million and six");
Test.assertEquals(
  numberToEnglish(100023999),
  "one hundred million twenty-three thousand nine hundred and ninety-nine"
);
Test.assertEquals(
  numberToEnglish(3.14159),
  "three point one four one five nine",
  "Decimal numbers count each digit"
);
Test.assertEquals(
  numberToEnglish(0.0001),
  "zero point zero zero zero one",
  "Include leading zeroes in decimals"
);
Test.assertEquals(
  numberToEnglish(-65721.55531),
  "negative sixty-five thousand seven hundred and twenty-one point five five five three one"
);
Test.assertEquals(numberToEnglish(0), "zero", "0 -> zero");
Test.assertEquals(
  numberToEnglish("6"),
  "six",
  "strings that evaluate to numbers are ok"
);
Test.assertEquals(
  numberToEnglish(Number.POSITIVE_INFINITY),
  "infinity",
  "positive infinity"
);
Test.assertEquals(
  numberToEnglish(Number.NEGATIVE_INFINITY),
  "negative infinity",
  "negative infinity"
);
Test.assertEquals(
  numberToEnglish(-50),
  "negative fifty",
  "Negative numbers should include the word 'negative' before the first digit."
);
Test.assertEquals(
  numberToEnglish(-1234567899),
  "negative one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety-nine",
  "1,234,567,899"
);
Test.expectError("NaN should throw an error.", function() {
  numberToEnglish(NaN);
});
