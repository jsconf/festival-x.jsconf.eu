----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Tara Z. Manicsic: ES2019 Features: What Even Are They?'
data:
  published: true
  reviewed: true
  order: null
  firstname: Tara
  lastname: Z. Manicsic
  talkTitle: 'ES2019 Features: What Even Are They?'
  coSpeakers: null
  twitterHandle: 'tzmanics '
  githubHandle: 'https://github.com/tzmanics'
  homepage: 'https://tzmanics.com'
  potraitImageUrl: >-
    https://gist.githubusercontent.com/tzmanics/75fef4a30aee67e8f0461641cbfa5c8d/raw/a57f5935a7a55aeb23741e0d0ef8ce74928748a9/tzm.jpg
  caption: >-
    Hello, everyone. So I don't know about you, but I have been to three
    different arenas today. I thought I would check them all out before coming
    here! Thank you for your patience, and thank you, Ellie, for entertaining
    you while I was setting up. So we are talking about ES2019 features today.
    How many are using ES2019 features now? Nice. I can show you something,
    right? The agenda that I want to go over today is basically first I want a
    little itty-bitty intro to give you information and ECMAScript and Ecma in
    general. Went we that you can about the minor features, the major features,
    and then a teeny tiny out show. Just clarifying that we are going to focus
    on the features with a little bit of information on back and front. Who is
    this person running on the stage? And immediately yelling at you? My name is
    Tara Manicsic. I'm a developer advocate at this great company called
    Progress Google Developer Expert, and the mother of this awkward ball of
    fluff, Toshi, but as of five months ago, I'm also the mother of this
    adorable chunk of flesh, Niko. I did poorly Photoshop my baby on to me for a
    picture! But, thank you! Do not worry  worry, this isn't a photo shop talk.
    Those thighs aren't Photoshopped! I want to do a little bit of an intro
    about Ecma and ECMAScript. So, like any good super hero, I feel that
    ECMAScript has an origin story. It starts out with Ecma International which
    is actually, I learned doing this, I never cared what Ecma stood for. I
    probably should have. I wanted to look into it now. Some of you may know it
    is "European Computer Manufacturers' Association". I'm very glad that we
    shortened it! This started in 1960 because they saw how much we were using
    computers, and it needed to be standardised. From then, we knew we needed a
    standardisation for JavaScript, and that's where ECMAScript came into play.
    Sun, which is nor Oracle, had the rights to Java. Have you heard of Java?
    No! That's the only association you will see between Java and JavaScript
    through Oracle. Since that was taken, they went with the corresponding
    standard host, Ecma, and made ECMAScript. So now you know. So, like, again,
    any super hero stories, we also have these pitfalls and weaknesses that
    "build character", right? For ECMAScript that was ES4 abandoned. This was
    the version 4 of ECMAScript that there were so many political differences in
    the group that they just abandoned it. They couldn't release it or get past
    their differences, unfortunately. Another one is what I like to call ES6
    years. Yes, it's a pun. It took nearly six years for them to release from
    ES5. To 2009 in December to found 15 in June is how long it took because it
    was so bloated. There were so many things they were excited to release to
    JavaScript standard that it took quite a long time. But, again, like the
    super hero arch, from those arches, we get great things. For instance, TC39,
    which is the technical committee, really started to try harder to work
    together and reform and do a lot of work to make smaller packages come out
    after ES6 was so big, they decided let's do something more manageable, like
    developers. We break everything into smaller pieces, so it's more
    manageable. That's what they did with these new after ES6, all the releases
    after that were much more manageable. So, just a quick recap. I want to say
    what the proposal process is. We're talking about our stage 4 proposals, and
    these, I always think I know what these mean, and then I'm dumbfounded when
    I remember the actual process of what these proposals are, because they're
    stage 0 which is the strawman, free form bringing in the idea. Stage 1,
    because, you know, you have to start at one because we are programmers, or
    start at zero, sorry. And then stage one is the proposal where you have the
    champion of that proposal come in and advocate for this idea. They bring in
    APIs. They talk about APIs, semantics and algorithms, and then version two,
    it's a version of what will be in the specification. If it makes it to stage
    2, you have a good likelihood that it's going to make it all the way
    through. But, yet, there are still two more stages. Stage 3 is it's mostly
    finished, this is the candidate. And it's mostly finished but needs
    feedback. And this is the one that is funny to me. Stage 4, which we will be
    talking about, is finished, and I have quotations around that, because, at
    this part, it's ready to be included in the standard, but they need to get
    test 262 acceptance. They have to do a two-spec compliant shipping, that
    implementations need to pass the test, significant practical experience with
    implementation needs done, and the ECMAScript text editor must sign up on
    the spec edit. It sounds like a lot, but we have a bunch of features coming
    out, and they did a good job of bringing them over into stage four. So,
    let's go ahead and jump into the minor features. First, I just want to let
    you know what we are going to do is basically give a little high-level what
    the feature is, the name of it, who brought it to - who is the champion of
    it, or the champions, and then a little code snippet and a little bit about
    the compatibility. First, we have trim start and trim end. Has anybody used
    trim left and right? This is explanatory in a way, taking space away from
    the start or the finish. This is the new alias because not all languages
    have a left and right, or they have a left and right, but some have
    different ways of approaching it. Start in end just make more sense. This
    helps you classify what is white space as well, what is a hard enter, space,
    tabs. There is a whole process to it. It is as simple as this. You're taking
    a string that has spaces around it. A use case of this, say, you're filling
    out a form, and basically, how it goes is maybe in a CSC you're getting too
    many extra spaces, so you need to trim it down. You get trim start and trim
    end. You see, start, finish, and then trim takes both off. There you can see
    the compatibility is good across the board, i.e. it's a no. Who would have
    thunk! A simple prototyped description. This is a string parameter that you
    can pass on to symbol. When they made this, their thought was to help teams
    communicate across code and communicate their intention for the code. I read
    a comment by Grassbury said we now not use documentation for this? I think
    the more place we put in code that isn't comments, the better. You be the
    judge. This is what it looks like. We have created a symbol. We have passed
    into a string which is now the description. When we log it out, we have
    symbol log that contains that parameter or use the getter.description and
    get that string. This again is pretty available. I got these compatibility
    charts from MDM, because they fit really well in slides! But, some of the
    information wasn't exactly right. Like this is available in Node 11, and
    they had it as marked as "no" but then I realised above their compatibility
    charts, they have a link to GitHub, so you can correct any compatibility
    errors that you see. We just have to be proactive. Okay. Optional catch
    binding. Do people here use try catch much? It's in the catch clause having
    a parameter to bind to the exception. A lot of people were using this and
    throwing it away, because it would cause an error if you didn't have this
    parameter. A common use case for this is say if you're using json.parse, and
    you know it's going to throw an error if it is not json, but you don't care
    about the error, but want it to parse anything that is JSON. You throw it,
    log it, you don't think about it. In their minds, this was superfluous. Who
    has time for extra key strokes? This ended up being one of the most
    controversial minor features, but we will get to that later. This is what
    basically it looks like. You're passing a parameter to your catch clause,
    and then usually, you want to log it out, and do something with it. Now you
    can pass up that parameter completely. It is again, you can see the chart. I
    could also just pause and let you look at the chart for is a second instead
    of talking over it. This is where you know that it is an interesting
    situation when the most active issue just says why? So, a lot of what I do
    is read through issues, be it like with Node modules, or with ECMAScript.
    Even as a society, like you in a society, these are some really, really
    interesting thoughts going into how we build our and standardise our
    language. Like it's very inspiring to see how much people care about it,
    because we use it every day, right? So, I highly recommend looking into
    this. Basically, how it started, as the person who opened the issue, saying
    that they were pretty scared, let me just say, what he said, they were
    pretty scared that allowing this may make devs forget about error-handling.
    Does everyone here do a good job handling their errors? Silence. So, this is
    basically, he was saying it's making production code untraceable, and that
    he thinks that errors should be logged, and we should be considering these
    errors. We should not be swallowing them. It could lead to messy coding,
    irresponsible coding. And a few things of the comeback is basically that
    this is making it more intentional, so, if you're leaving off the parameter,
    you know you're leaving off the parameter. Conduct and Competence Committee
    be even riskier to leave it so that people automatically throw that log and
    don't think of it. And there are some cases where you, it's what you are
    getting back, you can't log, or it's just holds up the programme, so, what
    you're doing here is kind of taking the road of the least evil, one may say,
    and you're quietly swallowing your errors, and your application can perform
    its main job, and you're not compromising the ability to troubleshoot. Like,
    you can always add this. It's not an option that you can no longer add the
    parameter. Okay, so, we will go at a quicker pace to get you all moving.
    But, prototype.sort is now stable. This is ECMAScript spec and it made me
    immediately wonder what is stable? This is basically a stable sorting
    algorithm if you're take, looking at a list that have their two keys, they
    have the same value, they should, after a sort in the same order which I
    will show you in the code. One quick note, no-one intended, but this, cut to
    the quick, is intended, it's getting rid of quick sort and instead using
    Trim sort, made by Tim Peters in 2002, and he's making it more proficient by
    using binary insertion sort and improving the merge sort, which actually
    allows it to work way better with the arrays that are already sorted. So it
    is a very interesting read, and another one that I highly remedying into one
    day while you're waiting for the bus already or on the train. This is what
    it looks like. We have multiple keys of A that have varying values. This
    this order on top, it goes ACB. When we sort it by age, we should get ACB in
    that same order, and it does that now. There you go. Moving on to major
    features, again, we're going through this quickly, and please feel free to
    come and chat with me after. I love talking about this stuff. I will even do
    another little talk if you want! So flat and mat map is very exciting. Is
    anybody uses those yet? Yes! Right. How great is flat map? It's funny how
    exciting when you get to, "What features are coming out next?" Flat is
    basically - it's recursively concatenating to the array dependent on how
    many in your parameter how many levels your telling it to go down, and it's
    based, and then flat map, simply putting, it's kind of taking map and then
    flat, so you're mapping through an array, and then flattening it to a
    single-level array. There is more to it. With map where U getting one output
    element. It returns a single value. With Platt map, it's translated to zero
    or more output elements. It can also return non-array values, but that is
    less common. Then there is my favourite part of it which is smooshgate? Did
    anybody hear about that? Again, we go to the T after the code. First of all,
    with flat in general, you see we have an array with a nested array, with an
    array inside of it. There are three levels here. If we do flat, it defaults
    to one layer, and you have the array that is still nested in there. If we
    pass to that original array, it nests it all down, or flattens it down to
    one. With flat map, with map, you get an array of arrays, but flat map, you
    get back an array of those. Smooshgate, the thing to me about Smooshgate,
    this to me is like a visual representation of when I tell really corny
    knock-knock jokes. There are 74 thumbs-down on this guy's joke! Michael is
    one of the champions. Mood Tools had a polyfill of flatten, and ECMAScript
    wanted there to be flatten as the name of this future. My husband is a
    programmer, and he asked me what is Mood Tools? Which is a lot of people's
    reaction. Basically, you're taking legacy code and it is stunting the
    progression of what people - or what people consider the progression - of
    code. There were a lot of discussions around this. Basically, making sure
    that we are adapting correctly that we are not leaving anybody behind, so
    they changed it from flatten to flat. As we see now, we have flat, and mat
    map. There is no Smoosh. There was never a Smoosh, might still be a Smoosh,
    but probably not. Compatibility wise, this is where it is available. Last
    but not at least, object from families. I'm a big fan of object.dat
    families, but that is taking a list of key-value pairs and contracting it to
    an object which is the opposite of object.entries. These somebody limitation
    works really well together and a good representation of that is Axel
    Rauschmeier looks at objects and utilises them and creates different
    functions from underscore. I was trying to explain to someone how one of the
    biggest points of advancing the language of making the standard is we make
    all these short cuts, or I would hardly say short cuts, actually, intricate
    libraries to make up for what we may see as shortcomings in the JavaScript
    language to do the job that we need to do. And so, Underscore was one of
    those libraries, again, not a short cut, lots of work, and really great
    work, in the Underscore library, and now we see when we bring something to
    the language like Object from Entries how we could have advanced the
    language so that we wouldn't need the other library. This is what it looks
    like. Basically, we start with an object that has key-value pairs. When we
    do object be entries and pass that. We get array of arrays. When we want to
    take it out of there and treat it as an object, we - it's available on Opera
    no matter what MDM says. Real quick, we won't go over these, but if you want
    to have a lunch conversation with me, there are some really things I found
    out digging into, looking into json stringify, the JSON super set, which
    somebody was saying, when people speaking it in Spanish countries say ...
    then there is also the prototype two-string revision. Looking into these, I
    dug into unicode and ASCII a lot, and there is a lot of really cool history
    to that. But, for now, I would just do a teeny tiny intro to say, on this
    stage at 1400 hours, you will get to see the amazing, part of the amazing
    TC39 group to answer all of your questions that you may have about what is
    coming, what has been, how to use things, and their decision-making, and I
    also just want to - I know I personified these two groups as super heroes,
    but I am indeed very grateful that they put the time and energy into
    basically giving us a better coding experience, or at least putting their
    efforts into trying to give us a better coding experience and make
    JavaScript better for us, so I'm very grateful, and I'm very grateful that
    all all here today. Thank you all very much. 
  name: Tara Z. Manicsic
  image:
    filename: tara-z-manicsic-7c5d860c.jpg
    filename_500: tara-z-manicsic-7c5d860c-500.jpg
    filename_1000: tara-z-manicsic-7c5d860c-1000.jpg
    filename_square_1000: tara-z-manicsic-7c5d860c-1000-square.jpg
    filename_square_500: tara-z-manicsic-7c5d860c-500-square.jpg
    filename_square_200: tara-z-manicsic-7c5d860c-200-square.jpg
    width: 1510
    height: 1510
    originalType: jpg
  web:
    twitter:
      handle: tzmanics
      url: 'https://twitter.com/tzmanics'
    github:
      handle: tzmanics
      url: 'https://github.com/tzmanics'
    homepage:
      handle: tzmanics.com
      url: 'https://tzmanics.com'
filename: /tara-z-manicsic/es2019-features-what-even-are-they.html
yt:
  id: 1_hHxra0Lf4
  url: 'https://youtube.com/watch/1_hHxra0Lf4'
  title: 'ES2019 Features: What Even Are They? by Tara Z. Manicsic | JSConf EU 2019'
  poster: 'https://i.ytimg.com/vi/1_hHxra0Lf4/maxresdefault.jpg'
  index: 3
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: 'ES2019 Features: What Even Are They? by Tara Z. Manicsic | JSConf EU 2019'
    duration: PT22M15S
    description: >-
      Thankfully, every year ECMAScript gives us new shinies to advance how we
      code JavaScript. I’ve found myself digging into features & proposals ever
      since my curiosity of ES2017’s SharedArrayBuffer took me down a
      fascinating rabbit hole. Let’s delve into some of the features & proposals
      we get to look forward to in 2019.


      https://2019.jsconf.eu/tara-z-manicsic/es2019-features-what-even-are-they.html
    thumbnailUrl: 'https://i.ytimg.com/vi/1_hHxra0Lf4/maxresdefault.jpg'
    uploadDate: '2019-06-19T14:15:14.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/1_hHxra0Lf4'
    interactionCount: 17095
    actor:
      name: Tara Z. Manicsic
  viewsPerHour: 4.97323777452915
  websiteUrl: /tara-z-manicsic/es2019-features-what-even-are-they.html

----

Thankfully, every year ECMAScript gives us new shinies to advance how we code
JavaScript. I've found myself digging into features & proposals ever since my
curiosity of ES2017's `SharedArrayBuffer` took me down a fascinating rabbit
hole. Let's delve into some of the features & proposals we get to look forward
to in 2019.