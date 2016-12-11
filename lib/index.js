#!/usr/bin/env node
import meow from 'meow'
import uglify from 'uglify-js'
import fs from 'fs'
import path from 'path'
import shelljs from 'shelljs'

const cli = meow(`
  Usage
    $ uglify-dir <input-path> <output-path>

  Examples
    $ uglify-dir src/js dist/js
`, {
  alias: {
    h: 'help'
  }
})

if (cli.input.length === 2) {
  const n = cli.input[0]
  const o = cli.input[1]

  fs.readdir(n, 'utf8', (err, files) => {
    if (err) throw err

    files.map(file => {
      shelljs.exec(`node_modules/.bin/uglifyjs ${path.resolve(n, file)} -o ${path.resolve(o, file)} -c -m`)
    })
  })
} else {
  cli.showHelp()
}
