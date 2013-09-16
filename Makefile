## Simple project make file that automates some development tasks.

## Our LessCSS compiler
LESSCSS=./node_modules/.bin/lessc

## Source and targets
CSS=./css/buttons.css
CSS_MIN=./css/buttons.min.css
DEMO=./demo/css/buttons.css

.PHONY: help all setup

## Helper target that displays some information.
help:
	@echo "\n Hi, I'm make! I'll make things for you.\n"
	@echo " --> 'make setup' will help you install the tools you need for development."
	@echo " --> 'make all' will build the minified CSS file. Isn't that cool."
	@echo "\n Bye, happy hacking!\n"

## Setup target, helping out with the installation of some tools.
setup:
	@echo " Let's see if you have NodeJS and npm installed?"
	@which npm || (echo " Ouch, too bad. Start by installing that first please."; exit 1)
	@echo " Oh, great. So we'll install lesscss now, since it's required."
	@npm install less
	@echo " Good, all done. Happy hacking!"

## Main target, minify and build the CSS
all: ${CSS_MIN} ${DEMO} ${DEMO_MIN}

## Minify the CSS source file
${CSS_MIN}: ${CSS}
	@${LESSCSS} --yui-compress $< $@

## Copy the CSS source to the demo
${DEMO}: ${CSS}
	@cp $< $@
