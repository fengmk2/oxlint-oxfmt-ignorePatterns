# ignorePatterns debug

Issues: Found an inconsistency between oxfmt and oxlint: oxlint reads ignorePatterns relative to cwd, while oxfmt reads ignorePatterns relative to the configuration file.

oxfmt:

```bash
pnpm dlx oxfmt -c ./node_modules/.vite/.oxfmtrc.json --check
Checking formatting...

dist/bad.js (3ms)

Format issues found in above 1 files. Run without `--check` to fix.
Finished in 59ms on 4 files using 16 threads.
```

oxlint:

```bash
pnpm dlx oxlint -c ./node_modules/.vite/.oxlintrc.json

Found 0 warnings and 0 errors.
Finished in 3ms on 1 file with 90 rules using 16 threads.
```
