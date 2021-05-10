echo "Removing node modules then reinstalling..."
rm -rf node_modules
yarn install
echo "Cleaning gradle project..."
cd android
./gradlew clean
cd ..