/**
 * Unit tests for src/utils/status.js.
 * Covers all branches for good branch coverage.
 */
import { describe, it, expect } from 'vitest'
import { formatStatus } from '../../src/utils/status.js'

describe('formatStatus', () => {
  it('throws on negative', () => {
    expect(() => formatStatus(-1)).toThrow('invalid uptime')
  })
  it('throws on non-number input', () => {
    expect(() => formatStatus('10')).toThrow('invalid uptime')
    expect(() => formatStatus(NaN)).toThrow('invalid uptime')
  })
  it('warming-up at 0s and 59s', () => {
    expect(formatStatus(0)).toBe('warming-up')
    expect(formatStatus(59)).toBe('warming-up')
  })
  it('healthy at exactly 60s', () => {
    expect(formatStatus(60)).toBe('healthy')
  })
  it('warming-up under 60s', () => {
    expect(formatStatus(10)).toBe('warming-up')
  })
  it('healthy under 1h', () => {
    expect(formatStatus(3599)).toBe('healthy')
  })
  it('steady at or after 1h', () => {
    expect(formatStatus(3600)).toBe('steady')
  })
})
