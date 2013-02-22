## About

Zen Form is a jQuery based plugin with which you can easily add a distraction free mode for your forms. It's much easier to wirte posts, comments and messages this way.

## Demo

Please go [here][1] to view a sample

## Usage

Apply your custom class to `form` or an `input`, `textarea`, `select`. Here're some samples:

**HTML:** 

	<form action="/" class="zen-mode">
		<label for="input:name">Name:</label>
		<input type="text" id="input:name" name="name" data-label="Type your name here...">
		<label for="input:message">Message:</label>
		<input type="text" id="input:message" name="message" data-label="And your message...">
	</form>

	<form action="/">
		<label for="input:message">Message:</label>
		<input type="text" id="input:message" name="message" class="zen-mode" data-label="Type your message here...">
	</form>

**JavaScript:** 

	$('.zen-mode').zenForm();

## Settings

<dl>
	<dt>
		<span>trigger</span> <code>'.go-zen'</code>
	</dt>
	
	<dd>
		<p>
			Element with this selector will open zen mode
		</p>
	</dd>
	
	<dt>
		<span>theme</span> <code>[dark, light]</code>
	</dt>
	
	<dd>
		<p>
			Default theme state
		</p>
	</dd>
	
	<dt>
		<span>data-label</span>
	</dt>
	
	<dd>
		<p>
			It's a html attribute you can add for an input, textarea or select. This will be used as label text.
		</p>
	</dd>
</dl>

## Events

<ul>
	<li>
		<span>zf-initialize</span> <code>function(event)</code>
	</li>
	<li>
		<span>zf-initialized</span> <code>function(event, Environment)</code>
	</li>
	<li>
		<span>zf-destroy</span> <code>function(event, Environment)</code>
	</li>
	<li>
		<span>zf-destroyed</span> <code>function(event)</code>
	</li>
</ul>

### Usage

	$('.zen-form').on('zf-initialized', function(event, Environment) {
		console.log(Environment)
	});

## Commands

<dl>
	<dt>
		<span>init</span>
	</dt>
	
	<dd>
		<p>
			Trigger zen mode
		</p>
	</dd>
	
	<dt>
		<span>destroy</span>
	</dt>
	
	<dd>
		<p>
			Close zen mode
		</p>
	</dd>
</dl>

### Usage

	$('.zen-form').trigger('init');

## License

**MIT Licensing**

Copyright (c) 2013 Kasper Mikiewicz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 [1]: http://idered.github.com/zen-form/demo
