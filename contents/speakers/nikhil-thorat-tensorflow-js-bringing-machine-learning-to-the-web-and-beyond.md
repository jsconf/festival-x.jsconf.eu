----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Nikhil Thorat: TensorFlow.js: Bringing Machine Learning to the Web and Beyond.'
data:
  published: true
  reviewed: true
  order: null
  firstname: Nikhil
  lastname: Thorat
  talkTitle: 'TensorFlow.js: Bringing Machine Learning to the Web and Beyond.'
  coSpeakers: Nick Kreeger
  twitterHandle: nsthorat
  githubHandle: 'https://github.com/nsthorat'
  homepage: null
  potraitImageUrl: 'https://pbs.twimg.com/profile_images/924850528605102080/FRSzz1q4.jpg'
  caption: >-
    Good morning, everybody. My name is Nikhil. We are here to talk about
    machine learning and JavaScript and TensorFlow.js. If you're familiar with
    machine learning and data science, you will know that most of it happens in
    Python. This was a poll given by a popular blog by Katie Nugets, and you see
    that Python dominates. This is a good reason, and there's been many, many
    years of tooling built in Python, and this field is going to continue evolve
    in Python. And I don't have to convince the folks in this room JavaScript is
    a very popular language. You can see that JavaScript dominates. We think
    there's a lot of the JavaScript community the folks in this room can bring
    to machine learning. Who has seen this? This is TensorFlow Playground. A few
    people, but not a lot of people. I definitely recommend checking this link
    out. In this is an in-browser representation of a neural network, built by
    one of our colleagues at Google. You can change the number of layers,
    neurons, learning rate, and so forth, and see how the neural network general
    lives over a data set. This thing was a huge education al success. It's been
    used in universities across the world now, and Google's own machine-learning
    course, and I definitely recommend checking this out. We asked ourselves why
    was this such a success? Why do people care about this in-browser machine
    learning thing at all? We distilled it down to a few points. The obvious
    thing is that you just click a link and you get going. If you've done Python
    ML, it's a pain in the butt to get your drivers installed, Python libraries,
    and that thing. It's super interactive, you have buttons, you can see how
    the changing the knobs affect the learning configuration of the model. We
    didn't take advantage of this in the playground, but in the JavaScript
    world, in the browser, you have cameras and microphones, and standardised
    access to these things which you don't really get as much in the Python lab.
    Super important to us is that you can actually make predictions locally, and
    data can stay on the client. This is privacy-preserving. So, we took this,
    and we launched a library called TensorFlow.js, released it last year in
    March. It's GPU-accelerated so we use web PL, we use linear algebra, but one
    of the things that we do is we let you make predictions through machine
    learning models but we let you train them directly in the browser, or even
    in node.js, and we will talk about that as well. When designing the library,
    we had a couple of goals in mind one: is that we wanted to empower a diverse
    group of JavaScript developers like the folks in this room. There are a lot
    of awesome people in this community and we wanted to marry these two worlds.
    At the same time, we wanted folks experienced in machine learning to be able
    to port their work to the web. These goals are sometimes at conflict. We
    will talk a little bit about how we resolve those. Okay, so one of the
    principles that we had was we wanted the library to be super easy to use,
    and we kind of leaned towards that over performance. At the same time, we
    didn't want to sacrifice any functionality for simplicity, so just jumping
    into what that means, we decided to go with this eager-only approach. I'm
    not going to go into what that means, but it's a much simpler way of
    programming, and most of the machine learning world is moving towards this
    eager approach, compared to a graph-based approach. We wanted it to be easy.
    We also provide a high-level layers API which is a set of best practices in
    the machine learning community, so you don't have to think about all the
    details of your linear algebra when constructing a model. We also provide a
    whole repository of zero-train models that require zero understanding of
    machine learning to get started. I will show you a couple of of those in a
    second. I wanted to highlight this. We worked on performance when and there
    are  where it matters. We want it to be fast. We took individual models, and
    we figured out how to make those individual models faster on a use-case
    basis. As I said, we don't want to make the library less functional. We
    support gradients. This is fancy talk for sensitivity of eave of the weights
    which means you can train for any operation you use in a TensorFlow library.
    We support TensorFlow ops, and for any of these models, you can dig down and
    get some of the machine learning constructs out of them if you want to. So
    quickly jumping into what the technical stack looks like, at the very top of
    the abstraction APIs, we are our models repo. A couple of pre-trained models
    require little understanding of machine learning. Below that, this is our
    layers API. This is where you can construct a model, you can train the
    model, you can serialise the model for later, and we will show you some of
    that soon too, and we also have below that our core API which is just linear
    algebra kernel, matrix multiplies, convolutions, and derivatives. All of
    these APIs you can hook in at any of these abstraction layers. All of these
    sit on top of web GL in the browser. We use fragment shaders to run our math
    in parallel. In Node we actually bind with the NPI with TensorFlow C++. If
    you use the same API for any of these things, you immediately get the
    hardware acceleration that TensorFlow has been working hard on for the CPU
    and GPU and we will have GPU support eventually. It was very important for
    us not to silo ourselves in the JavaScript world. There is a whole wealth of
    models that are trained in the Python ecosystem that we wanted to take
    advantage of, so we have converter tools that let you take a model and bring
    them back into the JavaScript world. Okay, so let's quickly take a look at
    what the models repo looks like. So, if you check out this link, these are
    our pre-trained models. These are hosted on GitHub and npm, so we host all
    the weights and the JavaScript for you, and we have a wealth of models from
    object recognition, to human pose detection, localisation, segmentation, to
    text clarification, and the list and is  goes on. Just check this link out.
    I want to show you one of the demos because it's fun. This model is called
    Pose Net. Running completely in the browser. Nothing is being sent back to
    the server. The idea here is that we take RGB images from webcam, pass it
    through the pose-detection model which generates key points for my body
    parts and then it returns an object that we can render on the screen.
    Obviously, it works for two people, so this is a lot of fun. We will show
    you how to use one of these models in a minute. The second model is very
    similar to Pose Net, doing a person segmentation. This background is a
    little funny. What it does is that it draws a mask of one where it thinks
    there's a human pose, and a zero where it thinks there's not. This one is a
    lot of fun. One of the effects that I really like is portrait mode. You can
    see this thing blurring, so we have, you know, a software-based portrait
    mode that is running in the browser pretty fast. So let's go back to the
    slides. I'm going to show you how that works and what the code looks like.
    That model is called Bodypix, a pre-trained segmentation model that is super
    fast. Straightforward. You import TensorFlow.js and Bodypix. We have regular
    image tag. That's it. This image is Frank. Frank is Nick's baby, and he is
    doing a yoga pose for us. We are going to try to do a pose for us. These
    weights we host on our bucket for you so you don't have to pay for any of
    that. Then you call one line of code, call segmentation on the image, and
    you get a JSON object out and inside that object is a binary mask where it
    thinks the kid is. You don't have to understand ML bits of this. One of the
    other things this model gives you is parts as well, so it will tell you
    which pitch else are face, arms, and legs, and so forth. We provide some fun
    utilities for drawing masks on top of those. So, you can imagine this being
    used for a video game Sprite. You jump around on screen and you have a fun
    video game Sprite. So, I don't have to explain this to people in the room,
    but JavaScript runs in a ton, a ton of places. We are working hard to get
    TensorFlow.js working in those places, so the browser in Node, obviously,
    working on Electron, and React Native, but I want to show you some of the
    cool examples that we like in these worlds. So, in the browser side,
    hopefully, the links are here, we have a project called CreatingAbility done
    by Google. It's a set of experiments around can we make interacting with
    music and art more accessible? We're using that Pose Net model and we are
    able to play a synth with our face. The link is in the browser.  Try it
    after the talk. Then we have a project called Man  Manifold and this is a
    way to debug and understand machine learning models, and they use
    TensorFlow.js for linear algebra. Air B and B is using TensorFlow.js, they
    ship a model to the client. When you're about to upload a profile picture if
    they see a licence or a government-issued passport in the photo, they yell
    at you so they don't have to only that P on the back-end. On the desktop in
    Node, there's a project called Clinic Doctor which monitors your Node
    application for GPU spikes. They initiate to start garbage flow spikes. One
    of my personal favourites is a programme called Magenta Studio, and they
    have an Electron app that plugs directly into Ableton live and can generate
    MIDI notes on a track for you, or a drum beat, and this is a ton of fun and
    August minutes of our existing work flow. JavaScript is awesome, so of
    course we do it there. So this other platform called We Chat is massive in
    China. If people don't know about it, it's got a billion users, lots of
    programmes and developers, and they run on JavaScript. We are working hard
    to get GPU-acceleration stories inside of that. I will hand it off to Nick
    to talk about some other stuff. 

    >> Thanks, Nikhil. As we kind of highlighted, JavaScript runs in a lot of
    places. And we are starting to think of areas where we can keep expanding,
    where you can run TensorFlow.js. I want to step back and talk about our Node
    bindings first before we dive into the next topic. We launched these about a
    year ago. The library is great, because it's the super fast, it uses that
    library like Nikhil mentioned, with it's great for deploying on to servers
    and doing local work flows on your desktop or work station but there are a
    few downsides that the library has. One is the GPU acceleration requires a
    library which is fast but large. We at TensorFlow don't support MacOS, so
    there's no GPU acceleration on Mac. It's a native model - the Node ... Guda
    can be around 250 megabytes or so, just on Linux. It's a very large package
    to ship. We start no think, there's something in between we can to on Node,
    and we started working really hard and launched earlier this year a new
    headless graphics stack for Node and we launched it and we worked hard with
    the Chrome team to build a headless graphic stack for that. We wanted to
    take that and accelerate our existing WebGL stack. This libraries runs by
    Angle which is the driver we ship in chrome today. On Windows, it's Direct
    3D, open GL on Windows. Your native OS. We think this is going to be great
    for some desktop apps like Electron, mobile, and embedded space, and IoT
    devices. Plus this is going to bring GPU-acceleration to Mac OS. We are
    working hard to finish this up. I want to show a demo of this actually
    running. We built a really quick Electron app, so, if I go and run my app,
    this app uses MobileNet which does basic image classification. It can see an
    image and tell you what it is. As I pull up in my app here, not the most
    exciting UI, but it shows the GL stack that is running. You can see it's
    running Angle with an open GL41 core. When I click run demo, it's fetching
    our model, it's loading, and it predicted that that is a Labrador-Retriever,
    and we are running 150 predictions on the image averaging 30 milliseconds,
    close to 30 frames a second in real time. We think this will be great on the
    Electron side. It doesn't lock your UI thread. You're dispatching all of
    these ML calls through the Node process, all with a headless GL, and that
    package is like five to ten megabytes. It's very small. This is the latest
    type of IoT boards. This is jet son Nano with a big GPU stapled to the top
    of it. Running that same model, Node, not the most exciting but we are doing
    around 76 millisecond of reference time with the very thin ARM64 build-up or
    Node back-end. I want to talk about another library we've been working
    really hard, and it's in-browser visualisation for our TensorFlow.js
    library. Not just package, called TFTS-VIS and you can think about it as the
    Chrome DevTools for models, it's a canvas for painting a bunch of elements
    that the library provides. We have a bunch of built-in charts for loss of
    accuracy in ML training. We also have what we call high-level visualisation
    methods. This basically allows you to look at those complicated ops like
    convolutions which do a bunch of filters on your image while you're training
    and see what happens in between those convolutions. Evaluation utilities is
    another set of drawing libraries, and that shows you where your model might
    be over biased in a particular class in ways that you can see how you might
    alter your data set to see you have a nicely trained model. We've been
    talking about - we've shown you a lot of stuff, but we want to show you a
    lot of things that Nikhil and myself, and the team have been thinking about
    when going forward with the project. One thing is we are really excited
    about the current future with all the new specs that are coming down the
    browser, especially with JavaScript. On the website, we have two new
    standards we've been looking at really hard the last couple months. One is
    web GPU, the next-generation graphics stack coming to the browser. We've
    been working hard with the Chrome team to get that implementation up and
    rolling. Another one we've been looking at is Wasm. We need to do ...
    effective accelerator for CPUs. We are hoping to have something for devices
    where the GPU isn't all that great, we can fall back to Wasms. One of the
    great parts with the ML space is just the amount of research, and we are
    finding about every year, our same model app gets faster from reductions in
    architecture, or new hardware acceleration stories. So, every year the
    models that we keep showing continue to get faster, especially on Edge and
    browser devices. Another great product we have at Google is Auto-ML. That
    solves the whole training part if you want to do an image classification
    problem. You can give it a set of images, and it uploads to the cloud, and
    it automatically finds the right architecture for your model, and then spits
    out the model that you can play on your device. We are looking at some
    integration with that team as well, to make it a seamless experience. The
    other thing that our team has been focusing on is this optimising our
    existing back-ends, so our WebGL implementation, we worked on packing
    textures which is a fancy term of using less memory as much as possible in
    our acceleration library, and we done that speed for a bunch of things,
    including iOS up to ten times faster than what we were seeing before.
    Looking at the things we are going to launch this summer, Visualisation has
    already launched. Another package is the data library which is an
    easy-to-use package for getting stuff out of the browser - microphone data,
    webcam data. You don't have to worry about Tensors. You can streamline these
    things into your model. On our platform side, expanding where we run
    TensorFlow.js, as mentioned, WeChat, the headless GPL stuff and diving into
    how we can provide a nice React Native experience. Then on our
    out-of-the-box model fronts we will continue focusing on audio and text
    models, as well as improving the accuracy and performance of our existing
    offerings. With that, I want to thank you for attending our talk. Everything
    we've shown is we work purely in open source, and all of our stuff is found
    on gs.tensorflow.org. This project would not be where it's at with the large
    number of open-source contributors we have had and we want to extend a big
    thank you to them and all the hard work they've done. One last plug: we are
    actually hiring a developer-advocate for our team. If anyone is interested,
    please follow that link, or some and see us at the booth here. That's all!
    [Applause]. 
  name: Nikhil Thorat
  image:
    filename: nikhil-thorat-b7194397.jpg
    filename_500: nikhil-thorat-b7194397-500.jpg
    filename_1000: nikhil-thorat-b7194397-1000.jpg
    filename_square_1000: nikhil-thorat-b7194397-1000-square.jpg
    filename_square_500: nikhil-thorat-b7194397-500-square.jpg
    filename_square_200: nikhil-thorat-b7194397-200-square.jpg
    width: 1024
    height: 1024
    originalType: jpg
  web:
    twitter:
      handle: nsthorat
      url: 'https://twitter.com/nsthorat'
    github:
      handle: nsthorat
      url: 'https://github.com/nsthorat'
    homepage: {}
filename: >-
  /nikhil-thorat/tensorflowjs-bringing-machine-learning-to-the-web-and-beyond.html
yt:
  id: imzedQr2tTc
  url: 'https://youtube.com/watch/imzedQr2tTc'
  title: >-
    TensorFlow.js Bringing Machine Learning to the Web and Beyond by Nick
    Kreeger & Nikhil Thorat
  poster: 'https://i.ytimg.com/vi/imzedQr2tTc/maxresdefault.jpg'
  index: 28
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      TensorFlow.js Bringing Machine Learning to the Web and Beyond by Nick
      Kreeger & Nikhil Thorat
    duration: PT20M21S
    description: >-
      Machine Learning is a powerful tool that offers unique opportunities for
      JavaScript developers. This is why we created TensorFlow.js, a library for
      training and deploying ML models in the browser and in Node.js. In this
      talk, you will learn about the TensorFlow.js ecosystem: how to bring an
      existing ML model into your JS app and re-train the model using your data.
      We’ll also go over our efforts beyond the browser to bring ML to platforms
      such as React Native, Raspberry Pi, and Electron, and we’ll do a live demo
      of some of our favorite and unique applications!


      This talk will be co-presented by Nikhil Thorat.


      https://2019.jsconf.eu/nick-kreeger/tensorflowjs-bringing-machine-learning-to-the-web-and-beyond.html

      https://2019.jsconf.eu/nikhil-thorat/tensorflowjs-bringing-machine-learning-to-the-web-and-beyond.html
    thumbnailUrl: 'https://i.ytimg.com/vi/imzedQr2tTc/maxresdefault.jpg'
    uploadDate: '2019-07-01T12:56:39.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/imzedQr2tTc'
    interactionCount: 3491
    actor:
      name: Nikhil Thorat
  viewsPerHour: 1.108004689476179
  websiteUrl: >-
    /nick-kreeger/tensorflowjs-bringing-machine-learning-to-the-web-and-beyond.html

----

Machine Learning is a powerful tool that offers unique opportunities for
JavaScript developers. This is why we created TensorFlow.js, a library for
training and deploying ML models in the browser and in Node.js. In this talk,
you will learn about the TensorFlow.js ecosystem: how to bring an existing ML
model into your JS app and re-train the model using your data. We'll also go
over our efforts beyond the browser to bring ML to platforms such as React
Native, Raspberry Pi, and Electron, and we’ll do a live demo of some of our
favorite and unique applications!

<span class="copresent-message">This talk will be co-presented by [Nick
Kreeger](/nick-kreeger/tensorflow-js-bringing-machine-learning-to-the-web-and-beyond.html).</span>
