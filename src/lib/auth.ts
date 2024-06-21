import { writable } from 'svelte/store';

const password = 'XXXXXX';
export const authenticated = writable(false);

export function attemptAuth(input: string): void {
  if (input === password) {
    authenticated.set(true);
  }
}
