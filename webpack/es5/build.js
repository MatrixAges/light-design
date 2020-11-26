const child_process = require('child_process')

child_process.exec('tsc --project ./compile.tsconfig.json')
