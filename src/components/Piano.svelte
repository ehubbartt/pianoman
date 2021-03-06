<script lang="ts">
	import {
		KEYBOARD_BLACK_KEYS,
		NOTES,
		KEYBOARD_WHITE_KEYS,
		BLACK_NOTES,
		WHITE_NOTES
	} from '../constants/notes';
	import { currentNote, currentNoteIndex } from '../stores/NoteStore';
	import { musicStore } from '../stores/MusicStore';

	let keyRefs: any = [];
	let audioRefs: any = [];

	$: pressedKey = '';

	$: {
		if ($musicStore.sheet) {
			currentNote.set($musicStore.sheet[0]);
		}
	}

	const handleMouseDown = (index: number) => {
		pressedKey = NOTES[index];
		const curKeyRef = keyRefs[index];

		if (curKeyRef instanceof HTMLElement) {
			const curAudioRef = audioRefs[index];
			if (curAudioRef) {
				curAudioRef.currentTime = 0;
				curAudioRef.play();
			}
		}

		if ($musicStore.sheet) {
			if (pressedKey === $currentNote) {
				const curIndex = $currentNoteIndex || 0;
				const nextIndex = curIndex + 1;
				currentNoteIndex.set(nextIndex);

				if (nextIndex > $musicStore.sheet.length - 1) {
					handleMusicComplete();
					return;
				}

				currentNote.set($musicStore.sheet[nextIndex]);
			}
		}
	};

	const handleMusicComplete = () => {
		
		if ($musicStore.sheet) {
			if ($musicStore.url !== null) {
				window.open(new URL($musicStore.url), '_blank')?.focus();
			}
			currentNote.set($musicStore.sheet[0]);
			currentNoteIndex.set(0);
		}
	};

	const handleMouseUp = () => {
		pressedKey = '';
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		const key = event.key;
		const whiteNoteIndex = KEYBOARD_WHITE_KEYS.indexOf(key);
		const blackNoteIndex = KEYBOARD_BLACK_KEYS.indexOf(key);

		if (whiteNoteIndex > -1) {
			handleMouseDown(NOTES.indexOf(WHITE_NOTES[whiteNoteIndex]));
		} else if (blackNoteIndex > -1) {
			handleMouseDown(NOTES.indexOf(BLACK_NOTES[blackNoteIndex]));
		}
	};

	const handleKeyUp = () => {
		handleMouseUp();
	};
</script>

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />
<div class="piano-container">
	{#each NOTES as item, i}
		<div
			bind:this={keyRefs[i]}
			data-note={item}
			class={item.length < 2 ? 'key white' : 'key black'}
			class:pressed={pressedKey === item}
			class:next={$currentNote === item}
			on:mouseup={() => handleMouseUp()}
			on:mousedown={() => handleMouseDown(i)}
		/>
	{/each}
</div>

{#each NOTES as item, i}
	<audio bind:this={audioRefs[i]} id={item} src={`src/assets/notes/${item}.mp3`} />
{/each}

<style>
	:root {
		--white-key-width: 4rem;
		--white-key-height: calc(var(--white-key-width) * 4);
		--black-key-width: 2rem;
		--black-key-height: calc(var(--black-key-width) * 4);
		--box-shadow-height: 5px;
	}

	.piano-container {
		display: flex;
		max-height: var(--white-key-height);
	}

	.white {
		border: 1px solid #000;
		width: var(--white-key-width);
		height: var(--white-key-height);
		background: linear-gradient(to bottom, #eee 0%, #fff 100%);
		border-radius: 0 0 5px 5px;
		box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
			0 0 3px rgba(0, 0, 0, 0.2);
	}

	.white:first-child {
		border-radius: 5px 0 5px 5px;
	}

	.white:last-child {
		border-radius: 0 5px 5px 5px;
	}

	.white:hover:not(.next) {
		background: #ececec;
	}

	.white.next:hover,
	.black.next:hover {
		background: hsl(60, 59%, 67%);
	}

	.black {
		border: 1px solid #000;
		width: var(--black-key-width);
		height: var(--black-key-height);
		background: linear-gradient(45deg, #222 0%, #555 100%);
		z-index: 100;
		box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
			0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5);
		margin-left: calc(var(--black-key-width) / -2);
		margin-right: calc(var(--black-key-width) / -2);
		border-radius: 0 0 3px 3px;
	}

	.black:hover:not(.next) {
		background: rgb(47, 47, 47);
	}

	.key {
		cursor: pointer;
		transition: box-shadow 0.2s ease-in-out;
		position: relative;
	}

	.pressed.white {
		box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset,
			0 0 3px rgba(0, 0, 0, 0.2);
	}

	.pressed.black {
		box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
			0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
	}

	.next {
		background: hsl(60, 82%, 74%);
	}

</style>
