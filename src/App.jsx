import { useState } from 'react'

// Keyboard mapping: QWERTY (English) <-> Hebrew layout
const EN_TO_HE = {
  'q': '/', 'w': "'", 'e': 'ק', 'r': 'ר', 't': 'א', 'y': 'ט', 'u': 'ו', 'i': 'ן', 'o': 'ם', 'p': 'פ',
  'a': 'ש', 's': 'ד', 'd': 'ג', 'f': 'כ', 'g': 'ע', 'h': 'י', 'j': 'ח', 'k': 'ל', 'l': 'ך', ';': 'ף',
  'z': 'ז', 'x': 'ס', 'c': 'ב', 'v': 'ה', 'b': 'נ', 'n': 'מ', 'm': 'צ', ',': 'ת', '.': 'ץ', '/': '.',
  "'": ',',
}

// Create reverse mapping (Hebrew -> English)
const HE_TO_EN = Object.fromEntries(
  Object.entries(EN_TO_HE).map(([en, he]) => [he, en])
)

// Convert text using a character map
function convertText(text, charMap) {
  return text
    .split('')
    .map(char => {
      const lower = char.toLowerCase()
      const mapped = charMap[lower]
      if (mapped) {
        // Preserve case for English letters
        return char === char.toUpperCase() && /[a-z]/.test(lower)
          ? mapped.toUpperCase()
          : mapped
      }
      return char
    })
    .join('')
}

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const handleConvert = (direction) => {
    if (!input.trim()) {
      setOutput('')
      return
    }
    const map = direction === 'en-to-he' ? EN_TO_HE : HE_TO_EN
    setOutput(convertText(input, map))
  }

  const handleCopy = async () => {
    if (output) {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="container">
      <h1>TypeFix</h1>
      <p className="subtitle">Typed in the wrong language? We’ve got you ^_~</p>
      <p className="subtitle">^_^ הקלדת בשפה הלא נכונה? אנחנו על זה</p>

      <textarea
        className="text-area"
        placeholder="Paste your text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => handleConvert('en-to-he')}>
          English → עברית
        </button>
        <button onClick={() => handleConvert('he-to-en')}>
          עברית → English
        </button>
      </div>

      <textarea
        className="text-area output"
        placeholder="Converted text will appear here..."
        value={output}
        readOnly
      />

      <button
        className="copy-btn"
        onClick={handleCopy}
        disabled={!output}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
}

export default App
