----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Sher Minn Chong: Recreating Retro Computer Art with JS!'
data:
  published: true
  reviewed: true
  order: null
  firstname: Sher Minn
  lastname: Chong
  talkTitle: Recreating Retro Computer Art with JS!
  coSpeakers: null
  twitterHandle: piratefsh
  githubHandle: 'https://github.com/piratefsh'
  homepage: 'http://piratefsh.github.io'
  potraitImageUrl: >-
    https://sessionize.com/image?f=53f59f9c2b848af9dd4bf8b05a5768fc,200,200,True,False,aa-a0ae-4264-978b-dda40f91051b.3e4900e6-29ae-49cc-ba20-012af6a64c89.jpg
  caption: "Hello.  What's up, Side Track?  Can you all here my fine?  All right.  Thanks for the thumbs up.  Welcome to my talk, re\x1Ecreating retro computer Art with JavaScript.  And my name is Sher Minn.  It's a little bit of an unusual name.  Downside is online forums don't like it when you have a space in your name.  I'll be here working on client\x1Eside validation, keep that in mind.  On the bright side, my SEO is really great.  If you look up my name, it's the first result and I didn't have to do anything.  So, life is good.\n      I am from a small country in southeast Asia called Malaysia.  And\_\x1E\x1E yeah.  We have actually another Malaysian in the house here that was on the stage at CSSconf.  Proud to represent my country.  And I live in New York right now where I initially moved to attend something called the recurse Center.  RC in the house.  For those who don't know what the recurse Center, it's based in New York City for programmers.  6, 8 or 12 weeks and you can rediscover can the joy in programming.  If you want to take time to learn something you have been meaning to learn, this is a great place to do it.  And I plug it because this is the reason why I'm giving this talk here today.  Everything they have provided me has enabled me to pursue creative programming.\n      Creative programming.  I like art a lot.  I learned thousand draw before I learned how to code.  Here are some of the pieces of work that I've made in the past year.  And I really enjoy using programming to create code.  And most recently I have been really inspired by retro computer art.  So, what happened was that I discovered this magazine from 1976 to 1978.  And it was edited by a computer artist, Gracie Hertlein based in California in the United States.  This was the first ever computer magazine entirely dedicated to computer graphics and art.  You can see the title, inexpensive graphics in the storage category, really dates it.\n      And I got these images from a website called the recode project.com.  The site is no longer up.  But it was a great resource to look through what was cutting edge graphics back then.  And as you can see, it's mostly black and white, text\x1Ebased, lines, geometric shapes.  Today we would call it minimalist or Lo\x1Efi as an esthetic.  It was fun to look at and think about because most of the times the work published is just the artwork itself.  There wasn't a lot of algorithms.  Most of the time there would be some description of the technology used and maybe some of the techniques, but no actual algorithms.\n      So, the whole purpose of the website that posted this magazine, the archive for this magazine were like, can we try to reverse engineer it.  Can we look at a piece and figure out how it was made?  And so, this exactly what I sort of fell into.  And so, this entire talk will be about the research that I did and also some of the attempts at re\x1Ecreating these works.\n      Let's first talk about computer art.  What is computer art?  A lot of us have an idea what have computer art is.  It's probably right.  In my definition, computer art is the art that computers play a part in the creation of the artwork.  That's using Photoshop or Illustrator or 3D graphics, AR, VR, the latest hottest thing, deep learning art, AI art.  But we're not talking about that today.  We're going it be talking about the really, really early years of computer graphics.  This is when computer graphics became accessible and it will be about how people took those technologies and used it to make art.\n      So, the decade I'm focusing on is the 1950s it 1970s.  This was really the crucial part where computer art was just becoming a thing.  So, everything's in black and white.  So, to talk about retro computer art, we first need to talk about what computers were like back then.\n      The reason being that context really matter when is you're talking about history.  And if you understand the tools and the techniques that are available to people at the time, you can understand why certain pieces had a certain esthetic or, you know, why was it done that way.  It helps you appreciate a lot of the work a little bit better.\n      Here is a computer that was introduced in 1959.  This is the IBM7099 data processing system.  Not just a computer, a data processing system.  Really fancy.  It would take up the entire room.  You can see the magnetic tape readers at the back, console and punch card readers.  And it was introduced at a really cool price of $3 million.  Back then.  If you converted it to currency today counting for inflation it would be something like $19 million US which is really, really expensive.\n      What this meant was that computer were really difficult to come by.  The people who could afford it were in universities, research labs, the military, government agencies.  They are very scarce as a resource.  Can you imagine calling IBM up and saying I would like to buy a computer for $19 million.  I'll write you a check, you know?  And most of the time people wouldn't interface with the computer.  They would write programs for it using a punch card writing like a typewriter.  And you punch the code and punch it into a punch card.  Take the stack of punch cards and hand it to a little old man behind the door and you would get the results back five minutes later.  If you get impatient waiting for Webpack to building with think of this.\n      It takes a lot of time.  And there were many uses for scientific and mathematical applications mostly by scientists or mathematicians in research labs or, you know, universities.  So, I want to show you some examples of companies that really converted to the field of computer graphics.  The first coined the term computer graphics and they were one of the first few people to use computer graphics in design work.  They used it to design cockpits to animate the different reaches of the limbs for the pilot in the cockpit.  Simulations.  Here was the first airport that was made using computer graphics, the Seattle Tacoma Airport in the United States.  And Bell Labs in the US, they made one of the first ever computer\x1Egenerated films.  First what that might look like and then I'm going to show it to you.\n      Here it is, it is a simulation of a control system from 1963.  And it's super\x1Ecute.  It's a satellite revolving around a planet.  The early graphics were mostly designed to model or maybe just, you know, demonstrate some diagrams.  And so, like this really simple graph of straight lines, geometric shapes, black and white, that was sufficient for their purposes.  This is wonderful.  No fancy colors or gradients or anything like that.\n      And yet, you know, art happened anyway.  People look the limited technology they had and did something really wonderful with it.  So, I'm going to talk about three different types of art.  I just chose examples from each category.  And I'll show you some oscilloscope art, some graphics and some text\x1Ebased art and my attempts at re\x1Ecreating them.  Let's start with oscilloscope art.  So, cathode ray oscilloscopes.  If you have been in a lab or school, played with one.  And this is what an oscilloscope is, or this is what it looked like in the 1950s.  It is a device that takes electrical signals and converts them into a visual over here.\n      So, here we have an example of a sine wave on an oscilloscope.  This is like a little bit before, you know, the IBM7090.  And here on the left is a picture of Ben Laposky, credited to be one of the first few people who created electronic graphics.  And so, what I mean by that is he would plot interesting patterns on so the oscilloscope and he would then photograph them and here is some of his works.  And what's really interesting about them is they look really ghostly.  Really kind of organic a way.  But you can sort of tell they had this sort of mathematical quality to it.  A few more.\n      Around the same time actually in Europe also there was a movement getting started in computer art.  Herbert W. Franke, we created his own electronic artwork using oscilloscopes.  Here is some of his work.  So, the interesting thing to note about this, oscilloscopes don't have a screenshot button.  You don't press screenshot, and this is going to come out.  So, in order to capture these images, what they would do is set the camera in front of the screen and leave it on long exposure.  It captures the movement of lines and graphics on the screen.  What you're seeing here is not just a single snapshot.  It is a combination of events on a screen over time.  And so, here actually is an example of the same like event, but two different phases of it.\n      And I think it looks really beautiful like a ghostly jelly fish.  And more works by him.  And how to do this, draw sine waves on an oscilloscope.  But how to get from that to that?  There was a little bit of an explanation in recreational math mat irks and he used the sine waves and others in combination.  Applying operations to create composite waves that had really interesting patterns.  Here is an example of the work that makes is really obvious that there is a bit of a sine wave thing going on.  And I was like, how\_\x1E\x1E okay.  I get it.  But how\_\x1E\x1E well, how are these really made?  I attempted to create it.  I'm going to show you a demo here of creation of Lapsoky's Oscillons.  And I'm going to use P5JS, which is a graphics drawing library based on processing.  The processing language was designed to make drawing with code accessible for non\x1Eprogrammers.  It's super great if you're interested in trying out graphical things, I highly recommend checking it out.  It's great reference and documentation, and it's an online editor.  Really easy to use so a good place to start.\n      Jump to demo.  In P5, off global draw function that will get called to draw a frame of your animation or visual.  And so, in this I'm just doing something really simple.  Just setting the center of the canvas as zero\x1Ezero and drawing a tiny circle here at zero\x1Ezero with the width and height of 10 pixels.  And that's not super\x1Einteresting.  What's more interesting is that you can animate things.  So, here I'm adding a little counter.  And incrementing it at every frame that's being drawn.  And using that value to position the coordinate of the little circle.  I can draw a circle, and the formula is R sine theta, what X equals, and R is R cost data, and R is the circle.  Drawing circles in circles.  Circles are cool, but not super\x1Einteresting.  What's more interesting is you can mess around with theta and multiply it by two different fragments, and you get a pretzel.  This is an example of a figure.  It's when your sign and cause functions are at different phases.  It creates interesting loopy effects.  All right.  So, what I can do now is I can have the pretzel and then draw an additional point.  Pretzel is one point.  And draw the ellipse over here.  And I can draw a line between those two points, and you get kind of that, but not quite still because this overlaps.\n      And it keeps on getting brighter and brighter.  So, what you can do is that\_\x1E\x1E whoops.  You can fade out the lines as they're being drawn.  And this, I imagine, would be what that might look like on the oscilloscope screen.  A close approximation of it.  So, I have actually the code here in P5 demo.  I will send out a link to the slides on my Twitter after this so you can play with it and you can sort of mess around with some of the values and run it and see how that changes the movements or the effects.\n      It's kind of interesting because you never know what you're gonna get.  You just punch in stuff, that looks good.  Or not.  And you just have to figure out what you're looking for.  You can also add color here.  Instead of straight lines, I drew curves, same idea.  And, yeah, so, that's it for oscilloscope art.  Next, vector graphics.  Vector graphics has a special place in my heart.\n      I really enjoy working with it.  To understand why vector graphics are really important and they're mostly lines and geometric shapes, we need to understand the output available in the computers.  This was before laser printers.  You couldn't print a high\x1Edefinition image really easily like we do now.\n      In order to create really detailed images, people would use mechanical plotters.  Think of it as a drawing robot.  It has a pen and can move on the Y or X axis across the surface of the paper and draw on it.  This is a drum printer.  It moves the Y which is paper and the X which is the pen.  And so, the limitation with plotters is that all you have is literally a robot arm that draws lines.  And so, you had to describe your graphics in terms of vectors.\n      So, you had to provide coordinates in which to move around.  Can't do colors or gradients or fancy things.  So, a lot of the esthetic back then had to do with lines, especially close together to have the effects.  Here is one I saw a lot of.  The basic idea is you take a geometric shape and nest it and get the cool, swirly effect.  Okay.  Interesting.  Like it's just nested squares, whatever.  And in fact, it was so popular that it was the esthetic for cybernetic serendipity which is the first ever computer exhibition that focused on computer art and held in the institute of contemporary arts in London.  It was a really big deal at the time.  And the fact that they chose this for the graphics, I guess it must be really popular.  Inspires some imagination.\n      A little side note about Cybernetics Serendipity, it was by a Polish woman, Jasia Reichardt, and she brought together the artists and showcased them.  And it's the name is a reference to the happy chance discoveries that you make with the computer.  Sometimes it's random and you don't know what's going come out and sometimes it's really beautiful.  I saw this motif used over and over again in interesting ways.  I was like whatever, I don't know.\n      But later I found out this was actually a visualization to a calculus problem.  That makes sense, the early artists were people with access to computers, scientists and mathematicians.  The problem is like this, imagine four flies sitting on a card table and they start walking at the same rate.  Each going towards the fly on the right.  The math in calculus is to find the path of each.  If I'm trying to solve it, cool.  I don't think about it.  It's not very interesting.  But if you visualize it over here with each color representing the path of a certain fly, it actually looks\_\x1E\x1E you get that swirly effect.  And it gets really pretty when you draw lines between each of the different flies here.  And I also added pretty gradients.  Here is some video just in case the demo didn't work.  You know, got to be prepared.  And I found out that you could do this not just with four, but with three flies or five or six.  And because of I have a computer that runs really fast and I can cue up for it, I can run it as many times as I want.\n      And what I want to do with the shape is to tell it.  If you put them all together, these are triangles.  What's fun to see is when you look at this, the first that you see is not the triangle.  It's actually this spiral\x1Elike shape.  And you don't want expect that to come out of this.  So, kind of like that emerging property.  Here is one with squares.  It's a shape that's really, really hypnotizing.\n      So, All right.  And now I'm going to tell you about text\x1Ebased art.  Some of you are thinking ASCII, right?  I will talk about that.  First, I want to talk about what was it like outputting text.  So, there were CRT monitors, but they had an output.  Here is a line printer for the '60s, I believe.  And it's a line printer because it prints by lines and does that really fast because it has a fixed character set.  You can only print certain characters.  Just goes line by line.  Super\x1Egreat are for printing out text.  And so, people figured out ways to make creative works with this.  Here, a couple of pieces of work by Frederick Hammersley.  And you can see the images here.  I really like these two.  And the interesting thing about this, this was actually created with something called the art one programming language.  And it was created by Katherine Nash and Richard H. Williams at a university in New Mexico.  Nash was from the art department and Williams was from the engineering department and they collaborated to make this language with the intention to teach students to make simple computer graphics.  It was notable for its simplicity and intended as an introduction to the use of computers for those without a technological background.  And that sounds familiar, that sounds like P5 and processing.  That's really cool.  Art 1 was the original processing for P5.  This is from the '60s.\n      And if you look at the documentation, it may look more complicated for art 1, but the API is the same thing.  You pass in the center of the\_ellipse and then the size of it.  And the same thing, and art 1, punch it on the card and do all that.  But the P5 is like type it in, magic.  Another interesting thing I noticed is if you look at the detail of some of these pieces, you notice that the way that it creates its depth of texture is by overlooking characters.  You know they had the fixed set of characters.  And in order to get creative with more textures and effects, they would overlap two different characters together.\n      This piece is made up entirely of zeros, dots, dashes and apostrophes.  And that was brilliant because you have a printer.  You can print over things.  Let's do it.  And I was really inspired by the fact this was really art that was making the most out of the available technology.  Being creative with what they had instead of creating in spite of it.  And we still have this today, kind of.\n      Only difference is that it's not really SBR, it's more like EBCDIC, extended binary coded decimal interchange code, supported by IBM at the time.  And it was even more limited than ASCII.  As you can see on the top of the character set.  It's a little hard to see.  But not a lot of characters.\n      I was curious, what was it like working in this language?  Original art one.  What features did they have?  What did they choose to include?  I did a little research and it's surprisingly hard to find things written about Art one.  The only thing where I found something significant was in the Reichardt book.  There was a flowchart talking about the languages.  And you can draw a line, solid rectangles, open rectangles, triangles, ellipses, and I don't know why they had solid and open rectangles but not solid and open ellipse.  Not sure.  This was simple and straightforward and yet people can create interesting things out of it.\n      I was inspired to re\x1Ecreate this using JavaScript.  I have here the code.  It's on GitHub.  Still a work in progress.  Please don't judge.  So, I was like, here's the thing.  I don't have a printer, right?  I'm not going to go out and buy a printer.  What's the closest thing we have to a printer that's easily accessible?  And I settled on the terminal.  Limited character set, wonderful, easy to use.  Here is an example of a piece of work that I created using the same rules that were available.  Art one.  And here these are made with triangles.  But they have interesting like 3D effect.  You can do colors with terminals.\n      Here's one that's actually inspired by the skirt that I'm wearing right now.  And so, you remember how I talked about how creative they got with overlapping characters?  So, here's the thing, turns out in a terminal it's really hard to overlap characters if you're not using an extended library.  So, I was like, okay.  What's the next best thing I got?  Which is accents or diacritical marks.  You see for the Ss, there's an accent at the top and the bottom.  Same here, this is an asterisk and then the accent with the box around it.  And a lot of my interesting happy accidents.  Like the way that you color the background of the characters, sometimes it's a little out of sync, but I like that effect.\n      So, yeah, use what you have.  I used Unicode.  Not quite SDR, but Unicode art and that was fun to play with.  This just skims the surface.  There's way, way, way so much more history in computer graphics and computer art.  In Europe alone, I tailored this talk for Europe because a lot of the history came out.  And Frieder Nake and Georg Nees, prolific computer artist in the '70s.  And from Hungary, making computer drawings before computer were a thing and also when they were a thing.  And not to forget the new tendencies movement in what was once Yugoslavia and now Croatia.  And there's an 800\x1Epage book on this.  If you want to look it up, the title is over here.\n      This is an interesting movement because they celebrate the modular or procedural art.  Even before computers were used for it.  And as computers became more and more known, they also became a part of this movement.  So, yeah.  Before I end I just want to talk a little bit about why?  Why go through all this research like looking at things from 60 years ago?\n      So, a thing that I noticed, especially in the web world, is that we are always looking at, you know, what's new and what's shiny.  What can I do next?  And we don't take a lot of time to step back and to look at what has already been done.  But it's important to understand that we didn't all get here just on our own.  We really, you know, were built on the\_\x1E\x1E we really stand on the shoulders of giants.\n      It's really important to know where you came from.  Because if you don't know what has already been done, you don't know how to make something new.  So, yeah.  This has given me a lot of appreciation for the technology we have today.  And, of course, there is no shame in finding inspiration from the past.  You can pick what has already been done and make it your own, refine it.  Learn from all these people who have put in all the work and creativity to get us where we are here today.  And that's all I have for you.\n      I have a blog.  I write about this stuff if you're interested.  But, yeah.  It was such a pleasure.\n      [ Applause ]\n"
  name: Sher Minn Chong
  image:
    filename: sher-minn-chong-185c235c.jpg
    filename_500: sher-minn-chong-185c235c-500.jpg
    filename_1000: sher-minn-chong-185c235c-1000.jpg
    filename_square_1000: sher-minn-chong-185c235c-1000-square.jpg
    filename_square_500: sher-minn-chong-185c235c-500-square.jpg
    filename_square_200: sher-minn-chong-185c235c-200-square.jpg
    width: 200
    height: 200
    originalType: jpg
  web:
    twitter:
      handle: piratefsh
      url: 'https://twitter.com/piratefsh'
    github:
      handle: piratefsh
      url: 'https://github.com/piratefsh'
    homepage:
      handle: piratefsh.github.io
      url: 'http://piratefsh.github.io'
filename: /sher-minn-chong/recreating-retro-computer-art-with-js.html
yt:
  id: nC5q5JxLjnY
  url: 'https://youtube.com/watch/nC5q5JxLjnY'
  title: Recreating Retro Computer Art with JS! by Sher Minn Chong | JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/nC5q5JxLjnY/maxresdefault.jpg'
  index: 47
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: Recreating Retro Computer Art with JS! by Sher Minn Chong | JSConf EU 2019
    duration: PT26M51S
    description: >-
      Before personal computing became a thing, there was a handful of
      programmers and artists saw computers as a tool beyond their intended
      purpose: to create art.


      In this talk, we will explore the early history of computer art, from
      ghostly oscilloscope paints to pre-ASCII text art. We’ll discuss how
      simple techniques with limited technology back then could yield compelling
      pieces. We’ll see how the history of computer displays and printers have
      evolved in the 1950s to 1980s.


      While quite a bit of retro art survives today, most of them do not come
      preserved with their algorithms. In this talk, I’ll also demo some
      attempts to recreate retro art pieces using p5.js, a JavaScript graphics
      library as well as talk through some of the techniques of creating
      generative computer art.


      https://2019.jsconf.eu/sher-minn-chong/recreating-retro-computer-art-with-js.html
    thumbnailUrl: 'https://i.ytimg.com/vi/nC5q5JxLjnY/maxresdefault.jpg'
    uploadDate: '2019-08-20T19:19:22.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/nC5q5JxLjnY'
    interactionCount: 2081
    actor:
      name: Sher Minn Chong
  viewsPerHour: 1.0702913143517987
  websiteUrl: /sher-minn-chong/recreating-retro-computer-art-with-js.html

----

Before personal computing became a thing, there was a handful of programmers
and artists saw computers as a tool beyond their intended purpose: to create
art. 

In this talk, we will explore the early history of computer art, from ghostly
oscilloscope paints to pre-ASCII text art. We’ll discuss how simple techniques
with limited technology back then could yield compelling pieces. We'll see how
the history of computer displays and printers have evolved in the 1950s to
1980s. 

While quite a bit of retro art survives today, most of them do not come
preserved with their algorithms. In this talk, I'll also demo some attempts to
recreate retro art pieces using p5.js, a JavaScript graphics library as well as
talk through some of the techniques of creating generative computer art.