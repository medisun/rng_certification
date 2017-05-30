INSTALLATION GUIDE
==================

## Dependencies
 - OS distributive: Ubuntu 14.04.5 LTS (Trusty Tahr)
 - NodeJS v6.10.3
 - NPM v3.10.10


## How to install it on Ubuntu
```
mkdir rng_certification
cd rng_certification
wget https://github.com/medisun/rng_certification/archive/master.zip
unzip master.zip
cd master
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

File similar to ```rng_test_1496140719686_0.2279638278910321.txt``` must be created.
Change 

## If you are using Docker
```
cd ~/dir-with-sources
docker docker build -t medisun/node-rng-cert ./
cd ~/your-worink-dir
docker run --rm -v $(pwd):/usr/src/app medisun/node-rng-cert
```
