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

`npm run serve` will use [live-server](https://github.com/tapio/live-server) to run a little development server with live reload capability

view at: http://localhost:8888/

------------------

## end

once all working as desired, navigate to the gist folder: `cd gist`

1. replace `thumbnail.png` (or delete it if not using thumbnail on blocks)
2. replace `preview.png` (or delete it if not using social media preview)
3. update `README.md`

finally create the gist: `gistup -m 'd3 | your title'`

**NOTES** 
- for further options using gistup: https://github.com/mbostock/gistup
- If you want .script-compiled.js to be shown once you push the gist to the block, rename it to `script-compiled.js` and update the corresponding script tag in `index.html`

------------------
