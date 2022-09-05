# NodeJSExamples

# NodeJS Examples

# Getting Started    
To run the example programs execute the following command from the command line.      

```
$ chmod +x run.sh
$ ./0_Run.sh
```

# Content    
# Section 1 - NodeJS Fundamentals      
## 1. Introduction     
## 2. Function     
## 3. Import Function     
    You can put your functions in another file and import the functions.         
## 4. Arrow Function     
    Assign function to a constant variable.      
## 5. Object destructuring  
   The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.     
## 6. Http server 

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/http_server.png" 
alt="Http Server" 
height="175px"/> 

## 7. Npm     

* Creating the package json file 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
```
$ npm init
```
* Updating the packages

 npm install will install all modules listed as dependencies in package. All packages get
 saved in the node_modules folder. 
 ```
 $ npm install
 ```
 ## 8. Express      
 ## 9. Event Loop     

 ## 10. Asynchronous programming    

 Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one.       

You are in a restaurant with many other people. You order your food. Other people can also order their food, they don't have to wait for your food to be cooked and served to you before they can order. In the kitchen restaurant workers are continuously cooking, serving, and taking orders. People will get their food served as soon as it is cooked.       

Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.

For example, a function to read a file may start reading file and return the control to the execution environment immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback function while passing the callback function, the content of the file as a parameter. So there is no blocking or wait for File I/O. This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.

The follow code is example of callback function in the _**10_Asynchromous_programming.js**_ code. 

```
(err, data) => {

    if(err){
        console.log(err)
    }
    
    console.log(data.toString());

}
```

## 11. Synchronous programming     

Synchronous basically means that you can only execute one thing at a time.     

You are in a queue to get a movie ticket. You cannot get one until everybody in front of you gets one, and the same applies to the people queued behind you.     

  # Section 2 - NodeJS API Development      

## 12. Creating server with express    

Setup project        
```
$ npm init
$ npm install express   
$ npm install nodemon 
```

Start server directly      
```
$ node app12.js
```
OR uses the nodemon web server
```
$ nodemon app12.js
```

Start server with npm by configurating package.json file. 
```
$ npm run dev12
[nodemon] starting `node app12.js`
app12.js_____________________________________
NodeJS is listening on: 8012
```

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app12_webpage.JPG" 
alt="app12_webpage" 
height="175px"/> 

## 13. Routes     

Start server with npm by configurating package.json file.      
```
$ npm run dev13
[nodemon] starting `node app13.js`
app13.js_____________________________________
port13.js_____________________________________
NodeJS is listening on: 8013
```

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app13_webpage.JPG" 
alt="app13_webpage" 
height="175px"/> 

## 14. Moddleware

Morgan is middleware logger function.    
```
$ npm install morgan
```

Start server with npm by configurating package.json file.      
```
$ npm run dev14
[nodemon] starting `node app14.js`
app14.js_____________________________________
NodeJS is listening on: 8014
Middleware applied.
```
<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app14_webpage.JPG" 
alt="app14_webpage" 
height="175px"/> 

## 15. Controllers   

Start server with npm by configurating package.json file.      
```
$ npm run dev15
pp15.js_____________________________________
port15Route.js_____________________________________
post15Controller.js_____________________________________
NodeJS is listening on: 8015
GET / 304 1.904 ms - -
GET / 304 0.700 ms - -
```

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app15_webpage.JPG" 
alt="app15_webpage" 
height="175px"/> 

## 16. JSON and postman       

Start server with npm by configurating package.json file.      
```
$ npm run dev16
app16.js_____________________________________
port16Route.js_____________________________________
post16Controller.js_____________________________________
NodeJS is listening on: 8016
```

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app16_webpage.JPG" 
alt="app16_webpage" 
height="500px"/> 

## 17. Setup MongoDB and Get Request      

### Steps Create MongDB  

Install package to read environment variables    
```
npm install dotenv
```

Install package to work with the database
```
npm install mongoose
```

Create new MongoDB Deployment     

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/create_new_1.png" 
alt="create_new_1" 
height="200px"/> 

Select cloud provide    

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/select_cloud_2.png" 
alt="select_cloud_2" 
height="500px"/> 

Select region

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/select_region_3.png" 
alt="select_region_3" 
height="500px"/> 

Assigning database name 

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/database_name_4.png" 
alt="database_name_4" 
height="500px"/> 

Confirm order

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/confirm_order_5.png" 
alt="" 
height="500px"/> 

Results     

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/result_6.png" 
alt="result" 
height="300px"/> 

### Create new user   

This user and pasword in used in the MongoDB connectect string in the .env file. Do not use the user and password to the mLab website.           

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/mongodb_create_user.PNG" 
alt="create new user" 
height="300px"/> 


Start server with npm by configurating package.json file.      
```
$ npm run dev17
app17.js_____________________________________
port17Route.js_____________________________________
post17Controller.js_____________________________________
NodeJS is listening on: 8017
Successful! connected to MongDB.
```

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app17_webpage.JPG" 
alt="app17_webpage" 
height="500px"/> 


## Post Request     

Start server with npm by configurating package.json file.      
```
$ npm run dev18
port18Route.js_____________________________________
post18Controller.js_____________________________________
NodeJS is listening on: 8018
Successful! connected to MongDB.
createPost ------
CREATING POST: TITLE = This is title
```
### Setting up postman    
<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app18_webpage2.JPG" 
alt="app18_webpage" 
height="500px"/> 

### Post require with responce    
<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app18_webpage2.JPG" 
alt="app18_webpage" 
height="500px"/> 

### Checking the MongoDB For the data    

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app18_webpage4.png" 
alt="app18_webpage4" 
height="500px"/> 

<img 
src="https://github.com/jims6602/ImageForWiki/blob/main/NodeJSExamples/app18_webpage5.JPG" 
alt="app18_webpage5" 
height="500px"/> 

## 19. Validation      

## Install Express Validator
```
npm install express-validator@5.3.1
```

Start server with npm by configurating package.json file.      
```
$ npm run dev19
```
