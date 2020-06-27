/*
 * @title Templates
 * @description A task to compile templates via Twig.js
 */

// Dependencies
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import twig from 'gulp-twig';
import errorHandler from '../util/errorHandler.js';
import beautify from 'gulp-jsbeautifier';
import translate from 'gulp-translation';

// Config
import { paths } from "../config";

// Task
export function templates() {
  return src(paths.templates.src)
    .pipe(plumber({errorHandler}))
    .pipe(twig())
    .pipe(translate({
      locale: paths.src + '/locales/*.json',
      prefix: '\\[',
      suffix: ']'
    }))
    .pipe(beautify({
      indent_size: 2
    }))
    .pipe(dest(paths.templates.dest))
}
