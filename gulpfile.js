'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  stylus = require('gulp-stylus'),
  nib = require('nib');

var styleFiles = './**/*.styl';

gulp.task('watch', function(e){
 
  gulp.watch(styleFiles, function(e){
    /* ... */
    var fileName = e.path.slice(e.path.lastIndexOf('/')),
        rootPath = e.path.replace(fileName, ''),
        pathDest = rootPath.slice(e.path.lastIndexOf('/stylus/') + 7),
        rootDest = './assets' + pathDest,
        filesStyl = rootPath + '/**/*.styl',
        assetsPath = rootPath + '/assets/**/!(*.styl)',
        assetsDest = rootDest + '/assets';



    gulp.src(assetsPath)
      .pipe(gulp.dest(assetsDest));

    gulp.src(filesStyl)
      .pipe(stylus({
      use: [nib()],
      set:['compress'],
      import: ['nib']
      }))
      .pipe(gulp.dest(rootDest));
  });

});

gulp.task('default', ['watch']);
