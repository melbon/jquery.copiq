# jquery.copiq
Cross browser copy to clipboard plugin.
## Install
```javascript
<script src="jquery.min.js"></script>
<script src="../jquery.copiq.min.js"></script>
```
or 
```javascript
bower install copiq
```
## Usage
```javascript
$(selector).copiq();
```
## Configuration
#### parent
common wrapper on selector and content element 
```javascript
default: "body"
options: string
```
#### content
container which to be copied, relatively from the parent element
```javascript
default: ""
options: string
```
#### onSuccess
when the copy is successful
```javascript
default: {}
options: function($element, container, selection)
```
#### onError
when the copy is **not** successful
```javascript
default: {}
options: function($element, container, selection)
```
## Demo
<a href="http://codepen.io/mel/full/VzKKjz" target="_blank">codepen.io/mel/full/VzKKjz</a>
## License
@author Mario Vidov <br />
@url <a href="http://vidov.it" target="_blank">www.vidov.it</a> <br />
@twitter  <a href="http://twitter.com/MarioVidov" target="_blank">MarioVidov</a> <br />
MIT license
