Succotash
---------

↑ This is the project name. Not the brand name. Do not tell this to customers.
No, they won't understand. Trust me.

[What's Succotash?](https://en.wikipedia.org/wiki/Succotash)

Development
-----------

This project contains partial HTML files, which are supposed to be loaded by
Angular via AJAX. Unfortuantely, Chrome won't let you load local files that way
by default.

Therefore, you need to **run a local server** or allow such access.

No other dependencies or special configurations are required... yet.

## Run a local server

There are a lot of ways to do that. But the important thing is: make sure the
`public` folder is the root of the website!

The easiest way is here:

```bash
npm install -g http-server
# Do the following whenever you develop.
cd /your/path/to/the/repo/clone/public/
http-server
```

And keep the server running while you change files. If you run it in a terminal
emulator (or a command prompt), DO NOT close the window!

Open `http://localhost:8080/` to see the website and enjoy.

### I don't want to install no Node.js for nothing!

Sure, then you can always [allow Chrome to access local files](http://stackoverflow.com/a/18137280).

Please note this is quite dangerous because it allows any HTML file to inspect
your whole disk. So do not open any HTML file you don't trust while you have
this flag set!

For our project, you need to open `public/index.html` in Chrome AFTER you set
up the flags. If you see a blank page, close all windows and apps for Chrome and
try running with the flag again.

Project Structure
-----------------

This project is hand crafted for simplicity. You simply load `public/index.html`
and BAM! It works. No gulp. No command-line (except for web servers). Promised.

The rule is, if you change anything in `public`, you can always refresh the page
to see the result.

To customize bulma, you need to change `src/bulma-customized.scss`. Then you run
`npm run build-bulma` to update the compile result in public. Please submit BOTH
the source file and the compiled repository so that others do not need to
compile it again.

If you don't have Node.js installed, please ask others to modify that file for
you. Don't try to change it without compiling it. It won't work that way.

Please feel free to add/remove/modify any files in `public`. You probably don't
want to modify existing library files in `lib` though. All URLs must be relative
to the `public` folder! For example, write `templateUrl: "partials/foo.html"`
instead of `public/partials/foo.html`.

Here's the complete tree:

```
project root
  |- public
     |- index.html # Entrance point
     |- images
     |- lib # Put any third-party source/dist files here please.
        |- bulma-customized.css # Don't change this manully! See instructions.
     |- partials # Angular HTML template files.
     |- javascript # Mostly Angular modules and controllers.
  |- src
     |- bulma-customized.scss # Customize bulma here. Please compile it!
  |- dist # Generated static structure for final submission.
  |- package.json # Dev dependencies and build scripts. Nothing special.
  |- README.md # The file you are looking at.
```

How do I add pages?
-------------------

That's simple! These three easy steps will get you started.

### Create a state definition

Open `public/scripts/succotash.state.js` and add your state there following the
format. It should be something like this:

```js
    .state({
      name: 'fantastic',
      url: '/fantastic',
      templateUrl: 'partials/fantastic.html',
    })
```

Please note you need to select the URL for your page now. However, you don't
have to remember it. The only thing you will ever need is its **name**.

### Create template file

Then, create the template file you specified. In this case,
`public/partials/fantastic.html`.

```html
  Hi! I'm the page content which is <strong>Fantastic!</strong>
  <hr>
  Great stuff here...
```

Note that you only write the part of the view, not the whole content. The page
source is a HTML page fragment, not a complete HTML. There's no need to put
`<html>`, `<head>` or `<body>` there. Please do not copy code from other files.

### Link to the page

Finally, you can link to your new page using the **state name**. Instead of
`href`, you use `ui-sref` (state references).

```html
  <a ui-sref="awesome">My Awesome Page</a>
```

It simply works. Please note that you want to use the state name as you defined
earlier, not the URL. If the tag has a `href` attribute, please remove it
because it will conflict with `ui-sref` links. You only need `ui-sref`.

Final Submission
----------------

Before final submission, run `npm run dist` to build a distribution-ready
package in the `dist` folder. Then you can make a zip file of that folder.

During the process, partial files will be minified and dumped into a JavaScript
file called `dist/javascript/templates.js`. In this way, the final result is
runnable on local file system (with no AJAX). The only HTML file remains is the
`dist/index.html` file, which is the entrance.
