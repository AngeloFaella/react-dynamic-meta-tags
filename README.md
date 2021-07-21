# Adding dynamic meta tags to a React app without SSR 

Support repository for *["Adding dynamic meta tags to a React app without SSR"](https://blog.logrocket.com/adding-dynamic-meta-tags-react-app-without-ssr/)* tutorial.
A simple and effective solution to inject dynamic meta tags in a React app without SSR.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## The problem
If you want to set up dynamic meta tags based on different URLs in your project (e.g. /home, /about, /detail?id=1, /detail?id=2), you have to do it server-side. 
Web crawlers don’t always execute JavaScript code when examining a webpage, so if you want to make sure that they read your meta tags, you need to set them up before the browser receives the page.
But what if I don’t have server-side-rendering (SSR) for my app? 

## The solution
The article shows how to serve the app from a Node/Express backend to inject the meta tags before returning the HTML page to the client.


## Run the project

In the project directory, you can run:

### `npm run server`

Builds the app for production and start the server on port 3000.

You can see how meta tags changes based on the requested URL, e.g. [http://localhost:3000/post?id=1](http://localhost:3000/post?id=1), [http://localhost:3000/post?id=2](http://localhost:3000/post?id=2) 

