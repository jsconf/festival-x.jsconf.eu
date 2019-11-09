----

# THIS FILE WAS GENERATED AUTOMATICALLY.
# CHANGES MADE HERE WILL BE OVERWRITTEN.

template: pages/speaker.html.njk
title: >-
  Ziran Sun: Build an end-to-end IoT system using JavaScript with "GDPR
  awareness"
data:
  published: true
  reviewed: true
  order: null
  firstname: Ziran
  lastname: Sun
  talkTitle: Build an end-to-end IoT system using JavaScript with "GDPR awareness"
  coSpeakers: null
  twitterHandle: 'https://twitter.com/ziransun1'
  githubHandle: 'https://github.com/ziransun'
  homepage: 'https://js.foundation/blog;'
  potraitImageUrl: 'https://s-opensource.org/wp-content/uploads/2018/04/ziran-150x150.jpg'
  caption: "Thank you very much for coming.  And I first need to introduce myself.  I'm Ziran from the UK.  And today's talk I would like to walk you through our practices and also our choices of technologies in building end\x1Eto\x1Eend IoT system with privacy in mind.  So, to start the talk, I would like to present to you a use case.\n      And we are going to use this use case throughout the talk today.  What we are going to do is go behind the scenes of the use case and look at the technology challenges and our solutions.  So, first we would like to look at how to build an IoT system\_\x1E\x1E okay, our use case basically is holiday homes.  Holiday result.  I think most of you has spent a holiday, rent a home on a big holiday resort.  We're talking about this kind of scenario.\n      So, to start\_\x1E\x1E the first step is how to build an IoT system for one single holiday home.  So, in our case we are basically using the web of things technology.  So, we are going to attach Mozilla IoT platform and the web.  Once the IoT is built for one holiday home, we're going to go further.  How can we connect all of these homes together?  And furthermore, can we introduce some intelligence when we view the holiday\_\x1E\x1E when we view the\_\x1E\x1E connect the holiday homes together and build the IoT for the whole holiday resort.\n      So, here, and we have the main case is to respect user's privacy.  So, here we're going to look at learning.  And then we're going to look at the architecture for the whole IoT system and share with you our current work status.  So, holiday homes, in this scenario, I think only two main parties.  One is the holiday makers.  The other is the owner of a holiday resort.  The owner could be just like another company or agent.\n      So, what's does the holiday owner have in his mind when building IoT for their holiday resort?  I think one essential thing is is the holiday home very smart.  Is it controlled and how to provide the services?  And then when you build this, it has to be, you know, have to be complying with the legal requirement.  Respect the user's privacy.  And the last, but not least, so, what is\_\x1E\x1E is it a solution that causes the effect here?  And does it provide a long\x1Eterm benefit?\n      And from the holiday maker's point of view, I guess, for us, is just the easy access and easy control over the holiday utilities and the facilities.  And also, we want to be relaxed and not being watched.  We don't want anyone to monitor how we use our electricity, how many washes we do every day, you know, during holiday time.\n      So, let's look at how to build IoT for one single holiday home.  And with privacy in mind.  How is privacy doing in IoT?  So, how is IoT actually doing with privacy, really?  So, the concerns are about the risks that the Internet of things has imposed on data protection and the personal privacy has been raised for many years.  And a survey from ICO in 2016 has stated that six in ten Internet of things devices do not properly tell customers how their personal information is being used.\n      This is pretty worrying.  The good news is that the government and also the industry, they are taking actions.  For example, in the EU, GDPR, I think everyone heard about GDPR here?  Yeah.  Yeah.  So, GDPR came in force in May last year.  So, this new EU regulation basically is to protect personal data in law.  And also, when you design\_\x1E\x1E you know, when you design and create new IoT solutions, we need to have data protection by design in mind.  Previously known as privacy by design.\n      So, for\_\x1E\x1E for IoT developers, this legislation has a significant impact on how we deploy our technologies and what kind of services we are building.  So, we actually are thinking that, well, open web platform actually permits the enhanced privacy compared to other technology stacks.  So, we think actually GDPR is not only a challenge for web IoT, but also a very good opportunity.\n      So, we have been talking actually when we build our web of things for\_\x1E\x1E when we build our IoT actually and mainly based on web of things tech technology.  What is,\_of things?  Web of things let's just quote from Wikipedia.  It's a software architectural style and the programming patterns that are along the real-world objective to talk to the worldwide web.  It's a tough level.  When look at really what issues are in this.  If you are in IoT, you know for the major concerns in IoT is interoperability.\n      Because, you know, we have like hardware and software from different vendors and manufacturers.  Suddenly we want to connect them together.  And they are not nice to follow the same specifications, the same standard.  Probably not even talk the same language.  So, how do you connect them together?  So, web of things basically addresses this issue by providing an application layer solution.  So, aside from the difference in the network layer physically.  This is an application solution.  Which means that\_\x1E\x1E which means actually it has to on the Internet of things, it has to talk.  So, the scope actually, bearing in mind the scope of IoT is a lot broader.  Not everything in IoT nicely connects.  So, we would like to think that web of things actually is an option for application layer solutions for the traditional IoT particle stack.\n      So, the web of things basically has been a specification by the W3C and there's some implementation work by Mozilla and Google.  And some things are actively involved in this implementation work as well.  And standardization works.  So, here we have actually a loosely\_\x1E\x1E web of things solution for the home.  And we actually talk about things.\n      So, can I\_\x1E\x1E basically you connect all your things together, manage them and connect to the cloud.  And we talk about controlling your things from your smart devices like mobile phone, through progressive application.  We talk about to have a new device, a new thing.  To connect and embody and connect to your network through web tools. so, now we will look at each of those components in detail.  The first is the gateway.  I guess any of you attended the Mozilla web of things workshop this morning?\n      Yeah.  So, this gentleman, what was your impression on\_\x1E\x1E yes.  It's actually quite impressive as a platform and it is open sourced.  So, this morning actually the workshop, I was there, actually.  I think it's mainly talking about a way to stay connected to things.  But actually, it's more than that.  It's basically three paths.  We have the cloud over here.  The cloud is a districted collection of cloud services and provided by Mozilla to connect devices across a geographic area.\n      And then we have syncs framework.  This syncs framework basically is a collection of reusable components to help you build your own web things.  And we should directly expose the web of things API.  So, actually Mozilla created this API.  They created a document.  Look it up, that's what they're following.  And coming to the things gateway.  The things gateway is an open implementation and which the tool is existing for access to the web.  So, we can actually see that the backhand of the things are for JS.  This is for JS developers, this is good news.  And NodeJS backend talking to the frontend through the API.  And through the secure web socket.\n      Apart from JS supported, web of things actually produced another concept called adapter.  This adapter is actually a language adapter.  It's programming things using another language such as Python.\n      Look at the security side.  So, basically the web of\_\x1E\x1E the Mozilla things, they gave the framework, actually.  They're going to have you establish the HTTPS where Mozilla tunneling is.  And also, if you are considered this is a type of structure for the situation.  So, actually can tell you how\_\x1E\x1E it is actually less encrypted.  So, you establish the tunnel from your gateway to your cloud server.  And let's consider another situation.\n      So, if you actually not on site, you're offsite.  You're actually somewhere remotely.  And there you want to access your things at home.  In this case, actually Mozilla provides this bike tunnel.  Back handed tunnel from your cloud server to your gateway.  And the other thing, this is a security side.  And the other locater specification authorization is they actually follow you.  So, the token, because you can choose a different text token, the token they are using is a JSON web token.  Yeah, show\_\x1E\x1E this is a snapshot from one of our applications.  So, this shows that actually this screen pops up on the owner.  What happens is when you go to the applications, you want to exercise your things.  So, the things here are mainly like the sensors in your home.  And the home screen, you have this pop up.  And you can grant the scope for the token.  It allows you to access certain things.  Or I can\_\x1E\x1E actually further you can actually grant a read access.  You can grant rights access.  An owner cannot only do this, they can also delete and then revoke these tokens.\n      So, this actually is a privacy.  We can say, you know, you don't get my content or the scope if you don't ask me.  And the whole progress application, I'm sure they are down here.  We use the P tab for mainly for mobile phones to control devices.  So, P tableau is a website that creates a native app for user experiences.  They basically address the issues in the native mobile applications on the write side and this new design concept in APIs.  But it's the way I've seen here.  Basically, you can add it to the screen to promote it.  This is basically a native application feature.  And they can do offline features\_\x1E\x1E offline functionality.  So, although the functionality is limited, it can still show you, you know, what is already historically there.  You can still control something.  So, this offline connection for us is quite interesting.  Because it's actually allowing you to give us the possibility to minimize and install and use the data as much as possible.  Also, you have to know\_\x1E\x1E give you the possibility to know what data is reserved in my device, what is up there?\n      So, this feature is basically a chip that by I deploy a collection of technologies.  A service worker.  So, one thing is we need to talk about another aspect of security is you can unleash your page through HTTPS.\n      So, we talk about having a new device.  Onboarding with Bluetooth.  Bluetooth is basically based on Bluetooth low energy.  So, the idea here is that we use the web of Bluetooth APIs to discover and connect another web of Bluetooth devices.  And after that, when the authentication is finished, we pass the Wi\x1EFi information to the new device.  And then the new device is connected to the network through Wi\x1EFi.\n      So, the web, that was the reason we chose it because the other thing is with the server.  And we have HTTPS.  And the other thing is if we want to start Bluetooth in discovery, you have to do it through a user gesture.  This is another aspect of privacy.\n      So, we had\_\x1E\x1E we had IoT build out of one single holiday homes.  And we were thinking to\_\x1E\x1E how to connect them together.  Connecting them together is pretty standard.  Because you can get the cloud server and you can actually view that cloud connect and cloud server which in this case Mozilla, they have actually prioritized that.  Whether we look at the solution, we particularly look at how scalable the solution is.  Can we expand what we have in this holiday result use case?  Can we extent it to a smart city case with millions and millions of devices?  Scalability.  And the other thing is that we know data is very, very valuable.  So, how do we make a good use of the user data?\n      And then we should respect their privacy.  So, with this in mind, actually, we want to use\_\x1E\x1E make good use of data.  We want to do statics and then we're going to do predictions.  With this in mind, we basically are choosing learning.  If you have learned about federated learning?  Okay.\n      So, we actually made pretty much using federated learning in this IoT solution.  So, what happens is the learning is basically a collaborative motion learning without a centralized training data.  So, basically the concept was initially proposed and termed by Google Paper two years back.  And decentralized.  We talk about decentralized because we mentioned that without centralized training data.  Which in this case is actually we talk about clients and aggregate server.  So, each client has their own local training model.\n      And the privacy.  We're going to talk more about pricing the next slide.  And the last point is the possible personalization for the user.  So, basically, you could have your local trained model and there's a possibility for you to personalize this model for particular users.\n      So, if an IoT scenario, when we talk about privacy, for a client, link and a server.  We can talk about them together in conjunction.  So, the privacy features in\_\x1E\x1E for the learning basically matches the next three points.  Selective update.  Restrictive law, data update.  You don't use the\_\x1E\x1E you try not to get updates through raw data.  Rather you get through parameters.  And you process local data as close as possible to the data results.  Let's explain a little more on this in the architecture.\n      So, this is the architecture we have here to build the IoT for the whole holiday resort.  So, between things on the IoT gateway Mozilla gave away is enough to do communication.  So, we are talking about gateway or in each holiday home to collect with the cloud server.  You know, the server in the cloud.  And in this case, we called the client.  The client is the IoT gateway.  And the cloud server is the aggregate data server in the term of federated learning.  So, what happens here is the learning model located in each gateway, in each client.  And once we have the initial model.  So, you have it based on historical data.  And then train the initial model and you locate it.  You can actually locate them into each client.  And they are probably the same for the cloud server.\n      Once this is in, and the local gateways start to train their models according to the data collected from this own house and update this model.  So, they keep on doing it.  And what happens, the aggregate server when it needs updated is randomly selected a certain number of clients.  So, it's basically\_\x1E\x1E it's not at this time\_\x1E\x1E this time, this time, next time.  We don't know.  There was three of them in this time selected, another seven from another group.\n      So, the updates actually, the way that they send the updates with parameters.  The raw data will stay inside the house.  And then the cloud server basically, according to the updates collected, the cloud server, the aggregate server, will update the model itself.  Once updated, it will also update the client models.\n      So, sorry.  So, with this we can actually\_\x1E\x1E it's actually\_\x1E\x1E actually we would meet with others.  First the data doesn't go out of your house.  The raw data doesn't go out of your house.  Second, the aggregate server still can, based on the model, is training the aggregate server, started the prediction, created a prediction on statistics.\n      So, our work on federated learning in IoT is making progress.  At this moment we sync up the framework between the client and the server.  And then also we actually managed to get all kinds of flows in Raspberry Pi's 3.  This is just a simple example we have run on an aggregate service that we are in the process of actually doing in like a utility usage in a house that the model is not fully ready yet.  So, this is a model actually.  When we test the framework, we actually create it had simple model and just try to see how things work.\n      So, this model basically is to recognize how to write in digits.  So, what happens is we show here basically the aggregate server.  Randomly collecting updates from three.  And selecting\_\x1E\x1E randomly select three clients.  And we are given parameters that actually updates the module.  So, what we created here is actually the statistics for the prediction accuracy.  So, if we actually\_\x1E\x1E this snapshot is around the nine or ten.  So, the accuracy you can see on the top is .98.  It's pretty good, actually.  We actually run\_\x1E\x1E we ran the accuracy pretty much on the .97, .98 mark.\n      So, this progress is seeing the progress we have inside.  And actually, we're updating pretty much every day.  So, if you're interested in this work, in our further work on this, do follow us.  We actually have another talk in full stack in London in July.  And my colleague who is an engineer will discuss this part further then.  So, that's pretty much my talk for today.  Thank you very much.\n      [ Applause ]"
  name: Ziran Sun
  image:
    filename: ziran-sun-d86d5f9a.jpg
    filename_500: ziran-sun-d86d5f9a-500.jpg
    filename_1000: ziran-sun-d86d5f9a-1000.jpg
    filename_square_1000: ziran-sun-d86d5f9a-1000-square.jpg
    filename_square_500: ziran-sun-d86d5f9a-500-square.jpg
    filename_square_200: ziran-sun-d86d5f9a-200-square.jpg
    width: 150
    height: 150
    originalType: jpg
  web:
    twitter:
      handle: ziransun1
      url: 'https://twitter.com/ziransun1'
    github:
      handle: ziransun
      url: 'https://github.com/ziransun'
    homepage:
      handle: js.foundation/blog;
      url: 'https://js.foundation/blog;'
filename: >-
  /ziran-sun/build-an-end-to-end-iot-system-using-javascript-with-gdpr-awareness.html
yt:
  id: 2YDI2GUmmFI
  url: 'https://youtube.com/watch/2YDI2GUmmFI'
  title: >-
    Build an end-to-end IoT system using JavaScript with "GDPR awareness" by
    Ziran Sun | JSConf EU 2019
  poster: 'https://i.ytimg.com/vi/2YDI2GUmmFI/maxresdefault.jpg'
  index: 30
  schema:
    '@context': 'https://schema.org'
    '@type': VideoObject
    name: >-
      Build an end-to-end IoT system using JavaScript with "GDPR awareness" by
      Ziran Sun | JSConf EU 2019
    duration: PT24M24S
    description: >-
      This talk will discuss why we think that JavaScript is a good language
      option for IoT development by walking you through a loosely coupled end to
      end IoT system, from new device on-boarding to remote access via gateway.

      Technologies we have been used and/or contributed to for building the IoT
      system using JavaScript will be discussed. At each stage, GDPR compliance
      of these technologies will be looked into.


      To address the issue of resource restriction in embedded devices, we will
      introduce you to JerryScript, an ultra-light JavaScript engine by Samsung.
      It is followed by a comparison of popular JavaScript platforms based on
      JerryScript that provide direct JavaScript APIs to developers. The open
      gateway framework is node.js based and targets at decentralized ‘Internet
      of Things’ with privacy and security in mind.


      https://2019.jsconf.eu/ziran-sun/build-an-end-to-end-iot-system-using-javascript-with-gdpr-awareness.html
    thumbnailUrl: 'https://i.ytimg.com/vi/2YDI2GUmmFI/maxresdefault.jpg'
    uploadDate: '2019-07-09T10:26:42.000Z'
    publisher:
      '@type': Organization
      name: JSConf EU
      logo:
        '@type': ImageObject
        url: 'https://2019.jsconf.eu/android-chrome-512x512.png'
        width: 512
        height: 512
    embedUrl: 'https://www.youtube.com/embed/2YDI2GUmmFI'
    interactionCount: 1875
    actor:
      name: Ziran Sun
  viewsPerHour: 0.6331875479071105
  websiteUrl: >-
    /ziran-sun/build-an-end-to-end-iot-system-using-javascript-with-gdpr-awareness.html

----

This talk will discuss why we think that JavaScript is a good language option
for IoT development by walking you through a loosely coupled end to end IoT
system, from new device on-boarding to remote access via gateway.  
Technologies we have been used and/or contributed to for building the IoT
system using JavaScript will be discussed. At each stage, GDPR compliance of
these technologies will be looked into.

To address the issue of resource restriction in embedded devices, we will
introduce you to JerryScript, an ultra-light JavaScript engine by Samsung. It
is followed by a comparison of popular JavaScript platforms based on
JerryScript that provide direct JavaScript APIs to developers. The open gateway
framework is node.js based and targets at decentralized ‘Internet of Things’
with privacy and security in mind. 