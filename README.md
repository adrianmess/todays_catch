# **Todays Catch**
### Hosted at: https://todays-catch-market.firebaseapp.com/

#### By [Adrian Messado](https://github.com/adrianmess)
## Description
The apps purpose is to be used as a sea food market where the price and quantity of available fish are variable and can change at moment's notice. The app contains a menu, an order form, and an inventory management area where authorized users can immediately update product details.



## Setup/Installation Requirements

#### Prerequisites

-   [Twitter public developer Api ID and App Secret]
-   [Github public developer Client ID and Client Secret]
##### Add API keys to firebase
1. Go to console.firebase.google.com
2. Select project
3. Authentication > Sign-in method
-   ~~For Facebook enter **App ID** and **App Secret**~~
-   For Twitter enter **Api Key** and **App Secret**
    - Add authorization callback URL to your GitHub app configuration
-   For Github enter **Cliend ID** and **Client Secret**
    - Add authorization callback URL to your GitHub app configuration

4.    then add firebase config to src/config.js
-   Follow **Add Firebase to your app** > https://firebase.google.com/docs/web/setup?authuser=0
-   [Firebase config]

*config.js*

    var config = {
        apiKey: "###########-###########-#############",
        authDomain: "example-name-8012.firebaseapp.com",
        databaseURL: "https://example-name-8012.firebaseio.com",
    }

    export default config;


#### Clone
 * Clone this repo to your local machine using https://github.com/adrianmess/todays_catch

        $ git clone https://github.com/adrianmess/todays_catch

#### Build and Install

  > Navigate to the project folder in your terminal then run the following commands.

  * Install:

             $ npm install
  * Run:

             $ npm start

## Known Bugs
  * Facebook Authentication doesn't appear to be working. I've commented out facebook Auth button.

## Technologies Used

* JavaScript
* React
    * JSX
    * State management
    * Reusable components
    * Component Validation with PropTypes

* Firebase Authentication
    * Twitter | Github | ~~Facebook~~
* Firebase Database
* HTML 5 LocalStorage
    * Persisting Order State with local storage

* Webpack

## License

* GPL

Adrian Messado © 2018