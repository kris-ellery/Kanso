# [Kanso - Buttons Component](http://www.kolszewski.com/kanso)
Set of flat buttons written in CSS (Sass) and HTML. Font Awesome compatible.

> *Kanso (簡素)*, in Japanese aesthetics, means simplicity or elimination of clutter. Things are expressed in a plain, simple, natural manner. Reminds us to think not in terms of decoration but in terms of clarity, a kind of clarity that may be achieved through omission or exclusion of the non-essential.

[Live demo](http://www.kolszewski.com/kanso)

## Usage

**Base**
```html
<a role="button" class="Button">Default</a>
<a role="button" class="Button Button--primary">Primary</a>
<a role="button" class="Button Button--secondary">Secondary</a>
<a role="button" class="Button Button--outline">Outline</a>
<a role="button" class="Button Button--link">Link</a>
<a role="button" class="Button Button--info">Info</a>
<a role="button" class="Button Button--success">Success</a>
<a role="button" class="Button Button--warning">Warning</a>
<a role="button" class="Button Button--error">Error</a>
```

**Small**
```html
<a role="button" class="Button Button--small">Default</a>
<a role="button" class="Button Button--small Button--primary">Primary</a>
<a role="button" class="Button Button--small Button--secondary">Secondary</a>
<a role="button" class="Button Button--small Button--outline">Outline</a>
<a role="button" class="Button Button--small Button--link">Link</a>
```

**Large**
```html
<a role="button" class="Button Button--large">Default</a>
<a role="button" class="Button Button--large Button--primary">Primary</a>
<a role="button" class="Button Button--large Button--secondary">Secondary</a>
<a role="button" class="Button Button--large Button--outline">Outline</a>
<a role="button" class="Button Button--large Button--link">Link</a>
```

**Form**
```html
<input type="submit" role="button" class="Button Button--primary" value="type='submit'">
<input type="Button" role="button" class="Button Button--secondary" value="type='button'">
<input type="reset" role="button" class="Button Button--error" value="type='reset'">
<button type="button" role="button" class="Button Button--outline">button</button>
```

**Disabled**
```html
<a role="button" class="Button is-disabled">Default</a>
<a role="button" class="Button Button--primary is-disabled">Primary</a>
<a role="button" class="Button Button--secondary is-disabled">Secondary</a>
<a role="button" class="Button Button--outline is-disabled">Outline</a>
<a role="button" class="Button Button--link is-disabled">Link</a>
```

**Button + [Font Awesome](http://fontawesome.io/)**
```html
<a role="button" class="Button"><i class="fa fa-fw fa-cloud"></i> Cloud</a>
<a role="button" class="Button"><i class="fa fa-fw fa-cog"></i> Cog</a>
<a role="button" class="Button"><i class="fa fa-fw fa-database"></i> Database</a>
<a role="button" class="Button"><i class="fa fa-fw fa-heart"></i> Heart</a>
<a role="button" class="Button"><i class="fa fa-fw fa-search"></i> Search</a>
<a role="button" class="Button"><i class="fa fa-fw fa-inbox"></i> Inbox</a>
```

**Button w/out text + [Font Awesome](http://fontawesome.io/)**
```html
<a role="button" class="Button"><i class="fa fa-fw fa-cloud"></i></a>
<a role="button" class="Button"><i class="fa fa-fw fa-cog"></i></a>
<a role="button" class="Button"><i class="fa fa-fw fa-database"></i></a>
<a role="button" class="Button"><i class="fa fa-fw fa-heart"></i></a>
<a role="button" class="Button"><i class="fa fa-fw fa-search"></i></a>
<a role="button" class="Button"><i class="fa fa-fw fa-inbox"></i></a>
```

**Horizontal Group + Button**
```html
<div class="ButtonGroup ButtonGroup--horizontal">
  <div class="ButtonGroup-item">
    <a role="button" class="Button">All</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline">Published</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline">Unpublished</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline">Drafts</a>
  </div>
</div>
```

**Horizontal Group + Small Button + [Font Awesome](http://fontawesome.io/)**
```html
<div class="ButtonGroup ButtonGroup--horizontal">
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--small Button--success"><i class="fa fa-fw fa-check"></i> New Email</a>
  </div>
</div>
<div class="ButtonGroup ButtonGroup--horizontal">
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--small Button--outline"><i class="fa fa-fw fa-mail-forward"></i> Forward</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--small Button--outline"><i class="fa fa-fw fa-archive"></i> Archive</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--small Button--outline"><i class="fa fa-fw fa-folder"></i> Move</a>
  </div>
</div>
<div class="ButtonGroup ButtonGroup--horizontal">
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--small Button--error"><i class="fa fa-fw fa-trash"></i> Delete</a>
  </div>
</div>
```

**Horizontal Group + Button w/out text + [Font Awesome](http://fontawesome.io/)**
```html
<div class="ButtonGroup ButtonGroup--horizontal">
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline"><i class="fa fa-fw fa-align-left"></i></a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline"><i class="fa fa-fw fa-align-justify"></i></a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline"><i class="fa fa-fw fa-align-right"></i></a>
  </div>
</div>
<div class="ButtonGroup ButtonGroup--horizontal">
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline"><i class="fa fa-fw fa-bold"></i></a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline"><i class="fa fa-fw fa-italic"></i></a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline"><i class="fa fa-fw fa-underline"></i></a>
  </div>
</div>
```

**Vertical Group + Button**
```html
<div class="ButtonGroup ButtonGroup--vertical">
  <div class="ButtonGroup-item">
    <a role="button" class="Button">All</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline">Published</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline">Unpublished</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline">Drafts</a>
  </div>
</div>
```

**Vertical Group + Small Button + [Font Awesome](http://fontawesome.io/)**
```html
<div class="ButtonGroup ButtonGroup--vertical">
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--small Button--outline"><i class="fa fa-fw fa-euro"></i> EUR</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--small Button--outline"><i class="fa fa-fw fa-gbp"></i> GBP</a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--small Button--outline"><i class="fa fa-fw fa-dollar"></i> USD</a>
  </div>
</div>
```

**Vertical Group + Button w/out text + [Font Awesome](http://fontawesome.io/)**
```html
<div class="ButtonGroup ButtonGroup--vertical">
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline"><i class="fa fa-fw fa-bar-chart"></i></a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline"><i class="fa fa-fw fa-pie-chart"></i></a>
  </div>
  <div class="ButtonGroup-item">
    <a role="button" class="Button Button--outline"><i class="fa fa-fw fa-line-chart"></i></a>
  </div>
</div>
```

## Support
IE8+

## License & credits
The [MIT License](https://github.com/KrisOlszewski/Kanso/blob/master/LICENSE.md) (MIT).

Font Awesome by [Dave Gandy](http://fontawesome.io/).
