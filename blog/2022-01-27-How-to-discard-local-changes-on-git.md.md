---
title: Discard changes on local Git
path: /discard-changes
date: 2022-01-27
tags: ['error']
---
# On local git
```
git reset --hard HEAD
git clean -df
git pull
```
`git reset --hard HEAD` Resets your changes back to the last commit that your local repo has tracked. If you made a commit, did not push it to GitHub, and want to throw that away too, see @absiddiqueLive's answer.

`git clean -df` will discard any new files or directories that you may have added, in case you want to throw those away. If you haven't added any, you don't have to run this.

`git pull` (or if you are using git shell with the GitHub client) git sync will get the new changes from GitHub.

> [Source link](https://stackoverflow.com/questions/38776517/how-to-discard-local-changes-and-pull-latest-from-github-repository)

# On Github
```
  git log // check the commit hash
  git revert <commit hash>
  git push origin master // then push to all revert to github.
```
> [Source link](https://code.likeagirl.io/how-to-undo-the-last-commit-393e7db2840b)

