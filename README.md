"# Project-Management-JEE-React" 

A miniature part of a JEE application that can help planning projects by creating tasks. Frontend is developped using React.

## Table of Contents

- [Description](#description)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Contributing](#contributing)

## Description

        The system works by allowing users to create, update and delete projects
        as well as add tasks to these projects. Project attributes include a
        unique code, description, and start date. Tasks associated with a
        project also have a unique code, description, start date, and end date.
        
## System Architecture
```
├───ProjectManagmentBackend
│   ├───.settings
│   ├───build
│   │   └───classes
│   │       ├───com
│   │       │   └───enit
│   │       │       └───BackManagment
│   │       │           ├───business
│   │       │           │   └───impl
│   │       │           ├───entity
│   │       │           └───webservice
│   │       └───META-INF
│   └───src
│       └───main
│           ├───java
│           │   ├───com
│           │   │   └───enit
│           │   │       └───BackManagment
│           │   │           ├───business
│           │   │           │   └───impl
│           │   │           ├───entity
│           │   │           └───webservice
│           │   └───META-INF
│           └───webapp
│               ├───META-INF
│               └───WEB-INF
│                   └───lib
└───ProjectManagmentFrontend
    ├───public
    │   └───images
    └───src
        └───components
```
## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed
- MySQL database ( I used wamp server and phpmyadmin to manipulate data )
- Wildfly server (version 30.0.1)

### Installation

-Clone the repository to your local machine using git clone command.
-Install the necessary Node.js packages using npm install.

Configuration

  Frontend : 

    Ensure you have Mui (Material UI : React components ) installed using "npm install @mui/material @emotion/react @emotion/styled" command.
  
  Backend :

   Configure Wildfly:

      Download and install Wildfly 30.0.1.
      Configure the necessary settings for datasource, driver and standalone.xml persistence.xml...
    
   Configure MySQL:
  
    Set up a MySQL database and configure the connection settings in the backend as mentioned earlier.
    
Contributing

    If you'd like to contribute, please fork the repository and create a pull request. All contributions are welcome!
