# OpenSeadragon image viewer block for WordPress


## Local Development

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

