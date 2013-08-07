# [Kanso - Semantic Flat Buttons](http://www.kolszewski.com/kanso)
Set of semantic flat buttons written in LESS CSS preprocessor and HTML.

Kanso (簡素), in Japanese aesthetics, means simplicity or elimination of clutter. Things are expressed in a plain, simple, natural manner. Reminds us to think not in terms of decoration but in terms of clarity, a kind of clarity that may be achieved through omission or exclusion of the non-essential. 

[Live demo](http://www.kolszewski.com/kanso)

Support: IE8+ and modern browsers

## Usage
**Anchor buttons**
```html
<a class="button">Default</a>
<a class="button is-primary">Primary</a>
<a class="button is-secondary">Secondary</a>
<a class="button is-success">Success</a>
<a class="button is-danger">Danger</a>
<a class="button is-link">Link</a>
```
**Form buttons**
```html
<input type="submit" class="button" value="Submit">
<input type="button" class="button" value="Button">
<input type="reset" class="button" value="Reset">
<button class="button">Button</button>
```
**Disabled buttons**
```html
<a class="button is-disabled">Disabled</a>
```
**Embossed buttons**
```html
<a class="button is-embossed">Embossed</a>
```
**Icon buttons - HiDPI ready**
```html
<a class="button has-icon"><i class="icon-search">Search</i></a>
```
**Icon buttons with text**
```html
<a class="button has-icon has-text"><i class="icon-search"></i>Search</a>
```
**Button group**
```html
<div class="button-group-row">
  <div class="button-group">
    <a class="button is-success has-icon has-text"><i class="icon-check"></i>New Email</a>
  </div><!-- /.button-group -->
  <div class="button-group">
    <a class="button">Forward</a>
    <a class="button">Archive</a>
    <a class="button">Move</a>
  </div><!-- /.button-group -->
  <div class="button-group">
    <a class="button is-danger">Delete</a>
  </div><!-- /.button-group -->
</div><!-- /.button-group-row -->
```
## License & credits
[MIT](https://github.com/KrisOlszewski/Kanso/blob/master/LICENSE.md)

Metrize Icons by [Alessio Atzeni](http://www.alessioatzeni.com/).
