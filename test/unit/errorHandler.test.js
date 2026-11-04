/**
 * Unit tests for src/utils/errorHandler.js.
 * We stub a minimal `res` object to capture status and body.
 */
import { describe, it, expect } from 'vitest'
import { errorHandler } from '../../src/utils/errorHandler.js'

function makeRes () {
  return {
    statusCode: 0,
    body: null,
    status (code) { this.statusCode = code; return this },
    json (obj) { this.body = obj; return this }
  }
}

describe('errorHandler', () => {
  it('defaults to 500 with generic message', () => {
    const res = makeRes()
    errorHandler({}, {}, res, () => {})
    expect(res.statusCode).toBe(500)
    expect(res.body).toEqual({ error: true, message: 'Internal Server Error' })
  })

  it('uses provided status and message', () => {
    const res = makeRes()
    errorHandler({ status: 418, message: 'teapot' }, {}, res, () => {})
    expect(res.statusCode).toBe(418)
    expect(res.body).toEqual({ error: true, message: 'teapot' })
  })

  // DEVOPS-14 — Nadjim KACEMI : cas partiels
  it('keeps a custom status with the default message', () => {
    const res = makeRes()
    errorHandler({ status: 404 }, {}, res, () => {})
    expect(res.statusCode).toBe(404)
    expect(res.body).toEqual({ error: true, message: 'Internal Server Error' })
  })

  it('defaults to 500 when only a message is given', () => {
    const res = makeRes()
    errorHandler(new Error('db down'), {}, res, () => {})
    expect(res.statusCode).toBe(500)
    expect(res.body.message).toBe('db down')
  })

  it('handles an undefined error', () => {
    const res = makeRes()
    errorHandler(undefined, {}, res, () => {})
    expect(res.statusCode).toBe(500)
  })
})
