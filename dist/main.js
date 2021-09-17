module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ipld/car/cjs/car-browser.js":
/*!***************************************************!*\
  !*** ./node_modules/@ipld/car/cjs/car-browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var readerBrowser = __webpack_require__(/*! ./lib/reader-browser.js */ "./node_modules/@ipld/car/cjs/lib/reader-browser.js");
var indexer = __webpack_require__(/*! ./lib/indexer.js */ "./node_modules/@ipld/car/cjs/lib/indexer.js");
var iterator = __webpack_require__(/*! ./lib/iterator.js */ "./node_modules/@ipld/car/cjs/lib/iterator.js");
var writerBrowser = __webpack_require__(/*! ./lib/writer-browser.js */ "./node_modules/@ipld/car/cjs/lib/writer-browser.js");
var indexedReaderBrowser = __webpack_require__(/*! ./lib/indexed-reader-browser.js */ "./node_modules/@ipld/car/cjs/lib/indexed-reader-browser.js");



exports.CarReader = readerBrowser.CarReader;
exports.CarIndexer = indexer.CarIndexer;
exports.CarBlockIterator = iterator.CarBlockIterator;
exports.CarCIDIterator = iterator.CarCIDIterator;
exports.CarWriter = writerBrowser.CarWriter;
exports.CarIndexedReader = indexedReaderBrowser.CarIndexedReader;


/***/ }),

/***/ "./node_modules/@ipld/car/cjs/lib/decoder.js":
/*!***************************************************!*\
  !*** ./node_modules/@ipld/car/cjs/lib/decoder.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var varint = __webpack_require__(/*! varint */ "./node_modules/varint/index.js");
var cid = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/cjs/src/cid.js");
var Digest = __webpack_require__(/*! multiformats/hashes/digest */ "./node_modules/multiformats/cjs/src/hashes/digest.js");
var dagCbor = __webpack_require__(/*! @ipld/dag-cbor */ "./node_modules/@ipld/dag-cbor/cjs/index.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var varint__default = /*#__PURE__*/_interopDefaultLegacy(varint);
var Digest__namespace = /*#__PURE__*/_interopNamespace(Digest);

const CIDV0_BYTES = {
  SHA2_256: 18,
  LENGTH: 32,
  DAG_PB: 112
};
async function readVarint(reader) {
  const bytes = await reader.upTo(8);
  const i = varint__default['default'].decode(bytes);
  reader.seek(varint__default['default'].decode.bytes);
  return i;
}
async function readHeader(reader) {
  const length = await readVarint(reader);
  if (length === 0) {
    throw new Error('Invalid CAR header (zero length)');
  }
  const header = await reader.exactly(length);
  reader.seek(length);
  const block = dagCbor.decode(header);
  if (block == null || Array.isArray(block) || typeof block !== 'object') {
    throw new Error('Invalid CAR header format');
  }
  if (block.version !== 1) {
    if (typeof block.version === 'string') {
      throw new Error(`Invalid CAR version: "${ block.version }"`);
    }
    throw new Error(`Invalid CAR version: ${ block.version }`);
  }
  if (!Array.isArray(block.roots)) {
    throw new Error('Invalid CAR header format');
  }
  if (Object.keys(block).filter(p => p !== 'roots' && p !== 'version').length) {
    throw new Error('Invalid CAR header format');
  }
  return block;
}
async function readMultihash(reader) {
  const bytes = await reader.upTo(8);
  varint__default['default'].decode(bytes);
  const codeLength = varint__default['default'].decode.bytes;
  const length = varint__default['default'].decode(bytes.subarray(varint__default['default'].decode.bytes));
  const lengthLength = varint__default['default'].decode.bytes;
  const mhLength = codeLength + lengthLength + length;
  const multihash = await reader.exactly(mhLength);
  reader.seek(mhLength);
  return multihash;
}
async function readCid(reader) {
  const first = await reader.exactly(2);
  if (first[0] === CIDV0_BYTES.SHA2_256 && first[1] === CIDV0_BYTES.LENGTH) {
    const bytes = await reader.exactly(34);
    reader.seek(34);
    const multihash = Digest__namespace.decode(bytes);
    return cid.CID.create(0, CIDV0_BYTES.DAG_PB, multihash);
  }
  const version = await readVarint(reader);
  if (version !== 1) {
    throw new Error(`Unexpected CID version (${ version })`);
  }
  const codec = await readVarint(reader);
  const bytes = await readMultihash(reader);
  const multihash = Digest__namespace.decode(bytes);
  return cid.CID.create(version, codec, multihash);
}
async function readBlockHead(reader) {
  const start = reader.pos;
  let length = await readVarint(reader);
  if (length === 0) {
    throw new Error('Invalid CAR section (zero length)');
  }
  length += reader.pos - start;
  const cid = await readCid(reader);
  const blockLength = length - (reader.pos - start);
  return {
    cid,
    length,
    blockLength
  };
}
async function readBlock(reader) {
  const {cid, blockLength} = await readBlockHead(reader);
  const bytes = await reader.exactly(blockLength);
  reader.seek(blockLength);
  return {
    bytes,
    cid
  };
}
async function readBlockIndex(reader) {
  const offset = reader.pos;
  const {cid, length, blockLength} = await readBlockHead(reader);
  const index = {
    cid,
    length,
    blockLength,
    offset,
    blockOffset: reader.pos
  };
  reader.seek(index.blockLength);
  return index;
}
function createDecoder(reader) {
  const headerPromise = readHeader(reader);
  return {
    header: () => headerPromise,
    async *blocks() {
      await headerPromise;
      while ((await reader.upTo(8)).length > 0) {
        yield await readBlock(reader);
      }
    },
    async *blocksIndex() {
      await headerPromise;
      while ((await reader.upTo(8)).length > 0) {
        yield await readBlockIndex(reader);
      }
    }
  };
}
function bytesReader(bytes) {
  let pos = 0;
  return {
    async upTo(length) {
      return bytes.subarray(pos, pos + Math.min(length, bytes.length - pos));
    },
    async exactly(length) {
      if (length > bytes.length - pos) {
        throw new Error('Unexpected end of data');
      }
      return bytes.subarray(pos, pos + length);
    },
    seek(length) {
      pos += length;
    },
    get pos() {
      return pos;
    }
  };
}
function chunkReader(readChunk) {
  let pos = 0;
  let have = 0;
  let offset = 0;
  let currentChunk = new Uint8Array(0);
  const read = async length => {
    have = currentChunk.length - offset;
    const bufa = [currentChunk.subarray(offset)];
    while (have < length) {
      const chunk = await readChunk();
      if (chunk == null) {
        break;
      }
      if (have < 0) {
        if (chunk.length > have) {
          bufa.push(chunk.subarray(-have));
        }
      } else {
        bufa.push(chunk);
      }
      have += chunk.length;
    }
    currentChunk = new Uint8Array(bufa.reduce((p, c) => p + c.length, 0));
    let off = 0;
    for (const b of bufa) {
      currentChunk.set(b, off);
      off += b.length;
    }
    offset = 0;
  };
  return {
    async upTo(length) {
      if (currentChunk.length - offset < length) {
        await read(length);
      }
      return currentChunk.subarray(offset, offset + Math.min(currentChunk.length - offset, length));
    },
    async exactly(length) {
      if (currentChunk.length - offset < length) {
        await read(length);
      }
      if (currentChunk.length - offset < length) {
        throw new Error('Unexpected end of data');
      }
      return currentChunk.subarray(offset, offset + length);
    },
    seek(length) {
      pos += length;
      offset += length;
    },
    get pos() {
      return pos;
    }
  };
}
function asyncIterableReader(asyncIterable) {
  const iterator = asyncIterable[Symbol.asyncIterator]();
  async function readChunk() {
    const next = await iterator.next();
    if (next.done) {
      return null;
    }
    return next.value;
  }
  return chunkReader(readChunk);
}

exports.asyncIterableReader = asyncIterableReader;
exports.bytesReader = bytesReader;
exports.chunkReader = chunkReader;
exports.createDecoder = createDecoder;
exports.readHeader = readHeader;


/***/ }),

/***/ "./node_modules/@ipld/car/cjs/lib/encoder.js":
/*!***************************************************!*\
  !*** ./node_modules/@ipld/car/cjs/lib/encoder.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var varint = __webpack_require__(/*! varint */ "./node_modules/varint/index.js");
var dagCbor = __webpack_require__(/*! @ipld/dag-cbor */ "./node_modules/@ipld/dag-cbor/cjs/index.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var varint__default = /*#__PURE__*/_interopDefaultLegacy(varint);

function createHeader(roots) {
  const headerBytes = dagCbor.encode({
    version: 1,
    roots
  });
  const varintBytes = varint__default['default'].encode(headerBytes.length);
  const header = new Uint8Array(varintBytes.length + headerBytes.length);
  header.set(varintBytes, 0);
  header.set(headerBytes, varintBytes.length);
  return header;
}
function createEncoder(writer) {
  return {
    async setRoots(roots) {
      const bytes = createHeader(roots);
      await writer.write(bytes);
    },
    async writeBlock(block) {
      const {cid, bytes} = block;
      await writer.write(new Uint8Array(varint__default['default'].encode(cid.bytes.length + bytes.length)));
      await writer.write(cid.bytes);
      if (bytes.length) {
        await writer.write(bytes);
      }
    },
    async close() {
      return writer.end();
    }
  };
}

exports.createEncoder = createEncoder;
exports.createHeader = createHeader;


/***/ }),

/***/ "./node_modules/@ipld/car/cjs/lib/indexed-reader-browser.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ipld/car/cjs/lib/indexed-reader-browser.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

class CarIndexedReader {
  static async fromFile() {
    throw new Error('Unsupported in this environment');
  }
}
const __browser = true;

exports.CarIndexedReader = CarIndexedReader;
exports.__browser = __browser;


/***/ }),

/***/ "./node_modules/@ipld/car/cjs/lib/indexer.js":
/*!***************************************************!*\
  !*** ./node_modules/@ipld/car/cjs/lib/indexer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var decoder = __webpack_require__(/*! ./decoder.js */ "./node_modules/@ipld/car/cjs/lib/decoder.js");

class CarIndexer {
  constructor(version, roots, iterator) {
    this._version = version;
    this._roots = roots;
    this._iterator = iterator;
  }
  get version() {
    return this._version;
  }
  async getRoots() {
    return this._roots;
  }
  [Symbol.asyncIterator]() {
    return this._iterator;
  }
  static async fromBytes(bytes) {
    if (!(bytes instanceof Uint8Array)) {
      throw new TypeError('fromBytes() requires a Uint8Array');
    }
    return decodeIndexerComplete(decoder.bytesReader(bytes));
  }
  static async fromIterable(asyncIterable) {
    if (!asyncIterable || !(typeof asyncIterable[Symbol.asyncIterator] === 'function')) {
      throw new TypeError('fromIterable() requires an async iterable');
    }
    return decodeIndexerComplete(decoder.asyncIterableReader(asyncIterable));
  }
}
async function decodeIndexerComplete(reader) {
  const decoder$1 = decoder.createDecoder(reader);
  const {version, roots} = await decoder$1.header();
  return new CarIndexer(version, roots, decoder$1.blocksIndex());
}

exports.CarIndexer = CarIndexer;


/***/ }),

/***/ "./node_modules/@ipld/car/cjs/lib/iterator-channel.js":
/*!************************************************************!*\
  !*** ./node_modules/@ipld/car/cjs/lib/iterator-channel.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function noop() {
}
function create() {
  const chunkQueue = [];
  let drainer = null;
  let drainerResolver = noop;
  let ended = false;
  let outWait = null;
  let outWaitResolver = noop;
  const makeDrainer = () => {
    if (!drainer) {
      drainer = new Promise(resolve => {
        drainerResolver = () => {
          drainer = null;
          drainerResolver = noop;
          resolve();
        };
      });
    }
    return drainer;
  };
  const writer = {
    write(chunk) {
      chunkQueue.push(chunk);
      const drainer = makeDrainer();
      outWaitResolver();
      return drainer;
    },
    async end() {
      ended = true;
      const drainer = makeDrainer();
      outWaitResolver();
      return drainer;
    }
  };
  const iterator = {
    async next() {
      const chunk = chunkQueue.shift();
      if (chunk) {
        if (chunkQueue.length === 0) {
          drainerResolver();
        }
        return {
          done: false,
          value: chunk
        };
      }
      if (ended) {
        drainerResolver();
        return {
          done: true,
          value: undefined
        };
      }
      if (!outWait) {
        outWait = new Promise(resolve => {
          outWaitResolver = () => {
            outWait = null;
            outWaitResolver = noop;
            return resolve(iterator.next());
          };
        });
      }
      return outWait;
    }
  };
  return {
    writer,
    iterator
  };
}

exports.create = create;


/***/ }),

/***/ "./node_modules/@ipld/car/cjs/lib/iterator.js":
/*!****************************************************!*\
  !*** ./node_modules/@ipld/car/cjs/lib/iterator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var decoder = __webpack_require__(/*! ./decoder.js */ "./node_modules/@ipld/car/cjs/lib/decoder.js");

class CarIteratorBase {
  constructor(version, roots, iterable) {
    this._version = version;
    this._roots = roots;
    this._iterable = iterable;
    this._decoded = false;
  }
  get version() {
    return this._version;
  }
  async getRoots() {
    return this._roots;
  }
}
class CarBlockIterator extends CarIteratorBase {
  [Symbol.asyncIterator]() {
    if (this._decoded) {
      throw new Error('Cannot decode more than once');
    }
    if (!this._iterable) {
      throw new Error('Block iterable not found');
    }
    this._decoded = true;
    return this._iterable[Symbol.asyncIterator]();
  }
  static async fromBytes(bytes) {
    const {version, roots, iterator} = await fromBytes(bytes);
    return new CarBlockIterator(version, roots, iterator);
  }
  static async fromIterable(asyncIterable) {
    const {version, roots, iterator} = await fromIterable(asyncIterable);
    return new CarBlockIterator(version, roots, iterator);
  }
}
class CarCIDIterator extends CarIteratorBase {
  [Symbol.asyncIterator]() {
    if (this._decoded) {
      throw new Error('Cannot decode more than once');
    }
    if (!this._iterable) {
      throw new Error('Block iterable not found');
    }
    this._decoded = true;
    const iterable = this._iterable[Symbol.asyncIterator]();
    return {
      async next() {
        const next = await iterable.next();
        if (next.done) {
          return next;
        }
        return {
          done: false,
          value: next.value.cid
        };
      }
    };
  }
  static async fromBytes(bytes) {
    const {version, roots, iterator} = await fromBytes(bytes);
    return new CarCIDIterator(version, roots, iterator);
  }
  static async fromIterable(asyncIterable) {
    const {version, roots, iterator} = await fromIterable(asyncIterable);
    return new CarCIDIterator(version, roots, iterator);
  }
}
async function fromBytes(bytes) {
  if (!(bytes instanceof Uint8Array)) {
    throw new TypeError('fromBytes() requires a Uint8Array');
  }
  return decodeIterator(decoder.bytesReader(bytes));
}
async function fromIterable(asyncIterable) {
  if (!asyncIterable || !(typeof asyncIterable[Symbol.asyncIterator] === 'function')) {
    throw new TypeError('fromIterable() requires an async iterable');
  }
  return decodeIterator(decoder.asyncIterableReader(asyncIterable));
}
async function decodeIterator(reader) {
  const decoder$1 = decoder.createDecoder(reader);
  const {version, roots} = await decoder$1.header();
  return {
    version,
    roots,
    iterator: decoder$1.blocks()
  };
}

exports.CarBlockIterator = CarBlockIterator;
exports.CarCIDIterator = CarCIDIterator;
exports.CarIteratorBase = CarIteratorBase;


/***/ }),

/***/ "./node_modules/@ipld/car/cjs/lib/reader-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ipld/car/cjs/lib/reader-browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var decoder = __webpack_require__(/*! ./decoder.js */ "./node_modules/@ipld/car/cjs/lib/decoder.js");

class CarReader {
  constructor(version, roots, blocks) {
    this._version = version;
    this._roots = roots;
    this._blocks = blocks;
    this._keys = blocks.map(b => b.cid.toString());
  }
  get version() {
    return this._version;
  }
  async getRoots() {
    return this._roots;
  }
  async has(key) {
    return this._keys.indexOf(key.toString()) > -1;
  }
  async get(key) {
    const index = this._keys.indexOf(key.toString());
    return index > -1 ? this._blocks[index] : undefined;
  }
  async *blocks() {
    for (const block of this._blocks) {
      yield block;
    }
  }
  async *cids() {
    for (const block of this._blocks) {
      yield block.cid;
    }
  }
  static async fromBytes(bytes) {
    if (!(bytes instanceof Uint8Array)) {
      throw new TypeError('fromBytes() requires a Uint8Array');
    }
    return decodeReaderComplete(decoder.bytesReader(bytes));
  }
  static async fromIterable(asyncIterable) {
    if (!asyncIterable || !(typeof asyncIterable[Symbol.asyncIterator] === 'function')) {
      throw new TypeError('fromIterable() requires an async iterable');
    }
    return decodeReaderComplete(decoder.asyncIterableReader(asyncIterable));
  }
}
async function decodeReaderComplete(reader) {
  const decoder$1 = decoder.createDecoder(reader);
  const {version, roots} = await decoder$1.header();
  const blocks = [];
  for await (const block of decoder$1.blocks()) {
    blocks.push(block);
  }
  return new CarReader(version, roots, blocks);
}
const __browser = true;

exports.CarReader = CarReader;
exports.__browser = __browser;


/***/ }),

/***/ "./node_modules/@ipld/car/cjs/lib/writer-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ipld/car/cjs/lib/writer-browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var cid = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/cjs/src/cid.js");
var encoder = __webpack_require__(/*! ./encoder.js */ "./node_modules/@ipld/car/cjs/lib/encoder.js");
var iteratorChannel = __webpack_require__(/*! ./iterator-channel.js */ "./node_modules/@ipld/car/cjs/lib/iterator-channel.js");
var decoder = __webpack_require__(/*! ./decoder.js */ "./node_modules/@ipld/car/cjs/lib/decoder.js");

class CarWriter {
  constructor(roots, encoder) {
    this._encoder = encoder;
    this._mutex = encoder.setRoots(roots);
    this._ended = false;
  }
  async put(block) {
    if (!(block.bytes instanceof Uint8Array) || !block.cid) {
      throw new TypeError('Can only write {cid, bytes} objects');
    }
    if (this._ended) {
      throw new Error('Already closed');
    }
    const cid$1 = cid.CID.asCID(block.cid);
    if (!cid$1) {
      throw new TypeError('Can only write {cid, bytes} objects');
    }
    this._mutex = this._mutex.then(() => this._encoder.writeBlock({
      cid: cid$1,
      bytes: block.bytes
    }));
    return this._mutex;
  }
  async close() {
    if (this._ended) {
      throw new Error('Already closed');
    }
    await this._mutex;
    this._ended = true;
    return this._encoder.close();
  }
  static create(roots) {
    roots = toRoots(roots);
    const {encoder, iterator} = encodeWriter();
    const writer = new CarWriter(roots, encoder);
    const out = new CarWriterOut(iterator);
    return {
      writer,
      out
    };
  }
  static createAppender() {
    const {encoder, iterator} = encodeWriter();
    encoder.setRoots = () => Promise.resolve();
    const writer = new CarWriter([], encoder);
    const out = new CarWriterOut(iterator);
    return {
      writer,
      out
    };
  }
  static async updateRootsInBytes(bytes, roots) {
    const reader = decoder.bytesReader(bytes);
    await decoder.readHeader(reader);
    const newHeader = encoder.createHeader(roots);
    if (reader.pos !== newHeader.length) {
      throw new Error(`updateRoots() can only overwrite a header of the same length (old header is ${ reader.pos } bytes, new header is ${ newHeader.length } bytes)`);
    }
    bytes.set(newHeader, 0);
    return bytes;
  }
}
class CarWriterOut {
  constructor(iterator) {
    this._iterator = iterator;
  }
  [Symbol.asyncIterator]() {
    if (this._iterating) {
      throw new Error('Multiple iterator not supported');
    }
    this._iterating = true;
    return this._iterator;
  }
}
function encodeWriter() {
  const iw = iteratorChannel.create();
  const {writer, iterator} = iw;
  const encoder$1 = encoder.createEncoder(writer);
  return {
    encoder: encoder$1,
    iterator
  };
}
function toRoots(roots) {
  if (roots === undefined) {
    return [];
  }
  if (!Array.isArray(roots)) {
    const cid$1 = cid.CID.asCID(roots);
    if (!cid$1) {
      throw new TypeError('roots must be a single CID or an array of CIDs');
    }
    return [cid$1];
  }
  const _roots = [];
  for (const root of roots) {
    const _root = cid.CID.asCID(root);
    if (!_root) {
      throw new TypeError('roots must be a single CID or an array of CIDs');
    }
    _roots.push(_root);
  }
  return _roots;
}
const __browser = true;

exports.CarWriter = CarWriter;
exports.CarWriterOut = CarWriterOut;
exports.__browser = __browser;


/***/ }),

/***/ "./node_modules/@ipld/dag-cbor/cjs/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@ipld/dag-cbor/cjs/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var cborg = __webpack_require__(/*! cborg */ "./node_modules/cborg/cjs/cborg.js");
var cid = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/cjs/src/cid.js");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var cborg__namespace = /*#__PURE__*/_interopNamespace(cborg);

const CID_CBOR_TAG = 42;
function cidEncoder(obj) {
  if (obj.asCID !== obj) {
    return null;
  }
  const cid$1 = cid.CID.asCID(obj);
  if (!cid$1) {
    return null;
  }
  const bytes = new Uint8Array(cid$1.bytes.byteLength + 1);
  bytes.set(cid$1.bytes, 1);
  return [
    new cborg__namespace.Token(cborg__namespace.Type.tag, CID_CBOR_TAG),
    new cborg__namespace.Token(cborg__namespace.Type.bytes, bytes)
  ];
}
function undefinedEncoder() {
  throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}
function numberEncoder(num) {
  if (Number.isNaN(num)) {
    throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
  }
  if (num === Infinity || num === -Infinity) {
    throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
  }
  return null;
}
const encodeOptions = {
  float64: true,
  typeEncoders: {
    Object: cidEncoder,
    undefined: undefinedEncoder,
    number: numberEncoder
  }
};
function cidDecoder(bytes) {
  if (bytes[0] !== 0) {
    throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
  }
  return cid.CID.decode(bytes.subarray(1));
}
const decodeOptions = {
  allowIndefinite: false,
  allowUndefined: false,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true,
  strict: true,
  useMaps: false,
  tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = 'dag-cbor';
const code = 113;
const encode = node => cborg__namespace.encode(node, encodeOptions);
const decode = data => cborg__namespace.decode(data, decodeOptions);

exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;


/***/ }),

/***/ "./node_modules/@ipld/dag-pb/cjs/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/cjs/src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var cid = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/cjs/src/cid.js");
var pbDecode = __webpack_require__(/*! ./pb-decode.js */ "./node_modules/@ipld/dag-pb/cjs/src/pb-decode.js");
var pbEncode = __webpack_require__(/*! ./pb-encode.js */ "./node_modules/@ipld/dag-pb/cjs/src/pb-encode.js");
var util = __webpack_require__(/*! ./util.js */ "./node_modules/@ipld/dag-pb/cjs/src/util.js");

const name = 'dag-pb';
const code = 112;
function encode(node) {
  util.validate(node);
  const pbn = {};
  if (node.Links) {
    pbn.Links = node.Links.map(l => {
      const link = {};
      if (l.Hash) {
        link.Hash = l.Hash.bytes;
      }
      if (l.Name !== undefined) {
        link.Name = l.Name;
      }
      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize;
      }
      return link;
    });
  }
  if (node.Data) {
    pbn.Data = node.Data;
  }
  return pbEncode.encodeNode(pbn);
}
function decode(bytes) {
  const pbn = pbDecode.decodeNode(bytes);
  const node = {};
  if (pbn.Data) {
    node.Data = pbn.Data;
  }
  if (pbn.Links) {
    node.Links = pbn.Links.map(l => {
      const link = {};
      try {
        link.Hash = cid.CID.decode(l.Hash);
      } catch (e) {
      }
      if (!link.Hash) {
        throw new Error('Invalid Hash field found in link, expected CID');
      }
      if (l.Name !== undefined) {
        link.Name = l.Name;
      }
      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize;
      }
      return link;
    });
  }
  return node;
}

exports.createLink = util.createLink;
exports.createNode = util.createNode;
exports.prepare = util.prepare;
exports.validate = util.validate;
exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;


/***/ }),

/***/ "./node_modules/@ipld/dag-pb/cjs/src/pb-decode.js":
/*!********************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/cjs/src/pb-decode.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

const textDecoder = new TextDecoder();
function decodeVarint(bytes, offset) {
  let v = 0;
  for (let shift = 0;; shift += 7) {
    if (shift >= 64) {
      throw new Error('protobuf: varint overflow');
    }
    if (offset >= bytes.length) {
      throw new Error('protobuf: unexpected end of data');
    }
    const b = bytes[offset++];
    v += shift < 28 ? (b & 127) << shift : (b & 127) * 2 ** shift;
    if (b < 128) {
      break;
    }
  }
  return [
    v,
    offset
  ];
}
function decodeBytes(bytes, offset) {
  let byteLen;
  [byteLen, offset] = decodeVarint(bytes, offset);
  const postOffset = offset + byteLen;
  if (byteLen < 0 || postOffset < 0) {
    throw new Error('protobuf: invalid length');
  }
  if (postOffset > bytes.length) {
    throw new Error('protobuf: unexpected end of data');
  }
  return [
    bytes.subarray(offset, postOffset),
    postOffset
  ];
}
function decodeKey(bytes, index) {
  let wire;
  [wire, index] = decodeVarint(bytes, index);
  return [
    wire & 7,
    wire >> 3,
    index
  ];
}
function decodeLink(bytes) {
  const link = {};
  const l = bytes.length;
  let index = 0;
  while (index < l) {
    let wireType, fieldNum;
    [wireType, fieldNum, index] = decodeKey(bytes, index);
    if (fieldNum === 1) {
      if (link.Hash) {
        throw new Error('protobuf: (PBLink) duplicate Hash section');
      }
      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${ wireType }) for Hash`);
      }
      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Name before Hash');
      }
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Hash');
      }
      ;
      [link.Hash, index] = decodeBytes(bytes, index);
    } else if (fieldNum === 2) {
      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Name section');
      }
      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${ wireType }) for Name`);
      }
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Name');
      }
      let byts;
      [byts, index] = decodeBytes(bytes, index);
      link.Name = textDecoder.decode(byts);
    } else if (fieldNum === 3) {
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Tsize section');
      }
      if (wireType !== 0) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${ wireType }) for Tsize`);
      }
      ;
      [link.Tsize, index] = decodeVarint(bytes, index);
    } else {
      throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${ fieldNum }`);
    }
  }
  if (index > l) {
    throw new Error('protobuf: (PBLink) unexpected end of data');
  }
  return link;
}
function decodeNode(bytes) {
  const l = bytes.length;
  let index = 0;
  let links;
  let linksBeforeData = false;
  let data;
  while (index < l) {
    let wireType, fieldNum;
    [wireType, fieldNum, index] = decodeKey(bytes, index);
    if (wireType !== 2) {
      throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${ wireType }`);
    }
    if (fieldNum === 1) {
      if (data) {
        throw new Error('protobuf: (PBNode) duplicate Data section');
      }
      ;
      [data, index] = decodeBytes(bytes, index);
      if (links) {
        linksBeforeData = true;
      }
    } else if (fieldNum === 2) {
      if (linksBeforeData) {
        throw new Error('protobuf: (PBNode) duplicate Links section');
      } else if (!links) {
        links = [];
      }
      let byts;
      [byts, index] = decodeBytes(bytes, index);
      links.push(decodeLink(byts));
    } else {
      throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${ fieldNum }`);
    }
  }
  if (index > l) {
    throw new Error('protobuf: (PBNode) unexpected end of data');
  }
  const node = {};
  if (data) {
    node.Data = data;
  }
  node.Links = links || [];
  return node;
}

exports.decodeNode = decodeNode;


/***/ }),

/***/ "./node_modules/@ipld/dag-pb/cjs/src/pb-encode.js":
/*!********************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/cjs/src/pb-encode.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

const textEncoder = new TextEncoder();
const maxInt32 = 2 ** 32;
const maxUInt32 = 2 ** 31;
function encodeLink(link, bytes) {
  let i = bytes.length;
  if (typeof link.Tsize === 'number') {
    if (link.Tsize < 0) {
      throw new Error('Tsize cannot be negative');
    }
    if (!Number.isSafeInteger(link.Tsize)) {
      throw new Error('Tsize too large for encoding');
    }
    i = encodeVarint(bytes, i, link.Tsize) - 1;
    bytes[i] = 24;
  }
  if (typeof link.Name === 'string') {
    const nameBytes = textEncoder.encode(link.Name);
    i -= nameBytes.length;
    bytes.set(nameBytes, i);
    i = encodeVarint(bytes, i, nameBytes.length) - 1;
    bytes[i] = 18;
  }
  if (link.Hash) {
    i -= link.Hash.length;
    bytes.set(link.Hash, i);
    i = encodeVarint(bytes, i, link.Hash.length) - 1;
    bytes[i] = 10;
  }
  return bytes.length - i;
}
function encodeNode(node) {
  const size = sizeNode(node);
  const bytes = new Uint8Array(size);
  let i = size;
  if (node.Data) {
    i -= node.Data.length;
    bytes.set(node.Data, i);
    i = encodeVarint(bytes, i, node.Data.length) - 1;
    bytes[i] = 10;
  }
  if (node.Links) {
    for (let index = node.Links.length - 1; index >= 0; index--) {
      const size = encodeLink(node.Links[index], bytes.subarray(0, i));
      i -= size;
      i = encodeVarint(bytes, i, size) - 1;
      bytes[i] = 18;
    }
  }
  return bytes;
}
function sizeLink(link) {
  let n = 0;
  if (link.Hash) {
    const l = link.Hash.length;
    n += 1 + l + sov(l);
  }
  if (typeof link.Name === 'string') {
    const l = textEncoder.encode(link.Name).length;
    n += 1 + l + sov(l);
  }
  if (typeof link.Tsize === 'number') {
    n += 1 + sov(link.Tsize);
  }
  return n;
}
function sizeNode(node) {
  let n = 0;
  if (node.Data) {
    const l = node.Data.length;
    n += 1 + l + sov(l);
  }
  if (node.Links) {
    for (const link of node.Links) {
      const l = sizeLink(link);
      n += 1 + l + sov(l);
    }
  }
  return n;
}
function encodeVarint(bytes, offset, v) {
  offset -= sov(v);
  const base = offset;
  while (v >= maxUInt32) {
    bytes[offset++] = v & 127 | 128;
    v /= 128;
  }
  while (v >= 128) {
    bytes[offset++] = v & 127 | 128;
    v >>>= 7;
  }
  bytes[offset] = v;
  return base;
}
function sov(x) {
  if (x % 2 === 0) {
    x++;
  }
  return Math.floor((len64(x) + 6) / 7);
}
function len64(x) {
  let n = 0;
  if (x >= maxInt32) {
    x = Math.floor(x / maxInt32);
    n = 32;
  }
  if (x >= 1 << 16) {
    x >>>= 16;
    n += 16;
  }
  if (x >= 1 << 8) {
    x >>>= 8;
    n += 8;
  }
  return n + len8tab[x];
}
const len8tab = [
  0,
  1,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8
];

exports.encodeNode = encodeNode;


/***/ }),

/***/ "./node_modules/@ipld/dag-pb/cjs/src/util.js":
/*!***************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/cjs/src/util.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var cid = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/cjs/src/cid.js");

const pbNodeProperties = [
  'Data',
  'Links'
];
const pbLinkProperties = [
  'Hash',
  'Name',
  'Tsize'
];
const textEncoder = new TextEncoder();
function linkComparator(a, b) {
  if (a === b) {
    return 0;
  }
  const abuf = a.Name ? textEncoder.encode(a.Name) : [];
  const bbuf = b.Name ? textEncoder.encode(b.Name) : [];
  let x = abuf.length;
  let y = bbuf.length;
  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (abuf[i] !== bbuf[i]) {
      x = abuf[i];
      y = bbuf[i];
      break;
    }
  }
  return x < y ? -1 : y < x ? 1 : 0;
}
function hasOnlyProperties(node, properties) {
  return !Object.keys(node).some(p => !properties.includes(p));
}
function asLink(link) {
  if (typeof link.asCID === 'object') {
    const Hash = cid.CID.asCID(link);
    if (!Hash) {
      throw new TypeError('Invalid DAG-PB form');
    }
    return { Hash };
  }
  if (typeof link !== 'object' || Array.isArray(link)) {
    throw new TypeError('Invalid DAG-PB form');
  }
  const pbl = {};
  if (link.Hash) {
    let cid$1 = cid.CID.asCID(link.Hash);
    try {
      if (!cid$1) {
        if (typeof link.Hash === 'string') {
          cid$1 = cid.CID.parse(link.Hash);
        } else if (link.Hash instanceof Uint8Array) {
          cid$1 = cid.CID.decode(link.Hash);
        }
      }
    } catch (e) {
      throw new TypeError(`Invalid DAG-PB form: ${ e.message }`);
    }
    if (cid$1) {
      pbl.Hash = cid$1;
    }
  }
  if (!pbl.Hash) {
    throw new TypeError('Invalid DAG-PB form');
  }
  if (typeof link.Name === 'string') {
    pbl.Name = link.Name;
  }
  if (typeof link.Tsize === 'number') {
    pbl.Tsize = link.Tsize;
  }
  return pbl;
}
function prepare(node) {
  if (node instanceof Uint8Array || typeof node === 'string') {
    node = { Data: node };
  }
  if (typeof node !== 'object' || Array.isArray(node)) {
    throw new TypeError('Invalid DAG-PB form');
  }
  const pbn = {};
  if (node.Data !== undefined) {
    if (typeof node.Data === 'string') {
      pbn.Data = textEncoder.encode(node.Data);
    } else if (node.Data instanceof Uint8Array) {
      pbn.Data = node.Data;
    } else {
      throw new TypeError('Invalid DAG-PB form');
    }
  }
  if (node.Links !== undefined) {
    if (Array.isArray(node.Links)) {
      pbn.Links = node.Links.map(asLink);
      pbn.Links.sort(linkComparator);
    } else {
      throw new TypeError('Invalid DAG-PB form');
    }
  } else {
    pbn.Links = [];
  }
  return pbn;
}
function validate(node) {
  if (!node || typeof node !== 'object' || Array.isArray(node)) {
    throw new TypeError('Invalid DAG-PB form');
  }
  if (!hasOnlyProperties(node, pbNodeProperties)) {
    throw new TypeError('Invalid DAG-PB form (extraneous properties)');
  }
  if (node.Data !== undefined && !(node.Data instanceof Uint8Array)) {
    throw new TypeError('Invalid DAG-PB form (Data must be a Uint8Array)');
  }
  if (!Array.isArray(node.Links)) {
    throw new TypeError('Invalid DAG-PB form (Links must be an array)');
  }
  for (let i = 0; i < node.Links.length; i++) {
    const link = node.Links[i];
    if (!link || typeof link !== 'object' || Array.isArray(link)) {
      throw new TypeError('Invalid DAG-PB form (bad link object)');
    }
    if (!hasOnlyProperties(link, pbLinkProperties)) {
      throw new TypeError('Invalid DAG-PB form (extraneous properties on link object)');
    }
    if (!link.Hash) {
      throw new TypeError('Invalid DAG-PB form (link must have a Hash)');
    }
    if (link.Hash.asCID !== link.Hash) {
      throw new TypeError('Invalid DAG-PB form (link Hash must be a CID)');
    }
    if (link.Name !== undefined && typeof link.Name !== 'string') {
      throw new TypeError('Invalid DAG-PB form (link Name must be a string)');
    }
    if (link.Tsize !== undefined && (typeof link.Tsize !== 'number' || link.Tsize % 1 !== 0)) {
      throw new TypeError('Invalid DAG-PB form (link Tsize must be an integer)');
    }
    if (i > 0 && linkComparator(link, node.Links[i - 1]) === -1) {
      throw new TypeError('Invalid DAG-PB form (links must be sorted by Name bytes)');
    }
  }
}
function createNode(data, links = []) {
  return prepare({
    Data: data,
    Links: links
  });
}
function createLink(name, size, cid) {
  return asLink({
    Hash: cid,
    Name: name,
    Tsize: size
  });
}

exports.createLink = createLink;
exports.createNode = createNode;
exports.prepare = prepare;
exports.validate = validate;


/***/ }),

/***/ "./node_modules/carbites/cjs/lib/treewalk/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/carbites/cjs/lib/treewalk/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var splitter = __webpack_require__(/*! ./splitter.js */ "./node_modules/carbites/cjs/lib/treewalk/splitter.js");
var joiner = __webpack_require__(/*! ./joiner.js */ "./node_modules/carbites/cjs/lib/treewalk/joiner.js");



exports.TreewalkCarSplitter = splitter.TreewalkCarSplitter;
exports.TreewalkCarJoiner = joiner.TreewalkCarJoiner;


/***/ }),

/***/ "./node_modules/carbites/cjs/lib/treewalk/joiner.js":
/*!**********************************************************!*\
  !*** ./node_modules/carbites/cjs/lib/treewalk/joiner.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var car = __webpack_require__(/*! @ipld/car */ "./node_modules/@ipld/car/cjs/car-browser.js");

class TreewalkCarJoiner {
  constructor(cars) {
    this._cars = Array.from(cars);
    if (!this._cars.length)
      throw new Error('missing CARs');
  }
  async *car() {
    const reader = this._cars[0];
    const roots = await reader.getRoots();
    const {writer, out} = car.CarWriter.create(roots);
    const writeCar = async () => {
      const written = new Set();
      const writeBlocks = async reader => {
        for await (const b of reader.blocks()) {
          if (written.has(b.cid.toString()))
            continue;
          await writer.put(b);
          written.add(b.cid.toString());
        }
      };
      try {
        await writeBlocks(reader);
        for (const reader of this._cars.slice(1)) {
          await writeBlocks(reader);
        }
      } catch (err) {
        console.error(err);
      } finally {
        await writer.close();
      }
    };
    writeCar();
    yield* out;
  }
}

exports.TreewalkCarJoiner = TreewalkCarJoiner;


/***/ }),

/***/ "./node_modules/carbites/cjs/lib/treewalk/splitter.js":
/*!************************************************************!*\
  !*** ./node_modules/carbites/cjs/lib/treewalk/splitter.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var car = __webpack_require__(/*! @ipld/car */ "./node_modules/@ipld/car/cjs/car-browser.js");
var block = __webpack_require__(/*! multiformats/block */ "./node_modules/multiformats/cjs/src/block.js");
var raw = __webpack_require__(/*! multiformats/codecs/raw */ "./node_modules/multiformats/cjs/src/codecs/raw.js");
var dagCbor = __webpack_require__(/*! @ipld/dag-cbor */ "./node_modules/@ipld/dag-cbor/cjs/index.js");
var pb = __webpack_require__(/*! @ipld/dag-pb */ "./node_modules/@ipld/dag-pb/cjs/src/index.js");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var raw__namespace = /*#__PURE__*/_interopNamespace(raw);
var dagCbor__namespace = /*#__PURE__*/_interopNamespace(dagCbor);
var pb__namespace = /*#__PURE__*/_interopNamespace(pb);

class TreewalkCarSplitter {
  constructor(reader, targetSize, options = {}) {
    if (typeof targetSize !== 'number' || targetSize <= 0) {
      throw new Error('invalid target chunk size');
    }
    this._reader = reader;
    this._targetSize = targetSize;
    this._decoders = [
      pb__namespace,
      raw__namespace,
      dagCbor__namespace,
      ...options.decoders || []
    ];
  }
  async *cars() {
    const roots = await this._reader.getRoots();
    if (roots.length !== 1)
      throw new Error(`unexpected number of roots: ${ roots.length }`);
    let channel;
    for await (const val of this._cars(roots[0])) {
      channel = val.channel;
      if (val.out)
        yield val.out;
    }
    if (!channel) {
      throw new Error('missing CAR writer channel');
    }
    channel.writer.close();
    yield channel.out;
  }
  async _get(cid) {
    const rawBlock = await this._reader.get(cid);
    if (!rawBlock)
      throw new Error(`missing block for ${ cid }`);
    const {bytes} = rawBlock;
    const decoder = this._decoders.find(d => d.code === cid.code);
    if (!decoder)
      throw new Error(`missing decoder for ${ cid.code }`);
    return new block.Block({
      cid,
      bytes,
      value: decoder.decode(bytes)
    });
  }
  async *_cars(cid, parents = [], channel = undefined) {
    const block = await this._get(cid);
    channel = channel || Object.assign(car.CarWriter.create(cid), { size: 0 });
    if (channel.size > 0 && channel.size + block.bytes.byteLength >= this._targetSize) {
      channel.writer.close();
      const {out} = channel;
      channel = newCar(parents);
      yield {
        channel,
        out
      };
    }
    parents = parents.concat(block);
    channel.size += block.bytes.byteLength;
    channel.writer.put(block);
    for (const [, cid] of block.links()) {
      for await (const val of this._cars(cid, parents, channel)) {
        channel = val.channel;
        yield val;
      }
    }
    if (!channel) {
      throw new Error('missing CAR writer channel');
    }
    yield { channel };
  }
  static async fromIterable(iterable, targetSize, options) {
    const reader = await car.CarReader.fromIterable(iterable);
    return new TreewalkCarSplitter(reader, targetSize, options);
  }
  static async fromBlob(blob, targetSize, options) {
    const buffer = await blob.arrayBuffer();
    const reader = await car.CarReader.fromBytes(new Uint8Array(buffer));
    return new TreewalkCarSplitter(reader, targetSize, options);
  }
}
function newCar(parents) {
  const ch = Object.assign(car.CarWriter.create(parents[0].cid), { size: parents.reduce((size, b) => size + b.bytes.byteLength, 0) });
  for (const b of parents) {
    ch.writer.put(b);
  }
  return ch;
}

exports.TreewalkCarSplitter = TreewalkCarSplitter;


/***/ }),

/***/ "./node_modules/cborg/cjs/cborg.js":
/*!*****************************************!*\
  !*** ./node_modules/cborg/cjs/cborg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var encode = __webpack_require__(/*! ./lib/encode.js */ "./node_modules/cborg/cjs/lib/encode.js");
var decode = __webpack_require__(/*! ./lib/decode.js */ "./node_modules/cborg/cjs/lib/decode.js");
var token = __webpack_require__(/*! ./lib/token.js */ "./node_modules/cborg/cjs/lib/token.js");



exports.encode = encode.encode;
exports.decode = decode.decode;
exports.Token = token.Token;
exports.Type = token.Type;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/0uint.js":
/*!*********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/0uint.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");

const uintBoundaries = [
  24,
  256,
  65536,
  4294967296,
  BigInt('18446744073709551616')
];
function readUint8(data, offset, options) {
  common.assertEnoughData(data, offset, 1);
  const value = data[offset];
  if (options.strict === true && value < uintBoundaries[0]) {
    throw new Error(`${ common.decodeErrPrefix } integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint16(data, offset, options) {
  common.assertEnoughData(data, offset, 2);
  const value = data[offset] << 8 | data[offset + 1];
  if (options.strict === true && value < uintBoundaries[1]) {
    throw new Error(`${ common.decodeErrPrefix } integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint32(data, offset, options) {
  common.assertEnoughData(data, offset, 4);
  const value = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  if (options.strict === true && value < uintBoundaries[2]) {
    throw new Error(`${ common.decodeErrPrefix } integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint64(data, offset, options) {
  common.assertEnoughData(data, offset, 8);
  const hi = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  const lo = data[offset + 4] * 16777216 + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
  const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);
  if (options.strict === true && value < uintBoundaries[3]) {
    throw new Error(`${ common.decodeErrPrefix } integer encoded in more bytes than necessary (strict decode)`);
  }
  if (value <= Number.MAX_SAFE_INTEGER) {
    return Number(value);
  }
  if (options.allowBigInt === true) {
    return value;
  }
  throw new Error(`${ common.decodeErrPrefix } integers outside of the safe integer range are not supported`);
}
function decodeUint8(data, pos, _minor, options) {
  return new token.Token(token.Type.uint, readUint8(data, pos + 1, options), 2);
}
function decodeUint16(data, pos, _minor, options) {
  return new token.Token(token.Type.uint, readUint16(data, pos + 1, options), 3);
}
function decodeUint32(data, pos, _minor, options) {
  return new token.Token(token.Type.uint, readUint32(data, pos + 1, options), 5);
}
function decodeUint64(data, pos, _minor, options) {
  return new token.Token(token.Type.uint, readUint64(data, pos + 1, options), 9);
}
function encodeUint(buf, token) {
  return encodeUintValue(buf, 0, token.value);
}
function encodeUintValue(buf, major, uint) {
  if (uint < uintBoundaries[0]) {
    const nuint = Number(uint);
    buf.push([major | nuint]);
  } else if (uint < uintBoundaries[1]) {
    const nuint = Number(uint);
    buf.push([
      major | 24,
      nuint
    ]);
  } else if (uint < uintBoundaries[2]) {
    const nuint = Number(uint);
    buf.push([
      major | 25,
      nuint >>> 8,
      nuint & 255
    ]);
  } else if (uint < uintBoundaries[3]) {
    const nuint = Number(uint);
    buf.push([
      major | 26,
      nuint >>> 24 & 255,
      nuint >>> 16 & 255,
      nuint >>> 8 & 255,
      nuint & 255
    ]);
  } else {
    const buint = BigInt(uint);
    if (buint < uintBoundaries[4]) {
      const set = [
        major | 27,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let lo = Number(buint & BigInt(4294967295));
      let hi = Number(buint >> BigInt(32) & BigInt(4294967295));
      set[8] = lo & 255;
      lo = lo >> 8;
      set[7] = lo & 255;
      lo = lo >> 8;
      set[6] = lo & 255;
      lo = lo >> 8;
      set[5] = lo & 255;
      set[4] = hi & 255;
      hi = hi >> 8;
      set[3] = hi & 255;
      hi = hi >> 8;
      set[2] = hi & 255;
      hi = hi >> 8;
      set[1] = hi & 255;
      buf.push(set);
    } else {
      throw new Error(`${ common.decodeErrPrefix } encountered BigInt larger than allowable range`);
    }
  }
}
encodeUint.encodedSize = function encodedSize(token) {
  return encodeUintValue.encodedSize(token.value);
};
encodeUintValue.encodedSize = function encodedSize(uint) {
  if (uint < uintBoundaries[0]) {
    return 1;
  }
  if (uint < uintBoundaries[1]) {
    return 2;
  }
  if (uint < uintBoundaries[2]) {
    return 3;
  }
  if (uint < uintBoundaries[3]) {
    return 5;
  }
  return 9;
};
encodeUint.compareTokens = function compareTokens(tok1, tok2) {
  return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : 0;
};

exports.decodeUint16 = decodeUint16;
exports.decodeUint32 = decodeUint32;
exports.decodeUint64 = decodeUint64;
exports.decodeUint8 = decodeUint8;
exports.encodeUint = encodeUint;
exports.encodeUintValue = encodeUintValue;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.readUint64 = readUint64;
exports.readUint8 = readUint8;
exports.uintBoundaries = uintBoundaries;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/1negint.js":
/*!***********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/1negint.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var _0uint = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/cjs/lib/0uint.js");
var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");

function decodeNegint8(data, pos, _minor, options) {
  return new token.Token(token.Type.negint, -1 - _0uint.readUint8(data, pos + 1, options), 2);
}
function decodeNegint16(data, pos, _minor, options) {
  return new token.Token(token.Type.negint, -1 - _0uint.readUint16(data, pos + 1, options), 3);
}
function decodeNegint32(data, pos, _minor, options) {
  return new token.Token(token.Type.negint, -1 - _0uint.readUint32(data, pos + 1, options), 5);
}
const neg1b = BigInt(-1);
const pos1b = BigInt(1);
function decodeNegint64(data, pos, _minor, options) {
  const int = _0uint.readUint64(data, pos + 1, options);
  if (typeof int !== 'bigint') {
    const value = -1 - int;
    if (value >= Number.MIN_SAFE_INTEGER) {
      return new token.Token(token.Type.negint, value, 9);
    }
  }
  if (options.allowBigInt !== true) {
    throw new Error(`${ common.decodeErrPrefix } integers outside of the safe integer range are not supported`);
  }
  return new token.Token(token.Type.negint, neg1b - BigInt(int), 9);
}
function encodeNegint(buf, token) {
  const negint = token.value;
  const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
  _0uint.encodeUintValue(buf, token.type.majorEncoded, unsigned);
}
encodeNegint.encodedSize = function encodedSize(token) {
  const negint = token.value;
  const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
  if (unsigned < _0uint.uintBoundaries[0]) {
    return 1;
  }
  if (unsigned < _0uint.uintBoundaries[1]) {
    return 2;
  }
  if (unsigned < _0uint.uintBoundaries[2]) {
    return 3;
  }
  if (unsigned < _0uint.uintBoundaries[3]) {
    return 5;
  }
  return 9;
};
encodeNegint.compareTokens = function compareTokens(tok1, tok2) {
  return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : 0;
};

exports.decodeNegint16 = decodeNegint16;
exports.decodeNegint32 = decodeNegint32;
exports.decodeNegint64 = decodeNegint64;
exports.decodeNegint8 = decodeNegint8;
exports.encodeNegint = encodeNegint;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/2bytes.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/2bytes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");
var _0uint = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/cjs/lib/0uint.js");
var byteUtils = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/cjs/lib/byte-utils.js");

function toToken(data, pos, prefix, length) {
  common.assertEnoughData(data, pos, prefix + length);
  const buf = byteUtils.slice(data, pos + prefix, pos + prefix + length);
  return new token.Token(token.Type.bytes, buf, prefix + length);
}
function decodeBytesCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeBytes8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint.readUint8(data, pos + 1, options));
}
function decodeBytes16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint.readUint16(data, pos + 1, options));
}
function decodeBytes32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint.readUint32(data, pos + 1, options));
}
function decodeBytes64(data, pos, _minor, options) {
  const l = _0uint.readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ common.decodeErrPrefix } 64-bit integer bytes lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function tokenBytes(token$1) {
  if (token$1.encodedBytes === undefined) {
    token$1.encodedBytes = token$1.type === token.Type.string ? byteUtils.fromString(token$1.value) : token$1.value;
  }
  return token$1.encodedBytes;
}
function encodeBytes(buf, token) {
  const bytes = tokenBytes(token);
  _0uint.encodeUintValue(buf, token.type.majorEncoded, bytes.length);
  buf.push(bytes);
}
encodeBytes.encodedSize = function encodedSize(token) {
  const bytes = tokenBytes(token);
  return _0uint.encodeUintValue.encodedSize(bytes.length) + bytes.length;
};
encodeBytes.compareTokens = function compareTokens(tok1, tok2) {
  return compareBytes(tokenBytes(tok1), tokenBytes(tok2));
};
function compareBytes(b1, b2) {
  return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : byteUtils.compare(b1, b2);
}

exports.compareBytes = compareBytes;
exports.decodeBytes16 = decodeBytes16;
exports.decodeBytes32 = decodeBytes32;
exports.decodeBytes64 = decodeBytes64;
exports.decodeBytes8 = decodeBytes8;
exports.decodeBytesCompact = decodeBytesCompact;
exports.encodeBytes = encodeBytes;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/3string.js":
/*!***********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/3string.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");
var _0uint = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/cjs/lib/0uint.js");
var _2bytes = __webpack_require__(/*! ./2bytes.js */ "./node_modules/cborg/cjs/lib/2bytes.js");
var byteUtils = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/cjs/lib/byte-utils.js");

function toToken(data, pos, prefix, length) {
  const totLength = prefix + length;
  common.assertEnoughData(data, pos, totLength);
  return new token.Token(token.Type.string, byteUtils.toString(data, pos + prefix, pos + totLength), totLength);
}
function decodeStringCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeString8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint.readUint8(data, pos + 1, options));
}
function decodeString16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint.readUint16(data, pos + 1, options));
}
function decodeString32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint.readUint32(data, pos + 1, options));
}
function decodeString64(data, pos, _minor, options) {
  const l = _0uint.readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ common.decodeErrPrefix } 64-bit integer string lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
const encodeString = _2bytes.encodeBytes;

exports.decodeString16 = decodeString16;
exports.decodeString32 = decodeString32;
exports.decodeString64 = decodeString64;
exports.decodeString8 = decodeString8;
exports.decodeStringCompact = decodeStringCompact;
exports.encodeString = encodeString;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/4array.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/4array.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var _0uint = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/cjs/lib/0uint.js");
var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");

function toToken(_data, _pos, prefix, length) {
  return new token.Token(token.Type.array, length, prefix);
}
function decodeArrayCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeArray8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint.readUint8(data, pos + 1, options));
}
function decodeArray16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint.readUint16(data, pos + 1, options));
}
function decodeArray32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint.readUint32(data, pos + 1, options));
}
function decodeArray64(data, pos, _minor, options) {
  const l = _0uint.readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ common.decodeErrPrefix } 64-bit integer array lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function decodeArrayIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${ common.decodeErrPrefix } indefinite length items not allowed`);
  }
  return toToken(data, pos, 1, Infinity);
}
function encodeArray(buf, token$1) {
  _0uint.encodeUintValue(buf, token.Type.array.majorEncoded, token$1.value);
}
encodeArray.compareTokens = _0uint.encodeUint.compareTokens;

exports.decodeArray16 = decodeArray16;
exports.decodeArray32 = decodeArray32;
exports.decodeArray64 = decodeArray64;
exports.decodeArray8 = decodeArray8;
exports.decodeArrayCompact = decodeArrayCompact;
exports.decodeArrayIndefinite = decodeArrayIndefinite;
exports.encodeArray = encodeArray;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/5map.js":
/*!********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/5map.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var _0uint = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/cjs/lib/0uint.js");
var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");

function toToken(_data, _pos, prefix, length) {
  return new token.Token(token.Type.map, length, prefix);
}
function decodeMapCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeMap8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint.readUint8(data, pos + 1, options));
}
function decodeMap16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint.readUint16(data, pos + 1, options));
}
function decodeMap32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint.readUint32(data, pos + 1, options));
}
function decodeMap64(data, pos, _minor, options) {
  const l = _0uint.readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ common.decodeErrPrefix } 64-bit integer map lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function decodeMapIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${ common.decodeErrPrefix } indefinite length items not allowed`);
  }
  return toToken(data, pos, 1, Infinity);
}
function encodeMap(buf, token$1) {
  _0uint.encodeUintValue(buf, token.Type.map.majorEncoded, token$1.value);
}
encodeMap.compareTokens = _0uint.encodeUint.compareTokens;

exports.decodeMap16 = decodeMap16;
exports.decodeMap32 = decodeMap32;
exports.decodeMap64 = decodeMap64;
exports.decodeMap8 = decodeMap8;
exports.decodeMapCompact = decodeMapCompact;
exports.decodeMapIndefinite = decodeMapIndefinite;
exports.encodeMap = encodeMap;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/6tag.js":
/*!********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/6tag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var _0uint = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/cjs/lib/0uint.js");

function decodeTagCompact(_data, _pos, minor, _options) {
  return new token.Token(token.Type.tag, minor, 1);
}
function decodeTag8(data, pos, _minor, options) {
  return new token.Token(token.Type.tag, _0uint.readUint8(data, pos + 1, options), 2);
}
function decodeTag16(data, pos, _minor, options) {
  return new token.Token(token.Type.tag, _0uint.readUint16(data, pos + 1, options), 3);
}
function decodeTag32(data, pos, _minor, options) {
  return new token.Token(token.Type.tag, _0uint.readUint32(data, pos + 1, options), 5);
}
function decodeTag64(data, pos, _minor, options) {
  return new token.Token(token.Type.tag, _0uint.readUint64(data, pos + 1, options), 9);
}
function encodeTag(buf, token$1) {
  _0uint.encodeUintValue(buf, token.Type.tag.majorEncoded, token$1.value);
}
encodeTag.compareTokens = _0uint.encodeUint.compareTokens;

exports.decodeTag16 = decodeTag16;
exports.decodeTag32 = decodeTag32;
exports.decodeTag64 = decodeTag64;
exports.decodeTag8 = decodeTag8;
exports.decodeTagCompact = decodeTagCompact;
exports.encodeTag = encodeTag;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/7float.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/7float.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");
var _0uint = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/cjs/lib/0uint.js");

const MINOR_FALSE = 20;
const MINOR_TRUE = 21;
const MINOR_NULL = 22;
const MINOR_UNDEFINED = 23;
function decodeUndefined(_data, _pos, _minor, options) {
  if (options.allowUndefined === false) {
    throw new Error(`${ common.decodeErrPrefix } undefined values are not supported`);
  }
  return new token.Token(token.Type.undefined, undefined, 1);
}
function decodeBreak(_data, _pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${ common.decodeErrPrefix } indefinite length items not allowed`);
  }
  return new token.Token(token.Type.break, undefined, 1);
}
function createToken(value, bytes, options) {
  if (options) {
    if (options.allowNaN === false && Number.isNaN(value)) {
      throw new Error(`${ common.decodeErrPrefix } NaN values are not supported`);
    }
    if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) {
      throw new Error(`${ common.decodeErrPrefix } Infinity values are not supported`);
    }
  }
  return new token.Token(token.Type.float, value, bytes);
}
function decodeFloat16(data, pos, _minor, options) {
  return createToken(readFloat16(data, pos + 1), 3, options);
}
function decodeFloat32(data, pos, _minor, options) {
  return createToken(readFloat32(data, pos + 1), 5, options);
}
function decodeFloat64(data, pos, _minor, options) {
  return createToken(readFloat64(data, pos + 1), 9, options);
}
function encodeFloat(buf, token$1, options) {
  const float = token$1.value;
  if (float === false) {
    buf.push([token.Type.float.majorEncoded | MINOR_FALSE]);
  } else if (float === true) {
    buf.push([token.Type.float.majorEncoded | MINOR_TRUE]);
  } else if (float === null) {
    buf.push([token.Type.float.majorEncoded | MINOR_NULL]);
  } else if (float === undefined) {
    buf.push([token.Type.float.majorEncoded | MINOR_UNDEFINED]);
  } else {
    let decoded;
    let success = false;
    if (!options || options.float64 !== true) {
      encodeFloat16(float);
      decoded = readFloat16(ui8a, 1);
      if (float === decoded || Number.isNaN(float)) {
        ui8a[0] = 249;
        buf.push(ui8a.slice(0, 3));
        success = true;
      } else {
        encodeFloat32(float);
        decoded = readFloat32(ui8a, 1);
        if (float === decoded) {
          ui8a[0] = 250;
          buf.push(ui8a.slice(0, 5));
          success = true;
        }
      }
    }
    if (!success) {
      encodeFloat64(float);
      decoded = readFloat64(ui8a, 1);
      ui8a[0] = 251;
      buf.push(ui8a.slice(0, 9));
    }
  }
}
encodeFloat.encodedSize = function encodedSize(token, options) {
  const float = token.value;
  if (float === false || float === true || float === null || float === undefined) {
    return 1;
  }
  let decoded;
  if (!options || options.float64 !== true) {
    encodeFloat16(float);
    decoded = readFloat16(ui8a, 1);
    if (float === decoded || Number.isNaN(float)) {
      return 3;
    }
    encodeFloat32(float);
    decoded = readFloat32(ui8a, 1);
    if (float === decoded) {
      return 5;
    }
  }
  return 9;
};
const buffer = new ArrayBuffer(9);
const dataView = new DataView(buffer, 1);
const ui8a = new Uint8Array(buffer, 0);
function encodeFloat16(inp) {
  if (inp === Infinity) {
    dataView.setUint16(0, 31744, false);
  } else if (inp === -Infinity) {
    dataView.setUint16(0, 64512, false);
  } else if (Number.isNaN(inp)) {
    dataView.setUint16(0, 32256, false);
  } else {
    dataView.setFloat32(0, inp);
    const valu32 = dataView.getUint32(0);
    const exponent = (valu32 & 2139095040) >> 23;
    const mantissa = valu32 & 8388607;
    if (exponent === 255) {
      dataView.setUint16(0, 31744, false);
    } else if (exponent === 0) {
      dataView.setUint16(0, (inp & 2147483648) >> 16 | mantissa >> 13, false);
    } else {
      const logicalExponent = exponent - 127;
      if (logicalExponent < -24) {
        dataView.setUint16(0, 0);
      } else if (logicalExponent < -14) {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | 1 << 24 + logicalExponent, false);
      } else {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | logicalExponent + 15 << 10 | mantissa >> 13, false);
      }
    }
  }
}
function readFloat16(ui8a, pos) {
  if (ui8a.length - pos < 2) {
    throw new Error(`${ common.decodeErrPrefix } not enough data for float16`);
  }
  const half = (ui8a[pos] << 8) + ui8a[pos + 1];
  if (half === 31744) {
    return Infinity;
  }
  if (half === 64512) {
    return -Infinity;
  }
  if (half === 32256) {
    return NaN;
  }
  const exp = half >> 10 & 31;
  const mant = half & 1023;
  let val;
  if (exp === 0) {
    val = mant * 2 ** -24;
  } else if (exp !== 31) {
    val = (mant + 1024) * 2 ** (exp - 25);
  } else {
    val = mant === 0 ? Infinity : NaN;
  }
  return half & 32768 ? -val : val;
}
function encodeFloat32(inp) {
  dataView.setFloat32(0, inp, false);
}
function readFloat32(ui8a, pos) {
  if (ui8a.length - pos < 4) {
    throw new Error(`${ common.decodeErrPrefix } not enough data for float32`);
  }
  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 4).getFloat32(0, false);
}
function encodeFloat64(inp) {
  dataView.setFloat64(0, inp, false);
}
function readFloat64(ui8a, pos) {
  if (ui8a.length - pos < 8) {
    throw new Error(`${ common.decodeErrPrefix } not enough data for float64`);
  }
  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 8).getFloat64(0, false);
}
encodeFloat.compareTokens = _0uint.encodeUint.compareTokens;

exports.decodeBreak = decodeBreak;
exports.decodeFloat16 = decodeFloat16;
exports.decodeFloat32 = decodeFloat32;
exports.decodeFloat64 = decodeFloat64;
exports.decodeUndefined = decodeUndefined;
exports.encodeFloat = encodeFloat;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/bl.js":
/*!******************************************!*\
  !*** ./node_modules/cborg/cjs/lib/bl.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var byteUtils = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/cjs/lib/byte-utils.js");

const defaultChunkSize = 256;
class Bl {
  constructor(chunkSize = defaultChunkSize) {
    this.chunkSize = chunkSize;
    this.cursor = 0;
    this.maxCursor = -1;
    this.chunks = [];
    this._initReuseChunk = null;
  }
  reset() {
    this.chunks = [];
    this.cursor = 0;
    this.maxCursor = -1;
    if (this._initReuseChunk !== null) {
      this.chunks.push(this._initReuseChunk);
      this.maxCursor = this._initReuseChunk.length - 1;
    }
  }
  push(bytes) {
    let topChunk = this.chunks[this.chunks.length - 1];
    const newMax = this.cursor + bytes.length;
    if (newMax <= this.maxCursor + 1) {
      const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
      topChunk.set(bytes, chunkPos);
    } else {
      if (topChunk) {
        const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
        if (chunkPos < topChunk.length) {
          this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
          this.maxCursor = this.cursor - 1;
        }
      }
      if (bytes.length < 64 && bytes.length < this.chunkSize) {
        topChunk = byteUtils.alloc(this.chunkSize);
        this.chunks.push(topChunk);
        this.maxCursor += topChunk.length;
        if (this._initReuseChunk === null) {
          this._initReuseChunk = topChunk;
        }
        topChunk.set(bytes, 0);
      } else {
        this.chunks.push(bytes);
        this.maxCursor += bytes.length;
      }
    }
    this.cursor += bytes.length;
  }
  toBytes(reset = false) {
    let byts;
    if (this.chunks.length === 1) {
      const chunk = this.chunks[0];
      if (reset && this.cursor > chunk.length / 2) {
        byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
        this._initReuseChunk = null;
        this.chunks = [];
      } else {
        byts = byteUtils.slice(chunk, 0, this.cursor);
      }
    } else {
      byts = byteUtils.concat(this.chunks, this.cursor);
    }
    if (reset) {
      this.reset();
    }
    return byts;
  }
}

exports.Bl = Bl;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/byte-utils.js":
/*!**************************************************!*\
  !*** ./node_modules/cborg/cjs/lib/byte-utils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

const useBuffer = globalThis.process && !globalThis.process.browser && globalThis.Buffer && typeof globalThis.Buffer.isBuffer === 'function';
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();
function isBuffer(buf) {
  return useBuffer && globalThis.Buffer.isBuffer(buf);
}
function asU8A(buf) {
  if (!(buf instanceof Uint8Array)) {
    return Uint8Array.from(buf);
  }
  return isBuffer(buf) ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength) : buf;
}
const toString = useBuffer ? (bytes, start, end) => {
  return end - start > 64 ? globalThis.Buffer.from(bytes.subarray(start, end)).toString('utf8') : utf8Slice(bytes, start, end);
} : (bytes, start, end) => {
  return end - start > 64 ? textDecoder.decode(bytes.subarray(start, end)) : utf8Slice(bytes, start, end);
};
const fromString = useBuffer ? string => {
  return string.length > 64 ? globalThis.Buffer.from(string) : utf8ToBytes(string);
} : string => {
  return string.length > 64 ? textEncoder.encode(string) : utf8ToBytes(string);
};
const fromArray = arr => {
  return Uint8Array.from(arr);
};
const slice = useBuffer ? (bytes, start, end) => {
  if (isBuffer(bytes)) {
    return new Uint8Array(bytes.subarray(start, end));
  }
  return bytes.slice(start, end);
} : (bytes, start, end) => {
  return bytes.slice(start, end);
};
const concat = useBuffer ? (chunks, length) => {
  chunks = chunks.map(c => c instanceof Uint8Array ? c : globalThis.Buffer.from(c));
  return asU8A(globalThis.Buffer.concat(chunks, length));
} : (chunks, length) => {
  const out = new Uint8Array(length);
  let off = 0;
  for (let b of chunks) {
    if (off + b.length > out.length) {
      b = b.subarray(0, out.length - off);
    }
    out.set(b, off);
    off += b.length;
  }
  return out;
};
const alloc = useBuffer ? size => {
  return globalThis.Buffer.allocUnsafe(size);
} : size => {
  return new Uint8Array(size);
};
const toHex = useBuffer ? d => {
  if (typeof d === 'string') {
    return d;
  }
  return globalThis.Buffer.from(toBytes(d)).toString('hex');
} : d => {
  if (typeof d === 'string') {
    return d;
  }
  return Array.prototype.reduce.call(toBytes(d), (p, c) => `${ p }${ c.toString(16).padStart(2, '0') }`, '');
};
const fromHex = useBuffer ? hex => {
  if (hex instanceof Uint8Array) {
    return hex;
  }
  return globalThis.Buffer.from(hex, 'hex');
} : hex => {
  if (hex instanceof Uint8Array) {
    return hex;
  }
  if (!hex.length) {
    return new Uint8Array(0);
  }
  return new Uint8Array(hex.split('').map((c, i, d) => i % 2 === 0 ? `0x${ c }${ d[i + 1] }` : '').filter(Boolean).map(e => parseInt(e, 16)));
};
function toBytes(obj) {
  if (obj instanceof Uint8Array && obj.constructor.name === 'Uint8Array') {
    return obj;
  }
  if (obj instanceof ArrayBuffer) {
    return new Uint8Array(obj);
  }
  if (ArrayBuffer.isView(obj)) {
    return new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
}
function compare(b1, b2) {
  if (isBuffer(b1) && isBuffer(b2)) {
    return b1.compare(b2);
  }
  for (let i = 0; i < b1.length; i++) {
    if (b1[i] === b2[i]) {
      continue;
    }
    return b1[i] < b2[i] ? -1 : 1;
  }
  return 0;
}
function utf8ToBytes(string, units = Infinity) {
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];
  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error('Invalid code point');
    }
  }
  return bytes;
}
function utf8Slice(buf, offset, end) {
  const res = [];
  while (offset < end) {
    const firstByte = buf[offset];
    let codePoint = null;
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (offset + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
      case 1:
        if (firstByte < 128) {
          codePoint = firstByte;
        }
        break;
      case 2:
        secondByte = buf[offset + 1];
        if ((secondByte & 192) === 128) {
          tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
          if (tempCodePoint > 127) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 3:
        secondByte = buf[offset + 1];
        thirdByte = buf[offset + 2];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
          if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 4:
        secondByte = buf[offset + 1];
        thirdByte = buf[offset + 2];
        fourthByte = buf[offset + 3];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
          if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
            codePoint = tempCodePoint;
          }
        }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    offset += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  let res = '';
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

exports.alloc = alloc;
exports.asU8A = asU8A;
exports.compare = compare;
exports.concat = concat;
exports.decodeCodePointsArray = decodeCodePointsArray;
exports.fromArray = fromArray;
exports.fromHex = fromHex;
exports.fromString = fromString;
exports.slice = slice;
exports.toHex = toHex;
exports.toString = toString;
exports.useBuffer = useBuffer;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/common.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/common.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

const decodeErrPrefix = 'CBOR decode error:';
const encodeErrPrefix = 'CBOR encode error:';
const uintMinorPrefixBytes = [];
uintMinorPrefixBytes[23] = 1;
uintMinorPrefixBytes[24] = 2;
uintMinorPrefixBytes[25] = 3;
uintMinorPrefixBytes[26] = 5;
uintMinorPrefixBytes[27] = 9;
function assertEnoughData(data, pos, need) {
  if (data.length - pos < need) {
    throw new Error(`${ decodeErrPrefix } not enough data for type`);
  }
}

exports.assertEnoughData = assertEnoughData;
exports.decodeErrPrefix = decodeErrPrefix;
exports.encodeErrPrefix = encodeErrPrefix;
exports.uintMinorPrefixBytes = uintMinorPrefixBytes;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/decode.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/decode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");
var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var jump = __webpack_require__(/*! ./jump.js */ "./node_modules/cborg/cjs/lib/jump.js");

const defaultDecodeOptions = {
  strict: false,
  allowIndefinite: true,
  allowUndefined: true,
  allowBigInt: true
};
class Tokeniser {
  constructor(data, options = {}) {
    this.pos = 0;
    this.data = data;
    this.options = options;
  }
  done() {
    return this.pos >= this.data.length;
  }
  next() {
    const byt = this.data[this.pos];
    let token = jump.quick[byt];
    if (token === undefined) {
      const decoder = jump.jump[byt];
      if (!decoder) {
        throw new Error(`${ common.decodeErrPrefix } no decoder for major type ${ byt >>> 5 } (byte 0x${ byt.toString(16).padStart(2, '0') })`);
      }
      const minor = byt & 31;
      token = decoder(this.data, this.pos, minor, this.options);
    }
    this.pos += token.encodedLength;
    return token;
  }
}
const DONE = Symbol.for('DONE');
const BREAK = Symbol.for('BREAK');
function tokenToArray(token, tokeniser, options) {
  const arr = [];
  for (let i = 0; i < token.value; i++) {
    const value = tokensToObject(tokeniser, options);
    if (value === BREAK) {
      if (token.value === Infinity) {
        break;
      }
      throw new Error(`${ common.decodeErrPrefix } got unexpected break to lengthed array`);
    }
    if (value === DONE) {
      throw new Error(`${ common.decodeErrPrefix } found array but not enough entries (got ${ i }, expected ${ token.value })`);
    }
    arr[i] = value;
  }
  return arr;
}
function tokenToMap(token, tokeniser, options) {
  const useMaps = options.useMaps === true;
  const obj = useMaps ? undefined : {};
  const m = useMaps ? new Map() : undefined;
  for (let i = 0; i < token.value; i++) {
    const key = tokensToObject(tokeniser, options);
    if (key === BREAK) {
      if (token.value === Infinity) {
        break;
      }
      throw new Error(`${ common.decodeErrPrefix } got unexpected break to lengthed map`);
    }
    if (key === DONE) {
      throw new Error(`${ common.decodeErrPrefix } found map but not enough entries (got ${ i } [no key], expected ${ token.value })`);
    }
    if (useMaps !== true && typeof key !== 'string') {
      throw new Error(`${ common.decodeErrPrefix } non-string keys not supported (got ${ typeof key })`);
    }
    const value = tokensToObject(tokeniser, options);
    if (value === DONE) {
      throw new Error(`${ common.decodeErrPrefix } found map but not enough entries (got ${ i } [no value], expected ${ token.value })`);
    }
    if (useMaps) {
      m.set(key, value);
    } else {
      obj[key] = value;
    }
  }
  return useMaps ? m : obj;
}
function tokensToObject(tokeniser, options) {
  if (tokeniser.done()) {
    return DONE;
  }
  const token$1 = tokeniser.next();
  if (token$1.type === token.Type.break) {
    return BREAK;
  }
  if (token$1.type.terminal) {
    return token$1.value;
  }
  if (token$1.type === token.Type.array) {
    return tokenToArray(token$1, tokeniser, options);
  }
  if (token$1.type === token.Type.map) {
    return tokenToMap(token$1, tokeniser, options);
  }
  if (token$1.type === token.Type.tag) {
    if (options.tags && typeof options.tags[token$1.value] === 'function') {
      const tagged = tokensToObject(tokeniser, options);
      return options.tags[token$1.value](tagged);
    }
    throw new Error(`${ common.decodeErrPrefix } tag not supported (${ token$1.value })`);
  }
  throw new Error('unsupported');
}
function decode(data, options) {
  if (!(data instanceof Uint8Array)) {
    throw new Error(`${ common.decodeErrPrefix } data to decode must be a Uint8Array`);
  }
  options = Object.assign({}, defaultDecodeOptions, options);
  const tokeniser = options.tokenizer || new Tokeniser(data, options);
  const decoded = tokensToObject(tokeniser, options);
  if (decoded === DONE) {
    throw new Error(`${ common.decodeErrPrefix } did not find any content to decode`);
  }
  if (decoded === BREAK) {
    throw new Error(`${ common.decodeErrPrefix } got unexpected break`);
  }
  if (!tokeniser.done()) {
    throw new Error(`${ common.decodeErrPrefix } too many terminals, data makes no sense`);
  }
  return decoded;
}

exports.Tokeniser = Tokeniser;
exports.decode = decode;
exports.tokensToObject = tokensToObject;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/encode.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/encode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var is = __webpack_require__(/*! ./is.js */ "./node_modules/cborg/cjs/lib/is.js");
var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var bl = __webpack_require__(/*! ./bl.js */ "./node_modules/cborg/cjs/lib/bl.js");
var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");
var jump = __webpack_require__(/*! ./jump.js */ "./node_modules/cborg/cjs/lib/jump.js");
var byteUtils = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/cjs/lib/byte-utils.js");
var _0uint = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/cjs/lib/0uint.js");
var _1negint = __webpack_require__(/*! ./1negint.js */ "./node_modules/cborg/cjs/lib/1negint.js");
var _2bytes = __webpack_require__(/*! ./2bytes.js */ "./node_modules/cborg/cjs/lib/2bytes.js");
var _3string = __webpack_require__(/*! ./3string.js */ "./node_modules/cborg/cjs/lib/3string.js");
var _4array = __webpack_require__(/*! ./4array.js */ "./node_modules/cborg/cjs/lib/4array.js");
var _5map = __webpack_require__(/*! ./5map.js */ "./node_modules/cborg/cjs/lib/5map.js");
var _6tag = __webpack_require__(/*! ./6tag.js */ "./node_modules/cborg/cjs/lib/6tag.js");
var _7float = __webpack_require__(/*! ./7float.js */ "./node_modules/cborg/cjs/lib/7float.js");

const defaultEncodeOptions = {
  float64: false,
  mapSorter,
  quickEncodeToken: jump.quickEncodeToken
};
const cborEncoders = [];
cborEncoders[token.Type.uint.major] = _0uint.encodeUint;
cborEncoders[token.Type.negint.major] = _1negint.encodeNegint;
cborEncoders[token.Type.bytes.major] = _2bytes.encodeBytes;
cborEncoders[token.Type.string.major] = _3string.encodeString;
cborEncoders[token.Type.array.major] = _4array.encodeArray;
cborEncoders[token.Type.map.major] = _5map.encodeMap;
cborEncoders[token.Type.tag.major] = _6tag.encodeTag;
cborEncoders[token.Type.float.major] = _7float.encodeFloat;
const buf = new bl.Bl();
class Ref {
  constructor(obj, parent) {
    this.obj = obj;
    this.parent = parent;
  }
  includes(obj) {
    let p = this;
    do {
      if (p.obj === obj) {
        return true;
      }
    } while (p = p.parent);
    return false;
  }
  static createCheck(stack, obj) {
    if (stack && stack.includes(obj)) {
      throw new Error(`${ common.encodeErrPrefix } object contains circular references`);
    }
    return new Ref(obj, stack);
  }
}
const simpleTokens = {
  null: new token.Token(token.Type.null, null),
  undefined: new token.Token(token.Type.undefined, undefined),
  true: new token.Token(token.Type.true, true),
  false: new token.Token(token.Type.false, false),
  emptyArray: new token.Token(token.Type.array, 0),
  emptyMap: new token.Token(token.Type.map, 0)
};
const typeEncoders = {
  number(obj, _typ, _options, _refStack) {
    if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) {
      return new token.Token(token.Type.float, obj);
    } else if (obj >= 0) {
      return new token.Token(token.Type.uint, obj);
    } else {
      return new token.Token(token.Type.negint, obj);
    }
  },
  bigint(obj, _typ, _options, _refStack) {
    if (obj >= BigInt(0)) {
      return new token.Token(token.Type.uint, obj);
    } else {
      return new token.Token(token.Type.negint, obj);
    }
  },
  Uint8Array(obj, _typ, _options, _refStack) {
    return new token.Token(token.Type.bytes, obj);
  },
  string(obj, _typ, _options, _refStack) {
    return new token.Token(token.Type.string, obj);
  },
  boolean(obj, _typ, _options, _refStack) {
    return obj ? simpleTokens.true : simpleTokens.false;
  },
  null(_obj, _typ, _options, _refStack) {
    return simpleTokens.null;
  },
  undefined(_obj, _typ, _options, _refStack) {
    return simpleTokens.undefined;
  },
  ArrayBuffer(obj, _typ, _options, _refStack) {
    return new token.Token(token.Type.bytes, new Uint8Array(obj));
  },
  DataView(obj, _typ, _options, _refStack) {
    return new token.Token(token.Type.bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
  },
  Array(obj, _typ, options, refStack) {
    if (!obj.length) {
      if (options.addBreakTokens === true) {
        return [
          simpleTokens.emptyArray,
          new token.Token(token.Type.break)
        ];
      }
      return simpleTokens.emptyArray;
    }
    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;
    for (const e of obj) {
      entries[i++] = objectToTokens(e, options, refStack);
    }
    if (options.addBreakTokens) {
      return [
        new token.Token(token.Type.array, obj.length),
        entries,
        new token.Token(token.Type.break)
      ];
    }
    return [
      new token.Token(token.Type.array, obj.length),
      entries
    ];
  },
  Object(obj, typ, options, refStack) {
    const isMap = typ !== 'Object';
    const keys = isMap ? obj.keys() : Object.keys(obj);
    const length = isMap ? obj.size : keys.length;
    if (!length) {
      if (options.addBreakTokens === true) {
        return [
          simpleTokens.emptyMap,
          new token.Token(token.Type.break)
        ];
      }
      return simpleTokens.emptyMap;
    }
    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;
    for (const key of keys) {
      entries[i++] = [
        objectToTokens(key, options, refStack),
        objectToTokens(isMap ? obj.get(key) : obj[key], options, refStack)
      ];
    }
    sortMapEntries(entries, options);
    if (options.addBreakTokens) {
      return [
        new token.Token(token.Type.map, length),
        entries,
        new token.Token(token.Type.break)
      ];
    }
    return [
      new token.Token(token.Type.map, length),
      entries
    ];
  }
};
typeEncoders.Map = typeEncoders.Object;
typeEncoders.Buffer = typeEncoders.Uint8Array;
for (const typ of 'Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64'.split(' ')) {
  typeEncoders[`${ typ }Array`] = typeEncoders.DataView;
}
function objectToTokens(obj, options = {}, refStack) {
  const typ = is.is(obj);
  const customTypeEncoder = options && options.typeEncoders && options.typeEncoders[typ] || typeEncoders[typ];
  if (typeof customTypeEncoder === 'function') {
    const tokens = customTypeEncoder(obj, typ, options, refStack);
    if (tokens != null) {
      return tokens;
    }
  }
  const typeEncoder = typeEncoders[typ];
  if (!typeEncoder) {
    throw new Error(`${ common.encodeErrPrefix } unsupported type: ${ typ }`);
  }
  return typeEncoder(obj, typ, options, refStack);
}
function sortMapEntries(entries, options) {
  if (options.mapSorter) {
    entries.sort(options.mapSorter);
  }
}
function mapSorter(e1, e2) {
  const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
  const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];
  if (keyToken1.type !== keyToken2.type) {
    return keyToken1.type.compare(keyToken2.type);
  }
  const major = keyToken1.type.major;
  const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);
  if (tcmp === 0) {
    console.warn('WARNING: complex key types used, CBOR key sorting guarantees are gone');
  }
  return tcmp;
}
function tokensToEncoded(buf, tokens, encoders, options) {
  if (Array.isArray(tokens)) {
    for (const token of tokens) {
      tokensToEncoded(buf, token, encoders, options);
    }
  } else {
    encoders[tokens.type.major](buf, tokens, options);
  }
}
function encodeCustom(data, encoders, options) {
  const tokens = objectToTokens(data, options);
  if (!Array.isArray(tokens) && options.quickEncodeToken) {
    const quickBytes = options.quickEncodeToken(tokens);
    if (quickBytes) {
      return quickBytes;
    }
    const encoder = encoders[tokens.type.major];
    if (encoder.encodedSize) {
      const size = encoder.encodedSize(tokens, options);
      const buf = new bl.Bl(size);
      encoder(buf, tokens, options);
      if (buf.chunks.length !== 1) {
        throw new Error(`Unexpected error: pre-calculated length for ${ tokens } was wrong`);
      }
      return byteUtils.asU8A(buf.chunks[0]);
    }
  }
  tokensToEncoded(buf, tokens, encoders, options);
  return buf.toBytes(true);
}
function encode(data, options) {
  options = Object.assign({}, defaultEncodeOptions, options);
  return encodeCustom(data, cborEncoders, options);
}

exports.Ref = Ref;
exports.encode = encode;
exports.encodeCustom = encodeCustom;
exports.objectToTokens = objectToTokens;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/is.js":
/*!******************************************!*\
  !*** ./node_modules/cborg/cjs/lib/is.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

const typeofs = [
  'string',
  'number',
  'bigint',
  'symbol'
];
const objectTypeNames = [
  'Function',
  'Generator',
  'AsyncGenerator',
  'GeneratorFunction',
  'AsyncGeneratorFunction',
  'AsyncFunction',
  'Observable',
  'Array',
  'Buffer',
  'Object',
  'RegExp',
  'Date',
  'Error',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'DataView',
  'Promise',
  'URL',
  'HTMLElement',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array',
  'BigInt64Array',
  'BigUint64Array'
];
function is(value) {
  if (value === null) {
    return 'null';
  }
  if (value === undefined) {
    return 'undefined';
  }
  if (value === true || value === false) {
    return 'boolean';
  }
  const typeOf = typeof value;
  if (typeofs.includes(typeOf)) {
    return typeOf;
  }
  if (typeOf === 'function') {
    return 'Function';
  }
  if (Array.isArray(value)) {
    return 'Array';
  }
  if (isBuffer(value)) {
    return 'Buffer';
  }
  const objectType = getObjectType(value);
  if (objectType) {
    return objectType;
  }
  return 'Object';
}
function isBuffer(value) {
  return value && value.constructor && value.constructor.isBuffer && value.constructor.isBuffer.call(null, value);
}
function getObjectType(value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
  if (objectTypeNames.includes(objectTypeName)) {
    return objectTypeName;
  }
  return undefined;
}

exports.is = is;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/jump.js":
/*!********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/jump.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var token = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/cjs/lib/token.js");
var _0uint = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/cjs/lib/0uint.js");
var _1negint = __webpack_require__(/*! ./1negint.js */ "./node_modules/cborg/cjs/lib/1negint.js");
var _2bytes = __webpack_require__(/*! ./2bytes.js */ "./node_modules/cborg/cjs/lib/2bytes.js");
var _3string = __webpack_require__(/*! ./3string.js */ "./node_modules/cborg/cjs/lib/3string.js");
var _4array = __webpack_require__(/*! ./4array.js */ "./node_modules/cborg/cjs/lib/4array.js");
var _5map = __webpack_require__(/*! ./5map.js */ "./node_modules/cborg/cjs/lib/5map.js");
var _6tag = __webpack_require__(/*! ./6tag.js */ "./node_modules/cborg/cjs/lib/6tag.js");
var _7float = __webpack_require__(/*! ./7float.js */ "./node_modules/cborg/cjs/lib/7float.js");
var common = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/cjs/lib/common.js");
var byteUtils = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/cjs/lib/byte-utils.js");

function invalidMinor(data, pos, minor) {
  throw new Error(`${ common.decodeErrPrefix } encountered invalid minor (${ minor }) for major ${ data[pos] >>> 5 }`);
}
function errorer(msg) {
  return () => {
    throw new Error(`${ common.decodeErrPrefix } ${ msg }`);
  };
}
const jump = [];
for (let i = 0; i <= 23; i++) {
  jump[i] = invalidMinor;
}
jump[24] = _0uint.decodeUint8;
jump[25] = _0uint.decodeUint16;
jump[26] = _0uint.decodeUint32;
jump[27] = _0uint.decodeUint64;
jump[28] = invalidMinor;
jump[29] = invalidMinor;
jump[30] = invalidMinor;
jump[31] = invalidMinor;
for (let i = 32; i <= 55; i++) {
  jump[i] = invalidMinor;
}
jump[56] = _1negint.decodeNegint8;
jump[57] = _1negint.decodeNegint16;
jump[58] = _1negint.decodeNegint32;
jump[59] = _1negint.decodeNegint64;
jump[60] = invalidMinor;
jump[61] = invalidMinor;
jump[62] = invalidMinor;
jump[63] = invalidMinor;
for (let i = 64; i <= 87; i++) {
  jump[i] = _2bytes.decodeBytesCompact;
}
jump[88] = _2bytes.decodeBytes8;
jump[89] = _2bytes.decodeBytes16;
jump[90] = _2bytes.decodeBytes32;
jump[91] = _2bytes.decodeBytes64;
jump[92] = invalidMinor;
jump[93] = invalidMinor;
jump[94] = invalidMinor;
jump[95] = errorer('indefinite length bytes/strings are not supported');
for (let i = 96; i <= 119; i++) {
  jump[i] = _3string.decodeStringCompact;
}
jump[120] = _3string.decodeString8;
jump[121] = _3string.decodeString16;
jump[122] = _3string.decodeString32;
jump[123] = _3string.decodeString64;
jump[124] = invalidMinor;
jump[125] = invalidMinor;
jump[126] = invalidMinor;
jump[127] = errorer('indefinite length bytes/strings are not supported');
for (let i = 128; i <= 151; i++) {
  jump[i] = _4array.decodeArrayCompact;
}
jump[152] = _4array.decodeArray8;
jump[153] = _4array.decodeArray16;
jump[154] = _4array.decodeArray32;
jump[155] = _4array.decodeArray64;
jump[156] = invalidMinor;
jump[157] = invalidMinor;
jump[158] = invalidMinor;
jump[159] = _4array.decodeArrayIndefinite;
for (let i = 160; i <= 183; i++) {
  jump[i] = _5map.decodeMapCompact;
}
jump[184] = _5map.decodeMap8;
jump[185] = _5map.decodeMap16;
jump[186] = _5map.decodeMap32;
jump[187] = _5map.decodeMap64;
jump[188] = invalidMinor;
jump[189] = invalidMinor;
jump[190] = invalidMinor;
jump[191] = _5map.decodeMapIndefinite;
for (let i = 192; i <= 215; i++) {
  jump[i] = _6tag.decodeTagCompact;
}
jump[216] = _6tag.decodeTag8;
jump[217] = _6tag.decodeTag16;
jump[218] = _6tag.decodeTag32;
jump[219] = _6tag.decodeTag64;
jump[220] = invalidMinor;
jump[221] = invalidMinor;
jump[222] = invalidMinor;
jump[223] = invalidMinor;
for (let i = 224; i <= 243; i++) {
  jump[i] = errorer('simple values are not supported');
}
jump[244] = invalidMinor;
jump[245] = invalidMinor;
jump[246] = invalidMinor;
jump[247] = _7float.decodeUndefined;
jump[248] = errorer('simple values are not supported');
jump[249] = _7float.decodeFloat16;
jump[250] = _7float.decodeFloat32;
jump[251] = _7float.decodeFloat64;
jump[252] = invalidMinor;
jump[253] = invalidMinor;
jump[254] = invalidMinor;
jump[255] = _7float.decodeBreak;
const quick = [];
for (let i = 0; i < 24; i++) {
  quick[i] = new token.Token(token.Type.uint, i, 1);
}
for (let i = -1; i >= -24; i--) {
  quick[31 - i] = new token.Token(token.Type.negint, i, 1);
}
quick[64] = new token.Token(token.Type.bytes, new Uint8Array(0), 1);
quick[96] = new token.Token(token.Type.string, '', 1);
quick[128] = new token.Token(token.Type.array, 0, 1);
quick[160] = new token.Token(token.Type.map, 0, 1);
quick[244] = new token.Token(token.Type.false, false, 1);
quick[245] = new token.Token(token.Type.true, true, 1);
quick[246] = new token.Token(token.Type.null, null, 1);
function quickEncodeToken(token$1) {
  switch (token$1.type) {
  case token.Type.false:
    return byteUtils.fromArray([244]);
  case token.Type.true:
    return byteUtils.fromArray([245]);
  case token.Type.null:
    return byteUtils.fromArray([246]);
  case token.Type.bytes:
    if (!token$1.value.length) {
      return byteUtils.fromArray([64]);
    }
    return;
  case token.Type.string:
    if (token$1.value === '') {
      return byteUtils.fromArray([96]);
    }
    return;
  case token.Type.array:
    if (token$1.value === 0) {
      return byteUtils.fromArray([128]);
    }
    return;
  case token.Type.map:
    if (token$1.value === 0) {
      return byteUtils.fromArray([160]);
    }
    return;
  case token.Type.uint:
    if (token$1.value < 24) {
      return byteUtils.fromArray([Number(token$1.value)]);
    }
    return;
  case token.Type.negint:
    if (token$1.value >= -24) {
      return byteUtils.fromArray([31 - Number(token$1.value)]);
    }
  }
}

exports.jump = jump;
exports.quick = quick;
exports.quickEncodeToken = quickEncodeToken;


/***/ }),

/***/ "./node_modules/cborg/cjs/lib/token.js":
/*!*********************************************!*\
  !*** ./node_modules/cborg/cjs/lib/token.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

class Type {
  constructor(major, name, terminal) {
    this.major = major;
    this.majorEncoded = major << 5;
    this.name = name;
    this.terminal = terminal;
  }
  toString() {
    return `Type[${ this.major }].${ this.name }`;
  }
  compare(typ) {
    return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0;
  }
}
Type.uint = new Type(0, 'uint', true);
Type.negint = new Type(1, 'negint', true);
Type.bytes = new Type(2, 'bytes', true);
Type.string = new Type(3, 'string', true);
Type.array = new Type(4, 'array', false);
Type.map = new Type(5, 'map', false);
Type.tag = new Type(6, 'tag', false);
Type.float = new Type(7, 'float', true);
Type.false = new Type(7, 'false', true);
Type.true = new Type(7, 'true', true);
Type.null = new Type(7, 'null', true);
Type.undefined = new Type(7, 'undefined', true);
Type.break = new Type(7, 'break', true);
class Token {
  constructor(type, value, encodedLength) {
    this.type = type;
    this.value = value;
    this.encodedLength = encodedLength;
    this.encodedBytes = undefined;
  }
  toString() {
    return `Token[${ this.type }].${ this.value }`;
  }
}

exports.Token = Token;
exports.Type = Type;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/LazyIpfsImage.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/LazyIpfsImage.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".upload__form {\n  max-width: 600px;\n}\n\n.upload_message {\n  overflow-wrap: break-word;\n}\n\n.upload__frame {\n  width: 100%;\n  min-height: 400px;\n  display:block;\n  position: relative;\n  border: solid white 3px;\n}\n\n.upload__placeholder , .upload__artwork {\n  background-color: transparent;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  max-height: 100%;\n  max-width: 100%;\n  transform: translate(-50%, -50%);\n}\n\ninput#file_input {\n  display: none;\n}\n\n.upload__btn {\n    margin: 1.0rem;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Spinner.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Spinner.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loader {\n    color: #1e5050;\n    font-size: 20px;\n    margin: 100px auto;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    position: relative;\n    text-indent: -9999em;\n    -webkit-animation: load4 1.3s infinite linear;\n    animation: load4 1.3s infinite linear;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n  }\n  @-webkit-keyframes load4 {\n    0%,\n    100% {\n      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n    }\n    12.5% {\n      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    25% {\n      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    37.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    50% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    62.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n    }\n    75% {\n      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n    }\n    87.5% {\n      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n    }\n  }\n  @keyframes load4 {\n    0%,\n    100% {\n      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n    }\n    12.5% {\n      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    25% {\n      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    37.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    50% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    62.5% {\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n    }\n    75% {\n      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n    }\n    87.5% {\n      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n    }\n  }\n  ", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/multiformats/cjs/src/bases/base.js":
/*!*********************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/bases/base.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var baseX$1 = __webpack_require__(/*! ../../vendor/base-x.js */ "./node_modules/multiformats/cjs/vendor/base-x.js");
var bytes = __webpack_require__(/*! ../bytes.js */ "./node_modules/multiformats/cjs/src/bytes.js");

class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${ this.prefix }${ this.baseEncode(bytes) }`;
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === 'string') {
      switch (text[0]) {
      case this.prefix: {
          return this.baseDecode(text.slice(1));
        }
      default: {
          throw Error(`Unable to decode multibase string ${ JSON.stringify(text) }, ${ this.name } decoder only supports inputs prefixed with ${ this.prefix }`);
        }
      }
    } else {
      throw Error('Can only multibase decode strings');
    }
  }
  or(decoder) {
    const decoders = {
      [this.prefix]: this,
      ...decoder.decoders || { [decoder.prefix]: decoder }
    };
    return new ComposedDecoder(decoders);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    const other = decoder.decoders || { [decoder.prefix]: decoder };
    return new ComposedDecoder({
      ...this.decoders,
      ...other
    });
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${ JSON.stringify(input) }, only inputs prefixed with ${ Object.keys(this.decoders) } are supported`);
    }
  }
}
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({name, prefix, encode, decode}) => new Codec(name, prefix, encode, decode);
const baseX = ({prefix, name, alphabet}) => {
  const {encode, decode} = baseX$1(alphabet, name);
  return from({
    prefix,
    name,
    encode,
    decode: text => bytes.coerce(decode(text))
  });
};
const decode = (string, alphabet, bitsPerChar, name) => {
  const codes = {};
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }
  let end = string.length;
  while (string[end - 1] === '=') {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string[i]];
    if (value === undefined) {
      throw new SyntaxError(`Non-${ name } character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError('Unexpected end of data');
  }
  return out;
};
const encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '=';
  const mask = (1 << bitsPerChar) - 1;
  let out = '';
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += '=';
    }
  }
  return out;
};
const rfc4648 = ({name, prefix, bitsPerChar, alphabet}) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet, bitsPerChar, name);
    }
  });
};

exports.Codec = Codec;
exports.baseX = baseX;
exports.from = from;
exports.rfc4648 = rfc4648;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/bases/base32.js":
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/bases/base32.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var base = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/cjs/src/bases/base.js");

const base32 = base.rfc4648({
  prefix: 'b',
  name: 'base32',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
  bitsPerChar: 5
});
const base32upper = base.rfc4648({
  prefix: 'B',
  name: 'base32upper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bitsPerChar: 5
});
const base32pad = base.rfc4648({
  prefix: 'c',
  name: 'base32pad',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
  bitsPerChar: 5
});
const base32padupper = base.rfc4648({
  prefix: 'C',
  name: 'base32padupper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  bitsPerChar: 5
});
const base32hex = base.rfc4648({
  prefix: 'v',
  name: 'base32hex',
  alphabet: '0123456789abcdefghijklmnopqrstuv',
  bitsPerChar: 5
});
const base32hexupper = base.rfc4648({
  prefix: 'V',
  name: 'base32hexupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  bitsPerChar: 5
});
const base32hexpad = base.rfc4648({
  prefix: 't',
  name: 'base32hexpad',
  alphabet: '0123456789abcdefghijklmnopqrstuv=',
  bitsPerChar: 5
});
const base32hexpadupper = base.rfc4648({
  prefix: 'T',
  name: 'base32hexpadupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  bitsPerChar: 5
});
const base32z = base.rfc4648({
  prefix: 'h',
  name: 'base32z',
  alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  bitsPerChar: 5
});

exports.base32 = base32;
exports.base32hex = base32hex;
exports.base32hexpad = base32hexpad;
exports.base32hexpadupper = base32hexpadupper;
exports.base32hexupper = base32hexupper;
exports.base32pad = base32pad;
exports.base32padupper = base32padupper;
exports.base32upper = base32upper;
exports.base32z = base32z;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/bases/base58.js":
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/bases/base58.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var base = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/cjs/src/bases/base.js");

const base58btc = base.baseX({
  name: 'base58btc',
  prefix: 'z',
  alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
});
const base58flickr = base.baseX({
  name: 'base58flickr',
  prefix: 'Z',
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
});

exports.base58btc = base58btc;
exports.base58flickr = base58flickr;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/block.js":
/*!****************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/block.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

__webpack_require__(/*! ./index.js */ "./node_modules/multiformats/cjs/src/index.js");
var cid = __webpack_require__(/*! ./cid.js */ "./node_modules/multiformats/cjs/src/cid.js");
var bytes = __webpack_require__(/*! ./bytes.js */ "./node_modules/multiformats/cjs/src/bytes.js");

const readonly = ({enumerable = true, configurable = false} = {}) => ({
  enumerable,
  configurable,
  writable: false
});
const links = function* (source, base) {
  if (source == null)
    return;
  if (source instanceof Uint8Array)
    return;
  for (const [key, value] of Object.entries(source)) {
    const path = [
      ...base,
      key
    ];
    if (value != null && typeof value === 'object') {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [
            ...path,
            index
          ];
          const cid$1 = cid.CID.asCID(element);
          if (cid$1) {
            yield [
              elementPath.join('/'),
              cid$1
            ];
          } else if (typeof element === 'object') {
            yield* links(element, elementPath);
          }
        }
      } else {
        const cid$1 = cid.CID.asCID(value);
        if (cid$1) {
          yield [
            path.join('/'),
            cid$1
          ];
        } else {
          yield* links(value, path);
        }
      }
    }
  }
};
const tree = function* (source, base) {
  if (source == null)
    return;
  for (const [key, value] of Object.entries(source)) {
    const path = [
      ...base,
      key
    ];
    yield path.join('/');
    if (value != null && !(value instanceof Uint8Array) && typeof value === 'object' && !cid.CID.asCID(value)) {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [
            ...path,
            index
          ];
          yield elementPath.join('/');
          if (typeof element === 'object' && !cid.CID.asCID(element)) {
            yield* tree(element, elementPath);
          }
        }
      } else {
        yield* tree(value, path);
      }
    }
  }
};
const get = (source, path) => {
  let node = source;
  for (const [index, key] of path.entries()) {
    node = node[key];
    if (node == null) {
      throw new Error(`Object has no property at ${ path.slice(0, index + 1).map(part => `[${ JSON.stringify(part) }]`).join('') }`);
    }
    const cid$1 = cid.CID.asCID(node);
    if (cid$1) {
      return {
        value: cid$1,
        remaining: path.slice(index + 1).join('/')
      };
    }
  }
  return { value: node };
};
class Block {
  constructor({cid, bytes, value}) {
    if (!cid || !bytes || typeof value === 'undefined')
      throw new Error('Missing required argument');
    this.cid = cid;
    this.bytes = bytes;
    this.value = value;
    this.asBlock = this;
    Object.defineProperties(this, {
      cid: readonly(),
      bytes: readonly(),
      value: readonly(),
      asBlock: readonly()
    });
  }
  links() {
    return links(this.value, []);
  }
  tree() {
    return tree(this.value, []);
  }
  get(path = '/') {
    return get(this.value, path.split('/').filter(Boolean));
  }
}
const encode = async ({value, codec, hasher}) => {
  if (typeof value === 'undefined')
    throw new Error('Missing required argument "value"');
  if (!codec || !hasher)
    throw new Error('Missing required argument: codec or hasher');
  const bytes = codec.encode(value);
  const hash = await hasher.digest(bytes);
  const cid$1 = cid.CID.create(1, codec.code, hash);
  return new Block({
    value,
    bytes,
    cid: cid$1
  });
};
const decode = async ({bytes, codec, hasher}) => {
  if (!bytes)
    throw new Error('Missing required argument "bytes"');
  if (!codec || !hasher)
    throw new Error('Missing required argument: codec or hasher');
  const value = codec.decode(bytes);
  const hash = await hasher.digest(bytes);
  const cid$1 = cid.CID.create(1, codec.code, hash);
  return new Block({
    value,
    bytes,
    cid: cid$1
  });
};
const createUnsafe = ({
  bytes,
  cid,
  value: maybeValue,
  codec
}) => {
  const value = maybeValue !== undefined ? maybeValue : codec && codec.decode(bytes);
  if (value === undefined)
    throw new Error('Missing required argument, must either provide "value" or "codec"');
  return new Block({
    cid,
    bytes,
    value
  });
};
const create = async ({bytes: bytes$1, cid, hasher, codec}) => {
  if (!bytes$1)
    throw new Error('Missing required argument "bytes"');
  if (!hasher)
    throw new Error('Missing required argument "hasher"');
  const value = codec.decode(bytes$1);
  const hash = await hasher.digest(bytes$1);
  if (!bytes.equals(cid.multihash.bytes, hash.bytes)) {
    throw new Error('CID hash does not match bytes');
  }
  return createUnsafe({
    bytes: bytes$1,
    cid,
    value,
    codec
  });
};

exports.Block = Block;
exports.create = create;
exports.createUnsafe = createUnsafe;
exports.decode = decode;
exports.encode = encode;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/bytes.js":
/*!****************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/bytes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

const empty = new Uint8Array(0);
const toHex = d => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '');
const fromHex = hex => {
  const hexes = hex.match(/../g);
  return hexes ? new Uint8Array(hexes.map(b => parseInt(b, 16))) : empty;
};
const equals = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array')
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
};
const isBinary = o => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
const fromString = str => new TextEncoder().encode(str);
const toString = b => new TextDecoder().decode(b);

exports.coerce = coerce;
exports.empty = empty;
exports.equals = equals;
exports.fromHex = fromHex;
exports.fromString = fromString;
exports.isBinary = isBinary;
exports.toHex = toHex;
exports.toString = toString;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/cid.js":
/*!**************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/cid.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var varint = __webpack_require__(/*! ./varint.js */ "./node_modules/multiformats/cjs/src/varint.js");
var digest = __webpack_require__(/*! ./hashes/digest.js */ "./node_modules/multiformats/cjs/src/hashes/digest.js");
var base58 = __webpack_require__(/*! ./bases/base58.js */ "./node_modules/multiformats/cjs/src/bases/base58.js");
var base32 = __webpack_require__(/*! ./bases/base32.js */ "./node_modules/multiformats/cjs/src/bases/base32.js");
var bytes = __webpack_require__(/*! ./bytes.js */ "./node_modules/multiformats/cjs/src/bytes.js");

class CID {
  constructor(version, code, multihash, bytes) {
    this.code = code;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
    case 0: {
        return this;
      }
    default: {
        const {code, multihash} = this;
        if (code !== DAG_PB_CODE) {
          throw new Error('Cannot convert a non dag-pb CID to CIDv0');
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0');
        }
        return CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
    case 0: {
        const {code, digest: digest$1} = this.multihash;
        const multihash = digest.create(code, digest$1);
        return CID.createV1(this.code, multihash);
      }
    case 1: {
        return this;
      }
    default: {
        throw Error(`Can not convert CID version ${ this.version } to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && digest.equals(this.multihash, other.multihash);
  }
  toString(base) {
    const {bytes, version, _baseCache} = this;
    switch (version) {
    case 0:
      return toStringV0(bytes, _baseCache, base || base58.base58btc.encoder);
    default:
      return toStringV1(bytes, _baseCache, base || base32.base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return 'CID';
  }
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return 'CID(' + this.toString() + ')';
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error('Deprecated, use .toString()');
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const {version, code, multihash, bytes} = value;
      return new CID(version, code, multihash, bytes || encodeCID(version, code, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const {version, multihash, code} = value;
      const digest$1 = digest.decode(multihash);
      return CID.create(version, code, digest$1);
    } else {
      return null;
    }
  }
  static create(version, code, digest) {
    if (typeof code !== 'number') {
      throw new Error('String codecs are no longer supported');
    }
    switch (version) {
    case 0: {
        if (code !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${ DAG_PB_CODE }) block encoding`);
        } else {
          return new CID(version, code, digest, digest.bytes);
        }
      }
    case 1: {
        const bytes = encodeCID(version, code, digest.bytes);
        return new CID(version, code, digest, bytes);
      }
    default: {
        throw new Error('Invalid version');
      }
    }
  }
  static createV0(digest) {
    return CID.create(0, DAG_PB_CODE, digest);
  }
  static createV1(code, digest) {
    return CID.create(1, code, digest);
  }
  static decode(bytes) {
    const [cid, remainder] = CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error('Incorrect length');
    }
    return cid;
  }
  static decodeFirst(bytes$1) {
    const specs = CID.inspectBytes(bytes$1);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = bytes.coerce(bytes$1.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error('Incorrect length');
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest$1 = new digest.Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? CID.createV0(digest$1) : CID.createV1(specs.codec, digest$1);
    return [
      cid,
      bytes$1.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length] = varint.decode(initialBytes.subarray(offset));
      offset += length;
      return i;
    };
    let version = next();
    let codec = DAG_PB_CODE;
    if (version === 18) {
      version = 0;
      offset = 0;
    } else if (version === 1) {
      codec = next();
    }
    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${ version }`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base) {
    const [prefix, bytes] = parseCIDtoBytes(source, base);
    const cid = CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
}
const parseCIDtoBytes = (source, base) => {
  switch (source[0]) {
  case 'Q': {
      const decoder = base || base58.base58btc;
      return [
        base58.base58btc.prefix,
        decoder.decode(`${ base58.base58btc.prefix }${ source }`)
      ];
    }
  case base58.base58btc.prefix: {
      const decoder = base || base58.base58btc;
      return [
        base58.base58btc.prefix,
        decoder.decode(source)
      ];
    }
  case base32.base32.prefix: {
      const decoder = base || base32.base32;
      return [
        base32.base32.prefix,
        decoder.decode(source)
      ];
    }
  default: {
      if (base == null) {
        throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided');
      }
      return [
        source[0],
        base.decode(source)
      ];
    }
  }
};
const toStringV0 = (bytes, cache, base) => {
  const {prefix} = base;
  if (prefix !== base58.base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${ base.name } encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes).slice(1);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const toStringV1 = (bytes, cache, base) => {
  const {prefix} = base;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version, code, multihash) => {
  const codeOffset = varint.encodingLength(version);
  const hashOffset = codeOffset + varint.encodingLength(code);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  varint.encodeTo(version, bytes, 0);
  varint.encodeTo(code, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
const cidSymbol = Symbol.for('@ipld/js-cid/CID');
const readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
const hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
const version = '0.0.0-dev';
const deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

exports.CID = CID;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/codecs/raw.js":
/*!*********************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/codecs/raw.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var bytes = __webpack_require__(/*! ../bytes.js */ "./node_modules/multiformats/cjs/src/bytes.js");

const name = 'raw';
const code = 85;
const encode = node => bytes.coerce(node);
const decode = data => bytes.coerce(data);

exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/hashes/digest.js":
/*!************************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/hashes/digest.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var bytes = __webpack_require__(/*! ../bytes.js */ "./node_modules/multiformats/cjs/src/bytes.js");
var varint = __webpack_require__(/*! ../varint.js */ "./node_modules/multiformats/cjs/src/varint.js");

const create = (code, digest) => {
  const size = digest.byteLength;
  const sizeOffset = varint.encodingLength(code);
  const digestOffset = sizeOffset + varint.encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  varint.encodeTo(code, bytes, 0);
  varint.encodeTo(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
};
const decode = multihash => {
  const bytes$1 = bytes.coerce(multihash);
  const [code, sizeOffset] = varint.decode(bytes$1);
  const [size, digestOffset] = varint.decode(bytes$1.subarray(sizeOffset));
  const digest = bytes$1.subarray(sizeOffset + digestOffset);
  if (digest.byteLength !== size) {
    throw new Error('Incorrect length');
  }
  return new Digest(code, size, digest, bytes$1);
};
const equals = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return a.code === b.code && a.size === b.size && bytes.equals(a.bytes, b.bytes);
  }
};
class Digest {
  constructor(code, size, digest, bytes) {
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }
}

exports.Digest = Digest;
exports.create = create;
exports.decode = decode;
exports.equals = equals;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/hashes/hasher.js":
/*!************************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/hashes/hasher.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var digest = __webpack_require__(/*! ./digest.js */ "./node_modules/multiformats/cjs/src/hashes/digest.js");

const from = ({name, code, encode}) => new Hasher(name, code, encode);
class Hasher {
  constructor(name, code, encode) {
    this.name = name;
    this.code = code;
    this.encode = encode;
  }
  async digest(input) {
    if (input instanceof Uint8Array) {
      const digest$1 = await this.encode(input);
      return digest.create(this.code, digest$1);
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}

exports.Hasher = Hasher;
exports.from = from;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var cid = __webpack_require__(/*! ./cid.js */ "./node_modules/multiformats/cjs/src/cid.js");
var varint = __webpack_require__(/*! ./varint.js */ "./node_modules/multiformats/cjs/src/varint.js");
var bytes = __webpack_require__(/*! ./bytes.js */ "./node_modules/multiformats/cjs/src/bytes.js");
var hasher = __webpack_require__(/*! ./hashes/hasher.js */ "./node_modules/multiformats/cjs/src/hashes/hasher.js");
var digest = __webpack_require__(/*! ./hashes/digest.js */ "./node_modules/multiformats/cjs/src/hashes/digest.js");



exports.CID = cid.CID;
exports.varint = varint;
exports.bytes = bytes;
exports.hasher = hasher;
exports.digest = digest;


/***/ }),

/***/ "./node_modules/multiformats/cjs/src/varint.js":
/*!*****************************************************!*\
  !*** ./node_modules/multiformats/cjs/src/varint.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var varint$1 = __webpack_require__(/*! ../vendor/varint.js */ "./node_modules/multiformats/cjs/vendor/varint.js");

const decode = data => {
  const code = varint$1.decode(data);
  return [
    code,
    varint$1.decode.bytes
  ];
};
const encodeTo = (int, target, offset = 0) => {
  varint$1.encode(int, target, offset);
  return target;
};
const encodingLength = int => {
  return varint$1.encodingLength(int);
};

exports.decode = decode;
exports.encodeTo = encodeTo;
exports.encodingLength = encodingLength;


/***/ }),

/***/ "./node_modules/multiformats/cjs/vendor/base-x.js":
/*!********************************************************!*\
  !*** ./node_modules/multiformats/cjs/vendor/base-x.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError('Alphabet too long');
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + ' is ambiguous');
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode(source) {
    if (source instanceof Uint8Array);
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError('Expected Uint8Array');
    }
    if (source.length === 0) {
      return '';
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== 'string') {
      throw new TypeError('Expected String');
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === ' ') {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      psz++;
    }
    if (source[psz] === ' ') {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch;
  }
  function decode(string) {
    var buffer = decodeUnsafe(string);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${ name } character`);
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;

module.exports = _brrp__multiformats_scope_baseX;


/***/ }),

/***/ "./node_modules/multiformats/cjs/vendor/varint.js":
/*!********************************************************!*\
  !*** ./node_modules/multiformats/cjs/vendor/varint.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode_1 = encode;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode.bytes = offset - oldOffset + 1;
  return out;
}
var decode = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError('Could not decode varint');
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function (value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode,
  encodingLength: length
};
var _brrp_varint = varint;
var varint$1 = _brrp_varint;

module.exports = varint$1;


/***/ }),

/***/ "./node_modules/nft.storage/src/gateway.js":
/*!*************************************************!*\
  !*** ./node_modules/nft.storage/src/gateway.js ***!
  \*************************************************/
/*! exports provided: GATEWAY, toGatewayURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GATEWAY", function() { return GATEWAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toGatewayURL", function() { return toGatewayURL; });
const GATEWAY = new URL('https://dweb.link/')

/**
 * @typedef {string|URL} GatewayURL Base URL of an IPFS Gateway e.g. https://dweb.link/ or https://ipfs.io/
 * @typedef {{ gateway?: GatewayURL }} GatewayURLOptions
 */

/**
 * Convert an IPFS URL (starting ipfs://) to a gateway URL (starting https://)
 * that can be used in a webpage. If the passed URL is not an IPFS URL it is
 * returned as a new URL object with no further changes.
 *
 * @param {string|URL} url An IPFS URL e.g. ipfs://bafy.../path
 * @param {GatewayURLOptions} [options] Options that allow customization of the gateway used.
 * @returns {URL} An IPFS gateway URL e.g. https://dweb.link/ipfs/bafy.../path
 */
const toGatewayURL = (url, options = {}) => {
  const gateway = options.gateway || GATEWAY
  url = new URL(String(url))
  return url.protocol === 'ipfs:'
    ? new URL(`/ipfs/${url.href.slice('ipfs://'.length)}`, gateway)
    : url
}


/***/ }),

/***/ "./node_modules/nft.storage/src/lib.js":
/*!*********************************************!*\
  !*** ./node_modules/nft.storage/src/lib.js ***!
  \*********************************************/
/*! exports provided: Token, NFTStorage, File, Blob, FormData, toGatewayURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return TokenModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFTStorage", function() { return NFTStorage; });
/* harmony import */ var streaming_iterables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! streaming-iterables */ "./node_modules/streaming-iterables/dist/index.mjs");
/* harmony import */ var p_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-retry */ "./node_modules/p-retry/index.js");
/* harmony import */ var p_retry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p_retry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var carbites_treewalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! carbites/treewalk */ "./node_modules/carbites/cjs/lib/treewalk/index.js");
/* harmony import */ var carbites_treewalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(carbites_treewalk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_interface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/interface.js */ "./node_modules/nft.storage/src/lib/interface.js");
/* harmony import */ var _lib_interface_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_interface_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.js */ "./node_modules/nft.storage/src/token.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./platform.js */ "./node_modules/nft.storage/src/platform.web.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _platform_js__WEBPACK_IMPORTED_MODULE_5__["File"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return _platform_js__WEBPACK_IMPORTED_MODULE_5__["Blob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return _platform_js__WEBPACK_IMPORTED_MODULE_5__["FormData"]; });

/* harmony import */ var _gateway_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gateway.js */ "./node_modules/nft.storage/src/gateway.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toGatewayURL", function() { return _gateway_js__WEBPACK_IMPORTED_MODULE_6__["toGatewayURL"]; });

/**
 * A client library for the https://nft.storage/ service. It provides a convenient
 * interface for working with the [Raw HTTP API](https://nft.storage/#api-docs)
 * from a web browser or [Node.js](https://nodejs.org/) and comes bundled with
 * TS for out-of-the box type inference and better IntelliSense.
 *
 * @example
 * ```js
 * import { NFTStorage, File, Blob } from "nft.storage"
 * const client = new NFTStorage({ token: API_TOKEN })
 *
 * const cid = await client.storeBlob(new Blob(['hello world']))
 * ```
 * @module
 */









const MAX_STORE_RETRIES = 5
const MAX_CONCURRENT_UPLOADS = 3
const MAX_CHUNK_SIZE = 1024 * 1024 * 10 // chunk to ~10MB CARs

/**
 * @implements API.Service
 */
class NFTStorage {
  /**
   * Constructs a client bound to the given `options.token` and
   * `options.endpoint`.
   *
   * @example
   * ```js
   * import { NFTStorage, File, Blob } from "nft.storage"
   * const client = new NFTStorage({ token: API_TOKEN })
   *
   * const cid = await client.storeBlob(new Blob(['hello world']))
   * ```
   * Optionally you could pass an alternative API endpoint (e.g. for testing)
   * @example
   * ```js
   * import { NFTStorage } from "nft.storage"
   * const client = new NFTStorage({
   *   token: API_TOKEN
   *   endpoint: new URL('http://localhost:8080/')
   * })
   * ```
   *
   * @param {{token: string, endpoint?:URL}} options
   */
  constructor({ token, endpoint = new URL('https://api.nft.storage') }) {
    /**
     * Authorization token.
     *
     * @readonly
     */
    this.token = token
    /**
     * Service API endpoint `URL`.
     * @readonly
     */
    this.endpoint = endpoint
  }

  /**
   * @hidden
   * @param {string} token
   */
  static auth(token) {
    if (!token) throw new Error('missing token')
    return { Authorization: `Bearer ${token}` }
  }
  /**
   * @param {API.Service} service
   * @param {Blob} blob
   * @returns {Promise<API.CIDString>}
   */
  static async storeBlob({ endpoint, token }, blob) {
    const url = new URL('/upload', endpoint)

    if (blob.size === 0) {
      throw new Error('Content size is 0, make sure to provide some content')
    }

    const request = await Object(_platform_js__WEBPACK_IMPORTED_MODULE_5__["fetch"])(url.toString(), {
      method: 'POST',
      headers: NFTStorage.auth(token),
      body: blob,
    })
    const result = await request.json()

    if (result.ok) {
      return result.value.cid
    } else {
      throw new Error(result.error.message)
    }
  }
  /**
   * @param {API.Service} service
   * @param {Blob|API.CarReader} car
   * @param {{onStoredChunk?: (size: number) => void}} [options]
   * @returns {Promise<API.CIDString>}
   */
  static async storeCar({ endpoint, token }, car, { onStoredChunk } = {}) {
    const targetSize = MAX_CHUNK_SIZE
    const splitter =
      car instanceof _platform_js__WEBPACK_IMPORTED_MODULE_5__["Blob"]
        ? await carbites_treewalk__WEBPACK_IMPORTED_MODULE_2__["TreewalkCarSplitter"].fromBlob(car, targetSize)
        : new carbites_treewalk__WEBPACK_IMPORTED_MODULE_2__["TreewalkCarSplitter"](car, targetSize)

    const upload = Object(streaming_iterables__WEBPACK_IMPORTED_MODULE_0__["transform"])(
      MAX_CONCURRENT_UPLOADS,
      async function (/** @type {AsyncIterable<Uint8Array>} */ car) {
        const carParts = []
        for await (const part of car) {
          carParts.push(part)
        }
        const carFile = new _platform_js__WEBPACK_IMPORTED_MODULE_5__["Blob"](carParts, {
          type: 'application/car',
        })
        const res = await p_retry__WEBPACK_IMPORTED_MODULE_1___default()(
          () => NFTStorage.storeBlob({ endpoint, token }, carFile),
          { retries: MAX_STORE_RETRIES }
        )
        onStoredChunk && onStoredChunk(carFile.size)
        return res
      }
    )

    let root
    for await (const cid of upload(splitter.cars())) {
      root = cid
    }

    return /** @type {API.CIDString} */ (root)
  }
  /**
   * @param {API.Service} service
   * @param {Iterable<File>} files
   * @returns {Promise<API.CIDString>}
   */
  static async storeDirectory({ endpoint, token }, files) {
    const url = new URL('/upload', endpoint)
    const body = new _platform_js__WEBPACK_IMPORTED_MODULE_5__["FormData"]()
    let size = 0
    for (const file of files) {
      body.append('file', file, file.name)
      size += file.size
    }

    if (size === 0) {
      throw new Error(
        'Total size of files should exceed 0, make sure to provide some content'
      )
    }

    const response = await Object(_platform_js__WEBPACK_IMPORTED_MODULE_5__["fetch"])(url.toString(), {
      method: 'POST',
      headers: NFTStorage.auth(token),
      body,
    })
    const result = await response.json()

    if (result.ok) {
      return result.value.cid
    } else {
      throw new Error(result.error.message)
    }
  }

  /**
   * @template {API.TokenInput} T
   * @param {API.Service} service
   * @param {T} metadata
   * @returns {Promise<API.Token<T>>}
   */
  static async store({ endpoint, token }, metadata) {
    validateERC1155(metadata)

    const url = new URL(`/store`, endpoint)
    const body = _token_js__WEBPACK_IMPORTED_MODULE_4__["encode"](metadata)
    const paths = new Set(body.keys())

    const response = await Object(_platform_js__WEBPACK_IMPORTED_MODULE_5__["fetch"])(url.toString(), {
      method: 'POST',
      headers: NFTStorage.auth(token),
      body,
    })

    /** @type {API.StoreResponse<T>} */
    const result = await response.json()

    if (result.ok === true) {
      const { value } = result
      return _token_js__WEBPACK_IMPORTED_MODULE_4__["decode"](value, paths)
    } else {
      throw new Error(result.error.message)
    }
  }
  /**
   * @param {API.Service} service
   * @param {string} cid
   * @returns {Promise<API.StatusResult>}
   */
  static async status({ endpoint, token }, cid) {
    const url = new URL(`/${cid}`, endpoint)
    const response = await Object(_platform_js__WEBPACK_IMPORTED_MODULE_5__["fetch"])(url.toString(), {
      method: 'GET',
      headers: NFTStorage.auth(token),
    })
    const result = await response.json()

    if (result.ok) {
      return {
        cid: result.value.cid,
        deals: decodeDeals(result.value.deals),
        size: result.value.size,
        pin: decodePin(result.value.pin),
        created: new Date(result.value.created),
      }
    } else {
      throw new Error(result.error.message)
    }
  }

  /**
   * @param {API.PublicService} service
   * @param {string} cid
   * @returns {Promise<API.CheckResult>}
   */
  static async check({ endpoint }, cid) {
    const url = new URL(`/check/${cid}`, endpoint)
    const response = await Object(_platform_js__WEBPACK_IMPORTED_MODULE_5__["fetch"])(url.toString())
    const result = await response.json()

    if (result.ok) {
      return {
        cid: result.value.cid,
        deals: decodeDeals(result.value.deals),
        pin: result.value.pin,
      }
    } else {
      throw new Error(result.error.message)
    }
  }

  /**
   * @param {API.Service} service
   * @param {string} cid
   * @returns {Promise<void>}
   */
  static async delete({ endpoint, token }, cid) {
    const url = new URL(`/${cid}`, endpoint)
    const response = await Object(_platform_js__WEBPACK_IMPORTED_MODULE_5__["fetch"])(url.toString(), {
      method: 'DELETE',
      headers: NFTStorage.auth(token),
    })
    const result = await response.json()
    if (!result.ok) {
      throw new Error(result.error.message)
    }
  }

  // Just a sugar so you don't have to pass around endpoint and token around.

  /**
   * Stores a single file and returns the corresponding Content Identifier (CID).
   * Takes a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)
   * or a [File](https://developer.mozilla.org/en-US/docs/Web/API/File). Note
   * that no file name or file metadata is retained.
   *
   * @example
   * ```js
   * const content = new Blob(['hello world'])
   * const cid = await client.storeBlob(content)
   * cid //> 'zdj7Wn9FQAURCP6MbwcWuzi7u65kAsXCdjNTkhbJcoaXBusq9'
   * ```
   *
   * @param {Blob} blob
   */
  storeBlob(blob) {
    return NFTStorage.storeBlob(this, blob)
  }
  /**
   * Stores files encoded as a single [Content Addressed Archive
   * (CAR)](https://github.com/ipld/specs/blob/master/block-layer/content-addressable-archives.md).
   *
   * Takes a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)
   * or a [File](https://developer.mozilla.org/en-US/docs/Web/API/File).
   *
   * Returns the corresponding Content Identifier (CID).
   *
   * See the [`ipfs-car` docs](https://www.npmjs.com/package/ipfs-car) for more
   * details on packing a CAR file.
   *
   * @example
   * ```js
   * import { pack } from 'ipfs-car/pack'
   * import { CarReader } from '@ipld/car'
   * const { out, root } = await pack({
   *  input: fs.createReadStream('pinpie.pdf')
   * })
   * const expectedCid = root.toString()
   * const carReader = await CarReader.fromIterable(out)
   * const cid = await storage.storeCar(carReader)
   * console.assert(cid === expectedCid)
   * ```
   *
   * @example
   * ```
   * import { packToBlob } from 'ipfs-car/pack/blob'
   * const data = 'Hello world'
   * const { root, car } = await packToBlob({ input: [new TextEncoder().encode(data)] })
   * const expectedCid = root.toString()
   * const cid = await client.storeCar(car)
   * console.assert(cid === expectedCid)
   * ```
   * @param {Blob|API.CarReader} car
   * @param {{onStoredChunk?: (size: number) => void}} [options]
   */
  storeCar(car, options) {
    return NFTStorage.storeCar(this, car, options)
  }
  /**
   * Stores a directory of files and returns a CID for the directory.
   *
   * @example
   * ```js
   * const cid = await client.storeDirectory([
   *   new File(['hello world'], 'hello.txt'),
   *   new File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
   * ])
   * cid //>
   * ```
   *
   * Argument can be a [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
   * instance as well, in which case directory structure will be retained.
   *
   * @param {Iterable<File>} files
   */
  storeDirectory(files) {
    return NFTStorage.storeDirectory(this, files)
  }
  /**
   * Returns current status of the stored NFT by its CID. Note the NFT must
   * have previously been stored by this account.
   *
   * @example
   * ```js
   * const status = await client.status('zdj7Wn9FQAURCP6MbwcWuzi7u65kAsXCdjNTkhbJcoaXBusq9')
   * ```
   *
   * @param {string} cid
   */
  status(cid) {
    return NFTStorage.status(this, cid)
  }
  /**
   * Removes stored content by its CID from the service.
   *
   * > Please note that even if content is removed from the service other nodes
   * that have replicated it might still continue providing it.
   *
   * @example
   * ```js
   * await client.delete('zdj7Wn9FQAURCP6MbwcWuzi7u65kAsXCdjNTkhbJcoaXBusq9')
   * ```
   *
   * @param {string} cid
   */
  delete(cid) {
    return NFTStorage.delete(this, cid)
  }
  /**
   * Check if a CID of an NFT is being stored by nft.storage. Throws if the NFT
   * was not found.
   *
   * @example
   * ```js
   * const status = await client.check('zdj7Wn9FQAURCP6MbwcWuzi7u65kAsXCdjNTkhbJcoaXBusq9')
   * ```
   *
   * @param {string} cid
   */
  check(cid) {
    return NFTStorage.check(this, cid)
  }
  /**
   * Stores the given token and all resources it references (in the form of a
   * File or a Blob) along with a metadata JSON as specificed in
   * [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155#metadata). The
   * `token.image` must be either a `File` or a `Blob` instance, which will be
   * stored and the corresponding content address URL will be saved in the
   * metadata JSON file under `image` field.
   *
   * If `token.properties` contains properties with `File` or `Blob` values,
   * those also get stored and their URLs will be saved in the metadata JSON
   * file in their place.
   *
   * Note: URLs for `File` objects will retain file names e.g. in case of
   * `new File([bytes], 'cat.png', { type: 'image/png' })` will be transformed
   * into a URL that looks like `ipfs://bafy...hash/image/cat.png`. For `Blob`
   * objects, the URL will not have a file name name or mime type, instead it
   * will be transformed into a URL that looks like
   * `ipfs://bafy...hash/image/blob`.
   *
   * @example
   * ```js
   * const metadata = await client.store({
   *   name: 'nft.storage store test',
   *   description: 'Test ERC-1155 compatible metadata.',
   *   image: new File(['<DATA>'], 'pinpie.jpg', { type: 'image/jpg' }),
   *   properties: {
   *     custom: 'Custom data can appear here, files are auto uploaded.',
   *     file: new File(['<DATA>'], 'README.md', { type: 'text/plain' }),
   *   }
   * })
   *
   * console.log('IPFS URL for the metadata:', metadata.url)
   * console.log('metadata.json contents:\n', metadata.data)
   * console.log('metadata.json with IPFS gateway URLs:\n', metadata.embed())
   * ```
   *
   * @template {API.TokenInput} T
   * @param {T} token
   * @returns {Promise<API.Token<T>>}
   */
  store(token) {
    return NFTStorage.store(this, token)
  }
}

/**
 * @param {API.TokenInput} metadata
 */
const validateERC1155 = ({ name, description, image, decimals }) => {
  // Just validate that expected fields are present
  if (typeof name !== 'string') {
    throw new TypeError(
      'string property `name` identifying the asset is required'
    )
  }
  if (typeof description !== 'string') {
    throw new TypeError(
      'string property `description` describing asset is required'
    )
  }
  if (!(image instanceof _platform_js__WEBPACK_IMPORTED_MODULE_5__["Blob"])) {
    throw new TypeError('property `image` must be a Blob or File object')
  } else if (!image.type.startsWith('image/')) {
    console.warn(`According to ERC721 Metadata JSON Schema 'image' must have 'image/*' mime type.

For better interoperability we would highly recommend storing content with different mime type under 'properties' namespace e.g. \`properties: { video: file }\` and using 'image' field for storing a preview image for it instead.

For more context please see ERC-721 specification https://eips.ethereum.org/EIPS/eip-721`)
  }

  if (typeof decimals !== 'undefined' && typeof decimals !== 'number') {
    throw new TypeError('property `decimals` must be an integer value')
  }
}

/**
 * @param {API.Deal[]} deals
 * @returns {API.Deal[]}
 */
const decodeDeals = (deals) =>
  deals.map((deal) => {
    const { dealActivation, dealExpiration, lastChanged } = {
      dealExpiration: null,
      dealActivation: null,
      ...deal,
    }

    return {
      ...deal,
      lastChanged: new Date(lastChanged),
      ...(dealActivation && { dealActivation: new Date(dealActivation) }),
      ...(dealExpiration && { dealExpiration: new Date(dealExpiration) }),
    }
  })

/**
 * @param {API.Pin} pin
 * @returns {API.Pin}
 */
const decodePin = (pin) => ({ ...pin, created: new Date(pin.created) })

const TokenModel = _token_js__WEBPACK_IMPORTED_MODULE_4__["Token"]



/**
 * Just to verify API compatibility.
 * @type {API.API}
 */
const api = NFTStorage
void api


/***/ }),

/***/ "./node_modules/nft.storage/src/lib/interface.js":
/*!*******************************************************!*\
  !*** ./node_modules/nft.storage/src/lib/interface.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/nft.storage/src/platform.web.js":
/*!******************************************************!*\
  !*** ./node_modules/nft.storage/src/platform.web.js ***!
  \******************************************************/
/*! exports provided: fetch, FormData, Headers, Request, Response, Blob, File, ReadableStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return Blob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadableStream", function() { return ReadableStream; });
const fetch = globalThis.fetch
const FormData = globalThis.FormData
const Headers = globalThis.Headers
const Request = globalThis.Request
const Response = globalThis.Response
const Blob = globalThis.Blob
const File = globalThis.File
const ReadableStream = globalThis.ReadableStream


/***/ }),

/***/ "./node_modules/nft.storage/src/token.js":
/*!***********************************************!*\
  !*** ./node_modules/nft.storage/src/token.js ***!
  \***********************************************/
/*! exports provided: Token, embed, decode, encode, mapWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embed", function() { return embed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapWith", function() { return mapWith; });
/* harmony import */ var _lib_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/interface.js */ "./node_modules/nft.storage/src/lib/interface.js");
/* harmony import */ var _lib_interface_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_interface_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform.js */ "./node_modules/nft.storage/src/platform.web.js");
/* harmony import */ var _gateway_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gateway.js */ "./node_modules/nft.storage/src/gateway.js");




/** @typedef {import('./gateway.js').GatewayURLOptions} EmbedOptions */

/**
 * @template {API.TokenInput} T
 * @implements {API.Token<T>}
 */
class Token {
  /**
   * @param {API.CIDString} ipnft
   * @param {API.EncodedURL} url
   * @param {API.Encoded<T, [[Blob, URL]]>} data
   */
  constructor(ipnft, url, data) {
    /** @readonly */
    this.ipnft = ipnft
    /** @readonly */
    this.url = url
    /** @readonly */
    this.data = data

    Object.defineProperties(this, {
      ipnft: { enumerable: true, writable: false },
      url: { enumerable: true, writable: false },
      data: { enumerable: false, writable: false },
    })
  }
  /**
   * @returns {API.Encoded<T, [[Blob, URL]]>}
   */
  embed() {
    return Token.embed(this)
  }

  /**
   * @template {API.TokenInput} T
   * @param {{data: API.Encoded<T, [[Blob, URL]]>}} token
   * @returns {API.Encoded<T, [[Blob, URL]]>}
   */
  static embed({ data }) {
    return embed(data, { gateway: _gateway_js__WEBPACK_IMPORTED_MODULE_2__["GATEWAY"] })
  }
}

/**
 * @template T
 * @param {API.Encoded<T, [[Blob, URL]]>} input
 * @param {EmbedOptions} options
 * @returns {API.Encoded<T, [[Blob, URL]]>}
 */
const embed = (input, options) =>
  mapWith(input, isURL, embedURL, options)

/**
 * @template {API.TokenInput} T
 * @param {API.EncodedToken<T>} value
 * @param {Set<string>} paths - Paths were to expcet EncodedURLs
 * @returns {Token<T>}
 */
const decode = ({ ipnft, url, data }, paths) =>
  new Token(ipnft, url, mapWith(data, isEncodedURL, decodeURL, paths))

/**
 * @param {any} value
 * @returns {value is URL}
 */
const isURL = (value) => value instanceof URL

/**
 * @template State
 * @param {State} state
 * @param {API.EncodedURL} url
 * @returns {[State, URL]}
 */
const decodeURL = (state, url) => [state, new URL(url)]

/**
 * @param {EmbedOptions} context
 * @param {URL} url
 * @returns {[EmbedOptions, URL]}
 */
const embedURL = (context, url) => [context, Object(_gateway_js__WEBPACK_IMPORTED_MODULE_2__["toGatewayURL"])(url, context)]

/**
 * @param {any} value
 * @returns {value is object}
 */
const isObject = (value) => typeof value === 'object' && value != null

/**
 * @param {any} value
 * @param {Set<string>} assetPaths
 * @param {PropertyKey[]} path
 * @returns {value is API.EncodedURL}
 */
const isEncodedURL = (value, assetPaths, path) =>
  typeof value === 'string' && assetPaths.has(path.join('.'))

/**
 * Takes token input and encodes it into
 * [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
 * object where form field values are discovered `Blob` (or `File`) objects in
 * the given token and field keys are `.` joined paths where they were discoverd
 * in the token. Additionally encoded `FormData` will also have a field
 * named `meta` containing JSON serialized token with blobs and file values
 * `null` set to null (this allows backend to injest all of the files from
 * `multipart/form-data` request and update provided "meta" data with
 * corresponding file ipfs:// URLs)
 *
 * @example
 * ```js
 * const cat = new File([], 'cat.png')
 * const kitty = new File([], 'kitty.png')
 * const form = encode({
 *   name: 'hello'
 *   image: cat
 *   properties: {
 *     extra: {
 *       image: kitty
 *     }
 *   }
 * })
 * [...form.entries()] //>
 * // [
 * //   ['image', cat],
 * //   ['properties.extra.image', kitty],
 * //   ['meta', '{"name":"hello",image:null,"properties":{"extra":{"kitty": null}}}']
 * // ]
 * ```
 *
 * @template {API.TokenInput} T
 * @param {API.Encoded<T, [[Blob, Blob]]>} input
 * @returns {FormData}
 */
const encode = (input) => {
  const [form, meta] = mapValueWith(
    input,
    isBlob,
    encodeBlob,
    new _platform_js__WEBPACK_IMPORTED_MODULE_1__["FormData"](),
    []
  )
  form.set('meta', JSON.stringify(meta))
  return form
}

/**
 * @param {FormData} data
 * @param {Blob} blob
 * @param {PropertyKey[]} path
 * @returns {[FormData, void]}
 */
const encodeBlob = (data, blob, path) => {
  data.set(path.join('.'), blob)
  return [data, undefined]
}

/**
 * @param {any} value
 * @returns {value is Blob}
 */
const isBlob = (value) => value instanceof _platform_js__WEBPACK_IMPORTED_MODULE_1__["Blob"]

/**
 * Substitues values in the given `input` that match `p(value) == true` with
 * `f(value, context, path)` where `context` is whatever you pass (usually
 * a mutable state) and `path` is a array of keys / indexes where the value
 * was encountered.
 *
 * @template T, I, X, O, State
 * @param {API.Encoded<T, [[I, X]]>} input - Arbitrary input.
 * @param {(input:any, state:State, path:PropertyKey[]) => input is X} p - Predicate function to determine
 * which values to swap.
 * @param {(state:State, input:X, path:PropertyKey[]) => [State, O]} f - Function
 * that swaps matching values.
 * @param {State} state - Some additional context you need in the process.
 * likey you'll start with `[]`.
 * @returns {API.Encoded<T, [[I, O]]>}
 */
const mapWith = (input, p, f, state) => {
  const [, output] = mapValueWith(input, p, f, state, [])
  return output
}

/**
 * @template T, I, X, O, State
 * @param {API.Encoded<T, [[I, X]]>} input - Arbitrary input.
 * @param {(input:any, state:State, path:PropertyKey[]) => input is X} p - Predicate function to determine
 * which values to swap.
 * @param {(state:State, input:X, path:PropertyKey[]) => [State, O]} f - Function
 * that swaps matching values.
 * @param {State} state - Some additional context you need in the process.
 * @param {PropertyKey[]} path - Path where the value was encountered. Most
 * likey you'll start with `[]`.
 * @returns {[State, API.Encoded<T, [[I, O]]>]}
 */
const mapValueWith = (input, p, f, state, path) =>
  p(input, state, path)
    ? f(state, input, path)
    : Array.isArray(input)
    ? mapArrayWith(input, p, f, state, path)
    : isObject(input)
    ? mapObjectWith(input, p, f, state, path)
    : [state, /** @type {any} */ (input)]

/**
 * Just like `mapWith` except
 *
 * @template State, T, I, X, O
 * @param {API.Encoded<T, [[I, X]]>} input
 * @param {(input:any, state:State, path:PropertyKey[]) => input is X} p
 * @param {(state: State, input:X, path:PropertyKey[]) => [State, O]} f
 * @param {State} init
 * @param {PropertyKey[]} path
 * @returns {[State, API.Encoded<T, [[I, O]]>]}
 */
const mapObjectWith = (input, p, f, init, path) => {
  let state = init
  const output = /** @type {API.Encoded<T, [[I, O]]>} */ ({})
  for (const [key, value] of Object.entries(input)) {
    const [next, out] = mapValueWith(value, p, f, state, [...path, key])
    // @ts-ignore
    output[key] = out
    state = next
  }
  return [state, output]
}

/**
 * Just like `mapWith` except for Arrays.
 *
 * @template I, X, O, State
 * @template {any[]} T
 * @param {T} input
 * @param {(input:any, state:State, path:PropertyKey[]) => input is X} p
 * @param {(state: State, input:X, path:PropertyKey[]) => [State, O]} f
 * @param {State} init
 * @param {PropertyKey[]} path
 * @returns {[State, API.Encoded<T, [[I, O]]>]}
 */
const mapArrayWith = (input, p, f, init, path) => {
  const output = /** @type {unknown[]} */ ([])

  let state = init
  for (const [index, element] of input.entries()) {
    const [next, out] = mapValueWith(element, p, f, state, [...path, index])
    output[index] = out
    state = next
  }

  return [state, /** @type {API.Encoded<T, [[I, O]]>} */ (output)]
}


/***/ }),

/***/ "./node_modules/p-retry/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-retry/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const retry = __webpack_require__(/*! retry */ "./node_modules/retry/index.js");

const networkErrorMsgs = [
	'Failed to fetch', // Chrome
	'NetworkError when attempting to fetch resource.', // Firefox
	'The Internet connection appears to be offline.', // Safari
	'Network request failed' // `cross-fetch`
];

class AbortError extends Error {
	constructor(message) {
		super();

		if (message instanceof Error) {
			this.originalError = message;
			({message} = message);
		} else {
			this.originalError = new Error(message);
			this.originalError.stack = this.stack;
		}

		this.name = 'AbortError';
		this.message = message;
	}
}

const decorateErrorWithCounts = (error, attemptNumber, options) => {
	// Minus 1 from attemptNumber because the first attempt does not count as a retry
	const retriesLeft = options.retries - (attemptNumber - 1);

	error.attemptNumber = attemptNumber;
	error.retriesLeft = retriesLeft;
	return error;
};

const isNetworkError = errorMessage => networkErrorMsgs.includes(errorMessage);

const pRetry = (input, options) => new Promise((resolve, reject) => {
	options = {
		onFailedAttempt: () => {},
		retries: 10,
		...options
	};

	const operation = retry.operation(options);

	operation.attempt(async attemptNumber => {
		try {
			resolve(await input(attemptNumber));
		} catch (error) {
			if (!(error instanceof Error)) {
				reject(new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`));
				return;
			}

			if (error instanceof AbortError) {
				operation.stop();
				reject(error.originalError);
			} else if (error instanceof TypeError && !isNetworkError(error.message)) {
				operation.stop();
				reject(error);
			} else {
				decorateErrorWithCounts(error, attemptNumber, options);

				try {
					await options.onFailedAttempt(error);
				} catch (error) {
					reject(error);
					return;
				}

				if (!operation.retry(error)) {
					reject(operation.mainError());
				}
			}
		}
	});
});

module.exports = pRetry;
// TODO: remove this in the next major version
module.exports.default = pRetry;

module.exports.AbortError = AbortError;


/***/ }),

/***/ "./node_modules/retry/index.js":
/*!*************************************!*\
  !*** ./node_modules/retry/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/retry */ "./node_modules/retry/lib/retry.js");

/***/ }),

/***/ "./node_modules/retry/lib/retry.js":
/*!*****************************************!*\
  !*** ./node_modules/retry/lib/retry.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var RetryOperation = __webpack_require__(/*! ./retry_operation */ "./node_modules/retry/lib/retry_operation.js");

exports.operation = function(options) {
  var timeouts = exports.timeouts(options);
  return new RetryOperation(timeouts, {
      forever: options && (options.forever || options.retries === Infinity),
      unref: options && options.unref,
      maxRetryTime: options && options.maxRetryTime
  });
};

exports.timeouts = function(options) {
  if (options instanceof Array) {
    return [].concat(options);
  }

  var opts = {
    retries: 10,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: Infinity,
    randomize: false
  };
  for (var key in options) {
    opts[key] = options[key];
  }

  if (opts.minTimeout > opts.maxTimeout) {
    throw new Error('minTimeout is greater than maxTimeout');
  }

  var timeouts = [];
  for (var i = 0; i < opts.retries; i++) {
    timeouts.push(this.createTimeout(i, opts));
  }

  if (options && options.forever && !timeouts.length) {
    timeouts.push(this.createTimeout(i, opts));
  }

  // sort the array numerically ascending
  timeouts.sort(function(a,b) {
    return a - b;
  });

  return timeouts;
};

exports.createTimeout = function(attempt, opts) {
  var random = (opts.randomize)
    ? (Math.random() + 1)
    : 1;

  var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
  timeout = Math.min(timeout, opts.maxTimeout);

  return timeout;
};

exports.wrap = function(obj, options, methods) {
  if (options instanceof Array) {
    methods = options;
    options = null;
  }

  if (!methods) {
    methods = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        methods.push(key);
      }
    }
  }

  for (var i = 0; i < methods.length; i++) {
    var method   = methods[i];
    var original = obj[method];

    obj[method] = function retryWrapper(original) {
      var op       = exports.operation(options);
      var args     = Array.prototype.slice.call(arguments, 1);
      var callback = args.pop();

      args.push(function(err) {
        if (op.retry(err)) {
          return;
        }
        if (err) {
          arguments[0] = op.mainError();
        }
        callback.apply(this, arguments);
      });

      op.attempt(function() {
        original.apply(obj, args);
      });
    }.bind(obj, original);
    obj[method].options = options;
  }
};


/***/ }),

/***/ "./node_modules/retry/lib/retry_operation.js":
/*!***************************************************!*\
  !*** ./node_modules/retry/lib/retry_operation.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function RetryOperation(timeouts, options) {
  // Compatibility for the old (timeouts, retryForever) signature
  if (typeof options === 'boolean') {
    options = { forever: options };
  }

  this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
  this._timeouts = timeouts;
  this._options = options || {};
  this._maxRetryTime = options && options.maxRetryTime || Infinity;
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;
  this._operationStart = null;
  this._timer = null;

  if (this._options.forever) {
    this._cachedTimeouts = this._timeouts.slice(0);
  }
}
module.exports = RetryOperation;

RetryOperation.prototype.reset = function() {
  this._attempts = 1;
  this._timeouts = this._originalTimeouts.slice(0);
}

RetryOperation.prototype.stop = function() {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }
  if (this._timer) {
    clearTimeout(this._timer);
  }

  this._timeouts       = [];
  this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function(err) {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (!err) {
    return false;
  }
  var currentTime = new Date().getTime();
  if (err && currentTime - this._operationStart >= this._maxRetryTime) {
    this._errors.push(err);
    this._errors.unshift(new Error('RetryOperation timeout occurred'));
    return false;
  }

  this._errors.push(err);

  var timeout = this._timeouts.shift();
  if (timeout === undefined) {
    if (this._cachedTimeouts) {
      // retry forever, only keep last error
      this._errors.splice(0, this._errors.length - 1);
      timeout = this._cachedTimeouts.slice(-1);
    } else {
      return false;
    }
  }

  var self = this;
  this._timer = setTimeout(function() {
    self._attempts++;

    if (self._operationTimeoutCb) {
      self._timeout = setTimeout(function() {
        self._operationTimeoutCb(self._attempts);
      }, self._operationTimeout);

      if (self._options.unref) {
          self._timeout.unref();
      }
    }

    self._fn(self._attempts);
  }, timeout);

  if (this._options.unref) {
      this._timer.unref();
  }

  return true;
};

RetryOperation.prototype.attempt = function(fn, timeoutOps) {
  this._fn = fn;

  if (timeoutOps) {
    if (timeoutOps.timeout) {
      this._operationTimeout = timeoutOps.timeout;
    }
    if (timeoutOps.cb) {
      this._operationTimeoutCb = timeoutOps.cb;
    }
  }

  var self = this;
  if (this._operationTimeoutCb) {
    this._timeout = setTimeout(function() {
      self._operationTimeoutCb();
    }, self._operationTimeout);
  }

  this._operationStart = new Date().getTime();

  this._fn(this._attempts);
};

RetryOperation.prototype.try = function(fn) {
  console.log('Using RetryOperation.try() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = function(fn) {
  console.log('Using RetryOperation.start() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function() {
  return this._errors;
};

RetryOperation.prototype.attempts = function() {
  return this._attempts;
};

RetryOperation.prototype.mainError = function() {
  if (this._errors.length === 0) {
    return null;
  }

  var counts = {};
  var mainError = null;
  var mainErrorCount = 0;

  for (var i = 0; i < this._errors.length; i++) {
    var error = this._errors[i];
    var message = error.message;
    var count = (counts[message] || 0) + 1;

    counts[message] = count;

    if (count >= mainErrorCount) {
      mainError = error;
      mainErrorCount = count;
    }
  }

  return mainError;
};


/***/ }),

/***/ "./node_modules/streaming-iterables/dist/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/streaming-iterables/dist/index.mjs ***!
  \*********************************************************/
/*! exports provided: batch, buffer, collect, concat, consume, filter, flatMap, flatTransform, flatten, fromStream, getIterator, map, merge, parallelFlatMap, parallelMap, parallelMerge, pipeline, reduce, take, tap, time, transform, writeToStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return batch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return collect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consume", function() { return consume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatTransform", function() { return flatTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromStream", function() { return fromStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIterator", function() { return getIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallelFlatMap", function() { return parallelFlatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallelMap", function() { return parallelMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallelMerge", function() { return parallelMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeline", function() { return pipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeToStream", function() { return writeToStream; });
async function* _batch(size, iterable) {
    let dataBatch = [];
    for await (const data of iterable) {
        dataBatch.push(data);
        if (dataBatch.length === size) {
            yield dataBatch;
            dataBatch = [];
        }
    }
    if (dataBatch.length > 0) {
        yield dataBatch;
    }
}
function* _syncBatch(size, iterable) {
    let dataBatch = [];
    for (const data of iterable) {
        dataBatch.push(data);
        if (dataBatch.length === size) {
            yield dataBatch;
            dataBatch = [];
        }
    }
    if (dataBatch.length > 0) {
        yield dataBatch;
    }
}
function batch(size, iterable) {
    if (iterable === undefined) {
        return curriedIterable => batch(size, curriedIterable);
    }
    if (iterable[Symbol.asyncIterator]) {
        return _batch(size, iterable);
    }
    return _syncBatch(size, iterable);
}

function getIterator(iterable) {
    if (typeof iterable.next === 'function') {
        return iterable;
    }
    if (typeof iterable[Symbol.iterator] === 'function') {
        return iterable[Symbol.iterator]();
    }
    if (typeof iterable[Symbol.asyncIterator] === 'function') {
        return iterable[Symbol.asyncIterator]();
    }
    throw new TypeError('"values" does not to conform to any of the iterator or iterable protocols');
}

function defer() {
    let reject;
    let resolve;
    const promise = new Promise((resolveFunc, rejectFunc) => {
        resolve = resolveFunc;
        reject = rejectFunc;
    });
    return {
        promise,
        reject,
        resolve,
    };
}

/// <reference lib="esnext.asynciterable" />
function _buffer(size, iterable) {
    const iterator = getIterator(iterable);
    const resultQueue = [];
    const readQueue = [];
    let reading = false;
    let ended = false;
    function fulfillReadQueue() {
        while (readQueue.length > 0 && resultQueue.length > 0) {
            const readDeferred = readQueue.shift();
            const { error, value } = resultQueue.shift();
            if (error) {
                readDeferred.reject(error);
            }
            else {
                readDeferred.resolve({ done: false, value });
            }
        }
        while (readQueue.length > 0 && ended) {
            const { resolve } = readQueue.shift();
            resolve({ done: true, value: undefined });
        }
    }
    async function fillQueue() {
        if (ended) {
            return;
        }
        if (reading) {
            return;
        }
        if (resultQueue.length >= size) {
            return;
        }
        reading = true;
        try {
            const { done, value } = await iterator.next();
            if (done) {
                ended = true;
            }
            else {
                resultQueue.push({ value });
            }
        }
        catch (error) {
            ended = true;
            resultQueue.push({ error });
        }
        fulfillReadQueue();
        reading = false;
        fillQueue();
    }
    async function next() {
        if (resultQueue.length > 0) {
            const { error, value } = resultQueue.shift();
            if (error) {
                throw error;
            }
            fillQueue();
            return { done: false, value };
        }
        if (ended) {
            return { done: true, value: undefined }; // stupid ts
        }
        const deferred = defer();
        readQueue.push(deferred);
        fillQueue();
        return deferred.promise;
    }
    const asyncIterableIterator = {
        next,
        [Symbol.asyncIterator]: () => asyncIterableIterator,
    };
    return asyncIterableIterator;
}
function* syncBuffer(size, iterable) {
    const valueQueue = [];
    let e;
    try {
        for (const value of iterable) {
            valueQueue.push(value);
            if (valueQueue.length <= size) {
                continue;
            }
            yield valueQueue.shift();
        }
    }
    catch (error) {
        e = error;
    }
    for (const value of valueQueue) {
        yield value;
    }
    if (e) {
        throw e;
    }
}
function buffer(size, iterable) {
    if (iterable === undefined) {
        return curriedIterable => buffer(size, curriedIterable);
    }
    if (size === 0) {
        return iterable;
    }
    if (iterable[Symbol.asyncIterator]) {
        return _buffer(size, iterable);
    }
    return syncBuffer(size, iterable);
}

async function _collect(iterable) {
    const values = [];
    for await (const value of iterable) {
        values.push(value);
    }
    return values;
}
function collect(iterable) {
    if (iterable[Symbol.asyncIterator]) {
        return _collect(iterable);
    }
    return Array.from(iterable);
}

async function* _concat(iterables) {
    for await (const iterable of iterables) {
        yield* iterable;
    }
}
function* _syncConcat(iterables) {
    for (const iterable of iterables) {
        yield* iterable;
    }
}
function concat(...iterables) {
    const hasAnyAsync = iterables.find(itr => itr[Symbol.asyncIterator] !== undefined);
    if (hasAnyAsync) {
        return _concat(iterables);
    }
    else {
        return _syncConcat(iterables);
    }
}

async function _consume(iterable) {
    for await (const val of iterable) {
        // do nothing
    }
}
function consume(iterable) {
    if (iterable[Symbol.asyncIterator]) {
        return _consume(iterable);
    }
    for (const val of iterable) {
        // do nothing
    }
}

async function* _filter(filterFunc, iterable) {
    for await (const data of iterable) {
        if (await filterFunc(data)) {
            yield data;
        }
    }
}
function filter(filterFunc, iterable) {
    if (iterable === undefined) {
        return (curriedIterable) => _filter(filterFunc, curriedIterable);
    }
    return _filter(filterFunc, iterable);
}

async function* flatten(iterable) {
    for await (const maybeItr of iterable) {
        if (maybeItr && typeof maybeItr !== 'string' && (maybeItr[Symbol.iterator] || maybeItr[Symbol.asyncIterator])) {
            yield* flatten(maybeItr);
        }
        else {
            yield maybeItr;
        }
    }
}

async function* _map(func, iterable) {
    for await (const val of iterable) {
        yield await func(val);
    }
}
function map(func, iterable) {
    if (iterable === undefined) {
        return curriedIterable => _map(func, curriedIterable);
    }
    return _map(func, iterable);
}

function flatMap(func, iterable) {
    if (iterable === undefined) {
        return curriedIterable => flatMap(func, curriedIterable);
    }
    return filter(i => i !== undefined && i !== null, flatten(map(func, iterable)));
}

function _flatTransform(concurrency, func, iterable) {
    const iterator = getIterator(iterable);
    const resultQueue = [];
    const readQueue = [];
    let ended = false;
    let reading = false;
    let inflightCount = 0;
    let lastError = null;
    function fulfillReadQueue() {
        while (readQueue.length > 0 && resultQueue.length > 0) {
            const { resolve } = readQueue.shift();
            const value = resultQueue.shift();
            resolve({ done: false, value });
        }
        while (readQueue.length > 0 && inflightCount === 0 && ended) {
            const { resolve, reject } = readQueue.shift();
            if (lastError) {
                reject(lastError);
                lastError = null;
            }
            else {
                resolve({ done: true, value: undefined });
            }
        }
    }
    async function fillQueue() {
        if (ended) {
            fulfillReadQueue();
            return;
        }
        if (reading) {
            return;
        }
        if (inflightCount + resultQueue.length >= concurrency) {
            return;
        }
        reading = true;
        inflightCount++;
        try {
            const { done, value } = await iterator.next();
            if (done) {
                ended = true;
                inflightCount--;
                fulfillReadQueue();
            }
            else {
                mapAndQueue(value);
            }
        }
        catch (error) {
            ended = true;
            inflightCount--;
            lastError = error;
            fulfillReadQueue();
        }
        reading = false;
        fillQueue();
    }
    async function mapAndQueue(itrValue) {
        try {
            const value = await func(itrValue);
            if (value && value[Symbol.asyncIterator]) {
                for await (const asyncVal of value) {
                    resultQueue.push(asyncVal);
                }
            }
            else {
                resultQueue.push(value);
            }
        }
        catch (error) {
            ended = true;
            lastError = error;
        }
        inflightCount--;
        fulfillReadQueue();
        fillQueue();
    }
    async function next() {
        if (resultQueue.length === 0) {
            const deferred = defer();
            readQueue.push(deferred);
            fillQueue();
            return deferred.promise;
        }
        const value = resultQueue.shift();
        fillQueue();
        return { done: false, value };
    }
    const asyncIterableIterator = {
        next,
        [Symbol.asyncIterator]: () => asyncIterableIterator,
    };
    return asyncIterableIterator;
}
function flatTransform(concurrency, func, iterable) {
    if (func === undefined) {
        return (curriedFunc, curriedIterable) => curriedIterable
            ? flatTransform(concurrency, curriedFunc, curriedIterable)
            : flatTransform(concurrency, curriedFunc);
    }
    if (iterable === undefined) {
        return (curriedIterable) => flatTransform(concurrency, func, curriedIterable);
    }
    return filter(i => i !== undefined && i !== null, flatten(_flatTransform(concurrency, func, iterable)));
}

async function onceReadable(stream) {
    return new Promise(resolve => {
        stream.once('readable', () => {
            resolve();
        });
    });
}
async function* _fromStream(stream) {
    while (true) {
        const data = stream.read();
        if (data !== null) {
            yield data;
            continue;
        }
        if (stream._readableState.ended) {
            break;
        }
        await onceReadable(stream);
    }
}
function fromStream(stream) {
    if (typeof stream[Symbol.asyncIterator] === 'function') {
        return stream;
    }
    return _fromStream(stream);
}

async function* merge(...iterables) {
    const sources = new Set(iterables.map(getIterator));
    while (sources.size > 0) {
        for (const iterator of sources) {
            const nextVal = await iterator.next();
            if (nextVal.done) {
                sources.delete(iterator);
            }
            else {
                yield nextVal.value;
            }
        }
    }
}

function pipeline(firstFn, ...fns) {
    let previousFn = firstFn();
    for (const func of fns) {
        previousFn = func(previousFn);
    }
    return previousFn;
}

async function* _parallelMap(concurrency, func, iterable) {
    let transformError = null;
    const wrapFunc = value => ({
        value: func(value),
    });
    const stopOnError = async function* (source) {
        for await (const value of source) {
            if (transformError) {
                return;
            }
            yield value;
        }
    };
    const output = pipeline(() => iterable, buffer(1), stopOnError, map(wrapFunc), buffer(concurrency - 1));
    const itr = getIterator(output);
    while (true) {
        const { value, done } = await itr.next();
        if (done) {
            break;
        }
        try {
            const val = await value.value;
            if (!transformError) {
                yield val;
            }
        }
        catch (error) {
            transformError = error;
        }
    }
    if (transformError) {
        throw transformError;
    }
}
function parallelMap(concurrency, func, iterable) {
    if (func === undefined) {
        return (curriedFunc, curriedIterable) => parallelMap(concurrency, curriedFunc, curriedIterable);
    }
    if (iterable === undefined) {
        return curriedIterable => parallelMap(concurrency, func, curriedIterable);
    }
    if (concurrency === 1) {
        return map(func, iterable);
    }
    return _parallelMap(concurrency, func, iterable);
}

function parallelFlatMap(concurrency, func, iterable) {
    if (func === undefined) {
        return (curriedFunc, curriedIterable) => curriedIterable
            ? parallelFlatMap(concurrency, curriedFunc, curriedIterable)
            : parallelFlatMap(concurrency, curriedFunc);
    }
    if (iterable === undefined) {
        return (curriedIterable) => parallelFlatMap(concurrency, func, curriedIterable);
    }
    return filter(i => i !== undefined && i !== null, flatten(parallelMap(concurrency, func, iterable)));
}

/// <reference lib="esnext.asynciterable" />
async function* parallelMerge(...iterables) {
    const inputs = iterables.map(getIterator);
    const concurrentWork = new Set();
    const values = new Map();
    let lastError = null;
    let errCb = null;
    let valueCb = null;
    const notifyError = err => {
        lastError = err;
        if (errCb) {
            errCb(err);
        }
    };
    const notifyDone = value => {
        if (valueCb) {
            valueCb(value);
        }
    };
    const waitForQueue = () => new Promise((resolve, reject) => {
        if (lastError) {
            reject(lastError);
        }
        if (values.size > 0) {
            return resolve();
        }
        valueCb = resolve;
        errCb = reject;
    });
    const queueNext = input => {
        const nextVal = Promise.resolve(input.next()).then(async ({ done, value }) => {
            if (!done) {
                values.set(input, value);
            }
            concurrentWork.delete(nextVal);
        });
        concurrentWork.add(nextVal);
        nextVal.then(notifyDone, notifyError);
    };
    for (const input of inputs) {
        queueNext(input);
    }
    while (true) {
        // We technically don't have to check `values.size` as the for loop should have emptied it
        // However I haven't yet found specs verifying that behavior, only tests
        // the guard in waitForQueue() checking for values is in place for the same reason
        if (concurrentWork.size === 0 && values.size === 0) {
            return;
        }
        await waitForQueue();
        for (const [input, value] of values) {
            values.delete(input);
            yield value;
            queueNext(input);
        }
    }
}

async function _reduce(func, start, iterable) {
    let value = start;
    for await (const nextItem of iterable) {
        value = await func(value, nextItem);
    }
    return value;
}
function reduce(func, start, iterable) {
    if (start === undefined) {
        return (curriedStart, curriedIterable) => curriedIterable ? _reduce(func, curriedStart, curriedIterable) : reduce(func, curriedStart);
    }
    if (iterable === undefined) {
        return (curriedIterable) => reduce(func, start, curriedIterable);
    }
    return _reduce(func, start, iterable);
}

async function* _take(count, iterable) {
    let taken = 0;
    for await (const val of iterable) {
        yield await val;
        taken++;
        if (taken >= count) {
            break;
        }
    }
}
function* _syncTake(count, iterable) {
    let taken = 0;
    for (const val of iterable) {
        yield val;
        taken++;
        if (taken >= count) {
            break;
        }
    }
}
function take(count, iterable) {
    if (iterable === undefined) {
        return curriedIterable => take(count, curriedIterable);
    }
    if (iterable[Symbol.asyncIterator]) {
        return _take(count, iterable);
    }
    return _syncTake(count, iterable);
}

async function* _asyncTap(func, iterable) {
    for await (const val of iterable) {
        await func(val);
        yield val;
    }
}
function tap(func, iterable) {
    if (iterable === undefined) {
        return (curriedIterable) => _asyncTap(func, curriedIterable);
    }
    return _asyncTap(func, iterable);
}

function addTime(a, b) {
    let seconds = a[0] + b[0];
    let nanoseconds = a[1] + b[1];
    if (nanoseconds >= 1000000000) {
        const remainder = nanoseconds % 1000000000;
        seconds += (nanoseconds - remainder) / 1000000000;
        nanoseconds = remainder;
    }
    return [seconds, nanoseconds];
}
async function* _asyncTime(config, iterable) {
    const itr = iterable[Symbol.asyncIterator]();
    let total = [0, 0];
    while (true) {
        const start = process.hrtime();
        const { value, done } = await itr.next();
        const delta = process.hrtime(start);
        total = addTime(total, delta);
        if (config.progress) {
            config.progress(delta, total);
        }
        if (done) {
            if (config.total) {
                config.total(total);
            }
            return value;
        }
        yield value;
    }
}
function* _syncTime(config, iterable) {
    const itr = iterable[Symbol.iterator]();
    let total = [0, 0];
    while (true) {
        const start = process.hrtime();
        const { value, done } = itr.next();
        const delta = process.hrtime(start);
        total = addTime(total, delta);
        if (config.progress) {
            config.progress(delta, total);
        }
        if (done) {
            if (config.total) {
                config.total(total);
            }
            return value;
        }
        yield value;
    }
}
function time(config = {}, iterable) {
    if (iterable === undefined) {
        return curriedIterable => time(config, curriedIterable);
    }
    if (iterable[Symbol.asyncIterator] !== undefined) {
        return _asyncTime(config, iterable);
    }
    else {
        return _syncTime(config, iterable);
    }
}

function _transform(concurrency, func, iterable) {
    const iterator = getIterator(iterable);
    const resultQueue = [];
    const readQueue = [];
    let ended = false;
    let reading = false;
    let inflightCount = 0;
    let lastError = null;
    function fulfillReadQueue() {
        while (readQueue.length > 0 && resultQueue.length > 0) {
            const { resolve } = readQueue.shift();
            const value = resultQueue.shift();
            resolve({ done: false, value });
        }
        while (readQueue.length > 0 && inflightCount === 0 && ended) {
            const { resolve, reject } = readQueue.shift();
            if (lastError) {
                reject(lastError);
                lastError = null;
            }
            else {
                resolve({ done: true, value: undefined });
            }
        }
    }
    async function fillQueue() {
        if (ended) {
            fulfillReadQueue();
            return;
        }
        if (reading) {
            return;
        }
        if (inflightCount + resultQueue.length >= concurrency) {
            return;
        }
        reading = true;
        inflightCount++;
        try {
            const { done, value } = await iterator.next();
            if (done) {
                ended = true;
                inflightCount--;
                fulfillReadQueue();
            }
            else {
                mapAndQueue(value);
            }
        }
        catch (error) {
            ended = true;
            inflightCount--;
            lastError = error;
            fulfillReadQueue();
        }
        reading = false;
        fillQueue();
    }
    async function mapAndQueue(itrValue) {
        try {
            const value = await func(itrValue);
            resultQueue.push(value);
        }
        catch (error) {
            ended = true;
            lastError = error;
        }
        inflightCount--;
        fulfillReadQueue();
        fillQueue();
    }
    async function next() {
        if (resultQueue.length === 0) {
            const deferred = defer();
            readQueue.push(deferred);
            fillQueue();
            return deferred.promise;
        }
        const value = resultQueue.shift();
        fillQueue();
        return { done: false, value };
    }
    const asyncIterableIterator = {
        next,
        [Symbol.asyncIterator]: () => asyncIterableIterator,
    };
    return asyncIterableIterator;
}
function transform(concurrency, func, iterable) {
    if (func === undefined) {
        return (curriedFunc, curriedIterable) => curriedIterable
            ? transform(concurrency, curriedFunc, curriedIterable)
            : transform(concurrency, curriedFunc);
    }
    if (iterable === undefined) {
        return (curriedIterable) => transform(concurrency, func, curriedIterable);
    }
    return _transform(concurrency, func, iterable);
}

async function _writeToStream(stream, iterable) {
    let lastError = null;
    let errCb = null;
    let drainCb = null;
    const notifyError = err => {
        lastError = err;
        if (errCb) {
            errCb(err);
        }
    };
    const notifyDrain = () => {
        if (drainCb) {
            drainCb();
        }
    };
    const cleanup = () => {
        stream.removeListener('error', notifyError);
        stream.removeListener('drain', notifyDrain);
    };
    stream.once('error', notifyError);
    const waitForDrain = () => new Promise((resolve, reject) => {
        if (lastError) {
            return reject(lastError);
        }
        stream.once('drain', notifyDrain);
        drainCb = resolve;
        errCb = reject;
    });
    for await (const value of iterable) {
        if (stream.write(value) === false) {
            await waitForDrain();
        }
        if (lastError) {
            break;
        }
    }
    cleanup();
    if (lastError) {
        throw lastError;
    }
}
function writeToStream(stream, iterable) {
    if (iterable === undefined) {
        return (curriedIterable) => _writeToStream(stream, curriedIterable);
    }
    return _writeToStream(stream, iterable);
}




/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/varint/decode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/decode.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = read

var MSB = 0x80
  , REST = 0x7F

function read(buf, offset) {
  var res    = 0
    , offset = offset || 0
    , shift  = 0
    , counter = offset
    , b
    , l = buf.length

  do {
    if (counter >= l || shift > 49) {
      read.bytes = 0
      throw new RangeError('Could not decode varint')
    }
    b = buf[counter++]
    res += shift < 28
      ? (b & REST) << shift
      : (b & REST) * Math.pow(2, shift)
    shift += 7
  } while (b >= MSB)

  read.bytes = counter - offset

  return res
}


/***/ }),

/***/ "./node_modules/varint/encode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/encode.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = encode

var MSB = 0x80
  , REST = 0x7F
  , MSBALL = ~REST
  , INT = Math.pow(2, 31)

function encode(num, out, offset) {
  if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
    encode.bytes = 0
    throw new RangeError('Could not encode varint')
  }
  out = out || []
  offset = offset || 0
  var oldOffset = offset

  while(num >= INT) {
    out[offset++] = (num & 0xFF) | MSB
    num /= 128
  }
  while(num & MSBALL) {
    out[offset++] = (num & 0xFF) | MSB
    num >>>= 7
  }
  out[offset] = num | 0
  
  encode.bytes = offset - oldOffset + 1
  
  return out
}


/***/ }),

/***/ "./node_modules/varint/index.js":
/*!**************************************!*\
  !*** ./node_modules/varint/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    encode: __webpack_require__(/*! ./encode.js */ "./node_modules/varint/encode.js")
  , decode: __webpack_require__(/*! ./decode.js */ "./node_modules/varint/decode.js")
  , encodingLength: __webpack_require__(/*! ./length.js */ "./node_modules/varint/length.js")
}


/***/ }),

/***/ "./node_modules/varint/length.js":
/*!***************************************!*\
  !*** ./node_modules/varint/length.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var N1 = Math.pow(2,  7)
var N2 = Math.pow(2, 14)
var N3 = Math.pow(2, 21)
var N4 = Math.pow(2, 28)
var N5 = Math.pow(2, 35)
var N6 = Math.pow(2, 42)
var N7 = Math.pow(2, 49)
var N8 = Math.pow(2, 56)
var N9 = Math.pow(2, 63)

module.exports = function (value) {
  return (
    value < N1 ? 1
  : value < N2 ? 2
  : value < N3 ? 3
  : value < N4 ? 4
  : value < N5 ? 5
  : value < N6 ? 6
  : value < N7 ? 7
  : value < N8 ? 8
  : value < N9 ? 9
  :              10
  )
}


/***/ }),

/***/ "./src/LazyIpfsImage.css":
/*!*******************************!*\
  !*** ./src/LazyIpfsImage.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./LazyIpfsImage.css */ "./node_modules/css-loader/dist/cjs.js!./src/LazyIpfsImage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/LazyIpfsImage.js":
/*!******************************!*\
  !*** ./src/LazyIpfsImage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LazyIpfsImage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LazyIpfsImage.css */ "./src/LazyIpfsImage.css");
/* harmony import */ var _LazyIpfsImage_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LazyIpfsImage_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.css */ "./src/Spinner.css");
/* harmony import */ var _Spinner_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-images */ "react-lazy-images");
/* harmony import */ var react_lazy_images__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_images__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nft_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nft.storage */ "./node_modules/nft.storage/src/lib.js");
/* harmony import */ var _defaultReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultReducer */ "./src/defaultReducer.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var LazyIpfsImage = function LazyIpfsImage(props) {
  var endpoint = props.endpoint,
      token = props.token,
      ipfspath = props.ipfspath,
      setIpfsUri = props.setIpfsUri;

  if (!endpoint || !token) {
    throw new Error("Please pass nft.storage endpoint and token to LazyIpfsImage component.");
  }

  var ipfsPrefix = ipfspath ? ipfspath : "https://ipfs.io/ipfs ";

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_defaultReducer__WEBPACK_IMPORTED_MODULE_5__["defaultReducer"], {
    loading: false,
    error: false,
    uri: null,
    message: null
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      ipfsUri = _useState4[0],
      setIpfs = _useState4[1];

  var uploadArtwork = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var doFetch, storage, cid, status, _ipfsUri;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();

              doFetch = /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          fetch(req).then(function (res) {
                            if (!res.ok) {
                              res.text().then(function (text) {
                                dispatch({
                                  type: "ERROR",
                                  message: text
                                });
                                return null;
                              });
                            }

                            return res.blob();
                          }).then(function (imgBlob) {
                            if (imgBlob) {
                              var uri = URL.createObjectURL(imgBlob);
                              dispatch({
                                type: "SUCCESS",
                                message: ipfsUri,
                                payload: uri
                              });
                            }
                          });

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function doFetch(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }();

              _context2.prev = 2;

              if (file) {
                _context2.next = 6;
                break;
              }

              alert("Please choose file first");
              return _context2.abrupt("return");

            case 6:
              dispatch({
                type: "PROCESSING",
                message: "Uploading to IPFS, please wait ..."
              });
              storage = new nft_storage__WEBPACK_IMPORTED_MODULE_4__["NFTStorage"]({
                endpoint: endpoint,
                token: token
              });
              _context2.next = 10;
              return storage.storeBlob(new Blob([file]));

            case 10:
              cid = _context2.sent;
              _context2.next = 13;
              return storage.status(cid);

            case 13:
              status = _context2.sent;
              // TODO: for testing only
              // const cid = "bafkreif7tz3idqj2psg7mft2oz7hgjcuzhi4ivad5zlczw2n76j636hr3i"
              // console.log({ cid })
              // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
              // await sleep (2*1000)
              setFile(null);
              _ipfsUri = "".concat(ipfsPrefix, "/").concat(cid);
              setIpfs(_ipfsUri);

              if (setIpfsUri) {
                console.log("SET URI");
                setIpfsUri(_ipfsUri); // parent call back
              } else {
                console.log("NOT SET");
              }

              dispatch({
                type: "INFO",
                message: "Upload success at ".concat(_ipfsUri)
              });
              doFetch(_ipfsUri);
              _context2.next = 26;
              break;

            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);
              dispatch({
                type: "ERROR",
                message: _context2.t0.message
              });

            case 26:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 22]]);
    }));

    return function uploadArtwork(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onFileChange = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setFile(event.target.files[0]);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onFileChange(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "upload__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "upload__frame"
  }, state.uri && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_lazy_images__WEBPACK_IMPORTED_MODULE_2__["LazyImage"], {
    className: "upload__artwork",
    src: state.uri,
    alt: "Artwork",
    debounceDurationMs: 400,
    placeholder: function placeholder(_ref4) {
      var imageProps = _ref4.imageProps,
          ref = _ref4.ref;
      return (
        /*#__PURE__*/
        // ref is for the component's own reference
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, !state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "upload__placeholder",
          ref: ref
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "loader"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Please be patient, it could take a few minutes")))
      );
    } // eslint-disable-next-line
    ,
    actual: function actual(_ref5) {
      var imageProps = _ref5.imageProps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", imageProps);
    }
  }), state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "upload__placeholder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "loader"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Please be patient, it could take a few minutes")), !state.uri && !state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "upload__placeholder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "upload__prompt"
  }, "Please upload no less than [3000x2000]"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "btn upload__btn btn-bg rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    id: "file_input",
    type: "file",
    onChange: function onChange(e) {
      return onFileChange(e);
    }
  }), "1. Choose File"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "btn upload__btn btn-bg rounded",
    onClick: function onClick(e) {
      return uploadArtwork(e);
    }
  }, "2. Upload Artwork"), state.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "upload_message"
  }, !state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "\u2705") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "\u274C"), state.message));
};

/* harmony default export */ __webpack_exports__["default"] = (LazyIpfsImage);

/***/ }),

/***/ "./src/Spinner.css":
/*!*************************!*\
  !*** ./src/Spinner.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./Spinner.css */ "./node_modules/css-loader/dist/cjs.js!./src/Spinner.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/defaultReducer.js":
/*!*******************************!*\
  !*** ./src/defaultReducer.js ***!
  \*******************************/
/*! exports provided: defaultReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultReducer", function() { return defaultReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultReducer = function defaultReducer(state, action) {
  var message = action.message ? action.message : state.message;

  switch (action.type) {
    case 'PROCESSING':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        error: false,
        uri: null,
        message: message
      });

    case 'SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        uri: action.payload,
        message: message
      });

    case 'INFO':
      return _objectSpread(_objectSpread({}, state), {}, {
        message: message
      });

    case 'ERROR':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true,
        uri: null,
        message: message
      });

    default:
      throw new Error();
  }
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: LazyIpfsImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LazyIpfsImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LazyIpfsImage */ "./src/LazyIpfsImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyIpfsImage", function() { return _LazyIpfsImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazy-images":
/*!************************************!*\
  !*** external "react-lazy-images" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-images");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL0BpcGxkL2Nhci9janMvY2FyLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL0BpcGxkL2Nhci9janMvbGliL2RlY29kZXIuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL0BpcGxkL2Nhci9janMvbGliL2VuY29kZXIuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL0BpcGxkL2Nhci9janMvbGliL2luZGV4ZWQtcmVhZGVyLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL0BpcGxkL2Nhci9janMvbGliL2luZGV4ZXIuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL0BpcGxkL2Nhci9janMvbGliL2l0ZXJhdG9yLWNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL0BpcGxkL2Nhci9janMvbGliL2l0ZXJhdG9yLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9AaXBsZC9jYXIvY2pzL2xpYi9yZWFkZXItYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvQGlwbGQvY2FyL2Nqcy9saWIvd3JpdGVyLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL0BpcGxkL2RhZy1jYm9yL2Nqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvQGlwbGQvZGFnLXBiL2Nqcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL0BpcGxkL2RhZy1wYi9janMvc3JjL3BiLWRlY29kZS5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvQGlwbGQvZGFnLXBiL2Nqcy9zcmMvcGItZW5jb2RlLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9AaXBsZC9kYWctcGIvY2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9jYXJiaXRlcy9janMvbGliL3RyZWV3YWxrL2luZGV4LmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9jYXJiaXRlcy9janMvbGliL3RyZWV3YWxrL2pvaW5lci5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvY2FyYml0ZXMvY2pzL2xpYi90cmVld2Fsay9zcGxpdHRlci5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2Nib3JnLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliLzB1aW50LmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliLzFuZWdpbnQuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL2Nib3JnL2Nqcy9saWIvMmJ5dGVzLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliLzNzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL2Nib3JnL2Nqcy9saWIvNGFycmF5LmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliLzVtYXAuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL2Nib3JnL2Nqcy9saWIvNnRhZy5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi83ZmxvYXQuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL2Nib3JnL2Nqcy9saWIvYmwuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL2Nib3JnL2Nqcy9saWIvYnl0ZS11dGlscy5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL2Nib3JnL2Nqcy9saWIvZGVjb2RlLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi9pcy5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi9qdW1wLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliL3Rva2VuLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL3NyYy9MYXp5SXBmc0ltYWdlLmNzcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9zcmMvU3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvbXVsdGlmb3JtYXRzL2Nqcy9zcmMvYmFzZXMvYmFzZS5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvbXVsdGlmb3JtYXRzL2Nqcy9zcmMvYmFzZXMvYmFzZTMyLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy9iYXNlcy9iYXNlNTguanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL211bHRpZm9ybWF0cy9janMvc3JjL2Jsb2NrLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy9ieXRlcy5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvbXVsdGlmb3JtYXRzL2Nqcy9zcmMvY2lkLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy9jb2RlY3MvcmF3LmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy9oYXNoZXMvZGlnZXN0LmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy9oYXNoZXMvaGFzaGVyLmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvbXVsdGlmb3JtYXRzL2Nqcy9zcmMvdmFyaW50LmpzIiwid2VicGFjazovL2xhenktaXBmcy1pbWFnZS8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3ZlbmRvci9iYXNlLXguanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL211bHRpZm9ybWF0cy9janMvdmVuZG9yL3ZhcmludC5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvbmZ0LnN0b3JhZ2Uvc3JjL2dhdGV3YXkuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL25mdC5zdG9yYWdlL3NyYy9saWIuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL25mdC5zdG9yYWdlL3NyYy9wbGF0Zm9ybS53ZWIuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL25mdC5zdG9yYWdlL3NyYy90b2tlbi5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvcC1yZXRyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvcmV0cnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL3JldHJ5L2xpYi9yZXRyeS5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvcmV0cnkvbGliL3JldHJ5X29wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvc3RyZWFtaW5nLWl0ZXJhYmxlcy9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL3ZhcmludC9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL3ZhcmludC9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vbm9kZV9tb2R1bGVzL3ZhcmludC9pbmRleC5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9ub2RlX21vZHVsZXMvdmFyaW50L2xlbmd0aC5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9zcmMvTGF6eUlwZnNJbWFnZS5jc3M/ZDAxNyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9zcmMvTGF6eUlwZnNJbWFnZS5qcyIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9zcmMvU3Bpbm5lci5jc3M/MWNjZCIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvLi9zcmMvZGVmYXVsdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vbGF6eS1pcGZzLWltYWdlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9sYXp5LWlwZnMtaW1hZ2UvZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWltYWdlc1wiIl0sIm5hbWVzIjpbIkxhenlJcGZzSW1hZ2UiLCJwcm9wcyIsImVuZHBvaW50IiwidG9rZW4iLCJpcGZzcGF0aCIsInNldElwZnNVcmkiLCJFcnJvciIsImlwZnNQcmVmaXgiLCJ1c2VSZWR1Y2VyIiwiZGVmYXVsdFJlZHVjZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1cmkiLCJtZXNzYWdlIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwiZmlsZSIsInNldEZpbGUiLCJpcGZzVXJpIiwic2V0SXBmcyIsInVwbG9hZEFydHdvcmsiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZG9GZXRjaCIsInJlcSIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwidGV4dCIsInR5cGUiLCJibG9iIiwiaW1nQmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBheWxvYWQiLCJhbGVydCIsInN0b3JhZ2UiLCJORlRTdG9yYWdlIiwic3RvcmVCbG9iIiwiQmxvYiIsImNpZCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJvbkZpbGVDaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsImltYWdlUHJvcHMiLCJyZWYiLCJlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTs7QUFFYiw4Q0FBOEMsY0FBYzs7QUFFNUQsb0JBQW9CLG1CQUFPLENBQUMsbUZBQXlCO0FBQ3JELGNBQWMsbUJBQU8sQ0FBQyxxRUFBa0I7QUFDeEMsZUFBZSxtQkFBTyxDQUFDLHVFQUFtQjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyxtRkFBeUI7QUFDckQsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWlDOzs7O0FBSXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCYTs7QUFFYiw4Q0FBOEMsY0FBYzs7QUFFNUQsYUFBYSxtQkFBTyxDQUFDLDhDQUFRO0FBQzdCLFVBQVUsbUJBQU8sQ0FBQyxvRUFBa0I7QUFDcEMsYUFB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QkFBTyxDQUFDLGlFQUFjOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGVBQWU7QUFDeEI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hDYTs7QUFFYiw4Q0FBOEMsY0FBYzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzVFYTs7QUFFYiw4Q0FBOEMsY0FBYzs7QUFFNUQsY0FBYyxtQkFBTyxDQUFDLGlFQUFjOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMxWGE7O0FBRWIsOENBQThDLGNBQWM7O0FBRTVELFVBQVUsbUJBQU8sQ0FBQyxvRUFBa0I7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxTQUFT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QUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFMYTs7QUFFYiw4Q0FBOEMsY0FBYzs7QUFFNUQsZ0JBQWdCLG1CQUFPLENBQUMsbUVBQWlCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDMUVhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOERBQThELElBQUksRUFBRSxrQ0FBa0M7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxJQUFJLEVBQUUsV0FBVztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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MkRBQWE7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU07QUFDeEI7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQkFBcUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0IscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrQkFBK0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtRUFBbUUsY0FBYztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7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QUFFd0MsTUFBTSxDQUFDaEIsT0FKaEI7QUFLSXZCLGVBQU8sRUFBRUE7QUFMYjs7QUFPSixTQUFLLE1BQUw7QUFDSSw2Q0FDT0MsS0FEUDtBQUVJRCxlQUFPLEVBQUVBO0FBRmI7O0FBSUosU0FBSyxPQUFMO0FBQ0ksNkNBQ09DLEtBRFA7QUFFSUosZUFBTyxFQUFFLEtBRmI7QUFHSUMsYUFBSyxFQUFFLElBSFg7QUFJSUMsV0FBRyxFQUFFLElBSlQ7QUFLSUMsZUFBTyxFQUFFQTtBQUxiOztBQU9KO0FBQ0ksWUFBTSxJQUFJUCxLQUFKLEVBQU47QUEvQlI7QUFpQ0gsQ0FuQ00sQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFkZXJCcm93c2VyID0gcmVxdWlyZSgnLi9saWIvcmVhZGVyLWJyb3dzZXIuanMnKTtcbnZhciBpbmRleGVyID0gcmVxdWlyZSgnLi9saWIvaW5kZXhlci5qcycpO1xudmFyIGl0ZXJhdG9yID0gcmVxdWlyZSgnLi9saWIvaXRlcmF0b3IuanMnKTtcbnZhciB3cml0ZXJCcm93c2VyID0gcmVxdWlyZSgnLi9saWIvd3JpdGVyLWJyb3dzZXIuanMnKTtcbnZhciBpbmRleGVkUmVhZGVyQnJvd3NlciA9IHJlcXVpcmUoJy4vbGliL2luZGV4ZWQtcmVhZGVyLWJyb3dzZXIuanMnKTtcblxuXG5cbmV4cG9ydHMuQ2FyUmVhZGVyID0gcmVhZGVyQnJvd3Nlci5DYXJSZWFkZXI7XG5leHBvcnRzLkNhckluZGV4ZXIgPSBpbmRleGVyLkNhckluZGV4ZXI7XG5leHBvcnRzLkNhckJsb2NrSXRlcmF0b3IgPSBpdGVyYXRvci5DYXJCbG9ja0l0ZXJhdG9yO1xuZXhwb3J0cy5DYXJDSURJdGVyYXRvciA9IGl0ZXJhdG9yLkNhckNJREl0ZXJhdG9yO1xuZXhwb3J0cy5DYXJXcml0ZXIgPSB3cml0ZXJCcm93c2VyLkNhcldyaXRlcjtcbmV4cG9ydHMuQ2FySW5kZXhlZFJlYWRlciA9IGluZGV4ZWRSZWFkZXJCcm93c2VyLkNhckluZGV4ZWRSZWFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB2YXJpbnQgPSByZXF1aXJlKCd2YXJpbnQnKTtcbnZhciBjaWQgPSByZXF1aXJlKCdtdWx0aWZvcm1hdHMvY2lkJyk7XG52YXIgRGlnZXN0ID0gcmVxdWlyZSgnbXVsdGlmb3JtYXRzL2hhc2hlcy9kaWdlc3QnKTtcbnZhciBkYWdDYm9yID0gcmVxdWlyZSgnQGlwbGQvZGFnLWNib3InKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcbiAgaWYgKGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoZSkge1xuICAgIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIGlmIChrICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgdmFyIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIGspO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgaywgZC5nZXQgPyBkIDoge1xuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZVtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG5bJ2RlZmF1bHQnXSA9IGU7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG4pO1xufVxuXG52YXIgdmFyaW50X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeSh2YXJpbnQpO1xudmFyIERpZ2VzdF9fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKERpZ2VzdCk7XG5cbmNvbnN0IENJRFYwX0JZVEVTID0ge1xuICBTSEEyXzI1NjogMTgsXG4gIExFTkdUSDogMzIsXG4gIERBR19QQjogMTEyXG59O1xuYXN5bmMgZnVuY3Rpb24gcmVhZFZhcmludChyZWFkZXIpIHtcbiAgY29uc3QgYnl0ZXMgPSBhd2FpdCByZWFkZXIudXBUbyg4KTtcbiAgY29uc3QgaSA9IHZhcmludF9fZGVmYXVsdFsnZGVmYXVsdCddLmRlY29kZShieXRlcyk7XG4gIHJlYWRlci5zZWVrKHZhcmludF9fZGVmYXVsdFsnZGVmYXVsdCddLmRlY29kZS5ieXRlcyk7XG4gIHJldHVybiBpO1xufVxuYXN5bmMgZnVuY3Rpb24gcmVhZEhlYWRlcihyZWFkZXIpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXdhaXQgcmVhZFZhcmludChyZWFkZXIpO1xuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENBUiBoZWFkZXIgKHplcm8gbGVuZ3RoKScpO1xuICB9XG4gIGNvbnN0IGhlYWRlciA9IGF3YWl0IHJlYWRlci5leGFjdGx5KGxlbmd0aCk7XG4gIHJlYWRlci5zZWVrKGxlbmd0aCk7XG4gIGNvbnN0IGJsb2NrID0gZGFnQ2Jvci5kZWNvZGUoaGVhZGVyKTtcbiAgaWYgKGJsb2NrID09IG51bGwgfHwgQXJyYXkuaXNBcnJheShibG9jaykgfHwgdHlwZW9mIGJsb2NrICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDQVIgaGVhZGVyIGZvcm1hdCcpO1xuICB9XG4gIGlmIChibG9jay52ZXJzaW9uICE9PSAxKSB7XG4gICAgaWYgKHR5cGVvZiBibG9jay52ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIENBUiB2ZXJzaW9uOiBcIiR7IGJsb2NrLnZlcnNpb24gfVwiYCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBDQVIgdmVyc2lvbjogJHsgYmxvY2sudmVyc2lvbiB9YCk7XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KGJsb2NrLnJvb3RzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDQVIgaGVhZGVyIGZvcm1hdCcpO1xuICB9XG4gIGlmIChPYmplY3Qua2V5cyhibG9jaykuZmlsdGVyKHAgPT4gcCAhPT0gJ3Jvb3RzJyAmJiBwICE9PSAndmVyc2lvbicpLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDQVIgaGVhZGVyIGZvcm1hdCcpO1xuICB9XG4gIHJldHVybiBibG9jaztcbn1cbmFzeW5jIGZ1bmN0aW9uIHJlYWRNdWx0aWhhc2gocmVhZGVyKSB7XG4gIGNvbnN0IGJ5dGVzID0gYXdhaXQgcmVhZGVyLnVwVG8oOCk7XG4gIHZhcmludF9fZGVmYXVsdFsnZGVmYXVsdCddLmRlY29kZShieXRlcyk7XG4gIGNvbnN0IGNvZGVMZW5ndGggPSB2YXJpbnRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5kZWNvZGUuYnl0ZXM7XG4gIGNvbnN0IGxlbmd0aCA9IHZhcmludF9fZGVmYXVsdFsnZGVmYXVsdCddLmRlY29kZShieXRlcy5zdWJhcnJheSh2YXJpbnRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5kZWNvZGUuYnl0ZXMpKTtcbiAgY29uc3QgbGVuZ3RoTGVuZ3RoID0gdmFyaW50X19kZWZhdWx0WydkZWZhdWx0J10uZGVjb2RlLmJ5dGVzO1xuICBjb25zdCBtaExlbmd0aCA9IGNvZGVMZW5ndGggKyBsZW5ndGhMZW5ndGggKyBsZW5ndGg7XG4gIGNvbnN0IG11bHRpaGFzaCA9IGF3YWl0IHJlYWRlci5leGFjdGx5KG1oTGVuZ3RoKTtcbiAgcmVhZGVyLnNlZWsobWhMZW5ndGgpO1xuICByZXR1cm4gbXVsdGloYXNoO1xufVxuYXN5bmMgZnVuY3Rpb24gcmVhZENpZChyZWFkZXIpIHtcbiAgY29uc3QgZmlyc3QgPSBhd2FpdCByZWFkZXIuZXhhY3RseSgyKTtcbiAgaWYgKGZpcnN0WzBdID09PSBDSURWMF9CWVRFUy5TSEEyXzI1NiAmJiBmaXJzdFsxXSA9PT0gQ0lEVjBfQllURVMuTEVOR1RIKSB7XG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCByZWFkZXIuZXhhY3RseSgzNCk7XG4gICAgcmVhZGVyLnNlZWsoMzQpO1xuICAgIGNvbnN0IG11bHRpaGFzaCA9IERpZ2VzdF9fbmFtZXNwYWNlLmRlY29kZShieXRlcyk7XG4gICAgcmV0dXJuIGNpZC5DSUQuY3JlYXRlKDAsIENJRFYwX0JZVEVTLkRBR19QQiwgbXVsdGloYXNoKTtcbiAgfVxuICBjb25zdCB2ZXJzaW9uID0gYXdhaXQgcmVhZFZhcmludChyZWFkZXIpO1xuICBpZiAodmVyc2lvbiAhPT0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBDSUQgdmVyc2lvbiAoJHsgdmVyc2lvbiB9KWApO1xuICB9XG4gIGNvbnN0IGNvZGVjID0gYXdhaXQgcmVhZFZhcmludChyZWFkZXIpO1xuICBjb25zdCBieXRlcyA9IGF3YWl0IHJlYWRNdWx0aWhhc2gocmVhZGVyKTtcbiAgY29uc3QgbXVsdGloYXNoID0gRGlnZXN0X19uYW1lc3BhY2UuZGVjb2RlKGJ5dGVzKTtcbiAgcmV0dXJuIGNpZC5DSUQuY3JlYXRlKHZlcnNpb24sIGNvZGVjLCBtdWx0aWhhc2gpO1xufVxuYXN5bmMgZnVuY3Rpb24gcmVhZEJsb2NrSGVhZChyZWFkZXIpIHtcbiAgY29uc3Qgc3RhcnQgPSByZWFkZXIucG9zO1xuICBsZXQgbGVuZ3RoID0gYXdhaXQgcmVhZFZhcmludChyZWFkZXIpO1xuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENBUiBzZWN0aW9uICh6ZXJvIGxlbmd0aCknKTtcbiAgfVxuICBsZW5ndGggKz0gcmVhZGVyLnBvcyAtIHN0YXJ0O1xuICBjb25zdCBjaWQgPSBhd2FpdCByZWFkQ2lkKHJlYWRlcik7XG4gIGNvbnN0IGJsb2NrTGVuZ3RoID0gbGVuZ3RoIC0gKHJlYWRlci5wb3MgLSBzdGFydCk7XG4gIHJldHVybiB7XG4gICAgY2lkLFxuICAgIGxlbmd0aCxcbiAgICBibG9ja0xlbmd0aFxuICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gcmVhZEJsb2NrKHJlYWRlcikge1xuICBjb25zdCB7Y2lkLCBibG9ja0xlbmd0aH0gPSBhd2FpdCByZWFkQmxvY2tIZWFkKHJlYWRlcik7XG4gIGNvbnN0IGJ5dGVzID0gYXdhaXQgcmVhZGVyLmV4YWN0bHkoYmxvY2tMZW5ndGgpO1xuICByZWFkZXIuc2VlayhibG9ja0xlbmd0aCk7XG4gIHJldHVybiB7XG4gICAgYnl0ZXMsXG4gICAgY2lkXG4gIH07XG59XG5hc3luYyBmdW5jdGlvbiByZWFkQmxvY2tJbmRleChyZWFkZXIpIHtcbiAgY29uc3Qgb2Zmc2V0ID0gcmVhZGVyLnBvcztcbiAgY29uc3Qge2NpZCwgbGVuZ3RoLCBibG9ja0xlbmd0aH0gPSBhd2FpdCByZWFkQmxvY2tIZWFkKHJlYWRlcik7XG4gIGNvbnN0IGluZGV4ID0ge1xuICAgIGNpZCxcbiAgICBsZW5ndGgsXG4gICAgYmxvY2tMZW5ndGgsXG4gICAgb2Zmc2V0LFxuICAgIGJsb2NrT2Zmc2V0OiByZWFkZXIucG9zXG4gIH07XG4gIHJlYWRlci5zZWVrKGluZGV4LmJsb2NrTGVuZ3RoKTtcbiAgcmV0dXJuIGluZGV4O1xufVxuZnVuY3Rpb24gY3JlYXRlRGVjb2RlcihyZWFkZXIpIHtcbiAgY29uc3QgaGVhZGVyUHJvbWlzZSA9IHJlYWRIZWFkZXIocmVhZGVyKTtcbiAgcmV0dXJuIHtcbiAgICBoZWFkZXI6ICgpID0+IGhlYWRlclByb21pc2UsXG4gICAgYXN5bmMgKmJsb2NrcygpIHtcbiAgICAgIGF3YWl0IGhlYWRlclByb21pc2U7XG4gICAgICB3aGlsZSAoKGF3YWl0IHJlYWRlci51cFRvKDgpKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHlpZWxkIGF3YWl0IHJlYWRCbG9jayhyZWFkZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgKmJsb2Nrc0luZGV4KCkge1xuICAgICAgYXdhaXQgaGVhZGVyUHJvbWlzZTtcbiAgICAgIHdoaWxlICgoYXdhaXQgcmVhZGVyLnVwVG8oOCkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgeWllbGQgYXdhaXQgcmVhZEJsb2NrSW5kZXgocmVhZGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBieXRlc1JlYWRlcihieXRlcykge1xuICBsZXQgcG9zID0gMDtcbiAgcmV0dXJuIHtcbiAgICBhc3luYyB1cFRvKGxlbmd0aCkge1xuICAgICAgcmV0dXJuIGJ5dGVzLnN1YmFycmF5KHBvcywgcG9zICsgTWF0aC5taW4obGVuZ3RoLCBieXRlcy5sZW5ndGggLSBwb3MpKTtcbiAgICB9LFxuICAgIGFzeW5jIGV4YWN0bHkobGVuZ3RoKSB7XG4gICAgICBpZiAobGVuZ3RoID4gYnl0ZXMubGVuZ3RoIC0gcG9zKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZGF0YScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ5dGVzLnN1YmFycmF5KHBvcywgcG9zICsgbGVuZ3RoKTtcbiAgICB9LFxuICAgIHNlZWsobGVuZ3RoKSB7XG4gICAgICBwb3MgKz0gbGVuZ3RoO1xuICAgIH0sXG4gICAgZ2V0IHBvcygpIHtcbiAgICAgIHJldHVybiBwb3M7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gY2h1bmtSZWFkZXIocmVhZENodW5rKSB7XG4gIGxldCBwb3MgPSAwO1xuICBsZXQgaGF2ZSA9IDA7XG4gIGxldCBvZmZzZXQgPSAwO1xuICBsZXQgY3VycmVudENodW5rID0gbmV3IFVpbnQ4QXJyYXkoMCk7XG4gIGNvbnN0IHJlYWQgPSBhc3luYyBsZW5ndGggPT4ge1xuICAgIGhhdmUgPSBjdXJyZW50Q2h1bmsubGVuZ3RoIC0gb2Zmc2V0O1xuICAgIGNvbnN0IGJ1ZmEgPSBbY3VycmVudENodW5rLnN1YmFycmF5KG9mZnNldCldO1xuICAgIHdoaWxlIChoYXZlIDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaHVuayA9IGF3YWl0IHJlYWRDaHVuaygpO1xuICAgICAgaWYgKGNodW5rID09IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoaGF2ZSA8IDApIHtcbiAgICAgICAgaWYgKGNodW5rLmxlbmd0aCA+IGhhdmUpIHtcbiAgICAgICAgICBidWZhLnB1c2goY2h1bmsuc3ViYXJyYXkoLWhhdmUpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVmYS5wdXNoKGNodW5rKTtcbiAgICAgIH1cbiAgICAgIGhhdmUgKz0gY2h1bmsubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50Q2h1bmsgPSBuZXcgVWludDhBcnJheShidWZhLnJlZHVjZSgocCwgYykgPT4gcCArIGMubGVuZ3RoLCAwKSk7XG4gICAgbGV0IG9mZiA9IDA7XG4gICAgZm9yIChjb25zdCBiIG9mIGJ1ZmEpIHtcbiAgICAgIGN1cnJlbnRDaHVuay5zZXQoYiwgb2ZmKTtcbiAgICAgIG9mZiArPSBiLmxlbmd0aDtcbiAgICB9XG4gICAgb2Zmc2V0ID0gMDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhc3luYyB1cFRvKGxlbmd0aCkge1xuICAgICAgaWYgKGN1cnJlbnRDaHVuay5sZW5ndGggLSBvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgYXdhaXQgcmVhZChsZW5ndGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnRDaHVuay5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIE1hdGgubWluKGN1cnJlbnRDaHVuay5sZW5ndGggLSBvZmZzZXQsIGxlbmd0aCkpO1xuICAgIH0sXG4gICAgYXN5bmMgZXhhY3RseShsZW5ndGgpIHtcbiAgICAgIGlmIChjdXJyZW50Q2h1bmsubGVuZ3RoIC0gb2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgIGF3YWl0IHJlYWQobGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50Q2h1bmsubGVuZ3RoIC0gb2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZGF0YScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnRDaHVuay5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIGxlbmd0aCk7XG4gICAgfSxcbiAgICBzZWVrKGxlbmd0aCkge1xuICAgICAgcG9zICs9IGxlbmd0aDtcbiAgICAgIG9mZnNldCArPSBsZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgcG9zKCkge1xuICAgICAgcmV0dXJuIHBvcztcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBhc3luY0l0ZXJhYmxlUmVhZGVyKGFzeW5jSXRlcmFibGUpIHtcbiAgY29uc3QgaXRlcmF0b3IgPSBhc3luY0l0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICBhc3luYyBmdW5jdGlvbiByZWFkQ2h1bmsoKSB7XG4gICAgY29uc3QgbmV4dCA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcbiAgICBpZiAobmV4dC5kb25lKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG5leHQudmFsdWU7XG4gIH1cbiAgcmV0dXJuIGNodW5rUmVhZGVyKHJlYWRDaHVuayk7XG59XG5cbmV4cG9ydHMuYXN5bmNJdGVyYWJsZVJlYWRlciA9IGFzeW5jSXRlcmFibGVSZWFkZXI7XG5leHBvcnRzLmJ5dGVzUmVhZGVyID0gYnl0ZXNSZWFkZXI7XG5leHBvcnRzLmNodW5rUmVhZGVyID0gY2h1bmtSZWFkZXI7XG5leHBvcnRzLmNyZWF0ZURlY29kZXIgPSBjcmVhdGVEZWNvZGVyO1xuZXhwb3J0cy5yZWFkSGVhZGVyID0gcmVhZEhlYWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHZhcmludCA9IHJlcXVpcmUoJ3ZhcmludCcpO1xudmFyIGRhZ0Nib3IgPSByZXF1aXJlKCdAaXBsZC9kYWctY2JvcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIHZhcmludF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3kodmFyaW50KTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHJvb3RzKSB7XG4gIGNvbnN0IGhlYWRlckJ5dGVzID0gZGFnQ2Jvci5lbmNvZGUoe1xuICAgIHZlcnNpb246IDEsXG4gICAgcm9vdHNcbiAgfSk7XG4gIGNvbnN0IHZhcmludEJ5dGVzID0gdmFyaW50X19kZWZhdWx0WydkZWZhdWx0J10uZW5jb2RlKGhlYWRlckJ5dGVzLmxlbmd0aCk7XG4gIGNvbnN0IGhlYWRlciA9IG5ldyBVaW50OEFycmF5KHZhcmludEJ5dGVzLmxlbmd0aCArIGhlYWRlckJ5dGVzLmxlbmd0aCk7XG4gIGhlYWRlci5zZXQodmFyaW50Qnl0ZXMsIDApO1xuICBoZWFkZXIuc2V0KGhlYWRlckJ5dGVzLCB2YXJpbnRCeXRlcy5sZW5ndGgpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuZnVuY3Rpb24gY3JlYXRlRW5jb2Rlcih3cml0ZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBhc3luYyBzZXRSb290cyhyb290cykge1xuICAgICAgY29uc3QgYnl0ZXMgPSBjcmVhdGVIZWFkZXIocm9vdHMpO1xuICAgICAgYXdhaXQgd3JpdGVyLndyaXRlKGJ5dGVzKTtcbiAgICB9LFxuICAgIGFzeW5jIHdyaXRlQmxvY2soYmxvY2spIHtcbiAgICAgIGNvbnN0IHtjaWQsIGJ5dGVzfSA9IGJsb2NrO1xuICAgICAgYXdhaXQgd3JpdGVyLndyaXRlKG5ldyBVaW50OEFycmF5KHZhcmludF9fZGVmYXVsdFsnZGVmYXVsdCddLmVuY29kZShjaWQuYnl0ZXMubGVuZ3RoICsgYnl0ZXMubGVuZ3RoKSkpO1xuICAgICAgYXdhaXQgd3JpdGVyLndyaXRlKGNpZC5ieXRlcyk7XG4gICAgICBpZiAoYnl0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGF3YWl0IHdyaXRlci53cml0ZShieXRlcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBjbG9zZSgpIHtcbiAgICAgIHJldHVybiB3cml0ZXIuZW5kKCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnRzLmNyZWF0ZUVuY29kZXIgPSBjcmVhdGVFbmNvZGVyO1xuZXhwb3J0cy5jcmVhdGVIZWFkZXIgPSBjcmVhdGVIZWFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNsYXNzIENhckluZGV4ZWRSZWFkZXIge1xuICBzdGF0aWMgYXN5bmMgZnJvbUZpbGUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gIH1cbn1cbmNvbnN0IF9fYnJvd3NlciA9IHRydWU7XG5cbmV4cG9ydHMuQ2FySW5kZXhlZFJlYWRlciA9IENhckluZGV4ZWRSZWFkZXI7XG5leHBvcnRzLl9fYnJvd3NlciA9IF9fYnJvd3NlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGRlY29kZXIgPSByZXF1aXJlKCcuL2RlY29kZXIuanMnKTtcblxuY2xhc3MgQ2FySW5kZXhlciB7XG4gIGNvbnN0cnVjdG9yKHZlcnNpb24sIHJvb3RzLCBpdGVyYXRvcikge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMuX3Jvb3RzID0gcm9vdHM7XG4gICAgdGhpcy5faXRlcmF0b3IgPSBpdGVyYXRvcjtcbiAgfVxuICBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuICBhc3luYyBnZXRSb290cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdHM7XG4gIH1cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlcmF0b3I7XG4gIH1cbiAgc3RhdGljIGFzeW5jIGZyb21CeXRlcyhieXRlcykge1xuICAgIGlmICghKGJ5dGVzIGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Zyb21CeXRlcygpIHJlcXVpcmVzIGEgVWludDhBcnJheScpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlSW5kZXhlckNvbXBsZXRlKGRlY29kZXIuYnl0ZXNSZWFkZXIoYnl0ZXMpKTtcbiAgfVxuICBzdGF0aWMgYXN5bmMgZnJvbUl0ZXJhYmxlKGFzeW5jSXRlcmFibGUpIHtcbiAgICBpZiAoIWFzeW5jSXRlcmFibGUgfHwgISh0eXBlb2YgYXN5bmNJdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdmcm9tSXRlcmFibGUoKSByZXF1aXJlcyBhbiBhc3luYyBpdGVyYWJsZScpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlSW5kZXhlckNvbXBsZXRlKGRlY29kZXIuYXN5bmNJdGVyYWJsZVJlYWRlcihhc3luY0l0ZXJhYmxlKSk7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGRlY29kZUluZGV4ZXJDb21wbGV0ZShyZWFkZXIpIHtcbiAgY29uc3QgZGVjb2RlciQxID0gZGVjb2Rlci5jcmVhdGVEZWNvZGVyKHJlYWRlcik7XG4gIGNvbnN0IHt2ZXJzaW9uLCByb290c30gPSBhd2FpdCBkZWNvZGVyJDEuaGVhZGVyKCk7XG4gIHJldHVybiBuZXcgQ2FySW5kZXhlcih2ZXJzaW9uLCByb290cywgZGVjb2RlciQxLmJsb2Nrc0luZGV4KCkpO1xufVxuXG5leHBvcnRzLkNhckluZGV4ZXIgPSBDYXJJbmRleGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBub29wKCkge1xufVxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICBjb25zdCBjaHVua1F1ZXVlID0gW107XG4gIGxldCBkcmFpbmVyID0gbnVsbDtcbiAgbGV0IGRyYWluZXJSZXNvbHZlciA9IG5vb3A7XG4gIGxldCBlbmRlZCA9IGZhbHNlO1xuICBsZXQgb3V0V2FpdCA9IG51bGw7XG4gIGxldCBvdXRXYWl0UmVzb2x2ZXIgPSBub29wO1xuICBjb25zdCBtYWtlRHJhaW5lciA9ICgpID0+IHtcbiAgICBpZiAoIWRyYWluZXIpIHtcbiAgICAgIGRyYWluZXIgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgZHJhaW5lclJlc29sdmVyID0gKCkgPT4ge1xuICAgICAgICAgIGRyYWluZXIgPSBudWxsO1xuICAgICAgICAgIGRyYWluZXJSZXNvbHZlciA9IG5vb3A7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkcmFpbmVyO1xuICB9O1xuICBjb25zdCB3cml0ZXIgPSB7XG4gICAgd3JpdGUoY2h1bmspIHtcbiAgICAgIGNodW5rUXVldWUucHVzaChjaHVuayk7XG4gICAgICBjb25zdCBkcmFpbmVyID0gbWFrZURyYWluZXIoKTtcbiAgICAgIG91dFdhaXRSZXNvbHZlcigpO1xuICAgICAgcmV0dXJuIGRyYWluZXI7XG4gICAgfSxcbiAgICBhc3luYyBlbmQoKSB7XG4gICAgICBlbmRlZCA9IHRydWU7XG4gICAgICBjb25zdCBkcmFpbmVyID0gbWFrZURyYWluZXIoKTtcbiAgICAgIG91dFdhaXRSZXNvbHZlcigpO1xuICAgICAgcmV0dXJuIGRyYWluZXI7XG4gICAgfVxuICB9O1xuICBjb25zdCBpdGVyYXRvciA9IHtcbiAgICBhc3luYyBuZXh0KCkge1xuICAgICAgY29uc3QgY2h1bmsgPSBjaHVua1F1ZXVlLnNoaWZ0KCk7XG4gICAgICBpZiAoY2h1bmspIHtcbiAgICAgICAgaWYgKGNodW5rUXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZHJhaW5lclJlc29sdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogY2h1bmtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmRlZCkge1xuICAgICAgICBkcmFpbmVyUmVzb2x2ZXIoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICghb3V0V2FpdCkge1xuICAgICAgICBvdXRXYWl0ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgb3V0V2FpdFJlc29sdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgb3V0V2FpdCA9IG51bGw7XG4gICAgICAgICAgICBvdXRXYWl0UmVzb2x2ZXIgPSBub29wO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaXRlcmF0b3IubmV4dCgpKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRXYWl0O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB3cml0ZXIsXG4gICAgaXRlcmF0b3JcbiAgfTtcbn1cblxuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBkZWNvZGVyID0gcmVxdWlyZSgnLi9kZWNvZGVyLmpzJyk7XG5cbmNsYXNzIENhckl0ZXJhdG9yQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHZlcnNpb24sIHJvb3RzLCBpdGVyYWJsZSkge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMuX3Jvb3RzID0gcm9vdHM7XG4gICAgdGhpcy5faXRlcmFibGUgPSBpdGVyYWJsZTtcbiAgICB0aGlzLl9kZWNvZGVkID0gZmFsc2U7XG4gIH1cbiAgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cbiAgYXN5bmMgZ2V0Um9vdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3RzO1xuICB9XG59XG5jbGFzcyBDYXJCbG9ja0l0ZXJhdG9yIGV4dGVuZHMgQ2FySXRlcmF0b3JCYXNlIHtcbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICBpZiAodGhpcy5fZGVjb2RlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVjb2RlIG1vcmUgdGhhbiBvbmNlJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5faXRlcmFibGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQmxvY2sgaXRlcmFibGUgbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIHRoaXMuX2RlY29kZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLl9pdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgfVxuICBzdGF0aWMgYXN5bmMgZnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgY29uc3Qge3ZlcnNpb24sIHJvb3RzLCBpdGVyYXRvcn0gPSBhd2FpdCBmcm9tQnl0ZXMoYnl0ZXMpO1xuICAgIHJldHVybiBuZXcgQ2FyQmxvY2tJdGVyYXRvcih2ZXJzaW9uLCByb290cywgaXRlcmF0b3IpO1xuICB9XG4gIHN0YXRpYyBhc3luYyBmcm9tSXRlcmFibGUoYXN5bmNJdGVyYWJsZSkge1xuICAgIGNvbnN0IHt2ZXJzaW9uLCByb290cywgaXRlcmF0b3J9ID0gYXdhaXQgZnJvbUl0ZXJhYmxlKGFzeW5jSXRlcmFibGUpO1xuICAgIHJldHVybiBuZXcgQ2FyQmxvY2tJdGVyYXRvcih2ZXJzaW9uLCByb290cywgaXRlcmF0b3IpO1xuICB9XG59XG5jbGFzcyBDYXJDSURJdGVyYXRvciBleHRlbmRzIENhckl0ZXJhdG9yQmFzZSB7XG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgaWYgKHRoaXMuX2RlY29kZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlY29kZSBtb3JlIHRoYW4gb25jZScpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2l0ZXJhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jsb2NrIGl0ZXJhYmxlIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICB0aGlzLl9kZWNvZGVkID0gdHJ1ZTtcbiAgICBjb25zdCBpdGVyYWJsZSA9IHRoaXMuX2l0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICAgIHJldHVybiB7XG4gICAgICBhc3luYyBuZXh0KCkge1xuICAgICAgICBjb25zdCBuZXh0ID0gYXdhaXQgaXRlcmFibGUubmV4dCgpO1xuICAgICAgICBpZiAobmV4dC5kb25lKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogbmV4dC52YWx1ZS5jaWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHN0YXRpYyBhc3luYyBmcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgICBjb25zdCB7dmVyc2lvbiwgcm9vdHMsIGl0ZXJhdG9yfSA9IGF3YWl0IGZyb21CeXRlcyhieXRlcyk7XG4gICAgcmV0dXJuIG5ldyBDYXJDSURJdGVyYXRvcih2ZXJzaW9uLCByb290cywgaXRlcmF0b3IpO1xuICB9XG4gIHN0YXRpYyBhc3luYyBmcm9tSXRlcmFibGUoYXN5bmNJdGVyYWJsZSkge1xuICAgIGNvbnN0IHt2ZXJzaW9uLCByb290cywgaXRlcmF0b3J9ID0gYXdhaXQgZnJvbUl0ZXJhYmxlKGFzeW5jSXRlcmFibGUpO1xuICAgIHJldHVybiBuZXcgQ2FyQ0lESXRlcmF0b3IodmVyc2lvbiwgcm9vdHMsIGl0ZXJhdG9yKTtcbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gZnJvbUJ5dGVzKGJ5dGVzKSB7XG4gIGlmICghKGJ5dGVzIGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdmcm9tQnl0ZXMoKSByZXF1aXJlcyBhIFVpbnQ4QXJyYXknKTtcbiAgfVxuICByZXR1cm4gZGVjb2RlSXRlcmF0b3IoZGVjb2Rlci5ieXRlc1JlYWRlcihieXRlcykpO1xufVxuYXN5bmMgZnVuY3Rpb24gZnJvbUl0ZXJhYmxlKGFzeW5jSXRlcmFibGUpIHtcbiAgaWYgKCFhc3luY0l0ZXJhYmxlIHx8ICEodHlwZW9mIGFzeW5jSXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Zyb21JdGVyYWJsZSgpIHJlcXVpcmVzIGFuIGFzeW5jIGl0ZXJhYmxlJyk7XG4gIH1cbiAgcmV0dXJuIGRlY29kZUl0ZXJhdG9yKGRlY29kZXIuYXN5bmNJdGVyYWJsZVJlYWRlcihhc3luY0l0ZXJhYmxlKSk7XG59XG5hc3luYyBmdW5jdGlvbiBkZWNvZGVJdGVyYXRvcihyZWFkZXIpIHtcbiAgY29uc3QgZGVjb2RlciQxID0gZGVjb2Rlci5jcmVhdGVEZWNvZGVyKHJlYWRlcik7XG4gIGNvbnN0IHt2ZXJzaW9uLCByb290c30gPSBhd2FpdCBkZWNvZGVyJDEuaGVhZGVyKCk7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbixcbiAgICByb290cyxcbiAgICBpdGVyYXRvcjogZGVjb2RlciQxLmJsb2NrcygpXG4gIH07XG59XG5cbmV4cG9ydHMuQ2FyQmxvY2tJdGVyYXRvciA9IENhckJsb2NrSXRlcmF0b3I7XG5leHBvcnRzLkNhckNJREl0ZXJhdG9yID0gQ2FyQ0lESXRlcmF0b3I7XG5leHBvcnRzLkNhckl0ZXJhdG9yQmFzZSA9IENhckl0ZXJhdG9yQmFzZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGRlY29kZXIgPSByZXF1aXJlKCcuL2RlY29kZXIuanMnKTtcblxuY2xhc3MgQ2FyUmVhZGVyIHtcbiAgY29uc3RydWN0b3IodmVyc2lvbiwgcm9vdHMsIGJsb2Nrcykge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMuX3Jvb3RzID0gcm9vdHM7XG4gICAgdGhpcy5fYmxvY2tzID0gYmxvY2tzO1xuICAgIHRoaXMuX2tleXMgPSBibG9ja3MubWFwKGIgPT4gYi5jaWQudG9TdHJpbmcoKSk7XG4gIH1cbiAgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cbiAgYXN5bmMgZ2V0Um9vdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3RzO1xuICB9XG4gIGFzeW5jIGhhcyhrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5cy5pbmRleE9mKGtleS50b1N0cmluZygpKSA+IC0xO1xuICB9XG4gIGFzeW5jIGdldChrZXkpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2tleXMuaW5kZXhPZihrZXkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0aGlzLl9ibG9ja3NbaW5kZXhdIDogdW5kZWZpbmVkO1xuICB9XG4gIGFzeW5jICpibG9ja3MoKSB7XG4gICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIHlpZWxkIGJsb2NrO1xuICAgIH1cbiAgfVxuICBhc3luYyAqY2lkcygpIHtcbiAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgeWllbGQgYmxvY2suY2lkO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgYXN5bmMgZnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgaWYgKCEoYnl0ZXMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZnJvbUJ5dGVzKCkgcmVxdWlyZXMgYSBVaW50OEFycmF5Jyk7XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVSZWFkZXJDb21wbGV0ZShkZWNvZGVyLmJ5dGVzUmVhZGVyKGJ5dGVzKSk7XG4gIH1cbiAgc3RhdGljIGFzeW5jIGZyb21JdGVyYWJsZShhc3luY0l0ZXJhYmxlKSB7XG4gICAgaWYgKCFhc3luY0l0ZXJhYmxlIHx8ICEodHlwZW9mIGFzeW5jSXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZnJvbUl0ZXJhYmxlKCkgcmVxdWlyZXMgYW4gYXN5bmMgaXRlcmFibGUnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZVJlYWRlckNvbXBsZXRlKGRlY29kZXIuYXN5bmNJdGVyYWJsZVJlYWRlcihhc3luY0l0ZXJhYmxlKSk7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGRlY29kZVJlYWRlckNvbXBsZXRlKHJlYWRlcikge1xuICBjb25zdCBkZWNvZGVyJDEgPSBkZWNvZGVyLmNyZWF0ZURlY29kZXIocmVhZGVyKTtcbiAgY29uc3Qge3ZlcnNpb24sIHJvb3RzfSA9IGF3YWl0IGRlY29kZXIkMS5oZWFkZXIoKTtcbiAgY29uc3QgYmxvY2tzID0gW107XG4gIGZvciBhd2FpdCAoY29uc3QgYmxvY2sgb2YgZGVjb2RlciQxLmJsb2NrcygpKSB7XG4gICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICB9XG4gIHJldHVybiBuZXcgQ2FyUmVhZGVyKHZlcnNpb24sIHJvb3RzLCBibG9ja3MpO1xufVxuY29uc3QgX19icm93c2VyID0gdHJ1ZTtcblxuZXhwb3J0cy5DYXJSZWFkZXIgPSBDYXJSZWFkZXI7XG5leHBvcnRzLl9fYnJvd3NlciA9IF9fYnJvd3NlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNpZCA9IHJlcXVpcmUoJ211bHRpZm9ybWF0cy9jaWQnKTtcbnZhciBlbmNvZGVyID0gcmVxdWlyZSgnLi9lbmNvZGVyLmpzJyk7XG52YXIgaXRlcmF0b3JDaGFubmVsID0gcmVxdWlyZSgnLi9pdGVyYXRvci1jaGFubmVsLmpzJyk7XG52YXIgZGVjb2RlciA9IHJlcXVpcmUoJy4vZGVjb2Rlci5qcycpO1xuXG5jbGFzcyBDYXJXcml0ZXIge1xuICBjb25zdHJ1Y3Rvcihyb290cywgZW5jb2Rlcikge1xuICAgIHRoaXMuX2VuY29kZXIgPSBlbmNvZGVyO1xuICAgIHRoaXMuX211dGV4ID0gZW5jb2Rlci5zZXRSb290cyhyb290cyk7XG4gICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBwdXQoYmxvY2spIHtcbiAgICBpZiAoIShibG9jay5ieXRlcyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHx8ICFibG9jay5jaWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NhbiBvbmx5IHdyaXRlIHtjaWQsIGJ5dGVzfSBvYmplY3RzJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbmRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbHJlYWR5IGNsb3NlZCcpO1xuICAgIH1cbiAgICBjb25zdCBjaWQkMSA9IGNpZC5DSUQuYXNDSUQoYmxvY2suY2lkKTtcbiAgICBpZiAoIWNpZCQxKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW4gb25seSB3cml0ZSB7Y2lkLCBieXRlc30gb2JqZWN0cycpO1xuICAgIH1cbiAgICB0aGlzLl9tdXRleCA9IHRoaXMuX211dGV4LnRoZW4oKCkgPT4gdGhpcy5fZW5jb2Rlci53cml0ZUJsb2NrKHtcbiAgICAgIGNpZDogY2lkJDEsXG4gICAgICBieXRlczogYmxvY2suYnl0ZXNcbiAgICB9KSk7XG4gICAgcmV0dXJuIHRoaXMuX211dGV4O1xuICB9XG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLl9lbmRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbHJlYWR5IGNsb3NlZCcpO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLl9tdXRleDtcbiAgICB0aGlzLl9lbmRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuX2VuY29kZXIuY2xvc2UoKTtcbiAgfVxuICBzdGF0aWMgY3JlYXRlKHJvb3RzKSB7XG4gICAgcm9vdHMgPSB0b1Jvb3RzKHJvb3RzKTtcbiAgICBjb25zdCB7ZW5jb2RlciwgaXRlcmF0b3J9ID0gZW5jb2RlV3JpdGVyKCk7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IENhcldyaXRlcihyb290cywgZW5jb2Rlcik7XG4gICAgY29uc3Qgb3V0ID0gbmV3IENhcldyaXRlck91dChpdGVyYXRvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlcixcbiAgICAgIG91dFxuICAgIH07XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUFwcGVuZGVyKCkge1xuICAgIGNvbnN0IHtlbmNvZGVyLCBpdGVyYXRvcn0gPSBlbmNvZGVXcml0ZXIoKTtcbiAgICBlbmNvZGVyLnNldFJvb3RzID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgY29uc3Qgd3JpdGVyID0gbmV3IENhcldyaXRlcihbXSwgZW5jb2Rlcik7XG4gICAgY29uc3Qgb3V0ID0gbmV3IENhcldyaXRlck91dChpdGVyYXRvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlcixcbiAgICAgIG91dFxuICAgIH07XG4gIH1cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVJvb3RzSW5CeXRlcyhieXRlcywgcm9vdHMpIHtcbiAgICBjb25zdCByZWFkZXIgPSBkZWNvZGVyLmJ5dGVzUmVhZGVyKGJ5dGVzKTtcbiAgICBhd2FpdCBkZWNvZGVyLnJlYWRIZWFkZXIocmVhZGVyKTtcbiAgICBjb25zdCBuZXdIZWFkZXIgPSBlbmNvZGVyLmNyZWF0ZUhlYWRlcihyb290cyk7XG4gICAgaWYgKHJlYWRlci5wb3MgIT09IG5ld0hlYWRlci5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXBkYXRlUm9vdHMoKSBjYW4gb25seSBvdmVyd3JpdGUgYSBoZWFkZXIgb2YgdGhlIHNhbWUgbGVuZ3RoIChvbGQgaGVhZGVyIGlzICR7IHJlYWRlci5wb3MgfSBieXRlcywgbmV3IGhlYWRlciBpcyAkeyBuZXdIZWFkZXIubGVuZ3RoIH0gYnl0ZXMpYCk7XG4gICAgfVxuICAgIGJ5dGVzLnNldChuZXdIZWFkZXIsIDApO1xuICAgIHJldHVybiBieXRlcztcbiAgfVxufVxuY2xhc3MgQ2FyV3JpdGVyT3V0IHtcbiAgY29uc3RydWN0b3IoaXRlcmF0b3IpIHtcbiAgICB0aGlzLl9pdGVyYXRvciA9IGl0ZXJhdG9yO1xuICB9XG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgaWYgKHRoaXMuX2l0ZXJhdGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aXBsZSBpdGVyYXRvciBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuICAgIHRoaXMuX2l0ZXJhdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZXJhdG9yO1xuICB9XG59XG5mdW5jdGlvbiBlbmNvZGVXcml0ZXIoKSB7XG4gIGNvbnN0IGl3ID0gaXRlcmF0b3JDaGFubmVsLmNyZWF0ZSgpO1xuICBjb25zdCB7d3JpdGVyLCBpdGVyYXRvcn0gPSBpdztcbiAgY29uc3QgZW5jb2RlciQxID0gZW5jb2Rlci5jcmVhdGVFbmNvZGVyKHdyaXRlcik7XG4gIHJldHVybiB7XG4gICAgZW5jb2RlcjogZW5jb2RlciQxLFxuICAgIGl0ZXJhdG9yXG4gIH07XG59XG5mdW5jdGlvbiB0b1Jvb3RzKHJvb3RzKSB7XG4gIGlmIChyb290cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmICghQXJyYXkuaXNBcnJheShyb290cykpIHtcbiAgICBjb25zdCBjaWQkMSA9IGNpZC5DSUQuYXNDSUQocm9vdHMpO1xuICAgIGlmICghY2lkJDEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Jvb3RzIG11c3QgYmUgYSBzaW5nbGUgQ0lEIG9yIGFuIGFycmF5IG9mIENJRHMnKTtcbiAgICB9XG4gICAgcmV0dXJuIFtjaWQkMV07XG4gIH1cbiAgY29uc3QgX3Jvb3RzID0gW107XG4gIGZvciAoY29uc3Qgcm9vdCBvZiByb290cykge1xuICAgIGNvbnN0IF9yb290ID0gY2lkLkNJRC5hc0NJRChyb290KTtcbiAgICBpZiAoIV9yb290KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdyb290cyBtdXN0IGJlIGEgc2luZ2xlIENJRCBvciBhbiBhcnJheSBvZiBDSURzJyk7XG4gICAgfVxuICAgIF9yb290cy5wdXNoKF9yb290KTtcbiAgfVxuICByZXR1cm4gX3Jvb3RzO1xufVxuY29uc3QgX19icm93c2VyID0gdHJ1ZTtcblxuZXhwb3J0cy5DYXJXcml0ZXIgPSBDYXJXcml0ZXI7XG5leHBvcnRzLkNhcldyaXRlck91dCA9IENhcldyaXRlck91dDtcbmV4cG9ydHMuX19icm93c2VyID0gX19icm93c2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2JvcmcgPSByZXF1aXJlKCdjYm9yZycpO1xudmFyIGNpZCA9IHJlcXVpcmUoJ211bHRpZm9ybWF0cy9jaWQnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BOYW1lc3BhY2UoZSkge1xuICBpZiAoZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICB2YXIgbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChlKSB7XG4gICAgT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgaWYgKGsgIT09ICdkZWZhdWx0Jykge1xuICAgICAgICB2YXIgZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgayk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBrLCBkLmdldCA/IGQgOiB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBlW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgblsnZGVmYXVsdCddID0gZTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobik7XG59XG5cbnZhciBjYm9yZ19fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKGNib3JnKTtcblxuY29uc3QgQ0lEX0NCT1JfVEFHID0gNDI7XG5mdW5jdGlvbiBjaWRFbmNvZGVyKG9iaikge1xuICBpZiAob2JqLmFzQ0lEICE9PSBvYmopIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBjaWQkMSA9IGNpZC5DSUQuYXNDSUQob2JqKTtcbiAgaWYgKCFjaWQkMSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoY2lkJDEuYnl0ZXMuYnl0ZUxlbmd0aCArIDEpO1xuICBieXRlcy5zZXQoY2lkJDEuYnl0ZXMsIDEpO1xuICByZXR1cm4gW1xuICAgIG5ldyBjYm9yZ19fbmFtZXNwYWNlLlRva2VuKGNib3JnX19uYW1lc3BhY2UuVHlwZS50YWcsIENJRF9DQk9SX1RBRyksXG4gICAgbmV3IGNib3JnX19uYW1lc3BhY2UuVG9rZW4oY2JvcmdfX25hbWVzcGFjZS5UeXBlLmJ5dGVzLCBieXRlcylcbiAgXTtcbn1cbmZ1bmN0aW9uIHVuZGVmaW5lZEVuY29kZXIoKSB7XG4gIHRocm93IG5ldyBFcnJvcignYHVuZGVmaW5lZGAgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgSVBMRCBEYXRhIE1vZGVsIGFuZCBjYW5ub3QgYmUgZW5jb2RlZCcpO1xufVxuZnVuY3Rpb24gbnVtYmVyRW5jb2RlcihudW0pIHtcbiAgaWYgKE51bWJlci5pc05hTihudW0pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgTmFOYCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBJUExEIERhdGEgTW9kZWwgYW5kIGNhbm5vdCBiZSBlbmNvZGVkJyk7XG4gIH1cbiAgaWYgKG51bSA9PT0gSW5maW5pdHkgfHwgbnVtID09PSAtSW5maW5pdHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BJbmZpbml0eWAgYW5kIGAtSW5maW5pdHlgIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIElQTEQgRGF0YSBNb2RlbCBhbmQgY2Fubm90IGJlIGVuY29kZWQnKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmNvbnN0IGVuY29kZU9wdGlvbnMgPSB7XG4gIGZsb2F0NjQ6IHRydWUsXG4gIHR5cGVFbmNvZGVyczoge1xuICAgIE9iamVjdDogY2lkRW5jb2RlcixcbiAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZEVuY29kZXIsXG4gICAgbnVtYmVyOiBudW1iZXJFbmNvZGVyXG4gIH1cbn07XG5mdW5jdGlvbiBjaWREZWNvZGVyKGJ5dGVzKSB7XG4gIGlmIChieXRlc1swXSAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDSUQgZm9yIENCT1IgdGFnIDQyOyBleHBlY3RlZCBsZWFkaW5nIDB4MDAnKTtcbiAgfVxuICByZXR1cm4gY2lkLkNJRC5kZWNvZGUoYnl0ZXMuc3ViYXJyYXkoMSkpO1xufVxuY29uc3QgZGVjb2RlT3B0aW9ucyA9IHtcbiAgYWxsb3dJbmRlZmluaXRlOiBmYWxzZSxcbiAgYWxsb3dVbmRlZmluZWQ6IGZhbHNlLFxuICBhbGxvd05hTjogZmFsc2UsXG4gIGFsbG93SW5maW5pdHk6IGZhbHNlLFxuICBhbGxvd0JpZ0ludDogdHJ1ZSxcbiAgc3RyaWN0OiB0cnVlLFxuICB1c2VNYXBzOiBmYWxzZSxcbiAgdGFnczogW11cbn07XG5kZWNvZGVPcHRpb25zLnRhZ3NbQ0lEX0NCT1JfVEFHXSA9IGNpZERlY29kZXI7XG5jb25zdCBuYW1lID0gJ2RhZy1jYm9yJztcbmNvbnN0IGNvZGUgPSAxMTM7XG5jb25zdCBlbmNvZGUgPSBub2RlID0+IGNib3JnX19uYW1lc3BhY2UuZW5jb2RlKG5vZGUsIGVuY29kZU9wdGlvbnMpO1xuY29uc3QgZGVjb2RlID0gZGF0YSA9PiBjYm9yZ19fbmFtZXNwYWNlLmRlY29kZShkYXRhLCBkZWNvZGVPcHRpb25zKTtcblxuZXhwb3J0cy5jb2RlID0gY29kZTtcbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG5leHBvcnRzLm5hbWUgPSBuYW1lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2lkID0gcmVxdWlyZSgnbXVsdGlmb3JtYXRzL2NpZCcpO1xudmFyIHBiRGVjb2RlID0gcmVxdWlyZSgnLi9wYi1kZWNvZGUuanMnKTtcbnZhciBwYkVuY29kZSA9IHJlcXVpcmUoJy4vcGItZW5jb2RlLmpzJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbC5qcycpO1xuXG5jb25zdCBuYW1lID0gJ2RhZy1wYic7XG5jb25zdCBjb2RlID0gMTEyO1xuZnVuY3Rpb24gZW5jb2RlKG5vZGUpIHtcbiAgdXRpbC52YWxpZGF0ZShub2RlKTtcbiAgY29uc3QgcGJuID0ge307XG4gIGlmIChub2RlLkxpbmtzKSB7XG4gICAgcGJuLkxpbmtzID0gbm9kZS5MaW5rcy5tYXAobCA9PiB7XG4gICAgICBjb25zdCBsaW5rID0ge307XG4gICAgICBpZiAobC5IYXNoKSB7XG4gICAgICAgIGxpbmsuSGFzaCA9IGwuSGFzaC5ieXRlcztcbiAgICAgIH1cbiAgICAgIGlmIChsLk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaW5rLk5hbWUgPSBsLk5hbWU7XG4gICAgICB9XG4gICAgICBpZiAobC5Uc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxpbmsuVHNpemUgPSBsLlRzaXplO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpbms7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG5vZGUuRGF0YSkge1xuICAgIHBibi5EYXRhID0gbm9kZS5EYXRhO1xuICB9XG4gIHJldHVybiBwYkVuY29kZS5lbmNvZGVOb2RlKHBibik7XG59XG5mdW5jdGlvbiBkZWNvZGUoYnl0ZXMpIHtcbiAgY29uc3QgcGJuID0gcGJEZWNvZGUuZGVjb2RlTm9kZShieXRlcyk7XG4gIGNvbnN0IG5vZGUgPSB7fTtcbiAgaWYgKHBibi5EYXRhKSB7XG4gICAgbm9kZS5EYXRhID0gcGJuLkRhdGE7XG4gIH1cbiAgaWYgKHBibi5MaW5rcykge1xuICAgIG5vZGUuTGlua3MgPSBwYm4uTGlua3MubWFwKGwgPT4ge1xuICAgICAgY29uc3QgbGluayA9IHt9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGluay5IYXNoID0gY2lkLkNJRC5kZWNvZGUobC5IYXNoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICAgIGlmICghbGluay5IYXNoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBIYXNoIGZpZWxkIGZvdW5kIGluIGxpbmssIGV4cGVjdGVkIENJRCcpO1xuICAgICAgfVxuICAgICAgaWYgKGwuTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxpbmsuTmFtZSA9IGwuTmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChsLlRzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGluay5Uc2l6ZSA9IGwuVHNpemU7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluaztcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0cy5jcmVhdGVMaW5rID0gdXRpbC5jcmVhdGVMaW5rO1xuZXhwb3J0cy5jcmVhdGVOb2RlID0gdXRpbC5jcmVhdGVOb2RlO1xuZXhwb3J0cy5wcmVwYXJlID0gdXRpbC5wcmVwYXJlO1xuZXhwb3J0cy52YWxpZGF0ZSA9IHV0aWwudmFsaWRhdGU7XG5leHBvcnRzLmNvZGUgPSBjb2RlO1xuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbmV4cG9ydHMubmFtZSA9IG5hbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNvbnN0IHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG5mdW5jdGlvbiBkZWNvZGVWYXJpbnQoYnl0ZXMsIG9mZnNldCkge1xuICBsZXQgdiA9IDA7XG4gIGZvciAobGV0IHNoaWZ0ID0gMDs7IHNoaWZ0ICs9IDcpIHtcbiAgICBpZiAoc2hpZnQgPj0gNjQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncHJvdG9idWY6IHZhcmludCBvdmVyZmxvdycpO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0ID49IGJ5dGVzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogdW5leHBlY3RlZCBlbmQgb2YgZGF0YScpO1xuICAgIH1cbiAgICBjb25zdCBiID0gYnl0ZXNbb2Zmc2V0KytdO1xuICAgIHYgKz0gc2hpZnQgPCAyOCA/IChiICYgMTI3KSA8PCBzaGlmdCA6IChiICYgMTI3KSAqIDIgKiogc2hpZnQ7XG4gICAgaWYgKGIgPCAxMjgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW1xuICAgIHYsXG4gICAgb2Zmc2V0XG4gIF07XG59XG5mdW5jdGlvbiBkZWNvZGVCeXRlcyhieXRlcywgb2Zmc2V0KSB7XG4gIGxldCBieXRlTGVuO1xuICBbYnl0ZUxlbiwgb2Zmc2V0XSA9IGRlY29kZVZhcmludChieXRlcywgb2Zmc2V0KTtcbiAgY29uc3QgcG9zdE9mZnNldCA9IG9mZnNldCArIGJ5dGVMZW47XG4gIGlmIChieXRlTGVuIDwgMCB8fCBwb3N0T2Zmc2V0IDwgMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvdG9idWY6IGludmFsaWQgbGVuZ3RoJyk7XG4gIH1cbiAgaWYgKHBvc3RPZmZzZXQgPiBieXRlcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiB1bmV4cGVjdGVkIGVuZCBvZiBkYXRhJyk7XG4gIH1cbiAgcmV0dXJuIFtcbiAgICBieXRlcy5zdWJhcnJheShvZmZzZXQsIHBvc3RPZmZzZXQpLFxuICAgIHBvc3RPZmZzZXRcbiAgXTtcbn1cbmZ1bmN0aW9uIGRlY29kZUtleShieXRlcywgaW5kZXgpIHtcbiAgbGV0IHdpcmU7XG4gIFt3aXJlLCBpbmRleF0gPSBkZWNvZGVWYXJpbnQoYnl0ZXMsIGluZGV4KTtcbiAgcmV0dXJuIFtcbiAgICB3aXJlICYgNyxcbiAgICB3aXJlID4+IDMsXG4gICAgaW5kZXhcbiAgXTtcbn1cbmZ1bmN0aW9uIGRlY29kZUxpbmsoYnl0ZXMpIHtcbiAgY29uc3QgbGluayA9IHt9O1xuICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoO1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAoaW5kZXggPCBsKSB7XG4gICAgbGV0IHdpcmVUeXBlLCBmaWVsZE51bTtcbiAgICBbd2lyZVR5cGUsIGZpZWxkTnVtLCBpbmRleF0gPSBkZWNvZGVLZXkoYnl0ZXMsIGluZGV4KTtcbiAgICBpZiAoZmllbGROdW0gPT09IDEpIHtcbiAgICAgIGlmIChsaW5rLkhhc2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogKFBCTGluaykgZHVwbGljYXRlIEhhc2ggc2VjdGlvbicpO1xuICAgICAgfVxuICAgICAgaWYgKHdpcmVUeXBlICE9PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcHJvdG9idWY6IChQQkxpbmspIHdyb25nIHdpcmVUeXBlICgkeyB3aXJlVHlwZSB9KSBmb3IgSGFzaGApO1xuICAgICAgfVxuICAgICAgaWYgKGxpbmsuTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncHJvdG9idWY6IChQQkxpbmspIGludmFsaWQgb3JkZXIsIGZvdW5kIE5hbWUgYmVmb3JlIEhhc2gnKTtcbiAgICAgIH1cbiAgICAgIGlmIChsaW5rLlRzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogKFBCTGluaykgaW52YWxpZCBvcmRlciwgZm91bmQgVHNpemUgYmVmb3JlIEhhc2gnKTtcbiAgICAgIH1cbiAgICAgIDtcbiAgICAgIFtsaW5rLkhhc2gsIGluZGV4XSA9IGRlY29kZUJ5dGVzKGJ5dGVzLCBpbmRleCk7XG4gICAgfSBlbHNlIGlmIChmaWVsZE51bSA9PT0gMikge1xuICAgICAgaWYgKGxpbmsuTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncHJvdG9idWY6IChQQkxpbmspIGR1cGxpY2F0ZSBOYW1lIHNlY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aXJlVHlwZSAhPT0gMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHByb3RvYnVmOiAoUEJMaW5rKSB3cm9uZyB3aXJlVHlwZSAoJHsgd2lyZVR5cGUgfSkgZm9yIE5hbWVgKTtcbiAgICAgIH1cbiAgICAgIGlmIChsaW5rLlRzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogKFBCTGluaykgaW52YWxpZCBvcmRlciwgZm91bmQgVHNpemUgYmVmb3JlIE5hbWUnKTtcbiAgICAgIH1cbiAgICAgIGxldCBieXRzO1xuICAgICAgW2J5dHMsIGluZGV4XSA9IGRlY29kZUJ5dGVzKGJ5dGVzLCBpbmRleCk7XG4gICAgICBsaW5rLk5hbWUgPSB0ZXh0RGVjb2Rlci5kZWNvZGUoYnl0cyk7XG4gICAgfSBlbHNlIGlmIChmaWVsZE51bSA9PT0gMykge1xuICAgICAgaWYgKGxpbmsuVHNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiAoUEJMaW5rKSBkdXBsaWNhdGUgVHNpemUgc2VjdGlvbicpO1xuICAgICAgfVxuICAgICAgaWYgKHdpcmVUeXBlICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcHJvdG9idWY6IChQQkxpbmspIHdyb25nIHdpcmVUeXBlICgkeyB3aXJlVHlwZSB9KSBmb3IgVHNpemVgKTtcbiAgICAgIH1cbiAgICAgIDtcbiAgICAgIFtsaW5rLlRzaXplLCBpbmRleF0gPSBkZWNvZGVWYXJpbnQoYnl0ZXMsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBwcm90b2J1ZjogKFBCTGluaykgaW52YWxpZCBmaWVsZE51bWJlciwgZXhwZWN0ZWQgMSwgMiBvciAzLCBnb3QgJHsgZmllbGROdW0gfWApO1xuICAgIH1cbiAgfVxuICBpZiAoaW5kZXggPiBsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogKFBCTGluaykgdW5leHBlY3RlZCBlbmQgb2YgZGF0YScpO1xuICB9XG4gIHJldHVybiBsaW5rO1xufVxuZnVuY3Rpb24gZGVjb2RlTm9kZShieXRlcykge1xuICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoO1xuICBsZXQgaW5kZXggPSAwO1xuICBsZXQgbGlua3M7XG4gIGxldCBsaW5rc0JlZm9yZURhdGEgPSBmYWxzZTtcbiAgbGV0IGRhdGE7XG4gIHdoaWxlIChpbmRleCA8IGwpIHtcbiAgICBsZXQgd2lyZVR5cGUsIGZpZWxkTnVtO1xuICAgIFt3aXJlVHlwZSwgZmllbGROdW0sIGluZGV4XSA9IGRlY29kZUtleShieXRlcywgaW5kZXgpO1xuICAgIGlmICh3aXJlVHlwZSAhPT0gMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBwcm90b2J1ZjogKFBCTm9kZSkgaW52YWxpZCB3aXJlVHlwZSwgZXhwZWN0ZWQgMiwgZ290ICR7IHdpcmVUeXBlIH1gKTtcbiAgICB9XG4gICAgaWYgKGZpZWxkTnVtID09PSAxKSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiAoUEJOb2RlKSBkdXBsaWNhdGUgRGF0YSBzZWN0aW9uJyk7XG4gICAgICB9XG4gICAgICA7XG4gICAgICBbZGF0YSwgaW5kZXhdID0gZGVjb2RlQnl0ZXMoYnl0ZXMsIGluZGV4KTtcbiAgICAgIGlmIChsaW5rcykge1xuICAgICAgICBsaW5rc0JlZm9yZURhdGEgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmllbGROdW0gPT09IDIpIHtcbiAgICAgIGlmIChsaW5rc0JlZm9yZURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogKFBCTm9kZSkgZHVwbGljYXRlIExpbmtzIHNlY3Rpb24nKTtcbiAgICAgIH0gZWxzZSBpZiAoIWxpbmtzKSB7XG4gICAgICAgIGxpbmtzID0gW107XG4gICAgICB9XG4gICAgICBsZXQgYnl0cztcbiAgICAgIFtieXRzLCBpbmRleF0gPSBkZWNvZGVCeXRlcyhieXRlcywgaW5kZXgpO1xuICAgICAgbGlua3MucHVzaChkZWNvZGVMaW5rKGJ5dHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBwcm90b2J1ZjogKFBCTm9kZSkgaW52YWxpZCBmaWVsZE51bWJlciwgZXhwZWN0ZWQgMSBvciAyLCBnb3QgJHsgZmllbGROdW0gfWApO1xuICAgIH1cbiAgfVxuICBpZiAoaW5kZXggPiBsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogKFBCTm9kZSkgdW5leHBlY3RlZCBlbmQgb2YgZGF0YScpO1xuICB9XG4gIGNvbnN0IG5vZGUgPSB7fTtcbiAgaWYgKGRhdGEpIHtcbiAgICBub2RlLkRhdGEgPSBkYXRhO1xuICB9XG4gIG5vZGUuTGlua3MgPSBsaW5rcyB8fCBbXTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydHMuZGVjb2RlTm9kZSA9IGRlY29kZU5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNvbnN0IHRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5jb25zdCBtYXhJbnQzMiA9IDIgKiogMzI7XG5jb25zdCBtYXhVSW50MzIgPSAyICoqIDMxO1xuZnVuY3Rpb24gZW5jb2RlTGluayhsaW5rLCBieXRlcykge1xuICBsZXQgaSA9IGJ5dGVzLmxlbmd0aDtcbiAgaWYgKHR5cGVvZiBsaW5rLlRzaXplID09PSAnbnVtYmVyJykge1xuICAgIGlmIChsaW5rLlRzaXplIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUc2l6ZSBjYW5ub3QgYmUgbmVnYXRpdmUnKTtcbiAgICB9XG4gICAgaWYgKCFOdW1iZXIuaXNTYWZlSW50ZWdlcihsaW5rLlRzaXplKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUc2l6ZSB0b28gbGFyZ2UgZm9yIGVuY29kaW5nJyk7XG4gICAgfVxuICAgIGkgPSBlbmNvZGVWYXJpbnQoYnl0ZXMsIGksIGxpbmsuVHNpemUpIC0gMTtcbiAgICBieXRlc1tpXSA9IDI0O1xuICB9XG4gIGlmICh0eXBlb2YgbGluay5OYW1lID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG5hbWVCeXRlcyA9IHRleHRFbmNvZGVyLmVuY29kZShsaW5rLk5hbWUpO1xuICAgIGkgLT0gbmFtZUJ5dGVzLmxlbmd0aDtcbiAgICBieXRlcy5zZXQobmFtZUJ5dGVzLCBpKTtcbiAgICBpID0gZW5jb2RlVmFyaW50KGJ5dGVzLCBpLCBuYW1lQnl0ZXMubGVuZ3RoKSAtIDE7XG4gICAgYnl0ZXNbaV0gPSAxODtcbiAgfVxuICBpZiAobGluay5IYXNoKSB7XG4gICAgaSAtPSBsaW5rLkhhc2gubGVuZ3RoO1xuICAgIGJ5dGVzLnNldChsaW5rLkhhc2gsIGkpO1xuICAgIGkgPSBlbmNvZGVWYXJpbnQoYnl0ZXMsIGksIGxpbmsuSGFzaC5sZW5ndGgpIC0gMTtcbiAgICBieXRlc1tpXSA9IDEwO1xuICB9XG4gIHJldHVybiBieXRlcy5sZW5ndGggLSBpO1xufVxuZnVuY3Rpb24gZW5jb2RlTm9kZShub2RlKSB7XG4gIGNvbnN0IHNpemUgPSBzaXplTm9kZShub2RlKTtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgbGV0IGkgPSBzaXplO1xuICBpZiAobm9kZS5EYXRhKSB7XG4gICAgaSAtPSBub2RlLkRhdGEubGVuZ3RoO1xuICAgIGJ5dGVzLnNldChub2RlLkRhdGEsIGkpO1xuICAgIGkgPSBlbmNvZGVWYXJpbnQoYnl0ZXMsIGksIG5vZGUuRGF0YS5sZW5ndGgpIC0gMTtcbiAgICBieXRlc1tpXSA9IDEwO1xuICB9XG4gIGlmIChub2RlLkxpbmtzKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSBub2RlLkxpbmtzLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgIGNvbnN0IHNpemUgPSBlbmNvZGVMaW5rKG5vZGUuTGlua3NbaW5kZXhdLCBieXRlcy5zdWJhcnJheSgwLCBpKSk7XG4gICAgICBpIC09IHNpemU7XG4gICAgICBpID0gZW5jb2RlVmFyaW50KGJ5dGVzLCBpLCBzaXplKSAtIDE7XG4gICAgICBieXRlc1tpXSA9IDE4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZXM7XG59XG5mdW5jdGlvbiBzaXplTGluayhsaW5rKSB7XG4gIGxldCBuID0gMDtcbiAgaWYgKGxpbmsuSGFzaCkge1xuICAgIGNvbnN0IGwgPSBsaW5rLkhhc2gubGVuZ3RoO1xuICAgIG4gKz0gMSArIGwgKyBzb3YobCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBsaW5rLk5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbCA9IHRleHRFbmNvZGVyLmVuY29kZShsaW5rLk5hbWUpLmxlbmd0aDtcbiAgICBuICs9IDEgKyBsICsgc292KGwpO1xuICB9XG4gIGlmICh0eXBlb2YgbGluay5Uc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICBuICs9IDEgKyBzb3YobGluay5Uc2l6ZSk7XG4gIH1cbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBzaXplTm9kZShub2RlKSB7XG4gIGxldCBuID0gMDtcbiAgaWYgKG5vZGUuRGF0YSkge1xuICAgIGNvbnN0IGwgPSBub2RlLkRhdGEubGVuZ3RoO1xuICAgIG4gKz0gMSArIGwgKyBzb3YobCk7XG4gIH1cbiAgaWYgKG5vZGUuTGlua3MpIHtcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS5MaW5rcykge1xuICAgICAgY29uc3QgbCA9IHNpemVMaW5rKGxpbmspO1xuICAgICAgbiArPSAxICsgbCArIHNvdihsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBlbmNvZGVWYXJpbnQoYnl0ZXMsIG9mZnNldCwgdikge1xuICBvZmZzZXQgLT0gc292KHYpO1xuICBjb25zdCBiYXNlID0gb2Zmc2V0O1xuICB3aGlsZSAodiA+PSBtYXhVSW50MzIpIHtcbiAgICBieXRlc1tvZmZzZXQrK10gPSB2ICYgMTI3IHwgMTI4O1xuICAgIHYgLz0gMTI4O1xuICB9XG4gIHdoaWxlICh2ID49IDEyOCkge1xuICAgIGJ5dGVzW29mZnNldCsrXSA9IHYgJiAxMjcgfCAxMjg7XG4gICAgdiA+Pj49IDc7XG4gIH1cbiAgYnl0ZXNbb2Zmc2V0XSA9IHY7XG4gIHJldHVybiBiYXNlO1xufVxuZnVuY3Rpb24gc292KHgpIHtcbiAgaWYgKHggJSAyID09PSAwKSB7XG4gICAgeCsrO1xuICB9XG4gIHJldHVybiBNYXRoLmZsb29yKChsZW42NCh4KSArIDYpIC8gNyk7XG59XG5mdW5jdGlvbiBsZW42NCh4KSB7XG4gIGxldCBuID0gMDtcbiAgaWYgKHggPj0gbWF4SW50MzIpIHtcbiAgICB4ID0gTWF0aC5mbG9vcih4IC8gbWF4SW50MzIpO1xuICAgIG4gPSAzMjtcbiAgfVxuICBpZiAoeCA+PSAxIDw8IDE2KSB7XG4gICAgeCA+Pj49IDE2O1xuICAgIG4gKz0gMTY7XG4gIH1cbiAgaWYgKHggPj0gMSA8PCA4KSB7XG4gICAgeCA+Pj49IDg7XG4gICAgbiArPSA4O1xuICB9XG4gIHJldHVybiBuICsgbGVuOHRhYlt4XTtcbn1cbmNvbnN0IGxlbjh0YWIgPSBbXG4gIDAsXG4gIDEsXG4gIDIsXG4gIDIsXG4gIDMsXG4gIDMsXG4gIDMsXG4gIDMsXG4gIDQsXG4gIDQsXG4gIDQsXG4gIDQsXG4gIDQsXG4gIDQsXG4gIDQsXG4gIDQsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDUsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDYsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDcsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDgsXG4gIDhcbl07XG5cbmV4cG9ydHMuZW5jb2RlTm9kZSA9IGVuY29kZU5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjaWQgPSByZXF1aXJlKCdtdWx0aWZvcm1hdHMvY2lkJyk7XG5cbmNvbnN0IHBiTm9kZVByb3BlcnRpZXMgPSBbXG4gICdEYXRhJyxcbiAgJ0xpbmtzJ1xuXTtcbmNvbnN0IHBiTGlua1Byb3BlcnRpZXMgPSBbXG4gICdIYXNoJyxcbiAgJ05hbWUnLFxuICAnVHNpemUnXG5dO1xuY29uc3QgdGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbmZ1bmN0aW9uIGxpbmtDb21wYXJhdG9yKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBhYnVmID0gYS5OYW1lID8gdGV4dEVuY29kZXIuZW5jb2RlKGEuTmFtZSkgOiBbXTtcbiAgY29uc3QgYmJ1ZiA9IGIuTmFtZSA/IHRleHRFbmNvZGVyLmVuY29kZShiLk5hbWUpIDogW107XG4gIGxldCB4ID0gYWJ1Zi5sZW5ndGg7XG4gIGxldCB5ID0gYmJ1Zi5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFidWZbaV0gIT09IGJidWZbaV0pIHtcbiAgICAgIHggPSBhYnVmW2ldO1xuICAgICAgeSA9IGJidWZbaV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHggPCB5ID8gLTEgOiB5IDwgeCA/IDEgOiAwO1xufVxuZnVuY3Rpb24gaGFzT25seVByb3BlcnRpZXMobm9kZSwgcHJvcGVydGllcykge1xuICByZXR1cm4gIU9iamVjdC5rZXlzKG5vZGUpLnNvbWUocCA9PiAhcHJvcGVydGllcy5pbmNsdWRlcyhwKSk7XG59XG5mdW5jdGlvbiBhc0xpbmsobGluaykge1xuICBpZiAodHlwZW9mIGxpbmsuYXNDSUQgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3QgSGFzaCA9IGNpZC5DSUQuYXNDSUQobGluayk7XG4gICAgaWYgKCFIYXNoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtJyk7XG4gICAgfVxuICAgIHJldHVybiB7IEhhc2ggfTtcbiAgfVxuICBpZiAodHlwZW9mIGxpbmsgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkobGluaykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtJyk7XG4gIH1cbiAgY29uc3QgcGJsID0ge307XG4gIGlmIChsaW5rLkhhc2gpIHtcbiAgICBsZXQgY2lkJDEgPSBjaWQuQ0lELmFzQ0lEKGxpbmsuSGFzaCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghY2lkJDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaW5rLkhhc2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2lkJDEgPSBjaWQuQ0lELnBhcnNlKGxpbmsuSGFzaCk7XG4gICAgICAgIH0gZWxzZSBpZiAobGluay5IYXNoIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgIGNpZCQxID0gY2lkLkNJRC5kZWNvZGUobGluay5IYXNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgREFHLVBCIGZvcm06ICR7IGUubWVzc2FnZSB9YCk7XG4gICAgfVxuICAgIGlmIChjaWQkMSkge1xuICAgICAgcGJsLkhhc2ggPSBjaWQkMTtcbiAgICB9XG4gIH1cbiAgaWYgKCFwYmwuSGFzaCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0nKTtcbiAgfVxuICBpZiAodHlwZW9mIGxpbmsuTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBwYmwuTmFtZSA9IGxpbmsuTmFtZTtcbiAgfVxuICBpZiAodHlwZW9mIGxpbmsuVHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgcGJsLlRzaXplID0gbGluay5Uc2l6ZTtcbiAgfVxuICByZXR1cm4gcGJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZShub2RlKSB7XG4gIGlmIChub2RlIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCB0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICBub2RlID0geyBEYXRhOiBub2RlIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBEQUctUEIgZm9ybScpO1xuICB9XG4gIGNvbnN0IHBibiA9IHt9O1xuICBpZiAobm9kZS5EYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUuRGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBibi5EYXRhID0gdGV4dEVuY29kZXIuZW5jb2RlKG5vZGUuRGF0YSk7XG4gICAgfSBlbHNlIGlmIChub2RlLkRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICBwYm4uRGF0YSA9IG5vZGUuRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBEQUctUEIgZm9ybScpO1xuICAgIH1cbiAgfVxuICBpZiAobm9kZS5MaW5rcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZS5MaW5rcykpIHtcbiAgICAgIHBibi5MaW5rcyA9IG5vZGUuTGlua3MubWFwKGFzTGluayk7XG4gICAgICBwYm4uTGlua3Muc29ydChsaW5rQ29tcGFyYXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0nKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGJuLkxpbmtzID0gW107XG4gIH1cbiAgcmV0dXJuIHBibjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8IHR5cGVvZiBub2RlICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBEQUctUEIgZm9ybScpO1xuICB9XG4gIGlmICghaGFzT25seVByb3BlcnRpZXMobm9kZSwgcGJOb2RlUHJvcGVydGllcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtIChleHRyYW5lb3VzIHByb3BlcnRpZXMpJyk7XG4gIH1cbiAgaWYgKG5vZGUuRGF0YSAhPT0gdW5kZWZpbmVkICYmICEobm9kZS5EYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtIChEYXRhIG11c3QgYmUgYSBVaW50OEFycmF5KScpO1xuICB9XG4gIGlmICghQXJyYXkuaXNBcnJheShub2RlLkxpbmtzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0gKExpbmtzIG11c3QgYmUgYW4gYXJyYXkpJyk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLkxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGluayA9IG5vZGUuTGlua3NbaV07XG4gICAgaWYgKCFsaW5rIHx8IHR5cGVvZiBsaW5rICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGxpbmspKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtIChiYWQgbGluayBvYmplY3QpJyk7XG4gICAgfVxuICAgIGlmICghaGFzT25seVByb3BlcnRpZXMobGluaywgcGJMaW5rUHJvcGVydGllcykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0gKGV4dHJhbmVvdXMgcHJvcGVydGllcyBvbiBsaW5rIG9iamVjdCknKTtcbiAgICB9XG4gICAgaWYgKCFsaW5rLkhhc2gpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0gKGxpbmsgbXVzdCBoYXZlIGEgSGFzaCknKTtcbiAgICB9XG4gICAgaWYgKGxpbmsuSGFzaC5hc0NJRCAhPT0gbGluay5IYXNoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtIChsaW5rIEhhc2ggbXVzdCBiZSBhIENJRCknKTtcbiAgICB9XG4gICAgaWYgKGxpbmsuTmFtZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBsaW5rLk5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtIChsaW5rIE5hbWUgbXVzdCBiZSBhIHN0cmluZyknKTtcbiAgICB9XG4gICAgaWYgKGxpbmsuVHNpemUgIT09IHVuZGVmaW5lZCAmJiAodHlwZW9mIGxpbmsuVHNpemUgIT09ICdudW1iZXInIHx8IGxpbmsuVHNpemUgJSAxICE9PSAwKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBEQUctUEIgZm9ybSAobGluayBUc2l6ZSBtdXN0IGJlIGFuIGludGVnZXIpJyk7XG4gICAgfVxuICAgIGlmIChpID4gMCAmJiBsaW5rQ29tcGFyYXRvcihsaW5rLCBub2RlLkxpbmtzW2kgLSAxXSkgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtIChsaW5rcyBtdXN0IGJlIHNvcnRlZCBieSBOYW1lIGJ5dGVzKScpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlTm9kZShkYXRhLCBsaW5rcyA9IFtdKSB7XG4gIHJldHVybiBwcmVwYXJlKHtcbiAgICBEYXRhOiBkYXRhLFxuICAgIExpbmtzOiBsaW5rc1xuICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUxpbmsobmFtZSwgc2l6ZSwgY2lkKSB7XG4gIHJldHVybiBhc0xpbmsoe1xuICAgIEhhc2g6IGNpZCxcbiAgICBOYW1lOiBuYW1lLFxuICAgIFRzaXplOiBzaXplXG4gIH0pO1xufVxuXG5leHBvcnRzLmNyZWF0ZUxpbmsgPSBjcmVhdGVMaW5rO1xuZXhwb3J0cy5jcmVhdGVOb2RlID0gY3JlYXRlTm9kZTtcbmV4cG9ydHMucHJlcGFyZSA9IHByZXBhcmU7XG5leHBvcnRzLnZhbGlkYXRlID0gdmFsaWRhdGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzcGxpdHRlciA9IHJlcXVpcmUoJy4vc3BsaXR0ZXIuanMnKTtcbnZhciBqb2luZXIgPSByZXF1aXJlKCcuL2pvaW5lci5qcycpO1xuXG5cblxuZXhwb3J0cy5UcmVld2Fsa0NhclNwbGl0dGVyID0gc3BsaXR0ZXIuVHJlZXdhbGtDYXJTcGxpdHRlcjtcbmV4cG9ydHMuVHJlZXdhbGtDYXJKb2luZXIgPSBqb2luZXIuVHJlZXdhbGtDYXJKb2luZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjYXIgPSByZXF1aXJlKCdAaXBsZC9jYXInKTtcblxuY2xhc3MgVHJlZXdhbGtDYXJKb2luZXIge1xuICBjb25zdHJ1Y3RvcihjYXJzKSB7XG4gICAgdGhpcy5fY2FycyA9IEFycmF5LmZyb20oY2Fycyk7XG4gICAgaWYgKCF0aGlzLl9jYXJzLmxlbmd0aClcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBDQVJzJyk7XG4gIH1cbiAgYXN5bmMgKmNhcigpIHtcbiAgICBjb25zdCByZWFkZXIgPSB0aGlzLl9jYXJzWzBdO1xuICAgIGNvbnN0IHJvb3RzID0gYXdhaXQgcmVhZGVyLmdldFJvb3RzKCk7XG4gICAgY29uc3Qge3dyaXRlciwgb3V0fSA9IGNhci5DYXJXcml0ZXIuY3JlYXRlKHJvb3RzKTtcbiAgICBjb25zdCB3cml0ZUNhciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHdyaXR0ZW4gPSBuZXcgU2V0KCk7XG4gICAgICBjb25zdCB3cml0ZUJsb2NrcyA9IGFzeW5jIHJlYWRlciA9PiB7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgYiBvZiByZWFkZXIuYmxvY2tzKCkpIHtcbiAgICAgICAgICBpZiAod3JpdHRlbi5oYXMoYi5jaWQudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICBhd2FpdCB3cml0ZXIucHV0KGIpO1xuICAgICAgICAgIHdyaXR0ZW4uYWRkKGIuY2lkLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgd3JpdGVCbG9ja3MocmVhZGVyKTtcbiAgICAgICAgZm9yIChjb25zdCByZWFkZXIgb2YgdGhpcy5fY2Fycy5zbGljZSgxKSkge1xuICAgICAgICAgIGF3YWl0IHdyaXRlQmxvY2tzKHJlYWRlcik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBhd2FpdCB3cml0ZXIuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdyaXRlQ2FyKCk7XG4gICAgeWllbGQqIG91dDtcbiAgfVxufVxuXG5leHBvcnRzLlRyZWV3YWxrQ2FySm9pbmVyID0gVHJlZXdhbGtDYXJKb2luZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjYXIgPSByZXF1aXJlKCdAaXBsZC9jYXInKTtcbnZhciBibG9jayA9IHJlcXVpcmUoJ211bHRpZm9ybWF0cy9ibG9jaycpO1xudmFyIHJhdyA9IHJlcXVpcmUoJ211bHRpZm9ybWF0cy9jb2RlY3MvcmF3Jyk7XG52YXIgZGFnQ2JvciA9IHJlcXVpcmUoJ0BpcGxkL2RhZy1jYm9yJyk7XG52YXIgcGIgPSByZXF1aXJlKCdAaXBsZC9kYWctcGInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BOYW1lc3BhY2UoZSkge1xuICBpZiAoZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICB2YXIgbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChlKSB7XG4gICAgT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgaWYgKGsgIT09ICdkZWZhdWx0Jykge1xuICAgICAgICB2YXIgZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgayk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBrLCBkLmdldCA/IGQgOiB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBlW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgblsnZGVmYXVsdCddID0gZTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobik7XG59XG5cbnZhciByYXdfX25hbWVzcGFjZSA9IC8qI19fUFVSRV9fKi9faW50ZXJvcE5hbWVzcGFjZShyYXcpO1xudmFyIGRhZ0Nib3JfX25hbWVzcGFjZSA9IC8qI19fUFVSRV9fKi9faW50ZXJvcE5hbWVzcGFjZShkYWdDYm9yKTtcbnZhciBwYl9fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKHBiKTtcblxuY2xhc3MgVHJlZXdhbGtDYXJTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHJlYWRlciwgdGFyZ2V0U2l6ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRTaXplICE9PSAnbnVtYmVyJyB8fCB0YXJnZXRTaXplIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0YXJnZXQgY2h1bmsgc2l6ZScpO1xuICAgIH1cbiAgICB0aGlzLl9yZWFkZXIgPSByZWFkZXI7XG4gICAgdGhpcy5fdGFyZ2V0U2l6ZSA9IHRhcmdldFNpemU7XG4gICAgdGhpcy5fZGVjb2RlcnMgPSBbXG4gICAgICBwYl9fbmFtZXNwYWNlLFxuICAgICAgcmF3X19uYW1lc3BhY2UsXG4gICAgICBkYWdDYm9yX19uYW1lc3BhY2UsXG4gICAgICAuLi5vcHRpb25zLmRlY29kZXJzIHx8IFtdXG4gICAgXTtcbiAgfVxuICBhc3luYyAqY2FycygpIHtcbiAgICBjb25zdCByb290cyA9IGF3YWl0IHRoaXMuX3JlYWRlci5nZXRSb290cygpO1xuICAgIGlmIChyb290cy5sZW5ndGggIT09IDEpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgbnVtYmVyIG9mIHJvb3RzOiAkeyByb290cy5sZW5ndGggfWApO1xuICAgIGxldCBjaGFubmVsO1xuICAgIGZvciBhd2FpdCAoY29uc3QgdmFsIG9mIHRoaXMuX2NhcnMocm9vdHNbMF0pKSB7XG4gICAgICBjaGFubmVsID0gdmFsLmNoYW5uZWw7XG4gICAgICBpZiAodmFsLm91dClcbiAgICAgICAgeWllbGQgdmFsLm91dDtcbiAgICB9XG4gICAgaWYgKCFjaGFubmVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgQ0FSIHdyaXRlciBjaGFubmVsJyk7XG4gICAgfVxuICAgIGNoYW5uZWwud3JpdGVyLmNsb3NlKCk7XG4gICAgeWllbGQgY2hhbm5lbC5vdXQ7XG4gIH1cbiAgYXN5bmMgX2dldChjaWQpIHtcbiAgICBjb25zdCByYXdCbG9jayA9IGF3YWl0IHRoaXMuX3JlYWRlci5nZXQoY2lkKTtcbiAgICBpZiAoIXJhd0Jsb2NrKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtaXNzaW5nIGJsb2NrIGZvciAkeyBjaWQgfWApO1xuICAgIGNvbnN0IHtieXRlc30gPSByYXdCbG9jaztcbiAgICBjb25zdCBkZWNvZGVyID0gdGhpcy5fZGVjb2RlcnMuZmluZChkID0+IGQuY29kZSA9PT0gY2lkLmNvZGUpO1xuICAgIGlmICghZGVjb2RlcilcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWlzc2luZyBkZWNvZGVyIGZvciAkeyBjaWQuY29kZSB9YCk7XG4gICAgcmV0dXJuIG5ldyBibG9jay5CbG9jayh7XG4gICAgICBjaWQsXG4gICAgICBieXRlcyxcbiAgICAgIHZhbHVlOiBkZWNvZGVyLmRlY29kZShieXRlcylcbiAgICB9KTtcbiAgfVxuICBhc3luYyAqX2NhcnMoY2lkLCBwYXJlbnRzID0gW10sIGNoYW5uZWwgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBibG9jayA9IGF3YWl0IHRoaXMuX2dldChjaWQpO1xuICAgIGNoYW5uZWwgPSBjaGFubmVsIHx8IE9iamVjdC5hc3NpZ24oY2FyLkNhcldyaXRlci5jcmVhdGUoY2lkKSwgeyBzaXplOiAwIH0pO1xuICAgIGlmIChjaGFubmVsLnNpemUgPiAwICYmIGNoYW5uZWwuc2l6ZSArIGJsb2NrLmJ5dGVzLmJ5dGVMZW5ndGggPj0gdGhpcy5fdGFyZ2V0U2l6ZSkge1xuICAgICAgY2hhbm5lbC53cml0ZXIuY2xvc2UoKTtcbiAgICAgIGNvbnN0IHtvdXR9ID0gY2hhbm5lbDtcbiAgICAgIGNoYW5uZWwgPSBuZXdDYXIocGFyZW50cyk7XG4gICAgICB5aWVsZCB7XG4gICAgICAgIGNoYW5uZWwsXG4gICAgICAgIG91dFxuICAgICAgfTtcbiAgICB9XG4gICAgcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KGJsb2NrKTtcbiAgICBjaGFubmVsLnNpemUgKz0gYmxvY2suYnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICBjaGFubmVsLndyaXRlci5wdXQoYmxvY2spO1xuICAgIGZvciAoY29uc3QgWywgY2lkXSBvZiBibG9jay5saW5rcygpKSB7XG4gICAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbCBvZiB0aGlzLl9jYXJzKGNpZCwgcGFyZW50cywgY2hhbm5lbCkpIHtcbiAgICAgICAgY2hhbm5lbCA9IHZhbC5jaGFubmVsO1xuICAgICAgICB5aWVsZCB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghY2hhbm5lbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIENBUiB3cml0ZXIgY2hhbm5lbCcpO1xuICAgIH1cbiAgICB5aWVsZCB7IGNoYW5uZWwgfTtcbiAgfVxuICBzdGF0aWMgYXN5bmMgZnJvbUl0ZXJhYmxlKGl0ZXJhYmxlLCB0YXJnZXRTaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcmVhZGVyID0gYXdhaXQgY2FyLkNhclJlYWRlci5mcm9tSXRlcmFibGUoaXRlcmFibGUpO1xuICAgIHJldHVybiBuZXcgVHJlZXdhbGtDYXJTcGxpdHRlcihyZWFkZXIsIHRhcmdldFNpemUsIG9wdGlvbnMpO1xuICB9XG4gIHN0YXRpYyBhc3luYyBmcm9tQmxvYihibG9iLCB0YXJnZXRTaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IHJlYWRlciA9IGF3YWl0IGNhci5DYXJSZWFkZXIuZnJvbUJ5dGVzKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpO1xuICAgIHJldHVybiBuZXcgVHJlZXdhbGtDYXJTcGxpdHRlcihyZWFkZXIsIHRhcmdldFNpemUsIG9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBuZXdDYXIocGFyZW50cykge1xuICBjb25zdCBjaCA9IE9iamVjdC5hc3NpZ24oY2FyLkNhcldyaXRlci5jcmVhdGUocGFyZW50c1swXS5jaWQpLCB7IHNpemU6IHBhcmVudHMucmVkdWNlKChzaXplLCBiKSA9PiBzaXplICsgYi5ieXRlcy5ieXRlTGVuZ3RoLCAwKSB9KTtcbiAgZm9yIChjb25zdCBiIG9mIHBhcmVudHMpIHtcbiAgICBjaC53cml0ZXIucHV0KGIpO1xuICB9XG4gIHJldHVybiBjaDtcbn1cblxuZXhwb3J0cy5UcmVld2Fsa0NhclNwbGl0dGVyID0gVHJlZXdhbGtDYXJTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vbGliL2VuY29kZS5qcycpO1xudmFyIGRlY29kZSA9IHJlcXVpcmUoJy4vbGliL2RlY29kZS5qcycpO1xudmFyIHRva2VuID0gcmVxdWlyZSgnLi9saWIvdG9rZW4uanMnKTtcblxuXG5cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlLmVuY29kZTtcbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlLmRlY29kZTtcbmV4cG9ydHMuVG9rZW4gPSB0b2tlbi5Ub2tlbjtcbmV4cG9ydHMuVHlwZSA9IHRva2VuLlR5cGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0b2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4uanMnKTtcbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbi5qcycpO1xuXG5jb25zdCB1aW50Qm91bmRhcmllcyA9IFtcbiAgMjQsXG4gIDI1NixcbiAgNjU1MzYsXG4gIDQyOTQ5NjcyOTYsXG4gIEJpZ0ludCgnMTg0NDY3NDQwNzM3MDk1NTE2MTYnKVxuXTtcbmZ1bmN0aW9uIHJlYWRVaW50OChkYXRhLCBvZmZzZXQsIG9wdGlvbnMpIHtcbiAgY29tbW9uLmFzc2VydEVub3VnaERhdGEoZGF0YSwgb2Zmc2V0LCAxKTtcbiAgY29uc3QgdmFsdWUgPSBkYXRhW29mZnNldF07XG4gIGlmIChvcHRpb25zLnN0cmljdCA9PT0gdHJ1ZSAmJiB2YWx1ZSA8IHVpbnRCb3VuZGFyaWVzWzBdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gaW50ZWdlciBlbmNvZGVkIGluIG1vcmUgYnl0ZXMgdGhhbiBuZWNlc3NhcnkgKHN0cmljdCBkZWNvZGUpYCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gcmVhZFVpbnQxNihkYXRhLCBvZmZzZXQsIG9wdGlvbnMpIHtcbiAgY29tbW9uLmFzc2VydEVub3VnaERhdGEoZGF0YSwgb2Zmc2V0LCAyKTtcbiAgY29uc3QgdmFsdWUgPSBkYXRhW29mZnNldF0gPDwgOCB8IGRhdGFbb2Zmc2V0ICsgMV07XG4gIGlmIChvcHRpb25zLnN0cmljdCA9PT0gdHJ1ZSAmJiB2YWx1ZSA8IHVpbnRCb3VuZGFyaWVzWzFdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gaW50ZWdlciBlbmNvZGVkIGluIG1vcmUgYnl0ZXMgdGhhbiBuZWNlc3NhcnkgKHN0cmljdCBkZWNvZGUpYCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gcmVhZFVpbnQzMihkYXRhLCBvZmZzZXQsIG9wdGlvbnMpIHtcbiAgY29tbW9uLmFzc2VydEVub3VnaERhdGEoZGF0YSwgb2Zmc2V0LCA0KTtcbiAgY29uc3QgdmFsdWUgPSBkYXRhW29mZnNldF0gKiAxNjc3NzIxNiArIChkYXRhW29mZnNldCArIDFdIDw8IDE2KSArIChkYXRhW29mZnNldCArIDJdIDw8IDgpICsgZGF0YVtvZmZzZXQgKyAzXTtcbiAgaWYgKG9wdGlvbnMuc3RyaWN0ID09PSB0cnVlICYmIHZhbHVlIDwgdWludEJvdW5kYXJpZXNbMl0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBpbnRlZ2VyIGVuY29kZWQgaW4gbW9yZSBieXRlcyB0aGFuIG5lY2Vzc2FyeSAoc3RyaWN0IGRlY29kZSlgKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiByZWFkVWludDY0KGRhdGEsIG9mZnNldCwgb3B0aW9ucykge1xuICBjb21tb24uYXNzZXJ0RW5vdWdoRGF0YShkYXRhLCBvZmZzZXQsIDgpO1xuICBjb25zdCBoaSA9IGRhdGFbb2Zmc2V0XSAqIDE2Nzc3MjE2ICsgKGRhdGFbb2Zmc2V0ICsgMV0gPDwgMTYpICsgKGRhdGFbb2Zmc2V0ICsgMl0gPDwgOCkgKyBkYXRhW29mZnNldCArIDNdO1xuICBjb25zdCBsbyA9IGRhdGFbb2Zmc2V0ICsgNF0gKiAxNjc3NzIxNiArIChkYXRhW29mZnNldCArIDVdIDw8IDE2KSArIChkYXRhW29mZnNldCArIDZdIDw8IDgpICsgZGF0YVtvZmZzZXQgKyA3XTtcbiAgY29uc3QgdmFsdWUgPSAoQmlnSW50KGhpKSA8PCBCaWdJbnQoMzIpKSArIEJpZ0ludChsbyk7XG4gIGlmIChvcHRpb25zLnN0cmljdCA9PT0gdHJ1ZSAmJiB2YWx1ZSA8IHVpbnRCb3VuZGFyaWVzWzNdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gaW50ZWdlciBlbmNvZGVkIGluIG1vcmUgYnl0ZXMgdGhhbiBuZWNlc3NhcnkgKHN0cmljdCBkZWNvZGUpYCk7XG4gIH1cbiAgaWYgKHZhbHVlIDw9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuYWxsb3dCaWdJbnQgPT09IHRydWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gaW50ZWdlcnMgb3V0c2lkZSBvZiB0aGUgc2FmZSBpbnRlZ2VyIHJhbmdlIGFyZSBub3Qgc3VwcG9ydGVkYCk7XG59XG5mdW5jdGlvbiBkZWNvZGVVaW50OChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudWludCwgcmVhZFVpbnQ4KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpLCAyKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVVpbnQxNihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudWludCwgcmVhZFVpbnQxNihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSwgMyk7XG59XG5mdW5jdGlvbiBkZWNvZGVVaW50MzIoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnVpbnQsIHJlYWRVaW50MzIoZGF0YSwgcG9zICsgMSwgb3B0aW9ucyksIDUpO1xufVxuZnVuY3Rpb24gZGVjb2RlVWludDY0KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS51aW50LCByZWFkVWludDY0KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpLCA5KTtcbn1cbmZ1bmN0aW9uIGVuY29kZVVpbnQoYnVmLCB0b2tlbikge1xuICByZXR1cm4gZW5jb2RlVWludFZhbHVlKGJ1ZiwgMCwgdG9rZW4udmFsdWUpO1xufVxuZnVuY3Rpb24gZW5jb2RlVWludFZhbHVlKGJ1ZiwgbWFqb3IsIHVpbnQpIHtcbiAgaWYgKHVpbnQgPCB1aW50Qm91bmRhcmllc1swXSkge1xuICAgIGNvbnN0IG51aW50ID0gTnVtYmVyKHVpbnQpO1xuICAgIGJ1Zi5wdXNoKFttYWpvciB8IG51aW50XSk7XG4gIH0gZWxzZSBpZiAodWludCA8IHVpbnRCb3VuZGFyaWVzWzFdKSB7XG4gICAgY29uc3QgbnVpbnQgPSBOdW1iZXIodWludCk7XG4gICAgYnVmLnB1c2goW1xuICAgICAgbWFqb3IgfCAyNCxcbiAgICAgIG51aW50XG4gICAgXSk7XG4gIH0gZWxzZSBpZiAodWludCA8IHVpbnRCb3VuZGFyaWVzWzJdKSB7XG4gICAgY29uc3QgbnVpbnQgPSBOdW1iZXIodWludCk7XG4gICAgYnVmLnB1c2goW1xuICAgICAgbWFqb3IgfCAyNSxcbiAgICAgIG51aW50ID4+PiA4LFxuICAgICAgbnVpbnQgJiAyNTVcbiAgICBdKTtcbiAgfSBlbHNlIGlmICh1aW50IDwgdWludEJvdW5kYXJpZXNbM10pIHtcbiAgICBjb25zdCBudWludCA9IE51bWJlcih1aW50KTtcbiAgICBidWYucHVzaChbXG4gICAgICBtYWpvciB8IDI2LFxuICAgICAgbnVpbnQgPj4+IDI0ICYgMjU1LFxuICAgICAgbnVpbnQgPj4+IDE2ICYgMjU1LFxuICAgICAgbnVpbnQgPj4+IDggJiAyNTUsXG4gICAgICBudWludCAmIDI1NVxuICAgIF0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJ1aW50ID0gQmlnSW50KHVpbnQpO1xuICAgIGlmIChidWludCA8IHVpbnRCb3VuZGFyaWVzWzRdKSB7XG4gICAgICBjb25zdCBzZXQgPSBbXG4gICAgICAgIG1ham9yIHwgMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDBcbiAgICAgIF07XG4gICAgICBsZXQgbG8gPSBOdW1iZXIoYnVpbnQgJiBCaWdJbnQoNDI5NDk2NzI5NSkpO1xuICAgICAgbGV0IGhpID0gTnVtYmVyKGJ1aW50ID4+IEJpZ0ludCgzMikgJiBCaWdJbnQoNDI5NDk2NzI5NSkpO1xuICAgICAgc2V0WzhdID0gbG8gJiAyNTU7XG4gICAgICBsbyA9IGxvID4+IDg7XG4gICAgICBzZXRbN10gPSBsbyAmIDI1NTtcbiAgICAgIGxvID0gbG8gPj4gODtcbiAgICAgIHNldFs2XSA9IGxvICYgMjU1O1xuICAgICAgbG8gPSBsbyA+PiA4O1xuICAgICAgc2V0WzVdID0gbG8gJiAyNTU7XG4gICAgICBzZXRbNF0gPSBoaSAmIDI1NTtcbiAgICAgIGhpID0gaGkgPj4gODtcbiAgICAgIHNldFszXSA9IGhpICYgMjU1O1xuICAgICAgaGkgPSBoaSA+PiA4O1xuICAgICAgc2V0WzJdID0gaGkgJiAyNTU7XG4gICAgICBoaSA9IGhpID4+IDg7XG4gICAgICBzZXRbMV0gPSBoaSAmIDI1NTtcbiAgICAgIGJ1Zi5wdXNoKHNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IGVuY291bnRlcmVkIEJpZ0ludCBsYXJnZXIgdGhhbiBhbGxvd2FibGUgcmFuZ2VgKTtcbiAgICB9XG4gIH1cbn1cbmVuY29kZVVpbnQuZW5jb2RlZFNpemUgPSBmdW5jdGlvbiBlbmNvZGVkU2l6ZSh0b2tlbikge1xuICByZXR1cm4gZW5jb2RlVWludFZhbHVlLmVuY29kZWRTaXplKHRva2VuLnZhbHVlKTtcbn07XG5lbmNvZGVVaW50VmFsdWUuZW5jb2RlZFNpemUgPSBmdW5jdGlvbiBlbmNvZGVkU2l6ZSh1aW50KSB7XG4gIGlmICh1aW50IDwgdWludEJvdW5kYXJpZXNbMF0pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAodWludCA8IHVpbnRCb3VuZGFyaWVzWzFdKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cbiAgaWYgKHVpbnQgPCB1aW50Qm91bmRhcmllc1syXSkge1xuICAgIHJldHVybiAzO1xuICB9XG4gIGlmICh1aW50IDwgdWludEJvdW5kYXJpZXNbM10pIHtcbiAgICByZXR1cm4gNTtcbiAgfVxuICByZXR1cm4gOTtcbn07XG5lbmNvZGVVaW50LmNvbXBhcmVUb2tlbnMgPSBmdW5jdGlvbiBjb21wYXJlVG9rZW5zKHRvazEsIHRvazIpIHtcbiAgcmV0dXJuIHRvazEudmFsdWUgPCB0b2syLnZhbHVlID8gLTEgOiB0b2sxLnZhbHVlID4gdG9rMi52YWx1ZSA/IDEgOiAwO1xufTtcblxuZXhwb3J0cy5kZWNvZGVVaW50MTYgPSBkZWNvZGVVaW50MTY7XG5leHBvcnRzLmRlY29kZVVpbnQzMiA9IGRlY29kZVVpbnQzMjtcbmV4cG9ydHMuZGVjb2RlVWludDY0ID0gZGVjb2RlVWludDY0O1xuZXhwb3J0cy5kZWNvZGVVaW50OCA9IGRlY29kZVVpbnQ4O1xuZXhwb3J0cy5lbmNvZGVVaW50ID0gZW5jb2RlVWludDtcbmV4cG9ydHMuZW5jb2RlVWludFZhbHVlID0gZW5jb2RlVWludFZhbHVlO1xuZXhwb3J0cy5yZWFkVWludDE2ID0gcmVhZFVpbnQxNjtcbmV4cG9ydHMucmVhZFVpbnQzMiA9IHJlYWRVaW50MzI7XG5leHBvcnRzLnJlYWRVaW50NjQgPSByZWFkVWludDY0O1xuZXhwb3J0cy5yZWFkVWludDggPSByZWFkVWludDg7XG5leHBvcnRzLnVpbnRCb3VuZGFyaWVzID0gdWludEJvdW5kYXJpZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0b2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4uanMnKTtcbnZhciBfMHVpbnQgPSByZXF1aXJlKCcuLzB1aW50LmpzJyk7XG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9jb21tb24uanMnKTtcblxuZnVuY3Rpb24gZGVjb2RlTmVnaW50OChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubmVnaW50LCAtMSAtIF8wdWludC5yZWFkVWludDgoZGF0YSwgcG9zICsgMSwgb3B0aW9ucyksIDIpO1xufVxuZnVuY3Rpb24gZGVjb2RlTmVnaW50MTYoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLm5lZ2ludCwgLTEgLSBfMHVpbnQucmVhZFVpbnQxNihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSwgMyk7XG59XG5mdW5jdGlvbiBkZWNvZGVOZWdpbnQzMihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubmVnaW50LCAtMSAtIF8wdWludC5yZWFkVWludDMyKGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpLCA1KTtcbn1cbmNvbnN0IG5lZzFiID0gQmlnSW50KC0xKTtcbmNvbnN0IHBvczFiID0gQmlnSW50KDEpO1xuZnVuY3Rpb24gZGVjb2RlTmVnaW50NjQoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgY29uc3QgaW50ID0gXzB1aW50LnJlYWRVaW50NjQoZGF0YSwgcG9zICsgMSwgb3B0aW9ucyk7XG4gIGlmICh0eXBlb2YgaW50ICE9PSAnYmlnaW50Jykge1xuICAgIGNvbnN0IHZhbHVlID0gLTEgLSBpbnQ7XG4gICAgaWYgKHZhbHVlID49IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSKSB7XG4gICAgICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubmVnaW50LCB2YWx1ZSwgOSk7XG4gICAgfVxuICB9XG4gIGlmIChvcHRpb25zLmFsbG93QmlnSW50ICE9PSB0cnVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gaW50ZWdlcnMgb3V0c2lkZSBvZiB0aGUgc2FmZSBpbnRlZ2VyIHJhbmdlIGFyZSBub3Qgc3VwcG9ydGVkYCk7XG4gIH1cbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLm5lZ2ludCwgbmVnMWIgLSBCaWdJbnQoaW50KSwgOSk7XG59XG5mdW5jdGlvbiBlbmNvZGVOZWdpbnQoYnVmLCB0b2tlbikge1xuICBjb25zdCBuZWdpbnQgPSB0b2tlbi52YWx1ZTtcbiAgY29uc3QgdW5zaWduZWQgPSB0eXBlb2YgbmVnaW50ID09PSAnYmlnaW50JyA/IG5lZ2ludCAqIG5lZzFiIC0gcG9zMWIgOiBuZWdpbnQgKiAtMSAtIDE7XG4gIF8wdWludC5lbmNvZGVVaW50VmFsdWUoYnVmLCB0b2tlbi50eXBlLm1ham9yRW5jb2RlZCwgdW5zaWduZWQpO1xufVxuZW5jb2RlTmVnaW50LmVuY29kZWRTaXplID0gZnVuY3Rpb24gZW5jb2RlZFNpemUodG9rZW4pIHtcbiAgY29uc3QgbmVnaW50ID0gdG9rZW4udmFsdWU7XG4gIGNvbnN0IHVuc2lnbmVkID0gdHlwZW9mIG5lZ2ludCA9PT0gJ2JpZ2ludCcgPyBuZWdpbnQgKiBuZWcxYiAtIHBvczFiIDogbmVnaW50ICogLTEgLSAxO1xuICBpZiAodW5zaWduZWQgPCBfMHVpbnQudWludEJvdW5kYXJpZXNbMF0pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAodW5zaWduZWQgPCBfMHVpbnQudWludEJvdW5kYXJpZXNbMV0pIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuICBpZiAodW5zaWduZWQgPCBfMHVpbnQudWludEJvdW5kYXJpZXNbMl0pIHtcbiAgICByZXR1cm4gMztcbiAgfVxuICBpZiAodW5zaWduZWQgPCBfMHVpbnQudWludEJvdW5kYXJpZXNbM10pIHtcbiAgICByZXR1cm4gNTtcbiAgfVxuICByZXR1cm4gOTtcbn07XG5lbmNvZGVOZWdpbnQuY29tcGFyZVRva2VucyA9IGZ1bmN0aW9uIGNvbXBhcmVUb2tlbnModG9rMSwgdG9rMikge1xuICByZXR1cm4gdG9rMS52YWx1ZSA8IHRvazIudmFsdWUgPyAxIDogdG9rMS52YWx1ZSA+IHRvazIudmFsdWUgPyAtMSA6IDA7XG59O1xuXG5leHBvcnRzLmRlY29kZU5lZ2ludDE2ID0gZGVjb2RlTmVnaW50MTY7XG5leHBvcnRzLmRlY29kZU5lZ2ludDMyID0gZGVjb2RlTmVnaW50MzI7XG5leHBvcnRzLmRlY29kZU5lZ2ludDY0ID0gZGVjb2RlTmVnaW50NjQ7XG5leHBvcnRzLmRlY29kZU5lZ2ludDggPSBkZWNvZGVOZWdpbnQ4O1xuZXhwb3J0cy5lbmNvZGVOZWdpbnQgPSBlbmNvZGVOZWdpbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0b2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4uanMnKTtcbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbi5qcycpO1xudmFyIF8wdWludCA9IHJlcXVpcmUoJy4vMHVpbnQuanMnKTtcbnZhciBieXRlVXRpbHMgPSByZXF1aXJlKCcuL2J5dGUtdXRpbHMuanMnKTtcblxuZnVuY3Rpb24gdG9Ub2tlbihkYXRhLCBwb3MsIHByZWZpeCwgbGVuZ3RoKSB7XG4gIGNvbW1vbi5hc3NlcnRFbm91Z2hEYXRhKGRhdGEsIHBvcywgcHJlZml4ICsgbGVuZ3RoKTtcbiAgY29uc3QgYnVmID0gYnl0ZVV0aWxzLnNsaWNlKGRhdGEsIHBvcyArIHByZWZpeCwgcG9zICsgcHJlZml4ICsgbGVuZ3RoKTtcbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmJ5dGVzLCBidWYsIHByZWZpeCArIGxlbmd0aCk7XG59XG5mdW5jdGlvbiBkZWNvZGVCeXRlc0NvbXBhY3QoZGF0YSwgcG9zLCBtaW5vciwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCAxLCBtaW5vcik7XG59XG5mdW5jdGlvbiBkZWNvZGVCeXRlczgoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCAyLCBfMHVpbnQucmVhZFVpbnQ4KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGRlY29kZUJ5dGVzMTYoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCAzLCBfMHVpbnQucmVhZFVpbnQxNihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSk7XG59XG5mdW5jdGlvbiBkZWNvZGVCeXRlczMyKGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgNSwgXzB1aW50LnJlYWRVaW50MzIoZGF0YSwgcG9zICsgMSwgb3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZGVjb2RlQnl0ZXM2NChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICBjb25zdCBsID0gXzB1aW50LnJlYWRVaW50NjQoZGF0YSwgcG9zICsgMSwgb3B0aW9ucyk7XG4gIGlmICh0eXBlb2YgbCA9PT0gJ2JpZ2ludCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSA2NC1iaXQgaW50ZWdlciBieXRlcyBsZW5ndGhzIG5vdCBzdXBwb3J0ZWRgKTtcbiAgfVxuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDksIGwpO1xufVxuZnVuY3Rpb24gdG9rZW5CeXRlcyh0b2tlbiQxKSB7XG4gIGlmICh0b2tlbiQxLmVuY29kZWRCeXRlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdG9rZW4kMS5lbmNvZGVkQnl0ZXMgPSB0b2tlbiQxLnR5cGUgPT09IHRva2VuLlR5cGUuc3RyaW5nID8gYnl0ZVV0aWxzLmZyb21TdHJpbmcodG9rZW4kMS52YWx1ZSkgOiB0b2tlbiQxLnZhbHVlO1xuICB9XG4gIHJldHVybiB0b2tlbiQxLmVuY29kZWRCeXRlcztcbn1cbmZ1bmN0aW9uIGVuY29kZUJ5dGVzKGJ1ZiwgdG9rZW4pIHtcbiAgY29uc3QgYnl0ZXMgPSB0b2tlbkJ5dGVzKHRva2VuKTtcbiAgXzB1aW50LmVuY29kZVVpbnRWYWx1ZShidWYsIHRva2VuLnR5cGUubWFqb3JFbmNvZGVkLCBieXRlcy5sZW5ndGgpO1xuICBidWYucHVzaChieXRlcyk7XG59XG5lbmNvZGVCeXRlcy5lbmNvZGVkU2l6ZSA9IGZ1bmN0aW9uIGVuY29kZWRTaXplKHRva2VuKSB7XG4gIGNvbnN0IGJ5dGVzID0gdG9rZW5CeXRlcyh0b2tlbik7XG4gIHJldHVybiBfMHVpbnQuZW5jb2RlVWludFZhbHVlLmVuY29kZWRTaXplKGJ5dGVzLmxlbmd0aCkgKyBieXRlcy5sZW5ndGg7XG59O1xuZW5jb2RlQnl0ZXMuY29tcGFyZVRva2VucyA9IGZ1bmN0aW9uIGNvbXBhcmVUb2tlbnModG9rMSwgdG9rMikge1xuICByZXR1cm4gY29tcGFyZUJ5dGVzKHRva2VuQnl0ZXModG9rMSksIHRva2VuQnl0ZXModG9rMikpO1xufTtcbmZ1bmN0aW9uIGNvbXBhcmVCeXRlcyhiMSwgYjIpIHtcbiAgcmV0dXJuIGIxLmxlbmd0aCA8IGIyLmxlbmd0aCA/IC0xIDogYjEubGVuZ3RoID4gYjIubGVuZ3RoID8gMSA6IGJ5dGVVdGlscy5jb21wYXJlKGIxLCBiMik7XG59XG5cbmV4cG9ydHMuY29tcGFyZUJ5dGVzID0gY29tcGFyZUJ5dGVzO1xuZXhwb3J0cy5kZWNvZGVCeXRlczE2ID0gZGVjb2RlQnl0ZXMxNjtcbmV4cG9ydHMuZGVjb2RlQnl0ZXMzMiA9IGRlY29kZUJ5dGVzMzI7XG5leHBvcnRzLmRlY29kZUJ5dGVzNjQgPSBkZWNvZGVCeXRlczY0O1xuZXhwb3J0cy5kZWNvZGVCeXRlczggPSBkZWNvZGVCeXRlczg7XG5leHBvcnRzLmRlY29kZUJ5dGVzQ29tcGFjdCA9IGRlY29kZUJ5dGVzQ29tcGFjdDtcbmV4cG9ydHMuZW5jb2RlQnl0ZXMgPSBlbmNvZGVCeXRlcztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRva2VuID0gcmVxdWlyZSgnLi90b2tlbi5qcycpO1xudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tbW9uLmpzJyk7XG52YXIgXzB1aW50ID0gcmVxdWlyZSgnLi8wdWludC5qcycpO1xudmFyIF8yYnl0ZXMgPSByZXF1aXJlKCcuLzJieXRlcy5qcycpO1xudmFyIGJ5dGVVdGlscyA9IHJlcXVpcmUoJy4vYnl0ZS11dGlscy5qcycpO1xuXG5mdW5jdGlvbiB0b1Rva2VuKGRhdGEsIHBvcywgcHJlZml4LCBsZW5ndGgpIHtcbiAgY29uc3QgdG90TGVuZ3RoID0gcHJlZml4ICsgbGVuZ3RoO1xuICBjb21tb24uYXNzZXJ0RW5vdWdoRGF0YShkYXRhLCBwb3MsIHRvdExlbmd0aCk7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5zdHJpbmcsIGJ5dGVVdGlscy50b1N0cmluZyhkYXRhLCBwb3MgKyBwcmVmaXgsIHBvcyArIHRvdExlbmd0aCksIHRvdExlbmd0aCk7XG59XG5mdW5jdGlvbiBkZWNvZGVTdHJpbmdDb21wYWN0KGRhdGEsIHBvcywgbWlub3IsIF9vcHRpb25zKSB7XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgMSwgbWlub3IpO1xufVxuZnVuY3Rpb24gZGVjb2RlU3RyaW5nOChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDIsIF8wdWludC5yZWFkVWludDgoZGF0YSwgcG9zICsgMSwgb3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZGVjb2RlU3RyaW5nMTYoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCAzLCBfMHVpbnQucmVhZFVpbnQxNihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSk7XG59XG5mdW5jdGlvbiBkZWNvZGVTdHJpbmczMihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDUsIF8wdWludC5yZWFkVWludDMyKGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVN0cmluZzY0KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIGNvbnN0IGwgPSBfMHVpbnQucmVhZFVpbnQ2NChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKTtcbiAgaWYgKHR5cGVvZiBsID09PSAnYmlnaW50Jykge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IDY0LWJpdCBpbnRlZ2VyIHN0cmluZyBsZW5ndGhzIG5vdCBzdXBwb3J0ZWRgKTtcbiAgfVxuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDksIGwpO1xufVxuY29uc3QgZW5jb2RlU3RyaW5nID0gXzJieXRlcy5lbmNvZGVCeXRlcztcblxuZXhwb3J0cy5kZWNvZGVTdHJpbmcxNiA9IGRlY29kZVN0cmluZzE2O1xuZXhwb3J0cy5kZWNvZGVTdHJpbmczMiA9IGRlY29kZVN0cmluZzMyO1xuZXhwb3J0cy5kZWNvZGVTdHJpbmc2NCA9IGRlY29kZVN0cmluZzY0O1xuZXhwb3J0cy5kZWNvZGVTdHJpbmc4ID0gZGVjb2RlU3RyaW5nODtcbmV4cG9ydHMuZGVjb2RlU3RyaW5nQ29tcGFjdCA9IGRlY29kZVN0cmluZ0NvbXBhY3Q7XG5leHBvcnRzLmVuY29kZVN0cmluZyA9IGVuY29kZVN0cmluZztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRva2VuID0gcmVxdWlyZSgnLi90b2tlbi5qcycpO1xudmFyIF8wdWludCA9IHJlcXVpcmUoJy4vMHVpbnQuanMnKTtcbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbi5qcycpO1xuXG5mdW5jdGlvbiB0b1Rva2VuKF9kYXRhLCBfcG9zLCBwcmVmaXgsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYXJyYXksIGxlbmd0aCwgcHJlZml4KTtcbn1cbmZ1bmN0aW9uIGRlY29kZUFycmF5Q29tcGFjdChkYXRhLCBwb3MsIG1pbm9yLCBfb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDEsIG1pbm9yKTtcbn1cbmZ1bmN0aW9uIGRlY29kZUFycmF5OChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDIsIF8wdWludC5yZWFkVWludDgoZGF0YSwgcG9zICsgMSwgb3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZGVjb2RlQXJyYXkxNihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDMsIF8wdWludC5yZWFkVWludDE2KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGRlY29kZUFycmF5MzIoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCA1LCBfMHVpbnQucmVhZFVpbnQzMihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSk7XG59XG5mdW5jdGlvbiBkZWNvZGVBcnJheTY0KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIGNvbnN0IGwgPSBfMHVpbnQucmVhZFVpbnQ2NChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKTtcbiAgaWYgKHR5cGVvZiBsID09PSAnYmlnaW50Jykge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IDY0LWJpdCBpbnRlZ2VyIGFycmF5IGxlbmd0aHMgbm90IHN1cHBvcnRlZGApO1xuICB9XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgOSwgbCk7XG59XG5mdW5jdGlvbiBkZWNvZGVBcnJheUluZGVmaW5pdGUoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuYWxsb3dJbmRlZmluaXRlID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IGluZGVmaW5pdGUgbGVuZ3RoIGl0ZW1zIG5vdCBhbGxvd2VkYCk7XG4gIH1cbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCAxLCBJbmZpbml0eSk7XG59XG5mdW5jdGlvbiBlbmNvZGVBcnJheShidWYsIHRva2VuJDEpIHtcbiAgXzB1aW50LmVuY29kZVVpbnRWYWx1ZShidWYsIHRva2VuLlR5cGUuYXJyYXkubWFqb3JFbmNvZGVkLCB0b2tlbiQxLnZhbHVlKTtcbn1cbmVuY29kZUFycmF5LmNvbXBhcmVUb2tlbnMgPSBfMHVpbnQuZW5jb2RlVWludC5jb21wYXJlVG9rZW5zO1xuXG5leHBvcnRzLmRlY29kZUFycmF5MTYgPSBkZWNvZGVBcnJheTE2O1xuZXhwb3J0cy5kZWNvZGVBcnJheTMyID0gZGVjb2RlQXJyYXkzMjtcbmV4cG9ydHMuZGVjb2RlQXJyYXk2NCA9IGRlY29kZUFycmF5NjQ7XG5leHBvcnRzLmRlY29kZUFycmF5OCA9IGRlY29kZUFycmF5ODtcbmV4cG9ydHMuZGVjb2RlQXJyYXlDb21wYWN0ID0gZGVjb2RlQXJyYXlDb21wYWN0O1xuZXhwb3J0cy5kZWNvZGVBcnJheUluZGVmaW5pdGUgPSBkZWNvZGVBcnJheUluZGVmaW5pdGU7XG5leHBvcnRzLmVuY29kZUFycmF5ID0gZW5jb2RlQXJyYXk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0b2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4uanMnKTtcbnZhciBfMHVpbnQgPSByZXF1aXJlKCcuLzB1aW50LmpzJyk7XG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9jb21tb24uanMnKTtcblxuZnVuY3Rpb24gdG9Ub2tlbihfZGF0YSwgX3BvcywgcHJlZml4LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLm1hcCwgbGVuZ3RoLCBwcmVmaXgpO1xufVxuZnVuY3Rpb24gZGVjb2RlTWFwQ29tcGFjdChkYXRhLCBwb3MsIG1pbm9yLCBfb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDEsIG1pbm9yKTtcbn1cbmZ1bmN0aW9uIGRlY29kZU1hcDgoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCAyLCBfMHVpbnQucmVhZFVpbnQ4KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGRlY29kZU1hcDE2KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgMywgXzB1aW50LnJlYWRVaW50MTYoZGF0YSwgcG9zICsgMSwgb3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZGVjb2RlTWFwMzIoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCA1LCBfMHVpbnQucmVhZFVpbnQzMihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSk7XG59XG5mdW5jdGlvbiBkZWNvZGVNYXA2NChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICBjb25zdCBsID0gXzB1aW50LnJlYWRVaW50NjQoZGF0YSwgcG9zICsgMSwgb3B0aW9ucyk7XG4gIGlmICh0eXBlb2YgbCA9PT0gJ2JpZ2ludCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSA2NC1iaXQgaW50ZWdlciBtYXAgbGVuZ3RocyBub3Qgc3VwcG9ydGVkYCk7XG4gIH1cbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCA5LCBsKTtcbn1cbmZ1bmN0aW9uIGRlY29kZU1hcEluZGVmaW5pdGUoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuYWxsb3dJbmRlZmluaXRlID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IGluZGVmaW5pdGUgbGVuZ3RoIGl0ZW1zIG5vdCBhbGxvd2VkYCk7XG4gIH1cbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCAxLCBJbmZpbml0eSk7XG59XG5mdW5jdGlvbiBlbmNvZGVNYXAoYnVmLCB0b2tlbiQxKSB7XG4gIF8wdWludC5lbmNvZGVVaW50VmFsdWUoYnVmLCB0b2tlbi5UeXBlLm1hcC5tYWpvckVuY29kZWQsIHRva2VuJDEudmFsdWUpO1xufVxuZW5jb2RlTWFwLmNvbXBhcmVUb2tlbnMgPSBfMHVpbnQuZW5jb2RlVWludC5jb21wYXJlVG9rZW5zO1xuXG5leHBvcnRzLmRlY29kZU1hcDE2ID0gZGVjb2RlTWFwMTY7XG5leHBvcnRzLmRlY29kZU1hcDMyID0gZGVjb2RlTWFwMzI7XG5leHBvcnRzLmRlY29kZU1hcDY0ID0gZGVjb2RlTWFwNjQ7XG5leHBvcnRzLmRlY29kZU1hcDggPSBkZWNvZGVNYXA4O1xuZXhwb3J0cy5kZWNvZGVNYXBDb21wYWN0ID0gZGVjb2RlTWFwQ29tcGFjdDtcbmV4cG9ydHMuZGVjb2RlTWFwSW5kZWZpbml0ZSA9IGRlY29kZU1hcEluZGVmaW5pdGU7XG5leHBvcnRzLmVuY29kZU1hcCA9IGVuY29kZU1hcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRva2VuID0gcmVxdWlyZSgnLi90b2tlbi5qcycpO1xudmFyIF8wdWludCA9IHJlcXVpcmUoJy4vMHVpbnQuanMnKTtcblxuZnVuY3Rpb24gZGVjb2RlVGFnQ29tcGFjdChfZGF0YSwgX3BvcywgbWlub3IsIF9vcHRpb25zKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS50YWcsIG1pbm9yLCAxKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVRhZzgoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnRhZywgXzB1aW50LnJlYWRVaW50OChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSwgMik7XG59XG5mdW5jdGlvbiBkZWNvZGVUYWcxNihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudGFnLCBfMHVpbnQucmVhZFVpbnQxNihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSwgMyk7XG59XG5mdW5jdGlvbiBkZWNvZGVUYWczMihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudGFnLCBfMHVpbnQucmVhZFVpbnQzMihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSwgNSk7XG59XG5mdW5jdGlvbiBkZWNvZGVUYWc2NChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudGFnLCBfMHVpbnQucmVhZFVpbnQ2NChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSwgOSk7XG59XG5mdW5jdGlvbiBlbmNvZGVUYWcoYnVmLCB0b2tlbiQxKSB7XG4gIF8wdWludC5lbmNvZGVVaW50VmFsdWUoYnVmLCB0b2tlbi5UeXBlLnRhZy5tYWpvckVuY29kZWQsIHRva2VuJDEudmFsdWUpO1xufVxuZW5jb2RlVGFnLmNvbXBhcmVUb2tlbnMgPSBfMHVpbnQuZW5jb2RlVWludC5jb21wYXJlVG9rZW5zO1xuXG5leHBvcnRzLmRlY29kZVRhZzE2ID0gZGVjb2RlVGFnMTY7XG5leHBvcnRzLmRlY29kZVRhZzMyID0gZGVjb2RlVGFnMzI7XG5leHBvcnRzLmRlY29kZVRhZzY0ID0gZGVjb2RlVGFnNjQ7XG5leHBvcnRzLmRlY29kZVRhZzggPSBkZWNvZGVUYWc4O1xuZXhwb3J0cy5kZWNvZGVUYWdDb21wYWN0ID0gZGVjb2RlVGFnQ29tcGFjdDtcbmV4cG9ydHMuZW5jb2RlVGFnID0gZW5jb2RlVGFnO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuLmpzJyk7XG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9jb21tb24uanMnKTtcbnZhciBfMHVpbnQgPSByZXF1aXJlKCcuLzB1aW50LmpzJyk7XG5cbmNvbnN0IE1JTk9SX0ZBTFNFID0gMjA7XG5jb25zdCBNSU5PUl9UUlVFID0gMjE7XG5jb25zdCBNSU5PUl9OVUxMID0gMjI7XG5jb25zdCBNSU5PUl9VTkRFRklORUQgPSAyMztcbmZ1bmN0aW9uIGRlY29kZVVuZGVmaW5lZChfZGF0YSwgX3BvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmFsbG93VW5kZWZpbmVkID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IHVuZGVmaW5lZCB2YWx1ZXMgYXJlIG5vdCBzdXBwb3J0ZWRgKTtcbiAgfVxuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudW5kZWZpbmVkLCB1bmRlZmluZWQsIDEpO1xufVxuZnVuY3Rpb24gZGVjb2RlQnJlYWsoX2RhdGEsIF9wb3MsIF9taW5vciwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5hbGxvd0luZGVmaW5pdGUgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gaW5kZWZpbml0ZSBsZW5ndGggaXRlbXMgbm90IGFsbG93ZWRgKTtcbiAgfVxuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYnJlYWssIHVuZGVmaW5lZCwgMSk7XG59XG5mdW5jdGlvbiBjcmVhdGVUb2tlbih2YWx1ZSwgYnl0ZXMsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5hbGxvd05hTiA9PT0gZmFsc2UgJiYgTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gTmFOIHZhbHVlcyBhcmUgbm90IHN1cHBvcnRlZGApO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5hbGxvd0luZmluaXR5ID09PSBmYWxzZSAmJiAodmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBJbmZpbml0eSB2YWx1ZXMgYXJlIG5vdCBzdXBwb3J0ZWRgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmZsb2F0LCB2YWx1ZSwgYnl0ZXMpO1xufVxuZnVuY3Rpb24gZGVjb2RlRmxvYXQxNihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gY3JlYXRlVG9rZW4ocmVhZEZsb2F0MTYoZGF0YSwgcG9zICsgMSksIDMsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZGVjb2RlRmxvYXQzMihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gY3JlYXRlVG9rZW4ocmVhZEZsb2F0MzIoZGF0YSwgcG9zICsgMSksIDUsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZGVjb2RlRmxvYXQ2NChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gY3JlYXRlVG9rZW4ocmVhZEZsb2F0NjQoZGF0YSwgcG9zICsgMSksIDksIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZW5jb2RlRmxvYXQoYnVmLCB0b2tlbiQxLCBvcHRpb25zKSB7XG4gIGNvbnN0IGZsb2F0ID0gdG9rZW4kMS52YWx1ZTtcbiAgaWYgKGZsb2F0ID09PSBmYWxzZSkge1xuICAgIGJ1Zi5wdXNoKFt0b2tlbi5UeXBlLmZsb2F0Lm1ham9yRW5jb2RlZCB8IE1JTk9SX0ZBTFNFXSk7XG4gIH0gZWxzZSBpZiAoZmxvYXQgPT09IHRydWUpIHtcbiAgICBidWYucHVzaChbdG9rZW4uVHlwZS5mbG9hdC5tYWpvckVuY29kZWQgfCBNSU5PUl9UUlVFXSk7XG4gIH0gZWxzZSBpZiAoZmxvYXQgPT09IG51bGwpIHtcbiAgICBidWYucHVzaChbdG9rZW4uVHlwZS5mbG9hdC5tYWpvckVuY29kZWQgfCBNSU5PUl9OVUxMXSk7XG4gIH0gZWxzZSBpZiAoZmxvYXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1Zi5wdXNoKFt0b2tlbi5UeXBlLmZsb2F0Lm1ham9yRW5jb2RlZCB8IE1JTk9SX1VOREVGSU5FRF0pO1xuICB9IGVsc2Uge1xuICAgIGxldCBkZWNvZGVkO1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgaWYgKCFvcHRpb25zIHx8IG9wdGlvbnMuZmxvYXQ2NCAhPT0gdHJ1ZSkge1xuICAgICAgZW5jb2RlRmxvYXQxNihmbG9hdCk7XG4gICAgICBkZWNvZGVkID0gcmVhZEZsb2F0MTYodWk4YSwgMSk7XG4gICAgICBpZiAoZmxvYXQgPT09IGRlY29kZWQgfHwgTnVtYmVyLmlzTmFOKGZsb2F0KSkge1xuICAgICAgICB1aThhWzBdID0gMjQ5O1xuICAgICAgICBidWYucHVzaCh1aThhLnNsaWNlKDAsIDMpKTtcbiAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmNvZGVGbG9hdDMyKGZsb2F0KTtcbiAgICAgICAgZGVjb2RlZCA9IHJlYWRGbG9hdDMyKHVpOGEsIDEpO1xuICAgICAgICBpZiAoZmxvYXQgPT09IGRlY29kZWQpIHtcbiAgICAgICAgICB1aThhWzBdID0gMjUwO1xuICAgICAgICAgIGJ1Zi5wdXNoKHVpOGEuc2xpY2UoMCwgNSkpO1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgZW5jb2RlRmxvYXQ2NChmbG9hdCk7XG4gICAgICBkZWNvZGVkID0gcmVhZEZsb2F0NjQodWk4YSwgMSk7XG4gICAgICB1aThhWzBdID0gMjUxO1xuICAgICAgYnVmLnB1c2godWk4YS5zbGljZSgwLCA5KSk7XG4gICAgfVxuICB9XG59XG5lbmNvZGVGbG9hdC5lbmNvZGVkU2l6ZSA9IGZ1bmN0aW9uIGVuY29kZWRTaXplKHRva2VuLCBvcHRpb25zKSB7XG4gIGNvbnN0IGZsb2F0ID0gdG9rZW4udmFsdWU7XG4gIGlmIChmbG9hdCA9PT0gZmFsc2UgfHwgZmxvYXQgPT09IHRydWUgfHwgZmxvYXQgPT09IG51bGwgfHwgZmxvYXQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGxldCBkZWNvZGVkO1xuICBpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucy5mbG9hdDY0ICE9PSB0cnVlKSB7XG4gICAgZW5jb2RlRmxvYXQxNihmbG9hdCk7XG4gICAgZGVjb2RlZCA9IHJlYWRGbG9hdDE2KHVpOGEsIDEpO1xuICAgIGlmIChmbG9hdCA9PT0gZGVjb2RlZCB8fCBOdW1iZXIuaXNOYU4oZmxvYXQpKSB7XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gICAgZW5jb2RlRmxvYXQzMihmbG9hdCk7XG4gICAgZGVjb2RlZCA9IHJlYWRGbG9hdDMyKHVpOGEsIDEpO1xuICAgIGlmIChmbG9hdCA9PT0gZGVjb2RlZCkge1xuICAgICAgcmV0dXJuIDU7XG4gICAgfVxuICB9XG4gIHJldHVybiA5O1xufTtcbmNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig5KTtcbmNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgMSk7XG5jb25zdCB1aThhID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCAwKTtcbmZ1bmN0aW9uIGVuY29kZUZsb2F0MTYoaW5wKSB7XG4gIGlmIChpbnAgPT09IEluZmluaXR5KSB7XG4gICAgZGF0YVZpZXcuc2V0VWludDE2KDAsIDMxNzQ0LCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoaW5wID09PSAtSW5maW5pdHkpIHtcbiAgICBkYXRhVmlldy5zZXRVaW50MTYoMCwgNjQ1MTIsIGZhbHNlKTtcbiAgfSBlbHNlIGlmIChOdW1iZXIuaXNOYU4oaW5wKSkge1xuICAgIGRhdGFWaWV3LnNldFVpbnQxNigwLCAzMjI1NiwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGRhdGFWaWV3LnNldEZsb2F0MzIoMCwgaW5wKTtcbiAgICBjb25zdCB2YWx1MzIgPSBkYXRhVmlldy5nZXRVaW50MzIoMCk7XG4gICAgY29uc3QgZXhwb25lbnQgPSAodmFsdTMyICYgMjEzOTA5NTA0MCkgPj4gMjM7XG4gICAgY29uc3QgbWFudGlzc2EgPSB2YWx1MzIgJiA4Mzg4NjA3O1xuICAgIGlmIChleHBvbmVudCA9PT0gMjU1KSB7XG4gICAgICBkYXRhVmlldy5zZXRVaW50MTYoMCwgMzE3NDQsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKGV4cG9uZW50ID09PSAwKSB7XG4gICAgICBkYXRhVmlldy5zZXRVaW50MTYoMCwgKGlucCAmIDIxNDc0ODM2NDgpID4+IDE2IHwgbWFudGlzc2EgPj4gMTMsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG9naWNhbEV4cG9uZW50ID0gZXhwb25lbnQgLSAxMjc7XG4gICAgICBpZiAobG9naWNhbEV4cG9uZW50IDwgLTI0KSB7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNigwLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAobG9naWNhbEV4cG9uZW50IDwgLTE0KSB7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNigwLCAodmFsdTMyICYgMjE0NzQ4MzY0OCkgPj4gMTYgfCAxIDw8IDI0ICsgbG9naWNhbEV4cG9uZW50LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhVmlldy5zZXRVaW50MTYoMCwgKHZhbHUzMiAmIDIxNDc0ODM2NDgpID4+IDE2IHwgbG9naWNhbEV4cG9uZW50ICsgMTUgPDwgMTAgfCBtYW50aXNzYSA+PiAxMywgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcmVhZEZsb2F0MTYodWk4YSwgcG9zKSB7XG4gIGlmICh1aThhLmxlbmd0aCAtIHBvcyA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBub3QgZW5vdWdoIGRhdGEgZm9yIGZsb2F0MTZgKTtcbiAgfVxuICBjb25zdCBoYWxmID0gKHVpOGFbcG9zXSA8PCA4KSArIHVpOGFbcG9zICsgMV07XG4gIGlmIChoYWxmID09PSAzMTc0NCkge1xuICAgIHJldHVybiBJbmZpbml0eTtcbiAgfVxuICBpZiAoaGFsZiA9PT0gNjQ1MTIpIHtcbiAgICByZXR1cm4gLUluZmluaXR5O1xuICB9XG4gIGlmIChoYWxmID09PSAzMjI1Nikge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgY29uc3QgZXhwID0gaGFsZiA+PiAxMCAmIDMxO1xuICBjb25zdCBtYW50ID0gaGFsZiAmIDEwMjM7XG4gIGxldCB2YWw7XG4gIGlmIChleHAgPT09IDApIHtcbiAgICB2YWwgPSBtYW50ICogMiAqKiAtMjQ7XG4gIH0gZWxzZSBpZiAoZXhwICE9PSAzMSkge1xuICAgIHZhbCA9IChtYW50ICsgMTAyNCkgKiAyICoqIChleHAgLSAyNSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsID0gbWFudCA9PT0gMCA/IEluZmluaXR5IDogTmFOO1xuICB9XG4gIHJldHVybiBoYWxmICYgMzI3NjggPyAtdmFsIDogdmFsO1xufVxuZnVuY3Rpb24gZW5jb2RlRmxvYXQzMihpbnApIHtcbiAgZGF0YVZpZXcuc2V0RmxvYXQzMigwLCBpbnAsIGZhbHNlKTtcbn1cbmZ1bmN0aW9uIHJlYWRGbG9hdDMyKHVpOGEsIHBvcykge1xuICBpZiAodWk4YS5sZW5ndGggLSBwb3MgPCA0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gbm90IGVub3VnaCBkYXRhIGZvciBmbG9hdDMyYCk7XG4gIH1cbiAgY29uc3Qgb2Zmc2V0ID0gKHVpOGEuYnl0ZU9mZnNldCB8fCAwKSArIHBvcztcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyh1aThhLmJ1ZmZlciwgb2Zmc2V0LCA0KS5nZXRGbG9hdDMyKDAsIGZhbHNlKTtcbn1cbmZ1bmN0aW9uIGVuY29kZUZsb2F0NjQoaW5wKSB7XG4gIGRhdGFWaWV3LnNldEZsb2F0NjQoMCwgaW5wLCBmYWxzZSk7XG59XG5mdW5jdGlvbiByZWFkRmxvYXQ2NCh1aThhLCBwb3MpIHtcbiAgaWYgKHVpOGEubGVuZ3RoIC0gcG9zIDwgOCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IG5vdCBlbm91Z2ggZGF0YSBmb3IgZmxvYXQ2NGApO1xuICB9XG4gIGNvbnN0IG9mZnNldCA9ICh1aThhLmJ5dGVPZmZzZXQgfHwgMCkgKyBwb3M7XG4gIHJldHVybiBuZXcgRGF0YVZpZXcodWk4YS5idWZmZXIsIG9mZnNldCwgOCkuZ2V0RmxvYXQ2NCgwLCBmYWxzZSk7XG59XG5lbmNvZGVGbG9hdC5jb21wYXJlVG9rZW5zID0gXzB1aW50LmVuY29kZVVpbnQuY29tcGFyZVRva2VucztcblxuZXhwb3J0cy5kZWNvZGVCcmVhayA9IGRlY29kZUJyZWFrO1xuZXhwb3J0cy5kZWNvZGVGbG9hdDE2ID0gZGVjb2RlRmxvYXQxNjtcbmV4cG9ydHMuZGVjb2RlRmxvYXQzMiA9IGRlY29kZUZsb2F0MzI7XG5leHBvcnRzLmRlY29kZUZsb2F0NjQgPSBkZWNvZGVGbG9hdDY0O1xuZXhwb3J0cy5kZWNvZGVVbmRlZmluZWQgPSBkZWNvZGVVbmRlZmluZWQ7XG5leHBvcnRzLmVuY29kZUZsb2F0ID0gZW5jb2RlRmxvYXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBieXRlVXRpbHMgPSByZXF1aXJlKCcuL2J5dGUtdXRpbHMuanMnKTtcblxuY29uc3QgZGVmYXVsdENodW5rU2l6ZSA9IDI1NjtcbmNsYXNzIEJsIHtcbiAgY29uc3RydWN0b3IoY2h1bmtTaXplID0gZGVmYXVsdENodW5rU2l6ZSkge1xuICAgIHRoaXMuY2h1bmtTaXplID0gY2h1bmtTaXplO1xuICAgIHRoaXMuY3Vyc29yID0gMDtcbiAgICB0aGlzLm1heEN1cnNvciA9IC0xO1xuICAgIHRoaXMuY2h1bmtzID0gW107XG4gICAgdGhpcy5faW5pdFJldXNlQ2h1bmsgPSBudWxsO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMuY2h1bmtzID0gW107XG4gICAgdGhpcy5jdXJzb3IgPSAwO1xuICAgIHRoaXMubWF4Q3Vyc29yID0gLTE7XG4gICAgaWYgKHRoaXMuX2luaXRSZXVzZUNodW5rICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNodW5rcy5wdXNoKHRoaXMuX2luaXRSZXVzZUNodW5rKTtcbiAgICAgIHRoaXMubWF4Q3Vyc29yID0gdGhpcy5faW5pdFJldXNlQ2h1bmsubGVuZ3RoIC0gMTtcbiAgICB9XG4gIH1cbiAgcHVzaChieXRlcykge1xuICAgIGxldCB0b3BDaHVuayA9IHRoaXMuY2h1bmtzW3RoaXMuY2h1bmtzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG5ld01heCA9IHRoaXMuY3Vyc29yICsgYnl0ZXMubGVuZ3RoO1xuICAgIGlmIChuZXdNYXggPD0gdGhpcy5tYXhDdXJzb3IgKyAxKSB7XG4gICAgICBjb25zdCBjaHVua1BvcyA9IHRvcENodW5rLmxlbmd0aCAtICh0aGlzLm1heEN1cnNvciAtIHRoaXMuY3Vyc29yKSAtIDE7XG4gICAgICB0b3BDaHVuay5zZXQoYnl0ZXMsIGNodW5rUG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRvcENodW5rKSB7XG4gICAgICAgIGNvbnN0IGNodW5rUG9zID0gdG9wQ2h1bmsubGVuZ3RoIC0gKHRoaXMubWF4Q3Vyc29yIC0gdGhpcy5jdXJzb3IpIC0gMTtcbiAgICAgICAgaWYgKGNodW5rUG9zIDwgdG9wQ2h1bmsubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jaHVua3NbdGhpcy5jaHVua3MubGVuZ3RoIC0gMV0gPSB0b3BDaHVuay5zdWJhcnJheSgwLCBjaHVua1Bvcyk7XG4gICAgICAgICAgdGhpcy5tYXhDdXJzb3IgPSB0aGlzLmN1cnNvciAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChieXRlcy5sZW5ndGggPCA2NCAmJiBieXRlcy5sZW5ndGggPCB0aGlzLmNodW5rU2l6ZSkge1xuICAgICAgICB0b3BDaHVuayA9IGJ5dGVVdGlscy5hbGxvYyh0aGlzLmNodW5rU2l6ZSk7XG4gICAgICAgIHRoaXMuY2h1bmtzLnB1c2godG9wQ2h1bmspO1xuICAgICAgICB0aGlzLm1heEN1cnNvciArPSB0b3BDaHVuay5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLl9pbml0UmV1c2VDaHVuayA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX2luaXRSZXVzZUNodW5rID0gdG9wQ2h1bms7XG4gICAgICAgIH1cbiAgICAgICAgdG9wQ2h1bmsuc2V0KGJ5dGVzLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2h1bmtzLnB1c2goYnl0ZXMpO1xuICAgICAgICB0aGlzLm1heEN1cnNvciArPSBieXRlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3Vyc29yICs9IGJ5dGVzLmxlbmd0aDtcbiAgfVxuICB0b0J5dGVzKHJlc2V0ID0gZmFsc2UpIHtcbiAgICBsZXQgYnl0cztcbiAgICBpZiAodGhpcy5jaHVua3MubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjaHVuayA9IHRoaXMuY2h1bmtzWzBdO1xuICAgICAgaWYgKHJlc2V0ICYmIHRoaXMuY3Vyc29yID4gY2h1bmsubGVuZ3RoIC8gMikge1xuICAgICAgICBieXRzID0gdGhpcy5jdXJzb3IgPT09IGNodW5rLmxlbmd0aCA/IGNodW5rIDogY2h1bmsuc3ViYXJyYXkoMCwgdGhpcy5jdXJzb3IpO1xuICAgICAgICB0aGlzLl9pbml0UmV1c2VDaHVuayA9IG51bGw7XG4gICAgICAgIHRoaXMuY2h1bmtzID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBieXRzID0gYnl0ZVV0aWxzLnNsaWNlKGNodW5rLCAwLCB0aGlzLmN1cnNvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ5dHMgPSBieXRlVXRpbHMuY29uY2F0KHRoaXMuY2h1bmtzLCB0aGlzLmN1cnNvcik7XG4gICAgfVxuICAgIGlmIChyZXNldCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICByZXR1cm4gYnl0cztcbiAgfVxufVxuXG5leHBvcnRzLkJsID0gQmw7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNvbnN0IHVzZUJ1ZmZlciA9IGdsb2JhbFRoaXMucHJvY2VzcyAmJiAhZ2xvYmFsVGhpcy5wcm9jZXNzLmJyb3dzZXIgJiYgZ2xvYmFsVGhpcy5CdWZmZXIgJiYgdHlwZW9mIGdsb2JhbFRoaXMuQnVmZmVyLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nO1xuY29uc3QgdGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbmNvbnN0IHRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5mdW5jdGlvbiBpc0J1ZmZlcihidWYpIHtcbiAgcmV0dXJuIHVzZUJ1ZmZlciAmJiBnbG9iYWxUaGlzLkJ1ZmZlci5pc0J1ZmZlcihidWYpO1xufVxuZnVuY3Rpb24gYXNVOEEoYnVmKSB7XG4gIGlmICghKGJ1ZiBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShidWYpO1xuICB9XG4gIHJldHVybiBpc0J1ZmZlcihidWYpID8gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlTGVuZ3RoKSA6IGJ1Zjtcbn1cbmNvbnN0IHRvU3RyaW5nID0gdXNlQnVmZmVyID8gKGJ5dGVzLCBzdGFydCwgZW5kKSA9PiB7XG4gIHJldHVybiBlbmQgLSBzdGFydCA+IDY0ID8gZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbShieXRlcy5zdWJhcnJheShzdGFydCwgZW5kKSkudG9TdHJpbmcoJ3V0ZjgnKSA6IHV0ZjhTbGljZShieXRlcywgc3RhcnQsIGVuZCk7XG59IDogKGJ5dGVzLCBzdGFydCwgZW5kKSA9PiB7XG4gIHJldHVybiBlbmQgLSBzdGFydCA+IDY0ID8gdGV4dERlY29kZXIuZGVjb2RlKGJ5dGVzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKSA6IHV0ZjhTbGljZShieXRlcywgc3RhcnQsIGVuZCk7XG59O1xuY29uc3QgZnJvbVN0cmluZyA9IHVzZUJ1ZmZlciA/IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHJpbmcubGVuZ3RoID4gNjQgPyBnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tKHN0cmluZykgOiB1dGY4VG9CeXRlcyhzdHJpbmcpO1xufSA6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdHJpbmcubGVuZ3RoID4gNjQgPyB0ZXh0RW5jb2Rlci5lbmNvZGUoc3RyaW5nKSA6IHV0ZjhUb0J5dGVzKHN0cmluZyk7XG59O1xuY29uc3QgZnJvbUFycmF5ID0gYXJyID0+IHtcbiAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShhcnIpO1xufTtcbmNvbnN0IHNsaWNlID0gdXNlQnVmZmVyID8gKGJ5dGVzLCBzdGFydCwgZW5kKSA9PiB7XG4gIGlmIChpc0J1ZmZlcihieXRlcykpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpO1xuICB9XG4gIHJldHVybiBieXRlcy5zbGljZShzdGFydCwgZW5kKTtcbn0gOiAoYnl0ZXMsIHN0YXJ0LCBlbmQpID0+IHtcbiAgcmV0dXJuIGJ5dGVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xufTtcbmNvbnN0IGNvbmNhdCA9IHVzZUJ1ZmZlciA/IChjaHVua3MsIGxlbmd0aCkgPT4ge1xuICBjaHVua3MgPSBjaHVua3MubWFwKGMgPT4gYyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBjIDogZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbShjKSk7XG4gIHJldHVybiBhc1U4QShnbG9iYWxUaGlzLkJ1ZmZlci5jb25jYXQoY2h1bmtzLCBsZW5ndGgpKTtcbn0gOiAoY2h1bmtzLCBsZW5ndGgpID0+IHtcbiAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgbGV0IG9mZiA9IDA7XG4gIGZvciAobGV0IGIgb2YgY2h1bmtzKSB7XG4gICAgaWYgKG9mZiArIGIubGVuZ3RoID4gb3V0Lmxlbmd0aCkge1xuICAgICAgYiA9IGIuc3ViYXJyYXkoMCwgb3V0Lmxlbmd0aCAtIG9mZik7XG4gICAgfVxuICAgIG91dC5zZXQoYiwgb2ZmKTtcbiAgICBvZmYgKz0gYi5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5jb25zdCBhbGxvYyA9IHVzZUJ1ZmZlciA/IHNpemUgPT4ge1xuICByZXR1cm4gZ2xvYmFsVGhpcy5CdWZmZXIuYWxsb2NVbnNhZmUoc2l6ZSk7XG59IDogc2l6ZSA9PiB7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShzaXplKTtcbn07XG5jb25zdCB0b0hleCA9IHVzZUJ1ZmZlciA/IGQgPT4ge1xuICBpZiAodHlwZW9mIGQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGQ7XG4gIH1cbiAgcmV0dXJuIGdsb2JhbFRoaXMuQnVmZmVyLmZyb20odG9CeXRlcyhkKSkudG9TdHJpbmcoJ2hleCcpO1xufSA6IGQgPT4ge1xuICBpZiAodHlwZW9mIGQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGQ7XG4gIH1cbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbCh0b0J5dGVzKGQpLCAocCwgYykgPT4gYCR7IHAgfSR7IGMudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykgfWAsICcnKTtcbn07XG5jb25zdCBmcm9tSGV4ID0gdXNlQnVmZmVyID8gaGV4ID0+IHtcbiAgaWYgKGhleCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gaGV4O1xuICB9XG4gIHJldHVybiBnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tKGhleCwgJ2hleCcpO1xufSA6IGhleCA9PiB7XG4gIGlmIChoZXggaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIGhleDtcbiAgfVxuICBpZiAoIWhleC5sZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCk7XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGhleC5zcGxpdCgnJykubWFwKChjLCBpLCBkKSA9PiBpICUgMiA9PT0gMCA/IGAweCR7IGMgfSR7IGRbaSArIDFdIH1gIDogJycpLmZpbHRlcihCb29sZWFuKS5tYXAoZSA9PiBwYXJzZUludChlLCAxNikpKTtcbn07XG5mdW5jdGlvbiB0b0J5dGVzKG9iaikge1xuICBpZiAob2JqIGluc3RhbmNlb2YgVWludDhBcnJheSAmJiBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gJ1VpbnQ4QXJyYXknKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkob2JqKTtcbiAgfVxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KG9iaikpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkob2JqLmJ1ZmZlciwgb2JqLmJ5dGVPZmZzZXQsIG9iai5ieXRlTGVuZ3RoKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdHlwZSwgbXVzdCBiZSBiaW5hcnkgdHlwZScpO1xufVxuZnVuY3Rpb24gY29tcGFyZShiMSwgYjIpIHtcbiAgaWYgKGlzQnVmZmVyKGIxKSAmJiBpc0J1ZmZlcihiMikpIHtcbiAgICByZXR1cm4gYjEuY29tcGFyZShiMik7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiMS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChiMVtpXSA9PT0gYjJbaV0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXR1cm4gYjFbaV0gPCBiMltpXSA/IC0xIDogMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzKHN0cmluZywgdW5pdHMgPSBJbmZpbml0eSkge1xuICBsZXQgY29kZVBvaW50O1xuICBjb25zdCBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICBsZXQgbGVhZFN1cnJvZ2F0ZSA9IG51bGw7XG4gIGNvbnN0IGJ5dGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZVBvaW50ID4gNTUyOTUgJiYgY29kZVBvaW50IDwgNTczNDQpIHtcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICBpZiAoY29kZVBvaW50ID4gNTYzMTkpIHtcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpXG4gICAgICAgICAgICBieXRlcy5wdXNoKDIzOSwgMTkxLCAxODkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpXG4gICAgICAgICAgICBieXRlcy5wdXNoKDIzOSwgMTkxLCAxODkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnQ7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNvZGVQb2ludCA8IDU2MzIwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSlcbiAgICAgICAgICBieXRlcy5wdXNoKDIzOSwgMTkxLCAxODkpO1xuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50O1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gNTUyOTYgPDwgMTAgfCBjb2RlUG9pbnQgLSA1NjMyMCkgKyA2NTUzNjtcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSlcbiAgICAgICAgYnl0ZXMucHVzaCgyMzksIDE5MSwgMTg5KTtcbiAgICB9XG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGw7XG4gICAgaWYgKGNvZGVQb2ludCA8IDEyOCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApXG4gICAgICAgIGJyZWFrO1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMjA0OCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApXG4gICAgICAgIGJyZWFrO1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQgPj4gNiB8IDE5MiwgY29kZVBvaW50ICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgNjU1MzYpIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKVxuICAgICAgICBicmVhaztcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50ID4+IDEyIHwgMjI0LCBjb2RlUG9pbnQgPj4gNiAmIDYzIHwgMTI4LCBjb2RlUG9pbnQgJiA2MyB8IDEyOCk7XG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAxMTE0MTEyKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMClcbiAgICAgICAgYnJlYWs7XG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludCA+PiAxOCB8IDI0MCwgY29kZVBvaW50ID4+IDEyICYgNjMgfCAxMjgsIGNvZGVQb2ludCA+PiA2ICYgNjMgfCAxMjgsIGNvZGVQb2ludCAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVzO1xufVxuZnVuY3Rpb24gdXRmOFNsaWNlKGJ1Ziwgb2Zmc2V0LCBlbmQpIHtcbiAgY29uc3QgcmVzID0gW107XG4gIHdoaWxlIChvZmZzZXQgPCBlbmQpIHtcbiAgICBjb25zdCBmaXJzdEJ5dGUgPSBidWZbb2Zmc2V0XTtcbiAgICBsZXQgY29kZVBvaW50ID0gbnVsbDtcbiAgICBsZXQgYnl0ZXNQZXJTZXF1ZW5jZSA9IGZpcnN0Qnl0ZSA+IDIzOSA/IDQgOiBmaXJzdEJ5dGUgPiAyMjMgPyAzIDogZmlyc3RCeXRlID4gMTkxID8gMiA6IDE7XG4gICAgaWYgKG9mZnNldCArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICBsZXQgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50O1xuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmIChmaXJzdEJ5dGUgPCAxMjgpIHtcbiAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHNlY29uZEJ5dGUgPSBidWZbb2Zmc2V0ICsgMV07XG4gICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDE5MikgPT09IDEyOCkge1xuICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMzEpIDw8IDYgfCBzZWNvbmRCeXRlICYgNjM7XG4gICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAxMjcpIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBzZWNvbmRCeXRlID0gYnVmW29mZnNldCArIDFdO1xuICAgICAgICB0aGlyZEJ5dGUgPSBidWZbb2Zmc2V0ICsgMl07XG4gICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDE5MikgPT09IDEyOCAmJiAodGhpcmRCeXRlICYgMTkyKSA9PT0gMTI4KSB7XG4gICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAxNSkgPDwgMTIgfCAoc2Vjb25kQnl0ZSAmIDYzKSA8PCA2IHwgdGhpcmRCeXRlICYgNjM7XG4gICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAyMDQ3ICYmICh0ZW1wQ29kZVBvaW50IDwgNTUyOTYgfHwgdGVtcENvZGVQb2ludCA+IDU3MzQzKSkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHNlY29uZEJ5dGUgPSBidWZbb2Zmc2V0ICsgMV07XG4gICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltvZmZzZXQgKyAyXTtcbiAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltvZmZzZXQgKyAzXTtcbiAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMTkyKSA9PT0gMTI4ICYmICh0aGlyZEJ5dGUgJiAxOTIpID09PSAxMjggJiYgKGZvdXJ0aEJ5dGUgJiAxOTIpID09PSAxMjgpIHtcbiAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDE1KSA8PCAxOCB8IChzZWNvbmRCeXRlICYgNjMpIDw8IDEyIHwgKHRoaXJkQnl0ZSAmIDYzKSA8PCA2IHwgZm91cnRoQnl0ZSAmIDYzO1xuICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gNjU1MzUgJiYgdGVtcENvZGVQb2ludCA8IDExMTQxMTIpIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIGNvZGVQb2ludCA9IDY1NTMzO1xuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDE7XG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiA2NTUzNSkge1xuICAgICAgY29kZVBvaW50IC09IDY1NTM2O1xuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDEwMjMgfCA1NTI5Nik7XG4gICAgICBjb2RlUG9pbnQgPSA1NjMyMCB8IGNvZGVQb2ludCAmIDEwMjM7XG4gICAgfVxuICAgIHJlcy5wdXNoKGNvZGVQb2ludCk7XG4gICAgb2Zmc2V0ICs9IGJ5dGVzUGVyU2VxdWVuY2U7XG4gIH1cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpO1xufVxuY29uc3QgTUFYX0FSR1VNRU5UU19MRU5HVEggPSA0MDk2O1xuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5KGNvZGVQb2ludHMpIHtcbiAgY29uc3QgbGVuID0gY29kZVBvaW50cy5sZW5ndGg7XG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpO1xuICB9XG4gIGxldCByZXMgPSAnJztcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0cy5hbGxvYyA9IGFsbG9jO1xuZXhwb3J0cy5hc1U4QSA9IGFzVThBO1xuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuZXhwb3J0cy5kZWNvZGVDb2RlUG9pbnRzQXJyYXkgPSBkZWNvZGVDb2RlUG9pbnRzQXJyYXk7XG5leHBvcnRzLmZyb21BcnJheSA9IGZyb21BcnJheTtcbmV4cG9ydHMuZnJvbUhleCA9IGZyb21IZXg7XG5leHBvcnRzLmZyb21TdHJpbmcgPSBmcm9tU3RyaW5nO1xuZXhwb3J0cy5zbGljZSA9IHNsaWNlO1xuZXhwb3J0cy50b0hleCA9IHRvSGV4O1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuZXhwb3J0cy51c2VCdWZmZXIgPSB1c2VCdWZmZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNvbnN0IGRlY29kZUVyclByZWZpeCA9ICdDQk9SIGRlY29kZSBlcnJvcjonO1xuY29uc3QgZW5jb2RlRXJyUHJlZml4ID0gJ0NCT1IgZW5jb2RlIGVycm9yOic7XG5jb25zdCB1aW50TWlub3JQcmVmaXhCeXRlcyA9IFtdO1xudWludE1pbm9yUHJlZml4Qnl0ZXNbMjNdID0gMTtcbnVpbnRNaW5vclByZWZpeEJ5dGVzWzI0XSA9IDI7XG51aW50TWlub3JQcmVmaXhCeXRlc1syNV0gPSAzO1xudWludE1pbm9yUHJlZml4Qnl0ZXNbMjZdID0gNTtcbnVpbnRNaW5vclByZWZpeEJ5dGVzWzI3XSA9IDk7XG5mdW5jdGlvbiBhc3NlcnRFbm91Z2hEYXRhKGRhdGEsIHBvcywgbmVlZCkge1xuICBpZiAoZGF0YS5sZW5ndGggLSBwb3MgPCBuZWVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBkZWNvZGVFcnJQcmVmaXggfSBub3QgZW5vdWdoIGRhdGEgZm9yIHR5cGVgKTtcbiAgfVxufVxuXG5leHBvcnRzLmFzc2VydEVub3VnaERhdGEgPSBhc3NlcnRFbm91Z2hEYXRhO1xuZXhwb3J0cy5kZWNvZGVFcnJQcmVmaXggPSBkZWNvZGVFcnJQcmVmaXg7XG5leHBvcnRzLmVuY29kZUVyclByZWZpeCA9IGVuY29kZUVyclByZWZpeDtcbmV4cG9ydHMudWludE1pbm9yUHJlZml4Qnl0ZXMgPSB1aW50TWlub3JQcmVmaXhCeXRlcztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tbW9uLmpzJyk7XG52YXIgdG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuLmpzJyk7XG52YXIganVtcCA9IHJlcXVpcmUoJy4vanVtcC5qcycpO1xuXG5jb25zdCBkZWZhdWx0RGVjb2RlT3B0aW9ucyA9IHtcbiAgc3RyaWN0OiBmYWxzZSxcbiAgYWxsb3dJbmRlZmluaXRlOiB0cnVlLFxuICBhbGxvd1VuZGVmaW5lZDogdHJ1ZSxcbiAgYWxsb3dCaWdJbnQ6IHRydWVcbn07XG5jbGFzcyBUb2tlbmlzZXIge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnBvcyA9IDA7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIGRvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zID49IHRoaXMuZGF0YS5sZW5ndGg7XG4gIH1cbiAgbmV4dCgpIHtcbiAgICBjb25zdCBieXQgPSB0aGlzLmRhdGFbdGhpcy5wb3NdO1xuICAgIGxldCB0b2tlbiA9IGp1bXAucXVpY2tbYnl0XTtcbiAgICBpZiAodG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGVjb2RlciA9IGp1bXAuanVtcFtieXRdO1xuICAgICAgaWYgKCFkZWNvZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IG5vIGRlY29kZXIgZm9yIG1ham9yIHR5cGUgJHsgYnl0ID4+PiA1IH0gKGJ5dGUgMHgkeyBieXQudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykgfSlgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1pbm9yID0gYnl0ICYgMzE7XG4gICAgICB0b2tlbiA9IGRlY29kZXIodGhpcy5kYXRhLCB0aGlzLnBvcywgbWlub3IsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMucG9zICs9IHRva2VuLmVuY29kZWRMZW5ndGg7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG59XG5jb25zdCBET05FID0gU3ltYm9sLmZvcignRE9ORScpO1xuY29uc3QgQlJFQUsgPSBTeW1ib2wuZm9yKCdCUkVBSycpO1xuZnVuY3Rpb24gdG9rZW5Ub0FycmF5KHRva2VuLCB0b2tlbmlzZXIsIG9wdGlvbnMpIHtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW4udmFsdWU7IGkrKykge1xuICAgIGNvbnN0IHZhbHVlID0gdG9rZW5zVG9PYmplY3QodG9rZW5pc2VyLCBvcHRpb25zKTtcbiAgICBpZiAodmFsdWUgPT09IEJSRUFLKSB7XG4gICAgICBpZiAodG9rZW4udmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gZ290IHVuZXhwZWN0ZWQgYnJlYWsgdG8gbGVuZ3RoZWQgYXJyYXlgKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBET05FKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBmb3VuZCBhcnJheSBidXQgbm90IGVub3VnaCBlbnRyaWVzIChnb3QgJHsgaSB9LCBleHBlY3RlZCAkeyB0b2tlbi52YWx1ZSB9KWApO1xuICAgIH1cbiAgICBhcnJbaV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuZnVuY3Rpb24gdG9rZW5Ub01hcCh0b2tlbiwgdG9rZW5pc2VyLCBvcHRpb25zKSB7XG4gIGNvbnN0IHVzZU1hcHMgPSBvcHRpb25zLnVzZU1hcHMgPT09IHRydWU7XG4gIGNvbnN0IG9iaiA9IHVzZU1hcHMgPyB1bmRlZmluZWQgOiB7fTtcbiAgY29uc3QgbSA9IHVzZU1hcHMgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW4udmFsdWU7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IHRva2Vuc1RvT2JqZWN0KHRva2VuaXNlciwgb3B0aW9ucyk7XG4gICAgaWYgKGtleSA9PT0gQlJFQUspIHtcbiAgICAgIGlmICh0b2tlbi52YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBnb3QgdW5leHBlY3RlZCBicmVhayB0byBsZW5ndGhlZCBtYXBgKTtcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gRE9ORSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gZm91bmQgbWFwIGJ1dCBub3QgZW5vdWdoIGVudHJpZXMgKGdvdCAkeyBpIH0gW25vIGtleV0sIGV4cGVjdGVkICR7IHRva2VuLnZhbHVlIH0pYCk7XG4gICAgfVxuICAgIGlmICh1c2VNYXBzICE9PSB0cnVlICYmIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBub24tc3RyaW5nIGtleXMgbm90IHN1cHBvcnRlZCAoZ290ICR7IHR5cGVvZiBrZXkgfSlgKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0b2tlbnNUb09iamVjdCh0b2tlbmlzZXIsIG9wdGlvbnMpO1xuICAgIGlmICh2YWx1ZSA9PT0gRE9ORSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gZm91bmQgbWFwIGJ1dCBub3QgZW5vdWdoIGVudHJpZXMgKGdvdCAkeyBpIH0gW25vIHZhbHVlXSwgZXhwZWN0ZWQgJHsgdG9rZW4udmFsdWUgfSlgKTtcbiAgICB9XG4gICAgaWYgKHVzZU1hcHMpIHtcbiAgICAgIG0uc2V0KGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdXNlTWFwcyA/IG0gOiBvYmo7XG59XG5mdW5jdGlvbiB0b2tlbnNUb09iamVjdCh0b2tlbmlzZXIsIG9wdGlvbnMpIHtcbiAgaWYgKHRva2VuaXNlci5kb25lKCkpIHtcbiAgICByZXR1cm4gRE9ORTtcbiAgfVxuICBjb25zdCB0b2tlbiQxID0gdG9rZW5pc2VyLm5leHQoKTtcbiAgaWYgKHRva2VuJDEudHlwZSA9PT0gdG9rZW4uVHlwZS5icmVhaykge1xuICAgIHJldHVybiBCUkVBSztcbiAgfVxuICBpZiAodG9rZW4kMS50eXBlLnRlcm1pbmFsKSB7XG4gICAgcmV0dXJuIHRva2VuJDEudmFsdWU7XG4gIH1cbiAgaWYgKHRva2VuJDEudHlwZSA9PT0gdG9rZW4uVHlwZS5hcnJheSkge1xuICAgIHJldHVybiB0b2tlblRvQXJyYXkodG9rZW4kMSwgdG9rZW5pc2VyLCBvcHRpb25zKTtcbiAgfVxuICBpZiAodG9rZW4kMS50eXBlID09PSB0b2tlbi5UeXBlLm1hcCkge1xuICAgIHJldHVybiB0b2tlblRvTWFwKHRva2VuJDEsIHRva2VuaXNlciwgb3B0aW9ucyk7XG4gIH1cbiAgaWYgKHRva2VuJDEudHlwZSA9PT0gdG9rZW4uVHlwZS50YWcpIHtcbiAgICBpZiAob3B0aW9ucy50YWdzICYmIHR5cGVvZiBvcHRpb25zLnRhZ3NbdG9rZW4kMS52YWx1ZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHRhZ2dlZCA9IHRva2Vuc1RvT2JqZWN0KHRva2VuaXNlciwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gb3B0aW9ucy50YWdzW3Rva2VuJDEudmFsdWVdKHRhZ2dlZCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IHRhZyBub3Qgc3VwcG9ydGVkICgkeyB0b2tlbiQxLnZhbHVlIH0pYCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCcpO1xufVxuZnVuY3Rpb24gZGVjb2RlKGRhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gZGF0YSB0byBkZWNvZGUgbXVzdCBiZSBhIFVpbnQ4QXJyYXlgKTtcbiAgfVxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdERlY29kZU9wdGlvbnMsIG9wdGlvbnMpO1xuICBjb25zdCB0b2tlbmlzZXIgPSBvcHRpb25zLnRva2VuaXplciB8fCBuZXcgVG9rZW5pc2VyKGRhdGEsIG9wdGlvbnMpO1xuICBjb25zdCBkZWNvZGVkID0gdG9rZW5zVG9PYmplY3QodG9rZW5pc2VyLCBvcHRpb25zKTtcbiAgaWYgKGRlY29kZWQgPT09IERPTkUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBkaWQgbm90IGZpbmQgYW55IGNvbnRlbnQgdG8gZGVjb2RlYCk7XG4gIH1cbiAgaWYgKGRlY29kZWQgPT09IEJSRUFLKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gZ290IHVuZXhwZWN0ZWQgYnJlYWtgKTtcbiAgfVxuICBpZiAoIXRva2VuaXNlci5kb25lKCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSB0b28gbWFueSB0ZXJtaW5hbHMsIGRhdGEgbWFrZXMgbm8gc2Vuc2VgKTtcbiAgfVxuICByZXR1cm4gZGVjb2RlZDtcbn1cblxuZXhwb3J0cy5Ub2tlbmlzZXIgPSBUb2tlbmlzZXI7XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbmV4cG9ydHMudG9rZW5zVG9PYmplY3QgPSB0b2tlbnNUb09iamVjdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGlzID0gcmVxdWlyZSgnLi9pcy5qcycpO1xudmFyIHRva2VuID0gcmVxdWlyZSgnLi90b2tlbi5qcycpO1xudmFyIGJsID0gcmVxdWlyZSgnLi9ibC5qcycpO1xudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tbW9uLmpzJyk7XG52YXIganVtcCA9IHJlcXVpcmUoJy4vanVtcC5qcycpO1xudmFyIGJ5dGVVdGlscyA9IHJlcXVpcmUoJy4vYnl0ZS11dGlscy5qcycpO1xudmFyIF8wdWludCA9IHJlcXVpcmUoJy4vMHVpbnQuanMnKTtcbnZhciBfMW5lZ2ludCA9IHJlcXVpcmUoJy4vMW5lZ2ludC5qcycpO1xudmFyIF8yYnl0ZXMgPSByZXF1aXJlKCcuLzJieXRlcy5qcycpO1xudmFyIF8zc3RyaW5nID0gcmVxdWlyZSgnLi8zc3RyaW5nLmpzJyk7XG52YXIgXzRhcnJheSA9IHJlcXVpcmUoJy4vNGFycmF5LmpzJyk7XG52YXIgXzVtYXAgPSByZXF1aXJlKCcuLzVtYXAuanMnKTtcbnZhciBfNnRhZyA9IHJlcXVpcmUoJy4vNnRhZy5qcycpO1xudmFyIF83ZmxvYXQgPSByZXF1aXJlKCcuLzdmbG9hdC5qcycpO1xuXG5jb25zdCBkZWZhdWx0RW5jb2RlT3B0aW9ucyA9IHtcbiAgZmxvYXQ2NDogZmFsc2UsXG4gIG1hcFNvcnRlcixcbiAgcXVpY2tFbmNvZGVUb2tlbjoganVtcC5xdWlja0VuY29kZVRva2VuXG59O1xuY29uc3QgY2JvckVuY29kZXJzID0gW107XG5jYm9yRW5jb2RlcnNbdG9rZW4uVHlwZS51aW50Lm1ham9yXSA9IF8wdWludC5lbmNvZGVVaW50O1xuY2JvckVuY29kZXJzW3Rva2VuLlR5cGUubmVnaW50Lm1ham9yXSA9IF8xbmVnaW50LmVuY29kZU5lZ2ludDtcbmNib3JFbmNvZGVyc1t0b2tlbi5UeXBlLmJ5dGVzLm1ham9yXSA9IF8yYnl0ZXMuZW5jb2RlQnl0ZXM7XG5jYm9yRW5jb2RlcnNbdG9rZW4uVHlwZS5zdHJpbmcubWFqb3JdID0gXzNzdHJpbmcuZW5jb2RlU3RyaW5nO1xuY2JvckVuY29kZXJzW3Rva2VuLlR5cGUuYXJyYXkubWFqb3JdID0gXzRhcnJheS5lbmNvZGVBcnJheTtcbmNib3JFbmNvZGVyc1t0b2tlbi5UeXBlLm1hcC5tYWpvcl0gPSBfNW1hcC5lbmNvZGVNYXA7XG5jYm9yRW5jb2RlcnNbdG9rZW4uVHlwZS50YWcubWFqb3JdID0gXzZ0YWcuZW5jb2RlVGFnO1xuY2JvckVuY29kZXJzW3Rva2VuLlR5cGUuZmxvYXQubWFqb3JdID0gXzdmbG9hdC5lbmNvZGVGbG9hdDtcbmNvbnN0IGJ1ZiA9IG5ldyBibC5CbCgpO1xuY2xhc3MgUmVmIHtcbiAgY29uc3RydWN0b3Iob2JqLCBwYXJlbnQpIHtcbiAgICB0aGlzLm9iaiA9IG9iajtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuICBpbmNsdWRlcyhvYmopIHtcbiAgICBsZXQgcCA9IHRoaXM7XG4gICAgZG8ge1xuICAgICAgaWYgKHAub2JqID09PSBvYmopIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSB3aGlsZSAocCA9IHAucGFyZW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUNoZWNrKHN0YWNrLCBvYmopIHtcbiAgICBpZiAoc3RhY2sgJiYgc3RhY2suaW5jbHVkZXMob2JqKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZW5jb2RlRXJyUHJlZml4IH0gb2JqZWN0IGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXNgKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWYob2JqLCBzdGFjayk7XG4gIH1cbn1cbmNvbnN0IHNpbXBsZVRva2VucyA9IHtcbiAgbnVsbDogbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubnVsbCwgbnVsbCksXG4gIHVuZGVmaW5lZDogbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudW5kZWZpbmVkLCB1bmRlZmluZWQpLFxuICB0cnVlOiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS50cnVlLCB0cnVlKSxcbiAgZmFsc2U6IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmZhbHNlLCBmYWxzZSksXG4gIGVtcHR5QXJyYXk6IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmFycmF5LCAwKSxcbiAgZW1wdHlNYXA6IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLm1hcCwgMClcbn07XG5jb25zdCB0eXBlRW5jb2RlcnMgPSB7XG4gIG51bWJlcihvYmosIF90eXAsIF9vcHRpb25zLCBfcmVmU3RhY2spIHtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIob2JqKSB8fCAhTnVtYmVyLmlzU2FmZUludGVnZXIob2JqKSkge1xuICAgICAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmZsb2F0LCBvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqID49IDApIHtcbiAgICAgIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS51aW50LCBvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubmVnaW50LCBvYmopO1xuICAgIH1cbiAgfSxcbiAgYmlnaW50KG9iaiwgX3R5cCwgX29wdGlvbnMsIF9yZWZTdGFjaykge1xuICAgIGlmIChvYmogPj0gQmlnSW50KDApKSB7XG4gICAgICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudWludCwgb2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLm5lZ2ludCwgb2JqKTtcbiAgICB9XG4gIH0sXG4gIFVpbnQ4QXJyYXkob2JqLCBfdHlwLCBfb3B0aW9ucywgX3JlZlN0YWNrKSB7XG4gICAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmJ5dGVzLCBvYmopO1xuICB9LFxuICBzdHJpbmcob2JqLCBfdHlwLCBfb3B0aW9ucywgX3JlZlN0YWNrKSB7XG4gICAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnN0cmluZywgb2JqKTtcbiAgfSxcbiAgYm9vbGVhbihvYmosIF90eXAsIF9vcHRpb25zLCBfcmVmU3RhY2spIHtcbiAgICByZXR1cm4gb2JqID8gc2ltcGxlVG9rZW5zLnRydWUgOiBzaW1wbGVUb2tlbnMuZmFsc2U7XG4gIH0sXG4gIG51bGwoX29iaiwgX3R5cCwgX29wdGlvbnMsIF9yZWZTdGFjaykge1xuICAgIHJldHVybiBzaW1wbGVUb2tlbnMubnVsbDtcbiAgfSxcbiAgdW5kZWZpbmVkKF9vYmosIF90eXAsIF9vcHRpb25zLCBfcmVmU3RhY2spIHtcbiAgICByZXR1cm4gc2ltcGxlVG9rZW5zLnVuZGVmaW5lZDtcbiAgfSxcbiAgQXJyYXlCdWZmZXIob2JqLCBfdHlwLCBfb3B0aW9ucywgX3JlZlN0YWNrKSB7XG4gICAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmJ5dGVzLCBuZXcgVWludDhBcnJheShvYmopKTtcbiAgfSxcbiAgRGF0YVZpZXcob2JqLCBfdHlwLCBfb3B0aW9ucywgX3JlZlN0YWNrKSB7XG4gICAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmJ5dGVzLCBuZXcgVWludDhBcnJheShvYmouYnVmZmVyLCBvYmouYnl0ZU9mZnNldCwgb2JqLmJ5dGVMZW5ndGgpKTtcbiAgfSxcbiAgQXJyYXkob2JqLCBfdHlwLCBvcHRpb25zLCByZWZTdGFjaykge1xuICAgIGlmICghb2JqLmxlbmd0aCkge1xuICAgICAgaWYgKG9wdGlvbnMuYWRkQnJlYWtUb2tlbnMgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBzaW1wbGVUb2tlbnMuZW1wdHlBcnJheSxcbiAgICAgICAgICBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5icmVhaylcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaW1wbGVUb2tlbnMuZW1wdHlBcnJheTtcbiAgICB9XG4gICAgcmVmU3RhY2sgPSBSZWYuY3JlYXRlQ2hlY2socmVmU3RhY2ssIG9iaik7XG4gICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqKSB7XG4gICAgICBlbnRyaWVzW2krK10gPSBvYmplY3RUb1Rva2VucyhlLCBvcHRpb25zLCByZWZTdGFjayk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmFkZEJyZWFrVG9rZW5zKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5hcnJheSwgb2JqLmxlbmd0aCksXG4gICAgICAgIGVudHJpZXMsXG4gICAgICAgIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmJyZWFrKVxuICAgICAgXTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmFycmF5LCBvYmoubGVuZ3RoKSxcbiAgICAgIGVudHJpZXNcbiAgICBdO1xuICB9LFxuICBPYmplY3Qob2JqLCB0eXAsIG9wdGlvbnMsIHJlZlN0YWNrKSB7XG4gICAgY29uc3QgaXNNYXAgPSB0eXAgIT09ICdPYmplY3QnO1xuICAgIGNvbnN0IGtleXMgPSBpc01hcCA/IG9iai5rZXlzKCkgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGNvbnN0IGxlbmd0aCA9IGlzTWFwID8gb2JqLnNpemUgOiBrZXlzLmxlbmd0aDtcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgaWYgKG9wdGlvbnMuYWRkQnJlYWtUb2tlbnMgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBzaW1wbGVUb2tlbnMuZW1wdHlNYXAsXG4gICAgICAgICAgbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYnJlYWspXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICByZXR1cm4gc2ltcGxlVG9rZW5zLmVtcHR5TWFwO1xuICAgIH1cbiAgICByZWZTdGFjayA9IFJlZi5jcmVhdGVDaGVjayhyZWZTdGFjaywgb2JqKTtcbiAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIGVudHJpZXNbaSsrXSA9IFtcbiAgICAgICAgb2JqZWN0VG9Ub2tlbnMoa2V5LCBvcHRpb25zLCByZWZTdGFjayksXG4gICAgICAgIG9iamVjdFRvVG9rZW5zKGlzTWFwID8gb2JqLmdldChrZXkpIDogb2JqW2tleV0sIG9wdGlvbnMsIHJlZlN0YWNrKVxuICAgICAgXTtcbiAgICB9XG4gICAgc29ydE1hcEVudHJpZXMoZW50cmllcywgb3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMuYWRkQnJlYWtUb2tlbnMpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLm1hcCwgbGVuZ3RoKSxcbiAgICAgICAgZW50cmllcyxcbiAgICAgICAgbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYnJlYWspXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubWFwLCBsZW5ndGgpLFxuICAgICAgZW50cmllc1xuICAgIF07XG4gIH1cbn07XG50eXBlRW5jb2RlcnMuTWFwID0gdHlwZUVuY29kZXJzLk9iamVjdDtcbnR5cGVFbmNvZGVycy5CdWZmZXIgPSB0eXBlRW5jb2RlcnMuVWludDhBcnJheTtcbmZvciAoY29uc3QgdHlwIG9mICdVaW50OENsYW1wZWQgVWludDE2IFVpbnQzMiBJbnQ4IEludDE2IEludDMyIEJpZ1VpbnQ2NCBCaWdJbnQ2NCBGbG9hdDMyIEZsb2F0NjQnLnNwbGl0KCcgJykpIHtcbiAgdHlwZUVuY29kZXJzW2AkeyB0eXAgfUFycmF5YF0gPSB0eXBlRW5jb2RlcnMuRGF0YVZpZXc7XG59XG5mdW5jdGlvbiBvYmplY3RUb1Rva2VucyhvYmosIG9wdGlvbnMgPSB7fSwgcmVmU3RhY2spIHtcbiAgY29uc3QgdHlwID0gaXMuaXMob2JqKTtcbiAgY29uc3QgY3VzdG9tVHlwZUVuY29kZXIgPSBvcHRpb25zICYmIG9wdGlvbnMudHlwZUVuY29kZXJzICYmIG9wdGlvbnMudHlwZUVuY29kZXJzW3R5cF0gfHwgdHlwZUVuY29kZXJzW3R5cF07XG4gIGlmICh0eXBlb2YgY3VzdG9tVHlwZUVuY29kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBjdXN0b21UeXBlRW5jb2RlcihvYmosIHR5cCwgb3B0aW9ucywgcmVmU3RhY2spO1xuICAgIGlmICh0b2tlbnMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRva2VucztcbiAgICB9XG4gIH1cbiAgY29uc3QgdHlwZUVuY29kZXIgPSB0eXBlRW5jb2RlcnNbdHlwXTtcbiAgaWYgKCF0eXBlRW5jb2Rlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmVuY29kZUVyclByZWZpeCB9IHVuc3VwcG9ydGVkIHR5cGU6ICR7IHR5cCB9YCk7XG4gIH1cbiAgcmV0dXJuIHR5cGVFbmNvZGVyKG9iaiwgdHlwLCBvcHRpb25zLCByZWZTdGFjayk7XG59XG5mdW5jdGlvbiBzb3J0TWFwRW50cmllcyhlbnRyaWVzLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLm1hcFNvcnRlcikge1xuICAgIGVudHJpZXMuc29ydChvcHRpb25zLm1hcFNvcnRlcik7XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcFNvcnRlcihlMSwgZTIpIHtcbiAgY29uc3Qga2V5VG9rZW4xID0gQXJyYXkuaXNBcnJheShlMVswXSkgPyBlMVswXVswXSA6IGUxWzBdO1xuICBjb25zdCBrZXlUb2tlbjIgPSBBcnJheS5pc0FycmF5KGUyWzBdKSA/IGUyWzBdWzBdIDogZTJbMF07XG4gIGlmIChrZXlUb2tlbjEudHlwZSAhPT0ga2V5VG9rZW4yLnR5cGUpIHtcbiAgICByZXR1cm4ga2V5VG9rZW4xLnR5cGUuY29tcGFyZShrZXlUb2tlbjIudHlwZSk7XG4gIH1cbiAgY29uc3QgbWFqb3IgPSBrZXlUb2tlbjEudHlwZS5tYWpvcjtcbiAgY29uc3QgdGNtcCA9IGNib3JFbmNvZGVyc1ttYWpvcl0uY29tcGFyZVRva2VucyhrZXlUb2tlbjEsIGtleVRva2VuMik7XG4gIGlmICh0Y21wID09PSAwKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBjb21wbGV4IGtleSB0eXBlcyB1c2VkLCBDQk9SIGtleSBzb3J0aW5nIGd1YXJhbnRlZXMgYXJlIGdvbmUnKTtcbiAgfVxuICByZXR1cm4gdGNtcDtcbn1cbmZ1bmN0aW9uIHRva2Vuc1RvRW5jb2RlZChidWYsIHRva2VucywgZW5jb2RlcnMsIG9wdGlvbnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodG9rZW5zKSkge1xuICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICB0b2tlbnNUb0VuY29kZWQoYnVmLCB0b2tlbiwgZW5jb2RlcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbmNvZGVyc1t0b2tlbnMudHlwZS5tYWpvcl0oYnVmLCB0b2tlbnMsIG9wdGlvbnMpO1xuICB9XG59XG5mdW5jdGlvbiBlbmNvZGVDdXN0b20oZGF0YSwgZW5jb2RlcnMsIG9wdGlvbnMpIHtcbiAgY29uc3QgdG9rZW5zID0gb2JqZWN0VG9Ub2tlbnMoZGF0YSwgb3B0aW9ucyk7XG4gIGlmICghQXJyYXkuaXNBcnJheSh0b2tlbnMpICYmIG9wdGlvbnMucXVpY2tFbmNvZGVUb2tlbikge1xuICAgIGNvbnN0IHF1aWNrQnl0ZXMgPSBvcHRpb25zLnF1aWNrRW5jb2RlVG9rZW4odG9rZW5zKTtcbiAgICBpZiAocXVpY2tCeXRlcykge1xuICAgICAgcmV0dXJuIHF1aWNrQnl0ZXM7XG4gICAgfVxuICAgIGNvbnN0IGVuY29kZXIgPSBlbmNvZGVyc1t0b2tlbnMudHlwZS5tYWpvcl07XG4gICAgaWYgKGVuY29kZXIuZW5jb2RlZFNpemUpIHtcbiAgICAgIGNvbnN0IHNpemUgPSBlbmNvZGVyLmVuY29kZWRTaXplKHRva2Vucywgb3B0aW9ucyk7XG4gICAgICBjb25zdCBidWYgPSBuZXcgYmwuQmwoc2l6ZSk7XG4gICAgICBlbmNvZGVyKGJ1ZiwgdG9rZW5zLCBvcHRpb25zKTtcbiAgICAgIGlmIChidWYuY2h1bmtzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgZXJyb3I6IHByZS1jYWxjdWxhdGVkIGxlbmd0aCBmb3IgJHsgdG9rZW5zIH0gd2FzIHdyb25nYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZVV0aWxzLmFzVThBKGJ1Zi5jaHVua3NbMF0pO1xuICAgIH1cbiAgfVxuICB0b2tlbnNUb0VuY29kZWQoYnVmLCB0b2tlbnMsIGVuY29kZXJzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGJ1Zi50b0J5dGVzKHRydWUpO1xufVxuZnVuY3Rpb24gZW5jb2RlKGRhdGEsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRFbmNvZGVPcHRpb25zLCBvcHRpb25zKTtcbiAgcmV0dXJuIGVuY29kZUN1c3RvbShkYXRhLCBjYm9yRW5jb2RlcnMsIG9wdGlvbnMpO1xufVxuXG5leHBvcnRzLlJlZiA9IFJlZjtcbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuZXhwb3J0cy5lbmNvZGVDdXN0b20gPSBlbmNvZGVDdXN0b207XG5leHBvcnRzLm9iamVjdFRvVG9rZW5zID0gb2JqZWN0VG9Ub2tlbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNvbnN0IHR5cGVvZnMgPSBbXG4gICdzdHJpbmcnLFxuICAnbnVtYmVyJyxcbiAgJ2JpZ2ludCcsXG4gICdzeW1ib2wnXG5dO1xuY29uc3Qgb2JqZWN0VHlwZU5hbWVzID0gW1xuICAnRnVuY3Rpb24nLFxuICAnR2VuZXJhdG9yJyxcbiAgJ0FzeW5jR2VuZXJhdG9yJyxcbiAgJ0dlbmVyYXRvckZ1bmN0aW9uJyxcbiAgJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nLFxuICAnQXN5bmNGdW5jdGlvbicsXG4gICdPYnNlcnZhYmxlJyxcbiAgJ0FycmF5JyxcbiAgJ0J1ZmZlcicsXG4gICdPYmplY3QnLFxuICAnUmVnRXhwJyxcbiAgJ0RhdGUnLFxuICAnRXJyb3InLFxuICAnTWFwJyxcbiAgJ1NldCcsXG4gICdXZWFrTWFwJyxcbiAgJ1dlYWtTZXQnLFxuICAnQXJyYXlCdWZmZXInLFxuICAnU2hhcmVkQXJyYXlCdWZmZXInLFxuICAnRGF0YVZpZXcnLFxuICAnUHJvbWlzZScsXG4gICdVUkwnLFxuICAnSFRNTEVsZW1lbnQnLFxuICAnSW50OEFycmF5JyxcbiAgJ1VpbnQ4QXJyYXknLFxuICAnVWludDhDbGFtcGVkQXJyYXknLFxuICAnSW50MTZBcnJheScsXG4gICdVaW50MTZBcnJheScsXG4gICdJbnQzMkFycmF5JyxcbiAgJ1VpbnQzMkFycmF5JyxcbiAgJ0Zsb2F0MzJBcnJheScsXG4gICdGbG9hdDY0QXJyYXknLFxuICAnQmlnSW50NjRBcnJheScsXG4gICdCaWdVaW50NjRBcnJheSdcbl07XG5mdW5jdGlvbiBpcyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gJ2Jvb2xlYW4nO1xuICB9XG4gIGNvbnN0IHR5cGVPZiA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGVvZnMuaW5jbHVkZXModHlwZU9mKSkge1xuICAgIHJldHVybiB0eXBlT2Y7XG4gIH1cbiAgaWYgKHR5cGVPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnRnVuY3Rpb24nO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiAnQXJyYXknO1xuICB9XG4gIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ0J1ZmZlcic7XG4gIH1cbiAgY29uc3Qgb2JqZWN0VHlwZSA9IGdldE9iamVjdFR5cGUodmFsdWUpO1xuICBpZiAob2JqZWN0VHlwZSkge1xuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG4gIHJldHVybiAnT2JqZWN0Jztcbn1cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5pc0J1ZmZlciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5pc0J1ZmZlci5jYWxsKG51bGwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldE9iamVjdFR5cGUodmFsdWUpIHtcbiAgY29uc3Qgb2JqZWN0VHlwZU5hbWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG9iamVjdFR5cGVOYW1lcy5pbmNsdWRlcyhvYmplY3RUeXBlTmFtZSkpIHtcbiAgICByZXR1cm4gb2JqZWN0VHlwZU5hbWU7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0cy5pcyA9IGlzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuLmpzJyk7XG52YXIgXzB1aW50ID0gcmVxdWlyZSgnLi8wdWludC5qcycpO1xudmFyIF8xbmVnaW50ID0gcmVxdWlyZSgnLi8xbmVnaW50LmpzJyk7XG52YXIgXzJieXRlcyA9IHJlcXVpcmUoJy4vMmJ5dGVzLmpzJyk7XG52YXIgXzNzdHJpbmcgPSByZXF1aXJlKCcuLzNzdHJpbmcuanMnKTtcbnZhciBfNGFycmF5ID0gcmVxdWlyZSgnLi80YXJyYXkuanMnKTtcbnZhciBfNW1hcCA9IHJlcXVpcmUoJy4vNW1hcC5qcycpO1xudmFyIF82dGFnID0gcmVxdWlyZSgnLi82dGFnLmpzJyk7XG52YXIgXzdmbG9hdCA9IHJlcXVpcmUoJy4vN2Zsb2F0LmpzJyk7XG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9jb21tb24uanMnKTtcbnZhciBieXRlVXRpbHMgPSByZXF1aXJlKCcuL2J5dGUtdXRpbHMuanMnKTtcblxuZnVuY3Rpb24gaW52YWxpZE1pbm9yKGRhdGEsIHBvcywgbWlub3IpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gZW5jb3VudGVyZWQgaW52YWxpZCBtaW5vciAoJHsgbWlub3IgfSkgZm9yIG1ham9yICR7IGRhdGFbcG9zXSA+Pj4gNSB9YCk7XG59XG5mdW5jdGlvbiBlcnJvcmVyKG1zZykge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9ICR7IG1zZyB9YCk7XG4gIH07XG59XG5jb25zdCBqdW1wID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8PSAyMzsgaSsrKSB7XG4gIGp1bXBbaV0gPSBpbnZhbGlkTWlub3I7XG59XG5qdW1wWzI0XSA9IF8wdWludC5kZWNvZGVVaW50ODtcbmp1bXBbMjVdID0gXzB1aW50LmRlY29kZVVpbnQxNjtcbmp1bXBbMjZdID0gXzB1aW50LmRlY29kZVVpbnQzMjtcbmp1bXBbMjddID0gXzB1aW50LmRlY29kZVVpbnQ2NDtcbmp1bXBbMjhdID0gaW52YWxpZE1pbm9yO1xuanVtcFsyOV0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzMwXSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMzFdID0gaW52YWxpZE1pbm9yO1xuZm9yIChsZXQgaSA9IDMyOyBpIDw9IDU1OyBpKyspIHtcbiAganVtcFtpXSA9IGludmFsaWRNaW5vcjtcbn1cbmp1bXBbNTZdID0gXzFuZWdpbnQuZGVjb2RlTmVnaW50ODtcbmp1bXBbNTddID0gXzFuZWdpbnQuZGVjb2RlTmVnaW50MTY7XG5qdW1wWzU4XSA9IF8xbmVnaW50LmRlY29kZU5lZ2ludDMyO1xuanVtcFs1OV0gPSBfMW5lZ2ludC5kZWNvZGVOZWdpbnQ2NDtcbmp1bXBbNjBdID0gaW52YWxpZE1pbm9yO1xuanVtcFs2MV0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzYyXSA9IGludmFsaWRNaW5vcjtcbmp1bXBbNjNdID0gaW52YWxpZE1pbm9yO1xuZm9yIChsZXQgaSA9IDY0OyBpIDw9IDg3OyBpKyspIHtcbiAganVtcFtpXSA9IF8yYnl0ZXMuZGVjb2RlQnl0ZXNDb21wYWN0O1xufVxuanVtcFs4OF0gPSBfMmJ5dGVzLmRlY29kZUJ5dGVzODtcbmp1bXBbODldID0gXzJieXRlcy5kZWNvZGVCeXRlczE2O1xuanVtcFs5MF0gPSBfMmJ5dGVzLmRlY29kZUJ5dGVzMzI7XG5qdW1wWzkxXSA9IF8yYnl0ZXMuZGVjb2RlQnl0ZXM2NDtcbmp1bXBbOTJdID0gaW52YWxpZE1pbm9yO1xuanVtcFs5M10gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzk0XSA9IGludmFsaWRNaW5vcjtcbmp1bXBbOTVdID0gZXJyb3JlcignaW5kZWZpbml0ZSBsZW5ndGggYnl0ZXMvc3RyaW5ncyBhcmUgbm90IHN1cHBvcnRlZCcpO1xuZm9yIChsZXQgaSA9IDk2OyBpIDw9IDExOTsgaSsrKSB7XG4gIGp1bXBbaV0gPSBfM3N0cmluZy5kZWNvZGVTdHJpbmdDb21wYWN0O1xufVxuanVtcFsxMjBdID0gXzNzdHJpbmcuZGVjb2RlU3RyaW5nODtcbmp1bXBbMTIxXSA9IF8zc3RyaW5nLmRlY29kZVN0cmluZzE2O1xuanVtcFsxMjJdID0gXzNzdHJpbmcuZGVjb2RlU3RyaW5nMzI7XG5qdW1wWzEyM10gPSBfM3N0cmluZy5kZWNvZGVTdHJpbmc2NDtcbmp1bXBbMTI0XSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMTI1XSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMTI2XSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMTI3XSA9IGVycm9yZXIoJ2luZGVmaW5pdGUgbGVuZ3RoIGJ5dGVzL3N0cmluZ3MgYXJlIG5vdCBzdXBwb3J0ZWQnKTtcbmZvciAobGV0IGkgPSAxMjg7IGkgPD0gMTUxOyBpKyspIHtcbiAganVtcFtpXSA9IF80YXJyYXkuZGVjb2RlQXJyYXlDb21wYWN0O1xufVxuanVtcFsxNTJdID0gXzRhcnJheS5kZWNvZGVBcnJheTg7XG5qdW1wWzE1M10gPSBfNGFycmF5LmRlY29kZUFycmF5MTY7XG5qdW1wWzE1NF0gPSBfNGFycmF5LmRlY29kZUFycmF5MzI7XG5qdW1wWzE1NV0gPSBfNGFycmF5LmRlY29kZUFycmF5NjQ7XG5qdW1wWzE1Nl0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzE1N10gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzE1OF0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzE1OV0gPSBfNGFycmF5LmRlY29kZUFycmF5SW5kZWZpbml0ZTtcbmZvciAobGV0IGkgPSAxNjA7IGkgPD0gMTgzOyBpKyspIHtcbiAganVtcFtpXSA9IF81bWFwLmRlY29kZU1hcENvbXBhY3Q7XG59XG5qdW1wWzE4NF0gPSBfNW1hcC5kZWNvZGVNYXA4O1xuanVtcFsxODVdID0gXzVtYXAuZGVjb2RlTWFwMTY7XG5qdW1wWzE4Nl0gPSBfNW1hcC5kZWNvZGVNYXAzMjtcbmp1bXBbMTg3XSA9IF81bWFwLmRlY29kZU1hcDY0O1xuanVtcFsxODhdID0gaW52YWxpZE1pbm9yO1xuanVtcFsxODldID0gaW52YWxpZE1pbm9yO1xuanVtcFsxOTBdID0gaW52YWxpZE1pbm9yO1xuanVtcFsxOTFdID0gXzVtYXAuZGVjb2RlTWFwSW5kZWZpbml0ZTtcbmZvciAobGV0IGkgPSAxOTI7IGkgPD0gMjE1OyBpKyspIHtcbiAganVtcFtpXSA9IF82dGFnLmRlY29kZVRhZ0NvbXBhY3Q7XG59XG5qdW1wWzIxNl0gPSBfNnRhZy5kZWNvZGVUYWc4O1xuanVtcFsyMTddID0gXzZ0YWcuZGVjb2RlVGFnMTY7XG5qdW1wWzIxOF0gPSBfNnRhZy5kZWNvZGVUYWczMjtcbmp1bXBbMjE5XSA9IF82dGFnLmRlY29kZVRhZzY0O1xuanVtcFsyMjBdID0gaW52YWxpZE1pbm9yO1xuanVtcFsyMjFdID0gaW52YWxpZE1pbm9yO1xuanVtcFsyMjJdID0gaW52YWxpZE1pbm9yO1xuanVtcFsyMjNdID0gaW52YWxpZE1pbm9yO1xuZm9yIChsZXQgaSA9IDIyNDsgaSA8PSAyNDM7IGkrKykge1xuICBqdW1wW2ldID0gZXJyb3Jlcignc2ltcGxlIHZhbHVlcyBhcmUgbm90IHN1cHBvcnRlZCcpO1xufVxuanVtcFsyNDRdID0gaW52YWxpZE1pbm9yO1xuanVtcFsyNDVdID0gaW52YWxpZE1pbm9yO1xuanVtcFsyNDZdID0gaW52YWxpZE1pbm9yO1xuanVtcFsyNDddID0gXzdmbG9hdC5kZWNvZGVVbmRlZmluZWQ7XG5qdW1wWzI0OF0gPSBlcnJvcmVyKCdzaW1wbGUgdmFsdWVzIGFyZSBub3Qgc3VwcG9ydGVkJyk7XG5qdW1wWzI0OV0gPSBfN2Zsb2F0LmRlY29kZUZsb2F0MTY7XG5qdW1wWzI1MF0gPSBfN2Zsb2F0LmRlY29kZUZsb2F0MzI7XG5qdW1wWzI1MV0gPSBfN2Zsb2F0LmRlY29kZUZsb2F0NjQ7XG5qdW1wWzI1Ml0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzI1M10gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzI1NF0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzI1NV0gPSBfN2Zsb2F0LmRlY29kZUJyZWFrO1xuY29uc3QgcXVpY2sgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICBxdWlja1tpXSA9IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnVpbnQsIGksIDEpO1xufVxuZm9yIChsZXQgaSA9IC0xOyBpID49IC0yNDsgaS0tKSB7XG4gIHF1aWNrWzMxIC0gaV0gPSBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5uZWdpbnQsIGksIDEpO1xufVxucXVpY2tbNjRdID0gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYnl0ZXMsIG5ldyBVaW50OEFycmF5KDApLCAxKTtcbnF1aWNrWzk2XSA9IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnN0cmluZywgJycsIDEpO1xucXVpY2tbMTI4XSA9IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmFycmF5LCAwLCAxKTtcbnF1aWNrWzE2MF0gPSBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5tYXAsIDAsIDEpO1xucXVpY2tbMjQ0XSA9IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmZhbHNlLCBmYWxzZSwgMSk7XG5xdWlja1syNDVdID0gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudHJ1ZSwgdHJ1ZSwgMSk7XG5xdWlja1syNDZdID0gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubnVsbCwgbnVsbCwgMSk7XG5mdW5jdGlvbiBxdWlja0VuY29kZVRva2VuKHRva2VuJDEpIHtcbiAgc3dpdGNoICh0b2tlbiQxLnR5cGUpIHtcbiAgY2FzZSB0b2tlbi5UeXBlLmZhbHNlOlxuICAgIHJldHVybiBieXRlVXRpbHMuZnJvbUFycmF5KFsyNDRdKTtcbiAgY2FzZSB0b2tlbi5UeXBlLnRydWU6XG4gICAgcmV0dXJuIGJ5dGVVdGlscy5mcm9tQXJyYXkoWzI0NV0pO1xuICBjYXNlIHRva2VuLlR5cGUubnVsbDpcbiAgICByZXR1cm4gYnl0ZVV0aWxzLmZyb21BcnJheShbMjQ2XSk7XG4gIGNhc2UgdG9rZW4uVHlwZS5ieXRlczpcbiAgICBpZiAoIXRva2VuJDEudmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYnl0ZVV0aWxzLmZyb21BcnJheShbNjRdKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICBjYXNlIHRva2VuLlR5cGUuc3RyaW5nOlxuICAgIGlmICh0b2tlbiQxLnZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuIGJ5dGVVdGlscy5mcm9tQXJyYXkoWzk2XSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgY2FzZSB0b2tlbi5UeXBlLmFycmF5OlxuICAgIGlmICh0b2tlbiQxLnZhbHVlID09PSAwKSB7XG4gICAgICByZXR1cm4gYnl0ZVV0aWxzLmZyb21BcnJheShbMTI4XSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgY2FzZSB0b2tlbi5UeXBlLm1hcDpcbiAgICBpZiAodG9rZW4kMS52YWx1ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJ5dGVVdGlscy5mcm9tQXJyYXkoWzE2MF0pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIGNhc2UgdG9rZW4uVHlwZS51aW50OlxuICAgIGlmICh0b2tlbiQxLnZhbHVlIDwgMjQpIHtcbiAgICAgIHJldHVybiBieXRlVXRpbHMuZnJvbUFycmF5KFtOdW1iZXIodG9rZW4kMS52YWx1ZSldKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICBjYXNlIHRva2VuLlR5cGUubmVnaW50OlxuICAgIGlmICh0b2tlbiQxLnZhbHVlID49IC0yNCkge1xuICAgICAgcmV0dXJuIGJ5dGVVdGlscy5mcm9tQXJyYXkoWzMxIC0gTnVtYmVyKHRva2VuJDEudmFsdWUpXSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuanVtcCA9IGp1bXA7XG5leHBvcnRzLnF1aWNrID0gcXVpY2s7XG5leHBvcnRzLnF1aWNrRW5jb2RlVG9rZW4gPSBxdWlja0VuY29kZVRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5jbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobWFqb3IsIG5hbWUsIHRlcm1pbmFsKSB7XG4gICAgdGhpcy5tYWpvciA9IG1ham9yO1xuICAgIHRoaXMubWFqb3JFbmNvZGVkID0gbWFqb3IgPDwgNTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGVybWluYWwgPSB0ZXJtaW5hbDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYFR5cGVbJHsgdGhpcy5tYWpvciB9XS4keyB0aGlzLm5hbWUgfWA7XG4gIH1cbiAgY29tcGFyZSh0eXApIHtcbiAgICByZXR1cm4gdGhpcy5tYWpvciA8IHR5cC5tYWpvciA/IC0xIDogdGhpcy5tYWpvciA+IHR5cC5tYWpvciA/IDEgOiAwO1xuICB9XG59XG5UeXBlLnVpbnQgPSBuZXcgVHlwZSgwLCAndWludCcsIHRydWUpO1xuVHlwZS5uZWdpbnQgPSBuZXcgVHlwZSgxLCAnbmVnaW50JywgdHJ1ZSk7XG5UeXBlLmJ5dGVzID0gbmV3IFR5cGUoMiwgJ2J5dGVzJywgdHJ1ZSk7XG5UeXBlLnN0cmluZyA9IG5ldyBUeXBlKDMsICdzdHJpbmcnLCB0cnVlKTtcblR5cGUuYXJyYXkgPSBuZXcgVHlwZSg0LCAnYXJyYXknLCBmYWxzZSk7XG5UeXBlLm1hcCA9IG5ldyBUeXBlKDUsICdtYXAnLCBmYWxzZSk7XG5UeXBlLnRhZyA9IG5ldyBUeXBlKDYsICd0YWcnLCBmYWxzZSk7XG5UeXBlLmZsb2F0ID0gbmV3IFR5cGUoNywgJ2Zsb2F0JywgdHJ1ZSk7XG5UeXBlLmZhbHNlID0gbmV3IFR5cGUoNywgJ2ZhbHNlJywgdHJ1ZSk7XG5UeXBlLnRydWUgPSBuZXcgVHlwZSg3LCAndHJ1ZScsIHRydWUpO1xuVHlwZS5udWxsID0gbmV3IFR5cGUoNywgJ251bGwnLCB0cnVlKTtcblR5cGUudW5kZWZpbmVkID0gbmV3IFR5cGUoNywgJ3VuZGVmaW5lZCcsIHRydWUpO1xuVHlwZS5icmVhayA9IG5ldyBUeXBlKDcsICdicmVhaycsIHRydWUpO1xuY2xhc3MgVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCB2YWx1ZSwgZW5jb2RlZExlbmd0aCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZW5jb2RlZExlbmd0aCA9IGVuY29kZWRMZW5ndGg7XG4gICAgdGhpcy5lbmNvZGVkQnl0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGBUb2tlblskeyB0aGlzLnR5cGUgfV0uJHsgdGhpcy52YWx1ZSB9YDtcbiAgfVxufVxuXG5leHBvcnRzLlRva2VuID0gVG9rZW47XG5leHBvcnRzLlR5cGUgPSBUeXBlO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi51cGxvYWRfX2Zvcm0ge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnVwbG9hZF9tZXNzYWdlIHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi51cGxvYWRfX2ZyYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OmJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XFxufVxcblxcbi51cGxvYWRfX3BsYWNlaG9sZGVyICwgLnVwbG9hZF9fYXJ0d29yayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbmlucHV0I2ZpbGVfaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVwbG9hZF9fYnRuIHtcXG4gICAgbWFyZ2luOiAxLjByZW07XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvYWRlciB7XFxuICAgIGNvbG9yOiAjMWU1MDUwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgfVxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ0IHtcXG4gICAgMCUsXFxuICAgIDEwMCUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XFxuICAgIH1cXG4gICAgMTIuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTAuNWVtLCAyZW0gLTJlbSAwIDAsIDNlbSAwIDAgMC4yZW0sIDJlbSAyZW0gMCAwLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcXG4gICAgfVxcbiAgICAzNy41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSwgMCAzZW0gMCAwLjJlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XFxuICAgIH1cXG4gICAgNjIuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XFxuICAgIH1cXG4gICAgODcuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLCAtMmVtIC0yZW0gMCAwLjJlbTtcXG4gICAgfVxcbiAgfVxcbiAgQGtleWZyYW1lcyBsb2FkNCB7XFxuICAgIDAlLFxcbiAgICAxMDAlIHtcXG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLjJlbSwgMmVtIC0yZW0gMCAwZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAwO1xcbiAgICB9XFxuICAgIDEyLjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAwLCAyZW0gLTJlbSAwIDAuMmVtLCAzZW0gMCAwIDAsIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XFxuICAgIH1cXG4gICAgMzcuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIDAsIDJlbSAyZW0gMCAwLjJlbSwgMCAzZW0gMCAwZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAwZW0sIDAgM2VtIDAgMC4yZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xcbiAgICB9XFxuICAgIDYyLjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAuMmVtLCAtMmVtIC0yZW0gMCAwO1xcbiAgICB9XFxuICAgIDg3LjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIDAsIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMCwgLTJlbSAtMmVtIDAgMC4yZW07XFxuICAgIH1cXG4gIH1cXG4gIFwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBiYXNlWCQxID0gcmVxdWlyZSgnLi4vLi4vdmVuZG9yL2Jhc2UteC5qcycpO1xudmFyIGJ5dGVzID0gcmVxdWlyZSgnLi4vYnl0ZXMuanMnKTtcblxuY2xhc3MgRW5jb2RlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByZWZpeCwgYmFzZUVuY29kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgdGhpcy5iYXNlRW5jb2RlID0gYmFzZUVuY29kZTtcbiAgfVxuICBlbmNvZGUoYnl0ZXMpIHtcbiAgICBpZiAoYnl0ZXMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICByZXR1cm4gYCR7IHRoaXMucHJlZml4IH0keyB0aGlzLmJhc2VFbmNvZGUoYnl0ZXMpIH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignVW5rbm93biB0eXBlLCBtdXN0IGJlIGJpbmFyeSB0eXBlJyk7XG4gICAgfVxuICB9XG59XG5jbGFzcyBEZWNvZGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJlZml4LCBiYXNlRGVjb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB0aGlzLmJhc2VEZWNvZGUgPSBiYXNlRGVjb2RlO1xuICB9XG4gIGRlY29kZSh0ZXh0KSB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoICh0ZXh0WzBdKSB7XG4gICAgICBjYXNlIHRoaXMucHJlZml4OiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmFzZURlY29kZSh0ZXh0LnNsaWNlKDEpKTtcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHRocm93IEVycm9yKGBVbmFibGUgdG8gZGVjb2RlIG11bHRpYmFzZSBzdHJpbmcgJHsgSlNPTi5zdHJpbmdpZnkodGV4dCkgfSwgJHsgdGhpcy5uYW1lIH0gZGVjb2RlciBvbmx5IHN1cHBvcnRzIGlucHV0cyBwcmVmaXhlZCB3aXRoICR7IHRoaXMucHJlZml4IH1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2FuIG9ubHkgbXVsdGliYXNlIGRlY29kZSBzdHJpbmdzJyk7XG4gICAgfVxuICB9XG4gIG9yKGRlY29kZXIpIHtcbiAgICBjb25zdCBkZWNvZGVycyA9IHtcbiAgICAgIFt0aGlzLnByZWZpeF06IHRoaXMsXG4gICAgICAuLi5kZWNvZGVyLmRlY29kZXJzIHx8IHsgW2RlY29kZXIucHJlZml4XTogZGVjb2RlciB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IENvbXBvc2VkRGVjb2RlcihkZWNvZGVycyk7XG4gIH1cbn1cbmNsYXNzIENvbXBvc2VkRGVjb2RlciB7XG4gIGNvbnN0cnVjdG9yKGRlY29kZXJzKSB7XG4gICAgdGhpcy5kZWNvZGVycyA9IGRlY29kZXJzO1xuICB9XG4gIG9yKGRlY29kZXIpIHtcbiAgICBjb25zdCBvdGhlciA9IGRlY29kZXIuZGVjb2RlcnMgfHwgeyBbZGVjb2Rlci5wcmVmaXhdOiBkZWNvZGVyIH07XG4gICAgcmV0dXJuIG5ldyBDb21wb3NlZERlY29kZXIoe1xuICAgICAgLi4udGhpcy5kZWNvZGVycyxcbiAgICAgIC4uLm90aGVyXG4gICAgfSk7XG4gIH1cbiAgZGVjb2RlKGlucHV0KSB7XG4gICAgY29uc3QgcHJlZml4ID0gaW5wdXRbMF07XG4gICAgY29uc3QgZGVjb2RlciA9IHRoaXMuZGVjb2RlcnNbcHJlZml4XTtcbiAgICBpZiAoZGVjb2Rlcikge1xuICAgICAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgUmFuZ2VFcnJvcihgVW5hYmxlIHRvIGRlY29kZSBtdWx0aWJhc2Ugc3RyaW5nICR7IEpTT04uc3RyaW5naWZ5KGlucHV0KSB9LCBvbmx5IGlucHV0cyBwcmVmaXhlZCB3aXRoICR7IE9iamVjdC5rZXlzKHRoaXMuZGVjb2RlcnMpIH0gYXJlIHN1cHBvcnRlZGApO1xuICAgIH1cbiAgfVxufVxuY2xhc3MgQ29kZWMge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmVmaXgsIGJhc2VFbmNvZGUsIGJhc2VEZWNvZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICAgIHRoaXMuYmFzZUVuY29kZSA9IGJhc2VFbmNvZGU7XG4gICAgdGhpcy5iYXNlRGVjb2RlID0gYmFzZURlY29kZTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgRW5jb2RlcihuYW1lLCBwcmVmaXgsIGJhc2VFbmNvZGUpO1xuICAgIHRoaXMuZGVjb2RlciA9IG5ldyBEZWNvZGVyKG5hbWUsIHByZWZpeCwgYmFzZURlY29kZSk7XG4gIH1cbiAgZW5jb2RlKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5jb2Rlci5lbmNvZGUoaW5wdXQpO1xuICB9XG4gIGRlY29kZShpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmRlY29kZXIuZGVjb2RlKGlucHV0KTtcbiAgfVxufVxuY29uc3QgZnJvbSA9ICh7bmFtZSwgcHJlZml4LCBlbmNvZGUsIGRlY29kZX0pID0+IG5ldyBDb2RlYyhuYW1lLCBwcmVmaXgsIGVuY29kZSwgZGVjb2RlKTtcbmNvbnN0IGJhc2VYID0gKHtwcmVmaXgsIG5hbWUsIGFscGhhYmV0fSkgPT4ge1xuICBjb25zdCB7ZW5jb2RlLCBkZWNvZGV9ID0gYmFzZVgkMShhbHBoYWJldCwgbmFtZSk7XG4gIHJldHVybiBmcm9tKHtcbiAgICBwcmVmaXgsXG4gICAgbmFtZSxcbiAgICBlbmNvZGUsXG4gICAgZGVjb2RlOiB0ZXh0ID0+IGJ5dGVzLmNvZXJjZShkZWNvZGUodGV4dCkpXG4gIH0pO1xufTtcbmNvbnN0IGRlY29kZSA9IChzdHJpbmcsIGFscGhhYmV0LCBiaXRzUGVyQ2hhciwgbmFtZSkgPT4ge1xuICBjb25zdCBjb2RlcyA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFscGhhYmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgY29kZXNbYWxwaGFiZXRbaV1dID0gaTtcbiAgfVxuICBsZXQgZW5kID0gc3RyaW5nLmxlbmd0aDtcbiAgd2hpbGUgKHN0cmluZ1tlbmQgLSAxXSA9PT0gJz0nKSB7XG4gICAgLS1lbmQ7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoZW5kICogYml0c1BlckNoYXIgLyA4IHwgMCk7XG4gIGxldCBiaXRzID0gMDtcbiAgbGV0IGJ1ZmZlciA9IDA7XG4gIGxldCB3cml0dGVuID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmQ7ICsraSkge1xuICAgIGNvbnN0IHZhbHVlID0gY29kZXNbc3RyaW5nW2ldXTtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBOb24tJHsgbmFtZSB9IGNoYXJhY3RlcmApO1xuICAgIH1cbiAgICBidWZmZXIgPSBidWZmZXIgPDwgYml0c1BlckNoYXIgfCB2YWx1ZTtcbiAgICBiaXRzICs9IGJpdHNQZXJDaGFyO1xuICAgIGlmIChiaXRzID49IDgpIHtcbiAgICAgIGJpdHMgLT0gODtcbiAgICAgIG91dFt3cml0dGVuKytdID0gMjU1ICYgYnVmZmVyID4+IGJpdHM7XG4gICAgfVxuICB9XG4gIGlmIChiaXRzID49IGJpdHNQZXJDaGFyIHx8IDI1NSAmIGJ1ZmZlciA8PCA4IC0gYml0cykge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZGF0YScpO1xuICB9XG4gIHJldHVybiBvdXQ7XG59O1xuY29uc3QgZW5jb2RlID0gKGRhdGEsIGFscGhhYmV0LCBiaXRzUGVyQ2hhcikgPT4ge1xuICBjb25zdCBwYWQgPSBhbHBoYWJldFthbHBoYWJldC5sZW5ndGggLSAxXSA9PT0gJz0nO1xuICBjb25zdCBtYXNrID0gKDEgPDwgYml0c1BlckNoYXIpIC0gMTtcbiAgbGV0IG91dCA9ICcnO1xuICBsZXQgYml0cyA9IDA7XG4gIGxldCBidWZmZXIgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICBidWZmZXIgPSBidWZmZXIgPDwgOCB8IGRhdGFbaV07XG4gICAgYml0cyArPSA4O1xuICAgIHdoaWxlIChiaXRzID4gYml0c1BlckNoYXIpIHtcbiAgICAgIGJpdHMgLT0gYml0c1BlckNoYXI7XG4gICAgICBvdXQgKz0gYWxwaGFiZXRbbWFzayAmIGJ1ZmZlciA+PiBiaXRzXTtcbiAgICB9XG4gIH1cbiAgaWYgKGJpdHMpIHtcbiAgICBvdXQgKz0gYWxwaGFiZXRbbWFzayAmIGJ1ZmZlciA8PCBiaXRzUGVyQ2hhciAtIGJpdHNdO1xuICB9XG4gIGlmIChwYWQpIHtcbiAgICB3aGlsZSAob3V0Lmxlbmd0aCAqIGJpdHNQZXJDaGFyICYgNykge1xuICAgICAgb3V0ICs9ICc9JztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5jb25zdCByZmM0NjQ4ID0gKHtuYW1lLCBwcmVmaXgsIGJpdHNQZXJDaGFyLCBhbHBoYWJldH0pID0+IHtcbiAgcmV0dXJuIGZyb20oe1xuICAgIHByZWZpeCxcbiAgICBuYW1lLFxuICAgIGVuY29kZShpbnB1dCkge1xuICAgICAgcmV0dXJuIGVuY29kZShpbnB1dCwgYWxwaGFiZXQsIGJpdHNQZXJDaGFyKTtcbiAgICB9LFxuICAgIGRlY29kZShpbnB1dCkge1xuICAgICAgcmV0dXJuIGRlY29kZShpbnB1dCwgYWxwaGFiZXQsIGJpdHNQZXJDaGFyLCBuYW1lKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0cy5Db2RlYyA9IENvZGVjO1xuZXhwb3J0cy5iYXNlWCA9IGJhc2VYO1xuZXhwb3J0cy5mcm9tID0gZnJvbTtcbmV4cG9ydHMucmZjNDY0OCA9IHJmYzQ2NDg7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBiYXNlID0gcmVxdWlyZSgnLi9iYXNlLmpzJyk7XG5cbmNvbnN0IGJhc2UzMiA9IGJhc2UucmZjNDY0OCh7XG4gIHByZWZpeDogJ2InLFxuICBuYW1lOiAnYmFzZTMyJyxcbiAgYWxwaGFiZXQ6ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejIzNDU2NycsXG4gIGJpdHNQZXJDaGFyOiA1XG59KTtcbmNvbnN0IGJhc2UzMnVwcGVyID0gYmFzZS5yZmM0NjQ4KHtcbiAgcHJlZml4OiAnQicsXG4gIG5hbWU6ICdiYXNlMzJ1cHBlcicsXG4gIGFscGhhYmV0OiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVoyMzQ1NjcnLFxuICBiaXRzUGVyQ2hhcjogNVxufSk7XG5jb25zdCBiYXNlMzJwYWQgPSBiYXNlLnJmYzQ2NDgoe1xuICBwcmVmaXg6ICdjJyxcbiAgbmFtZTogJ2Jhc2UzMnBhZCcsXG4gIGFscGhhYmV0OiAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoyMzQ1Njc9JyxcbiAgYml0c1BlckNoYXI6IDVcbn0pO1xuY29uc3QgYmFzZTMycGFkdXBwZXIgPSBiYXNlLnJmYzQ2NDgoe1xuICBwcmVmaXg6ICdDJyxcbiAgbmFtZTogJ2Jhc2UzMnBhZHVwcGVyJyxcbiAgYWxwaGFiZXQ6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjIzNDU2Nz0nLFxuICBiaXRzUGVyQ2hhcjogNVxufSk7XG5jb25zdCBiYXNlMzJoZXggPSBiYXNlLnJmYzQ2NDgoe1xuICBwcmVmaXg6ICd2JyxcbiAgbmFtZTogJ2Jhc2UzMmhleCcsXG4gIGFscGhhYmV0OiAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXYnLFxuICBiaXRzUGVyQ2hhcjogNVxufSk7XG5jb25zdCBiYXNlMzJoZXh1cHBlciA9IGJhc2UucmZjNDY0OCh7XG4gIHByZWZpeDogJ1YnLFxuICBuYW1lOiAnYmFzZTMyaGV4dXBwZXInLFxuICBhbHBoYWJldDogJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWJyxcbiAgYml0c1BlckNoYXI6IDVcbn0pO1xuY29uc3QgYmFzZTMyaGV4cGFkID0gYmFzZS5yZmM0NjQ4KHtcbiAgcHJlZml4OiAndCcsXG4gIG5hbWU6ICdiYXNlMzJoZXhwYWQnLFxuICBhbHBoYWJldDogJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2PScsXG4gIGJpdHNQZXJDaGFyOiA1XG59KTtcbmNvbnN0IGJhc2UzMmhleHBhZHVwcGVyID0gYmFzZS5yZmM0NjQ4KHtcbiAgcHJlZml4OiAnVCcsXG4gIG5hbWU6ICdiYXNlMzJoZXhwYWR1cHBlcicsXG4gIGFscGhhYmV0OiAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVY9JyxcbiAgYml0c1BlckNoYXI6IDVcbn0pO1xuY29uc3QgYmFzZTMyeiA9IGJhc2UucmZjNDY0OCh7XG4gIHByZWZpeDogJ2gnLFxuICBuYW1lOiAnYmFzZTMyeicsXG4gIGFscGhhYmV0OiAneWJuZHJmZzhlamttY3BxeG90MXV3aXN6YTM0NWg3NjknLFxuICBiaXRzUGVyQ2hhcjogNVxufSk7XG5cbmV4cG9ydHMuYmFzZTMyID0gYmFzZTMyO1xuZXhwb3J0cy5iYXNlMzJoZXggPSBiYXNlMzJoZXg7XG5leHBvcnRzLmJhc2UzMmhleHBhZCA9IGJhc2UzMmhleHBhZDtcbmV4cG9ydHMuYmFzZTMyaGV4cGFkdXBwZXIgPSBiYXNlMzJoZXhwYWR1cHBlcjtcbmV4cG9ydHMuYmFzZTMyaGV4dXBwZXIgPSBiYXNlMzJoZXh1cHBlcjtcbmV4cG9ydHMuYmFzZTMycGFkID0gYmFzZTMycGFkO1xuZXhwb3J0cy5iYXNlMzJwYWR1cHBlciA9IGJhc2UzMnBhZHVwcGVyO1xuZXhwb3J0cy5iYXNlMzJ1cHBlciA9IGJhc2UzMnVwcGVyO1xuZXhwb3J0cy5iYXNlMzJ6ID0gYmFzZTMyejtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGJhc2UgPSByZXF1aXJlKCcuL2Jhc2UuanMnKTtcblxuY29uc3QgYmFzZTU4YnRjID0gYmFzZS5iYXNlWCh7XG4gIG5hbWU6ICdiYXNlNThidGMnLFxuICBwcmVmaXg6ICd6JyxcbiAgYWxwaGFiZXQ6ICcxMjM0NTY3ODlBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6J1xufSk7XG5jb25zdCBiYXNlNThmbGlja3IgPSBiYXNlLmJhc2VYKHtcbiAgbmFtZTogJ2Jhc2U1OGZsaWNrcicsXG4gIHByZWZpeDogJ1onLFxuICBhbHBoYWJldDogJzEyMzQ1Njc4OWFiY2RlZmdoaWprbW5vcHFyc3R1dnd4eXpBQkNERUZHSEpLTE1OUFFSU1RVVldYWVonXG59KTtcblxuZXhwb3J0cy5iYXNlNThidGMgPSBiYXNlNThidGM7XG5leHBvcnRzLmJhc2U1OGZsaWNrciA9IGJhc2U1OGZsaWNrcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxucmVxdWlyZSgnLi9pbmRleC5qcycpO1xudmFyIGNpZCA9IHJlcXVpcmUoJy4vY2lkLmpzJyk7XG52YXIgYnl0ZXMgPSByZXF1aXJlKCcuL2J5dGVzLmpzJyk7XG5cbmNvbnN0IHJlYWRvbmx5ID0gKHtlbnVtZXJhYmxlID0gdHJ1ZSwgY29uZmlndXJhYmxlID0gZmFsc2V9ID0ge30pID0+ICh7XG4gIGVudW1lcmFibGUsXG4gIGNvbmZpZ3VyYWJsZSxcbiAgd3JpdGFibGU6IGZhbHNlXG59KTtcbmNvbnN0IGxpbmtzID0gZnVuY3Rpb24qIChzb3VyY2UsIGJhc2UpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKVxuICAgIHJldHVybjtcbiAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpXG4gICAgcmV0dXJuO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzb3VyY2UpKSB7XG4gICAgY29uc3QgcGF0aCA9IFtcbiAgICAgIC4uLmJhc2UsXG4gICAgICBrZXlcbiAgICBdO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgZWxlbWVudF0gb2YgdmFsdWUuZW50cmllcygpKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudFBhdGggPSBbXG4gICAgICAgICAgICAuLi5wYXRoLFxuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICBdO1xuICAgICAgICAgIGNvbnN0IGNpZCQxID0gY2lkLkNJRC5hc0NJRChlbGVtZW50KTtcbiAgICAgICAgICBpZiAoY2lkJDEpIHtcbiAgICAgICAgICAgIHlpZWxkIFtcbiAgICAgICAgICAgICAgZWxlbWVudFBhdGguam9pbignLycpLFxuICAgICAgICAgICAgICBjaWQkMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgeWllbGQqIGxpbmtzKGVsZW1lbnQsIGVsZW1lbnRQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNpZCQxID0gY2lkLkNJRC5hc0NJRCh2YWx1ZSk7XG4gICAgICAgIGlmIChjaWQkMSkge1xuICAgICAgICAgIHlpZWxkIFtcbiAgICAgICAgICAgIHBhdGguam9pbignLycpLFxuICAgICAgICAgICAgY2lkJDFcbiAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHlpZWxkKiBsaW5rcyh2YWx1ZSwgcGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5jb25zdCB0cmVlID0gZnVuY3Rpb24qIChzb3VyY2UsIGJhc2UpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKVxuICAgIHJldHVybjtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc291cmNlKSkge1xuICAgIGNvbnN0IHBhdGggPSBbXG4gICAgICAuLi5iYXNlLFxuICAgICAga2V5XG4gICAgXTtcbiAgICB5aWVsZCBwYXRoLmpvaW4oJy8nKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhY2lkLkNJRC5hc0NJRCh2YWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgZWxlbWVudF0gb2YgdmFsdWUuZW50cmllcygpKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudFBhdGggPSBbXG4gICAgICAgICAgICAuLi5wYXRoLFxuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICBdO1xuICAgICAgICAgIHlpZWxkIGVsZW1lbnRQYXRoLmpvaW4oJy8nKTtcbiAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmICFjaWQuQ0lELmFzQ0lEKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB5aWVsZCogdHJlZShlbGVtZW50LCBlbGVtZW50UGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5aWVsZCogdHJlZSh2YWx1ZSwgcGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuY29uc3QgZ2V0ID0gKHNvdXJjZSwgcGF0aCkgPT4ge1xuICBsZXQgbm9kZSA9IHNvdXJjZTtcbiAgZm9yIChjb25zdCBbaW5kZXgsIGtleV0gb2YgcGF0aC5lbnRyaWVzKCkpIHtcbiAgICBub2RlID0gbm9kZVtrZXldO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT2JqZWN0IGhhcyBubyBwcm9wZXJ0eSBhdCAkeyBwYXRoLnNsaWNlKDAsIGluZGV4ICsgMSkubWFwKHBhcnQgPT4gYFskeyBKU09OLnN0cmluZ2lmeShwYXJ0KSB9XWApLmpvaW4oJycpIH1gKTtcbiAgICB9XG4gICAgY29uc3QgY2lkJDEgPSBjaWQuQ0lELmFzQ0lEKG5vZGUpO1xuICAgIGlmIChjaWQkMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IGNpZCQxLFxuICAgICAgICByZW1haW5pbmc6IHBhdGguc2xpY2UoaW5kZXggKyAxKS5qb2luKCcvJylcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHZhbHVlOiBub2RlIH07XG59O1xuY2xhc3MgQmxvY2sge1xuICBjb25zdHJ1Y3Rvcih7Y2lkLCBieXRlcywgdmFsdWV9KSB7XG4gICAgaWYgKCFjaWQgfHwgIWJ5dGVzIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQnKTtcbiAgICB0aGlzLmNpZCA9IGNpZDtcbiAgICB0aGlzLmJ5dGVzID0gYnl0ZXM7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYXNCbG9jayA9IHRoaXM7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgY2lkOiByZWFkb25seSgpLFxuICAgICAgYnl0ZXM6IHJlYWRvbmx5KCksXG4gICAgICB2YWx1ZTogcmVhZG9ubHkoKSxcbiAgICAgIGFzQmxvY2s6IHJlYWRvbmx5KClcbiAgICB9KTtcbiAgfVxuICBsaW5rcygpIHtcbiAgICByZXR1cm4gbGlua3ModGhpcy52YWx1ZSwgW10pO1xuICB9XG4gIHRyZWUoKSB7XG4gICAgcmV0dXJuIHRyZWUodGhpcy52YWx1ZSwgW10pO1xuICB9XG4gIGdldChwYXRoID0gJy8nKSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLnZhbHVlLCBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pKTtcbiAgfVxufVxuY29uc3QgZW5jb2RlID0gYXN5bmMgKHt2YWx1ZSwgY29kZWMsIGhhc2hlcn0pID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50IFwidmFsdWVcIicpO1xuICBpZiAoIWNvZGVjIHx8ICFoYXNoZXIpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OiBjb2RlYyBvciBoYXNoZXInKTtcbiAgY29uc3QgYnl0ZXMgPSBjb2RlYy5lbmNvZGUodmFsdWUpO1xuICBjb25zdCBoYXNoID0gYXdhaXQgaGFzaGVyLmRpZ2VzdChieXRlcyk7XG4gIGNvbnN0IGNpZCQxID0gY2lkLkNJRC5jcmVhdGUoMSwgY29kZWMuY29kZSwgaGFzaCk7XG4gIHJldHVybiBuZXcgQmxvY2soe1xuICAgIHZhbHVlLFxuICAgIGJ5dGVzLFxuICAgIGNpZDogY2lkJDFcbiAgfSk7XG59O1xuY29uc3QgZGVjb2RlID0gYXN5bmMgKHtieXRlcywgY29kZWMsIGhhc2hlcn0pID0+IHtcbiAgaWYgKCFieXRlcylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQgXCJieXRlc1wiJyk7XG4gIGlmICghY29kZWMgfHwgIWhhc2hlcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ6IGNvZGVjIG9yIGhhc2hlcicpO1xuICBjb25zdCB2YWx1ZSA9IGNvZGVjLmRlY29kZShieXRlcyk7XG4gIGNvbnN0IGhhc2ggPSBhd2FpdCBoYXNoZXIuZGlnZXN0KGJ5dGVzKTtcbiAgY29uc3QgY2lkJDEgPSBjaWQuQ0lELmNyZWF0ZSgxLCBjb2RlYy5jb2RlLCBoYXNoKTtcbiAgcmV0dXJuIG5ldyBCbG9jayh7XG4gICAgdmFsdWUsXG4gICAgYnl0ZXMsXG4gICAgY2lkOiBjaWQkMVxuICB9KTtcbn07XG5jb25zdCBjcmVhdGVVbnNhZmUgPSAoe1xuICBieXRlcyxcbiAgY2lkLFxuICB2YWx1ZTogbWF5YmVWYWx1ZSxcbiAgY29kZWNcbn0pID0+IHtcbiAgY29uc3QgdmFsdWUgPSBtYXliZVZhbHVlICE9PSB1bmRlZmluZWQgPyBtYXliZVZhbHVlIDogY29kZWMgJiYgY29kZWMuZGVjb2RlKGJ5dGVzKTtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50LCBtdXN0IGVpdGhlciBwcm92aWRlIFwidmFsdWVcIiBvciBcImNvZGVjXCInKTtcbiAgcmV0dXJuIG5ldyBCbG9jayh7XG4gICAgY2lkLFxuICAgIGJ5dGVzLFxuICAgIHZhbHVlXG4gIH0pO1xufTtcbmNvbnN0IGNyZWF0ZSA9IGFzeW5jICh7Ynl0ZXM6IGJ5dGVzJDEsIGNpZCwgaGFzaGVyLCBjb2RlY30pID0+IHtcbiAgaWYgKCFieXRlcyQxKVxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudCBcImJ5dGVzXCInKTtcbiAgaWYgKCFoYXNoZXIpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50IFwiaGFzaGVyXCInKTtcbiAgY29uc3QgdmFsdWUgPSBjb2RlYy5kZWNvZGUoYnl0ZXMkMSk7XG4gIGNvbnN0IGhhc2ggPSBhd2FpdCBoYXNoZXIuZGlnZXN0KGJ5dGVzJDEpO1xuICBpZiAoIWJ5dGVzLmVxdWFscyhjaWQubXVsdGloYXNoLmJ5dGVzLCBoYXNoLmJ5dGVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ0lEIGhhc2ggZG9lcyBub3QgbWF0Y2ggYnl0ZXMnKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlVW5zYWZlKHtcbiAgICBieXRlczogYnl0ZXMkMSxcbiAgICBjaWQsXG4gICAgdmFsdWUsXG4gICAgY29kZWNcbiAgfSk7XG59O1xuXG5leHBvcnRzLkJsb2NrID0gQmxvY2s7XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbmV4cG9ydHMuY3JlYXRlVW5zYWZlID0gY3JlYXRlVW5zYWZlO1xuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgZW1wdHkgPSBuZXcgVWludDhBcnJheSgwKTtcbmNvbnN0IHRvSGV4ID0gZCA9PiBkLnJlZHVjZSgoaGV4LCBieXRlKSA9PiBoZXggKyBieXRlLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpLCAnJyk7XG5jb25zdCBmcm9tSGV4ID0gaGV4ID0+IHtcbiAgY29uc3QgaGV4ZXMgPSBoZXgubWF0Y2goLy4uL2cpO1xuICByZXR1cm4gaGV4ZXMgPyBuZXcgVWludDhBcnJheShoZXhlcy5tYXAoYiA9PiBwYXJzZUludChiLCAxNikpKSA6IGVtcHR5O1xufTtcbmNvbnN0IGVxdWFscyA9IChhYSwgYmIpID0+IHtcbiAgaWYgKGFhID09PSBiYilcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKGFhLmJ5dGVMZW5ndGggIT09IGJiLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGFhLmJ5dGVMZW5ndGg7IGlpKyspIHtcbiAgICBpZiAoYWFbaWldICE9PSBiYltpaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuY29uc3QgY29lcmNlID0gbyA9PiB7XG4gIGlmIChvIGluc3RhbmNlb2YgVWludDhBcnJheSAmJiBvLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdVaW50OEFycmF5JylcbiAgICByZXR1cm4gbztcbiAgaWYgKG8gaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcilcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobyk7XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcobykpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoby5idWZmZXIsIG8uYnl0ZU9mZnNldCwgby5ieXRlTGVuZ3RoKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdHlwZSwgbXVzdCBiZSBiaW5hcnkgdHlwZScpO1xufTtcbmNvbnN0IGlzQmluYXJ5ID0gbyA9PiBvIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KG8pO1xuY29uc3QgZnJvbVN0cmluZyA9IHN0ciA9PiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc3RyKTtcbmNvbnN0IHRvU3RyaW5nID0gYiA9PiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoYik7XG5cbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5lbXB0eSA9IGVtcHR5O1xuZXhwb3J0cy5lcXVhbHMgPSBlcXVhbHM7XG5leHBvcnRzLmZyb21IZXggPSBmcm9tSGV4O1xuZXhwb3J0cy5mcm9tU3RyaW5nID0gZnJvbVN0cmluZztcbmV4cG9ydHMuaXNCaW5hcnkgPSBpc0JpbmFyeTtcbmV4cG9ydHMudG9IZXggPSB0b0hleDtcbmV4cG9ydHMudG9TdHJpbmcgPSB0b1N0cmluZztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHZhcmludCA9IHJlcXVpcmUoJy4vdmFyaW50LmpzJyk7XG52YXIgZGlnZXN0ID0gcmVxdWlyZSgnLi9oYXNoZXMvZGlnZXN0LmpzJyk7XG52YXIgYmFzZTU4ID0gcmVxdWlyZSgnLi9iYXNlcy9iYXNlNTguanMnKTtcbnZhciBiYXNlMzIgPSByZXF1aXJlKCcuL2Jhc2VzL2Jhc2UzMi5qcycpO1xudmFyIGJ5dGVzID0gcmVxdWlyZSgnLi9ieXRlcy5qcycpO1xuXG5jbGFzcyBDSUQge1xuICBjb25zdHJ1Y3Rvcih2ZXJzaW9uLCBjb2RlLCBtdWx0aWhhc2gsIGJ5dGVzKSB7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMubXVsdGloYXNoID0gbXVsdGloYXNoO1xuICAgIHRoaXMuYnl0ZXMgPSBieXRlcztcbiAgICB0aGlzLmJ5dGVPZmZzZXQgPSBieXRlcy5ieXRlT2Zmc2V0O1xuICAgIHRoaXMuYnl0ZUxlbmd0aCA9IGJ5dGVzLmJ5dGVMZW5ndGg7XG4gICAgdGhpcy5hc0NJRCA9IHRoaXM7XG4gICAgdGhpcy5fYmFzZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGJ5dGVPZmZzZXQ6IGhpZGRlbixcbiAgICAgIGJ5dGVMZW5ndGg6IGhpZGRlbixcbiAgICAgIGNvZGU6IHJlYWRvbmx5LFxuICAgICAgdmVyc2lvbjogcmVhZG9ubHksXG4gICAgICBtdWx0aWhhc2g6IHJlYWRvbmx5LFxuICAgICAgYnl0ZXM6IHJlYWRvbmx5LFxuICAgICAgX2Jhc2VDYWNoZTogaGlkZGVuLFxuICAgICAgYXNDSUQ6IGhpZGRlblxuICAgIH0pO1xuICB9XG4gIHRvVjAoKSB7XG4gICAgc3dpdGNoICh0aGlzLnZlcnNpb24pIHtcbiAgICBjYXNlIDA6IHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCB7Y29kZSwgbXVsdGloYXNofSA9IHRoaXM7XG4gICAgICAgIGlmIChjb2RlICE9PSBEQUdfUEJfQ09ERSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBub24gZGFnLXBiIENJRCB0byBDSUR2MCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtdWx0aWhhc2guY29kZSAhPT0gU0hBXzI1Nl9DT0RFKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29udmVydCBub24gc2hhMi0yNTYgbXVsdGloYXNoIENJRCB0byBDSUR2MCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDSUQuY3JlYXRlVjAobXVsdGloYXNoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdG9WMSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudmVyc2lvbikge1xuICAgIGNhc2UgMDoge1xuICAgICAgICBjb25zdCB7Y29kZSwgZGlnZXN0OiBkaWdlc3QkMX0gPSB0aGlzLm11bHRpaGFzaDtcbiAgICAgICAgY29uc3QgbXVsdGloYXNoID0gZGlnZXN0LmNyZWF0ZShjb2RlLCBkaWdlc3QkMSk7XG4gICAgICAgIHJldHVybiBDSUQuY3JlYXRlVjEodGhpcy5jb2RlLCBtdWx0aWhhc2gpO1xuICAgICAgfVxuICAgIGNhc2UgMToge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IEVycm9yKGBDYW4gbm90IGNvbnZlcnQgQ0lEIHZlcnNpb24gJHsgdGhpcy52ZXJzaW9uIH0gdG8gdmVyc2lvbiAwLiBUaGlzIGlzIGEgYnVnIHBsZWFzZSByZXBvcnRgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIG90aGVyICYmIHRoaXMuY29kZSA9PT0gb3RoZXIuY29kZSAmJiB0aGlzLnZlcnNpb24gPT09IG90aGVyLnZlcnNpb24gJiYgZGlnZXN0LmVxdWFscyh0aGlzLm11bHRpaGFzaCwgb3RoZXIubXVsdGloYXNoKTtcbiAgfVxuICB0b1N0cmluZyhiYXNlKSB7XG4gICAgY29uc3Qge2J5dGVzLCB2ZXJzaW9uLCBfYmFzZUNhY2hlfSA9IHRoaXM7XG4gICAgc3dpdGNoICh2ZXJzaW9uKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHRvU3RyaW5nVjAoYnl0ZXMsIF9iYXNlQ2FjaGUsIGJhc2UgfHwgYmFzZTU4LmJhc2U1OGJ0Yy5lbmNvZGVyKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRvU3RyaW5nVjEoYnl0ZXMsIF9iYXNlQ2FjaGUsIGJhc2UgfHwgYmFzZTMyLmJhc2UzMi5lbmNvZGVyKTtcbiAgICB9XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb24sXG4gICAgICBoYXNoOiB0aGlzLm11bHRpaGFzaC5ieXRlc1xuICAgIH07XG4gIH1cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiAnQ0lEJztcbiAgfVxuICBbU3ltYm9sLmZvcignbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKV0oKSB7XG4gICAgcmV0dXJuICdDSUQoJyArIHRoaXMudG9TdHJpbmcoKSArICcpJztcbiAgfVxuICBzdGF0aWMgaXNDSUQodmFsdWUpIHtcbiAgICBkZXByZWNhdGUoL14wXFwuMC8sIElTX0NJRF9ERVBSRUNBVElPTik7XG4gICAgcmV0dXJuICEhKHZhbHVlICYmICh2YWx1ZVtjaWRTeW1ib2xdIHx8IHZhbHVlLmFzQ0lEID09PSB2YWx1ZSkpO1xuICB9XG4gIGdldCB0b0Jhc2VFbmNvZGVkU3RyaW5nKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGVwcmVjYXRlZCwgdXNlIC50b1N0cmluZygpJyk7XG4gIH1cbiAgZ2V0IGNvZGVjKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignXCJjb2RlY1wiIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQsIHVzZSBpbnRlZ2VyIFwiY29kZVwiIHByb3BlcnR5IGluc3RlYWQnKTtcbiAgfVxuICBnZXQgYnVmZmVyKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGVwcmVjYXRlZCAuYnVmZmVyIHByb3BlcnR5LCB1c2UgLmJ5dGVzIHRvIGdldCBVaW50OEFycmF5IGluc3RlYWQnKTtcbiAgfVxuICBnZXQgbXVsdGliYXNlTmFtZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wibXVsdGliYXNlTmFtZVwiIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQnKTtcbiAgfVxuICBnZXQgcHJlZml4KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignXCJwcmVmaXhcIiBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkJyk7XG4gIH1cbiAgc3RhdGljIGFzQ0lEKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ0lEKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLmFzQ0lEID09PSB2YWx1ZSkge1xuICAgICAgY29uc3Qge3ZlcnNpb24sIGNvZGUsIG11bHRpaGFzaCwgYnl0ZXN9ID0gdmFsdWU7XG4gICAgICByZXR1cm4gbmV3IENJRCh2ZXJzaW9uLCBjb2RlLCBtdWx0aWhhc2gsIGJ5dGVzIHx8IGVuY29kZUNJRCh2ZXJzaW9uLCBjb2RlLCBtdWx0aWhhc2guYnl0ZXMpKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWVbY2lkU3ltYm9sXSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3Qge3ZlcnNpb24sIG11bHRpaGFzaCwgY29kZX0gPSB2YWx1ZTtcbiAgICAgIGNvbnN0IGRpZ2VzdCQxID0gZGlnZXN0LmRlY29kZShtdWx0aWhhc2gpO1xuICAgICAgcmV0dXJuIENJRC5jcmVhdGUodmVyc2lvbiwgY29kZSwgZGlnZXN0JDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGNyZWF0ZSh2ZXJzaW9uLCBjb2RlLCBkaWdlc3QpIHtcbiAgICBpZiAodHlwZW9mIGNvZGUgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cmluZyBjb2RlY3MgYXJlIG5vIGxvbmdlciBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgc3dpdGNoICh2ZXJzaW9uKSB7XG4gICAgY2FzZSAwOiB7XG4gICAgICAgIGlmIChjb2RlICE9PSBEQUdfUEJfQ09ERSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVmVyc2lvbiAwIENJRCBtdXN0IHVzZSBkYWctcGIgKGNvZGU6ICR7IERBR19QQl9DT0RFIH0pIGJsb2NrIGVuY29kaW5nYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDSUQodmVyc2lvbiwgY29kZSwgZGlnZXN0LCBkaWdlc3QuYnl0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgY2FzZSAxOiB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gZW5jb2RlQ0lEKHZlcnNpb24sIGNvZGUsIGRpZ2VzdC5ieXRlcyk7XG4gICAgICAgIHJldHVybiBuZXcgQ0lEKHZlcnNpb24sIGNvZGUsIGRpZ2VzdCwgYnl0ZXMpO1xuICAgICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZlcnNpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIGNyZWF0ZVYwKGRpZ2VzdCkge1xuICAgIHJldHVybiBDSUQuY3JlYXRlKDAsIERBR19QQl9DT0RFLCBkaWdlc3QpO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVWMShjb2RlLCBkaWdlc3QpIHtcbiAgICByZXR1cm4gQ0lELmNyZWF0ZSgxLCBjb2RlLCBkaWdlc3QpO1xuICB9XG4gIHN0YXRpYyBkZWNvZGUoYnl0ZXMpIHtcbiAgICBjb25zdCBbY2lkLCByZW1haW5kZXJdID0gQ0lELmRlY29kZUZpcnN0KGJ5dGVzKTtcbiAgICBpZiAocmVtYWluZGVyLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgbGVuZ3RoJyk7XG4gICAgfVxuICAgIHJldHVybiBjaWQ7XG4gIH1cbiAgc3RhdGljIGRlY29kZUZpcnN0KGJ5dGVzJDEpIHtcbiAgICBjb25zdCBzcGVjcyA9IENJRC5pbnNwZWN0Qnl0ZXMoYnl0ZXMkMSk7XG4gICAgY29uc3QgcHJlZml4U2l6ZSA9IHNwZWNzLnNpemUgLSBzcGVjcy5tdWx0aWhhc2hTaXplO1xuICAgIGNvbnN0IG11bHRpaGFzaEJ5dGVzID0gYnl0ZXMuY29lcmNlKGJ5dGVzJDEuc3ViYXJyYXkocHJlZml4U2l6ZSwgcHJlZml4U2l6ZSArIHNwZWNzLm11bHRpaGFzaFNpemUpKTtcbiAgICBpZiAobXVsdGloYXNoQnl0ZXMuYnl0ZUxlbmd0aCAhPT0gc3BlY3MubXVsdGloYXNoU2l6ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgbGVuZ3RoJyk7XG4gICAgfVxuICAgIGNvbnN0IGRpZ2VzdEJ5dGVzID0gbXVsdGloYXNoQnl0ZXMuc3ViYXJyYXkoc3BlY3MubXVsdGloYXNoU2l6ZSAtIHNwZWNzLmRpZ2VzdFNpemUpO1xuICAgIGNvbnN0IGRpZ2VzdCQxID0gbmV3IGRpZ2VzdC5EaWdlc3Qoc3BlY3MubXVsdGloYXNoQ29kZSwgc3BlY3MuZGlnZXN0U2l6ZSwgZGlnZXN0Qnl0ZXMsIG11bHRpaGFzaEJ5dGVzKTtcbiAgICBjb25zdCBjaWQgPSBzcGVjcy52ZXJzaW9uID09PSAwID8gQ0lELmNyZWF0ZVYwKGRpZ2VzdCQxKSA6IENJRC5jcmVhdGVWMShzcGVjcy5jb2RlYywgZGlnZXN0JDEpO1xuICAgIHJldHVybiBbXG4gICAgICBjaWQsXG4gICAgICBieXRlcyQxLnN1YmFycmF5KHNwZWNzLnNpemUpXG4gICAgXTtcbiAgfVxuICBzdGF0aWMgaW5zcGVjdEJ5dGVzKGluaXRpYWxCeXRlcykge1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBbaSwgbGVuZ3RoXSA9IHZhcmludC5kZWNvZGUoaW5pdGlhbEJ5dGVzLnN1YmFycmF5KG9mZnNldCkpO1xuICAgICAgb2Zmc2V0ICs9IGxlbmd0aDtcbiAgICAgIHJldHVybiBpO1xuICAgIH07XG4gICAgbGV0IHZlcnNpb24gPSBuZXh0KCk7XG4gICAgbGV0IGNvZGVjID0gREFHX1BCX0NPREU7XG4gICAgaWYgKHZlcnNpb24gPT09IDE4KSB7XG4gICAgICB2ZXJzaW9uID0gMDtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAxKSB7XG4gICAgICBjb2RlYyA9IG5leHQoKTtcbiAgICB9XG4gICAgaWYgKHZlcnNpb24gIT09IDAgJiYgdmVyc2lvbiAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYEludmFsaWQgQ0lEIHZlcnNpb24gJHsgdmVyc2lvbiB9YCk7XG4gICAgfVxuICAgIGNvbnN0IHByZWZpeFNpemUgPSBvZmZzZXQ7XG4gICAgY29uc3QgbXVsdGloYXNoQ29kZSA9IG5leHQoKTtcbiAgICBjb25zdCBkaWdlc3RTaXplID0gbmV4dCgpO1xuICAgIGNvbnN0IHNpemUgPSBvZmZzZXQgKyBkaWdlc3RTaXplO1xuICAgIGNvbnN0IG11bHRpaGFzaFNpemUgPSBzaXplIC0gcHJlZml4U2l6ZTtcbiAgICByZXR1cm4ge1xuICAgICAgdmVyc2lvbixcbiAgICAgIGNvZGVjLFxuICAgICAgbXVsdGloYXNoQ29kZSxcbiAgICAgIGRpZ2VzdFNpemUsXG4gICAgICBtdWx0aWhhc2hTaXplLFxuICAgICAgc2l6ZVxuICAgIH07XG4gIH1cbiAgc3RhdGljIHBhcnNlKHNvdXJjZSwgYmFzZSkge1xuICAgIGNvbnN0IFtwcmVmaXgsIGJ5dGVzXSA9IHBhcnNlQ0lEdG9CeXRlcyhzb3VyY2UsIGJhc2UpO1xuICAgIGNvbnN0IGNpZCA9IENJRC5kZWNvZGUoYnl0ZXMpO1xuICAgIGNpZC5fYmFzZUNhY2hlLnNldChwcmVmaXgsIHNvdXJjZSk7XG4gICAgcmV0dXJuIGNpZDtcbiAgfVxufVxuY29uc3QgcGFyc2VDSUR0b0J5dGVzID0gKHNvdXJjZSwgYmFzZSkgPT4ge1xuICBzd2l0Y2ggKHNvdXJjZVswXSkge1xuICBjYXNlICdRJzoge1xuICAgICAgY29uc3QgZGVjb2RlciA9IGJhc2UgfHwgYmFzZTU4LmJhc2U1OGJ0YztcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGJhc2U1OC5iYXNlNThidGMucHJlZml4LFxuICAgICAgICBkZWNvZGVyLmRlY29kZShgJHsgYmFzZTU4LmJhc2U1OGJ0Yy5wcmVmaXggfSR7IHNvdXJjZSB9YClcbiAgICAgIF07XG4gICAgfVxuICBjYXNlIGJhc2U1OC5iYXNlNThidGMucHJlZml4OiB7XG4gICAgICBjb25zdCBkZWNvZGVyID0gYmFzZSB8fCBiYXNlNTguYmFzZTU4YnRjO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgYmFzZTU4LmJhc2U1OGJ0Yy5wcmVmaXgsXG4gICAgICAgIGRlY29kZXIuZGVjb2RlKHNvdXJjZSlcbiAgICAgIF07XG4gICAgfVxuICBjYXNlIGJhc2UzMi5iYXNlMzIucHJlZml4OiB7XG4gICAgICBjb25zdCBkZWNvZGVyID0gYmFzZSB8fCBiYXNlMzIuYmFzZTMyO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgYmFzZTMyLmJhc2UzMi5wcmVmaXgsXG4gICAgICAgIGRlY29kZXIuZGVjb2RlKHNvdXJjZSlcbiAgICAgIF07XG4gICAgfVxuICBkZWZhdWx0OiB7XG4gICAgICBpZiAoYmFzZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdUbyBwYXJzZSBub24gYmFzZTMyIG9yIGJhc2U1OGJ0YyBlbmNvZGVkIENJRCBtdWx0aWJhc2UgZGVjb2RlciBtdXN0IGJlIHByb3ZpZGVkJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW1xuICAgICAgICBzb3VyY2VbMF0sXG4gICAgICAgIGJhc2UuZGVjb2RlKHNvdXJjZSlcbiAgICAgIF07XG4gICAgfVxuICB9XG59O1xuY29uc3QgdG9TdHJpbmdWMCA9IChieXRlcywgY2FjaGUsIGJhc2UpID0+IHtcbiAgY29uc3Qge3ByZWZpeH0gPSBiYXNlO1xuICBpZiAocHJlZml4ICE9PSBiYXNlNTguYmFzZTU4YnRjLnByZWZpeCkge1xuICAgIHRocm93IEVycm9yKGBDYW5ub3Qgc3RyaW5nIGVuY29kZSBWMCBpbiAkeyBiYXNlLm5hbWUgfSBlbmNvZGluZ2ApO1xuICB9XG4gIGNvbnN0IGNpZCA9IGNhY2hlLmdldChwcmVmaXgpO1xuICBpZiAoY2lkID09IG51bGwpIHtcbiAgICBjb25zdCBjaWQgPSBiYXNlLmVuY29kZShieXRlcykuc2xpY2UoMSk7XG4gICAgY2FjaGUuc2V0KHByZWZpeCwgY2lkKTtcbiAgICByZXR1cm4gY2lkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjaWQ7XG4gIH1cbn07XG5jb25zdCB0b1N0cmluZ1YxID0gKGJ5dGVzLCBjYWNoZSwgYmFzZSkgPT4ge1xuICBjb25zdCB7cHJlZml4fSA9IGJhc2U7XG4gIGNvbnN0IGNpZCA9IGNhY2hlLmdldChwcmVmaXgpO1xuICBpZiAoY2lkID09IG51bGwpIHtcbiAgICBjb25zdCBjaWQgPSBiYXNlLmVuY29kZShieXRlcyk7XG4gICAgY2FjaGUuc2V0KHByZWZpeCwgY2lkKTtcbiAgICByZXR1cm4gY2lkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjaWQ7XG4gIH1cbn07XG5jb25zdCBEQUdfUEJfQ09ERSA9IDExMjtcbmNvbnN0IFNIQV8yNTZfQ09ERSA9IDE4O1xuY29uc3QgZW5jb2RlQ0lEID0gKHZlcnNpb24sIGNvZGUsIG11bHRpaGFzaCkgPT4ge1xuICBjb25zdCBjb2RlT2Zmc2V0ID0gdmFyaW50LmVuY29kaW5nTGVuZ3RoKHZlcnNpb24pO1xuICBjb25zdCBoYXNoT2Zmc2V0ID0gY29kZU9mZnNldCArIHZhcmludC5lbmNvZGluZ0xlbmd0aChjb2RlKTtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShoYXNoT2Zmc2V0ICsgbXVsdGloYXNoLmJ5dGVMZW5ndGgpO1xuICB2YXJpbnQuZW5jb2RlVG8odmVyc2lvbiwgYnl0ZXMsIDApO1xuICB2YXJpbnQuZW5jb2RlVG8oY29kZSwgYnl0ZXMsIGNvZGVPZmZzZXQpO1xuICBieXRlcy5zZXQobXVsdGloYXNoLCBoYXNoT2Zmc2V0KTtcbiAgcmV0dXJuIGJ5dGVzO1xufTtcbmNvbnN0IGNpZFN5bWJvbCA9IFN5bWJvbC5mb3IoJ0BpcGxkL2pzLWNpZC9DSUQnKTtcbmNvbnN0IHJlYWRvbmx5ID0ge1xuICB3cml0YWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIGVudW1lcmFibGU6IHRydWVcbn07XG5jb25zdCBoaWRkZW4gPSB7XG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2Vcbn07XG5jb25zdCB2ZXJzaW9uID0gJzAuMC4wLWRldic7XG5jb25zdCBkZXByZWNhdGUgPSAocmFuZ2UsIG1lc3NhZ2UpID0+IHtcbiAgaWYgKHJhbmdlLnRlc3QodmVyc2lvbikpIHtcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59O1xuY29uc3QgSVNfQ0lEX0RFUFJFQ0FUSU9OID0gYENJRC5pc0NJRCh2KSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cbkZvbGxvd2luZyBjb2RlIHBhdHRlcm46XG5cbmlmIChDSUQuaXNDSUQodmFsdWUpKSB7XG4gIGRvU29tZXRoaW5nV2l0aENJRCh2YWx1ZSlcbn1cblxuSXMgcmVwbGFjZWQgd2l0aDpcblxuY29uc3QgY2lkID0gQ0lELmFzQ0lEKHZhbHVlKVxuaWYgKGNpZCkge1xuICAvLyBNYWtlIHN1cmUgdG8gdXNlIGNpZCBpbnN0ZWFkIG9mIHZhbHVlXG4gIGRvU29tZXRoaW5nV2l0aENJRChjaWQpXG59XG5gO1xuXG5leHBvcnRzLkNJRCA9IENJRDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGJ5dGVzID0gcmVxdWlyZSgnLi4vYnl0ZXMuanMnKTtcblxuY29uc3QgbmFtZSA9ICdyYXcnO1xuY29uc3QgY29kZSA9IDg1O1xuY29uc3QgZW5jb2RlID0gbm9kZSA9PiBieXRlcy5jb2VyY2Uobm9kZSk7XG5jb25zdCBkZWNvZGUgPSBkYXRhID0+IGJ5dGVzLmNvZXJjZShkYXRhKTtcblxuZXhwb3J0cy5jb2RlID0gY29kZTtcbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG5leHBvcnRzLm5hbWUgPSBuYW1lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgYnl0ZXMgPSByZXF1aXJlKCcuLi9ieXRlcy5qcycpO1xudmFyIHZhcmludCA9IHJlcXVpcmUoJy4uL3ZhcmludC5qcycpO1xuXG5jb25zdCBjcmVhdGUgPSAoY29kZSwgZGlnZXN0KSA9PiB7XG4gIGNvbnN0IHNpemUgPSBkaWdlc3QuYnl0ZUxlbmd0aDtcbiAgY29uc3Qgc2l6ZU9mZnNldCA9IHZhcmludC5lbmNvZGluZ0xlbmd0aChjb2RlKTtcbiAgY29uc3QgZGlnZXN0T2Zmc2V0ID0gc2l6ZU9mZnNldCArIHZhcmludC5lbmNvZGluZ0xlbmd0aChzaXplKTtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShkaWdlc3RPZmZzZXQgKyBzaXplKTtcbiAgdmFyaW50LmVuY29kZVRvKGNvZGUsIGJ5dGVzLCAwKTtcbiAgdmFyaW50LmVuY29kZVRvKHNpemUsIGJ5dGVzLCBzaXplT2Zmc2V0KTtcbiAgYnl0ZXMuc2V0KGRpZ2VzdCwgZGlnZXN0T2Zmc2V0KTtcbiAgcmV0dXJuIG5ldyBEaWdlc3QoY29kZSwgc2l6ZSwgZGlnZXN0LCBieXRlcyk7XG59O1xuY29uc3QgZGVjb2RlID0gbXVsdGloYXNoID0+IHtcbiAgY29uc3QgYnl0ZXMkMSA9IGJ5dGVzLmNvZXJjZShtdWx0aWhhc2gpO1xuICBjb25zdCBbY29kZSwgc2l6ZU9mZnNldF0gPSB2YXJpbnQuZGVjb2RlKGJ5dGVzJDEpO1xuICBjb25zdCBbc2l6ZSwgZGlnZXN0T2Zmc2V0XSA9IHZhcmludC5kZWNvZGUoYnl0ZXMkMS5zdWJhcnJheShzaXplT2Zmc2V0KSk7XG4gIGNvbnN0IGRpZ2VzdCA9IGJ5dGVzJDEuc3ViYXJyYXkoc2l6ZU9mZnNldCArIGRpZ2VzdE9mZnNldCk7XG4gIGlmIChkaWdlc3QuYnl0ZUxlbmd0aCAhPT0gc2l6ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0IGxlbmd0aCcpO1xuICB9XG4gIHJldHVybiBuZXcgRGlnZXN0KGNvZGUsIHNpemUsIGRpZ2VzdCwgYnl0ZXMkMSk7XG59O1xuY29uc3QgZXF1YWxzID0gKGEsIGIpID0+IHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYS5jb2RlID09PSBiLmNvZGUgJiYgYS5zaXplID09PSBiLnNpemUgJiYgYnl0ZXMuZXF1YWxzKGEuYnl0ZXMsIGIuYnl0ZXMpO1xuICB9XG59O1xuY2xhc3MgRGlnZXN0IHtcbiAgY29uc3RydWN0b3IoY29kZSwgc2l6ZSwgZGlnZXN0LCBieXRlcykge1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmRpZ2VzdCA9IGRpZ2VzdDtcbiAgICB0aGlzLmJ5dGVzID0gYnl0ZXM7XG4gIH1cbn1cblxuZXhwb3J0cy5EaWdlc3QgPSBEaWdlc3Q7XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuZXhwb3J0cy5lcXVhbHMgPSBlcXVhbHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBkaWdlc3QgPSByZXF1aXJlKCcuL2RpZ2VzdC5qcycpO1xuXG5jb25zdCBmcm9tID0gKHtuYW1lLCBjb2RlLCBlbmNvZGV9KSA9PiBuZXcgSGFzaGVyKG5hbWUsIGNvZGUsIGVuY29kZSk7XG5jbGFzcyBIYXNoZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBjb2RlLCBlbmNvZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5lbmNvZGUgPSBlbmNvZGU7XG4gIH1cbiAgYXN5bmMgZGlnZXN0KGlucHV0KSB7XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgY29uc3QgZGlnZXN0JDEgPSBhd2FpdCB0aGlzLmVuY29kZShpbnB1dCk7XG4gICAgICByZXR1cm4gZGlnZXN0LmNyZWF0ZSh0aGlzLmNvZGUsIGRpZ2VzdCQxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ1Vua25vd24gdHlwZSwgbXVzdCBiZSBiaW5hcnkgdHlwZScpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLkhhc2hlciA9IEhhc2hlcjtcbmV4cG9ydHMuZnJvbSA9IGZyb207XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjaWQgPSByZXF1aXJlKCcuL2NpZC5qcycpO1xudmFyIHZhcmludCA9IHJlcXVpcmUoJy4vdmFyaW50LmpzJyk7XG52YXIgYnl0ZXMgPSByZXF1aXJlKCcuL2J5dGVzLmpzJyk7XG52YXIgaGFzaGVyID0gcmVxdWlyZSgnLi9oYXNoZXMvaGFzaGVyLmpzJyk7XG52YXIgZGlnZXN0ID0gcmVxdWlyZSgnLi9oYXNoZXMvZGlnZXN0LmpzJyk7XG5cblxuXG5leHBvcnRzLkNJRCA9IGNpZC5DSUQ7XG5leHBvcnRzLnZhcmludCA9IHZhcmludDtcbmV4cG9ydHMuYnl0ZXMgPSBieXRlcztcbmV4cG9ydHMuaGFzaGVyID0gaGFzaGVyO1xuZXhwb3J0cy5kaWdlc3QgPSBkaWdlc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB2YXJpbnQkMSA9IHJlcXVpcmUoJy4uL3ZlbmRvci92YXJpbnQuanMnKTtcblxuY29uc3QgZGVjb2RlID0gZGF0YSA9PiB7XG4gIGNvbnN0IGNvZGUgPSB2YXJpbnQkMS5kZWNvZGUoZGF0YSk7XG4gIHJldHVybiBbXG4gICAgY29kZSxcbiAgICB2YXJpbnQkMS5kZWNvZGUuYnl0ZXNcbiAgXTtcbn07XG5jb25zdCBlbmNvZGVUbyA9IChpbnQsIHRhcmdldCwgb2Zmc2V0ID0gMCkgPT4ge1xuICB2YXJpbnQkMS5lbmNvZGUoaW50LCB0YXJnZXQsIG9mZnNldCk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuY29uc3QgZW5jb2RpbmdMZW5ndGggPSBpbnQgPT4ge1xuICByZXR1cm4gdmFyaW50JDEuZW5jb2RpbmdMZW5ndGgoaW50KTtcbn07XG5cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuZXhwb3J0cy5lbmNvZGVUbyA9IGVuY29kZVRvO1xuZXhwb3J0cy5lbmNvZGluZ0xlbmd0aCA9IGVuY29kaW5nTGVuZ3RoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBiYXNlKEFMUEhBQkVULCBuYW1lKSB7XG4gIGlmIChBTFBIQUJFVC5sZW5ndGggPj0gMjU1KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxwaGFiZXQgdG9vIGxvbmcnKTtcbiAgfVxuICB2YXIgQkFTRV9NQVAgPSBuZXcgVWludDhBcnJheSgyNTYpO1xuICBmb3IgKHZhciBqID0gMDsgaiA8IEJBU0VfTUFQLmxlbmd0aDsgaisrKSB7XG4gICAgQkFTRV9NQVBbal0gPSAyNTU7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBBTFBIQUJFVC5sZW5ndGg7IGkrKykge1xuICAgIHZhciB4ID0gQUxQSEFCRVQuY2hhckF0KGkpO1xuICAgIHZhciB4YyA9IHguY2hhckNvZGVBdCgwKTtcbiAgICBpZiAoQkFTRV9NQVBbeGNdICE9PSAyNTUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoeCArICcgaXMgYW1iaWd1b3VzJyk7XG4gICAgfVxuICAgIEJBU0VfTUFQW3hjXSA9IGk7XG4gIH1cbiAgdmFyIEJBU0UgPSBBTFBIQUJFVC5sZW5ndGg7XG4gIHZhciBMRUFERVIgPSBBTFBIQUJFVC5jaGFyQXQoMCk7XG4gIHZhciBGQUNUT1IgPSBNYXRoLmxvZyhCQVNFKSAvIE1hdGgubG9nKDI1Nik7XG4gIHZhciBpRkFDVE9SID0gTWF0aC5sb2coMjU2KSAvIE1hdGgubG9nKEJBU0UpO1xuICBmdW5jdGlvbiBlbmNvZGUoc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpO1xuICAgIGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhzb3VyY2UpKSB7XG4gICAgICBzb3VyY2UgPSBuZXcgVWludDhBcnJheShzb3VyY2UuYnVmZmVyLCBzb3VyY2UuYnl0ZU9mZnNldCwgc291cmNlLmJ5dGVMZW5ndGgpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICBzb3VyY2UgPSBVaW50OEFycmF5LmZyb20oc291cmNlKTtcbiAgICB9XG4gICAgaWYgKCEoc291cmNlIGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFVpbnQ4QXJyYXknKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHplcm9lcyA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIHBiZWdpbiA9IDA7XG4gICAgdmFyIHBlbmQgPSBzb3VyY2UubGVuZ3RoO1xuICAgIHdoaWxlIChwYmVnaW4gIT09IHBlbmQgJiYgc291cmNlW3BiZWdpbl0gPT09IDApIHtcbiAgICAgIHBiZWdpbisrO1xuICAgICAgemVyb2VzKys7XG4gICAgfVxuICAgIHZhciBzaXplID0gKHBlbmQgLSBwYmVnaW4pICogaUZBQ1RPUiArIDEgPj4+IDA7XG4gICAgdmFyIGI1OCA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICAgIHdoaWxlIChwYmVnaW4gIT09IHBlbmQpIHtcbiAgICAgIHZhciBjYXJyeSA9IHNvdXJjZVtwYmVnaW5dO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgZm9yICh2YXIgaXQxID0gc2l6ZSAtIDE7IChjYXJyeSAhPT0gMCB8fCBpIDwgbGVuZ3RoKSAmJiBpdDEgIT09IC0xOyBpdDEtLSwgaSsrKSB7XG4gICAgICAgIGNhcnJ5ICs9IDI1NiAqIGI1OFtpdDFdID4+PiAwO1xuICAgICAgICBiNThbaXQxXSA9IGNhcnJ5ICUgQkFTRSA+Pj4gMDtcbiAgICAgICAgY2FycnkgPSBjYXJyeSAvIEJBU0UgPj4+IDA7XG4gICAgICB9XG4gICAgICBpZiAoY2FycnkgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb24temVybyBjYXJyeScpO1xuICAgICAgfVxuICAgICAgbGVuZ3RoID0gaTtcbiAgICAgIHBiZWdpbisrO1xuICAgIH1cbiAgICB2YXIgaXQyID0gc2l6ZSAtIGxlbmd0aDtcbiAgICB3aGlsZSAoaXQyICE9PSBzaXplICYmIGI1OFtpdDJdID09PSAwKSB7XG4gICAgICBpdDIrKztcbiAgICB9XG4gICAgdmFyIHN0ciA9IExFQURFUi5yZXBlYXQoemVyb2VzKTtcbiAgICBmb3IgKDsgaXQyIDwgc2l6ZTsgKytpdDIpIHtcbiAgICAgIHN0ciArPSBBTFBIQUJFVC5jaGFyQXQoYjU4W2l0Ml0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIGZ1bmN0aW9uIGRlY29kZVVuc2FmZShzb3VyY2UpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFN0cmluZycpO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KCk7XG4gICAgfVxuICAgIHZhciBwc3ogPSAwO1xuICAgIGlmIChzb3VyY2VbcHN6XSA9PT0gJyAnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB6ZXJvZXMgPSAwO1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHdoaWxlIChzb3VyY2VbcHN6XSA9PT0gTEVBREVSKSB7XG4gICAgICB6ZXJvZXMrKztcbiAgICAgIHBzeisrO1xuICAgIH1cbiAgICB2YXIgc2l6ZSA9IChzb3VyY2UubGVuZ3RoIC0gcHN6KSAqIEZBQ1RPUiArIDEgPj4+IDA7XG4gICAgdmFyIGIyNTYgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgICB3aGlsZSAoc291cmNlW3Bzel0pIHtcbiAgICAgIHZhciBjYXJyeSA9IEJBU0VfTUFQW3NvdXJjZS5jaGFyQ29kZUF0KHBzeildO1xuICAgICAgaWYgKGNhcnJ5ID09PSAyNTUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSAwO1xuICAgICAgZm9yICh2YXIgaXQzID0gc2l6ZSAtIDE7IChjYXJyeSAhPT0gMCB8fCBpIDwgbGVuZ3RoKSAmJiBpdDMgIT09IC0xOyBpdDMtLSwgaSsrKSB7XG4gICAgICAgIGNhcnJ5ICs9IEJBU0UgKiBiMjU2W2l0M10gPj4+IDA7XG4gICAgICAgIGIyNTZbaXQzXSA9IGNhcnJ5ICUgMjU2ID4+PiAwO1xuICAgICAgICBjYXJyeSA9IGNhcnJ5IC8gMjU2ID4+PiAwO1xuICAgICAgfVxuICAgICAgaWYgKGNhcnJ5ICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm9uLXplcm8gY2FycnknKTtcbiAgICAgIH1cbiAgICAgIGxlbmd0aCA9IGk7XG4gICAgICBwc3orKztcbiAgICB9XG4gICAgaWYgKHNvdXJjZVtwc3pdID09PSAnICcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGl0NCA9IHNpemUgLSBsZW5ndGg7XG4gICAgd2hpbGUgKGl0NCAhPT0gc2l6ZSAmJiBiMjU2W2l0NF0gPT09IDApIHtcbiAgICAgIGl0NCsrO1xuICAgIH1cbiAgICB2YXIgdmNoID0gbmV3IFVpbnQ4QXJyYXkoemVyb2VzICsgKHNpemUgLSBpdDQpKTtcbiAgICB2YXIgaiA9IHplcm9lcztcbiAgICB3aGlsZSAoaXQ0ICE9PSBzaXplKSB7XG4gICAgICB2Y2hbaisrXSA9IGIyNTZbaXQ0KytdO1xuICAgIH1cbiAgICByZXR1cm4gdmNoO1xuICB9XG4gIGZ1bmN0aW9uIGRlY29kZShzdHJpbmcpIHtcbiAgICB2YXIgYnVmZmVyID0gZGVjb2RlVW5zYWZlKHN0cmluZyk7XG4gICAgaWYgKGJ1ZmZlcikge1xuICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb24tJHsgbmFtZSB9IGNoYXJhY3RlcmApO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgZGVjb2RlVW5zYWZlOiBkZWNvZGVVbnNhZmUsXG4gICAgZGVjb2RlOiBkZWNvZGVcbiAgfTtcbn1cbnZhciBzcmMgPSBiYXNlO1xudmFyIF9icnJwX19tdWx0aWZvcm1hdHNfc2NvcGVfYmFzZVggPSBzcmM7XG5cbm1vZHVsZS5leHBvcnRzID0gX2JycnBfX211bHRpZm9ybWF0c19zY29wZV9iYXNlWDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuY29kZV8xID0gZW5jb2RlO1xudmFyIE1TQiA9IDEyOCwgUkVTVCA9IDEyNywgTVNCQUxMID0gflJFU1QsIElOVCA9IE1hdGgucG93KDIsIDMxKTtcbmZ1bmN0aW9uIGVuY29kZShudW0sIG91dCwgb2Zmc2V0KSB7XG4gIG91dCA9IG91dCB8fCBbXTtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBvbGRPZmZzZXQgPSBvZmZzZXQ7XG4gIHdoaWxlIChudW0gPj0gSU5UKSB7XG4gICAgb3V0W29mZnNldCsrXSA9IG51bSAmIDI1NSB8IE1TQjtcbiAgICBudW0gLz0gMTI4O1xuICB9XG4gIHdoaWxlIChudW0gJiBNU0JBTEwpIHtcbiAgICBvdXRbb2Zmc2V0KytdID0gbnVtICYgMjU1IHwgTVNCO1xuICAgIG51bSA+Pj49IDc7XG4gIH1cbiAgb3V0W29mZnNldF0gPSBudW0gfCAwO1xuICBlbmNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXQgKyAxO1xuICByZXR1cm4gb3V0O1xufVxudmFyIGRlY29kZSA9IHJlYWQ7XG52YXIgTVNCJDEgPSAxMjgsIFJFU1QkMSA9IDEyNztcbmZ1bmN0aW9uIHJlYWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIHJlcyA9IDAsIG9mZnNldCA9IG9mZnNldCB8fCAwLCBzaGlmdCA9IDAsIGNvdW50ZXIgPSBvZmZzZXQsIGIsIGwgPSBidWYubGVuZ3RoO1xuICBkbyB7XG4gICAgaWYgKGNvdW50ZXIgPj0gbCkge1xuICAgICAgcmVhZC5ieXRlcyA9IDA7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ291bGQgbm90IGRlY29kZSB2YXJpbnQnKTtcbiAgICB9XG4gICAgYiA9IGJ1Zltjb3VudGVyKytdO1xuICAgIHJlcyArPSBzaGlmdCA8IDI4ID8gKGIgJiBSRVNUJDEpIDw8IHNoaWZ0IDogKGIgJiBSRVNUJDEpICogTWF0aC5wb3coMiwgc2hpZnQpO1xuICAgIHNoaWZ0ICs9IDc7XG4gIH0gd2hpbGUgKGIgPj0gTVNCJDEpO1xuICByZWFkLmJ5dGVzID0gY291bnRlciAtIG9mZnNldDtcbiAgcmV0dXJuIHJlcztcbn1cbnZhciBOMSA9IE1hdGgucG93KDIsIDcpO1xudmFyIE4yID0gTWF0aC5wb3coMiwgMTQpO1xudmFyIE4zID0gTWF0aC5wb3coMiwgMjEpO1xudmFyIE40ID0gTWF0aC5wb3coMiwgMjgpO1xudmFyIE41ID0gTWF0aC5wb3coMiwgMzUpO1xudmFyIE42ID0gTWF0aC5wb3coMiwgNDIpO1xudmFyIE43ID0gTWF0aC5wb3coMiwgNDkpO1xudmFyIE44ID0gTWF0aC5wb3coMiwgNTYpO1xudmFyIE45ID0gTWF0aC5wb3coMiwgNjMpO1xudmFyIGxlbmd0aCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCBOMSA/IDEgOiB2YWx1ZSA8IE4yID8gMiA6IHZhbHVlIDwgTjMgPyAzIDogdmFsdWUgPCBONCA/IDQgOiB2YWx1ZSA8IE41ID8gNSA6IHZhbHVlIDwgTjYgPyA2IDogdmFsdWUgPCBONyA/IDcgOiB2YWx1ZSA8IE44ID8gOCA6IHZhbHVlIDwgTjkgPyA5IDogMTA7XG59O1xudmFyIHZhcmludCA9IHtcbiAgZW5jb2RlOiBlbmNvZGVfMSxcbiAgZGVjb2RlOiBkZWNvZGUsXG4gIGVuY29kaW5nTGVuZ3RoOiBsZW5ndGhcbn07XG52YXIgX2JycnBfdmFyaW50ID0gdmFyaW50O1xudmFyIHZhcmludCQxID0gX2JycnBfdmFyaW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhcmludCQxO1xuIiwiZXhwb3J0IGNvbnN0IEdBVEVXQVkgPSBuZXcgVVJMKCdodHRwczovL2R3ZWIubGluay8nKVxuXG4vKipcbiAqIEB0eXBlZGVmIHtzdHJpbmd8VVJMfSBHYXRld2F5VVJMIEJhc2UgVVJMIG9mIGFuIElQRlMgR2F0ZXdheSBlLmcuIGh0dHBzOi8vZHdlYi5saW5rLyBvciBodHRwczovL2lwZnMuaW8vXG4gKiBAdHlwZWRlZiB7eyBnYXRld2F5PzogR2F0ZXdheVVSTCB9fSBHYXRld2F5VVJMT3B0aW9uc1xuICovXG5cbi8qKlxuICogQ29udmVydCBhbiBJUEZTIFVSTCAoc3RhcnRpbmcgaXBmczovLykgdG8gYSBnYXRld2F5IFVSTCAoc3RhcnRpbmcgaHR0cHM6Ly8pXG4gKiB0aGF0IGNhbiBiZSB1c2VkIGluIGEgd2VicGFnZS4gSWYgdGhlIHBhc3NlZCBVUkwgaXMgbm90IGFuIElQRlMgVVJMIGl0IGlzXG4gKiByZXR1cm5lZCBhcyBhIG5ldyBVUkwgb2JqZWN0IHdpdGggbm8gZnVydGhlciBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFVSTH0gdXJsIEFuIElQRlMgVVJMIGUuZy4gaXBmczovL2JhZnkuLi4vcGF0aFxuICogQHBhcmFtIHtHYXRld2F5VVJMT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgdGhhdCBhbGxvdyBjdXN0b21pemF0aW9uIG9mIHRoZSBnYXRld2F5IHVzZWQuXG4gKiBAcmV0dXJucyB7VVJMfSBBbiBJUEZTIGdhdGV3YXkgVVJMIGUuZy4gaHR0cHM6Ly9kd2ViLmxpbmsvaXBmcy9iYWZ5Li4uL3BhdGhcbiAqL1xuZXhwb3J0IGNvbnN0IHRvR2F0ZXdheVVSTCA9ICh1cmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBnYXRld2F5ID0gb3B0aW9ucy5nYXRld2F5IHx8IEdBVEVXQVlcbiAgdXJsID0gbmV3IFVSTChTdHJpbmcodXJsKSlcbiAgcmV0dXJuIHVybC5wcm90b2NvbCA9PT0gJ2lwZnM6J1xuICAgID8gbmV3IFVSTChgL2lwZnMvJHt1cmwuaHJlZi5zbGljZSgnaXBmczovLycubGVuZ3RoKX1gLCBnYXRld2F5KVxuICAgIDogdXJsXG59XG4iLCIvKipcbiAqIEEgY2xpZW50IGxpYnJhcnkgZm9yIHRoZSBodHRwczovL25mdC5zdG9yYWdlLyBzZXJ2aWNlLiBJdCBwcm92aWRlcyBhIGNvbnZlbmllbnRcbiAqIGludGVyZmFjZSBmb3Igd29ya2luZyB3aXRoIHRoZSBbUmF3IEhUVFAgQVBJXShodHRwczovL25mdC5zdG9yYWdlLyNhcGktZG9jcylcbiAqIGZyb20gYSB3ZWIgYnJvd3NlciBvciBbTm9kZS5qc10oaHR0cHM6Ly9ub2RlanMub3JnLykgYW5kIGNvbWVzIGJ1bmRsZWQgd2l0aFxuICogVFMgZm9yIG91dC1vZi10aGUgYm94IHR5cGUgaW5mZXJlbmNlIGFuZCBiZXR0ZXIgSW50ZWxsaVNlbnNlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgTkZUU3RvcmFnZSwgRmlsZSwgQmxvYiB9IGZyb20gXCJuZnQuc3RvcmFnZVwiXG4gKiBjb25zdCBjbGllbnQgPSBuZXcgTkZUU3RvcmFnZSh7IHRva2VuOiBBUElfVE9LRU4gfSlcbiAqXG4gKiBjb25zdCBjaWQgPSBhd2FpdCBjbGllbnQuc3RvcmVCbG9iKG5ldyBCbG9iKFsnaGVsbG8gd29ybGQnXSkpXG4gKiBgYGBcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdzdHJlYW1pbmctaXRlcmFibGVzJ1xuaW1wb3J0IHBSZXRyeSBmcm9tICdwLXJldHJ5J1xuaW1wb3J0IHsgVHJlZXdhbGtDYXJTcGxpdHRlciB9IGZyb20gJ2NhcmJpdGVzL3RyZWV3YWxrJ1xuaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vbGliL2ludGVyZmFjZS5qcydcbmltcG9ydCAqIGFzIFRva2VuIGZyb20gJy4vdG9rZW4uanMnXG5pbXBvcnQgeyBmZXRjaCwgRmlsZSwgQmxvYiwgRm9ybURhdGEgfSBmcm9tICcuL3BsYXRmb3JtLmpzJ1xuaW1wb3J0IHsgdG9HYXRld2F5VVJMIH0gZnJvbSAnLi9nYXRld2F5LmpzJ1xuXG5jb25zdCBNQVhfU1RPUkVfUkVUUklFUyA9IDVcbmNvbnN0IE1BWF9DT05DVVJSRU5UX1VQTE9BRFMgPSAzXG5jb25zdCBNQVhfQ0hVTktfU0laRSA9IDEwMjQgKiAxMDI0ICogMTAgLy8gY2h1bmsgdG8gfjEwTUIgQ0FSc1xuXG4vKipcbiAqIEBpbXBsZW1lbnRzIEFQSS5TZXJ2aWNlXG4gKi9cbmNsYXNzIE5GVFN0b3JhZ2Uge1xuICAvKipcbiAgICogQ29uc3RydWN0cyBhIGNsaWVudCBib3VuZCB0byB0aGUgZ2l2ZW4gYG9wdGlvbnMudG9rZW5gIGFuZFxuICAgKiBgb3B0aW9ucy5lbmRwb2ludGAuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGltcG9ydCB7IE5GVFN0b3JhZ2UsIEZpbGUsIEJsb2IgfSBmcm9tIFwibmZ0LnN0b3JhZ2VcIlxuICAgKiBjb25zdCBjbGllbnQgPSBuZXcgTkZUU3RvcmFnZSh7IHRva2VuOiBBUElfVE9LRU4gfSlcbiAgICpcbiAgICogY29uc3QgY2lkID0gYXdhaXQgY2xpZW50LnN0b3JlQmxvYihuZXcgQmxvYihbJ2hlbGxvIHdvcmxkJ10pKVxuICAgKiBgYGBcbiAgICogT3B0aW9uYWxseSB5b3UgY291bGQgcGFzcyBhbiBhbHRlcm5hdGl2ZSBBUEkgZW5kcG9pbnQgKGUuZy4gZm9yIHRlc3RpbmcpXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGltcG9ydCB7IE5GVFN0b3JhZ2UgfSBmcm9tIFwibmZ0LnN0b3JhZ2VcIlxuICAgKiBjb25zdCBjbGllbnQgPSBuZXcgTkZUU3RvcmFnZSh7XG4gICAqICAgdG9rZW46IEFQSV9UT0tFTlxuICAgKiAgIGVuZHBvaW50OiBuZXcgVVJMKCdodHRwOi8vbG9jYWxob3N0OjgwODAvJylcbiAgICogfSlcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7e3Rva2VuOiBzdHJpbmcsIGVuZHBvaW50PzpVUkx9fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHRva2VuLCBlbmRwb2ludCA9IG5ldyBVUkwoJ2h0dHBzOi8vYXBpLm5mdC5zdG9yYWdlJykgfSkge1xuICAgIC8qKlxuICAgICAqIEF1dGhvcml6YXRpb24gdG9rZW4uXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLnRva2VuID0gdG9rZW5cbiAgICAvKipcbiAgICAgKiBTZXJ2aWNlIEFQSSBlbmRwb2ludCBgVVJMYC5cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICB0aGlzLmVuZHBvaW50ID0gZW5kcG9pbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblxuICAgKi9cbiAgc3RhdGljIGF1dGgodG9rZW4pIHtcbiAgICBpZiAoIXRva2VuKSB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgdG9rZW4nKVxuICAgIHJldHVybiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH1cbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtBUEkuU2VydmljZX0gc2VydmljZVxuICAgKiBAcGFyYW0ge0Jsb2J9IGJsb2JcbiAgICogQHJldHVybnMge1Byb21pc2U8QVBJLkNJRFN0cmluZz59XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgc3RvcmVCbG9iKHsgZW5kcG9pbnQsIHRva2VuIH0sIGJsb2IpIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKCcvdXBsb2FkJywgZW5kcG9pbnQpXG5cbiAgICBpZiAoYmxvYi5zaXplID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRlbnQgc2l6ZSBpcyAwLCBtYWtlIHN1cmUgdG8gcHJvdmlkZSBzb21lIGNvbnRlbnQnKVxuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiBORlRTdG9yYWdlLmF1dGgodG9rZW4pLFxuICAgICAgYm9keTogYmxvYixcbiAgICB9KVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG5cbiAgICBpZiAocmVzdWx0Lm9rKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LnZhbHVlLmNpZFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0LmVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0FQSS5TZXJ2aWNlfSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7QmxvYnxBUEkuQ2FyUmVhZGVyfSBjYXJcbiAgICogQHBhcmFtIHt7b25TdG9yZWRDaHVuaz86IChzaXplOiBudW1iZXIpID0+IHZvaWR9fSBbb3B0aW9uc11cbiAgICogQHJldHVybnMge1Byb21pc2U8QVBJLkNJRFN0cmluZz59XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgc3RvcmVDYXIoeyBlbmRwb2ludCwgdG9rZW4gfSwgY2FyLCB7IG9uU3RvcmVkQ2h1bmsgfSA9IHt9KSB7XG4gICAgY29uc3QgdGFyZ2V0U2l6ZSA9IE1BWF9DSFVOS19TSVpFXG4gICAgY29uc3Qgc3BsaXR0ZXIgPVxuICAgICAgY2FyIGluc3RhbmNlb2YgQmxvYlxuICAgICAgICA/IGF3YWl0IFRyZWV3YWxrQ2FyU3BsaXR0ZXIuZnJvbUJsb2IoY2FyLCB0YXJnZXRTaXplKVxuICAgICAgICA6IG5ldyBUcmVld2Fsa0NhclNwbGl0dGVyKGNhciwgdGFyZ2V0U2l6ZSlcblxuICAgIGNvbnN0IHVwbG9hZCA9IHRyYW5zZm9ybShcbiAgICAgIE1BWF9DT05DVVJSRU5UX1VQTE9BRFMsXG4gICAgICBhc3luYyBmdW5jdGlvbiAoLyoqIEB0eXBlIHtBc3luY0l0ZXJhYmxlPFVpbnQ4QXJyYXk+fSAqLyBjYXIpIHtcbiAgICAgICAgY29uc3QgY2FyUGFydHMgPSBbXVxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IHBhcnQgb2YgY2FyKSB7XG4gICAgICAgICAgY2FyUGFydHMucHVzaChwYXJ0KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhckZpbGUgPSBuZXcgQmxvYihjYXJQYXJ0cywge1xuICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9jYXInLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwUmV0cnkoXG4gICAgICAgICAgKCkgPT4gTkZUU3RvcmFnZS5zdG9yZUJsb2IoeyBlbmRwb2ludCwgdG9rZW4gfSwgY2FyRmlsZSksXG4gICAgICAgICAgeyByZXRyaWVzOiBNQVhfU1RPUkVfUkVUUklFUyB9XG4gICAgICAgIClcbiAgICAgICAgb25TdG9yZWRDaHVuayAmJiBvblN0b3JlZENodW5rKGNhckZpbGUuc2l6ZSlcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgfVxuICAgIClcblxuICAgIGxldCByb290XG4gICAgZm9yIGF3YWl0IChjb25zdCBjaWQgb2YgdXBsb2FkKHNwbGl0dGVyLmNhcnMoKSkpIHtcbiAgICAgIHJvb3QgPSBjaWRcbiAgICB9XG5cbiAgICByZXR1cm4gLyoqIEB0eXBlIHtBUEkuQ0lEU3RyaW5nfSAqLyAocm9vdClcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtBUEkuU2VydmljZX0gc2VydmljZVxuICAgKiBAcGFyYW0ge0l0ZXJhYmxlPEZpbGU+fSBmaWxlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBUEkuQ0lEU3RyaW5nPn1cbiAgICovXG4gIHN0YXRpYyBhc3luYyBzdG9yZURpcmVjdG9yeSh7IGVuZHBvaW50LCB0b2tlbiB9LCBmaWxlcykge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJy91cGxvYWQnLCBlbmRwb2ludClcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKClcbiAgICBsZXQgc2l6ZSA9IDBcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGJvZHkuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKVxuICAgICAgc2l6ZSArPSBmaWxlLnNpemVcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVG90YWwgc2l6ZSBvZiBmaWxlcyBzaG91bGQgZXhjZWVkIDAsIG1ha2Ugc3VyZSB0byBwcm92aWRlIHNvbWUgY29udGVudCdcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IE5GVFN0b3JhZ2UuYXV0aCh0b2tlbiksXG4gICAgICBib2R5LFxuICAgIH0pXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzdWx0Lm9rKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LnZhbHVlLmNpZFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0LmVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSB7QVBJLlRva2VuSW5wdXR9IFRcbiAgICogQHBhcmFtIHtBUEkuU2VydmljZX0gc2VydmljZVxuICAgKiBAcGFyYW0ge1R9IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFQSS5Ub2tlbjxUPj59XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgc3RvcmUoeyBlbmRwb2ludCwgdG9rZW4gfSwgbWV0YWRhdGEpIHtcbiAgICB2YWxpZGF0ZUVSQzExNTUobWV0YWRhdGEpXG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAvc3RvcmVgLCBlbmRwb2ludClcbiAgICBjb25zdCBib2R5ID0gVG9rZW4uZW5jb2RlKG1ldGFkYXRhKVxuICAgIGNvbnN0IHBhdGhzID0gbmV3IFNldChib2R5LmtleXMoKSlcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogTkZUU3RvcmFnZS5hdXRoKHRva2VuKSxcbiAgICAgIGJvZHksXG4gICAgfSlcblxuICAgIC8qKiBAdHlwZSB7QVBJLlN0b3JlUmVzcG9uc2U8VD59ICovXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzdWx0Lm9rID09PSB0cnVlKSB7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSByZXN1bHRcbiAgICAgIHJldHVybiBUb2tlbi5kZWNvZGUodmFsdWUsIHBhdGhzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0LmVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0FQSS5TZXJ2aWNlfSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaWRcbiAgICogQHJldHVybnMge1Byb21pc2U8QVBJLlN0YXR1c1Jlc3VsdD59XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgc3RhdHVzKHsgZW5kcG9pbnQsIHRva2VuIH0sIGNpZCkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYC8ke2NpZH1gLCBlbmRwb2ludClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczogTkZUU3RvcmFnZS5hdXRoKHRva2VuKSxcbiAgICB9KVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3VsdC5vaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2lkOiByZXN1bHQudmFsdWUuY2lkLFxuICAgICAgICBkZWFsczogZGVjb2RlRGVhbHMocmVzdWx0LnZhbHVlLmRlYWxzKSxcbiAgICAgICAgc2l6ZTogcmVzdWx0LnZhbHVlLnNpemUsXG4gICAgICAgIHBpbjogZGVjb2RlUGluKHJlc3VsdC52YWx1ZS5waW4pLFxuICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZShyZXN1bHQudmFsdWUuY3JlYXRlZCksXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBUEkuUHVibGljU2VydmljZX0gc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2lkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFQSS5DaGVja1Jlc3VsdD59XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgY2hlY2soeyBlbmRwb2ludCB9LCBjaWQpIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAvY2hlY2svJHtjaWR9YCwgZW5kcG9pbnQpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSlcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChyZXN1bHQub2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNpZDogcmVzdWx0LnZhbHVlLmNpZCxcbiAgICAgICAgZGVhbHM6IGRlY29kZURlYWxzKHJlc3VsdC52YWx1ZS5kZWFscyksXG4gICAgICAgIHBpbjogcmVzdWx0LnZhbHVlLnBpbixcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5lcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FQSS5TZXJ2aWNlfSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaWRcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZGVsZXRlKHsgZW5kcG9pbnQsIHRva2VuIH0sIGNpZCkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYC8ke2NpZH1gLCBlbmRwb2ludClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczogTkZUU3RvcmFnZS5hdXRoKHRva2VuKSxcbiAgICB9KVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGlmICghcmVzdWx0Lm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0LmVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhIHN1Z2FyIHNvIHlvdSBkb24ndCBoYXZlIHRvIHBhc3MgYXJvdW5kIGVuZHBvaW50IGFuZCB0b2tlbiBhcm91bmQuXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhIHNpbmdsZSBmaWxlIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIENvbnRlbnQgSWRlbnRpZmllciAoQ0lEKS5cbiAgICogVGFrZXMgYSBbQmxvYl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Jsb2IvQmxvYilcbiAgICogb3IgYSBbRmlsZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGUpLiBOb3RlXG4gICAqIHRoYXQgbm8gZmlsZSBuYW1lIG9yIGZpbGUgbWV0YWRhdGEgaXMgcmV0YWluZWQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGNvbnRlbnQgPSBuZXcgQmxvYihbJ2hlbGxvIHdvcmxkJ10pXG4gICAqIGNvbnN0IGNpZCA9IGF3YWl0IGNsaWVudC5zdG9yZUJsb2IoY29udGVudClcbiAgICogY2lkIC8vPiAnemRqN1duOUZRQVVSQ1A2TWJ3Y1d1emk3dTY1a0FzWENkak5Ua2hiSmNvYVhCdXNxOSdcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7QmxvYn0gYmxvYlxuICAgKi9cbiAgc3RvcmVCbG9iKGJsb2IpIHtcbiAgICByZXR1cm4gTkZUU3RvcmFnZS5zdG9yZUJsb2IodGhpcywgYmxvYilcbiAgfVxuICAvKipcbiAgICogU3RvcmVzIGZpbGVzIGVuY29kZWQgYXMgYSBzaW5nbGUgW0NvbnRlbnQgQWRkcmVzc2VkIEFyY2hpdmVcbiAgICogKENBUildKGh0dHBzOi8vZ2l0aHViLmNvbS9pcGxkL3NwZWNzL2Jsb2IvbWFzdGVyL2Jsb2NrLWxheWVyL2NvbnRlbnQtYWRkcmVzc2FibGUtYXJjaGl2ZXMubWQpLlxuICAgKlxuICAgKiBUYWtlcyBhIFtCbG9iXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQmxvYi9CbG9iKVxuICAgKiBvciBhIFtGaWxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZSkuXG4gICAqXG4gICAqIFJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgQ29udGVudCBJZGVudGlmaWVyIChDSUQpLlxuICAgKlxuICAgKiBTZWUgdGhlIFtgaXBmcy1jYXJgIGRvY3NdKGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2lwZnMtY2FyKSBmb3IgbW9yZVxuICAgKiBkZXRhaWxzIG9uIHBhY2tpbmcgYSBDQVIgZmlsZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogaW1wb3J0IHsgcGFjayB9IGZyb20gJ2lwZnMtY2FyL3BhY2snXG4gICAqIGltcG9ydCB7IENhclJlYWRlciB9IGZyb20gJ0BpcGxkL2NhcidcbiAgICogY29uc3QgeyBvdXQsIHJvb3QgfSA9IGF3YWl0IHBhY2soe1xuICAgKiAgaW5wdXQ6IGZzLmNyZWF0ZVJlYWRTdHJlYW0oJ3BpbnBpZS5wZGYnKVxuICAgKiB9KVxuICAgKiBjb25zdCBleHBlY3RlZENpZCA9IHJvb3QudG9TdHJpbmcoKVxuICAgKiBjb25zdCBjYXJSZWFkZXIgPSBhd2FpdCBDYXJSZWFkZXIuZnJvbUl0ZXJhYmxlKG91dClcbiAgICogY29uc3QgY2lkID0gYXdhaXQgc3RvcmFnZS5zdG9yZUNhcihjYXJSZWFkZXIpXG4gICAqIGNvbnNvbGUuYXNzZXJ0KGNpZCA9PT0gZXhwZWN0ZWRDaWQpXG4gICAqIGBgYFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBcbiAgICogaW1wb3J0IHsgcGFja1RvQmxvYiB9IGZyb20gJ2lwZnMtY2FyL3BhY2svYmxvYidcbiAgICogY29uc3QgZGF0YSA9ICdIZWxsbyB3b3JsZCdcbiAgICogY29uc3QgeyByb290LCBjYXIgfSA9IGF3YWl0IHBhY2tUb0Jsb2IoeyBpbnB1dDogW25ldyBUZXh0RW5jb2RlcigpLmVuY29kZShkYXRhKV0gfSlcbiAgICogY29uc3QgZXhwZWN0ZWRDaWQgPSByb290LnRvU3RyaW5nKClcbiAgICogY29uc3QgY2lkID0gYXdhaXQgY2xpZW50LnN0b3JlQ2FyKGNhcilcbiAgICogY29uc29sZS5hc3NlcnQoY2lkID09PSBleHBlY3RlZENpZClcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7QmxvYnxBUEkuQ2FyUmVhZGVyfSBjYXJcbiAgICogQHBhcmFtIHt7b25TdG9yZWRDaHVuaz86IChzaXplOiBudW1iZXIpID0+IHZvaWR9fSBbb3B0aW9uc11cbiAgICovXG4gIHN0b3JlQ2FyKGNhciwgb3B0aW9ucykge1xuICAgIHJldHVybiBORlRTdG9yYWdlLnN0b3JlQ2FyKHRoaXMsIGNhciwgb3B0aW9ucylcbiAgfVxuICAvKipcbiAgICogU3RvcmVzIGEgZGlyZWN0b3J5IG9mIGZpbGVzIGFuZCByZXR1cm5zIGEgQ0lEIGZvciB0aGUgZGlyZWN0b3J5LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBjaWQgPSBhd2FpdCBjbGllbnQuc3RvcmVEaXJlY3RvcnkoW1xuICAgKiAgIG5ldyBGaWxlKFsnaGVsbG8gd29ybGQnXSwgJ2hlbGxvLnR4dCcpLFxuICAgKiAgIG5ldyBGaWxlKFtKU09OLnN0cmluZ2lmeSh7J2Zyb20nOiAnaW5jb2duaXRvJ30sIG51bGwsIDIpXSwgJ21ldGFkYXRhLmpzb24nKVxuICAgKiBdKVxuICAgKiBjaWQgLy8+XG4gICAqIGBgYFxuICAgKlxuICAgKiBBcmd1bWVudCBjYW4gYmUgYSBbRmlsZUxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlTGlzdClcbiAgICogaW5zdGFuY2UgYXMgd2VsbCwgaW4gd2hpY2ggY2FzZSBkaXJlY3Rvcnkgc3RydWN0dXJlIHdpbGwgYmUgcmV0YWluZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7SXRlcmFibGU8RmlsZT59IGZpbGVzXG4gICAqL1xuICBzdG9yZURpcmVjdG9yeShmaWxlcykge1xuICAgIHJldHVybiBORlRTdG9yYWdlLnN0b3JlRGlyZWN0b3J5KHRoaXMsIGZpbGVzKVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBzdG9yZWQgTkZUIGJ5IGl0cyBDSUQuIE5vdGUgdGhlIE5GVCBtdXN0XG4gICAqIGhhdmUgcHJldmlvdXNseSBiZWVuIHN0b3JlZCBieSB0aGlzIGFjY291bnQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IHN0YXR1cyA9IGF3YWl0IGNsaWVudC5zdGF0dXMoJ3pkajdXbjlGUUFVUkNQNk1id2NXdXppN3U2NWtBc1hDZGpOVGtoYkpjb2FYQnVzcTknKVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNpZFxuICAgKi9cbiAgc3RhdHVzKGNpZCkge1xuICAgIHJldHVybiBORlRTdG9yYWdlLnN0YXR1cyh0aGlzLCBjaWQpXG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZXMgc3RvcmVkIGNvbnRlbnQgYnkgaXRzIENJRCBmcm9tIHRoZSBzZXJ2aWNlLlxuICAgKlxuICAgKiA+IFBsZWFzZSBub3RlIHRoYXQgZXZlbiBpZiBjb250ZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgc2VydmljZSBvdGhlciBub2Rlc1xuICAgKiB0aGF0IGhhdmUgcmVwbGljYXRlZCBpdCBtaWdodCBzdGlsbCBjb250aW51ZSBwcm92aWRpbmcgaXQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGF3YWl0IGNsaWVudC5kZWxldGUoJ3pkajdXbjlGUUFVUkNQNk1id2NXdXppN3U2NWtBc1hDZGpOVGtoYkpjb2FYQnVzcTknKVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNpZFxuICAgKi9cbiAgZGVsZXRlKGNpZCkge1xuICAgIHJldHVybiBORlRTdG9yYWdlLmRlbGV0ZSh0aGlzLCBjaWQpXG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgQ0lEIG9mIGFuIE5GVCBpcyBiZWluZyBzdG9yZWQgYnkgbmZ0LnN0b3JhZ2UuIFRocm93cyBpZiB0aGUgTkZUXG4gICAqIHdhcyBub3QgZm91bmQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IHN0YXR1cyA9IGF3YWl0IGNsaWVudC5jaGVjaygnemRqN1duOUZRQVVSQ1A2TWJ3Y1d1emk3dTY1a0FzWENkak5Ua2hiSmNvYVhCdXNxOScpXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2lkXG4gICAqL1xuICBjaGVjayhjaWQpIHtcbiAgICByZXR1cm4gTkZUU3RvcmFnZS5jaGVjayh0aGlzLCBjaWQpXG4gIH1cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gdG9rZW4gYW5kIGFsbCByZXNvdXJjZXMgaXQgcmVmZXJlbmNlcyAoaW4gdGhlIGZvcm0gb2YgYVxuICAgKiBGaWxlIG9yIGEgQmxvYikgYWxvbmcgd2l0aCBhIG1ldGFkYXRhIEpTT04gYXMgc3BlY2lmaWNlZCBpblxuICAgKiBbRVJDLTExNTVdKGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMTE1NSNtZXRhZGF0YSkuIFRoZVxuICAgKiBgdG9rZW4uaW1hZ2VgIG11c3QgYmUgZWl0aGVyIGEgYEZpbGVgIG9yIGEgYEJsb2JgIGluc3RhbmNlLCB3aGljaCB3aWxsIGJlXG4gICAqIHN0b3JlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgY29udGVudCBhZGRyZXNzIFVSTCB3aWxsIGJlIHNhdmVkIGluIHRoZVxuICAgKiBtZXRhZGF0YSBKU09OIGZpbGUgdW5kZXIgYGltYWdlYCBmaWVsZC5cbiAgICpcbiAgICogSWYgYHRva2VuLnByb3BlcnRpZXNgIGNvbnRhaW5zIHByb3BlcnRpZXMgd2l0aCBgRmlsZWAgb3IgYEJsb2JgIHZhbHVlcyxcbiAgICogdGhvc2UgYWxzbyBnZXQgc3RvcmVkIGFuZCB0aGVpciBVUkxzIHdpbGwgYmUgc2F2ZWQgaW4gdGhlIG1ldGFkYXRhIEpTT05cbiAgICogZmlsZSBpbiB0aGVpciBwbGFjZS5cbiAgICpcbiAgICogTm90ZTogVVJMcyBmb3IgYEZpbGVgIG9iamVjdHMgd2lsbCByZXRhaW4gZmlsZSBuYW1lcyBlLmcuIGluIGNhc2Ugb2ZcbiAgICogYG5ldyBGaWxlKFtieXRlc10sICdjYXQucG5nJywgeyB0eXBlOiAnaW1hZ2UvcG5nJyB9KWAgd2lsbCBiZSB0cmFuc2Zvcm1lZFxuICAgKiBpbnRvIGEgVVJMIHRoYXQgbG9va3MgbGlrZSBgaXBmczovL2JhZnkuLi5oYXNoL2ltYWdlL2NhdC5wbmdgLiBGb3IgYEJsb2JgXG4gICAqIG9iamVjdHMsIHRoZSBVUkwgd2lsbCBub3QgaGF2ZSBhIGZpbGUgbmFtZSBuYW1lIG9yIG1pbWUgdHlwZSwgaW5zdGVhZCBpdFxuICAgKiB3aWxsIGJlIHRyYW5zZm9ybWVkIGludG8gYSBVUkwgdGhhdCBsb29rcyBsaWtlXG4gICAqIGBpcGZzOi8vYmFmeS4uLmhhc2gvaW1hZ2UvYmxvYmAuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgY2xpZW50LnN0b3JlKHtcbiAgICogICBuYW1lOiAnbmZ0LnN0b3JhZ2Ugc3RvcmUgdGVzdCcsXG4gICAqICAgZGVzY3JpcHRpb246ICdUZXN0IEVSQy0xMTU1IGNvbXBhdGlibGUgbWV0YWRhdGEuJyxcbiAgICogICBpbWFnZTogbmV3IEZpbGUoWyc8REFUQT4nXSwgJ3BpbnBpZS5qcGcnLCB7IHR5cGU6ICdpbWFnZS9qcGcnIH0pLFxuICAgKiAgIHByb3BlcnRpZXM6IHtcbiAgICogICAgIGN1c3RvbTogJ0N1c3RvbSBkYXRhIGNhbiBhcHBlYXIgaGVyZSwgZmlsZXMgYXJlIGF1dG8gdXBsb2FkZWQuJyxcbiAgICogICAgIGZpbGU6IG5ldyBGaWxlKFsnPERBVEE+J10sICdSRUFETUUubWQnLCB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9KSxcbiAgICogICB9XG4gICAqIH0pXG4gICAqXG4gICAqIGNvbnNvbGUubG9nKCdJUEZTIFVSTCBmb3IgdGhlIG1ldGFkYXRhOicsIG1ldGFkYXRhLnVybClcbiAgICogY29uc29sZS5sb2coJ21ldGFkYXRhLmpzb24gY29udGVudHM6XFxuJywgbWV0YWRhdGEuZGF0YSlcbiAgICogY29uc29sZS5sb2coJ21ldGFkYXRhLmpzb24gd2l0aCBJUEZTIGdhdGV3YXkgVVJMczpcXG4nLCBtZXRhZGF0YS5lbWJlZCgpKVxuICAgKiBgYGBcbiAgICpcbiAgICogQHRlbXBsYXRlIHtBUEkuVG9rZW5JbnB1dH0gVFxuICAgKiBAcGFyYW0ge1R9IHRva2VuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFQSS5Ub2tlbjxUPj59XG4gICAqL1xuICBzdG9yZSh0b2tlbikge1xuICAgIHJldHVybiBORlRTdG9yYWdlLnN0b3JlKHRoaXMsIHRva2VuKVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBUEkuVG9rZW5JbnB1dH0gbWV0YWRhdGFcbiAqL1xuY29uc3QgdmFsaWRhdGVFUkMxMTU1ID0gKHsgbmFtZSwgZGVzY3JpcHRpb24sIGltYWdlLCBkZWNpbWFscyB9KSA9PiB7XG4gIC8vIEp1c3QgdmFsaWRhdGUgdGhhdCBleHBlY3RlZCBmaWVsZHMgYXJlIHByZXNlbnRcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnc3RyaW5nIHByb3BlcnR5IGBuYW1lYCBpZGVudGlmeWluZyB0aGUgYXNzZXQgaXMgcmVxdWlyZWQnXG4gICAgKVxuICB9XG4gIGlmICh0eXBlb2YgZGVzY3JpcHRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdzdHJpbmcgcHJvcGVydHkgYGRlc2NyaXB0aW9uYCBkZXNjcmliaW5nIGFzc2V0IGlzIHJlcXVpcmVkJ1xuICAgIClcbiAgfVxuICBpZiAoIShpbWFnZSBpbnN0YW5jZW9mIEJsb2IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJvcGVydHkgYGltYWdlYCBtdXN0IGJlIGEgQmxvYiBvciBGaWxlIG9iamVjdCcpXG4gIH0gZWxzZSBpZiAoIWltYWdlLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpIHtcbiAgICBjb25zb2xlLndhcm4oYEFjY29yZGluZyB0byBFUkM3MjEgTWV0YWRhdGEgSlNPTiBTY2hlbWEgJ2ltYWdlJyBtdXN0IGhhdmUgJ2ltYWdlLyonIG1pbWUgdHlwZS5cblxuRm9yIGJldHRlciBpbnRlcm9wZXJhYmlsaXR5IHdlIHdvdWxkIGhpZ2hseSByZWNvbW1lbmQgc3RvcmluZyBjb250ZW50IHdpdGggZGlmZmVyZW50IG1pbWUgdHlwZSB1bmRlciAncHJvcGVydGllcycgbmFtZXNwYWNlIGUuZy4gXFxgcHJvcGVydGllczogeyB2aWRlbzogZmlsZSB9XFxgIGFuZCB1c2luZyAnaW1hZ2UnIGZpZWxkIGZvciBzdG9yaW5nIGEgcHJldmlldyBpbWFnZSBmb3IgaXQgaW5zdGVhZC5cblxuRm9yIG1vcmUgY29udGV4dCBwbGVhc2Ugc2VlIEVSQy03MjEgc3BlY2lmaWNhdGlvbiBodHRwczovL2VpcHMuZXRoZXJldW0ub3JnL0VJUFMvZWlwLTcyMWApXG4gIH1cblxuICBpZiAodHlwZW9mIGRlY2ltYWxzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZGVjaW1hbHMgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJvcGVydHkgYGRlY2ltYWxzYCBtdXN0IGJlIGFuIGludGVnZXIgdmFsdWUnKVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBUEkuRGVhbFtdfSBkZWFsc1xuICogQHJldHVybnMge0FQSS5EZWFsW119XG4gKi9cbmNvbnN0IGRlY29kZURlYWxzID0gKGRlYWxzKSA9PlxuICBkZWFscy5tYXAoKGRlYWwpID0+IHtcbiAgICBjb25zdCB7IGRlYWxBY3RpdmF0aW9uLCBkZWFsRXhwaXJhdGlvbiwgbGFzdENoYW5nZWQgfSA9IHtcbiAgICAgIGRlYWxFeHBpcmF0aW9uOiBudWxsLFxuICAgICAgZGVhbEFjdGl2YXRpb246IG51bGwsXG4gICAgICAuLi5kZWFsLFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWFsLFxuICAgICAgbGFzdENoYW5nZWQ6IG5ldyBEYXRlKGxhc3RDaGFuZ2VkKSxcbiAgICAgIC4uLihkZWFsQWN0aXZhdGlvbiAmJiB7IGRlYWxBY3RpdmF0aW9uOiBuZXcgRGF0ZShkZWFsQWN0aXZhdGlvbikgfSksXG4gICAgICAuLi4oZGVhbEV4cGlyYXRpb24gJiYgeyBkZWFsRXhwaXJhdGlvbjogbmV3IERhdGUoZGVhbEV4cGlyYXRpb24pIH0pLFxuICAgIH1cbiAgfSlcblxuLyoqXG4gKiBAcGFyYW0ge0FQSS5QaW59IHBpblxuICogQHJldHVybnMge0FQSS5QaW59XG4gKi9cbmNvbnN0IGRlY29kZVBpbiA9IChwaW4pID0+ICh7IC4uLnBpbiwgY3JlYXRlZDogbmV3IERhdGUocGluLmNyZWF0ZWQpIH0pXG5cbmNvbnN0IFRva2VuTW9kZWwgPSBUb2tlbi5Ub2tlblxuZXhwb3J0IHsgVG9rZW5Nb2RlbCBhcyBUb2tlbiB9XG5leHBvcnQgeyBORlRTdG9yYWdlLCBGaWxlLCBCbG9iLCBGb3JtRGF0YSwgdG9HYXRld2F5VVJMIH1cblxuLyoqXG4gKiBKdXN0IHRvIHZlcmlmeSBBUEkgY29tcGF0aWJpbGl0eS5cbiAqIEB0eXBlIHtBUEkuQVBJfVxuICovXG5jb25zdCBhcGkgPSBORlRTdG9yYWdlXG52b2lkIGFwaVxuIiwiZXhwb3J0IGNvbnN0IGZldGNoID0gZ2xvYmFsVGhpcy5mZXRjaFxuZXhwb3J0IGNvbnN0IEZvcm1EYXRhID0gZ2xvYmFsVGhpcy5Gb3JtRGF0YVxuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSBnbG9iYWxUaGlzLkhlYWRlcnNcbmV4cG9ydCBjb25zdCBSZXF1ZXN0ID0gZ2xvYmFsVGhpcy5SZXF1ZXN0XG5leHBvcnQgY29uc3QgUmVzcG9uc2UgPSBnbG9iYWxUaGlzLlJlc3BvbnNlXG5leHBvcnQgY29uc3QgQmxvYiA9IGdsb2JhbFRoaXMuQmxvYlxuZXhwb3J0IGNvbnN0IEZpbGUgPSBnbG9iYWxUaGlzLkZpbGVcbmV4cG9ydCBjb25zdCBSZWFkYWJsZVN0cmVhbSA9IGdsb2JhbFRoaXMuUmVhZGFibGVTdHJlYW1cbiIsImltcG9ydCAqIGFzIEFQSSBmcm9tICcuL2xpYi9pbnRlcmZhY2UuanMnXG5pbXBvcnQgeyBCbG9iLCBGb3JtRGF0YSB9IGZyb20gJy4vcGxhdGZvcm0uanMnXG5pbXBvcnQgeyB0b0dhdGV3YXlVUkwsIEdBVEVXQVkgfSBmcm9tICcuL2dhdGV3YXkuanMnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2dhdGV3YXkuanMnKS5HYXRld2F5VVJMT3B0aW9uc30gRW1iZWRPcHRpb25zICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHtBUEkuVG9rZW5JbnB1dH0gVFxuICogQGltcGxlbWVudHMge0FQSS5Ub2tlbjxUPn1cbiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7QVBJLkNJRFN0cmluZ30gaXBuZnRcbiAgICogQHBhcmFtIHtBUEkuRW5jb2RlZFVSTH0gdXJsXG4gICAqIEBwYXJhbSB7QVBJLkVuY29kZWQ8VCwgW1tCbG9iLCBVUkxdXT59IGRhdGFcbiAgICovXG4gIGNvbnN0cnVjdG9yKGlwbmZ0LCB1cmwsIGRhdGEpIHtcbiAgICAvKiogQHJlYWRvbmx5ICovXG4gICAgdGhpcy5pcG5mdCA9IGlwbmZ0XG4gICAgLyoqIEByZWFkb25seSAqL1xuICAgIHRoaXMudXJsID0gdXJsXG4gICAgLyoqIEByZWFkb25seSAqL1xuICAgIHRoaXMuZGF0YSA9IGRhdGFcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGlwbmZ0OiB7IGVudW1lcmFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZSB9LFxuICAgICAgdXJsOiB7IGVudW1lcmFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZSB9LFxuICAgICAgZGF0YTogeyBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlIH0sXG4gICAgfSlcbiAgfVxuICAvKipcbiAgICogQHJldHVybnMge0FQSS5FbmNvZGVkPFQsIFtbQmxvYiwgVVJMXV0+fVxuICAgKi9cbiAgZW1iZWQoKSB7XG4gICAgcmV0dXJuIFRva2VuLmVtYmVkKHRoaXMpXG4gIH1cblxuICAvKipcbiAgICogQHRlbXBsYXRlIHtBUEkuVG9rZW5JbnB1dH0gVFxuICAgKiBAcGFyYW0ge3tkYXRhOiBBUEkuRW5jb2RlZDxULCBbW0Jsb2IsIFVSTF1dPn19IHRva2VuXG4gICAqIEByZXR1cm5zIHtBUEkuRW5jb2RlZDxULCBbW0Jsb2IsIFVSTF1dPn1cbiAgICovXG4gIHN0YXRpYyBlbWJlZCh7IGRhdGEgfSkge1xuICAgIHJldHVybiBlbWJlZChkYXRhLCB7IGdhdGV3YXk6IEdBVEVXQVkgfSlcbiAgfVxufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0FQSS5FbmNvZGVkPFQsIFtbQmxvYiwgVVJMXV0+fSBpbnB1dFxuICogQHBhcmFtIHtFbWJlZE9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtBUEkuRW5jb2RlZDxULCBbW0Jsb2IsIFVSTF1dPn1cbiAqL1xuZXhwb3J0IGNvbnN0IGVtYmVkID0gKGlucHV0LCBvcHRpb25zKSA9PlxuICBtYXBXaXRoKGlucHV0LCBpc1VSTCwgZW1iZWRVUkwsIG9wdGlvbnMpXG5cbi8qKlxuICogQHRlbXBsYXRlIHtBUEkuVG9rZW5JbnB1dH0gVFxuICogQHBhcmFtIHtBUEkuRW5jb2RlZFRva2VuPFQ+fSB2YWx1ZVxuICogQHBhcmFtIHtTZXQ8c3RyaW5nPn0gcGF0aHMgLSBQYXRocyB3ZXJlIHRvIGV4cGNldCBFbmNvZGVkVVJMc1xuICogQHJldHVybnMge1Rva2VuPFQ+fVxuICovXG5leHBvcnQgY29uc3QgZGVjb2RlID0gKHsgaXBuZnQsIHVybCwgZGF0YSB9LCBwYXRocykgPT5cbiAgbmV3IFRva2VuKGlwbmZ0LCB1cmwsIG1hcFdpdGgoZGF0YSwgaXNFbmNvZGVkVVJMLCBkZWNvZGVVUkwsIHBhdGhzKSlcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm5zIHt2YWx1ZSBpcyBVUkx9XG4gKi9cbmNvbnN0IGlzVVJMID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIFVSTFxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBTdGF0ZVxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGVcbiAqIEBwYXJhbSB7QVBJLkVuY29kZWRVUkx9IHVybFxuICogQHJldHVybnMge1tTdGF0ZSwgVVJMXX1cbiAqL1xuY29uc3QgZGVjb2RlVVJMID0gKHN0YXRlLCB1cmwpID0+IFtzdGF0ZSwgbmV3IFVSTCh1cmwpXVxuXG4vKipcbiAqIEBwYXJhbSB7RW1iZWRPcHRpb25zfSBjb250ZXh0XG4gKiBAcGFyYW0ge1VSTH0gdXJsXG4gKiBAcmV0dXJucyB7W0VtYmVkT3B0aW9ucywgVVJMXX1cbiAqL1xuY29uc3QgZW1iZWRVUkwgPSAoY29udGV4dCwgdXJsKSA9PiBbY29udGV4dCwgdG9HYXRld2F5VVJMKHVybCwgY29udGV4dCldXG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJucyB7dmFsdWUgaXMgb2JqZWN0fVxuICovXG5jb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPSBudWxsXG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1NldDxzdHJpbmc+fSBhc3NldFBhdGhzXG4gKiBAcGFyYW0ge1Byb3BlcnR5S2V5W119IHBhdGhcbiAqIEByZXR1cm5zIHt2YWx1ZSBpcyBBUEkuRW5jb2RlZFVSTH1cbiAqL1xuY29uc3QgaXNFbmNvZGVkVVJMID0gKHZhbHVlLCBhc3NldFBhdGhzLCBwYXRoKSA9PlxuICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIGFzc2V0UGF0aHMuaGFzKHBhdGguam9pbignLicpKVxuXG4vKipcbiAqIFRha2VzIHRva2VuIGlucHV0IGFuZCBlbmNvZGVzIGl0IGludG9cbiAqIFtGb3JtRGF0YV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Zvcm1EYXRhKVxuICogb2JqZWN0IHdoZXJlIGZvcm0gZmllbGQgdmFsdWVzIGFyZSBkaXNjb3ZlcmVkIGBCbG9iYCAob3IgYEZpbGVgKSBvYmplY3RzIGluXG4gKiB0aGUgZ2l2ZW4gdG9rZW4gYW5kIGZpZWxkIGtleXMgYXJlIGAuYCBqb2luZWQgcGF0aHMgd2hlcmUgdGhleSB3ZXJlIGRpc2NvdmVyZFxuICogaW4gdGhlIHRva2VuLiBBZGRpdGlvbmFsbHkgZW5jb2RlZCBgRm9ybURhdGFgIHdpbGwgYWxzbyBoYXZlIGEgZmllbGRcbiAqIG5hbWVkIGBtZXRhYCBjb250YWluaW5nIEpTT04gc2VyaWFsaXplZCB0b2tlbiB3aXRoIGJsb2JzIGFuZCBmaWxlIHZhbHVlc1xuICogYG51bGxgIHNldCB0byBudWxsICh0aGlzIGFsbG93cyBiYWNrZW5kIHRvIGluamVzdCBhbGwgb2YgdGhlIGZpbGVzIGZyb21cbiAqIGBtdWx0aXBhcnQvZm9ybS1kYXRhYCByZXF1ZXN0IGFuZCB1cGRhdGUgcHJvdmlkZWQgXCJtZXRhXCIgZGF0YSB3aXRoXG4gKiBjb3JyZXNwb25kaW5nIGZpbGUgaXBmczovLyBVUkxzKVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY29uc3QgY2F0ID0gbmV3IEZpbGUoW10sICdjYXQucG5nJylcbiAqIGNvbnN0IGtpdHR5ID0gbmV3IEZpbGUoW10sICdraXR0eS5wbmcnKVxuICogY29uc3QgZm9ybSA9IGVuY29kZSh7XG4gKiAgIG5hbWU6ICdoZWxsbydcbiAqICAgaW1hZ2U6IGNhdFxuICogICBwcm9wZXJ0aWVzOiB7XG4gKiAgICAgZXh0cmE6IHtcbiAqICAgICAgIGltYWdlOiBraXR0eVxuICogICAgIH1cbiAqICAgfVxuICogfSlcbiAqIFsuLi5mb3JtLmVudHJpZXMoKV0gLy8+XG4gKiAvLyBbXG4gKiAvLyAgIFsnaW1hZ2UnLCBjYXRdLFxuICogLy8gICBbJ3Byb3BlcnRpZXMuZXh0cmEuaW1hZ2UnLCBraXR0eV0sXG4gKiAvLyAgIFsnbWV0YScsICd7XCJuYW1lXCI6XCJoZWxsb1wiLGltYWdlOm51bGwsXCJwcm9wZXJ0aWVzXCI6e1wiZXh0cmFcIjp7XCJraXR0eVwiOiBudWxsfX19J11cbiAqIC8vIF1cbiAqIGBgYFxuICpcbiAqIEB0ZW1wbGF0ZSB7QVBJLlRva2VuSW5wdXR9IFRcbiAqIEBwYXJhbSB7QVBJLkVuY29kZWQ8VCwgW1tCbG9iLCBCbG9iXV0+fSBpbnB1dFxuICogQHJldHVybnMge0Zvcm1EYXRhfVxuICovXG5leHBvcnQgY29uc3QgZW5jb2RlID0gKGlucHV0KSA9PiB7XG4gIGNvbnN0IFtmb3JtLCBtZXRhXSA9IG1hcFZhbHVlV2l0aChcbiAgICBpbnB1dCxcbiAgICBpc0Jsb2IsXG4gICAgZW5jb2RlQmxvYixcbiAgICBuZXcgRm9ybURhdGEoKSxcbiAgICBbXVxuICApXG4gIGZvcm0uc2V0KCdtZXRhJywgSlNPTi5zdHJpbmdpZnkobWV0YSkpXG4gIHJldHVybiBmb3JtXG59XG5cbi8qKlxuICogQHBhcmFtIHtGb3JtRGF0YX0gZGF0YVxuICogQHBhcmFtIHtCbG9ifSBibG9iXG4gKiBAcGFyYW0ge1Byb3BlcnR5S2V5W119IHBhdGhcbiAqIEByZXR1cm5zIHtbRm9ybURhdGEsIHZvaWRdfVxuICovXG5jb25zdCBlbmNvZGVCbG9iID0gKGRhdGEsIGJsb2IsIHBhdGgpID0+IHtcbiAgZGF0YS5zZXQocGF0aC5qb2luKCcuJyksIGJsb2IpXG4gIHJldHVybiBbZGF0YSwgdW5kZWZpbmVkXVxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybnMge3ZhbHVlIGlzIEJsb2J9XG4gKi9cbmNvbnN0IGlzQmxvYiA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBCbG9iXG5cbi8qKlxuICogU3Vic3RpdHVlcyB2YWx1ZXMgaW4gdGhlIGdpdmVuIGBpbnB1dGAgdGhhdCBtYXRjaCBgcCh2YWx1ZSkgPT0gdHJ1ZWAgd2l0aFxuICogYGYodmFsdWUsIGNvbnRleHQsIHBhdGgpYCB3aGVyZSBgY29udGV4dGAgaXMgd2hhdGV2ZXIgeW91IHBhc3MgKHVzdWFsbHlcbiAqIGEgbXV0YWJsZSBzdGF0ZSkgYW5kIGBwYXRoYCBpcyBhIGFycmF5IG9mIGtleXMgLyBpbmRleGVzIHdoZXJlIHRoZSB2YWx1ZVxuICogd2FzIGVuY291bnRlcmVkLlxuICpcbiAqIEB0ZW1wbGF0ZSBULCBJLCBYLCBPLCBTdGF0ZVxuICogQHBhcmFtIHtBUEkuRW5jb2RlZDxULCBbW0ksIFhdXT59IGlucHV0IC0gQXJiaXRyYXJ5IGlucHV0LlxuICogQHBhcmFtIHsoaW5wdXQ6YW55LCBzdGF0ZTpTdGF0ZSwgcGF0aDpQcm9wZXJ0eUtleVtdKSA9PiBpbnB1dCBpcyBYfSBwIC0gUHJlZGljYXRlIGZ1bmN0aW9uIHRvIGRldGVybWluZVxuICogd2hpY2ggdmFsdWVzIHRvIHN3YXAuXG4gKiBAcGFyYW0geyhzdGF0ZTpTdGF0ZSwgaW5wdXQ6WCwgcGF0aDpQcm9wZXJ0eUtleVtdKSA9PiBbU3RhdGUsIE9dfSBmIC0gRnVuY3Rpb25cbiAqIHRoYXQgc3dhcHMgbWF0Y2hpbmcgdmFsdWVzLlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgLSBTb21lIGFkZGl0aW9uYWwgY29udGV4dCB5b3UgbmVlZCBpbiB0aGUgcHJvY2Vzcy5cbiAqIGxpa2V5IHlvdSdsbCBzdGFydCB3aXRoIGBbXWAuXG4gKiBAcmV0dXJucyB7QVBJLkVuY29kZWQ8VCwgW1tJLCBPXV0+fVxuICovXG5leHBvcnQgY29uc3QgbWFwV2l0aCA9IChpbnB1dCwgcCwgZiwgc3RhdGUpID0+IHtcbiAgY29uc3QgWywgb3V0cHV0XSA9IG1hcFZhbHVlV2l0aChpbnB1dCwgcCwgZiwgc3RhdGUsIFtdKVxuICByZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFQsIEksIFgsIE8sIFN0YXRlXG4gKiBAcGFyYW0ge0FQSS5FbmNvZGVkPFQsIFtbSSwgWF1dPn0gaW5wdXQgLSBBcmJpdHJhcnkgaW5wdXQuXG4gKiBAcGFyYW0geyhpbnB1dDphbnksIHN0YXRlOlN0YXRlLCBwYXRoOlByb3BlcnR5S2V5W10pID0+IGlucHV0IGlzIFh9IHAgLSBQcmVkaWNhdGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lXG4gKiB3aGljaCB2YWx1ZXMgdG8gc3dhcC5cbiAqIEBwYXJhbSB7KHN0YXRlOlN0YXRlLCBpbnB1dDpYLCBwYXRoOlByb3BlcnR5S2V5W10pID0+IFtTdGF0ZSwgT119IGYgLSBGdW5jdGlvblxuICogdGhhdCBzd2FwcyBtYXRjaGluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSAtIFNvbWUgYWRkaXRpb25hbCBjb250ZXh0IHlvdSBuZWVkIGluIHRoZSBwcm9jZXNzLlxuICogQHBhcmFtIHtQcm9wZXJ0eUtleVtdfSBwYXRoIC0gUGF0aCB3aGVyZSB0aGUgdmFsdWUgd2FzIGVuY291bnRlcmVkLiBNb3N0XG4gKiBsaWtleSB5b3UnbGwgc3RhcnQgd2l0aCBgW11gLlxuICogQHJldHVybnMge1tTdGF0ZSwgQVBJLkVuY29kZWQ8VCwgW1tJLCBPXV0+XX1cbiAqL1xuY29uc3QgbWFwVmFsdWVXaXRoID0gKGlucHV0LCBwLCBmLCBzdGF0ZSwgcGF0aCkgPT5cbiAgcChpbnB1dCwgc3RhdGUsIHBhdGgpXG4gICAgPyBmKHN0YXRlLCBpbnB1dCwgcGF0aClcbiAgICA6IEFycmF5LmlzQXJyYXkoaW5wdXQpXG4gICAgPyBtYXBBcnJheVdpdGgoaW5wdXQsIHAsIGYsIHN0YXRlLCBwYXRoKVxuICAgIDogaXNPYmplY3QoaW5wdXQpXG4gICAgPyBtYXBPYmplY3RXaXRoKGlucHV0LCBwLCBmLCBzdGF0ZSwgcGF0aClcbiAgICA6IFtzdGF0ZSwgLyoqIEB0eXBlIHthbnl9ICovIChpbnB1dCldXG5cbi8qKlxuICogSnVzdCBsaWtlIGBtYXBXaXRoYCBleGNlcHRcbiAqXG4gKiBAdGVtcGxhdGUgU3RhdGUsIFQsIEksIFgsIE9cbiAqIEBwYXJhbSB7QVBJLkVuY29kZWQ8VCwgW1tJLCBYXV0+fSBpbnB1dFxuICogQHBhcmFtIHsoaW5wdXQ6YW55LCBzdGF0ZTpTdGF0ZSwgcGF0aDpQcm9wZXJ0eUtleVtdKSA9PiBpbnB1dCBpcyBYfSBwXG4gKiBAcGFyYW0geyhzdGF0ZTogU3RhdGUsIGlucHV0OlgsIHBhdGg6UHJvcGVydHlLZXlbXSkgPT4gW1N0YXRlLCBPXX0gZlxuICogQHBhcmFtIHtTdGF0ZX0gaW5pdFxuICogQHBhcmFtIHtQcm9wZXJ0eUtleVtdfSBwYXRoXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBBUEkuRW5jb2RlZDxULCBbW0ksIE9dXT5dfVxuICovXG5jb25zdCBtYXBPYmplY3RXaXRoID0gKGlucHV0LCBwLCBmLCBpbml0LCBwYXRoKSA9PiB7XG4gIGxldCBzdGF0ZSA9IGluaXRcbiAgY29uc3Qgb3V0cHV0ID0gLyoqIEB0eXBlIHtBUEkuRW5jb2RlZDxULCBbW0ksIE9dXT59ICovICh7fSlcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaW5wdXQpKSB7XG4gICAgY29uc3QgW25leHQsIG91dF0gPSBtYXBWYWx1ZVdpdGgodmFsdWUsIHAsIGYsIHN0YXRlLCBbLi4ucGF0aCwga2V5XSlcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgb3V0cHV0W2tleV0gPSBvdXRcbiAgICBzdGF0ZSA9IG5leHRcbiAgfVxuICByZXR1cm4gW3N0YXRlLCBvdXRwdXRdXG59XG5cbi8qKlxuICogSnVzdCBsaWtlIGBtYXBXaXRoYCBleGNlcHQgZm9yIEFycmF5cy5cbiAqXG4gKiBAdGVtcGxhdGUgSSwgWCwgTywgU3RhdGVcbiAqIEB0ZW1wbGF0ZSB7YW55W119IFRcbiAqIEBwYXJhbSB7VH0gaW5wdXRcbiAqIEBwYXJhbSB7KGlucHV0OmFueSwgc3RhdGU6U3RhdGUsIHBhdGg6UHJvcGVydHlLZXlbXSkgPT4gaW5wdXQgaXMgWH0gcFxuICogQHBhcmFtIHsoc3RhdGU6IFN0YXRlLCBpbnB1dDpYLCBwYXRoOlByb3BlcnR5S2V5W10pID0+IFtTdGF0ZSwgT119IGZcbiAqIEBwYXJhbSB7U3RhdGV9IGluaXRcbiAqIEBwYXJhbSB7UHJvcGVydHlLZXlbXX0gcGF0aFxuICogQHJldHVybnMge1tTdGF0ZSwgQVBJLkVuY29kZWQ8VCwgW1tJLCBPXV0+XX1cbiAqL1xuY29uc3QgbWFwQXJyYXlXaXRoID0gKGlucHV0LCBwLCBmLCBpbml0LCBwYXRoKSA9PiB7XG4gIGNvbnN0IG91dHB1dCA9IC8qKiBAdHlwZSB7dW5rbm93bltdfSAqLyAoW10pXG5cbiAgbGV0IHN0YXRlID0gaW5pdFxuICBmb3IgKGNvbnN0IFtpbmRleCwgZWxlbWVudF0gb2YgaW5wdXQuZW50cmllcygpKSB7XG4gICAgY29uc3QgW25leHQsIG91dF0gPSBtYXBWYWx1ZVdpdGgoZWxlbWVudCwgcCwgZiwgc3RhdGUsIFsuLi5wYXRoLCBpbmRleF0pXG4gICAgb3V0cHV0W2luZGV4XSA9IG91dFxuICAgIHN0YXRlID0gbmV4dFxuICB9XG5cbiAgcmV0dXJuIFtzdGF0ZSwgLyoqIEB0eXBlIHtBUEkuRW5jb2RlZDxULCBbW0ksIE9dXT59ICovIChvdXRwdXQpXVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgcmV0cnkgPSByZXF1aXJlKCdyZXRyeScpO1xuXG5jb25zdCBuZXR3b3JrRXJyb3JNc2dzID0gW1xuXHQnRmFpbGVkIHRvIGZldGNoJywgLy8gQ2hyb21lXG5cdCdOZXR3b3JrRXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIGZldGNoIHJlc291cmNlLicsIC8vIEZpcmVmb3hcblx0J1RoZSBJbnRlcm5ldCBjb25uZWN0aW9uIGFwcGVhcnMgdG8gYmUgb2ZmbGluZS4nLCAvLyBTYWZhcmlcblx0J05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnIC8vIGBjcm9zcy1mZXRjaGBcbl07XG5cbmNsYXNzIEFib3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0dGhpcy5vcmlnaW5hbEVycm9yID0gbWVzc2FnZTtcblx0XHRcdCh7bWVzc2FnZX0gPSBtZXNzYWdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcmlnaW5hbEVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuXHRcdFx0dGhpcy5vcmlnaW5hbEVycm9yLnN0YWNrID0gdGhpcy5zdGFjaztcblx0XHR9XG5cblx0XHR0aGlzLm5hbWUgPSAnQWJvcnRFcnJvcic7XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fVxufVxuXG5jb25zdCBkZWNvcmF0ZUVycm9yV2l0aENvdW50cyA9IChlcnJvciwgYXR0ZW1wdE51bWJlciwgb3B0aW9ucykgPT4ge1xuXHQvLyBNaW51cyAxIGZyb20gYXR0ZW1wdE51bWJlciBiZWNhdXNlIHRoZSBmaXJzdCBhdHRlbXB0IGRvZXMgbm90IGNvdW50IGFzIGEgcmV0cnlcblx0Y29uc3QgcmV0cmllc0xlZnQgPSBvcHRpb25zLnJldHJpZXMgLSAoYXR0ZW1wdE51bWJlciAtIDEpO1xuXG5cdGVycm9yLmF0dGVtcHROdW1iZXIgPSBhdHRlbXB0TnVtYmVyO1xuXHRlcnJvci5yZXRyaWVzTGVmdCA9IHJldHJpZXNMZWZ0O1xuXHRyZXR1cm4gZXJyb3I7XG59O1xuXG5jb25zdCBpc05ldHdvcmtFcnJvciA9IGVycm9yTWVzc2FnZSA9PiBuZXR3b3JrRXJyb3JNc2dzLmluY2x1ZGVzKGVycm9yTWVzc2FnZSk7XG5cbmNvbnN0IHBSZXRyeSA9IChpbnB1dCwgb3B0aW9ucykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRvcHRpb25zID0ge1xuXHRcdG9uRmFpbGVkQXR0ZW1wdDogKCkgPT4ge30sXG5cdFx0cmV0cmllczogMTAsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXG5cdGNvbnN0IG9wZXJhdGlvbiA9IHJldHJ5Lm9wZXJhdGlvbihvcHRpb25zKTtcblxuXHRvcGVyYXRpb24uYXR0ZW1wdChhc3luYyBhdHRlbXB0TnVtYmVyID0+IHtcblx0XHR0cnkge1xuXHRcdFx0cmVzb2x2ZShhd2FpdCBpbnB1dChhdHRlbXB0TnVtYmVyKSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGlmICghKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG5cdFx0XHRcdHJlamVjdChuZXcgVHlwZUVycm9yKGBOb24tZXJyb3Igd2FzIHRocm93bjogXCIke2Vycm9yfVwiLiBZb3Ugc2hvdWxkIG9ubHkgdGhyb3cgZXJyb3JzLmApKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBBYm9ydEVycm9yKSB7XG5cdFx0XHRcdG9wZXJhdGlvbi5zdG9wKCk7XG5cdFx0XHRcdHJlamVjdChlcnJvci5vcmlnaW5hbEVycm9yKTtcblx0XHRcdH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3IgJiYgIWlzTmV0d29ya0Vycm9yKGVycm9yLm1lc3NhZ2UpKSB7XG5cdFx0XHRcdG9wZXJhdGlvbi5zdG9wKCk7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWNvcmF0ZUVycm9yV2l0aENvdW50cyhlcnJvciwgYXR0ZW1wdE51bWJlciwgb3B0aW9ucyk7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRhd2FpdCBvcHRpb25zLm9uRmFpbGVkQXR0ZW1wdChlcnJvcik7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIW9wZXJhdGlvbi5yZXRyeShlcnJvcikpIHtcblx0XHRcdFx0XHRyZWplY3Qob3BlcmF0aW9uLm1haW5FcnJvcigpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwUmV0cnk7XG4vLyBUT0RPOiByZW1vdmUgdGhpcyBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gcFJldHJ5O1xuXG5tb2R1bGUuZXhwb3J0cy5BYm9ydEVycm9yID0gQWJvcnRFcnJvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcmV0cnknKTsiLCJ2YXIgUmV0cnlPcGVyYXRpb24gPSByZXF1aXJlKCcuL3JldHJ5X29wZXJhdGlvbicpO1xuXG5leHBvcnRzLm9wZXJhdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIHRpbWVvdXRzID0gZXhwb3J0cy50aW1lb3V0cyhvcHRpb25zKTtcbiAgcmV0dXJuIG5ldyBSZXRyeU9wZXJhdGlvbih0aW1lb3V0cywge1xuICAgICAgZm9yZXZlcjogb3B0aW9ucyAmJiAob3B0aW9ucy5mb3JldmVyIHx8IG9wdGlvbnMucmV0cmllcyA9PT0gSW5maW5pdHkpLFxuICAgICAgdW5yZWY6IG9wdGlvbnMgJiYgb3B0aW9ucy51bnJlZixcbiAgICAgIG1heFJldHJ5VGltZTogb3B0aW9ucyAmJiBvcHRpb25zLm1heFJldHJ5VGltZVxuICB9KTtcbn07XG5cbmV4cG9ydHMudGltZW91dHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIG9wdHMgPSB7XG4gICAgcmV0cmllczogMTAsXG4gICAgZmFjdG9yOiAyLFxuICAgIG1pblRpbWVvdXQ6IDEgKiAxMDAwLFxuICAgIG1heFRpbWVvdXQ6IEluZmluaXR5LFxuICAgIHJhbmRvbWl6ZTogZmFsc2VcbiAgfTtcbiAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICBvcHRzW2tleV0gPSBvcHRpb25zW2tleV07XG4gIH1cblxuICBpZiAob3B0cy5taW5UaW1lb3V0ID4gb3B0cy5tYXhUaW1lb3V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaW5UaW1lb3V0IGlzIGdyZWF0ZXIgdGhhbiBtYXhUaW1lb3V0Jyk7XG4gIH1cblxuICB2YXIgdGltZW91dHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRzLnJldHJpZXM7IGkrKykge1xuICAgIHRpbWVvdXRzLnB1c2godGhpcy5jcmVhdGVUaW1lb3V0KGksIG9wdHMpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZm9yZXZlciAmJiAhdGltZW91dHMubGVuZ3RoKSB7XG4gICAgdGltZW91dHMucHVzaCh0aGlzLmNyZWF0ZVRpbWVvdXQoaSwgb3B0cykpO1xuICB9XG5cbiAgLy8gc29ydCB0aGUgYXJyYXkgbnVtZXJpY2FsbHkgYXNjZW5kaW5nXG4gIHRpbWVvdXRzLnNvcnQoZnVuY3Rpb24oYSxiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICByZXR1cm4gdGltZW91dHM7XG59O1xuXG5leHBvcnRzLmNyZWF0ZVRpbWVvdXQgPSBmdW5jdGlvbihhdHRlbXB0LCBvcHRzKSB7XG4gIHZhciByYW5kb20gPSAob3B0cy5yYW5kb21pemUpXG4gICAgPyAoTWF0aC5yYW5kb20oKSArIDEpXG4gICAgOiAxO1xuXG4gIHZhciB0aW1lb3V0ID0gTWF0aC5yb3VuZChyYW5kb20gKiBNYXRoLm1heChvcHRzLm1pblRpbWVvdXQsIDEpICogTWF0aC5wb3cob3B0cy5mYWN0b3IsIGF0dGVtcHQpKTtcbiAgdGltZW91dCA9IE1hdGgubWluKHRpbWVvdXQsIG9wdHMubWF4VGltZW91dCk7XG5cbiAgcmV0dXJuIHRpbWVvdXQ7XG59O1xuXG5leHBvcnRzLndyYXAgPSBmdW5jdGlvbihvYmosIG9wdGlvbnMsIG1ldGhvZHMpIHtcbiAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIG1ldGhvZHMgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgaWYgKCFtZXRob2RzKSB7XG4gICAgbWV0aG9kcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbWV0aG9kcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1ldGhvZCAgID0gbWV0aG9kc1tpXTtcbiAgICB2YXIgb3JpZ2luYWwgPSBvYmpbbWV0aG9kXTtcblxuICAgIG9ialttZXRob2RdID0gZnVuY3Rpb24gcmV0cnlXcmFwcGVyKG9yaWdpbmFsKSB7XG4gICAgICB2YXIgb3AgICAgICAgPSBleHBvcnRzLm9wZXJhdGlvbihvcHRpb25zKTtcbiAgICAgIHZhciBhcmdzICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuXG4gICAgICBhcmdzLnB1c2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmIChvcC5yZXRyeShlcnIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPSBvcC5tYWluRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG9wLmF0dGVtcHQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG9yaWdpbmFsLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9LmJpbmQob2JqLCBvcmlnaW5hbCk7XG4gICAgb2JqW21ldGhvZF0ub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbn07XG4iLCJmdW5jdGlvbiBSZXRyeU9wZXJhdGlvbih0aW1lb3V0cywgb3B0aW9ucykge1xuICAvLyBDb21wYXRpYmlsaXR5IGZvciB0aGUgb2xkICh0aW1lb3V0cywgcmV0cnlGb3JldmVyKSBzaWduYXR1cmVcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zID0geyBmb3JldmVyOiBvcHRpb25zIH07XG4gIH1cblxuICB0aGlzLl9vcmlnaW5hbFRpbWVvdXRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aW1lb3V0cykpO1xuICB0aGlzLl90aW1lb3V0cyA9IHRpbWVvdXRzO1xuICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5fbWF4UmV0cnlUaW1lID0gb3B0aW9ucyAmJiBvcHRpb25zLm1heFJldHJ5VGltZSB8fCBJbmZpbml0eTtcbiAgdGhpcy5fZm4gPSBudWxsO1xuICB0aGlzLl9lcnJvcnMgPSBbXTtcbiAgdGhpcy5fYXR0ZW1wdHMgPSAxO1xuICB0aGlzLl9vcGVyYXRpb25UaW1lb3V0ID0gbnVsbDtcbiAgdGhpcy5fb3BlcmF0aW9uVGltZW91dENiID0gbnVsbDtcbiAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gIHRoaXMuX29wZXJhdGlvblN0YXJ0ID0gbnVsbDtcbiAgdGhpcy5fdGltZXIgPSBudWxsO1xuXG4gIGlmICh0aGlzLl9vcHRpb25zLmZvcmV2ZXIpIHtcbiAgICB0aGlzLl9jYWNoZWRUaW1lb3V0cyA9IHRoaXMuX3RpbWVvdXRzLnNsaWNlKDApO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFJldHJ5T3BlcmF0aW9uO1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fYXR0ZW1wdHMgPSAxO1xuICB0aGlzLl90aW1lb3V0cyA9IHRoaXMuX29yaWdpbmFsVGltZW91dHMuc2xpY2UoMCk7XG59XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl90aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICB9XG4gIGlmICh0aGlzLl90aW1lcikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIH1cblxuICB0aGlzLl90aW1lb3V0cyAgICAgICA9IFtdO1xuICB0aGlzLl9jYWNoZWRUaW1lb3V0cyA9IG51bGw7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUucmV0cnkgPSBmdW5jdGlvbihlcnIpIHtcbiAgaWYgKHRoaXMuX3RpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gIH1cblxuICBpZiAoIWVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgaWYgKGVyciAmJiBjdXJyZW50VGltZSAtIHRoaXMuX29wZXJhdGlvblN0YXJ0ID49IHRoaXMuX21heFJldHJ5VGltZSkge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKGVycik7XG4gICAgdGhpcy5fZXJyb3JzLnVuc2hpZnQobmV3IEVycm9yKCdSZXRyeU9wZXJhdGlvbiB0aW1lb3V0IG9jY3VycmVkJykpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRoaXMuX2Vycm9ycy5wdXNoKGVycik7XG5cbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0cy5zaGlmdCgpO1xuICBpZiAodGltZW91dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFRpbWVvdXRzKSB7XG4gICAgICAvLyByZXRyeSBmb3JldmVyLCBvbmx5IGtlZXAgbGFzdCBlcnJvclxuICAgICAgdGhpcy5fZXJyb3JzLnNwbGljZSgwLCB0aGlzLl9lcnJvcnMubGVuZ3RoIC0gMSk7XG4gICAgICB0aW1lb3V0ID0gdGhpcy5fY2FjaGVkVGltZW91dHMuc2xpY2UoLTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5fYXR0ZW1wdHMrKztcblxuICAgIGlmIChzZWxmLl9vcGVyYXRpb25UaW1lb3V0Q2IpIHtcbiAgICAgIHNlbGYuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLl9vcGVyYXRpb25UaW1lb3V0Q2Ioc2VsZi5fYXR0ZW1wdHMpO1xuICAgICAgfSwgc2VsZi5fb3BlcmF0aW9uVGltZW91dCk7XG5cbiAgICAgIGlmIChzZWxmLl9vcHRpb25zLnVucmVmKSB7XG4gICAgICAgICAgc2VsZi5fdGltZW91dC51bnJlZigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYuX2ZuKHNlbGYuX2F0dGVtcHRzKTtcbiAgfSwgdGltZW91dCk7XG5cbiAgaWYgKHRoaXMuX29wdGlvbnMudW5yZWYpIHtcbiAgICAgIHRoaXMuX3RpbWVyLnVucmVmKCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5hdHRlbXB0ID0gZnVuY3Rpb24oZm4sIHRpbWVvdXRPcHMpIHtcbiAgdGhpcy5fZm4gPSBmbjtcblxuICBpZiAodGltZW91dE9wcykge1xuICAgIGlmICh0aW1lb3V0T3BzLnRpbWVvdXQpIHtcbiAgICAgIHRoaXMuX29wZXJhdGlvblRpbWVvdXQgPSB0aW1lb3V0T3BzLnRpbWVvdXQ7XG4gICAgfVxuICAgIGlmICh0aW1lb3V0T3BzLmNiKSB7XG4gICAgICB0aGlzLl9vcGVyYXRpb25UaW1lb3V0Q2IgPSB0aW1lb3V0T3BzLmNiO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHRoaXMuX29wZXJhdGlvblRpbWVvdXRDYikge1xuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fb3BlcmF0aW9uVGltZW91dENiKCk7XG4gICAgfSwgc2VsZi5fb3BlcmF0aW9uVGltZW91dCk7XG4gIH1cblxuICB0aGlzLl9vcGVyYXRpb25TdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIHRoaXMuX2ZuKHRoaXMuX2F0dGVtcHRzKTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS50cnkgPSBmdW5jdGlvbihmbikge1xuICBjb25zb2xlLmxvZygnVXNpbmcgUmV0cnlPcGVyYXRpb24udHJ5KCkgaXMgZGVwcmVjYXRlZCcpO1xuICB0aGlzLmF0dGVtcHQoZm4pO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oZm4pIHtcbiAgY29uc29sZS5sb2coJ1VzaW5nIFJldHJ5T3BlcmF0aW9uLnN0YXJ0KCkgaXMgZGVwcmVjYXRlZCcpO1xuICB0aGlzLmF0dGVtcHQoZm4pO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnN0YXJ0ID0gUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnRyeTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLmVycm9ycyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fZXJyb3JzO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLmF0dGVtcHRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9hdHRlbXB0cztcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5tYWluRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX2Vycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBjb3VudHMgPSB7fTtcbiAgdmFyIG1haW5FcnJvciA9IG51bGw7XG4gIHZhciBtYWluRXJyb3JDb3VudCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9lcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZXJyb3IgPSB0aGlzLl9lcnJvcnNbaV07XG4gICAgdmFyIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgIHZhciBjb3VudCA9IChjb3VudHNbbWVzc2FnZV0gfHwgMCkgKyAxO1xuXG4gICAgY291bnRzW21lc3NhZ2VdID0gY291bnQ7XG5cbiAgICBpZiAoY291bnQgPj0gbWFpbkVycm9yQ291bnQpIHtcbiAgICAgIG1haW5FcnJvciA9IGVycm9yO1xuICAgICAgbWFpbkVycm9yQ291bnQgPSBjb3VudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFpbkVycm9yO1xufTtcbiIsImFzeW5jIGZ1bmN0aW9uKiBfYmF0Y2goc2l6ZSwgaXRlcmFibGUpIHtcbiAgICBsZXQgZGF0YUJhdGNoID0gW107XG4gICAgZm9yIGF3YWl0IChjb25zdCBkYXRhIG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgIGRhdGFCYXRjaC5wdXNoKGRhdGEpO1xuICAgICAgICBpZiAoZGF0YUJhdGNoLmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgICAgICAgICAgeWllbGQgZGF0YUJhdGNoO1xuICAgICAgICAgICAgZGF0YUJhdGNoID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGFCYXRjaC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHlpZWxkIGRhdGFCYXRjaDtcbiAgICB9XG59XG5mdW5jdGlvbiogX3N5bmNCYXRjaChzaXplLCBpdGVyYWJsZSkge1xuICAgIGxldCBkYXRhQmF0Y2ggPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgZGF0YUJhdGNoLnB1c2goZGF0YSk7XG4gICAgICAgIGlmIChkYXRhQmF0Y2gubGVuZ3RoID09PSBzaXplKSB7XG4gICAgICAgICAgICB5aWVsZCBkYXRhQmF0Y2g7XG4gICAgICAgICAgICBkYXRhQmF0Y2ggPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YUJhdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgeWllbGQgZGF0YUJhdGNoO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGJhdGNoKHNpemUsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJpZWRJdGVyYWJsZSA9PiBiYXRjaChzaXplLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICBpZiAoaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKSB7XG4gICAgICAgIHJldHVybiBfYmF0Y2goc2l6ZSwgaXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gX3N5bmNCYXRjaChzaXplLCBpdGVyYWJsZSk7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yKGl0ZXJhYmxlKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZXNcIiBkb2VzIG5vdCB0byBjb25mb3JtIHRvIGFueSBvZiB0aGUgaXRlcmF0b3Igb3IgaXRlcmFibGUgcHJvdG9jb2xzJyk7XG59XG5cbmZ1bmN0aW9uIGRlZmVyKCkge1xuICAgIGxldCByZWplY3Q7XG4gICAgbGV0IHJlc29sdmU7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlRnVuYywgcmVqZWN0RnVuYykgPT4ge1xuICAgICAgICByZXNvbHZlID0gcmVzb2x2ZUZ1bmM7XG4gICAgICAgIHJlamVjdCA9IHJlamVjdEZ1bmM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlLFxuICAgIH07XG59XG5cbi8vLyA8cmVmZXJlbmNlIGxpYj1cImVzbmV4dC5hc3luY2l0ZXJhYmxlXCIgLz5cbmZ1bmN0aW9uIF9idWZmZXIoc2l6ZSwgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICBjb25zdCByZXN1bHRRdWV1ZSA9IFtdO1xuICAgIGNvbnN0IHJlYWRRdWV1ZSA9IFtdO1xuICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG4gICAgbGV0IGVuZGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZnVsZmlsbFJlYWRRdWV1ZSgpIHtcbiAgICAgICAgd2hpbGUgKHJlYWRRdWV1ZS5sZW5ndGggPiAwICYmIHJlc3VsdFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWREZWZlcnJlZCA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHJlc3VsdFF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWFkRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlYWREZWZlcnJlZC5yZXNvbHZlKHsgZG9uZTogZmFsc2UsIHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChyZWFkUXVldWUubGVuZ3RoID4gMCAmJiBlbmRlZCkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNvbHZlIH0gPSByZWFkUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbGxRdWV1ZSgpIHtcbiAgICAgICAgaWYgKGVuZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0UXVldWUubGVuZ3RoID49IHNpemUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaCh7IHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaCh7IGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICBmaWxsUXVldWUoKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgaWYgKHJlc3VsdFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWxsUXVldWUoKTtcbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9OyAvLyBzdHVwaWQgdHNcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIHJlYWRRdWV1ZS5wdXNoKGRlZmVycmVkKTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCBhc3luY0l0ZXJhYmxlSXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQsXG4gICAgICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl06ICgpID0+IGFzeW5jSXRlcmFibGVJdGVyYXRvcixcbiAgICB9O1xuICAgIHJldHVybiBhc3luY0l0ZXJhYmxlSXRlcmF0b3I7XG59XG5mdW5jdGlvbiogc3luY0J1ZmZlcihzaXplLCBpdGVyYWJsZSkge1xuICAgIGNvbnN0IHZhbHVlUXVldWUgPSBbXTtcbiAgICBsZXQgZTtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICB2YWx1ZVF1ZXVlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlUXVldWUubGVuZ3RoIDw9IHNpemUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHlpZWxkIHZhbHVlUXVldWUuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZSA9IGVycm9yO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlUXVldWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxuICAgIGlmIChlKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuZnVuY3Rpb24gYnVmZmVyKHNpemUsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJpZWRJdGVyYWJsZSA9PiBidWZmZXIoc2l6ZSwgY3VycmllZEl0ZXJhYmxlKTtcbiAgICB9XG4gICAgaWYgKHNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgIH1cbiAgICBpZiAoaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKSB7XG4gICAgICAgIHJldHVybiBfYnVmZmVyKHNpemUsIGl0ZXJhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN5bmNCdWZmZXIoc2l6ZSwgaXRlcmFibGUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBfY29sbGVjdChpdGVyYWJsZSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuZnVuY3Rpb24gY29sbGVjdChpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHtcbiAgICAgICAgcmV0dXJuIF9jb2xsZWN0KGl0ZXJhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaXRlcmFibGUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiogX2NvbmNhdChpdGVyYWJsZXMpIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGl0ZXJhYmxlIG9mIGl0ZXJhYmxlcykge1xuICAgICAgICB5aWVsZCogaXRlcmFibGU7XG4gICAgfVxufVxuZnVuY3Rpb24qIF9zeW5jQ29uY2F0KGl0ZXJhYmxlcykge1xuICAgIGZvciAoY29uc3QgaXRlcmFibGUgb2YgaXRlcmFibGVzKSB7XG4gICAgICAgIHlpZWxkKiBpdGVyYWJsZTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb25jYXQoLi4uaXRlcmFibGVzKSB7XG4gICAgY29uc3QgaGFzQW55QXN5bmMgPSBpdGVyYWJsZXMuZmluZChpdHIgPT4gaXRyW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSAhPT0gdW5kZWZpbmVkKTtcbiAgICBpZiAoaGFzQW55QXN5bmMpIHtcbiAgICAgICAgcmV0dXJuIF9jb25jYXQoaXRlcmFibGVzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBfc3luY0NvbmNhdChpdGVyYWJsZXMpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gX2NvbnN1bWUoaXRlcmFibGUpIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbCBvZiBpdGVyYWJsZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuZnVuY3Rpb24gY29uc3VtZShpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHtcbiAgICAgICAgcmV0dXJuIF9jb25zdW1lKGl0ZXJhYmxlKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2YWwgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24qIF9maWx0ZXIoZmlsdGVyRnVuYywgaXRlcmFibGUpIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGRhdGEgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgaWYgKGF3YWl0IGZpbHRlckZ1bmMoZGF0YSkpIHtcbiAgICAgICAgICAgIHlpZWxkIGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBmaWx0ZXIoZmlsdGVyRnVuYywgaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gKGN1cnJpZWRJdGVyYWJsZSkgPT4gX2ZpbHRlcihmaWx0ZXJGdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gX2ZpbHRlcihmaWx0ZXJGdW5jLCBpdGVyYWJsZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uKiBmbGF0dGVuKGl0ZXJhYmxlKSB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBtYXliZUl0ciBvZiBpdGVyYWJsZSkge1xuICAgICAgICBpZiAobWF5YmVJdHIgJiYgdHlwZW9mIG1heWJlSXRyICE9PSAnc3RyaW5nJyAmJiAobWF5YmVJdHJbU3ltYm9sLml0ZXJhdG9yXSB8fCBtYXliZUl0cltTeW1ib2wuYXN5bmNJdGVyYXRvcl0pKSB7XG4gICAgICAgICAgICB5aWVsZCogZmxhdHRlbihtYXliZUl0cik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBtYXliZUl0cjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24qIF9tYXAoZnVuYywgaXRlcmFibGUpIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbCBvZiBpdGVyYWJsZSkge1xuICAgICAgICB5aWVsZCBhd2FpdCBmdW5jKHZhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwKGZ1bmMsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJpZWRJdGVyYWJsZSA9PiBfbWFwKGZ1bmMsIGN1cnJpZWRJdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfbWFwKGZ1bmMsIGl0ZXJhYmxlKTtcbn1cblxuZnVuY3Rpb24gZmxhdE1hcChmdW5jLCBpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjdXJyaWVkSXRlcmFibGUgPT4gZmxhdE1hcChmdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyKGkgPT4gaSAhPT0gdW5kZWZpbmVkICYmIGkgIT09IG51bGwsIGZsYXR0ZW4obWFwKGZ1bmMsIGl0ZXJhYmxlKSkpO1xufVxuXG5mdW5jdGlvbiBfZmxhdFRyYW5zZm9ybShjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICBjb25zdCByZXN1bHRRdWV1ZSA9IFtdO1xuICAgIGNvbnN0IHJlYWRRdWV1ZSA9IFtdO1xuICAgIGxldCBlbmRlZCA9IGZhbHNlO1xuICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG4gICAgbGV0IGluZmxpZ2h0Q291bnQgPSAwO1xuICAgIGxldCBsYXN0RXJyb3IgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGZ1bGZpbGxSZWFkUXVldWUoKSB7XG4gICAgICAgIHdoaWxlIChyZWFkUXVldWUubGVuZ3RoID4gMCAmJiByZXN1bHRRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlc29sdmUgfSA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRvbmU6IGZhbHNlLCB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocmVhZFF1ZXVlLmxlbmd0aCA+IDAgJiYgaW5mbGlnaHRDb3VudCA9PT0gMCAmJiBlbmRlZCkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNvbHZlLCByZWplY3QgfSA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChsYXN0RXJyb3IpO1xuICAgICAgICAgICAgICAgIGxhc3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmaWxsUXVldWUoKSB7XG4gICAgICAgIGlmIChlbmRlZCkge1xuICAgICAgICAgICAgZnVsZmlsbFJlYWRRdWV1ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZmxpZ2h0Q291bnQgKyByZXN1bHRRdWV1ZS5sZW5ndGggPj0gY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgaW5mbGlnaHRDb3VudCsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICBlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaW5mbGlnaHRDb3VudC0tO1xuICAgICAgICAgICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hcEFuZFF1ZXVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZmxpZ2h0Q291bnQtLTtcbiAgICAgICAgICAgIGxhc3RFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgZnVsZmlsbFJlYWRRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG1hcEFuZFF1ZXVlKGl0clZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGZ1bmMoaXRyVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkge1xuICAgICAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3QgYXN5bmNWYWwgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaChhc3luY1ZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0RXJyb3IgPSBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpbmZsaWdodENvdW50LS07XG4gICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIGlmIChyZXN1bHRRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgICAgICAgIHJlYWRRdWV1ZS5wdXNoKGRlZmVycmVkKTtcbiAgICAgICAgICAgIGZpbGxRdWV1ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBmaWxsUXVldWUoKTtcbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlIH07XG4gICAgfVxuICAgIGNvbnN0IGFzeW5jSXRlcmFibGVJdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dCxcbiAgICAgICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTogKCkgPT4gYXN5bmNJdGVyYWJsZUl0ZXJhdG9yLFxuICAgIH07XG4gICAgcmV0dXJuIGFzeW5jSXRlcmFibGVJdGVyYXRvcjtcbn1cbmZ1bmN0aW9uIGZsYXRUcmFuc2Zvcm0oY29uY3VycmVuY3ksIGZ1bmMsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGZ1bmMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gKGN1cnJpZWRGdW5jLCBjdXJyaWVkSXRlcmFibGUpID0+IGN1cnJpZWRJdGVyYWJsZVxuICAgICAgICAgICAgPyBmbGF0VHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBjdXJyaWVkRnVuYywgY3VycmllZEl0ZXJhYmxlKVxuICAgICAgICAgICAgOiBmbGF0VHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBjdXJyaWVkRnVuYyk7XG4gICAgfVxuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEl0ZXJhYmxlKSA9PiBmbGF0VHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBmdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyKGkgPT4gaSAhPT0gdW5kZWZpbmVkICYmIGkgIT09IG51bGwsIGZsYXR0ZW4oX2ZsYXRUcmFuc2Zvcm0oY29uY3VycmVuY3ksIGZ1bmMsIGl0ZXJhYmxlKSkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvbmNlUmVhZGFibGUoc3RyZWFtKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBzdHJlYW0ub25jZSgncmVhZGFibGUnLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuYXN5bmMgZnVuY3Rpb24qIF9mcm9tU3RyZWFtKHN0cmVhbSkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzdHJlYW0ucmVhZCgpO1xuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgeWllbGQgZGF0YTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJlYW0uX3JlYWRhYmxlU3RhdGUuZW5kZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG9uY2VSZWFkYWJsZShzdHJlYW0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZyb21TdHJlYW0oc3RyZWFtKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJlYW1bU3ltYm9sLmFzeW5jSXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfVxuICAgIHJldHVybiBfZnJvbVN0cmVhbShzdHJlYW0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiogbWVyZ2UoLi4uaXRlcmFibGVzKSB7XG4gICAgY29uc3Qgc291cmNlcyA9IG5ldyBTZXQoaXRlcmFibGVzLm1hcChnZXRJdGVyYXRvcikpO1xuICAgIHdoaWxlIChzb3VyY2VzLnNpemUgPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2Ygc291cmNlcykge1xuICAgICAgICAgICAgY29uc3QgbmV4dFZhbCA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChuZXh0VmFsLmRvbmUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VzLmRlbGV0ZShpdGVyYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXh0VmFsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZShmaXJzdEZuLCAuLi5mbnMpIHtcbiAgICBsZXQgcHJldmlvdXNGbiA9IGZpcnN0Rm4oKTtcbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgZm5zKSB7XG4gICAgICAgIHByZXZpb3VzRm4gPSBmdW5jKHByZXZpb3VzRm4pO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlvdXNGbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24qIF9wYXJhbGxlbE1hcChjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBsZXQgdHJhbnNmb3JtRXJyb3IgPSBudWxsO1xuICAgIGNvbnN0IHdyYXBGdW5jID0gdmFsdWUgPT4gKHtcbiAgICAgICAgdmFsdWU6IGZ1bmModmFsdWUpLFxuICAgIH0pO1xuICAgIGNvbnN0IHN0b3BPbkVycm9yID0gYXN5bmMgZnVuY3Rpb24qIChzb3VyY2UpIHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1FcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHlpZWxkIHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvdXRwdXQgPSBwaXBlbGluZSgoKSA9PiBpdGVyYWJsZSwgYnVmZmVyKDEpLCBzdG9wT25FcnJvciwgbWFwKHdyYXBGdW5jKSwgYnVmZmVyKGNvbmN1cnJlbmN5IC0gMSkpO1xuICAgIGNvbnN0IGl0ciA9IGdldEl0ZXJhdG9yKG91dHB1dCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgaXRyLm5leHQoKTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBhd2FpdCB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghdHJhbnNmb3JtRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1FcnJvciA9IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0cmFuc2Zvcm1FcnJvcikge1xuICAgICAgICB0aHJvdyB0cmFuc2Zvcm1FcnJvcjtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXJhbGxlbE1hcChjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBpZiAoZnVuYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEZ1bmMsIGN1cnJpZWRJdGVyYWJsZSkgPT4gcGFyYWxsZWxNYXAoY29uY3VycmVuY3ksIGN1cnJpZWRGdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICBpZiAoaXRlcmFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY3VycmllZEl0ZXJhYmxlID0+IHBhcmFsbGVsTWFwKGNvbmN1cnJlbmN5LCBmdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICBpZiAoY29uY3VycmVuY3kgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG1hcChmdW5jLCBpdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfcGFyYWxsZWxNYXAoY29uY3VycmVuY3ksIGZ1bmMsIGl0ZXJhYmxlKTtcbn1cblxuZnVuY3Rpb24gcGFyYWxsZWxGbGF0TWFwKGNvbmN1cnJlbmN5LCBmdW5jLCBpdGVyYWJsZSkge1xuICAgIGlmIChmdW5jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyaWVkRnVuYywgY3VycmllZEl0ZXJhYmxlKSA9PiBjdXJyaWVkSXRlcmFibGVcbiAgICAgICAgICAgID8gcGFyYWxsZWxGbGF0TWFwKGNvbmN1cnJlbmN5LCBjdXJyaWVkRnVuYywgY3VycmllZEl0ZXJhYmxlKVxuICAgICAgICAgICAgOiBwYXJhbGxlbEZsYXRNYXAoY29uY3VycmVuY3ksIGN1cnJpZWRGdW5jKTtcbiAgICB9XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyaWVkSXRlcmFibGUpID0+IHBhcmFsbGVsRmxhdE1hcChjb25jdXJyZW5jeSwgZnVuYywgY3VycmllZEl0ZXJhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcihpID0+IGkgIT09IHVuZGVmaW5lZCAmJiBpICE9PSBudWxsLCBmbGF0dGVuKHBhcmFsbGVsTWFwKGNvbmN1cnJlbmN5LCBmdW5jLCBpdGVyYWJsZSkpKTtcbn1cblxuLy8vIDxyZWZlcmVuY2UgbGliPVwiZXNuZXh0LmFzeW5jaXRlcmFibGVcIiAvPlxuYXN5bmMgZnVuY3Rpb24qIHBhcmFsbGVsTWVyZ2UoLi4uaXRlcmFibGVzKSB7XG4gICAgY29uc3QgaW5wdXRzID0gaXRlcmFibGVzLm1hcChnZXRJdGVyYXRvcik7XG4gICAgY29uc3QgY29uY3VycmVudFdvcmsgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdmFsdWVzID0gbmV3IE1hcCgpO1xuICAgIGxldCBsYXN0RXJyb3IgPSBudWxsO1xuICAgIGxldCBlcnJDYiA9IG51bGw7XG4gICAgbGV0IHZhbHVlQ2IgPSBudWxsO1xuICAgIGNvbnN0IG5vdGlmeUVycm9yID0gZXJyID0+IHtcbiAgICAgICAgbGFzdEVycm9yID0gZXJyO1xuICAgICAgICBpZiAoZXJyQ2IpIHtcbiAgICAgICAgICAgIGVyckNiKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG5vdGlmeURvbmUgPSB2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZUNiKSB7XG4gICAgICAgICAgICB2YWx1ZUNiKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgd2FpdEZvclF1ZXVlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAobGFzdEVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QobGFzdEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlQ2IgPSByZXNvbHZlO1xuICAgICAgICBlcnJDYiA9IHJlamVjdDtcbiAgICB9KTtcbiAgICBjb25zdCBxdWV1ZU5leHQgPSBpbnB1dCA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRWYWwgPSBQcm9taXNlLnJlc29sdmUoaW5wdXQubmV4dCgpKS50aGVuKGFzeW5jICh7IGRvbmUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5zZXQoaW5wdXQsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmN1cnJlbnRXb3JrLmRlbGV0ZShuZXh0VmFsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmN1cnJlbnRXb3JrLmFkZChuZXh0VmFsKTtcbiAgICAgICAgbmV4dFZhbC50aGVuKG5vdGlmeURvbmUsIG5vdGlmeUVycm9yKTtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRzKSB7XG4gICAgICAgIHF1ZXVlTmV4dChpbnB1dCk7XG4gICAgfVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIC8vIFdlIHRlY2huaWNhbGx5IGRvbid0IGhhdmUgdG8gY2hlY2sgYHZhbHVlcy5zaXplYCBhcyB0aGUgZm9yIGxvb3Agc2hvdWxkIGhhdmUgZW1wdGllZCBpdFxuICAgICAgICAvLyBIb3dldmVyIEkgaGF2ZW4ndCB5ZXQgZm91bmQgc3BlY3MgdmVyaWZ5aW5nIHRoYXQgYmVoYXZpb3IsIG9ubHkgdGVzdHNcbiAgICAgICAgLy8gdGhlIGd1YXJkIGluIHdhaXRGb3JRdWV1ZSgpIGNoZWNraW5nIGZvciB2YWx1ZXMgaXMgaW4gcGxhY2UgZm9yIHRoZSBzYW1lIHJlYXNvblxuICAgICAgICBpZiAoY29uY3VycmVudFdvcmsuc2l6ZSA9PT0gMCAmJiB2YWx1ZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHdhaXRGb3JRdWV1ZSgpO1xuICAgICAgICBmb3IgKGNvbnN0IFtpbnB1dCwgdmFsdWVdIG9mIHZhbHVlcykge1xuICAgICAgICAgICAgdmFsdWVzLmRlbGV0ZShpbnB1dCk7XG4gICAgICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgICAgICAgIHF1ZXVlTmV4dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIF9yZWR1Y2UoZnVuYywgc3RhcnQsIGl0ZXJhYmxlKSB7XG4gICAgbGV0IHZhbHVlID0gc3RhcnQ7XG4gICAgZm9yIGF3YWl0IChjb25zdCBuZXh0SXRlbSBvZiBpdGVyYWJsZSkge1xuICAgICAgICB2YWx1ZSA9IGF3YWl0IGZ1bmModmFsdWUsIG5leHRJdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gcmVkdWNlKGZ1bmMsIHN0YXJ0LCBpdGVyYWJsZSkge1xuICAgIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZFN0YXJ0LCBjdXJyaWVkSXRlcmFibGUpID0+IGN1cnJpZWRJdGVyYWJsZSA/IF9yZWR1Y2UoZnVuYywgY3VycmllZFN0YXJ0LCBjdXJyaWVkSXRlcmFibGUpIDogcmVkdWNlKGZ1bmMsIGN1cnJpZWRTdGFydCk7XG4gICAgfVxuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEl0ZXJhYmxlKSA9PiByZWR1Y2UoZnVuYywgc3RhcnQsIGN1cnJpZWRJdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVkdWNlKGZ1bmMsIHN0YXJ0LCBpdGVyYWJsZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uKiBfdGFrZShjb3VudCwgaXRlcmFibGUpIHtcbiAgICBsZXQgdGFrZW4gPSAwO1xuICAgIGZvciBhd2FpdCAoY29uc3QgdmFsIG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgIHlpZWxkIGF3YWl0IHZhbDtcbiAgICAgICAgdGFrZW4rKztcbiAgICAgICAgaWYgKHRha2VuID49IGNvdW50KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uKiBfc3luY1Rha2UoY291bnQsIGl0ZXJhYmxlKSB7XG4gICAgbGV0IHRha2VuID0gMDtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBpdGVyYWJsZSkge1xuICAgICAgICB5aWVsZCB2YWw7XG4gICAgICAgIHRha2VuKys7XG4gICAgICAgIGlmICh0YWtlbiA+PSBjb3VudCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB0YWtlKGNvdW50LCBpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjdXJyaWVkSXRlcmFibGUgPT4gdGFrZShjb3VudCwgY3VycmllZEl0ZXJhYmxlKTtcbiAgICB9XG4gICAgaWYgKGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkge1xuICAgICAgICByZXR1cm4gX3Rha2UoY291bnQsIGl0ZXJhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIF9zeW5jVGFrZShjb3VudCwgaXRlcmFibGUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiogX2FzeW5jVGFwKGZ1bmMsIGl0ZXJhYmxlKSB7XG4gICAgZm9yIGF3YWl0IChjb25zdCB2YWwgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgYXdhaXQgZnVuYyh2YWwpO1xuICAgICAgICB5aWVsZCB2YWw7XG4gICAgfVxufVxuZnVuY3Rpb24gdGFwKGZ1bmMsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyaWVkSXRlcmFibGUpID0+IF9hc3luY1RhcChmdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gX2FzeW5jVGFwKGZ1bmMsIGl0ZXJhYmxlKTtcbn1cblxuZnVuY3Rpb24gYWRkVGltZShhLCBiKSB7XG4gICAgbGV0IHNlY29uZHMgPSBhWzBdICsgYlswXTtcbiAgICBsZXQgbmFub3NlY29uZHMgPSBhWzFdICsgYlsxXTtcbiAgICBpZiAobmFub3NlY29uZHMgPj0gMTAwMDAwMDAwMCkge1xuICAgICAgICBjb25zdCByZW1haW5kZXIgPSBuYW5vc2Vjb25kcyAlIDEwMDAwMDAwMDA7XG4gICAgICAgIHNlY29uZHMgKz0gKG5hbm9zZWNvbmRzIC0gcmVtYWluZGVyKSAvIDEwMDAwMDAwMDA7XG4gICAgICAgIG5hbm9zZWNvbmRzID0gcmVtYWluZGVyO1xuICAgIH1cbiAgICByZXR1cm4gW3NlY29uZHMsIG5hbm9zZWNvbmRzXTtcbn1cbmFzeW5jIGZ1bmN0aW9uKiBfYXN5bmNUaW1lKGNvbmZpZywgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdHIgPSBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICBsZXQgdG90YWwgPSBbMCwgMF07XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBhd2FpdCBpdHIubmV4dCgpO1xuICAgICAgICBjb25zdCBkZWx0YSA9IHByb2Nlc3MuaHJ0aW1lKHN0YXJ0KTtcbiAgICAgICAgdG90YWwgPSBhZGRUaW1lKHRvdGFsLCBkZWx0YSk7XG4gICAgICAgIGlmIChjb25maWcucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGNvbmZpZy5wcm9ncmVzcyhkZWx0YSwgdG90YWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnRvdGFsKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRvdGFsKHRvdGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiogX3N5bmNUaW1lKGNvbmZpZywgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdHIgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgbGV0IHRvdGFsID0gWzAsIDBdO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcHJvY2Vzcy5ocnRpbWUoKTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gaXRyLm5leHQoKTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBwcm9jZXNzLmhydGltZShzdGFydCk7XG4gICAgICAgIHRvdGFsID0gYWRkVGltZSh0b3RhbCwgZGVsdGEpO1xuICAgICAgICBpZiAoY29uZmlnLnByb2dyZXNzKSB7XG4gICAgICAgICAgICBjb25maWcucHJvZ3Jlc3MoZGVsdGEsIHRvdGFsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy50b3RhbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy50b3RhbCh0b3RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxufVxuZnVuY3Rpb24gdGltZShjb25maWcgPSB7fSwgaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY3VycmllZEl0ZXJhYmxlID0+IHRpbWUoY29uZmlnLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICBpZiAoaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIF9hc3luY1RpbWUoY29uZmlnLCBpdGVyYWJsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gX3N5bmNUaW1lKGNvbmZpZywgaXRlcmFibGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3RyYW5zZm9ybShjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICBjb25zdCByZXN1bHRRdWV1ZSA9IFtdO1xuICAgIGNvbnN0IHJlYWRRdWV1ZSA9IFtdO1xuICAgIGxldCBlbmRlZCA9IGZhbHNlO1xuICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG4gICAgbGV0IGluZmxpZ2h0Q291bnQgPSAwO1xuICAgIGxldCBsYXN0RXJyb3IgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGZ1bGZpbGxSZWFkUXVldWUoKSB7XG4gICAgICAgIHdoaWxlIChyZWFkUXVldWUubGVuZ3RoID4gMCAmJiByZXN1bHRRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlc29sdmUgfSA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRvbmU6IGZhbHNlLCB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocmVhZFF1ZXVlLmxlbmd0aCA+IDAgJiYgaW5mbGlnaHRDb3VudCA9PT0gMCAmJiBlbmRlZCkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNvbHZlLCByZWplY3QgfSA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChsYXN0RXJyb3IpO1xuICAgICAgICAgICAgICAgIGxhc3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmaWxsUXVldWUoKSB7XG4gICAgICAgIGlmIChlbmRlZCkge1xuICAgICAgICAgICAgZnVsZmlsbFJlYWRRdWV1ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZmxpZ2h0Q291bnQgKyByZXN1bHRRdWV1ZS5sZW5ndGggPj0gY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgaW5mbGlnaHRDb3VudCsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICBlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaW5mbGlnaHRDb3VudC0tO1xuICAgICAgICAgICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hcEFuZFF1ZXVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZmxpZ2h0Q291bnQtLTtcbiAgICAgICAgICAgIGxhc3RFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgZnVsZmlsbFJlYWRRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG1hcEFuZFF1ZXVlKGl0clZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGZ1bmMoaXRyVmFsdWUpO1xuICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0RXJyb3IgPSBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpbmZsaWdodENvdW50LS07XG4gICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIGlmIChyZXN1bHRRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgICAgICAgIHJlYWRRdWV1ZS5wdXNoKGRlZmVycmVkKTtcbiAgICAgICAgICAgIGZpbGxRdWV1ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBmaWxsUXVldWUoKTtcbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlIH07XG4gICAgfVxuICAgIGNvbnN0IGFzeW5jSXRlcmFibGVJdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dCxcbiAgICAgICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTogKCkgPT4gYXN5bmNJdGVyYWJsZUl0ZXJhdG9yLFxuICAgIH07XG4gICAgcmV0dXJuIGFzeW5jSXRlcmFibGVJdGVyYXRvcjtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybShjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBpZiAoZnVuYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEZ1bmMsIGN1cnJpZWRJdGVyYWJsZSkgPT4gY3VycmllZEl0ZXJhYmxlXG4gICAgICAgICAgICA/IHRyYW5zZm9ybShjb25jdXJyZW5jeSwgY3VycmllZEZ1bmMsIGN1cnJpZWRJdGVyYWJsZSlcbiAgICAgICAgICAgIDogdHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBjdXJyaWVkRnVuYyk7XG4gICAgfVxuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEl0ZXJhYmxlKSA9PiB0cmFuc2Zvcm0oY29uY3VycmVuY3ksIGZ1bmMsIGN1cnJpZWRJdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfdHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBmdW5jLCBpdGVyYWJsZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIF93cml0ZVRvU3RyZWFtKHN0cmVhbSwgaXRlcmFibGUpIHtcbiAgICBsZXQgbGFzdEVycm9yID0gbnVsbDtcbiAgICBsZXQgZXJyQ2IgPSBudWxsO1xuICAgIGxldCBkcmFpbkNiID0gbnVsbDtcbiAgICBjb25zdCBub3RpZnlFcnJvciA9IGVyciA9PiB7XG4gICAgICAgIGxhc3RFcnJvciA9IGVycjtcbiAgICAgICAgaWYgKGVyckNiKSB7XG4gICAgICAgICAgICBlcnJDYihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBub3RpZnlEcmFpbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGRyYWluQ2IpIHtcbiAgICAgICAgICAgIGRyYWluQ2IoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG5vdGlmeUVycm9yKTtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdkcmFpbicsIG5vdGlmeURyYWluKTtcbiAgICB9O1xuICAgIHN0cmVhbS5vbmNlKCdlcnJvcicsIG5vdGlmeUVycm9yKTtcbiAgICBjb25zdCB3YWl0Rm9yRHJhaW4gPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChsYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobGFzdEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ub25jZSgnZHJhaW4nLCBub3RpZnlEcmFpbik7XG4gICAgICAgIGRyYWluQ2IgPSByZXNvbHZlO1xuICAgICAgICBlcnJDYiA9IHJlamVjdDtcbiAgICB9KTtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgIGlmIChzdHJlYW0ud3JpdGUodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYXdhaXQgd2FpdEZvckRyYWluKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RFcnJvcikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICAgIGlmIChsYXN0RXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbGFzdEVycm9yO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHdyaXRlVG9TdHJlYW0oc3RyZWFtLCBpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEl0ZXJhYmxlKSA9PiBfd3JpdGVUb1N0cmVhbShzdHJlYW0sIGN1cnJpZWRJdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfd3JpdGVUb1N0cmVhbShzdHJlYW0sIGl0ZXJhYmxlKTtcbn1cblxuZXhwb3J0IHsgYmF0Y2gsIGJ1ZmZlciwgY29sbGVjdCwgY29uY2F0LCBjb25zdW1lLCBmaWx0ZXIsIGZsYXRNYXAsIGZsYXRUcmFuc2Zvcm0sIGZsYXR0ZW4sIGZyb21TdHJlYW0sIGdldEl0ZXJhdG9yLCBtYXAsIG1lcmdlLCBwYXJhbGxlbEZsYXRNYXAsIHBhcmFsbGVsTWFwLCBwYXJhbGxlbE1lcmdlLCBwaXBlbGluZSwgcmVkdWNlLCB0YWtlLCB0YXAsIHRpbWUsIHRyYW5zZm9ybSwgd3JpdGVUb1N0cmVhbSB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlYWRcblxudmFyIE1TQiA9IDB4ODBcbiAgLCBSRVNUID0gMHg3RlxuXG5mdW5jdGlvbiByZWFkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciByZXMgICAgPSAwXG4gICAgLCBvZmZzZXQgPSBvZmZzZXQgfHwgMFxuICAgICwgc2hpZnQgID0gMFxuICAgICwgY291bnRlciA9IG9mZnNldFxuICAgICwgYlxuICAgICwgbCA9IGJ1Zi5sZW5ndGhcblxuICBkbyB7XG4gICAgaWYgKGNvdW50ZXIgPj0gbCB8fCBzaGlmdCA+IDQ5KSB7XG4gICAgICByZWFkLmJ5dGVzID0gMFxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0NvdWxkIG5vdCBkZWNvZGUgdmFyaW50JylcbiAgICB9XG4gICAgYiA9IGJ1Zltjb3VudGVyKytdXG4gICAgcmVzICs9IHNoaWZ0IDwgMjhcbiAgICAgID8gKGIgJiBSRVNUKSA8PCBzaGlmdFxuICAgICAgOiAoYiAmIFJFU1QpICogTWF0aC5wb3coMiwgc2hpZnQpXG4gICAgc2hpZnQgKz0gN1xuICB9IHdoaWxlIChiID49IE1TQilcblxuICByZWFkLmJ5dGVzID0gY291bnRlciAtIG9mZnNldFxuXG4gIHJldHVybiByZXNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZW5jb2RlXG5cbnZhciBNU0IgPSAweDgwXG4gICwgUkVTVCA9IDB4N0ZcbiAgLCBNU0JBTEwgPSB+UkVTVFxuICAsIElOVCA9IE1hdGgucG93KDIsIDMxKVxuXG5mdW5jdGlvbiBlbmNvZGUobnVtLCBvdXQsIG9mZnNldCkge1xuICBpZiAoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgJiYgbnVtID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICBlbmNvZGUuYnl0ZXMgPSAwXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0NvdWxkIG5vdCBlbmNvZGUgdmFyaW50JylcbiAgfVxuICBvdXQgPSBvdXQgfHwgW11cbiAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDBcbiAgdmFyIG9sZE9mZnNldCA9IG9mZnNldFxuXG4gIHdoaWxlKG51bSA+PSBJTlQpIHtcbiAgICBvdXRbb2Zmc2V0KytdID0gKG51bSAmIDB4RkYpIHwgTVNCXG4gICAgbnVtIC89IDEyOFxuICB9XG4gIHdoaWxlKG51bSAmIE1TQkFMTCkge1xuICAgIG91dFtvZmZzZXQrK10gPSAobnVtICYgMHhGRikgfCBNU0JcbiAgICBudW0gPj4+PSA3XG4gIH1cbiAgb3V0W29mZnNldF0gPSBudW0gfCAwXG4gIFxuICBlbmNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXQgKyAxXG4gIFxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBlbmNvZGU6IHJlcXVpcmUoJy4vZW5jb2RlLmpzJylcbiAgLCBkZWNvZGU6IHJlcXVpcmUoJy4vZGVjb2RlLmpzJylcbiAgLCBlbmNvZGluZ0xlbmd0aDogcmVxdWlyZSgnLi9sZW5ndGguanMnKVxufVxuIiwiXG52YXIgTjEgPSBNYXRoLnBvdygyLCAgNylcbnZhciBOMiA9IE1hdGgucG93KDIsIDE0KVxudmFyIE4zID0gTWF0aC5wb3coMiwgMjEpXG52YXIgTjQgPSBNYXRoLnBvdygyLCAyOClcbnZhciBONSA9IE1hdGgucG93KDIsIDM1KVxudmFyIE42ID0gTWF0aC5wb3coMiwgNDIpXG52YXIgTjcgPSBNYXRoLnBvdygyLCA0OSlcbnZhciBOOCA9IE1hdGgucG93KDIsIDU2KVxudmFyIE45ID0gTWF0aC5wb3coMiwgNjMpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPCBOMSA/IDFcbiAgOiB2YWx1ZSA8IE4yID8gMlxuICA6IHZhbHVlIDwgTjMgPyAzXG4gIDogdmFsdWUgPCBONCA/IDRcbiAgOiB2YWx1ZSA8IE41ID8gNVxuICA6IHZhbHVlIDwgTjYgPyA2XG4gIDogdmFsdWUgPCBONyA/IDdcbiAgOiB2YWx1ZSA8IE44ID8gOFxuICA6IHZhbHVlIDwgTjkgPyA5XG4gIDogICAgICAgICAgICAgIDEwXG4gIClcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MYXp5SXBmc0ltYWdlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL0xhenlJcGZzSW1hZ2UuY3NzJ1xuaW1wb3J0ICcuL1NwaW5uZXIuY3NzJ1xuaW1wb3J0IHsgTGF6eUltYWdlIH0gZnJvbSAncmVhY3QtbGF6eS1pbWFnZXMnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBORlRTdG9yYWdlIH0gZnJvbSAnbmZ0LnN0b3JhZ2UnXG5pbXBvcnQgeyBkZWZhdWx0UmVkdWNlciB9IGZyb20gJy4vZGVmYXVsdFJlZHVjZXInXG5cbmNvbnN0IExhenlJcGZzSW1hZ2UgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHsgZW5kcG9pbnQsIHRva2VuLCBpcGZzcGF0aCwgc2V0SXBmc1VyaSB9ID0gcHJvcHNcblxuICAgIGlmICghZW5kcG9pbnQgfHwgIXRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwYXNzIG5mdC5zdG9yYWdlIGVuZHBvaW50IGFuZCB0b2tlbiB0byBMYXp5SXBmc0ltYWdlIGNvbXBvbmVudC5cIilcbiAgICB9XG5cbiAgICBjb25zdCBpcGZzUHJlZml4ID0gaXBmc3BhdGggPyBpcGZzcGF0aCA6IFwiaHR0cHM6Ly9pcGZzLmlvL2lwZnMgXCJcblxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihkZWZhdWx0UmVkdWNlcixcbiAgICAgICAge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICB1cmk6IG51bGwsXG4gICAgICAgICAgICBtZXNzYWdlOiBudWxsXG4gICAgICAgIH0pXG5cbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2lwZnNVcmksIHNldElwZnNdID0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3QgdXBsb2FkQXJ0d29yayA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgZG9GZXRjaCA9IGFzeW5jIChyZXEpID0+IHtcbiAgICAgICAgICAgIGZldGNoKHJlcSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnRleHQoKS50aGVuKHRleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJFUlJPUlwiLCBtZXNzYWdlOiB0ZXh0IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5ibG9iKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGltZ0Jsb2IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQmxvYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJpID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpbWdCbG9iKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNVQ0NFU1NcIiwgbWVzc2FnZTogaXBmc1VyaSwgcGF5bG9hZDogdXJpIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNob29zZSBmaWxlIGZpcnN0XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUFJPQ0VTU0lOR1wiLCBtZXNzYWdlOiBcIlVwbG9hZGluZyB0byBJUEZTLCBwbGVhc2Ugd2FpdCAuLi5cIiB9KVxuXG4gICAgICAgICAgICBjb25zdCBzdG9yYWdlID0gbmV3IE5GVFN0b3JhZ2UoeyBlbmRwb2ludCwgdG9rZW4gfSlcbiAgICAgICAgICAgIGNvbnN0IGNpZCA9IGF3YWl0IHN0b3JhZ2Uuc3RvcmVCbG9iKG5ldyBCbG9iKFtmaWxlXSkpXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBzdG9yYWdlLnN0YXR1cyhjaWQpXG5cbiAgICAgICAgICAgIC8vIFRPRE86IGZvciB0ZXN0aW5nIG9ubHlcbiAgICAgICAgICAgIC8vIGNvbnN0IGNpZCA9IFwiYmFma3JlaWY3dHozaWRxajJwc2c3bWZ0Mm96N2hnamN1emhpNGl2YWQ1emxjencybjc2ajYzNmhyM2lcIlxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeyBjaWQgfSlcbiAgICAgICAgICAgIC8vIGNvbnN0IHNsZWVwID0gbXMgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICAgICAgICAgIC8vIGF3YWl0IHNsZWVwICgyKjEwMDApXG5cbiAgICAgICAgICAgIHNldEZpbGUobnVsbClcblxuICAgICAgICAgICAgY29uc3QgaXBmc1VyaSA9IGAke2lwZnNQcmVmaXh9LyR7Y2lkfWBcbiAgICAgICAgICAgIHNldElwZnMoaXBmc1VyaSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNldElwZnNVcmkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFVCBVUklcIilcbiAgICAgICAgICAgICAgICBzZXRJcGZzVXJpKGlwZnNVcmkpIC8vIHBhcmVudCBjYWxsIGJhY2tcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOT1QgU0VUXCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJJTkZPXCIsIG1lc3NhZ2U6IGBVcGxvYWQgc3VjY2VzcyBhdCAke2lwZnNVcml9YCB9KVxuICAgICAgICAgICAgZG9GZXRjaChpcGZzVXJpKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVSUk9SXCIsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0RmlsZShldmVudC50YXJnZXQuZmlsZXNbMF0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX19mcmFtZVwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS51cmkgJiZcbiAgICAgICAgICAgICAgICAgICAgPExhenlJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBsb2FkX19hcnR3b3JrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3RhdGUudXJpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXJ0d29ya1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZUR1cmF0aW9uTXM9ezQwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsoeyBpbWFnZVByb3BzLCByZWYgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWYgaXMgZm9yIHRoZSBjb21wb25lbnQncyBvd24gcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzdGF0ZS5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZF9fcGxhY2Vob2xkZXJcIiByZWY9e3JlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsZWFzZSBiZSBwYXRpZW50LCBpdCBjb3VsZCB0YWtlIGEgZmV3IG1pbnV0ZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsPXsoeyBpbWFnZVByb3BzIH0pID0+IDxpbWcgey4uLmltYWdlUHJvcHN9IC8+fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX19wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxlYXNlIGJlIHBhdGllbnQsIGl0IGNvdWxkIHRha2UgYSBmZXcgbWludXRlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyghc3RhdGUudXJpICYmICFzdGF0ZS5sb2FkaW5nKSAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZF9fcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVwbG9hZF9fcHJvbXB0XCI+UGxlYXNlIHVwbG9hZCBubyBsZXNzIHRoYW4gWzMwMDB4MjAwMF08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biB1cGxvYWRfX2J0biBidG4tYmcgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpbGVfaW5wdXRcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXsoZSkgPT4gb25GaWxlQ2hhbmdlKGUpfSAvPlxuICAgICAgICAgICAgICAgIDEuIENob29zZSBGaWxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gdXBsb2FkX19idG4gYnRuLWJnIHJvdW5kZWRcIiBvbkNsaWNrPXtlID0+IHVwbG9hZEFydHdvcmsoZSl9PjIuIFVwbG9hZCBBcnR3b3JrPC9kaXY+XG4gICAgICAgICAgICB7c3RhdGUubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICB7IXN0YXRlLmVycm9yID8gPHNwYW4+4pyFPC9zcGFuPiA6IDxzcGFuPuKdjDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXp5SXBmc0ltYWdlOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TcGlubmVyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gYWN0aW9uLm1lc3NhZ2UgPyBhY3Rpb24ubWVzc2FnZSA6IHN0YXRlLm1lc3NhZ2VcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1BST0NFU1NJTkcnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cmk6IG51bGwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdTVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVyaTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdJTkZPJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdFUlJPUic6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVyaTogbnVsbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICAgIH1cbn0iLCJpbXBvcnQgTGF6eUlwZnNJbWFnZSBmcm9tIFwiLi9MYXp5SXBmc0ltYWdlXCI7XG5cbmV4cG9ydCB7IExhenlJcGZzSW1hZ2UgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5LWltYWdlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9