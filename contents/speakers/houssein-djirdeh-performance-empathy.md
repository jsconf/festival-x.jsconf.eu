----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Houssein Djirdeh: Performance Empathy'
data:
  published: true
  reviewed: true
  order: null
  firstname: Houssein
  lastname: Djirdeh
  talkTitle: Performance Empathy
  coSpeakers: null
  twitterHandle: hdjirdeh
  githubHandle: 'https://github.com/housseindjirdeh'
  homepage: 'https://houssein.me/'
  potraitImageUrl: 'https://houssein.me/public/me.jpg'
  caption: >-
    Yeah, as Aga mentioned, my name is Houssein, and I will be talking today
    about performance empathy. Empathy's a term we commonly use to describe the
    ability to understand and share the feelings of another individual or a
    group. I like to think of the term "performance empathy" to be the same
    thing, but for the performance concerns and issues of a particular site. To
    explain why I thought it would be a good topic for a talk, I need first to
    describe a bit more about myself. I work as an advocate for the web team at
    Google. Now, developer-advocates in many different companies usually act as
    a bridge between a specific engineering community and a specific engineering
    team and a developer community. Being an advocate for the web team means
    that it's my job to make sure the web gets better and better. I focus on
    speed and performance. So a lot of advocates, we sometimes give advice that
    can seem a little overwhelming. I don't know why my clicker feels weird!
    There you go. [Scattered laughter]. But in all seriousness why are so many
    performance advocates fascinated about what they do with their own tool
    chains? Why are we so focused whether it will improve performance or not?
    Why do we care performance that much to begin with? Is it really that much
    of a problem? To help us answer this question, let's look at this example of
    a site. It's an entirely client-side rendered site that ships a megabyte of
    JavaScript. This means that the initial request only contains a shell of an
    HTML document. Only after the JavaScript bundle finishes executing, the user
    gets to see any real content. Now, in case you weren't counting, the amount
    of time it took for this app to finish loading was about 19 seconds. 19
    seconds isn't fast by any means. So we know that one megabyte of JavaScript
    can seem like a lot to ship town to browsers. How much are we generally
    shipping? If we take a look at the HTTP archive, we can see the median
    amount of JavaScript we are sending down the wire is about 350 kilobytes,
    and this for mobile web pages. The reason this is such a big deal is because
    a lot of websites currently living in the web that are either entirely
    static or they have little to no interactivity at all. I thought it would be
    interesting to dive in a little deeper and see how much  how much site they
    use of a particular framework are shipping in terms of JavaScript. And I did
    it with three frameworks to begin with: Angular, React, and Vue. The reason
    I chose these three is because they are the most popular client-side
    frameworks today to build our UI. I found out after querying 250,000
    origins, about 50 per cent of them ship over a megabyte of JavaScript. Now,
    each of these origins either use one or more of these frameworks. There's a
    lot of reasons why this might be the case, but it does show that we are
    shipping a lot of JavaScript if we are not entirely careful. Now, what I
    want to do now is take a step back and talk about how I began the
    presentation. You see, every single talk I've ever given before today has
    always followed the exact same format: I begin with a word of caution, and
    talk about how performance is a pretty big problem. I then move on to
    showing some stats and some numbers to back up my claim, and I do this to
    convey how much of a problem this actually is. And then the rest of my talk
    usually follows the same sort of pattern where I talk about different tips,
    different techniques, that you should be applying to make sure your site
    stays as small as possible and as fast as possible. For this talk, I'm going
    to go in a slightly different direction. I want to talk about what we can do
    as advocates, and what we can do better to reach the community better, as
    well as how we can all work together to try and think of different ways to
    to make sure performance is a win for everybody. Going back to that example
    of a site we just talked about, here I mentioned that, at the end, I
    mentioned that we are running this on a mobile device and a slow 3G
    connection. A lot of people when they trace performance, they talk about
    specific user conditions that might not be the same as yours when you build
    your application. And we do this because the  fending on the user's device
    or network type, they can experience your site a lot slower than you think.
    And there's more. We sometimes talk about how your users might experience
    your site if they're completely offline, or if they have a flaky network
    connection, or maybe they have a weaker device, on mobile, so forth, and so
    on. Although it is important to talk about all these scenarios and try to
    capture different conditions your user might be in, the thing I want to make
    sure I mention is that you know your users better than anyone else. You
    definitely know your users better than any advocate that stands on stage
    telling you how well your site performs under a certain condition. That
    being said, one thing I want also to mention is the fact that nobody
    prioritises performance over anything. If you think about it, when you're
    trying to build a site, the very first thing you're thinking about usually
    isn't performance. Most people are like this. But if you also think about
    it, why should someone make it the very top thing they think about? Let's
    talk about something to try and complain what I mean here. Say you wake up
    one Monday morning and you have an amazing idea. You've thought about a
    product you want to sell on the website or maybe you want to provide a
    specific type of service. So you're excited, and the next thing you
    naturally do is try to find out how to build it. You spend a little time
    researching the tools, the tips, the tricks that you need, maybe you're
    building wire frames, maybe building graphics, so forth and so on, but only
    after that, you actually start building. And at this point, throughout the
    initial process, nobody really thinks about performance. The thing that you
    actually most likely are thinking about is the fact that you want to build a
    site that loads and does exactly what you expect it to do, but build it with
    as minimal effort and as fast as possible. A second possible scenario could
    be the fact that you join a brand new team as a developer. Say the newest
    developer on a brand new team, and, when you get assigned your first ticket,
    you're most likely going to try and familiarise yourself with the code base.
    You will spend a little time trying to know where your components live,
    where the utilities live, how the unit tests work, and so on. Only after
    that, while you're doing that, you start building and working on your first
    feature. Maybe it's a small feature you're adding on a page, maybe it's a
    small bug that you're working on. But again, also, when you're in these
    shoes, you're not thinking about performance. You're not think about what
    I'm building doesn't degrade the performance of my site. No, it's the first
    thing you're doing, most likely trying to check every single box assigned to
    you. It's highly unlikely performance is on that list. The way I like to
    think about awareness and performance in general, and how people are aware
    of the performance and location of the site, I try to think of it as some
    sort of scale. For example, let's say you're building something for the
    first time, or you're building something for the umpteenth time which you're
    learning a brand new tool. What you're going to be doing at this point is
    seeing how this tool works. Does it do what you expect it to do? You're
    going to learn the API, is it easy to plug into your site? At this point,
    it's unlikely you're unlikely thinking how badly it's going to affect your
    performance. You're thinking how easy is it for me to use? Let me spend some
    more time with that, and after a while, you end up launching your first
    website. You have an idea of how it works in development mode and how it
    works in production mode. You have a better feeling whether it is really
    affecting performance or not, but you still might be slightly unsure of what
    you need to do about it. But the more and more you use this tool, and the
    more websites that you build, the more familiar you are with how it affects
    the speed and reliability of your site. That being said, nobody is more
    aware with the fact that they need to work on performance than those that
    actually know they have issues. If a significant per cent of your user base
    tells you we can't access your site because it's too slow, you're most
    likely going to try and prioritise it as soon as possible. This is what I
    mean by performance being an afterthought. Maybe there are ways out there of
    it being not of something we only think of when it is too late. Throughout
    this talk, I sort of this this dichotomy between two different users groups,
    one being performance advocates like myself, and one being a normal
    developer working on a regular codebase. Now, advocates, I think we all
    agree on the fact that there are way too many slow sites, and the reason why
    I think this is true is because we have our job because a lot of the sites
    out there aren't as fast as they should be. If every user accesses the
    website and felt like it was faster than it needed to be, we wouldn't need
    to be doing what we do every day. But there's another misconception, or
    another thought that sometimes gets misconstrued that seems kind of weird,
    and it's the idea that developers are sloppy when they ship slow experience.
    I've seen the sentiment time to time, and I can't understand it, because a
    developer working on a website, and it happens too bad too slow, it is
    usually one of three reasons. One, they don't know it is too slow for their
    users, two, they know it's too slow but they don't know how to fix it, or
    they haven't prioritised that yet, and, three, they know it's too slow and
    they're actively working to effectively. Indeed again is always relative.
    Having an advocate tell you that you're not focusing on something very
    important to them isn't always the best approach. Now, on the other side of
    the coin, when we talk about a developer, when you're building a website,
    you're most likely going to agree that you have a million things you can
    work on. Performance is just one of them. But it's also another weird
    thought that I see sometimes floating around and it's the idea that
    advocates, or performance advocates, specifically, are out of touch. The
    reason why some people might think this is because of the fact that many
    performance advocates will build small sample apps and show you how to
    optimise and some people will feel it's not easy to do it with a massive
    codebase and a massive team where code is being checked in everywhere. The
    reason why I want to squash this thought is because advocates have been in
    your shoes. We are developers. We worked with teams who understand that
    there are more concerns to a site than there is just performance. Instead of
    having the back-and-forth between small weird opinions and small, small
    thoughts, I think it's safe to say we all agree towards one common goal: we
    all want the web to be faster for everybody. So the big question is: how can
    we make sure we can fix the performance problem better? What I'm going to do
    is talk about a few ways we can explore that, because there are changing
    sort of how we think about making things better for our developers. The very
    first is making sure everybody has better defaults. What I mean by default
    is the idea is that let's say you're building something with a certain tool.
    If it always gives you a better starting point, you will most likely always
    have more wiggle room, and more room to play with where it will take you
    longer to reach a threshold or performance and end up being slow. And in
    terms of framework level, a lot of frameworks are looking into this already.
    React has already been looking to try to improve React DOM and make the
    sites smaller. Doing this a few different ways, one of them being
    simplifying its event system. With Vue and Vue3, they are looking to reduce
    memory function and making things more tree-shakeable where they can. The
    Angular team is looking into building brand new rendering engine called Ivy,
    and with it exploring ways to cut down the initial bundle size and also
    looking at ways of maybe progressively heightening experiences when you have
    server render architectures. React and Suspense is also doing the same
    thing. And then there are metaframeworks, things like Next.js that allow you
    to do what you want to do most of the time, write and build your component.
    There are things that we tell people to do quite often. You should be code -
    these frameworks take it out of the hands of the develop.  Developer. We are
    already working with XJS to see if we can do things even better and even
    have smaller bundle sizes and make sure users get the best experience
    wherever they can. When we talk about defaults, the only way to think about
    it too is the default APIs or the out-the-box APIs that the browser
    provides. It will be a lot easier if we didn't have to leverage third-party
    libraries or write scripts ourselves when we try to optimise things that the
    browser can probably do already. An example of this is the lazy-loading
    attribute. Now, if anybody here is actually building something with a lot of
    images, you most likely realise that having a lot of images load at once can
    affect performance, so people have become quite used to either pulling in a
    third-party library or writing their own custom script that takes advantage
    of the intersection observer API or scroll-event listers to only add listers
    to those close enough to them. The loading attribute is something that will
    be rolled out to Chrome pretty soon, and by using it with any image or
    iFrame tag, it will automatically lazy-load images after it reaches a
    certain distance threshold from the bottom of the viewport. Think about the
    wins this can make to any developer. Think about the main developers that
    don't know how to build their own lazy-loading scripts or even know if there
    is such a thing, but once they realise there is a simple app they can add,
    it will make it a lot simpler for everybody. Another example of an API that
    makes things easier is the virtual scrolling API that is also being worked
    on right now. If you've ever built anything, a site with a long table, or
    very large list, you also realise that having all those DOM nodes populate
    at once can affect rendering performance. And the idea behind this
    virtualisation or virtual scrolling is to make sure that only the nodes or
    only the items on the list that the user can see is populated through DOM,
    and as the user scrolls down, those DOM nodes get recycled with newer DOM
    nodes. A lot of frameworks like React, like Angular, have third-party
    libraries that allow you a virtualised list. Having a bake-in API means you
    can do this without relying on any of them at all  at all. For example,
    accessibility concerns, or the find on page feature, or how could SDO crawl
    your page, or a crawler crawl your page, and detect things that are not
    rendered to the DOM just yet? Another very important thing we also realise
    is in general, we need better guardrails for all developers. We've noticed a
    pattern where we tell people to optimise, and a lot of teams will go ahead
    and they will start doing so. After a certain period of time, feature creep
    is in, new code is being shipped, or they regress to the initial state or
    the state worse than prior. The idea behind guardrails is what if you had
    something that made sure everybody stayed accountable and made sure
    everybody stayed on a narrow path? One such example of a guardrail is a
    performance budget. A performance budget is a budget for certain performance
    metrics that you make sure your app never exceeds. There are many tools out
    there that can allow you to add performance budgets. One such example of
    those recently launched was something called Lighthouse, a team built by the
    Chrome team that allows you to audit how well your pages are doing. It
    allows to check for accessibility, performance, and so on. A lot of
    developers use Lighthouse every day in their work flow, and the idea is what
    if you can specify a single JSON file to add performance budgets into it?
    You can specify different resource types, define the budget that you never
    exceed, as well as the defined third-party request and make sure the number
    of requests never exceeds a certain value. The third most important point,
    and I think this is something that actually resonates with me quite well, is
    the fact that we need to meet develops where they are. As an advocate, if we
    are telling developers that they need to change their entire work flow, or
    the tools that they're using isn't going to work and they have to swap it
    out for another, we're not going to go very far. And it's something I've
    seen more and more of right now. What I'm trying to do is trying to improve
    the fact that whatever tool you decide to use, whatever framework or library
    you decide to use, what if we could always make sure that tools stays and
    performant as it possibly can? And in terms of how we are trying to do this
    one way is through tooling. And there is a feature called Stack Back. This
    extends to Lighthouse but in a different way. The idea behind Stack Pack is
    that it allows Lighthouse to detect what tools are being run on your page
    and then give specific recommendations specific to that room. Let's say
    you're using WordPress to build a site, and you're working out how to
    properly side your images. You can read a highly generalised advice that
    will apply to anyone, but see advice that is more specific to you. You see
    how to do it using the WordPress. The idea with Stack Pack, we try to roll
    this out to many Java frameworks and CMS tools. WordPress is the only one
    that is supported right now. Documentation is always going to be a big deal,
    and it's going to be a big deal for a while. Now, in Google and the Chrome
    team, we have a lot of documentation at a high level, generalised, and they
    work for the main developers as they possibly can. They're trying to roll
    out frameworks-specific guidance. This is a new documentation site that we
    have that is more interactive and specific to the user, and recently
    launched a whole section on frameworks. The idea is we're not - the idea is
    we're not trying to teach you how to use a tool like React, we are trying to
    show you how you can make your React app as fast as possible using in-built
    React APIs and third-party libraries in the React ecosystem. We plan on
    having more Angular View and other frameworks in the future. In the Chrome
    team we've also been doing in terms of monitoring support. Malte and Nicole
    announced this and mentioned something called framework fund. A lot of
    people working in open source, a lot of developers in open source, and how
    can we support them in more than one way, to continue to try to increase
    performance of their tools or those who use them will get better defaults,
    better guardrails, and more. When it comes to fixing the performance
    problem, I think as advocates, we are doing it in two sort of ways, one
    being which I call internal support. We write blogs to tell you how to do
    things. We build third-party libraries that you can plug in through sites.
    We give talks at a place like JSConf and tell you what you need to do to
    improve the speed your site. Then the internal side of things. How does the
    tool you're using get better by default? What if they get better at a
    starting point? What if they have better guidance and better warnings? As of
    now, I currently feel we're more so on the external side, and that's fine.
    We will continue to do that as long as we can reach more developers can we
    possibly can. What I would like to see in the next few years is a shift in
    the other direction. In an ideal world, we wouldn't have to tell developers
    what to do if every tool they're using already does it automatically. I hope
    you enjoyed this talk as much as I enjoyed giving it. Thank you.
    [Applause]. 
  name: Houssein Djirdeh
  image:
    filename: houssein-djirdeh-ecf3f473.jpg
    filename_500: houssein-djirdeh-ecf3f473-500.jpg
    filename_1000: houssein-djirdeh-ecf3f473-1000.jpg
    filename_square_1000: houssein-djirdeh-ecf3f473-1000-square.jpg
    filename_square_500: houssein-djirdeh-ecf3f473-500-square.jpg
    filename_square_200: houssein-djirdeh-ecf3f473-200-square.jpg
    width: 1848
    height: 1648
    originalType: jpg
  web:
    twitter:
      handle: hdjirdeh
      url: 'https://twitter.com/hdjirdeh'
    github:
      handle: housseindjirdeh
      url: 'https://github.com/housseindjirdeh'
    homepage:
      handle: houssein.me/
      url: 'https://houssein.me/'
filename: /houssein-djirdeh/performance-empathy.html
yt:
  id: uIBYN6w9cBc
  url: 'https://youtube.com/watch/uIBYN6w9cBc'
  title: "Performance Empathy by Houssein Djirdeh |\_JSConf EU 2019"
  poster: 'https://i.ytimg.com/vi/uIBYN6w9cBc/maxresdefault.jpg'
  index: 18
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: "Performance Empathy by Houssein Djirdeh |\_JSConf EU 2019"
    duration: PT22M20S
    description: >-
      Performance advocates spend a lot of time telling developers how to build
      fast and reliable experiences on the web. Every website is built
      differently, however.


      Instead of just listing a number of progressive enhancements and
      techniques, this talk will try to take a different approach. We’ll first
      explore who needs to consider improving their site in the first place and
      see if their is a messaging problem between advocates and developers in
      the community. We’ll then address concerns that can arise when performance
      is being worked on and discuss some real and practical solutions.


      https://2019.jsconf.eu/houssein-djirdeh/performance-empathy.html
    thumbnailUrl: 'https://i.ytimg.com/vi/uIBYN6w9cBc/maxresdefault.jpg'
    uploadDate: '2019-06-20T14:01:40.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/uIBYN6w9cBc'
    interactionCount: 3115
    actor:
      name: Houssein Djirdeh
  viewsPerHour: 0.9125197139370771
  websiteUrl: /houssein-djirdeh/performance-empathy.html

----

Performance advocates spend a lot of time telling developers how to build fast
and reliable experiences on the web. Every website is built differently,
however.

Instead of just listing a number of progressive enhancements and techniques,
this talk will try to take a different approach. We’ll first explore who needs
to consider improving their site in the first place and see if their is a
messaging problem between advocates and developers in the community. We’ll then
address concerns that can arise when performance is being worked on and discuss
some real and practical solutions.