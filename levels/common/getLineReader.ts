import { createReadStream } from 'fs';
import { createInterface } from 'readline/promises';

export function getLineReader(filePath: string) {
  return createInterface(createReadStream(filePath));
}
