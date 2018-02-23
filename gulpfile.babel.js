import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import nodemon from 'gulp-nodemon';
import path from 'path';

const plugins = loadPlugins();


const paths = {
    js: ['./**/*.js', '!dist/**', '!node_modules/**']
};


gulp.task('babel', () => {
    return gulp.src(paths.js, { base: '.' })
        .pipe(plugins.babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', ['babel'], () =>
    plugins.nodemon({
        script: path.join('dist', 'index.js'),
        ext: 'js',
        ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
        tasks: ['babel']
    })
);