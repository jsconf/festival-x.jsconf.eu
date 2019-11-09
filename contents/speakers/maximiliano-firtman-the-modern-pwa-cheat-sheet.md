----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Maximiliano Firtman: The modern PWA Cheat Sheet'
data:
  published: true
  reviewed: true
  order: null
  firstname: Maximiliano
  lastname: Firtman
  talkTitle: The modern PWA Cheat Sheet
  coSpeakers: null
  twitterHandle: firt
  githubHandle: null
  homepage: 'https://firt.mobi'
  potraitImageUrl: 'https://firt.mobi/max.jpg'
  caption: >-

    >> How is JSConf so far? My name is Maximiliano, a long name - Max is fine,
    I can go by Max. I'm a mobile web developer, been doing web development
    since browser since 1995. I'm travelling a lot for training and consulting.
    I'm from Buenos Aires. I've authored a couple of books, the last two on web
    performance. I'm not here to talk about myself about how the system is
    broke. For example, this is my phone this morning. It's trying to update 231
    apps, okay? So I encourage you to do the same thing, disable automatic
    updates and see what happens. Also you've probably heard about the news in
    the last few months, apps currently sending a lot of data to different
    servers, sending your data when Super League, not just on iOS but also on
    Android, and, again, because I'm travelling a lot, I flew here through New
    York because I had a flight cancellation, and I saw that in Manhattan, in
    Penn Station in downtown Manhattan, download the app for the train station.
    Do we need an app for the train station? If you go to the store, it's 50
    megabytes for the train station app. Reviews are pretty bad, okay? And it's
    not just that app, okay. So this is a common scenario. We see this every
    day. You're thinking well, PWAs, right? PWAs should be the answer for a lot
    of these apps, okay? That is why today I'm starting a new Twitter account.
    It should be a PWA, okay? That's for real. [Applause]. @shouldbePWA. They
    show a lot of apps out there that should be based on the web platform.
    There's no need for an app. Progressive web apps, don't ask me nor a
    definition. How many of you have created PWAs? Let's see. Around 30 per
    cent. How many of you are working on the web? Most of you, right? So it
    basically is the same, so why 70 per cent of you are not saying that you're
    creating PWAs? So I offer this article in Net - I authored this article in
    .net magazine. I like this definition that PWA is the current - it's
    basically the web. Just for the zero per cent of you if you've not heard
    about this, it's a web app with service workers, and with, let's say, an
    optional layer that has to do with distribution, how users will install or
    use the app, because installation is not mandatory, you use the web app from
    the browser. So right now, today, 81 per cent of your users are able to
    install a PWA from the browser they're actually using to access your
    websites. It's a lot. On mobile, it's 92, okay? On desktop, it's 69. These
    numbers are getting higher every day. So this is the support on mobile. It
    works on every browser when you're in a website, you can actually install it
    from your home screen. That's the JSConf PWA, and then you have an app. That
    app looks like any other app on Android, okay? You have seen this before,
    probably. So that is I think pretty cool. It looks like any other app on
    Android. The same happens on iOS. You can go to Tinder, you know that one?
    Tinder is a PWA, you can go to your iPhone, go to the share sheet and the
    home screen, create an icon. You're thinking that's not a PWA, it's just a
    short cut to the website. If you open that icon, you have a standalone
    fuel-screen experience from looks like any other app on the iPhone. So it's
    basically a PWA. Then you have - feature phones, I have this Nokia here with
    me, feature phones, non-touch, they're supporting PWAs. But it's not just on
    mobile. On desktop you can go and install Trivago, Tinder, by the way, and
    you have a - that works on Windows, Chromebook, Mac and Linux. You can open
    more PWAs at the same time. We have the properly, we just need to create
    really, really good experiences, and today, let's say that I can say that
    maybe half of the PWA s out there on  R offering a good experience. The
    other half are away for offering a competition like the native apps, and so
    we will try to see why, and what we can do today to improve that experience.
    So, talking about the app cycle, okay? So because we are creating apps, not
    just websites that will appear in the browser. So, when you open a PWA, so
    if the app loads like any other content. That's not, that's no surprise.
    What happens when the user goes to the background such as pressing the home
    screen? You have visibility change event, and there you can pause a game or
    an animation, you can stop a timer, okay, because you're not in the
    foreground any more. A couple of seconds later, mostly on mobile devices
    such as Android, the app might be suspended, and there is a new freeze event
    which means your app will be in memory for a while but you won't be
    executing any code. If you want to save the state or do something, this is
    your last dinner. The freeze event. And then you go back to the app. If
    you're lucky enough, the app is still in memory and now resume will be
    executed, and also the visibility change again. Let's say that, when you
    close the PWA, you are using an intention app like recording a video,
    watching a Netflix movie, or using a 3D game, when you go back, your app was
    discarded from memory, so in this case, the PWA will start from scratch like
    a normal load but there is now a new boolean value that you can query that
    will give you true, okay, in that case, and there you have the opportunity
    to load again the state, the previous state that you saved before, okay? You
    need to start doing this. So, what about iOS? iOS isn't following exactly
    this rule. In fact, I did a research on the life cycle of an iOS PWA and it
    looks like this. So, anyway, the important part here is that here in the PWA
    and iOS, you can zoom in, control, click, type on a form, so that is the
    current state. When you get out of the PWA, okay, your app is current ly
    frozen, so, when you go back you can see a splash, so it's like starting
    from a crash but the WebKit is restoring the state. If you kill the app, it
    also restores the state, so there is no way to restart the app from the
    scratch. You can buy a new iPhone if you want! At least you can restart the
    phone. That's a problem. If you have an invalid state, there's no way to get
    out of that. It's a good idea on iOS at least to provide a reload action
    within the UI at least until Apple changes this. Also, you can provide full
    navigation like a back button. We have gestures like swipe to go back but
    it's a good idea to be sure you want for this. So what about the resources?
    Worker is the one that is storing and saving, and serving those files. So -
    service worker. The problem is that there are situations where you can find
    this. You open up an app, and Uber in this case, Chrome, is saying I don't
    have the files. It's saying how is that possible? Because the browser can't
    delete the files if there is a storage pressure, so no more space on that
    device, unless you request for persistent storage, so this is something you
    need to do explicitly, right? It's a promise API, so you just ask for
    persistent storage so your files will be there. Now let's move to another
    topic. This is programme aggressive experience. Star, we have been creating
    one app for all. So create an app, need JS, Vue, Angular, whatever, we have
    a lot of devices, high-end 15s, low-end phones, feature phones that might be
    running your app, and we have different bandwidth and latencies. I'm here
    with a 4G device on roaming, and it looks like a slow 3G, okay? I know, so
    maybe you have a Samsung, S10 with the best LTE plus, plus super ultra but
    four per cent of battery. I need something from your web app but I don't
    want you to load those four megabytes of JavaScript, so what I'm saying is
    maybe we need to copy something from YouTube? It has a model for users. It's
    trying to guess the best possible experience for that user, and it is on
    quality. The user can change that. Why can't we do the same on our PWA,
    there are a lot that those about the context, the perform servers, device
    memory API, so you can gather information that scenario so you can make some
    decisions. Also, there is a reporting API available today. It's an HTTP
    header where you send an end point or URL and the browser will send you for
    that particular user with real user metrics information reports about
    performance issues. On that particular advice, on that particular network,
    so then you can make decisions to keep a consistent experience, because we
    want to have a consistent experience, such as changing the service worker
    cache policy based on this, SSR, client-side rendering, you can switch based
    on the scenario, reducing the amount of loaded data, and many other tricks
    that you can apply. So, we want to offer a good experience for every user.
    We are creating PWAs for a real operating system. So, we need some kind of
    platform integration, so we need to do something else compared with a normal
    website. So, for example, web authentication is really a good example of how
    you can improve this quickly. Today, for example ... it's a PWA where you
    can actually log in pretty quickly with your current session on Android. I
    didn't have an account on that website before, but with one click, I'm in,
    okay? This is coming on Safari as well. Web share, you're creating an app
    that is standalone, so full screen, there is no browser UI, so how can I get
    out of my PWA? How can I get my content out of my PWA? We can share the
    content with a very simple API available right now on iOS, Android, and some
    desk tomorrow operating systems. For example, I'm here on Twitter on iOS,
    Twitter PWA, not the native app, and you can just share from there. It opens
    the native share dialogue, so I think that's pretty cool. Also, we have a
    version that is web-share target API. I can take a picture from my photos
    app, and I can share that picture into the Twitter PWA, okay? Directly.
    That's the second version of the API that is currently on Canary. Talking
    about Android, for those of you on Android, we have something known as web
    ABK. How many have heard about web ABK. Oh, I can see no hands at all! That
    works on Chrome and Android. In the cloud, the Play store is scraping the
    native Android package format and it is installing that silently into the
    device which means, for example, the JSConf PWA is an Android. I can go to
    settings and see it's an Android app. It says it was installed from the Play
    Store which is false, because it's signed by the Play Store, and that
    creates a good first-palace experience for your Android cruisers. The same
    happens on Samsung. If you're on a Samsung device and using the internet
    browser, in this case, a web APK signed by Samsung apps. This is interesting
    because you're now creating Android-native apps from an Android operating
    system point of view. Talking about desktop, today, on desktop, you can do
    multi-window - that is Google drive on desktop. It's a PWA. You can open
    your window. So, it's a multi-window world. You can say on the web, it's
    multi-tab, but you need to know what you're going to do with this. Now the
    user can have several apps open. You can use the service worker, for
    example, in the message API to make some kind of control, and future looks
    really promising, so let me show you an early mock on how tab on PWAs might
    look like later, might be this year, I don't know. This is it from the last
    Google IO where you can see it's your app with several tabs inside. We have
    a lot of new challenges on the way. Coming back to the iOS, our last
    platform to talk about, let me tell you this: so, if you Google PWAs on iOS,
    the first, the second, and articles there are my articles, okay? And the
    snippet you see there, it's also coming from one of my articles. There is no
    documentation at all from Apple or from the WebKit team. They are supporting
    partially, totally, or the technologies, but there is no documentation,
    okay? You need to be careful, test a lot, and add some metadata that is
    required for an iOS PWA. Let me tell you one thing only: Apple, shame on
    you, right? Because this is a problem that we have as a community. So,
    installation experience. So, we are creating apps, okay? So we want to
    create apps. So we need to improve how users will install our app. First,
    because most users will never know that there is an actual home screen and
    an install menu with three little dots, menu in the browser. We manage on
    that, we have this web app service worker and the distribution rings here. I
    did this on purpose. I didn't set web app manifest on the red ring because I
    don't think it's the only one. Web app manifest is one of the key aspects of
    the PWA, of course. It is the one that will give you on desktop button in
    Chrome. It is giving you the mini info bar on Android, and on other
    browsers, it would give you several budgets when you are PWA, you're passing
    the PWA criteria been but I don't think this is the only important part on a
    PWA. You must provide your own install button within your UI, within your
    menu, whenever you feel it's the moment to offer the user installation, you
    can actually add your own install button. So it is simple but weird, okay?
    So you need to listen for a new event before installing prompt. When the
    browser thinks that you're passing a PWA criteria, it will fire that event,
    so you need to basically prevent default first, just to avoid the browser to
    show its own banner, and then you want to save that argument that you
    receive for later usage. And then when the user clicks on that button, you
    will just call prompt, okay? So that is roughly how it worked. You can
    create your own button that will trigger the native dialogue on desktop and
    on Android devices. So apart from web app manifests already mentioned, you
    need to add iOS metadata, and something that it's not completely new, but
    for most web developers, it's new: an app launcher. It's a native package
    that will trigger a PWA. I'm not talking about a hybrid like Cordoba, I'm
    talking about a launcher that opens the browser in a special full-screen
    standalone mode. We're not patching our files, our HTML and JavaScript
    files, we're not packaging those files, we're just launching the PWA and the
    service worker will take care of the loading device. So, for windows, we can
    create an APPX - that's the format available - and then you can go to the
    Microsoft Store for this Nokia device. You can create a cash generator -
    there are free tools that will help you in the creation of this - so, again,
    you still have your web app, you still have your service workers. We're
    talking about the outer ring - just that. You need to do something else, not
    just the web manifest for these - for these operating systems. But you're
    thinking, "Well, what about Play Store? What about Android?." Let me give
    you an example, an e-commerce site from the US where you can buy flowers.
    They created a really good PWA. There were even mentioned in the last Google
    IO keynote. They also used to have a native review, was kind of okay. Well
    [microphone breaking up] Play Store today, you go to trending, then the
    fifth one, it's 800 Flowers, and you can install the app from the Play
    Store. That app is basically a PWA, okay? It's their PWA. So now they have
    replaced their native app with a PWA. This is now possible, so you can
    publish new apps and PWAs, or if you have on your company crappy Android
    native app, a package ID, upload new versions, and all the users will
    receive now the PWA version. From now on, you don't need to upload any more
    updates because you just change the files on your server. You don't need to
    package new APKs. So this is thanks to trusted web activities. There is
    something new available on Android with Chrome, maybe it's going to appear
    with other browsers as well. So far, it's only on Chrome in a will let you
    compile your own Android app, need to use Android Studio, okay? It's one
    line of code that you need to set that is basically your URL. You need to
    show you're the owner of that URL, and, when you do that, you set the icon,
    the URL, and you go to the Play Store. So you can actually today publish
    PWAs in the Play Store, okay? So, what about iOS? Can we do something for
    iOS? Probably you're thinking no? . Let me tell you I found something, not
    what you're expecting anyway. I found a tool called configurator where you
    can actually set web clips for full screen. That full screen thing there
    that is basically a PWA. This creates a mobile config file that you can
    serve on Safari or website and send by email. If the user accepts that
    configuration file ... icons. This is for enterprise distribution? It's not
    for end-users. For enterprise distribution, this is one way that you have
    today to distribute your PWAs. One tool that is cool and interesting that
    you could use today to create these packages because we are web developers,
    Android studios is there, it's kind of tricky to understand Android Studio
    and how it works, PWA builder is a free tool from Microsoft that will help
    you create all these packages. If you already have a PWA, it will create the
    AP KFOR the play store, the APPX or Microsoft Store, and it will even create
    you a version for the iOS app store. Using that case the web use. It will be
    like a hybrid for iOS for the app store. So we can distribute apps in the
    store. But you're thinking but we are the web, we should not be in the
    store. That's a different discussion but, from a business point of view,
    it's a good idea to be there. But we need to be careful. Because not every
    app can be in the store. For example, there is a PWA today that I'm not sure
    if you've heard about, that icon, how many of you know what that icon is?
    Have one here. Well, that is YouPorn. They have a PWA, and of course they
    cannot be in the store, okay? Because the store has some rules, and you need
    to check those rules. You cannot publish private apps, apps for your
    employee, for example. You cannot create apps using PayPal or other
    mechanisms to sell content, so you need to check those rules, okay. So the
    modern PWA cheat sheet, we have seen basic PWA support that we need to add,
    and then understand the live cycle. Progressive experience, not the same app
    for all the users, and then platform integration, we need to integrate with
    every platform, bugs, hacks, we need to do unfortunately. Then we need to
    improve installation experience, create the install button and also
    publishing in the store, okay? So this is for me what you need to do today
    to create a really good PWA, okay? That is all. Thank you! [Applause]. 
  name: Maximiliano Firtman
  image:
    filename: maximiliano-firtman-88d49636.jpg
    filename_500: maximiliano-firtman-88d49636-500.jpg
    filename_1000: maximiliano-firtman-88d49636-1000.jpg
    filename_square_1000: maximiliano-firtman-88d49636-1000-square.jpg
    filename_square_500: maximiliano-firtman-88d49636-500-square.jpg
    filename_square_200: maximiliano-firtman-88d49636-200-square.jpg
    width: 2184
    height: 3298
    originalType: jpg
  web:
    twitter:
      handle: firt
      url: 'https://twitter.com/firt'
    github: {}
    homepage:
      handle: firt.mobi
      url: 'https://firt.mobi'
filename: /maximiliano-firtman/the-modern-pwa-cheat-sheet.html
yt:
  id: cybhV88KLfI
  url: 'https://youtube.com/watch/cybhV88KLfI'
  title: "The modern PWA Cheat Sheet by Maximiliano Firtman |\_JSConf EU 2019"
  poster: 'https://i.ytimg.com/vi/cybhV88KLfI/maxresdefault.jpg'
  index: 4
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: "The modern PWA Cheat Sheet by Maximiliano Firtman |\_JSConf EU 2019"
    duration: PT25M18S
    description: >-
      PWAs are now installable on every mobile and desktop OSs, but there is a
      lot of new things since last year we need to do to create a successful
      experience. We will start understanding the App Lifecycle on every OS
      including new APIs, the limitations on iOS and how to deal with them, and
      how WebAPK works on Android. We will mention challenges on desktop PWAs,
      including multi-window management and we will finally cover distribution
      channels, including new DOM events to improve analytics, how to create a
      custom Install experience, and how to distribute the app in the store.


      https://2019.jsconf.eu/maximiliano-firtman/the-modern-pwa-cheat-sheet.html
    thumbnailUrl: 'https://i.ytimg.com/vi/cybhV88KLfI/maxresdefault.jpg'
    uploadDate: '2019-06-11T14:25:19.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/cybhV88KLfI'
    interactionCount: 14437
    actor:
      name: Maximiliano Firtman
  viewsPerHour: 3.977978327372292
  websiteUrl: /maximiliano-firtman/the-modern-pwa-cheat-sheet.html

----

PWAs are now installable on every mobile and desktop OSs, but there is a lot of
new things since last year we need to do to create a successful experience. We
will start understanding the App Lifecycle on every OS including new APIs, the
limitations on iOS and how to deal with them, and how WebAPK works on Android.
We will mention challenges on desktop PWAs, including multi-window management
and we will finally cover distribution channels, including new DOM events to
improve analytics, how to create a custom Install experience, and how to
distribute the app in the store.