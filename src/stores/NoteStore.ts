import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';

//the current note

export const currentNote: Writable<string | null> = writable(null);
export const currentNoteIndex: Writable<number | null> = writable(0);