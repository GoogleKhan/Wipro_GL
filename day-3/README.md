# Session1 (Html5+css3)
- Why to use HTML 5 and CSS 3
- Http-server
- Live-server
- Tags in HTML5
- Working with css3

## Http-server
- Helps to deploy the HTML applicatio  and run it on the browser
- can we installed using 
    - npm install -g http-server
- go inside html folder and run the server using
    - http-server

## Live Server
- runtime changes reflected on the Html document
- can be installed using 
    - npm install -g live-server
- go inside html folder and run the server using
    - live-server

## HTML5
- Semantic Tags
    - does not have there any feature just provide redable sites.
    - header
    - main
    - nav 
    - footer
    - article
## CSS
- to style the web page
- inline CSS
    - css with the tag itself
    - ex <li style="background-color: olive">Hello</li>
- internal css
    - css within the html page
    - we use tags to implement the css
    - use style tag to add it on the page
    - <style>
        body{
            background-color : blue
        }
    </style>
- external css
    - an external file used to create styles
    - use link tag to link the file
    - ex <link rel="stylesheet" href="../css/index.css">

### Read a HTML tag in css 
- tag
    - to apply the style onto the tag
    - use direct tag name to do so
    - all the elements with the same tag name will get the style
- classname
    - applied to the group of classes with same classname
    - use classname with (.) Prefix
- id
    - applied to the elment
    - use {#} as prefix

### CSS units
- % - related to the outside element
- px - pixel 
- em - css3 new (14px = 1em) Fortsize of the document
- vh - viewport Height 
- vw - viewport width
### css spacing
- Margin
    - space between 2 html Components
- padding
    - the space inside the html Components
### Type of elements
1. Block elements
    - occupie the full width of the screen
2. inline elemts
    - occupie only the area which text containes