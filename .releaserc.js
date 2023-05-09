// https://github.com/semantic-release/commit-analyzer#configuration
const commitAnalyzerPlugin = [
  "@semantic-release/commit-analyzer",
  {
    releaseRules: [
      { scope: "no-release", release: false },
      { scope: "beta", release: "patch" },
      { breaking: true, release: "major" },
      { revert: true, release: "patch" },
      { type: "feat", release: "minor" },
      { type: "refactor", scope: "core-*", release: "minor" },
      { type: "refactor", release: "patch" },
      { type: "fix", release: "patch" },
      { type: "perf", release: "patch" },
      { type: "docs", scope: "README", release: "patch" },
    ],
  },
];

const updateRepoPlugin = [
  "@semantic-release/git",
  {
    assets: ["package.json", "yarn.lock", "CHANGELOG.md"],
    message:
      "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
  },
];

const publishPackagePlugin = [
  "@semantic-release/npm",
  {
    npmPublish: true,
  },
];

module.exports = {
  plugins: [
    // check if there should be a new major, minor, or patch release
    commitAnalyzerPlugin,
    // generate release notes
    "@semantic-release/release-notes-generator",
    // put generated release notes into a changelog
    "@semantic-release/changelog",
    // publish package
    publishPackagePlugin,
    // commit changelog and version changes
    updateRepoPlugin,
    // create GitHub release
    "@semantic-release/github",
  ],
  branches: [
    "master",
    // if you want to release from the branch, we can type the branch name here
    { name: "add-github-action-npm-publish", prerelease: true },
  ],
};
