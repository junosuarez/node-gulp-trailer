# gulp-trailer
add a file to a source stream after all others are done

## usage
```js
var gulpTrailer = require('gulp-trailer')
var gulp = require('gulp')

var files = []

gulp.src('./**/*.js')
  .on('data', function (x) {
    files.push(x.path)
  })
  .pipe(trailer('./manifest.json', function (cb) {
    cb(null, JSON.stringify(files))
  }))
  .pipe(gulp.dest('./dest'))
```
this example keeps a list of all files written and then creates a `manifest.json` file with an array of all their paths


## api

### `trailer(filename: String, endFn : Function) => VinylThroughStream`

call `trailer` with a `filename` for the new file you want to add and an asynchronous `endFn` which will be used to return the contents of the file.

Your `endFn` should call its callback with a `String`, a `Buffer` or a `Stream`.

## installation

    $ npm install gulp-trailer


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXIV jden <jason@denizac.org>. See LICENSE.md
