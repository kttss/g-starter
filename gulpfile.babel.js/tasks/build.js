// Dependencies
import { series, parallel } from 'gulp';

// Tasks
import { clean } from './clean';
import { styles } from './styles';
import { scripts } from './scripts';
import { templates } from './templates';
import { defaultTemplates } from './defaultTemplates';
import { assets } from './assets';

// Config
import { paths } from "../config";

export const build = series(
  clean,
  parallel(styles, scripts, templates, defaultTemplates, assets)
);
