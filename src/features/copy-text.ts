function copyTextString(text: string) {
  navigator.clipboard.writeText(text);
  return;
}
/**
 * Copy the text of a React element to the clipboard
 *
 * @param props The text to copy to the clipboard
 * @returns A boolean indicating whether the text was copied to the clipboard
 */
export function copyText(text?: string | null): text is string {
  if (typeof text === 'string') {
    copyTextString(text);
    return true;
  }
  return false;
}
