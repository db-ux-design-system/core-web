import { mkdirSync, unlinkSync } from 'node:fs';
import { dirname } from 'node:path';
import { spawn } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';

/**
 * [API Reference](https://www.guidepup.dev/docs/api/class-windows-record)
 *
 * Start a screen recording on Windows.
 *
 * ```ts
 * import { windowsRecord } from "@guidepup/guidepup";
 *
 * (async () => {
 *   // Start the screen recording.
 *   const stopRecording = windowsRecord("./recordings/screenRecording.mp4");
 *
 *   // ... perform some commands.
 *
 *   // Stop the screen recording.
 *   stopRecording();
 * })();
 * ```
 *
 * @param {string} filepath The file path to save the screen recording to.
 * @returns {Function} A function to stop the screen recording.
 */
export function record(filepath: string): () => void {
	mkdirSync(dirname(filepath), { recursive: true });

	try {
		unlinkSync(filepath);
	} catch {
		// File doesn't exist.
	}

	const screencapture = spawn(ffmpegPath, [
		'-f',
		'gdigrab',
		'-framerate',
		'60',
		'-i',
		'desktop',
		'-pix_fmt',
		'yuv420p',
		'-vcodec',
		'mpeg4',
		filepath
	]);

	return () => {
		screencapture.stdin.write('q');
	};
}
