transpile: 

```
babel script.js --out-file gist/script-compiled.js
```


to watch:

```
babel script.js --watch --out-file gist/script-compiled.js
```


------------------

Compile with Source Maps
If you would then like to add a source map file you can use --source-maps or -s. [Learn more about source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/).

```
$ babel script.js --out-file gist/script-compiled.js --source-maps
```

If you would rather have inline source maps, you may use --source-maps inline.

```
$ babel script.js --out-file gist/script-compiled.js --source-maps inline
```

------------------

if not using `.babelrc` :

```
babel --presets es2015 script.js --out-file gist/script-compiled.js
```


