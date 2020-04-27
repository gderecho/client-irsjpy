const gulp = require('gulp');
const exec = require('child_process').exec

gulp.task('replace', (callback) => {
    exec('node ./replace.js', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        callback()
    })
})
