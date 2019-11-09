----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Michael Mifsud: GraphQL: Towards a universal query language'
data:
  published: true
  reviewed: true
  order: null
  firstname: Michael
  lastname: Mifsud
  talkTitle: 'GraphQL: Towards a universal query language'
  coSpeakers: null
  twitterHandle: xzyfer
  githubHandle: 'https://github.com/xzyfer'
  homepage: null
  potraitImageUrl: >-
    https://user-images.githubusercontent.com/579928/52562883-03f48d80-2e54-11e9-8c7b-0674690ca5f6.jpg
  caption: >-
    Thank you. GraphQL. You might have heard of it by now, and, if you have,
    you've heard about how to it's great for performance, backwards
    compatibility, and great for those hard to get out stains! Probably! There's
    seemingly nothing it can't do. But have you wondered how? How can GraphQL
    have these supposed superpowers? I think the key to this lays in its basic
    building blocks. In this talk, we will start off by taking a look at the
    schema definition language, RSL, and the resolvers, and understand how they
    work together to execute a query. Then I will show ways to use these
    features to graph all the things before finally entering the "don't try this
    at home" portion of the talk. First, g, the ' day, how is it going? We work
    on building tooling services and platforms to enable at Red Bubble. I'm the
    maintainer of Lis Sass and notes Sass. So let's jump right into it. The
    schema is the skeleton of GraphQL. It's what gives it its shape. Everything
    else builds on top of or happens because of the schema. It is defined using
    the schema definition language. We are we have an example schema. We're
    using "type" to define conference. Our conference type is a name field which
    we set as a string. String is one of the skeletypes, in graph, and others
    like ints, floats, and booleans and the other suspects. We have a speakers'
    field which has an array of the speaker type. It's not a built-in type, so
    we define it ourselves. Our speaker has a name and a favourite emoji. This
    gives me licence to use member throughout the talk! We have some fields with
    exclamation marks and others don't. It means a field is omitted but still
    valid. IDs are convenient for querying and mutating data. Speaking of
    querying and mutating data, we have the query types called root types. There
    are others too but we're not going to talk about them today. On our query
    type, we have a conference field that returns any conferences we know about.
    We also have a speaker's field that has a required emoji argument and
    returns some speakers. We have a mutation type. It has a speak field, that
    takes a speaker ID and a Conference ID. Something to note, it's common to
    refer to fields on query mutation types. You see return-type mutation looks
    like the return type of a query field. A field on a mutation could return
    things like booleans but as richer types as part of the expressiveness of
    GraphQL. There is some detail as to how these are defined that we won't go
    into today. The important thing to take away from this is the field in the
    query type to ask for information whereas fields and mutation type typically
    change things. Lastly, the resulting data from mutation can be expected to
    have the changes already applied. The schemas are the skeletons of GraphQL
    and at their beating heart. They bring life to GraphQL. With the amazing
    things that GraphQL can do, you would think they would be pretty
    complicated, but it's the simplicity of resolvers that is the key to their
    flexibility. It's just a function. It takes a couple of arguments. We're
    going to talk about these three today, but there are others. You can define
    a resolver or any or all fields on your schema, including fields in the
    query type, the speak field, and fields on any type like the emoji field on
    the speaker type. Inside a resolver, you can do anything it could do in any
    other JavaScript function. The only requirement is that it returns of value
    in the shape that matches the type of the field that it is responsible for.
    Here we have a map of resolvers. It has a query object representing the
    query type. And a query object, there is a speaker's resolver. A speaker's
    query has an emoji argument. We can access that argument by the name on the
    arc's argument on its resolver. We know from our schema that the query
    should returning the or an array of speaker types. Here it's returning an
    array of objects which have an integer ID field and a name and an emoji
    string field which means they match the expected shape of the query and all
    is well. Remember, the conference field doesn't have an exclamation mark so
    it's entirely optional here. Our speaker mutation - here we have a speaker
    mutation loading data from the context by the conference ID argument.
    Conference is a bit special. It makes it useful for storing things like
    configuration or services like database connections. After it is loaded, the
    speaker ID argument is appended to the conference object, the - finally does
    a query for the conferences that the speaker is attending. So that was a
    lot. But it is just a groundwork for what is coming up next. We're going to
    take a look at practical use of resolvers to feel how they work together and
    give you the versatility of GraphQL. The simplest resolver is one that
    returns an object. Earlier, we saw a resolver and all good because it
    returned a resolver that matched the shape of the speaker type before how
    does GraphQL match the speaker shape? Is there some kind of internal
    validation engine or some form of intro expect on their return type or AI?
    GraphQL can do these magical things. Why not build AI in there? No doubt
    there is a way to return these types. If you're like me, you're thinking
    about how you would have done it yourself. I've shown you how it happens.
    Every field from GraphQL gets a default resolver. The default resolver is
    straightforward. For any field, it takes the object, the parent object and
    tries to be the access a field as a function call, or an object property on
    the parent. Importantly, this happens recursively, so, if a field returns a
    type, the field's return type is a custom type, then all the fields on that
    type have their resolvers called. This is what happens in our case. The
    schema for our speaker's query returns return type to a null or an array of
    speaker type. GraphQL takes the speaker value. If it is null, it's returned.
    If it is an array, the value is iterated over and a resolver default is
    called for each speaker field. The parent armed for the resolver is the
    object at the current loop of the array. If a resolver for a field returns
    the wrong time, GraphQL throws an error. Also, if the return type of the
    initial speaker's query isn't null or an array, we also get an error. The
    default resolver is a great example of how we use building blocks to solve
    tricky problems like validation. So, a common use case for GraphQL is
    putting it in front of existing APIs. This really its bread and butter and
    what gave it momentum to start off with. Even here, there are interesting
    possibilities. Here, I've updated our speaker query to make an HTTP request
    instead of returning a hard-coded API. The schema could have different
    types. In this case, you iterate over the JSON and transform it to the
    phenotype you expect. Once again, we've added the conference resolver to the
    speaker type. There are a couple of interesting things happening here.
    Firstly, using both jQuery and fetch. Because, why wouldn't you? You have
    the entire power of JavaScript and MPM at our resolvers, so we might as well
    use it all. We are iterating over the array of speakers, and for each of
    those speakers, the conference resolver has called from an entirely
    different API. Here, GraphQL's essentially aggregating across multiple APIs
    in order to resolve a single query. The remaining queries are resolved using
    a default resolver. You can have a resolver with any or all fields. You can
    resolve all fields by its own API and users wouldn't be any the wiser. I'm
    not saying you should do this but you could if you wanted to. GraphQL got a
    lot of attention early on because of how well it worked as a facade on top
    of these fragmented APIs which often had incompatible methods of
    authentication, different transport types or content types. We can expose a
    single interface over - you have, APIs, without having to rewrite any of
    them. It wasn't long before people start rescinding these ideas, sometimes
    cutting out the APIs altogether and going straight to the database. Some
    truly innovative people have gone as far as defining the schemas themselves
    in a different language. Here, we are resolving a speaker query by making a
    -gate query. We are pulling the database operation - we set this up earlier.
    Because you have the full power of JavaScript to get a disposal here, you
    can do all the things you would do in an attractional RM, like read or write
    instances, whatever the requirements of that field might be. If you can use
    a database, there's no reason you can't use any other kind of of data store.
    Here, we are mixing and matching between relation al databases, elastic
    searches, at the field resolver level. Being able to make these choices at
    the field resolver levels allows us to fit best-fit solutions for the
    requirements of an individual field and changes of requirements over time as
    our systems change. By no means saying this is unique to GraphQL, simply
    aiming to illustrate the ease as which these capabilities are achieved
    between - within the play between schemas and resolvers within GraphQL. This
    is actually my favourite use case. I said earlier that the platform team is
    a bubble, we focus on enabling everyone, not just engineers. The way we do
    this is let people bring their own tools and adapt our systems to work with
    them. Enter spreadsheets. Who doesn't love a good spreadsheet in I know I
    do, our copy writers do, our data scientists do. They're practically
    ubiquitous and this makes them a powerful tool for enabling and encouraging
    contributions. Spreadsheets are fantastic for GraphQL because they are
    already structured. They come with their own schemas in the form of columns
    and rows. Here our speaker's query is loading it from disk, filtering the
    speakers to knows matching the emoji we passed them as a query alter. Now,
    anyone in our organisation can drag and drop a new spreadsheet on the GitHub
    UI. This kicks off our pipelines, and if the test passes, this is live for
    everyone to see, no engineer was required for this process. I mentioned at
    Red Bubble, we have a lot of this GraphQL distributed and a lot of
    configuration services to back this up. These configurations services are
    different to other services in that they fetch configuration on deploy and
    fetch low locally. They're not meant to be used in request. They may get
    over-the-wire updates as their lifetime goes on. We like the approach for -
    but it covers the complexities. Is is  is the configuration stored in memory
    or on disk? What happens when we receive an update? How do we validate the
    new configuration? We tried a few ways of managing and exposing
    configuration in our services and as you might expected, we eventually
    landed on GraphQL. Loading configuration files in resolver is pretty
    straightforward using the FS promises API. If we're unable to load the
    configuration for any reason, the server fails to boot. This works really
    well in many cloud environments because currently running it deploys will
    keep running until new versions can come up, so we don't lose any downtime.
    Next up internally, we created a configuration object by querying for that
    GraphQL configuration. If some important data is missing or if the data is
    otherwise unsuitable, the query fails and the service failed fails to boot
    again. Here, GraphQL's acting as an internal API abstracting over the node
    files APIs and abstracting over the complexities of dealing with validity
    and freshness. So some of you may have the inned in a previous slide, it was
    a chicken-and-egg scenario, how to load configuration and put it in context
    if we are loading configuration inside a resolver? This is where we do
    something nifty. We create multiple GraphQL servers with their own schemas
    and resolvers. One server handles incoming requests and reloads
    configuration by querying the second GraphQL server. That's right. You can
    even use GraphQL to abstract over GraphQLs running on the same machine. In
    fact, just about any API that is simply reads and writes can be represented
    as GraphQL queries and mutations. This is a real - this got me thinking - a
    light build up  bulb moment for me. What if our JavaScript APIs were
    GraphQL? What if the browsers had a GraphQL interface? This is my friends
    when things go off the rails. Welcome to the don't try this portion at home.
    Don't try this at home portion of the talk. I hope by now I've been able to
    convince you that enough about any read or write interface can be like
    plastered over with graphical representation. This got me thinking: the
    browser has read and write APIs. Surely these could have some graphical
    interfaces. As it turns out, there's nothing about GraphQL that inherently
    limits you in server environments. As long as you have a schema and resolver
    map, most implementations are happily run in the browser. Why? I think there
    are a couple of good reasons for this. We live in a world of heavy browser
    feature fragmentation, and even when those features exist, like the rolled
    out in a progressive manner, with API fragmentation in those features.
    There's the complexities of dealing with progressive enhance the and
    degradation because it's fun. Admittedly, I did if for the fun, but there's
    something valuable in the idea of the interface across all our web
    languages. Let's look at some examples. We've looked at how we use resolvers
    to interact with data stores, but the browser has a bunch of its own data
    stores. We have the web storage APIs in local storage and session storage,
    web SQL databases, and cookies. With a bit of creativity, you can stuff any
    kind of data inside a URL. There's a handful of libraries that do this for
    us acting as an interface across a buffer of these storage engines with
    using a mix of feature detection or polyfills. And so abstracting over data
    source is something that GraphQL is already good at. It's a really great fit
    for the scenario. We are, we've taken the spreadsheet consolidate from
    earlier, but reading a file off disk we're using it as an abstraction over
    various browser storage APIs. Libraries will progressively enhance or
    degrade, depending on which APIs are available in the current environment.
    More importantly, the user APIs don't get to juggle all the different APIs
    themselves or learn a whole new third-party API. They're just looking at the
    schema for the types required and executing queries and mutations as they
    already know how to on server. Just like on the server, a browser has
    equally capable of making network requests to APIs. Just like on the server,
    we can call it working APIs within the resolvers. Just like - we can
    gratefully degrade depending on what is available in the operating
    environment. And that, my friends, is running GraphQL in the browser. I
    think that's pretty cool. So I thought I would end it here. Like, in many
    ways, browser JS isn't different from the server side JS. It's not
    surprising they're able to use GraphQL as an abstraction layer over finicky
    APIs. There's something unique to the browser. Does GraphQL still hold up in
    this new world? For example, our good old buddy, the DOM. DOM libraries are
    nothing new. Some started our JavaScript journeys with DOJO. Even new, like,
    in React - here is an example of what a schema might look like for document
    query selector. All the dollar-sign functions in jQuery. And this is what
    the resolvers might look like. We have a document query to get to our
    document object and the document type has APIs we care about and fields. The
    resolvers for those fields just call methods on the parent, the parent being
    document in this case. And I think things - things pretty much work as
    expected. By now, you should not be surprised by anything on the slide. It's
    like previous examples we've seen before. The question you might have is
    why? Why even do this? And I get it: I was up front. These aren't
    necessarily good ideas. They're just ideas, but honestly, slides like this I
    think is why. Every time I forget to await my fetch only to have JavaScript
    yell at me that I can't use top-level awaits is why. Every time I forget
    Node list aren't actually arrays is why. Every time I decide whether to have
    to decide to use a callback or a promise interface is why. All the reasons
    you might use jQuery today because it's easier is why. Something about these
    slides really speaks to me. But I have to concede, building and maintaining
    a schema like this for the entirety of the DOM is kind of absurd. I get
    shivers thinking about what it would take to maintain. So maybe some
    enterprising folks could generate schemas and resolvers by scraping things
    like MDN or W3C specs or get crazy with web IDL, or maybe if we don't have
    the schema. I know I spent you 20 minutes saying they're amazing and the
    skeleton of GraphQL. That's all true, but also I'm really lazy, like super
    lazy. Did you see that schema? It's massive, and it's not getting any
    smaller any time. So if we don't have schemas, we don't need resolvers,
    either. I know, the beating heart of GraphQL, life blood, blah, blah, blah
    ... if I squint my eyes and tilt my head and use imagination, this looks
    like the resolver we had in our DOM APIs. So what if we define our own
    default resolver? A single resolver that was general enough to handle any
    field for any DOM API, if it follows a general pattern of fields being
    properties or functions on their parents, then we don't really need the
    schema. Like the DOM is the schema, like MDM becomes our schema. I thought
    it was a nifty idea and gave it a shot. So I have some demos coming up. I
    think this stuff is cool. I've been told it's probably just me! If you think
    this stuff is kind of cool, how about giving it a clap so I know to
    continue. [Applause]. All right. So, in the interests of tile, I have demos
    prepared earlier. As I mentioned, we could abstract over things like network
    requests. So here we are making our request to some random API that someone
    kindly allowed cause on for me. - calls on for me. You can see here, we are
    essentially querying for our window object, run the object calling fetch. In
    fetch, we're passing an array of arguments that line up to the argument
    forward of the fetch API. We are saying fetch this URL and then causing the
    JSON method on that response. Under the covers, you may await this, but you
    don't have to care about it. It's done for you. And here we can see the
    output, just for the saying that I'm not lying. And you can get the result
    here by calling the path on which we made the query, so our result is window
    reflect JSON. You may think we've already showed how resolvers can make
    requests. This is different, it's not resolvers making the network request,
    the query itself is the network request. We're resolving how to make
    requests. It's a bit unique, I think. So that is all well and good. What
    about the DOM? I promised the DOM. So here, we're emulating what I talked
    about earlier, we are taking - querying the document, querying the query
    selector role and giving it an parliament with the P tags. On the resulting
    P tags, we're pulling properties off. I think of this like a map. Like, what
    we've saved here, because you don't have to know what this returns. Is it an
    array, not an array? How do we cast an array? Is it going to yell at me? All
    those areas you probably run into like I have. And we can see the output
    here. We can see the properties coming out. That's not going to impress you.
    Let's try this one out! So here, we're doing the same thing, except we are
    using GraphQL aliases. We are essentially saying passing a document in,
    saying this is the root purely for the sake of indentation and readability
    but also for the sake that we can show we can operate on the resolve to
    something else. Passing in a document, doing three queries of the DOM and
    assigning those results to variables. We are saying our good boys are
    querying for all the Dojo emojis. There are some dogs and not dogs here.
    We're also querying for the non-Dojos, and for the yummy Dojo. These though
    you the results of the variables, but really bringing this home, we can
    actually pass this variable back into another query as the context, and
    here, we are doing the mutation, calling set attribute on our first good est
    boy, and we are giving it a style and increasing the font size. If we scroll
    up - oh, I changed the name - if we scroll up! Giant hot dog! [Applause]. As
    you may have guessed, this is the hungry boy. We can query the DOM, we can
    mutate the DOM. What else can we do? We can also do animations on the DOM
    using web animation API. Here, we are getting our hungry boy once again, and
    we're using the web animation API by calling animate on the resulting thing
    and giving it the object of the web animation specs. We are spinning it and
    scaling it up and down. We can change these. This is all live. I'm not lying
    to you. This is, like, so here we have had to do is look at MDN, find the
    API, and it's the same query interface. We didn't care how it returned or
    how it worked. If we want to reuse the animation? How do we copy it around
    and use it? We can use the GraphQL fragments. We are querying two different
    nodes in our yummy node. We are giving a spin and a bounce animation. These
    are defined down here asking from  fragments on the element type before we
    have one that bounces and one that spins, and then named as such. If we
    uncomment this - woah,  ... . Animations as variables. That's the best I
    got. I'm sorry! [Applause]. I know some of you are thinking: DOM, who uses
    the DOM? I'm more about the jQuery life. For you, we have this. We are
    passing our jQuery as the root context and can call jQuery as northerly.
    We're doing our request for the item and calling animate function. We're
    animating properties if the way that you would in jQuery. These can be used
    together. There's no limit to the hilarity that can ensue with enough
    animations. Let's give this one more spin before I wrap up. And there we go.
    GraphQL on the DOM in the browser. [Applause]. In closing, I started by
    saying GraphQL superpower be and shaped everything else like a - this makes
    GraphQL infinitely versatile. With a little creativity, we can GraphQL all
    the things and move towards a universal query language before the web. Thank
    you. [Applause].
  name: Michael Mifsud
  image:
    filename: michael-mifsud-e0c20524.jpg
    filename_500: michael-mifsud-e0c20524-500.jpg
    filename_1000: michael-mifsud-e0c20524-1000.jpg
    filename_square_1000: michael-mifsud-e0c20524-1000-square.jpg
    filename_square_500: michael-mifsud-e0c20524-500-square.jpg
    filename_square_200: michael-mifsud-e0c20524-200-square.jpg
    width: 4752
    height: 3168
    originalType: jpg
  web:
    twitter:
      handle: xzyfer
      url: 'https://twitter.com/xzyfer'
    github:
      handle: xzyfer
      url: 'https://github.com/xzyfer'
    homepage: {}
filename: /michael-mifsud/graphql-towards-a-universal-query-language.html
yt:
  id: Xi3sxygtDc4
  url: 'https://youtube.com/watch/Xi3sxygtDc4'
  title: >-
    GraphQL: Towards a universal query language by Michael Mifsud | JSConf EU
    2019
  poster: 'https://i.ytimg.com/vi/Xi3sxygtDc4/maxresdefault.jpg'
  index: 44
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      GraphQL: Towards a universal query language by Michael Mifsud | JSConf EU
      2019
    duration: PT27M13S
    description: >-
      From its friendly developer experience to its performance benefits, a lot
      has been said about GraphQL. Underlying it all is the GraphQL query
      language, made possible by GraphQL schema language. These surprisingly
      versatile features have the potential to provide a single interface for
      all modern web app development concerns.


      We will start with a case study on how we use GraphQL queries as an
      universal interface to resolve data over a variety of datasources ranging
      from remote HTTP requests, to local CSV files, and in-memory data stores.
      Next we will explore these ideas further, using GraphQL queries as an
      interface over the DOM and various other web APIs.


      https://2019.jsconf.eu/michael-mifsud/graphql-towards-a-universal-query-language.html
    thumbnailUrl: 'https://i.ytimg.com/vi/Xi3sxygtDc4/maxresdefault.jpg'
    uploadDate: '2019-08-14T15:54:24.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/Xi3sxygtDc4'
    interactionCount: 4090
    actor:
      name: Michael Mifsud
  viewsPerHour: 1.955303885889326
  websiteUrl: /michael-mifsud/graphql-towards-a-universal-query-language.html

----

From its friendly developer experience to its performance benefits, a lot has
been said about GraphQL. Underlying it all is the GraphQL query language, made
possible by GraphQL schema language. These surprisingly versatile features have
the potential to provide a single interface for all modern web app development
concerns.

We will start with a case study on how we use GraphQL queries as an universal
interface to resolve data over a variety of datasources ranging from remote
HTTP requests, to local CSV files, and in-memory data stores. Next we will
explore these ideas further, using GraphQL queries as an interface over the DOM
and various other web APIs. 