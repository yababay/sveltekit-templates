#!/bin/bash

BRANCH=backup

if [ -z "`git branch | grep $BRANCH`" ]; then
    git switch --orphan $BRANCH
else
    git checkout $BRANCH
fi

git checkout main -- .gitignore
git checkout main -- src/routes/+layout.scss
git checkout main -- src/routes/+layout.svelte
git checkout main -- src/app.scss
git checkout main -- src/app.json
git checkout main -- static/background.png
git checkout main -- static/fonts
git checkout main -- package.json
git checkout main

