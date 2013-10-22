# [Kanso - Semantic Flat Buttons](http://www.kolszewski.com/kanso)
Set of semantic flat buttons written in CSS and HTML. SASS and LESS source code available. 

Kanso (簡素), in Japanese aesthetics, means simplicity or elimination of clutter. Things are expressed in a plain, simple, natural manner. Reminds us to think not in terms of decoration but in terms of clarity, a kind of clarity that may be achieved through omission or exclusion of the non-essential. 

[Live demo](http://www.kolszewski.com/kanso)

Support: IE8+ and modern browsers

## Usage
**Anchor buttons**
```html
<a class="button is-default">Default</a>
<a class="button is-primary">Primary</a>
<a class="button is-secondary">Secondary</a>
<a class="button is-success">Success</a>
<a class="button is-danger">Danger</a>
<a class="button is-link">Link</a>
```
**Form buttons**
```html
<input type="submit" class="button is-default" value="Submit">
<input type="button" class="button is-default" value="Button">
<input type="reset" class="button is-default" value="Reset">
<button class="button is-default">Button</button>
```
**Disabled buttons**
```html
<a class="button is-default is-disabled">Disabled</a>
```
**Icon buttons - (Font Awesome Icons)**
```html
<a class="button is-default"><i class="icon icon-search"></i></a>
```
**Icon buttons with text**
```html
<a class="button is-default has-icon-spacing"><i class="icon icon-search"></i> Search</a>
```
**Button group**
```html
<div class="button-group-row">
  <div class="button-group pull-left">
    <a class="button is-success has-icon-spacing"><i class="icon-ok"></i> New Email</a>
  </div><!-- /.button-group -->
  <div class="button-group pull-left">
    <a class="button is-default">Forward</a>
    <a class="button is-default">Archive</a>
    <a class="button is-default">Move</a>
  </div><!-- /.button-group -->
  <div class="button-group pull-left">
    <a class="button is-danger">Delete</a>
  </div><!-- /.button-group -->
</div><!-- /.button-group-row -->
```
## License & credits
The [MIT License](https://github.com/KrisOlszewski/Kanso/blob/master/LICENSE.md) (MIT).

Font Awesome Icons by [Dave Gandy](http://fontawesome.io/).
