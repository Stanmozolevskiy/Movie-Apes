# MovieApes
 
Demo 
https://stanmozolevskiy.github.io/Movie-Apes/



# To deploy run:

I created a sustom script that is going to deploy the project to the git pages by running  ```npm run deploy ```
That script includes in itself the follotins steps:

1)ng build --prod --baseHref=https://stanmozolevskiy.github.io/Movie-Apes/

2)According to the Angular doc, you have to make a copy of index.html and name it 404.html.When the build is complete, make a copy of docs/index.html and name it docs/404.html.
you can navigate to the docs folder and run 'copy index.html 404.html

3) ```git add .
git commit m- "deploy"
git puch
```


