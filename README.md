## Getting Started
To get you started you can simply clone profile-react repository and install the dependencies:

### Prerequisites
You need git to clone profile-react repository. You can get git from [http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize profile-react. You must have node.js and its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone profile-react

Clone the profile-react repository using [git](https://git-scm.com/):
```
git clone https://github.com/sandim27/profile-react.git
cd profile-react
```
### Install Dependencies

To install local dependencies we can simply do:
```
npm install

```
To run environment for development:
```
npm run start

```
To build environment for prodaction:
```
npm run build

```
The build folder is ready to be deployed.
You may also serve it locally with a static server:

```
  npm install -g pushstate-server
  pushstate-server build
  start http://localhost:9000