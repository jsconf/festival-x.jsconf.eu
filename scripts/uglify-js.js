const execSync = require('child_process').execSync;
const find = require('find');

find.file(/main\.js$/, 'build/', files => {
  files.forEach(file => {
    console.log('Uglifying ' + file);
    console.log(execSync('node node_modules/uglify-es/bin/uglifyjs ' +
        ['--compress', '--mangle', '--toplevel', '-o', file, '--', file].join(' '))
        .toString('utf8'));
  });
});
