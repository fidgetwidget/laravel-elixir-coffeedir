Laravel Elixir CoffeeDir
=========================

Coffee complication that maintains whole directory and file structure


## Install

```
npm install --save-dev laravel-elixir-coffeedir
```

## Usage

method: coffeedir

arguments: source, destination, options

eg:
```.coffeedir('some/folders/to/compile/**/*.coffee', 'where/you/want/it/to/go/')```

**source** is relative to /resources/coffee and defaults to <config.assetsDir>coffee/\*\*/\*.coffee

**desination** is relative to / and defaults <config.jsOutput>

**options** are passed directly to the gulp-coffee task
