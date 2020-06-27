// Dependencies
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import twig from 'gulp-twig';
import errorHandler from '../util/errorHandler.js';
import beautify from 'gulp-jsbeautifier';

// Config
import { paths } from "../config";

// Task
export function defaultTemplates() {
    return src(paths.templates.defaultSrc)
        .pipe(plumber({errorHandler}))
        .pipe(twig())
        .pipe(beautify({
            indent_size: 2
        }))
        .pipe(dest(paths.templates.dest))
}
