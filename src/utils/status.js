/**
 * Utility designed to create branch coverage.
 * Maps uptime (seconds) to a label.
 * DEVOPS-12 — Chaina SAKTOUN (étudiant D)
 */
export function formatStatus (uptimeSec) {
  // Refuse tout ce qui n'est pas un nombre valide et positif
  if (typeof uptimeSec !== 'number' || Number.isNaN(uptimeSec) || uptimeSec < 0) {
    throw new Error('invalid uptime')
  }
  if (uptimeSec < 60) return 'warming-up' // moins d'1 minute
  if (uptimeSec < 3600) return 'healthy' // moins d'1 heure
  return 'steady' // 1 heure ou plus
}
