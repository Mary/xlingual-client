## xlingual Client-Side

Welcome to xlingual --The Global Dictionary.<br/><br/>

The purpose of a global dictionary evolves with each user --just as language does. You can use it for private curration, as a word of the day app in over 5 currently supported languages, or use it to help teach others colloquial, or formal words in your native language, or ones you're learning. There's no wrong way to use xlingual.<br/>
Save words to your own 'My List' collection, and have the option to make your words 'Global' --or shareable with all other users.<br/>
Having trouble making your own list, or, perhaps you just want to get started by seeing what words other people are sharing: That's what 'Browse' is for --take a look at new words from around the world by browsing other language categories.<br/>
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
**Redux** - state management & token handling<br/>
**Redux-Form** - all form propogation and submissions<br/>
**React-Router-Dom** - for declarative routing.  <br/>

 

#### Back End with *Express.js*, *Node.js*, *Mongoose*/*MongoDB*

**Express.js** - Routing/middleware <br/>
 - passport.js<br/>
 - JWT Token<br/>
 - bcrypt<br/>

**Node.js** - Javascript runtime environment<br/>
**Mongoose/MongoDB** - Data is being stored in a MongoDB environment after being cleaned and prepped via Mongoose schemas/virtuals/models.<br/>

### **`LINKS`** 
[xlingual Client-Side](https://xlingual-client.herokuapp.com/)<br/>
[xlingual Server-Side](https://xlingual-server.herokuapp.com/)<br/>

**Github Repos:** <br/>

front-end: https://github.com/mkcnly/xlingual-client<br/>

back-end: https://github.com/mkcnly/xlingual-server<br/>

### **`Navigating Repos`**<br/>
**Front-end example routes** <br/>
Root-component: src/components/app.js<br/>
Landing-Page: src/components/landingPage.js<br/>
Word-related actions: src/actions/words.js<br/>
Combine-Reducers: src/reducers/index.js<br/>
Individual word's Info-Page: src/components/infoPage.js<br/>

**Back-end example routes** <br/>

*Server-Root*<br/>
/index.js<br/>

*Models*<br/>
User-Model: models/userModel.js<br/>
Word-Model: models/wordModel.js<br/>

*Routes*<br/>
All Authorization passes through: routes/auth.js<br/>
Post to create/salt a 'User': /routes/users.js<br/>
All Private/Global word related routes: /routes/words.js<br/>
- Retrieval of User's private list with jwt auth:  '/my-list'<br/>
- Retrieval of all Users' Global words with jwt auth: '/global'<br/>
- Retrieval of Browse's language capabilities: '/browse/:language'<br/>
- Deletion route for users' owned words: '/delete/:id'<br/>


### **`Concept Wireframing`**

LINK: [xlingual original-wireframe concept](https://wireframepro.mockflow.com/view/M87d3e828d9e44c6ebf4afa53f2c290e61541986606422#/page/D1166cade359834db7ce4860c901cc466)

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