----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Kat Marchán: tink: A Next Generation Package Manager'
data:
  published: true
  reviewed: true
  order: null
  firstname: Kat
  lastname: Marchán
  talkTitle: 'tink: A Next Generation Package Manager'
  coSpeakers: null
  twitterHandle: maybekatz
  githubHandle: 'https://github.com/zkat'
  homepage: null
  potraitImageUrl: >-
    https://lh3.googleusercontent.com/D1mN2Cr48ipwPkyXYtHZyylWWGNE5h1-Z6BxQwovRYbGTwuFmiuLAA_E4eLMtni-Ihb2tROc3uBneaxNmbeXOS7j9Njc9kreu8DwvXMsQ0yp7ZOx2XeGM6MXfKkseTebUXZVy_auK86T8r0x64_VJPQ414STY20VYzjn5F5Z70zFiJvYTbP-WPLFqJ9cXCRpFYdAqWbtUkQ841JDG8qxXTVa7NVqXMW5cYrXFTlFKVcvPkrDqp7XSWBF9KTW_B27rQa1x92QLUG7kd3asBP1mJISJZGXBNC1eZSR9kjmpkyGZbSm7JVpukKXQadzP2jDGfdEsrlAjoSt7H1GiiitkoyyAjxio8skq6eUEZi8F4jVFcn-8qxuTqquWCqs-td4F82cZ6Y2SHhcDXTCuPKj1ia9BJ1VBI4n5Ei7OWjLmvXVoEMlVW8HteGUHhsq_tdUq_SKm0WLJtxIzlXM5BvZM_sVMgJW0DFmG92gH0gnvGTH-MvJ__WsN9J51q1B4VBk9N3GjXZox9j6xsTCOtwR6IosnKUSAY27eymh9P3fwsl2P76oMvrjauOnsnRyscm6WnsHTiK_nxTsbiU8nejwaOU7OLxp5DEzsD6f72e8K9e1J-CJDnuH7IZkcD8NBWdYPUerJZaoRSaiBklUNAp7-9pNtZEzXsWXs591QyDPnjKn6Nd1aav6EOe1iPBg1sNIsWVYpVoru4IAzk3CN6dSs0B7mA=w1770-h1894-no
  caption: >-

    >> I can't believe I'm right here right now. Give it up for the conference
    organisers. This is amazing. [Applause]. So, hi. My name is cat Kat. I'm the
    lead maintainer architect for the npm CLI. I'm not here just to talk about
    the npm CLI, I'm here to talk about an experiment I've been working on
    called "tink" which I'm hoping will set a precedent for JavaScript package
    managers in the future. I want to talk about the why, more specifically,
    about what npm needs to do in order to get JavaScript apps to work, and
    there is really one big end goal we have had for most of the npm's lifetime.
    Put a bunch of stuff in your local node modules as fast as possible and
    everything consumed from there. Make it as fast as you can. That seems
    pretty straightforward on its own, but what does it really take? So for
    context, I want talk about the overall problem. What steps we've taken along
    the way to mitigate the issues we came up with, that came up. Now, the
    process I'm going to describe is mostly shared between all current package
    managers. They all do different optimisations and clever things around each
    step, but they all kind of have to do this at some point or another to be
    compatible with Node. Let's take a look. This is high-level overview of what
    a JavaScript installer needs to do. We all do this to some extent or another
    but ultimate ly the same. First up, it's this one. Reading local
    dependencies if you have any. You will probably in the this one these days
    when you have a no auth installed, when you ran it, and npm is still taking
    five seconds, and you don't know why. It usually isn't more than a couple of
    seconds but it's still pretty noticeable. Yarn has an interesting
    optimisation around this where they slap a metadata file based on Node
    modules, and they match, they say fuck it and trust what is in the modules.
    npm has been a bit stub Bosch here since we've so far considered that no up
    case is a fairly rare thing, and if you run npm will be able to autofix any
    issues with your tree which we think is important enough to warrant the
    delay. I don't know, we might go ahead and do what Yarn does at some point
    anyway because people want that sweet, sweet speed-up, but in the end, this
    step tends to be noticeable, but it's not really the biggest delay. But this
    next one kind of was for a while. It turns out making literally thousands of
    requests just to get metadata from the registry in order to calculate our
    tree is fairly network-intensive operation, and in times, this was
    definitely a time hog. So, like what happened? Well, basically, log files
    happened. Log files are supervene for developers, sure, but they're just a
    single file cache - oh, my God, what it is trying to update right now!
    Excuse me! They're just a single-file cache of the tree calculations step of
    your package managers. And that's why we love that stuff so much. Once
    you've built your project up, none of your team-mates really need to bother
    doing this stuff until they add or remove any dependency. This is also why
    I'm pretty adamant that you should use log files for libraries. They just
    like make life so much easier. This next one has never really been a huge
    bottleneck on its own, but I still want to next it, because we do put some
    effort into keeping the stuff being fast enough. I want you to know this
    stuff happens to exist. Long story short, this is what figures out what
    existing dependencies need to be removed, added, copied, whatever, since npm
    at three, we do calculation to flatten that tree. How many of you used npm 3
    when it first came out? It was not the fastest thing on earth. It's a lot
    faster now. Moving on. This one here. This one is by far the heaviest and
    slowest of all the install steps, mainly because it's the heaviest on pretty
    much all relevant resources. Let's dive a little deeper into this one. In
    the end, we have hundreds of megabytes that need to be transferred over the
    network, and once we have those, we have to spend a bunch of CPU cycles
    parsing and un zipping the tar balls, and we do tons of heavy disk I/O. All
    of the three usual suspects are bottlenecks here in one way or the other,
    with and it depends on your usage pattern at some point in time. Long story
    short, this is where the bad and slow stuff happens, and this has been a
    huge target of optimisation for pretty much all package managers. I assume
    many other package managers too. So, what can we do about this? Well, for
    one, we can do a bunch of cache ing of - different caching strategies have
    different trade-offs. npm takes innings it means we have to take the hit of
    parsing those tar balls every time. Yarn stores them post-distraction which
    loses them - the npm here is really interesting. Because, they have an
    extracted cache, like Yarn, but instead of copying the files they hard-link
    them into their final destinations. This kind of surprisingly isn't really
    that much faster than copying on SSDs, and stuff, but it's definitely way
    more space-efficient, because you pay for each package exactly ones across
    your system. That's pretty cool. And because I can't seem to stop talking
    about Yarn today, they have a thing called PMP that partially addresses
    problems in this step. The downside is that tools need to - it costs it can
    cause incompatibility. PMP is interesting and worth checking out. You can
    have Maël talk about it at the next talk. He's great. There is a lot of work
    making this a bit better. No surprise, it's the most expensive bit. I will
    get back to the soon, and what else we can do about it, but for now, let's
    wrap this walk-through. We do all the downloading, and extracting, and then
    we have to scan through the packages we installed and scrutiny run scripts.
    This isn't usually the biggest step since there's usually the run scripts
    that run, and most aren't that slow. But, this still becomes noticeable on
    some unfortunate projects. npm doesn't do this, but some package managers
    actually parallelise this stuff at great risk and complexity, and it does
    make things a lot faster if you have heavy stuff to build, like ... which
    takes forever. I think we're better off with a solution with something like
    Node Preget or have prebuilt binary somewhere on the registry, but that's
    what we've got right now. What you should take away here, though, is that in
    the end, node modules is massive. And also, where dreams go to die. Now, the
    fact is that node modules, while the greatest fraction has caused everyone
    massive headaches in usability, time wasted. There's a lot to agree with on
    this front with Ryan's talk about node prerets here at this conference. What
    are you doing, microphone! Please calm down! But what do we actually do
    about it? It's easy to complain about, and talk about how bad an idea it is,
    but I still think that good outweighs the bad. Isolated dependencies are
    really good. Having each individual project be able to manage dependencies
    is fantastic. Being safe from dependency hell is really good. The fact that
    we automatically nest things. That's great. And, you know, we have kind of
    900,000 packages out there that some of you might think that some of them
    are crappy, but most are pretty useful. At least a big enough percentage is
    useful that we want to keep that and have that compatibility. Package
    manager developers as well as the largest community to do what we can to
    make the most of this, right? I of course have my own ideas about this, and
    I kind of hinted what that was already. What I think we should do at this
    point is move package management itself directly into the run time instead
    of an external utility. That is what tink is really about in the end, but
    what does this mean, and what can we actually do it once we've done that?
    So, this is what I'm talking about. You literally stop invoking Node
    yourself and you use tink instead. It was a subcommand called shell that
    wraps Node and adds patches to FT to make it work its magic. What magic?
    Well, virtual Node modules. The big idea is that if we control the run time,
    we control what happens when someone tries to read from Node modules. And,
    once we can to that at the run time level, all sorts of things start
    happening. It means that we can get rid of all these copies of Node modules
    without changing the module loader, or the expected APIs from packages. As
    far as any packages are concerned, they're accessing the file system the
    same way they usually do, and this means it's compatible with little details
    like __name, reading configuration files, and all of that. It works out of
    the box. Even Spon works. But if we're not in Node modules, where are the
    files? Well, instead of copying them, we keep them all in a single global
    cache like npm does, except we deduplicate every single file at the hash
    level. That means if you have five versions of the same package, you only
    ever have new copies for the files that actually changed. Storing by hash
    can make reads very, very fast for us. We can do more. Since we control the
    run time, let's automatically fudge dependencies for you, as you need them.
    Why don't we skip downloading dependencies you're not using in your current
    work. Tink is able to block on reads that fail from the local cache inline
    and fetch any packages you haven't downloaded yet. Before you say anything,
    there's a dash-dash production flag to make sure we're not doing random
    requests in dependencies in production, et cetera. Of course, this means you
    don't do npm install any more. You don't do npm install and wait for things
    ever again. Go for it! [Applause]. All you actually do is tink add, tink
    remove to add or remove individual dependencies and you don't have an
    install step any more. It gets done automatically by tink as needed. It
    means if your co-worker pushed something and you pulled it, you just run it,
    and it just kind of works, and you don't have to worry about it. There's no
    conflicts to worry about, or new installs. Now, you might be concerned about
    this, by the way, patching FS self surrounds risky, right? But I'm not
    worried. This is literally the same approach that Electron has taken and
    they're successful at it. We can also learn from their journey, so I believe
    this will work out in the end. In fact, some of the code to do this in tink
    comes directly from electron, and I modified it further. But wait, there's
    more. Now that we have run time control, tink has TypeScript, ESM, Wasm and
    JX support out of the box! Yes, 63 per cent! Are you kidding me! How did you
    all multiply? 40 per cent last year. It also runs a very cheap check sum on
    every single file it loads from the global cache, so you know that, what
    you're getting out of the cache, what you're getting into your node is
    passing a checksum for every single load. Which is fantastic. It's super
    secure. If it turns out you ran the tink show if there is a missing
    dependency, and if a single file was corrupted in your cache, even, tink
    will just download and install it for you and fix your dependencies
    automatically. You can turn this behaviour off in production, but when
    you're developing, it's super handy. Finally, my favourite part: all of this
    comes out of the box without the need to configure or install anything
    besides tink itself. And I want to emphasise this. All of this comes without
    the need for any sort of loader. Webpack, it works. All of this without any
    kind of loader or extra flag, or anything. You install and run things with
    tink, and that's all you need to do. Now, let's do a brief tour of the tool
    itself to give you an idea what I'm actually talking about. This year is the
    - this is the core feature of the entire tool, just about everything I've
    talked about so far is available through this one command. You don't need to
    do npm install any more. All you need to do is run tink shell. This works in
    the interactive shell and it blocks and awaits for things, and you fetch the
    dependencies, and it kind of goes. I know I talked about performance a lot
    before, but a really strong guiding light for me when working on npm and
    tink has been the idea of simplifying work throws. I want you to have to
    install and remember as little as possible in order to be productive. I know
    that's a big problem in JavaScript these days where you install, feels like
    you install half of npm just to get started. The ability just to start
    running and having the run time take care of this is super important for me
    in order to achieve the work flow. I think y' all should have in your
    day-to-day. I want the package manager to disappear and not be something
    that you have to think about. That's very important. How many of you are
    familiar with NPX here? Show of hands. Go! Tink accepts NPX. For the rest of
    you who don't know NPX is, it's a tool that is bundled within npm itself,
    and one of the things it lets you do is execute local binaries as well as
    temporary installations. For example, if you install Jest as a dependency,
    you can use npm Jest without installing it globally. You don't need to
    configure a run script for it. Running your local bins through tink exec
    means we can apply the same logic to preinstall anything necessary for your
    binary that tink shell does for scripts. But what if you don't want to slow
    down your app with package management stuff? This command goes ahead and
    does the cache warming beforehand and runs on installs, binaries, and the
    likes for you. When you run tink shell, it works as fast as when you, as if
    you did an npm install or something beforehand. You could argue that it the
    npm install of tink, but it's an optional step and night not speed things up
    at all, or might make absolute time pass slower. On CI, you may as well take
    the run time hit of fetching dependencies. But, what if you want to have an
    actual node module anyway? What if you want to inspect and use other tools
    or your editor which doesn't understand tink yet or whatever? In this case,
    there is a command called Unwind which does a full extraction to node module
    so you can use your editor, non-build tools, pretty much anything in the
    usual way. This is an in my install but a slight difference I will go into
    next. What if you want to debug a specific dependency? That will let you
    patch thing however you want, debug it, et cetera. This is what I want to
    emphasise. Because of the way tink works anything inside node modules itself
    takes precedence over the virtual version. If you use FS .right file tink
    will create a physical file for you in node modules which helps immensely
    with compatibility. That will just work. We will put a file there for you.
    Don't worry too much about it. No. This command is is also done
    automatically at the individual package level for any dependencies that use
    install scripts to preserve compatibility because, you know, it doesn't
    understand Node itself but it's very few extractions. So, since the closest
    thing to npm install only builds existing dependencies, how do we add and
    build dependencies? The classic trio, add, remove, and update. Great, fancy.
    They do basically what is says on the tin. By the way, all three of the
    these become fully interactive if you give them no arguments. That means
    you'll be able to search interactively for new dependencies and pick them
    from a menu for removing and updating. Yeah, that's epic. Yeah! Interactive
    menus! [Applause]. Very exciting! So, the last command I'm going to
    introduce this is tink check utility. The really cool thing about this is
    it's a one-stop shop for all your verification and testing. The most
    noteworthy thing here is that it's going to run your type check out of the
    box without needing to install TypeScript. If you do install it as a dev
    dependency, or use that version of it, it will still run it for you. But
    isn't it nice to be able to go into a project and type-check the TypeScript
    out of the box? It's really nice. Lint it. It's really nice. At this point
    some might wonder if I've been doing too much Rust and cargoes lately. Rust
    is great. Where do he would go from here? First, we have to wrap up the
    prototype because that's all it is right now, a proof-of-consent. That
    should happen soon enough. We want to build an own RFC-based team which
    builds more outside contributors than we usually had. This will allow us to
    hash out tink and take it where it needs to go together. The RFC process
    will ensure there's a community-based approach to growth and development
    which means you can make a difference by participating. Once that is all
    set, we are turning tink into npm 8. That means that in the future, when you
    upgrade Node, what used to be called tink will be available out of the box
    as npm, just like current versions of npm are. You can still use it as you
    usually do. If you want to opt into this new work flow, the tool will be
    there for you. It will also integrate with MPX meaning your NPX commands
    will run faster. Once npm 8 is shipped, it is a matter of integrating it
    into Node itself, and I look forward to working with the folks over there to
    make this happen. I know it's a big step to be, like, hacking FS itself, but
    I'm sheer we can make it happen. Anyway, there's one more thing: we are
    planning to release at some point in the future a new pack age fetch in API
    in the main npm registry. This is exciting because combined with tink or
    something similar, there's a good number of advantages, and this is where
    the exciting stuff is starts happening. To give you an idea, this is where
    it should be great. The actual API is fairly small. It's a couple of new end
    points that allows us to list files available in the package, and to fetch
    those individually by kind of like unpackage, right? What do we get from
    this? For one, some analysis and estimates that it could involve 40 per cent
    reduction in data transfer. That means your installs get done way faster. If
    you're on a connection slower than fibre, you will have less to wait for.
    You might actually finish your npm install before the heat Liberals the
    universe. It means you will store less stuff on your system, you don't need
    to download readmes, test code, anything like that. You only download the
    files you actually use. This reduction is achieved by having tink shell
    fetch files lazily. And then we cache it really aggressively. This is one of
    the most exciting reasons to do tink for me. Finally, this one is
    interesting. Doing things like this has the potential to - hello? Has the
    potential to completely change how mono-based repo libraries work. As you
    probably already know, these libraries involve a lot of sub tools, literally
    147 packages in the Babel mono repo. They published this under the scope so
    folks don't have to depend on the entire thing. You don't want the entirety
    of Babel. Now, this can cause a lot of problems. For example, users can have
    issues keeping all packages in sync if they depend on each other in some way
    been on the publisher side, this is a really fragile set-up because it makes
    hair publisher process to subject to time-outs and they need to make sure
    that's correct start the entire publish process where it failed. It just
    gets nasty. So, all of these tiny packages have to be released at the same
    time, usually with the tame version, and then you have to deal with the
    registry being eventually consistent, so not all package versions might be
    available when your user starts selling them, and there is chaos everywhere,
    it's awful, and npm starts erroring on you. With tink, this won't be
    necessary any more. Low dash and Babel will be able to publish a single
    omnibus package. It only fetches the sub packages you're using from within
    the big package. Everyone wins, and you only have to have one low dash or
    babel item in your JSON. That's that. Like I said, this isn't in progress
    yet but something we're planning on doing because the advantages are really
    clear to us all round. I hope you enjoy it when it does happen. In
    conclusion, tink is exciting, and also, it's kind of a work in progress. I'm
    sorry if you try and download it and it explodes in your face. Keep away
    from flammable things! It works by having a virtual node modules that
    becomes your new run time. It has TypeScript, ESM, JSX and Wasm support out
    of the box. It will be known as npm 8 when released, and we will have a new
    unpackaged registry-style API in the future. Go to us. You can go to
    development. You can check out the repo on GitHub. Thank you. [Cheering and
    applause]. 

    >> Thank you so much, Kat. The next talk starts at 6.15. 
  name: Kat Marchán
  image:
    filename: kat-march-n-3acdd6f2.jpg
    filename_500: kat-march-n-3acdd6f2-500.jpg
    filename_1000: kat-march-n-3acdd6f2-1000.jpg
    filename_square_1000: kat-march-n-3acdd6f2-1000-square.jpg
    filename_square_500: kat-march-n-3acdd6f2-500-square.jpg
    filename_square_200: kat-march-n-3acdd6f2-200-square.jpg
    width: 1768
    height: 1893
    originalType: jpg
  web:
    twitter:
      handle: maybekatz
      url: 'https://twitter.com/maybekatz'
    github:
      handle: zkat
      url: 'https://github.com/zkat'
    homepage: {}
filename: /kat-marchan/tink-a-next-generation-package-manager.html
yt:
  id: SHIci8-6_gs
  url: 'https://youtube.com/watch/SHIci8-6_gs'
  title: 'Tink: A Next Generation Package Manager by Kat Marchán | JSConf EU 2019'
  poster: 'https://i.ytimg.com/vi/SHIci8-6_gs/maxresdefault.jpg'
  index: 7
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: 'Tink: A Next Generation Package Manager by Kat Marchán | JSConf EU 2019'
    duration: PT25M5S
    description: >-
      With nearly [ed. now over] 1,000,000 packages, the npm ecosystem is the
      largest out there, by far – but the ecosystem and its package manager were
      created in more humble times, for small projects and packages centered
      around the Node.js ecosystem itself.


      It’s about time we redefined package management for modern web
      development, and that redefinition is tink: a package unwinder for
      JavaScript brought to you by npm itself. With tink, you’ll find
      unprecedented speeds, deep compatibility with everything from Node.js to
      bundlers, and a UX workflow optimized for the modern web developer. Come
      join us for the official unveiling and find out what the future of all
      package management will look like for years to come.


      https://2019.jsconf.eu/kat-marchan/tink-a-next-generation-package-manager.html
    thumbnailUrl: 'https://i.ytimg.com/vi/SHIci8-6_gs/maxresdefault.jpg'
    uploadDate: '2019-06-05T17:47:51.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/SHIci8-6_gs'
    interactionCount: 9047
    actor:
      name: Kat Marchán
  viewsPerHour: 2.399827067971631
  websiteUrl: /kat-marchan/tink-a-next-generation-package-manager.html

----

With nearly 1,000,000 packages, the npm ecosystem is the largest out there, by
far -- but the ecosystem and its package manager were created in more humble
times, for small projects and packages centered around the Node.js ecosystem
itself.

It's about time we redefined package management for modern web development, and
that redefinition is tink: a package unwinder for JavaScript brought to you by
npm itself. With tink, you'll find unprecedented speeds, deep compatibility
with everything from Node.js to bundlers, and a UX workflow optimized for the
modern web developer. Come join us for the official unveiling and find out what
the future of all package management will look like for years to come.