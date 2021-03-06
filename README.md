# clize

### Buy me covfefe ❤️
```
BTC     bc1qjqzkrfupcrgtzpeu0pmut24vq8tfzs9rqe6458
ETH     0x799b3b5520525CDd95d1D5C7Ba1a2Ee6037B1bFE
ADA     addr1q8mz3z7cw4jz9dacvpz6dpw2c6xke6nv8vk6rfnt7mkaat8vgnu796g5vrarn4pjgpdqkare9zryx645e25wcae8636q97typg
XRP     r3Bpcyp8zVNkaDzpppdRTuSXSvxAUJXAVj
LTC     ltc1qpja2nr6x9nz3q3ya3ec6ec5hxvm8dz52urn39z
BCH     1NAteBJF7wKw8BdzLJ6YE65ja1ZAHf68jf
DOGE    DL4VNBx6EGuPcgnJrfgxok9tTvcbVGKx3R
XMR     89S6qYdMJyZZ8ddKtFqTzGhuDZxJkNcmL9L6KzTSw7AeQos1uku2GBhBaHLUYtgv4TQRRQuNF4FixAu6geKC2r25NyWZj2Q
DASH    XtffD9gZFDKWWpabMyAi8sF9EeDREH5dUy
DCR     DsSAqeDekTCvbd84GkAofHyutrFrFDX1EnD
ZEC     t1P336iRRMM6Yu2wTzXJmjm6p4RgNAQkgsM
STRAX   SVfFcCZtQ8yMSMxc2K8xzFr4psHpGpnKNT 
```

run any exported object directly from the CLI
- relative/absolute file path
- named module support
- as many arguments as needed
- automatic await of promise 😎

## Install
```bash
$ npm i -g clize
$ clize ~/Desktop/foo.js 123 \'hello\' # ...
```

## Usage
Let's say we have a `foo.js` file in `~/Desktop/foo.js`. This file looks like this :
```javascript
module.exports = (a, b) => {
  return a + b
}
```
This is great and all, we require it in out other files and use the return value.
However I often find myself in need of a module that can be required, but also that can be
executed directly from the CLI and still work.

Now with **clize** you can directly call such modules. Here is how it looks like :
```bash
$ clize ~/Desktop/foo.js 1 2
3
```

That's it.

### Module file path
You can pass either :
- relative file path (`../../foo/bar.js`)
- absolute file path (`/Users/user/foo/bar.js`)

### Module name
By default, only the default export is required and executed.
If you use named export, you can specificy the `-m` (module) option along with the module name.
```bash
$ clize ~/Desktop/foo.js -m coolModule 1 2
```
Where `foo.js` contains `exports.coolModule = ...`

### Module arguments
You can pass as many arguments as you wish to your module. To keep the code clean
and the CLI easy to use, you will need to escape **variable** delimitation characters.
What this means :
- `integer` -> `4` -> no delimitation, simply write `4`
- `string` -> `'hello'` -> has ' as delimitation, your shell will strip these characters if not escaped, so write `\'foo\'`
Same goes for any variable delimitation character that might be messed with by your shell.
```bash
$ clize ~/Desktop/foo.js 1 2
3
$ clize ~/Desktop/foo.js 1 \'2\' # js auto ineference
12
$ clize ~/Desktop/foo.js \'1\' \'2\'
12
```

## How it Works
To be completed later, it's very easy, watch in `index.ts` there's only like 20 lines of code.
