----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'C J Silverio: The economics of open source'
data:
  published: true
  reviewed: true
  order: null
  firstname: C J
  lastname: Silverio
  talkTitle: The economics of open source
  coSpeakers: null
  twitterHandle: ceejbot
  githubHandle: 'https://github.com/ceejbot'
  homepage: 'http://ceejbot.tumblr.com'
  potraitImageUrl: 'https://cldup.com/KF4h_uipTa.jpg'
  caption: >-
    >> All right! You're tired? You're hot, it's been a long day. Shake it out a
    little bit. Shake it out. All right. Here we are. So, I'm going to talk
    about economics of package management, and more specifically in open source.
    It's - I'm going to tell you a story about who owns the JavaScript language
    commons, how we got into this situation with the JavaScript language commons
    is by someone, and why we need to change it. This is a story about money,
    ownership, and control, as much as it is about JavaScript. I am going to
    tell you this story. I'm going to tell you the version of the story I know
    how to tell. I'm one human being with imperfect knowledge as a point of
    view, so this story is not the only story anyone could tell about it - not
    by a long way. I could tell you a good version of one slice of this story
    because I was part of it. I was at its heart, because, until last year, I
    was CTO of NPM Inc. This gives me an expertise on the topic few people in
    the world have. It also comes with a point of view, and I'm going to invite
    you to keep my point of view in mind as you hear this story. You're in this
    story. Yes, you. I bet you didn't know you were part of this story. You will
    know why you're part of it, and you will know why your participation matters
    when I'm done with this story. It's a story about money, people who have
    money, and people who make money from open-source software are not the
    people who - it's the story of an accidental decision that you made without
    knowing about it, and one that I made consciously, and how that decision
    working out today. So it's a story about ownership, control, and their
    consequences. It's also a story about power: who has it, how much of it you
    have, and what you can do with it. Are you ready? [Cheering]. All right.
    Here we go. Do you remember Yahoo! A story kind of starts with Yahoo back in
    its glory days in the mid-2000s. JavaScript was the heart of a lot of
    JavaScript activity back then. It employed a lot of thought leaders like
    Douglas Crockford, if it was pushing state of the art forward. It might not
    have had a good business plan but it did have a good tech stack. It had a
    package manager called YPM and it did neat things. People who used it liked
    it. About at the same time all this was happening, and, you know, action and
    Yahoo, JavaScript was itself kind of taking off, and in an interesting way,
    thanks to things like jQuery, and browser makers deciding to adhere to a
    common spec for once. JavaScript exploded. Server-side JavaScript was
    starting to be a big topic, and it was here in 2009, ten years ago, where
    Dahl announced node.js and that turned out to be the JavaScript platform we
    wanted on the server. Now, the early Node community was a happening place.
    It was a scene. It swept up a whole bunch of interesting people from systems
    programming and web programming, and people who really enjoyed being at a
    bleeding edge ecosystem where a whole lot of stuff hadn't been invented yet.
    Several of the people involved early on figured out earlier on that package
    management would be a pretty great thing, and there were a bunch of package
    managers, plural, being written - yeah, more than one. One of these people
    was a Yahoo employee. He was super into Node. He quit his job so that he
    could write something inspired by the Yahoo package manager but for node.js,
    and this particular programmer was clever in a couple of really useful ways.
    For one thing, he got really super involved with Node, and this let him work
    on the Node side implementation and his package manager at the same time. He
    could make installer work right, and he really championed the common JS
    implementation that Node has. He did other stuff to beat other package
    managers, going around to other managers to support pull requests of his
    rather than the other one. Pretty smart. His was good enough and useful
    enough, the right solution, supported well enough so that it won, so that
    the node package manager, or npm, was put along with node rather than a
    third-party thing that you downloaded. Official status granted by the Node
    Project continues to today. Right about this time, bought Node from Dahl for
    a paltry amount of money. You notice we're already in interesting economic
    territory. The man who invented node.js, the tool used by everyone in this
    room, and millions of people daily to develop JavaScript, made a few tens of
    thousands of dollars from it. Whoever is making money from Node today, it's
    not its inventor. He did at least make a living after selling it, because he
    was hired, which is pretty good, and the joint also hired the programmer who
    made Node's package manager, but, important plot point, he retained
    ownership of it. He retained ownership of the npm domain name and source
    code. He didn't turn it all over to it Joyen the way the Node source had
    been. This decision matters later, so, in the it. The open source doesn't
    mean open ownership or control, it means you get to read the source for
    something. And the ability to read part of the source from something doesn't
    mean you can change that source. It doesn't give you any control over it,
    what it does, or what it .... The story moved forward, you've probably heard
    this part before, 2012, Dahl leaves the npm project. Right up about here is
    where all of you start appearing on the scene, or some of you anyway. You're
    JavaScript programmers. You like writing JavaScript. If you can write a tool
    in JavaScript, you will. So you started writing JavaScript with Node, and
    you liked it. Meanwhile, people like me, who are kind of mixed about
    JavaScript - don't tell anyone! - I figured out that Node was handy for
    writing I/O multiplexing services and thought this is fun. As 2013 went on,
    more and more people got on the Node train and Node got popular. It meant
    npm got pretty popular. That's great. Right? Well, no. Success is a
    catastrophe for a lot of projects. It's a catastrophe you need to survive,
    and success for npm was a catastrophe. Here's why: npm's package registry is
    centralised. It is not just a CLI tool that grabs the code and puts it to to
    your hard drive and do modules. The CLI probably is the least important part
    of the machinery despite how frequently you interact with it. Npm is most
    importantly to all of you a centralised package registry and a repository.
    Right from the beginning, the registry was there running inside a Crouch DB
    database on the same domain it is today. Registry is just a list of all the
    packages you can install, their authors, anywhere names, their versions. The
    repository part is the part that stores all those packages in a centralised
    spot. This is pretty great, because it makes installing them fast and
    reliable. Someone is work on making that central repository zippy. There's a
    lot to unpack there. Centralisation is what we are talking about here, and
    centralisation has some advantages. The npm registry is centralised. It
    comes with usability wins. You only need to go to one place to look for
    something. That one place can enforce some rules about the things you're
    looking for that they all look the same, that they provide the same kind of
    information, maybe they don't even vanish on a whim when their owner gets
    board. Centralisation has advantages that matter to you. I've been doing a
    Go programming lately, and it's weird. It's very strange to try to find Go
    packages, because they're everywhere, and the only way to find them is
    Google them. You look at these old-fashioned lists of really exciting Go
    packages, the thing that Yahoo used to do, like a hand-made list of things.
    When I install these packages, I is that you will from GitHub repos I can
    just vanish. So I have expectations that come from having used npm for eight
    years, and Go decent meet any of those expectations. The absence of a
    central registry for Go has helped me understand what NPM provides every
    JavaScript programmer. Centralisation is such an advantage that it is a
    trend. Blogs were something you used to host on your own. You used to buy
    your own domain name and spin up a server and host a blog. Through the last
    ten years, there's been this big trend towards centralised hosting
    platforms. You know, things that can provide a reliable place for you to put
    your blog, like MySpace. Yes, Tumblr medium, social media centralised,
    Twitter and Facebook, and open source is even centralised. So, okay, npm is
    a centralised registry for the node packages. In 2013, it wasn't great. Why?
    Downside of centralisation is that costs are costs are centralised. Downside
    of npm's registry is that all that use centred on a single database with a
    ... inside it. Here's a fact of the world: servers cost money. Who pays for
    them? For years, Node manager ran on donated hosting. It was written with
    help from some of the people involved in implementing CouchDB, and it free
    loaded on a bunch of CouchDB hosting services, treated as an ad for Couch -
    they continued to host Node's package manager, and then it wasn't so cheap.
    Success, the catastrophe, is expensive. You all started using Node and that
    ad stopped being cheap the other various lazy short cuts in implementing the
    registry starting have an effect once the registry saw some real use. The
    registry was down more than it was up in 2013. Npm needed money. It needed a
    maintainer who didn't ignore it for a day job. This is not a particularly
    new problem. Every language ecosystem at some point if they have a
    centralised package registry also has this problem. Ruby Gems cost money to
    run too, they run on donations. CPen, they solved their problem 20 years ago
    with a network of mirrors, a lot of smaller language ecosystems, some by
    free loading on GitHub, public repos, like Cocoa Pods and others. What npm's
    owner decided to do was pretty novel: he decided to found a company. This is
    possible because he still owned it. He found his company, npm Inc, and he
    takes seed funding. And here's our decision point: Node Project decided this
    was fine. They continued to give npm special privileges something they
    bundle along. I don't know if there was internal controversy about this
    because I wasn't part of it. Node Project was entering its moribund period
    around this time, so maybe decision was made through inaction, I don't know.
    They continued to affirmatively decide that's what they want to do every
    year since then. You decided this was fine. You voted with your feet. You
    kept using the npm registry. But CJ, I hear you say, I wasn't around then.
    You weren't around, then.  Then. You inherited this decision. You don't know
    it was a decision. Npm is out there as a fun question fact of JavaScript
    life. You might not have known it was a company at all, right? At the time,
    it was pretty controversial president the company that had been hosting npm
    was really pissed off about it. They ended up raising a bunch of money the
    same time the VC money came in, and there were lawyers involved. I don't
    know much about this. I just know that npm exited the node messily. Later,
    npm exited Joyant's hosting because they were also fighting. I don't know,
    money: it changes everything. Friendships made when it is all just open
    source fun, end under the strain of competing for dollars. Here's another
    thing: I decided this was fine. I decided to let JavaScript's language
    commons be owned by venture capitalists. I didn't frame it that way to
    myself, though. The decision I told myself I was making was the decision to
    contribute what I could to making Node successful. As a huge Node fan. I
    really liked programming in Node. I still do. That was the first place I had
    ever participated in open source. So, npm Inc is a company, has VC money and
    started hiring people. The first person they hired at - I second hire was
    me. I wanted to make it go better. I told the story - I was told the story
    by the owner that we would to make it self-sustaining  take, and the servers
    would hum along happily dispensing packages for the masses forever and
    every. I ended up leading npm engineering team. You know this part of the
    story. Large numbers are very large. You install lots of packages. Npm was
    successful, it scaled, and Node exploded as a result. You started using Node
    to do everything, and npm is now an unquestioned part of your work flow. You
    reinvented web development in ways you wouldn't do before npm was there,
    reliable, providing shared code. Lucky it's some kind of utility. It's the
    highlight of an excellent career. I'm still pretty proud of it. Let's pause
    here. We're at the zenith of node's package manager. Let's talk about money.
    I love money. Why isn't Ryan Dahl living on a tropical island? Why isn't
    James Halliday retired on a tropical island he lives on now? Why isn't
    Dominic Tar living in a yacht instead of a sailboat? Does he still live in a
    sailboat? Why does Doug Wilson have a day job? Do you know those names?
    They're the authors of software you have on your laptops right now. Software
    that is the beating heart of 1,000 programmes that business runs every day.
    Every Fortune 500 company will is runs the software written by those people.
    And dozens of other people who I don't have time to list who contributed
    packages to npm in the early days, and do so even now. Those people are not
    well think, despite the enormous value created by the software they make.
    Capitalism, yes, it's unfortunately, as you problem already know, capitalism
    is supposed to reward people like them, but in practice, it doesn't. Most of
    us give away the source without expecting we will make money of it. Most
    people who named contributed to JavaScript commons without wanting their
    tropical island. They might wish they had them but they didn't expect them.
    Money was not on their minds. That was back in the early days of Node when
    the contributors knew each other. They were just exchanging gifts with their
    peers, fellow Node programmers. All right, now here, I want to talk about
    the difference between the open-source and free software. You're aware of
    this difference. It's the free software you install - the Gnu licence, like,
    aims to make you have to give away the thing you make with the source code
    you've shared. And over here, in Eric Raymond land, it goes a little
    differently. We can argue about whether Stallman's Gnu licence achieves it
    or not. I'm not going to join that argument right now. I will point out that
    Eric Raymond's style free software, MST licence, and permissive licence is
    almost certainly the kind of open source you practise. You treat the GPL
    like poison. You've chosen open source, not free software. Capitalism
    freaking loves open source, let me tell you. Companies get a lot of good
    stuff for free, and they have no requirements on them for using it. It takes
    it even further, I think by telling you that you have to do this get hired.
    GitHub is your résumé, they tell you, and they stretch out their hand to
    take their free software from you to build things with. Dominic Tar gives
    away pull stream and every Fortune 500 company uses it, and he doesn't get
    compensated. This is a reality. I don't think I can fix that. You notice
    that there is a person in the story that didn't give his stuff away? That's
    pretty smart, right? He's the one who didn't give away his intellectual
    property is the one who will make a pile of money from this. He planned
    ahead in the ways that other people didn't. Of course, he's not actually
    going to make most money anybody makes from npm, because the people who are
    actually going to make money from npm are the venture capitalists who
    invested in it. People who truly do well in this story are the people who
    had money to begin with, people who had nothing to do with JavaScript,
    effectively only our language commons. What does our language commons - what
    is our language commons? Shall I define that? Let's do it. Commons in
    English means the resources available to everybody. It's like natural
    resources, like the air we breathe, or a field that we all share to graze
    our sheep - shared. For us in the JavaScript community, the language spec is
    our commons. That's owned by an organisation that is set up to allow
    JavaScript's users to all co-operate and design and build it. TC39 has done
    pretty well by JavaScript. All of our shared code is part of our JavaScript
    commons. The registry that lists all this shared code is part of our
    commons. The connections we use to share code in it is part of our commons.
    But all of that is owned by a VC-funded private company. This is the thing
    we as a group have given away. Ryan Dahl was here last year, and he had
    something interesting to say. It's unfortunate that there is a centralised
    privately controlled, even, repository for modules. I saw that, I wanted to
    argue with him about centralisation, but I had to agree with his comment
    about private control. What are the consequences of private control? Why do
    I think that's a problem? Well, none of us have any input into registry
    policies. What gets a package removed from the registry? What is acceptable
    to be on the registry. How are disputes about package names resolved? What
    happens when two people fight about a package name and they can't make up
    their minds about it? You letter Left Pad? I bet you remember Left Pad. The
    publication policy didn't exist before Left Pad happened because it didn't
    occur to npm, a private institution, to think about the use case. They don't
    act proactively to solve problems until they exist and are in their faces.
    This is northerly. You don't want to have to deal with something until you
    have to. You have no input into registry features. You might have a wish
    list, but you don't get it. There's no way for you to contribute. There's no
    way for you to say you demand something. You want package signing? Good
    luck. You're not likely to see it. Maybe if a major security incident
    happens or a major public outcry happens, you'll get it, but it would have
    to be an existential threat. And note that hear I'm talking about the
    registry, not the client. The registry is closed source, the policies that
    regulate it are not open to our influence. The NPM CLI is open source but
    it's unimportant. The key building blocks that you would need to write your
    own CLI are all open source and not under npm's control. But a third of you
    use another client to react anyway. The management of our commons is opaque
    to us. It will be opaque to you until the company that owns it has a
    financial incentive to change it. You don't know what is happening with your
    package data. You have to trust it. There is no trust without a 
    accountability, and we have no - we as the JavaScript have no way to hold
    npm Inc accountable. When I was there, I could tell myself that I trusted
    myself and my team, and I knew our intentions were so good, and motivations
    were good, with we have to have 2FA. This was not a good answer. I was wrong
    to have relied on that answer, because you had no way to hold me
    accountable, and test that I was trustworthy. Oops. Am I saying that npm is
    evil? Moo. Ask a different question. It's a private entity in control of our
    commons. It's not good or evil. The question of its benevolence is the wrong
    question to ask. Npm is not a benevolent institution. It can't be one. The
    possibility of it being one is the  ended the day they took VC funding. That
    decision took it into a financial instrument. I mean something very specific
    when I say that. Financial instruments are contracts about money. They're
    widgets that can be traded. Npm Inc, the thing that owns our language
    ecosystem, is a thing that might as well be a collection of pork bellies as
    far as its owners are concerned. They make contracts with each other and
    trade bits of it around. It's a means for turning money into more money. It
    is important to keep this in mind as you evaluate your interactions with it,
    and your interactions with the people who represented it. This means to look
    at incentives. Money is a lot of incentives for a lot of actors in this
    story. Companies do not love you. Not even companies that make something you
    like. That phrase is a marketing message designed to get you to mistake the
    financial instrument for something that might be your friend. That marketing
    message is powerful. You've got a cuddly mascot and a great stickers, and a
    red emoji heart, and you're on board, right? Npm does not love you. It can't
    love you. It's a Delaware corporation founded as a financial instrument
    intended to turn money into more money for a handful of people you don't
    know. And here's the other thing: nobody believes that message any more.
    When I first knew I wanted to talk to you all about this, instead of just
    whispering in a corner with friends, I thought I had an uphill battle to go.
    The VC  package managing company was - I said that message, what I meant by
    it was that I, CJ feel affection for you, stranger. I kind of do. But, you
    know, it was true. I did. I still do. But I don't think anyone can stand up
    in front of you now, after the PR events of the last few months and think
    that npm loves you. It's burned a lot of goodwill in the last couple of
    months - by choice, deliberately. They made the choice, they double-downed
    on it, and here we are. You're willing to listen to this now. So, how did we
    get there? It's 2018, packages flow like water. You just - you don't you
    care where they come from. They cost money, even if you're not paying for
    them. Npm has been spending venture capital money to deliver you all those
    packages for free this whole time. Venture capitalists eventually want their
    money back. They want that 10x return on investment. VCs want you to go big
    or go home. That means they want you to burn your cash or succeed or fail.
    VC money is interested in returning the investment. There's nothing wrong
    with that, in my view. Some companies are shaped like VCs want to shape. I
    don't think that's really the problem. The problem is that our language
    ecosystem is there. Remember, there are obligations of the people who own
    npm, not to us. Make money or raise money by telling a story about making
    money to raise money ... money. It's all about the money. So in 2018, they
    hired a new CEO. It's pretty interesting. Thank God - yeah. The culture. The
    culture that they exported as their marketing message started to look a
    little threadbare right around then. Everyone, including me, learned it was
    just a marketing message and actually not deeply held values. Npm's PR
    troubles are known to all of you as a result. We are a community that enjoys
    drama - have a some drama. Even if it had somebody who is a good actor at
    its head, there would be - that person would have a big problem to solve,
    and here's the problem: centralised registries are expensive. The part where
    the packages are stored are expensive. It controls all JavaScript
    development, because every single one of you willingly proxies all of your
    JavaScript development through it. The data, the data gathered from your
    usage of it, and you heard the talk earlier today, that's the value. Every
    time you run an audit, npm looks at your package lock, chock-full of
    information about what you've been up to. Yes, you know what they say about
    when you're not paying for the product, you might be the product? Yeah. It's
    there. The thread is dangling over your head right now. I think we're in a
    situation right now that is not going to last very long. The npm hasn't
    fully had its reckoning with its investors or with us. It's had lay-offs but
    we don't know has going on inside, but the point is, the ground has shifted
    under our feet a little bit. Anyone who wasn't asking if npm is stable is
    now asking that. We know that it doesn't love us and it doesn't love its
    employees, either. This is not our own option. The story didn't have to go
    this way. People chose it, and here we are. What are we going to do about
    it? You, you sitting in this audience right now: what are you going to do
    about it? Are you going to do nothing? That's easy. We made our community
    decision in 2013, and we're stuck with it. We wait for npm Inc to fail - not
    if, when - a nasty couple of months replacing the registry. I don't like
    this answer. Imagine npm selling to somebody we don't like, corporate
    pirate, someone that takes over adversarial and shakes them down for pocket
    change, someone who doesn't have an incentive to keep the registry up,
    threatens to take it down to see what we would do about it. That's possible,
    frankly, because npm's board of directors hasn't done a very good job. Maybe
    we will be saved by Microsoft! [Laughter]. I've been on the internet since
    1987. I remember when Microsoft was actively evil. I believe they might be
    again. Certainly Google is not benevolent, purely benevolent actor right
    now, even though they've got fountains of money. I would like to avoid
    having to come here ten years from now and make the same talk again. I think
    in the end, I agree with Ryan Dahl. JavaScript's package registry should not
    be privately controlled. Centralisation is a burden that will lead to
    private control because the servers cost money and that's just a fact. But I
    think if we load to many people, we can share this burden. Who knows, from
    once it's under the burden, npm can be a normal company and try to make a
    profit for itself. Do you think that's impossible? Do you think npm's
    entrenched? I'm not a big fan of - and I don't like the do-nothing answer.
    The other confession I make is that I believe in open source despite
    everything. I think it's good for us as human beings to give things away to
    each other, and I'm at peace with the idea that some corporation is going to
    make some pee from my work. So, Chris Dickinson, follow him on Twitter, we
    have an announcement: we would like to give something away to you all right
    now. I would like to introduce you to Entropic, a federated package manager!
    [Cheering and applause]. Yes! All right. It comes with its own CLI. It
    offers a new API for publication. You heard Kat talking about tink earlier.
    This was a dream Chris Dickinson and I have had for several years now, and
    we offer that file-based API. It's federated. You depend on packages from
    other instances, you mirror your dependencies so you remain self-sufficient,
    requirements list, we Dockerised it, you sign in with your GitHub account.
    Don't use it yet! [Laughter]. The project is only a month old because Chris
    only escaped about a month ago, so that's when we started it. It's not ready
    for anybody to use, but people developing it, but, we do want your help. I
    hear QR codes are hip, so I've got one for you all. On GitHub, it's on open
    source right now. Tell me you can get there and see it. We've got a huge
    list to contribute to right now. I've just up a lot of your time. I'm going
    to run down very quickly what my goals are, why I did this. I want to prove
    to you all that we have power. We don't have to sit here and wait for fate
    to come to us. We can be optimist ic, proactive, and do something. You have
    power. Second, Chris and I will among a handful of human beings who actually
    deeply understand the problems that a language package registry has to
    solve. We spent years thinking about this and what we should do. I think
    that expertise is needed by our community right now. We want to share it. We
    choose to give it away. We will be working with the Open JS foundation on
    this. We are giving you the gift of our expertise and work. Third, I think
    it's right that this pendulum is swinging away from federation. I think move
    away from centralised solutions is good. The last decade has been about
    consolidation, and I think the coming decade is going to be federated. It's
    going to be cheaper for us all. Yes! Yes, take it back! It's yours! It
    belongs to you! [Applause]. Let's make a different decision: we made this
    decision in 2013, and it made sense at the time, it's time to make a
    different one. Entropic is the kick-start Chris and I will giving to this
    problem. There's a lot more to say. There's a lot of work to do on it, and I
    want to get to the point where I can tell you all to use it may be next year
    this time. It's time to move with our feet again. You are good, may amazing
    people, capable of building amazing things. Most of you are much smarter
    than I am. I want to hand this over to you. We should not be owned by a
    single company. Our commons should not be owned by a single company. We can
    do it. This is love from two human beings capable of love from us to you.
    What happens next is up to you. Thank you. [Cheering and applause]. Go do
    it. Fork it now! 
  name: C J Silverio
  image:
    filename: c-j-silverio-a284665d.jpg
    filename_500: c-j-silverio-a284665d-500.jpg
    filename_1000: c-j-silverio-a284665d-1000.jpg
    filename_square_1000: c-j-silverio-a284665d-1000-square.jpg
    filename_square_500: c-j-silverio-a284665d-500-square.jpg
    filename_square_200: c-j-silverio-a284665d-200-square.jpg
    width: 2320
    height: 2320
    originalType: jpg
  web:
    twitter:
      handle: ceejbot
      url: 'https://twitter.com/ceejbot'
    github:
      handle: ceejbot
      url: 'https://github.com/ceejbot'
    homepage:
      handle: ceejbot.tumblr.com
      url: 'http://ceejbot.tumblr.com'
filename: /c-j-silverio/the-economics-of-open-source.html
yt:
  id: MO8hZlgK5zc
  url: 'https://youtube.com/watch/MO8hZlgK5zc'
  title: The economics of open source by C J Silverio | JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/MO8hZlgK5zc/maxresdefault.jpg'
  index: 0
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: The economics of open source by C J Silverio | JSConf EU 2019
    duration: PT37M43S
    description: >-
      The JS package commons is in the hands of a for-profit entity. We trust
      npm with our shared code, but we have no way to hold npm accountable for
      its behavior. A trust-based system cannot function without accountability,
      but somebody still has to pay for the servers. How did we get here, and
      what should JavaScript do now?


      https://2019.jsconf.eu/c-j-silverio/the-economics-of-open-source.html
    thumbnailUrl: 'https://i.ytimg.com/vi/MO8hZlgK5zc/maxresdefault.jpg'
    uploadDate: '2019-06-03T13:40:43.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/MO8hZlgK5zc'
    interactionCount: 60285
    actor:
      name: C J Silverio
  viewsPerHour: 15.773263690402224
  websiteUrl: /c-j-silverio/the-economics-of-open-source.html

----

The JS package commons is in the hands of a for-profit entity. We trust npm
with our shared code, but we have no way to hold npm accountable for its
behavior. A trust-based system cannot function without accountability, but
somebody still has to pay for the servers. How did we get here, and what should
JavaScript do now?