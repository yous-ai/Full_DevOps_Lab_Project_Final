/**
 * GET /version → { version: "<package.json version>" }
 * Reads version from package.json to keep it source-of-truth.
 * DEVOPS-10 — Youssouf SAOULI (étudiant A)
 */
import { Router } from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Chemin absolu vers package.json (racine du projet)
const PKG_PATH = path.join(__dirname, '..', '..', '..', 'package.json')

const router = Router()

router.get('/version', (_req, res) => {
  // On relit le fichier à chaque appel : la version reste la source de vérité
  const { version } = JSON.parse(fs.readFileSync(PKG_PATH, 'utf-8'))
  res.status(200).json({ version })
})

export default router
