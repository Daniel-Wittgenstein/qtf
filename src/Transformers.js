
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
    text: `prefix lines`,
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
    text: `suffix lines`,
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
    text: `split into lines`,
    descr: `Splits text into several lines.`,
    example: `Austen, Shelley, Woolfe***Austen
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
    descr: `Removes all empty lines.`,
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
    key: "collapseEmptyLines",
    text: `collapse empty lines`,
    descr: `Collapses multiple empty lines into a single empty line.`,
    example: `Paris
    

    Texas***Paris

  Texas`,
    slots: [
    ],
    do: (str, data) => {
      let x = Utils.stringToLines(str)
      x = Utils.collapseDuplicateEmptyLineIntoOne(x)
      x = Utils.linesToString(x, "\n")
      return {
        result: x,
      }
    },
  },


  {
    key: "trimLines",
    text: `trim lines`,
    descr: `Removes whitespace (spaces, tabs, etc.) from the beginning or end of each line.`,
    example: `      \u00A0\u00A0\u00A0\u00A0The Wizard of Oz    \u00A0\u00A0\u00A0\u00A0
    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Return to Oz     ***The Wizard of Oz
Return to Oz`,
    slots: [
      {
        text: "beginning",
        type: "checkbox",
        descr: `Remove spaces at beginning of line.`,
        key: "begin",
        checked: true,
      },
      {
        text: "ending",
        type: "checkbox",
        descr: `Remove spaces at ending of line.`,
        key: "end",
        checked: true,
      },
    ],
    do: (str, data) => {
      let x = Utils.stringToLines(str)
      if (data.end) x = Utils.removeTrailingWhiteSpaces(x)
      if (data.begin) x = Utils.removeLeadingWhiteSpaces(x)
      x = Utils.linesToString(x, "\n")
      return {
        result: x,
      }
    },
  },


  {
    key: "removeDoubleSpaces",
    text: `remove double spaces`,
    descr: `Replaces duplicate spaces (and tabs) with one single space.`,
    example: `The\u00A0\u00A0\u00A0\u00A0Wizard of\u00A0\u00A0\u00A0Oz***The Wizard of Oz`,
    slots: [
    ],
    do: (str, data) => {
      return {
        result: Utils.collapseDuplicateWhiteSpaceIntoOneSingleSpace(str),
      }
    },
  },


  {
    key: "sort",
    text: `sort`,
    descr: `Sort lines alphabetically.`,
    example: `Bear
    Dog
    Cat
    Ant***Ant
    Bear
    Cat
    Dog`,
    slots: [
      {
        text: "reversed",
        type: "checkbox",
        descr: `Z to A`,
        key: "reversed",
        checked: false,
      },
      {
        text: "remove empty lines",
        type: "checkbox",
        descr: ``,
        key: "removeEmptyLines",
        checked: false,
      },
      {
        text: "trim lines",
        type: "checkbox",
        descr: `Remove leading and trailing spaces`,
        key: "trimLines",
        checked: false,
      },
    ],
    do: (str, data) => {
      let x = Utils.stringToLines(str)
      if (data.removeEmptyLines) {
        x = Utils.removeEmptyLines(x)
      }
      if (data.trimLines) {
        x = Utils.removeWhiteSpacesBothSides(x)
      }
      x = x.sort( (a, b) => {
        a = a.trim().toLowerCase()
        b = b.trim().toLowerCase()
        let result = 0
        if (a > b) {
          result = 1
        } else if (a < b) {
          result = -1
        }
        if (data.reversed) result = result * -1
        return result 
      })
      x = Utils.linesToString(x, "\n")
      
      return {
        result: x,
      }
    },
  },


]



export default Transformers



