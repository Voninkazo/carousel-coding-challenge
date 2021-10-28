## Carousel App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### View Live

You can view the app live at [https://sandy-carousel-slider.netlify.app/](https://sandy-carousel-slider.netlify.app/)

### Run locally

Run `npm install` or `yarn install`.<br>
Run `npm start` or `yarn start`.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run the cypress tests, you can run `yarn cy:open` or `npm run cy:open`

### Setup Notes

### I added the following packages to expedite development:

- material-ui - reusuable web components that would reduce css and css flexbox build time for all devices. Material-UI components also come with default props like `disabled` that can be easily modified with event handlers<br>

For this app, I wanted to display four blocks of cards, each contains an image and a title, a previous and a next button<br><br>

By defaul the previous button is disabled but it gets enabled when a user clicks on the next button to get another set of blocks. Similarly, when all blocks are shown, the next button is going to be disabled and only the previous button is active<br><br>

Seperated folders are created for reusable components. All functionalities are stored in the `App.js` file where all components are being used.
Styling is written with tailwind css.

There are also a few cypress tests that are testing the content of the app component

Also, pacrel is used to bundle the code because it's a zero configuration.

Other than that, the design is not replicated from anywhere but just an imagination that came in my mind. I made the UI responsive on both mobile and desktop screens.
