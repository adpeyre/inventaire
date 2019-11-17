npm run build

# WIN
npm install sqlite3  --target_platform=win32
pkg package.json --target node12-win-x64 --output ./bin/win-64/mon-inventaire.exe
cp node_modules/sqlite3/lib/binding/**/* bin/win-64/

#LIN
npm install sqlite3  --target_platform=linux
pkg package.json --target node12-linux-x64 --output ./bin/lin-64/mon-inventaire.sh
cp node_modules/sqlite3/lib/binding/**/* bin/lin-64/

#RESTORE DEFAULT
npm install sqlite3
