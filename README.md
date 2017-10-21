# WanderSpark
A place to save ideas for places to see adn things to do on your next trip or your dream trip.

## Status
WanderSpark is currently in early development.

## Setup
Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
```

After both installations complete, run the following command in your terminal: `yarn start`.

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```
> Note: A yarn build will be required to register any new Post requests from any front-end JavaScript to to prevent any proxy server errors.

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!

## Team
* Julie Ching
* Matthew Carillo
* John Desrosiers
* Teddy Hidalgo
* Jamine Kim
* Susan Tarnowski