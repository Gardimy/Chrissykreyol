<a name="readme-top"></a>

<div align="center">
  <br/>
  <h1><b>Chryssy Kreyol</b></h1><a name="about-project"></a>
</div>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖🚗 Esport Gaming Center App ](#-luxury-speedsters-app-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [🎫 Kanban Board ](#-kanban-board-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)

# 📖🚗 Esport Gaming Center App <a name="about-project"></a>
This project involves developing an eSports reservation system with two distinct parts: the Backend, developed using Ruby on Rails, and the Frontend, built with React. This system aims to cater to eSports players, allowing them to reserve games, manage reservations, and access a catalog of available games.
 Click on the link[https://github.com/cancelei/EsportGamingCenter_frontend] to navigate to the backend of our APP.
## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> List of technologies used for this project

<details>
  <summary>BackEnd</summary>
  <ul>
    <li><a href="https://rubyonrails.org">Ruby on Rails</a></li>
    <li><a href="https://stimulus.hotwired.dev/">Stimulus</a></li>
    <li><a href="https://rspec.info/">Rspec</a></li>
  </ul>
</details>

<details>
  <summary>Front-end/View</summary>
  <ul>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://axios-http.com/es/docs/intro">Axios</a></li>
    <li><a href="https://tailwindcss.com/docs/guides/ruby-on-rails">Tailwind CSS</a></li>
  </ul>
</details>

<details>
  <summary>Front-end/Store management</summary>
  <ul>
    <li><a href="https://react-redux.js.org/">React-redux</a></li>
  </ul>
</details>

<details>
  <summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Create and Remove Games**
- **Create Reservations**
- **Full stack webpage**
- **Can see all the list of reservation of current user**
- **Details of every game in db**
- **Log in and Sign up feature**


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>

[Under Construction](TBA) 💻📲

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎫 Kanban Board <a name="kanban-board"></a>

- [Link to Kanban Board.](https://github.com/users/cancelei/projects/7)
- [Initial state of the Kanban Board.](https://github.com/cancelei/EsportGamingCenter_backend/assets/45726631/17119158-dc80-416e-a44a-8fc5b4b205c3)
- *We are 5 members in our Team.*

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

you need to install ruby 3.2.2 using the prefer tool, example: 
- [rvm](https://rvm.io/)
- [rbenv](https://github.com/rbenv/rbenv)
- [asdf-vm](https://asdf-vm.com/)

- Browser (Google Chrome, Mozilla Firefox, Safari or any other browser)

### Setup

Clone this repository to your desired folder:


```sh
  cd my-folder
  git clone https://github.com/cancelei/EsportGamingCenter_backend.git
```

### Install

Install this project with:


```sh
  cd EsportGamingCenter_backend
  bundle install
  npm install
```

### Usage

To run the project, execute the following command:

```sh
./bin/dev
```
**Note:** If there are any errors consider adding your necesary username and password in `database.yml` for setting up your local enviroment and use the following comand:

```sh
rails db:drop db:create db:migrate
./bin/dev
```
Then, you have to create in the root of the project a .env file: <br>


![Alt text](image.png)

, inside of that file, you must put the following code: <br>

DB_USER = 'postgress_database_user'         **Note:** this it has to be as string '' <br>
DB_PSW = 'postgress_database_user_password' **Note:** this it has to be as string '' <br>
DB_PORT = your_postgress_port               **Note:** this it has to be as an integer <br>
DB_NAME_DEV = 'name_of_your_DB'             **Note:** this it has to be as string '' <br>
DB_NAME_TEST ='name_of_your_DB_test'        **Note:** this it has to be as string '' <br>

**Example:** <br>

DB_USER = 'luis' <br>
DB_PSW = 'luis123' <br>
DB_PORT = 5432 <br>
DB_NAME_DEV = 'gaming' <br>
DB_NAME_TEST ='gaming_test' <br>


![Alt text](image-1.png)




### Run tests

To run tests, run the following command:

```sh
rake rswag:specs:swaggerize
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👨🏼‍🚀 **Juan Diego Guerra (JD)** 👽
- GitHub: [@JuanDiegoGuerra](https://github.com/JuanDiegoGuerra)
- Twitter: [@jdxelric147](https://twitter.com/jdxelric147)
- LinkedIn: [Juan Guerra](https://www.linkedin.com/in/juan-guerra-65076b1ba/)
  
👤 **Gardimy Charles** 🐱‍👤
- GitHub: [@Gardimy](https://github.com/Gardimy)
- Twitter: [@gardyelontiga45](https://twitter.com/gardyelontiga45)
- LinkedIn: [Gardimy charles](https://www.linkedin.com/in/gardimycharles/)

👤 **Luis Emilio Rojas Rojas**

- [GitHub](https://github.com/lerfast)
- [Twitter](https://twitter.com/lerfast)
- [LinkedIn](https://www.linkedin.com/in/luis-emilio-rojas-rojas-6ba90a8a/)

👨🏼‍🚀 **Abel Lavieri** 🧙🏼‍♂️

- [GitHub](https://github.com/alvp01)
- [Twitter](https://twitter.com/alvp01)
- [LinkedIn](https://www.linkedin.com/in/abel-lavieri)

👨🏼‍🚀 **Glauber Bannwart** 🦸🏼‍♂️

- GitHub: [@cancelei](https://github.com/cancelei)
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Improve UI**
- [ ] **Add more functionalities**
- [ ] **Add more details on reservation list**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/cancelei/EsportGamingCenter_backend/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

If you like this project,please give it a ⭐️!


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

We would like to thank Microverse for giving us the opportunity to learn and grow as developers and also We like to thank our family, they are all our support. 🌟

> Original design idea by [Murat Korkmaz on Behance.](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>

- **Do I need to install any program before running this project?**

  - [ ] **Yes, you need to install Ruby** 
  
  <br>

- **Can I use this project for my own purposes?**

  - [ ] **Yes, you can.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
