----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: '{ live : js }: Making of this Stage'
data:
  published: true
  reviewed: true
  order: null
  firstname: '{ live'
  lastname: ': js }'
  talkTitle: Making of this Stage
  coSpeakers: null
  twitterHandle: 'https://twitter.com/livejs_network'
  githubHandle: null
  homepage: 'https://livejs.network'
  potraitImageUrl: 'https://pbs.twimg.com/profile_images/929496901317287937/wiU0Kz6p_400x400.jpg'
  caption: "\n      >> JSConf EU\_\x1E\x1E JavaScript and the microphone.  And control it and do some analysis.  As a result, of the icon\_\x1E\x1E and because of\_\x1E\x1E I had\_\x1E\x1E I find there are amazing people interested in stuff.  And so many of them created a group like live:  JS.  Thank you, JSConf EU, for giving me the power to believe in myself.  To speak in front of people.  To see that failure is something and only exists to let me grow.  Thank you for being you. \n       [Orchestra music playing]\n      We\x92ve come so far, and we've reached so high \n      And we want to stay \n       [Synth keyboard playing over drum beats] \n      [It's very catchy]\n      [The music stopped!]\n      [ Applause ]\n      >> You might wonder how we ended up in this situation. \n      >> So, yeah.  Hello\_\x1E\x1E hello JSConf.  We\_\x1E\x1E\n      >> Woohoo!\n      >> We want to show you how this stage was built.  And I would love to get the slides now, please.  As everything is working.  So, yeah, there should be slides.  And the title of this talk is how\_\x1E\x1E no\_\x1E\x1E making of the stage.  And yeah.  The second slide says\_\x1E\x1E\n      [ Laughter ]\n      Oh, there it is.  Thank you.\n      [ Applause ]\n      Yeah, you see?  We don't practice anything.  We just do everything live.  Oh, so the clicker is also not working.  Yeah.  So, we have live:js.  We consistent of, yeah, different people.  The core team consists of Jan, Martin, Matt, Ruth, Sam, and myself.  And we would like to explain how all of this is working or not in a small presentation.  And I will give the microphone now to Zach.  Actually, the clicker.\n      >> Thank you.  Hello.  So, we prepared a very easy to understand overview for you about what has happened since about November.  We were like planning this.\n      So, basic this is what you know.  You see this is kind of the stage.  And you might remember the beautiful presentation of the curators you saw today.  A nice keynote.  And the keynote didn't work because, you know, keynote restricts the width to something like 4,000 pixels.  We needed to take something else.  Keynote, please.  Obviously not PowerPoint.  So, we took Google Slides.  They allowed us to get the 8,204 pixels that we needed.  And basically, that was our first little hurdle that we overcame.  So, in this presentation you might remember many people have already worked on this presentation.  Including me doing some background graphics for that.  Which also was quite a pain because, you know, if you put in Google Slides, SVG wouldn't work so you have to go over the EMF files, which is a vector form of very old time and so on and so on.  That was already a little bit complicated but actually worked out fine.  And, of course, in such an intro, you want an opening title.  We asked our beautiful friends to prepare some animation for us for which they needed Illustrator files and they did some after effects magic with it.  And the after effects magic went into like the moving, and the JSON files.  And the JSON files were exported to SVG files and that's what you basically saw in JS.  And you also saw a beautiful live video from Ruth and Sam that went in and you will see and enjoy today some more.  That is Canvas and WebGL.\n      And all of this\_\x1E\x1E including all the slides\_\x1E\x1E to make it work in the browser because that was what we aimed for.  And that was our concept.  And then you heard also beautiful music also made for the browser with web audio from Jan and Matt.  And this music actually came from Sam.  Thank you, Sam.  And everything is here lighted in color theme and rhythm item with his custom interface that he did using DMX.  Thank you, Sam.  And, yeah.  That's about it.  Then we also saw a wonderful beautiful image, because what is JSConf without the opening of the audience's programming and for the tenth\_anniversary we had something very special going on here.  That was made with WebGL and a beautiful also live WebGL presentation in order, well, you're guessing it, to work in the browser.\n      Yeah.  And somebody had to pull all of this together, thank you, Martin.  So, somebody has to take all that stuff and bring it into the browser and switch between stuff.  Doesn't always work fine.  But it was a sweaty job, Martin did it.  And we had help from Paul who went up the stage and checked our performance.  We actually succeeded in doing a good job.  Thank you, Paul.  But then Paul broke our browser.\n      But that's okay.  Happens sometimes.  So that was basically in short very easy to understand a non\x1Echaotic overview about what has to happen to do this.  Thank you.\n      [ Applause ]\n      >> Yes.  So, this was kind of an overview.  So, now we want to explain the\_\x1E\x1E all the small moving parts.  So, what we got from JSConf was a song that you heard.  And, yeah, we should make a cover out of this.  And the only one doing this stuff in our group is usually Sam with his Game Boys.  So, what he did is he created the remix using this framework you can actually see on the screen.  And, yeah, you heard it also.\n      And this is not enough.  So, we also met or Monday evening this week to actually have tech week with the whole crew.  And in the end, we had like kind of this scrum board with many, many tasks and hopefully the most important parts are done.  And one of the focus things across was the intro.  So, we actually created some kind of timeline and to be sure what we wanted to do.  And we also wanted to do more remixes because we have two more musicians in our group, and they all want to play with the music.  And first of all, it's Matt.  And the second of all is them and they want to talk about the stem cells.\n      >> Hey, I'm Matt.  And the reason I'm here with live:js and at this festival is because in 2015 I was invited to talk about my web audio and electron\x1Ebased sequences sampler and synthesizer that I made for my own personal use.  And gave a big talk in the Singapore JavaScript conference.  And then I met all these wonderful people here.  And we have been hanging since.  But in the meantime, I've actually stopped using my software with WAV audio and I've switched to using actual synthesizers, samplers and drum machines.  Because it turns out that actual things are better than virtual things.  But, hey.\n      But for a JavaScript conference here, the last JSConf EU, me and Jan thought that it would be wonderful if we actually made a full thing in WAV audio instead of just using our hardware.  One last time for you people.  And Jan's going to tell you all about that.\n      >> Okay.  So, yeah.  You can\_\x1E\x1E this is all open source now.  So, you can go there.  You can take a look.  It's currently it's a little bit hard to play.  But we hope that we can fix that at some point so you can just open the website and play that.  So, the brief was to basically create a remix from that song from Sam.  And we, as musicians we have certain softwares that we like to use.  One of them is able live, a professional like music\x1Emaking software and it was really easy.  It's like an IDE for song writing, basically.  So, it was really easy to do sketches.  Much easier than programming something.  And so, we did sketches in there.  You can pull in the remix, you can pull in audio, you can do all kinds of things.  But at some point, we had to, you know, get this somehow in the browser.  And the main language that music tours speak still is Midi.  And Midi is not ring tones or something for those that remember ring tones.  It is a very old protocol from 1983 which allows musical instruments to talk to each other.\n      And it's still in wide use.  You can see it here on stage.  It's great.  It's reliable, it's old, it's robust.  Much different than, for example, get\x1Euser\x1Emedia or something.  And, yeah.  And for some reason\_\x1E\x1E and I still haven't understood why\_\x1E\x1E we now have web midi which allows us to talk to midi instrument from the browser.  And so, what we could do is still keep all of our arrangement enabled live and send this to the thing that we've built over the last four days or, so which is a combination of different modules.  It's a sampler.  It's a synthesizer.  It's a playback device.  It has lots of effects.  A whole bunch of things you can take a look at.  And all of this is driven by Ableton live.  And it's wonderful because it also allows you to set cue points and everything.  So, we were able to switch between different scenes of the intro and we could also send synchronization data to Martin's computer who would then play certain videos or, you know, not videos.  Not actual videos but, you know, animations and 3D animations and stuff like that.\n      So, yeah.  That's how we built this.  Take a look at it.  Yeah.  And we hope we can give you something so that you can play it back on your own.\n      >> Okay.  So, now let's come to the actual setup on the stage.  And this is where Martin should come and say something.\n      >> Yeah.  But I think I would just give you some basic facts about the stage.  As you can see, it is big.  The main screen is something around 40 meters wide and 5 meters high.  And\_\x1E\x1E yeah.  Okay.  Doesn't work so well.  So, we have five projectors.  They are perfectly aligned to create one continuous image.  And this one image is 8,000 x1,000 round about pixels wide.  We run this from a single PC that has three dual HD outputs.  And so, it outputs like 11,000.  But we only have the browser window a little bit smaller than that.\n      So, additionally to this big screen and the projectors we have all these light panels around here.  34 of them which are controlled by software.  And finally, we have this nice little X over there which has an interesting story behind it.  Originally it was supposed to be canvas and projected on.  But then it turned\_us that projectors have sort of a focus.  So, we couldn't really project anything sharp on it.\n      So, Matt had the idea to put it full of LEDs.  And we were almost ordering 200 meters of these LED strips in order to make it work.  Until suddenly someone who would have been responsible for soldering it all together was like, wait.  We have these\_\x1E\x1E these professional LED panels lying around and maybe you just use them.\n      So, these are 17 panels.  Each of 192x192 pixels.  So, in total, much more than we could have bought with LED strips.  And it's controlled with a single\_\x1E\x1E full HD signal which is the full screen browser window as you might have guessed.  And those are the specs that we received for this.\n      And it works surprisingly well.  If you want to create content for it, there is a CodePen somewhere if you check Twitter, JSConf, you should be able to find it.  Where all of these positions are already\_\x1E\x1E yeah\_\x1E\x1E hard\x1Ecoded and you can just like start doing that.  We'll probably show some of these at least tomorrow.  Yeah.  And I guess that's it for me.  Yeah.\n      [ Applause ]\n      Yeah.  Yes, Ruth.\n      >> Yeah, sorry, the slide.  It's not here.  So, next thing is\_\x1E\x1E this is Ruth.\n      >> Yeah, we'll just mention.  She did do all the design for everything as well as everything else, by the way.  So, yeah.\n      [ Applause ]\n      So, yeah.  My software.  So, I started building a piece of audio\x1Evisualization software approximately five years ago, I think?  This was very much an experiment.  Like we got the web audio API about seven years ago and I started analyzing it and moving stuff around the DOM.  I started playing with SVGs.  And this is a great idea until you chuck about a hundred SVGs at the DOM and analyze audio at the same time and try to move them around.  I quickly moved to Canvas.  But the software which I built, and I have been building it for five year was a tangled spaghetti code.  And I was gigging with it, mixing video to the beat, mixing Canvas shades and crashing every five minutes.  It was a great experiment and I had a really great time making it.  But I came to this year, it's probably a good time to start naught, naught, point naught, one instead of naught point naught, naught, naught version.  And it would be good to do one thing.\n      So, I started this year, and for the past couple of weeks, especially during this hack week, I have been basically been trying to get it to a stage to use it for circumstantials.  Sam is doing visuals with me.  It's got four moving parts.  And it's doing one thing.  And focus on my style as an artist.  It's generative.  It basically just chucks some Canvas with some parameters.  I'm analyzing audio and using midi as well.  And it just generates visuals.  That's what I want it to do.  No more video or mixing, just visuals.  And four moving parts, colors, turn into palettes.  I've got vectors and turn into grids.  I put some physics in, I'm looking forward to that.  And shapes.  Shapes are going make sprites.  And when it came to the X, Martin mapped the X to use the normal screen.  We knew where the positions were.  I made a CodePen with the coordinates of where these positions were.  For me, I was pretty okay.  She had made a grid system.  I could make a custom grid, just map the coordinates of the X, right?  So, if we take a look at that.  There's a great contentious with my software.\n      All I have to do\_\x1E\x1E this is a normal visualization going on.  I can't see what's going on.\n      >> Yeah, it's working.\n      >> I just pipe in the coordinates and map nice little squares like we saw for the opening which actually didn't take too much effort in the end.  So, yeah.  This is available on GitHub.  The URL is there.  It is in a state of getting it working for this conference.  But yeah.  That's Bizra.\n      [ Applause ]\n      >> Yeah.  So, that's powering the O and the X.  And we also have a software which is powering the whole stage behind me.  And Sam will talk about that.\n      >> Indeed.  Hello.  So, yeah, I'm just going to quickly run you through modV.  And if all goes well, you should be able to see my desktop in modV in the center.  The X is kind of in the way.  But never mind, hey.  Hey, there we go.  Perfect.  Thank you.  So, yeah, this is modV.  Wow.  This is a screenshot, the X is in the way.  But modV is an environment that I have been building in the browser for I think it's six years this year now.  It's Canvas, WebGL.  It's all audio reactive.  It's got a whole module system which you can kind of just drop in new modules.  So, like if we just did everything that's going on.  We can just kind of drop in, I don't know, some sound calls.\n      And then if we just give it some signal through the microphone.  Yeah.  So, you can kind of see it going there.  But then you can stack this, and it's got a whole UI and you can build modules for it.  Yeah.  To get this working because modV has a plugin system, Martin sent me the specs for the wide screen.  So, this whole wide screen is actually a 1080 signal split into two sections.  The top section is the left\x1Ehand side of the screen, and the bottom signal is the right\x1Ehand side of the screen.  And with the plugins I could hook into the plugin and spawn a new output window and that's just actually running on another desktop here.  If I swipe, that's my desktop background.\n      So, yeah, this is just another browser window for the software that I just kind of am tinkering away at in my free time.  It's all open source.  Go to modV.JS.org.  It's all there.  But, yeah.  That's a quick run through, really.\n      [ Applause ]\n      >> Yeah.  So, now we are switching to the software I'm creating, I have been doing this also for five years now.  And I'm controlling the lights.  And this is how my software looks like.  And it's\_\x1E\x1E it's getting its databased on what we use as projecting.  And you can see in the top I have a grid of colors which I get from modV and I'm mapping them to the actual lights that you can see in the venue.  And now we'll just go over to my PC to actually make sense of what I'm saying so that you can see that the lights are working.  So, yeah.  This is all\_\x1E\x1E also controllable by a midi controller and I can just add kind of different\_\x1E\x1E yeah.  Visuals in modV and this is presented live on the lights.  Yeah.  Which is pretty cool.  I think.  And all of this is connected to the XPort using a custom created web use, and there's a controller.  As you can see it here, using an Arduino.  And this is everything in the browser.  There's no server running at all.  Yeah.  So, you can control lights that are actual everywhere just with the browser window which is cool.  I think.\n      [ Applause ]\n      Yeah.  And that's like how we built the stage and how we worked together to actually get you this live show.  And you see there are a lot of moving parts which could go wrong.  Especially if you're just using everything in the browser.  And to debate get you some kind of goody, we released the song that Sam created on Sound Cloud.  You can find it on his sound Cloud if you want to.  Yes.  And that's it from the talk perspective.  We will do now the remixes and the show again.  So, have fun.\n      [ Applause ]\n       [Electronic music playing!]\n      >> Live:js remix.\n      >> Live:  JS\n      "
  name: '{ live : js }'
  image:
    filename: live--js-2fae1ec6.jpg
    filename_500: live--js-2fae1ec6-500.jpg
    filename_1000: live--js-2fae1ec6-1000.jpg
    filename_square_1000: live--js-2fae1ec6-1000-square.jpg
    filename_square_500: live--js-2fae1ec6-500-square.jpg
    filename_square_200: live--js-2fae1ec6-200-square.jpg
    width: 400
    height: 400
    originalType: jpg
  web:
    twitter:
      handle: livejs_network
      url: 'https://twitter.com/livejs_network'
    github: {}
    homepage:
      handle: livejs.network
      url: 'https://livejs.network'
filename: /live-js/making-of-this-stage.html
yt:
  id: jae837XA82Q
  url: 'https://youtube.com/watch/jae837XA82Q'
  title: 'Making of this Stage by { live : js } | JSConf EU 2019'
  poster: 'https://i.ytimg.com/vi/jae837XA82Q/maxresdefault.jpg'
  index: 31
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: 'Making of this Stage by { live : js } | JSConf EU 2019'
    duration: PT32M14S
    description: >-
      Join us for a walk through of the JavaScript magic powering the JSConf EU
      stage. For a full video of the opening that is described here, check out
      https://www.youtube.com/watch?v=o1rzsna263c Talk starts at 4:10


      { live : js } collective of audio and visual artists who build live
      experiences, shows and installations. Why JS? Because that’s the main
      technology we use: JavaScript. https://livejs.network/

      We are:

      - ruth john

      - tim pietrusky

      - martin schuhfuss

      - sam wray

      - matt mckegg

      - jan krutisch


      https://2019.jsconf.eu/live-js/making-of-this-stage.html
    thumbnailUrl: 'https://i.ytimg.com/vi/jae837XA82Q/maxresdefault.jpg'
    uploadDate: '2019-07-11T11:19:09.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/jae837XA82Q'
    interactionCount: 929
    actor:
      name: '{ live : js }'
  viewsPerHour: 0.3189881618895817
  websiteUrl: /live-js/making-of-this-stage.html

----

Join us for a walk through of the JavaScript magic powering this stage.

{ live : js } collective of audio and visual artists who build live
experiences, shows and installations. Why JS? Because that's the main
technology we use: JavaScript.

We are:

- [ruth john](https://twitter.com/Rumyra)
- [tim pietrusky](https://twitter.com/TimPietrusky)
- [martin schuhfuss](https://twitter.com/usefulthink)
- [sam wray](https://twitter.com/_2xAA)
- [matt mckegg](https://twitter.com/MattMckegg)
- [jan krutisch](https://twitter.com/halfbyte)