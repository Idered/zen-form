# Zen Form

Zen Form plugin provides you with distraction mode that you can add to your forms or single inputs, textareas.

## Docs

You can add zen mode for all fields in form or single one. At the moment supported are only text inputs and textareas.

### Add zen for all supported elements in form

**HTML**
```
<form class="zen-mode">
	<a href="#" class="go-zen">Open zen mode</a>
	<input type="text" name="name" placeholder="Type your name here.">
	<textarea name="bio" placeholder="Write your bio here..."></textarea>
	<input type="submit" name="submit" value="Send">
</form>
```

.go-zen class is the default class that opens zen mode.

**JS**
```
$('.zen-mode').zenForm();
```

### Add zen mode for single element

Bellow you can see how to change theme and use custom element as a trigger that opens zen mode.

**HTML**
```
<form>
	<a href="#" class="open-zen-mode">Open zen mode</a>
	<input type="text" name="name" placeholder="Type your name here.">
	<textarea name="bio" placeholder="Write your bio here..." class="zen-mode"></textarea>
	<input type="submit" name="submit" value="Send">
</form>
```

**JS**
```
$('.zen-mode').zenForm({
	trigger: '.open-zen-mode',
	theme: 'light'
});
```

## Settings

* trigger ('.go-zen') - element the opens zen mode on click
* theme   ('dark')

##Commands

Using commands you can init or destroy Zen Form environment.

* init: `$('.zen-form').trigger('init');`
* destroy: `$('.zen-form').trigger('destroy');`

## Events

There're a few basic callback:

* zf-initialize: `function(event)`
* zf-initialized: `function(event, Environment)`
* zf-destroy: `function(event, Environment)`
* zf-destroyed: `function(event)`

Sample usage:

	$('.zen-form').on('zf-initialized', function(event, Environment) {
		console.log(Environment)
	});

Want more? Add them :)


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

**MIT Licensing**

Copyright (c) 2013 Kasper Mikiewicz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.