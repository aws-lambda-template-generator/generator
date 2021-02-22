### Todos

List of todos ideas...

- Add scope (https://github.blog/2021-02-12-avoiding-npm-substitution-attacks/). But, do we need this for npm module installed globally? We need to invstigate it.

If we have a private module (e.g. my-module) and pull the dependencies from there in the project, the attacker can create a public module with the same name with higher version number, then npm will automatically download it from the higher version number one. Therefore, the project starts using the malicious one as a dependency. Therefore, we need a namespace on the dependency to prevent it. Source (https://blog.sonatype.com/dependency-hijacking-software-supply-chain-attack-hits-more-than-35-organizations)

- Try ink for better console experience.
