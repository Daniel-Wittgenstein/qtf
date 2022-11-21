
/* 
  Text Effects definitions.
  Immutable data. Should never be changed.

*/

import Utils from "./Utils.js"


const Transformers = [

  {
    key: "removeDuplicateLines",
    text: `Remove duplicate lines`,
    descr: `This removes duplicate lines from your text. For example, if you have
    the line "Richard James" twice in your text, the second line will be removed.
    The lines don't have to be consecutive.`,
    slots: [
      {
        text: "Match all cases",
        type: "checkbox",
        descr: `Check this if you want to not only match "abcd", but also "ABCD", "aBcD", etc. (Recommended)`,
        key: "caseSensitive",
        checked: false,
      },

      {
        text: "Ignore superfluous whitespace",
        type: "checkbox",
        descr: `Check this if you want to treat \u00A0\u00A0\u00A0"\u00A0\u00A0some\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0words\u00A0\u00A0"\u00A0\u00A0\u00A0 and\u00A0\u00A0\u00A0"some words" as duplicate lines. (Recommended)`,
        key: "ignoreWhiteSpace",
        checked: true,
      },
    ],
    do: (str, data) => {
      const lines = Utils.stringToLines(str)
      const result = Utils.removeDuplicateLines(lines, data.caseInsensitive, data.ignoreWhiteSpace,
        data.ignoreWhiteSpace)
      const newLines = result.lines
      console.log(21, newLines)
      const newStr = Utils.linesToString(newLines, "\n")
      return {
        result: newStr,
      }
    },
  },

  {
    key: "test",
    text: `Just a test`,
    descr: `Some description ....`,
    slots: [
      {
        text: "Match all cases",
        type: "checkbox",
        descr: `Check this if you want to not only match "abcd", but also "ABCD", "aBcD", etc.`,
        key: "caseSensitive",
        checked: true,
      },
      {
        text: "some text",
        type: "input",
        descr: `Describe this input field`,
        key: "someIdKey",
        checked: false,
      },
    ],
    do: (str, data) => {
      return str.toUpperCase()
    },
  },



]







export default Transformers