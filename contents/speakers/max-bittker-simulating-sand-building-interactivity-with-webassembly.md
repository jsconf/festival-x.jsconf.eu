----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'max bittker: Simulating Sand: Building Interactivity With WebAssembly  '
data:
  published: true
  reviewed: true
  order: null
  firstname: max
  lastname: bittker
  talkTitle: 'Simulating Sand: Building Interactivity With WebAssembly  '
  coSpeakers: null
  twitterHandle: 'https://twitter.com/MaxBittker'
  githubHandle: 'https://github.com/MaxBittker'
  homepage: 'https://maxbittker.com/'
  potraitImageUrl: >-
    https://scontent-sjc3-1.cdninstagram.com/vp/05a1c86a583a98f67c191660c749cf28/5CBC2750/t51.2885-15/sh0.08/e35/s640x640/45299532_969415519916479_6277919100601630720_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com
  caption: >-
    Thank you for being here. I'm really excited to talk to you, and I'm going
    to get started by introducing myself. My name is Max, and I'm a developer,
    and I'm an artist, and my day job is that like lime a user-experience
    engineer. That basically means that I'm an engineer and build things and
    it's directly informed with the way that the user perceives it, and by the
    effect that it has on them and their perceptions. I also really love
    websites, particularly websites which are like useless or weird. I think
    those are the most fun thing that you can build on a computer. I'm talking
    today about building inter active experiences with WebAssembly, and I have
    to level with you before we start that this talk is a little bit like a
    Trojan horse situation, so I lured you into the stands with a promise of
    exciting web technology like WebAssembly but I'm really going to talk to you
    about my favourite things which are falling sand games, so I hope that's not
    a problem! So, if you hasn't heard of falling sand games, they are kind of
    this whole genre of web games like free flash applet kind of things where
    you have a palette of pixelated elements - pixelated phenomenon. They
    interactor with each other and cool things happen. They share a lot in
    common with Conway's Game of Life, and, in particular, they have the same
    kind of really cool behaviour behaviour where you have simple rules, and
    when you let those play out, you get really amazing complex emergent
    behaviour. It can be really surprising to even the person maybe who set up
    those rules and certainly the person watching them play out, because you
    could never expect exactly what you would get just based on reading that it
    does this, and these conditions are that. It's much more complex. Another
    thing I love about sand games is they have a low fidelity visual
    representation of what is happening on screen. You have a couple of coloured
    pixels maybe moving around a little bit but there is so little to go off,
    that it lets your imagination run wild and interpret what you're seeing with
    its own layer over what is going on, so you see something much more vivid in
    your mind's eye than what is going on in the screen, and there is a lot of
    room to play with that, and that's really fun. So many people oftentimes ask
    when they see these games like how do you win this game? There is no win
    condition or score or anything like that. The way the games work is that
    you're making your own objectives as you play, and that's part of the game.
    Oftentimes, that means understanding what is going on in front of you, so
    maybe you're trying to figure out how a new element works, or how it
    interacts with another one. You might make a hypothesis about what happens,
    make an experiment and test it out, or maybe you will be like telling
    yourself a story, and playing it out with the elements in front of you, and
    seeing what happens and imagining your mind, and so on, and so I think it's
    really wonderful mode of play, and it is one where you're not only the
    player, but literatures kind of a story-teller for yourself. So my favourite
    falling sand game has been for a long game called the Powder Game. And it
    kind of has this really interesting feature which is that when you make
    things in it, right in the game, in the menu, you can upload them, and they
    go to a server, and other people can browse them and see them. It's got this
    long-standing weird and thriving community of people building interesting
    things, and uploading them for each other. And it's really cool to see,
    given like just these small tools, the kind of things that people make for
    each other to play with. So you've got like your bog standard is thousands
    and thousands of volcanos. You know, it's like an infinite fourth grade
    science fair of different volcanos, but they're cool, and I can see why
    people want to make volcanoes. People make different destructible structures
    so you can load it into your browser and then have fun setting it on fire,
    or pouring acid on it, and that is like a fun way to play with somebody who
    you've never met. People get really creative. There are all kinds of games
    that people make out of the simple elements they have like mood rings, and
    you can see this one says it is clear it won't be accurate of your mood
    unless you first vote. There is a lot of vote-pandering in these
    communities. It's a staple of how they communicate, but this is a cool game
    that somebody made inside another game. My personal favourite type of sand
    game upload is this entire genre called Don't Smoke where it displays to you
    anatomical phenomenon that will that will happen if you smoke a cigarette,
    like the lava will travel up and explode your brain. These games are
    awesome. You can see why I was fascinated with them for my entire childhood.
    As I get older and first learned to programme, as soon as I could run two
    for loops together, I knew I wanted to build a falling sand game - the best
    one of, obviously! I knew a bit of JavaScript and knew how to use an API,
    and I looked at other sand games and how they were working and what the
    elements were doing had they were moving around, and when I was re-implement
    ing them, I found they are really simple, and, with just a couple of low
    numbers of hundreds of lines of JavaScript, I suddenly had water moving
    around the screen. I was really excited, and I was having so much fun, but I
    realised that as I kept adding new elements to the game, it was getting
    slower and slower, and I didn't have a very firm grasp on concepts such as
    like functions, or having your code in more than one file, and what I was
    manifesting was as I was adding more features into this big blob of code,
    everything was getting more and more buggy. You can see this blob on the
    right-hand side of the screen was an element  that was a mistake I made
    decided to domesticate and keep in the game as the given element. I couldn't
    understand what was going on any more. So I was okay, I'm going to have to
    do, refactor this code somehow and make it good. I didn't know exactly what
    that meant but I knew I needed to be in different tiles, so I had to set up
    webpack so I could have different JavaScript files. This is the last commit
    I made to the project in 2015. Used webpack for my pending factor which
    never happened. I think this is a common story. So some time went by, and I
    got a cat. I moved to California. But other things were going on in my life
    but I was still thinking about sand games, and I was noticing a lot of cool
    projects that were happening that were letting people build and code in the
    browser, and kind of make programme one element of a larger system. I
    thought that was really cool. So I had this idea that I got excited about
    last year which is what if there was a falling sand game where people could
    code their own elements and upload them, and then all those elements by
    different people could interact, and there could be reactions that nobody
    ever anticipated, and something could happen? So I kind of knew that I
    needed a different architecture diagram for my game rather than having
    anything in one file and one blog, if people needed to write code, there
    would be separation to an engine and maybe the different elements, and I was
    maybe inspired by things like React and I thought okay, there can be an API
    that they talk over, and be the framework, and then the components. But I
    also knew that if I wanted people to actually code and upload their
    elements, there would need to be a pleasant and easy experience, and I don't
    need to handle as many of the edge cases as I could for them. I started to
    prototype this and trying to move the gross logic out of the elements and
    make them as easy and fun to make and make the engine, if it had to be
    gross, that was fine. I was really happy with this prototype and I was
    having so much fun building elements in it, I was having a great time
    thought I want to keep doing it and if I know anything about if you want
    someone to use your thing, it's got to be on the web as far as I'm
    concerned, and so I wanted to start over and build it so that I could
    actually share it with people. So that kind of turned into Sand Spiel. The
    rest of my talk is boring, if you want to do that for the next ten minutes,
    I'm not going to judge you! So, but I will give you a quick demo so you can
    see what it looks like. I will press play. You've got your different
    elements. I will plant some flowers. And then I think that people then set
    everything on fire, but it's okay. Doesn't release any carbon! So, that's
    kind of what the game looks like, and you can see there is this canvas where
    the simulation is happening, and there is the buttons and the UI. So, the
    one of the things that I found when I was building Sand Spiel that turned
    out to be critical and helped me to build it was that I decided to try to
    use WebAssembly. So there is actually WebAssembly in this talk, I'm sorry.
    I've said that word a couple of times now, maybe you've heard it this week,
    but just to, like, rehash, WebAssembly is not really a language it's an
    instruction format that you compile instructions to and has properties that
    people are excited about. First of all, it's fast, so I'm not going to go
    into detail here because this is kind of any kind of performance
    conversation, but particular ly it is, if you have a lot - it's predictable
    what the performance will be. With JavaScript, you can make it fast, but you
    are relying on the way that it gets optimised, and you need to write it in a
    very careful way, whereas with WebAssembly, there are much less moving
    pieces, and, if you write it in a certain way, you know it will be fast on
    everybody's browser. Another important aspect of WebAssembly is that it is
    sandboxed. So it is safe in WebAssembly to run code written by someone who
    you don't necessarily trust on your machine, or even on your user's machine
    sometimes, and it's not going to steal their passwords necessarily because
    it's sandboxed. It can't reach into the rest of the system like some native
    code can. I thought this was going to be an important thing for my of the
    game because I thought I was going to be running people's code they wrote,
    and running it on other people's computers, but it turns out I never got to
    that part. That was ambitious. In the future, this will come in handy, but
    just the other factors of WebAssembly were useful to me. Lastly, I want to
    let people know that it really is ready to use. I was surprised for this
    myself, but, you know, like four major browsers and some other ones as well
    have already implemented it. It works also like a mobile really well, and I
    was, I'm surprised by how fast it's moving and the spec is pragmatic and
    informed by what browsers I  we already have as far as structure, and there
    is a lot of - it so is it is becoming something that you can ship. And I had
    no problems with compatibility, surprisingly, with WebAssembly. One more
    thing about it being ready to use is that the tooling is, at least in my
    experience, was really good. I wrote some Rust code for Sand Spiel that was
    compiled to WebAssembly. The entire tool chain that I used to do that,
    including tools like Wasm and Pack, which let you respect ively compile Rust
    code into a JavaScript file that loads it, and a tool for kind of calling in
    between from WebAssembly and JavaScript, these tools are still like in beta
    but nice to use. There is a lot of shared culture and shared communication
    norms within the JavaScript community and the Rust assembly community. If
    you have expectations about how a library should work and how a
    documentation should be and what sort of error messages it should give you
    that you're used to from writing JavaScript, go you go to write Rust in
    WebAssembly, you won't be shocked or horrifies because it's a lot of the
    same people. They have the same expectations you do of what a good user
    interface is for a tool. This was really great, and I appreciate being able
    to use this. Another really critical thing about that I want to tell you
    about the way that you can use WebAssembly is that you don't have to write
    your whole application in it and it happens to run in the browser and it's
    just a big hunk of Rust or something. My app is 50 per cent JavaScript and
    about 50 per cent Rust WebAssembly. This was awesome because I got to put
    the things that needed to run many, many times a second, and be really fast.
    I got to write that in Rust and make it fast. Then all the things that don't
    need to be fast because it's just like, you know, building user interface,
    or triggering a network request, all those things I got to write? JavaScript
    and benefit from the fact that JavaScript is really good at doing these -
    and also that I got to use the whole ecosystem of React in different tools
    made this really awesome. If I had tried to write the whole thing in Rust,
    it would have taken longer because it's like there's no good tools right now
    for building interfaces yet, not like the way there are in JavaScript, and
    so being able to split my concerns here was really awesome. I think you can
    kind of imagine like the JavaScript code here is most ly just, you know,
    React code like you may have seen before, and the way it interacts with
    Rust, is that essentially, there is a gist-like class that has some
    functions, and - and from the respect of the, it, you're calling the
    JavaScript functions. I have a paint method which will draw a circle on to
    the screen in a certain element in a certain radius, or I have one to reset
    the canvas, or to calculate a simulation. From the JavaScript perspective,
    you're really just calling some methods and it happens to be implemented in
    WebAssembly which is fast. That is some of the tools like I mention before.
    So, as for the WebAssembly code, it looks like this tick method which ones
    one frame per simulation. I will show you how it works. This is by the way
    what powers this part of the game, where the pixels are moving around and
    interacting. So essentially, I have a data structure which is like a big two
    dimensional array of all the data for my different cells of the grid, and it
    goes through, loops through each one in order, and, when it gets to each
    one, it runs an update function based on whatever the type is of the grid
    itself, and so you get to the third one, and it's a sand grid. It's a piece
    of sand, so it matches to the sand update function, and the sand update
    function is really simple. It's like an if-else statement, and the way that
    that works is it it looks at its local co-ordinate system and says what is
    the cell below me? What is the type of that? If it is empathy, then I can
    fall down, and I will just go down there, and I will erase myself and rate
    myself one pixel lower. If that first check failed and there is a piece of
    stone underneath you, then it goes to the second statement, and it checks
    one of the diagonals and tries to fall there. And it does the same thing. So
    that is all there is to this algorithm that lets you do the sand, and kind
    of the trick here is that it is happening on every pixel of the grid, and it
    is happening at 60 frames a second, and it starts to look like how you would
    imagine sand would work. So there is, like, 18 other elements, and some are
    a little more complicated but they have the same pattern of they're a single
    function, they call some APIs to read anywhere neighbours and to write to
    their neighbours, and then you get different behaviour. So, I mentioned this
    earlier, but it really was like the key to being to make this project
    quickly, the fact that I could put things in WebAssembly that needed to be
    fast and I could implement everything else in JavaScript, and use the
    ecosystem, and not have to worry about all the type-checking and all of the
    other conditions that Rust enforces on your code that can sometimes slow you
    down, and, so another thing that I mentioned is the network code which is I
    also build like an upload and download functionality that I really liked,
    and so this has been the most gratifying part of the project, so, a lot of -
    it's pretty much middle-schoolers, but a lot of middle-schoolers play this
    game and draw amazing things. They ignore the fact that there is a
    simulation attacked and use it like MS Paint and not blocked in their
    computer lab which is maybe why they use it, but they draw awesome stuff,
    and it's fun to see what they do. I think like maybe one of the - so the
    most popular, there's an upvoting system and the most liked and loved post
    is this puppy. I can't explain it, but I also loved this puppy. There is fan
    art and people remixing her and drawing her in different situation. On the
    right, that's Super Duna Luna, the tall one. In the Powder Game, there was a
    rule against load ing somebody else's submission. We encourage forking in
    Sand Spiel which leads to this fun stuff. Unfortunately, I mentioned that
    the best part of the project has been seeing the things that people upload,
    but it's also been the worst part of the project as well. Not everybody is
    nice, and there is like, I moderate the posts every morning and waking up to
    it is not always fun. Sometimes, I feel like this person where I feel like
    these people are ruining the game, and I wish it had never been created so
    none of it would happen. And so I do do some manual moderation, but it's
    really not sustainable, and I'm not sure what to do, and so I've kind of,
    like, looked to where I look for to solve problems when I have programming
    problems, and they've not been useful, like, there's no algorithm that would
    be nice for making people be nice to each other on the internet. Not even
    like string-matching algorithms work, I tried. And like, nor do other places
    where who have usually solved my tough programming problems, like CSS
    tricks, they have no button that will make people be nice to each other,
    unfortunately. This is a problem I still have. I haven't solved it, and I
    know there are people who have problems like this, and I'm definitely
    curious to hear what they did or if they're just like there's all this
    invisible work that happened behind the scenes that made it look like things
    are nice. I definitely would be interested to talk if you think you know a
    solution. Please do not tell me to use a neural network! Thank you! So,
    please do, I think we have a break after that, so please play with Sand
    Spiel if you want to kill some time and chill out. I have a longer form blog
    post that goes into more of the inspiration for the game and some of the
    design decisions, and also into some of the technical details because I
    glossed over some things. Thank you so much! [Cheering and applause].
  name: max bittker
  image:
    filename: max-bittker-5244be69.jpg
    filename_500: max-bittker-5244be69-500.jpg
    filename_1000: max-bittker-5244be69-1000.jpg
    filename_square_1000: max-bittker-5244be69-1000-square.jpg
    filename_square_500: max-bittker-5244be69-500-square.jpg
    filename_square_200: max-bittker-5244be69-200-square.jpg
    width: 640
    height: 640
    originalType: jpg
  web:
    twitter:
      handle: MaxBittker
      url: 'https://twitter.com/MaxBittker'
    github:
      handle: MaxBittker
      url: 'https://github.com/MaxBittker'
    homepage:
      handle: maxbittker.com/
      url: 'https://maxbittker.com/'
filename: /max-bittker/simulating-sand-building-interactivity-with-webassembly.html
yt:
  id: '-dD-EaZ29hs'
  url: 'https://youtube.com/watch/-dD-EaZ29hs'
  title: >-
    Simulating Sand: Building Interactivity With WebAssembly by Max Bittker |
    JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/-dD-EaZ29hs/maxresdefault.jpg'
  index: 45
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      Simulating Sand: Building Interactivity With WebAssembly by Max Bittker |
      JSConf EU 2019
    duration: PT22M
    description: >-
      “Falling sand games” were a beloved childhood curiosity, but when I set
      out to write my own in Javascript, performance got in the way of the scale
      and granularity I wanted.


      Could WebAssembly be the tool to build the sand simulation of my dreams,
      or is it still just for blog posts?


      I’ll share with you the history and beauty of falling sand games, what I
      learned building mine to leverage the power of modern browsers, and show
      you how WebAssembly can cooperate productively with the JS ecosystem to
      enable awesome web experiences.


      Detailed blog post: https://maxbittker.com/making-sandspiel


      https://2019.jsconf.eu/max-bittker/simulating-sand-building-interactivity-with-webassembly.html
    thumbnailUrl: 'https://i.ytimg.com/vi/-dD-EaZ29hs/maxresdefault.jpg'
    uploadDate: '2019-08-15T13:41:32.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/-dD-EaZ29hs'
    interactionCount: 4594
    actor:
      name: max bittker
  viewsPerHour: 2.2193654725255314
  websiteUrl: /max-bittker/simulating-sand-building-interactivity-with-webassembly.html

----


"Falling sand games" were a beloved childhood curiosity, but when I set out to
write my own in Javascript, performance got in the way of the scale and
granularity I wanted.

Could WebAssembly be the tool to build the sand simulation of my dreams, or is
it still just for blog posts? 

I'll share with you the history and beauty of falling sand games, what I
learned building mine to leverage the power of modern browsers, and show you
how WebAssembly can cooperate productively with the JS ecosystem to enable
awesome web experiences.

[Detailed blog post](https://maxbittker.com/making-sandspiel)