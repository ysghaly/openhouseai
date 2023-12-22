# This React Application is my submission for a coding challenge issued to me by OpenHouseAI

Some Notes about this App:

1. To run this application locally, simply clone the repository and run it like any other React application. 
2. This application uses API calls to retrieve community and home data from the provided endpoints. These endpoints should be defined as environment variables. For the two endpoints, there are two variable names you should define, by creating a .env file in the root folder of the application and adding the following two lines (don't include the curly brackets):
   1. REACT_APP_COMMUNITY_URL={api_endpoint_url_here}
   2. REACT_APP_HOME_URL={api_endpoint_url_here}
3. If you run into issues with the API calls for this exercise’s endpoints not working, it may be due to the Cross-origin resource sharing (CORS) settings. I got around this by using a public CORS proxy, https://corsproxy.io/?, as a prefix for those endpoints' URLS.
4. This application is also hosted publicly, if you wanted to check its functionality without running it locally. The URL is https://community-list.onrender.com/.


Follow-up Question:

Q: If given more time, how would you improve the quality of your application? Would you implement anything differently? 

A:  I would spend more time playing around with the visual design, to make it look more professional and mobile friendly. As it is, it could definitely use some improvement in that area. The design of the nav bar is very simple and not impressive at all, so I would dedicate some more time to figuring that out. The mobile version could also use a lot more time dedicated towards it, and I would consider that the area in most need of work. 
    As for implementation, my use of TypeScript isn't that sofisticated here, I'm definitely much more practiced with React than
TypeScript, and haven't really worked on both simultaneously. That definitely slowed me down, and if I had more time I would try to improve my code, and try make it more cohesive and professional.  
    Finally, if I could have taken my time from the start, I would have been better about setting up proper unit testing for easier
devlopment and more through error checking. As it is, I tried to provide as much data validation and handling as I could, but it's no substitute for a proper framework of tests and checks.
    Almost forgot to add some documentation. If I had more time, would have loved to also clean up my code and add more documentation
to it, instead of just the basic stuff I managed.

Overall, this was fun. A little nerve wracking, but I dove headfirst into the challenge and enjoyed stretching those mental muscles. Almost missed lunch and definitely missed dinner while I was caught up in the coding ;). 

See below for the standard boilerplate React App README text.













# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
