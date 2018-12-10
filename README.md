## xlingual Client-Side

Welcome to xlingual --The Global Dictionary.

The purpose of a global dictionary evolves with each user --just as language does. You can use it for private curration, as a word of the day app in over 5 currently supported languages, or use it to help teach others colloquial, or formal words in your native language, or ones you're learning. There's no wrong way to use xlingual.
Save words to your own 'My List' collection, and have the option to make your words 'Global' --or shareable with all other users.
Having trouble making your own list, or, perhaps you just want to get started by seeing what words other people are sharing: That's what 'Browse' is for --take a look at new words from around the world by browsing other language categories.
Expand your vocabulary to a global level.

### **`Contents`**
- [Tech Stack](#tech-stack)
- [Links](#links)
- [Navigating Repos](#navigating-repos)
- [Concept Wireframing](#concept)
- [Screenshots](#screenshots)

### **`Tech Stack`**
#### Front End with *React.js* and *Redux*


**React.js**  - renders real-time content change resulting from user actions<br/>
**Redux** - state management & token handling
**Redux-Form** - all form propogation and submissions
**React-Router-Dom** - for declarative routing.  

 

#### Back End with *Express.js*, *Node.js*, *Mongoose*/*MongoDB*

**Express.js** - Routing/middleware <br/>
 - passport.js
 - JWT Token
 - bcrypt
**Node.js** - Javascript runtime environment
**Mongoose/MongoDB** - Data is being stored in a MongoDB environment after being cleaned and prepped via Mongoose schemas/virtuals/models.

### **`LINKS`**
[xlingual Client-Side](https://xlingual-client.herokuapp.com/)
[xlingual Server-Side](https://xlingual-server.herokuapp.com/)

**Github repos here:** 

front-end: https://github.com/mkcnly/xlingual-client

back-end: https://github.com/mkcnly/xlingual-server

### **`Navigating Repos`**
**Front-end example routes** 
Root-component: src/components/app.js
Landing-Page: src/components/landingPage.js
Word-related actions: src/actions/words.js
Combine-Reducers: src/reducers/index.js
Individual word's Info-Page: src/components/infoPage.js

**Back-end example routes** 

*Server-Root*
/index.js

*Models*
User-Model: models/userModel.js
Word-Model: models/wordModel.js

*Routes*
All Authorization passes through: routes/auth.js
Post to create/salt a 'User': /routes/users.js
All Private/Global word related routes: /routes/words.js
- Retrieval of User's private list with jwt auth:  '/my-list'
- Retrieval of all Users' Global words with jwt auth: '/global'
- Retrieval of Browse's language capabilities: '/browse/:language'
- Deletion route for users' owned words: '/delete/:id'


### **`Concept Wireframing`**

[xlingual original-wireframe concept](https://wireframepro.mockflow.com/view/M87d3e828d9e44c6ebf4afa53f2c290e61541986606422#/page/D1166cade359834db7ce4860c901cc466)

### **`Screenshots`**

<a href="https://ibb.co/nkyS352">
<img src="https://i.ibb.co/QmVG81B/Screen-Shot-2018-12-09-at-10-18-21-PM.png" alt="landing-page-xlingual">
</a>

<a href="https://ibb.co/JnP62Nj">
<img src="https://i.ibb.co/zsw9b1V/Screen-Shot-2018-12-09-at-10-18-55-PM.png" alt="login-page-xlingual">
</a>

<a href="https://ibb.co/5269mkZ">
<img src="https://i.ibb.co/JCKdVqZ/Screen-Shot-2018-12-09-at-10-19-24-PM.png" alt="dashboard-xlingual">
</a>

<a href="https://ibb.co/FxhLx28">
<img src="https://i.ibb.co/4mFnmz4/Screen-Shot-2018-12-09-at-10-20-01-PM.png" alt="browse-page-xlingual">
</a>

<a href="https://ibb.co/ryTsYyf">
<img src="https://i.ibb.co/BsdNbsK/Screen-Shot-2018-12-09-at-10-20-21-PM.png" alt="word-info-page-xlingual">
</a>

<a href="https://ibb.co/jTYFsPy">
<img src="https://i.ibb.co/G0DjN4W/Screen-Shot-2018-12-09-at-10-20-58-PM.png" alt="add-word-xlingual">
</a>