import { mkdir, rename, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const site = process.argv[2]
if (!['clinic', 'ecosystem', 'shop'].includes(site)) {
  throw new Error('Choose clinic, ecosystem, or shop.')
}

const output = resolve('dist-sites', site)
const nested = resolve(output, site)
await mkdir(output, { recursive: true })
await rename(resolve(nested, 'index.html'), resolve(output, 'index.html'))
await rm(nested, { recursive: true, force: true })
