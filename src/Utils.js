

/* Text manipulation functions.
Everything here is 100% stateless.
*/

const Utils = {
  prefixLines: (lines, prefix = "") => {
    return lines.map(line => prefix + line)
  },

  suffixLines: (lines, prefix = "") => {
    return lines.map(line => line + prefix)
  },

  removeLineBreaks: (str) => {
    return str.replaceAll("\n", "")
  },

  removeLineBreaksSmart: (str) => {
    str = str.replaceAll("\n", " ")
    return Utils.collapseDuplicateWhiteSpaceIntoOneSingleSpace(str)
  },

  collapseDuplicateWhiteSpaceIntoOneSingleSpace: (str) => {
    return Utils.collapseDuplicateCharsIntoOneTargetChar(
      str,
      (char) => char.trim() === "" && char !== "\n", //match every whitespace except line breaks
      " "
    )
  },

  collapseDuplicateSpacesIntoOneSingleSpace: (str) => {
    return Utils.collapseDuplicateCharsIntoOneTargetChar(
      str,
      (char) => char === " ", //match only spaces, not tabs ot other whitespace
      " "
    )
  },

  collapseDuplicateCharsIntoOneTargetChar: (str, matchFunc, target = " ") => {
    /* 
    1. str: string: input string
    2. multipleFunc: gets passed each character as string of length 1:
      should return truthy value for characters you want to count
      as duplicate: they get collapsed into a single character "target" (3. parameter)
      note that this can match different characters as duplicate, for example
      whitespace characters.
    3. target: string: string that is used as replacement 
    */
    let nuStr = ""
    let prevMatch = false
    for (let char of nuStr) {
      if ( matchFunc(char) ) {
        if (!prevMatch) {
          nuStr += target
        }
        prevMatch = true
      } else {
        nuStr += char
        prevMatch = false
      }
    }
    return nuStr
  },


  escapeRegEx: (str) => {
    // eslint-disable-next-line no-useless-escape
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  },

  createRegExFromString: (str, flags = "") => {
    str = Utils.escapeRegEx(str)
    return new RegExp(str, flags)
  },

  insertLineBreakAfterEachOccurrence: (str, needle, caseSensitive) => {
    return Utils.insertAfterEachOccurrence(str, needle, "\n", caseSensitive)
  },

  insertLineBreakBeforeEachOccurrence: (str, needle, caseSensitive) => {
    return Utils.insertBeforeEachOccurrence(str, needle, "\n", caseSensitive)
  },

  getCaseFlags: (caseSensitive) => {
    return caseSensitive ? "g" : "gi"
  },

  insertAfterEachOccurrence: (str, needle, replacedWith, caseSensitive = false) => {
    const flags = Utils.getCaseFlags(caseSensitive)
    const needleReg = Utils.createRegExFromString(needle, flags)
    return str.replace(needleReg, replacedWith + needle)
  },

  insertBeforeEachOccurrence: (str, needle, replacedWith, caseSensitive = false) => {
    const flags = Utils.getCaseFlags(caseSensitive)
    const needleReg = Utils.createRegExFromString(needle, flags)
    return str.replace(needleReg, needle + replacedWith)
  },

  replaceWith: (str, needle, replacedWith, caseSensitive = false) => {
    const flags = Utils.getCaseFlags(caseSensitive)
    const needleReg = Utils.createRegExFromString(needle, flags)
    return str.replace(needleReg, replacedWith)
  },

  replaceWithIf: (str, needle, replacedWith, caseSensitive = false, ifFunc = () => {}) => {
    //Ersetzt match nur, wenn Funktion truthy value zurückgibt.
    //An Funktion wird folgendes übergeben: matchedString, offset (Index)
    const flags = Utils.getCaseFlags(caseSensitive)
    const needleReg = Utils.createRegExFromString(needle, flags)
    return str.replace(needleReg, (match, offset) => {
      const result = ifFunc(match, offset)
      if (result) return replacedWith
      return needle
    })
  },

  replaceWithIfBefore: (str, needle, replacedWith, caseSensitive, conditionalString, negated) => {
    //Ersetze Suchergebnis mit einem String, wenn und nur wenn vor dem gefundenen
    //String conditionalString steht/nicht steht.
    const func = (match, offset) => {
      const stringBefore = str.substring(0, offset - 1) //-1 or -0?
      let cond = stringBefore.endsWith(conditionalString)
      if (negated) cond = !cond
      return cond
    }
    return Utils.replaceWithIf(str, needle, replacedWith, caseSensitive, func)
  },

  replaceWithIfAfter: (str, needle, replacedWith, caseSensitive, conditionalString, negated) => {
    //Ersetze Suchergebnis mit einem String, wenn und nur wenn auf den gefundenen
    //String conditionalString folgt/nicht folgt.
    const func = (match, offset) => {
      const stringAfter = str.substring(offset + match.length) //index correct?
      let cond = stringAfter.startsWith(conditionalString)
      if (negated) cond = !cond
      return cond
    }
    return Utils.replaceWithIf(str, needle, replacedWith, caseSensitive, func)
  },



  countChars: (str) => {
    return str.length
  },

  countLines: (lines) => {
    return lines.length
  },

  countWords: (str) => {
    return Utils.stringToWords(str).length
  },

  stringToWords: (str) => {
    return str.split(" ").map(n => n.trim()).filter(n => n)
  },

  removeEmptyLines: (lines) => {
    return lines.filter(n => n.trim() !== "")
  },

  collapseDuplicateEmptyLineIntoOne: (lines) => {
    const nuLines = []
    let previousEmpty = false
    for (const line of lines) {
      if (line.trim() === "") {
        if (!previousEmpty) {
          nuLines.push(line)
        }
        previousEmpty = true
      } else {
        nuLines.push(line)
        previousEmpty = false
      }
    }
    return nuLines
  },

  removeTrailingWhiteSpaces: (lines) => {
    return lines.map(n => n.trimEnd())
  },

  removeLeadingWhiteSpaces: (lines) => {
    return lines.map(n => n.trimStart())
  },


  removeWhiteSpacesBothSides: (lines) => {
    return lines.map(n => n.trim())
  },



  linesToString: (lines, joinWith = " ") => {
    if (!lines) {
      throw new Error(`linesToString: no valid lines`)
    }
    return lines.join(joinWith)
  },


  stringToLines: (str, separator = "\n") => {
    return str.split(separator)
  },

  removeDuplicateLines: (lines, caseInsensitive = true, trimmedMatch = true,
      duplicateWhiteSpaceCollapseMatch = true) => {
    const hash = new Set()
    const info = {
      removed: [],
    }
    lines = lines.filter( (line, index) => {
      console.log(hash, line)
      if (caseInsensitive) {
        line = line.toLowerCase()
      }
      if (trimmedMatch) {
        line = line.trim()
      }
      if (duplicateWhiteSpaceCollapseMatch) {
        //line = Utils.collapseDuplicateWhiteSpaceIntoOneSingleSpace(line) //buggy. fix
      }
      if ( hash.has(line) ) {
        info.removed.push({
          line,
          index,
        })
        return false
      }
      
      hash.add(line)
      return true
    })
    return {
      lines,
      info,
    }
  },
}

export default Utils