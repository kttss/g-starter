// Paths
export const paths = {
  src: './src',
  dest: './dist',
  deploy: './dist/**/*',
  styles: {
    src: 'src/scss/main.scss',
    watch: 'src/scss/**/*.scss',
    modules: 'src/modules/**/*.scss',
    dest: 'dist/assets/css',
    lint: 'src/scss/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/js/app.js',
    watch: 'src/js/**/*.js',
    modules: 'src/modules/**/*.js',
    dest: 'dist/assets/js',
  },
  templates: {
    defaultSrc: 'src/views/*.{twig,html}',
    src: 'src/views/pages/*.{twig,html}',
    watch: 'src/views/**/*.{twig,html}',
    watchDefault: 'src/views/*.{twig,html}',
    modules: 'src/modules/**/*.{twig,html}',
    dest: 'dist/'
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets'
  }
};
