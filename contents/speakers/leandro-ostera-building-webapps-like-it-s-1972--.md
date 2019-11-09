----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: "Leandro Ostera: Building WebApps Like It's 1972 \U0001F9D9‍♂️"
data:
  published: true
  reviewed: true
  order: null
  firstname: Leandro
  lastname: Ostera
  talkTitle: "Building WebApps Like It's 1972 \U0001F9D9‍♂️"
  coSpeakers: null
  twitterHandle: leostera
  githubHandle: 'https://github.com/ostera'
  homepage: 'https://ostera.io'
  potraitImageUrl: 'https://avatars3.githubusercontent.com/u/854222?s=460&v=4'
  caption: >-
    Before I begin, I just want to thank all of you for giving me this
    opportunity. Around ten years ago, I left my home town in the north-west of
    Argentina, and I could not envision that I would be speaking today to all of
    you. Thank you. Earlier this week, I was asking any speakers if they had
    rituals before they went on stage. This is the largest audience IBA been in
    front of. Laurie Voss suggested I take a selfie to help with my stage
    fright. If that is okay with you, can we take one at least? Thank you so
    much! So we've got it here. Can we say "actors"! One, two, three, actors!
    Okay. It was worth a shot. So, all right, for those of you who don't know
    me, my name is Leandro, and I work as a research engineer at Source. We're
    fully open source non-profit dedicated to advance humanity in our
    interactions with computers. Today, I'm here to talk about us. All of us.
    And about our history-building software for human beings. By the end of this
    talk I hopefully will have done two things. While the web flourishes with
    incredible ideas, we have a great many lessons to learn from our past. The
    second one is that was  perhaps I will have compelled some of you to
    challenge the way we build web applications, both at a technical level but
    also philosophically. So let us begin. And in the spirit of fun, let's play
    a gale. I will describe a programme and some of the features it has, and you
    will try to guess out loud its name. Are you up for it? Yeah? Cool. I know
    we are tired, the last day, but please, bear with me. Can you think of a
    programme that lets you draw maybe free handed, and then you can resize your
    shapes at will? Does this programme let you set constraints for those shapes
    and say that they will be centred, parallel to something else? Can you make
    copies of those shapes? And if you make a copy and update the regional, does
    the copy update as well? Anybody any guesses? Photoshop? Anyone else? All
    right, I was hoping would actually say "Sketch". These are some of the
    features in Sketch but I was referring to subscribers sketch Pad, a
    programme developed back in 1963, and yet this is this old. This is really
    over 50 years old. So I want to show you a little bit of what Sketch Pad
    looks like. We can see that something on screen, right. It looks like a
    rivet or maybe some sort of square with a base. He has a crossbar, and the
    centre of the crossbar now to draw an arc. Then he's going to point to the
    different edges of the drawing and ask the programme to make them mutually
    perpendicular. As the problem solves the constraints, it forces the arc to
    change. Then he shows that no matter how you distort it, it comes up with a
    symmetrical solution, which is pretty cool. These constraints could have
    been more complicated, could have been ratios between lines, and other
    drawings. We will see a last example there. Turns it on. There you go.
    Perfectly symmetrical rivet. Another important idea we will see here, and
    the first time it is shown, is the idea of a master and an instance, right?
    He was working before on this master drawing, and now he has an instance of
    it on screen that is completely independent from the master. You can see
    that he's rotating it, trying to fit it into the plank. It's a tedious
    process. It takes a little bit of time. This flickers because it's not
    actually a display, it's an oscilloscope. They did not have displays back
    then. Perfect. There you go. We can relate now to this pattern using
    different names. Perhaps we think of components and elements in React or
    classed as an object in JavaScript. He creates a few more instances, and
    then he goes back to the master, and you can see that he will just remove
    some of the crossbar lines, and, when he goes back, lo and behold, the
    copies, the instance was be the elements have been updated. Yes. This is the
    work of Ivan Sutherland who, in 1963, published his seminal work on Sketch
    Pad. It's pretty intense. It's on line. This development during the thesis,
    all by himself, and when Alan Kay one of his students, asked him how did he
    manage to create this first object-orientated system, and the first
    graphical interface system all within one year by himself, the guy just
    replied he didn't know it was hard. Which is interesting. Either way, Ivan
    really set the bar high for a people that came after him, right? He set the
    direction for the likes of Douglas Engelberg, the fellow who created the
    first computer mouse. They developed through a span of ten years a system
    that is kind of incredible. I can't quite grasp that it has existed. This is
    the online system for historical reasons that I'm not going to get into, and
    it was first made publicly in 1968. In dates a long time ago as well. This
    has been dubbed "the mother of all demos". Let's look at why. And this is
    audio, so hopefully, you will be able to see it. 

    >> [Video]: I would like to see you while I'm working on it. Oops. The kind
    of display. I would like to see you while I'm working on it. So before I can
    do that, I have to set up my display in a certain way. 

    >> We can hear Douglas doing the live stream of the computer. 

    >> [Video]: It leaves a corner up there. [Voices speak all at once]. 

    >> You can see my work, I can point on the  at it, and we can talk. Let's do
    some collaborating. 

    >> That is video conferencing 1968. 

    >> There is nobody here but a large audience, Bill. Let's talk about
    information retrieval, and a lot of things I've been showing them jumping
    around and finding your way. 

    >> Can we lower the volume on the video, please? 

    >> "An instrument, complex data structures, it shows them how we can get
    around and find things. I showed them the content analysers ..." 

    >> They're discussing some matters of the presentation they were doing
    there, and then they proceeded to link work spaces to the point that they
    are essentially doing live-coding. If you look carefully, in a second from
    now, two mouses on the same computer. They're modifying the same
    environment. This is live coding. This presentation is epical. If you
    haven't watched it, after this talk, wherever you're home, look at it on
    YouTube. You see two mouses there. With this contextual background, we can
    move on to the last piece of history that we need for this presentation, and
    that is Xerox Park, the Palo Alto research centre. They create the
    Smalltalk. Smalltalk is a language that was designed to be a - Smalltalk was
    designed to be a vehicle for human symbiosis, not like in Star Trek. It's a
    language that is designed to fade into the background fast and let you
    express yourself, sort of like a musical instrument would. It offers the
    programmers two core capabilities: the first one is classes and objects,
    which are used to represent things, right, and processes, and the second one
    is message-passing. That provides the communication layer, a way for the
    objects to talk to each other. Something worth noting is that Alan Kay has
    repeatedly said that when he invented object-orientated programming, the
    important part was not the objects themselves but the messages. It was the
    communication that he really cared about. Let's look at an example of this
    system. We can see here an animation of a bowl in what appears to be a
    static website. In reality, the animation is being programmed as objects. We
    can stop it, step through it. It's going to go through until it finds the
    right frame. He opens up a browser, and this browser lets you see the
    messages that this object in particular can receive, right? That you can
    send to it. After finding the right message, he is kind of going to the
    painter tool and doing the same thing, and finding that, okay, we have the
    current frame message on the top, and we need to find a message to link the
    current frame into the painting tool. So it's going to look for the picture
    arrow. It's going to then sort of sketch an arrow, and the system will
    recognise that you have to messages selected, so you can type in there what
    you want to say. He's saying, hey, painter, here's a message picture, give
    me the picture that you're currently using and link it to the bouncing,
    which is the name of the object which represents the animation, current
    frame. So the current frame of the animation above. After he sends the
    message, we get the frame below. This is done completely live. This is not
    something that has been prepared beforehand. It's the live system that the
    user is going to use. Right? All of these applications are customisable by
    the users to feed their needs. They turn the whole computer into some
    bicycle for the mind. And all of these examples have been built on each
    other to formalise the idea that our world is concurrent. Everything around
    us is happening in parallel from us. We communicate with everything around
    us by sending these metal, just like right now, I'm not letting you access
    the memory in my head, I'm sending mention to you so we communicate. Yes.
    The underlying philosophical grounds that all of these people shared, the
    vision they had, was to advance the human intellect. We're not talking about
    for-profit companies trying to lure you into buying a product but altruistic
    men and women dedicating the lives for all of us. We've seen the sketch
    about the NLS - Smalltalk. What are the learning we can take from them and
    apply today? I want to talk about two ideas. The first one is the
    competition model behind this application, how is it that they're run, and
    the second one is the philosophy behind it? Let's begin with a first one.
    When we model an application in Smalltalk, we model it in terms of objects
    that interact with each other in terms of message-passing and each of those
    objects performs hopefully one small task. That's a number of messages that
    it understands that it sends to all their objects. It may have some internal
    state that can change over time. Normally, one of these Smalltalk
    applications, right, can have millions, or hundreds of millions of objects,
    and you may even think of those tiny objects as tiny computers on their own.
    It's kind of like an internet inside your application. If you look at this
    diagram, you can see we have some ... that is sending essentially an in put
    object, a message called "clear", and it clears itself, and a container
    object is sending a draw message telling where it has to be drawn, the same
    with a slide er linked to the graph, and the synchronise from send to the
    graph that will in turn update the slider. The underlying principles behind
    how Smalltalk works have been formalised with some differences as the Actor
    model. In the Actor model, we have separate actors, essentially independent
    entities, that they're executed completely independently, completely in
    isolation. They solve problems by collaboration, and then collaborate with
    each other by message-passing. They collaborate by talking to each other
    just like humans do. Modelling the system with this approach history is
    interesting properties. The first one is failure ... by default. The second
    one is an asynchronous nature, and the second one is that it is
    parallelisable. A show of hands: have you ever seen an application, a
    website that bass completely unusable because of some exception that blew up
    the complete application stack? Yes or no? Pretty everyone is yeah, that's
    the way it goes. I think we all have, right? Before application s start
    normally compose of those independent ly collaborating systems, why do we
    treat them as a single monolith that has to be carefully programmed? I don't
    quite understand that. We know that applications are scaling massively in
    complexity, and for the user experiences that people that used them is
    perhaps the definition of a ... for some of us. In the Actor model, an actor
    failing does not take down the entire system. If you build it carefully, all
    the actors can take a look at your actors, and restart them whenever they
    fail. You have a system that heals. Of course, we could decide the certain
    failures are worth a complete application crash, irrecoverable crash. Now
    it's a constant decision that we make. It's not something that just happens.
    The second thing I want to talk about is asynchronous nature. This is fairly
    straightforward. The applications that we build are asynchronous by default.
    The user interacts with it and we don't know when that is going to happen.
    Why do we need to build up stacks of reactive libraries, we could be using a
    competition model that is fit for it? Lastly, parallelisable. We struggle to
    parallelise this because we have a accessible stack running, and any
    co-ordination in the thread has been thought about beforehand and done
    manually. In terms of actors, we could potentially run every Actor
    parallelly. That might be useless because some might depend on messages from
    each other but you can do that. This is because each one of the actors is
    essentially its own tiny computer. Just think of the performance gains some
    applications would have by using more cores because they are available.
    Without having to be rewritten. There is this three properties, right. They
    are incredible in practice like in Erlang or Pony been when they are used
    for building massively concurrent systems, like WhatsApp, for example, were
    built on it. I will grant you that we don't want two million users per
    browser but knowing your application can crash and recover on the fly by
    itself, it's incredibly powerful when it comes to raising the bar on quality
    of any experience that we design or develop. The second point I wanted to
    make beyond the competition model is the one of philosophy. This is a
    briefer one. It's the last point I like to make today. And it is that most
    applications, if not all of them, are built on two key ideas: the idea of
    liveness of an application, and the idea of directness of an application.
    When we talk about liveness, we are talking about the ability to always
    respond to a user's actions. This means that whatever you do in the system,
    and whatever the system is doing, they will never be a complete stop or gap
    in the feedback loop. This is a little bit how the real world works. We are
    constantly sending messages, sometimes we get responses back, sometimes, we
    get, you know, double-tick red. But naturally, as the workload of the system
    increases, you will expect some performance degradation. You would expect
    the system to gracefully degrade without actually stopping to work entirely.
    Now, do you remember the last time you were a  were on a website that didn't
    do something or anything, really, for some time. There was perhaps something
    taking over the main loop, and your application just sort of stopped working
    entirely. Really, we can do much better than that. And I think considering
    liveness and the actor model how they work together in isolation is
    foundational to recoverable errors. The second thing in the philosophy track
    is directness, or directness. Directness means that everything you see can
    be modified, whatever the user sees on screen that he can click on, whatever
    graphical representation of the system we have is the point that the user
    can begin to explore the entire system. That might be scary for some because
    you can right-click on something and get the actual source and not bundled
    or minified version of it and modified. If they can inspect the button,
    change the attributes to restructure the behaviour, even reconstruct a user
    employee to suit their needs better, persist those changes and essentially
    modify everything they already see, we have an application that show cases
    directness. Really this is a deeper philosophical question to ask to all of
    you here, is are we going to be building applications that model a flow that
    everybody sort of understands and doesn't actually empower anybody to do
    better than they actually are doing? Are we going to be giving them bicycles
    for their processes, or are we going to carry them around? So how do we get
    there? I would inventory ure the  that most of you who haven't heard of me
    before so it's hard to agree with me right now that we need to rethink the
    complete foundations on which we build applications. After all, with all
    those fancy frameworks out there, backed by corporations, how could they be
    wrong, right? I invite you to take a first step in this world by trying out
    Smalltalk. Just to get a feeling of what we are missing in web development
    nowadays. What is it like to build user interfaces, applications, user
    experiences in other platforms? ... and it should be more than enough to
    show why some of these attributes are paramount to increasing the quality of
    the software we build. You will find that the same properties alongside
    highly, highly reflective language allow for a development experience quite
    unlike we've seen in other mainstream languages. Seriously, most
    importantly, what is it we can do right now to start building web apps like
    it's 1972? My best answer to all of you is to start by learning about them.
    Look online for videos, people that put screen casts on how to build these
    applications with these technologies. There are languages out there from
    like Smalltalk, with Self Squeak, just random names. I feel like I'm reading
    a lot of npm packages right now! Really try to get inspired. Take a look at
    how they're thinking, what is it they want to give the users? Are they
    trying to solve the problem? Are they trying to give them a tool. Start by
    asking why are we treating people as cattle to put through a conversion
    funnel instead of empowering them to solve their problems by giving them
    flexible systems with powerful tools to be as efficient, and effective, at
    their jobs as they can be. I'm sure we are aware there are learning curves
    for these things. But if this community is capable of anything, it's growing
    and learning, so there's no good reason to stop doing what we are doing. Do
    not stop doing what we are doing and reconsider it. We can begin today with
    a fundamental philosophical shift. At source, we are working as hard as we
    can to implement a universal virtual machine, a Stage VM, that we can use to
    bring this computational model on some of the goodies that BBC seen in these
    languages to the WebAssembly. It's not just to target the browser but to do
    it through WebAssembly. It will be something we have worth demoing, but if
    you're interested, follow us on Twitter. And with that, I want to say if
    you're interested in non-profits for software, I work at one. If you're
    interested in the actor model or want to learn more about Smalltalk or
    Erlang distributed systems, come and say hi to me after the talk. Thanks for
    the opportunity, and thanks to JSConf. 
  name: Leandro Ostera
  image:
    filename: leandro-ostera-97a686af.jpg
    filename_500: leandro-ostera-97a686af-500.jpg
    filename_1000: leandro-ostera-97a686af-1000.jpg
    filename_square_1000: leandro-ostera-97a686af-1000-square.jpg
    filename_square_500: leandro-ostera-97a686af-500-square.jpg
    filename_square_200: leandro-ostera-97a686af-200-square.jpg
    width: 400
    height: 400
    originalType: jpg
  web:
    twitter:
      handle: leostera
      url: 'https://twitter.com/leostera'
    github:
      handle: ostera
      url: 'https://github.com/ostera'
    homepage:
      handle: ostera.io
      url: 'https://ostera.io'
filename: /leandro-ostera/building-webapps-like-its-1972-male.html
yt:
  id: yuk7n43xU4g
  url: 'https://youtube.com/watch/yuk7n43xU4g'
  title: "Building WebApps Like It's 1972 \U0001F9D9‍♂️by Leandro Ostera |\_JSConf EU 2019"
  poster: 'https://i.ytimg.com/vi/yuk7n43xU4g/maxresdefault.jpg'
  index: 49
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: "Building WebApps Like It's 1972 \U0001F9D9‍♂️by Leandro Ostera |\_JSConf EU 2019"
    duration: PT22M28S
    description: "The year is 1972 and GUI applications like no one has seen before are being built in Smalltalk: bitmaps graphics, draggable elements, drop-down menus, collapsable windows \U0001F92F; all of them and many more coming straight from the future, powered by asynchronous message passing, object orientation, and functional programming. An unprecedented cocktail to be later rediscovered as the Actor-model.\n\nFast forward to the present day, and typical web applications are modeled as monolithic deeply nested structures, resembling the medium the web was built for (HTML), but leaving us handicapped to build outstanding user facing applications. \U0001F996\n\nLet’s explore together what we can learn from the early days of UIs, languages like Erlang and Smalltalk, the Actor-model, and how we can apply some of these principles and ideas today to take our UIs back to the future \U0001F680\n\nhttps://2019.jsconf.eu/leandro-ostera/building-webapps-like-its-1972-male.html"
    thumbnailUrl: 'https://i.ytimg.com/vi/yuk7n43xU4g/maxresdefault.jpg'
    uploadDate: '2019-08-22T15:30:30.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/yuk7n43xU4g'
    interactionCount: 3738
    actor:
      name: Leandro Ostera
  viewsPerHour: 1.9672183936152456
  websiteUrl: /leandro-ostera/building-webapps-like-its-1972-male.html

----

The year is 1972 and GUI applications like no one has seen before are being
built in Smalltalk: bitmaps graphics, draggable elements, drop-down menus,
collapsable windows 🤯; all of them and many more coming straight from the
future, powered by asynchronous message passing, object orientation, and
functional programming. An unprecedented cocktail to be later rediscovered as
the Actor-model.

Fast forward to the present day, and typical web applications are modeled as
monolithic deeply nested structures, resembling the medium the web was built
for (HTML), but leaving us handicapped to build outstanding user facing
applications. 🦖

Let’s explore together what we can learn from the early days of UIs, languages
like Erlang and Smalltalk, the Actor-model, and how we can apply some of these
principles and ideas today to take our UIs back to the future 🚀