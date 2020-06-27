/*
 * @title Watch
 * @description A task to start the server and watch for changes.
 */

// Dependencies
import gulp from 'gulp';
import { series } from 'gulp';

// Tasks
import { reload, serve } from './server';
import { styles } from './styles';
import { scripts } from './scripts';
import { templates } from './templates';
import { defaultTemplates } from './defaultTemplates';
import { assets } from './assets';

// Config
import { paths } from "../config";

function watchFiles() {
  gulp.watch([paths.styles.watch, paths.styles.modules], styles);
  gulp.watch([paths.scripts.watch, paths.scripts.modules], series(scripts, reload));
  gulp.watch([paths.templates.watch, paths.templates.modules, paths.templates.watchDefault], series(templates, defaultTemplates, reload));
  gulp.watch(paths.assets.src, series(assets, reload));
}

export const watch = series(
  serve,
  watchFiles
);
