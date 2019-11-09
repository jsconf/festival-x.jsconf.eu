----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Vitalii Bobrov: JavaScript, JavaScript…. Rocks You!'
data:
  published: true
  reviewed: true
  order: null
  firstname: Vitalii
  lastname: Bobrov
  talkTitle: 'JavaScript, JavaScript…. Rocks You!'
  coSpeakers: null
  twitterHandle: bobrov1989
  githubHandle: 'https://github.com/vitaliy-bobrov'
  homepage: 'https://vitaliy-bobrov.github.io/'
  potraitImageUrl: 'https://cramforce.github.io/playground/images/bobrov.jpg'
  caption: "\n      VITALII: Just a moment.  I need to set up everything.  Okay.  This looks right.  So, I will raise the rock.  Oh, I don't hear it.  Are you ready to rock?  Okay.  So, let's go.\n      [Rockin guitar]\n      [ Applause ]\n      So, yeah.  Every single cord was processed by JavaScript and actually web audio stuff.  So, before I go if deep how to make it, I just will introduce myself.  So, my name is Vitalii.  I'm a Ukrainian and I work for iBAHN systems.  I organize meetups here.  And I have been known to play a guitar from time to time to relax.  You can follow me on Twitter.  This is my handle and my personal blog.\n      So, web audio.  What is that?  How we can use it?  Actually, web audio is a uni\x1Edirected graph that contain audio notes.  So, what is actually a uni\x1Edirected graph?  It's a bunch of dots connected with some directed arrows.  Basically, we have some input or source of our sound and we have an output.  Before source and the output, we have some nodes that's going to add some effects, process our audio, analyze it, whatever.\n      And we have the same for guitar stack.  We have an input, our instrument.  And we have output, speakers or some stack of speakers.  And between those we have some effects.  Amplifiers, distortions, overdrives, all of this stuff.  How can we connect our guitar to web audio?  To do that, we need first of all to create an audio context.  So, we create in our audio context and this is the main point where we operate in an audiograph.  Then we request the media using navigator media devices.  And you want to use only audio, we use question audio.  That's easy, yeah?\n      But it won't be that easy.  So, wait for a moment.  To use an instrument as a stream, as I said, we requested audio through getting user media.  But to clean up our sound, we need to use some constraints.  Because by default browsers apply an echo consolation, no suspension.  Gain control and some into our input.  To have a clean input, we need to use those constraints.\n      And this is the last step.  We created a main source.  There's the stream that goes through our input to our card.  And then we connect in our source with contact destinations.  That our speakers or other destinations that we can choose in our system.  So, when we connect something, we want to control the volume.  How loud it is.  How to do though?  We have a special mode, gain node.  And we can imagine our sound waive as a sine.  And if we multiply by 2 or zero five, we will get the smaller sine wave.  And the amplitude of this sine wave actually means our volume.  How loud our sound.  So, to reduce sound, we need to divide by 2.  To increase sound, we need to multiply by some number.  So, how it looks in code.  We create our gain node using constructer or a factor that is on context.  And after that, we can apply value.  We use gain node, gain, value and setup.  Zero will mean our sound will be muted.  One is it's normal.  And if it is higher than one it will be louder than originally input.\n      Next, we need to have the graph.  We have our source.  Then we connect it to gain node to control the volume and connect the gain to the destination.  Let's try it, how it looks like.  There's that.  Okay.  Let's set.  Okay.  Oh.  And... okay.  That's better.  So, yeah.  I have an application and I have a connected source, yeah?  And we got this clean sound?\n      And I have the condition\_sole so I can make it not the cloud.\n      So, yeah, it was the basic stuff.  Actually, I wrote this myself some time ago.  So, okay.  The first effect I want to show is distortion.  So, you can't imagine any rock music without distortion sound.  And basically, what is distortion?  It's a group of effects that shape it our way and put sound with sound function.  So, what is this group of effects?  We have a few of them, overdrive, distortion and foos.  And those are still called foos.  I want to tell you how it was invented.  So, in the past the amplifier wasn't that good as they are now.  And they were broken sometime.\n      So, each speaker was broken, it's set to produce distorted sound.  So, some people started to destroy their amplifiers themselves to get this sound before it was done by sound transitions and so on.\n      Now you don't need to do that.  You can just use web audio for that.  Yeah.  Don't destroy speakers.  So, how it\_looks like.  Again, we have any inputs and actually a sine wave, yes?  And we apply some function to it to make it more square.  So, this more square sound gives our sound to be distorted.  For example, we can apply it to that function that is here.  But what's the difference between overdrive distortion and foos?  So, the difference is how smooth is that chord.  Overdrive is usually more smooth curve.  Distortions have some more harder one.  And foos basically sounds like a traditional.  It's almost flat sine wave.  So, to shape our input in the way we wanted, we can use wave shaper node.  We can create it and apply a curve.\n      And the curve is going to be an area containing numbers that we will be applying with audio and reshape our sound.  So, we created some area, we read it and apply our function.  Then that function will be based on our input to achieve that distorted sound.  Also, we want to control tone or even create some causation for our effect.  To create simple tone control, we can use big note filter node.  This low pass filter means ever since it goes down to some particular frequency will be cut off from our sound.  So, controlling the frequency of this filter from lower 350 to highest.  We control if our sound will be higher or lower.  Let's try it.  So, I have a bunch of distortions here.  So, now we have a clean sound.\n      Yeah?  And let's try some overdrive.  [driving guitar sound]\_\x1E\x1E\n      And let's try to use some tone.  We can make it darker.  And lighter.\n      This is kind of classic overdrive.  Let's make something crunchy.\n      Okay.  Let's switch to some distortion.  More heavy sounds.\n      [heavy guitar sound]\n      [ Applause ]\n      Okay.  I have something more here.  It's quite noisy, but it sounds like something metal.\n      [Metal\x1Esounding guitar]\n      [ Applause ]\n      Yeah.  That sounds really nice.  But it still sounds digital.  So, to make it more realistic, we need to simulate amplifiers.  So, to simulate amplifiers, we can use something called impulse response.  So, it's a short sample.  Really just a second or even less that captures that impulse response from some real device.  Imagine this impulse response like a photograph of the sound.  So, like a photograph is taking a snapshot of some light at some moment.  The same with impulse response.  We have a snapshot of sounds in real life.  So, how to apply it in web audio?\n      We can use special node, a node.  And it's actually really awesome because that node hides a lot of complexity.  It gets this impulse response for you and applies it via fast transformation.  So, all the heavy work was done for you by the node.  You just fetch an impulse response and then converting it to array buffer.  Then this array buffer needs to be decoded by audio context and applied as a buffer.  Also, usually amplifiers have at least three echo\x1Eization.  So, we also want to do it.  So, what is that?  Recap, it's everything that goes behind 500.  We can middle that takes from 500 until 3,000.  And treble that takes everything high than 3,000.  And we have special modes for that in web audio.  We can, again, use filter node, but different types of filters now.\n      So, what does it mean?  It takes everything that is above the frequency and cuts it off.  We can take the nearest range from the provided frequency and amplify it.  High shelf, it takes everything that\_\x1E\x1E about some frequency and amplifies it.  And cut off everything below this frequency.  Let's try it.\n      Okay.  So, I have\_\x1E\x1E this is also kind of a crunchy amplifier.  We can turn it off.  It's a clean sound.\n      And we can turn it on.\n      [Brighter sound on the guitar]\n      So, it sounds more realistic.  And we can apply different impulse responses to get different kind of amplifiers simulated.\n      and use the equalizer.  Let's can the off all middle frequencies.\n      or increase them with treble.\n       [Sound now with more treble]\n      Okay.  Let's do it right now and try distortion without amplifier first.\n      Let's apply our node right now.\n       [no distortion]\n      So, it makes our sound more realistic.\n      [ Applause ]\n      Yeah.  And usually when some companies are doing some recording, they apply difficult reverberation to add some volume to the record.  So, basically, we usually to hear some sounds more realistic, we imagine it in some space.  In a room or hall or something else.  So, how to do this?  It's more complicated as an effect to implement.  So, basically, we want to split our input into two channels.  Just one will be a clean channel, untouched completely.  We will mix it with the modified stream.  Merging it again.  And then on the second stream, we want to slightly delay our sound to express times that it gets for the sound to go to the walls and come back to you.\n      So, it's trying to do the same thing as in the real world.  Then we apply some tone control with the filter and apply special impulse response.  You cannot only have impulse responses for amplifiers.  You can have it for some spaces, right?  Room, or concert hall or theaters.  So, then we get into this chain.  And merging it back to one stream.\n      And we can switch how many untouched sounds we want and how many of modified we want.  So, doing that, we are mixing it out and achieving a more realistic sound.  Let's try it.\n      Okay.  So, now we have reverberated sound.\n      Okay.\n      And we can increase delay to emulate response from some space.  Let's try some holds.\n      Okay.  And if you combine them together, we can achieve some leading guitar sound.  Ready for solos.\n      If we try to listen for it without reverberation, it sounds without volume.  Like flat.\n       [sounds flat]\n      \n      Let's try something more.\n       [Rockin' guitar solo]\n      Or we can do something like that.\n       [More muted guitar sound] \n      [ Applause ]\n      So, yeah, as I told you before, we created all these nodes for reverberation.  We created a splitter and then a delay note.  We created a tone note.  A filter, we created come over and gain node for increasing the makeup of our come over afterwards.  Then we created another gain node that will be used in parallel for dry sound.  And we created merger to merge everything back. \n      Then we need to actually build this graph.  So, we connected everything chain\x1Eby\x1Echain.  Split we are delay, delay with tone, tone with come over and to merger.  And in parallel, we connected the gain node.  We connected a splitter to it and then a dry node merger.  And that's how I achieve it.  So, what I showed today.\n      So, I showed first of all how to connect your stream source to the destination.  How to control volume using gain node.  How to create distortion effects using wave shaper node.  And the filter for tone control.  I showed how to emulate with the come over node and how to implement vibration with the splitter delay nodes, filters and making everything up. \n      So, just try it at home.  All the code is available on GitHub.  The application is deployed on GitHub pages as well.  Try it and rock it!  Thank you for listening.\n      [ Applause ]"
  name: Vitalii Bobrov
  image:
    filename: vitalii-bobrov-9ba28e10.jpg
    filename_500: vitalii-bobrov-9ba28e10-500.jpg
    filename_1000: vitalii-bobrov-9ba28e10-1000.jpg
    filename_square_1000: vitalii-bobrov-9ba28e10-1000-square.jpg
    filename_square_500: vitalii-bobrov-9ba28e10-500-square.jpg
    filename_square_200: vitalii-bobrov-9ba28e10-200-square.jpg
    width: 1741
    height: 1741
    originalType: jpg
  web:
    twitter:
      handle: bobrov1989
      url: 'https://twitter.com/bobrov1989'
    github:
      handle: vitaliy-bobrov
      url: 'https://github.com/vitaliy-bobrov'
    homepage:
      handle: vitaliy-bobrov.github.io/
      url: 'https://vitaliy-bobrov.github.io/'
filename: /vitalii-bobrov/javascript-javascript-rocks-you.html
yt:
  id: _yt89v0S1MA
  url: 'https://youtube.com/watch/_yt89v0S1MA'
  title: 'JavaScript, JavaScript…. Rocks You! by Vitalii Bobrov | JSConf EU 2019'
  poster: 'https://i.ytimg.com/vi/_yt89v0S1MA/maxresdefault.jpg'
  index: 32
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: 'JavaScript, JavaScript…. Rocks You! by Vitalii Bobrov | JSConf EU 2019'
    duration: PT28M51S
    description: >-
      After so many years sitting with the computer you can take your old
      scratched Les Paul or Stratocaster from the case and fill all the space
      around with warm riffs. I’m going to show how to transform the code into
      Kirk Hammett’s wah-wah, Stevie Ray Vaughan’s overdrive and Kurt Cobain’s
      distortion. You’ll learn how to parse audio input in real-time using
      JavaScript and the Web Audio API.


      I’ll be jamming live on stage with my guitar to demo every code example
      and we’ll also use WebRTC to jam with friends across the world! After this
      talk, you will be familiar with the principles behind pedal sound effects
      and how to create them in code. Let’s rock the Web!


      https://2019.jsconf.eu/vitalii-bobrov/javascript-javascript-rocks-you.html
    thumbnailUrl: 'https://i.ytimg.com/vi/_yt89v0S1MA/maxresdefault.jpg'
    uploadDate: '2019-07-18T12:11:39.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/_yt89v0S1MA'
    interactionCount: 5074
    actor:
      name: Vitalii Bobrov
  viewsPerHour: 1.8494901519497302
  websiteUrl: /vitalii-bobrov/javascript-javascript-rocks-you.html

----

After so many years sitting with the computer you can take your old scratched
Les Paul or Stratocaster from the case and fill all the space around with warm
riffs. I’m going to show how to transform the code into Kirk Hammett’s wah-wah,
Stevie Ray Vaughan’s overdrive and Kurt Cobain’s distortion. You’ll learn how
to parse audio input in real-time using JavaScript and the Web Audio API.

I’ll be jamming live on stage with my guitar to demo every code example and
we’ll also use WebRTC to jam with friends across the world! After this talk,
you will be familiar with the principles behind pedal sound effects and how to
create them in code. Let's rock the Web!