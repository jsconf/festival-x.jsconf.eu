----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: >-
  Shwetank Dixit: Block, unblock, block! : How ad blockers are being
  circumvented, and how they are fighting back.
data:
  published: true
  reviewed: true
  order: null
  firstname: Shwetank
  lastname: Dixit
  talkTitle: >-
    Block, unblock, block! : How ad blockers are being circumvented, and how
    they are fighting back.
  coSpeakers: null
  twitterHandle: shwetank
  githubHandle: 'https://github.com/shwetank'
  homepage: 'https://shwetankdixit.com'
  potraitImageUrl: 'https://i.imgur.com/Qxv9Hwv.png'
  caption: "See if it works.  Can someone help me in checking if it works?  Yeah.  Cool.  So, thanks for joining.  This talk is about how ad blockers are being circumvented and basically what we're doing to fight back.  What are the challenges that we face on a day\x1Eto\x1Eday basis and then what are we trying to do to counter them?\n      A little bit about me.  I'm product owner of anti\x1Ecircumvention which makes plus, and previously I was head of R&D where I basically tried to use technology for making some solutions for people with disabilities.  And before this I used to work at Opera.  Amongst many things also being part of the extensions platform.\n      So, an entire micro industry has basically popped up in the last few years promising to bypass ad blockers.  So, basically, they go to publishers and say that even if your site isn't on the user's ad blockers white list, we can still find a way to show user's ads.  Generally, if you go to their websites, they'll say something we cover blocked ad impressions, cover your blocked ads.  This is more of a problem.  Back in 2016 there was a research paper that analyzed this.  We found that at least 6.7% of the top five websites engage in some form of anti-ad blocking.  We call it circumvention.  It's at the next level, rough privacy badger, and others that are half of the ad blocking scripts in the dataset.  This was back in 2016.  It's believed in 2019 this has scaled\_even more on both sides.\n      So, you have more people engaging in this kind of behavior.  And there's also increased amount of attention from ad blockers trying to look at this particular problem as well.  So, what exactly is circumvention?  As I said, it's showing users ads by getting around the ad blocker despite them not being on the ad blocker whitelist.  Either implicitly or explicitly.  Now, for obvious reasons this is bad, yes.  But there are some non\x1Eobvious reasons why it's even worse.\n      To talk about this, or to think about this, let's look at some types of opinions towards ads and ad blockers.  So, on the one hand, you have some people who are just fine with that.  Either they don't know about ad blockers or they don't care.  Or they, as a matter of principle, don't want it use ad blockers.  I know a few people like this.  On the other hand, on the other extreme, you have people, what I call the scorched Earth mentality.  Where every ad is bad all the time and block each and every one of them.  Don't support any online ads, don't care about publisher revenue.  And this is a spectrum.  There's something in between where it's like, okay, most ads are bad.  But not all of them are bad.  As long as someone respects me and is not doing annoying stuff, then I'm willing to give them a chance.  And there's a lot of movement within the industry to somehow take these ad companies and try to make sure that they follow some kind of standards or some kind of rules for good behavior.\n      Whether it's the coalition for better ads or whether it's acceptable ads or something.  Let's take a look at one of them, called the acceptable ads criteria.  No matter how big and powerful you are, no matter how much money you have, it doesn't matter.  At the end, if your ad has to be as part of the acceptable ads criteria, these are things which are not allowed.  And this is not an exhaustive list.  These are just some of the things.  Animated ads, automated ads, expanding ads, pop\x1Eups, pop unders, these are not allowed no matter how much influence you have.  Now, it\_you can circumvent the ad blocker, you can do anything you want.  You can make your ads as intrusive and as annoying as possible.  And that's what we've seen.  When it comes to circumvented ads, these are the worst of the worst on the web and make things miserable for people online.  This is why circumvention is maybe worse than what might appear as obvious.\n      Before we go, let's talk about how ad blockers work on a very, very high level.  You have a web page, it has ads.  You have a browser extension installed.  It's an ad blocker.  What it does is updates from a filter list which is a community\x1Emaintained list of filter rules.  And if that site matches that filter rule, that piece of HTML or whatever is blocked, right?  And that's how you see a page without the ads.\n      Now, generally the biggest one, community\x1Emaintained filter list is called easy list.  But when it comes to circumvention, we wanted our own, we launched the anti\x1Ecircumvention filter list.  It's to target circumvention.  We wanted higher privileges to do more complex stuff.  And it allows us to react extremely fast to circumvention.  If you see circumvention, we can push out a change and it's there instantly.  User cans generally update this by default every 60 minutes so it's regularly up to date.\n      So, as we're moving fast towards circumvention and pushing all of these filters, CV providers, or circumvention providers, they're forced to become faster too.  So much so that there's a constant war going on between the ad blocker and the CV provider.  In terms of we push out a filter to block their ads, they change the content of the website.  We once again push out a filter, they change things.  So, this goes on and on and on.  And they keep an eye on the repo, it's open source.  Anyone can take a look.  They constantly keep an eye.  One example of this is where one of our colleagues who pushes out a lot of filters on a particular website, had he found the source code, he found his GitHub username as one of the classes.\n      So, make going to a website and view the source code and see your name over there.  And this was kind of like I think from that website's end, kind of like a wink, wink, nudge.  Okay, we know what you're doing now, and this is kind of like us acknowledging you.\n      So, this is all about filters.  But, you know, it's a constant cat and mouse game between ad blockers and circumvention providers.  And somewhere in between this game became more complex.  So, it's not just about, you know, the cat chasing the mouse.  There's just stopped and started playing chess.  So, things are becoming a little bit more complex.\n      So, now we're gonna talk about snippets.  There's\_\x1E\x1E so, snippets are basically small JavaScript functions designed to counter one or more circumvention techniques.  Generally, they're use when had just writing a normal filter isn't enough.  So, you have to do something more complex.  And a significant amount of the filters in our filter list is, you know, using snippets.  Snippets are also called scriptlets in the block origin, for example.  And if you want to take a look at the source code, everything is open source, this is the URL.\n      Let's look at case Studies of what we have to deal with on ad blockers on a daily basis.  There was this one CV provider which at no time want you it take a look at what they're doing, right?  So, what we did was kind I have like a jujitsu move using their own energy against them and I'll explain about it in the following way.\n      So, the CV provider, what they used to do was, whenever you try to go tots website and open up the developer tools, they used to detect this and basically clean up all their code, remove the ads so that you cannot even try to understand what's going on.  You cannot even debug the code.  Which is\_\x1E\x1E when I found out I was like, what the hell is going on?\n      So, we thought long and hard about this and then we tried to use their own things against them.  We developed a snippet which tricks the developer tools into being already open, when they're not.  They did the work for us.  They just removed the code themselves.\n      [ Laughter ]\n      So, yeah.  Since then they've caught on to this, so they no longer do this trick.  But it was quite effective and quite funny for us as well.  Another thing I want to talk about is something called the abort and property read, or abort and property write.  Typically, a lot of these sites or CV provider, they want to access a particular property or write to a particular property.  So, what we do is we kind of know which ones they're looking for and we made a script to kind of block the script or abort the script as soon as we detected they're trying to read a particular property or write to a particular property.  This idea was originally from the block origin.  Even though our implementation in AVP is different from theirs.  But the overall idea was from there and we give credit over here as well as in the source code and good on them for doing some wonderful work.\n      The next thing that I want to talk about is superfluous element stuffing.  So, there are a few high\x1Eprofile websites, not just one.  But a few.  Which try to get around the fact that, you know, you have posts and you have to\_mention which posts are sponsored.  So, of course, if it's just the normal text, you can search for the text that says sponsored and that's the end of it.  But they end up stuffing a bunch of elements.  They break down the word sponsored into different parts and then they do something like this.  So, make things clear a little bit more, this is what they do.  So, as you can see, there's some divs, there's some spans.  Some of these elements are not going to be visible.  The in ends it will say \"Sponsored\" visually.  But the source code says this.\n      How do you deal with this?  It's really frustrating.  It bloats up the page.  It doesn't help anyone.  This is an approach that is gonna be there soon in AVP.  We're still making a few adjustments here and there.  But basically, what you did is you go through all of these child elements.  And first what you have to do is remove the invisible stuff.  Stuff that doesn't really\_\x1E\x1E stuff which is what we call decoy elements.  You check for invisible text, opacity zero or font none, check for invisibility or collapse.  And you ignore those.  You go through the ones that are invisible and take the inner text and you concatenate them.  And if it says \"Sponsored,\" then you have your sponsored ads.  Then you can do whatever you want with it.\n      This is the kind of stuff that ad blockers have to deal with daily.  But this was still okay.  There's another example someone said that, okay, we have sponsored posts and we have to make sure that this says sponsored.  So, instead of text now they have something where it's just an image.  And inside the image there's text.  And it's really bad for accessibility because it doesn't even have an alt attribute.  They don't care about anything.  Even then it will be okay to detect this, but what they also do is, you see this blank space?  That's also an image.\n      That's the same PNG image as this one.  The only difference is that this is a transparent PNG so you can't see this and the other one is a non\x1Etransparent PNG so you can't see that.  So, it looks a little like this, it's a data URI.  And it's going to be really, really difficult to detect what's going to happen over here.  And to make things even more complex, they make minor variations in the way they're serving images.  In this example, this data URL for this data sponsored image can be any of the three data URIs over here.  And same for the data labels.  It can be any of these things.  We had to look into the PNG spec and do a lot of work.  Ultimately, we found out some kind of pattern which was only applicable to the visible sponsored image.\n      And then what we did was basically it's just a matter of taking that image, converting it to a basis before, looking for that pattern and matching it.  If it does, then bingo.  We have our PNG ad label and then do the blocking.  So, yeah, there's a lot of stuff that we have to do with, you know, circumvention on a daily basis over here.\n      So, let's look at some gaps and challenges that we have.  So, when it comes to this, we, you know, when it comes to circumvention, the effort is being fought on multiple fronts.  It's not just one thing.  So, we have people who are working on kind of reverse engineering what they're doing.  You know, people who are hard core JavaScript people.  And then filter list authors pushing out filters on an hourly basis.  And then there's many other things that I will talk about in the next few slides.  On the other hand, even though we have some really smart people working for us to kind of deal with this situation, they also have some really smart people on their end.  And they're willing to go through many creative lengths to get around the ad blockers.\n      It's a daily challenge to keep\_up with what they're trying to do.  And as I said, this thing is being fought on multiple levels.  Not just the technical level.  Recently there is this landmark Supreme Court case.  Basically, what some publishers wanted to do was to kind of argue that ad blocking itself is illegal.  And they, you know, went through the lower courts, the higher courts and ultimately to the Supreme Court.  And ad block plus was at the vanguard of this and basically argued that, no, it should be legal.  And the Supreme Court of Germany said that, yes, it is actually legal.  And, you know, it's totally okay to use ad blockers and do ad blocking.\n      So, yeah.  When it comes to fighting, you know, circumvention fighters or publishers, a lot of times what you have is not just people using technical approaches, but sometimes these kind of legal approaches as well.\n      Gaps and challenges?  So, apart from this thing, one more thing is the fact that in Firefox you have an API called the content scripts API.  Which means that you can have a reliable way for the extension to\_\x1E\x1E for the extension to run always before the sites code which is actually good in these circumvention things.  But in Chrome, you don't have an equivalent API so there's no reliable way to guarantee that the extension scripts always runs before the site scripts.  So, that's that.  But there's also the Chrome manifest V3 situation where there are some significant architecture changes that might be coming which will be impacting a lot of ad blockers.\n      Some with welcome.  The background page architecture might be displaced by a service worker, which is good.  There's a switch to a promise\x1Ebased API rather than a callback API, which is also good.  But there are some major changes to the blocking portion of the web request API.  So, this is the part of the extensions API which allows you to block a network request.  And this is something which is going to be\_\x1E\x1E or at least announced to be changed.  Instead, they'll have a declarative rule\x1Ebased instead, which is I think Apple.  From most of the ad blockers, if you read their opinion, it's still not in a good enough shape right now.\n      And updating the rules from the filter list might require a new version list.  Right now, if you want to update the rules in the easy list, all you have to do is update the easy list.  It's there.  But if you have to do this new v3 thing, if you have to update the filter list you might need to do a whole new extension release and send in the extension to the Chrome web store once again and gets moderated and released.  And if you have to do this each and every day multiple times a day, it's going to be impractical.\n      So, we worked together across ad blockers, Adblock Plus, Adblock\_\x1E\x1E Adguard, Ghostery and two authors, Fanboy, as well as Malwarebytes.  We gave the Chrome team feedback on one of the things we would like in v3.  What are the changes we would like?  It seems that the Chrome team is taking a look and kind of evaluating all of this.  But at the same time, there's a question mark over here on what do they really want to do?  What is the\_\x1E\x1E what is the end goal when it comes to ad blocking and, you know, when it comes to v3, what exactly do they want?  What is the quality that they want in terms of ad blocking?\n      There's this performance argument that, okay, you know, we want to make these changes because we want to make things a little bit more performant.  There's the security argument as well.  But at the same time when it comes to ad blockers, if the ad blockers are harmed, then circumvention rises as well, and everyone is in a bad situation.  Whether it comes to this, I'll just end with this recently\x1Ereleased W3C tag ethical web principles document which is something that every browser maker\_\x1E\x1E everyone should read.  But especially all the browser makers should read.  It says that people should be able to render content as they want.  Users should be able to install stylesheets, assistive browser extensions, blockers of unwanted content or scripts of auto\x1Eplayed videos.  Through technology such as browser extensions, people must be able to change web pages according to their needs.  So, with this\_\x1E\x1E I think this is a pretty good way to end the talk.  If you have any questions regarding all of this, I'm here after this talk and tomorrow as well.  So, I'll just say, thank you so much.\n      [ Applause ]"
  name: Shwetank Dixit
  image:
    filename: shwetank-dixit-28cd901a.png
    filename_500: shwetank-dixit-28cd901a-500.jpg
    filename_1000: shwetank-dixit-28cd901a-1000.jpg
    filename_square_1000: shwetank-dixit-28cd901a-1000-square.jpg
    filename_square_500: shwetank-dixit-28cd901a-500-square.jpg
    filename_square_200: shwetank-dixit-28cd901a-200-square.jpg
    width: 800
    height: 801
    originalType: png
  web:
    twitter:
      handle: shwetank
      url: 'https://twitter.com/shwetank'
    github:
      handle: shwetank
      url: 'https://github.com/shwetank'
    homepage:
      handle: shwetankdixit.com
      url: 'https://shwetankdixit.com'
filename: >-
  /shwetank-dixit/block-unblock-block-how-ad-blockers-are-being-circumvented-and-how-they-are-fighting-back.html
yt:
  id: Vk9bPDaZELQ
  url: 'https://youtube.com/watch/Vk9bPDaZELQ'
  title: >-
    Block, unblock, block! How ad blockers are being circumvented… by Shwetank
    Dixit | JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/Vk9bPDaZELQ/maxresdefault.jpg'
  index: 26
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      Block, unblock, block! How ad blockers are being circumvented… by Shwetank
      Dixit | JSConf EU 2019
    duration: PT19M6S
    description: >-
      Original title: Block, unblock, block! How ad blockers are being
      circumvented, and how they are fighting back.


      As usage of ad blocking software has risen over the years, an entire
      micro-industry has popped up catering to publishers - promising to get
      around the ad blocker and show ads to users of ad blocking software.


      Some of these techniques rely on browser bugs, or limitations of browser
      extensions and some are just extremely creative ways to get around
      ad-blockers. This has forced ad blockers to come up with their own
      ingenious ways to counter and block the circumvented ads.


      In this talk, we’ll go over some of the techniques used in this cat and
      mouse game between ad blocking extensions and the people who want to
      circumvent them. It’s a fascinating peek into a world very few people seem
      to know.


      https://2019.jsconf.eu/shwetank-dixit/block-unblock-block-how-ad-blockers-are-being-circumvented-and-how-they-are-fighting-back.html
    thumbnailUrl: 'https://i.ytimg.com/vi/Vk9bPDaZELQ/maxresdefault.jpg'
    uploadDate: '2019-06-26T12:10:13.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/Vk9bPDaZELQ'
    interactionCount: 3874
    actor:
      name: Shwetank Dixit
  viewsPerHour: 1.1841725916397785
  websiteUrl: >-
    /shwetank-dixit/block-unblock-block-how-ad-blockers-are-being-circumvented-and-how-they-are-fighting-back.html

----

As usage of ad blocking software has risen over the years, an entire
micro-industry has popped up catering to publishers - promising to get around
the ad blocker and show ads to users of ad blocking software. 

Some of these techniques rely on browser bugs, or limitations of browser
extensions and some are just extremely creative ways to get around ad-blockers.
This has forced ad blockers to come up with their own ingenious ways to counter
and block the circumvented ads. 

In this talk, we’ll go over some of the techniques used in this cat and mouse
game between ad blocking extensions and the people who want to circumvent them.
It’s a fascinating peek into a world very few people seem to know. 