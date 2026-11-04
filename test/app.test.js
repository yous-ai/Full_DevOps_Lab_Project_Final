/**
 * Integration tests for the base routes of src/app.js.
 */
import request from 'supertest'
import app from '../src/app.js'
import { describe, it, expect } from 'vitest'

describe('GET /', () => {
  it('returns a JSON greeting', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/application\/json/)
    expect(res.body.ok).toBe(true)
  })
})

describe('GET /health', () => {
  it('returns the text OK', async () => {
    const res = await request(app).get('/health')
    expect(res.text).toBe('OK')
  })
})

describe('Unknown route', () => {
  it('returns 404', async () => {
    const res = await request(app).get('/does-not-exist')
    expect(res.status).toBe(404)
  })
})
