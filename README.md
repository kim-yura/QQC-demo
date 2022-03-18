# Quiet Queers Craftalong

The Quiet Queers Craftalong, or QQC, is an annual Pride event hosted through my Instagram account, [knitboop](https://www.instagram.com/knitboop/). Started in 2019, this annual event aims to address issues of rainbow-washing and inaccessibility common in typical Pride events by giving Queer crafters an allies a (virtual) place to come together, and support other queer designers and indie dyers. As a disabled Queer maker myself, organizing this event on an annual basis has given me the opportunity to celebrate my identity in a way that brings me joy.

After completing my coding bootcamp, I decided to use my new-found coding skills to design and create an intuitive database and website to facilitate the event's coordination! In previous years, organization took place in the form of Wix websites, Google Forms, and rogue Excel spreadsheets. By creating this website, I hope to have created a tool that is not only easy for event participants to navigate through, but also can be easily reused for future events.

[Demo Site](https://qqc-demo.herokuapp.com/)

<br/><br/>

# Technologies Used

The QQC webpage is built on a React / Redux frontend, a Python / Flask backend, and a PostgreSQL database. Additionally, AWS S3 is implemented for image uploads.

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height=40 />  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height=40/>  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" height=40 />
<br/><br/>

# How to Get Started

1. Clone this repository
   ```bash
   git clone https://github.com/kim-yura/QQC-demo.git
   ```

2. Install dependencies in the root directory

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. `CD` into the `/react-app` directory and install dependencies

   ```bash
   npm install
   ```

4. Create a **.env** file based on the example with proper settings for your
   development environment, including an AWS S3 account for image uploads

5. Setup a PostgreSQL user based on your **.env** file

6. Setup a PostgreSQL database based on your **.env** file

7. Start your shell, migrate your database, seed your database, and run the flask app

   ```bash
   pipenv shell
   flask db upgrade
   flask seed all
   flask run
   ```

8. In a new terminal, `CD` into `/react-app` and run the React app

   ```bash
   npm start
   ```
<br></br>

# Features

## Directory (Full CRUD)
Makers are the heart of QQC! Whether they are pattern designers or indie yarn dyers, participation in this event centers around celebrating their craft. To that end, the Directory tab allows users to easily browse through the various makers who have opted in to participating in this event. For ease of use, all links provided by individual makers are included in their listings.

Both the Demo user and Admin users have access to add new makers, edit existing makers, and delete existing makers.

## Directory Search
The search bar on the left of the Directory page makes it simple for users to filter search results. Users may search for maker names, an inclusive search for yarn, fiber, notions, knitting patterns, crochet patterns, and embroidery pattern, as well as country (as shipping physical goods can sometimes be a limitation). As QQC grows to encompass new and different crafts, I anticipate this search feature to expand as well.
