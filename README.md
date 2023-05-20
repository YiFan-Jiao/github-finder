### github-finder

!!!
After deploying on github, the token will be invalid automatically.

After I uploaded it to github, my local files also failed to run, and the api 
showed 401. But when I apply for a new token, it can run successfully locally. 
Once I upload the new token version, the 401 will appear again.

I searched for the reason on the Internet, and said that directly putting the 
token in the github library would have a security risk, and github would 
directly invalidate the token. 

I try to put the token in the config or .env file, but it still doesn't work.

Please click [here](https://yifan-jiao.github.io/github-finder/) to vist the web.