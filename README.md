# covid-maps

Covid Maps is a crowd-sourced app that helps you track the latest information on essential services operating around you during the Covid-19 shutdowns.

## 👩‍💻 Contributing to the project 👨‍💻

Developers looking to contribute to this project can get started by filtering for [good-first-issues](https://github.com/arjun27/covid-maps/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)

Once you've gotten a hang of the code base, check out the [Prioritized Feature List](https://github.com/arjun27/covid-maps/issues/86) which has also been pinned on the [Issues Board](https://github.com/arjun27/covid-maps/issues)

Join our [WhatsApp Developer group](https://chat.whatsapp.com/HzZT0gMYoYYEDDjj2LQUD8) to engage with the team working on this project.

### Pushing your changes

* Comment on the issue you are working on to inform others.
* Fork the repo. Build the feature.
* Send in a PR when done!

## Project structure

- **React app**: The frontend is built on React, built with the create-react-app scaffolding
  - Using react-router for navigation ([docs](https://reacttraining.com/react-router/web/guides/quick-start))
  - Google Maps for a bunch of stuff
  - Bootstrap (with the react-bootsrap package) for basic css styling
- **Nodejs/Express server**: The `server` dir has a basic web service that runs on top of PostgreSQL
  - PostgreSQL is the primary data store for the app
  - For more info on the server, see the server [README.md](server/README.md)

## Usage

The app requires Node.js to be installed locally. Once you have Node, run the following from the project directory. This would setup the local dev server on http://localhost:3000.

```
npm install
npm start
```

Strictly optional: setup Prettier in your editor for code formatting.

## Deployments

We have continuous deployment on every push to `master` with a Netlify integration. Give a minute or two for the changes to deploy after a push.

The app is deployed at https://peaceful-rosalind-47c3e2.netlify.com

## Location input - test scenarios

1. "Update info" flow from homepage -> submit.
2. Type on search field on submit
3. Drag marker
4. Drag map (marker stays in the center; "mobile friendly drag")

## Formatting with Prettier

```
npx prettier --write --trailing-comma none --arrow-parens avoid src/**/*.js
```
