// let versionPrefix = "a16";
// let directoryName = `${versionPrefix}_demos`;
// let rootDirectory = `~/Documents/git/${versionPrefix}`;
// const destinationDirectory = `${rootDirectory}/${directoryName}`;

let demoBranches = [
  "attribute-directive",
  "cdk-drag-drop-basic",
  "cdk-drag-drop-reorder-list",
  "cdk-virtual-scrolling",
  "change-detection",
  "component-first",
  "component-nesting",
  "component-styles",
  "data-binding",
  "dynamic-components",
  "event-binding",
  "http-error-handling",
  "http-get",
  "http-get-concatMap",
  "http-get-concatMap1",
  "http-get-forkJoin",
  "http-retry",
  "http-start",
  "input-property",
  "interpolation",
  "introduction",
  "json-pipe",
  "lifecycle-basic",
  "lifecyle-contentinit",
  "lifecyle-viewinit",
  "module-declarations",
  "module-imports-exports",
  "ngClass",
  "ngFor",
  "ngIf",
  "ngrx-counter",
  "ngStyle",
  "ngSwitch",
  "output-events",
  "pipes",
  "property-binding",
  "reactive-forms-binding",
  "reactive-forms-custom-validator",
  "reactive-forms-validation",
  "routing-basics",
  "routing-child-routes",
  "routing-lazy-loading-module",
  "routing-navigation",
  "routing-navigation-start",
  "rxjs-behaviorsubject",
  "rxjs-observables-1",
  "rxjs-observables-2",
  "rxjs-observables-3",
  "rxjs-observer",
  "rxjs-operators-filter",
  "rxjs-operators-filter-1",
  "rxjs-operators-map",
  "rxjs-operators-switchMap",
  "rxjs-practical",
  "rxjs-subject-multicast",
  "rxjs-subject-observable-unicast",
  "rxjs-subscription",
  "services",
  "template-forms-binding",
  "template-forms-validation",
  "template-forms-validation-messages",
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
cp -r ~/Documents/git/a16/a_demos/${b}/* ~/Documents/git/a16/a16_demos/
cd ~/Documents/git/a16/a16_demos/
git checkout -b ${b}
git add .
git commit -m "${b}"
git push --set-upstream origin ${b}

git checkout main
git clean -df
cd ~/Documents/git/a16/a_demos/ 

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
