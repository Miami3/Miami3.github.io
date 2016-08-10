mkdir HomeWork2
touch HomeWork2/index.html
mkdir HomeWork2/content
cp HomeWork2/index.html HomeWork2/content
mkdir HomeWork2/newContent
mv HomeWork2/content/index.html HomeWork2/newContent/
rm -d HomeWork2/content
mv HomeWork2/newContent/index.html HomeWork2/newContent/newIndex.html
chmod 740 HomeWork2/newContent/newIndex.html
