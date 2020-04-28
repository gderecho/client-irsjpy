const gulp = require('gulp');
const exec = require('child_process').exec

gulp.task('generate-env', (callback) => {
    exec('bash ./generate_env.sh', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        callback()
    })
})
