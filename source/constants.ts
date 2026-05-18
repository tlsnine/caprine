import * as path from 'node:path';
import {fixPathForAsarUnpack} from 'electron-util';

export const mercuryIconPath = fixPathForAsarUnpack(path.join(__dirname, '..', 'static', 'Icon.png'));
