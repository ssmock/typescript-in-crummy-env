# Purpose

My goal is to explore web development within Termux on an cheap ARM-based
Chromebook.

# Dev env setup

1. Install Termux
2. Add emacs-x/x11 (emacs 26 for arm) and a bunch of packages, incl.
web-mode, emmet-mode, and tide for dev tasks, and magit, neotree, and window-numbering for productivity
3. Install node, yarn, typescript, live-server

# Localhosting 

...has a catch on Android/Termux. It doesn't use the loopback IP. Instead,
it uses the IP shown next to `arc0 `when you run `ifconfig`.

# Another catch: hard links are forbidden

This caused problems for me with `create-react-app`, but workarounds are available.

# Cheap Browserification

Rather than fooling around with Webpack, we take a more conservative approach to
transpiling and bundling. TypeScript is configured to output AMD modules, and
we require good old Require.js from a CDN. This alone is not sufficient, however;
a script external to our TypeScript entry point, `app.ts` must be used to `require`
and start up the application. Currently, this script resides in `index.html`.