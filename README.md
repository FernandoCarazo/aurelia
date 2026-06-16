# Aurelia — Luxury Travel

A luxury travel website concept built with **Angular 16**. It showcases curated destinations, day-by-day itineraries, travel packages, and photo galleries through a clean, dark-themed interface.

> **Live demo:** https://fernandocarazo.github.io/aurelia/

<img width="3200" height="1612" alt="Screenshot From 2026-06-16 17-04-09" src="https://github.com/user-attachments/assets/338e8dd1-264e-4343-84dc-9e7ecf87e2fd" />


## About this project

I built Aurelia as a personal project for two reasons:

1. **To practice my frontend skills** — component architecture, routing, lazy-loaded feature modules, and responsive layouts in Angular.
2. **To learn how to deploy a website to GitHub Pages** — taking a project all the way from local development to a live, public URL.

Honestly, it was a really fun project to build and I learned a lot along the way. The best part came after: once I figured out how to publish a site on GitHub Pages, I was able to help a friend who didn't even know that was possible. Walking him through the whole process step by step taught me even more than doing it on my own. I find that sometimes explaining something is the best way to really understand it!

## Features

- **Destinations** with detailed, day-by-day itineraries
- **Travel packages** (family, couples, honeymoon)
- **Photo galleries** organized by destination
- **Dark themed** and a responsive, mobile-friendly layout

## Tech stack

- [Angular](https://angular.io/) 16 + TypeScript
- Angular Router (lazy-loaded modules)
- [Font Awesome](https://fontawesome.com/) & [ng-icons](https://ng-icons.github.io/ng-icons/) for icons
- Plain CSS with CSS custom properties (theming)
- [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment

## Getting started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Angular CLI](https://github.com/angular/angular-cli): `npm install -g @angular/cli`

### Install & run
```bash
# 1. Clone the repository
git clone https://github.com/FernandoCarazo/aurelia.git
cd aurelia

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```
Then open **http://localhost:4200/**. The app reloads automatically when you change a source file.

## Build

```bash
npm run build
```
The production build is generated in the `build/` directory.

## Deployment (GitHub Pages)

This is the part I set out to learn. Deploying is a single command:

```bash
npm run deploy
```

Under the hood this runs `npm run build` and then publishes the `build/` folder to the `gh-pages` branch using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package. GitHub then serves it at the live URL above.

> The app uses hash-based routing (`useHash: true`) so that client-side routes work correctly on GitHub Pages without extra server configuration.
