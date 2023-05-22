#!/bin/bash

echo "all needed command for push a project in gihtub : enjoy guys"
commitMessage=$1
git status 
git add .
git status 
git commit -m "$commitMessage"
git push origin main
