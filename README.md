NASA Explorer

This is a full stack application that shows the user interactive data from different NASA Open API's, including Astronomy Pictures of the Day, Mars Rover Photos, Near Earth Objects, The image of the earth, Nasa's media library and the Tech transfers discussions.


----------------------------------------------------------

Features:
- Astronomy Pictures of the Day Viewer: Daily space themed pictured with detailed descriptions

- Mars Rovers: Browse photos taken by enthusiests

- Near Earth Objects: Can view 7 days worth of Asteroid data and can be visualised on charts

- Media Library: Search for videos and images that have been posted

- Tech Transfer: Goes through NASA interesting tech offerings

----------------------------------------------------------
SETUP INSTRUCTIONS

1. Clone the Repository

git clone https://github.com/your-username/nasa-explorer.git
cd nasa-explorer

2. GET NASA API KEY

NASA_API_KEY=NASA_API_KEY
PORT=5000
my api_key at the time of making this was kRqkmv4wDSX9G5aRpLD0XQqyepU8Vm5FFjcvFr15

3. Install The Necessary Depensencies
Backend:
-npm install
-cd backend
Server should run on https://localhost:5000

Frontend:
-npm install
-cd ../frontend/userinterface
Application should run on https://localhost:3000

-----------------------------------------------------------

Run the Application

Start the Backend:

-cd backend
-node index.js
You should see this running:
[dotenv@16.6.0] injecting env (2) from .env
Server starting...
Using NASA API Key: kRqkmv4wDSX9G5aRpLD0XQqyepU8Vm5FFjcvFr15
Listening on port: 5000
Server running on port ${PORT}

Start the frontend:
-cd frontend/userinterface
-npm start

Will launch the application at https://localhost:3000

-----------------------------------------------------------

How to Use Each Feature

    Astronomy Picture of The Day:
-Displays NASA's daily image or video.
-Includes title and full description.
-Use the date picker at the top right to view images from  previous dates

    Mars Rovers Photos:
-Retrieves Mars rover photos from Curiosity based on Earth date (default is 2020-07-21).
-Each card shows the camera used and a thumbnail.
-Scroll through the photo grid to view all images


    Near Earth Object Web Services:
-Displays asteroid data over a 7-day window (from today).
-Bar chart shows miss distances.
-Toggle to show only hazardous asteroids.
-Sort by:
    -Largest Diameter
    -Highest Velocity
    -Closest Miss Distance
-Scroll horizontally for more asteroid data.
-Cards below chart display each asteroid's key metrics.

    Earth Polychromatic Imaging Camera
-Displays real-time images of Earth from NOAA's DSCOVR spacecraft.
-All images are from a fixed date (2024-10-31).
-Scroll vertically to view all frames.
-Timestamp and caption provided for each image.

NASA Image and Video Library
-Search by keyword.
-Filter by media type (image, video, audio).
-Enter optional year range (start & end).
-Press "Search" to fetch and view matching results.
-Note: Make sure search terms are specific (e.g., “Apollo”, “Moon”).

NASA Tech Transfer
-Displays a list of technologies developed by NASA.
-Each card includes the tech ID and abstract.
-Useful for exploring innovations that NASA has made available for commercialization.














































<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
