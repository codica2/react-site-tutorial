<h1 align="center">React Site Tutorial</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/react-site-tutorial" target="_blank"><img src="https://img.shields.io/badge/Packages-NPM-%23CB3837.svg?logo=npm&link=https://www.npmjs.com"></a>
  <a href="https://webpack.js.org/" target="_blank"><img src="https://img.shields.io/badge/Bundler-Webpack-%238DD6F9.svg?logo=Webpack"></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/View-React-blue.svg?logo=React"></a>
</p>

<p align="center">
 <img width="800px" src="readme.gif" >
</p>

## Description

Is easy, animated, a lot of functionality, flexible, step tutorial for your site.

## Install

```bash
npm install --save react-site-tutorial
```

## Install example

1. In root folder `npm install`
2. In example folder `npm install`
3. In root folder `npm start`
4. In example folder `npm start`

## Connect tutorial to App

```jsx
import React from "react";
import ReactDOM from "react-dom";
import SiteTutorial from "react-site-tutorial";

ReactDOM.render(
  <SiteTutorial>
    <App />
  </SiteTutorial>,
  document.getElementById("root")
);
```

## Tutorial Block

It's blocks which will show in your tutorial.

```jsx
import React, { Component } from "react";
import { TutorialBlock } from "react-site-tutorial";

class App extends Component {
  render() {
    return (
      <div>
        <TutorialBlock title="Title 1" text="Text" numTutorial={1} step={1}>
          <div />
        </TutorialBlock>

        <TutorialBlock title="Title 2" text="Text" numTutorial={1} step={2}>
          <div />
        </TutorialBlock>
      </div>
    );
  }
}
```

| Props           | Type         | Required | Description                                                          |
| --------------- | ------------ | -------- | -------------------------------------------------------------------- |
| `numTutorial`   | **number**   | `yes`    | Number tutorial.  You can create more then one tutorial in your App. |
| `step`          | **number**   | `yes`    | Step indicates the order of tutorial.                                |
| `title`         | **string**   | `no`     | This props will show in your Popup like Title. (see bottom)          |
| `text`          | **string**   | `no`     | This props will show in your Popup like Text. (see bottom)           |
| `onFinish`      | **function** | `no`     | Callback after finish animation step.                                |
| `onAsyncFinish` | **function** | `no`     | See bottom.                                                          |


## Tutorial Start

The button that starts the tutorial.

```jsx
import React from "react";
import { TutorialStart } from "react-site-tutorial";

const Component = () =>  (
  <TutorialStart numTutorial={1}>FIRST TEST</TutorialStart>
);
```

| Props         | Type       | Required | Description                                    |
| ------------- | ---------- | -------- | ---------------------------------------------- |
| `numTutorial` | **number** | `yes`    | Property indicates which tutorial will starts. |


## Default Popup

Tutorial has default popup which you can easy styling.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import SiteTutorial from "react-site-tutorial";

ReactDOM.render(
  <SiteTutorial
    defaultPopupParams={{
      color: "#3065ED",
      width: "400px",
      height: "500px"
    }}
  >
    <App />
  </SiteTutorial>,
  document.getElementById("root")
);
```

| Props         | Type       | Description                                    |
| ------------- | ---------- | ---------------------------------------------- |
| `numTutorial` | **object** | Accept `color`, `width`, `hieght`, properties. |


## Custom Popup

You can easily create custom popup. Just add `<SiteTutorial customPopup={true}>` prop and create on one level lower `<SiteTutorial>` your custom popup.

```jsx
import React from "react";

import {
  TutorialPopup,
  TutorialNext,
  TutorialBack,
  TutorialStop,
  TutorialProgressBar,
  TutorialDescription,
  TutorialTitle
} from "react-site-tutorial";

const CustomTutorialPopup = () => (
  <TutorialPopup className="tutorial-popup">
    <h1>This is custom popup!</h1>
    <TutorialTitle className="tutorial-title"/>
    <TutorialDescription className="tutorial-description"/>

    <TutorialNext className="tutorial-button-next">Next</TutorialNext>
    <TutorialBack className="tutorial-button-prev">Prev</TutorialBack>
    <TutorialStop className="tutorial-button-stop">Stop</TutorialStop>

    <TutorialProgressBar showStep color={"red"}/>
  </TutorialPopup>
);

export default CustomTutorialPopup;
```

```jsx
import React from "react";
import ReactDOM from "react-dom";
import SiteTutorial from "react-site-tutorial";

import CustomTutorialPopup from "./path/to/CustomTutorialPopup";

ReactDOM.render(
  <SiteTutorial customPopup={true}>
    <App />

    <CustomTutorialPopup />
  </SiteTutorial>,
  document.getElementById("root")
);
```

| Components              | Props             | Description                                                         |
| ----------------------- | ----------------- | ------------------------------------------------------------------- |
| `<TutorialTitle>`       | `className`, `id` | Here will be `title` which you indicate in `<TutorialBlock>`.       |
| `<TutorialDescription>` | `className`, `id` | Here will be `description` which you indicate in `<TutorialBlock>`. |
| `<TutorialNext>`        | `className`, `id` | This is button which move step forward.                             |
| `<TutorialBack>`        | `className`, `id` | This is button which move step back.                                |
| `<TutorialStop>`        | `className`, `id` | This is button which stop tutorial.                                 |
| `<TutorialProgressBar>` | `className`, `id` | Animated will display the step tutorial. (see bottom)               |


## Tutorial Progress Bar


| Props      | Default value | Type        | Description                         |
| ---------- | ------------- | ----------- | ----------------------------------- |
| `showStep` | `false`       | **boolean** | Show of current step and all steps. |
| `color`    | `red`         | **string**  | Set common color popup.             |

## About Codica

[![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com)

The names and logos for Codica are trademarks of Codica.

We love open source software! See [our other projects](https://github.com/codica2) or [hire us](https://www.codica.com/) to design, develop, and grow your product.
