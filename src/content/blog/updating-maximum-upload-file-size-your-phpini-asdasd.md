---
title: "Sed porttitor lectus nibh. ASdasdasdasd"
date: 2018-08-26
type: "blog"
---

I'll show you how to update the upload_file_size and post_max_size in your php.ini file!
Find your php.ini file — phpinfo() will help you with this.
Now edit your php.ini (mine's located in here!)

```
sudo vim /etc/php/7.1/apache2/php.ini
```

Find upload_max_filesize and post_max_size

When using vim "?" before the word will find it for you

```
?upload_max_filesize
?post_max_size
```

I've set mine to 64M — this will be good enough

```
upload_max_filesize=64M
post_max_size=64M
```

After modifying your php.ini file, you need to restart your HTTP server to use new configuration — In my case It's apache

```
sudo service apache2 restart
```

Wooohooo! You've updated upload_file_size and post_max_size in your php.ini file!