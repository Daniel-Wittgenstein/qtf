
/* 
  Text Effects definitions.

*/

import Utils from "./Utils.js"


const Transformers = [

  {
    text: `Remove duplicate lines`,
    descr: `This removes duplicate lines from your text. For example, if you have
    the line "John Mayer" twice in your text, the second line will be removed.
    The lines don't have to be consecutive.`,
    slots: [
      {
        text: "Match all cases",
        type: "checkbox",
        descr: `Check this if you want to not only match "abcd", but also "ABCD", "aBcD", etc.`,
        key: "caseSensitive",
        checked: true,
      },

      {
        text: "Ignore superfluous whitespace",
        type: "checkbox",
        descr: `Check this if you want to treat "  some   words " and "some words" as duplicate lines.`,
        key: "ignoreWhiteSpace",
        checked: true,
      },
    ],
    do: (str, data) => {
      const lines = Utils.stringToLines(str)
      const newLines = Utils.removeDuplicateLines(lines, data.caseInsensitive, data.ignoreWhiteSpace,
        data.ignoreWhiteSpace)
      const newStr = Utils.linesToString(newLines)
      return {
        result: newStr,
      }
    },
  },



]







export default Transformers