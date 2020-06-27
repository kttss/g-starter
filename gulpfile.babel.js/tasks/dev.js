// Dependencies
import { series } from 'gulp';

// Tasks
import { build } from './build';
import { watch } from './watch';

export const dev = series(
  build,
  watch
);
