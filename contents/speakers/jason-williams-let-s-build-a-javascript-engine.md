----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Jason Williams: Let’s build a JavaScript Engine'
data:
  published: true
  reviewed: true
  order: null
  firstname: Jason
  lastname: Williams
  talkTitle: Let’s build a JavaScript Engine
  coSpeakers: null
  twitterHandle: 'https://twitter.com/Jason_williams'
  githubHandle: 'https://github.com/jasonwilliams/'
  homepage: 'http://jason-williams.co.uk'
  potraitImageUrl: 'https://pbs.twimg.com/profile_images/995462547468902400/_yZee5Rr_400x400.jpg'
  caption: >-
    Hello. One, two, one, two. Hello? Can you hear me? Hello. One, two ... one,
    two. Now it's very loud! Can you guys hear me? Yes. Wow. I mean, thank you
    by the way to JSConf EU for having me here. It's an absolute privilege to be
    at the last JSConf EU of its time. Can you guys give it up for JSConf EU? I
    can't believe it. [Applause]. I cannot believe it. So, you know, biggest
    JavaScript conference in Europe, I think biggest JavaScript conference in
    the world. Going to be talking about building a JS engine. No pressure at
    all! It will be completely fine! I should probably introduce myself. I'm
    Jason Williams. I'm a senior software engineer at Bloomberg in the UK in
    London, dare I say Europe? We're still clinging on. I used to work at the
    BBC as well. Are there BBC people?  Here? Yes, wow! I've also been involved
    in sort of TC39, so I've been working on the proposal over the past year
    which allows you to get on board all of your promises, regardless of the
    state whether fulfilled or rejected, and you have control then to do what
    you want with them. On the Rust side, I've also been involved in Rust as
    well. I used to be the maintainer of the Sublime Text Rust plugin. I've
    since moved into the Rust DevTools team, and they focus on sort of ID
    plugins, tooling, and then the Rust language server as well which is pretty
    cool which is a single process that handles things like debugging, hinting,
    and all the editors can make use of that. So I thought doing some
    specifications with JavaScript, really interesting, you know, working a
    little bit on Rust as well, my two favourite things, how can I marry these
    two things together? My two languages that I love so much? How can I bring
    these together? And by the way, the biggest JavaScript conference in the
    world, I know it's a ballsy move talking about Rust, but I'm going to go
    with it. Bear with me. I thought why not build a JavaScript engine written
    in Rust? Take the fun and accessibility of JavaScript and then power that
    with Rust, and then see what we can get? It was a bit ambitious. It was
    quite checking. I actually started off by looking for a place where I could
    contribute to this. Nowhere existed, like no-one had built one in Rust
    before, at least two years ago, anyway. There was one single project called
    js.rs, and the maintainer abandoned it. It was six years old. I tried to
    build it, and there were 650 errors. It was basically because he made it at
    a time when Rust wasn't 1.0 and so the syntax had changed and moved on, and
    it was faster to build one from scratch than it was to try and get this
    working. That's exactly what I did. I'm not an expert by the way in parsing,
    or writing compilers, or any of that. I mean, I even struggle to read CSS in
    the morning, so I'm not an expert in parsing source code, so I thought let's
    start from somewhere. I thought it was a jump. Doing small things in Rust,
    and going from like "hello, world" to full-on JavaScript interpreter was
    probably a bit of a jump. I probably should have done something in between
    like a to-do MVC, or something like that. I knew I was on to something here
    that I had a good language, something to work with. There were a couple of
    reasons that I wanted to use Rust to build this engine. One was control. One
    of the things Rust says to you we're going to give you the control you can
    have plus all the safety. And so I can utilise a sort of close to the
    metalness of Rust and do the things I need to do, and then the compile time
    means I don't fall over myself. It was quite fast, so it is built on top of
    LOVM which means the years of the LOVM compiler they've done, Rust can tap
    into that and make use of it. Sometimes, you can get faster CodeGen which
    produces C. There's memory safety as well. Rust has an ownership system
    which is quite unique. Basically, if you were passing a value into a
    function, the function is now the owner of that value, so there can only be
    one owner to a value. That means when Rust wants to get rid of data it can
    do so with 100 per cent confidence because nothing else is pointing to that
    thing. You don't have dangling pointers, or  anything like that. Currency, I
    might want to make use of this at some point. Again, because of the
    ownership model, I won't have to worry too much about multiple threads,
    trying to access the same value, and then what I need to worry about data
    races. All of that is taken care of at compile time which means at run time,
    I'm not penalised on performance. So, yes I thought it's a good start. Let's
    get going. So I started. About two years ago, I started, I made a Git Repo,
    an engine called Boa. Someone asked me why I called that? An evil boa in a
    zoo in Australia. I thought I'm naming my engine after that. I'm going to
    start with a high-level view here. So the architecture that I'm going to go
    with for now is going to be a few things missing, for those of you who are
    familiar with compilers, but the view that I'm going to start with is taking
    some source code, and that can be from, say, a network, or in this case
    reading from a file, basically. Taking the source code, bringing it into as
    a string buffer, so just imagine a big string of JavaScript. And I'm going
    to use the scanner that I've made to break that down into some various
    tokens. And these tokens, they're basically like groups of characters that
    are bunched together to have some sort of semantic meaning. In this case,
    we've got function as a tone, or fu, or the opening parenthesis here. We are
    going to send them on to the parser operation. These expressions are
    different. Expressions are hold other for example s. If you've got the
    opening of a function, you've got function declaration. The block inside
    that function, we've got some variable declaration, so the variable
    declarations would be children to that function. That's generally the idea.
    Let's just step into that a little bit closer. I'm going to take that line
    of JS here. I showed this to someone earlier, and they were like, "You
    should have used const!" Sorry, I forgot. I'm going to start with Let.
    Imagine you're scanning this, so the thing that reads the file has done its
    job now and it's going to pass this through. The first thing we are sitting
    on is the Let. We will produce a token from that. The token in this case is
    our object. We've got the value. We want to keep hold of the value. That's
    useful. We want to make a category for the tone. In this case, it's a key
    word. The reason I know that it is a key word is because I took a look on
    the spec, grabbed key words and codified against that. So, when I take a
    string like let that's got no quotes at the beginning, I know it's going to
    be either an identifier, or maybe even a token, so what I start off by doing
    is checking off against my list of key words, and I know that this one is a
    key word. Conf does the same thing but it doesn't exist as a key word so we
    assume it's an identifier. We are keeping track of the position. The
    compiler doesn't really need that per se, but it's good if you're debugging
    and you can output that there's a problem on this line, or if there is a
    token we're not expecting, we can say there was an issue here, and it's on
    this column, this line number. Punctuation gets its own category. Again
    with, we want to keep the value and where we are and so on. So here we've
    got. Some punctuation, a string, and an identifier, and a key word. We're
    going to place this into an array, and then pass it on to our parser. This
    makes it easier for us to deal with when we're traversing through the source
    code. If you want to look at Rust, don't worry about understanding the
    syntax or anything like that, but I make use of Rust pattern-matching. Think
    of Switch Case. It is similar but more powerful. The idea is that you can
    take a character, or anything, actually, and then the pattern-matching
    allows you to do some destructuring on that. You can say is it this or this?
    You can do bindings which I don't have an example about here, or we can say
    is it a digit, or is it alphabetic? This this case, we're on let, so it is
    alphabetic, so we go into a state of trying to parse and an identifier. And
    then we take this, put it in a loop, and of through each character in our
    source code and you do the same thing. With each character you land on,
    that's a state. It's a state machine going on. If you're in a quote, it's a
    state of parsing a string. If you're in a character, it's parsing an
    identifier and a key word, and so on. I've got a demo. This is something I
    did earlier. I was going to do it live, but Paul Irish is around, so I just
    wanted to make sure that he's not going to get interference, or anything!
    This is a quick writing conf, equals JSConf. We will output some tones. Very
    similar to what I showed you earlier. We have key words, an identifier, and
    our punctuation, et cetera. This is now ready to go. We're Aldershot Town 
    done in this area. With parsing, we're going to sort of take that array of
    tokens, and we are going to try to build a tree structure now. So we are
    going to start building expressions from these tokens. The way we do that is
    similar to how we were iterating for the tokens as well. With the
    characters, we had some pattern-matching going on. We're going to do the
    same thing. This time, though, we're able to pattern-match on tokens. Now we
    can say we are sitting on a token that is representing a key word, or
    representing an identifier. If it is a key word, we can say this is the key
    word that we are currently sitting on. A quick side note about
    pattern-matching. It's been so successful in Rust, it's had a lot of success
    that there's been, there's been a proposal in stage one to bring
    pattern-matching across into JavaScript. Keep an eye on that. In this case
    here, we are sitting on top of an "if", and we know our next token should be
    an open parenthesis. I've made a utility function here called expect punc,
    expect to have a premises or error out at that point. We can then parse our
    condition. This is between the parenthesis, and we can make an expression
    there, and we can do the same thing with the "if" body, and that is the
    expression underneath. "Next" there chemicals it if the token is "else",
    which is optional. We may or may not have angles. If we do, we parse that as
    well. After that, we've got three expressions: the condition, the body, and
    then potentially the else, and we add those expressions underneath the if 
    "if" expression, so you can start to see the free structure we've got. Don't
    worry about the syntax of this, but this is implemented using an enum. The
    expressions are what they call variants. Each variant can hold another
    expression. You get the recursive structure, and the if variant holds an
    expression which is a condition which is another expression that might hold
    other things. The if body, and we wrap the "else" in an option which
    basically means we may or may not have a value there. It's basically a way
    of way of us checking to say is there angles? If not, we move on and we get
    a non-value. The box you can see as well, so these are like the types and
    the box is basically saying that these are going to live on the heap. And it
    will manage that for us. So, take a look at this. I've added a bit more code
    now. We had a let const. I've added more around that. If we started with our
    function, we get a function declaration expression. And as we work our way
    down, we get a let const, and that generates is a "let" generation
    expression underneath the function, and the const expression is just a
    little, so that is basically saying it's a value that we don't need to
    evaluate, it's already there. That is also a child of the let declaration.
    The reason for that is that you can declare variables without defining what
    they are. In this case, we are defining it as well. So we go down to our
    "if", and we have our if expression which holds an operation, a condition, a
    then, and angles. As I said earlier, the else was wrapped in an option, and
    we didn't use else in this case so we just return as non. Then we go into
    our if body which is the block expression, and we have another let
    declaration, and that also has a concept underneath that as well. The last
    thing is the return which gives us the return expression. So the source code
    that you see on the left is what would generate the tree we have on the
    right. Again, a demo, so, hope you can run this. And then there we go. Yes.
    And so there is a lot more going on there, and that is because I can only
    cover one more on one slide, but there are more expressions. In this case,
    there's a block expression at the top, and that represents the global scope,
    and you've got the function declaration underneath. But you kind of get the
    idea. So, now we are going to try and evaluate the tree that we've
    generated. And there are a couple of things that we need to do and bear in
    mind. The idea is that we want to walk through the tree and then make
    decisions based on which expression we land on. So, in this example here,
    we've got a let declaration expression, and the JavaScript underneath is
    just an example of what that has generated, and so, on the right, we've got
    the Rust code. What I decided to do was to represent JavaScript values in an
    email, and so we've got the sort of values that you can have on the
    right-hand side. A symbol is missing. PRs are welcome. But we've got null
    undefined, boolean string number, integer, object, and function. Some people
    wandering why we have integer if all numbers are 64, 64-bit floating points?
    If you're doing stuff around bit-wise operations, we need to convert them to
    a number, do the operation on that, and then convert it back into a floating
    point. So it's kind of used internally. Then we take a value and wrap it in
    a GC so there is a great GC library that somebody made and it was super
    useful, and the reason I needed that is because in JavaScript, you can
    reference one value for multiple functions, and so that value goes out of
    scope. You need to make sure that it stays alive, and so the idea here is I
    can take a value that I've made, put it in the GC, and that GC will
    automatically handle not garbage-collecting that until  nothing else needs
    it, or at least until it goes out of scope and nothing else can possibly
    point to it. Manesh worked on that. He did a great job on that. I have my
    value data which is a string, and I pass my string in, and I now have my
    value, which is great. We need to put the value somewhere. So I started off
    by using hashmaps. The idea was that I had a naïve approach which was
    whenever we come across a function, create a hashmap. Anything inside that
    function, I will throw in there. This is to get going. It got me
    surprisingly far. As you saw the tree earlier, every time I stepped on to a
    function declaration, I would step on to a hashmap. Every time I came across
    a let declaration, I would add the value straight in. Real engines do more
    than this, but if you want to get going, it was pretty effective. You can
    see here, though, that quickly it start to fail, because we have our B here
    that is in same environment as the conf and the B should probably be removed
    once that block expression finishes. So I realised I do need to have more
    environments than just the one for function. Took a look at the spec. The
    specification actually points out five of them, and it calls them records.
    I'm not going to read them out, but you kind of get the idea. And is to I
    then took the environment section of the spec and basically implemented
    that. It was not easy. It was not easy at all. But basically, what I do now
    is I created function records, I created block scope records, global scope
    records, and even modular records, and then the idea is every time I made a
    new record, I would add metadata to add value, and I would give it a parent
    property as well, so that I could point to the record I made of previously
    and then you start to have a sort of chain, the scope chain, where we can do
    our look-ups. If you go back to our tree, the idea is that I make a function
    declaration, and I make a function environment. I have a declaration, I add
    my value in there. Have a block expression, I make a declarative
    environment, add my value in there. So far, so good. Return is interesting,
    because the Conf is not in the turn the  current environment I've just made,
    so I have to make use of the patient property to do a lockup. In this case,
    I'm trying to find where const is. I'm saying can you give me the value for
    const? It doesn't find it. It gets it from the function declaration scope
    and gets it from there. This is basically the scope chain that you probably
    heard obviously people talk about. You can actually put your code into
    various tools that show you the tree, so there's AST Explorer. I think it's
    astexplorer.com or dot net, and you can put your view in there and see how
    it would be expressed as an abstract stream. With all of this. Let's give
    this a try. I'm going to console.log it out. It implements the console.log
    which prints the value given. There we go. And so we have JSConf EU. Thank
    you! [Applause]. It's pretty fast as well. Yes, there we go. Got it working.
    To begin with, I got small things working, then I slowly started adding some
    other stuff, so I think this week, you know, it can do let and comps, a bit
    better, arrow functions were easy to add. Once you get the building blocks
    there, it becomes easier and easier to add more stuff. A couple of
    performance opportunities: so one is maybe don't parse everything. Most
    functions are declared. Don't end up evening being ... so it's not worth
    parsing every single thing you come across because that can slow things
    down. Spider Monkey and V8 do lazy parsing and may not add it to the syntax
    free straightaway and make a note of it and parse it will have  before it is
    ran and parse lazily. It will check through functions but not actually add
    them to the AST. That's one tip. Don't parse functions that aren't going to
    be called. All the JS engines in use today already do this. Another
    opportunity is to make use of the concurrency in Rust, so I can actually
    break these tasks apart, have them run on separate threads and pass data
    between each etch other. Got a scanner, pass the tokens across into the
    parser, because a scanner doesn't need those values anymore, and it doesn't
    need to hold on to them. I can go further than this. I can go further and
    have a work er reading the files into the parser. This is something that
    script engines do today. It's called script-screaming. The new WebAssembly
    cider monkey does this. As the script is downloading, it can start running
    straightaway. V8 does this already as well. A couple of good things -
    implementing JavaScript, I need to do that. JIT compilation, hopeful working
    for us with a good package called Holy JIT - I like that. I will do more
    stuff on the event loop, and more tests around that, and United States
    advertising tests 262. That's it. I've brought JavaScript to the Rust
    ecosystem. People in the Rust world can make use of it if they want to
    tokenise. It's quite modular, if they want to have a parser in the Rust
    world, they can do it. They can use it. They have some JavaScript. Then I
    thought have I married my love of these two things together? I brought JS
    into the world of Rust. Can I bring this piece of Rust into the world of
    JavaScript? Yes, I can! There's WebAssembly. I can bring this whole thing
    into the browser. I know! I know! The Rust team and the WebAssembly working
    group have been working together for quite a while now to make Wasm really
    awesome especially via Rust, working on great tooling over the past few
    years. Why not take of those. One of those tools is Wasm bind be and let's
    take that and use it with Boa, bring it into the browser, running JS. The
    way that works is pretty peaceful. You take WebAssembly, bring it on to a
    place where you want expose. Something like this, exposed as a ES6 module. I
    thought let's add Wasm into that, build my package. It will generate
    WebAssembly, and I can use that. There are some advantages to this. It is
    quite fast. When the browser pulls it in, it can run it straightaway. But
    it's compiled, it's more compact, so you've got a faster download because
    you're downloading less code. There's still the safety aspect there as well
    because it follows the same rules, like same origin and browser limitations,
    so you don't get the ballot box making requests where it shouldn't be. I can
    expose it to JavaScript. I can use it as though it's a JS module. It's
    actually Rust I'm importing there. It's not JS. I can pass it a string. And
    I can run it. That's the Wasm attribute. You put that on to be of the
    function of any function you want to expose in the JS world and it will
    build your package into a Wasm file and then export it. Like this. I'm going
    to build it. I'm doing Yarn serve because there's a WebAssembly plugin.
    That's going to build that out. Take a look on the left. It's going to
    generate a package folder. It's pretty quick. I can make changes to Rust
    code and that are long-run, and the browser will reload. It's like I'm
    writing JavaScript, basically. Now we have a Boa bind gen Wasm file, and you
    can  import that into - we're going to write it, scan it, parse it would be
    evaluate it. And then we're going to bring that back into JavaScript, and
    then basically print the value out. I'm going to try to do something
    challenging. Over time, it will get more challenging, but this is the most I
    can do right now. Hopefully, we get - we can return "hello", we can do plus
    JSConf, second function. Are you ready? Oh! Come on! [Applause]. That's what
    keeps me up. This is why I'm in the industry. This is  that's Rust running
    there. There's no network request. That's Rust running in the browser
    executing that JS, scanning it would be parsing it, evaluating, and the
    JavaScript is there as well. They work hand in hand. The takeaway is you can
    take the ... performance-sensitive parts of your application, build them in
    Rust, as and you only need to change those bits, not the whole application.
    The next time you're thinking of building a JS parse er like this one, or a
    game engine, it was super easy and worth doing. It's definitely worth
    thinking about. You can actually play with the demo as well. It's on that
    GitHub repo. You can go with there and play it live. Also, there's the Wasm
    book, and people here will be talking about WebAssembly as well.
  name: Jason Williams
  image:
    filename: jason-williams-6fc4e910.jpg
    filename_500: jason-williams-6fc4e910-500.jpg
    filename_1000: jason-williams-6fc4e910-1000.jpg
    filename_square_1000: jason-williams-6fc4e910-1000-square.jpg
    filename_square_500: jason-williams-6fc4e910-500-square.jpg
    filename_square_200: jason-williams-6fc4e910-200-square.jpg
    width: 400
    height: 400
    originalType: jpg
  web:
    twitter:
      handle: Jason_williams
      url: 'https://twitter.com/Jason_williams'
    github:
      handle: jasonwilliams/
      url: 'https://github.com/jasonwilliams/'
    homepage:
      handle: jason-williams.co.uk
      url: 'http://jason-williams.co.uk'
filename: /jason-williams/lets-build-a-javascript-engine.html
yt:
  id: _uD2pijcSi4
  url: 'https://youtube.com/watch/_uD2pijcSi4'
  title: "Let’s build a JavaScript Engine in Rust by Jason Williams |\_JSConf EU 2019"
  poster: 'https://i.ytimg.com/vi/_uD2pijcSi4/maxresdefault.jpg'
  index: 2
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: "Let’s build a JavaScript Engine in Rust by Jason Williams |\_JSConf EU 2019"
    duration: PT28M11S
    description: >-
      Have you wondered how JS engines work? This past year I built an engine
      from scratch in Rust. It was fun, weird, exciting and sometimes
      exhausting. I will share my experience as well as what it is like to work
      on the specification, collaborate with TC39, and lessons from engines in
      use today.


      https://2019.jsconf.eu/jason-williams/lets-build-a-javascript-engine.html
    thumbnailUrl: 'https://i.ytimg.com/vi/_uD2pijcSi4/maxresdefault.jpg'
    uploadDate: '2019-06-20T14:01:24.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/_uD2pijcSi4'
    interactionCount: 28434
    actor:
      name: Jason Williams
  viewsPerHour: 8.329551819576121
  websiteUrl: /jason-williams/lets-build-a-javascript-engine.html

----

Have you wondered how JS engines work? This past year I built an engine from
scratch in Rust. It was fun, weird, exciting and sometimes exhausting.  I will
share my experience as well as what it is like to work on the specification,
collaborate with TC39, and lessons from engines in use today.