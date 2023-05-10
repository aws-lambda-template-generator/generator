### Todos

List of todos ideas...

- Add scope (https://github.blog/2021-02-12-avoiding-npm-substitution-attacks/). But, do we need this for npm module installed globally? We need to invstigate it.

If we have a private module (e.g. my-module) and pull the dependencies from there in the project, the attacker can create a public module with the same name with higher version number, then npm will automatically download it from the higher version number one. Therefore, the project starts using the malicious one as a dependency. Therefore, we need a namespace on the dependency to prevent it. Source (https://blog.sonatype.com/dependency-hijacking-software-supply-chain-attack-hits-more-than-35-organizations)

- Try ink for better console experience.

## Mystery commitizen issue...

https://github.com/commitizen/cz-cli/issues/441

Ok, I just needed to add this in package.json

```json
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
},
```

# Error with semantic-release `fatal: tag 'v1.4.0' already exists`

1. Try to fix by pushing tags, but this didn't fix.

```bash
git tag -a v1.5 -m "troubleshoot semantic-release 1.5"
git push origin --tags
```

2. Deleted the tags from Github repo UI.

It seemed to fix the issue of creating the tag v1.4, but failed to publish because v1.4 is already in the npm repo.

Then, made another commit with a fix tag to update the version. This created tag v1.4.1 and npm module release v1.4.1
