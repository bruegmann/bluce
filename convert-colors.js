const input = /*scss*/`
$white:    hsl(0, 0%, 100%);
$gray-100: hsl(210, 17%, 98%);
$gray-200: hsl(210, 16%, 93%);
$gray-300: hsl(210, 14%, 89%);
$gray-400: hsl(210, 14%, 83%);
$gray-500: hsl(210, 11%, 71%);
$gray-600: hsl(208, 7%, 46%);
$gray-700: hsl(210, 9%, 31%);
$gray-800: hsl(210, 10%, 23%);
$gray-900: hsl(210, 11%, 15%);
$black:    hsl(0, 0%, 0%);
`

const lines = input.split("\n")
let outputLines = []


for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    const regexp = /\$(.+?):( +?)hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g

    let res = regexp.exec(line)

    if (res) {

        res = res.slice(1)
        outputLines.push(`--${res[0]}-h: ${res[2]};`)
        outputLines.push(`--${res[0]}-s: ${res[3]};`)
        outputLines.push(`--${res[0]}-l: ${res[4]};`)
        outputLines.push(`--${res[0]}: hsl(var(--${res[0]}-h), var(--${res[0]}-s), var(--${res[0]}-l));`)
        outputLines.push("")
    }
}

console.log(outputLines.join("\n"))