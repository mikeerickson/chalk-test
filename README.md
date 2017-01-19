Reproducible Steps

1. clone 
	
2. npm install (install default dependencies)
   - This will install `chalk 1.1.3`
3. Build 
   - `npm run build`
4. All is good
5. `npm install chalk/chalk#256-truecolor`
6. Build `npm run build`

You should now see the error

```
ERROR in bundle.js from UglifyJs
SyntaxError: Unexpected token: operator (>) [./~/ansi-styles/index.js:4,0]
 ~/documents/projects/dev/litterbox/es6 
```