// Tasks
import { build } from './tasks/build';
import { watch } from './tasks/watch';
import { dev } from './tasks/dev';
import { generate } from "./tasks/generate";

exports.build = build;
exports.watch = watch;
exports.default = dev;
exports.generate = generate;
