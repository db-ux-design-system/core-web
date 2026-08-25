/**
 * Type augmentation for HTMLDialogElement.requestClose()
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/requestClose
 *
 * Adds the `requestClose()` method which issues a close request that can
 * be vetoed via the cancel event's preventDefault().
 *
 * TODO: Remove once the TypeScript lib used by Stencil includes this method; TypeScript needs to get updated at least to version 5.9.2 (most likely not before Stencil v5)
 */
interface HTMLDialogElement {
	requestClose(returnValue?: string): void;
}
