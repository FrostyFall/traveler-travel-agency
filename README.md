## Project Description
[Traveler](https://traveler-travel-agency.netlify.app) is a travel agency which specializes in booking world famous tours for clients from around the Globe.
Clients can find the tour, look through images, description, testimonials and book picked tour. (this is NOT real booking experience, but an illusion of it).
### Technical Description
1. Client application makes HTTP requests to remote server(RESTful API, hosted on Heroku) and gets access to things like tour locations, descriptions, reviews and etc. and to images.<br/>
2. Server, upon receiving a request, makes queries to the database via methods like findOne(), find() or aggregation pipeline.<br/>
3. After proccessing data server returns json-formatted data to the client, and then client renders required components into the UI.<br/>
p.s. Honestly I don't even know why I've typed such obvious things 🤔 ... but anyway...<br/>

The whole purpose of this project was to create an app that includes back-end stuff.<br/>
p.s.s. I could've simply replace everything above with this one sentence. 🙁<br/>
#### Technologies that were used
- HTML
- SCSS
- JavaScript
- React
