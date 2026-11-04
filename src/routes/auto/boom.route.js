/**
 * GET /boom → triggers an error to exercise the global error handler.
 * Expected response: HTTP 500 + { error: true, message }
 * DEVOPS-9 — Nadjim KACEMI (étudiant C)
 */
import { Router } from 'express'

const router = Router()

router.get('/boom', (_req, _res, next) => {
  // On ne répond pas ici : l'erreur est transmise au middleware errorHandler
  const err = new Error('Boom! Simulated server error')
  err.status = 500
  next(err)
})

export default router
