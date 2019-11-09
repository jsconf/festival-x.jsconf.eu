----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: >-
  Aditya Mukerjee: করো: Translating Code to Other (Human) Languages, and Back
  Again
data:
  published: true
  reviewed: true
  order: null
  firstname: Aditya
  lastname: Mukerjee
  talkTitle: 'করো: Translating Code to Other (Human) Languages, and Back Again'
  coSpeakers: null
  twitterHandle: chimeracoder
  githubHandle: 'https://twitter.com/chimeracoder'
  homepage: 'https://adityamukerjee.net'
  potraitImageUrl: >-
    https://uca9ca1a52cac77b4e456724e702.previews.dropboxusercontent.com/p/thumb/AAWUndWoFX-9rNW1mGcGJMW8XFKbi7aCjRhUhNDgr8xAEH-l4AIgDQnXqV0iRjXSnN-_oKZyuBQLUmkKEl3rvPHCLkJclp-Ty5rsE-ppWcJdjtZeDnZ3Lb3wv5OKueOtX28iQJTid0SjrwooJ6S26rihPYQ26bAUV37ZLbPOWt9Egyc5TdEoG7aHuRnKh5FiP17H4MfK1-LzRfl3lfR_MWpyGI9QW8skbnqu8IYv0F7dVQ37aZI-5dDE9fERDxOZ3XBW1WzXXuEvp6rbuptWdXwvU0G_3FAxEXQY5duZRRhKHIsBEVg2hJFBa9VGrqRy69gejHm4ueiXPzYjoo6-s6Vf/p.jpeg?size_mode=5
  caption: >-

    >> Thank you, all. My name's Aditya. This talk is entitled koro, translating
    human code back into languages and back again. I've been writing JavaScript
    off and on again for about 20 years, but these days my primary language
    isn't JavaScript, it's Go. I've been writing Go for the last seven years and
    I will be taking a look at work that has been done? Go and seeing how we
    might apply that same work to the JavaScript world as well. Even though my
    examples will be in Go, everything can and should be done in JavaScript too.
    How many of you speak English as a second language? That's the overall
    majority here. So worldwide, only five per cent of the world speaks English
    as their first language, and only about 11 per cent speaks English at all.
    That means that the majority of people who speak English speak it as their
    second language. If this conference were perfectly represented of the entire
    world, that only means 165 people out of this entire conference would be
    able to understand this talk, and of those, all but 75 would be listening to
    me speak in what is for them a foreign language. I feel like to say software
    is eating the world, but also JavaScript is eating software. I don't just
    mean that things are moving to the web, which has always been JavaScript's
    platform of dominance, but JavaScript also is being used in ways that we
    never really thought of maybe like 20 years ago. Node.js was launched on
    this very stage ten years ago at this conference, and that completely
    changed the way in which we think of JavaScript. JavaScript is now being
    used - you can use JavaScript to write Excel macros. Try explaining someone
    to that in the mid-90s, that you would be using live script to write your
    Microsoft Office macros. If you want to do positioning logic within Linux,
    you're going to be writing JavaScript rules. Technology which includes
    software is a powerful enabling force. We have the ability to do amazingly
    things on a global scale using software. Thanks to software, we are able to
    take pictures of a black hole that is 55 million light years away. We can
    treat and cure diseases that would have been thought chronic or even fatal
    just a few decades ago. We might not think of this as achievements of
    software specifically but software is the underlying force that is powering
    and enabling all of these. But software can be used for terrible things as
    well, using it to inflict violence or commit genocide. If we think software
    is a powerful and enable  enabling force, who does it enable and what does
    it allow them to do? I have really lives who don't speak English. If one
    came to me and said they want to learn to write software and asked me for
    advice, the first thing I would say is you have to learn English because if
    you don't speak English, you're not really going to be able to do much in
    the software world, certainly not in open-source software development.
    Especially if you don't even read the Latin script because your native
    language uses a different script altogether. That itself is a barrier. If
    writing software is only an option for the ten per cent of the world who can
    speak English, that has huge implications about what it means when we say
    that software is an empowering and enabling force. So if JavaScript wants to
    be the future of software development and we think that software development
    is going to be an enable willing force for the world, then we need to
    writing JavaScript is accessible to people of all languages, not just
    English. The idea of eliminating natural language barriers to programming
    isn't new at all. In fact, it's very old. Grace Hopper is one of the first
    computer scientists and she wrote THE very first compiler for a high-level
    language. You should check out her portrait there. The language that she
    invented was called Cobal, and the goal was to have English-like national
    language syntax so that business executives could write code. She got a lot
    of pushback about this because engineers thought if non-engineers can write
    code, this can put us out of a job but Hopper took this vision further. Why
    restrict it to English-like syntax? What if engineers who speak other
    languages want to be able to write code as well, and she wanted Cobal to be
    a language you can talk to people around the world. The response she got to
    that was more vitriolic. How can we teach American computers to run German
    programmes? That wasn't an accident. This wasn't a question of how it can be
    done technically, it was a political question. This was the 1950s, and in
    the US military, the fear of a threat from Germany or Russia was still a
    huge fear in people's minds. But even if Hopper's idea was put on the back
    burner in the 1950s due to xenophobia and Cold War politics, we can look at
    what that means today, and apply that approach to modern languages. So this
    is Hopper speaking about Cobal many years later, "I would have thought it
    would be useful to NATO because they had the common verbs for the things
    they're going to do, and the nouns, they have to have a dictionary for the
    things they were referring to for inventory control. They would have common
    announce throughout NATO and a diction of common verbs and translate the
    programme. You can write one in English and you could translate it and it
    goes to the other language. No problem. You have communication. It would be
    a limited vocabulary." One thing is that she chose the imperative mood
    specifically because she thought it would be universal to languages, because
    not all languages distinguish between tenses in the same way but they
    generally have a commanding way to do something. Cobol popularised the
    programming style, and that stuck with us today. Even JavaScript, way has
    the capabilities of a function al language, we still usually use imperatives
    for the four function names and that is - let's see what we get when we take
    the principles of hopper's vision and apply that to a modern programming
    language like JavaScript or Go, Koro is an extension of the Go compiler.
    It's an idiomatic translation of the English name Go. You will see why I
    chose it for this example. But as for Bengali, I chose that because Bengali
    it's the language my family speaks, and we're Bengali, and, if you talk to
    Bengali about our language and culture, you'll see very quickly that we're
    pretty proud of it. The Bengalis like to say is the language that is so
    beautiful, people literally fought a revolution, an entire war, to defend
    the right to speak it. The United Nations more recently actually issued a
    declaration stating that Bengali was the sweetest-sounding language in the
    entire world. But on a more practical note, Bengali is a pretty common
    language. After Hindi, it's the most common language spoken in India, and
    also the national language of Bangladesh. Combined, that means it's the
    seventh most widely spoken language in the entire world. There are more
    native speakers of Bengali than there are of German and French combined. It
    also uses a non-Latin script, so it gives us an opportunity to test the
    boundaries of what we can do with Unicode and how characters get treated and
    rendered in languages outside the ASCII code range. Again, nothing that I'm
    doing here is unique to Bengali or to Go. If you speak another language,
    which it seems the majority of this room does, I encourage you to go home
    and try to do this with your own language as well. This right here is a
    simple "hello, world" in standard Go. If you've never written a line of
    code, you can guess what it is doing here. This is that equivalent programme
    written in koro. We've left the identifier names intact, and I did not
    forget "true", true is not a key word in Go. Based on the previous slide,
    you can take a guess at what this programme is doing. If you don't speak
    Bengali, you might not be able to figure it out from scratch, if you do,
    this is a whole lot more readable than what we just saw on the previous
    slide. The first challenge we need to do here is we need to get this
    programme to run because the Go compiler isn't going to know what to do with
    the key words. Here we can take advantage of a nice trick. This is why we
    chose Go for this example. Go's source code is all UTF8. The Go compiler has
    trouble dealing with non-ASCII characters in Go programmes and the Go
    compiler is bootstrapped, written in Go which means that the Go compiler is
    a Go programme so it has trouble dealing with non-ASCII key word definitions
    or strings. There are a few checks that ensure that non-alphabetic or
    non-alphabetic characters can be used in key words but it turns out that you
    additional them and nothing goes wrong. If we disable them, all you need to
    do is extend the mapping that has the strings, that map strings to the
    internal tokens, and extend those to include the Bengali translations of the
    key words as well. JavaScript already has the analogous concept of
    transformations, and that is something that is used heavily in JavaScript,
    if languages like TypeScript and also with polyfills, and it is a little
    trickier to do this for reasons of they have to do with compiler
    architecture which I'm not going to get into, but it's still - it's fairly
    similar. It's the still very much possible to use this same approach in
    JavaScript to translate from one human language to another, or one dialect
    of a programming language to another. Having made those changes, this is
    what that "Hello, World" looks like in practice. You can see the programme,
    and we are going to run it. There we go. Thank you. [Applause]. Remember,
    our goal is to defragment open-source development, not to fragment it
    further. We need to make sure that our code that we are writing in koro is
    still interoperable with English-speaking Go developers are use as well. We
    don't want to have to translate every programme manually because that would
    be unfeasible, but the computers are doing the heavy-lifting for us.
    Conveniently, for translation, Go has a handy utility for format ing - and
    mostly we you have the  use Go format to argue over bike shedding,
    semicolons, things like that. Instead of arguing which is the proper way to
    indent your code, you set up the editor whichever way you want and render
    tabs how you want them to be, and, when you save your code, it's committed
    in the standard form. If I want to use four spaces for indentation and you
    want to use two, Go format means we can work together. I set up my editor to
    render it to the width I want and we don't need to know that we have
    different indentation preferences because the code committed is on the
    standard form. Go format is syntax aware, so it can do things like remove
    unnecessarily parentheses and ensure it will never change your code
    semantics. That's a simpler way of saying it is a great way of performing
    fully isomorphic translations of source code which is exactly what we could
    wouldn't here. All we have to do is extend Go format and repurpose it for
    translating English Go code into Bengali or vice versa, and that is what
    koro format does. So let's translate that same programme written in koro
    back into English-speaking Go and run it. Here is the koro programme. And
    now we can format it, and we get the English programme again, but if you
    don't believe me, we can run it and prove it does the exact same thing.
    There we go. We just translated from one language to another, and back
    again. There we go. So the same way that you didn't know that I was using
    four spaces for tabs and I don't know that you were using two, having
    bidirectional translation layers means you don't need to know that I'm
    writing my code in English and I don't need to know that you're writing your
    code in whatever language you happy to speak. We can still work together and
    we localise our source code as a commit hook and the editor will display it
    for us in the language that we want. As a developer, koro means we only need
    to look at source code in our own language, and as far as the code is
    concerned, the language barriers are no more of a barrier to you and me
    writing code and working together than our indentation preferences are.
    That's the way it should be. Translated the key words but you will notice
    that we left the - we didn't touch everything, so like the package names and
    identifiers, those we kept in English. Is there a way that we can translate
    those as well in there are a lot of ways to choose variable names but the
    one thing that everyone agrees on is they should be descriptive and concise.
    If you don't speak English, then it's not descriptive to have English
    codenames. In reality, many functional names are highly structured. We don't
    need to, as Hopper mentioned, we already have the verbs that we use when
    talking about our programme. There is the common vocabulary. We can take
    advantage of that in the translation step as well and translate these. There
    we go. So, yes, we have read fu, write fu, et cetera, and these are common
    verbs that you use when we write JavaScript programming, and even if we
    don't translate all of them, having that on the right is a whole lot better
    and descriptive and compatible on the rest. You might know what fu means,
    you might not be able to pronounce that, but you can still tell that that
    means you're going to be reading something. It's some sort of access or
    method. By being more conscious about these conventions we're already using,
    we can make our code that much more accessible to non-English speakers. We
    might not get all of these translations for free but we can still get many
    of them, and that is a huge step forward. Now the million-dollar question:
    could we do this with JavaScript? There are a few reasons I chose Go for
    this example. In Go the source code is acquired by the UTF8 means internally
    strings and byte arrays are treated as UTF8 as well. JavaScript is - source
    code can be what you want in JavaScript, whatever the interpreter happens to
    support. As for the internal representation of strings, that is an even
    trickier question. If you talk to most people, they will say UTF-16, wide
    Unicode, that's mostly true except where it's not. Some people will say it's
    UCS2, that some were true except where it's not. The reality is probably
    best described like this  like this: JavaScript is some weird amalgamation
    of UTF16 and UTFC2 internally which works fine, but it makes, trickier when
    you're dealing with non-ASCII things outside the code point, especially when
    you're dealing with the actual digging into the actual internals of the
    language implementation itself because you can't rely on the source
    encoding, because it can be whatever the interpreter happens to support, and
    you can't rely on, and dealing with code points that are far outside the
    ASCII code range so you need to be able to handle more than one byte at a
    time in your key words. A lot of implementations, particularly things
    implemented in C, they're going to struggle with that. Could we do this in
    JavaScript? I mean, honestly, I think so. Definitely, not as easy as it is
    in Go, like I've outlined some of the challenges there, but definitely
    possible. That said, one of my friend, who is a very die-hard JavaScript
    programmer, she told me that the best way to get JavaScript developers to
    write something is to convince them that it can't be done in JavaScript. If
    you tell them they can't tell them in JavaScript, then within an hour of
    your talk finishing, there will be three packages which do that thing. I'm
    going to tell you this can't be done in JavaScript, and I'm going to bet
    that you cannot prove me wrong! [Applause]. Ask how we've done the - we've
    done the source code itself, and we have to talk about the users, and the
    users include developers who are using developer tooling as well. Error
    messages are a big part of that. Node.js does a pretty good job with this by
    abstracting the way that messages are presented from the internals of it, so
    JavaScript actually already does, I would say, well, some platforms of
    JavaScript, does maybe 70 per cent of the work that you would need for this.
    Go is an approach to error-handling that is different from most languages,
    but if you've actually written JavaScript, you're probably still familiar
    with it, because in JavaScript, you can't use access - exception handling
    to, or error handling within a callback because it's asynchronous code. You
    have to pass in error values and operate on the values. Go does the exact
    same thing but for all code where synchronous or asynchronous. In Go, to
    juice JavaScript terminology, all errors are an object that happens for a
    dot error method on it, and that is guaranteed to return a string. That's
    the only thing that you're guaranteed to know about than error is that one
    specific method is present and it will always return a string if it is not
    null. And that applies, that is a proper that means it's powerful but it
    means that that message then needs to be accessible to people who don't
    speak English because - what happened here? As developers, we've struggled
    with cryptic error messages. This is from Java because I've been using it so
    long as an example of a terrible error message that I've forgotten what it
    means. It's a real error message. If you know what it means, tell me,
    because it's been years, I've forget. JavaScript isn't immune, either. If
    you write JavaScript a lot, you probably have an idea of what that means and
    what the error is, but if you've never written JavaScript, this is your
    first time encountering that error, it's not so clear what you need to do
    there to fix it. Certainly if you don't speak English because the only thing
    that is worse than a cryptic error message is a cryptic error message in a
    language you can't understand. Translating error messages is a good starting
    point. Not only are they fine night in full - finite in number - and they
    are the easiest to solve technically because we can rely on existing
    localisation strategies. Node.js does a good job of making this abstraction
    available. We just don't have that fully for all languages. We're not taking
    advantage of that, and we're certainly not taking advantage of it over the
    JavaScript ecosystem. JavaScript has localisation libraries that will
    provide experience of textual strings in a designated locale. You can
    present it to the user in a  in the language that we're going to be able to
    understand. So, we've talked about a lot of different things so far. There
    are a lot of steps that we can take to including non-English speakers more
    in JavaScript development. Making tool chains for translating code to other
    languages, like what we saw here with koro, that's just one of them, and
    there is more as well. I don't have time to talk about the aspects like
    documentation. How do you translate documentation and how do you make sure
    that that documentation stays in sync between across languages? How do you
    make things like mailing lists or even meet-ups and conferences like this,
    make those accessible to people who speak any language, not just people who
    happen to speak English? I don't have time to go into the details today, but
    I've spoken about some of the challenges in the past, so, if you're
    interested, you can check that out, or come and find me afterwards. Of
    course, that means that not all the stuff is technical, but - but some of
    his requires you rolling up your sleeves and lying code, and if someone is
    interesting in doing this with JavaScript or another language like what koro
    does for Go, go ahead and prove me wrong when I say it can't be done in
    JavaScript. But others are straightforward, and more low-tech. They involve
    the ways we operate as a community. We are scratching the surface here. For
    think of this stuff to happen, we need to commit ourselves to doing it. We
    need to remember that 95 per cent of the world doesn't speak English as
    their first language, and 89 per cent of the world doesn't speak English
    fluently at all. Thanks to JavaScript's dominance over the web over the
    years, that means that if there is language that has been spoken and is
    being written today by active users, and it is basically a certainty that,
    at some point, that language is being used alongside JavaScript, that
    JavaScript is handling that language in some capacity. That's a virtual
    certainty because of how widely used JavaScript is across the web and how
    powerful the web has been in transforming people's lives, not just in
    English-speaking countries, but really all around the world. So, it means
    that there is really no language that is as well suited and JavaScript is to
    being used by the entire world, not just people who speak English. We have
    an opportunity to bridge this language divide, to make Hopper's vision a
    reality in a way that no other programming language has been able to do
    before. So, let's do that. Let's make JavaScript a programming language that
    is truly accessible to everyone, no matter what language you happen to
    speak. Thank you. [Applause]. 
  name: Aditya Mukerjee
  image:
    filename: aditya-mukerjee-79e7fbd2.jpg
    filename_500: aditya-mukerjee-79e7fbd2-500.jpg
    filename_1000: aditya-mukerjee-79e7fbd2-1000.jpg
    filename_square_1000: aditya-mukerjee-79e7fbd2-1000-square.jpg
    filename_square_500: aditya-mukerjee-79e7fbd2-500-square.jpg
    filename_square_200: aditya-mukerjee-79e7fbd2-200-square.jpg
    width: 250
    height: 250
    originalType: jpg
  web:
    twitter:
      handle: chimeracoder
      url: 'https://twitter.com/chimeracoder'
    github:
      handle: 'https://twitter.com/chimeracoder'
      url: 'https://github.com/https://twitter.com/chimeracoder'
    homepage:
      handle: adityamukerjee.net
      url: 'https://adityamukerjee.net'
filename: /aditya-mukerjee/translating-code-to-other-human-languages-and-back-again.html
yt:
  id: '-0WQCs2JsFY'
  url: 'https://youtube.com/watch/-0WQCs2JsFY'
  title: >-
    করো: Translating Code to Other (Human) Languages, and Back Again by Aditya
    Mukerjee | JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/-0WQCs2JsFY/maxresdefault.jpg'
  index: 25
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      করো: Translating Code to Other (Human) Languages, and Back Again by Aditya
      Mukerjee | JSConf EU 2019
    duration: PT23M55S
    description: >-
      Javascript runs on nearly any platform. Most languages can compile to
      Javascript. It’s well-positioned to become the lingua franca of
      programmers, with one problem: Like most programming languages, Javascript
      is based on English. 89% of the world’s population doesn’t speak any
      English. Many of those people can’t even read the Latin script. If we want
      Javascript to be a lingua franca, we need to ensure it is accessible to
      all people, regardless of their native language.


      Let’s look at the barriers that non-native speakers face when contributing
      to OSS Javascript projects and what it would take to remove them entirely,
      so that two developers could collaborate without speaking the same
      language. We will see what techniques Javascript can borrow from other
      languages by taking a look at করো (koro), a project which adds Bengali
      support to the Go compiler. And, we will learn enough about compilers and
      character encoding to answer the eternal question: “Could we do this in
      Javascript?”


      https://2019.jsconf.eu/aditya-mukerjee/translating-code-to-other-human-languages-and-back-again.html
    thumbnailUrl: 'https://i.ytimg.com/vi/-0WQCs2JsFY/maxresdefault.jpg'
    uploadDate: '2019-06-24T12:30:37.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/-0WQCs2JsFY'
    interactionCount: 1175
    actor:
      name: Aditya Mukerjee
  viewsPerHour: 0.3540070886540116
  websiteUrl: >-
    /aditya-mukerjee/translating-code-to-other-human-languages-and-back-again.html

----

Javascript runs on nearly any platform. Most languages can compile to
Javascript. It’s well-positioned to become the lingua franca of programmers,
with one problem: Like most programming languages, Javascript is based on
English. 89% of the world’s population doesn’t speak any English. Many of those
people can’t even read the Latin script. If we want Javascript to be a lingua
franca, we need to ensure it is accessible to all people, regardless of their
native language.

Let’s look at the barriers that non-native speakers face when contributing to
OSS Javascript projects and what it would take to remove them entirely, so that
two developers could collaborate without speaking the same language.
We will see what techniques Javascript can borrow from other languages by
taking a look at করো (koro), a project which adds Bengali support to the Go
compiler. And, we will learn enough about compilers and character encoding to
answer the eternal question: “Could we do this in Javascript?”