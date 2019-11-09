----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Joe Sepi: Promises API in Node.js core: where we are and where we’ll get to'
data:
  published: true
  reviewed: true
  order: null
  firstname: Joe
  lastname: Sepi
  talkTitle: 'Promises API in Node.js core: where we are and where we’ll get to'
  coSpeakers: null
  twitterHandle: 'https://twitter.com/joe_sepi'
  githubHandle: 'https://github.com/joesepi'
  homepage: 'http://joesepi.com'
  potraitImageUrl: 'https://avatars0.githubusercontent.com/u/143668'
  caption: "Thank you.  Hello.  How is everyone doing?  I am\_\x1EJoe Sepi and I am actually super\x1Eexcited to be here.  But I've also had very little sleep so it might not show through.  But, yeah.  Thanks for coming.  And thanks to JSConf for inviting me and thanks to everyone that has made this event really awesome.  It's super great to be here.\n      And I wanted to kind of just take a quick moment to say, like, happy anniversary, tenth year of JSConf.  Super\x1Eexciting, but also a little bit sad since they're gonna take a little break.  But let's stay positive and be excited about the tenth year and I'm really excited to see what happens next.  There are some amazing people that are involved in this whole effort.  So, I look forward to seeing what they bring next.  But also, happy birthday to Node.  I don't know if everyone knows that this is ten years of Node.  Whoo!\n      [ Applause ]\n      Ryan introduced Node here at JSConf in 2009.  Shoutout to Jenn\_Shiffer, 2009.  Happy belated birthday from I/O\_JS.  I couldn't find the Node.js Tweet that said happy birthday, so I went with this one.  I'm here to talk to you about promises in Node Core.  The Core APIs in Node and what state they are in terms of being promisified.  And I want to start with a little disclaim.  I will try to make as few puns as possible.  I'm going for zero.  And technically I don't think this is a pun.  And if you are keeping track, mark of zero.\n      I'm Joe Sepi.  My little Twitter handle's down there.  You can barely see it.  But if you search, you'll find me.  I'm an open source engineer.  I have the great fortune of being paid to work on open source exclusively pretty much.  And technically and in the community and as a part of the Foundation.  Why does my phone keep buzzing?  I told them, leave me alone.  Okay.  It's not doing it.  Anyway.\n      So, I'm super\x1Efortunate and it's great.  I love it.  I work if a lovely company called IBM.  We make typewriters and we have\_\x1E\x1E we have a cloud.  But it's really just someone else's computer.  So, don't be fooled.  Not to be confused with how so, you know, IBM.  This is my lovely family.\n      [ Laughter ]\n      This is also my lovely family.  This is what I do in my spare time.  That's Pat and Stella, and this is what I really enjoy doing.  I play in another band, that's also Stella in the background.  That's me up there as well in the back.  And I occasionally play in a Misfits cover band.  So, funny story.  All of this was to lead up to, you know, karaoke tonight.  But then I realized that was my talk is after official karaoke.\n      However, I am always open for karaoke.  So, if anyone wants to go, I'm here all week for the TC39 meetings.  Ping me.  My DMs are open, let's go do karaoke.  Okay.  Cool.  So, I digress.  Which I do often if you know me.\n      I wanted to just quickly share a little bit of personal context around Promises.  I've worked at a company called The New York Times a few years ago.  And pretty much everywhere I've worked for the last\_\x1E\x1E I think almost every job I've ever had\_\x1E\x1E I've done some form of developer advocacy formally or informally.\n      And I started this weekly JavaScript thing.  Which I managed to do every single week.  Largely sourced by internal folks.  Luckily at the Times we had so many great people like Jeremy and David Nolan and Mike and lots of great people.  But occasionally I would have some outside folks come in and talk to us about cool stuff.  So, this is in like 2012?  2013?\n      Tom Hughes came in, Rebecca Murphey.  Spike came by and my old friend Dominik was there too.  So, Tom talked about sockets and streams in Node.  What's the date on this again?  Yeah, 2012.  And so, I mean, Node was around for a few years.  It was still pretty new, pretty exciting.  And the hockey stick had not really happened yet.  Rebecca came and we had kind of an informal discussion, you know, a group discussion.  This was one of the things she talked about.\n      Shoutout to yayQuery.  I mean, does anyone know yayQuery?  All right?  Do some research.  It's fantastic.  Anyway.  Spike came and talked to us about Render which was this really cool isomorphic framework where you could bring backbone app that would be frontend and backend with the same code.  It was kind of revolutionary at the same time.  It was really cool.  And Dominik came in to talk to us about this little spec he was working on.\n      And at the time there were a few libraries that were implementing Promises.  But everybody kind of had their own flavor.  And so, Dominik was working on, you know, developing a spec that would be something that the language could implement.  And fortunately, Dominik continues to be amazing work in the spec space.  Thank you, Dominik.  It was also a great opportunity for me to say that wrote for the \"New York Times,\" which is pretty cool.  I talked about callback hell in JavaScripts.  And how we're working on it using, you know, the Promises async flow.\n      And this looks bad, but it's not actually that bad.  It's fairly linear.  But when you're nesting asynchronous flow in a variety of ways, they can get really, really, really painful and hard to debug.  And, you know, I think it was one of the quiz questions last night, you know?  Which of these async functions are gonna end first?  If I'm not mistaken, almost everyone got it wrong.\n      Then I went to work for a company called Behance which was a lot of fun.  And there were really smart people there.  And everything we did there was kind of Promise\x1Ebased and it kind of blew my mind for a few weeks or months.  But once I got a hang of it, writing almost all my code using Promises, it was just a fantastic way to control your async flow.  And you may know that Ryan was here last year talking about regrets in Node.\n      And one of the key things he talked about was not sticking with Promises.  And granted, this is really early on, 2009 to 2010.  He removed them in February.  And as he says in the talk, you know, maybe it's okay that they didn't remain in Promises.  Because not having the implementation in there allowed the community to kind of work through what might be the best implementation.  There were a variety of libraries like I said before, Q and R is SVP doing their own implementations of promises.  And it allowed the community to find the right abstraction and we could go from there.  It's a good model that I think we've used time and again in JavaScript.\n      But as he said, Node's many async APIs are aging pretty badly.  And this is definitely a pain point in writing Node which has a lot of callback\x1Ebased APIs, obviously.  Async is at the core.\n      So, one tip, if you are really trying to get your talk accepted at a conference is to reference one of the organizers in your talk proposal.  I don't know if it worked or not, but I'm here in front of you now.  So, one of those references is to this Tweet.  And it really was kind much funny, but sad.  LOL at Node.js Core modules for still using the callback pattern.  This is in November.  And I have this bad habit of\_\x1E\x1E maybe it's a good habit, actually\_\x1E\x1E of finding something interesting that I would like to hear a talk about and submitting it.  Whether I know a lot about it or not.  But this was really interesting to me and so I submitted a talk about how, you know, where we are and where we're trying to get to.  And how you may be able to help.  And fortunately for me, it got accepted.  Here we are.\n      So, one of the responses is Myles who is super\x1Eactive in the Node space, in a variety of spaces.  I love Myles.  And he shares with us that the FS API already has an experimental promise implementation.  And this is one of the problems.  It's not maybe the prettiest because we needed to figure out how to namespace, essentially, Promise implementations of APIs.  But he points this out and people are pretty excited about it.  And he shares that, you know, unfortunately there are only two that were implemented at the time in late November.  And it's FS and DNS and they're experimental.  Now, there are some puns on these slides.  But I did not make them.  So, I don't\_\x1E\x1E I still don't think they count.  Keep it zero, Donny.  And then it was also pointed out that there's a utility in the framework that you can basically wrap any callback\x1Ebased Node API using util.promisify.\n      As stated there, it's still a little bit horrible.  But it gets somewhere.  Why was it taken out and then has not been just like brought back into Node?  And this was something Matteo said to me a couple of days ago at the Open JS Collaborator Summit which happened just before JSConf.  Is that it's an insanely hard problem that's been there forever.  And that we've never really been able to find a great way to solve and find consensus on what the implementation is.  For a variety of reasons.\n      So, the big problem is that Promises were primarily designed for browsers.  And so, if you have, you know, something go wrong in your promise in a browser for a user, you're only affecting one user, you know, one tab.  They might not even notice.  They may think why is my Facebook reply not showing up or something?  And they view the console, they may see some sort of error.  But it probably doesn't even affect them that much in most cases.\n      But if something happens on the server, it could bring the whole server down.  It likely will.  And that affects obviously way more than one user, right?  So, this is one of the big problems, the challenges that we face with Promises in Node Core.  And here is an example.  So, we had a session at the collab summit on this very topic and we kind of worked through some of these things as a group.\n      And this is pretty basic pseudo code.  But the sum function call will\_\x1E\x1E anything, you know, beyond that resolve will essentially get swallowed.  And so, you could have code like this in and bunch of code after that, but if your promises resolved, all of that code is essentially\_\x1E\x1E it's run.  But if you have any errors, you have very little\_\x1E\x1E I think no way of actually seeing what's going on there.  Your app may come down.  You may have all sorts of problems.  But you may never know that that's the issue.\n      And then this is another example.  Essentially if you have a promise that never resolves and the event loop finishes all of the things that it needs to do, you just have this promise kind of hanging out out there, you don't really know that that's there because it never resolves and it's sort of invisible as well.\n      So, essentially this is all a debugging nightmare, right?  But the great news is that there has been progress.  And things are happening.  There's a zero cost async stack traces were shipped not that long ago.  And so, that can help us get some insight into some of these issues.\n      But here's another big one reason, right?  So, how do you promise event emitters that don't resolve once?  They may have multiple events coming back, right?  So, what do we do there?  Well, the\_\x1E\x1E and, you know, as I said there are multiple responses.  The tricky part too is that some of the key things that the core APIs use event emitter under the hood, right?  So, this is a daunting problem.\n      Well, the good news is, events.once, that one's kind of easy to solve.  And I can't remember if there's a PR.  It may have already landed in Core.  But events.on needs an async iterator.  This talk has been evolving minute\x1Eby\x1Eminute, hour\x1Eby\x1Ehour.  We had the collab summit Thursday and Friday of last week and this Tweet came through yesterday morning.\n      So, I'm like continually updating these slides.  And they're also my talk notes.  So, if they come up and I haven't actually implemented a slide, don't blame me.  I'm working on it.\n      But the great news is, there's a PR open by Matteo to implement async iterator for the event emitter.  So, stuff is happening.  It's really, really exciting.\n      Sometimes this is thrown up as a bit of a road block.  And, you know, obviously we do need to be considering performance and the implementations that we're making.  But I think we need to make sure we balance them between the developer experience and delivering on what is, you know, a modern interface for a modern platform, right?\n      So, like I'm kind of getting at, the good news is that things are getting better and progress is being made on a very ongoing basis.  Some APIs are already done.  As I mentioned, F S and DNS, events.once.  There are a few others that are already implemented.  Some PRs are open like the one we just looked at for a second there.  I have one I'm going to open over the next few days that's around crypto.  So, things\_\x1E\x1E things are definitely happening.  And other development is in progress.  And when I say that, I mean, this is from November of that Tweet about lol at Node Core to now, there has been a real swell of activity.\n      And especially with the Summit session that we had.  Like the people are focused on this when we asked for volunteers.  There were, you know, six or seven people that raised their hands.  And I'm trying to think about this too from like a\_\x1E\x1E something of a project management standpoint and helping list out the APIs, see what state they're in.  I'll be opening some issues soon to catalog what APIs still need to be done.  And we can start to really track this effort in a holistic fashion.\n      So, we try to do everything in Node out in the open.  You know, through issues and comments and PRs and such.  And so, this is an issue in the Summit repo for the recent Berlin Summit.  And so, as you can see here, one of the topics that we talked about was unhandled rejections.  So, when\_\x1E\x1E like I showed earlier, if you resolve your promise and you have a bunch of other stuff happen and you get exceptions, how can we handle that and surface these errors so that you know where they're coming from?\n      We have a survey that we're working through, if people are interested in.  We're also\_\x1E\x1E if I were able to scroll down on the screenshot, there's a link to user feedback survey that's I have been trying to get over the finish line that would be more for end users, what their experiences are, how they're managing promises and give us some more insight into what we may want to be considering in further development here.\n      And then that bottom link there is the list of all the APIs and some notes on the current state of things.\n      So, as\_mentioned, there's a survey, primarily focused for implementers as to what we think would be the best way to handle these rejections.  This is that list of the APIs that I mentioned.  There are only 50 of them.  And a bunch of them are not relevant.  Some of them are already done.  But, you know, we're trying to get a real handle on the overall effort.  But like I said, the ground swell within the project is real.  People are focused on this.  It's taken a little bit of time to get there.  There are PRs open and there's work being done and it's actually kind of exciting to think we may have some more modern interfaces for those Core APIs.  The kind of call to action here too is if you are at all interested, we always welcome people to get involved.\n      I know sometimes working on Node Core can be a little daunting.  But it's not that bad.  You should talk to the folks involved, Joyee, Fedor, any of the folks involved would be happy to share with you.  It is a strategic initiative for the technical steering committee, the TSE.  Matteo is the champion.  I'm trying to help along with Ruben to\_\x1E\x1E Ruben Bridgewater to spearhead these things.  Myles is doing work.  Everybody is doing work on these things.  Benjamin is involved.  A lot of people are focused on this now.  This is exciting.\n      This is one of those slides that I should have updated, but I haven't filed that initial PR.  Once I did, there would be next to Matteo's name a link to catalog where we are.  And I promise you that we will resolve this problem.  All right?\n      [ Applause ]"
  name: Joe Sepi
  image:
    filename: joe-sepi-ccb70cb1.jpg
    filename_500: joe-sepi-ccb70cb1-500.jpg
    filename_1000: joe-sepi-ccb70cb1-1000.jpg
    filename_square_1000: joe-sepi-ccb70cb1-1000-square.jpg
    filename_square_500: joe-sepi-ccb70cb1-500-square.jpg
    filename_square_200: joe-sepi-ccb70cb1-200-square.jpg
    width: 460
    height: 460
    originalType: jpg
  web:
    twitter:
      handle: joe_sepi
      url: 'https://twitter.com/joe_sepi'
    github:
      handle: joesepi
      url: 'https://github.com/joesepi'
    homepage:
      handle: joesepi.com
      url: 'http://joesepi.com'
filename: /joe-sepi/promises-api-in-nodejs-core-where-we-are-and-where-well-get-to.html
yt:
  id: '-4p_qLYjUDc'
  url: 'https://youtube.com/watch/-4p_qLYjUDc'
  title: >-
    Promises API in Node.js core: where we are and where we’ll get to by Joe
    Sepi | JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/-4p_qLYjUDc/maxresdefault.jpg'
  index: 42
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      Promises API in Node.js core: where we are and where we’ll get to by Joe
      Sepi | JSConf EU 2019
    duration: PT20M37S
    description: >-
      Currently only ‘fs’ and ‘dns’ have an experimental promise api in Node
      core. People LOL at node.js core modules for still using the callback
      pattern. I could launch into a bunch of puns here but instead I’ll just
      say the current status is sad but fixable. Where are we? What do we need
      to do? How can you help?


      Footnotes: https://twitter.com/MylesBorins/status/1064925041039761409
      https://twitter.com/cramforce/status/1064734275478577152


      https://2019.jsconf.eu/joe-sepi/promises-api-in-nodejs-core-where-we-are-and-where-well-get-to.html
    thumbnailUrl: 'https://i.ytimg.com/vi/-4p_qLYjUDc/maxresdefault.jpg'
    uploadDate: '2019-08-12T13:04:43.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/-4p_qLYjUDc'
    interactionCount: 7569
    actor:
      name: Joe Sepi
  viewsPerHour: 3.532665917420072
  websiteUrl: >-
    /joe-sepi/promises-api-in-nodejs-core-where-we-are-and-where-well-get-to.html

----

Currently only 'fs' and 'dns' have an experimental promise api in Node core.
People LOL at node.js core modules for still using the callback pattern. I
could launch into a bunch of puns here but instead I’ll just say the current
status is sad but fixable. Where are we? What do we need to do? How can you
help?

Footnotes:
https://twitter.com/MylesBorins/status/1064925041039761409
https://twitter.com/cramforce/status/1064734275478577152
