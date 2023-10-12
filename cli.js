#!/usr/bin/env node
import materialDynamicColors from './index.js'

const FORMATS = ['JSON', 'CSS']


let [,, source, format='JSON'] = process.argv

format = format.toUpperCase()

if (!FORMATS.includes(format)) {
    console.error(`Format must be one of: ${FORMATS.join(", ")}`)
    process.exit(1)
}
console.log(`\nGenerating ${format} colors from ${source}...`)

const colors =
    await materialDynamicColors(source)
        .catch(error => {
            console.error(`Error: ${error.message}`)
            process.exit(1)
        })

if (format === 'CSS') {
    Object.entries(colors).forEach(([themeName, themeColors]) => {
        console.log(`\n${themeName} theme:`)
        Object.entries(themeColors).forEach(([camelName, color]) => {
            const kebabName = camelName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            console.log(`\t--${kebabName}: ${color.toUpperCase()};`)
        })
    })
} else {
    console.log("\n", colors)
}
