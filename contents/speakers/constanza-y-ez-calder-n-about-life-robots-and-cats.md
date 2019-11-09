----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Constanza Yáñez Calderón: About life, robots and cats!'
data:
  published: true
  reviewed: true
  order: null
  firstname: Constanza
  lastname: Yáñez Calderón
  talkTitle: 'About life, robots and cats!'
  coSpeakers: null
  twitterHandle: 'https://twitter.com/co_constanza'
  githubHandle: null
  homepage: null
  potraitImageUrl: 'https://cramforce.github.io/playground/images/yanez.jpg'
  caption: "Hello, JSConf.  I'm so glad and excited to be here.  I'm Constanza.  I'm from Buenos Aries, Argentina.  And I'm a frontend developer at an E Commerce country from South America.  I'm part of Chica its program, we are women and we host meetups and create a platform for displaying with women and non\x1Ebinary Devs to give them more visibility.\n      But now I'm here to talk about life, robots, and cats!  Three of the most popular things on the Internet, right?  We're going to see in this presentation with life and designing and it's main part.  Building\_\x1E\x1E the building process and potential use cases of home automation.  So, when I was a 4\x1Eyear\x1Eold child my family made me clean up my bedroom, put the toys away in boxes and do the dishes.  And sometimes sweep the patio.  By then I was so angry because all I wanted to do was to play with my friends and toys.  Right?\n      So, I used to have this dream that was about creating robots that could help me with these chores I had.  But then I grew up.  And I still have chores even more than before.  And now I have two cats.  Orson and Heckl.  And sometimes they had to be\_\x1E\x1E they had to wait for me to be fed.  Needless to say, I rarely get home early.  If I give them the day serving in the morning, they ate it by noon and when I get home at night, they're hungry.\n      So, I needed to figure out a way to give them their serving twice a day.  Right?  Okay?  And so, now I know\_\x1E\x1E that's why I decided to build this.  I know nowadays there are a lot of options that fill our needs.  But some are expensive, and I can't afford them.  That's the reason why I built the pet feeder.\n      So, then I started Googling similar projects that could guide me in the development.  I saw a lot of the examples.  Most of them were built, and the structure was just for one cup.  However, what I needed was something that could feed both cats at the same time.  Because I don't have much space in my home and because it's cheaper than having two machines, right?  So, I knew that I will need a dispenser as a container.  Several motors to move the container legs.  And a microcontroller to run program.  But I didn't know which one.  Because there are a lot of it in the market.  So, I had to decide if I will use a Raspberry Pi or an Arduino or something else.  For some reason I thought that a Raspberry Pi would be the best option due to how easy to work is its operating system.  So, someone lent me a Raspberry Pi which I had to configure it from scratch as well.  And I decided to use JavaScript develop the feeder because I'm learning to program with this language.\n      So, I made research and found a platform called Johnny 5 that allows you to work in robotic systems with JavaScript.  But before using Johnny 5, I installed RasPiO which is a plugin that allows you to use Johnny 5 in the Raspberry Pi.  I used packages for run for all of this stuff.  I used NodeJS.  So, the configure of RasPiO and Johnny 5 is pretty easy.  You just have to start it and acquire the module in your JS file.  I'd never built something like that and my knowledge on the subject was new.  All I know\_\x1E\x1E from movies\_\x1E\x1E that there are conventions for connecting the wires.  So, all I wanted to do was not to burn my house because it would be terrible.  So, after the setup of the Raspberry Pi, the first thing I tried was to turn on tiny lights.  And to my surprise, it worked.  So\_\x1E\x1E thank you.\n      [ Applause ]\n      So, I got into the world of several motors and I tried to make one work.  But that part wasn't that easy.  As I was suspecting.  So, the Raspberry Pi has a lot of pins to put the wires.  But you can't use any.  I connected wires to different pins on the server motor.  It didn't work until I found out that there are some things that need to be connected to a specific pin.  For example, controlling the server module place.\n      So, to do that you need to connect to a PWN which is a pulse with modulation pin.  And the Raspberry Pi has just four of them.  So, I connected to a wire.  GPO\x1E18.  And the other wires must be connected to a 5\x1Evolt pin and a ground pin.  So, during the process I learned that not all server modules are the same.  Some of them turn 45 degrees.  Others, 180 degrees.  And there's some with continuous rotation.  I used all of them until I found the one I needed.\n      Okay.  You know that you must consider the weight of what you want to move.  So, I had to try several modules for different weights.  My house was full of servers.  But I chose the one that can receive 3.2 kilos.  So, I'm sorry.\n      [ Laughter ]\n      Yes, that was a problem.  Because I can't stop\_\x1E\x1E I can't make it stop the server modules.  And so, the food overflowed a lot of times all over the table.  That drove my cats crazy.  So, in fact, they heard the sound of the food getting out of the feeder and came running to me and started meowing and at first it was very funny.  Okay.\n      But it turns out that to move a server motor with continuous rotation, you need to move the blade clockwise.  So, it\x92s necessary to set the top speed of the server blades when you want to stop.  So, I set the feeder to give them the food twice a day.  For that I used an npm package.  You just have to set the minutes.  Every 15 minutes.  And then the hours.  That's it.  They eat at 8:15 and 9:15 p.m.  So, thanks to that, I left the pet feeder running.  And thanks to that, I realized that the feeder wasn't working properly because it was letting out the food every hour.  So, they were crazy.\n      Yes.  They wanted to eat all the food they can see.  I'm sorry.  So, for\_\x1E\x1E I spent a lot of time trying to figure out what was the problem.  And I found out that the library, the package wasn't working properly.  So, I replaced that package for another one.  And everything was all right.\n      So, the feeder was almost done.  But one day my cats got up really, really early.  Like 5 a.m.  And they started mewing loudly.  I was a little bit sleepy.  And tried to get up and fill their bowls.  But I knew that if I didn't get up, they would keep crying.  And so, that was the point where I thought that I should include a new feature.  Send an email from the comfort of my bed and go back to sleep.\n      So, I started looking for other packages.  And by the time I felt like this little cat sticking its nose in every package, his tongue.  Until I got the right one for this project.  So, to then develop this new feature, I found this package that allows you to set up the configuration.  It was very easy to include this package in my project.  And in this case, I wanted the feeder to start working only if I was the immediate sender.\n      So, this was the feeder before it became a robot.  And after a lot of time developing and testing\_\x1E\x1E yeah.  The feeder is called Sascha.  I finished it with this final structure.  That's awesome.  With the help of my friend because there are a lot of things that I can't do.  So, we included those.  Before that it was just one tube.  I want to say this separation of those two is made by\_\x1E\x1E was made by that.  So, I can say that the dream that I had when I was a child came true.\n      [ Applause ]\n      So, I'm building Sascha and getting all these made me know I wanted to do more projects involving robotics.  That there are a lot of potential use cases of home automation that I would love to implement like controlling non\x1Esmart things like lights or the air\x1Econditioner.  Or controlling the temperature of the room.  So, I think that it's\_\x1E\x1E you can build this feeder just with a little JavaScript knowledge.  It's not too complicated.  And it's a nice activity to teach you how to code.\n      Even if there are parts that involve not coding like building the structure and gluing pieces, et cetera, why is it a nice activity to code?  You can teach conditionals and setting up packages and the microcontroller so you can introducing beginners to the art of setting up their computers.  I don't know much JavaScript because I started learning to program like two years ago.\n      But I'm sure that there are amazing projects to be built and to be shown.  Maybe those projects can inspire others\_\x1E\x1E other people to the things to facilitate chores or change how they interact with their home just with a little bit of code.  So, that's all I have.\n      [ Applause ]"
  name: Constanza Yáñez Calderón
  image:
    filename: constanza-y-ez-calder-n-555cd4f9.jpg
    filename_500: constanza-y-ez-calder-n-555cd4f9-500.jpg
    filename_1000: constanza-y-ez-calder-n-555cd4f9-1000.jpg
    filename_square_1000: constanza-y-ez-calder-n-555cd4f9-1000-square.jpg
    filename_square_500: constanza-y-ez-calder-n-555cd4f9-500-square.jpg
    filename_square_200: constanza-y-ez-calder-n-555cd4f9-200-square.jpg
    width: 2320
    height: 2900
    originalType: jpg
  web:
    twitter:
      handle: co_constanza
      url: 'https://twitter.com/co_constanza'
    github: {}
    homepage: {}
filename: /constanza-yanez-calderon/about-life-robots-and-cats.html
yt:
  id: GJ7zLofY1V8
  url: 'https://youtube.com/watch/GJ7zLofY1V8'
  title: 'About life, robots and cats! by Constanza Yáñez Calderón | JSConf EU 2019'
  poster: 'https://i.ytimg.com/vi/GJ7zLofY1V8/maxresdefault.jpg'
  index: 36
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: 'About life, robots and cats! by Constanza Yáñez Calderón | JSConf EU 2019'
    duration: PT16M57S
    description: >-
      When I was a child I dreamt a lot about creating robots that helped me in
      my daily life, like tidying up my bedroom. That was just a dream till I
      grow up and found out that there’s something called home automation. So I
      decided to build Sasha, my cats’ pet sitter, that helps me by feeding my
      cats when I have to get home a little bit late. Sasha changed my life and
      my cats are stressless, because they can eat their meal at the right time.


      In this talk I will share my experience on using JavaScript to build Sasha
      and will walkthrough its features. Last, I’ll talk about other possible
      use cases and the potential of home automation with JavaScript.


      https://2019.jsconf.eu/constanza-yanez-calderon/about-life-robots-and-cats.html
    thumbnailUrl: 'https://i.ytimg.com/vi/GJ7zLofY1V8/maxresdefault.jpg'
    uploadDate: '2019-07-30T15:36:55.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/GJ7zLofY1V8'
    interactionCount: 1612
    actor:
      name: Constanza Yáñez Calderón
  viewsPerHour: 0.6574123873304508
  websiteUrl: /constanza-yanez-calderon/about-life-robots-and-cats.html

----

When I was a child I dreamt a lot about creating robots that helped me in my
daily life, like tidying up my bedroom. That was just a dream till I grow up
and found out that there’s something called home automation. So I decided to
build Sasha, my cats' pet sitter, that helps me by feeding my cats when I have
to get home a little bit late. Sasha changed my life and my cats are
stressless, because they can eat their meal at the right time.

In this talk I will share my experience on using JavaScript to build Sasha and
will walkthrough its features. Last, I'll talk about other possible use cases
and the potential of home automation with JavaScript.