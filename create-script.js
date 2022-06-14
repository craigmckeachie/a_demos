let versionPrefix = "a14";
let directoryName = `${versionPrefix}_demos`;
let rootDirectory = `~/Documents/git/${versionPrefix}`;
const destinationDirectory = `${rootDirectory}/${directoryName}`;

// let demoBranches = [
//   "attribute-directive",
//   "change-detection",
//   "dynamic-components",
//   "http-error-handling",
//   "http-get",
//   "http-get-concatMap",
//   "http-get-concatMap1",
//   "http-get-forkJoin",
//   "http-retry",
//   "http-start",
//   "input-property",
//   "lifecycle-basic",
//   "lifecyle-contentinit",
//   "lifecyle-viewinit",
//   "main",
//   "ngrx-counter",
//   "rxjs-behaviorsubject",
//   "rxjs-observables-1",
//   "rxjs-observables-2",
//   "rxjs-observables-3",
//   "rxjs-observer",
//   "rxjs-operators-filter",
//   "rxjs-operators-filter-1",
//   "rxjs-operators-map",
//   "rxjs-operators-switchMap",
//   "rxjs-practical",
//   "rxjs-subject-multicast",
//   "rxjs-subject-observable-unicast",
//   "rxjs-subscription",
// ];

let demoBranches = [
  "attribute-directive",
  "dynamic-components",
  "input-property",
  "lifecycle-basic",
  "lifecyle-contentinit",
  "lifecyle-viewinit",
  "ngrx-counter",
  "rxjs-behaviorsubject",
  "rxjs-observer",
  "rxjs-operators-filter",
  "rxjs-operators-filter-1",
  "rxjs-operators-map",
  "rxjs-operators-switchMap",
  "rxjs-practical",
  "rxjs-subject-multicast",
  "rxjs-subject-observable-unicast",
  "rxjs-subscription",
];

branches = [...demoBranches];

let scripts = [];
scripts.push(
  `#!/bin/bash
`
);

let counter = 0;
branches.forEach((b) => {
  counter++;

  scripts.push(`
cp -r ~/Documents/git/a14/a_demos/advanced/${b}/* ~/Documents/git/a14/a14_demos/
cd ~/Documents/git/a14/a14_demos/
git checkout -b ${b}
git add .
git commit -m "${b}"
git push --set-upstream origin ${b}

git checkout main
cd ~/Documents/git/a14/a_demos/ 

    `);
});

script = scripts.join("");

//Write script file
let fs = require("fs");
let fileName = "generated-script.sh";
fs.writeFile(fileName, script, function (err, data) {
  if (err) console.log(err);
  console.log(`Successfully wrote script file to: ${fileName}`);
});
