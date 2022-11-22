
/* 
  Text Effects definitions.
  Immutable data. Should never be changed.

*/

import Utils from "./Utils.js"


const Transformers = [

  {
    key: "removeDuplicateLines",
    text: `remove duplicate lines`,
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
        descr: `Treat "abcd", "ABCD", "aBcD", etc. the same`,
        key: "caseSensitive",
        checked: true,
      },

      {
        text: "Ignore superfluous whitespace",
        type: "checkbox",
        descr: `Treat \u00A0\u00A0\u00A0"\u00A0\u00A0some\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0words\u00A0\u00A0"\u00A0\u00A0\u00A0 and\u00A0\u00A0\u00A0"some words" the same.`,
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
    descr: `Add text to the beginning of each line.`,
    example: `Han Solo
Luke Skywalker
Leia Organa***Name: Han Solo
Name: Luke Skywalker
Name: Leia Organa`,
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
    key: "suffix",
    text: `suffix`,
    descr: `Add text at the end of each line.`,
    example: `Han Solo
Luke Skywalker
Leia Organa***Han Solo (fictional character)
Luke Skywalker (fictional character)
Leia Organa (fictional character)`,
    slots: [
      {
        text: "suffix",
        type: "input",
        descr: ``,
        key: "suffix",
        checked: true,
      }
    ],
    do: (str, data) => {
      const lines = Utils.stringToLines(str)
      const newLines = Utils.suffixLines(lines, data.suffix)
      const newStr = Utils.linesToString(newLines, "\n")
      return {
        result: newStr,
      }
    },
  },

  {
    key: "joinLines",
    text: `join lines`,
    descr: `Joins all lines into one line.`,
    example: `Austen
Shelley
Woolfe***Austen, Shelley, Woolfe`,
    slots: [
      {
        text: "join with",
        type: "input",
        descr: `Join lines with this text.`,
        value: `, `,
        key: "replWith",
      },
      {
        text: "Remove empty lines",
        type: "checkbox",
        descr: `Also remove empty lines.`,
        key: "removeEmptyLines",
        checked: true,
      },
      {
        text: "Trim lines",
        type: "checkbox",
        descr: `Also remove whitespace from beginning and ending of each line.`,
        key: "trim",
        checked: true,
      },
    ],
    do: (str, data) => {
      let x = Utils.stringToLines(str)
      if (data.removeEmptyLines) x = Utils.removeEmptyLines(x)
      if (data.trim) x = Utils.removeWhiteSpacesBothSides(x)
      x = Utils.linesToString(x, data.replWith)

      return {
        result: x,
      }
    },
  },


  {
    key: "splitLine",
    text: `split line`,
    descr: `Splits text into several lines.`,
    example: `Austen, Shelley, Woolfe***
Austen
Shelley
Woolfe`,
    slots: [
      {
        text: "split at",
        type: "input",
        descr: `Split lines at this text.`,
        value: `, `,
        key: "splitAt",
      },
    ],
    do: (str, data) => {
      return {
        result: str.replaceAll(data.splitAt, "\n"),
      }
    },
  },


  {
    key: "removeEmptyLines",
    text: `remove empty lines`,
    descr: `Remove empty lines.`,
    example: `Paris
    

    Texas***Paris
Texas`,
    slots: [
    ],
    do: (str, data) => {
      let x = Utils.stringToLines(str)
      x = Utils.removeEmptyLines(x)
      x = Utils.linesToString(x, "\n")
      return {
        result: x,
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