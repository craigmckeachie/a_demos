
cp -r ~/Documents/git/a14/a_demos/advanced/change-detection/* ~/Documents/git/a14/a14_demos/
cd ~/Documents/git/a14/a14_demos/
git checkout -b change-detection
git add .
git commit -m "change-detection"
git push --set-upstream origin change-detection

git checkout main
cd ~/Documents/git/a14/a_demos/