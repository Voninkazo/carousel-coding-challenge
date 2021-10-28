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

#### I added the following packages to expedite development:

- material-ui: reusuable web components that would reduce css and css flexbox build time for all devices. Material-UI components also come with default props like `disabled` that can be modified during click events<br>

- Parcel: zero-configuration bundler to minify the code and increase application performance.

- TailwindCSS: CSS Utility library that enabed me to style the applciation faster.

- Cypress: enables end-to-end testing to ensure all code challenge requirements were satisfied.

### How the app works

For this app, I wanted to display four blocks in carousel on load. Each block contains an image and a title.
There are also a previous and next buttons that allow users to view the next set of blocks and previous blocks<br><br>

By default, the previous button is disabled and gets enabled when clicking on the next button. The next button is enabled by default but gets disabled when the user views to the end of the carousel.<br><br>

I wrote a series of Cypress tests to ensure all the application works as intended.

### Structure of the app

- Seperated folders are created for reusable components.
- All functionalities are stored in the `App.js` file where all components are being used.
- Cypress tests can be found in the cypress/integration folder.

### Design

There is not design for this app but I used my own imagination and wanted to make the UI responsive on both mobile and desktop screens.
