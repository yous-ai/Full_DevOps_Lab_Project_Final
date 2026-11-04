/**
 * GET /info → merges two small helpers for easy unit testing.
 * Returns: { name, version, node, uptime }
 * DEVOPS-11 — Youssouf SAOULI (étudiant B)
 */
import { Router } from 'express'
import { getPackageInfo, getRuntimeInfo } from '../../utils/appInfo.js'

const router = Router()

router.get('/info', (_req, res) => {
  // name + version (package.json) et node + uptime (processus en cours)
  const { name, version } = getPackageInfo()
  const { node, uptime } = getRuntimeInfo()
  res.status(200).json({ name, version, node, uptime })
})

export default router
