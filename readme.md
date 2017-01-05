# wtf

set up for me to create code sketches for bl.ocks.org using es6 syntax

------------------

## start

Run: `npm update` in the console to install npm modules

------------------

## transpile es6 code using [buble](https://gitlab.com/Rich-Harris/buble): 

`npm run build` will compile using the below script:

```
buble gist/script.js > gist/script-compiled.js
```


**NOTE:** To generate separate sourcemap files – i.e. an `output.js.map` file to go along with `output.js` – use the  `--sourcemap` or `-m` flag:

```
buble -i input.js -m -o output.js
```


------------------

## local server

`npm run serve` will use [simple-autoreload-server](https://www.npmjs.com/package/simple-autoreload-server) to run a simple web server on Node.js with Live/Autoreload feature

view at: http://localhost:3000/

------------------

## end

once all working as desired, navigate to the gist folder: `cd gist` 

1. replace `thumbnail.png` (or delete it if not using thumbnail on blocks)
2. update `README.md`

finally create the gist: `gistup -m 'd3 | your title'`

**NOTE** for further options using gistup: https://github.com/mbostock/gistup

------------------

