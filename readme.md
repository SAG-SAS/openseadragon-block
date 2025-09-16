# OpenSeadragon image viewer block for WordPress


## Local Development

### First setup
On first setup, run `npm i` to install any needed npm modules for this block

### Continued developement

Run
```bash
npm run start
sudo npm -g i @wordpress/env
wp-env start
```
from the plugin directory (located in `src/openseadragon-imageviewer`).

This will startup WordPress with the plugin installed on your local system on port `8888`.
To login use user `admin` and password `password`.



### For rootless docker, also execute
```bash
docker exec -it <docker-id>-wordpress-1 chmod 777 -R /var/www/html
```
to ensure proper permissions on the directory inside the container

### For umask 077

In case you are using something like `umask 077` to enhance security on your pc, you need to update the permissions of the npm wordpress package:
```
sudo chmod -R 755 /usr/lib/node_modules/@wordpress
```

