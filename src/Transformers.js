
/* 
  Text Effects definitions.
  Immutable data. Should never be changed.

*/

import Utils from "./Utils.js"


const Transformers = [

  {
    key: "removeDuplicateLines",
    text: `Remove duplicate lines`,
    descr: `This removes duplicate lines from your text.`,
    example: `Rolling Stones
Led Zeppelin
Led Zeppelin
Beatles
Rolling Stones
***Rolling Stones
Led Zeppelin
Beatles
`,
    slots: [
      {
        text: "Match all cases",
        type: "checkbox",
        descr: `Check this if you want to not only match "abcd", but also "ABCD", "aBcD", etc. (Recommended)`,
        key: "caseSensitive",
        checked: true,
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
      const result = Utils.removeDuplicateLines(lines, data.caseSensitive, data.ignoreWhiteSpace,
        data.ignoreWhiteSpace)
      const newLines = result.lines
      const newStr = Utils.linesToString(newLines, "\n")
      return {
        result: newStr,
      }
    },
  },


  {
    key: "prefix",
    text: `prefix`,
    descr: `Add a prefix to each line.`,
    example: `Han Solo
Luke Skywalker
Leia Organa`,
    slots: [
      {
        text: "prefix",
        type: "input",
        descr: ``,
        key: "prefix",
        checked: true,
      }
    ],
    do: (str, data) => {
      const lines = Utils.stringToLines(str)
      const newLines = Utils.prefixLines(lines, data.prefix)
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
    example: ``,
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
      return {
        result: str.toUpperCase()
      }
    },
  },




]







export default Transformers