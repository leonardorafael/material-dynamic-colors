#!/usr/bin/env node
import materialDynamicColors from './index.js'

const [,, source] = process.argv

console.log("\nGenerating colors from", source)

const colors =
    await materialDynamicColors(source)
        .catch(error => {
            console.error(error)
            process.exit(1)
        })

Object.entries(colors).forEach(([themeName, themeColors]) => {
    console.log(`\n${themeName} theme:`)
    Object.entries(themeColors).forEach(([camelName, color]) => {
        const kebabName = camelName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        console.log(`\t--${kebabName}: ${color.toUpperCase()};`)
    })
})
