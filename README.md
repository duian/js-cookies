# cookies
[![NPM Version][npm-image]][npm-url]

## how
```
npm install cookies
```
如果需要编译之后的版本
```
npm run build
```

封装document.cookie的一些简单操作，提供类似localstorage的API供调用。
```javascript
import cookies from 'cookies';

cookies.setItem('foo', 'bar');
cookies.getItem('foo');
// bar
cookies.hasItem('foo');
// true
cookies.keys()
// ['foo']
cookie.removeItem('foo');
// ''
```
// Todo
test

## License
[MIT](LICESE)
[npm-image]: https://img.shields.io/npm/v/cookie.svg
[npm-url]: https://npmjs.org/package/cookie
