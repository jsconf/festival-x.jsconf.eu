----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: 'Martin Sonnenholzer: animations - learning from cartoons'
data:
  published: true
  reviewed: true
  order: null
  firstname: Martin
  lastname: Sonnenholzer
  talkTitle: animations - learning from cartoons
  coSpeakers: null
  twitterHandle: chaos_monster
  githubHandle: null
  homepage: null
  potraitImageUrl: 'http://chaosmonster.de/pic.png'
  caption: >-
    Thank you.  Whoa.  So many people.  Did you see Jessica's talk about
    comics?  Did you like it?  Yeah.  I like comics as well.  And a lot of
    cartoons.  They are company for me for almost my entire life.  When I was a
    kid, I was sitting at the TV every Sunday morning and watching cartoons for
    hours.  My parents didn't like it, but I loved the cartoons.  Later on, when
    I went to school, I started drawing little characters in my math books in
    the corner.  And every time you flip the page your characters came to life. 
    It was really amazing.
          So, my name is Martin.  I'm a principal project engineer.  I organize a conference based around Angular.  I later on used my math books for the original purpose and studied math.  I love math and the possibilities.  I and love cats.  That's probably the reason why all over the Internet my cat's face is my avatar for Twitter, GitHub, everything.  And my cat's nickname, Chaos Monster became my Twitter handle.  If you see a cat like this, it's probably me.
          I started as a backend developer.  And at some time in the last ten years I switched to the frontend and became a JavaScript developer.  I did that because I was passionate about the UX possibilities that you can have.  All the user interaction is most possible in the browser when AngularJS 1.0.7 came out years ago.  And I was like, yes!  I want to do everything in the browser because I want to be close to the user.  I want to have interaction with them.
          But I was really, really afraid of animations.  Every time my product owner came to me and said something like, hey, can you move that from the left to the right?  I was like, don't you think it would be better if it suddenly pops up on the right side of the screen!  It's way better, it's way better and I don't have to do animations.
          The time passed by and I watched documentation by Studio Ghibli, creating the moving castle.  And this was about how they made walking animations a smooth and natural experience for everyone.  And I was like, all the time I learned from different domains from other professions.  Why don't I look at cartoons and can see what I can learn about animations from watching cartoons and learning how they do it?
          So, if you do a little bit of research in field, you are not able to get around this book, called the illusion of life.  It's by Frank Thomas and Ollie Johnson.  Both are animators at Disney.  And in the '80s when they released that book, they boiled down all the knowledge that Disney acquired in the last    not 50 decades    five decades.  They did the amazing animation movies to 12 principles of animation.  And I thought to myself, after read them, they are really amazing.  I have a lot that I learned from that and boiled it down to the eight principles of web animation.  Starting with squash and stretch.
          If you think about a ball, a tennis ball, for example.  And if you think how a tennis ball would behave if you throw it on the floor and how it would bounce back into the air.  You think about it, it wouldn't really change its form, its shape.  It would look something like this.  But that doesn't feel really good.  Because you can't feel the speed of the ball.  You can't feel the impact of the ball on the floor and you can't feel how the ball falls    jumps back into the air.  So, what you can do instead is doing stretch and squash.
          You use stretch to show speed.  To show how the ball gets accelerated.  And you use squash to show how the ball gets pulled and pushed into the floor.  And how the energy goes back into speed afterwards.  And you cannot only use that to create a ball that bounces off a floor, but you can also use it to create a feeling for material.  This box that is created with key frames in CSS feels really squashy.  It feels like bouncy.  It gets adjectives.  It's not just a box.
          So, you have to keep a few things in mind when you do that.  For example, you have to think about the volume.  The volume of the object should not change because your brain recognizes if you're just changing the volume of the object by squashing or stretching it.  And it feels really off if you do that.  And you can use squash and stretch to give objects weight and a feeling of speed.  And also, to give them material.  The feeling on how the material works.
          The second principle is anticipation.  If you look at this stick figure, you would think, okay, what happens next?  You would not expect it to just fly off in the air like this.  It doesn't feel right, right?  What you actually want to do is you want it to bend the knees and then go up.  Because with that, you give the view of this animation, the feeling that something will happen.  The user can anticipate what happens next.  If I'm going down and I'm jumping up, you will expect me to jump up because you've seen me going to the floor and you expect something to happen here.  And you can use the same in the browser when you do some animations before you do a bigger animation.  Before you show that you can drag and drop it.
          Also, really important what I did not do here, but what can be really important for anticipation is the timing.  So, if you slowly start winding up before you do a really fast throw of a ball, this is also important.  Not only the winding up.  But also, the speed of how I do it.  The third principle is staging.
          Frank and Ollie talked    said it's like that.  If you have a presentation of an idea, it should be completely and unmistakably clear what you want to do.  Don't irritate your user or viewer by pointing them in a certain direction and then doing something totally different.  Look at the stage and all those arrows.  I focus you on one point of the screen.  Doesn't have to be the center of the screen but focus your view on one point of the screen and you expect something to happen here like a character appearing like a magician.  And use that technique wherever you do it.  If it's on the left or on the right, just use it to make it clear for the user where something will appear, or something will happen.
          The same goes for when we are in the western culture.  We expect something that comes from the left to the right to appear on stage.  If it goes from the center to the right, we think it disappears from stage and you would drop it down to the bottom of the stage.  You think it will never come back.  Keep those things in mind because they are part of staging.
          When you look at this green diff.  And I want you to focus on that diff.  Now I told you to focus on the diff.  Imagine you're a user and you're in a browser and I want you as a developer to focus on the diff.  What I can do is I can make the background opaque and do a little bit of animation to focus on the green diff.  Maybe it's a greet button.  Maybe I want you to save that form because otherwise all your data will be gone.
          Number four.  I have a little bit of a problem with that because in animation this is a really, really important thing to do.  But I wasn't sure how to translate it to the web browser.  Let's go a little bit back.  If you have a motion in a movie or an anime, you have a lot of pictures and those pictures slightly change from frame to frame.  Normally we talk about 12 to 24 frames per second.  If you're a gamer, you want to run on 60 frames per second.  Meaning you want to have so many images that slightly differentiate to each other in each second.  And back in the days, in the 1980s and before that, before this was a thing, all of those frames, all of those images, had to be drawn by hand.
          So, people were sitting there and drawing the same image over and over again and just slightly make a change to the previous one.  And here comes the technique of straight ahead.  If you just change the image just slightly without any concept or any story about it, you just create something that is randomly moving like fire or rain or explosions.  This is a really great technique to do that.
          But if you want to tell a story, you need a concept, a story board behind that.  And for that you think about, what is my first pose?  And then you think about will be my last pose?  And you think about, what poses are in between those two poses that are important for me to show my audience?  So, the audience gets an understanding of the movement we want to have.  And then you create those key frames and afterwards you just add more and more frames by using the straight-ahead technique.  And then at the end you have a movement.
          And with CSS we have CSS Transform, we have scale, rotate, you name it.  And we also have CSS keyframes.  And this is where my mind just popped.  I have those poses.  Those are key frames.  They are frames that are really important for how the animation would work.  Same goes for web animation API.  And if you look at keyframes, and this is no change to how web animations work with the web animation API, you create your initial pose    you create your final pose, and if you want to, you create a few poses in between that are important to tell the story of how your object moves and then you let the browser just fill in all the other thousands of frames that you might want to have.
          The fifth principle of animation frames is overlapping action.  If I have the pod and tell you I'm moving from the right to the left.  You would imagine the flower pod to move and you would imagine the flower to move.  Follow through and overlapping means that you can drag secondary animations like the flower.  Because the flower takes a little bit longer than the flowerpot until it realizes that something is moving.  And it takes a little bit longer to    that's just physics    to realize that it stopped.  And this is called follow through and overlapping action.  And if you look at the browser, I found this great article.  Get the slides afterwards and I highly recommend to read that article.  That mentions how to fix drag and drop by using a little bit of math.  You see why I was into that article.
          And what they do is they use the mouse movement speed and translate it into the tilde of the dragged object.  The faster the mouse moves, the higher the angle of the object, the tildes.  And if the mouse moves slowly, the tilde goes back to a horizontal stage.  And this makes all your drag and drop animations feel way more natural.  Way more like I want to drag and drop everything here because it's awesome.
          Slow in and slow out.  I read that principle and I was like, yes.  I totally understand it.  I know how this will work in the browser.  Just for you to present how it works, slow in and slow out means if I'm starting running over there, I won't start with full speed.  And if I'm stopping at end of the stage, I won't stop at full speed.  I will slow down.  This is a natural movement.  I will show it to you just for the sake that you see it.
          [ Laughter ]
          I'm walking very fast.  I'm slowing down.  And back.  I start fast, slowing down.  Yeah.  I did my sport for today.
          [ Applause ]
          I would never imagine that someone claps when I'm running.  And we have the same thing in the browser.  We call them easing functions.  We call them busy functions.  If you have an ease in and ease out function on your animation, it comes to it at a faster speed and slows down before it's at its final stage.  And if you do a linear transformation, it will have the same speed from the beginning until the end.  And this feels really mechanical.  Not natural like in and out.  And mechanical is something that we really don't have that often.  Even a car that is mechanical would slowly start.  Only things like bullets would be really fast from the beginning.
          Secondary actions.  This is about how your main action, your main animation, needs sometimes support so you can tell a story.  And for that you need a concept.  And, for example, if I'm walking over that side of the stage, my arms are really stiff.  And I'm walking and you see the walking animation.  Imagine animation.  And it feels really stiff and really unnatural.  So, what I actually do when I walk and probably all of you if you're walking, you move your upper body.  You move your arms.  Okay.  I'm a little over accelerating now.  But you move your body with that.  And the movement of the arms and the shoulders are the secondary action and they support the main animation, meaning the walking animation.  I found this really, really, really awesome CSS animation by Andrew Wong.  And I don't want you to focus on the walking animation.  I want you to focus on the secondary animations here.  Meaning the clouds in the back, the signs inform back.  They are secondary animations that help to give the animation depth.  That help to give your relation to how fast this object is moving.
          And this helps you to understand the main animation.  So, secondary animations are really, really good when it comes to how to improve your main animation.  And with that I'm coming to the eighth principle called appealing.  Frank and Ollie just said, "Make your animations appeal.  Make the viewer feel like I love this character.  I totally dig this character, how it works and moves." And I want to make that my conclusion as well.
          So, here's my conclusion of looking at the 12 principles of animation by Frank and Ollie.  And how to translate them to the web.  First, use animations to improve your user experience.  Because motion can tell a story.  And to tell a story, you need a storybook.  Make yourself comfortable with the idea to think about, where does my animation start?  What is in between of my animation?  And where does my animation stop?  Make this concept, not only for one animation, but for the entirety of your website.  Think about how all the animations can work together.  And please, don't overdo your animations because if you do too much, and it doesn't feel really right.
          And last but not least, have fun.  Have fun with doing animations because animations are great.  And don't be afraid as I was.  Because there's so much content about how to do animations.  Look at 12 principles of animations and learn from over a century of animations on how to really do great animations.
          Thank you for listening to me.  And thanks, JSConf EU, for giving me the opportunity to talk to you about animations.
  name: Martin Sonnenholzer
  image:
    filename: martin-sonnenholzer-f23dbdd3.png
    filename_500: martin-sonnenholzer-f23dbdd3-500.jpg
    filename_1000: martin-sonnenholzer-f23dbdd3-1000.jpg
    filename_square_1000: martin-sonnenholzer-f23dbdd3-1000-square.jpg
    filename_square_500: martin-sonnenholzer-f23dbdd3-500-square.jpg
    filename_square_200: martin-sonnenholzer-f23dbdd3-200-square.jpg
    width: 845
    height: 1029
    originalType: png
  web:
    twitter:
      handle: chaos_monster
      url: 'https://twitter.com/chaos_monster'
    github: {}
    homepage: {}
filename: /martin-sonnenholzer/animations-learning-from-cartoons.html
yt:
  id: Bpu_WQXONlM
  url: 'https://youtube.com/watch/Bpu_WQXONlM'
  title: Animations — Learning from Cartoons by Martin Sonnenholzer | JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/Bpu_WQXONlM/maxresdefault.jpg'
  index: 46
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      Animations — Learning from Cartoons by Martin Sonnenholzer | JSConf EU
      2019
    duration: PT18M9S
    description: >-
      With CSS animations and web animations moving elements became possible in
      the browser. But how one moves an object in such a way that it appears
      “correct” for the human eye? How does a motion feel natural? These and
      similar questions confronted the artists who brought cartoons to life as
      early as 1906. Let’s take a look behind the scenes and see how drawings
      learned to walk and what we can learn from it for animations in the
      browser.


      https://2019.jsconf.eu/martin-sonnenholzer/animations-learning-from-cartoons.html
    thumbnailUrl: 'https://i.ytimg.com/vi/Bpu_WQXONlM/maxresdefault.jpg'
    uploadDate: '2019-08-19T15:49:09.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/Bpu_WQXONlM'
    interactionCount: 2404
    actor:
      name: Martin Sonnenholzer
  viewsPerHour: 1.2191695230771957
  websiteUrl: /martin-sonnenholzer/animations-learning-from-cartoons.html

----

With CSS animations and web animations moving elements became possible in the
browser. But how one moves an object in such a way that it appears "correct"
for the human eye? How does a motion feel natural? These and similar questions
confronted the artists who brought cartoons to life as early as 1906. Let's
take a look behind the scenes and see how drawings learned to walk and what we
can learn from it for animations in the browser.