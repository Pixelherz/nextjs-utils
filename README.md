# nextjs-utils

Some utilities we frequently use for projects built with [Next.js](https://github.com/zeit/next.js/).


## Getting Started

### Installing

Install using npm:

```
npm install --save @pixelherz/nextjs-utils
```

For usage examples see section [Utilities](#utilities) below. 


## Utilities

### setHtmlLang

Set the `lang` attribute's value of the `html` element. Used in [Next.js](https://github.com/zeit/next.js/) projects as the `html` element is rendered on the server and is not mutable in the client.

```js
import { setHtmlLang } from '@pixelherz/nextjs-utils'
setHtmlLang('en')
```


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Pixelherz/nextjs-utils/tags). 


## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
