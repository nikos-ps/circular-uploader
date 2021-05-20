# WeTransfer spinner clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Working [demo](https://nikos-ps.github.io/circular-uploader/).

## Description

Using CSS-based animations which are typically handled on the compositor thread, separated from the main js thread, resulting in smoother animations.

For the spinner implementation, SVG <circle> element is used, as it is a perfect fit. One <circle> element is used for creating the background of the spinner
and one is animating in the foreground.
