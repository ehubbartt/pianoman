import type { sheetMusicType } from 'src/types/sheetMusicType';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const musicStore: Writable<sheetMusicType> = writable({
  name: null,
  type: null,
  icon: null,
  url: null,
  sheet: null,
});