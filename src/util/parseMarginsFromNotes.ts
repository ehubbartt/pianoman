import { WHITE_NOTES } from "../constants/notes"

export const parseMarginsFromNotes = (notes: string[] | null): number[] => {
  const margins: number[] = [];
  const baseIndex = WHITE_NOTES.indexOf("B");
  if (notes) {
    notes.forEach((note) => {
      let noteIndex = WHITE_NOTES.indexOf(note);
      if (note.length > 1) {
        let slicedNote = note.slice(0, -1);
        noteIndex = WHITE_NOTES.indexOf(slicedNote);
      }
      const indexDiff = baseIndex - noteIndex;
      const margin = indexDiff * 0.5;
      margins.push(margin);
    }
    );
  }
  return margins;
}