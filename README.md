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

**source** default is <config.assetsDir>coffee/\*\*/\*.coffee

**desination** default is <config.jsOutput>

**options** are passed directly to the gulp-coffee task
