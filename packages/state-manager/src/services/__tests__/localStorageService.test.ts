import { describe, expect, it, beforeEach } from "vitest";
import { LocalStorageService } from '../localstorage';

describe('LocalStorageService', () => {
  let service: ReturnType<typeof LocalStorageService>;

  beforeEach(() => {
    service = LocalStorageService();
    localStorage.clear();
  });

  it('should store value in local storage', () => {
    service.set('testKey', { data: 'testData' });
    const prop = localStorage.getItem('testKey') ?? '';
    expect(JSON.parse(prop)).toEqual({ data: 'testData' });
  });

  it('should retrieve value from local storage', () => {
    localStorage.setItem('testKey', JSON.stringify({ data: 'testData' }));
    expect(service.get('testKey')).toEqual({ data: 'testData' });
  });

  it('should return null if no value is found', () => {
    expect(service.get('nonExistentKey')).toBeNull();
  });
});
