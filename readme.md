[Official Site: http://thefreshvince.github.io/candy-browser](http://thefreshvince.github.io/candy-browser)

```bash
$npm install candybrowser
```

##Candybrowser
An HTML5, CSS3, and JS (optional) content frame used to display content like portfolio peices that need a surrounding and styled browser frame.

##Usage
To get candybrowser working on your website, simply:
- Download the files (npm install candybrowser)
- Include the css or import the sass
- Include the html
- Include the js (optional for tab switching)

###CSS
Include the css in the head.
```html
<head>
  <!-- Include the stylesheet in the head -->
  <link rel="stylesheet" href="path/to/candybrowser.css">
</head>
```

###Sass
Just reference the main partial in your sass and you're ready to go!
```scss
/* import into a sass file */
@import '.../dist/sass/candybrowser/main';
```

###HTML
The markup portion is relatively straight forward, just include the following somewhere in the body.
```html
<!-- insert the following markup into the body -->
<article class="cb__window">
  <header class="cb__header">
    <div class="cb__decorative-buttons">
      <span class="cb__close"></span>
      <span class="cb__minify"></span>
      <span class="cb__fullscreen"></span>
    </div>
    <nav class="cb__tabs">

      <!-- Add Tabs -->
      <a href="#tab1" class="cb__tab">Tab 1</a>
      <a href="#tab2" class="cb__tab">Tab 2</a>
      <a href="#tab3" class="cb__tab">Tab 3</a>

    </nav>
    <div class="cb__nav">
      <div class="cb__buttons">
        <a href="#back" class="cb__back"></a>
        <a href="#forward" class="cb__forward"></a>
        <a href="#refresh" class="cb__refresh"></a>
      </div>

      <!-- Edit the URL -->
      <input type="text"
             value="&#128196; http://yoursite.com"
             class="cb__address"
             readonly />

    </div>
  </header>
  <div class="cb__body">
    <div class="cb__content">

      <!-- Insert your content! -->
      <h1>YOUR AWESOME CONTENT</h1>
      <p>And some more awesome content explaining other awesome content :D</p>

    </div>
  </div>
  <footer class="cb__footer">
  </footer>
</article>
```

###JS
The correlation between a tab and it's content is made through the id/class of the content area and the tabs href. So href="#tab1" will show the element with id="tab1" or class="tab1".
```html
...
  <!-- Right before the closing body tag -->
  <script src="path/to/candybrowser.css" charset="utf-8"></script>
</body>
```

##Theming
Changing the theme of a window is just a matter of adding the class "cb__window--THEMENAME" where THEMENAME is the name of a/your theme:

<article class="cb__window cb__window--THEME">

If you've included the js, you can switch between themes along with the tabs by specifying the "data-theme" attribute like this:

```html
<a href="#theme" data-theme="THEME" class="cb__tab">THEME</a>
```

Bundled themes include:
- default
- purple
- blue
- green
- orange

###Sass Theming
To create a quickly coated browser, you can add your theme name and base color to the $cb-themes map. Then you can simply use it by implementing the .cb__window--THEME on your .cb__window .

```scss
/* Found in the /dist/scss/candybrowser/_variables.scss */
$cb-themes: (
  THEME: THEMECOLORVALUE,
  green: #6D8925,
  blue: #4890C0,
  orange: #FA6900,
  purple: #9966CC
);
```

If you would like to be more explicit in your theming, you can change any of the variables found within the _variables.scss file .

###CSS Theming
if you would rather use css, you can extract the class definitions from within /dist/scss/candybrowser/_themes.scss and change the values on a per property basis.

```css
.cb__window.cb__window--THEME{
  background-color: #f00;
  border-color: #f00;
}

.cb__window.cb__window--THEME,
.cb__address{
  color: #fff;
  background: #0f0;
  border: 1px solid #f00;
}

.cb__window.cb__window--THEME .cb__tab,
.cb__window.cb__window--THEME .cb__back,
.cb__window.cb__window--THEME .cb__forward,
.cb__window.cb__window--THEME .cb__refresh{
  color: #0f0;
  border: none;
}

.cb__window.cb__window--THEME .cb__tabs:before{
  box-shadow: inset 0 1px 0px 0px #0f0;
}

.cb__window.cb__window--THEME .cb__tab{
  background: #eee;
}

.cb__window.cb__window--THEME .cb__tab--current,
.cb__window.cb__window--THEME .cb__tab:hover{
  background: #fff;
}


.cb__window.cb__window--THEME .cb__nav{
  background: #fff;
  border-color: #f00;
}

.cb__window.cb__window--THEME .cb__close:before, .cb__minify:before,
.cb__window.cb__window--THEME .cb__fullscreen:before{
  border-color: #0f0;
  background: #f00;
}

.cb__window.cb__window--THEME .cb__body{
  color: #0f0;
}

.cb__window.cb__window--THEME *::selection {
  background: #0f0;
  color: #fff;
}

.cb__window.cb__window--THEME *::-moz-selection {
  background: #0f0;
  color: #fff;
}

.cb__window.cb__window--THEME *::-webkit-selection {
  background: #0f0;
  color: #fff;
}
```

##Options
There aren't many options out of the box however there are a few class modifiers:

**.cb__body--no-height on the .cb__body**

This will allow your content to grow and expand the candybrowser. Otherwise it will be constrained to a set aspect ratio of 1.5 .

**.cb__body--scrollable on the .cb__body**

If your content is larger than the frame but you would like to keep its aspect ratio, add this class which will add scrollbars to the content area.
