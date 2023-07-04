1. create repo

```
ng new a16_demos --routing --inline-style --strict=false --inline-template --skip-tests
```

2. Clear out default styles and just have page say 'Ready', stage, then commit these changes.
3. Push repo

4. Create Script (only if necessary, can skip this step if you use previously generated script)

```shell
node create-script.js
```

4. Update a14 to a16 in `generated-script.sh`

5. Run `generated-script.sh`

## Adjustments

### http demos

```shell
npm i json-server
```

```json
"api": "json-server ./api/db.json"
```
