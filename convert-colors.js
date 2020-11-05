const input = /*scss*/`
$blue:    hsl(211, 100%, 50%);
$indigo:  hsl(263, 90%, 51%);
$purple:  hsl(261, 51%, 51%);
$pink:    hsl(332, 79%, 58%);
$red:     hsl(354, 70%, 54%);
$orange:  hsl(27, 98%, 54%);
$yellow:  hsl(45, 100%, 51%);
$green:   hsl(134, 61%, 41%);
$teal:    hsl(162, 73%, 46%);
$cyan:    hsl(188, 78%, 41%);
`

const lines = input.split("\n")
let outputLines = []
let scssVarLines = []

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

        scssVarLines.push(`$${res[0]}: var(--${res[0]});`)
    }
}

console.log(outputLines.join("\n"))
console.log("/*---------------*/\n")
console.log(scssVarLines.join("\n"))