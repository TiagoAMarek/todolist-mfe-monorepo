
import { describe, it, expect } from "vitest"
import { generateTimestampId } from '../generateTimestampId';

describe('generateTimestampId', () => {
  it('should return a string', () => {
    const result = generateTimestampId();
    expect(typeof result).toBe('string');
  });

  it('should return a string representation of a timestamp', () => {
    const result = generateTimestampId();
    const timestamp = parseInt(result, 10);
    expect(Number.isNaN(timestamp)).toBe(false);
  });

  it('should return the current timestamp', () => {
    const before = Date.now();
    const result = generateTimestampId();
    const after = Date.now();
    const timestamp = parseInt(result, 10);

    expect(timestamp).toBeGreaterThanOrEqual(before);
    expect(timestamp).toBeLessThanOrEqual(after);
  });
});
