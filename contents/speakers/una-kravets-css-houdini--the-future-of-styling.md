----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Una Kravets: CSS Houdini & The Future of Styling'
data:
  published: true
  reviewed: true
  order: null
  firstname: Una
  lastname: Kravets
  talkTitle: CSS Houdini & The Future of Styling
  coSpeakers: null
  twitterHandle: una
  githubHandle: 'http://github.com/una'
  homepage: 'http://una.im'
  potraitImageUrl: 'https://cramforce.github.io/playground/images/UNA_251.jpg'
  caption: >-
    Hi, everyone. I'm so excited to be here. Talking to you about Houdini, and
    there is so much to cover so I will go right into it. I love this meme. When
    I was a pup, I had one toy and it was sick. This is like writing CSS 15
    years ago, where we didn't have the technology we have today, we have custom
    properties, there is so much at our hands, and it makes writing styles for
    the web such a joy. CSS still has its downfalls and challenges, right? Let's
    talk about form styling. Why? Why can't we style forms in 2019? If you're
    familiar with W3 schools, an education site that shows you basic ways to
    write web for the code, and so I saw this custom dropdown there and I
    thought, "Oh, cool." The steps we've got is we've got HTML, we are adding
    CSS - fine - there's like some studio elements there, and then I scroll down
    and it's [sound problem]. Still today, it's frustrating because I like to
    separate my logic and my styling. You can't do it on the web. We can make
    gradients on the web, and they're cool, dynamic, you can create a
    comma-separated list of values - live on page - you can adjust these things.
    You can layer them. So it becomes this really great tool when you're
    creating filter effects on images. I using this on the web. You can't read
    ... gradients yet. The top point, they go round the centre and to to that
    point. If we wanted to create ... if we wanted to create a continuous
    gradient we would create the colour for the first and last value and create
    it there. If we look at "can I use", we can see that the gradients are not
    well stored, so we can't use those on the web. Gradients are something that
    doesn't currently exist in CSS. Right here, I have an example where I have a
    div, and, when I hover it, I'm converting from red to blue. So that is what
    I'm trying to do inside this gradient. I'm setting it to go to right and
    from red to blue, and then transferring to deep pink. When I hover on this
    gradient, this div, it's not able to transition that value, and we will get
    into it a little bit later. Not able to do it on the web. Custom borders are
    something that you can kind of on the web. We have a border digital property
    which is cool but it's limited. If you wanted to do something like a corner
    shape which would mask your image as well as apply a border shape on that
    element, this is not something that you can do, and this is 200013 spec who
    tried to push this forward and it never really got into browsers - sad. But
    there's Houdini? If you haven't heard of Houdini, it's really, really cool.
    It's basically a low-level API-for-CSS, and more accurately, it's a series
    of APIs that give developers access to the CSS object model, and it allows
    us to tell the browser how we want it to read our CSS code. So, this is kind
    of what happens now? If you want to style something on the web that doesn't
    currently exist as a CSS property and value pair that you can write in CSS,
    you have to write a JavaScript polyfill for it. So, your browser goes
    through this parser set and reads the DOM and the CSS object model, and then
    you have to do that all over again with the JavaScript polyfill because
    you're reapplying the styles to the page after it's already loaded ones. But
    with Houdini we can apply the styles directly to the CSS, so we have so much
    power as developers now, because we can tell the browser at that CSS step
    what it should be doing when it is reading our code. Exciting. So while it
    takes a while for specs to get implemented in browsers, that is like this
    big dog here taking its time, that's a good thing, we don't want the browser
    to implement anything. If you wanted a feature that doesn't currently exist,
    you can be like this pupper zooming by creating your own tech, CSS
    polyfills, creating JavaScript to do it, and it exists in the browser.
    Pretty cool. The best resource for this right now is Houdini ready yet - we
    have all the browsers agreed that implement the spec, as well as the W3
    specs you can go and read. The state of "can I use? " For Houdini. It's very
    much a work in progress. The most supported APIs are the paint API and the
    typed object model, and so because we have limited time, that's what we are
    going to focus on here today. So let's start with the typed object model.
    The typed object model allows us to have more semantic CSS parsing. What
    does that mean? Right now, it has to go through the whole string-based Regex
    parsing, and that is slow, it's looking for an ID, property, class, or a
    specific key word in that string which is like the dot here, and the string
    from that dot until that open curly brace, then looking for a property
    value, a colon, a value, a unit, a semicolon, making sure those are accurate
    values and they work properly. This can get really messy really fast, and
    it's just so much slower than having some structured data, so the typed
    object model supplies that structured model. I get a value like height and
    we return a CSS unit value which is this object that returns a value and a
    unit, so this is a lot more semantic and so therefore it makes it faster to
    read through that CSS. And so here I'm doing this, I have a box, it has
    width and height. We can get properties from computer style-out and you can
    set properties, so do attributes, property, and then I could specify
    css.number giving it a type, and then it's going to update and a  that, and,
    when we do that again, we see we're getting our parsing. If you look at this
    in DevTools, you will get the CSS unit value object where you have that unit
    and value separated out. That leads me to the property and the values API.
    Have any of you used custom properties right now? That's 30 per cent of you.
    Custom properties are really great because they're actual dynamic CSS
    variables that we have not browser. Unlike Sass where you have a static
    variable that you're using which is going to port out to some value, here,
    you can actually update these in JavaScript. You can separate your logic and
    your styling again because you can keep the style part in CSS and do the
    logic to change that value inside of your JavaScript, and then pass it, and
    super dynamic and cool, so you get a name and a value with your basic custom
    properties, but with the properties and values API, you get so much more
    than that. You can specify a name for it, a syntax for it, and an initial
    value definition, and, if it isn't going to inherit from its parent. Let's
    look at the example again of the gradient. We have our box, and I have a
    colour, so it is custom property, and I'm transitioning from that colour.
    I'm specifying the transition's going to be one second long, and on hover,
    it's going to turn blue. So, again, still not getting an interaction here.
    It should take one second to register that colour. We can call this whatever
    we want. I have colour-stop, the syntax is colour, and specifying that
    syntax. I'm not going to inherit the initial value which will be
    transparent. The as I update this to colour-stop, update this value here,
    also to colour-stop, and I update the transition to colour-stop, if I create
    the hover to match all of those and run this, it's going to slowly fade into
    the blue. [Applause]. I love visual demos! It's just like, wow.  I typed one
    thing, registered property, there's so much meeting behind that property
    now. It's not just a string value. There's actual meaning for the browser to
    understand interpolation between to these  these two values. The other thing
    about custom properties is that you can set initial, fallback values. I have
    to registered properties, colour primary and secondary. If you look at the
    CSS, we are transitioning from colour primary to secondary on hover. We are
    getting that one-second transition, if you notice, I'm not actually
    specifying that custom property, that variable inside of the CSS here. I
    don't have to do that because I've registered it in the CSS registered
    property. I can update colour primary. I can do colour primary red, and then
    if I run this, it will update to red. There's no problem there. We can
    always update it. If I don't have a fall here, if I have a false value like
    23, it will always fall back to the blue-violet. Let me show you what
    happens if I don't register a custom property, there's an invalid colour in
    the background, I run this, it falls back to transparent. The best thing
    about CSS is when there is a false line, it doesn't crash your programme, it
    just ignores that line so you can continue living your life. But it's
    something we can now look forward to with this sort of air channelling and
    type-checking for CSS. And so this is kind of like having typed CSS
    variables, and I think that's great for CSS systems, design systems, making
    sure that everything is super cohesive, and aligned when you're building for
    the web with CSS, with your team. So, now I want to talk about the paint
    worklet. If you've heard of service workers and web workers kind of works
    the same in that it is a layer between your - it pre renders assets and push
    notifications because they live in the in-between. When you open the
    website, you register the worklet on your website, so you can always access
    that, even if your network is offline. So, if we are registering our
    worklets, working with the paints worklets, what we do in JavaScript is
    register that type. We give it a name. I'm using a class here here. You can
    put it in there. In HTML, we need to ... to add it to the page, and then you
    call what your naming register paint, and then the CSS, you would specify
    that work clip by name, so I called it "fun" in this example and I would be
    able to background-paint fun. Is this JavaScript and CSS? Yes. So let's take
    a look at this little example that I made. It's just some text, and what I'm
    doing is I wrote this little Rainbow worklet where I'm going top left to
    bottom right and adjusting the size with these pixel values. Then in the
    HTML, I'm adding the worklet to the CSS, and then the style, the way that I
    get to use it is by setting the background image. You can set a border
    image, use this in any way you want. It's one line of code to get all of
    those effects in CSS. Separate those concerns. Here's our conig gradient
    again. You can write Polly files. Right now, there is a polyfill. This
    polyfill where writing out this worklet to allow for gradients, and you can
    send in context geometry, properties, and argument. So sending in those
    arguments allows us to in the CSS type in here "red" and then we can run
    this, and, in the browser, we get what we saw before with that gradient is
    now a full circle. This is pretty cool. The feature syntax is going to allow
    for us this use these in variables where we can do background gradient and
    right now we have the syntax. Again, this is experimental. This is like
    extending the web. That's really cool. You're extending the web with CSS. I
    work on material design now. We provide a platform for developers to create
    their own customised themes, and that includes colour, topic, and also
    includes shape, and this example is one of the samples called Shine, where
    we have this angular shape. These are the two things that we have as shape
    sort of specs, and so rounded corner is one, and you can definitely do that
    on the web, but a cut corner is not something that we can do on the web yet.
    Like I showed earlier, that corner shape spec never really got put into the
    browser. But, we can sort of work around this. You can create a CSS Houdini
    paint worklet, and this is one that I made to just specify the different
    corner radiuses, paint style to be outlined, or filled, and you can just
    start really to play and get a really good feel for this. You can use
    masking as well as background. Remember the examples I was using showing
    background. When you use WebKit mask image, you specify what you're doing at
    your mask for any elements, and then I combine these techniques to recreate
    these materials buttons but with the notches here. These are the original
    ones, and a big challenge here was containing that ripple effect when you
    hovered, so I used a mixture of background and mask when I was creating in
    notch corners worklet and applying it in the CSS to these outlined buttons
    and filled buttons. So you could take existing infrastructure and
    progressively enhance it because you can use that support, if you're using
    background, it will just fall back to the previous line in CSS. And this is
    the way that we can integrate it into our UIs now. So, let's make some
    magic. I'm going to do a live demo here. Wish me luck. Warnings: this is
    experimental, so have web platform features enabled. Also, you must be using
    ACDVS or localhost because this lives outside of your page and it's for
    security. I hope this works. So, let's start with a canvas. I have a canvas
    here that I've set up, and so it's just giving it a width and height. I'm
    going to zoom in here so you could see this a little better. Inside of my
    JavaScript I'm having a random function, setting up the canvas, giving
    parameters for a sparkle, height, width of weight, and position. It's going
    to randomise the height, width, and weight that have, randomise the position
    of that. We will set the colour, and then we are going to paint this. That's
    why every time I refresh, I'm going to get a random sparkle. We don't want
    one sparkle, we want probably multiple sparkles. Let's set 30 sparkles. We
    are creating a loop here to loop through and apply the sparkles. Once this
    reloads, we have all the sparkles - 30, that's a good start. I feel like
    this colour yellow is a bit too similar here, so we can use HSL values to
    get a really saturated value, so I'm doing a random between 90 and 100. Hue
    is going to be the yellow/orange range, and light is the thing that changes
    the most, so I can get rid of our colour, so we have this canvas, but I want
    to convert that now into a paint worklet, right? Let's get rid of all this.
    Let's use something we're all familiar with, and this is .... this is the
    Codepen for the X? Did you know you can change it? The main thing here is
    that the tiles keep their positions. I will show you what that looks like
    here. If I zoom out all the way, you can see that this is the layout for the
    X up there, and we're going to try to make some Houdini magic work in that
    X. So, what we need to do now since BBC got rid of the canvas in the HTML is
    get rid of the canvas in the JavaScript since we're not using in stuff any
    more, and we have to start writing a worklet. Let's do that. Let's do a
    type-check so we can see if type of register paint is not equal to unde
    fined, then we will create a class, create a class call "sparkle". And then
    inside of that, we want to use paint. We're going to get the context and the
    size of the div that we want to apply this to. From there, we want to put
    this in here. All of this we did, we created those sparkles and place those
    inside here. Now I have the beginning of a worklet but we have to register
    it. Let's go right outside of our statement where we are checking to see if
    this is even supported, and we will do a register paint, and we will do
    sparkles as the name of it, and we have to call that class sparkles. So what
    we have to do now is make sure that we are getting the size and height, not
    from the canvas but from the element, so we have to update that to size. We
    have to to make sure that we are going in here calling this JavaScript code,
    and the way to do that inside of Codepen is use your pen ID. It's a little
    hackie. I have to register this script. I'm going to do
    css.paint.worklet.module. It's going to listening to this file in theory.
    I'm going to save that. Inside of our tile which is every single one of the
    tiles, I'm going to do a background paint sparkles. And if this all worked
    out, we will see some sparkles. Sometimes, I have to refresh for it to work.
    Oh, no! What happened? Okay. Let's go through this. All right, registered
    our worklet. It has a name. We are adding it to the HTML with this script.
    The CSS paint worklet. And we are applying this to our tile with the name
    that we called for the time. Well, this is not working, so, we're just going
    to do this inside of another little starter. I will show you what this looks
    like. We have a back-up! [Applause]. Darn, I wished that worked so much.
    That would have been so cool! [Applause]. So you can play with these slides.
    You can play with that Codepen which is really, really cool. What I did next
    was I got these input properties, so I'm pulling in the input properties
    from our document here where I'm creating a custom property called "sparkle
    num" I'm animating a key frame called sparkle, and I'm pulling in the values
    and updating those and using that as my animation. Since this is not a
    registered property, it's not going to interplate those values that you want
    to - it's not going to return to that every time. A thing I learned
    yesterday. So that is what that looks like, but remember when I mentioned
    that this was truly JavaScript in CSS? So who created houdini.rocks, he
    created this worklet that just evaluates a custom property, so you can
    basically in your CSS put all of this code and then you can apply the
    background paint inside of your CSS. It's super, super meta, but you're
    writing your JavaScript and I thought you might like to apply it. I thought
    you might like that. [Applause]. Thank you. So there are some caveats to
    this approach, and that is that it is semicolon sensitive. Also, your
    variables must be there in instantiation, they're not dynamic, so you can't
    get those static properties and apply those here. You have to have it all in
    one place. I would love it if that could be its own custom property that you
    include inside of your elements but you can't do that right now. You have to
    make sure that it is all in one place if you do that method. Now I want to
    talk about something extra. Extra.css is a little library I've been working
    on that allows you to use Houdini today in your own applications. This is a
    CSS Houdini paint API library for to make the  making your sites a little
    more Extra. What we can do here is play with all of these different things
    like the sparkle demo, you can change the number of sparkles.. you can make
    them bigger by changing the width variants, the height variants, the weight
    to make them thicker, you can create this scallop border, give it any colour
    you want, you can play with the weight of that, so you can adjust that here.
    Why have one underline when you can have many underlines? So, we have super
    underline. You can adjust the number of underlines, the spread of those
    underlines, the weight of those underlines, and just have a little fun
    playing with that. There's a cross-out, so you can adjust this colour too,
    you can change the weights of this cross-out, and then confetti, because who
    doesn't like confetti? Confetti is a fun little thing to add to any website.
    Here, you have control over what that looks like. The way to use it is you
    can use this right now by setting it up with one CDN listening, so inside of
    the HTML, this example, I'm going to close that result. What I'm doing is
    we're just including the worklet as a file, shout-out to my first
    contributor working on this yesterday. Yay. So here you could include your
    script, and then inside of your CSS, you can set properties if you want to
    override them, or you can just use background paint, and it will take the
    default value as I showed you before. With one line of code, one script
    inclusion, you could have Houdini working right now in Chrome Stable in the
    future Edge which I also test these slides on, and they work, so that was
    pretty cool. I hope to see a lot more of this in the future. It's a great
    way it that gives developers so much control over the styles of our website.
    So, you can combine all those things to make layouts like this, and as Aga
    said, I do sing songs for every intro to my podcast. I thought I would end
    this with a little ditty. Can I get some music? [Electronic piano music].
    I'm doing this for you all. 

    * Try bootstrap. 

    * Go to the website with Stylus. 

    * Even almost with native. 

    * First I'm so thankful. 

    * Thank you to web good morning. I don't understand it, though. 

    * One taught me love. 

    * One taught me to build patience. 

    * Now my paint looks amazing. 

    * I've learned and I've shared. 

    * But please don't look at it. 

    * Changing tech is a habit. 

    * And to that I say. 

    * Thank you, next! 

    >> Thank you! [Cheering and applause]. 
  name: Una Kravets
  image:
    filename: una-kravets-6152f1e7.jpg
    filename_500: una-kravets-6152f1e7-500.jpg
    filename_1000: una-kravets-6152f1e7-1000.jpg
    filename_square_1000: una-kravets-6152f1e7-1000-square.jpg
    filename_square_500: una-kravets-6152f1e7-500-square.jpg
    filename_square_200: una-kravets-6152f1e7-200-square.jpg
    width: 800
    height: 1200
    originalType: jpg
  web:
    twitter:
      handle: una
      url: 'https://twitter.com/una'
    github:
      handle: una
      url: 'https://github.com/una'
    homepage:
      handle: una.im
      url: 'http://una.im'
filename: /una-kravets/css-houdini-and-the-future-of-styling.html
yt:
  id: GhRE3rML9t4
  url: 'https://youtube.com/watch/GhRE3rML9t4'
  title: "CSS Houdini & The Future of Styling by Una Kravets |\_JSConf EU 2019"
  poster: 'https://i.ytimg.com/vi/GhRE3rML9t4/maxresdefault.jpg'
  index: 13
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: "CSS Houdini & The Future of Styling by Una Kravets |\_JSConf EU 2019"
    duration: PT25M43S
    description: >-
      It’s almost here! Houdini — the future of CSS! This spec allows developers
      to write web worklets with JavaScript syntax and access the CSS Object
      Model for the very first time. Everything will change!


      In this talk, we’ll will walk through some of the visual magic we can
      create by using Houdini and its various upcoming browser APIs, and go
      through a live demo of how we can get started with implementation. Learn
      about how to use Houdini and what it means for the future of web
      application styling.


      https://2019.jsconf.eu/una-kravets/css-houdini-and-the-future-of-styling.html
    thumbnailUrl: 'https://i.ytimg.com/vi/GhRE3rML9t4/maxresdefault.jpg'
    uploadDate: '2019-06-25T14:14:57.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/GhRE3rML9t4'
    interactionCount: 12272
    actor:
      name: Una Kravets
  viewsPerHour: 3.7262365208318267
  websiteUrl: /una-kravets/css-houdini-and-the-future-of-styling.html

----

It’s almost here! Houdini — the future of CSS! This spec allows developers to
write web worklets with JavaScript syntax and access the CSS Object Model for
the very *first* time. Everything will change!

In this talk, we’ll will walk through some of the visual magic we can create by
using Houdini and its various upcoming browser APIs, and go through a live demo
of how we can get started with implementation. Learn about how to use Houdini
and what it means for the future of web application styling.