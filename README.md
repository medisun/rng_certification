INSTALLATION GUIDE
==================

## Dependencies
 - OS distributive: Ubuntu 14.04.5 LTS (Trusty Tahr)
 - Node.js v6.10.3
 - NPM v3.10.10
 - node-random-number-csprng v1.0.2 [NPM registry](https://www.npmjs.com/package/random-number-csprng), [GitHub](https://github.com/joepie91/node-random-number-csprng)


## How to install it on Ubuntu
```
# create working folder
mkdir rng_certification
cd rng_certification
# upload sources
wget https://github.com/medisun/rng_certification/archive/master.zip
unzip master.zip -d ./
rm master.zip
cd rng_certification-master
# install dependencies
sudo apt-get update && apt-get install -y --no-install-recommends nodejs npm
sudo npm install -g n
sudo n 6.10.3
npm install 
```

## How to run it
```
cd ~/dir-with-sources
npm start
```
Results from example will be in file similar to ```rng_test_1496140719686_0.2279638278910321.txt```.
Source code of usage example in file ```index.js```.
RNG source code located in folder ```node_modules/random-number-csprng``

## If you are using Docker
```
cd ~/dir-with-sources
docker docker build -t medisun/node-rng-cert ./
cd ~/your-working-dir
docker run --rm -v $(pwd):/usr/src/app medisun/node-rng-cert
```
