----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Maxim Koretskyi: A sneak peek into super optimized code in JS frameworks'
data:
  published: true
  reviewed: true
  order: null
  firstname: Maxim
  lastname: Koretskyi
  talkTitle: A sneak peek into super optimized code in JS frameworks
  coSpeakers: null
  twitterHandle: 'https://twitter.com/maxkoretskyi'
  githubHandle: 'https://github.com/maximusk'
  homepage: 'https://medium.com/@maxim.koretskyi'
  potraitImageUrl: 'https://i.imgur.com/R64yL7F.jpg'
  caption: >-
    Okay. Hi, everyone. My name is Maxim Koretskyi, but I'm also known as the
    Wizard because I like to talk and write about complicated stuff, topics that
    sometimes are seen as mysterious, and hence the name The Wizard. I'm going
    to be talking about why Angular and React, the top web frameworks we have
    today, are so fast. I will present a few JavaScript opened myself techniques
    that these frameworks use to make JavaScript run fast. Now, I work at AG
    Grid. This is where we develop the best data grid in the world, so, if you
    need the data grid, we have a free community version with a lot of features,
    so definitely give it a try if you need data grid. I'm also the founder of
    Angular and dev community where we write and publish articles about advanced
    topics of Angular. So, we will be talking about three things today:
    monomorphism, bitfils, and filters. How many know about monomorphism, watch
    talks? Something? Okay. I watched a talk by Benedict last year, gave a talk
    about monomorphism. I will give you an overview of what it is. I will talk
    about bitfils and how Angular uses structure known as bloom filters. Let's
    start with monomorphism. I do a lot of reverse engineering. I sit at the
    computer with debugger and go through the sores of the frameworks. These are
    the comments that I found inside Angular and React sources. So these are the
    comments by technical leads of the frameworks, and they talk about hidden
    class.  And internal data structures called fibre and view nodes. They want
    to ensure that these internal data structures share the same hidden class,
    and that is to make property access monomorphic. So a bunch of words when I
    first encountered that, I didn't really know what they were talking about.
    We need to clarify today what is hidden class? What is monomorphic property
    access? Why is it important in what are these data structures, like fibre
    and view nodes? Let's start with data structures. Fibre nodes and view nodes
    in Angular are used internally to represent a template, basically. When you
    define a component, this is the declaration of a component in Angular.
    Angular uses view nodes, data structures, that it creates to represent a
    template. They define the metadata needed to render the DOM, and it also
    specifies which part of the DOM needs to be up dated. Something called
    bindings. How many of you work with Angular? The same thing in React. We
    also define components, we define a template, and React uses fibre node.
    This is new React fibre 16 architecture. It uses fibre node to represent the
    DOM. How many use React? About 40 per cent. Fibre nodes and view nodes are
    used by these frameworks to represent a template. This is something in
    between the declaration of a component template and the DOM. What is common
    between these data structures is that they are used a lot when these
    frameworks process changes. Imagine there's a function called update node,
    an example of a function, there are a bunch of functions similar to this one
    in both frameworks. This function takes in a data structure, fibre or view
    node as the first parameter and then it reads some property. What is
    interesting that these kind of functions and the property access to easily
    exceed 10,000 times. So it reads the data structure 10,000 times, every
    single times, changes are being processed. So it can happen a few times per
    second. You can imagine how many times the framework in JavaScript needs to
    have access to the property. The problem is virtual machines bike V8, it's a
    complicated process to figure out where exactly in memory for the value of
    the property is stored. Hence the virtual machine has optimisation
    techniques they use to make the process faster. First, let me explain to
    you: when I was trying to figure out all that stuff, the question I had is
    why is it complicated? Why is it complicated to figure out where the value
    is, right? And the answer is because of something called shapes or hidden
    classes. That is exactly the hidden class that Sebastian talked in his
    comment. So every single JavaScript object that you write in your everyday
    code is represented by the JavaScript object, the object internally, inside
    the VM, and this also is the corresponding shape object. So shape defines or
    describes the layout, which properties the object has, and some metadata,
    for example, the offset, where to find the value in memory. You might think
    why do we need this shape, right? Why not put all description of the
    properties on the object itself? And the reason is memory save. So, if we
    have two objects, on 1,000 objects, right, there's no need to describe the
    layout every single time. We can describe the layout only once, and then
    link this object to the shape that describes the layout, right? In this way,
    we only describe the layout once, even though we have, I don't know,
    potentially millions of objects in memory. But then, it creates a problem.
    What if we want to add an extra property? Now we want to extend the object
    A. We want to introduce the new property "W". Well, we need to introduce a
    new shape. We cannot add the W property to the original shape. Because it
    would mean that the other object, the object B that points to the same shape
    has this property, which is not true. We need to introduce the new property
    and then the new shape. Then we update links. The object now, the object
    points to the new shape. The same thing happens if we introduce another
    property we create one more shape. And so, in fact, we end up with something
    called Transition Chains. And it means that, when you try to access the
    property, for example, X, the original property on the A object which points
    to the button on the chain. It needs to go through every single property
    upwards and will  until it finds the shape that describes the property.
    Okay? You can imagine that, if you add a lot of properties in different
    places and modify object shape, you will have a transition shape potentially
    with hundreds of transitions. And so, every single time when you access a
    property, the virtual machine has to go through all that process to figure
    out the shape that describes the layout and memory of that and retrieve that
    information. So a technique that V8 uses is  to make that process faster.
    The idea is simple: the ... is the main word here. Every single JavaScript
    function is represented internally by the object called closure. This is
    where the virtual machine caches some information about the function, which
    objects are used to add parameters to this function, and the other
    information. And feed the vector, and this is the cache. This is where the
    virtual machine will cache some information. So let me give you an example
    of how it works. Suppose we are calling the function Get X and passing in an
    object with the X property. The virtual machine figures out the shape for
    this object, right, and then what it can do is that it can cache the shape
    of the object, and then the property, right, because we are getting access
    to the X property, and it can couch the offset, right? So the next time when
    we execute this function and pass in an object that has the same shape, the
    virtual machine can only compare the shapes, and, if they match, there's no
    longer need to figure out the shape. You can just take the cache value from
    the offset and use it to resolve the value in the memory. And what it also
    does is it defines the state of the function, and the state there can be
    three types of states: monomorphic state, monomorphic property access, and
    polymorphic. In this case, it's monomorphism because it - it's monomorphic
    because it has been called with one type of shape. Polymorphic is when a
    function has seen four types of shapes up to four times, and megamorphic is
    when you've been passing objects of different shapes, more than four types
    of shapes. It's important that you pass objects of the state to one function
    so the state remains monomorphic. I read the comment that monomorphic
    property access can be up to 100 times faster than megamorphic. If you take
    into account this 10,000 times of access during each change detection cycle
    that can happen several hundred times a second, you can imagine the kind of
    impact monomorphic property access can have on the speed. So frameworks use
    this to create - actually, what they do is they want to enforce this
    function that takes these nodes, it uses the same shape, same hidden class
    for fibre and view nodes, and that makes property access monomorphic. You
    can have HTML elements, child opponents, and if you follow object-orientated
    programming principles, you would create different classes for different
    elements. These frameworks actually merge everything into one data
    structure, one class, with all set of fields and they use one tag filled to
    distinguish between types of node. This is the code from the  React
    framework. This is a function that is executed for every single DOM element,
    so potentially thousands of times during each cycle, and you can see here
    that they try to distinguish by tag, and then run the corresponding logic.
    Okay, so that is monomorphism. Now, let's talk about bitfils. This is the
    other things that both frameworks happily used. Bitfils is a low-level
    concept. Those who have programmed with C++, for example, know this data
    structure, and bitfils is just basically an array of bits - zeros and ones.
    You can define a bitfil today in JavaScript, type OB prefix in console and
    you'll get the binary fill. Now React uses bitfils to en code side effects.
    Side effects in React are basically just operations that the framework needs
    to do on DOM elements, maybe place an element in the DOM, update tags,
    remove element, and, instead of having an array of strings, for example,
    that define operations, they just assign places, and say that, "Okay, the
    third bit is the update operation." So, if the bit is one, I know that I
    need to update task. If the bit is zero, it means that there is nothing to
    do here. And I found that when I was debugging React, I'm sitting with a
    debugger, and I'm following the spun element, and I've just updated the tag
    on the spun element, so I'm trying to figure out what changes it will have.
    So the effect tag is this effects filled, and it's a bitfil, so right after
    the render face when it has process changes, the number, the value, is four,
    and, because it's a bitfil, it's binary, so I converted it into like - here,
    it is actually the decimal, but I know it's binary, so I converted it to
    binary and I got 100. If you explore the fill, you can see it's a third bit,
    and that's exactly what I expected. React encoded the update operation, so
    later - for example, here, when the function update hosts the facts, it's
    executed, so, React will check every single bit and see what kind of
    operations it needs to perform. For example, update will up date the tags.
    Now, you might be looking at that and think to yourself, "Well, why bother?"
    This is okay, but it's still too low level, but there are a number of
    benefits, and advantages that bitfils have over other types of data
    structures. For example, with bitfils, there is no need to allocate memory
    for JavaScript objects and shapes, so the virtual machine can save a lot of
    space, and because there is no shapes and JavaScript objects, there are no
    references, it means that the garbage collection is a lot simpler. You know,
    you figure out the dependency graph and know which objects are safe to
    remove. With the bitfils, it's one instruction to the processor to clear the
    contingent memory, and that's it. With the bitfil, it's a smaller contiguous
    memory usage and allows for fast access for a single bit. It's one twice
    operator, and that's it. So that is bitfils. They're used by both Angular
    and React. The last date structure is bloom filters. It's an interesting
    data structure. This data structure is designed to answer one simple
    question: is it element in the set or not? Well, you can use an array, of
    course, and just go over each element, make a comparison and figure out
    whether there is an element in the set or not. It's quite long. You can
    imagine you have one million objects, you need to go through every single
    one, and it's pretty long. Well, bloom filters allows you to do that with
    just one operation. I show you how to do that. What is good about bloom
    filters is you can get two types of answers - yes or no - and, when you get
    the answer no, it means the element is definitely not in the set. But when
    you get the answer yes, it's not actually yes, it's maybe. The probability
    varies. Because of that, this data structure is called probabilistic, right?
    There is probability here. You might be looking at that and thinking to
    yourself, "Who needs a data structure that doesn't give you correct answer
    s?" This data structure is used most often when you expect the answer no
    most of the time. And this is exactly the case that I will present to you
    now. But first, I will show you how this data structure works, so each
    element in the set is encoded in a bitfil - one bitfils, or a few bitfils -
    you will have a hashing function that will take a value and produce some
    number. For example, for John, if we run the function and we get the number
    2, for example, we use the first letter and the code, for the letter, we
    will just use a binary or operator to set the second bit. And later, we will
    use the same function to get the number for John, but now we will use the B
    twice or operator to check if the John is here. You can imagine if the bit
    is not set, if it is zero, it means that John is not here. Now, where the
    problem is why, yes, it's not guaranteed. The problem is collisions. If we
    use the same hashing function and we use, for example, the only first letter
    to figure out the number, we're passing John and Jane, they have the same
    first letter. Here we have a collision, right? We end up with the John being
    in the set and Jane not being in the set, but the hash function would
    produce the same value and we get a wrong result. So where does Angular use
    this? It uses in a dependency injection system. So the cornerstone of the
    dependency injection system is an injector. It's a service, a container,
    where you can con figure the dependencies between services, and then the
    injectors responsible for instantiating them. Whereas most systems have only
    single injector called Global Injector, Angular has a hierarchical
    dependency injection, so, for the hierarchy of components, it creates an
    injector. For each component, you get an extra injector, so you end up with
    a hierarchy of injectors, and let's say the widget manager is provided in
    the top-most injector, or the bottom-most one requires on the widget.
    Angular would have to go through every single injector to figure out where
    exactly is this service, and only when it reaches the bottom-most injector
    it will be able to resolve the component. You can imagine it could take
    quite a while, for example, if every single injector has ten dependencies,
    ten services, it would need to go through every single one of them and do
    comparison which is a long time. So what Angular does, it introduces a bloom
    filter for every single injector, and with bloom filter, as I showed you,
    it's one operation to know whether the service is in the set or not. As I
    told you, the answer is most likely to go to be no, to so here, no here, and
    the last, the top-most, the answer is maybe. If we get the answer maybe,
    then we can do our actual comparison and find the service if it is there. So
    that is bloom filter for you. Okay, so here's a bunch of protocols that, if
    you're interested in that kind of flow-level details, I've written about
    reverse engineering, because I've reverse engineered webpack, other tools,
    change detection in Angular, and reconciliation in React. So here are the
    articles for you to check out. Also, if you want to learn more about this
    kind of topics, you can follow me on Twitter. I regularly write about some
    findings that I pick in these frameworks, and I've written about my journey,
    the article you can also read. So I hope that the knowledge that I've told
    you today that is awakened your curiosity to learn more about this kind of
    stuff, and I want you never to stop learning, and, by doing so, you will be
    able to reach new heights every day. Because I want you all guys to be
    extraordinary engineers. Thank you for your attention, and good luck.
    [Applause]. 
  name: Maxim Koretskyi
  image:
    filename: maxim-koretskyi-bd591963.jpg
    filename_500: maxim-koretskyi-bd591963-500.jpg
    filename_1000: maxim-koretskyi-bd591963-1000.jpg
    filename_square_1000: maxim-koretskyi-bd591963-1000-square.jpg
    filename_square_500: maxim-koretskyi-bd591963-500-square.jpg
    filename_square_200: maxim-koretskyi-bd591963-200-square.jpg
    width: 1911
    height: 1414
    originalType: jpg
  web:
    twitter:
      handle: maxkoretskyi
      url: 'https://twitter.com/maxkoretskyi'
    github:
      handle: maximusk
      url: 'https://github.com/maximusk'
    homepage:
      handle: medium.com/@maxim.koretskyi
      url: 'https://medium.com/@maxim.koretskyi'
filename: /maxim-koretskyi/a-sneak-peek-into-super-optimized-code-in-js-frameworks.html
yt:
  id: _VHNTC67NR8
  url: 'https://youtube.com/watch/_VHNTC67NR8'
  title: >-
    A sneak peek into super optimized code in JS frameworks by Maxim Koretskyi |
    JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/_VHNTC67NR8/maxresdefault.jpg'
  index: 1
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      A sneak peek into super optimized code in JS frameworks by Maxim Koretskyi
      | JSConf EU 2019
    duration: PT23M21S
    description: >-
      Very few developers have the need to write super optimized code. In
      application development we tend to favor readability over optimization.
      But that’s not the case with frameworks. Developers who use frameworks
      expect them to run as fast as possible. In fact, speed is often a defining
      characteristic when choosing a framework. There are techniques that make
      code run faster. You’ve probably heard about linked lists, monomorphism
      and bitmasks, right? Maybe you’ve even used some. Well, you can find all
      these and a bunch of other interesting approaches in the sources of most
      popular JS frameworks. Over the past year I’ve seen a lot while
      reverse-engineering Angular and React. In this talk I want to share my
      findings with you. Some of you may end up applying them at work. And
      others, who knows, may even end up writing the next big framework.


      https://2019.jsconf.eu/maxim-koretskyi/a-sneak-peek-into-super-optimized-code-in-js-frameworks.html
    thumbnailUrl: 'https://i.ytimg.com/vi/_VHNTC67NR8/maxresdefault.jpg'
    uploadDate: '2019-06-12T14:00:06.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/_VHNTC67NR8'
    interactionCount: 29144
    actor:
      name: Maxim Koretskyi
  viewsPerHour: 8.082868351100199
  websiteUrl: >-
    /maxim-koretskyi/a-sneak-peek-into-super-optimized-code-in-js-frameworks.html

----

Very few developers have the need to write super optimized code. In application
development we tend to favor readability over optimization. But that’s not the
case with frameworks. Developers who use frameworks expect them to run as fast
as possible. In fact, speed is often a defining characteristic when choosing a
framework. There are techniques that make code run faster. You’ve probably
heard about linked lists, monomorphism and bitmasks, right? Maybe you've even
used some. Well, you can find all these and a bunch of other interesting
approaches in the sources of most popular JS frameworks.
Over the past year I’ve seen a lot while reverse-engineering Angular and React.
In this talk I want to share my findings with you. Some of you may end up
applying them at work. And others, who knows, may even end up writing the next
big framework.