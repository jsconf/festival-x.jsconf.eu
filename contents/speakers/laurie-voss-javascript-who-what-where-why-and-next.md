----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Laurie Voss: JavaScript: who, what, where, why and next'
data:
  published: true
  reviewed: true
  order: null
  firstname: Laurie
  lastname: Voss
  talkTitle: 'JavaScript: who, what, where, why and next'
  coSpeakers: null
  twitterHandle: seldo
  githubHandle: 'https://github.com/seldo'
  homepage: 'http://seldo.com'
  potraitImageUrl: 'https://cramforce.github.io/playground/images/laurie.jpg'
  caption: >-
    Laurie Voss - JavaScript - who, what, where, why, and next

    >> Hello, JSConf holy Cow! There are so many of you. This is the biggest
    conference I've ever been to, and it is also, I'm embarrassed to say, this
    is my first JSConf EU. I kept trying to come but I had immigration issues
    and all sorts of stuff, and I made it just in lime for the last one. I'm
    extra specially thrilled to be here and be invited to speak, but before we
    get started, the way that I don't die of nervousness is I always take a
    speaker selfie, but there are millions of you, so I'm going to take a bunch.
    Look happy! Like you just heard the best talk of your life! Amazing. All
    right. With that important business out of the way, hello, everybody, I'm
    Laurie. I'm one of the co-founders of npm Inc, one of the chief data
    officers there, but what I really am is a web developer, making the web
    bigger, and better, and more accessible to everyone is what drives me, and
    it's been driving me for 23 years now, which means sometimes I meet people
    who are younger than my web development career! Which is weird. And, today,
    I'm here to talk about JavaScript. I'm going to talk about who we are, the
    people who write JavaScript. I'm talking about where we use JavaScript, and
    what we are doing with it today, and also I'm going to talk about why, the
    forces that are driving us to the state that we are in right now. Finally,
    I'm going to talk about what comes next. Looking at current trends, and
    guessing where they're going. The goal of this talk is to give you a sense
    of perspective about the state of JavaScript as a whole and where you sit in
    it. So many developers work in a vacuum, not knowing whether it is best
    practice, a fad, or this hopelessly out-of-date thing that nobody does any
    more. I hope you leave this talk knowing the one thing you're using is a
    really good thing with feeling that you should move away from one thing that
    you're using, and also excited about learning one new thing that you hadn't
    heard about or you hadn't decided to get into before. But before I say all
    of that stuff, it's worth asking how I know? Where did I get all of this
    information? We have three main sources for the stuff I'm about to present.
    The first is the npm registry statistics. The npm registry contains amazing
    data about what JavaScript developers are up to and what they're using, and
    we also did a survey. Our first annual survey got 1,600 responses, and our
    second got 33,000 responses. We have an enormous amount of information of
    people telling us what you're up to and why you're doing it. I also
    supplemented and double-checked our numbers using the excellent State of
    JavaScript Survey run by the community. I also have one final surprise
    source which is ten years of JSConf EU talk proposals! Ten years! My
    goodness. That is so much work. Can we have another round of applause for
    ten years? [Applause]. As part of the celebration of the tenth year of
    JSConf EU, the organisers asked me to analyse the data. They gave me all of
    the titles and descriptions of all of the talks that have ever been
    submitted to JSConf EU and they asked could I find something interesting in
    this? Boy, I found interesting things in this. First off, there are so many
    talks this year. The first JSConf EU had 44 talks submitted, and this year,
    there were 932. In 2012, someone had the bright idea that someone submit
    their talks at JSON which was a goddamned nightmare to parse back into text
    and sentences, so thank you whose ever bright idea that was. The single most
    common phrase in the last ten years has been "in this talk we will ...", and
    the second most common phrase was "learn how to", and sometimes, it was
    both. But there's something much more interesting which is the JSConf hype
    meter. I wanted to track how popular various technologies were, and
    technologies get mentioned more and more often. Everything is going up and
    to the right. Instead, I measured how many talks contain a word as a
    percentage of all of the talks submitted. This is an example one before it's
    of Node and npm. We're talking about Node last time  much less than we used
    to but talking about npm about as much as the same as we ever did. All
    through this talk, I will weave in the JSConf data and if what we are
    talking about lines up with the reality of what we're doing. But, l  Laurie,
    you had a huge corpus of text. You could have built a markup generate
    colour. You bet your ass I built up a markup generator. Here is a
    machine-generate the titles based on past submissions to use for your future
    consequences. Train your next-level sequential arts. This is definitely
    going to be done by Jenn Schiffer. Talk about tools for capitalism! I think
    it's possible that CJ has already written this talk! Distributed computing
    in the world of CSS and JS. It is possible they did this yesterday! I wasn't
    here yet! AMP for why you're being an Eyebrow. Martin is going to handle
    this one. Serverless. I don't know what this means but I bet somebody could
    talk for 25 minutes and persuade me it's true! Go Node and JavaScript
    Crypto. I don't know what it is but it's probably a bad idea, and I'm
    looking forward to seeing these conference talks in future. Before we dive
    in, a couple of disclaimers, some of what I'm presenting here are facts, and
    some of what I'm presenting are opinions, and I'm trying to be as clear as
    possible. Sometimes, you're going to see a graph that says that your
    favourite technology is getting less popular, and what I'm asking is that
    you don't get mad about that. Don't get mad about facts. I have so many
    terrible opinions that you can get mad about, but try not to get mad about
    the facts. I do not have a horse in this race. Apart from npm, I'm not a
    contributor to any of the technologies I'm discussing, I'm just presenting
    the facts. Secondly, a lot of what I'm talking about involves relative
    popularity of technologies, and I want to make clear that, just because a
    technology is popular doesn't mean that it is good. It doesn't mean that
    it's the best technology. I don't know what the best technology means. But
    for technology, popularity is useful in and of itself. If there are a lot of
    people using your technology, then there will be a lot of people find and
    fix bugs, there will be a lot of tutorials, there will be a lot of Stack
    Overflow questions answered for you. If you work with something popular, it
    often makes your work easier regardless of how good it really is. Finally, I
    really love what I talk about, and I'm going to get excited towards the end
    and swear like an absolute fucking sailor, so I have no intention of toning
    that down in any way, so apologies in advance. Who are we, JavaScript
    developers? The answer is at this point, we're pretty much like everyone
    else. If you look at our demographics, the same age distribution, same
    instrument profile, we live in all the same countries as all of the other
    software developers and the reason for that is because we nearly are all
    software developers. We are 11 million developers now writing JavaScript
    every day. And those 11 million developers are using more open-source
    software than any other language community. The npm registry is now the
    largest repository of open source of any kind, by any measure, by number of
    modules, by lines of code, number of users - what are you want to pick. It's
    more than twice as big as the next registry. You could fold all the other
    registries into our registry if you wanted. Does having a big registry of
    open source software translate to activity? On GitHub, JavaScript is the
    biggest repository by numbers of line of code, and it has been in seven
    years in a row. In stack overflow's huge developer survey of 80,000 people,
    JavaScript was the most popular language with 68 per cent of all developers
    saying they write JavaScript at least some of the time. Of course, you're
    all at a JavaScript conference, so that you knew that JavaScript was popular
    already, but here is the truth: JavaScript is the most popular programming
    language in the world right now, and there are more developers than ever
    before, so JavaScript is really the most popular programming language there
    has ever been. And as JavaScript continues to grow, the JavaScript community
    is changing. One thing we noticed that has changed between our survey in
    2018 and the last one we did, is that JavaScript developers are getting more
    experienced. They've been writing JavaScript for longer. We especially
    noticed this with npm itself. A year ago, half of our npm users were new,
    which is to say they had been using npm for less than two years, and this
    year, only about 36 per cent of people are. Around about 2014, and 2015,
    there was a massive spike in the number of npm users - around about that
    time, it's when JavaScript - existing JavaScript developers tuned into npm
    and the existing pool of JavaScript developers all sort of adopted npm en
    masse. But, today, the number of new npm users and the number of new
    JavaScript users, they look about the same, because, basically, anybody who
    learns JavaScript in 2019 is learning npm at the same time. So now believe
    that about 99 per cent of JavaScript developers are using npm, and that's
    part of why npm has so much information about what JavaScript developers are
    up to at the. This ever-growing pool of increasingly experienced JavaScript
    developers means that we've also seen a shift?  In what JavaScript
    developers care about. We knew from analysing last year's data that more
    experienced developers care more about best practices. They do more testing,
    they use more linters and bundlers, they care more about security, and so
    now the whole community is getting more experienced, and so everybody is
    caring more about those sorts of things. Since last year's survey, the
    number of people who said they were concerned about the security of the
    open-source modules that they use, has increased. In the last two years, npm
    has added two-parking auth to protect publishers from account theft as well
    as security teams to detect and flag malicious packages. Malicious packages
    aren't the good threat model. Accidental vulnerabilities are much, much more
    common. So, last year, we introduced the npm audit command which will find
    and fix security vulnerabilities in your application by upgrading to more
    secure versions of the packages that are out there. We have performed 335
    million security audits in the last 30 days. If you think that your company
    should be doing more about security, you will forgive me if I mention we
    have a booth at this conference and we have a product called npm Enterprise,
    and it can help your company do more about JavaScript security than it's
    currently doing. That brings us to the first visit of the hype meter. Are we
    talking more about security? No. The thing that we talk about is
    performance. We talk about performance three times more than security. If we
    care about security, we should be talking more about it. Another aspect of
    our increasingly experienced user base is that people actually care what
    software licence they use. That was a big surprise to me. I like to throw it
    in there without thinking about it. 58 per cent of developers say that the
    software licence affects their decision to use a piece of open-source
    software, and of those, 55 per cent say that their company prevents them
    using certain open-source software licences means 45 per cent of people
    can't use them overall. Which? The GPL and the APL are unpopular because of
    the restrictions they place on commercial use of software, but much bigger
    than that was unrecognised licences. Basically, anybody who cares about
    software licences has had to hire a lawyer to tell them which software
    licences are okay, so, if you use some software license that they've never
    heard of before, they have to hire the lawyer again, and they don't want to
    do that, so they just don't use your software. So, if you're licensing your
    share, please put a licence on your software, and please pick a big popular
    licence that people have heard of. The second is a consequence of how
    ubiquitous JavaScript has become in 2019. 26 per cent of JavaScript
    developers say that JavaScript is not their primary language. JavaScript is
    so popular it's become inescapable which means there are lots of JavaScript
    developers who aren't writing JavaScript by choice, they're writing it
    because they have to, and that is going to show up in a bunch of places in
    this data I'm about to present. So what are these other languages that the
    non-primary JavaScript developers are writing? Well, top of the list is
    TypeScript. We are going to talk more about TypeScript in a bit but there's
    lots of Python, Java, C++ in there. A fun fact is that 12 per cent of
    JavaScript developers don't write any other languages, they're just all
    JavaScript all the time, but 88 per cent of us are writing JavaScript and
    some other language - at least one more. So, now we have covered who we are,
    we are all over the world, we are every age and experience, increasingly
    sophisticated, we care more about licensing and security,  where are
    rewriting this JavaScript? The answer is every goddamned place you can
    imagine. Let's go to the hype meter. Do they talk more about front-end or
    back-end at JSConf? For the last three years, front-end has been winning HP
    how does that stack up to the facts? Pretty well. 97 per cent of JavaScript
    developers are writing code for browsers. 77 per cent of JavaScript
    developers are also writing code for servers, so node.js is still a big deal
    in the community. There are two big surprises in here, and the first is that
    46 per cent of JavaScript developers are writing native apps. I don't mean
    progressive web apps, a short cut to a web app that you put on a home
    screen, but they're compiling it down to another thing or running natively
    on a desktop or running natively on a phone. 13 per cent of us are writing
    embedded applications, stuff that runs on handsets, watches, stuff that you
    wear. Let's dig more into all of these numbers. First off, when people write
    for browsers, do they target the mobile web or do they target the desktop
    web? The overwhelming majority of us target both, but despite all our talk
    about mobile first, only two per cent of us target exclusively mobile. But
    27 per cent of us are getting away without thinking about the mobile web at
    all, which is probably legitimate. There are probably a bunch of web apps
    that are never going to run on a phone, and that's fine. But now let's talk
    about native apps. 46 per cent of JavaScript developers are writing native
    apps. As you can see, the biggest group is mobile developers - 35 per cent
    of us are writing native mobile apps, and 26 per cent of us are writing
    native desktop apps. A big chunk of us are doing both. So what are we using
    to do that? First, let's look at the desktop developers: 26 per cent of
    developers say they write native desktop apps but here we have a bit of a
    puzzle. You've all probably heard of Electron which is a way of writing
    native desktop apps but only 28 per cent of us say we use it which means
    there are 5 per cent of us writing native applications in JavaScript using
    something other than Electron. I don't know what it is! That 1 per cent of
    electron uses is down to 24 per cent of users. Not only is it that queer not
    using electron, we're using less Electron than before. Where are they going?
    Let's ask the meter about it. It says interest has peaked since 2017 and
    going down since then? What is up? Somebody needs to tell me. If you know
    what they're doing, please come and talk to me after this. Let's look at
    mobile app developers. I measured the popularity of a bunch of - don't pay
    too much attention to how I measured it. The green line is all native app
    frameworks. So native development has been staying pretty much as popular as
    before, but the tools have fragmented. The most popular framework I can find
    is React Native which is the red line and then Cordova which used to be the
    only game in town for mobile apps but now little less popular of React
    Native. Ex-extrapolating, about 19 per cent are using React Native, and
    those two add up to about the 35 per cent of us who are writing native
    mobile apps, but if you're using some other framework, I want to know. The
    final "where" question I want to answer is about server-side apps. Where are
    we deploying them? Unsurprisingly, Docker and Kubernetes is everybody's jam
    these days. They're the dominant way we deploy. Deployment platforms like
    Heroku and Netlify are surprisingly unpopular. VMs are the way I that
    considered - the real number here is serverless. 33 per cent of us are
    deploying on serverless platforms. That's not some early adaptor shit any
    more, that's some mainstream technology. It's part of a broader trend in ten
    providing that I'm going to touch on later. Let's check out the hype meter.
    I decided to look at serverless,  micro services, and Docker. Docker came
    strong out of the gate in 2015 and you has slowed down recently, but
    serverless is on the up and up. That's the blue line. But isn't serverless
    just like a microservice that one else is running for you? I don't know.
    That brings us to the end of where. Now let's talk about what. What are we
    doing? What are we doing with all of this stuff? I'm going to try and keep
    this section also as factual as possible, and keep my opinions out of it. To
    measure this stuff, I use a metric called "shared registry". I used it in
    that graph a little while. It's a very useful metric but it's also a kind of
    confusing metric so I'm going to explain it a bit. This is a graph of the
    weekly downloads from the npm registry. We do nearly 12 billion downloads
    every week. This has grown. This presents a popular if you're trying to
    present how popular something is by download numbers, because download
    numbers always go up. Here's a graph of downloads from major front-end
    frameworks and they're all growing pretty fast in absolute terms. In fact,
    everything in the registry grows super fast. Even the shittiest package is
    constantly acquire new users because there are so many people showing up all
    the time say I don't know what to use, I'm going to use evil package JS.
    Absolute growth won't work. So just like with the JSConf submissions, we're
    using relative popularity. We use the percentage of downloads of a pack
    garage as a percentage of all of the downloads, and that is what we call a
    shared registry. Here's the same graph again using the shared registry
    metric instead. Suddenly, what is going on is a lot more clear - some stuff
    is going up, some stuff is staying flat, some stuff is going down, but it's
    important to remember that going down is not actually declining, it's just
    meaning that it is going up more slowly. Staying flat on this graph means
    that you grew 25,000 per cent, and, if you're going up on this graph, it
    means that you are growing faster than 25,000 per cent. Growing up is
    growing incredibly fast. So now let's talk about these frameworks. The story
    of front-end face, in 2019 is pretty simple, and it is that React has
    conquered the web. React has more than four times as many downloads as the
    next most popular framework. There hasn't been a framework anything like
    this popular, and part of the reason for that is that it's not just a
    front-end framework. In fact, it's not even a front-end framework. React is
    just a component model, and that component model is used in web apps, in
    React Native apps, and also in desktop apps. This is the download data. What
    about the survey where we asked actual people? In our survey, 63 per cent of
    JavaScript developers say they're using React, but "using" is a vague term,
    right? It can be anything. We asked a specific question. 57 per cent of
    people say they write React themselves and 67 per cent said they use it
    written by other people. 15 per cent of us say we don't use React yet but we
    are considering it, so React already a ridiculously dominant framework still
    has room to grow, apparently. Although the shared registry appears to be
    slowing down, so, we don't know it yet which one of those things is going to
    happen. To dig even further, we asked people how much they write React.
    Inside the 57 per cent of people who write React, 49 per cent of people say
    they primarily write React, and which means 26 per cent of all npm users are
    primarily building React, and, if you add in the people who write it only
    sometimes, that means that 57 per cent - near half of all JavaScript
    developers - are writing React some or most of the time. There has never
    been a framework of which that is true. That is a strange and new situation
    for JavaScript to be in. Moving on to the other frameworks. Last year, I got
    into some trouble because I took Angular version 1 and Angular version 2
    onwards and treated them as a single framework called Angular, and I was
    strenuously informed that that is incorrect. Angular version 1 is called
    Angular JS now. Angular version 2 is unrelated to the first one also called
    Angular which I think is still kind of confusing. Angular JS has been in
    decline since 2016, and 2 since 2017. It's important to keep it in mind this
    is relative popularity. In absolute terms, both of these frameworks are
    growing up, both of these frameworks have more users than they've ever had
    before. Angular is extremely popular. 37 per cent of npm users say they use
    some flavour of Angular, 29 per cent say they use the current version of
    Angular. That means there's probably about three million people using
    Angular which is definitely nothing to sneeze at, and Angular is not going
    anywhere. Let's look at one more framework of note which is Vue. Vue is the
    only major framework other than React showing strong positive growth, but it
    is very positive growth. Its share of registry has doubled in the last two
    years which means that it its downloads grew 10x in that time. Our survey
    data backs that up. Up from 24 per cent last year, which means almost as
    many people use Vue as use the current version of Angular. Let's swing by
    the hype meter are and he  and see what they said about front-end
    frameworks. In 2009, of course was talking about Dojo and jQuery. You can
    see the trajectories. They react well to share share of registry which is
    nice. Angular's decline starts in 2015. Amber is flat, and yellow, and React
    in blue is continuing to grow, just like it is in the registry data. One
    thing I haven't talked about in terms of front-end frameworks is web
    components, and part of that is they're built into browsers so there is no
    shared registry to track. Nobody's downloading them. The other reason is
    they don't seem to be very popular. We didn't ask about npm survey, which is
    embarrassing, but the State of JS people did. They allowed people to
    volunteer if they used web components but less than one per cent of deem
    did. I'm not ignoring web components, I don't have gad data about them. The
    people who build web components in browsers, they tell me that web
    components are a lot more popular than they think they are, and you  but of
    course they would say that. Moving from the front-end to the back-end, there
    has been a real revolution. Previously, if I was talking about back-end
    frameworks, I would have talked about stuff like Sales, and Amber. 

    >> Happy, and they have still around about flat growth. They're not going
    anywhere. Everybody's right rich front-end apps and frameworks like those
    that produce static views are not as useful for that use case any more. So,
    instead, what has happened, is front-end framework enthusiasts realise that
    they needed no deliver pre-rendered HTML for performance reasons and they
    called it "server-side rendering" or SSV. They invented stuff to do that
    which is is to say they invented back-ends. The front-end frameworks are
    also back-end frameworks, collections of servers and routers that make it
    easy to build a full server using your favourite framework. I don't know
    about you, but the idea that I can just write components and then throw them
    into an existing framework and not have - that does the serving and the
    parsing and that pain-in-the-ass stuff for me is great but super familiar.
    I'm sure that's how PHP used to work! Some day soon, someone will tell me I
    can FTP my React components on a server and then the circle will be
    complete! [Laughter]. Before I talk about these SSR frameworks, it's
    important to know they're all still pretty small. Here for comparison is
    Express, which is a goddamned monster of a package. It used to be 1.5 per
    cent of the registry all by itself, and it is still enormous. All of the
    other frameworks that I'm about to talk about are that flat line at the
    bottom of the graft that you can barely see. But, when you take Express out
    of the picture, something very interesting is happening. At the top of our
    list is Gatsby. It uses React and provides a whole set of tools for hooking
    it up to back-ends and deploying it. It snuck up on us. Eight per cent of
    people are using it. Sales of Amber and Happy are all around the four to
    five per cent area, and Gatsby is bigger than that now, it's huge, and real,
    and growing like gang busters. The others I want to talk about are a trio of
    products that nearly have the same name. Next is NextJS. Our survey
    respondents were big on that. Nine per cent said they use it. Share of
    registry is giving Gatsby the edge but clearly both very popular. Then
    there's NuxtJS which is like NextJS which is for Vue instead of React. Then
    NestJS which is like NextJS except it's for Angular. I know very little
    about it. I didn't ask about it in our survey, but extrapolating it from our
    survey, two per cent of people are using NestJS and showing healthy growth.
    What about the hype? It's super frustrating. "Next" is just a word. They say
    it all the time, don't mean the framework. And "nest" shows up all the time
    because people talk about nested code and loops, and this is a graph about
    Gatsby. Closely related to these front-end frameworks which are now back-end
    frameworks is GraphQL, which is the hot new way of building an API to power
    all of this stuff. As you can see, GraphQL's core library and two of its
    most popular client libraries are growing off the chart super fast in share
    of registry, and that climb is reflected in the survey data. 22 per cent of
    our respondents say they're using GraphQL but 49 per cent say that they are
    considering using GraphQL which is an enormous number. It means that 2019 is
    going to be the year of GraphQL when everybody gets on board the train. And
    the final set of trend data we're going to look at is the hottest trend of
    all which is not writing JavaScript any more. Remember all those non-primary
    JavaScript developers that I was talking about? Especially the ones coming
    from typed languages like Java, C#, and C++? This is how their influence is
    showing up. The biggest part of this trend is TypeScript. Last year, we were
    caught by surprise when 49 per cent of people - sorry, 46 per cent of people
    said they used TypeScript, and this year, that number is up to 63 per cent.
    But what does "using" mean? Are you using it, writing it, what are you doing
    with it exactly? It turns out 15 per cent of people are just using things
    that are written in TypeScript, and the main culprit there is Angular.
    Angular is written in TypeScript, so everybody who uses Angular reports
    themselves as a TypeScript user. In fact, React and Amber have TypeScript in
    them. Now the only major framework that doesn't have TypeScript in it is
    Vue. Even if you say you write TypeScript, do you mean you write it all the
    time, or just to try it out? Are you a TypeScript dev or dabbler. 52 per
    cent of them primarily write TypeScript, and another 34 per cent are writing
    TypeScript some of the time which means 36 per cent of npm users are writing
    TypeScript most or all of the time which is a tremendous change - a third of
    JavaScript users don't write JavaScript any more. That's amazing.
    Incidentally, one of the features of TypeScript is that it has these typed
    definition files, and those typed definition files are hosted on the
    registry. The last time I checked, 2.5 per cent of all registry downloads
    are Type definitions. The most downloaded - they are mostly downloaded
    automatically, so we should have a chat with Microsoft about that. But what
    about the hype? The hype is doing fine. For fun, I through in Coffee Script
    which is the last time somebody tried to replace JavaScript with something
    that looked like JavaScript. We don't talk about that any more! The other
    part of the not-writing-JavaScript trend is Web Assembly. It lets you run it
    on the web at near native speeds. The first interesting thing is the speed,
    and the second is the people who write WebAssembly say that is less
    interesting than the second part which is the ability to use existing code
    written in other languages directly on the web. To me, one of the most
    exciting features of WebAssembly is that you can write modules to it and
    publish them to the npm registry and install them into your app and use them
    seamlessly without knowing they're there. The way I know that you can do
    that is that it has already happened. Our stats say that WebAssembly is very
    knew. Only three per cent of people say they use it, but that's 300,000
    people, and only 0.6 per cent of the packages in the registry with Wasm, but
    those packages are cool, but the big number for WebAssembly is 54 per cent -
    that's how many people say they consider they're using it which means the
    interest in WebAssembly is enormous. So, now we know what we are and what we
    are using, and those facts together can point us towards an explanation as
    to why. This is where I switch from facts to analysis, which is to say
    opinions, which is to say I am wrong. Before I do that, I need to split the
    room up into two teams. Everybody on this side of the room is Team A.
    Everybody on this side of the room is Team B. Let me hear it from Team A.
    Team B! [Cheering]. Team A! Team B! Great. I wasn't using that for anything.
    Just to wake you up after 30 minutes of graphs. The first question to answer
    is why is JavaScript the most popular programming language? I think we can
    discard the idea that it is the best-designed programming language. One
    answer is the npm registry. A guy did a study where he researched why people
    use programming languages. Is it the features, the speed, or because their
    boss forced them to? The number-one reason was the existence of open-source
    libraries in that language. If there is a library that helps you get the job
    done, you adopt the language of the library, and because there are so many
    libraries in JavaScript already, it keeps sucking people in. Once about
    every 15 minutes, somebody sends me this picture thinking that it is super
    hilarious and I won't have seen it before. It's not a bad metaphor. Every
    time somebody adds another package to the pile, it increases - another
    developer gets sucked in, and that developer increases the pull even
    further. And this has created a new type of JavaScript developer: the
    reluctant JavaScripter. They were once a really small group but now there
    are quarter, or possibly even more of the JavaScript population. They don't
    write JavaScript because they like it, they write JavaScript because they
    have to, and that's bad. That's bad for them, because they hate it, and it's
    bad for us because people who hate JavaScript won't write it well. Why are
    we forcing people to write JavaScript? This happened one time before. A few
    years ago Ruby developers found themselves sucked into the JavaScript world,
    and they hated it. They hate JavaScript, and they keep telling me they hate
    it in their survey results. Some of them attempted to resolve that problem
    by inventing Copy Script but the Ruby folks mostly won. JavaScript is full
    of features that we used to have in Ruby, and TypeScript is something like
    that pattern. Remember all of those non-primary JavaScript developers? A
    bunch of people from typed languages, in particular from Java and C#? They
    miss the types. JavaScript is giving them the type back. That's what they
    like about it. Given the popularity of TypeScript, and types, and
    Microsoft's backing in particular, it's unlikely to go anywhere. In our
    survey, 17 per cent of people who heard of WebAssembly said part of the
    reason they were interested in it means they wouldn't have to write
    JavaScript any more. WebAssembly frees developers from JavaScript, and the
    result will be that a lot of people will stop writing JavaScript. That is
    not something to be worried about. First, not everybody is going to stop.
    Just the folks who hated writing it, and, second, when people writing
    WebAssembly are looking for a way to share code, the in registry is the
    natural way for them to do that. WebAssembly will make JavaScript stronger
    by giving it access to the best libraries from every other language, which
    is a tremendously exciting idea. The next question we're touching on is what
    the hell is going on with React? Part of the explanation is that React isn't
    a full web framework. It has no opinions about routing, or data models and
    other frameworks do, so as models change, it means that people can keep
    using the React components and shift and go and change within that group.
    It's just a component model and it creates truly reusable useful components.
    These are two examples that I particularly like: a colour-picker, and a
    date-picker. I hate installing those. That's been the dream for 20 years.
    Other projects provide libraries of excellent prebuilt components. This is
    one that does it for Google's Material UI. Reach UI makes React components
    more accessible. React can go further with React hooks which are a way of
    handling state that you can just npm-install into your application. React
    Use is a library that gives you a whole bunch of really cool stuff that uses
    the web APIs without you having to write a bunch of code. You can just
    import it and start using it in your React app. This suggests an enticing
    future where we can build web apps as a new and higher level of abstraction.
    We won't have to think too hard about the server but put existing components
    together instead of building them from scratch for each project, especially
    components that we add will create the same feedback loop as npm itself, the
    more components there are, the stronger the gravity well, and the stronger
    the users will be in that community. It could make React an unstoppable
    force that changes web development forever. It's not guaranteed. React is
    slowing down and Vue is showing strong growth. In the next couple of years
    we get to find out if React fades. React's dominance on the front-end has
    totally changed the back-end. Frameworks that enable server-side rendering
    of React apps are now more popular than traditional back-end frameworks.
    Instead of writing code for client and server, we just write code for the
    client and we get the server to deal with it and figure it out. Is that a
    good idea? Is building all web apps as rich front-end apps and getting the
    server to do the work a good idea? I don't know. It's certainly a popular
    idea, and popularity has its own momentum. At least one browser maker is
    already working on specific optimisations to make React apps faster at the
    browser level. Last year, I made the case that React components should
    become part of the web API, and I stand by that. Let's take these trends and
    analyses and weave them together and make guesses about the future. I'm
    going to go from slightly wrong to completely wrong. The first is npm Tink,
    it's an tremendously exciting thing that I don't have time to demo. Dan
    Abramov tweeted this, and it's exactly what this looks like where it might
    be going: imagine a world where you can build a web app without needing to
    know all the details of how your components work. People hate VB6 but at one
    point, it was the world's most popular programming language. That's us now.
    VB6 unlocked and created a whole generation of programmers by reducing the
    barrier to entry. Think how many more people could get involved if you could
    build a real useful web app by just dragging and dropping open-source
    components into your application. This wouldn't make your job obsolete, we
    would still need everyone in this room to be writing components but we would
    need a room ten times this size to hold all the people who would be using
    those components. A whole new level of abstraction, a whole new kind of web
    developer. That is a tremendously exciting idea. And then you add to that
    mix WebAssembly which is early days now but you could bringing every other
    library from the JavaScript world and make them interoperable. Not only is
    it easy to build apps but what you can build is vastly expanded. The last
    piece of the puzzle is the native app developers, nearly half of us, take
    highly performant rich web apps and suddenly don't run them on the browser
    but run them on your phone, shoes, VR headset - wherever. JavaScript running
    everywhere, absorbing every language into a unified world of open source
    components built by an ever expanding and increased community of diverse
    developers. I can imagine a world where it happens. After watching 23 years
    of watching the web grow, no time has ever been more exciting right now, and
    you, my friends and colleagues, are perfectly placed. You're in the right
    place at the right time to participate in that. The web is an amazing force
    for good and evil. It is a toy, and it's a tool. It's a playground, and it's
    a marketplace. It's ultimately amazing and terrifying in the power that it
    gives us. We can do so much good and so much harm. But I choose to believe
    that, in the long run, we will collectively decide to do more things that
    help the world than hurt it. We've all made mistakes that hurt the world. I
    know that I have. But I believe that, in the course of time, our good
    decisions will outweigh our mistakes, and the web will grow forever. I hope
    what I've shared with you today that is helped you see where you are, and
    what you're doing, and I hope it's helped motivate you, and made you
    curious, and I hope you all have a fantastic JSConf and thank you so much
    for your time and attention. [Cheering and applause]. 
  name: Laurie Voss
  image:
    filename: laurie-voss-209b806a.jpg
    filename_500: laurie-voss-209b806a-500.jpg
    filename_1000: laurie-voss-209b806a-1000.jpg
    filename_square_1000: laurie-voss-209b806a-1000-square.jpg
    filename_square_500: laurie-voss-209b806a-500-square.jpg
    filename_square_200: laurie-voss-209b806a-200-square.jpg
    width: 1536
    height: 1536
    originalType: jpg
  web:
    twitter:
      handle: seldo
      url: 'https://twitter.com/seldo'
    github:
      handle: seldo
      url: 'https://github.com/seldo'
    homepage:
      handle: seldo.com
      url: 'http://seldo.com'
filename: /laurie-voss/javascript-who-what-where-why-and-next.html
yt:
  id: gChULw-uEjY
  url: 'https://youtube.com/watch/gChULw-uEjY'
  title: 'JavaScript: Who, What, Where, Why and Next by Laurie Voss | JSConf EU 2019'
  poster: 'https://i.ytimg.com/vi/gChULw-uEjY/maxresdefault.jpg'
  index: 6
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: 'JavaScript: Who, What, Where, Why and Next by Laurie Voss | JSConf EU 2019'
    duration: PT44M55S
    description: >-
      npm has more data than anyone about who JavaScript developers are and what
      we’re up to. Using registry stats and the results of our 2019 ecosystem
      survey of over 30,000 developers, I break down the current state of
      JavaScript and where trends look like they’re headed, so you can make more
      informed technical choices.


      https://2019.jsconf.eu/laurie-voss/javascript-who-what-where-why-and-next.html
    thumbnailUrl: 'https://i.ytimg.com/vi/gChULw-uEjY/maxresdefault.jpg'
    uploadDate: '2019-06-10T14:59:05.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/gChULw-uEjY'
    interactionCount: 8590
    actor:
      name: Laurie Voss
  viewsPerHour: 2.35170581955415
  websiteUrl: /laurie-voss/javascript-who-what-where-why-and-next.html

----

npm has more data than anyone about who JavaScript developers are and what
we're up to. Using registry stats and the results of our 2019 ecosystem survey
of over 30,000 developers, I break down the current state of JavaScript and
where trends look like they're headed, so you can make more informed technical
choices.