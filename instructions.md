# React App Prompt – English ↔ Hebrew Keyboard Fixer

## Prompt for Claude Code (VS Code)

Create a React (JavaScript) web app that fixes text typed in the wrong keyboard language between English and Hebrew.

### Tech Requirements
- React only (no Next.js, no backend)
- Single-page application
- Runs in a standard React setup (Vite or CRA)

### Features
1. A large textarea for user input
2. Two buttons:
   - **English → Hebrew**
   - **Hebrew → English**
3. On button click, convert the text using **keyboard character mapping** (not translation)
4. Display the corrected text in a second textarea or output box
5. “Copy to clipboard” button for the result
6. Handle empty input gracefully

### Logic
- Use a deterministic keyboard-mapping approach (QWERTY ↔ Hebrew layout)
- Do NOT use any translation APIs
- Conversion must be instant
- Comment the mapping logic clearly

### Design
- Very clean, modern, digital UI
- Minimalistic layout
- Light background
- Subtle shadows
- Rounded textareas and buttons
- Responsive design
- CSS included in the project (plain CSS or styled-components)

### Code Quality
- Clear component structure
- Use React hooks (`useState`)
- Keep code simple, readable, and well-commented

### Output Requirements
- Provide all React components
- Include all required CSS
- Assume no external dependencies beyond React
