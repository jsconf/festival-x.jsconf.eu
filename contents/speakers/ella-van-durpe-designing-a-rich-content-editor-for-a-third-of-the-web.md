----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Ella van Durpe: Designing a Rich Content Editor for a Third of the Web'
data:
  published: true
  reviewed: true
  order: null
  firstname: Ella
  lastname: van Durpe
  talkTitle: Designing a Rich Content Editor for a Third of the Web
  coSpeakers: null
  twitterHandle: 'https://twitter.com/ellatrx'
  githubHandle: 'https://github.com/ellatrix'
  homepage: 'https://ellavandurpe.com'
  potraitImageUrl: 'https://secure.gravatar.com/avatar/9e149207a0e0818abed0edbb1fb2d0bf?size=400'
  caption: >-

    >> Thank you. Good morning. My name is Ella. I would like to talk to you
    about publishing on the web. Imagine publishing on the web, right, when the
    web was born. A web page would look something like this. You could  you
    would have a title, some links, a side bar with functionality, breadcrumbs,
    but you would have to rewrite this all the time. All of this would you like
    to put on every page and write it all the time. What if you liked to change
    something on every page of the site? This is why we have content management
    systems, right? Thanks. So a web page would look something like this:
    titles, links, side bar, a search functionality, and all of this you would
    like to have on every page. And it's quite easy to rewrite it all the time.
    This is why we have content management systems, right? They simplify web
    publishing quite a lot. So, title of, breadcrumbs, they are generated for
    you. When WordPress was born 16 years ago, out of this satire to simplify
    publishing on the web, they also had a function called ... because I tried
    to rewrite every single paragraph deck in this content, but I just - sorry.
    So, I would automatic ly wrap every line of text separated by two line
    breaks with paragraph text. This was before any visual editors exist odd the
    web. It was even before markdown was born. And I see this a bit as the first
    step towards visual editing. So this simplified web publishing a little bit,
    but you would still have to write other HTML, like links, images, auto
    formatting. So it is not easy to read this text, and it still looks a bit
    like code. A year later, style MC was born and WordPress including it into
    the CMS, and it would look like this. Everything was well, at least for a
    while. So how did this visual editor work? It used the browser API calls. It
    is really cool. You can just add attributes to any HTML deck and it would
    make everything editable inside it. You could put it on the body elements
    and your whole page becomes editable. You can literally put anything inside
    it. It's really magic. But the API had no  specification, and it was later
    taken over by other browsers. Every browser implemented it differently, so
    everyone had their own opinions about how it should work. Should enter
    create a line break or a paragraph tag? A gif tag? Should it depend on the
    context string? Should backspace delete a second image or delete an entire
    figure deck? What should happen with the caption? What happens if you press
    the ...? Should it insert inline styles, create a B tag or strong tag? Any
    visual representation of your content has an infinite all the of DOM forms,
    so there will be invisible spin tags, invisible characters, like
    non-breaking spaces, method elements. You can even split a tag into multiple
    pieces and you wouldn't see it. So you literally don't see what you're
    doing, and this DOM content becomes your source of truth. So selection has
    the same problem. Let me quickly show you. So if I selected text, did I
    select a paragraph contents, or did I select a whole paragraph, or did I
    select the entire blog post? The visual representation is very ambiguous.
    And here we have a link. If you have an insertion point, you cannot really
    tell if the insertion point is inside or outside the link. You have no
    choice where to insert. And finally, when you have non-editable areas inside
    editable areas, it's buggy across the browser as well, and this is complex
    for more building stones. I think we can agree that content is like black
    magic. You can put anything inside it, and you don't know what will happen.
    It's a bit of a black box. And what will come out is HTML soup. So we don't
    want to build an editor on to such complex foundations. Slowly writing on
    the web more chaotic, and content was not the only thing to blame. The
    WordPress editor also have some design problems. Brief plugins would try to
    build things ... autoplugins were creating shortfalls more and more complex
    things, creating for more calls and even more problems. Some plugins would
    give up on the visual editor entirely and put custom boxes outside the
    editor. They would do it all differently, so different coloured buttons,
    different types of models. Each more bigger and bigger to grab your
    attention. So I would call it spaghetti UI. In comes Gutenberg. It took us
    quite a while to build it because we had to take all these plugins into
    consideration. With Gutenberg, we wanted to create an editor from the ground
    up. We wanted publishing on the web to become effortless, and we wanted to
    end the constant editable mess. We wanted to create consistency in the UI.
    This was also an opportunity for WordPress to introduce JavaScript more
    seriously into the community. So how did we do this? Everything becomes a
    block, so paragraphs, images, headings embed, and this might sound a bit
    simple, but it's important to think about a writing experience as something
    fluid, so it's not immediately obvious in terms of UI and in terms of an
    extension mechanism. HTML has block-level elements and we would like this
    underlying structure to shine through. So first let's have a look at how we
    save this content. Even though the editor state is an object tree, a tree of
    blocks we don't want to save it as JSON or short calls or custom markup, we
    want to save it as HTML. Saving at HTML ensures that the data is portable.
    It works everywhere. And we don't want to the user to be locked into our
    system. Also HTML is a bit of the - also, it doesn't need any logic to
    render the page, so if a plugin disappears, the content will still be there.
    The page can still render. HTML is quite a pit of a lower language of the
    web but we need the markup to carry more meaning. Think about a table, for
    example,. It can be used for a plain table, and a plain table block or a
    calendar block. So we decided to use HTML comments to describe and to
    separate these blocks. They are syntactically very different from HTML, so
    our blog parser doesn't need to know HTML. And our side of this block added
    to context, these comments will just disappear. It also makes it possible to
    have - here is an example of a block. It makes it possible to create dynamic
    blocks, so blocks that rely on external data to render, like advertisement,
    or photo album. WordPress really values backwards compatibility, and we want
    to respect existing content. So content outside of these blocks delimiters
    are put in a fall back block, and a fallback block is the old editor inside
    the block. If you do not wish to use the new editor, or you just want to
    keep on writing in HTML, it's possible. You can just use this one block.
    This shows how robust the block system is. Each block is an isolated
    container. The block parser can recover from any invalid HTML because it
    doesn't need to parse it. HTML parsing errors are added on the block level.
    The theme for JavaScript errors, so we use React error boundaries to catch
    the errors, and to display them inside the blocks, so, if any plugin creates
    an error, it's no problem for the entire editor. And finally, since we don't
    use the entire block lift, we don't have to worry about the browser messing
    the markup up. So now, some new things about the editor. We have
    placeholders, be so, if you're writing a text, you can just insert the image
    placeholder and keep on writing and fill in the blanks later. Also,
    together, these placeholders can form templates, so, if a user doesn't
    really know how to create the more complex layout, they can rely on
    templates created by themes or plugins to insert on, and then fill in the
    blanks. For example, here, that's from Amnesty International. If you would
    like to reuse a piece of content, you can make a block reusable and use it
    on every other page. So any update to this block will reflect on all the
    other pages. So, in the background, this is actually a dynamic block. So,
    the editor is quite simple to extend people have created drawing blocks,
    form blogs. You can even put a editor inside the editor, and here you can
    see it's a blog that someone created in 17 lines of JavaScript. Finally, it
    is much easier to discover features. Before people would know how to paste a
    YouTube URL, that pasting would embed the video. Now this is part of the
    block list, so it is easier to discover and also searchable. In the future,
    we would like to have a plugin directory, and so if you search for a block
    and it's not installed locally, you will get some suggestions to install
    plugins, and you can install it right in the editor. This is to eliminate
    some end-user experience. Now what about rich text? We still want to write
    inside these blocks, right? So quickly to kick-start development, we put
    tiny MC inside components side React but we knew that eventually we wanted
    something lighter and something more integrated. So, because we had, like,
    React UI and it needs to handle things like paste and block-level
    interactions, on top of that, we also wanted some custom features, for
    example, format boundaries, so here you can see that you have a link, and
    with a left and right arrow keys, you can navigate inside and outside of a
    link. This makes it easier if you want to search on the inside or the
    outside, and you can try this on the other editor. It's not really possible.
    So, we decided to build our own rich text component, and guess what you use
    for that?. It gives you a lot of stuff for free. It just works in other
    languages like Arabic, Japanese out of the box. It's accessible, it resizes,
    and native UI just works. For example, if you shake your phone to undo what
    you've written, or if you want to use the formatting button on a touch bar
    of a Mac book. So it is quite good at text-level editing, just not at
    anything else. So, our components - so, in our components, we want to
    control the state, and we separated text and format. This makes it much
    easier to manipulate the data instead of having a three or four formatting -
    a tree of formatting elements. You have the string methods that you can use,
    and you have some extra formatting really that functions. So how does this
    work? For example, if you have an editor, you have a universal keys like
    enter, delete, arrows keys, so we create a new object from the previous old
    objects with the helper functions, and then update it with the algorithm,
    pretty much like React works, but for inputs, we have to look at the DOM,
    create an object, take the concern out of there that we need and update the
    DOM and if the browser does anything strange in there. Checks components are
    also extensible so it is possible to run transformations through on input.
    Here, if you type ... it can transform to a port tech. It is possible to add
    custom formats, things like autocomplete, annotations. You can even do
    checking like analysis, or spell checking. It is easy to implement. The
    blocks are tied together, the rechecks are tied together. This is to ensure
    a good writing flow. If you want to split the blocks, you can use enter, you
    can use lead, because it should not feel too blocky, right? The differences
    is that these block interactions are done by us, not by the browser. To this
    editor rebuild is super versatile. You can use it for documentation. Even
    people who get the editor - like Drupal, and I've made this whole slide show
    in Gutenberg as well. I will quickly show you and exit the page. So here you
    can see that every slide is a block, and there are blocks not entitled
    slide, so adding paragraphs, how you can also add things like images. Upload
    an image. You can resize it. You can move it. You can easily move around.
    You don't have to copy and paste. And you can also, we have some rich text
    and extensions work, for example. If I want to make something appear on the
    next key stroke for my slides, I can create the slide fragments. Then go
    back to the presentation. So you can make slides with it, and we're actually
    also using this editor now to edit the full site. So editing themes is
    actually how I got involved, how I got involved into WordPress and how I
    learned PHP and JavaScript. But not everyone has the time or the patience,
    or interest to do that, right? This is a very simplified but a themed
    template, a WordPress template would look something like this. You have some
    PHP and HTML detection. But why not let the user directly manipulate those
    blocks with a graphic user interface? Why not let the user add it to the
    whole site? Why should it be reserved for people who know HTML or for people
    who want to port? This gives more power if the  to the user, and the theme
    is reduced to a style sheet. In fact, it gets rid of PHP entirely for the
    templates. So there is a reason we call it Gutenberg, and the Gutenberg's
    printing press changed how book-publishing works, we are hoping that this
    editor changes how web publishing works. We want publishing on the web to
    become accessible to everyone. We want you to be able to break out the
    walled garden of the internet. We want you to be able to publish on your own
    server and to only your data, and I hope this project can help centralise
    that again. WordPress is also translated into over 100 languages, and you
    can add your own. It has 38 million active installs, and these 38 million
    active installs are separate servers, so they're not owned by one company.
    If you have questions, I will be around later, and I'm on Twitter. If you're
    interested in all these things, feel free to apply and work with us. Yes,
    thanks for coming, and thanks JSConf for having me.  [Applause].
  name: Ella van Durpe
  image:
    filename: ella-van-durpe-b5ad7562.jpg
    filename_500: ella-van-durpe-b5ad7562-500.jpg
    filename_1000: ella-van-durpe-b5ad7562-1000.jpg
    filename_square_1000: ella-van-durpe-b5ad7562-1000-square.jpg
    filename_square_500: ella-van-durpe-b5ad7562-500-square.jpg
    filename_square_200: ella-van-durpe-b5ad7562-200-square.jpg
    width: 400
    height: 400
    originalType: jpg
  web:
    twitter:
      handle: ellatrx
      url: 'https://twitter.com/ellatrx'
    github:
      handle: ellatrix
      url: 'https://github.com/ellatrix'
    homepage:
      handle: ellavandurpe.com
      url: 'https://ellavandurpe.com'
filename: /ella-van-durpe/designing-a-rich-content-editor-for-a-third-of-the-web.html
yt:
  id: ZNWNhUPrqB4
  url: 'https://youtube.com/watch/ZNWNhUPrqB4'
  title: >-
    Designing a Rich Content Editor for a Third of the Web by Ella van Durpe |
    JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/ZNWNhUPrqB4/maxresdefault.jpg'
  index: 29
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      Designing a Rich Content Editor for a Third of the Web by Ella van Durpe |
      JSConf EU 2019
    duration: PT19M15S
    description: >-
      How WordPress built its own brand new visual editor experience from the
      ground up. The talk will include an introduction of WordPress and how the
      Gutenberg editor project started, details of how it works and how we
      incrementally improved the block editor over two years, and what our plans
      are for the future.


      https://2019.jsconf.eu/ella-van-durpe/designing-a-rich-content-editor-for-a-third-of-the-web.html
    thumbnailUrl: 'https://i.ytimg.com/vi/ZNWNhUPrqB4/maxresdefault.jpg'
    uploadDate: '2019-07-08T13:46:42.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/ZNWNhUPrqB4'
    interactionCount: 2139
    actor:
      name: Ella van Durpe
  viewsPerHour: 0.7173340077368514
  websiteUrl: /ella-van-durpe/designing-a-rich-content-editor-for-a-third-of-the-web.html

----

How WordPress built its own brand new visual editor
experience from the ground up. The talk will include an
introduction of WordPress and how the Gutenberg editor project
started, details of how it works and how we incrementally improved the
block editor over two years, and what our plans are for the future.