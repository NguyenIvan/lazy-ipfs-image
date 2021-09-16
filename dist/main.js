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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DemoComponent.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DemoComponent.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".img {\n  width: 25px;\n  height: 25px;\n}\n", ""]);
// Exports
module.exports = exports;


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
exports.push([module.i, ".upload__form {\n  max-width: 600px;\n  min-height: 600px;\n}\n\n.upload_message {\n  width: auto;\n}\n\n.upload__frame {\n  width: 100%;\n  min-height: 400px;\n  display:block;\n  position: relative;\n  border: solid white 3px;\n}\n\n.upload__placeholder , .upload__artwork {\n  background-color: transparent;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  max-height: 100%;\n  max-width: 100%;\n  transform: translate(-50%, -50%);\n}\n\n\n\n.btn {\n    font-family: \"Rebrand Bold\";\n    cursor: pointer;\n    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n  }\n  \n  .btn-bg {\n    background: white;\n    padding: 0.5rem 1rem;\n    mix-blend-mode: screen; /* This makes the cutout text possible */\n    color: black;\n    display: inline-block;\n  }\n  \n  .btn-bordered {\n    border: 2px solid white;\n  }\n  \n  .btn-light {\n    font-family: \"Monument Bold\" !important;\n  }\n  \n  .btn:hover, btn-bg:hover {\n    transform: scale(1.05);\n  }\n  \n  .btn-small {\n    font-size: .8rem;\n    text-align: left;\n  }\n  \n  .btn-dappy {\n    width: 60%;\n    margin: 0 auto;\n    display: flex; \n    justify-content: center;\n  }\n  \n  .btn-icon {\n    font-size: 1.2rem; \n    margin-right: .2rem\n  }\n  \n  .rounded {\n    border-radius: 150px;\n  }\n  \n  .wiggling:hover {\n    animation: tada;\n    animation-duration: 1s;\n  }", ""]);
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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


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

/***/ "./src/DemoComponent.css":
/*!*******************************!*\
  !*** ./src/DemoComponent.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./DemoComponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/DemoComponent.css");

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

/***/ "./src/DemoComponent.js":
/*!******************************!*\
  !*** ./src/DemoComponent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DemoComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoComponent.css */ "./src/DemoComponent.css");
/* harmony import */ var _DemoComponent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DemoComponent_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var END_POINT = process.env.REACT_APP_IPFS_END_POINT; // const API_KEY = process.env.REACT_APP_IPFS_API_KEY;
// const IPFS_PATH = process.env.REACT_APP_IPFS_PATH;

var DemoComponent = /*#__PURE__*/function (_Component) {
  _inherits(DemoComponent, _Component);

  var _super = _createSuper(DemoComponent);

  function DemoComponent(props) {
    var _this;

    _classCallCheck(this, DemoComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleOnClick", function (e) {
      alert("Clicked");
    });

    _this.logo = "https://th.bing.com/th/id/OIP.fiIZ2YKbMfTMGkpEGQ0YugHaHa?pid=ImgDet&rs=1";
    return _this;
  }

  _createClass(DemoComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleOnClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "logo",
        className: "img",
        src: this.logo
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "END POINT: ", END_POINT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Math.floor(Math.random() * 101)));
    }
  }]);

  return DemoComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DemoComponent);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

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








var LazyIpfsImage = function LazyIpfsImage(_ref) {
  var endpoint = _ref.endpoint,
      token = _ref.token,
      ipfspath = _ref.ipfspath;

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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var doFetch, storage, cid, status, _ipfsUri;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();

              doFetch = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
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
                  return _ref3.apply(this, arguments);
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
              dispatch({
                type: "INFO",
                message: "Upload success at ".concat(_ipfsUri)
              });
              doFetch(_ipfsUri);
              _context2.next = 25;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);
              dispatch({
                type: "ERROR",
                message: _context2.t0.message
              });

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 21]]);
    }));

    return function uploadArtwork(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onFileChange = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
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
      return _ref4.apply(this, arguments);
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
    placeholder: function placeholder(_ref5) {
      var imageProps = _ref5.imageProps,
          ref = _ref5.ref;
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
    actual: function actual(_ref6) {
      var imageProps = _ref6.imageProps;
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
  }, "Please upload no less than [3000x2000]"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    id: "file_input",
    type: "file",
    onChange: function onChange(e) {
      return onFileChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "btn btn-bg rounded",
    onClick: function onClick(e) {
      return uploadArtwork(e);
    }
  }, "Upload Artwork"), state.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
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
/*! exports provided: LazyIpfsImage, DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LazyIpfsImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LazyIpfsImage */ "./src/LazyIpfsImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyIpfsImage", function() { return _LazyIpfsImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DemoComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoComponent */ "./src/DemoComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return _DemoComponent__WEBPACK_IMPORTED_MODULE_1__["default"]; });





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9AaXBsZC9jYXIvY2pzL2Nhci1icm93c2VyLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL0BpcGxkL2Nhci9janMvbGliL2RlY29kZXIuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvQGlwbGQvY2FyL2Nqcy9saWIvZW5jb2Rlci5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9AaXBsZC9jYXIvY2pzL2xpYi9pbmRleGVkLXJlYWRlci1icm93c2VyLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL0BpcGxkL2Nhci9janMvbGliL2luZGV4ZXIuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvQGlwbGQvY2FyL2Nqcy9saWIvaXRlcmF0b3ItY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9AaXBsZC9jYXIvY2pzL2xpYi9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9AaXBsZC9jYXIvY2pzL2xpYi9yZWFkZXItYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9AaXBsZC9jYXIvY2pzL2xpYi93cml0ZXItYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9AaXBsZC9kYWctY2Jvci9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvQGlwbGQvZGFnLXBiL2Nqcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvQGlwbGQvZGFnLXBiL2Nqcy9zcmMvcGItZGVjb2RlLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL0BpcGxkL2RhZy1wYi9janMvc3JjL3BiLWVuY29kZS5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9AaXBsZC9kYWctcGIvY2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NhcmJpdGVzL2Nqcy9saWIvdHJlZXdhbGsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2FyYml0ZXMvY2pzL2xpYi90cmVld2Fsay9qb2luZXIuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2FyYml0ZXMvY2pzL2xpYi90cmVld2Fsay9zcGxpdHRlci5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvY2JvcmcuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi8wdWludC5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliLzFuZWdpbnQuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi8yYnl0ZXMuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi8zc3RyaW5nLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2Nib3JnL2Nqcy9saWIvNGFycmF5LmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2Nib3JnL2Nqcy9saWIvNW1hcC5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliLzZ0YWcuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi83ZmxvYXQuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi9ibC5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliL2J5dGUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi9pcy5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jYm9yZy9janMvbGliL2p1bXAuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY2JvcmcvY2pzL2xpYi90b2tlbi5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL3NyYy9EZW1vQ29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL3NyYy9MYXp5SXBmc0ltYWdlLmNzcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL3NyYy9TcGlubmVyLmNzcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvbXVsdGlmb3JtYXRzL2Nqcy9zcmMvYmFzZXMvYmFzZS5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy9iYXNlcy9iYXNlMzIuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvbXVsdGlmb3JtYXRzL2Nqcy9zcmMvYmFzZXMvYmFzZTU4LmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL211bHRpZm9ybWF0cy9janMvc3JjL2Jsb2NrLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL211bHRpZm9ybWF0cy9janMvc3JjL2J5dGVzLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL211bHRpZm9ybWF0cy9janMvc3JjL2NpZC5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy9jb2RlY3MvcmF3LmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL211bHRpZm9ybWF0cy9janMvc3JjL2hhc2hlcy9kaWdlc3QuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvbXVsdGlmb3JtYXRzL2Nqcy9zcmMvaGFzaGVzL2hhc2hlci5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9tdWx0aWZvcm1hdHMvY2pzL3NyYy92YXJpbnQuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvbXVsdGlmb3JtYXRzL2Nqcy92ZW5kb3IvYmFzZS14LmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL211bHRpZm9ybWF0cy9janMvdmVuZG9yL3ZhcmludC5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9uZnQuc3RvcmFnZS9zcmMvZ2F0ZXdheS5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9uZnQuc3RvcmFnZS9zcmMvbGliLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL25mdC5zdG9yYWdlL3NyYy9wbGF0Zm9ybS53ZWIuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvbmZ0LnN0b3JhZ2Uvc3JjL3Rva2VuLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL3AtcmV0cnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL3JldHJ5L2luZGV4LmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL3JldHJ5L2xpYi9yZXRyeS5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9yZXRyeS9saWIvcmV0cnlfb3BlcmF0aW9uLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL3N0cmVhbWluZy1pdGVyYWJsZXMvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvdmFyaW50L2RlY29kZS5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy92YXJpbnQvZW5jb2RlLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL3ZhcmludC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy92YXJpbnQvbGVuZ3RoLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vc3JjL0RlbW9Db21wb25lbnQuY3NzP2ZmMmYiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9zcmMvRGVtb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL3NyYy9MYXp5SXBmc0ltYWdlLmNzcz9kMDE3Iiwid2VicGFjazovL2RlbW8tY29tcG9uZW50Ly4vc3JjL0xhenlJcGZzSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZGVtby1jb21wb25lbnQvLi9zcmMvU3Bpbm5lci5jc3M/MWNjZCIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL3NyYy9kZWZhdWx0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL2RlbW8tY29tcG9uZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kZW1vLWNvbXBvbmVudC9leHRlcm5hbCBcInJlYWN0LWxhenktaW1hZ2VzXCIiXSwibmFtZXMiOlsiRU5EX1BPSU5UIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9JUEZTX0VORF9QT0lOVCIsIkRlbW9Db21wb25lbnQiLCJwcm9wcyIsImUiLCJhbGVydCIsImxvZ28iLCJoYW5kbGVPbkNsaWNrIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiQ29tcG9uZW50IiwiTGF6eUlwZnNJbWFnZSIsImVuZHBvaW50IiwidG9rZW4iLCJpcGZzcGF0aCIsIkVycm9yIiwiaXBmc1ByZWZpeCIsInVzZVJlZHVjZXIiLCJkZWZhdWx0UmVkdWNlciIsImxvYWRpbmciLCJlcnJvciIsInVyaSIsIm1lc3NhZ2UiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJmaWxlIiwic2V0RmlsZSIsImlwZnNVcmkiLCJzZXRJcGZzIiwidXBsb2FkQXJ0d29yayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkb0ZldGNoIiwicmVxIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJ0ZXh0IiwidHlwZSIsImJsb2IiLCJpbWdCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicGF5bG9hZCIsInN0b3JhZ2UiLCJORlRTdG9yYWdlIiwic3RvcmVCbG9iIiwiQmxvYiIsImNpZCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJvbkZpbGVDaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsImltYWdlUHJvcHMiLCJyZWYiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RCxvQkFBb0IsbUJBQU8sQ0FBQyxt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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0NhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1phOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RCxjQUFjLG1CQUFPLENBQUMsaUVBQWM7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZTtBQUN4QjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDeENhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDNUVhOztBQUVi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QWM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsSUFBSSxFQUFFLGtDQUFrQztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLElBQUksRUFBRSxXQUFXO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QyxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBYSxFOzs7Ozs7Ozs7OztBQ0F0QyxxQkFBcUIsbUJBQU8sQ0FBQyxzRUFBbUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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SztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1FQUFtRSxjQUFjO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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SSxTQUFLLFlBQUw7QUFDSSw2Q0FDT2pCLEtBRFA7QUFFSUosZUFBTyxFQUFFLElBRmI7QUFHSUMsYUFBSyxFQUFFLEtBSFg7QUFJSUMsV0FBRyxFQUFFLElBSlQ7QUFLSUMsZUFBTyxFQUFFQTtBQUxiOztBQU9KLFNBQUssU0FBTDtBQUNJLDZDQUNPQyxLQURQO0FBRUlKLGVBQU8sRUFBRSxLQUZiO0FBR0lDLGFBQUssRUFBRSxLQUhYO0FBSUlDLFdBQUcsRUFBRXNDLE1BQU0sQ0FBQ2QsT0FKaEI7QUFLSXZCLGVBQU8sRUFBRUE7QUFMYjs7QUFPSixTQUFLLE1BQUw7QUFDSSw2Q0FDT0MsS0FEUDtBQUVJRCxlQUFPLEVBQUVBO0FBRmI7O0FBSUosU0FBSyxPQUFMO0FBQ0ksNkNBQ09DLEtBRFA7QUFFSUosZUFBTyxFQUFFLEtBRmI7QUFHSUMsYUFBSyxFQUFFLElBSFg7QUFJSUMsV0FBRyxFQUFFLElBSlQ7QUFLSUMsZUFBTyxFQUFFQTtBQUxiOztBQU9KO0FBQ0ksWUFBTSxJQUFJUCxLQUFKLEVBQU47QUEvQlI7QUFpQ0gsQ0FuQ00sQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWRlckJyb3dzZXIgPSByZXF1aXJlKCcuL2xpYi9yZWFkZXItYnJvd3Nlci5qcycpO1xudmFyIGluZGV4ZXIgPSByZXF1aXJlKCcuL2xpYi9pbmRleGVyLmpzJyk7XG52YXIgaXRlcmF0b3IgPSByZXF1aXJlKCcuL2xpYi9pdGVyYXRvci5qcycpO1xudmFyIHdyaXRlckJyb3dzZXIgPSByZXF1aXJlKCcuL2xpYi93cml0ZXItYnJvd3Nlci5qcycpO1xudmFyIGluZGV4ZWRSZWFkZXJCcm93c2VyID0gcmVxdWlyZSgnLi9saWIvaW5kZXhlZC1yZWFkZXItYnJvd3Nlci5qcycpO1xuXG5cblxuZXhwb3J0cy5DYXJSZWFkZXIgPSByZWFkZXJCcm93c2VyLkNhclJlYWRlcjtcbmV4cG9ydHMuQ2FySW5kZXhlciA9IGluZGV4ZXIuQ2FySW5kZXhlcjtcbmV4cG9ydHMuQ2FyQmxvY2tJdGVyYXRvciA9IGl0ZXJhdG9yLkNhckJsb2NrSXRlcmF0b3I7XG5leHBvcnRzLkNhckNJREl0ZXJhdG9yID0gaXRlcmF0b3IuQ2FyQ0lESXRlcmF0b3I7XG5leHBvcnRzLkNhcldyaXRlciA9IHdyaXRlckJyb3dzZXIuQ2FyV3JpdGVyO1xuZXhwb3J0cy5DYXJJbmRleGVkUmVhZGVyID0gaW5kZXhlZFJlYWRlckJyb3dzZXIuQ2FySW5kZXhlZFJlYWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHZhcmludCA9IHJlcXVpcmUoJ3ZhcmludCcpO1xudmFyIGNpZCA9IHJlcXVpcmUoJ211bHRpZm9ybWF0cy9jaWQnKTtcbnZhciBEaWdlc3QgPSByZXF1aXJlKCdtdWx0aWZvcm1hdHMvaGFzaGVzL2RpZ2VzdCcpO1xudmFyIGRhZ0Nib3IgPSByZXF1aXJlKCdAaXBsZC9kYWctY2JvcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BOYW1lc3BhY2UoZSkge1xuICBpZiAoZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICB2YXIgbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChlKSB7XG4gICAgT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgaWYgKGsgIT09ICdkZWZhdWx0Jykge1xuICAgICAgICB2YXIgZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgayk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBrLCBkLmdldCA/IGQgOiB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBlW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgblsnZGVmYXVsdCddID0gZTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobik7XG59XG5cbnZhciB2YXJpbnRfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KHZhcmludCk7XG52YXIgRGlnZXN0X19uYW1lc3BhY2UgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BOYW1lc3BhY2UoRGlnZXN0KTtcblxuY29uc3QgQ0lEVjBfQllURVMgPSB7XG4gIFNIQTJfMjU2OiAxOCxcbiAgTEVOR1RIOiAzMixcbiAgREFHX1BCOiAxMTJcbn07XG5hc3luYyBmdW5jdGlvbiByZWFkVmFyaW50KHJlYWRlcikge1xuICBjb25zdCBieXRlcyA9IGF3YWl0IHJlYWRlci51cFRvKDgpO1xuICBjb25zdCBpID0gdmFyaW50X19kZWZhdWx0WydkZWZhdWx0J10uZGVjb2RlKGJ5dGVzKTtcbiAgcmVhZGVyLnNlZWsodmFyaW50X19kZWZhdWx0WydkZWZhdWx0J10uZGVjb2RlLmJ5dGVzKTtcbiAgcmV0dXJuIGk7XG59XG5hc3luYyBmdW5jdGlvbiByZWFkSGVhZGVyKHJlYWRlcikge1xuICBjb25zdCBsZW5ndGggPSBhd2FpdCByZWFkVmFyaW50KHJlYWRlcik7XG4gIGlmIChsZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ0FSIGhlYWRlciAoemVybyBsZW5ndGgpJyk7XG4gIH1cbiAgY29uc3QgaGVhZGVyID0gYXdhaXQgcmVhZGVyLmV4YWN0bHkobGVuZ3RoKTtcbiAgcmVhZGVyLnNlZWsobGVuZ3RoKTtcbiAgY29uc3QgYmxvY2sgPSBkYWdDYm9yLmRlY29kZShoZWFkZXIpO1xuICBpZiAoYmxvY2sgPT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGJsb2NrKSB8fCB0eXBlb2YgYmxvY2sgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENBUiBoZWFkZXIgZm9ybWF0Jyk7XG4gIH1cbiAgaWYgKGJsb2NrLnZlcnNpb24gIT09IDEpIHtcbiAgICBpZiAodHlwZW9mIGJsb2NrLnZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgQ0FSIHZlcnNpb246IFwiJHsgYmxvY2sudmVyc2lvbiB9XCJgKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIENBUiB2ZXJzaW9uOiAkeyBibG9jay52ZXJzaW9uIH1gKTtcbiAgfVxuICBpZiAoIUFycmF5LmlzQXJyYXkoYmxvY2sucm9vdHMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENBUiBoZWFkZXIgZm9ybWF0Jyk7XG4gIH1cbiAgaWYgKE9iamVjdC5rZXlzKGJsb2NrKS5maWx0ZXIocCA9PiBwICE9PSAncm9vdHMnICYmIHAgIT09ICd2ZXJzaW9uJykubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENBUiBoZWFkZXIgZm9ybWF0Jyk7XG4gIH1cbiAgcmV0dXJuIGJsb2NrO1xufVxuYXN5bmMgZnVuY3Rpb24gcmVhZE11bHRpaGFzaChyZWFkZXIpIHtcbiAgY29uc3QgYnl0ZXMgPSBhd2FpdCByZWFkZXIudXBUbyg4KTtcbiAgdmFyaW50X19kZWZhdWx0WydkZWZhdWx0J10uZGVjb2RlKGJ5dGVzKTtcbiAgY29uc3QgY29kZUxlbmd0aCA9IHZhcmludF9fZGVmYXVsdFsnZGVmYXVsdCddLmRlY29kZS5ieXRlcztcbiAgY29uc3QgbGVuZ3RoID0gdmFyaW50X19kZWZhdWx0WydkZWZhdWx0J10uZGVjb2RlKGJ5dGVzLnN1YmFycmF5KHZhcmludF9fZGVmYXVsdFsnZGVmYXVsdCddLmRlY29kZS5ieXRlcykpO1xuICBjb25zdCBsZW5ndGhMZW5ndGggPSB2YXJpbnRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5kZWNvZGUuYnl0ZXM7XG4gIGNvbnN0IG1oTGVuZ3RoID0gY29kZUxlbmd0aCArIGxlbmd0aExlbmd0aCArIGxlbmd0aDtcbiAgY29uc3QgbXVsdGloYXNoID0gYXdhaXQgcmVhZGVyLmV4YWN0bHkobWhMZW5ndGgpO1xuICByZWFkZXIuc2VlayhtaExlbmd0aCk7XG4gIHJldHVybiBtdWx0aWhhc2g7XG59XG5hc3luYyBmdW5jdGlvbiByZWFkQ2lkKHJlYWRlcikge1xuICBjb25zdCBmaXJzdCA9IGF3YWl0IHJlYWRlci5leGFjdGx5KDIpO1xuICBpZiAoZmlyc3RbMF0gPT09IENJRFYwX0JZVEVTLlNIQTJfMjU2ICYmIGZpcnN0WzFdID09PSBDSURWMF9CWVRFUy5MRU5HVEgpIHtcbiAgICBjb25zdCBieXRlcyA9IGF3YWl0IHJlYWRlci5leGFjdGx5KDM0KTtcbiAgICByZWFkZXIuc2VlaygzNCk7XG4gICAgY29uc3QgbXVsdGloYXNoID0gRGlnZXN0X19uYW1lc3BhY2UuZGVjb2RlKGJ5dGVzKTtcbiAgICByZXR1cm4gY2lkLkNJRC5jcmVhdGUoMCwgQ0lEVjBfQllURVMuREFHX1BCLCBtdWx0aWhhc2gpO1xuICB9XG4gIGNvbnN0IHZlcnNpb24gPSBhd2FpdCByZWFkVmFyaW50KHJlYWRlcik7XG4gIGlmICh2ZXJzaW9uICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIENJRCB2ZXJzaW9uICgkeyB2ZXJzaW9uIH0pYCk7XG4gIH1cbiAgY29uc3QgY29kZWMgPSBhd2FpdCByZWFkVmFyaW50KHJlYWRlcik7XG4gIGNvbnN0IGJ5dGVzID0gYXdhaXQgcmVhZE11bHRpaGFzaChyZWFkZXIpO1xuICBjb25zdCBtdWx0aWhhc2ggPSBEaWdlc3RfX25hbWVzcGFjZS5kZWNvZGUoYnl0ZXMpO1xuICByZXR1cm4gY2lkLkNJRC5jcmVhdGUodmVyc2lvbiwgY29kZWMsIG11bHRpaGFzaCk7XG59XG5hc3luYyBmdW5jdGlvbiByZWFkQmxvY2tIZWFkKHJlYWRlcikge1xuICBjb25zdCBzdGFydCA9IHJlYWRlci5wb3M7XG4gIGxldCBsZW5ndGggPSBhd2FpdCByZWFkVmFyaW50KHJlYWRlcik7XG4gIGlmIChsZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ0FSIHNlY3Rpb24gKHplcm8gbGVuZ3RoKScpO1xuICB9XG4gIGxlbmd0aCArPSByZWFkZXIucG9zIC0gc3RhcnQ7XG4gIGNvbnN0IGNpZCA9IGF3YWl0IHJlYWRDaWQocmVhZGVyKTtcbiAgY29uc3QgYmxvY2tMZW5ndGggPSBsZW5ndGggLSAocmVhZGVyLnBvcyAtIHN0YXJ0KTtcbiAgcmV0dXJuIHtcbiAgICBjaWQsXG4gICAgbGVuZ3RoLFxuICAgIGJsb2NrTGVuZ3RoXG4gIH07XG59XG5hc3luYyBmdW5jdGlvbiByZWFkQmxvY2socmVhZGVyKSB7XG4gIGNvbnN0IHtjaWQsIGJsb2NrTGVuZ3RofSA9IGF3YWl0IHJlYWRCbG9ja0hlYWQocmVhZGVyKTtcbiAgY29uc3QgYnl0ZXMgPSBhd2FpdCByZWFkZXIuZXhhY3RseShibG9ja0xlbmd0aCk7XG4gIHJlYWRlci5zZWVrKGJsb2NrTGVuZ3RoKTtcbiAgcmV0dXJuIHtcbiAgICBieXRlcyxcbiAgICBjaWRcbiAgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHJlYWRCbG9ja0luZGV4KHJlYWRlcikge1xuICBjb25zdCBvZmZzZXQgPSByZWFkZXIucG9zO1xuICBjb25zdCB7Y2lkLCBsZW5ndGgsIGJsb2NrTGVuZ3RofSA9IGF3YWl0IHJlYWRCbG9ja0hlYWQocmVhZGVyKTtcbiAgY29uc3QgaW5kZXggPSB7XG4gICAgY2lkLFxuICAgIGxlbmd0aCxcbiAgICBibG9ja0xlbmd0aCxcbiAgICBvZmZzZXQsXG4gICAgYmxvY2tPZmZzZXQ6IHJlYWRlci5wb3NcbiAgfTtcbiAgcmVhZGVyLnNlZWsoaW5kZXguYmxvY2tMZW5ndGgpO1xuICByZXR1cm4gaW5kZXg7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWNvZGVyKHJlYWRlcikge1xuICBjb25zdCBoZWFkZXJQcm9taXNlID0gcmVhZEhlYWRlcihyZWFkZXIpO1xuICByZXR1cm4ge1xuICAgIGhlYWRlcjogKCkgPT4gaGVhZGVyUHJvbWlzZSxcbiAgICBhc3luYyAqYmxvY2tzKCkge1xuICAgICAgYXdhaXQgaGVhZGVyUHJvbWlzZTtcbiAgICAgIHdoaWxlICgoYXdhaXQgcmVhZGVyLnVwVG8oOCkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgeWllbGQgYXdhaXQgcmVhZEJsb2NrKHJlYWRlcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyAqYmxvY2tzSW5kZXgoKSB7XG4gICAgICBhd2FpdCBoZWFkZXJQcm9taXNlO1xuICAgICAgd2hpbGUgKChhd2FpdCByZWFkZXIudXBUbyg4KSkubGVuZ3RoID4gMCkge1xuICAgICAgICB5aWVsZCBhd2FpdCByZWFkQmxvY2tJbmRleChyZWFkZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGJ5dGVzUmVhZGVyKGJ5dGVzKSB7XG4gIGxldCBwb3MgPSAwO1xuICByZXR1cm4ge1xuICAgIGFzeW5jIHVwVG8obGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYnl0ZXMuc3ViYXJyYXkocG9zLCBwb3MgKyBNYXRoLm1pbihsZW5ndGgsIGJ5dGVzLmxlbmd0aCAtIHBvcykpO1xuICAgIH0sXG4gICAgYXN5bmMgZXhhY3RseShsZW5ndGgpIHtcbiAgICAgIGlmIChsZW5ndGggPiBieXRlcy5sZW5ndGggLSBwb3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBkYXRhJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZXMuc3ViYXJyYXkocG9zLCBwb3MgKyBsZW5ndGgpO1xuICAgIH0sXG4gICAgc2VlayhsZW5ndGgpIHtcbiAgICAgIHBvcyArPSBsZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgcG9zKCkge1xuICAgICAgcmV0dXJuIHBvcztcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBjaHVua1JlYWRlcihyZWFkQ2h1bmspIHtcbiAgbGV0IHBvcyA9IDA7XG4gIGxldCBoYXZlID0gMDtcbiAgbGV0IG9mZnNldCA9IDA7XG4gIGxldCBjdXJyZW50Q2h1bmsgPSBuZXcgVWludDhBcnJheSgwKTtcbiAgY29uc3QgcmVhZCA9IGFzeW5jIGxlbmd0aCA9PiB7XG4gICAgaGF2ZSA9IGN1cnJlbnRDaHVuay5sZW5ndGggLSBvZmZzZXQ7XG4gICAgY29uc3QgYnVmYSA9IFtjdXJyZW50Q2h1bmsuc3ViYXJyYXkob2Zmc2V0KV07XG4gICAgd2hpbGUgKGhhdmUgPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNodW5rID0gYXdhaXQgcmVhZENodW5rKCk7XG4gICAgICBpZiAoY2h1bmsgPT0gbnVsbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChoYXZlIDwgMCkge1xuICAgICAgICBpZiAoY2h1bmsubGVuZ3RoID4gaGF2ZSkge1xuICAgICAgICAgIGJ1ZmEucHVzaChjaHVuay5zdWJhcnJheSgtaGF2ZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWZhLnB1c2goY2h1bmspO1xuICAgICAgfVxuICAgICAgaGF2ZSArPSBjaHVuay5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRDaHVuayA9IG5ldyBVaW50OEFycmF5KGJ1ZmEucmVkdWNlKChwLCBjKSA9PiBwICsgYy5sZW5ndGgsIDApKTtcbiAgICBsZXQgb2ZmID0gMDtcbiAgICBmb3IgKGNvbnN0IGIgb2YgYnVmYSkge1xuICAgICAgY3VycmVudENodW5rLnNldChiLCBvZmYpO1xuICAgICAgb2ZmICs9IGIubGVuZ3RoO1xuICAgIH1cbiAgICBvZmZzZXQgPSAwO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGFzeW5jIHVwVG8obGVuZ3RoKSB7XG4gICAgICBpZiAoY3VycmVudENodW5rLmxlbmd0aCAtIG9mZnNldCA8IGxlbmd0aCkge1xuICAgICAgICBhd2FpdCByZWFkKGxlbmd0aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudENodW5rLnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgTWF0aC5taW4oY3VycmVudENodW5rLmxlbmd0aCAtIG9mZnNldCwgbGVuZ3RoKSk7XG4gICAgfSxcbiAgICBhc3luYyBleGFjdGx5KGxlbmd0aCkge1xuICAgICAgaWYgKGN1cnJlbnRDaHVuay5sZW5ndGggLSBvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgYXdhaXQgcmVhZChsZW5ndGgpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRDaHVuay5sZW5ndGggLSBvZmZzZXQgPCBsZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBkYXRhJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudENodW5rLnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgICB9LFxuICAgIHNlZWsobGVuZ3RoKSB7XG4gICAgICBwb3MgKz0gbGVuZ3RoO1xuICAgICAgb2Zmc2V0ICs9IGxlbmd0aDtcbiAgICB9LFxuICAgIGdldCBwb3MoKSB7XG4gICAgICByZXR1cm4gcG9zO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGFzeW5jSXRlcmFibGVSZWFkZXIoYXN5bmNJdGVyYWJsZSkge1xuICBjb25zdCBpdGVyYXRvciA9IGFzeW5jSXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlYWRDaHVuaygpIHtcbiAgICBjb25zdCBuZXh0ID0gYXdhaXQgaXRlcmF0b3IubmV4dCgpO1xuICAgIGlmIChuZXh0LmRvbmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC52YWx1ZTtcbiAgfVxuICByZXR1cm4gY2h1bmtSZWFkZXIocmVhZENodW5rKTtcbn1cblxuZXhwb3J0cy5hc3luY0l0ZXJhYmxlUmVhZGVyID0gYXN5bmNJdGVyYWJsZVJlYWRlcjtcbmV4cG9ydHMuYnl0ZXNSZWFkZXIgPSBieXRlc1JlYWRlcjtcbmV4cG9ydHMuY2h1bmtSZWFkZXIgPSBjaHVua1JlYWRlcjtcbmV4cG9ydHMuY3JlYXRlRGVjb2RlciA9IGNyZWF0ZURlY29kZXI7XG5leHBvcnRzLnJlYWRIZWFkZXIgPSByZWFkSGVhZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdmFyaW50ID0gcmVxdWlyZSgndmFyaW50Jyk7XG52YXIgZGFnQ2JvciA9IHJlcXVpcmUoJ0BpcGxkL2RhZy1jYm9yJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdExlZ2FjeSAoZSkgeyByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG52YXIgdmFyaW50X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeSh2YXJpbnQpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIocm9vdHMpIHtcbiAgY29uc3QgaGVhZGVyQnl0ZXMgPSBkYWdDYm9yLmVuY29kZSh7XG4gICAgdmVyc2lvbjogMSxcbiAgICByb290c1xuICB9KTtcbiAgY29uc3QgdmFyaW50Qnl0ZXMgPSB2YXJpbnRfX2RlZmF1bHRbJ2RlZmF1bHQnXS5lbmNvZGUoaGVhZGVyQnl0ZXMubGVuZ3RoKTtcbiAgY29uc3QgaGVhZGVyID0gbmV3IFVpbnQ4QXJyYXkodmFyaW50Qnl0ZXMubGVuZ3RoICsgaGVhZGVyQnl0ZXMubGVuZ3RoKTtcbiAgaGVhZGVyLnNldCh2YXJpbnRCeXRlcywgMCk7XG4gIGhlYWRlci5zZXQoaGVhZGVyQnl0ZXMsIHZhcmludEJ5dGVzLmxlbmd0aCk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVFbmNvZGVyKHdyaXRlcikge1xuICByZXR1cm4ge1xuICAgIGFzeW5jIHNldFJvb3RzKHJvb3RzKSB7XG4gICAgICBjb25zdCBieXRlcyA9IGNyZWF0ZUhlYWRlcihyb290cyk7XG4gICAgICBhd2FpdCB3cml0ZXIud3JpdGUoYnl0ZXMpO1xuICAgIH0sXG4gICAgYXN5bmMgd3JpdGVCbG9jayhibG9jaykge1xuICAgICAgY29uc3Qge2NpZCwgYnl0ZXN9ID0gYmxvY2s7XG4gICAgICBhd2FpdCB3cml0ZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkodmFyaW50X19kZWZhdWx0WydkZWZhdWx0J10uZW5jb2RlKGNpZC5ieXRlcy5sZW5ndGggKyBieXRlcy5sZW5ndGgpKSk7XG4gICAgICBhd2FpdCB3cml0ZXIud3JpdGUoY2lkLmJ5dGVzKTtcbiAgICAgIGlmIChieXRlcy5sZW5ndGgpIHtcbiAgICAgICAgYXdhaXQgd3JpdGVyLndyaXRlKGJ5dGVzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGNsb3NlKCkge1xuICAgICAgcmV0dXJuIHdyaXRlci5lbmQoKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydHMuY3JlYXRlRW5jb2RlciA9IGNyZWF0ZUVuY29kZXI7XG5leHBvcnRzLmNyZWF0ZUhlYWRlciA9IGNyZWF0ZUhlYWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY2xhc3MgQ2FySW5kZXhlZFJlYWRlciB7XG4gIHN0YXRpYyBhc3luYyBmcm9tRmlsZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQnKTtcbiAgfVxufVxuY29uc3QgX19icm93c2VyID0gdHJ1ZTtcblxuZXhwb3J0cy5DYXJJbmRleGVkUmVhZGVyID0gQ2FySW5kZXhlZFJlYWRlcjtcbmV4cG9ydHMuX19icm93c2VyID0gX19icm93c2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZGVjb2RlciA9IHJlcXVpcmUoJy4vZGVjb2Rlci5qcycpO1xuXG5jbGFzcyBDYXJJbmRleGVyIHtcbiAgY29uc3RydWN0b3IodmVyc2lvbiwgcm9vdHMsIGl0ZXJhdG9yKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5fcm9vdHMgPSByb290cztcbiAgICB0aGlzLl9pdGVyYXRvciA9IGl0ZXJhdG9yO1xuICB9XG4gIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICB9XG4gIGFzeW5jIGdldFJvb3RzKCkge1xuICAgIHJldHVybiB0aGlzLl9yb290cztcbiAgfVxuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVyYXRvcjtcbiAgfVxuICBzdGF0aWMgYXN5bmMgZnJvbUJ5dGVzKGJ5dGVzKSB7XG4gICAgaWYgKCEoYnl0ZXMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZnJvbUJ5dGVzKCkgcmVxdWlyZXMgYSBVaW50OEFycmF5Jyk7XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVJbmRleGVyQ29tcGxldGUoZGVjb2Rlci5ieXRlc1JlYWRlcihieXRlcykpO1xuICB9XG4gIHN0YXRpYyBhc3luYyBmcm9tSXRlcmFibGUoYXN5bmNJdGVyYWJsZSkge1xuICAgIGlmICghYXN5bmNJdGVyYWJsZSB8fCAhKHR5cGVvZiBhc3luY0l0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Zyb21JdGVyYWJsZSgpIHJlcXVpcmVzIGFuIGFzeW5jIGl0ZXJhYmxlJyk7XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVJbmRleGVyQ29tcGxldGUoZGVjb2Rlci5hc3luY0l0ZXJhYmxlUmVhZGVyKGFzeW5jSXRlcmFibGUpKTtcbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlSW5kZXhlckNvbXBsZXRlKHJlYWRlcikge1xuICBjb25zdCBkZWNvZGVyJDEgPSBkZWNvZGVyLmNyZWF0ZURlY29kZXIocmVhZGVyKTtcbiAgY29uc3Qge3ZlcnNpb24sIHJvb3RzfSA9IGF3YWl0IGRlY29kZXIkMS5oZWFkZXIoKTtcbiAgcmV0dXJuIG5ldyBDYXJJbmRleGVyKHZlcnNpb24sIHJvb3RzLCBkZWNvZGVyJDEuYmxvY2tzSW5kZXgoKSk7XG59XG5cbmV4cG9ydHMuQ2FySW5kZXhlciA9IENhckluZGV4ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7XG59XG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGNvbnN0IGNodW5rUXVldWUgPSBbXTtcbiAgbGV0IGRyYWluZXIgPSBudWxsO1xuICBsZXQgZHJhaW5lclJlc29sdmVyID0gbm9vcDtcbiAgbGV0IGVuZGVkID0gZmFsc2U7XG4gIGxldCBvdXRXYWl0ID0gbnVsbDtcbiAgbGV0IG91dFdhaXRSZXNvbHZlciA9IG5vb3A7XG4gIGNvbnN0IG1ha2VEcmFpbmVyID0gKCkgPT4ge1xuICAgIGlmICghZHJhaW5lcikge1xuICAgICAgZHJhaW5lciA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBkcmFpbmVyUmVzb2x2ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgZHJhaW5lciA9IG51bGw7XG4gICAgICAgICAgZHJhaW5lclJlc29sdmVyID0gbm9vcDtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRyYWluZXI7XG4gIH07XG4gIGNvbnN0IHdyaXRlciA9IHtcbiAgICB3cml0ZShjaHVuaykge1xuICAgICAgY2h1bmtRdWV1ZS5wdXNoKGNodW5rKTtcbiAgICAgIGNvbnN0IGRyYWluZXIgPSBtYWtlRHJhaW5lcigpO1xuICAgICAgb3V0V2FpdFJlc29sdmVyKCk7XG4gICAgICByZXR1cm4gZHJhaW5lcjtcbiAgICB9LFxuICAgIGFzeW5jIGVuZCgpIHtcbiAgICAgIGVuZGVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGRyYWluZXIgPSBtYWtlRHJhaW5lcigpO1xuICAgICAgb3V0V2FpdFJlc29sdmVyKCk7XG4gICAgICByZXR1cm4gZHJhaW5lcjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGl0ZXJhdG9yID0ge1xuICAgIGFzeW5jIG5leHQoKSB7XG4gICAgICBjb25zdCBjaHVuayA9IGNodW5rUXVldWUuc2hpZnQoKTtcbiAgICAgIGlmIChjaHVuaykge1xuICAgICAgICBpZiAoY2h1bmtRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkcmFpbmVyUmVzb2x2ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBjaHVua1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGVuZGVkKSB7XG4gICAgICAgIGRyYWluZXJSZXNvbHZlcigpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCFvdXRXYWl0KSB7XG4gICAgICAgIG91dFdhaXQgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICBvdXRXYWl0UmVzb2x2ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBvdXRXYWl0ID0gbnVsbDtcbiAgICAgICAgICAgIG91dFdhaXRSZXNvbHZlciA9IG5vb3A7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpdGVyYXRvci5uZXh0KCkpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dFdhaXQ7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIHdyaXRlcixcbiAgICBpdGVyYXRvclxuICB9O1xufVxuXG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGRlY29kZXIgPSByZXF1aXJlKCcuL2RlY29kZXIuanMnKTtcblxuY2xhc3MgQ2FySXRlcmF0b3JCYXNlIHtcbiAgY29uc3RydWN0b3IodmVyc2lvbiwgcm9vdHMsIGl0ZXJhYmxlKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5fcm9vdHMgPSByb290cztcbiAgICB0aGlzLl9pdGVyYWJsZSA9IGl0ZXJhYmxlO1xuICAgIHRoaXMuX2RlY29kZWQgPSBmYWxzZTtcbiAgfVxuICBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuICBhc3luYyBnZXRSb290cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdHM7XG4gIH1cbn1cbmNsYXNzIENhckJsb2NrSXRlcmF0b3IgZXh0ZW5kcyBDYXJJdGVyYXRvckJhc2Uge1xuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgIGlmICh0aGlzLl9kZWNvZGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWNvZGUgbW9yZSB0aGFuIG9uY2UnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9pdGVyYWJsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCbG9jayBpdGVyYWJsZSBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgdGhpcy5fZGVjb2RlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICB9XG4gIHN0YXRpYyBhc3luYyBmcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgICBjb25zdCB7dmVyc2lvbiwgcm9vdHMsIGl0ZXJhdG9yfSA9IGF3YWl0IGZyb21CeXRlcyhieXRlcyk7XG4gICAgcmV0dXJuIG5ldyBDYXJCbG9ja0l0ZXJhdG9yKHZlcnNpb24sIHJvb3RzLCBpdGVyYXRvcik7XG4gIH1cbiAgc3RhdGljIGFzeW5jIGZyb21JdGVyYWJsZShhc3luY0l0ZXJhYmxlKSB7XG4gICAgY29uc3Qge3ZlcnNpb24sIHJvb3RzLCBpdGVyYXRvcn0gPSBhd2FpdCBmcm9tSXRlcmFibGUoYXN5bmNJdGVyYWJsZSk7XG4gICAgcmV0dXJuIG5ldyBDYXJCbG9ja0l0ZXJhdG9yKHZlcnNpb24sIHJvb3RzLCBpdGVyYXRvcik7XG4gIH1cbn1cbmNsYXNzIENhckNJREl0ZXJhdG9yIGV4dGVuZHMgQ2FySXRlcmF0b3JCYXNlIHtcbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICBpZiAodGhpcy5fZGVjb2RlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVjb2RlIG1vcmUgdGhhbiBvbmNlJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5faXRlcmFibGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQmxvY2sgaXRlcmFibGUgbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIHRoaXMuX2RlY29kZWQgPSB0cnVlO1xuICAgIGNvbnN0IGl0ZXJhYmxlID0gdGhpcy5faXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFzeW5jIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBhd2FpdCBpdGVyYWJsZS5uZXh0KCk7XG4gICAgICAgIGlmIChuZXh0LmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBuZXh0LnZhbHVlLmNpZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgc3RhdGljIGFzeW5jIGZyb21CeXRlcyhieXRlcykge1xuICAgIGNvbnN0IHt2ZXJzaW9uLCByb290cywgaXRlcmF0b3J9ID0gYXdhaXQgZnJvbUJ5dGVzKGJ5dGVzKTtcbiAgICByZXR1cm4gbmV3IENhckNJREl0ZXJhdG9yKHZlcnNpb24sIHJvb3RzLCBpdGVyYXRvcik7XG4gIH1cbiAgc3RhdGljIGFzeW5jIGZyb21JdGVyYWJsZShhc3luY0l0ZXJhYmxlKSB7XG4gICAgY29uc3Qge3ZlcnNpb24sIHJvb3RzLCBpdGVyYXRvcn0gPSBhd2FpdCBmcm9tSXRlcmFibGUoYXN5bmNJdGVyYWJsZSk7XG4gICAgcmV0dXJuIG5ldyBDYXJDSURJdGVyYXRvcih2ZXJzaW9uLCByb290cywgaXRlcmF0b3IpO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBmcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgaWYgKCEoYnl0ZXMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Zyb21CeXRlcygpIHJlcXVpcmVzIGEgVWludDhBcnJheScpO1xuICB9XG4gIHJldHVybiBkZWNvZGVJdGVyYXRvcihkZWNvZGVyLmJ5dGVzUmVhZGVyKGJ5dGVzKSk7XG59XG5hc3luYyBmdW5jdGlvbiBmcm9tSXRlcmFibGUoYXN5bmNJdGVyYWJsZSkge1xuICBpZiAoIWFzeW5jSXRlcmFibGUgfHwgISh0eXBlb2YgYXN5bmNJdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZnJvbUl0ZXJhYmxlKCkgcmVxdWlyZXMgYW4gYXN5bmMgaXRlcmFibGUnKTtcbiAgfVxuICByZXR1cm4gZGVjb2RlSXRlcmF0b3IoZGVjb2Rlci5hc3luY0l0ZXJhYmxlUmVhZGVyKGFzeW5jSXRlcmFibGUpKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGRlY29kZUl0ZXJhdG9yKHJlYWRlcikge1xuICBjb25zdCBkZWNvZGVyJDEgPSBkZWNvZGVyLmNyZWF0ZURlY29kZXIocmVhZGVyKTtcbiAgY29uc3Qge3ZlcnNpb24sIHJvb3RzfSA9IGF3YWl0IGRlY29kZXIkMS5oZWFkZXIoKTtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uLFxuICAgIHJvb3RzLFxuICAgIGl0ZXJhdG9yOiBkZWNvZGVyJDEuYmxvY2tzKClcbiAgfTtcbn1cblxuZXhwb3J0cy5DYXJCbG9ja0l0ZXJhdG9yID0gQ2FyQmxvY2tJdGVyYXRvcjtcbmV4cG9ydHMuQ2FyQ0lESXRlcmF0b3IgPSBDYXJDSURJdGVyYXRvcjtcbmV4cG9ydHMuQ2FySXRlcmF0b3JCYXNlID0gQ2FySXRlcmF0b3JCYXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZGVjb2RlciA9IHJlcXVpcmUoJy4vZGVjb2Rlci5qcycpO1xuXG5jbGFzcyBDYXJSZWFkZXIge1xuICBjb25zdHJ1Y3Rvcih2ZXJzaW9uLCByb290cywgYmxvY2tzKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5fcm9vdHMgPSByb290cztcbiAgICB0aGlzLl9ibG9ja3MgPSBibG9ja3M7XG4gICAgdGhpcy5fa2V5cyA9IGJsb2Nrcy5tYXAoYiA9PiBiLmNpZC50b1N0cmluZygpKTtcbiAgfVxuICBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuICBhc3luYyBnZXRSb290cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdHM7XG4gIH1cbiAgYXN5bmMgaGFzKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5LnRvU3RyaW5nKCkpID4gLTE7XG4gIH1cbiAgYXN5bmMgZ2V0KGtleSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IHRoaXMuX2Jsb2Nrc1tpbmRleF0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgYXN5bmMgKmJsb2NrcygpIHtcbiAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgeWllbGQgYmxvY2s7XG4gICAgfVxuICB9XG4gIGFzeW5jICpjaWRzKCkge1xuICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICB5aWVsZCBibG9jay5jaWQ7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBhc3luYyBmcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgICBpZiAoIShieXRlcyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdmcm9tQnl0ZXMoKSByZXF1aXJlcyBhIFVpbnQ4QXJyYXknKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZVJlYWRlckNvbXBsZXRlKGRlY29kZXIuYnl0ZXNSZWFkZXIoYnl0ZXMpKTtcbiAgfVxuICBzdGF0aWMgYXN5bmMgZnJvbUl0ZXJhYmxlKGFzeW5jSXRlcmFibGUpIHtcbiAgICBpZiAoIWFzeW5jSXRlcmFibGUgfHwgISh0eXBlb2YgYXN5bmNJdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdmcm9tSXRlcmFibGUoKSByZXF1aXJlcyBhbiBhc3luYyBpdGVyYWJsZScpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlUmVhZGVyQ29tcGxldGUoZGVjb2Rlci5hc3luY0l0ZXJhYmxlUmVhZGVyKGFzeW5jSXRlcmFibGUpKTtcbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlUmVhZGVyQ29tcGxldGUocmVhZGVyKSB7XG4gIGNvbnN0IGRlY29kZXIkMSA9IGRlY29kZXIuY3JlYXRlRGVjb2RlcihyZWFkZXIpO1xuICBjb25zdCB7dmVyc2lvbiwgcm9vdHN9ID0gYXdhaXQgZGVjb2RlciQxLmhlYWRlcigpO1xuICBjb25zdCBibG9ja3MgPSBbXTtcbiAgZm9yIGF3YWl0IChjb25zdCBibG9jayBvZiBkZWNvZGVyJDEuYmxvY2tzKCkpIHtcbiAgICBibG9ja3MucHVzaChibG9jayk7XG4gIH1cbiAgcmV0dXJuIG5ldyBDYXJSZWFkZXIodmVyc2lvbiwgcm9vdHMsIGJsb2Nrcyk7XG59XG5jb25zdCBfX2Jyb3dzZXIgPSB0cnVlO1xuXG5leHBvcnRzLkNhclJlYWRlciA9IENhclJlYWRlcjtcbmV4cG9ydHMuX19icm93c2VyID0gX19icm93c2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2lkID0gcmVxdWlyZSgnbXVsdGlmb3JtYXRzL2NpZCcpO1xudmFyIGVuY29kZXIgPSByZXF1aXJlKCcuL2VuY29kZXIuanMnKTtcbnZhciBpdGVyYXRvckNoYW5uZWwgPSByZXF1aXJlKCcuL2l0ZXJhdG9yLWNoYW5uZWwuanMnKTtcbnZhciBkZWNvZGVyID0gcmVxdWlyZSgnLi9kZWNvZGVyLmpzJyk7XG5cbmNsYXNzIENhcldyaXRlciB7XG4gIGNvbnN0cnVjdG9yKHJvb3RzLCBlbmNvZGVyKSB7XG4gICAgdGhpcy5fZW5jb2RlciA9IGVuY29kZXI7XG4gICAgdGhpcy5fbXV0ZXggPSBlbmNvZGVyLnNldFJvb3RzKHJvb3RzKTtcbiAgICB0aGlzLl9lbmRlZCA9IGZhbHNlO1xuICB9XG4gIGFzeW5jIHB1dChibG9jaykge1xuICAgIGlmICghKGJsb2NrLmJ5dGVzIGluc3RhbmNlb2YgVWludDhBcnJheSkgfHwgIWJsb2NrLmNpZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2FuIG9ubHkgd3JpdGUge2NpZCwgYnl0ZXN9IG9iamVjdHMnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgY2xvc2VkJyk7XG4gICAgfVxuICAgIGNvbnN0IGNpZCQxID0gY2lkLkNJRC5hc0NJRChibG9jay5jaWQpO1xuICAgIGlmICghY2lkJDEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NhbiBvbmx5IHdyaXRlIHtjaWQsIGJ5dGVzfSBvYmplY3RzJyk7XG4gICAgfVxuICAgIHRoaXMuX211dGV4ID0gdGhpcy5fbXV0ZXgudGhlbigoKSA9PiB0aGlzLl9lbmNvZGVyLndyaXRlQmxvY2soe1xuICAgICAgY2lkOiBjaWQkMSxcbiAgICAgIGJ5dGVzOiBibG9jay5ieXRlc1xuICAgIH0pKTtcbiAgICByZXR1cm4gdGhpcy5fbXV0ZXg7XG4gIH1cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgY2xvc2VkJyk7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX211dGV4O1xuICAgIHRoaXMuX2VuZGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5fZW5jb2Rlci5jbG9zZSgpO1xuICB9XG4gIHN0YXRpYyBjcmVhdGUocm9vdHMpIHtcbiAgICByb290cyA9IHRvUm9vdHMocm9vdHMpO1xuICAgIGNvbnN0IHtlbmNvZGVyLCBpdGVyYXRvcn0gPSBlbmNvZGVXcml0ZXIoKTtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQ2FyV3JpdGVyKHJvb3RzLCBlbmNvZGVyKTtcbiAgICBjb25zdCBvdXQgPSBuZXcgQ2FyV3JpdGVyT3V0KGl0ZXJhdG9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGVyLFxuICAgICAgb3V0XG4gICAgfTtcbiAgfVxuICBzdGF0aWMgY3JlYXRlQXBwZW5kZXIoKSB7XG4gICAgY29uc3Qge2VuY29kZXIsIGl0ZXJhdG9yfSA9IGVuY29kZVdyaXRlcigpO1xuICAgIGVuY29kZXIuc2V0Um9vdHMgPSAoKSA9PiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBjb25zdCB3cml0ZXIgPSBuZXcgQ2FyV3JpdGVyKFtdLCBlbmNvZGVyKTtcbiAgICBjb25zdCBvdXQgPSBuZXcgQ2FyV3JpdGVyT3V0KGl0ZXJhdG9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGVyLFxuICAgICAgb3V0XG4gICAgfTtcbiAgfVxuICBzdGF0aWMgYXN5bmMgdXBkYXRlUm9vdHNJbkJ5dGVzKGJ5dGVzLCByb290cykge1xuICAgIGNvbnN0IHJlYWRlciA9IGRlY29kZXIuYnl0ZXNSZWFkZXIoYnl0ZXMpO1xuICAgIGF3YWl0IGRlY29kZXIucmVhZEhlYWRlcihyZWFkZXIpO1xuICAgIGNvbnN0IG5ld0hlYWRlciA9IGVuY29kZXIuY3JlYXRlSGVhZGVyKHJvb3RzKTtcbiAgICBpZiAocmVhZGVyLnBvcyAhPT0gbmV3SGVhZGVyLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1cGRhdGVSb290cygpIGNhbiBvbmx5IG92ZXJ3cml0ZSBhIGhlYWRlciBvZiB0aGUgc2FtZSBsZW5ndGggKG9sZCBoZWFkZXIgaXMgJHsgcmVhZGVyLnBvcyB9IGJ5dGVzLCBuZXcgaGVhZGVyIGlzICR7IG5ld0hlYWRlci5sZW5ndGggfSBieXRlcylgKTtcbiAgICB9XG4gICAgYnl0ZXMuc2V0KG5ld0hlYWRlciwgMCk7XG4gICAgcmV0dXJuIGJ5dGVzO1xuICB9XG59XG5jbGFzcyBDYXJXcml0ZXJPdXQge1xuICBjb25zdHJ1Y3RvcihpdGVyYXRvcikge1xuICAgIHRoaXMuX2l0ZXJhdG9yID0gaXRlcmF0b3I7XG4gIH1cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICBpZiAodGhpcy5faXRlcmF0aW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011bHRpcGxlIGl0ZXJhdG9yIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgdGhpcy5faXRlcmF0aW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5faXRlcmF0b3I7XG4gIH1cbn1cbmZ1bmN0aW9uIGVuY29kZVdyaXRlcigpIHtcbiAgY29uc3QgaXcgPSBpdGVyYXRvckNoYW5uZWwuY3JlYXRlKCk7XG4gIGNvbnN0IHt3cml0ZXIsIGl0ZXJhdG9yfSA9IGl3O1xuICBjb25zdCBlbmNvZGVyJDEgPSBlbmNvZGVyLmNyZWF0ZUVuY29kZXIod3JpdGVyKTtcbiAgcmV0dXJuIHtcbiAgICBlbmNvZGVyOiBlbmNvZGVyJDEsXG4gICAgaXRlcmF0b3JcbiAgfTtcbn1cbmZ1bmN0aW9uIHRvUm9vdHMocm9vdHMpIHtcbiAgaWYgKHJvb3RzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KHJvb3RzKSkge1xuICAgIGNvbnN0IGNpZCQxID0gY2lkLkNJRC5hc0NJRChyb290cyk7XG4gICAgaWYgKCFjaWQkMSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncm9vdHMgbXVzdCBiZSBhIHNpbmdsZSBDSUQgb3IgYW4gYXJyYXkgb2YgQ0lEcycpO1xuICAgIH1cbiAgICByZXR1cm4gW2NpZCQxXTtcbiAgfVxuICBjb25zdCBfcm9vdHMgPSBbXTtcbiAgZm9yIChjb25zdCByb290IG9mIHJvb3RzKSB7XG4gICAgY29uc3QgX3Jvb3QgPSBjaWQuQ0lELmFzQ0lEKHJvb3QpO1xuICAgIGlmICghX3Jvb3QpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Jvb3RzIG11c3QgYmUgYSBzaW5nbGUgQ0lEIG9yIGFuIGFycmF5IG9mIENJRHMnKTtcbiAgICB9XG4gICAgX3Jvb3RzLnB1c2goX3Jvb3QpO1xuICB9XG4gIHJldHVybiBfcm9vdHM7XG59XG5jb25zdCBfX2Jyb3dzZXIgPSB0cnVlO1xuXG5leHBvcnRzLkNhcldyaXRlciA9IENhcldyaXRlcjtcbmV4cG9ydHMuQ2FyV3JpdGVyT3V0ID0gQ2FyV3JpdGVyT3V0O1xuZXhwb3J0cy5fX2Jyb3dzZXIgPSBfX2Jyb3dzZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjYm9yZyA9IHJlcXVpcmUoJ2Nib3JnJyk7XG52YXIgY2lkID0gcmVxdWlyZSgnbXVsdGlmb3JtYXRzL2NpZCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcE5hbWVzcGFjZShlKSB7XG4gIGlmIChlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gIHZhciBuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGUpIHtcbiAgICBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICBpZiAoayAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHZhciBkID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCBrKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIGssIGQuZ2V0ID8gZCA6IHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGVba107XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBuWydkZWZhdWx0J10gPSBlO1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShuKTtcbn1cblxudmFyIGNib3JnX19uYW1lc3BhY2UgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BOYW1lc3BhY2UoY2JvcmcpO1xuXG5jb25zdCBDSURfQ0JPUl9UQUcgPSA0MjtcbmZ1bmN0aW9uIGNpZEVuY29kZXIob2JqKSB7XG4gIGlmIChvYmouYXNDSUQgIT09IG9iaikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGNpZCQxID0gY2lkLkNJRC5hc0NJRChvYmopO1xuICBpZiAoIWNpZCQxKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShjaWQkMS5ieXRlcy5ieXRlTGVuZ3RoICsgMSk7XG4gIGJ5dGVzLnNldChjaWQkMS5ieXRlcywgMSk7XG4gIHJldHVybiBbXG4gICAgbmV3IGNib3JnX19uYW1lc3BhY2UuVG9rZW4oY2JvcmdfX25hbWVzcGFjZS5UeXBlLnRhZywgQ0lEX0NCT1JfVEFHKSxcbiAgICBuZXcgY2JvcmdfX25hbWVzcGFjZS5Ub2tlbihjYm9yZ19fbmFtZXNwYWNlLlR5cGUuYnl0ZXMsIGJ5dGVzKVxuICBdO1xufVxuZnVuY3Rpb24gdW5kZWZpbmVkRW5jb2RlcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdgdW5kZWZpbmVkYCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBJUExEIERhdGEgTW9kZWwgYW5kIGNhbm5vdCBiZSBlbmNvZGVkJyk7XG59XG5mdW5jdGlvbiBudW1iZXJFbmNvZGVyKG51bSkge1xuICBpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BOYU5gIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIElQTEQgRGF0YSBNb2RlbCBhbmQgY2Fubm90IGJlIGVuY29kZWQnKTtcbiAgfVxuICBpZiAobnVtID09PSBJbmZpbml0eSB8fCBudW0gPT09IC1JbmZpbml0eSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYEluZmluaXR5YCBhbmQgYC1JbmZpbml0eWAgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgSVBMRCBEYXRhIE1vZGVsIGFuZCBjYW5ub3QgYmUgZW5jb2RlZCcpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuY29uc3QgZW5jb2RlT3B0aW9ucyA9IHtcbiAgZmxvYXQ2NDogdHJ1ZSxcbiAgdHlwZUVuY29kZXJzOiB7XG4gICAgT2JqZWN0OiBjaWRFbmNvZGVyLFxuICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkRW5jb2RlcixcbiAgICBudW1iZXI6IG51bWJlckVuY29kZXJcbiAgfVxufTtcbmZ1bmN0aW9uIGNpZERlY29kZXIoYnl0ZXMpIHtcbiAgaWYgKGJ5dGVzWzBdICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENJRCBmb3IgQ0JPUiB0YWcgNDI7IGV4cGVjdGVkIGxlYWRpbmcgMHgwMCcpO1xuICB9XG4gIHJldHVybiBjaWQuQ0lELmRlY29kZShieXRlcy5zdWJhcnJheSgxKSk7XG59XG5jb25zdCBkZWNvZGVPcHRpb25zID0ge1xuICBhbGxvd0luZGVmaW5pdGU6IGZhbHNlLFxuICBhbGxvd1VuZGVmaW5lZDogZmFsc2UsXG4gIGFsbG93TmFOOiBmYWxzZSxcbiAgYWxsb3dJbmZpbml0eTogZmFsc2UsXG4gIGFsbG93QmlnSW50OiB0cnVlLFxuICBzdHJpY3Q6IHRydWUsXG4gIHVzZU1hcHM6IGZhbHNlLFxuICB0YWdzOiBbXVxufTtcbmRlY29kZU9wdGlvbnMudGFnc1tDSURfQ0JPUl9UQUddID0gY2lkRGVjb2RlcjtcbmNvbnN0IG5hbWUgPSAnZGFnLWNib3InO1xuY29uc3QgY29kZSA9IDExMztcbmNvbnN0IGVuY29kZSA9IG5vZGUgPT4gY2JvcmdfX25hbWVzcGFjZS5lbmNvZGUobm9kZSwgZW5jb2RlT3B0aW9ucyk7XG5jb25zdCBkZWNvZGUgPSBkYXRhID0+IGNib3JnX19uYW1lc3BhY2UuZGVjb2RlKGRhdGEsIGRlY29kZU9wdGlvbnMpO1xuXG5leHBvcnRzLmNvZGUgPSBjb2RlO1xuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbmV4cG9ydHMubmFtZSA9IG5hbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjaWQgPSByZXF1aXJlKCdtdWx0aWZvcm1hdHMvY2lkJyk7XG52YXIgcGJEZWNvZGUgPSByZXF1aXJlKCcuL3BiLWRlY29kZS5qcycpO1xudmFyIHBiRW5jb2RlID0gcmVxdWlyZSgnLi9wYi1lbmNvZGUuanMnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsLmpzJyk7XG5cbmNvbnN0IG5hbWUgPSAnZGFnLXBiJztcbmNvbnN0IGNvZGUgPSAxMTI7XG5mdW5jdGlvbiBlbmNvZGUobm9kZSkge1xuICB1dGlsLnZhbGlkYXRlKG5vZGUpO1xuICBjb25zdCBwYm4gPSB7fTtcbiAgaWYgKG5vZGUuTGlua3MpIHtcbiAgICBwYm4uTGlua3MgPSBub2RlLkxpbmtzLm1hcChsID0+IHtcbiAgICAgIGNvbnN0IGxpbmsgPSB7fTtcbiAgICAgIGlmIChsLkhhc2gpIHtcbiAgICAgICAgbGluay5IYXNoID0gbC5IYXNoLmJ5dGVzO1xuICAgICAgfVxuICAgICAgaWYgKGwuTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxpbmsuTmFtZSA9IGwuTmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChsLlRzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGluay5Uc2l6ZSA9IGwuVHNpemU7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluaztcbiAgICB9KTtcbiAgfVxuICBpZiAobm9kZS5EYXRhKSB7XG4gICAgcGJuLkRhdGEgPSBub2RlLkRhdGE7XG4gIH1cbiAgcmV0dXJuIHBiRW5jb2RlLmVuY29kZU5vZGUocGJuKTtcbn1cbmZ1bmN0aW9uIGRlY29kZShieXRlcykge1xuICBjb25zdCBwYm4gPSBwYkRlY29kZS5kZWNvZGVOb2RlKGJ5dGVzKTtcbiAgY29uc3Qgbm9kZSA9IHt9O1xuICBpZiAocGJuLkRhdGEpIHtcbiAgICBub2RlLkRhdGEgPSBwYm4uRGF0YTtcbiAgfVxuICBpZiAocGJuLkxpbmtzKSB7XG4gICAgbm9kZS5MaW5rcyA9IHBibi5MaW5rcy5tYXAobCA9PiB7XG4gICAgICBjb25zdCBsaW5rID0ge307XG4gICAgICB0cnkge1xuICAgICAgICBsaW5rLkhhc2ggPSBjaWQuQ0lELmRlY29kZShsLkhhc2gpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgICAgaWYgKCFsaW5rLkhhc2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEhhc2ggZmllbGQgZm91bmQgaW4gbGluaywgZXhwZWN0ZWQgQ0lEJyk7XG4gICAgICB9XG4gICAgICBpZiAobC5OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGluay5OYW1lID0gbC5OYW1lO1xuICAgICAgfVxuICAgICAgaWYgKGwuVHNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaW5rLlRzaXplID0gbC5Uc2l6ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaW5rO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnRzLmNyZWF0ZUxpbmsgPSB1dGlsLmNyZWF0ZUxpbms7XG5leHBvcnRzLmNyZWF0ZU5vZGUgPSB1dGlsLmNyZWF0ZU5vZGU7XG5leHBvcnRzLnByZXBhcmUgPSB1dGlsLnByZXBhcmU7XG5leHBvcnRzLnZhbGlkYXRlID0gdXRpbC52YWxpZGF0ZTtcbmV4cG9ydHMuY29kZSA9IGNvZGU7XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuZXhwb3J0cy5uYW1lID0gbmFtZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgdGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbmZ1bmN0aW9uIGRlY29kZVZhcmludChieXRlcywgb2Zmc2V0KSB7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChsZXQgc2hpZnQgPSAwOzsgc2hpZnQgKz0gNykge1xuICAgIGlmIChzaGlmdCA+PSA2NCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogdmFyaW50IG92ZXJmbG93Jyk7XG4gICAgfVxuICAgIGlmIChvZmZzZXQgPj0gYnl0ZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiB1bmV4cGVjdGVkIGVuZCBvZiBkYXRhJyk7XG4gICAgfVxuICAgIGNvbnN0IGIgPSBieXRlc1tvZmZzZXQrK107XG4gICAgdiArPSBzaGlmdCA8IDI4ID8gKGIgJiAxMjcpIDw8IHNoaWZ0IDogKGIgJiAxMjcpICogMiAqKiBzaGlmdDtcbiAgICBpZiAoYiA8IDEyOCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBbXG4gICAgdixcbiAgICBvZmZzZXRcbiAgXTtcbn1cbmZ1bmN0aW9uIGRlY29kZUJ5dGVzKGJ5dGVzLCBvZmZzZXQpIHtcbiAgbGV0IGJ5dGVMZW47XG4gIFtieXRlTGVuLCBvZmZzZXRdID0gZGVjb2RlVmFyaW50KGJ5dGVzLCBvZmZzZXQpO1xuICBjb25zdCBwb3N0T2Zmc2V0ID0gb2Zmc2V0ICsgYnl0ZUxlbjtcbiAgaWYgKGJ5dGVMZW4gPCAwIHx8IHBvc3RPZmZzZXQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogaW52YWxpZCBsZW5ndGgnKTtcbiAgfVxuICBpZiAocG9zdE9mZnNldCA+IGJ5dGVzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvdG9idWY6IHVuZXhwZWN0ZWQgZW5kIG9mIGRhdGEnKTtcbiAgfVxuICByZXR1cm4gW1xuICAgIGJ5dGVzLnN1YmFycmF5KG9mZnNldCwgcG9zdE9mZnNldCksXG4gICAgcG9zdE9mZnNldFxuICBdO1xufVxuZnVuY3Rpb24gZGVjb2RlS2V5KGJ5dGVzLCBpbmRleCkge1xuICBsZXQgd2lyZTtcbiAgW3dpcmUsIGluZGV4XSA9IGRlY29kZVZhcmludChieXRlcywgaW5kZXgpO1xuICByZXR1cm4gW1xuICAgIHdpcmUgJiA3LFxuICAgIHdpcmUgPj4gMyxcbiAgICBpbmRleFxuICBdO1xufVxuZnVuY3Rpb24gZGVjb2RlTGluayhieXRlcykge1xuICBjb25zdCBsaW5rID0ge307XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGg7XG4gIGxldCBpbmRleCA9IDA7XG4gIHdoaWxlIChpbmRleCA8IGwpIHtcbiAgICBsZXQgd2lyZVR5cGUsIGZpZWxkTnVtO1xuICAgIFt3aXJlVHlwZSwgZmllbGROdW0sIGluZGV4XSA9IGRlY29kZUtleShieXRlcywgaW5kZXgpO1xuICAgIGlmIChmaWVsZE51bSA9PT0gMSkge1xuICAgICAgaWYgKGxpbmsuSGFzaCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiAoUEJMaW5rKSBkdXBsaWNhdGUgSGFzaCBzZWN0aW9uJyk7XG4gICAgICB9XG4gICAgICBpZiAod2lyZVR5cGUgIT09IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBwcm90b2J1ZjogKFBCTGluaykgd3Jvbmcgd2lyZVR5cGUgKCR7IHdpcmVUeXBlIH0pIGZvciBIYXNoYCk7XG4gICAgICB9XG4gICAgICBpZiAobGluay5OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogKFBCTGluaykgaW52YWxpZCBvcmRlciwgZm91bmQgTmFtZSBiZWZvcmUgSGFzaCcpO1xuICAgICAgfVxuICAgICAgaWYgKGxpbmsuVHNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiAoUEJMaW5rKSBpbnZhbGlkIG9yZGVyLCBmb3VuZCBUc2l6ZSBiZWZvcmUgSGFzaCcpO1xuICAgICAgfVxuICAgICAgO1xuICAgICAgW2xpbmsuSGFzaCwgaW5kZXhdID0gZGVjb2RlQnl0ZXMoYnl0ZXMsIGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkTnVtID09PSAyKSB7XG4gICAgICBpZiAobGluay5OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm90b2J1ZjogKFBCTGluaykgZHVwbGljYXRlIE5hbWUgc2VjdGlvbicpO1xuICAgICAgfVxuICAgICAgaWYgKHdpcmVUeXBlICE9PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcHJvdG9idWY6IChQQkxpbmspIHdyb25nIHdpcmVUeXBlICgkeyB3aXJlVHlwZSB9KSBmb3IgTmFtZWApO1xuICAgICAgfVxuICAgICAgaWYgKGxpbmsuVHNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiAoUEJMaW5rKSBpbnZhbGlkIG9yZGVyLCBmb3VuZCBUc2l6ZSBiZWZvcmUgTmFtZScpO1xuICAgICAgfVxuICAgICAgbGV0IGJ5dHM7XG4gICAgICBbYnl0cywgaW5kZXhdID0gZGVjb2RlQnl0ZXMoYnl0ZXMsIGluZGV4KTtcbiAgICAgIGxpbmsuTmFtZSA9IHRleHREZWNvZGVyLmRlY29kZShieXRzKTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkTnVtID09PSAzKSB7XG4gICAgICBpZiAobGluay5Uc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncHJvdG9idWY6IChQQkxpbmspIGR1cGxpY2F0ZSBUc2l6ZSBzZWN0aW9uJyk7XG4gICAgICB9XG4gICAgICBpZiAod2lyZVR5cGUgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBwcm90b2J1ZjogKFBCTGluaykgd3Jvbmcgd2lyZVR5cGUgKCR7IHdpcmVUeXBlIH0pIGZvciBUc2l6ZWApO1xuICAgICAgfVxuICAgICAgO1xuICAgICAgW2xpbmsuVHNpemUsIGluZGV4XSA9IGRlY29kZVZhcmludChieXRlcywgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHByb3RvYnVmOiAoUEJMaW5rKSBpbnZhbGlkIGZpZWxkTnVtYmVyLCBleHBlY3RlZCAxLCAyIG9yIDMsIGdvdCAkeyBmaWVsZE51bSB9YCk7XG4gICAgfVxuICB9XG4gIGlmIChpbmRleCA+IGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiAoUEJMaW5rKSB1bmV4cGVjdGVkIGVuZCBvZiBkYXRhJyk7XG4gIH1cbiAgcmV0dXJuIGxpbms7XG59XG5mdW5jdGlvbiBkZWNvZGVOb2RlKGJ5dGVzKSB7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGg7XG4gIGxldCBpbmRleCA9IDA7XG4gIGxldCBsaW5rcztcbiAgbGV0IGxpbmtzQmVmb3JlRGF0YSA9IGZhbHNlO1xuICBsZXQgZGF0YTtcbiAgd2hpbGUgKGluZGV4IDwgbCkge1xuICAgIGxldCB3aXJlVHlwZSwgZmllbGROdW07XG4gICAgW3dpcmVUeXBlLCBmaWVsZE51bSwgaW5kZXhdID0gZGVjb2RlS2V5KGJ5dGVzLCBpbmRleCk7XG4gICAgaWYgKHdpcmVUeXBlICE9PSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHByb3RvYnVmOiAoUEJOb2RlKSBpbnZhbGlkIHdpcmVUeXBlLCBleHBlY3RlZCAyLCBnb3QgJHsgd2lyZVR5cGUgfWApO1xuICAgIH1cbiAgICBpZiAoZmllbGROdW0gPT09IDEpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncHJvdG9idWY6IChQQk5vZGUpIGR1cGxpY2F0ZSBEYXRhIHNlY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIDtcbiAgICAgIFtkYXRhLCBpbmRleF0gPSBkZWNvZGVCeXRlcyhieXRlcywgaW5kZXgpO1xuICAgICAgaWYgKGxpbmtzKSB7XG4gICAgICAgIGxpbmtzQmVmb3JlRGF0YSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZE51bSA9PT0gMikge1xuICAgICAgaWYgKGxpbmtzQmVmb3JlRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiAoUEJOb2RlKSBkdXBsaWNhdGUgTGlua3Mgc2VjdGlvbicpO1xuICAgICAgfSBlbHNlIGlmICghbGlua3MpIHtcbiAgICAgICAgbGlua3MgPSBbXTtcbiAgICAgIH1cbiAgICAgIGxldCBieXRzO1xuICAgICAgW2J5dHMsIGluZGV4XSA9IGRlY29kZUJ5dGVzKGJ5dGVzLCBpbmRleCk7XG4gICAgICBsaW5rcy5wdXNoKGRlY29kZUxpbmsoYnl0cykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHByb3RvYnVmOiAoUEJOb2RlKSBpbnZhbGlkIGZpZWxkTnVtYmVyLCBleHBlY3RlZCAxIG9yIDIsIGdvdCAkeyBmaWVsZE51bSB9YCk7XG4gICAgfVxuICB9XG4gIGlmIChpbmRleCA+IGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb3RvYnVmOiAoUEJOb2RlKSB1bmV4cGVjdGVkIGVuZCBvZiBkYXRhJyk7XG4gIH1cbiAgY29uc3Qgbm9kZSA9IHt9O1xuICBpZiAoZGF0YSkge1xuICAgIG5vZGUuRGF0YSA9IGRhdGE7XG4gIH1cbiAgbm9kZS5MaW5rcyA9IGxpbmtzIHx8IFtdO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0cy5kZWNvZGVOb2RlID0gZGVjb2RlTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgdGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbmNvbnN0IG1heEludDMyID0gMiAqKiAzMjtcbmNvbnN0IG1heFVJbnQzMiA9IDIgKiogMzE7XG5mdW5jdGlvbiBlbmNvZGVMaW5rKGxpbmssIGJ5dGVzKSB7XG4gIGxldCBpID0gYnl0ZXMubGVuZ3RoO1xuICBpZiAodHlwZW9mIGxpbmsuVHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKGxpbmsuVHNpemUgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RzaXplIGNhbm5vdCBiZSBuZWdhdGl2ZScpO1xuICAgIH1cbiAgICBpZiAoIU51bWJlci5pc1NhZmVJbnRlZ2VyKGxpbmsuVHNpemUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RzaXplIHRvbyBsYXJnZSBmb3IgZW5jb2RpbmcnKTtcbiAgICB9XG4gICAgaSA9IGVuY29kZVZhcmludChieXRlcywgaSwgbGluay5Uc2l6ZSkgLSAxO1xuICAgIGJ5dGVzW2ldID0gMjQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBsaW5rLk5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbmFtZUJ5dGVzID0gdGV4dEVuY29kZXIuZW5jb2RlKGxpbmsuTmFtZSk7XG4gICAgaSAtPSBuYW1lQnl0ZXMubGVuZ3RoO1xuICAgIGJ5dGVzLnNldChuYW1lQnl0ZXMsIGkpO1xuICAgIGkgPSBlbmNvZGVWYXJpbnQoYnl0ZXMsIGksIG5hbWVCeXRlcy5sZW5ndGgpIC0gMTtcbiAgICBieXRlc1tpXSA9IDE4O1xuICB9XG4gIGlmIChsaW5rLkhhc2gpIHtcbiAgICBpIC09IGxpbmsuSGFzaC5sZW5ndGg7XG4gICAgYnl0ZXMuc2V0KGxpbmsuSGFzaCwgaSk7XG4gICAgaSA9IGVuY29kZVZhcmludChieXRlcywgaSwgbGluay5IYXNoLmxlbmd0aCkgLSAxO1xuICAgIGJ5dGVzW2ldID0gMTA7XG4gIH1cbiAgcmV0dXJuIGJ5dGVzLmxlbmd0aCAtIGk7XG59XG5mdW5jdGlvbiBlbmNvZGVOb2RlKG5vZGUpIHtcbiAgY29uc3Qgc2l6ZSA9IHNpemVOb2RlKG5vZGUpO1xuICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICBsZXQgaSA9IHNpemU7XG4gIGlmIChub2RlLkRhdGEpIHtcbiAgICBpIC09IG5vZGUuRGF0YS5sZW5ndGg7XG4gICAgYnl0ZXMuc2V0KG5vZGUuRGF0YSwgaSk7XG4gICAgaSA9IGVuY29kZVZhcmludChieXRlcywgaSwgbm9kZS5EYXRhLmxlbmd0aCkgLSAxO1xuICAgIGJ5dGVzW2ldID0gMTA7XG4gIH1cbiAgaWYgKG5vZGUuTGlua3MpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IG5vZGUuTGlua3MubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgY29uc3Qgc2l6ZSA9IGVuY29kZUxpbmsobm9kZS5MaW5rc1tpbmRleF0sIGJ5dGVzLnN1YmFycmF5KDAsIGkpKTtcbiAgICAgIGkgLT0gc2l6ZTtcbiAgICAgIGkgPSBlbmNvZGVWYXJpbnQoYnl0ZXMsIGksIHNpemUpIC0gMTtcbiAgICAgIGJ5dGVzW2ldID0gMTg7XG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlcztcbn1cbmZ1bmN0aW9uIHNpemVMaW5rKGxpbmspIHtcbiAgbGV0IG4gPSAwO1xuICBpZiAobGluay5IYXNoKSB7XG4gICAgY29uc3QgbCA9IGxpbmsuSGFzaC5sZW5ndGg7XG4gICAgbiArPSAxICsgbCArIHNvdihsKTtcbiAgfVxuICBpZiAodHlwZW9mIGxpbmsuTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBsID0gdGV4dEVuY29kZXIuZW5jb2RlKGxpbmsuTmFtZSkubGVuZ3RoO1xuICAgIG4gKz0gMSArIGwgKyBzb3YobCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBsaW5rLlRzaXplID09PSAnbnVtYmVyJykge1xuICAgIG4gKz0gMSArIHNvdihsaW5rLlRzaXplKTtcbiAgfVxuICByZXR1cm4gbjtcbn1cbmZ1bmN0aW9uIHNpemVOb2RlKG5vZGUpIHtcbiAgbGV0IG4gPSAwO1xuICBpZiAobm9kZS5EYXRhKSB7XG4gICAgY29uc3QgbCA9IG5vZGUuRGF0YS5sZW5ndGg7XG4gICAgbiArPSAxICsgbCArIHNvdihsKTtcbiAgfVxuICBpZiAobm9kZS5MaW5rcykge1xuICAgIGZvciAoY29uc3QgbGluayBvZiBub2RlLkxpbmtzKSB7XG4gICAgICBjb25zdCBsID0gc2l6ZUxpbmsobGluayk7XG4gICAgICBuICs9IDEgKyBsICsgc292KGwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbjtcbn1cbmZ1bmN0aW9uIGVuY29kZVZhcmludChieXRlcywgb2Zmc2V0LCB2KSB7XG4gIG9mZnNldCAtPSBzb3Yodik7XG4gIGNvbnN0IGJhc2UgPSBvZmZzZXQ7XG4gIHdoaWxlICh2ID49IG1heFVJbnQzMikge1xuICAgIGJ5dGVzW29mZnNldCsrXSA9IHYgJiAxMjcgfCAxMjg7XG4gICAgdiAvPSAxMjg7XG4gIH1cbiAgd2hpbGUgKHYgPj0gMTI4KSB7XG4gICAgYnl0ZXNbb2Zmc2V0KytdID0gdiAmIDEyNyB8IDEyODtcbiAgICB2ID4+Pj0gNztcbiAgfVxuICBieXRlc1tvZmZzZXRdID0gdjtcbiAgcmV0dXJuIGJhc2U7XG59XG5mdW5jdGlvbiBzb3YoeCkge1xuICBpZiAoeCAlIDIgPT09IDApIHtcbiAgICB4Kys7XG4gIH1cbiAgcmV0dXJuIE1hdGguZmxvb3IoKGxlbjY0KHgpICsgNikgLyA3KTtcbn1cbmZ1bmN0aW9uIGxlbjY0KHgpIHtcbiAgbGV0IG4gPSAwO1xuICBpZiAoeCA+PSBtYXhJbnQzMikge1xuICAgIHggPSBNYXRoLmZsb29yKHggLyBtYXhJbnQzMik7XG4gICAgbiA9IDMyO1xuICB9XG4gIGlmICh4ID49IDEgPDwgMTYpIHtcbiAgICB4ID4+Pj0gMTY7XG4gICAgbiArPSAxNjtcbiAgfVxuICBpZiAoeCA+PSAxIDw8IDgpIHtcbiAgICB4ID4+Pj0gODtcbiAgICBuICs9IDg7XG4gIH1cbiAgcmV0dXJuIG4gKyBsZW44dGFiW3hdO1xufVxuY29uc3QgbGVuOHRhYiA9IFtcbiAgMCxcbiAgMSxcbiAgMixcbiAgMixcbiAgMyxcbiAgMyxcbiAgMyxcbiAgMyxcbiAgNCxcbiAgNCxcbiAgNCxcbiAgNCxcbiAgNCxcbiAgNCxcbiAgNCxcbiAgNCxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNSxcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNixcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgNyxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOCxcbiAgOFxuXTtcblxuZXhwb3J0cy5lbmNvZGVOb2RlID0gZW5jb2RlTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNpZCA9IHJlcXVpcmUoJ211bHRpZm9ybWF0cy9jaWQnKTtcblxuY29uc3QgcGJOb2RlUHJvcGVydGllcyA9IFtcbiAgJ0RhdGEnLFxuICAnTGlua3MnXG5dO1xuY29uc3QgcGJMaW5rUHJvcGVydGllcyA9IFtcbiAgJ0hhc2gnLFxuICAnTmFtZScsXG4gICdUc2l6ZSdcbl07XG5jb25zdCB0ZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuZnVuY3Rpb24gbGlua0NvbXBhcmF0b3IoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IGFidWYgPSBhLk5hbWUgPyB0ZXh0RW5jb2Rlci5lbmNvZGUoYS5OYW1lKSA6IFtdO1xuICBjb25zdCBiYnVmID0gYi5OYW1lID8gdGV4dEVuY29kZXIuZW5jb2RlKGIuTmFtZSkgOiBbXTtcbiAgbGV0IHggPSBhYnVmLmxlbmd0aDtcbiAgbGV0IHkgPSBiYnVmLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYWJ1ZltpXSAhPT0gYmJ1ZltpXSkge1xuICAgICAgeCA9IGFidWZbaV07XG4gICAgICB5ID0gYmJ1ZltpXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4geCA8IHkgPyAtMSA6IHkgPCB4ID8gMSA6IDA7XG59XG5mdW5jdGlvbiBoYXNPbmx5UHJvcGVydGllcyhub2RlLCBwcm9wZXJ0aWVzKSB7XG4gIHJldHVybiAhT2JqZWN0LmtleXMobm9kZSkuc29tZShwID0+ICFwcm9wZXJ0aWVzLmluY2x1ZGVzKHApKTtcbn1cbmZ1bmN0aW9uIGFzTGluayhsaW5rKSB7XG4gIGlmICh0eXBlb2YgbGluay5hc0NJRCA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBIYXNoID0gY2lkLkNJRC5hc0NJRChsaW5rKTtcbiAgICBpZiAoIUhhc2gpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0nKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgSGFzaCB9O1xuICB9XG4gIGlmICh0eXBlb2YgbGluayAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShsaW5rKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0nKTtcbiAgfVxuICBjb25zdCBwYmwgPSB7fTtcbiAgaWYgKGxpbmsuSGFzaCkge1xuICAgIGxldCBjaWQkMSA9IGNpZC5DSUQuYXNDSUQobGluay5IYXNoKTtcbiAgICB0cnkge1xuICAgICAgaWYgKCFjaWQkMSkge1xuICAgICAgICBpZiAodHlwZW9mIGxpbmsuSGFzaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjaWQkMSA9IGNpZC5DSUQucGFyc2UobGluay5IYXNoKTtcbiAgICAgICAgfSBlbHNlIGlmIChsaW5rLkhhc2ggaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgY2lkJDEgPSBjaWQuQ0lELmRlY29kZShsaW5rLkhhc2gpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBEQUctUEIgZm9ybTogJHsgZS5tZXNzYWdlIH1gKTtcbiAgICB9XG4gICAgaWYgKGNpZCQxKSB7XG4gICAgICBwYmwuSGFzaCA9IGNpZCQxO1xuICAgIH1cbiAgfVxuICBpZiAoIXBibC5IYXNoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBEQUctUEIgZm9ybScpO1xuICB9XG4gIGlmICh0eXBlb2YgbGluay5OYW1lID09PSAnc3RyaW5nJykge1xuICAgIHBibC5OYW1lID0gbGluay5OYW1lO1xuICB9XG4gIGlmICh0eXBlb2YgbGluay5Uc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICBwYmwuVHNpemUgPSBsaW5rLlRzaXplO1xuICB9XG4gIHJldHVybiBwYmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlKG5vZGUpIHtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgIG5vZGUgPSB7IERhdGE6IG5vZGUgfTtcbiAgfVxuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtJyk7XG4gIH1cbiAgY29uc3QgcGJuID0ge307XG4gIGlmIChub2RlLkRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2Ygbm9kZS5EYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgcGJuLkRhdGEgPSB0ZXh0RW5jb2Rlci5lbmNvZGUobm9kZS5EYXRhKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuRGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgIHBibi5EYXRhID0gbm9kZS5EYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtJyk7XG4gICAgfVxuICB9XG4gIGlmIChub2RlLkxpbmtzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlLkxpbmtzKSkge1xuICAgICAgcGJuLkxpbmtzID0gbm9kZS5MaW5rcy5tYXAoYXNMaW5rKTtcbiAgICAgIHBibi5MaW5rcy5zb3J0KGxpbmtDb21wYXJhdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBEQUctUEIgZm9ybScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYm4uTGlua3MgPSBbXTtcbiAgfVxuICByZXR1cm4gcGJuO1xufVxuZnVuY3Rpb24gdmFsaWRhdGUobm9kZSkge1xuICBpZiAoIW5vZGUgfHwgdHlwZW9mIG5vZGUgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtJyk7XG4gIH1cbiAgaWYgKCFoYXNPbmx5UHJvcGVydGllcyhub2RlLCBwYk5vZGVQcm9wZXJ0aWVzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0gKGV4dHJhbmVvdXMgcHJvcGVydGllcyknKTtcbiAgfVxuICBpZiAobm9kZS5EYXRhICE9PSB1bmRlZmluZWQgJiYgIShub2RlLkRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0gKERhdGEgbXVzdCBiZSBhIFVpbnQ4QXJyYXkpJyk7XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGUuTGlua3MpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBEQUctUEIgZm9ybSAoTGlua3MgbXVzdCBiZSBhbiBhcnJheSknKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuTGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsaW5rID0gbm9kZS5MaW5rc1tpXTtcbiAgICBpZiAoIWxpbmsgfHwgdHlwZW9mIGxpbmsgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkobGluaykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0gKGJhZCBsaW5rIG9iamVjdCknKTtcbiAgICB9XG4gICAgaWYgKCFoYXNPbmx5UHJvcGVydGllcyhsaW5rLCBwYkxpbmtQcm9wZXJ0aWVzKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBEQUctUEIgZm9ybSAoZXh0cmFuZW91cyBwcm9wZXJ0aWVzIG9uIGxpbmsgb2JqZWN0KScpO1xuICAgIH1cbiAgICBpZiAoIWxpbmsuSGFzaCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBEQUctUEIgZm9ybSAobGluayBtdXN0IGhhdmUgYSBIYXNoKScpO1xuICAgIH1cbiAgICBpZiAobGluay5IYXNoLmFzQ0lEICE9PSBsaW5rLkhhc2gpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0gKGxpbmsgSGFzaCBtdXN0IGJlIGEgQ0lEKScpO1xuICAgIH1cbiAgICBpZiAobGluay5OYW1lICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGxpbmsuTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0gKGxpbmsgTmFtZSBtdXN0IGJlIGEgc3RyaW5nKScpO1xuICAgIH1cbiAgICBpZiAobGluay5Uc2l6ZSAhPT0gdW5kZWZpbmVkICYmICh0eXBlb2YgbGluay5Uc2l6ZSAhPT0gJ251bWJlcicgfHwgbGluay5Uc2l6ZSAlIDEgIT09IDApKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIERBRy1QQiBmb3JtIChsaW5rIFRzaXplIG11c3QgYmUgYW4gaW50ZWdlciknKTtcbiAgICB9XG4gICAgaWYgKGkgPiAwICYmIGxpbmtDb21wYXJhdG9yKGxpbmssIG5vZGUuTGlua3NbaSAtIDFdKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgREFHLVBCIGZvcm0gKGxpbmtzIG11c3QgYmUgc29ydGVkIGJ5IE5hbWUgYnl0ZXMpJyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVOb2RlKGRhdGEsIGxpbmtzID0gW10pIHtcbiAgcmV0dXJuIHByZXBhcmUoe1xuICAgIERhdGE6IGRhdGEsXG4gICAgTGlua3M6IGxpbmtzXG4gIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlTGluayhuYW1lLCBzaXplLCBjaWQpIHtcbiAgcmV0dXJuIGFzTGluayh7XG4gICAgSGFzaDogY2lkLFxuICAgIE5hbWU6IG5hbWUsXG4gICAgVHNpemU6IHNpemVcbiAgfSk7XG59XG5cbmV4cG9ydHMuY3JlYXRlTGluayA9IGNyZWF0ZUxpbms7XG5leHBvcnRzLmNyZWF0ZU5vZGUgPSBjcmVhdGVOb2RlO1xuZXhwb3J0cy5wcmVwYXJlID0gcHJlcGFyZTtcbmV4cG9ydHMudmFsaWRhdGUgPSB2YWxpZGF0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNwbGl0dGVyID0gcmVxdWlyZSgnLi9zcGxpdHRlci5qcycpO1xudmFyIGpvaW5lciA9IHJlcXVpcmUoJy4vam9pbmVyLmpzJyk7XG5cblxuXG5leHBvcnRzLlRyZWV3YWxrQ2FyU3BsaXR0ZXIgPSBzcGxpdHRlci5UcmVld2Fsa0NhclNwbGl0dGVyO1xuZXhwb3J0cy5UcmVld2Fsa0NhckpvaW5lciA9IGpvaW5lci5UcmVld2Fsa0NhckpvaW5lcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNhciA9IHJlcXVpcmUoJ0BpcGxkL2NhcicpO1xuXG5jbGFzcyBUcmVld2Fsa0NhckpvaW5lciB7XG4gIGNvbnN0cnVjdG9yKGNhcnMpIHtcbiAgICB0aGlzLl9jYXJzID0gQXJyYXkuZnJvbShjYXJzKTtcbiAgICBpZiAoIXRoaXMuX2NhcnMubGVuZ3RoKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIENBUnMnKTtcbiAgfVxuICBhc3luYyAqY2FyKCkge1xuICAgIGNvbnN0IHJlYWRlciA9IHRoaXMuX2NhcnNbMF07XG4gICAgY29uc3Qgcm9vdHMgPSBhd2FpdCByZWFkZXIuZ2V0Um9vdHMoKTtcbiAgICBjb25zdCB7d3JpdGVyLCBvdXR9ID0gY2FyLkNhcldyaXRlci5jcmVhdGUocm9vdHMpO1xuICAgIGNvbnN0IHdyaXRlQ2FyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgd3JpdHRlbiA9IG5ldyBTZXQoKTtcbiAgICAgIGNvbnN0IHdyaXRlQmxvY2tzID0gYXN5bmMgcmVhZGVyID0+IHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBiIG9mIHJlYWRlci5ibG9ja3MoKSkge1xuICAgICAgICAgIGlmICh3cml0dGVuLmhhcyhiLmNpZC50b1N0cmluZygpKSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIGF3YWl0IHdyaXRlci5wdXQoYik7XG4gICAgICAgICAgd3JpdHRlbi5hZGQoYi5jaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB3cml0ZUJsb2NrcyhyZWFkZXIpO1xuICAgICAgICBmb3IgKGNvbnN0IHJlYWRlciBvZiB0aGlzLl9jYXJzLnNsaWNlKDEpKSB7XG4gICAgICAgICAgYXdhaXQgd3JpdGVCbG9ja3MocmVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IHdyaXRlci5jbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgd3JpdGVDYXIoKTtcbiAgICB5aWVsZCogb3V0O1xuICB9XG59XG5cbmV4cG9ydHMuVHJlZXdhbGtDYXJKb2luZXIgPSBUcmVld2Fsa0NhckpvaW5lcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNhciA9IHJlcXVpcmUoJ0BpcGxkL2NhcicpO1xudmFyIGJsb2NrID0gcmVxdWlyZSgnbXVsdGlmb3JtYXRzL2Jsb2NrJyk7XG52YXIgcmF3ID0gcmVxdWlyZSgnbXVsdGlmb3JtYXRzL2NvZGVjcy9yYXcnKTtcbnZhciBkYWdDYm9yID0gcmVxdWlyZSgnQGlwbGQvZGFnLWNib3InKTtcbnZhciBwYiA9IHJlcXVpcmUoJ0BpcGxkL2RhZy1wYicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcE5hbWVzcGFjZShlKSB7XG4gIGlmIChlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gIHZhciBuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGUpIHtcbiAgICBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICBpZiAoayAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHZhciBkID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCBrKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIGssIGQuZ2V0ID8gZCA6IHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGVba107XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBuWydkZWZhdWx0J10gPSBlO1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShuKTtcbn1cblxudmFyIHJhd19fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKHJhdyk7XG52YXIgZGFnQ2Jvcl9fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKGRhZ0Nib3IpO1xudmFyIHBiX19uYW1lc3BhY2UgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BOYW1lc3BhY2UocGIpO1xuXG5jbGFzcyBUcmVld2Fsa0NhclNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3IocmVhZGVyLCB0YXJnZXRTaXplLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFNpemUgIT09ICdudW1iZXInIHx8IHRhcmdldFNpemUgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHRhcmdldCBjaHVuayBzaXplJyk7XG4gICAgfVxuICAgIHRoaXMuX3JlYWRlciA9IHJlYWRlcjtcbiAgICB0aGlzLl90YXJnZXRTaXplID0gdGFyZ2V0U2l6ZTtcbiAgICB0aGlzLl9kZWNvZGVycyA9IFtcbiAgICAgIHBiX19uYW1lc3BhY2UsXG4gICAgICByYXdfX25hbWVzcGFjZSxcbiAgICAgIGRhZ0Nib3JfX25hbWVzcGFjZSxcbiAgICAgIC4uLm9wdGlvbnMuZGVjb2RlcnMgfHwgW11cbiAgICBdO1xuICB9XG4gIGFzeW5jICpjYXJzKCkge1xuICAgIGNvbnN0IHJvb3RzID0gYXdhaXQgdGhpcy5fcmVhZGVyLmdldFJvb3RzKCk7XG4gICAgaWYgKHJvb3RzLmxlbmd0aCAhPT0gMSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCBudW1iZXIgb2Ygcm9vdHM6ICR7IHJvb3RzLmxlbmd0aCB9YCk7XG4gICAgbGV0IGNoYW5uZWw7XG4gICAgZm9yIGF3YWl0IChjb25zdCB2YWwgb2YgdGhpcy5fY2Fycyhyb290c1swXSkpIHtcbiAgICAgIGNoYW5uZWwgPSB2YWwuY2hhbm5lbDtcbiAgICAgIGlmICh2YWwub3V0KVxuICAgICAgICB5aWVsZCB2YWwub3V0O1xuICAgIH1cbiAgICBpZiAoIWNoYW5uZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBDQVIgd3JpdGVyIGNoYW5uZWwnKTtcbiAgICB9XG4gICAgY2hhbm5lbC53cml0ZXIuY2xvc2UoKTtcbiAgICB5aWVsZCBjaGFubmVsLm91dDtcbiAgfVxuICBhc3luYyBfZ2V0KGNpZCkge1xuICAgIGNvbnN0IHJhd0Jsb2NrID0gYXdhaXQgdGhpcy5fcmVhZGVyLmdldChjaWQpO1xuICAgIGlmICghcmF3QmxvY2spXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1pc3NpbmcgYmxvY2sgZm9yICR7IGNpZCB9YCk7XG4gICAgY29uc3Qge2J5dGVzfSA9IHJhd0Jsb2NrO1xuICAgIGNvbnN0IGRlY29kZXIgPSB0aGlzLl9kZWNvZGVycy5maW5kKGQgPT4gZC5jb2RlID09PSBjaWQuY29kZSk7XG4gICAgaWYgKCFkZWNvZGVyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtaXNzaW5nIGRlY29kZXIgZm9yICR7IGNpZC5jb2RlIH1gKTtcbiAgICByZXR1cm4gbmV3IGJsb2NrLkJsb2NrKHtcbiAgICAgIGNpZCxcbiAgICAgIGJ5dGVzLFxuICAgICAgdmFsdWU6IGRlY29kZXIuZGVjb2RlKGJ5dGVzKVxuICAgIH0pO1xuICB9XG4gIGFzeW5jICpfY2FycyhjaWQsIHBhcmVudHMgPSBbXSwgY2hhbm5lbCA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5fZ2V0KGNpZCk7XG4gICAgY2hhbm5lbCA9IGNoYW5uZWwgfHwgT2JqZWN0LmFzc2lnbihjYXIuQ2FyV3JpdGVyLmNyZWF0ZShjaWQpLCB7IHNpemU6IDAgfSk7XG4gICAgaWYgKGNoYW5uZWwuc2l6ZSA+IDAgJiYgY2hhbm5lbC5zaXplICsgYmxvY2suYnl0ZXMuYnl0ZUxlbmd0aCA+PSB0aGlzLl90YXJnZXRTaXplKSB7XG4gICAgICBjaGFubmVsLndyaXRlci5jbG9zZSgpO1xuICAgICAgY29uc3Qge291dH0gPSBjaGFubmVsO1xuICAgICAgY2hhbm5lbCA9IG5ld0NhcihwYXJlbnRzKTtcbiAgICAgIHlpZWxkIHtcbiAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgb3V0XG4gICAgICB9O1xuICAgIH1cbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoYmxvY2spO1xuICAgIGNoYW5uZWwuc2l6ZSArPSBibG9jay5ieXRlcy5ieXRlTGVuZ3RoO1xuICAgIGNoYW5uZWwud3JpdGVyLnB1dChibG9jayk7XG4gICAgZm9yIChjb25zdCBbLCBjaWRdIG9mIGJsb2NrLmxpbmtzKCkpIHtcbiAgICAgIGZvciBhd2FpdCAoY29uc3QgdmFsIG9mIHRoaXMuX2NhcnMoY2lkLCBwYXJlbnRzLCBjaGFubmVsKSkge1xuICAgICAgICBjaGFubmVsID0gdmFsLmNoYW5uZWw7XG4gICAgICAgIHlpZWxkIHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjaGFubmVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgQ0FSIHdyaXRlciBjaGFubmVsJyk7XG4gICAgfVxuICAgIHlpZWxkIHsgY2hhbm5lbCB9O1xuICB9XG4gIHN0YXRpYyBhc3luYyBmcm9tSXRlcmFibGUoaXRlcmFibGUsIHRhcmdldFNpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZWFkZXIgPSBhd2FpdCBjYXIuQ2FyUmVhZGVyLmZyb21JdGVyYWJsZShpdGVyYWJsZSk7XG4gICAgcmV0dXJuIG5ldyBUcmVld2Fsa0NhclNwbGl0dGVyKHJlYWRlciwgdGFyZ2V0U2l6ZSwgb3B0aW9ucyk7XG4gIH1cbiAgc3RhdGljIGFzeW5jIGZyb21CbG9iKGJsb2IsIHRhcmdldFNpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7XG4gICAgY29uc3QgcmVhZGVyID0gYXdhaXQgY2FyLkNhclJlYWRlci5mcm9tQnl0ZXMobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG4gICAgcmV0dXJuIG5ldyBUcmVld2Fsa0NhclNwbGl0dGVyKHJlYWRlciwgdGFyZ2V0U2l6ZSwgb3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG5ld0NhcihwYXJlbnRzKSB7XG4gIGNvbnN0IGNoID0gT2JqZWN0LmFzc2lnbihjYXIuQ2FyV3JpdGVyLmNyZWF0ZShwYXJlbnRzWzBdLmNpZCksIHsgc2l6ZTogcGFyZW50cy5yZWR1Y2UoKHNpemUsIGIpID0+IHNpemUgKyBiLmJ5dGVzLmJ5dGVMZW5ndGgsIDApIH0pO1xuICBmb3IgKGNvbnN0IGIgb2YgcGFyZW50cykge1xuICAgIGNoLndyaXRlci5wdXQoYik7XG4gIH1cbiAgcmV0dXJuIGNoO1xufVxuXG5leHBvcnRzLlRyZWV3YWxrQ2FyU3BsaXR0ZXIgPSBUcmVld2Fsa0NhclNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9saWIvZW5jb2RlLmpzJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9saWIvZGVjb2RlLmpzJyk7XG52YXIgdG9rZW4gPSByZXF1aXJlKCcuL2xpYi90b2tlbi5qcycpO1xuXG5cblxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGUuZW5jb2RlO1xuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGUuZGVjb2RlO1xuZXhwb3J0cy5Ub2tlbiA9IHRva2VuLlRva2VuO1xuZXhwb3J0cy5UeXBlID0gdG9rZW4uVHlwZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRva2VuID0gcmVxdWlyZSgnLi90b2tlbi5qcycpO1xudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tbW9uLmpzJyk7XG5cbmNvbnN0IHVpbnRCb3VuZGFyaWVzID0gW1xuICAyNCxcbiAgMjU2LFxuICA2NTUzNixcbiAgNDI5NDk2NzI5NixcbiAgQmlnSW50KCcxODQ0Njc0NDA3MzcwOTU1MTYxNicpXG5dO1xuZnVuY3Rpb24gcmVhZFVpbnQ4KGRhdGEsIG9mZnNldCwgb3B0aW9ucykge1xuICBjb21tb24uYXNzZXJ0RW5vdWdoRGF0YShkYXRhLCBvZmZzZXQsIDEpO1xuICBjb25zdCB2YWx1ZSA9IGRhdGFbb2Zmc2V0XTtcbiAgaWYgKG9wdGlvbnMuc3RyaWN0ID09PSB0cnVlICYmIHZhbHVlIDwgdWludEJvdW5kYXJpZXNbMF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBpbnRlZ2VyIGVuY29kZWQgaW4gbW9yZSBieXRlcyB0aGFuIG5lY2Vzc2FyeSAoc3RyaWN0IGRlY29kZSlgKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiByZWFkVWludDE2KGRhdGEsIG9mZnNldCwgb3B0aW9ucykge1xuICBjb21tb24uYXNzZXJ0RW5vdWdoRGF0YShkYXRhLCBvZmZzZXQsIDIpO1xuICBjb25zdCB2YWx1ZSA9IGRhdGFbb2Zmc2V0XSA8PCA4IHwgZGF0YVtvZmZzZXQgKyAxXTtcbiAgaWYgKG9wdGlvbnMuc3RyaWN0ID09PSB0cnVlICYmIHZhbHVlIDwgdWludEJvdW5kYXJpZXNbMV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBpbnRlZ2VyIGVuY29kZWQgaW4gbW9yZSBieXRlcyB0aGFuIG5lY2Vzc2FyeSAoc3RyaWN0IGRlY29kZSlgKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiByZWFkVWludDMyKGRhdGEsIG9mZnNldCwgb3B0aW9ucykge1xuICBjb21tb24uYXNzZXJ0RW5vdWdoRGF0YShkYXRhLCBvZmZzZXQsIDQpO1xuICBjb25zdCB2YWx1ZSA9IGRhdGFbb2Zmc2V0XSAqIDE2Nzc3MjE2ICsgKGRhdGFbb2Zmc2V0ICsgMV0gPDwgMTYpICsgKGRhdGFbb2Zmc2V0ICsgMl0gPDwgOCkgKyBkYXRhW29mZnNldCArIDNdO1xuICBpZiAob3B0aW9ucy5zdHJpY3QgPT09IHRydWUgJiYgdmFsdWUgPCB1aW50Qm91bmRhcmllc1syXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IGludGVnZXIgZW5jb2RlZCBpbiBtb3JlIGJ5dGVzIHRoYW4gbmVjZXNzYXJ5IChzdHJpY3QgZGVjb2RlKWApO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHJlYWRVaW50NjQoZGF0YSwgb2Zmc2V0LCBvcHRpb25zKSB7XG4gIGNvbW1vbi5hc3NlcnRFbm91Z2hEYXRhKGRhdGEsIG9mZnNldCwgOCk7XG4gIGNvbnN0IGhpID0gZGF0YVtvZmZzZXRdICogMTY3NzcyMTYgKyAoZGF0YVtvZmZzZXQgKyAxXSA8PCAxNikgKyAoZGF0YVtvZmZzZXQgKyAyXSA8PCA4KSArIGRhdGFbb2Zmc2V0ICsgM107XG4gIGNvbnN0IGxvID0gZGF0YVtvZmZzZXQgKyA0XSAqIDE2Nzc3MjE2ICsgKGRhdGFbb2Zmc2V0ICsgNV0gPDwgMTYpICsgKGRhdGFbb2Zmc2V0ICsgNl0gPDwgOCkgKyBkYXRhW29mZnNldCArIDddO1xuICBjb25zdCB2YWx1ZSA9IChCaWdJbnQoaGkpIDw8IEJpZ0ludCgzMikpICsgQmlnSW50KGxvKTtcbiAgaWYgKG9wdGlvbnMuc3RyaWN0ID09PSB0cnVlICYmIHZhbHVlIDwgdWludEJvdW5kYXJpZXNbM10pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBpbnRlZ2VyIGVuY29kZWQgaW4gbW9yZSBieXRlcyB0aGFuIG5lY2Vzc2FyeSAoc3RyaWN0IGRlY29kZSlgKTtcbiAgfVxuICBpZiAodmFsdWUgPD0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBpZiAob3B0aW9ucy5hbGxvd0JpZ0ludCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBpbnRlZ2VycyBvdXRzaWRlIG9mIHRoZSBzYWZlIGludGVnZXIgcmFuZ2UgYXJlIG5vdCBzdXBwb3J0ZWRgKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVVpbnQ4KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS51aW50LCByZWFkVWludDgoZGF0YSwgcG9zICsgMSwgb3B0aW9ucyksIDIpO1xufVxuZnVuY3Rpb24gZGVjb2RlVWludDE2KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS51aW50LCByZWFkVWludDE2KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpLCAzKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVVpbnQzMihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudWludCwgcmVhZFVpbnQzMihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSwgNSk7XG59XG5mdW5jdGlvbiBkZWNvZGVVaW50NjQoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnVpbnQsIHJlYWRVaW50NjQoZGF0YSwgcG9zICsgMSwgb3B0aW9ucyksIDkpO1xufVxuZnVuY3Rpb24gZW5jb2RlVWludChidWYsIHRva2VuKSB7XG4gIHJldHVybiBlbmNvZGVVaW50VmFsdWUoYnVmLCAwLCB0b2tlbi52YWx1ZSk7XG59XG5mdW5jdGlvbiBlbmNvZGVVaW50VmFsdWUoYnVmLCBtYWpvciwgdWludCkge1xuICBpZiAodWludCA8IHVpbnRCb3VuZGFyaWVzWzBdKSB7XG4gICAgY29uc3QgbnVpbnQgPSBOdW1iZXIodWludCk7XG4gICAgYnVmLnB1c2goW21ham9yIHwgbnVpbnRdKTtcbiAgfSBlbHNlIGlmICh1aW50IDwgdWludEJvdW5kYXJpZXNbMV0pIHtcbiAgICBjb25zdCBudWludCA9IE51bWJlcih1aW50KTtcbiAgICBidWYucHVzaChbXG4gICAgICBtYWpvciB8IDI0LFxuICAgICAgbnVpbnRcbiAgICBdKTtcbiAgfSBlbHNlIGlmICh1aW50IDwgdWludEJvdW5kYXJpZXNbMl0pIHtcbiAgICBjb25zdCBudWludCA9IE51bWJlcih1aW50KTtcbiAgICBidWYucHVzaChbXG4gICAgICBtYWpvciB8IDI1LFxuICAgICAgbnVpbnQgPj4+IDgsXG4gICAgICBudWludCAmIDI1NVxuICAgIF0pO1xuICB9IGVsc2UgaWYgKHVpbnQgPCB1aW50Qm91bmRhcmllc1szXSkge1xuICAgIGNvbnN0IG51aW50ID0gTnVtYmVyKHVpbnQpO1xuICAgIGJ1Zi5wdXNoKFtcbiAgICAgIG1ham9yIHwgMjYsXG4gICAgICBudWludCA+Pj4gMjQgJiAyNTUsXG4gICAgICBudWludCA+Pj4gMTYgJiAyNTUsXG4gICAgICBudWludCA+Pj4gOCAmIDI1NSxcbiAgICAgIG51aW50ICYgMjU1XG4gICAgXSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYnVpbnQgPSBCaWdJbnQodWludCk7XG4gICAgaWYgKGJ1aW50IDwgdWludEJvdW5kYXJpZXNbNF0pIHtcbiAgICAgIGNvbnN0IHNldCA9IFtcbiAgICAgICAgbWFqb3IgfCAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMFxuICAgICAgXTtcbiAgICAgIGxldCBsbyA9IE51bWJlcihidWludCAmIEJpZ0ludCg0Mjk0OTY3Mjk1KSk7XG4gICAgICBsZXQgaGkgPSBOdW1iZXIoYnVpbnQgPj4gQmlnSW50KDMyKSAmIEJpZ0ludCg0Mjk0OTY3Mjk1KSk7XG4gICAgICBzZXRbOF0gPSBsbyAmIDI1NTtcbiAgICAgIGxvID0gbG8gPj4gODtcbiAgICAgIHNldFs3XSA9IGxvICYgMjU1O1xuICAgICAgbG8gPSBsbyA+PiA4O1xuICAgICAgc2V0WzZdID0gbG8gJiAyNTU7XG4gICAgICBsbyA9IGxvID4+IDg7XG4gICAgICBzZXRbNV0gPSBsbyAmIDI1NTtcbiAgICAgIHNldFs0XSA9IGhpICYgMjU1O1xuICAgICAgaGkgPSBoaSA+PiA4O1xuICAgICAgc2V0WzNdID0gaGkgJiAyNTU7XG4gICAgICBoaSA9IGhpID4+IDg7XG4gICAgICBzZXRbMl0gPSBoaSAmIDI1NTtcbiAgICAgIGhpID0gaGkgPj4gODtcbiAgICAgIHNldFsxXSA9IGhpICYgMjU1O1xuICAgICAgYnVmLnB1c2goc2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gZW5jb3VudGVyZWQgQmlnSW50IGxhcmdlciB0aGFuIGFsbG93YWJsZSByYW5nZWApO1xuICAgIH1cbiAgfVxufVxuZW5jb2RlVWludC5lbmNvZGVkU2l6ZSA9IGZ1bmN0aW9uIGVuY29kZWRTaXplKHRva2VuKSB7XG4gIHJldHVybiBlbmNvZGVVaW50VmFsdWUuZW5jb2RlZFNpemUodG9rZW4udmFsdWUpO1xufTtcbmVuY29kZVVpbnRWYWx1ZS5lbmNvZGVkU2l6ZSA9IGZ1bmN0aW9uIGVuY29kZWRTaXplKHVpbnQpIHtcbiAgaWYgKHVpbnQgPCB1aW50Qm91bmRhcmllc1swXSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmICh1aW50IDwgdWludEJvdW5kYXJpZXNbMV0pIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuICBpZiAodWludCA8IHVpbnRCb3VuZGFyaWVzWzJdKSB7XG4gICAgcmV0dXJuIDM7XG4gIH1cbiAgaWYgKHVpbnQgPCB1aW50Qm91bmRhcmllc1szXSkge1xuICAgIHJldHVybiA1O1xuICB9XG4gIHJldHVybiA5O1xufTtcbmVuY29kZVVpbnQuY29tcGFyZVRva2VucyA9IGZ1bmN0aW9uIGNvbXBhcmVUb2tlbnModG9rMSwgdG9rMikge1xuICByZXR1cm4gdG9rMS52YWx1ZSA8IHRvazIudmFsdWUgPyAtMSA6IHRvazEudmFsdWUgPiB0b2syLnZhbHVlID8gMSA6IDA7XG59O1xuXG5leHBvcnRzLmRlY29kZVVpbnQxNiA9IGRlY29kZVVpbnQxNjtcbmV4cG9ydHMuZGVjb2RlVWludDMyID0gZGVjb2RlVWludDMyO1xuZXhwb3J0cy5kZWNvZGVVaW50NjQgPSBkZWNvZGVVaW50NjQ7XG5leHBvcnRzLmRlY29kZVVpbnQ4ID0gZGVjb2RlVWludDg7XG5leHBvcnRzLmVuY29kZVVpbnQgPSBlbmNvZGVVaW50O1xuZXhwb3J0cy5lbmNvZGVVaW50VmFsdWUgPSBlbmNvZGVVaW50VmFsdWU7XG5leHBvcnRzLnJlYWRVaW50MTYgPSByZWFkVWludDE2O1xuZXhwb3J0cy5yZWFkVWludDMyID0gcmVhZFVpbnQzMjtcbmV4cG9ydHMucmVhZFVpbnQ2NCA9IHJlYWRVaW50NjQ7XG5leHBvcnRzLnJlYWRVaW50OCA9IHJlYWRVaW50ODtcbmV4cG9ydHMudWludEJvdW5kYXJpZXMgPSB1aW50Qm91bmRhcmllcztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRva2VuID0gcmVxdWlyZSgnLi90b2tlbi5qcycpO1xudmFyIF8wdWludCA9IHJlcXVpcmUoJy4vMHVpbnQuanMnKTtcbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbi5qcycpO1xuXG5mdW5jdGlvbiBkZWNvZGVOZWdpbnQ4KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5uZWdpbnQsIC0xIC0gXzB1aW50LnJlYWRVaW50OChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSwgMik7XG59XG5mdW5jdGlvbiBkZWNvZGVOZWdpbnQxNihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubmVnaW50LCAtMSAtIF8wdWludC5yZWFkVWludDE2KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpLCAzKTtcbn1cbmZ1bmN0aW9uIGRlY29kZU5lZ2ludDMyKGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5uZWdpbnQsIC0xIC0gXzB1aW50LnJlYWRVaW50MzIoZGF0YSwgcG9zICsgMSwgb3B0aW9ucyksIDUpO1xufVxuY29uc3QgbmVnMWIgPSBCaWdJbnQoLTEpO1xuY29uc3QgcG9zMWIgPSBCaWdJbnQoMSk7XG5mdW5jdGlvbiBkZWNvZGVOZWdpbnQ2NChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICBjb25zdCBpbnQgPSBfMHVpbnQucmVhZFVpbnQ2NChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKTtcbiAgaWYgKHR5cGVvZiBpbnQgIT09ICdiaWdpbnQnKSB7XG4gICAgY29uc3QgdmFsdWUgPSAtMSAtIGludDtcbiAgICBpZiAodmFsdWUgPj0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIpIHtcbiAgICAgIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5uZWdpbnQsIHZhbHVlLCA5KTtcbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMuYWxsb3dCaWdJbnQgIT09IHRydWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBpbnRlZ2VycyBvdXRzaWRlIG9mIHRoZSBzYWZlIGludGVnZXIgcmFuZ2UgYXJlIG5vdCBzdXBwb3J0ZWRgKTtcbiAgfVxuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubmVnaW50LCBuZWcxYiAtIEJpZ0ludChpbnQpLCA5KTtcbn1cbmZ1bmN0aW9uIGVuY29kZU5lZ2ludChidWYsIHRva2VuKSB7XG4gIGNvbnN0IG5lZ2ludCA9IHRva2VuLnZhbHVlO1xuICBjb25zdCB1bnNpZ25lZCA9IHR5cGVvZiBuZWdpbnQgPT09ICdiaWdpbnQnID8gbmVnaW50ICogbmVnMWIgLSBwb3MxYiA6IG5lZ2ludCAqIC0xIC0gMTtcbiAgXzB1aW50LmVuY29kZVVpbnRWYWx1ZShidWYsIHRva2VuLnR5cGUubWFqb3JFbmNvZGVkLCB1bnNpZ25lZCk7XG59XG5lbmNvZGVOZWdpbnQuZW5jb2RlZFNpemUgPSBmdW5jdGlvbiBlbmNvZGVkU2l6ZSh0b2tlbikge1xuICBjb25zdCBuZWdpbnQgPSB0b2tlbi52YWx1ZTtcbiAgY29uc3QgdW5zaWduZWQgPSB0eXBlb2YgbmVnaW50ID09PSAnYmlnaW50JyA/IG5lZ2ludCAqIG5lZzFiIC0gcG9zMWIgOiBuZWdpbnQgKiAtMSAtIDE7XG4gIGlmICh1bnNpZ25lZCA8IF8wdWludC51aW50Qm91bmRhcmllc1swXSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmICh1bnNpZ25lZCA8IF8wdWludC51aW50Qm91bmRhcmllc1sxXSkge1xuICAgIHJldHVybiAyO1xuICB9XG4gIGlmICh1bnNpZ25lZCA8IF8wdWludC51aW50Qm91bmRhcmllc1syXSkge1xuICAgIHJldHVybiAzO1xuICB9XG4gIGlmICh1bnNpZ25lZCA8IF8wdWludC51aW50Qm91bmRhcmllc1szXSkge1xuICAgIHJldHVybiA1O1xuICB9XG4gIHJldHVybiA5O1xufTtcbmVuY29kZU5lZ2ludC5jb21wYXJlVG9rZW5zID0gZnVuY3Rpb24gY29tcGFyZVRva2Vucyh0b2sxLCB0b2syKSB7XG4gIHJldHVybiB0b2sxLnZhbHVlIDwgdG9rMi52YWx1ZSA/IDEgOiB0b2sxLnZhbHVlID4gdG9rMi52YWx1ZSA/IC0xIDogMDtcbn07XG5cbmV4cG9ydHMuZGVjb2RlTmVnaW50MTYgPSBkZWNvZGVOZWdpbnQxNjtcbmV4cG9ydHMuZGVjb2RlTmVnaW50MzIgPSBkZWNvZGVOZWdpbnQzMjtcbmV4cG9ydHMuZGVjb2RlTmVnaW50NjQgPSBkZWNvZGVOZWdpbnQ2NDtcbmV4cG9ydHMuZGVjb2RlTmVnaW50OCA9IGRlY29kZU5lZ2ludDg7XG5leHBvcnRzLmVuY29kZU5lZ2ludCA9IGVuY29kZU5lZ2ludDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRva2VuID0gcmVxdWlyZSgnLi90b2tlbi5qcycpO1xudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tbW9uLmpzJyk7XG52YXIgXzB1aW50ID0gcmVxdWlyZSgnLi8wdWludC5qcycpO1xudmFyIGJ5dGVVdGlscyA9IHJlcXVpcmUoJy4vYnl0ZS11dGlscy5qcycpO1xuXG5mdW5jdGlvbiB0b1Rva2VuKGRhdGEsIHBvcywgcHJlZml4LCBsZW5ndGgpIHtcbiAgY29tbW9uLmFzc2VydEVub3VnaERhdGEoZGF0YSwgcG9zLCBwcmVmaXggKyBsZW5ndGgpO1xuICBjb25zdCBidWYgPSBieXRlVXRpbHMuc2xpY2UoZGF0YSwgcG9zICsgcHJlZml4LCBwb3MgKyBwcmVmaXggKyBsZW5ndGgpO1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYnl0ZXMsIGJ1ZiwgcHJlZml4ICsgbGVuZ3RoKTtcbn1cbmZ1bmN0aW9uIGRlY29kZUJ5dGVzQ29tcGFjdChkYXRhLCBwb3MsIG1pbm9yLCBfb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDEsIG1pbm9yKTtcbn1cbmZ1bmN0aW9uIGRlY29kZUJ5dGVzOChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDIsIF8wdWludC5yZWFkVWludDgoZGF0YSwgcG9zICsgMSwgb3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZGVjb2RlQnl0ZXMxNihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDMsIF8wdWludC5yZWFkVWludDE2KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGRlY29kZUJ5dGVzMzIoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCA1LCBfMHVpbnQucmVhZFVpbnQzMihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSk7XG59XG5mdW5jdGlvbiBkZWNvZGVCeXRlczY0KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIGNvbnN0IGwgPSBfMHVpbnQucmVhZFVpbnQ2NChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKTtcbiAgaWYgKHR5cGVvZiBsID09PSAnYmlnaW50Jykge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IDY0LWJpdCBpbnRlZ2VyIGJ5dGVzIGxlbmd0aHMgbm90IHN1cHBvcnRlZGApO1xuICB9XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgOSwgbCk7XG59XG5mdW5jdGlvbiB0b2tlbkJ5dGVzKHRva2VuJDEpIHtcbiAgaWYgKHRva2VuJDEuZW5jb2RlZEJ5dGVzID09PSB1bmRlZmluZWQpIHtcbiAgICB0b2tlbiQxLmVuY29kZWRCeXRlcyA9IHRva2VuJDEudHlwZSA9PT0gdG9rZW4uVHlwZS5zdHJpbmcgPyBieXRlVXRpbHMuZnJvbVN0cmluZyh0b2tlbiQxLnZhbHVlKSA6IHRva2VuJDEudmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRva2VuJDEuZW5jb2RlZEJ5dGVzO1xufVxuZnVuY3Rpb24gZW5jb2RlQnl0ZXMoYnVmLCB0b2tlbikge1xuICBjb25zdCBieXRlcyA9IHRva2VuQnl0ZXModG9rZW4pO1xuICBfMHVpbnQuZW5jb2RlVWludFZhbHVlKGJ1ZiwgdG9rZW4udHlwZS5tYWpvckVuY29kZWQsIGJ5dGVzLmxlbmd0aCk7XG4gIGJ1Zi5wdXNoKGJ5dGVzKTtcbn1cbmVuY29kZUJ5dGVzLmVuY29kZWRTaXplID0gZnVuY3Rpb24gZW5jb2RlZFNpemUodG9rZW4pIHtcbiAgY29uc3QgYnl0ZXMgPSB0b2tlbkJ5dGVzKHRva2VuKTtcbiAgcmV0dXJuIF8wdWludC5lbmNvZGVVaW50VmFsdWUuZW5jb2RlZFNpemUoYnl0ZXMubGVuZ3RoKSArIGJ5dGVzLmxlbmd0aDtcbn07XG5lbmNvZGVCeXRlcy5jb21wYXJlVG9rZW5zID0gZnVuY3Rpb24gY29tcGFyZVRva2Vucyh0b2sxLCB0b2syKSB7XG4gIHJldHVybiBjb21wYXJlQnl0ZXModG9rZW5CeXRlcyh0b2sxKSwgdG9rZW5CeXRlcyh0b2syKSk7XG59O1xuZnVuY3Rpb24gY29tcGFyZUJ5dGVzKGIxLCBiMikge1xuICByZXR1cm4gYjEubGVuZ3RoIDwgYjIubGVuZ3RoID8gLTEgOiBiMS5sZW5ndGggPiBiMi5sZW5ndGggPyAxIDogYnl0ZVV0aWxzLmNvbXBhcmUoYjEsIGIyKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlQnl0ZXMgPSBjb21wYXJlQnl0ZXM7XG5leHBvcnRzLmRlY29kZUJ5dGVzMTYgPSBkZWNvZGVCeXRlczE2O1xuZXhwb3J0cy5kZWNvZGVCeXRlczMyID0gZGVjb2RlQnl0ZXMzMjtcbmV4cG9ydHMuZGVjb2RlQnl0ZXM2NCA9IGRlY29kZUJ5dGVzNjQ7XG5leHBvcnRzLmRlY29kZUJ5dGVzOCA9IGRlY29kZUJ5dGVzODtcbmV4cG9ydHMuZGVjb2RlQnl0ZXNDb21wYWN0ID0gZGVjb2RlQnl0ZXNDb21wYWN0O1xuZXhwb3J0cy5lbmNvZGVCeXRlcyA9IGVuY29kZUJ5dGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuLmpzJyk7XG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9jb21tb24uanMnKTtcbnZhciBfMHVpbnQgPSByZXF1aXJlKCcuLzB1aW50LmpzJyk7XG52YXIgXzJieXRlcyA9IHJlcXVpcmUoJy4vMmJ5dGVzLmpzJyk7XG52YXIgYnl0ZVV0aWxzID0gcmVxdWlyZSgnLi9ieXRlLXV0aWxzLmpzJyk7XG5cbmZ1bmN0aW9uIHRvVG9rZW4oZGF0YSwgcG9zLCBwcmVmaXgsIGxlbmd0aCkge1xuICBjb25zdCB0b3RMZW5ndGggPSBwcmVmaXggKyBsZW5ndGg7XG4gIGNvbW1vbi5hc3NlcnRFbm91Z2hEYXRhKGRhdGEsIHBvcywgdG90TGVuZ3RoKTtcbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnN0cmluZywgYnl0ZVV0aWxzLnRvU3RyaW5nKGRhdGEsIHBvcyArIHByZWZpeCwgcG9zICsgdG90TGVuZ3RoKSwgdG90TGVuZ3RoKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVN0cmluZ0NvbXBhY3QoZGF0YSwgcG9zLCBtaW5vciwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCAxLCBtaW5vcik7XG59XG5mdW5jdGlvbiBkZWNvZGVTdHJpbmc4KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgMiwgXzB1aW50LnJlYWRVaW50OChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSk7XG59XG5mdW5jdGlvbiBkZWNvZGVTdHJpbmcxNihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDMsIF8wdWludC5yZWFkVWludDE2KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVN0cmluZzMyKGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgNSwgXzB1aW50LnJlYWRVaW50MzIoZGF0YSwgcG9zICsgMSwgb3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZGVjb2RlU3RyaW5nNjQoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgY29uc3QgbCA9IF8wdWludC5yZWFkVWludDY0KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpO1xuICBpZiAodHlwZW9mIGwgPT09ICdiaWdpbnQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gNjQtYml0IGludGVnZXIgc3RyaW5nIGxlbmd0aHMgbm90IHN1cHBvcnRlZGApO1xuICB9XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgOSwgbCk7XG59XG5jb25zdCBlbmNvZGVTdHJpbmcgPSBfMmJ5dGVzLmVuY29kZUJ5dGVzO1xuXG5leHBvcnRzLmRlY29kZVN0cmluZzE2ID0gZGVjb2RlU3RyaW5nMTY7XG5leHBvcnRzLmRlY29kZVN0cmluZzMyID0gZGVjb2RlU3RyaW5nMzI7XG5leHBvcnRzLmRlY29kZVN0cmluZzY0ID0gZGVjb2RlU3RyaW5nNjQ7XG5leHBvcnRzLmRlY29kZVN0cmluZzggPSBkZWNvZGVTdHJpbmc4O1xuZXhwb3J0cy5kZWNvZGVTdHJpbmdDb21wYWN0ID0gZGVjb2RlU3RyaW5nQ29tcGFjdDtcbmV4cG9ydHMuZW5jb2RlU3RyaW5nID0gZW5jb2RlU3RyaW5nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuLmpzJyk7XG52YXIgXzB1aW50ID0gcmVxdWlyZSgnLi8wdWludC5qcycpO1xudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4vY29tbW9uLmpzJyk7XG5cbmZ1bmN0aW9uIHRvVG9rZW4oX2RhdGEsIF9wb3MsIHByZWZpeCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5hcnJheSwgbGVuZ3RoLCBwcmVmaXgpO1xufVxuZnVuY3Rpb24gZGVjb2RlQXJyYXlDb21wYWN0KGRhdGEsIHBvcywgbWlub3IsIF9vcHRpb25zKSB7XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgMSwgbWlub3IpO1xufVxuZnVuY3Rpb24gZGVjb2RlQXJyYXk4KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgMiwgXzB1aW50LnJlYWRVaW50OChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSk7XG59XG5mdW5jdGlvbiBkZWNvZGVBcnJheTE2KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgMywgXzB1aW50LnJlYWRVaW50MTYoZGF0YSwgcG9zICsgMSwgb3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZGVjb2RlQXJyYXkzMihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDUsIF8wdWludC5yZWFkVWludDMyKGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGRlY29kZUFycmF5NjQoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgY29uc3QgbCA9IF8wdWludC5yZWFkVWludDY0KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpO1xuICBpZiAodHlwZW9mIGwgPT09ICdiaWdpbnQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gNjQtYml0IGludGVnZXIgYXJyYXkgbGVuZ3RocyBub3Qgc3VwcG9ydGVkYCk7XG4gIH1cbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCA5LCBsKTtcbn1cbmZ1bmN0aW9uIGRlY29kZUFycmF5SW5kZWZpbml0ZShkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5hbGxvd0luZGVmaW5pdGUgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gaW5kZWZpbml0ZSBsZW5ndGggaXRlbXMgbm90IGFsbG93ZWRgKTtcbiAgfVxuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDEsIEluZmluaXR5KTtcbn1cbmZ1bmN0aW9uIGVuY29kZUFycmF5KGJ1ZiwgdG9rZW4kMSkge1xuICBfMHVpbnQuZW5jb2RlVWludFZhbHVlKGJ1ZiwgdG9rZW4uVHlwZS5hcnJheS5tYWpvckVuY29kZWQsIHRva2VuJDEudmFsdWUpO1xufVxuZW5jb2RlQXJyYXkuY29tcGFyZVRva2VucyA9IF8wdWludC5lbmNvZGVVaW50LmNvbXBhcmVUb2tlbnM7XG5cbmV4cG9ydHMuZGVjb2RlQXJyYXkxNiA9IGRlY29kZUFycmF5MTY7XG5leHBvcnRzLmRlY29kZUFycmF5MzIgPSBkZWNvZGVBcnJheTMyO1xuZXhwb3J0cy5kZWNvZGVBcnJheTY0ID0gZGVjb2RlQXJyYXk2NDtcbmV4cG9ydHMuZGVjb2RlQXJyYXk4ID0gZGVjb2RlQXJyYXk4O1xuZXhwb3J0cy5kZWNvZGVBcnJheUNvbXBhY3QgPSBkZWNvZGVBcnJheUNvbXBhY3Q7XG5leHBvcnRzLmRlY29kZUFycmF5SW5kZWZpbml0ZSA9IGRlY29kZUFycmF5SW5kZWZpbml0ZTtcbmV4cG9ydHMuZW5jb2RlQXJyYXkgPSBlbmNvZGVBcnJheTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRva2VuID0gcmVxdWlyZSgnLi90b2tlbi5qcycpO1xudmFyIF8wdWludCA9IHJlcXVpcmUoJy4vMHVpbnQuanMnKTtcbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbi5qcycpO1xuXG5mdW5jdGlvbiB0b1Rva2VuKF9kYXRhLCBfcG9zLCBwcmVmaXgsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubWFwLCBsZW5ndGgsIHByZWZpeCk7XG59XG5mdW5jdGlvbiBkZWNvZGVNYXBDb21wYWN0KGRhdGEsIHBvcywgbWlub3IsIF9vcHRpb25zKSB7XG4gIHJldHVybiB0b1Rva2VuKGRhdGEsIHBvcywgMSwgbWlub3IpO1xufVxuZnVuY3Rpb24gZGVjb2RlTWFwOChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDIsIF8wdWludC5yZWFkVWludDgoZGF0YSwgcG9zICsgMSwgb3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZGVjb2RlTWFwMTYoZGF0YSwgcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvVG9rZW4oZGF0YSwgcG9zLCAzLCBfMHVpbnQucmVhZFVpbnQxNihkYXRhLCBwb3MgKyAxLCBvcHRpb25zKSk7XG59XG5mdW5jdGlvbiBkZWNvZGVNYXAzMihkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDUsIF8wdWludC5yZWFkVWludDMyKGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpKTtcbn1cbmZ1bmN0aW9uIGRlY29kZU1hcDY0KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIGNvbnN0IGwgPSBfMHVpbnQucmVhZFVpbnQ2NChkYXRhLCBwb3MgKyAxLCBvcHRpb25zKTtcbiAgaWYgKHR5cGVvZiBsID09PSAnYmlnaW50Jykge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IDY0LWJpdCBpbnRlZ2VyIG1hcCBsZW5ndGhzIG5vdCBzdXBwb3J0ZWRgKTtcbiAgfVxuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDksIGwpO1xufVxuZnVuY3Rpb24gZGVjb2RlTWFwSW5kZWZpbml0ZShkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5hbGxvd0luZGVmaW5pdGUgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gaW5kZWZpbml0ZSBsZW5ndGggaXRlbXMgbm90IGFsbG93ZWRgKTtcbiAgfVxuICByZXR1cm4gdG9Ub2tlbihkYXRhLCBwb3MsIDEsIEluZmluaXR5KTtcbn1cbmZ1bmN0aW9uIGVuY29kZU1hcChidWYsIHRva2VuJDEpIHtcbiAgXzB1aW50LmVuY29kZVVpbnRWYWx1ZShidWYsIHRva2VuLlR5cGUubWFwLm1ham9yRW5jb2RlZCwgdG9rZW4kMS52YWx1ZSk7XG59XG5lbmNvZGVNYXAuY29tcGFyZVRva2VucyA9IF8wdWludC5lbmNvZGVVaW50LmNvbXBhcmVUb2tlbnM7XG5cbmV4cG9ydHMuZGVjb2RlTWFwMTYgPSBkZWNvZGVNYXAxNjtcbmV4cG9ydHMuZGVjb2RlTWFwMzIgPSBkZWNvZGVNYXAzMjtcbmV4cG9ydHMuZGVjb2RlTWFwNjQgPSBkZWNvZGVNYXA2NDtcbmV4cG9ydHMuZGVjb2RlTWFwOCA9IGRlY29kZU1hcDg7XG5leHBvcnRzLmRlY29kZU1hcENvbXBhY3QgPSBkZWNvZGVNYXBDb21wYWN0O1xuZXhwb3J0cy5kZWNvZGVNYXBJbmRlZmluaXRlID0gZGVjb2RlTWFwSW5kZWZpbml0ZTtcbmV4cG9ydHMuZW5jb2RlTWFwID0gZW5jb2RlTWFwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuLmpzJyk7XG52YXIgXzB1aW50ID0gcmVxdWlyZSgnLi8wdWludC5qcycpO1xuXG5mdW5jdGlvbiBkZWNvZGVUYWdDb21wYWN0KF9kYXRhLCBfcG9zLCBtaW5vciwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnRhZywgbWlub3IsIDEpO1xufVxuZnVuY3Rpb24gZGVjb2RlVGFnOChkYXRhLCBwb3MsIF9taW5vciwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudGFnLCBfMHVpbnQucmVhZFVpbnQ4KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpLCAyKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVRhZzE2KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS50YWcsIF8wdWludC5yZWFkVWludDE2KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpLCAzKTtcbn1cbmZ1bmN0aW9uIGRlY29kZVRhZzMyKGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS50YWcsIF8wdWludC5yZWFkVWludDMyKGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpLCA1KTtcbn1cbmZ1bmN0aW9uIGRlY29kZVRhZzY0KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS50YWcsIF8wdWludC5yZWFkVWludDY0KGRhdGEsIHBvcyArIDEsIG9wdGlvbnMpLCA5KTtcbn1cbmZ1bmN0aW9uIGVuY29kZVRhZyhidWYsIHRva2VuJDEpIHtcbiAgXzB1aW50LmVuY29kZVVpbnRWYWx1ZShidWYsIHRva2VuLlR5cGUudGFnLm1ham9yRW5jb2RlZCwgdG9rZW4kMS52YWx1ZSk7XG59XG5lbmNvZGVUYWcuY29tcGFyZVRva2VucyA9IF8wdWludC5lbmNvZGVVaW50LmNvbXBhcmVUb2tlbnM7XG5cbmV4cG9ydHMuZGVjb2RlVGFnMTYgPSBkZWNvZGVUYWcxNjtcbmV4cG9ydHMuZGVjb2RlVGFnMzIgPSBkZWNvZGVUYWczMjtcbmV4cG9ydHMuZGVjb2RlVGFnNjQgPSBkZWNvZGVUYWc2NDtcbmV4cG9ydHMuZGVjb2RlVGFnOCA9IGRlY29kZVRhZzg7XG5leHBvcnRzLmRlY29kZVRhZ0NvbXBhY3QgPSBkZWNvZGVUYWdDb21wYWN0O1xuZXhwb3J0cy5lbmNvZGVUYWcgPSBlbmNvZGVUYWc7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0b2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4uanMnKTtcbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbi5qcycpO1xudmFyIF8wdWludCA9IHJlcXVpcmUoJy4vMHVpbnQuanMnKTtcblxuY29uc3QgTUlOT1JfRkFMU0UgPSAyMDtcbmNvbnN0IE1JTk9SX1RSVUUgPSAyMTtcbmNvbnN0IE1JTk9SX05VTEwgPSAyMjtcbmNvbnN0IE1JTk9SX1VOREVGSU5FRCA9IDIzO1xuZnVuY3Rpb24gZGVjb2RlVW5kZWZpbmVkKF9kYXRhLCBfcG9zLCBfbWlub3IsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuYWxsb3dVbmRlZmluZWQgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gdW5kZWZpbmVkIHZhbHVlcyBhcmUgbm90IHN1cHBvcnRlZGApO1xuICB9XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS51bmRlZmluZWQsIHVuZGVmaW5lZCwgMSk7XG59XG5mdW5jdGlvbiBkZWNvZGVCcmVhayhfZGF0YSwgX3BvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmFsbG93SW5kZWZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBpbmRlZmluaXRlIGxlbmd0aCBpdGVtcyBub3QgYWxsb3dlZGApO1xuICB9XG4gIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5icmVhaywgdW5kZWZpbmVkLCAxKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRva2VuKHZhbHVlLCBieXRlcywgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmFsbG93TmFOID09PSBmYWxzZSAmJiBOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBOYU4gdmFsdWVzIGFyZSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmFsbG93SW5maW5pdHkgPT09IGZhbHNlICYmICh2YWx1ZSA9PT0gSW5maW5pdHkgfHwgdmFsdWUgPT09IC1JbmZpbml0eSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IEluZmluaXR5IHZhbHVlcyBhcmUgbm90IHN1cHBvcnRlZGApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuZmxvYXQsIHZhbHVlLCBieXRlcyk7XG59XG5mdW5jdGlvbiBkZWNvZGVGbG9hdDE2KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBjcmVhdGVUb2tlbihyZWFkRmxvYXQxNihkYXRhLCBwb3MgKyAxKSwgMywgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBkZWNvZGVGbG9hdDMyKGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBjcmVhdGVUb2tlbihyZWFkRmxvYXQzMihkYXRhLCBwb3MgKyAxKSwgNSwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBkZWNvZGVGbG9hdDY0KGRhdGEsIHBvcywgX21pbm9yLCBvcHRpb25zKSB7XG4gIHJldHVybiBjcmVhdGVUb2tlbihyZWFkRmxvYXQ2NChkYXRhLCBwb3MgKyAxKSwgOSwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBlbmNvZGVGbG9hdChidWYsIHRva2VuJDEsIG9wdGlvbnMpIHtcbiAgY29uc3QgZmxvYXQgPSB0b2tlbiQxLnZhbHVlO1xuICBpZiAoZmxvYXQgPT09IGZhbHNlKSB7XG4gICAgYnVmLnB1c2goW3Rva2VuLlR5cGUuZmxvYXQubWFqb3JFbmNvZGVkIHwgTUlOT1JfRkFMU0VdKTtcbiAgfSBlbHNlIGlmIChmbG9hdCA9PT0gdHJ1ZSkge1xuICAgIGJ1Zi5wdXNoKFt0b2tlbi5UeXBlLmZsb2F0Lm1ham9yRW5jb2RlZCB8IE1JTk9SX1RSVUVdKTtcbiAgfSBlbHNlIGlmIChmbG9hdCA9PT0gbnVsbCkge1xuICAgIGJ1Zi5wdXNoKFt0b2tlbi5UeXBlLmZsb2F0Lm1ham9yRW5jb2RlZCB8IE1JTk9SX05VTExdKTtcbiAgfSBlbHNlIGlmIChmbG9hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmLnB1c2goW3Rva2VuLlR5cGUuZmxvYXQubWFqb3JFbmNvZGVkIHwgTUlOT1JfVU5ERUZJTkVEXSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGRlY29kZWQ7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucy5mbG9hdDY0ICE9PSB0cnVlKSB7XG4gICAgICBlbmNvZGVGbG9hdDE2KGZsb2F0KTtcbiAgICAgIGRlY29kZWQgPSByZWFkRmxvYXQxNih1aThhLCAxKTtcbiAgICAgIGlmIChmbG9hdCA9PT0gZGVjb2RlZCB8fCBOdW1iZXIuaXNOYU4oZmxvYXQpKSB7XG4gICAgICAgIHVpOGFbMF0gPSAyNDk7XG4gICAgICAgIGJ1Zi5wdXNoKHVpOGEuc2xpY2UoMCwgMykpO1xuICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuY29kZUZsb2F0MzIoZmxvYXQpO1xuICAgICAgICBkZWNvZGVkID0gcmVhZEZsb2F0MzIodWk4YSwgMSk7XG4gICAgICAgIGlmIChmbG9hdCA9PT0gZGVjb2RlZCkge1xuICAgICAgICAgIHVpOGFbMF0gPSAyNTA7XG4gICAgICAgICAgYnVmLnB1c2godWk4YS5zbGljZSgwLCA1KSk7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBlbmNvZGVGbG9hdDY0KGZsb2F0KTtcbiAgICAgIGRlY29kZWQgPSByZWFkRmxvYXQ2NCh1aThhLCAxKTtcbiAgICAgIHVpOGFbMF0gPSAyNTE7XG4gICAgICBidWYucHVzaCh1aThhLnNsaWNlKDAsIDkpKTtcbiAgICB9XG4gIH1cbn1cbmVuY29kZUZsb2F0LmVuY29kZWRTaXplID0gZnVuY3Rpb24gZW5jb2RlZFNpemUodG9rZW4sIG9wdGlvbnMpIHtcbiAgY29uc3QgZmxvYXQgPSB0b2tlbi52YWx1ZTtcbiAgaWYgKGZsb2F0ID09PSBmYWxzZSB8fCBmbG9hdCA9PT0gdHJ1ZSB8fCBmbG9hdCA9PT0gbnVsbCB8fCBmbG9hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgbGV0IGRlY29kZWQ7XG4gIGlmICghb3B0aW9ucyB8fCBvcHRpb25zLmZsb2F0NjQgIT09IHRydWUpIHtcbiAgICBlbmNvZGVGbG9hdDE2KGZsb2F0KTtcbiAgICBkZWNvZGVkID0gcmVhZEZsb2F0MTYodWk4YSwgMSk7XG4gICAgaWYgKGZsb2F0ID09PSBkZWNvZGVkIHx8IE51bWJlci5pc05hTihmbG9hdCkpIHtcbiAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBlbmNvZGVGbG9hdDMyKGZsb2F0KTtcbiAgICBkZWNvZGVkID0gcmVhZEZsb2F0MzIodWk4YSwgMSk7XG4gICAgaWYgKGZsb2F0ID09PSBkZWNvZGVkKSB7XG4gICAgICByZXR1cm4gNTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDk7XG59O1xuY29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDkpO1xuY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCAxKTtcbmNvbnN0IHVpOGEgPSBuZXcgVWludDhBcnJheShidWZmZXIsIDApO1xuZnVuY3Rpb24gZW5jb2RlRmxvYXQxNihpbnApIHtcbiAgaWYgKGlucCA9PT0gSW5maW5pdHkpIHtcbiAgICBkYXRhVmlldy5zZXRVaW50MTYoMCwgMzE3NDQsIGZhbHNlKTtcbiAgfSBlbHNlIGlmIChpbnAgPT09IC1JbmZpbml0eSkge1xuICAgIGRhdGFWaWV3LnNldFVpbnQxNigwLCA2NDUxMiwgZmFsc2UpO1xuICB9IGVsc2UgaWYgKE51bWJlci5pc05hTihpbnApKSB7XG4gICAgZGF0YVZpZXcuc2V0VWludDE2KDAsIDMyMjU2LCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVZpZXcuc2V0RmxvYXQzMigwLCBpbnApO1xuICAgIGNvbnN0IHZhbHUzMiA9IGRhdGFWaWV3LmdldFVpbnQzMigwKTtcbiAgICBjb25zdCBleHBvbmVudCA9ICh2YWx1MzIgJiAyMTM5MDk1MDQwKSA+PiAyMztcbiAgICBjb25zdCBtYW50aXNzYSA9IHZhbHUzMiAmIDgzODg2MDc7XG4gICAgaWYgKGV4cG9uZW50ID09PSAyNTUpIHtcbiAgICAgIGRhdGFWaWV3LnNldFVpbnQxNigwLCAzMTc0NCwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoZXhwb25lbnQgPT09IDApIHtcbiAgICAgIGRhdGFWaWV3LnNldFVpbnQxNigwLCAoaW5wICYgMjE0NzQ4MzY0OCkgPj4gMTYgfCBtYW50aXNzYSA+PiAxMywgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb2dpY2FsRXhwb25lbnQgPSBleHBvbmVudCAtIDEyNztcbiAgICAgIGlmIChsb2dpY2FsRXhwb25lbnQgPCAtMjQpIHtcbiAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KDAsIDApO1xuICAgICAgfSBlbHNlIGlmIChsb2dpY2FsRXhwb25lbnQgPCAtMTQpIHtcbiAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KDAsICh2YWx1MzIgJiAyMTQ3NDgzNjQ4KSA+PiAxNiB8IDEgPDwgMjQgKyBsb2dpY2FsRXhwb25lbnQsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNigwLCAodmFsdTMyICYgMjE0NzQ4MzY0OCkgPj4gMTYgfCBsb2dpY2FsRXhwb25lbnQgKyAxNSA8PCAxMCB8IG1hbnRpc3NhID4+IDEzLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiByZWFkRmxvYXQxNih1aThhLCBwb3MpIHtcbiAgaWYgKHVpOGEubGVuZ3RoIC0gcG9zIDwgMikge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IG5vdCBlbm91Z2ggZGF0YSBmb3IgZmxvYXQxNmApO1xuICB9XG4gIGNvbnN0IGhhbGYgPSAodWk4YVtwb3NdIDw8IDgpICsgdWk4YVtwb3MgKyAxXTtcbiAgaWYgKGhhbGYgPT09IDMxNzQ0KSB7XG4gICAgcmV0dXJuIEluZmluaXR5O1xuICB9XG4gIGlmIChoYWxmID09PSA2NDUxMikge1xuICAgIHJldHVybiAtSW5maW5pdHk7XG4gIH1cbiAgaWYgKGhhbGYgPT09IDMyMjU2KSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICBjb25zdCBleHAgPSBoYWxmID4+IDEwICYgMzE7XG4gIGNvbnN0IG1hbnQgPSBoYWxmICYgMTAyMztcbiAgbGV0IHZhbDtcbiAgaWYgKGV4cCA9PT0gMCkge1xuICAgIHZhbCA9IG1hbnQgKiAyICoqIC0yNDtcbiAgfSBlbHNlIGlmIChleHAgIT09IDMxKSB7XG4gICAgdmFsID0gKG1hbnQgKyAxMDI0KSAqIDIgKiogKGV4cCAtIDI1KTtcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBtYW50ID09PSAwID8gSW5maW5pdHkgOiBOYU47XG4gIH1cbiAgcmV0dXJuIGhhbGYgJiAzMjc2OCA/IC12YWwgOiB2YWw7XG59XG5mdW5jdGlvbiBlbmNvZGVGbG9hdDMyKGlucCkge1xuICBkYXRhVmlldy5zZXRGbG9hdDMyKDAsIGlucCwgZmFsc2UpO1xufVxuZnVuY3Rpb24gcmVhZEZsb2F0MzIodWk4YSwgcG9zKSB7XG4gIGlmICh1aThhLmxlbmd0aCAtIHBvcyA8IDQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBub3QgZW5vdWdoIGRhdGEgZm9yIGZsb2F0MzJgKTtcbiAgfVxuICBjb25zdCBvZmZzZXQgPSAodWk4YS5ieXRlT2Zmc2V0IHx8IDApICsgcG9zO1xuICByZXR1cm4gbmV3IERhdGFWaWV3KHVpOGEuYnVmZmVyLCBvZmZzZXQsIDQpLmdldEZsb2F0MzIoMCwgZmFsc2UpO1xufVxuZnVuY3Rpb24gZW5jb2RlRmxvYXQ2NChpbnApIHtcbiAgZGF0YVZpZXcuc2V0RmxvYXQ2NCgwLCBpbnAsIGZhbHNlKTtcbn1cbmZ1bmN0aW9uIHJlYWRGbG9hdDY0KHVpOGEsIHBvcykge1xuICBpZiAodWk4YS5sZW5ndGggLSBwb3MgPCA4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gbm90IGVub3VnaCBkYXRhIGZvciBmbG9hdDY0YCk7XG4gIH1cbiAgY29uc3Qgb2Zmc2V0ID0gKHVpOGEuYnl0ZU9mZnNldCB8fCAwKSArIHBvcztcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyh1aThhLmJ1ZmZlciwgb2Zmc2V0LCA4KS5nZXRGbG9hdDY0KDAsIGZhbHNlKTtcbn1cbmVuY29kZUZsb2F0LmNvbXBhcmVUb2tlbnMgPSBfMHVpbnQuZW5jb2RlVWludC5jb21wYXJlVG9rZW5zO1xuXG5leHBvcnRzLmRlY29kZUJyZWFrID0gZGVjb2RlQnJlYWs7XG5leHBvcnRzLmRlY29kZUZsb2F0MTYgPSBkZWNvZGVGbG9hdDE2O1xuZXhwb3J0cy5kZWNvZGVGbG9hdDMyID0gZGVjb2RlRmxvYXQzMjtcbmV4cG9ydHMuZGVjb2RlRmxvYXQ2NCA9IGRlY29kZUZsb2F0NjQ7XG5leHBvcnRzLmRlY29kZVVuZGVmaW5lZCA9IGRlY29kZVVuZGVmaW5lZDtcbmV4cG9ydHMuZW5jb2RlRmxvYXQgPSBlbmNvZGVGbG9hdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGJ5dGVVdGlscyA9IHJlcXVpcmUoJy4vYnl0ZS11dGlscy5qcycpO1xuXG5jb25zdCBkZWZhdWx0Q2h1bmtTaXplID0gMjU2O1xuY2xhc3MgQmwge1xuICBjb25zdHJ1Y3RvcihjaHVua1NpemUgPSBkZWZhdWx0Q2h1bmtTaXplKSB7XG4gICAgdGhpcy5jaHVua1NpemUgPSBjaHVua1NpemU7XG4gICAgdGhpcy5jdXJzb3IgPSAwO1xuICAgIHRoaXMubWF4Q3Vyc29yID0gLTE7XG4gICAgdGhpcy5jaHVua3MgPSBbXTtcbiAgICB0aGlzLl9pbml0UmV1c2VDaHVuayA9IG51bGw7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5jaHVua3MgPSBbXTtcbiAgICB0aGlzLmN1cnNvciA9IDA7XG4gICAgdGhpcy5tYXhDdXJzb3IgPSAtMTtcbiAgICBpZiAodGhpcy5faW5pdFJldXNlQ2h1bmsgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2h1bmtzLnB1c2godGhpcy5faW5pdFJldXNlQ2h1bmspO1xuICAgICAgdGhpcy5tYXhDdXJzb3IgPSB0aGlzLl9pbml0UmV1c2VDaHVuay5sZW5ndGggLSAxO1xuICAgIH1cbiAgfVxuICBwdXNoKGJ5dGVzKSB7XG4gICAgbGV0IHRvcENodW5rID0gdGhpcy5jaHVua3NbdGhpcy5jaHVua3MubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV3TWF4ID0gdGhpcy5jdXJzb3IgKyBieXRlcy5sZW5ndGg7XG4gICAgaWYgKG5ld01heCA8PSB0aGlzLm1heEN1cnNvciArIDEpIHtcbiAgICAgIGNvbnN0IGNodW5rUG9zID0gdG9wQ2h1bmsubGVuZ3RoIC0gKHRoaXMubWF4Q3Vyc29yIC0gdGhpcy5jdXJzb3IpIC0gMTtcbiAgICAgIHRvcENodW5rLnNldChieXRlcywgY2h1bmtQb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodG9wQ2h1bmspIHtcbiAgICAgICAgY29uc3QgY2h1bmtQb3MgPSB0b3BDaHVuay5sZW5ndGggLSAodGhpcy5tYXhDdXJzb3IgLSB0aGlzLmN1cnNvcikgLSAxO1xuICAgICAgICBpZiAoY2h1bmtQb3MgPCB0b3BDaHVuay5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGggLSAxXSA9IHRvcENodW5rLnN1YmFycmF5KDAsIGNodW5rUG9zKTtcbiAgICAgICAgICB0aGlzLm1heEN1cnNvciA9IHRoaXMuY3Vyc29yIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJ5dGVzLmxlbmd0aCA8IDY0ICYmIGJ5dGVzLmxlbmd0aCA8IHRoaXMuY2h1bmtTaXplKSB7XG4gICAgICAgIHRvcENodW5rID0gYnl0ZVV0aWxzLmFsbG9jKHRoaXMuY2h1bmtTaXplKTtcbiAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0b3BDaHVuayk7XG4gICAgICAgIHRoaXMubWF4Q3Vyc29yICs9IHRvcENodW5rLmxlbmd0aDtcbiAgICAgICAgaWYgKHRoaXMuX2luaXRSZXVzZUNodW5rID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5faW5pdFJldXNlQ2h1bmsgPSB0b3BDaHVuaztcbiAgICAgICAgfVxuICAgICAgICB0b3BDaHVuay5zZXQoYnl0ZXMsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaHVua3MucHVzaChieXRlcyk7XG4gICAgICAgIHRoaXMubWF4Q3Vyc29yICs9IGJ5dGVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jdXJzb3IgKz0gYnl0ZXMubGVuZ3RoO1xuICB9XG4gIHRvQnl0ZXMocmVzZXQgPSBmYWxzZSkge1xuICAgIGxldCBieXRzO1xuICAgIGlmICh0aGlzLmNodW5rcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5jaHVua3NbMF07XG4gICAgICBpZiAocmVzZXQgJiYgdGhpcy5jdXJzb3IgPiBjaHVuay5sZW5ndGggLyAyKSB7XG4gICAgICAgIGJ5dHMgPSB0aGlzLmN1cnNvciA9PT0gY2h1bmsubGVuZ3RoID8gY2h1bmsgOiBjaHVuay5zdWJhcnJheSgwLCB0aGlzLmN1cnNvcik7XG4gICAgICAgIHRoaXMuX2luaXRSZXVzZUNodW5rID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaHVua3MgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ5dHMgPSBieXRlVXRpbHMuc2xpY2UoY2h1bmssIDAsIHRoaXMuY3Vyc29yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYnl0cyA9IGJ5dGVVdGlscy5jb25jYXQodGhpcy5jaHVua3MsIHRoaXMuY3Vyc29yKTtcbiAgICB9XG4gICAgaWYgKHJlc2V0KSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIHJldHVybiBieXRzO1xuICB9XG59XG5cbmV4cG9ydHMuQmwgPSBCbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgdXNlQnVmZmVyID0gZ2xvYmFsVGhpcy5wcm9jZXNzICYmICFnbG9iYWxUaGlzLnByb2Nlc3MuYnJvd3NlciAmJiBnbG9iYWxUaGlzLkJ1ZmZlciAmJiB0eXBlb2YgZ2xvYmFsVGhpcy5CdWZmZXIuaXNCdWZmZXIgPT09ICdmdW5jdGlvbic7XG5jb25zdCB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuY29uc3QgdGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbmZ1bmN0aW9uIGlzQnVmZmVyKGJ1Zikge1xuICByZXR1cm4gdXNlQnVmZmVyICYmIGdsb2JhbFRoaXMuQnVmZmVyLmlzQnVmZmVyKGJ1Zik7XG59XG5mdW5jdGlvbiBhc1U4QShidWYpIHtcbiAgaWYgKCEoYnVmIGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcbiAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKGJ1Zik7XG4gIH1cbiAgcmV0dXJuIGlzQnVmZmVyKGJ1ZikgPyBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGgpIDogYnVmO1xufVxuY29uc3QgdG9TdHJpbmcgPSB1c2VCdWZmZXIgPyAoYnl0ZXMsIHN0YXJ0LCBlbmQpID0+IHtcbiAgcmV0dXJuIGVuZCAtIHN0YXJ0ID4gNjQgPyBnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tKGJ5dGVzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKS50b1N0cmluZygndXRmOCcpIDogdXRmOFNsaWNlKGJ5dGVzLCBzdGFydCwgZW5kKTtcbn0gOiAoYnl0ZXMsIHN0YXJ0LCBlbmQpID0+IHtcbiAgcmV0dXJuIGVuZCAtIHN0YXJ0ID4gNjQgPyB0ZXh0RGVjb2Rlci5kZWNvZGUoYnl0ZXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpIDogdXRmOFNsaWNlKGJ5dGVzLCBzdGFydCwgZW5kKTtcbn07XG5jb25zdCBmcm9tU3RyaW5nID0gdXNlQnVmZmVyID8gc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0cmluZy5sZW5ndGggPiA2NCA/IGdsb2JhbFRoaXMuQnVmZmVyLmZyb20oc3RyaW5nKSA6IHV0ZjhUb0J5dGVzKHN0cmluZyk7XG59IDogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0cmluZy5sZW5ndGggPiA2NCA/IHRleHRFbmNvZGVyLmVuY29kZShzdHJpbmcpIDogdXRmOFRvQnl0ZXMoc3RyaW5nKTtcbn07XG5jb25zdCBmcm9tQXJyYXkgPSBhcnIgPT4ge1xuICByZXR1cm4gVWludDhBcnJheS5mcm9tKGFycik7XG59O1xuY29uc3Qgc2xpY2UgPSB1c2VCdWZmZXIgPyAoYnl0ZXMsIHN0YXJ0LCBlbmQpID0+IHtcbiAgaWYgKGlzQnVmZmVyKGJ5dGVzKSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlcy5zdWJhcnJheShzdGFydCwgZW5kKSk7XG4gIH1cbiAgcmV0dXJuIGJ5dGVzLnNsaWNlKHN0YXJ0LCBlbmQpO1xufSA6IChieXRlcywgc3RhcnQsIGVuZCkgPT4ge1xuICByZXR1cm4gYnl0ZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG59O1xuY29uc3QgY29uY2F0ID0gdXNlQnVmZmVyID8gKGNodW5rcywgbGVuZ3RoKSA9PiB7XG4gIGNodW5rcyA9IGNodW5rcy5tYXAoYyA9PiBjIGluc3RhbmNlb2YgVWludDhBcnJheSA/IGMgOiBnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tKGMpKTtcbiAgcmV0dXJuIGFzVThBKGdsb2JhbFRoaXMuQnVmZmVyLmNvbmNhdChjaHVua3MsIGxlbmd0aCkpO1xufSA6IChjaHVua3MsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICBsZXQgb2ZmID0gMDtcbiAgZm9yIChsZXQgYiBvZiBjaHVua3MpIHtcbiAgICBpZiAob2ZmICsgYi5sZW5ndGggPiBvdXQubGVuZ3RoKSB7XG4gICAgICBiID0gYi5zdWJhcnJheSgwLCBvdXQubGVuZ3RoIC0gb2ZmKTtcbiAgICB9XG4gICAgb3V0LnNldChiLCBvZmYpO1xuICAgIG9mZiArPSBiLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gb3V0O1xufTtcbmNvbnN0IGFsbG9jID0gdXNlQnVmZmVyID8gc2l6ZSA9PiB7XG4gIHJldHVybiBnbG9iYWxUaGlzLkJ1ZmZlci5hbGxvY1Vuc2FmZShzaXplKTtcbn0gOiBzaXplID0+IHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNpemUpO1xufTtcbmNvbnN0IHRvSGV4ID0gdXNlQnVmZmVyID8gZCA9PiB7XG4gIGlmICh0eXBlb2YgZCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZDtcbiAgfVxuICByZXR1cm4gZ2xvYmFsVGhpcy5CdWZmZXIuZnJvbSh0b0J5dGVzKGQpKS50b1N0cmluZygnaGV4Jyk7XG59IDogZCA9PiB7XG4gIGlmICh0eXBlb2YgZCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZDtcbiAgfVxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKHRvQnl0ZXMoZCksIChwLCBjKSA9PiBgJHsgcCB9JHsgYy50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSB9YCwgJycpO1xufTtcbmNvbnN0IGZyb21IZXggPSB1c2VCdWZmZXIgPyBoZXggPT4ge1xuICBpZiAoaGV4IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgIHJldHVybiBoZXg7XG4gIH1cbiAgcmV0dXJuIGdsb2JhbFRoaXMuQnVmZmVyLmZyb20oaGV4LCAnaGV4Jyk7XG59IDogaGV4ID0+IHtcbiAgaWYgKGhleCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gaGV4O1xuICB9XG4gIGlmICghaGV4Lmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcbiAgfVxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoaGV4LnNwbGl0KCcnKS5tYXAoKGMsIGksIGQpID0+IGkgJSAyID09PSAwID8gYDB4JHsgYyB9JHsgZFtpICsgMV0gfWAgOiAnJykuZmlsdGVyKEJvb2xlYW4pLm1hcChlID0+IHBhcnNlSW50KGUsIDE2KSkpO1xufTtcbmZ1bmN0aW9uIHRvQnl0ZXMob2JqKSB7XG4gIGlmIChvYmogaW5zdGFuY2VvZiBVaW50OEFycmF5ICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSAnVWludDhBcnJheScpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShvYmopO1xuICB9XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShvYmouYnVmZmVyLCBvYmouYnl0ZU9mZnNldCwgb2JqLmJ5dGVMZW5ndGgpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignVW5rbm93biB0eXBlLCBtdXN0IGJlIGJpbmFyeSB0eXBlJyk7XG59XG5mdW5jdGlvbiBjb21wYXJlKGIxLCBiMikge1xuICBpZiAoaXNCdWZmZXIoYjEpICYmIGlzQnVmZmVyKGIyKSkge1xuICAgIHJldHVybiBiMS5jb21wYXJlKGIyKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGIxLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGIxW2ldID09PSBiMltpXSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldHVybiBiMVtpXSA8IGIyW2ldID8gLTEgOiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMoc3RyaW5nLCB1bml0cyA9IEluZmluaXR5KSB7XG4gIGxldCBjb2RlUG9pbnQ7XG4gIGNvbnN0IGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gIGxldCBsZWFkU3Vycm9nYXRlID0gbnVsbDtcbiAgY29uc3QgYnl0ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlUG9pbnQgPiA1NTI5NSAmJiBjb2RlUG9pbnQgPCA1NzM0NCkge1xuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiA1NjMxOSkge1xuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSlcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMjM5LCAxOTEsIDE4OSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSlcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMjM5LCAxOTEsIDE4OSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY29kZVBvaW50IDwgNTYzMjApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKVxuICAgICAgICAgIGJ5dGVzLnB1c2goMjM5LCAxOTEsIDE4OSk7XG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnQ7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSA1NTI5NiA8PCAxMCB8IGNvZGVQb2ludCAtIDU2MzIwKSArIDY1NTM2O1xuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKVxuICAgICAgICBieXRlcy5wdXNoKDIzOSwgMTkxLCAxODkpO1xuICAgIH1cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbDtcbiAgICBpZiAoY29kZVBvaW50IDwgMTI4KSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMClcbiAgICAgICAgYnJlYWs7XG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludCk7XG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAyMDQ4KSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMClcbiAgICAgICAgYnJlYWs7XG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludCA+PiA2IHwgMTkyLCBjb2RlUG9pbnQgJiA2MyB8IDEyOCk7XG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCA2NTUzNikge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApXG4gICAgICAgIGJyZWFrO1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQgPj4gMTIgfCAyMjQsIGNvZGVQb2ludCA+PiA2ICYgNjMgfCAxMjgsIGNvZGVQb2ludCAmIDYzIHwgMTI4KTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDExMTQxMTIpIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKVxuICAgICAgICBicmVhaztcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50ID4+IDE4IHwgMjQwLCBjb2RlUG9pbnQgPj4gMTIgJiA2MyB8IDEyOCwgY29kZVBvaW50ID4+IDYgJiA2MyB8IDEyOCwgY29kZVBvaW50ICYgNjMgfCAxMjgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZXM7XG59XG5mdW5jdGlvbiB1dGY4U2xpY2UoYnVmLCBvZmZzZXQsIGVuZCkge1xuICBjb25zdCByZXMgPSBbXTtcbiAgd2hpbGUgKG9mZnNldCA8IGVuZCkge1xuICAgIGNvbnN0IGZpcnN0Qnl0ZSA9IGJ1ZltvZmZzZXRdO1xuICAgIGxldCBjb2RlUG9pbnQgPSBudWxsO1xuICAgIGxldCBieXRlc1BlclNlcXVlbmNlID0gZmlyc3RCeXRlID4gMjM5ID8gNCA6IGZpcnN0Qnl0ZSA+IDIyMyA/IDMgOiBmaXJzdEJ5dGUgPiAxOTEgPyAyIDogMTtcbiAgICBpZiAob2Zmc2V0ICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIGxldCBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnQ7XG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDEyOCkge1xuICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltvZmZzZXQgKyAxXTtcbiAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMTkyKSA9PT0gMTI4KSB7XG4gICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAzMSkgPDwgNiB8IHNlY29uZEJ5dGUgJiA2MztcbiAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDEyNykge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHNlY29uZEJ5dGUgPSBidWZbb2Zmc2V0ICsgMV07XG4gICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltvZmZzZXQgKyAyXTtcbiAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMTkyKSA9PT0gMTI4ICYmICh0aGlyZEJ5dGUgJiAxOTIpID09PSAxMjgpIHtcbiAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDE1KSA8PCAxMiB8IChzZWNvbmRCeXRlICYgNjMpIDw8IDYgfCB0aGlyZEJ5dGUgJiA2MztcbiAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDIwNDcgJiYgKHRlbXBDb2RlUG9pbnQgPCA1NTI5NiB8fCB0ZW1wQ29kZVBvaW50ID4gNTczNDMpKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltvZmZzZXQgKyAxXTtcbiAgICAgICAgdGhpcmRCeXRlID0gYnVmW29mZnNldCArIDJdO1xuICAgICAgICBmb3VydGhCeXRlID0gYnVmW29mZnNldCArIDNdO1xuICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAxOTIpID09PSAxMjggJiYgKHRoaXJkQnl0ZSAmIDE5MikgPT09IDEyOCAmJiAoZm91cnRoQnl0ZSAmIDE5MikgPT09IDEyOCkge1xuICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMTUpIDw8IDE4IHwgKHNlY29uZEJ5dGUgJiA2MykgPDwgMTIgfCAodGhpcmRCeXRlICYgNjMpIDw8IDYgfCBmb3VydGhCeXRlICYgNjM7XG4gICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiA2NTUzNSAmJiB0ZW1wQ29kZVBvaW50IDwgMTExNDExMikge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgY29kZVBvaW50ID0gNjU1MzM7XG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDY1NTM1KSB7XG4gICAgICBjb2RlUG9pbnQgLT0gNjU1MzY7XG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMTAyMyB8IDU1Mjk2KTtcbiAgICAgIGNvZGVQb2ludCA9IDU2MzIwIHwgY29kZVBvaW50ICYgMTAyMztcbiAgICB9XG4gICAgcmVzLnB1c2goY29kZVBvaW50KTtcbiAgICBvZmZzZXQgKz0gYnl0ZXNQZXJTZXF1ZW5jZTtcbiAgfVxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcyk7XG59XG5jb25zdCBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDQwOTY7XG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkoY29kZVBvaW50cykge1xuICBjb25zdCBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aDtcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cyk7XG4gIH1cbiAgbGV0IHJlcyA9ICcnO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnRzLmFsbG9jID0gYWxsb2M7XG5leHBvcnRzLmFzVThBID0gYXNVOEE7XG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG5leHBvcnRzLmRlY29kZUNvZGVQb2ludHNBcnJheSA9IGRlY29kZUNvZGVQb2ludHNBcnJheTtcbmV4cG9ydHMuZnJvbUFycmF5ID0gZnJvbUFycmF5O1xuZXhwb3J0cy5mcm9tSGV4ID0gZnJvbUhleDtcbmV4cG9ydHMuZnJvbVN0cmluZyA9IGZyb21TdHJpbmc7XG5leHBvcnRzLnNsaWNlID0gc2xpY2U7XG5leHBvcnRzLnRvSGV4ID0gdG9IZXg7XG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG5leHBvcnRzLnVzZUJ1ZmZlciA9IHVzZUJ1ZmZlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgZGVjb2RlRXJyUHJlZml4ID0gJ0NCT1IgZGVjb2RlIGVycm9yOic7XG5jb25zdCBlbmNvZGVFcnJQcmVmaXggPSAnQ0JPUiBlbmNvZGUgZXJyb3I6JztcbmNvbnN0IHVpbnRNaW5vclByZWZpeEJ5dGVzID0gW107XG51aW50TWlub3JQcmVmaXhCeXRlc1syM10gPSAxO1xudWludE1pbm9yUHJlZml4Qnl0ZXNbMjRdID0gMjtcbnVpbnRNaW5vclByZWZpeEJ5dGVzWzI1XSA9IDM7XG51aW50TWlub3JQcmVmaXhCeXRlc1syNl0gPSA1O1xudWludE1pbm9yUHJlZml4Qnl0ZXNbMjddID0gOTtcbmZ1bmN0aW9uIGFzc2VydEVub3VnaERhdGEoZGF0YSwgcG9zLCBuZWVkKSB7XG4gIGlmIChkYXRhLmxlbmd0aCAtIHBvcyA8IG5lZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGRlY29kZUVyclByZWZpeCB9IG5vdCBlbm91Z2ggZGF0YSBmb3IgdHlwZWApO1xuICB9XG59XG5cbmV4cG9ydHMuYXNzZXJ0RW5vdWdoRGF0YSA9IGFzc2VydEVub3VnaERhdGE7XG5leHBvcnRzLmRlY29kZUVyclByZWZpeCA9IGRlY29kZUVyclByZWZpeDtcbmV4cG9ydHMuZW5jb2RlRXJyUHJlZml4ID0gZW5jb2RlRXJyUHJlZml4O1xuZXhwb3J0cy51aW50TWlub3JQcmVmaXhCeXRlcyA9IHVpbnRNaW5vclByZWZpeEJ5dGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9jb21tb24uanMnKTtcbnZhciB0b2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4uanMnKTtcbnZhciBqdW1wID0gcmVxdWlyZSgnLi9qdW1wLmpzJyk7XG5cbmNvbnN0IGRlZmF1bHREZWNvZGVPcHRpb25zID0ge1xuICBzdHJpY3Q6IGZhbHNlLFxuICBhbGxvd0luZGVmaW5pdGU6IHRydWUsXG4gIGFsbG93VW5kZWZpbmVkOiB0cnVlLFxuICBhbGxvd0JpZ0ludDogdHJ1ZVxufTtcbmNsYXNzIFRva2VuaXNlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMucG9zID0gMDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgZG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3MgPj0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgfVxuICBuZXh0KCkge1xuICAgIGNvbnN0IGJ5dCA9IHRoaXMuZGF0YVt0aGlzLnBvc107XG4gICAgbGV0IHRva2VuID0ganVtcC5xdWlja1tieXRdO1xuICAgIGlmICh0b2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBkZWNvZGVyID0ganVtcC5qdW1wW2J5dF07XG4gICAgICBpZiAoIWRlY29kZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gbm8gZGVjb2RlciBmb3IgbWFqb3IgdHlwZSAkeyBieXQgPj4+IDUgfSAoYnl0ZSAweCR7IGJ5dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSB9KWApO1xuICAgICAgfVxuICAgICAgY29uc3QgbWlub3IgPSBieXQgJiAzMTtcbiAgICAgIHRva2VuID0gZGVjb2Rlcih0aGlzLmRhdGEsIHRoaXMucG9zLCBtaW5vciwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5wb3MgKz0gdG9rZW4uZW5jb2RlZExlbmd0aDtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbn1cbmNvbnN0IERPTkUgPSBTeW1ib2wuZm9yKCdET05FJyk7XG5jb25zdCBCUkVBSyA9IFN5bWJvbC5mb3IoJ0JSRUFLJyk7XG5mdW5jdGlvbiB0b2tlblRvQXJyYXkodG9rZW4sIHRva2VuaXNlciwgb3B0aW9ucykge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbi52YWx1ZTsgaSsrKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0b2tlbnNUb09iamVjdCh0b2tlbmlzZXIsIG9wdGlvbnMpO1xuICAgIGlmICh2YWx1ZSA9PT0gQlJFQUspIHtcbiAgICAgIGlmICh0b2tlbi52YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBnb3QgdW5leHBlY3RlZCBicmVhayB0byBsZW5ndGhlZCBhcnJheWApO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IERPTkUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IGZvdW5kIGFycmF5IGJ1dCBub3QgZW5vdWdoIGVudHJpZXMgKGdvdCAkeyBpIH0sIGV4cGVjdGVkICR7IHRva2VuLnZhbHVlIH0pYCk7XG4gICAgfVxuICAgIGFycltpXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5mdW5jdGlvbiB0b2tlblRvTWFwKHRva2VuLCB0b2tlbmlzZXIsIG9wdGlvbnMpIHtcbiAgY29uc3QgdXNlTWFwcyA9IG9wdGlvbnMudXNlTWFwcyA9PT0gdHJ1ZTtcbiAgY29uc3Qgb2JqID0gdXNlTWFwcyA/IHVuZGVmaW5lZCA6IHt9O1xuICBjb25zdCBtID0gdXNlTWFwcyA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbi52YWx1ZTsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gdG9rZW5zVG9PYmplY3QodG9rZW5pc2VyLCBvcHRpb25zKTtcbiAgICBpZiAoa2V5ID09PSBCUkVBSykge1xuICAgICAgaWYgKHRva2VuLnZhbHVlID09PSBJbmZpbml0eSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IGdvdCB1bmV4cGVjdGVkIGJyZWFrIHRvIGxlbmd0aGVkIG1hcGApO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSBET05FKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBmb3VuZCBtYXAgYnV0IG5vdCBlbm91Z2ggZW50cmllcyAoZ290ICR7IGkgfSBbbm8ga2V5XSwgZXhwZWN0ZWQgJHsgdG9rZW4udmFsdWUgfSlgKTtcbiAgICB9XG4gICAgaWYgKHVzZU1hcHMgIT09IHRydWUgJiYgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IG5vbi1zdHJpbmcga2V5cyBub3Qgc3VwcG9ydGVkIChnb3QgJHsgdHlwZW9mIGtleSB9KWApO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHRva2Vuc1RvT2JqZWN0KHRva2VuaXNlciwgb3B0aW9ucyk7XG4gICAgaWYgKHZhbHVlID09PSBET05FKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBmb3VuZCBtYXAgYnV0IG5vdCBlbm91Z2ggZW50cmllcyAoZ290ICR7IGkgfSBbbm8gdmFsdWVdLCBleHBlY3RlZCAkeyB0b2tlbi52YWx1ZSB9KWApO1xuICAgIH1cbiAgICBpZiAodXNlTWFwcykge1xuICAgICAgbS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB1c2VNYXBzID8gbSA6IG9iajtcbn1cbmZ1bmN0aW9uIHRva2Vuc1RvT2JqZWN0KHRva2VuaXNlciwgb3B0aW9ucykge1xuICBpZiAodG9rZW5pc2VyLmRvbmUoKSkge1xuICAgIHJldHVybiBET05FO1xuICB9XG4gIGNvbnN0IHRva2VuJDEgPSB0b2tlbmlzZXIubmV4dCgpO1xuICBpZiAodG9rZW4kMS50eXBlID09PSB0b2tlbi5UeXBlLmJyZWFrKSB7XG4gICAgcmV0dXJuIEJSRUFLO1xuICB9XG4gIGlmICh0b2tlbiQxLnR5cGUudGVybWluYWwpIHtcbiAgICByZXR1cm4gdG9rZW4kMS52YWx1ZTtcbiAgfVxuICBpZiAodG9rZW4kMS50eXBlID09PSB0b2tlbi5UeXBlLmFycmF5KSB7XG4gICAgcmV0dXJuIHRva2VuVG9BcnJheSh0b2tlbiQxLCB0b2tlbmlzZXIsIG9wdGlvbnMpO1xuICB9XG4gIGlmICh0b2tlbiQxLnR5cGUgPT09IHRva2VuLlR5cGUubWFwKSB7XG4gICAgcmV0dXJuIHRva2VuVG9NYXAodG9rZW4kMSwgdG9rZW5pc2VyLCBvcHRpb25zKTtcbiAgfVxuICBpZiAodG9rZW4kMS50eXBlID09PSB0b2tlbi5UeXBlLnRhZykge1xuICAgIGlmIChvcHRpb25zLnRhZ3MgJiYgdHlwZW9mIG9wdGlvbnMudGFnc1t0b2tlbiQxLnZhbHVlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgdGFnZ2VkID0gdG9rZW5zVG9PYmplY3QodG9rZW5pc2VyLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBvcHRpb25zLnRhZ3NbdG9rZW4kMS52YWx1ZV0odGFnZ2VkKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gdGFnIG5vdCBzdXBwb3J0ZWQgKCR7IHRva2VuJDEudmFsdWUgfSlgKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkJyk7XG59XG5mdW5jdGlvbiBkZWNvZGUoZGF0YSwgb3B0aW9ucykge1xuICBpZiAoIShkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBkYXRhIHRvIGRlY29kZSBtdXN0IGJlIGEgVWludDhBcnJheWApO1xuICB9XG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0RGVjb2RlT3B0aW9ucywgb3B0aW9ucyk7XG4gIGNvbnN0IHRva2VuaXNlciA9IG9wdGlvbnMudG9rZW5pemVyIHx8IG5ldyBUb2tlbmlzZXIoZGF0YSwgb3B0aW9ucyk7XG4gIGNvbnN0IGRlY29kZWQgPSB0b2tlbnNUb09iamVjdCh0b2tlbmlzZXIsIG9wdGlvbnMpO1xuICBpZiAoZGVjb2RlZCA9PT0gRE9ORSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IGRpZCBub3QgZmluZCBhbnkgY29udGVudCB0byBkZWNvZGVgKTtcbiAgfVxuICBpZiAoZGVjb2RlZCA9PT0gQlJFQUspIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBnb3QgdW5leHBlY3RlZCBicmVha2ApO1xuICB9XG4gIGlmICghdG9rZW5pc2VyLmRvbmUoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHsgY29tbW9uLmRlY29kZUVyclByZWZpeCB9IHRvbyBtYW55IHRlcm1pbmFscywgZGF0YSBtYWtlcyBubyBzZW5zZWApO1xuICB9XG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG5leHBvcnRzLlRva2VuaXNlciA9IFRva2VuaXNlcjtcbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuZXhwb3J0cy50b2tlbnNUb09iamVjdCA9IHRva2Vuc1RvT2JqZWN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgaXMgPSByZXF1aXJlKCcuL2lzLmpzJyk7XG52YXIgdG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuLmpzJyk7XG52YXIgYmwgPSByZXF1aXJlKCcuL2JsLmpzJyk7XG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi9jb21tb24uanMnKTtcbnZhciBqdW1wID0gcmVxdWlyZSgnLi9qdW1wLmpzJyk7XG52YXIgYnl0ZVV0aWxzID0gcmVxdWlyZSgnLi9ieXRlLXV0aWxzLmpzJyk7XG52YXIgXzB1aW50ID0gcmVxdWlyZSgnLi8wdWludC5qcycpO1xudmFyIF8xbmVnaW50ID0gcmVxdWlyZSgnLi8xbmVnaW50LmpzJyk7XG52YXIgXzJieXRlcyA9IHJlcXVpcmUoJy4vMmJ5dGVzLmpzJyk7XG52YXIgXzNzdHJpbmcgPSByZXF1aXJlKCcuLzNzdHJpbmcuanMnKTtcbnZhciBfNGFycmF5ID0gcmVxdWlyZSgnLi80YXJyYXkuanMnKTtcbnZhciBfNW1hcCA9IHJlcXVpcmUoJy4vNW1hcC5qcycpO1xudmFyIF82dGFnID0gcmVxdWlyZSgnLi82dGFnLmpzJyk7XG52YXIgXzdmbG9hdCA9IHJlcXVpcmUoJy4vN2Zsb2F0LmpzJyk7XG5cbmNvbnN0IGRlZmF1bHRFbmNvZGVPcHRpb25zID0ge1xuICBmbG9hdDY0OiBmYWxzZSxcbiAgbWFwU29ydGVyLFxuICBxdWlja0VuY29kZVRva2VuOiBqdW1wLnF1aWNrRW5jb2RlVG9rZW5cbn07XG5jb25zdCBjYm9yRW5jb2RlcnMgPSBbXTtcbmNib3JFbmNvZGVyc1t0b2tlbi5UeXBlLnVpbnQubWFqb3JdID0gXzB1aW50LmVuY29kZVVpbnQ7XG5jYm9yRW5jb2RlcnNbdG9rZW4uVHlwZS5uZWdpbnQubWFqb3JdID0gXzFuZWdpbnQuZW5jb2RlTmVnaW50O1xuY2JvckVuY29kZXJzW3Rva2VuLlR5cGUuYnl0ZXMubWFqb3JdID0gXzJieXRlcy5lbmNvZGVCeXRlcztcbmNib3JFbmNvZGVyc1t0b2tlbi5UeXBlLnN0cmluZy5tYWpvcl0gPSBfM3N0cmluZy5lbmNvZGVTdHJpbmc7XG5jYm9yRW5jb2RlcnNbdG9rZW4uVHlwZS5hcnJheS5tYWpvcl0gPSBfNGFycmF5LmVuY29kZUFycmF5O1xuY2JvckVuY29kZXJzW3Rva2VuLlR5cGUubWFwLm1ham9yXSA9IF81bWFwLmVuY29kZU1hcDtcbmNib3JFbmNvZGVyc1t0b2tlbi5UeXBlLnRhZy5tYWpvcl0gPSBfNnRhZy5lbmNvZGVUYWc7XG5jYm9yRW5jb2RlcnNbdG9rZW4uVHlwZS5mbG9hdC5tYWpvcl0gPSBfN2Zsb2F0LmVuY29kZUZsb2F0O1xuY29uc3QgYnVmID0gbmV3IGJsLkJsKCk7XG5jbGFzcyBSZWYge1xuICBjb25zdHJ1Y3RvcihvYmosIHBhcmVudCkge1xuICAgIHRoaXMub2JqID0gb2JqO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG4gIGluY2x1ZGVzKG9iaikge1xuICAgIGxldCBwID0gdGhpcztcbiAgICBkbyB7XG4gICAgICBpZiAocC5vYmogPT09IG9iaikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChwID0gcC5wYXJlbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGF0aWMgY3JlYXRlQ2hlY2soc3RhY2ssIG9iaikge1xuICAgIGlmIChzdGFjayAmJiBzdGFjay5pbmNsdWRlcyhvYmopKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5lbmNvZGVFcnJQcmVmaXggfSBvYmplY3QgY29udGFpbnMgY2lyY3VsYXIgcmVmZXJlbmNlc2ApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZihvYmosIHN0YWNrKTtcbiAgfVxufVxuY29uc3Qgc2ltcGxlVG9rZW5zID0ge1xuICBudWxsOiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5udWxsLCBudWxsKSxcbiAgdW5kZWZpbmVkOiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS51bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gIHRydWU6IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnRydWUsIHRydWUpLFxuICBmYWxzZTogbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuZmFsc2UsIGZhbHNlKSxcbiAgZW1wdHlBcnJheTogbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYXJyYXksIDApLFxuICBlbXB0eU1hcDogbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubWFwLCAwKVxufTtcbmNvbnN0IHR5cGVFbmNvZGVycyA9IHtcbiAgbnVtYmVyKG9iaiwgX3R5cCwgX29wdGlvbnMsIF9yZWZTdGFjaykge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihvYmopIHx8ICFOdW1iZXIuaXNTYWZlSW50ZWdlcihvYmopKSB7XG4gICAgICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuZmxvYXQsIG9iaik7XG4gICAgfSBlbHNlIGlmIChvYmogPj0gMCkge1xuICAgICAgcmV0dXJuIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLnVpbnQsIG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5uZWdpbnQsIG9iaik7XG4gICAgfVxuICB9LFxuICBiaWdpbnQob2JqLCBfdHlwLCBfb3B0aW9ucywgX3JlZlN0YWNrKSB7XG4gICAgaWYgKG9iaiA+PSBCaWdJbnQoMCkpIHtcbiAgICAgIHJldHVybiBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS51aW50LCBvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubmVnaW50LCBvYmopO1xuICAgIH1cbiAgfSxcbiAgVWludDhBcnJheShvYmosIF90eXAsIF9vcHRpb25zLCBfcmVmU3RhY2spIHtcbiAgICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYnl0ZXMsIG9iaik7XG4gIH0sXG4gIHN0cmluZyhvYmosIF90eXAsIF9vcHRpb25zLCBfcmVmU3RhY2spIHtcbiAgICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuc3RyaW5nLCBvYmopO1xuICB9LFxuICBib29sZWFuKG9iaiwgX3R5cCwgX29wdGlvbnMsIF9yZWZTdGFjaykge1xuICAgIHJldHVybiBvYmogPyBzaW1wbGVUb2tlbnMudHJ1ZSA6IHNpbXBsZVRva2Vucy5mYWxzZTtcbiAgfSxcbiAgbnVsbChfb2JqLCBfdHlwLCBfb3B0aW9ucywgX3JlZlN0YWNrKSB7XG4gICAgcmV0dXJuIHNpbXBsZVRva2Vucy5udWxsO1xuICB9LFxuICB1bmRlZmluZWQoX29iaiwgX3R5cCwgX29wdGlvbnMsIF9yZWZTdGFjaykge1xuICAgIHJldHVybiBzaW1wbGVUb2tlbnMudW5kZWZpbmVkO1xuICB9LFxuICBBcnJheUJ1ZmZlcihvYmosIF90eXAsIF9vcHRpb25zLCBfcmVmU3RhY2spIHtcbiAgICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYnl0ZXMsIG5ldyBVaW50OEFycmF5KG9iaikpO1xuICB9LFxuICBEYXRhVmlldyhvYmosIF90eXAsIF9vcHRpb25zLCBfcmVmU3RhY2spIHtcbiAgICByZXR1cm4gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYnl0ZXMsIG5ldyBVaW50OEFycmF5KG9iai5idWZmZXIsIG9iai5ieXRlT2Zmc2V0LCBvYmouYnl0ZUxlbmd0aCkpO1xuICB9LFxuICBBcnJheShvYmosIF90eXAsIG9wdGlvbnMsIHJlZlN0YWNrKSB7XG4gICAgaWYgKCFvYmoubGVuZ3RoKSB7XG4gICAgICBpZiAob3B0aW9ucy5hZGRCcmVha1Rva2VucyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHNpbXBsZVRva2Vucy5lbXB0eUFycmF5LFxuICAgICAgICAgIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmJyZWFrKVxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNpbXBsZVRva2Vucy5lbXB0eUFycmF5O1xuICAgIH1cbiAgICByZWZTdGFjayA9IFJlZi5jcmVhdGVDaGVjayhyZWZTdGFjaywgb2JqKTtcbiAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgZSBvZiBvYmopIHtcbiAgICAgIGVudHJpZXNbaSsrXSA9IG9iamVjdFRvVG9rZW5zKGUsIG9wdGlvbnMsIHJlZlN0YWNrKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYWRkQnJlYWtUb2tlbnMpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLmFycmF5LCBvYmoubGVuZ3RoKSxcbiAgICAgICAgZW50cmllcyxcbiAgICAgICAgbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYnJlYWspXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYXJyYXksIG9iai5sZW5ndGgpLFxuICAgICAgZW50cmllc1xuICAgIF07XG4gIH0sXG4gIE9iamVjdChvYmosIHR5cCwgb3B0aW9ucywgcmVmU3RhY2spIHtcbiAgICBjb25zdCBpc01hcCA9IHR5cCAhPT0gJ09iamVjdCc7XG4gICAgY29uc3Qga2V5cyA9IGlzTWFwID8gb2JqLmtleXMoKSA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc3QgbGVuZ3RoID0gaXNNYXAgPyBvYmouc2l6ZSA6IGtleXMubGVuZ3RoO1xuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICBpZiAob3B0aW9ucy5hZGRCcmVha1Rva2VucyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHNpbXBsZVRva2Vucy5lbXB0eU1hcCxcbiAgICAgICAgICBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5icmVhaylcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaW1wbGVUb2tlbnMuZW1wdHlNYXA7XG4gICAgfVxuICAgIHJlZlN0YWNrID0gUmVmLmNyZWF0ZUNoZWNrKHJlZlN0YWNrLCBvYmopO1xuICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgZW50cmllc1tpKytdID0gW1xuICAgICAgICBvYmplY3RUb1Rva2VucyhrZXksIG9wdGlvbnMsIHJlZlN0YWNrKSxcbiAgICAgICAgb2JqZWN0VG9Ub2tlbnMoaXNNYXAgPyBvYmouZ2V0KGtleSkgOiBvYmpba2V5XSwgb3B0aW9ucywgcmVmU3RhY2spXG4gICAgICBdO1xuICAgIH1cbiAgICBzb3J0TWFwRW50cmllcyhlbnRyaWVzLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5hZGRCcmVha1Rva2Vucykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUubWFwLCBsZW5ndGgpLFxuICAgICAgICBlbnRyaWVzLFxuICAgICAgICBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5icmVhaylcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5tYXAsIGxlbmd0aCksXG4gICAgICBlbnRyaWVzXG4gICAgXTtcbiAgfVxufTtcbnR5cGVFbmNvZGVycy5NYXAgPSB0eXBlRW5jb2RlcnMuT2JqZWN0O1xudHlwZUVuY29kZXJzLkJ1ZmZlciA9IHR5cGVFbmNvZGVycy5VaW50OEFycmF5O1xuZm9yIChjb25zdCB0eXAgb2YgJ1VpbnQ4Q2xhbXBlZCBVaW50MTYgVWludDMyIEludDggSW50MTYgSW50MzIgQmlnVWludDY0IEJpZ0ludDY0IEZsb2F0MzIgRmxvYXQ2NCcuc3BsaXQoJyAnKSkge1xuICB0eXBlRW5jb2RlcnNbYCR7IHR5cCB9QXJyYXlgXSA9IHR5cGVFbmNvZGVycy5EYXRhVmlldztcbn1cbmZ1bmN0aW9uIG9iamVjdFRvVG9rZW5zKG9iaiwgb3B0aW9ucyA9IHt9LCByZWZTdGFjaykge1xuICBjb25zdCB0eXAgPSBpcy5pcyhvYmopO1xuICBjb25zdCBjdXN0b21UeXBlRW5jb2RlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy50eXBlRW5jb2RlcnMgJiYgb3B0aW9ucy50eXBlRW5jb2RlcnNbdHlwXSB8fCB0eXBlRW5jb2RlcnNbdHlwXTtcbiAgaWYgKHR5cGVvZiBjdXN0b21UeXBlRW5jb2RlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHRva2VucyA9IGN1c3RvbVR5cGVFbmNvZGVyKG9iaiwgdHlwLCBvcHRpb25zLCByZWZTdGFjayk7XG4gICAgaWYgKHRva2VucyAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH1cbiAgfVxuICBjb25zdCB0eXBlRW5jb2RlciA9IHR5cGVFbmNvZGVyc1t0eXBdO1xuICBpZiAoIXR5cGVFbmNvZGVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZW5jb2RlRXJyUHJlZml4IH0gdW5zdXBwb3J0ZWQgdHlwZTogJHsgdHlwIH1gKTtcbiAgfVxuICByZXR1cm4gdHlwZUVuY29kZXIob2JqLCB0eXAsIG9wdGlvbnMsIHJlZlN0YWNrKTtcbn1cbmZ1bmN0aW9uIHNvcnRNYXBFbnRyaWVzKGVudHJpZXMsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMubWFwU29ydGVyKSB7XG4gICAgZW50cmllcy5zb3J0KG9wdGlvbnMubWFwU29ydGVyKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFwU29ydGVyKGUxLCBlMikge1xuICBjb25zdCBrZXlUb2tlbjEgPSBBcnJheS5pc0FycmF5KGUxWzBdKSA/IGUxWzBdWzBdIDogZTFbMF07XG4gIGNvbnN0IGtleVRva2VuMiA9IEFycmF5LmlzQXJyYXkoZTJbMF0pID8gZTJbMF1bMF0gOiBlMlswXTtcbiAgaWYgKGtleVRva2VuMS50eXBlICE9PSBrZXlUb2tlbjIudHlwZSkge1xuICAgIHJldHVybiBrZXlUb2tlbjEudHlwZS5jb21wYXJlKGtleVRva2VuMi50eXBlKTtcbiAgfVxuICBjb25zdCBtYWpvciA9IGtleVRva2VuMS50eXBlLm1ham9yO1xuICBjb25zdCB0Y21wID0gY2JvckVuY29kZXJzW21ham9yXS5jb21wYXJlVG9rZW5zKGtleVRva2VuMSwga2V5VG9rZW4yKTtcbiAgaWYgKHRjbXAgPT09IDApIHtcbiAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6IGNvbXBsZXgga2V5IHR5cGVzIHVzZWQsIENCT1Iga2V5IHNvcnRpbmcgZ3VhcmFudGVlcyBhcmUgZ29uZScpO1xuICB9XG4gIHJldHVybiB0Y21wO1xufVxuZnVuY3Rpb24gdG9rZW5zVG9FbmNvZGVkKGJ1ZiwgdG9rZW5zLCBlbmNvZGVycywgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG4gICAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICAgIHRva2Vuc1RvRW5jb2RlZChidWYsIHRva2VuLCBlbmNvZGVycywgb3B0aW9ucyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVuY29kZXJzW3Rva2Vucy50eXBlLm1ham9yXShidWYsIHRva2Vucywgb3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVuY29kZUN1c3RvbShkYXRhLCBlbmNvZGVycywgb3B0aW9ucykge1xuICBjb25zdCB0b2tlbnMgPSBvYmplY3RUb1Rva2VucyhkYXRhLCBvcHRpb25zKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHRva2VucykgJiYgb3B0aW9ucy5xdWlja0VuY29kZVRva2VuKSB7XG4gICAgY29uc3QgcXVpY2tCeXRlcyA9IG9wdGlvbnMucXVpY2tFbmNvZGVUb2tlbih0b2tlbnMpO1xuICAgIGlmIChxdWlja0J5dGVzKSB7XG4gICAgICByZXR1cm4gcXVpY2tCeXRlcztcbiAgICB9XG4gICAgY29uc3QgZW5jb2RlciA9IGVuY29kZXJzW3Rva2Vucy50eXBlLm1ham9yXTtcbiAgICBpZiAoZW5jb2Rlci5lbmNvZGVkU2l6ZSkge1xuICAgICAgY29uc3Qgc2l6ZSA9IGVuY29kZXIuZW5jb2RlZFNpemUodG9rZW5zLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IGJ1ZiA9IG5ldyBibC5CbChzaXplKTtcbiAgICAgIGVuY29kZXIoYnVmLCB0b2tlbnMsIG9wdGlvbnMpO1xuICAgICAgaWYgKGJ1Zi5jaHVua3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBlcnJvcjogcHJlLWNhbGN1bGF0ZWQgbGVuZ3RoIGZvciAkeyB0b2tlbnMgfSB3YXMgd3JvbmdgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBieXRlVXRpbHMuYXNVOEEoYnVmLmNodW5rc1swXSk7XG4gICAgfVxuICB9XG4gIHRva2Vuc1RvRW5jb2RlZChidWYsIHRva2VucywgZW5jb2RlcnMsIG9wdGlvbnMpO1xuICByZXR1cm4gYnVmLnRvQnl0ZXModHJ1ZSk7XG59XG5mdW5jdGlvbiBlbmNvZGUoZGF0YSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdEVuY29kZU9wdGlvbnMsIG9wdGlvbnMpO1xuICByZXR1cm4gZW5jb2RlQ3VzdG9tKGRhdGEsIGNib3JFbmNvZGVycywgb3B0aW9ucyk7XG59XG5cbmV4cG9ydHMuUmVmID0gUmVmO1xuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG5leHBvcnRzLmVuY29kZUN1c3RvbSA9IGVuY29kZUN1c3RvbTtcbmV4cG9ydHMub2JqZWN0VG9Ub2tlbnMgPSBvYmplY3RUb1Rva2VucztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3QgdHlwZW9mcyA9IFtcbiAgJ3N0cmluZycsXG4gICdudW1iZXInLFxuICAnYmlnaW50JyxcbiAgJ3N5bWJvbCdcbl07XG5jb25zdCBvYmplY3RUeXBlTmFtZXMgPSBbXG4gICdGdW5jdGlvbicsXG4gICdHZW5lcmF0b3InLFxuICAnQXN5bmNHZW5lcmF0b3InLFxuICAnR2VuZXJhdG9yRnVuY3Rpb24nLFxuICAnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsXG4gICdBc3luY0Z1bmN0aW9uJyxcbiAgJ09ic2VydmFibGUnLFxuICAnQXJyYXknLFxuICAnQnVmZmVyJyxcbiAgJ09iamVjdCcsXG4gICdSZWdFeHAnLFxuICAnRGF0ZScsXG4gICdFcnJvcicsXG4gICdNYXAnLFxuICAnU2V0JyxcbiAgJ1dlYWtNYXAnLFxuICAnV2Vha1NldCcsXG4gICdBcnJheUJ1ZmZlcicsXG4gICdTaGFyZWRBcnJheUJ1ZmZlcicsXG4gICdEYXRhVmlldycsXG4gICdQcm9taXNlJyxcbiAgJ1VSTCcsXG4gICdIVE1MRWxlbWVudCcsXG4gICdJbnQ4QXJyYXknLFxuICAnVWludDhBcnJheScsXG4gICdVaW50OENsYW1wZWRBcnJheScsXG4gICdJbnQxNkFycmF5JyxcbiAgJ1VpbnQxNkFycmF5JyxcbiAgJ0ludDMyQXJyYXknLFxuICAnVWludDMyQXJyYXknLFxuICAnRmxvYXQzMkFycmF5JyxcbiAgJ0Zsb2F0NjRBcnJheScsXG4gICdCaWdJbnQ2NEFycmF5JyxcbiAgJ0JpZ1VpbnQ2NEFycmF5J1xuXTtcbmZ1bmN0aW9uIGlzKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIH1cbiAgaWYgKHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiAnYm9vbGVhbic7XG4gIH1cbiAgY29uc3QgdHlwZU9mID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZW9mcy5pbmNsdWRlcyh0eXBlT2YpKSB7XG4gICAgcmV0dXJuIHR5cGVPZjtcbiAgfVxuICBpZiAodHlwZU9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdGdW5jdGlvbic7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuICdBcnJheSc7XG4gIH1cbiAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgIHJldHVybiAnQnVmZmVyJztcbiAgfVxuICBjb25zdCBvYmplY3RUeXBlID0gZ2V0T2JqZWN0VHlwZSh2YWx1ZSk7XG4gIGlmIChvYmplY3RUeXBlKSB7XG4gICAgcmV0dXJuIG9iamVjdFR5cGU7XG4gIH1cbiAgcmV0dXJuICdPYmplY3QnO1xufVxuZnVuY3Rpb24gaXNCdWZmZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmIHZhbHVlLmNvbnN0cnVjdG9yLmlzQnVmZmVyLmNhbGwobnVsbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0T2JqZWN0VHlwZSh2YWx1ZSkge1xuICBjb25zdCBvYmplY3RUeXBlTmFtZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICBpZiAob2JqZWN0VHlwZU5hbWVzLmluY2x1ZGVzKG9iamVjdFR5cGVOYW1lKSkge1xuICAgIHJldHVybiBvYmplY3RUeXBlTmFtZTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5leHBvcnRzLmlzID0gaXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0b2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4uanMnKTtcbnZhciBfMHVpbnQgPSByZXF1aXJlKCcuLzB1aW50LmpzJyk7XG52YXIgXzFuZWdpbnQgPSByZXF1aXJlKCcuLzFuZWdpbnQuanMnKTtcbnZhciBfMmJ5dGVzID0gcmVxdWlyZSgnLi8yYnl0ZXMuanMnKTtcbnZhciBfM3N0cmluZyA9IHJlcXVpcmUoJy4vM3N0cmluZy5qcycpO1xudmFyIF80YXJyYXkgPSByZXF1aXJlKCcuLzRhcnJheS5qcycpO1xudmFyIF81bWFwID0gcmVxdWlyZSgnLi81bWFwLmpzJyk7XG52YXIgXzZ0YWcgPSByZXF1aXJlKCcuLzZ0YWcuanMnKTtcbnZhciBfN2Zsb2F0ID0gcmVxdWlyZSgnLi83ZmxvYXQuanMnKTtcbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbi5qcycpO1xudmFyIGJ5dGVVdGlscyA9IHJlcXVpcmUoJy4vYnl0ZS11dGlscy5qcycpO1xuXG5mdW5jdGlvbiBpbnZhbGlkTWlub3IoZGF0YSwgcG9zLCBtaW5vcikge1xuICB0aHJvdyBuZXcgRXJyb3IoYCR7IGNvbW1vbi5kZWNvZGVFcnJQcmVmaXggfSBlbmNvdW50ZXJlZCBpbnZhbGlkIG1pbm9yICgkeyBtaW5vciB9KSBmb3IgbWFqb3IgJHsgZGF0YVtwb3NdID4+PiA1IH1gKTtcbn1cbmZ1bmN0aW9uIGVycm9yZXIobXNnKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAkeyBjb21tb24uZGVjb2RlRXJyUHJlZml4IH0gJHsgbXNnIH1gKTtcbiAgfTtcbn1cbmNvbnN0IGp1bXAgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDw9IDIzOyBpKyspIHtcbiAganVtcFtpXSA9IGludmFsaWRNaW5vcjtcbn1cbmp1bXBbMjRdID0gXzB1aW50LmRlY29kZVVpbnQ4O1xuanVtcFsyNV0gPSBfMHVpbnQuZGVjb2RlVWludDE2O1xuanVtcFsyNl0gPSBfMHVpbnQuZGVjb2RlVWludDMyO1xuanVtcFsyN10gPSBfMHVpbnQuZGVjb2RlVWludDY0O1xuanVtcFsyOF0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzI5XSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMzBdID0gaW52YWxpZE1pbm9yO1xuanVtcFszMV0gPSBpbnZhbGlkTWlub3I7XG5mb3IgKGxldCBpID0gMzI7IGkgPD0gNTU7IGkrKykge1xuICBqdW1wW2ldID0gaW52YWxpZE1pbm9yO1xufVxuanVtcFs1Nl0gPSBfMW5lZ2ludC5kZWNvZGVOZWdpbnQ4O1xuanVtcFs1N10gPSBfMW5lZ2ludC5kZWNvZGVOZWdpbnQxNjtcbmp1bXBbNThdID0gXzFuZWdpbnQuZGVjb2RlTmVnaW50MzI7XG5qdW1wWzU5XSA9IF8xbmVnaW50LmRlY29kZU5lZ2ludDY0O1xuanVtcFs2MF0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzYxXSA9IGludmFsaWRNaW5vcjtcbmp1bXBbNjJdID0gaW52YWxpZE1pbm9yO1xuanVtcFs2M10gPSBpbnZhbGlkTWlub3I7XG5mb3IgKGxldCBpID0gNjQ7IGkgPD0gODc7IGkrKykge1xuICBqdW1wW2ldID0gXzJieXRlcy5kZWNvZGVCeXRlc0NvbXBhY3Q7XG59XG5qdW1wWzg4XSA9IF8yYnl0ZXMuZGVjb2RlQnl0ZXM4O1xuanVtcFs4OV0gPSBfMmJ5dGVzLmRlY29kZUJ5dGVzMTY7XG5qdW1wWzkwXSA9IF8yYnl0ZXMuZGVjb2RlQnl0ZXMzMjtcbmp1bXBbOTFdID0gXzJieXRlcy5kZWNvZGVCeXRlczY0O1xuanVtcFs5Ml0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzkzXSA9IGludmFsaWRNaW5vcjtcbmp1bXBbOTRdID0gaW52YWxpZE1pbm9yO1xuanVtcFs5NV0gPSBlcnJvcmVyKCdpbmRlZmluaXRlIGxlbmd0aCBieXRlcy9zdHJpbmdzIGFyZSBub3Qgc3VwcG9ydGVkJyk7XG5mb3IgKGxldCBpID0gOTY7IGkgPD0gMTE5OyBpKyspIHtcbiAganVtcFtpXSA9IF8zc3RyaW5nLmRlY29kZVN0cmluZ0NvbXBhY3Q7XG59XG5qdW1wWzEyMF0gPSBfM3N0cmluZy5kZWNvZGVTdHJpbmc4O1xuanVtcFsxMjFdID0gXzNzdHJpbmcuZGVjb2RlU3RyaW5nMTY7XG5qdW1wWzEyMl0gPSBfM3N0cmluZy5kZWNvZGVTdHJpbmczMjtcbmp1bXBbMTIzXSA9IF8zc3RyaW5nLmRlY29kZVN0cmluZzY0O1xuanVtcFsxMjRdID0gaW52YWxpZE1pbm9yO1xuanVtcFsxMjVdID0gaW52YWxpZE1pbm9yO1xuanVtcFsxMjZdID0gaW52YWxpZE1pbm9yO1xuanVtcFsxMjddID0gZXJyb3JlcignaW5kZWZpbml0ZSBsZW5ndGggYnl0ZXMvc3RyaW5ncyBhcmUgbm90IHN1cHBvcnRlZCcpO1xuZm9yIChsZXQgaSA9IDEyODsgaSA8PSAxNTE7IGkrKykge1xuICBqdW1wW2ldID0gXzRhcnJheS5kZWNvZGVBcnJheUNvbXBhY3Q7XG59XG5qdW1wWzE1Ml0gPSBfNGFycmF5LmRlY29kZUFycmF5ODtcbmp1bXBbMTUzXSA9IF80YXJyYXkuZGVjb2RlQXJyYXkxNjtcbmp1bXBbMTU0XSA9IF80YXJyYXkuZGVjb2RlQXJyYXkzMjtcbmp1bXBbMTU1XSA9IF80YXJyYXkuZGVjb2RlQXJyYXk2NDtcbmp1bXBbMTU2XSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMTU3XSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMTU4XSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMTU5XSA9IF80YXJyYXkuZGVjb2RlQXJyYXlJbmRlZmluaXRlO1xuZm9yIChsZXQgaSA9IDE2MDsgaSA8PSAxODM7IGkrKykge1xuICBqdW1wW2ldID0gXzVtYXAuZGVjb2RlTWFwQ29tcGFjdDtcbn1cbmp1bXBbMTg0XSA9IF81bWFwLmRlY29kZU1hcDg7XG5qdW1wWzE4NV0gPSBfNW1hcC5kZWNvZGVNYXAxNjtcbmp1bXBbMTg2XSA9IF81bWFwLmRlY29kZU1hcDMyO1xuanVtcFsxODddID0gXzVtYXAuZGVjb2RlTWFwNjQ7XG5qdW1wWzE4OF0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzE4OV0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzE5MF0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzE5MV0gPSBfNW1hcC5kZWNvZGVNYXBJbmRlZmluaXRlO1xuZm9yIChsZXQgaSA9IDE5MjsgaSA8PSAyMTU7IGkrKykge1xuICBqdW1wW2ldID0gXzZ0YWcuZGVjb2RlVGFnQ29tcGFjdDtcbn1cbmp1bXBbMjE2XSA9IF82dGFnLmRlY29kZVRhZzg7XG5qdW1wWzIxN10gPSBfNnRhZy5kZWNvZGVUYWcxNjtcbmp1bXBbMjE4XSA9IF82dGFnLmRlY29kZVRhZzMyO1xuanVtcFsyMTldID0gXzZ0YWcuZGVjb2RlVGFnNjQ7XG5qdW1wWzIyMF0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzIyMV0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzIyMl0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzIyM10gPSBpbnZhbGlkTWlub3I7XG5mb3IgKGxldCBpID0gMjI0OyBpIDw9IDI0MzsgaSsrKSB7XG4gIGp1bXBbaV0gPSBlcnJvcmVyKCdzaW1wbGUgdmFsdWVzIGFyZSBub3Qgc3VwcG9ydGVkJyk7XG59XG5qdW1wWzI0NF0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzI0NV0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzI0Nl0gPSBpbnZhbGlkTWlub3I7XG5qdW1wWzI0N10gPSBfN2Zsb2F0LmRlY29kZVVuZGVmaW5lZDtcbmp1bXBbMjQ4XSA9IGVycm9yZXIoJ3NpbXBsZSB2YWx1ZXMgYXJlIG5vdCBzdXBwb3J0ZWQnKTtcbmp1bXBbMjQ5XSA9IF83ZmxvYXQuZGVjb2RlRmxvYXQxNjtcbmp1bXBbMjUwXSA9IF83ZmxvYXQuZGVjb2RlRmxvYXQzMjtcbmp1bXBbMjUxXSA9IF83ZmxvYXQuZGVjb2RlRmxvYXQ2NDtcbmp1bXBbMjUyXSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMjUzXSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMjU0XSA9IGludmFsaWRNaW5vcjtcbmp1bXBbMjU1XSA9IF83ZmxvYXQuZGVjb2RlQnJlYWs7XG5jb25zdCBxdWljayA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gIHF1aWNrW2ldID0gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUudWludCwgaSwgMSk7XG59XG5mb3IgKGxldCBpID0gLTE7IGkgPj0gLTI0OyBpLS0pIHtcbiAgcXVpY2tbMzEgLSBpXSA9IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLm5lZ2ludCwgaSwgMSk7XG59XG5xdWlja1s2NF0gPSBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5ieXRlcywgbmV3IFVpbnQ4QXJyYXkoMCksIDEpO1xucXVpY2tbOTZdID0gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuc3RyaW5nLCAnJywgMSk7XG5xdWlja1sxMjhdID0gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuYXJyYXksIDAsIDEpO1xucXVpY2tbMTYwXSA9IG5ldyB0b2tlbi5Ub2tlbih0b2tlbi5UeXBlLm1hcCwgMCwgMSk7XG5xdWlja1syNDRdID0gbmV3IHRva2VuLlRva2VuKHRva2VuLlR5cGUuZmFsc2UsIGZhbHNlLCAxKTtcbnF1aWNrWzI0NV0gPSBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS50cnVlLCB0cnVlLCAxKTtcbnF1aWNrWzI0Nl0gPSBuZXcgdG9rZW4uVG9rZW4odG9rZW4uVHlwZS5udWxsLCBudWxsLCAxKTtcbmZ1bmN0aW9uIHF1aWNrRW5jb2RlVG9rZW4odG9rZW4kMSkge1xuICBzd2l0Y2ggKHRva2VuJDEudHlwZSkge1xuICBjYXNlIHRva2VuLlR5cGUuZmFsc2U6XG4gICAgcmV0dXJuIGJ5dGVVdGlscy5mcm9tQXJyYXkoWzI0NF0pO1xuICBjYXNlIHRva2VuLlR5cGUudHJ1ZTpcbiAgICByZXR1cm4gYnl0ZVV0aWxzLmZyb21BcnJheShbMjQ1XSk7XG4gIGNhc2UgdG9rZW4uVHlwZS5udWxsOlxuICAgIHJldHVybiBieXRlVXRpbHMuZnJvbUFycmF5KFsyNDZdKTtcbiAgY2FzZSB0b2tlbi5UeXBlLmJ5dGVzOlxuICAgIGlmICghdG9rZW4kMS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBieXRlVXRpbHMuZnJvbUFycmF5KFs2NF0pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIGNhc2UgdG9rZW4uVHlwZS5zdHJpbmc6XG4gICAgaWYgKHRva2VuJDEudmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gYnl0ZVV0aWxzLmZyb21BcnJheShbOTZdKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICBjYXNlIHRva2VuLlR5cGUuYXJyYXk6XG4gICAgaWYgKHRva2VuJDEudmFsdWUgPT09IDApIHtcbiAgICAgIHJldHVybiBieXRlVXRpbHMuZnJvbUFycmF5KFsxMjhdKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICBjYXNlIHRva2VuLlR5cGUubWFwOlxuICAgIGlmICh0b2tlbiQxLnZhbHVlID09PSAwKSB7XG4gICAgICByZXR1cm4gYnl0ZVV0aWxzLmZyb21BcnJheShbMTYwXSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgY2FzZSB0b2tlbi5UeXBlLnVpbnQ6XG4gICAgaWYgKHRva2VuJDEudmFsdWUgPCAyNCkge1xuICAgICAgcmV0dXJuIGJ5dGVVdGlscy5mcm9tQXJyYXkoW051bWJlcih0b2tlbiQxLnZhbHVlKV0pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIGNhc2UgdG9rZW4uVHlwZS5uZWdpbnQ6XG4gICAgaWYgKHRva2VuJDEudmFsdWUgPj0gLTI0KSB7XG4gICAgICByZXR1cm4gYnl0ZVV0aWxzLmZyb21BcnJheShbMzEgLSBOdW1iZXIodG9rZW4kMS52YWx1ZSldKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5qdW1wID0ganVtcDtcbmV4cG9ydHMucXVpY2sgPSBxdWljaztcbmV4cG9ydHMucXVpY2tFbmNvZGVUb2tlbiA9IHF1aWNrRW5jb2RlVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihtYWpvciwgbmFtZSwgdGVybWluYWwpIHtcbiAgICB0aGlzLm1ham9yID0gbWFqb3I7XG4gICAgdGhpcy5tYWpvckVuY29kZWQgPSBtYWpvciA8PCA1O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtaW5hbCA9IHRlcm1pbmFsO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBgVHlwZVskeyB0aGlzLm1ham9yIH1dLiR7IHRoaXMubmFtZSB9YDtcbiAgfVxuICBjb21wYXJlKHR5cCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yIDwgdHlwLm1ham9yID8gLTEgOiB0aGlzLm1ham9yID4gdHlwLm1ham9yID8gMSA6IDA7XG4gIH1cbn1cblR5cGUudWludCA9IG5ldyBUeXBlKDAsICd1aW50JywgdHJ1ZSk7XG5UeXBlLm5lZ2ludCA9IG5ldyBUeXBlKDEsICduZWdpbnQnLCB0cnVlKTtcblR5cGUuYnl0ZXMgPSBuZXcgVHlwZSgyLCAnYnl0ZXMnLCB0cnVlKTtcblR5cGUuc3RyaW5nID0gbmV3IFR5cGUoMywgJ3N0cmluZycsIHRydWUpO1xuVHlwZS5hcnJheSA9IG5ldyBUeXBlKDQsICdhcnJheScsIGZhbHNlKTtcblR5cGUubWFwID0gbmV3IFR5cGUoNSwgJ21hcCcsIGZhbHNlKTtcblR5cGUudGFnID0gbmV3IFR5cGUoNiwgJ3RhZycsIGZhbHNlKTtcblR5cGUuZmxvYXQgPSBuZXcgVHlwZSg3LCAnZmxvYXQnLCB0cnVlKTtcblR5cGUuZmFsc2UgPSBuZXcgVHlwZSg3LCAnZmFsc2UnLCB0cnVlKTtcblR5cGUudHJ1ZSA9IG5ldyBUeXBlKDcsICd0cnVlJywgdHJ1ZSk7XG5UeXBlLm51bGwgPSBuZXcgVHlwZSg3LCAnbnVsbCcsIHRydWUpO1xuVHlwZS51bmRlZmluZWQgPSBuZXcgVHlwZSg3LCAndW5kZWZpbmVkJywgdHJ1ZSk7XG5UeXBlLmJyZWFrID0gbmV3IFR5cGUoNywgJ2JyZWFrJywgdHJ1ZSk7XG5jbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHZhbHVlLCBlbmNvZGVkTGVuZ3RoKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5lbmNvZGVkTGVuZ3RoID0gZW5jb2RlZExlbmd0aDtcbiAgICB0aGlzLmVuY29kZWRCeXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYFRva2VuWyR7IHRoaXMudHlwZSB9XS4keyB0aGlzLnZhbHVlIH1gO1xuICB9XG59XG5cbmV4cG9ydHMuVG9rZW4gPSBUb2tlbjtcbmV4cG9ydHMuVHlwZSA9IFR5cGU7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmltZyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudXBsb2FkX19mb3JtIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuLnVwbG9hZF9tZXNzYWdlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4udXBsb2FkX19mcmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTpibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xcbn1cXG5cXG4udXBsb2FkX19wbGFjZWhvbGRlciAsIC51cGxvYWRfX2FydHdvcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG5cXG4uYnRuIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSZWJyYW5kIEJvbGRcXFwiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xcbiAgfVxcbiAgXFxuICAuYnRuLWJnIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuOyAvKiBUaGlzIG1ha2VzIHRoZSBjdXRvdXQgdGV4dCBwb3NzaWJsZSAqL1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIFxcbiAgLmJ0bi1ib3JkZXJlZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcbiAgXFxuICAuYnRuLWxpZ2h0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb251bWVudCBCb2xkXFxcIiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgXFxuICAuYnRuOmhvdmVyLCBidG4tYmc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgfVxcbiAgXFxuICAuYnRuLXNtYWxsIHtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIH1cXG4gIFxcbiAgLmJ0bi1kYXBweSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5idG4taWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtOyBcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMnJlbVxcbiAgfVxcbiAgXFxuICAucm91bmRlZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgfVxcbiAgXFxuICAud2lnZ2xpbmc6aG92ZXIge1xcbiAgICBhbmltYXRpb246IHRhZGE7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICB9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubG9hZGVyIHtcXG4gICAgY29sb3I6ICMxZTUwNTA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB9XFxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDQge1xcbiAgICAwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMC4yZW0sIDJlbSAtMmVtIDAgMGVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgMDtcXG4gICAgfVxcbiAgICAxMi41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMC41ZW0sIDJlbSAtMmVtIDAgMCwgM2VtIDAgMCAwLjJlbSwgMmVtIDJlbSAwIDAsIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xcbiAgICB9XFxuICAgIDM3LjUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAwLCAyZW0gMmVtIDAgMC4yZW0sIDAgM2VtIDAgMGVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLCAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcXG4gICAgfVxcbiAgICA2Mi41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIDAsIC0yZW0gMmVtIDAgMC4yZW0sIC0zZW0gMCAwIDAsIC0yZW0gLTJlbSAwIC0xZW07XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDBlbSAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLjJlbSwgLTJlbSAtMmVtIDAgMDtcXG4gICAgfVxcbiAgICA4Ny41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xcbiAgICB9XFxuICB9XFxuICBAa2V5ZnJhbWVzIGxvYWQ0IHtcXG4gICAgMCUsXFxuICAgIDEwMCUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XFxuICAgIH1cXG4gICAgMTIuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAsIDJlbSAtMmVtIDAgMC4yZW0sIDNlbSAwIDAgMCwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDAgMCAtMWVtLCAtMmVtIC0yZW0gMCAtMWVtO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTAuNWVtLCAyZW0gLTJlbSAwIDAsIDNlbSAwIDAgMC4yZW0sIDJlbSAyZW0gMCAwLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgLTFlbSwgLTNlbSAwIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcXG4gICAgfVxcbiAgICAzNy41JSB7XFxuICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIDBlbSwgMCAzZW0gMCAwLjJlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XFxuICAgIH1cXG4gICAgNjIuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAwLCAtMmVtIDJlbSAwIDAuMmVtLCAtM2VtIDAgMCAwLCAtMmVtIC0yZW0gMCAtMWVtO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XFxuICAgIH1cXG4gICAgODcuNSUge1xcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDAgMCwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMCAwIC0xZW0sIDJlbSAyZW0gMCAtMWVtLCAwIDNlbSAwIC0xZW0sIC0yZW0gMmVtIDAgMCwgLTNlbSAwZW0gMCAwLCAtMmVtIC0yZW0gMCAwLjJlbTtcXG4gICAgfVxcbiAgfVxcbiAgXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGJhc2VYJDEgPSByZXF1aXJlKCcuLi8uLi92ZW5kb3IvYmFzZS14LmpzJyk7XG52YXIgYnl0ZXMgPSByZXF1aXJlKCcuLi9ieXRlcy5qcycpO1xuXG5jbGFzcyBFbmNvZGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJlZml4LCBiYXNlRW5jb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB0aGlzLmJhc2VFbmNvZGUgPSBiYXNlRW5jb2RlO1xuICB9XG4gIGVuY29kZShieXRlcykge1xuICAgIGlmIChieXRlcyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgIHJldHVybiBgJHsgdGhpcy5wcmVmaXggfSR7IHRoaXMuYmFzZUVuY29kZShieXRlcykgfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKCdVbmtub3duIHR5cGUsIG11c3QgYmUgYmluYXJ5IHR5cGUnKTtcbiAgICB9XG4gIH1cbn1cbmNsYXNzIERlY29kZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmVmaXgsIGJhc2VEZWNvZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICAgIHRoaXMuYmFzZURlY29kZSA9IGJhc2VEZWNvZGU7XG4gIH1cbiAgZGVjb2RlKHRleHQpIHtcbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKHRleHRbMF0pIHtcbiAgICAgIGNhc2UgdGhpcy5wcmVmaXg6IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlRGVjb2RlKHRleHQuc2xpY2UoMSkpO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYFVuYWJsZSB0byBkZWNvZGUgbXVsdGliYXNlIHN0cmluZyAkeyBKU09OLnN0cmluZ2lmeSh0ZXh0KSB9LCAkeyB0aGlzLm5hbWUgfSBkZWNvZGVyIG9ubHkgc3VwcG9ydHMgaW5wdXRzIHByZWZpeGVkIHdpdGggJHsgdGhpcy5wcmVmaXggfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKCdDYW4gb25seSBtdWx0aWJhc2UgZGVjb2RlIHN0cmluZ3MnKTtcbiAgICB9XG4gIH1cbiAgb3IoZGVjb2Rlcikge1xuICAgIGNvbnN0IGRlY29kZXJzID0ge1xuICAgICAgW3RoaXMucHJlZml4XTogdGhpcyxcbiAgICAgIC4uLmRlY29kZXIuZGVjb2RlcnMgfHwgeyBbZGVjb2Rlci5wcmVmaXhdOiBkZWNvZGVyIH1cbiAgICB9O1xuICAgIHJldHVybiBuZXcgQ29tcG9zZWREZWNvZGVyKGRlY29kZXJzKTtcbiAgfVxufVxuY2xhc3MgQ29tcG9zZWREZWNvZGVyIHtcbiAgY29uc3RydWN0b3IoZGVjb2RlcnMpIHtcbiAgICB0aGlzLmRlY29kZXJzID0gZGVjb2RlcnM7XG4gIH1cbiAgb3IoZGVjb2Rlcikge1xuICAgIGNvbnN0IG90aGVyID0gZGVjb2Rlci5kZWNvZGVycyB8fCB7IFtkZWNvZGVyLnByZWZpeF06IGRlY29kZXIgfTtcbiAgICByZXR1cm4gbmV3IENvbXBvc2VkRGVjb2Rlcih7XG4gICAgICAuLi50aGlzLmRlY29kZXJzLFxuICAgICAgLi4ub3RoZXJcbiAgICB9KTtcbiAgfVxuICBkZWNvZGUoaW5wdXQpIHtcbiAgICBjb25zdCBwcmVmaXggPSBpbnB1dFswXTtcbiAgICBjb25zdCBkZWNvZGVyID0gdGhpcy5kZWNvZGVyc1twcmVmaXhdO1xuICAgIGlmIChkZWNvZGVyKSB7XG4gICAgICByZXR1cm4gZGVjb2Rlci5kZWNvZGUoaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBSYW5nZUVycm9yKGBVbmFibGUgdG8gZGVjb2RlIG11bHRpYmFzZSBzdHJpbmcgJHsgSlNPTi5zdHJpbmdpZnkoaW5wdXQpIH0sIG9ubHkgaW5wdXRzIHByZWZpeGVkIHdpdGggJHsgT2JqZWN0LmtleXModGhpcy5kZWNvZGVycykgfSBhcmUgc3VwcG9ydGVkYCk7XG4gICAgfVxuICB9XG59XG5jbGFzcyBDb2RlYyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByZWZpeCwgYmFzZUVuY29kZSwgYmFzZURlY29kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgdGhpcy5iYXNlRW5jb2RlID0gYmFzZUVuY29kZTtcbiAgICB0aGlzLmJhc2VEZWNvZGUgPSBiYXNlRGVjb2RlO1xuICAgIHRoaXMuZW5jb2RlciA9IG5ldyBFbmNvZGVyKG5hbWUsIHByZWZpeCwgYmFzZUVuY29kZSk7XG4gICAgdGhpcy5kZWNvZGVyID0gbmV3IERlY29kZXIobmFtZSwgcHJlZml4LCBiYXNlRGVjb2RlKTtcbiAgfVxuICBlbmNvZGUoaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5lbmNvZGVyLmVuY29kZShpbnB1dCk7XG4gIH1cbiAgZGVjb2RlKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjb2Rlci5kZWNvZGUoaW5wdXQpO1xuICB9XG59XG5jb25zdCBmcm9tID0gKHtuYW1lLCBwcmVmaXgsIGVuY29kZSwgZGVjb2RlfSkgPT4gbmV3IENvZGVjKG5hbWUsIHByZWZpeCwgZW5jb2RlLCBkZWNvZGUpO1xuY29uc3QgYmFzZVggPSAoe3ByZWZpeCwgbmFtZSwgYWxwaGFiZXR9KSA9PiB7XG4gIGNvbnN0IHtlbmNvZGUsIGRlY29kZX0gPSBiYXNlWCQxKGFscGhhYmV0LCBuYW1lKTtcbiAgcmV0dXJuIGZyb20oe1xuICAgIHByZWZpeCxcbiAgICBuYW1lLFxuICAgIGVuY29kZSxcbiAgICBkZWNvZGU6IHRleHQgPT4gYnl0ZXMuY29lcmNlKGRlY29kZSh0ZXh0KSlcbiAgfSk7XG59O1xuY29uc3QgZGVjb2RlID0gKHN0cmluZywgYWxwaGFiZXQsIGJpdHNQZXJDaGFyLCBuYW1lKSA9PiB7XG4gIGNvbnN0IGNvZGVzID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxwaGFiZXQubGVuZ3RoOyArK2kpIHtcbiAgICBjb2Rlc1thbHBoYWJldFtpXV0gPSBpO1xuICB9XG4gIGxldCBlbmQgPSBzdHJpbmcubGVuZ3RoO1xuICB3aGlsZSAoc3RyaW5nW2VuZCAtIDFdID09PSAnPScpIHtcbiAgICAtLWVuZDtcbiAgfVxuICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShlbmQgKiBiaXRzUGVyQ2hhciAvIDggfCAwKTtcbiAgbGV0IGJpdHMgPSAwO1xuICBsZXQgYnVmZmVyID0gMDtcbiAgbGV0IHdyaXR0ZW4gPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZDsgKytpKSB7XG4gICAgY29uc3QgdmFsdWUgPSBjb2Rlc1tzdHJpbmdbaV1dO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYE5vbi0keyBuYW1lIH0gY2hhcmFjdGVyYCk7XG4gICAgfVxuICAgIGJ1ZmZlciA9IGJ1ZmZlciA8PCBiaXRzUGVyQ2hhciB8IHZhbHVlO1xuICAgIGJpdHMgKz0gYml0c1BlckNoYXI7XG4gICAgaWYgKGJpdHMgPj0gOCkge1xuICAgICAgYml0cyAtPSA4O1xuICAgICAgb3V0W3dyaXR0ZW4rK10gPSAyNTUgJiBidWZmZXIgPj4gYml0cztcbiAgICB9XG4gIH1cbiAgaWYgKGJpdHMgPj0gYml0c1BlckNoYXIgfHwgMjU1ICYgYnVmZmVyIDw8IDggLSBiaXRzKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBkYXRhJyk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5jb25zdCBlbmNvZGUgPSAoZGF0YSwgYWxwaGFiZXQsIGJpdHNQZXJDaGFyKSA9PiB7XG4gIGNvbnN0IHBhZCA9IGFscGhhYmV0W2FscGhhYmV0Lmxlbmd0aCAtIDFdID09PSAnPSc7XG4gIGNvbnN0IG1hc2sgPSAoMSA8PCBiaXRzUGVyQ2hhcikgLSAxO1xuICBsZXQgb3V0ID0gJyc7XG4gIGxldCBiaXRzID0gMDtcbiAgbGV0IGJ1ZmZlciA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7ICsraSkge1xuICAgIGJ1ZmZlciA9IGJ1ZmZlciA8PCA4IHwgZGF0YVtpXTtcbiAgICBiaXRzICs9IDg7XG4gICAgd2hpbGUgKGJpdHMgPiBiaXRzUGVyQ2hhcikge1xuICAgICAgYml0cyAtPSBiaXRzUGVyQ2hhcjtcbiAgICAgIG91dCArPSBhbHBoYWJldFttYXNrICYgYnVmZmVyID4+IGJpdHNdO1xuICAgIH1cbiAgfVxuICBpZiAoYml0cykge1xuICAgIG91dCArPSBhbHBoYWJldFttYXNrICYgYnVmZmVyIDw8IGJpdHNQZXJDaGFyIC0gYml0c107XG4gIH1cbiAgaWYgKHBhZCkge1xuICAgIHdoaWxlIChvdXQubGVuZ3RoICogYml0c1BlckNoYXIgJiA3KSB7XG4gICAgICBvdXQgKz0gJz0nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufTtcbmNvbnN0IHJmYzQ2NDggPSAoe25hbWUsIHByZWZpeCwgYml0c1BlckNoYXIsIGFscGhhYmV0fSkgPT4ge1xuICByZXR1cm4gZnJvbSh7XG4gICAgcHJlZml4LFxuICAgIG5hbWUsXG4gICAgZW5jb2RlKGlucHV0KSB7XG4gICAgICByZXR1cm4gZW5jb2RlKGlucHV0LCBhbHBoYWJldCwgYml0c1BlckNoYXIpO1xuICAgIH0sXG4gICAgZGVjb2RlKGlucHV0KSB7XG4gICAgICByZXR1cm4gZGVjb2RlKGlucHV0LCBhbHBoYWJldCwgYml0c1BlckNoYXIsIG5hbWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnRzLkNvZGVjID0gQ29kZWM7XG5leHBvcnRzLmJhc2VYID0gYmFzZVg7XG5leHBvcnRzLmZyb20gPSBmcm9tO1xuZXhwb3J0cy5yZmM0NjQ4ID0gcmZjNDY0ODtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGJhc2UgPSByZXF1aXJlKCcuL2Jhc2UuanMnKTtcblxuY29uc3QgYmFzZTMyID0gYmFzZS5yZmM0NjQ4KHtcbiAgcHJlZml4OiAnYicsXG4gIG5hbWU6ICdiYXNlMzInLFxuICBhbHBoYWJldDogJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MjM0NTY3JyxcbiAgYml0c1BlckNoYXI6IDVcbn0pO1xuY29uc3QgYmFzZTMydXBwZXIgPSBiYXNlLnJmYzQ2NDgoe1xuICBwcmVmaXg6ICdCJyxcbiAgbmFtZTogJ2Jhc2UzMnVwcGVyJyxcbiAgYWxwaGFiZXQ6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjIzNDU2NycsXG4gIGJpdHNQZXJDaGFyOiA1XG59KTtcbmNvbnN0IGJhc2UzMnBhZCA9IGJhc2UucmZjNDY0OCh7XG4gIHByZWZpeDogJ2MnLFxuICBuYW1lOiAnYmFzZTMycGFkJyxcbiAgYWxwaGFiZXQ6ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejIzNDU2Nz0nLFxuICBiaXRzUGVyQ2hhcjogNVxufSk7XG5jb25zdCBiYXNlMzJwYWR1cHBlciA9IGJhc2UucmZjNDY0OCh7XG4gIHByZWZpeDogJ0MnLFxuICBuYW1lOiAnYmFzZTMycGFkdXBwZXInLFxuICBhbHBoYWJldDogJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMjM0NTY3PScsXG4gIGJpdHNQZXJDaGFyOiA1XG59KTtcbmNvbnN0IGJhc2UzMmhleCA9IGJhc2UucmZjNDY0OCh7XG4gIHByZWZpeDogJ3YnLFxuICBuYW1lOiAnYmFzZTMyaGV4JyxcbiAgYWxwaGFiZXQ6ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dicsXG4gIGJpdHNQZXJDaGFyOiA1XG59KTtcbmNvbnN0IGJhc2UzMmhleHVwcGVyID0gYmFzZS5yZmM0NjQ4KHtcbiAgcHJlZml4OiAnVicsXG4gIG5hbWU6ICdiYXNlMzJoZXh1cHBlcicsXG4gIGFscGhhYmV0OiAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVYnLFxuICBiaXRzUGVyQ2hhcjogNVxufSk7XG5jb25zdCBiYXNlMzJoZXhwYWQgPSBiYXNlLnJmYzQ2NDgoe1xuICBwcmVmaXg6ICd0JyxcbiAgbmFtZTogJ2Jhc2UzMmhleHBhZCcsXG4gIGFscGhhYmV0OiAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXY9JyxcbiAgYml0c1BlckNoYXI6IDVcbn0pO1xuY29uc3QgYmFzZTMyaGV4cGFkdXBwZXIgPSBiYXNlLnJmYzQ2NDgoe1xuICBwcmVmaXg6ICdUJyxcbiAgbmFtZTogJ2Jhc2UzMmhleHBhZHVwcGVyJyxcbiAgYWxwaGFiZXQ6ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVj0nLFxuICBiaXRzUGVyQ2hhcjogNVxufSk7XG5jb25zdCBiYXNlMzJ6ID0gYmFzZS5yZmM0NjQ4KHtcbiAgcHJlZml4OiAnaCcsXG4gIG5hbWU6ICdiYXNlMzJ6JyxcbiAgYWxwaGFiZXQ6ICd5Ym5kcmZnOGVqa21jcHF4b3QxdXdpc3phMzQ1aDc2OScsXG4gIGJpdHNQZXJDaGFyOiA1XG59KTtcblxuZXhwb3J0cy5iYXNlMzIgPSBiYXNlMzI7XG5leHBvcnRzLmJhc2UzMmhleCA9IGJhc2UzMmhleDtcbmV4cG9ydHMuYmFzZTMyaGV4cGFkID0gYmFzZTMyaGV4cGFkO1xuZXhwb3J0cy5iYXNlMzJoZXhwYWR1cHBlciA9IGJhc2UzMmhleHBhZHVwcGVyO1xuZXhwb3J0cy5iYXNlMzJoZXh1cHBlciA9IGJhc2UzMmhleHVwcGVyO1xuZXhwb3J0cy5iYXNlMzJwYWQgPSBiYXNlMzJwYWQ7XG5leHBvcnRzLmJhc2UzMnBhZHVwcGVyID0gYmFzZTMycGFkdXBwZXI7XG5leHBvcnRzLmJhc2UzMnVwcGVyID0gYmFzZTMydXBwZXI7XG5leHBvcnRzLmJhc2UzMnogPSBiYXNlMzJ6O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgYmFzZSA9IHJlcXVpcmUoJy4vYmFzZS5qcycpO1xuXG5jb25zdCBiYXNlNThidGMgPSBiYXNlLmJhc2VYKHtcbiAgbmFtZTogJ2Jhc2U1OGJ0YycsXG4gIHByZWZpeDogJ3onLFxuICBhbHBoYWJldDogJzEyMzQ1Njc4OUFCQ0RFRkdISktMTU5QUVJTVFVWV1hZWmFiY2RlZmdoaWprbW5vcHFyc3R1dnd4eXonXG59KTtcbmNvbnN0IGJhc2U1OGZsaWNrciA9IGJhc2UuYmFzZVgoe1xuICBuYW1lOiAnYmFzZTU4ZmxpY2tyJyxcbiAgcHJlZml4OiAnWicsXG4gIGFscGhhYmV0OiAnMTIzNDU2Nzg5YWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5ekFCQ0RFRkdISktMTU5QUVJTVFVWV1hZWidcbn0pO1xuXG5leHBvcnRzLmJhc2U1OGJ0YyA9IGJhc2U1OGJ0YztcbmV4cG9ydHMuYmFzZTU4ZmxpY2tyID0gYmFzZTU4ZmxpY2tyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5yZXF1aXJlKCcuL2luZGV4LmpzJyk7XG52YXIgY2lkID0gcmVxdWlyZSgnLi9jaWQuanMnKTtcbnZhciBieXRlcyA9IHJlcXVpcmUoJy4vYnl0ZXMuanMnKTtcblxuY29uc3QgcmVhZG9ubHkgPSAoe2VudW1lcmFibGUgPSB0cnVlLCBjb25maWd1cmFibGUgPSBmYWxzZX0gPSB7fSkgPT4gKHtcbiAgZW51bWVyYWJsZSxcbiAgY29uZmlndXJhYmxlLFxuICB3cml0YWJsZTogZmFsc2Vcbn0pO1xuY29uc3QgbGlua3MgPSBmdW5jdGlvbiogKHNvdXJjZSwgYmFzZSkge1xuICBpZiAoc291cmNlID09IG51bGwpXG4gICAgcmV0dXJuO1xuICBpZiAoc291cmNlIGluc3RhbmNlb2YgVWludDhBcnJheSlcbiAgICByZXR1cm47XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNvdXJjZSkpIHtcbiAgICBjb25zdCBwYXRoID0gW1xuICAgICAgLi4uYmFzZSxcbiAgICAgIGtleVxuICAgIF07XG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBlbGVtZW50XSBvZiB2YWx1ZS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50UGF0aCA9IFtcbiAgICAgICAgICAgIC4uLnBhdGgsXG4gICAgICAgICAgICBpbmRleFxuICAgICAgICAgIF07XG4gICAgICAgICAgY29uc3QgY2lkJDEgPSBjaWQuQ0lELmFzQ0lEKGVsZW1lbnQpO1xuICAgICAgICAgIGlmIChjaWQkMSkge1xuICAgICAgICAgICAgeWllbGQgW1xuICAgICAgICAgICAgICBlbGVtZW50UGF0aC5qb2luKCcvJyksXG4gICAgICAgICAgICAgIGNpZCQxXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB5aWVsZCogbGlua3MoZWxlbWVudCwgZWxlbWVudFBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY2lkJDEgPSBjaWQuQ0lELmFzQ0lEKHZhbHVlKTtcbiAgICAgICAgaWYgKGNpZCQxKSB7XG4gICAgICAgICAgeWllbGQgW1xuICAgICAgICAgICAgcGF0aC5qb2luKCcvJyksXG4gICAgICAgICAgICBjaWQkMVxuICAgICAgICAgIF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeWllbGQqIGxpbmtzKHZhbHVlLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmNvbnN0IHRyZWUgPSBmdW5jdGlvbiogKHNvdXJjZSwgYmFzZSkge1xuICBpZiAoc291cmNlID09IG51bGwpXG4gICAgcmV0dXJuO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzb3VyY2UpKSB7XG4gICAgY29uc3QgcGF0aCA9IFtcbiAgICAgIC4uLmJhc2UsXG4gICAgICBrZXlcbiAgICBdO1xuICAgIHlpZWxkIHBhdGguam9pbignLycpO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICEodmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFjaWQuQ0lELmFzQ0lEKHZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBlbGVtZW50XSBvZiB2YWx1ZS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50UGF0aCA9IFtcbiAgICAgICAgICAgIC4uLnBhdGgsXG4gICAgICAgICAgICBpbmRleFxuICAgICAgICAgIF07XG4gICAgICAgICAgeWllbGQgZWxlbWVudFBhdGguam9pbignLycpO1xuICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgIWNpZC5DSUQuYXNDSUQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHlpZWxkKiB0cmVlKGVsZW1lbnQsIGVsZW1lbnRQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHlpZWxkKiB0cmVlKHZhbHVlLCBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5jb25zdCBnZXQgPSAoc291cmNlLCBwYXRoKSA9PiB7XG4gIGxldCBub2RlID0gc291cmNlO1xuICBmb3IgKGNvbnN0IFtpbmRleCwga2V5XSBvZiBwYXRoLmVudHJpZXMoKSkge1xuICAgIG5vZGUgPSBub2RlW2tleV07XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPYmplY3QgaGFzIG5vIHByb3BlcnR5IGF0ICR7IHBhdGguc2xpY2UoMCwgaW5kZXggKyAxKS5tYXAocGFydCA9PiBgWyR7IEpTT04uc3RyaW5naWZ5KHBhcnQpIH1dYCkuam9pbignJykgfWApO1xuICAgIH1cbiAgICBjb25zdCBjaWQkMSA9IGNpZC5DSUQuYXNDSUQobm9kZSk7XG4gICAgaWYgKGNpZCQxKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogY2lkJDEsXG4gICAgICAgIHJlbWFpbmluZzogcGF0aC5zbGljZShpbmRleCArIDEpLmpvaW4oJy8nKVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdmFsdWU6IG5vZGUgfTtcbn07XG5jbGFzcyBCbG9jayB7XG4gIGNvbnN0cnVjdG9yKHtjaWQsIGJ5dGVzLCB2YWx1ZX0pIHtcbiAgICBpZiAoIWNpZCB8fCAhYnl0ZXMgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudCcpO1xuICAgIHRoaXMuY2lkID0gY2lkO1xuICAgIHRoaXMuYnl0ZXMgPSBieXRlcztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5hc0Jsb2NrID0gdGhpcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBjaWQ6IHJlYWRvbmx5KCksXG4gICAgICBieXRlczogcmVhZG9ubHkoKSxcbiAgICAgIHZhbHVlOiByZWFkb25seSgpLFxuICAgICAgYXNCbG9jazogcmVhZG9ubHkoKVxuICAgIH0pO1xuICB9XG4gIGxpbmtzKCkge1xuICAgIHJldHVybiBsaW5rcyh0aGlzLnZhbHVlLCBbXSk7XG4gIH1cbiAgdHJlZSgpIHtcbiAgICByZXR1cm4gdHJlZSh0aGlzLnZhbHVlLCBbXSk7XG4gIH1cbiAgZ2V0KHBhdGggPSAnLycpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMudmFsdWUsIHBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbikpO1xuICB9XG59XG5jb25zdCBlbmNvZGUgPSBhc3luYyAoe3ZhbHVlLCBjb2RlYywgaGFzaGVyfSkgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQgXCJ2YWx1ZVwiJyk7XG4gIGlmICghY29kZWMgfHwgIWhhc2hlcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ6IGNvZGVjIG9yIGhhc2hlcicpO1xuICBjb25zdCBieXRlcyA9IGNvZGVjLmVuY29kZSh2YWx1ZSk7XG4gIGNvbnN0IGhhc2ggPSBhd2FpdCBoYXNoZXIuZGlnZXN0KGJ5dGVzKTtcbiAgY29uc3QgY2lkJDEgPSBjaWQuQ0lELmNyZWF0ZSgxLCBjb2RlYy5jb2RlLCBoYXNoKTtcbiAgcmV0dXJuIG5ldyBCbG9jayh7XG4gICAgdmFsdWUsXG4gICAgYnl0ZXMsXG4gICAgY2lkOiBjaWQkMVxuICB9KTtcbn07XG5jb25zdCBkZWNvZGUgPSBhc3luYyAoe2J5dGVzLCBjb2RlYywgaGFzaGVyfSkgPT4ge1xuICBpZiAoIWJ5dGVzKVxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudCBcImJ5dGVzXCInKTtcbiAgaWYgKCFjb2RlYyB8fCAhaGFzaGVyKVxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDogY29kZWMgb3IgaGFzaGVyJyk7XG4gIGNvbnN0IHZhbHVlID0gY29kZWMuZGVjb2RlKGJ5dGVzKTtcbiAgY29uc3QgaGFzaCA9IGF3YWl0IGhhc2hlci5kaWdlc3QoYnl0ZXMpO1xuICBjb25zdCBjaWQkMSA9IGNpZC5DSUQuY3JlYXRlKDEsIGNvZGVjLmNvZGUsIGhhc2gpO1xuICByZXR1cm4gbmV3IEJsb2NrKHtcbiAgICB2YWx1ZSxcbiAgICBieXRlcyxcbiAgICBjaWQ6IGNpZCQxXG4gIH0pO1xufTtcbmNvbnN0IGNyZWF0ZVVuc2FmZSA9ICh7XG4gIGJ5dGVzLFxuICBjaWQsXG4gIHZhbHVlOiBtYXliZVZhbHVlLFxuICBjb2RlY1xufSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IG1heWJlVmFsdWUgIT09IHVuZGVmaW5lZCA/IG1heWJlVmFsdWUgOiBjb2RlYyAmJiBjb2RlYy5kZWNvZGUoYnl0ZXMpO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQsIG11c3QgZWl0aGVyIHByb3ZpZGUgXCJ2YWx1ZVwiIG9yIFwiY29kZWNcIicpO1xuICByZXR1cm4gbmV3IEJsb2NrKHtcbiAgICBjaWQsXG4gICAgYnl0ZXMsXG4gICAgdmFsdWVcbiAgfSk7XG59O1xuY29uc3QgY3JlYXRlID0gYXN5bmMgKHtieXRlczogYnl0ZXMkMSwgY2lkLCBoYXNoZXIsIGNvZGVjfSkgPT4ge1xuICBpZiAoIWJ5dGVzJDEpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50IFwiYnl0ZXNcIicpO1xuICBpZiAoIWhhc2hlcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQgXCJoYXNoZXJcIicpO1xuICBjb25zdCB2YWx1ZSA9IGNvZGVjLmRlY29kZShieXRlcyQxKTtcbiAgY29uc3QgaGFzaCA9IGF3YWl0IGhhc2hlci5kaWdlc3QoYnl0ZXMkMSk7XG4gIGlmICghYnl0ZXMuZXF1YWxzKGNpZC5tdWx0aWhhc2guYnl0ZXMsIGhhc2guYnl0ZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDSUQgaGFzaCBkb2VzIG5vdCBtYXRjaCBieXRlcycpO1xuICB9XG4gIHJldHVybiBjcmVhdGVVbnNhZmUoe1xuICAgIGJ5dGVzOiBieXRlcyQxLFxuICAgIGNpZCxcbiAgICB2YWx1ZSxcbiAgICBjb2RlY1xuICB9KTtcbn07XG5cbmV4cG9ydHMuQmxvY2sgPSBCbG9jaztcbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuZXhwb3J0cy5jcmVhdGVVbnNhZmUgPSBjcmVhdGVVbnNhZmU7XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5jb25zdCBlbXB0eSA9IG5ldyBVaW50OEFycmF5KDApO1xuY29uc3QgdG9IZXggPSBkID0+IGQucmVkdWNlKChoZXgsIGJ5dGUpID0+IGhleCArIGJ5dGUudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyksICcnKTtcbmNvbnN0IGZyb21IZXggPSBoZXggPT4ge1xuICBjb25zdCBoZXhlcyA9IGhleC5tYXRjaCgvLi4vZyk7XG4gIHJldHVybiBoZXhlcyA/IG5ldyBVaW50OEFycmF5KGhleGVzLm1hcChiID0+IHBhcnNlSW50KGIsIDE2KSkpIDogZW1wdHk7XG59O1xuY29uc3QgZXF1YWxzID0gKGFhLCBiYikgPT4ge1xuICBpZiAoYWEgPT09IGJiKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAoYWEuYnl0ZUxlbmd0aCAhPT0gYmIuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgYWEuYnl0ZUxlbmd0aDsgaWkrKykge1xuICAgIGlmIChhYVtpaV0gIT09IGJiW2lpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBjb2VyY2UgPSBvID0+IHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBVaW50OEFycmF5ICYmIG8uY29uc3RydWN0b3IubmFtZSA9PT0gJ1VpbnQ4QXJyYXknKVxuICAgIHJldHVybiBvO1xuICBpZiAobyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShvKTtcbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhvKSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShvLmJ1ZmZlciwgby5ieXRlT2Zmc2V0LCBvLmJ5dGVMZW5ndGgpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignVW5rbm93biB0eXBlLCBtdXN0IGJlIGJpbmFyeSB0eXBlJyk7XG59O1xuY29uc3QgaXNCaW5hcnkgPSBvID0+IG8gaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcobyk7XG5jb25zdCBmcm9tU3RyaW5nID0gc3RyID0+IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzdHIpO1xuY29uc3QgdG9TdHJpbmcgPSBiID0+IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShiKTtcblxuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG5leHBvcnRzLmVxdWFscyA9IGVxdWFscztcbmV4cG9ydHMuZnJvbUhleCA9IGZyb21IZXg7XG5leHBvcnRzLmZyb21TdHJpbmcgPSBmcm9tU3RyaW5nO1xuZXhwb3J0cy5pc0JpbmFyeSA9IGlzQmluYXJ5O1xuZXhwb3J0cy50b0hleCA9IHRvSGV4O1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdmFyaW50ID0gcmVxdWlyZSgnLi92YXJpbnQuanMnKTtcbnZhciBkaWdlc3QgPSByZXF1aXJlKCcuL2hhc2hlcy9kaWdlc3QuanMnKTtcbnZhciBiYXNlNTggPSByZXF1aXJlKCcuL2Jhc2VzL2Jhc2U1OC5qcycpO1xudmFyIGJhc2UzMiA9IHJlcXVpcmUoJy4vYmFzZXMvYmFzZTMyLmpzJyk7XG52YXIgYnl0ZXMgPSByZXF1aXJlKCcuL2J5dGVzLmpzJyk7XG5cbmNsYXNzIENJRCB7XG4gIGNvbnN0cnVjdG9yKHZlcnNpb24sIGNvZGUsIG11bHRpaGFzaCwgYnl0ZXMpIHtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5tdWx0aWhhc2ggPSBtdWx0aWhhc2g7XG4gICAgdGhpcy5ieXRlcyA9IGJ5dGVzO1xuICAgIHRoaXMuYnl0ZU9mZnNldCA9IGJ5dGVzLmJ5dGVPZmZzZXQ7XG4gICAgdGhpcy5ieXRlTGVuZ3RoID0gYnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICB0aGlzLmFzQ0lEID0gdGhpcztcbiAgICB0aGlzLl9iYXNlQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgYnl0ZU9mZnNldDogaGlkZGVuLFxuICAgICAgYnl0ZUxlbmd0aDogaGlkZGVuLFxuICAgICAgY29kZTogcmVhZG9ubHksXG4gICAgICB2ZXJzaW9uOiByZWFkb25seSxcbiAgICAgIG11bHRpaGFzaDogcmVhZG9ubHksXG4gICAgICBieXRlczogcmVhZG9ubHksXG4gICAgICBfYmFzZUNhY2hlOiBoaWRkZW4sXG4gICAgICBhc0NJRDogaGlkZGVuXG4gICAgfSk7XG4gIH1cbiAgdG9WMCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudmVyc2lvbikge1xuICAgIGNhc2UgMDoge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IHtjb2RlLCBtdWx0aWhhc2h9ID0gdGhpcztcbiAgICAgICAgaWYgKGNvZGUgIT09IERBR19QQl9DT0RFKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29udmVydCBhIG5vbiBkYWctcGIgQ0lEIHRvIENJRHYwJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG11bHRpaGFzaC5jb2RlICE9PSBTSEFfMjU2X0NPREUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IG5vbiBzaGEyLTI1NiBtdWx0aWhhc2ggQ0lEIHRvIENJRHYwJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENJRC5jcmVhdGVWMChtdWx0aWhhc2gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB0b1YxKCkge1xuICAgIHN3aXRjaCAodGhpcy52ZXJzaW9uKSB7XG4gICAgY2FzZSAwOiB7XG4gICAgICAgIGNvbnN0IHtjb2RlLCBkaWdlc3Q6IGRpZ2VzdCQxfSA9IHRoaXMubXVsdGloYXNoO1xuICAgICAgICBjb25zdCBtdWx0aWhhc2ggPSBkaWdlc3QuY3JlYXRlKGNvZGUsIGRpZ2VzdCQxKTtcbiAgICAgICAgcmV0dXJuIENJRC5jcmVhdGVWMSh0aGlzLmNvZGUsIG11bHRpaGFzaCk7XG4gICAgICB9XG4gICAgY2FzZSAxOiB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYENhbiBub3QgY29udmVydCBDSUQgdmVyc2lvbiAkeyB0aGlzLnZlcnNpb24gfSB0byB2ZXJzaW9uIDAuIFRoaXMgaXMgYSBidWcgcGxlYXNlIHJlcG9ydGApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXIgJiYgdGhpcy5jb2RlID09PSBvdGhlci5jb2RlICYmIHRoaXMudmVyc2lvbiA9PT0gb3RoZXIudmVyc2lvbiAmJiBkaWdlc3QuZXF1YWxzKHRoaXMubXVsdGloYXNoLCBvdGhlci5tdWx0aWhhc2gpO1xuICB9XG4gIHRvU3RyaW5nKGJhc2UpIHtcbiAgICBjb25zdCB7Ynl0ZXMsIHZlcnNpb24sIF9iYXNlQ2FjaGV9ID0gdGhpcztcbiAgICBzd2l0Y2ggKHZlcnNpb24pIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gdG9TdHJpbmdWMChieXRlcywgX2Jhc2VDYWNoZSwgYmFzZSB8fCBiYXNlNTguYmFzZTU4YnRjLmVuY29kZXIpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdG9TdHJpbmdWMShieXRlcywgX2Jhc2VDYWNoZSwgYmFzZSB8fCBiYXNlMzIuYmFzZTMyLmVuY29kZXIpO1xuICAgIH1cbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvbixcbiAgICAgIGhhc2g6IHRoaXMubXVsdGloYXNoLmJ5dGVzXG4gICAgfTtcbiAgfVxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuICdDSUQnO1xuICB9XG4gIFtTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpXSgpIHtcbiAgICByZXR1cm4gJ0NJRCgnICsgdGhpcy50b1N0cmluZygpICsgJyknO1xuICB9XG4gIHN0YXRpYyBpc0NJRCh2YWx1ZSkge1xuICAgIGRlcHJlY2F0ZSgvXjBcXC4wLywgSVNfQ0lEX0RFUFJFQ0FUSU9OKTtcbiAgICByZXR1cm4gISEodmFsdWUgJiYgKHZhbHVlW2NpZFN5bWJvbF0gfHwgdmFsdWUuYXNDSUQgPT09IHZhbHVlKSk7XG4gIH1cbiAgZ2V0IHRvQmFzZUVuY29kZWRTdHJpbmcoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEZXByZWNhdGVkLCB1c2UgLnRvU3RyaW5nKCknKTtcbiAgfVxuICBnZXQgY29kZWMoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcImNvZGVjXCIgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCwgdXNlIGludGVnZXIgXCJjb2RlXCIgcHJvcGVydHkgaW5zdGVhZCcpO1xuICB9XG4gIGdldCBidWZmZXIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEZXByZWNhdGVkIC5idWZmZXIgcHJvcGVydHksIHVzZSAuYnl0ZXMgdG8gZ2V0IFVpbnQ4QXJyYXkgaW5zdGVhZCcpO1xuICB9XG4gIGdldCBtdWx0aWJhc2VOYW1lKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignXCJtdWx0aWJhc2VOYW1lXCIgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCcpO1xuICB9XG4gIGdldCBwcmVmaXgoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcInByZWZpeFwiIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQnKTtcbiAgfVxuICBzdGF0aWMgYXNDSUQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBDSUQpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUuYXNDSUQgPT09IHZhbHVlKSB7XG4gICAgICBjb25zdCB7dmVyc2lvbiwgY29kZSwgbXVsdGloYXNoLCBieXRlc30gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBuZXcgQ0lEKHZlcnNpb24sIGNvZGUsIG11bHRpaGFzaCwgYnl0ZXMgfHwgZW5jb2RlQ0lEKHZlcnNpb24sIGNvZGUsIG11bHRpaGFzaC5ieXRlcykpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZVtjaWRTeW1ib2xdID09PSB0cnVlKSB7XG4gICAgICBjb25zdCB7dmVyc2lvbiwgbXVsdGloYXNoLCBjb2RlfSA9IHZhbHVlO1xuICAgICAgY29uc3QgZGlnZXN0JDEgPSBkaWdlc3QuZGVjb2RlKG11bHRpaGFzaCk7XG4gICAgICByZXR1cm4gQ0lELmNyZWF0ZSh2ZXJzaW9uLCBjb2RlLCBkaWdlc3QkMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgY3JlYXRlKHZlcnNpb24sIGNvZGUsIGRpZ2VzdCkge1xuICAgIGlmICh0eXBlb2YgY29kZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3RyaW5nIGNvZGVjcyBhcmUgbm8gbG9uZ2VyIHN1cHBvcnRlZCcpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHZlcnNpb24pIHtcbiAgICBjYXNlIDA6IHtcbiAgICAgICAgaWYgKGNvZGUgIT09IERBR19QQl9DT0RFKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWZXJzaW9uIDAgQ0lEIG11c3QgdXNlIGRhZy1wYiAoY29kZTogJHsgREFHX1BCX0NPREUgfSkgYmxvY2sgZW5jb2RpbmdgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IENJRCh2ZXJzaW9uLCBjb2RlLCBkaWdlc3QsIGRpZ2VzdC5ieXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBjYXNlIDE6IHtcbiAgICAgICAgY29uc3QgYnl0ZXMgPSBlbmNvZGVDSUQodmVyc2lvbiwgY29kZSwgZGlnZXN0LmJ5dGVzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDSUQodmVyc2lvbiwgY29kZSwgZGlnZXN0LCBieXRlcyk7XG4gICAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmVyc2lvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgY3JlYXRlVjAoZGlnZXN0KSB7XG4gICAgcmV0dXJuIENJRC5jcmVhdGUoMCwgREFHX1BCX0NPREUsIGRpZ2VzdCk7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZVYxKGNvZGUsIGRpZ2VzdCkge1xuICAgIHJldHVybiBDSUQuY3JlYXRlKDEsIGNvZGUsIGRpZ2VzdCk7XG4gIH1cbiAgc3RhdGljIGRlY29kZShieXRlcykge1xuICAgIGNvbnN0IFtjaWQsIHJlbWFpbmRlcl0gPSBDSUQuZGVjb2RlRmlyc3QoYnl0ZXMpO1xuICAgIGlmIChyZW1haW5kZXIubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBsZW5ndGgnKTtcbiAgICB9XG4gICAgcmV0dXJuIGNpZDtcbiAgfVxuICBzdGF0aWMgZGVjb2RlRmlyc3QoYnl0ZXMkMSkge1xuICAgIGNvbnN0IHNwZWNzID0gQ0lELmluc3BlY3RCeXRlcyhieXRlcyQxKTtcbiAgICBjb25zdCBwcmVmaXhTaXplID0gc3BlY3Muc2l6ZSAtIHNwZWNzLm11bHRpaGFzaFNpemU7XG4gICAgY29uc3QgbXVsdGloYXNoQnl0ZXMgPSBieXRlcy5jb2VyY2UoYnl0ZXMkMS5zdWJhcnJheShwcmVmaXhTaXplLCBwcmVmaXhTaXplICsgc3BlY3MubXVsdGloYXNoU2l6ZSkpO1xuICAgIGlmIChtdWx0aWhhc2hCeXRlcy5ieXRlTGVuZ3RoICE9PSBzcGVjcy5tdWx0aWhhc2hTaXplKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBsZW5ndGgnKTtcbiAgICB9XG4gICAgY29uc3QgZGlnZXN0Qnl0ZXMgPSBtdWx0aWhhc2hCeXRlcy5zdWJhcnJheShzcGVjcy5tdWx0aWhhc2hTaXplIC0gc3BlY3MuZGlnZXN0U2l6ZSk7XG4gICAgY29uc3QgZGlnZXN0JDEgPSBuZXcgZGlnZXN0LkRpZ2VzdChzcGVjcy5tdWx0aWhhc2hDb2RlLCBzcGVjcy5kaWdlc3RTaXplLCBkaWdlc3RCeXRlcywgbXVsdGloYXNoQnl0ZXMpO1xuICAgIGNvbnN0IGNpZCA9IHNwZWNzLnZlcnNpb24gPT09IDAgPyBDSUQuY3JlYXRlVjAoZGlnZXN0JDEpIDogQ0lELmNyZWF0ZVYxKHNwZWNzLmNvZGVjLCBkaWdlc3QkMSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNpZCxcbiAgICAgIGJ5dGVzJDEuc3ViYXJyYXkoc3BlY3Muc2l6ZSlcbiAgICBdO1xuICB9XG4gIHN0YXRpYyBpbnNwZWN0Qnl0ZXMoaW5pdGlhbEJ5dGVzKSB7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IFtpLCBsZW5ndGhdID0gdmFyaW50LmRlY29kZShpbml0aWFsQnl0ZXMuc3ViYXJyYXkob2Zmc2V0KSk7XG4gICAgICBvZmZzZXQgKz0gbGVuZ3RoO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfTtcbiAgICBsZXQgdmVyc2lvbiA9IG5leHQoKTtcbiAgICBsZXQgY29kZWMgPSBEQUdfUEJfQ09ERTtcbiAgICBpZiAodmVyc2lvbiA9PT0gMTgpIHtcbiAgICAgIHZlcnNpb24gPSAwO1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9IGVsc2UgaWYgKHZlcnNpb24gPT09IDEpIHtcbiAgICAgIGNvZGVjID0gbmV4dCgpO1xuICAgIH1cbiAgICBpZiAodmVyc2lvbiAhPT0gMCAmJiB2ZXJzaW9uICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgSW52YWxpZCBDSUQgdmVyc2lvbiAkeyB2ZXJzaW9uIH1gKTtcbiAgICB9XG4gICAgY29uc3QgcHJlZml4U2l6ZSA9IG9mZnNldDtcbiAgICBjb25zdCBtdWx0aWhhc2hDb2RlID0gbmV4dCgpO1xuICAgIGNvbnN0IGRpZ2VzdFNpemUgPSBuZXh0KCk7XG4gICAgY29uc3Qgc2l6ZSA9IG9mZnNldCArIGRpZ2VzdFNpemU7XG4gICAgY29uc3QgbXVsdGloYXNoU2l6ZSA9IHNpemUgLSBwcmVmaXhTaXplO1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uLFxuICAgICAgY29kZWMsXG4gICAgICBtdWx0aWhhc2hDb2RlLFxuICAgICAgZGlnZXN0U2l6ZSxcbiAgICAgIG11bHRpaGFzaFNpemUsXG4gICAgICBzaXplXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgcGFyc2Uoc291cmNlLCBiYXNlKSB7XG4gICAgY29uc3QgW3ByZWZpeCwgYnl0ZXNdID0gcGFyc2VDSUR0b0J5dGVzKHNvdXJjZSwgYmFzZSk7XG4gICAgY29uc3QgY2lkID0gQ0lELmRlY29kZShieXRlcyk7XG4gICAgY2lkLl9iYXNlQ2FjaGUuc2V0KHByZWZpeCwgc291cmNlKTtcbiAgICByZXR1cm4gY2lkO1xuICB9XG59XG5jb25zdCBwYXJzZUNJRHRvQnl0ZXMgPSAoc291cmNlLCBiYXNlKSA9PiB7XG4gIHN3aXRjaCAoc291cmNlWzBdKSB7XG4gIGNhc2UgJ1EnOiB7XG4gICAgICBjb25zdCBkZWNvZGVyID0gYmFzZSB8fCBiYXNlNTguYmFzZTU4YnRjO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgYmFzZTU4LmJhc2U1OGJ0Yy5wcmVmaXgsXG4gICAgICAgIGRlY29kZXIuZGVjb2RlKGAkeyBiYXNlNTguYmFzZTU4YnRjLnByZWZpeCB9JHsgc291cmNlIH1gKVxuICAgICAgXTtcbiAgICB9XG4gIGNhc2UgYmFzZTU4LmJhc2U1OGJ0Yy5wcmVmaXg6IHtcbiAgICAgIGNvbnN0IGRlY29kZXIgPSBiYXNlIHx8IGJhc2U1OC5iYXNlNThidGM7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBiYXNlNTguYmFzZTU4YnRjLnByZWZpeCxcbiAgICAgICAgZGVjb2Rlci5kZWNvZGUoc291cmNlKVxuICAgICAgXTtcbiAgICB9XG4gIGNhc2UgYmFzZTMyLmJhc2UzMi5wcmVmaXg6IHtcbiAgICAgIGNvbnN0IGRlY29kZXIgPSBiYXNlIHx8IGJhc2UzMi5iYXNlMzI7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBiYXNlMzIuYmFzZTMyLnByZWZpeCxcbiAgICAgICAgZGVjb2Rlci5kZWNvZGUoc291cmNlKVxuICAgICAgXTtcbiAgICB9XG4gIGRlZmF1bHQ6IHtcbiAgICAgIGlmIChiYXNlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1RvIHBhcnNlIG5vbiBiYXNlMzIgb3IgYmFzZTU4YnRjIGVuY29kZWQgQ0lEIG11bHRpYmFzZSBkZWNvZGVyIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXG4gICAgICAgIHNvdXJjZVswXSxcbiAgICAgICAgYmFzZS5kZWNvZGUoc291cmNlKVxuICAgICAgXTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCB0b1N0cmluZ1YwID0gKGJ5dGVzLCBjYWNoZSwgYmFzZSkgPT4ge1xuICBjb25zdCB7cHJlZml4fSA9IGJhc2U7XG4gIGlmIChwcmVmaXggIT09IGJhc2U1OC5iYXNlNThidGMucHJlZml4KSB7XG4gICAgdGhyb3cgRXJyb3IoYENhbm5vdCBzdHJpbmcgZW5jb2RlIFYwIGluICR7IGJhc2UubmFtZSB9IGVuY29kaW5nYCk7XG4gIH1cbiAgY29uc3QgY2lkID0gY2FjaGUuZ2V0KHByZWZpeCk7XG4gIGlmIChjaWQgPT0gbnVsbCkge1xuICAgIGNvbnN0IGNpZCA9IGJhc2UuZW5jb2RlKGJ5dGVzKS5zbGljZSgxKTtcbiAgICBjYWNoZS5zZXQocHJlZml4LCBjaWQpO1xuICAgIHJldHVybiBjaWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNpZDtcbiAgfVxufTtcbmNvbnN0IHRvU3RyaW5nVjEgPSAoYnl0ZXMsIGNhY2hlLCBiYXNlKSA9PiB7XG4gIGNvbnN0IHtwcmVmaXh9ID0gYmFzZTtcbiAgY29uc3QgY2lkID0gY2FjaGUuZ2V0KHByZWZpeCk7XG4gIGlmIChjaWQgPT0gbnVsbCkge1xuICAgIGNvbnN0IGNpZCA9IGJhc2UuZW5jb2RlKGJ5dGVzKTtcbiAgICBjYWNoZS5zZXQocHJlZml4LCBjaWQpO1xuICAgIHJldHVybiBjaWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNpZDtcbiAgfVxufTtcbmNvbnN0IERBR19QQl9DT0RFID0gMTEyO1xuY29uc3QgU0hBXzI1Nl9DT0RFID0gMTg7XG5jb25zdCBlbmNvZGVDSUQgPSAodmVyc2lvbiwgY29kZSwgbXVsdGloYXNoKSA9PiB7XG4gIGNvbnN0IGNvZGVPZmZzZXQgPSB2YXJpbnQuZW5jb2RpbmdMZW5ndGgodmVyc2lvbik7XG4gIGNvbnN0IGhhc2hPZmZzZXQgPSBjb2RlT2Zmc2V0ICsgdmFyaW50LmVuY29kaW5nTGVuZ3RoKGNvZGUpO1xuICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGhhc2hPZmZzZXQgKyBtdWx0aWhhc2guYnl0ZUxlbmd0aCk7XG4gIHZhcmludC5lbmNvZGVUbyh2ZXJzaW9uLCBieXRlcywgMCk7XG4gIHZhcmludC5lbmNvZGVUbyhjb2RlLCBieXRlcywgY29kZU9mZnNldCk7XG4gIGJ5dGVzLnNldChtdWx0aWhhc2gsIGhhc2hPZmZzZXQpO1xuICByZXR1cm4gYnl0ZXM7XG59O1xuY29uc3QgY2lkU3ltYm9sID0gU3ltYm9sLmZvcignQGlwbGQvanMtY2lkL0NJRCcpO1xuY29uc3QgcmVhZG9ubHkgPSB7XG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgZW51bWVyYWJsZTogdHJ1ZVxufTtcbmNvbnN0IGhpZGRlbiA9IHtcbiAgd3JpdGFibGU6IGZhbHNlLFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZVxufTtcbmNvbnN0IHZlcnNpb24gPSAnMC4wLjAtZGV2JztcbmNvbnN0IGRlcHJlY2F0ZSA9IChyYW5nZSwgbWVzc2FnZSkgPT4ge1xuICBpZiAocmFuZ2UudGVzdCh2ZXJzaW9uKSkge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn07XG5jb25zdCBJU19DSURfREVQUkVDQVRJT04gPSBgQ0lELmlzQ0lEKHYpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuRm9sbG93aW5nIGNvZGUgcGF0dGVybjpcblxuaWYgKENJRC5pc0NJRCh2YWx1ZSkpIHtcbiAgZG9Tb21ldGhpbmdXaXRoQ0lEKHZhbHVlKVxufVxuXG5JcyByZXBsYWNlZCB3aXRoOlxuXG5jb25zdCBjaWQgPSBDSUQuYXNDSUQodmFsdWUpXG5pZiAoY2lkKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byB1c2UgY2lkIGluc3RlYWQgb2YgdmFsdWVcbiAgZG9Tb21ldGhpbmdXaXRoQ0lEKGNpZClcbn1cbmA7XG5cbmV4cG9ydHMuQ0lEID0gQ0lEO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgYnl0ZXMgPSByZXF1aXJlKCcuLi9ieXRlcy5qcycpO1xuXG5jb25zdCBuYW1lID0gJ3Jhdyc7XG5jb25zdCBjb2RlID0gODU7XG5jb25zdCBlbmNvZGUgPSBub2RlID0+IGJ5dGVzLmNvZXJjZShub2RlKTtcbmNvbnN0IGRlY29kZSA9IGRhdGEgPT4gYnl0ZXMuY29lcmNlKGRhdGEpO1xuXG5leHBvcnRzLmNvZGUgPSBjb2RlO1xuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbmV4cG9ydHMubmFtZSA9IG5hbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBieXRlcyA9IHJlcXVpcmUoJy4uL2J5dGVzLmpzJyk7XG52YXIgdmFyaW50ID0gcmVxdWlyZSgnLi4vdmFyaW50LmpzJyk7XG5cbmNvbnN0IGNyZWF0ZSA9IChjb2RlLCBkaWdlc3QpID0+IHtcbiAgY29uc3Qgc2l6ZSA9IGRpZ2VzdC5ieXRlTGVuZ3RoO1xuICBjb25zdCBzaXplT2Zmc2V0ID0gdmFyaW50LmVuY29kaW5nTGVuZ3RoKGNvZGUpO1xuICBjb25zdCBkaWdlc3RPZmZzZXQgPSBzaXplT2Zmc2V0ICsgdmFyaW50LmVuY29kaW5nTGVuZ3RoKHNpemUpO1xuICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGRpZ2VzdE9mZnNldCArIHNpemUpO1xuICB2YXJpbnQuZW5jb2RlVG8oY29kZSwgYnl0ZXMsIDApO1xuICB2YXJpbnQuZW5jb2RlVG8oc2l6ZSwgYnl0ZXMsIHNpemVPZmZzZXQpO1xuICBieXRlcy5zZXQoZGlnZXN0LCBkaWdlc3RPZmZzZXQpO1xuICByZXR1cm4gbmV3IERpZ2VzdChjb2RlLCBzaXplLCBkaWdlc3QsIGJ5dGVzKTtcbn07XG5jb25zdCBkZWNvZGUgPSBtdWx0aWhhc2ggPT4ge1xuICBjb25zdCBieXRlcyQxID0gYnl0ZXMuY29lcmNlKG11bHRpaGFzaCk7XG4gIGNvbnN0IFtjb2RlLCBzaXplT2Zmc2V0XSA9IHZhcmludC5kZWNvZGUoYnl0ZXMkMSk7XG4gIGNvbnN0IFtzaXplLCBkaWdlc3RPZmZzZXRdID0gdmFyaW50LmRlY29kZShieXRlcyQxLnN1YmFycmF5KHNpemVPZmZzZXQpKTtcbiAgY29uc3QgZGlnZXN0ID0gYnl0ZXMkMS5zdWJhcnJheShzaXplT2Zmc2V0ICsgZGlnZXN0T2Zmc2V0KTtcbiAgaWYgKGRpZ2VzdC5ieXRlTGVuZ3RoICE9PSBzaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgbGVuZ3RoJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBEaWdlc3QoY29kZSwgc2l6ZSwgZGlnZXN0LCBieXRlcyQxKTtcbn07XG5jb25zdCBlcXVhbHMgPSAoYSwgYikgPT4ge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhLmNvZGUgPT09IGIuY29kZSAmJiBhLnNpemUgPT09IGIuc2l6ZSAmJiBieXRlcy5lcXVhbHMoYS5ieXRlcywgYi5ieXRlcyk7XG4gIH1cbn07XG5jbGFzcyBEaWdlc3Qge1xuICBjb25zdHJ1Y3Rvcihjb2RlLCBzaXplLCBkaWdlc3QsIGJ5dGVzKSB7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuZGlnZXN0ID0gZGlnZXN0O1xuICAgIHRoaXMuYnl0ZXMgPSBieXRlcztcbiAgfVxufVxuXG5leHBvcnRzLkRpZ2VzdCA9IERpZ2VzdDtcbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5leHBvcnRzLmVxdWFscyA9IGVxdWFscztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGRpZ2VzdCA9IHJlcXVpcmUoJy4vZGlnZXN0LmpzJyk7XG5cbmNvbnN0IGZyb20gPSAoe25hbWUsIGNvZGUsIGVuY29kZX0pID0+IG5ldyBIYXNoZXIobmFtZSwgY29kZSwgZW5jb2RlKTtcbmNsYXNzIEhhc2hlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNvZGUsIGVuY29kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLmVuY29kZSA9IGVuY29kZTtcbiAgfVxuICBhc3luYyBkaWdlc3QoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICBjb25zdCBkaWdlc3QkMSA9IGF3YWl0IHRoaXMuZW5jb2RlKGlucHV0KTtcbiAgICAgIHJldHVybiBkaWdlc3QuY3JlYXRlKHRoaXMuY29kZSwgZGlnZXN0JDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignVW5rbm93biB0eXBlLCBtdXN0IGJlIGJpbmFyeSB0eXBlJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuSGFzaGVyID0gSGFzaGVyO1xuZXhwb3J0cy5mcm9tID0gZnJvbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNpZCA9IHJlcXVpcmUoJy4vY2lkLmpzJyk7XG52YXIgdmFyaW50ID0gcmVxdWlyZSgnLi92YXJpbnQuanMnKTtcbnZhciBieXRlcyA9IHJlcXVpcmUoJy4vYnl0ZXMuanMnKTtcbnZhciBoYXNoZXIgPSByZXF1aXJlKCcuL2hhc2hlcy9oYXNoZXIuanMnKTtcbnZhciBkaWdlc3QgPSByZXF1aXJlKCcuL2hhc2hlcy9kaWdlc3QuanMnKTtcblxuXG5cbmV4cG9ydHMuQ0lEID0gY2lkLkNJRDtcbmV4cG9ydHMudmFyaW50ID0gdmFyaW50O1xuZXhwb3J0cy5ieXRlcyA9IGJ5dGVzO1xuZXhwb3J0cy5oYXNoZXIgPSBoYXNoZXI7XG5leHBvcnRzLmRpZ2VzdCA9IGRpZ2VzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHZhcmludCQxID0gcmVxdWlyZSgnLi4vdmVuZG9yL3ZhcmludC5qcycpO1xuXG5jb25zdCBkZWNvZGUgPSBkYXRhID0+IHtcbiAgY29uc3QgY29kZSA9IHZhcmludCQxLmRlY29kZShkYXRhKTtcbiAgcmV0dXJuIFtcbiAgICBjb2RlLFxuICAgIHZhcmludCQxLmRlY29kZS5ieXRlc1xuICBdO1xufTtcbmNvbnN0IGVuY29kZVRvID0gKGludCwgdGFyZ2V0LCBvZmZzZXQgPSAwKSA9PiB7XG4gIHZhcmludCQxLmVuY29kZShpbnQsIHRhcmdldCwgb2Zmc2V0KTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5jb25zdCBlbmNvZGluZ0xlbmd0aCA9IGludCA9PiB7XG4gIHJldHVybiB2YXJpbnQkMS5lbmNvZGluZ0xlbmd0aChpbnQpO1xufTtcblxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5leHBvcnRzLmVuY29kZVRvID0gZW5jb2RlVG87XG5leHBvcnRzLmVuY29kaW5nTGVuZ3RoID0gZW5jb2RpbmdMZW5ndGg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGJhc2UoQUxQSEFCRVQsIG5hbWUpIHtcbiAgaWYgKEFMUEhBQkVULmxlbmd0aCA+PSAyNTUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHBoYWJldCB0b28gbG9uZycpO1xuICB9XG4gIHZhciBCQVNFX01BUCA9IG5ldyBVaW50OEFycmF5KDI1Nik7XG4gIGZvciAodmFyIGogPSAwOyBqIDwgQkFTRV9NQVAubGVuZ3RoOyBqKyspIHtcbiAgICBCQVNFX01BUFtqXSA9IDI1NTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IEFMUEhBQkVULmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHggPSBBTFBIQUJFVC5jaGFyQXQoaSk7XG4gICAgdmFyIHhjID0geC5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChCQVNFX01BUFt4Y10gIT09IDI1NSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcih4ICsgJyBpcyBhbWJpZ3VvdXMnKTtcbiAgICB9XG4gICAgQkFTRV9NQVBbeGNdID0gaTtcbiAgfVxuICB2YXIgQkFTRSA9IEFMUEhBQkVULmxlbmd0aDtcbiAgdmFyIExFQURFUiA9IEFMUEhBQkVULmNoYXJBdCgwKTtcbiAgdmFyIEZBQ1RPUiA9IE1hdGgubG9nKEJBU0UpIC8gTWF0aC5sb2coMjU2KTtcbiAgdmFyIGlGQUNUT1IgPSBNYXRoLmxvZygyNTYpIC8gTWF0aC5sb2coQkFTRSk7XG4gIGZ1bmN0aW9uIGVuY29kZShzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgVWludDhBcnJheSk7XG4gICAgZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHNvdXJjZSkpIHtcbiAgICAgIHNvdXJjZSA9IG5ldyBVaW50OEFycmF5KHNvdXJjZS5idWZmZXIsIHNvdXJjZS5ieXRlT2Zmc2V0LCBzb3VyY2UuYnl0ZUxlbmd0aCk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHNvdXJjZSA9IFVpbnQ4QXJyYXkuZnJvbShzb3VyY2UpO1xuICAgIH1cbiAgICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgVWludDhBcnJheScpO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgemVyb2VzID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgcGJlZ2luID0gMDtcbiAgICB2YXIgcGVuZCA9IHNvdXJjZS5sZW5ndGg7XG4gICAgd2hpbGUgKHBiZWdpbiAhPT0gcGVuZCAmJiBzb3VyY2VbcGJlZ2luXSA9PT0gMCkge1xuICAgICAgcGJlZ2luKys7XG4gICAgICB6ZXJvZXMrKztcbiAgICB9XG4gICAgdmFyIHNpemUgPSAocGVuZCAtIHBiZWdpbikgKiBpRkFDVE9SICsgMSA+Pj4gMDtcbiAgICB2YXIgYjU4ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgd2hpbGUgKHBiZWdpbiAhPT0gcGVuZCkge1xuICAgICAgdmFyIGNhcnJ5ID0gc291cmNlW3BiZWdpbl07XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICBmb3IgKHZhciBpdDEgPSBzaXplIC0gMTsgKGNhcnJ5ICE9PSAwIHx8IGkgPCBsZW5ndGgpICYmIGl0MSAhPT0gLTE7IGl0MS0tLCBpKyspIHtcbiAgICAgICAgY2FycnkgKz0gMjU2ICogYjU4W2l0MV0gPj4+IDA7XG4gICAgICAgIGI1OFtpdDFdID0gY2FycnkgJSBCQVNFID4+PiAwO1xuICAgICAgICBjYXJyeSA9IGNhcnJ5IC8gQkFTRSA+Pj4gMDtcbiAgICAgIH1cbiAgICAgIGlmIChjYXJyeSAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vbi16ZXJvIGNhcnJ5Jyk7XG4gICAgICB9XG4gICAgICBsZW5ndGggPSBpO1xuICAgICAgcGJlZ2luKys7XG4gICAgfVxuICAgIHZhciBpdDIgPSBzaXplIC0gbGVuZ3RoO1xuICAgIHdoaWxlIChpdDIgIT09IHNpemUgJiYgYjU4W2l0Ml0gPT09IDApIHtcbiAgICAgIGl0MisrO1xuICAgIH1cbiAgICB2YXIgc3RyID0gTEVBREVSLnJlcGVhdCh6ZXJvZXMpO1xuICAgIGZvciAoOyBpdDIgPCBzaXplOyArK2l0Mikge1xuICAgICAgc3RyICs9IEFMUEhBQkVULmNoYXJBdChiNThbaXQyXSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgZnVuY3Rpb24gZGVjb2RlVW5zYWZlKHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgU3RyaW5nJyk7XG4gICAgfVxuICAgIGlmIChzb3VyY2UubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoKTtcbiAgICB9XG4gICAgdmFyIHBzeiA9IDA7XG4gICAgaWYgKHNvdXJjZVtwc3pdID09PSAnICcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHplcm9lcyA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgd2hpbGUgKHNvdXJjZVtwc3pdID09PSBMRUFERVIpIHtcbiAgICAgIHplcm9lcysrO1xuICAgICAgcHN6Kys7XG4gICAgfVxuICAgIHZhciBzaXplID0gKHNvdXJjZS5sZW5ndGggLSBwc3opICogRkFDVE9SICsgMSA+Pj4gMDtcbiAgICB2YXIgYjI1NiA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICAgIHdoaWxlIChzb3VyY2VbcHN6XSkge1xuICAgICAgdmFyIGNhcnJ5ID0gQkFTRV9NQVBbc291cmNlLmNoYXJDb2RlQXQocHN6KV07XG4gICAgICBpZiAoY2FycnkgPT09IDI1NSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICBmb3IgKHZhciBpdDMgPSBzaXplIC0gMTsgKGNhcnJ5ICE9PSAwIHx8IGkgPCBsZW5ndGgpICYmIGl0MyAhPT0gLTE7IGl0My0tLCBpKyspIHtcbiAgICAgICAgY2FycnkgKz0gQkFTRSAqIGIyNTZbaXQzXSA+Pj4gMDtcbiAgICAgICAgYjI1NltpdDNdID0gY2FycnkgJSAyNTYgPj4+IDA7XG4gICAgICAgIGNhcnJ5ID0gY2FycnkgLyAyNTYgPj4+IDA7XG4gICAgICB9XG4gICAgICBpZiAoY2FycnkgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb24temVybyBjYXJyeScpO1xuICAgICAgfVxuICAgICAgbGVuZ3RoID0gaTtcbiAgICAgIHBzeisrO1xuICAgIH1cbiAgICBpZiAoc291cmNlW3Bzel0gPT09ICcgJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaXQ0ID0gc2l6ZSAtIGxlbmd0aDtcbiAgICB3aGlsZSAoaXQ0ICE9PSBzaXplICYmIGIyNTZbaXQ0XSA9PT0gMCkge1xuICAgICAgaXQ0Kys7XG4gICAgfVxuICAgIHZhciB2Y2ggPSBuZXcgVWludDhBcnJheSh6ZXJvZXMgKyAoc2l6ZSAtIGl0NCkpO1xuICAgIHZhciBqID0gemVyb2VzO1xuICAgIHdoaWxlIChpdDQgIT09IHNpemUpIHtcbiAgICAgIHZjaFtqKytdID0gYjI1NltpdDQrK107XG4gICAgfVxuICAgIHJldHVybiB2Y2g7XG4gIH1cbiAgZnVuY3Rpb24gZGVjb2RlKHN0cmluZykge1xuICAgIHZhciBidWZmZXIgPSBkZWNvZGVVbnNhZmUoc3RyaW5nKTtcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vbi0keyBuYW1lIH0gY2hhcmFjdGVyYCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmNvZGU6IGVuY29kZSxcbiAgICBkZWNvZGVVbnNhZmU6IGRlY29kZVVuc2FmZSxcbiAgICBkZWNvZGU6IGRlY29kZVxuICB9O1xufVxudmFyIHNyYyA9IGJhc2U7XG52YXIgX2JycnBfX211bHRpZm9ybWF0c19zY29wZV9iYXNlWCA9IHNyYztcblxubW9kdWxlLmV4cG9ydHMgPSBfYnJycF9fbXVsdGlmb3JtYXRzX3Njb3BlX2Jhc2VYO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5jb2RlXzEgPSBlbmNvZGU7XG52YXIgTVNCID0gMTI4LCBSRVNUID0gMTI3LCBNU0JBTEwgPSB+UkVTVCwgSU5UID0gTWF0aC5wb3coMiwgMzEpO1xuZnVuY3Rpb24gZW5jb2RlKG51bSwgb3V0LCBvZmZzZXQpIHtcbiAgb3V0ID0gb3V0IHx8IFtdO1xuICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIG9sZE9mZnNldCA9IG9mZnNldDtcbiAgd2hpbGUgKG51bSA+PSBJTlQpIHtcbiAgICBvdXRbb2Zmc2V0KytdID0gbnVtICYgMjU1IHwgTVNCO1xuICAgIG51bSAvPSAxMjg7XG4gIH1cbiAgd2hpbGUgKG51bSAmIE1TQkFMTCkge1xuICAgIG91dFtvZmZzZXQrK10gPSBudW0gJiAyNTUgfCBNU0I7XG4gICAgbnVtID4+Pj0gNztcbiAgfVxuICBvdXRbb2Zmc2V0XSA9IG51bSB8IDA7XG4gIGVuY29kZS5ieXRlcyA9IG9mZnNldCAtIG9sZE9mZnNldCArIDE7XG4gIHJldHVybiBvdXQ7XG59XG52YXIgZGVjb2RlID0gcmVhZDtcbnZhciBNU0IkMSA9IDEyOCwgUkVTVCQxID0gMTI3O1xuZnVuY3Rpb24gcmVhZChidWYsIG9mZnNldCkge1xuICB2YXIgcmVzID0gMCwgb2Zmc2V0ID0gb2Zmc2V0IHx8IDAsIHNoaWZ0ID0gMCwgY291bnRlciA9IG9mZnNldCwgYiwgbCA9IGJ1Zi5sZW5ndGg7XG4gIGRvIHtcbiAgICBpZiAoY291bnRlciA+PSBsKSB7XG4gICAgICByZWFkLmJ5dGVzID0gMDtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDb3VsZCBub3QgZGVjb2RlIHZhcmludCcpO1xuICAgIH1cbiAgICBiID0gYnVmW2NvdW50ZXIrK107XG4gICAgcmVzICs9IHNoaWZ0IDwgMjggPyAoYiAmIFJFU1QkMSkgPDwgc2hpZnQgOiAoYiAmIFJFU1QkMSkgKiBNYXRoLnBvdygyLCBzaGlmdCk7XG4gICAgc2hpZnQgKz0gNztcbiAgfSB3aGlsZSAoYiA+PSBNU0IkMSk7XG4gIHJlYWQuYnl0ZXMgPSBjb3VudGVyIC0gb2Zmc2V0O1xuICByZXR1cm4gcmVzO1xufVxudmFyIE4xID0gTWF0aC5wb3coMiwgNyk7XG52YXIgTjIgPSBNYXRoLnBvdygyLCAxNCk7XG52YXIgTjMgPSBNYXRoLnBvdygyLCAyMSk7XG52YXIgTjQgPSBNYXRoLnBvdygyLCAyOCk7XG52YXIgTjUgPSBNYXRoLnBvdygyLCAzNSk7XG52YXIgTjYgPSBNYXRoLnBvdygyLCA0Mik7XG52YXIgTjcgPSBNYXRoLnBvdygyLCA0OSk7XG52YXIgTjggPSBNYXRoLnBvdygyLCA1Nik7XG52YXIgTjkgPSBNYXRoLnBvdygyLCA2Myk7XG52YXIgbGVuZ3RoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IE4xID8gMSA6IHZhbHVlIDwgTjIgPyAyIDogdmFsdWUgPCBOMyA/IDMgOiB2YWx1ZSA8IE40ID8gNCA6IHZhbHVlIDwgTjUgPyA1IDogdmFsdWUgPCBONiA/IDYgOiB2YWx1ZSA8IE43ID8gNyA6IHZhbHVlIDwgTjggPyA4IDogdmFsdWUgPCBOOSA/IDkgOiAxMDtcbn07XG52YXIgdmFyaW50ID0ge1xuICBlbmNvZGU6IGVuY29kZV8xLFxuICBkZWNvZGU6IGRlY29kZSxcbiAgZW5jb2RpbmdMZW5ndGg6IGxlbmd0aFxufTtcbnZhciBfYnJycF92YXJpbnQgPSB2YXJpbnQ7XG52YXIgdmFyaW50JDEgPSBfYnJycF92YXJpbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFyaW50JDE7XG4iLCJleHBvcnQgY29uc3QgR0FURVdBWSA9IG5ldyBVUkwoJ2h0dHBzOi8vZHdlYi5saW5rLycpXG5cbi8qKlxuICogQHR5cGVkZWYge3N0cmluZ3xVUkx9IEdhdGV3YXlVUkwgQmFzZSBVUkwgb2YgYW4gSVBGUyBHYXRld2F5IGUuZy4gaHR0cHM6Ly9kd2ViLmxpbmsvIG9yIGh0dHBzOi8vaXBmcy5pby9cbiAqIEB0eXBlZGVmIHt7IGdhdGV3YXk/OiBHYXRld2F5VVJMIH19IEdhdGV3YXlVUkxPcHRpb25zXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0IGFuIElQRlMgVVJMIChzdGFydGluZyBpcGZzOi8vKSB0byBhIGdhdGV3YXkgVVJMIChzdGFydGluZyBodHRwczovLylcbiAqIHRoYXQgY2FuIGJlIHVzZWQgaW4gYSB3ZWJwYWdlLiBJZiB0aGUgcGFzc2VkIFVSTCBpcyBub3QgYW4gSVBGUyBVUkwgaXQgaXNcbiAqIHJldHVybmVkIGFzIGEgbmV3IFVSTCBvYmplY3Qgd2l0aCBubyBmdXJ0aGVyIGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8VVJMfSB1cmwgQW4gSVBGUyBVUkwgZS5nLiBpcGZzOi8vYmFmeS4uLi9wYXRoXG4gKiBAcGFyYW0ge0dhdGV3YXlVUkxPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyB0aGF0IGFsbG93IGN1c3RvbWl6YXRpb24gb2YgdGhlIGdhdGV3YXkgdXNlZC5cbiAqIEByZXR1cm5zIHtVUkx9IEFuIElQRlMgZ2F0ZXdheSBVUkwgZS5nLiBodHRwczovL2R3ZWIubGluay9pcGZzL2JhZnkuLi4vcGF0aFxuICovXG5leHBvcnQgY29uc3QgdG9HYXRld2F5VVJMID0gKHVybCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IGdhdGV3YXkgPSBvcHRpb25zLmdhdGV3YXkgfHwgR0FURVdBWVxuICB1cmwgPSBuZXcgVVJMKFN0cmluZyh1cmwpKVxuICByZXR1cm4gdXJsLnByb3RvY29sID09PSAnaXBmczonXG4gICAgPyBuZXcgVVJMKGAvaXBmcy8ke3VybC5ocmVmLnNsaWNlKCdpcGZzOi8vJy5sZW5ndGgpfWAsIGdhdGV3YXkpXG4gICAgOiB1cmxcbn1cbiIsIi8qKlxuICogQSBjbGllbnQgbGlicmFyeSBmb3IgdGhlIGh0dHBzOi8vbmZ0LnN0b3JhZ2UvIHNlcnZpY2UuIEl0IHByb3ZpZGVzIGEgY29udmVuaWVudFxuICogaW50ZXJmYWNlIGZvciB3b3JraW5nIHdpdGggdGhlIFtSYXcgSFRUUCBBUEldKGh0dHBzOi8vbmZ0LnN0b3JhZ2UvI2FwaS1kb2NzKVxuICogZnJvbSBhIHdlYiBicm93c2VyIG9yIFtOb2RlLmpzXShodHRwczovL25vZGVqcy5vcmcvKSBhbmQgY29tZXMgYnVuZGxlZCB3aXRoXG4gKiBUUyBmb3Igb3V0LW9mLXRoZSBib3ggdHlwZSBpbmZlcmVuY2UgYW5kIGJldHRlciBJbnRlbGxpU2Vuc2UuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBORlRTdG9yYWdlLCBGaWxlLCBCbG9iIH0gZnJvbSBcIm5mdC5zdG9yYWdlXCJcbiAqIGNvbnN0IGNsaWVudCA9IG5ldyBORlRTdG9yYWdlKHsgdG9rZW46IEFQSV9UT0tFTiB9KVxuICpcbiAqIGNvbnN0IGNpZCA9IGF3YWl0IGNsaWVudC5zdG9yZUJsb2IobmV3IEJsb2IoWydoZWxsbyB3b3JsZCddKSlcbiAqIGBgYFxuICogQG1vZHVsZVxuICovXG5cbmltcG9ydCB7IHRyYW5zZm9ybSB9IGZyb20gJ3N0cmVhbWluZy1pdGVyYWJsZXMnXG5pbXBvcnQgcFJldHJ5IGZyb20gJ3AtcmV0cnknXG5pbXBvcnQgeyBUcmVld2Fsa0NhclNwbGl0dGVyIH0gZnJvbSAnY2FyYml0ZXMvdHJlZXdhbGsnXG5pbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9saWIvaW50ZXJmYWNlLmpzJ1xuaW1wb3J0ICogYXMgVG9rZW4gZnJvbSAnLi90b2tlbi5qcydcbmltcG9ydCB7IGZldGNoLCBGaWxlLCBCbG9iLCBGb3JtRGF0YSB9IGZyb20gJy4vcGxhdGZvcm0uanMnXG5pbXBvcnQgeyB0b0dhdGV3YXlVUkwgfSBmcm9tICcuL2dhdGV3YXkuanMnXG5cbmNvbnN0IE1BWF9TVE9SRV9SRVRSSUVTID0gNVxuY29uc3QgTUFYX0NPTkNVUlJFTlRfVVBMT0FEUyA9IDNcbmNvbnN0IE1BWF9DSFVOS19TSVpFID0gMTAyNCAqIDEwMjQgKiAxMCAvLyBjaHVuayB0byB+MTBNQiBDQVJzXG5cbi8qKlxuICogQGltcGxlbWVudHMgQVBJLlNlcnZpY2VcbiAqL1xuY2xhc3MgTkZUU3RvcmFnZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGEgY2xpZW50IGJvdW5kIHRvIHRoZSBnaXZlbiBgb3B0aW9ucy50b2tlbmAgYW5kXG4gICAqIGBvcHRpb25zLmVuZHBvaW50YC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogaW1wb3J0IHsgTkZUU3RvcmFnZSwgRmlsZSwgQmxvYiB9IGZyb20gXCJuZnQuc3RvcmFnZVwiXG4gICAqIGNvbnN0IGNsaWVudCA9IG5ldyBORlRTdG9yYWdlKHsgdG9rZW46IEFQSV9UT0tFTiB9KVxuICAgKlxuICAgKiBjb25zdCBjaWQgPSBhd2FpdCBjbGllbnQuc3RvcmVCbG9iKG5ldyBCbG9iKFsnaGVsbG8gd29ybGQnXSkpXG4gICAqIGBgYFxuICAgKiBPcHRpb25hbGx5IHlvdSBjb3VsZCBwYXNzIGFuIGFsdGVybmF0aXZlIEFQSSBlbmRwb2ludCAoZS5nLiBmb3IgdGVzdGluZylcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogaW1wb3J0IHsgTkZUU3RvcmFnZSB9IGZyb20gXCJuZnQuc3RvcmFnZVwiXG4gICAqIGNvbnN0IGNsaWVudCA9IG5ldyBORlRTdG9yYWdlKHtcbiAgICogICB0b2tlbjogQVBJX1RPS0VOXG4gICAqICAgZW5kcG9pbnQ6IG5ldyBVUkwoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nKVxuICAgKiB9KVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHt7dG9rZW46IHN0cmluZywgZW5kcG9pbnQ/OlVSTH19IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdG9rZW4sIGVuZHBvaW50ID0gbmV3IFVSTCgnaHR0cHM6Ly9hcGkubmZ0LnN0b3JhZ2UnKSB9KSB7XG4gICAgLyoqXG4gICAgICogQXV0aG9yaXphdGlvbiB0b2tlbi5cbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMudG9rZW4gPSB0b2tlblxuICAgIC8qKlxuICAgICAqIFNlcnZpY2UgQVBJIGVuZHBvaW50IGBVUkxgLlxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludFxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXG4gICAqL1xuICBzdGF0aWMgYXV0aCh0b2tlbikge1xuICAgIGlmICghdG9rZW4pIHRocm93IG5ldyBFcnJvcignbWlzc2luZyB0b2tlbicpXG4gICAgcmV0dXJuIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfVxuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0FQSS5TZXJ2aWNlfSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7QmxvYn0gYmxvYlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBUEkuQ0lEU3RyaW5nPn1cbiAgICovXG4gIHN0YXRpYyBhc3luYyBzdG9yZUJsb2IoeyBlbmRwb2ludCwgdG9rZW4gfSwgYmxvYikge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJy91cGxvYWQnLCBlbmRwb2ludClcblxuICAgIGlmIChibG9iLnNpemUgPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29udGVudCBzaXplIGlzIDAsIG1ha2Ugc3VyZSB0byBwcm92aWRlIHNvbWUgY29udGVudCcpXG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IE5GVFN0b3JhZ2UuYXV0aCh0b2tlbiksXG4gICAgICBib2R5OiBibG9iLFxuICAgIH0pXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcblxuICAgIGlmIChyZXN1bHQub2spIHtcbiAgICAgIHJldHVybiByZXN1bHQudmFsdWUuY2lkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7QVBJLlNlcnZpY2V9IHNlcnZpY2VcbiAgICogQHBhcmFtIHtCbG9ifEFQSS5DYXJSZWFkZXJ9IGNhclxuICAgKiBAcGFyYW0ge3tvblN0b3JlZENodW5rPzogKHNpemU6IG51bWJlcikgPT4gdm9pZH19IFtvcHRpb25zXVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBUEkuQ0lEU3RyaW5nPn1cbiAgICovXG4gIHN0YXRpYyBhc3luYyBzdG9yZUNhcih7IGVuZHBvaW50LCB0b2tlbiB9LCBjYXIsIHsgb25TdG9yZWRDaHVuayB9ID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXRTaXplID0gTUFYX0NIVU5LX1NJWkVcbiAgICBjb25zdCBzcGxpdHRlciA9XG4gICAgICBjYXIgaW5zdGFuY2VvZiBCbG9iXG4gICAgICAgID8gYXdhaXQgVHJlZXdhbGtDYXJTcGxpdHRlci5mcm9tQmxvYihjYXIsIHRhcmdldFNpemUpXG4gICAgICAgIDogbmV3IFRyZWV3YWxrQ2FyU3BsaXR0ZXIoY2FyLCB0YXJnZXRTaXplKVxuXG4gICAgY29uc3QgdXBsb2FkID0gdHJhbnNmb3JtKFxuICAgICAgTUFYX0NPTkNVUlJFTlRfVVBMT0FEUyxcbiAgICAgIGFzeW5jIGZ1bmN0aW9uICgvKiogQHR5cGUge0FzeW5jSXRlcmFibGU8VWludDhBcnJheT59ICovIGNhcikge1xuICAgICAgICBjb25zdCBjYXJQYXJ0cyA9IFtdXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgcGFydCBvZiBjYXIpIHtcbiAgICAgICAgICBjYXJQYXJ0cy5wdXNoKHBhcnQpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FyRmlsZSA9IG5ldyBCbG9iKGNhclBhcnRzLCB7XG4gICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2NhcicsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBSZXRyeShcbiAgICAgICAgICAoKSA9PiBORlRTdG9yYWdlLnN0b3JlQmxvYih7IGVuZHBvaW50LCB0b2tlbiB9LCBjYXJGaWxlKSxcbiAgICAgICAgICB7IHJldHJpZXM6IE1BWF9TVE9SRV9SRVRSSUVTIH1cbiAgICAgICAgKVxuICAgICAgICBvblN0b3JlZENodW5rICYmIG9uU3RvcmVkQ2h1bmsoY2FyRmlsZS5zaXplKVxuICAgICAgICByZXR1cm4gcmVzXG4gICAgICB9XG4gICAgKVxuXG4gICAgbGV0IHJvb3RcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGNpZCBvZiB1cGxvYWQoc3BsaXR0ZXIuY2FycygpKSkge1xuICAgICAgcm9vdCA9IGNpZFxuICAgIH1cblxuICAgIHJldHVybiAvKiogQHR5cGUge0FQSS5DSURTdHJpbmd9ICovIChyb290KVxuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0FQSS5TZXJ2aWNlfSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7SXRlcmFibGU8RmlsZT59IGZpbGVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFQSS5DSURTdHJpbmc+fVxuICAgKi9cbiAgc3RhdGljIGFzeW5jIHN0b3JlRGlyZWN0b3J5KHsgZW5kcG9pbnQsIHRva2VuIH0sIGZpbGVzKSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCgnL3VwbG9hZCcsIGVuZHBvaW50KVxuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKVxuICAgIGxldCBzaXplID0gMFxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgYm9keS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpXG4gICAgICBzaXplICs9IGZpbGUuc2l6ZVxuICAgIH1cblxuICAgIGlmIChzaXplID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUb3RhbCBzaXplIG9mIGZpbGVzIHNob3VsZCBleGNlZWQgMCwgbWFrZSBzdXJlIHRvIHByb3ZpZGUgc29tZSBjb250ZW50J1xuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogTkZUU3RvcmFnZS5hdXRoKHRva2VuKSxcbiAgICAgIGJvZHksXG4gICAgfSlcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChyZXN1bHQub2spIHtcbiAgICAgIHJldHVybiByZXN1bHQudmFsdWUuY2lkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHRlbXBsYXRlIHtBUEkuVG9rZW5JbnB1dH0gVFxuICAgKiBAcGFyYW0ge0FQSS5TZXJ2aWNlfSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7VH0gbWV0YWRhdGFcbiAgICogQHJldHVybnMge1Byb21pc2U8QVBJLlRva2VuPFQ+Pn1cbiAgICovXG4gIHN0YXRpYyBhc3luYyBzdG9yZSh7IGVuZHBvaW50LCB0b2tlbiB9LCBtZXRhZGF0YSkge1xuICAgIHZhbGlkYXRlRVJDMTE1NShtZXRhZGF0YSlcblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYC9zdG9yZWAsIGVuZHBvaW50KVxuICAgIGNvbnN0IGJvZHkgPSBUb2tlbi5lbmNvZGUobWV0YWRhdGEpXG4gICAgY29uc3QgcGF0aHMgPSBuZXcgU2V0KGJvZHkua2V5cygpKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiBORlRTdG9yYWdlLmF1dGgodG9rZW4pLFxuICAgICAgYm9keSxcbiAgICB9KVxuXG4gICAgLyoqIEB0eXBlIHtBUEkuU3RvcmVSZXNwb25zZTxUPn0gKi9cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChyZXN1bHQub2sgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHJlc3VsdFxuICAgICAgcmV0dXJuIFRva2VuLmRlY29kZSh2YWx1ZSwgcGF0aHMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7QVBJLlNlcnZpY2V9IHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNpZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBUEkuU3RhdHVzUmVzdWx0Pn1cbiAgICovXG4gIHN0YXRpYyBhc3luYyBzdGF0dXMoeyBlbmRwb2ludCwgdG9rZW4gfSwgY2lkKSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgLyR7Y2lkfWAsIGVuZHBvaW50KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCksIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiBORlRTdG9yYWdlLmF1dGgodG9rZW4pLFxuICAgIH0pXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzdWx0Lm9rKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaWQ6IHJlc3VsdC52YWx1ZS5jaWQsXG4gICAgICAgIGRlYWxzOiBkZWNvZGVEZWFscyhyZXN1bHQudmFsdWUuZGVhbHMpLFxuICAgICAgICBzaXplOiByZXN1bHQudmFsdWUuc2l6ZSxcbiAgICAgICAgcGluOiBkZWNvZGVQaW4ocmVzdWx0LnZhbHVlLnBpbiksXG4gICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKHJlc3VsdC52YWx1ZS5jcmVhdGVkKSxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5lcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FQSS5QdWJsaWNTZXJ2aWNlfSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaWRcbiAgICogQHJldHVybnMge1Byb21pc2U8QVBJLkNoZWNrUmVzdWx0Pn1cbiAgICovXG4gIHN0YXRpYyBhc3luYyBjaGVjayh7IGVuZHBvaW50IH0sIGNpZCkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYC9jaGVjay8ke2NpZH1gLCBlbmRwb2ludClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3VsdC5vaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2lkOiByZXN1bHQudmFsdWUuY2lkLFxuICAgICAgICBkZWFsczogZGVjb2RlRGVhbHMocmVzdWx0LnZhbHVlLmRlYWxzKSxcbiAgICAgICAgcGluOiByZXN1bHQudmFsdWUucGluLFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0LmVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QVBJLlNlcnZpY2V9IHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNpZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIHN0YXRpYyBhc3luYyBkZWxldGUoeyBlbmRwb2ludCwgdG9rZW4gfSwgY2lkKSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgLyR7Y2lkfWAsIGVuZHBvaW50KVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCksIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiBORlRTdG9yYWdlLmF1dGgodG9rZW4pLFxuICAgIH0pXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgaWYgKCFyZXN1bHQub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICAvLyBKdXN0IGEgc3VnYXIgc28geW91IGRvbid0IGhhdmUgdG8gcGFzcyBhcm91bmQgZW5kcG9pbnQgYW5kIHRva2VuIGFyb3VuZC5cblxuICAvKipcbiAgICogU3RvcmVzIGEgc2luZ2xlIGZpbGUgYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgQ29udGVudCBJZGVudGlmaWVyIChDSUQpLlxuICAgKiBUYWtlcyBhIFtCbG9iXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQmxvYi9CbG9iKVxuICAgKiBvciBhIFtGaWxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZSkuIE5vdGVcbiAgICogdGhhdCBubyBmaWxlIG5hbWUgb3IgZmlsZSBtZXRhZGF0YSBpcyByZXRhaW5lZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogY29uc3QgY29udGVudCA9IG5ldyBCbG9iKFsnaGVsbG8gd29ybGQnXSlcbiAgICogY29uc3QgY2lkID0gYXdhaXQgY2xpZW50LnN0b3JlQmxvYihjb250ZW50KVxuICAgKiBjaWQgLy8+ICd6ZGo3V245RlFBVVJDUDZNYndjV3V6aTd1NjVrQXNYQ2RqTlRraGJKY29hWEJ1c3E5J1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtCbG9ifSBibG9iXG4gICAqL1xuICBzdG9yZUJsb2IoYmxvYikge1xuICAgIHJldHVybiBORlRTdG9yYWdlLnN0b3JlQmxvYih0aGlzLCBibG9iKVxuICB9XG4gIC8qKlxuICAgKiBTdG9yZXMgZmlsZXMgZW5jb2RlZCBhcyBhIHNpbmdsZSBbQ29udGVudCBBZGRyZXNzZWQgQXJjaGl2ZVxuICAgKiAoQ0FSKV0oaHR0cHM6Ly9naXRodWIuY29tL2lwbGQvc3BlY3MvYmxvYi9tYXN0ZXIvYmxvY2stbGF5ZXIvY29udGVudC1hZGRyZXNzYWJsZS1hcmNoaXZlcy5tZCkuXG4gICAqXG4gICAqIFRha2VzIGEgW0Jsb2JdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9CbG9iL0Jsb2IpXG4gICAqIG9yIGEgW0ZpbGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlKS5cbiAgICpcbiAgICogUmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBDb250ZW50IElkZW50aWZpZXIgKENJRCkuXG4gICAqXG4gICAqIFNlZSB0aGUgW2BpcGZzLWNhcmAgZG9jc10oaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvaXBmcy1jYXIpIGZvciBtb3JlXG4gICAqIGRldGFpbHMgb24gcGFja2luZyBhIENBUiBmaWxlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiBpbXBvcnQgeyBwYWNrIH0gZnJvbSAnaXBmcy1jYXIvcGFjaydcbiAgICogaW1wb3J0IHsgQ2FyUmVhZGVyIH0gZnJvbSAnQGlwbGQvY2FyJ1xuICAgKiBjb25zdCB7IG91dCwgcm9vdCB9ID0gYXdhaXQgcGFjayh7XG4gICAqICBpbnB1dDogZnMuY3JlYXRlUmVhZFN0cmVhbSgncGlucGllLnBkZicpXG4gICAqIH0pXG4gICAqIGNvbnN0IGV4cGVjdGVkQ2lkID0gcm9vdC50b1N0cmluZygpXG4gICAqIGNvbnN0IGNhclJlYWRlciA9IGF3YWl0IENhclJlYWRlci5mcm9tSXRlcmFibGUob3V0KVxuICAgKiBjb25zdCBjaWQgPSBhd2FpdCBzdG9yYWdlLnN0b3JlQ2FyKGNhclJlYWRlcilcbiAgICogY29uc29sZS5hc3NlcnQoY2lkID09PSBleHBlY3RlZENpZClcbiAgICogYGBgXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYFxuICAgKiBpbXBvcnQgeyBwYWNrVG9CbG9iIH0gZnJvbSAnaXBmcy1jYXIvcGFjay9ibG9iJ1xuICAgKiBjb25zdCBkYXRhID0gJ0hlbGxvIHdvcmxkJ1xuICAgKiBjb25zdCB7IHJvb3QsIGNhciB9ID0gYXdhaXQgcGFja1RvQmxvYih7IGlucHV0OiBbbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGRhdGEpXSB9KVxuICAgKiBjb25zdCBleHBlY3RlZENpZCA9IHJvb3QudG9TdHJpbmcoKVxuICAgKiBjb25zdCBjaWQgPSBhd2FpdCBjbGllbnQuc3RvcmVDYXIoY2FyKVxuICAgKiBjb25zb2xlLmFzc2VydChjaWQgPT09IGV4cGVjdGVkQ2lkKVxuICAgKiBgYGBcbiAgICogQHBhcmFtIHtCbG9ifEFQSS5DYXJSZWFkZXJ9IGNhclxuICAgKiBAcGFyYW0ge3tvblN0b3JlZENodW5rPzogKHNpemU6IG51bWJlcikgPT4gdm9pZH19IFtvcHRpb25zXVxuICAgKi9cbiAgc3RvcmVDYXIoY2FyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIE5GVFN0b3JhZ2Uuc3RvcmVDYXIodGhpcywgY2FyLCBvcHRpb25zKVxuICB9XG4gIC8qKlxuICAgKiBTdG9yZXMgYSBkaXJlY3Rvcnkgb2YgZmlsZXMgYW5kIHJldHVybnMgYSBDSUQgZm9yIHRoZSBkaXJlY3RvcnkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGNpZCA9IGF3YWl0IGNsaWVudC5zdG9yZURpcmVjdG9yeShbXG4gICAqICAgbmV3IEZpbGUoWydoZWxsbyB3b3JsZCddLCAnaGVsbG8udHh0JyksXG4gICAqICAgbmV3IEZpbGUoW0pTT04uc3RyaW5naWZ5KHsnZnJvbSc6ICdpbmNvZ25pdG8nfSwgbnVsbCwgMildLCAnbWV0YWRhdGEuanNvbicpXG4gICAqIF0pXG4gICAqIGNpZCAvLz5cbiAgICogYGBgXG4gICAqXG4gICAqIEFyZ3VtZW50IGNhbiBiZSBhIFtGaWxlTGlzdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVMaXN0KVxuICAgKiBpbnN0YW5jZSBhcyB3ZWxsLCBpbiB3aGljaCBjYXNlIGRpcmVjdG9yeSBzdHJ1Y3R1cmUgd2lsbCBiZSByZXRhaW5lZC5cbiAgICpcbiAgICogQHBhcmFtIHtJdGVyYWJsZTxGaWxlPn0gZmlsZXNcbiAgICovXG4gIHN0b3JlRGlyZWN0b3J5KGZpbGVzKSB7XG4gICAgcmV0dXJuIE5GVFN0b3JhZ2Uuc3RvcmVEaXJlY3RvcnkodGhpcywgZmlsZXMpXG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBzdGF0dXMgb2YgdGhlIHN0b3JlZCBORlQgYnkgaXRzIENJRC4gTm90ZSB0aGUgTkZUIG11c3RcbiAgICogaGF2ZSBwcmV2aW91c2x5IGJlZW4gc3RvcmVkIGJ5IHRoaXMgYWNjb3VudC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogY29uc3Qgc3RhdHVzID0gYXdhaXQgY2xpZW50LnN0YXR1cygnemRqN1duOUZRQVVSQ1A2TWJ3Y1d1emk3dTY1a0FzWENkak5Ua2hiSmNvYVhCdXNxOScpXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2lkXG4gICAqL1xuICBzdGF0dXMoY2lkKSB7XG4gICAgcmV0dXJuIE5GVFN0b3JhZ2Uuc3RhdHVzKHRoaXMsIGNpZClcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlcyBzdG9yZWQgY29udGVudCBieSBpdHMgQ0lEIGZyb20gdGhlIHNlcnZpY2UuXG4gICAqXG4gICAqID4gUGxlYXNlIG5vdGUgdGhhdCBldmVuIGlmIGNvbnRlbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBzZXJ2aWNlIG90aGVyIG5vZGVzXG4gICAqIHRoYXQgaGF2ZSByZXBsaWNhdGVkIGl0IG1pZ2h0IHN0aWxsIGNvbnRpbnVlIHByb3ZpZGluZyBpdC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogYXdhaXQgY2xpZW50LmRlbGV0ZSgnemRqN1duOUZRQVVSQ1A2TWJ3Y1d1emk3dTY1a0FzWENkak5Ua2hiSmNvYVhCdXNxOScpXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2lkXG4gICAqL1xuICBkZWxldGUoY2lkKSB7XG4gICAgcmV0dXJuIE5GVFN0b3JhZ2UuZGVsZXRlKHRoaXMsIGNpZClcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBDSUQgb2YgYW4gTkZUIGlzIGJlaW5nIHN0b3JlZCBieSBuZnQuc3RvcmFnZS4gVGhyb3dzIGlmIHRoZSBORlRcbiAgICogd2FzIG5vdCBmb3VuZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogY29uc3Qgc3RhdHVzID0gYXdhaXQgY2xpZW50LmNoZWNrKCd6ZGo3V245RlFBVVJDUDZNYndjV3V6aTd1NjVrQXNYQ2RqTlRraGJKY29hWEJ1c3E5JylcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaWRcbiAgICovXG4gIGNoZWNrKGNpZCkge1xuICAgIHJldHVybiBORlRTdG9yYWdlLmNoZWNrKHRoaXMsIGNpZClcbiAgfVxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiB0b2tlbiBhbmQgYWxsIHJlc291cmNlcyBpdCByZWZlcmVuY2VzIChpbiB0aGUgZm9ybSBvZiBhXG4gICAqIEZpbGUgb3IgYSBCbG9iKSBhbG9uZyB3aXRoIGEgbWV0YWRhdGEgSlNPTiBhcyBzcGVjaWZpY2VkIGluXG4gICAqIFtFUkMtMTE1NV0oaHR0cHM6Ly9laXBzLmV0aGVyZXVtLm9yZy9FSVBTL2VpcC0xMTU1I21ldGFkYXRhKS4gVGhlXG4gICAqIGB0b2tlbi5pbWFnZWAgbXVzdCBiZSBlaXRoZXIgYSBgRmlsZWAgb3IgYSBgQmxvYmAgaW5zdGFuY2UsIHdoaWNoIHdpbGwgYmVcbiAgICogc3RvcmVkIGFuZCB0aGUgY29ycmVzcG9uZGluZyBjb250ZW50IGFkZHJlc3MgVVJMIHdpbGwgYmUgc2F2ZWQgaW4gdGhlXG4gICAqIG1ldGFkYXRhIEpTT04gZmlsZSB1bmRlciBgaW1hZ2VgIGZpZWxkLlxuICAgKlxuICAgKiBJZiBgdG9rZW4ucHJvcGVydGllc2AgY29udGFpbnMgcHJvcGVydGllcyB3aXRoIGBGaWxlYCBvciBgQmxvYmAgdmFsdWVzLFxuICAgKiB0aG9zZSBhbHNvIGdldCBzdG9yZWQgYW5kIHRoZWlyIFVSTHMgd2lsbCBiZSBzYXZlZCBpbiB0aGUgbWV0YWRhdGEgSlNPTlxuICAgKiBmaWxlIGluIHRoZWlyIHBsYWNlLlxuICAgKlxuICAgKiBOb3RlOiBVUkxzIGZvciBgRmlsZWAgb2JqZWN0cyB3aWxsIHJldGFpbiBmaWxlIG5hbWVzIGUuZy4gaW4gY2FzZSBvZlxuICAgKiBgbmV3IEZpbGUoW2J5dGVzXSwgJ2NhdC5wbmcnLCB7IHR5cGU6ICdpbWFnZS9wbmcnIH0pYCB3aWxsIGJlIHRyYW5zZm9ybWVkXG4gICAqIGludG8gYSBVUkwgdGhhdCBsb29rcyBsaWtlIGBpcGZzOi8vYmFmeS4uLmhhc2gvaW1hZ2UvY2F0LnBuZ2AuIEZvciBgQmxvYmBcbiAgICogb2JqZWN0cywgdGhlIFVSTCB3aWxsIG5vdCBoYXZlIGEgZmlsZSBuYW1lIG5hbWUgb3IgbWltZSB0eXBlLCBpbnN0ZWFkIGl0XG4gICAqIHdpbGwgYmUgdHJhbnNmb3JtZWQgaW50byBhIFVSTCB0aGF0IGxvb2tzIGxpa2VcbiAgICogYGlwZnM6Ly9iYWZ5Li4uaGFzaC9pbWFnZS9ibG9iYC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBjbGllbnQuc3RvcmUoe1xuICAgKiAgIG5hbWU6ICduZnQuc3RvcmFnZSBzdG9yZSB0ZXN0JyxcbiAgICogICBkZXNjcmlwdGlvbjogJ1Rlc3QgRVJDLTExNTUgY29tcGF0aWJsZSBtZXRhZGF0YS4nLFxuICAgKiAgIGltYWdlOiBuZXcgRmlsZShbJzxEQVRBPiddLCAncGlucGllLmpwZycsIHsgdHlwZTogJ2ltYWdlL2pwZycgfSksXG4gICAqICAgcHJvcGVydGllczoge1xuICAgKiAgICAgY3VzdG9tOiAnQ3VzdG9tIGRhdGEgY2FuIGFwcGVhciBoZXJlLCBmaWxlcyBhcmUgYXV0byB1cGxvYWRlZC4nLFxuICAgKiAgICAgZmlsZTogbmV3IEZpbGUoWyc8REFUQT4nXSwgJ1JFQURNRS5tZCcsIHsgdHlwZTogJ3RleHQvcGxhaW4nIH0pLFxuICAgKiAgIH1cbiAgICogfSlcbiAgICpcbiAgICogY29uc29sZS5sb2coJ0lQRlMgVVJMIGZvciB0aGUgbWV0YWRhdGE6JywgbWV0YWRhdGEudXJsKVxuICAgKiBjb25zb2xlLmxvZygnbWV0YWRhdGEuanNvbiBjb250ZW50czpcXG4nLCBtZXRhZGF0YS5kYXRhKVxuICAgKiBjb25zb2xlLmxvZygnbWV0YWRhdGEuanNvbiB3aXRoIElQRlMgZ2F0ZXdheSBVUkxzOlxcbicsIG1ldGFkYXRhLmVtYmVkKCkpXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdGVtcGxhdGUge0FQSS5Ub2tlbklucHV0fSBUXG4gICAqIEBwYXJhbSB7VH0gdG9rZW5cbiAgICogQHJldHVybnMge1Byb21pc2U8QVBJLlRva2VuPFQ+Pn1cbiAgICovXG4gIHN0b3JlKHRva2VuKSB7XG4gICAgcmV0dXJuIE5GVFN0b3JhZ2Uuc3RvcmUodGhpcywgdG9rZW4pXG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FQSS5Ub2tlbklucHV0fSBtZXRhZGF0YVxuICovXG5jb25zdCB2YWxpZGF0ZUVSQzExNTUgPSAoeyBuYW1lLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGRlY2ltYWxzIH0pID0+IHtcbiAgLy8gSnVzdCB2YWxpZGF0ZSB0aGF0IGV4cGVjdGVkIGZpZWxkcyBhcmUgcHJlc2VudFxuICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdzdHJpbmcgcHJvcGVydHkgYG5hbWVgIGlkZW50aWZ5aW5nIHRoZSBhc3NldCBpcyByZXF1aXJlZCdcbiAgICApXG4gIH1cbiAgaWYgKHR5cGVvZiBkZXNjcmlwdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ3N0cmluZyBwcm9wZXJ0eSBgZGVzY3JpcHRpb25gIGRlc2NyaWJpbmcgYXNzZXQgaXMgcmVxdWlyZWQnXG4gICAgKVxuICB9XG4gIGlmICghKGltYWdlIGluc3RhbmNlb2YgQmxvYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcm9wZXJ0eSBgaW1hZ2VgIG11c3QgYmUgYSBCbG9iIG9yIEZpbGUgb2JqZWN0JylcbiAgfSBlbHNlIGlmICghaW1hZ2UudHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKSkge1xuICAgIGNvbnNvbGUud2FybihgQWNjb3JkaW5nIHRvIEVSQzcyMSBNZXRhZGF0YSBKU09OIFNjaGVtYSAnaW1hZ2UnIG11c3QgaGF2ZSAnaW1hZ2UvKicgbWltZSB0eXBlLlxuXG5Gb3IgYmV0dGVyIGludGVyb3BlcmFiaWxpdHkgd2Ugd291bGQgaGlnaGx5IHJlY29tbWVuZCBzdG9yaW5nIGNvbnRlbnQgd2l0aCBkaWZmZXJlbnQgbWltZSB0eXBlIHVuZGVyICdwcm9wZXJ0aWVzJyBuYW1lc3BhY2UgZS5nLiBcXGBwcm9wZXJ0aWVzOiB7IHZpZGVvOiBmaWxlIH1cXGAgYW5kIHVzaW5nICdpbWFnZScgZmllbGQgZm9yIHN0b3JpbmcgYSBwcmV2aWV3IGltYWdlIGZvciBpdCBpbnN0ZWFkLlxuXG5Gb3IgbW9yZSBjb250ZXh0IHBsZWFzZSBzZWUgRVJDLTcyMSBzcGVjaWZpY2F0aW9uIGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtNzIxYClcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGVjaW1hbHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkZWNpbWFscyAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcm9wZXJ0eSBgZGVjaW1hbHNgIG11c3QgYmUgYW4gaW50ZWdlciB2YWx1ZScpXG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FQSS5EZWFsW119IGRlYWxzXG4gKiBAcmV0dXJucyB7QVBJLkRlYWxbXX1cbiAqL1xuY29uc3QgZGVjb2RlRGVhbHMgPSAoZGVhbHMpID0+XG4gIGRlYWxzLm1hcCgoZGVhbCkgPT4ge1xuICAgIGNvbnN0IHsgZGVhbEFjdGl2YXRpb24sIGRlYWxFeHBpcmF0aW9uLCBsYXN0Q2hhbmdlZCB9ID0ge1xuICAgICAgZGVhbEV4cGlyYXRpb246IG51bGwsXG4gICAgICBkZWFsQWN0aXZhdGlvbjogbnVsbCxcbiAgICAgIC4uLmRlYWwsXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlYWwsXG4gICAgICBsYXN0Q2hhbmdlZDogbmV3IERhdGUobGFzdENoYW5nZWQpLFxuICAgICAgLi4uKGRlYWxBY3RpdmF0aW9uICYmIHsgZGVhbEFjdGl2YXRpb246IG5ldyBEYXRlKGRlYWxBY3RpdmF0aW9uKSB9KSxcbiAgICAgIC4uLihkZWFsRXhwaXJhdGlvbiAmJiB7IGRlYWxFeHBpcmF0aW9uOiBuZXcgRGF0ZShkZWFsRXhwaXJhdGlvbikgfSksXG4gICAgfVxuICB9KVxuXG4vKipcbiAqIEBwYXJhbSB7QVBJLlBpbn0gcGluXG4gKiBAcmV0dXJucyB7QVBJLlBpbn1cbiAqL1xuY29uc3QgZGVjb2RlUGluID0gKHBpbikgPT4gKHsgLi4ucGluLCBjcmVhdGVkOiBuZXcgRGF0ZShwaW4uY3JlYXRlZCkgfSlcblxuY29uc3QgVG9rZW5Nb2RlbCA9IFRva2VuLlRva2VuXG5leHBvcnQgeyBUb2tlbk1vZGVsIGFzIFRva2VuIH1cbmV4cG9ydCB7IE5GVFN0b3JhZ2UsIEZpbGUsIEJsb2IsIEZvcm1EYXRhLCB0b0dhdGV3YXlVUkwgfVxuXG4vKipcbiAqIEp1c3QgdG8gdmVyaWZ5IEFQSSBjb21wYXRpYmlsaXR5LlxuICogQHR5cGUge0FQSS5BUEl9XG4gKi9cbmNvbnN0IGFwaSA9IE5GVFN0b3JhZ2VcbnZvaWQgYXBpXG4iLCJleHBvcnQgY29uc3QgZmV0Y2ggPSBnbG9iYWxUaGlzLmZldGNoXG5leHBvcnQgY29uc3QgRm9ybURhdGEgPSBnbG9iYWxUaGlzLkZvcm1EYXRhXG5leHBvcnQgY29uc3QgSGVhZGVycyA9IGdsb2JhbFRoaXMuSGVhZGVyc1xuZXhwb3J0IGNvbnN0IFJlcXVlc3QgPSBnbG9iYWxUaGlzLlJlcXVlc3RcbmV4cG9ydCBjb25zdCBSZXNwb25zZSA9IGdsb2JhbFRoaXMuUmVzcG9uc2VcbmV4cG9ydCBjb25zdCBCbG9iID0gZ2xvYmFsVGhpcy5CbG9iXG5leHBvcnQgY29uc3QgRmlsZSA9IGdsb2JhbFRoaXMuRmlsZVxuZXhwb3J0IGNvbnN0IFJlYWRhYmxlU3RyZWFtID0gZ2xvYmFsVGhpcy5SZWFkYWJsZVN0cmVhbVxuIiwiaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vbGliL2ludGVyZmFjZS5qcydcbmltcG9ydCB7IEJsb2IsIEZvcm1EYXRhIH0gZnJvbSAnLi9wbGF0Zm9ybS5qcydcbmltcG9ydCB7IHRvR2F0ZXdheVVSTCwgR0FURVdBWSB9IGZyb20gJy4vZ2F0ZXdheS5qcydcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZ2F0ZXdheS5qcycpLkdhdGV3YXlVUkxPcHRpb25zfSBFbWJlZE9wdGlvbnMgKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge0FQSS5Ub2tlbklucHV0fSBUXG4gKiBAaW1wbGVtZW50cyB7QVBJLlRva2VuPFQ+fVxuICovXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICAvKipcbiAgICogQHBhcmFtIHtBUEkuQ0lEU3RyaW5nfSBpcG5mdFxuICAgKiBAcGFyYW0ge0FQSS5FbmNvZGVkVVJMfSB1cmxcbiAgICogQHBhcmFtIHtBUEkuRW5jb2RlZDxULCBbW0Jsb2IsIFVSTF1dPn0gZGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoaXBuZnQsIHVybCwgZGF0YSkge1xuICAgIC8qKiBAcmVhZG9ubHkgKi9cbiAgICB0aGlzLmlwbmZ0ID0gaXBuZnRcbiAgICAvKiogQHJlYWRvbmx5ICovXG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICAvKiogQHJlYWRvbmx5ICovXG4gICAgdGhpcy5kYXRhID0gZGF0YVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgaXBuZnQ6IHsgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IGZhbHNlIH0sXG4gICAgICB1cmw6IHsgZW51bWVyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IGZhbHNlIH0sXG4gICAgICBkYXRhOiB7IGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UgfSxcbiAgICB9KVxuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJucyB7QVBJLkVuY29kZWQ8VCwgW1tCbG9iLCBVUkxdXT59XG4gICAqL1xuICBlbWJlZCgpIHtcbiAgICByZXR1cm4gVG9rZW4uZW1iZWQodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGVtcGxhdGUge0FQSS5Ub2tlbklucHV0fSBUXG4gICAqIEBwYXJhbSB7e2RhdGE6IEFQSS5FbmNvZGVkPFQsIFtbQmxvYiwgVVJMXV0+fX0gdG9rZW5cbiAgICogQHJldHVybnMge0FQSS5FbmNvZGVkPFQsIFtbQmxvYiwgVVJMXV0+fVxuICAgKi9cbiAgc3RhdGljIGVtYmVkKHsgZGF0YSB9KSB7XG4gICAgcmV0dXJuIGVtYmVkKGRhdGEsIHsgZ2F0ZXdheTogR0FURVdBWSB9KVxuICB9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7QVBJLkVuY29kZWQ8VCwgW1tCbG9iLCBVUkxdXT59IGlucHV0XG4gKiBAcGFyYW0ge0VtYmVkT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge0FQSS5FbmNvZGVkPFQsIFtbQmxvYiwgVVJMXV0+fVxuICovXG5leHBvcnQgY29uc3QgZW1iZWQgPSAoaW5wdXQsIG9wdGlvbnMpID0+XG4gIG1hcFdpdGgoaW5wdXQsIGlzVVJMLCBlbWJlZFVSTCwgb3B0aW9ucylcblxuLyoqXG4gKiBAdGVtcGxhdGUge0FQSS5Ub2tlbklucHV0fSBUXG4gKiBAcGFyYW0ge0FQSS5FbmNvZGVkVG9rZW48VD59IHZhbHVlXG4gKiBAcGFyYW0ge1NldDxzdHJpbmc+fSBwYXRocyAtIFBhdGhzIHdlcmUgdG8gZXhwY2V0IEVuY29kZWRVUkxzXG4gKiBAcmV0dXJucyB7VG9rZW48VD59XG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvZGUgPSAoeyBpcG5mdCwgdXJsLCBkYXRhIH0sIHBhdGhzKSA9PlxuICBuZXcgVG9rZW4oaXBuZnQsIHVybCwgbWFwV2l0aChkYXRhLCBpc0VuY29kZWRVUkwsIGRlY29kZVVSTCwgcGF0aHMpKVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybnMge3ZhbHVlIGlzIFVSTH1cbiAqL1xuY29uc3QgaXNVUkwgPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgVVJMXG5cbi8qKlxuICogQHRlbXBsYXRlIFN0YXRlXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZVxuICogQHBhcmFtIHtBUEkuRW5jb2RlZFVSTH0gdXJsXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBVUkxdfVxuICovXG5jb25zdCBkZWNvZGVVUkwgPSAoc3RhdGUsIHVybCkgPT4gW3N0YXRlLCBuZXcgVVJMKHVybCldXG5cbi8qKlxuICogQHBhcmFtIHtFbWJlZE9wdGlvbnN9IGNvbnRleHRcbiAqIEBwYXJhbSB7VVJMfSB1cmxcbiAqIEByZXR1cm5zIHtbRW1iZWRPcHRpb25zLCBVUkxdfVxuICovXG5jb25zdCBlbWJlZFVSTCA9IChjb250ZXh0LCB1cmwpID0+IFtjb250ZXh0LCB0b0dhdGV3YXlVUkwodXJsLCBjb250ZXh0KV1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm5zIHt2YWx1ZSBpcyBvYmplY3R9XG4gKi9cbmNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9IG51bGxcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7U2V0PHN0cmluZz59IGFzc2V0UGF0aHNcbiAqIEBwYXJhbSB7UHJvcGVydHlLZXlbXX0gcGF0aFxuICogQHJldHVybnMge3ZhbHVlIGlzIEFQSS5FbmNvZGVkVVJMfVxuICovXG5jb25zdCBpc0VuY29kZWRVUkwgPSAodmFsdWUsIGFzc2V0UGF0aHMsIHBhdGgpID0+XG4gIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgYXNzZXRQYXRocy5oYXMocGF0aC5qb2luKCcuJykpXG5cbi8qKlxuICogVGFrZXMgdG9rZW4gaW5wdXQgYW5kIGVuY29kZXMgaXQgaW50b1xuICogW0Zvcm1EYXRhXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9ybURhdGEpXG4gKiBvYmplY3Qgd2hlcmUgZm9ybSBmaWVsZCB2YWx1ZXMgYXJlIGRpc2NvdmVyZWQgYEJsb2JgIChvciBgRmlsZWApIG9iamVjdHMgaW5cbiAqIHRoZSBnaXZlbiB0b2tlbiBhbmQgZmllbGQga2V5cyBhcmUgYC5gIGpvaW5lZCBwYXRocyB3aGVyZSB0aGV5IHdlcmUgZGlzY292ZXJkXG4gKiBpbiB0aGUgdG9rZW4uIEFkZGl0aW9uYWxseSBlbmNvZGVkIGBGb3JtRGF0YWAgd2lsbCBhbHNvIGhhdmUgYSBmaWVsZFxuICogbmFtZWQgYG1ldGFgIGNvbnRhaW5pbmcgSlNPTiBzZXJpYWxpemVkIHRva2VuIHdpdGggYmxvYnMgYW5kIGZpbGUgdmFsdWVzXG4gKiBgbnVsbGAgc2V0IHRvIG51bGwgKHRoaXMgYWxsb3dzIGJhY2tlbmQgdG8gaW5qZXN0IGFsbCBvZiB0aGUgZmlsZXMgZnJvbVxuICogYG11bHRpcGFydC9mb3JtLWRhdGFgIHJlcXVlc3QgYW5kIHVwZGF0ZSBwcm92aWRlZCBcIm1ldGFcIiBkYXRhIHdpdGhcbiAqIGNvcnJlc3BvbmRpbmcgZmlsZSBpcGZzOi8vIFVSTHMpXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjb25zdCBjYXQgPSBuZXcgRmlsZShbXSwgJ2NhdC5wbmcnKVxuICogY29uc3Qga2l0dHkgPSBuZXcgRmlsZShbXSwgJ2tpdHR5LnBuZycpXG4gKiBjb25zdCBmb3JtID0gZW5jb2RlKHtcbiAqICAgbmFtZTogJ2hlbGxvJ1xuICogICBpbWFnZTogY2F0XG4gKiAgIHByb3BlcnRpZXM6IHtcbiAqICAgICBleHRyYToge1xuICogICAgICAgaW1hZ2U6IGtpdHR5XG4gKiAgICAgfVxuICogICB9XG4gKiB9KVxuICogWy4uLmZvcm0uZW50cmllcygpXSAvLz5cbiAqIC8vIFtcbiAqIC8vICAgWydpbWFnZScsIGNhdF0sXG4gKiAvLyAgIFsncHJvcGVydGllcy5leHRyYS5pbWFnZScsIGtpdHR5XSxcbiAqIC8vICAgWydtZXRhJywgJ3tcIm5hbWVcIjpcImhlbGxvXCIsaW1hZ2U6bnVsbCxcInByb3BlcnRpZXNcIjp7XCJleHRyYVwiOntcImtpdHR5XCI6IG51bGx9fX0nXVxuICogLy8gXVxuICogYGBgXG4gKlxuICogQHRlbXBsYXRlIHtBUEkuVG9rZW5JbnB1dH0gVFxuICogQHBhcmFtIHtBUEkuRW5jb2RlZDxULCBbW0Jsb2IsIEJsb2JdXT59IGlucHV0XG4gKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gKi9cbmV4cG9ydCBjb25zdCBlbmNvZGUgPSAoaW5wdXQpID0+IHtcbiAgY29uc3QgW2Zvcm0sIG1ldGFdID0gbWFwVmFsdWVXaXRoKFxuICAgIGlucHV0LFxuICAgIGlzQmxvYixcbiAgICBlbmNvZGVCbG9iLFxuICAgIG5ldyBGb3JtRGF0YSgpLFxuICAgIFtdXG4gIClcbiAgZm9ybS5zZXQoJ21ldGEnLCBKU09OLnN0cmluZ2lmeShtZXRhKSlcbiAgcmV0dXJuIGZvcm1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Zvcm1EYXRhfSBkYXRhXG4gKiBAcGFyYW0ge0Jsb2J9IGJsb2JcbiAqIEBwYXJhbSB7UHJvcGVydHlLZXlbXX0gcGF0aFxuICogQHJldHVybnMge1tGb3JtRGF0YSwgdm9pZF19XG4gKi9cbmNvbnN0IGVuY29kZUJsb2IgPSAoZGF0YSwgYmxvYiwgcGF0aCkgPT4ge1xuICBkYXRhLnNldChwYXRoLmpvaW4oJy4nKSwgYmxvYilcbiAgcmV0dXJuIFtkYXRhLCB1bmRlZmluZWRdXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJucyB7dmFsdWUgaXMgQmxvYn1cbiAqL1xuY29uc3QgaXNCbG9iID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIEJsb2JcblxuLyoqXG4gKiBTdWJzdGl0dWVzIHZhbHVlcyBpbiB0aGUgZ2l2ZW4gYGlucHV0YCB0aGF0IG1hdGNoIGBwKHZhbHVlKSA9PSB0cnVlYCB3aXRoXG4gKiBgZih2YWx1ZSwgY29udGV4dCwgcGF0aClgIHdoZXJlIGBjb250ZXh0YCBpcyB3aGF0ZXZlciB5b3UgcGFzcyAodXN1YWxseVxuICogYSBtdXRhYmxlIHN0YXRlKSBhbmQgYHBhdGhgIGlzIGEgYXJyYXkgb2Yga2V5cyAvIGluZGV4ZXMgd2hlcmUgdGhlIHZhbHVlXG4gKiB3YXMgZW5jb3VudGVyZWQuXG4gKlxuICogQHRlbXBsYXRlIFQsIEksIFgsIE8sIFN0YXRlXG4gKiBAcGFyYW0ge0FQSS5FbmNvZGVkPFQsIFtbSSwgWF1dPn0gaW5wdXQgLSBBcmJpdHJhcnkgaW5wdXQuXG4gKiBAcGFyYW0geyhpbnB1dDphbnksIHN0YXRlOlN0YXRlLCBwYXRoOlByb3BlcnR5S2V5W10pID0+IGlucHV0IGlzIFh9IHAgLSBQcmVkaWNhdGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lXG4gKiB3aGljaCB2YWx1ZXMgdG8gc3dhcC5cbiAqIEBwYXJhbSB7KHN0YXRlOlN0YXRlLCBpbnB1dDpYLCBwYXRoOlByb3BlcnR5S2V5W10pID0+IFtTdGF0ZSwgT119IGYgLSBGdW5jdGlvblxuICogdGhhdCBzd2FwcyBtYXRjaGluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSAtIFNvbWUgYWRkaXRpb25hbCBjb250ZXh0IHlvdSBuZWVkIGluIHRoZSBwcm9jZXNzLlxuICogbGlrZXkgeW91J2xsIHN0YXJ0IHdpdGggYFtdYC5cbiAqIEByZXR1cm5zIHtBUEkuRW5jb2RlZDxULCBbW0ksIE9dXT59XG4gKi9cbmV4cG9ydCBjb25zdCBtYXBXaXRoID0gKGlucHV0LCBwLCBmLCBzdGF0ZSkgPT4ge1xuICBjb25zdCBbLCBvdXRwdXRdID0gbWFwVmFsdWVXaXRoKGlucHV0LCBwLCBmLCBzdGF0ZSwgW10pXG4gIHJldHVybiBvdXRwdXRcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVCwgSSwgWCwgTywgU3RhdGVcbiAqIEBwYXJhbSB7QVBJLkVuY29kZWQ8VCwgW1tJLCBYXV0+fSBpbnB1dCAtIEFyYml0cmFyeSBpbnB1dC5cbiAqIEBwYXJhbSB7KGlucHV0OmFueSwgc3RhdGU6U3RhdGUsIHBhdGg6UHJvcGVydHlLZXlbXSkgPT4gaW5wdXQgaXMgWH0gcCAtIFByZWRpY2F0ZSBmdW5jdGlvbiB0byBkZXRlcm1pbmVcbiAqIHdoaWNoIHZhbHVlcyB0byBzd2FwLlxuICogQHBhcmFtIHsoc3RhdGU6U3RhdGUsIGlucHV0OlgsIHBhdGg6UHJvcGVydHlLZXlbXSkgPT4gW1N0YXRlLCBPXX0gZiAtIEZ1bmN0aW9uXG4gKiB0aGF0IHN3YXBzIG1hdGNoaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIC0gU29tZSBhZGRpdGlvbmFsIGNvbnRleHQgeW91IG5lZWQgaW4gdGhlIHByb2Nlc3MuXG4gKiBAcGFyYW0ge1Byb3BlcnR5S2V5W119IHBhdGggLSBQYXRoIHdoZXJlIHRoZSB2YWx1ZSB3YXMgZW5jb3VudGVyZWQuIE1vc3RcbiAqIGxpa2V5IHlvdSdsbCBzdGFydCB3aXRoIGBbXWAuXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBBUEkuRW5jb2RlZDxULCBbW0ksIE9dXT5dfVxuICovXG5jb25zdCBtYXBWYWx1ZVdpdGggPSAoaW5wdXQsIHAsIGYsIHN0YXRlLCBwYXRoKSA9PlxuICBwKGlucHV0LCBzdGF0ZSwgcGF0aClcbiAgICA/IGYoc3RhdGUsIGlucHV0LCBwYXRoKVxuICAgIDogQXJyYXkuaXNBcnJheShpbnB1dClcbiAgICA/IG1hcEFycmF5V2l0aChpbnB1dCwgcCwgZiwgc3RhdGUsIHBhdGgpXG4gICAgOiBpc09iamVjdChpbnB1dClcbiAgICA/IG1hcE9iamVjdFdpdGgoaW5wdXQsIHAsIGYsIHN0YXRlLCBwYXRoKVxuICAgIDogW3N0YXRlLCAvKiogQHR5cGUge2FueX0gKi8gKGlucHV0KV1cblxuLyoqXG4gKiBKdXN0IGxpa2UgYG1hcFdpdGhgIGV4Y2VwdFxuICpcbiAqIEB0ZW1wbGF0ZSBTdGF0ZSwgVCwgSSwgWCwgT1xuICogQHBhcmFtIHtBUEkuRW5jb2RlZDxULCBbW0ksIFhdXT59IGlucHV0XG4gKiBAcGFyYW0geyhpbnB1dDphbnksIHN0YXRlOlN0YXRlLCBwYXRoOlByb3BlcnR5S2V5W10pID0+IGlucHV0IGlzIFh9IHBcbiAqIEBwYXJhbSB7KHN0YXRlOiBTdGF0ZSwgaW5wdXQ6WCwgcGF0aDpQcm9wZXJ0eUtleVtdKSA9PiBbU3RhdGUsIE9dfSBmXG4gKiBAcGFyYW0ge1N0YXRlfSBpbml0XG4gKiBAcGFyYW0ge1Byb3BlcnR5S2V5W119IHBhdGhcbiAqIEByZXR1cm5zIHtbU3RhdGUsIEFQSS5FbmNvZGVkPFQsIFtbSSwgT11dPl19XG4gKi9cbmNvbnN0IG1hcE9iamVjdFdpdGggPSAoaW5wdXQsIHAsIGYsIGluaXQsIHBhdGgpID0+IHtcbiAgbGV0IHN0YXRlID0gaW5pdFxuICBjb25zdCBvdXRwdXQgPSAvKiogQHR5cGUge0FQSS5FbmNvZGVkPFQsIFtbSSwgT11dPn0gKi8gKHt9KVxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhpbnB1dCkpIHtcbiAgICBjb25zdCBbbmV4dCwgb3V0XSA9IG1hcFZhbHVlV2l0aCh2YWx1ZSwgcCwgZiwgc3RhdGUsIFsuLi5wYXRoLCBrZXldKVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBvdXRwdXRba2V5XSA9IG91dFxuICAgIHN0YXRlID0gbmV4dFxuICB9XG4gIHJldHVybiBbc3RhdGUsIG91dHB1dF1cbn1cblxuLyoqXG4gKiBKdXN0IGxpa2UgYG1hcFdpdGhgIGV4Y2VwdCBmb3IgQXJyYXlzLlxuICpcbiAqIEB0ZW1wbGF0ZSBJLCBYLCBPLCBTdGF0ZVxuICogQHRlbXBsYXRlIHthbnlbXX0gVFxuICogQHBhcmFtIHtUfSBpbnB1dFxuICogQHBhcmFtIHsoaW5wdXQ6YW55LCBzdGF0ZTpTdGF0ZSwgcGF0aDpQcm9wZXJ0eUtleVtdKSA9PiBpbnB1dCBpcyBYfSBwXG4gKiBAcGFyYW0geyhzdGF0ZTogU3RhdGUsIGlucHV0OlgsIHBhdGg6UHJvcGVydHlLZXlbXSkgPT4gW1N0YXRlLCBPXX0gZlxuICogQHBhcmFtIHtTdGF0ZX0gaW5pdFxuICogQHBhcmFtIHtQcm9wZXJ0eUtleVtdfSBwYXRoXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBBUEkuRW5jb2RlZDxULCBbW0ksIE9dXT5dfVxuICovXG5jb25zdCBtYXBBcnJheVdpdGggPSAoaW5wdXQsIHAsIGYsIGluaXQsIHBhdGgpID0+IHtcbiAgY29uc3Qgb3V0cHV0ID0gLyoqIEB0eXBlIHt1bmtub3duW119ICovIChbXSlcblxuICBsZXQgc3RhdGUgPSBpbml0XG4gIGZvciAoY29uc3QgW2luZGV4LCBlbGVtZW50XSBvZiBpbnB1dC5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCBbbmV4dCwgb3V0XSA9IG1hcFZhbHVlV2l0aChlbGVtZW50LCBwLCBmLCBzdGF0ZSwgWy4uLnBhdGgsIGluZGV4XSlcbiAgICBvdXRwdXRbaW5kZXhdID0gb3V0XG4gICAgc3RhdGUgPSBuZXh0XG4gIH1cblxuICByZXR1cm4gW3N0YXRlLCAvKiogQHR5cGUge0FQSS5FbmNvZGVkPFQsIFtbSSwgT11dPn0gKi8gKG91dHB1dCldXG59XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCByZXRyeSA9IHJlcXVpcmUoJ3JldHJ5Jyk7XG5cbmNvbnN0IG5ldHdvcmtFcnJvck1zZ3MgPSBbXG5cdCdGYWlsZWQgdG8gZmV0Y2gnLCAvLyBDaHJvbWVcblx0J05ldHdvcmtFcnJvciB3aGVuIGF0dGVtcHRpbmcgdG8gZmV0Y2ggcmVzb3VyY2UuJywgLy8gRmlyZWZveFxuXHQnVGhlIEludGVybmV0IGNvbm5lY3Rpb24gYXBwZWFycyB0byBiZSBvZmZsaW5lLicsIC8vIFNhZmFyaVxuXHQnTmV0d29yayByZXF1ZXN0IGZhaWxlZCcgLy8gYGNyb3NzLWZldGNoYFxuXTtcblxuY2xhc3MgQWJvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHR0aGlzLm9yaWdpbmFsRXJyb3IgPSBtZXNzYWdlO1xuXHRcdFx0KHttZXNzYWdlfSA9IG1lc3NhZ2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9yaWdpbmFsRXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdFx0XHR0aGlzLm9yaWdpbmFsRXJyb3Iuc3RhY2sgPSB0aGlzLnN0YWNrO1xuXHRcdH1cblxuXHRcdHRoaXMubmFtZSA9ICdBYm9ydEVycm9yJztcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9XG59XG5cbmNvbnN0IGRlY29yYXRlRXJyb3JXaXRoQ291bnRzID0gKGVycm9yLCBhdHRlbXB0TnVtYmVyLCBvcHRpb25zKSA9PiB7XG5cdC8vIE1pbnVzIDEgZnJvbSBhdHRlbXB0TnVtYmVyIGJlY2F1c2UgdGhlIGZpcnN0IGF0dGVtcHQgZG9lcyBub3QgY291bnQgYXMgYSByZXRyeVxuXHRjb25zdCByZXRyaWVzTGVmdCA9IG9wdGlvbnMucmV0cmllcyAtIChhdHRlbXB0TnVtYmVyIC0gMSk7XG5cblx0ZXJyb3IuYXR0ZW1wdE51bWJlciA9IGF0dGVtcHROdW1iZXI7XG5cdGVycm9yLnJldHJpZXNMZWZ0ID0gcmV0cmllc0xlZnQ7XG5cdHJldHVybiBlcnJvcjtcbn07XG5cbmNvbnN0IGlzTmV0d29ya0Vycm9yID0gZXJyb3JNZXNzYWdlID0+IG5ldHdvcmtFcnJvck1zZ3MuaW5jbHVkZXMoZXJyb3JNZXNzYWdlKTtcblxuY29uc3QgcFJldHJ5ID0gKGlucHV0LCBvcHRpb25zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0b25GYWlsZWRBdHRlbXB0OiAoKSA9PiB7fSxcblx0XHRyZXRyaWVzOiAxMCxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0Y29uc3Qgb3BlcmF0aW9uID0gcmV0cnkub3BlcmF0aW9uKG9wdGlvbnMpO1xuXG5cdG9wZXJhdGlvbi5hdHRlbXB0KGFzeW5jIGF0dGVtcHROdW1iZXIgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXNvbHZlKGF3YWl0IGlucHV0KGF0dGVtcHROdW1iZXIpKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0aWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcblx0XHRcdFx0cmVqZWN0KG5ldyBUeXBlRXJyb3IoYE5vbi1lcnJvciB3YXMgdGhyb3duOiBcIiR7ZXJyb3J9XCIuIFlvdSBzaG91bGQgb25seSB0aHJvdyBlcnJvcnMuYCkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEFib3J0RXJyb3IpIHtcblx0XHRcdFx0b3BlcmF0aW9uLnN0b3AoKTtcblx0XHRcdFx0cmVqZWN0KGVycm9yLm9yaWdpbmFsRXJyb3IpO1xuXHRcdFx0fSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvciAmJiAhaXNOZXR3b3JrRXJyb3IoZXJyb3IubWVzc2FnZSkpIHtcblx0XHRcdFx0b3BlcmF0aW9uLnN0b3AoKTtcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlY29yYXRlRXJyb3JXaXRoQ291bnRzKGVycm9yLCBhdHRlbXB0TnVtYmVyLCBvcHRpb25zKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGF3YWl0IG9wdGlvbnMub25GYWlsZWRBdHRlbXB0KGVycm9yKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghb3BlcmF0aW9uLnJldHJ5KGVycm9yKSkge1xuXHRcdFx0XHRcdHJlamVjdChvcGVyYXRpb24ubWFpbkVycm9yKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBSZXRyeTtcbi8vIFRPRE86IHJlbW92ZSB0aGlzIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb25cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBwUmV0cnk7XG5cbm1vZHVsZS5leHBvcnRzLkFib3J0RXJyb3IgPSBBYm9ydEVycm9yO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcmV0cnknKTsiLCJ2YXIgUmV0cnlPcGVyYXRpb24gPSByZXF1aXJlKCcuL3JldHJ5X29wZXJhdGlvbicpO1xuXG5leHBvcnRzLm9wZXJhdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIHRpbWVvdXRzID0gZXhwb3J0cy50aW1lb3V0cyhvcHRpb25zKTtcbiAgcmV0dXJuIG5ldyBSZXRyeU9wZXJhdGlvbih0aW1lb3V0cywge1xuICAgICAgZm9yZXZlcjogb3B0aW9ucyAmJiAob3B0aW9ucy5mb3JldmVyIHx8IG9wdGlvbnMucmV0cmllcyA9PT0gSW5maW5pdHkpLFxuICAgICAgdW5yZWY6IG9wdGlvbnMgJiYgb3B0aW9ucy51bnJlZixcbiAgICAgIG1heFJldHJ5VGltZTogb3B0aW9ucyAmJiBvcHRpb25zLm1heFJldHJ5VGltZVxuICB9KTtcbn07XG5cbmV4cG9ydHMudGltZW91dHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIG9wdHMgPSB7XG4gICAgcmV0cmllczogMTAsXG4gICAgZmFjdG9yOiAyLFxuICAgIG1pblRpbWVvdXQ6IDEgKiAxMDAwLFxuICAgIG1heFRpbWVvdXQ6IEluZmluaXR5LFxuICAgIHJhbmRvbWl6ZTogZmFsc2VcbiAgfTtcbiAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICBvcHRzW2tleV0gPSBvcHRpb25zW2tleV07XG4gIH1cblxuICBpZiAob3B0cy5taW5UaW1lb3V0ID4gb3B0cy5tYXhUaW1lb3V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaW5UaW1lb3V0IGlzIGdyZWF0ZXIgdGhhbiBtYXhUaW1lb3V0Jyk7XG4gIH1cblxuICB2YXIgdGltZW91dHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRzLnJldHJpZXM7IGkrKykge1xuICAgIHRpbWVvdXRzLnB1c2godGhpcy5jcmVhdGVUaW1lb3V0KGksIG9wdHMpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZm9yZXZlciAmJiAhdGltZW91dHMubGVuZ3RoKSB7XG4gICAgdGltZW91dHMucHVzaCh0aGlzLmNyZWF0ZVRpbWVvdXQoaSwgb3B0cykpO1xuICB9XG5cbiAgLy8gc29ydCB0aGUgYXJyYXkgbnVtZXJpY2FsbHkgYXNjZW5kaW5nXG4gIHRpbWVvdXRzLnNvcnQoZnVuY3Rpb24oYSxiKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICByZXR1cm4gdGltZW91dHM7XG59O1xuXG5leHBvcnRzLmNyZWF0ZVRpbWVvdXQgPSBmdW5jdGlvbihhdHRlbXB0LCBvcHRzKSB7XG4gIHZhciByYW5kb20gPSAob3B0cy5yYW5kb21pemUpXG4gICAgPyAoTWF0aC5yYW5kb20oKSArIDEpXG4gICAgOiAxO1xuXG4gIHZhciB0aW1lb3V0ID0gTWF0aC5yb3VuZChyYW5kb20gKiBNYXRoLm1heChvcHRzLm1pblRpbWVvdXQsIDEpICogTWF0aC5wb3cob3B0cy5mYWN0b3IsIGF0dGVtcHQpKTtcbiAgdGltZW91dCA9IE1hdGgubWluKHRpbWVvdXQsIG9wdHMubWF4VGltZW91dCk7XG5cbiAgcmV0dXJuIHRpbWVvdXQ7XG59O1xuXG5leHBvcnRzLndyYXAgPSBmdW5jdGlvbihvYmosIG9wdGlvbnMsIG1ldGhvZHMpIHtcbiAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIG1ldGhvZHMgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgaWYgKCFtZXRob2RzKSB7XG4gICAgbWV0aG9kcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbWV0aG9kcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1ldGhvZCAgID0gbWV0aG9kc1tpXTtcbiAgICB2YXIgb3JpZ2luYWwgPSBvYmpbbWV0aG9kXTtcblxuICAgIG9ialttZXRob2RdID0gZnVuY3Rpb24gcmV0cnlXcmFwcGVyKG9yaWdpbmFsKSB7XG4gICAgICB2YXIgb3AgICAgICAgPSBleHBvcnRzLm9wZXJhdGlvbihvcHRpb25zKTtcbiAgICAgIHZhciBhcmdzICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuXG4gICAgICBhcmdzLnB1c2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmIChvcC5yZXRyeShlcnIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPSBvcC5tYWluRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG9wLmF0dGVtcHQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG9yaWdpbmFsLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9LmJpbmQob2JqLCBvcmlnaW5hbCk7XG4gICAgb2JqW21ldGhvZF0ub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbn07XG4iLCJmdW5jdGlvbiBSZXRyeU9wZXJhdGlvbih0aW1lb3V0cywgb3B0aW9ucykge1xuICAvLyBDb21wYXRpYmlsaXR5IGZvciB0aGUgb2xkICh0aW1lb3V0cywgcmV0cnlGb3JldmVyKSBzaWduYXR1cmVcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zID0geyBmb3JldmVyOiBvcHRpb25zIH07XG4gIH1cblxuICB0aGlzLl9vcmlnaW5hbFRpbWVvdXRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aW1lb3V0cykpO1xuICB0aGlzLl90aW1lb3V0cyA9IHRpbWVvdXRzO1xuICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5fbWF4UmV0cnlUaW1lID0gb3B0aW9ucyAmJiBvcHRpb25zLm1heFJldHJ5VGltZSB8fCBJbmZpbml0eTtcbiAgdGhpcy5fZm4gPSBudWxsO1xuICB0aGlzLl9lcnJvcnMgPSBbXTtcbiAgdGhpcy5fYXR0ZW1wdHMgPSAxO1xuICB0aGlzLl9vcGVyYXRpb25UaW1lb3V0ID0gbnVsbDtcbiAgdGhpcy5fb3BlcmF0aW9uVGltZW91dENiID0gbnVsbDtcbiAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gIHRoaXMuX29wZXJhdGlvblN0YXJ0ID0gbnVsbDtcbiAgdGhpcy5fdGltZXIgPSBudWxsO1xuXG4gIGlmICh0aGlzLl9vcHRpb25zLmZvcmV2ZXIpIHtcbiAgICB0aGlzLl9jYWNoZWRUaW1lb3V0cyA9IHRoaXMuX3RpbWVvdXRzLnNsaWNlKDApO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFJldHJ5T3BlcmF0aW9uO1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fYXR0ZW1wdHMgPSAxO1xuICB0aGlzLl90aW1lb3V0cyA9IHRoaXMuX29yaWdpbmFsVGltZW91dHMuc2xpY2UoMCk7XG59XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl90aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICB9XG4gIGlmICh0aGlzLl90aW1lcikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIH1cblxuICB0aGlzLl90aW1lb3V0cyAgICAgICA9IFtdO1xuICB0aGlzLl9jYWNoZWRUaW1lb3V0cyA9IG51bGw7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUucmV0cnkgPSBmdW5jdGlvbihlcnIpIHtcbiAgaWYgKHRoaXMuX3RpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gIH1cblxuICBpZiAoIWVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgaWYgKGVyciAmJiBjdXJyZW50VGltZSAtIHRoaXMuX29wZXJhdGlvblN0YXJ0ID49IHRoaXMuX21heFJldHJ5VGltZSkge1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKGVycik7XG4gICAgdGhpcy5fZXJyb3JzLnVuc2hpZnQobmV3IEVycm9yKCdSZXRyeU9wZXJhdGlvbiB0aW1lb3V0IG9jY3VycmVkJykpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRoaXMuX2Vycm9ycy5wdXNoKGVycik7XG5cbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0cy5zaGlmdCgpO1xuICBpZiAodGltZW91dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFRpbWVvdXRzKSB7XG4gICAgICAvLyByZXRyeSBmb3JldmVyLCBvbmx5IGtlZXAgbGFzdCBlcnJvclxuICAgICAgdGhpcy5fZXJyb3JzLnNwbGljZSgwLCB0aGlzLl9lcnJvcnMubGVuZ3RoIC0gMSk7XG4gICAgICB0aW1lb3V0ID0gdGhpcy5fY2FjaGVkVGltZW91dHMuc2xpY2UoLTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5fYXR0ZW1wdHMrKztcblxuICAgIGlmIChzZWxmLl9vcGVyYXRpb25UaW1lb3V0Q2IpIHtcbiAgICAgIHNlbGYuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLl9vcGVyYXRpb25UaW1lb3V0Q2Ioc2VsZi5fYXR0ZW1wdHMpO1xuICAgICAgfSwgc2VsZi5fb3BlcmF0aW9uVGltZW91dCk7XG5cbiAgICAgIGlmIChzZWxmLl9vcHRpb25zLnVucmVmKSB7XG4gICAgICAgICAgc2VsZi5fdGltZW91dC51bnJlZigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYuX2ZuKHNlbGYuX2F0dGVtcHRzKTtcbiAgfSwgdGltZW91dCk7XG5cbiAgaWYgKHRoaXMuX29wdGlvbnMudW5yZWYpIHtcbiAgICAgIHRoaXMuX3RpbWVyLnVucmVmKCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5hdHRlbXB0ID0gZnVuY3Rpb24oZm4sIHRpbWVvdXRPcHMpIHtcbiAgdGhpcy5fZm4gPSBmbjtcblxuICBpZiAodGltZW91dE9wcykge1xuICAgIGlmICh0aW1lb3V0T3BzLnRpbWVvdXQpIHtcbiAgICAgIHRoaXMuX29wZXJhdGlvblRpbWVvdXQgPSB0aW1lb3V0T3BzLnRpbWVvdXQ7XG4gICAgfVxuICAgIGlmICh0aW1lb3V0T3BzLmNiKSB7XG4gICAgICB0aGlzLl9vcGVyYXRpb25UaW1lb3V0Q2IgPSB0aW1lb3V0T3BzLmNiO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHRoaXMuX29wZXJhdGlvblRpbWVvdXRDYikge1xuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fb3BlcmF0aW9uVGltZW91dENiKCk7XG4gICAgfSwgc2VsZi5fb3BlcmF0aW9uVGltZW91dCk7XG4gIH1cblxuICB0aGlzLl9vcGVyYXRpb25TdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIHRoaXMuX2ZuKHRoaXMuX2F0dGVtcHRzKTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS50cnkgPSBmdW5jdGlvbihmbikge1xuICBjb25zb2xlLmxvZygnVXNpbmcgUmV0cnlPcGVyYXRpb24udHJ5KCkgaXMgZGVwcmVjYXRlZCcpO1xuICB0aGlzLmF0dGVtcHQoZm4pO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oZm4pIHtcbiAgY29uc29sZS5sb2coJ1VzaW5nIFJldHJ5T3BlcmF0aW9uLnN0YXJ0KCkgaXMgZGVwcmVjYXRlZCcpO1xuICB0aGlzLmF0dGVtcHQoZm4pO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnN0YXJ0ID0gUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnRyeTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLmVycm9ycyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fZXJyb3JzO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLmF0dGVtcHRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9hdHRlbXB0cztcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5tYWluRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX2Vycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBjb3VudHMgPSB7fTtcbiAgdmFyIG1haW5FcnJvciA9IG51bGw7XG4gIHZhciBtYWluRXJyb3JDb3VudCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9lcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZXJyb3IgPSB0aGlzLl9lcnJvcnNbaV07XG4gICAgdmFyIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgIHZhciBjb3VudCA9IChjb3VudHNbbWVzc2FnZV0gfHwgMCkgKyAxO1xuXG4gICAgY291bnRzW21lc3NhZ2VdID0gY291bnQ7XG5cbiAgICBpZiAoY291bnQgPj0gbWFpbkVycm9yQ291bnQpIHtcbiAgICAgIG1haW5FcnJvciA9IGVycm9yO1xuICAgICAgbWFpbkVycm9yQ291bnQgPSBjb3VudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFpbkVycm9yO1xufTtcbiIsImFzeW5jIGZ1bmN0aW9uKiBfYmF0Y2goc2l6ZSwgaXRlcmFibGUpIHtcbiAgICBsZXQgZGF0YUJhdGNoID0gW107XG4gICAgZm9yIGF3YWl0IChjb25zdCBkYXRhIG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgIGRhdGFCYXRjaC5wdXNoKGRhdGEpO1xuICAgICAgICBpZiAoZGF0YUJhdGNoLmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgICAgICAgICAgeWllbGQgZGF0YUJhdGNoO1xuICAgICAgICAgICAgZGF0YUJhdGNoID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGFCYXRjaC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHlpZWxkIGRhdGFCYXRjaDtcbiAgICB9XG59XG5mdW5jdGlvbiogX3N5bmNCYXRjaChzaXplLCBpdGVyYWJsZSkge1xuICAgIGxldCBkYXRhQmF0Y2ggPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgZGF0YUJhdGNoLnB1c2goZGF0YSk7XG4gICAgICAgIGlmIChkYXRhQmF0Y2gubGVuZ3RoID09PSBzaXplKSB7XG4gICAgICAgICAgICB5aWVsZCBkYXRhQmF0Y2g7XG4gICAgICAgICAgICBkYXRhQmF0Y2ggPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YUJhdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgeWllbGQgZGF0YUJhdGNoO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGJhdGNoKHNpemUsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJpZWRJdGVyYWJsZSA9PiBiYXRjaChzaXplLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICBpZiAoaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKSB7XG4gICAgICAgIHJldHVybiBfYmF0Y2goc2l6ZSwgaXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gX3N5bmNCYXRjaChzaXplLCBpdGVyYWJsZSk7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yKGl0ZXJhYmxlKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZXNcIiBkb2VzIG5vdCB0byBjb25mb3JtIHRvIGFueSBvZiB0aGUgaXRlcmF0b3Igb3IgaXRlcmFibGUgcHJvdG9jb2xzJyk7XG59XG5cbmZ1bmN0aW9uIGRlZmVyKCkge1xuICAgIGxldCByZWplY3Q7XG4gICAgbGV0IHJlc29sdmU7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlRnVuYywgcmVqZWN0RnVuYykgPT4ge1xuICAgICAgICByZXNvbHZlID0gcmVzb2x2ZUZ1bmM7XG4gICAgICAgIHJlamVjdCA9IHJlamVjdEZ1bmM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlLFxuICAgIH07XG59XG5cbi8vLyA8cmVmZXJlbmNlIGxpYj1cImVzbmV4dC5hc3luY2l0ZXJhYmxlXCIgLz5cbmZ1bmN0aW9uIF9idWZmZXIoc2l6ZSwgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICBjb25zdCByZXN1bHRRdWV1ZSA9IFtdO1xuICAgIGNvbnN0IHJlYWRRdWV1ZSA9IFtdO1xuICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG4gICAgbGV0IGVuZGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZnVsZmlsbFJlYWRRdWV1ZSgpIHtcbiAgICAgICAgd2hpbGUgKHJlYWRRdWV1ZS5sZW5ndGggPiAwICYmIHJlc3VsdFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWREZWZlcnJlZCA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHJlc3VsdFF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWFkRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlYWREZWZlcnJlZC5yZXNvbHZlKHsgZG9uZTogZmFsc2UsIHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChyZWFkUXVldWUubGVuZ3RoID4gMCAmJiBlbmRlZCkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNvbHZlIH0gPSByZWFkUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbGxRdWV1ZSgpIHtcbiAgICAgICAgaWYgKGVuZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0UXVldWUubGVuZ3RoID49IHNpemUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaCh7IHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaCh7IGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICBmaWxsUXVldWUoKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgaWYgKHJlc3VsdFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWxsUXVldWUoKTtcbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9OyAvLyBzdHVwaWQgdHNcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIHJlYWRRdWV1ZS5wdXNoKGRlZmVycmVkKTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCBhc3luY0l0ZXJhYmxlSXRlcmF0b3IgPSB7XG4gICAgICAgIG5leHQsXG4gICAgICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl06ICgpID0+IGFzeW5jSXRlcmFibGVJdGVyYXRvcixcbiAgICB9O1xuICAgIHJldHVybiBhc3luY0l0ZXJhYmxlSXRlcmF0b3I7XG59XG5mdW5jdGlvbiogc3luY0J1ZmZlcihzaXplLCBpdGVyYWJsZSkge1xuICAgIGNvbnN0IHZhbHVlUXVldWUgPSBbXTtcbiAgICBsZXQgZTtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICB2YWx1ZVF1ZXVlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlUXVldWUubGVuZ3RoIDw9IHNpemUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHlpZWxkIHZhbHVlUXVldWUuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZSA9IGVycm9yO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlUXVldWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxuICAgIGlmIChlKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuZnVuY3Rpb24gYnVmZmVyKHNpemUsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJpZWRJdGVyYWJsZSA9PiBidWZmZXIoc2l6ZSwgY3VycmllZEl0ZXJhYmxlKTtcbiAgICB9XG4gICAgaWYgKHNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgIH1cbiAgICBpZiAoaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKSB7XG4gICAgICAgIHJldHVybiBfYnVmZmVyKHNpemUsIGl0ZXJhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN5bmNCdWZmZXIoc2l6ZSwgaXRlcmFibGUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBfY29sbGVjdChpdGVyYWJsZSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufVxuZnVuY3Rpb24gY29sbGVjdChpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHtcbiAgICAgICAgcmV0dXJuIF9jb2xsZWN0KGl0ZXJhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaXRlcmFibGUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiogX2NvbmNhdChpdGVyYWJsZXMpIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGl0ZXJhYmxlIG9mIGl0ZXJhYmxlcykge1xuICAgICAgICB5aWVsZCogaXRlcmFibGU7XG4gICAgfVxufVxuZnVuY3Rpb24qIF9zeW5jQ29uY2F0KGl0ZXJhYmxlcykge1xuICAgIGZvciAoY29uc3QgaXRlcmFibGUgb2YgaXRlcmFibGVzKSB7XG4gICAgICAgIHlpZWxkKiBpdGVyYWJsZTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb25jYXQoLi4uaXRlcmFibGVzKSB7XG4gICAgY29uc3QgaGFzQW55QXN5bmMgPSBpdGVyYWJsZXMuZmluZChpdHIgPT4gaXRyW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSAhPT0gdW5kZWZpbmVkKTtcbiAgICBpZiAoaGFzQW55QXN5bmMpIHtcbiAgICAgICAgcmV0dXJuIF9jb25jYXQoaXRlcmFibGVzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBfc3luY0NvbmNhdChpdGVyYWJsZXMpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gX2NvbnN1bWUoaXRlcmFibGUpIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbCBvZiBpdGVyYWJsZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuZnVuY3Rpb24gY29uc3VtZShpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHtcbiAgICAgICAgcmV0dXJuIF9jb25zdW1lKGl0ZXJhYmxlKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2YWwgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24qIF9maWx0ZXIoZmlsdGVyRnVuYywgaXRlcmFibGUpIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGRhdGEgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgaWYgKGF3YWl0IGZpbHRlckZ1bmMoZGF0YSkpIHtcbiAgICAgICAgICAgIHlpZWxkIGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBmaWx0ZXIoZmlsdGVyRnVuYywgaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gKGN1cnJpZWRJdGVyYWJsZSkgPT4gX2ZpbHRlcihmaWx0ZXJGdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gX2ZpbHRlcihmaWx0ZXJGdW5jLCBpdGVyYWJsZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uKiBmbGF0dGVuKGl0ZXJhYmxlKSB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBtYXliZUl0ciBvZiBpdGVyYWJsZSkge1xuICAgICAgICBpZiAobWF5YmVJdHIgJiYgdHlwZW9mIG1heWJlSXRyICE9PSAnc3RyaW5nJyAmJiAobWF5YmVJdHJbU3ltYm9sLml0ZXJhdG9yXSB8fCBtYXliZUl0cltTeW1ib2wuYXN5bmNJdGVyYXRvcl0pKSB7XG4gICAgICAgICAgICB5aWVsZCogZmxhdHRlbihtYXliZUl0cik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBtYXliZUl0cjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24qIF9tYXAoZnVuYywgaXRlcmFibGUpIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbCBvZiBpdGVyYWJsZSkge1xuICAgICAgICB5aWVsZCBhd2FpdCBmdW5jKHZhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwKGZ1bmMsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJpZWRJdGVyYWJsZSA9PiBfbWFwKGZ1bmMsIGN1cnJpZWRJdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfbWFwKGZ1bmMsIGl0ZXJhYmxlKTtcbn1cblxuZnVuY3Rpb24gZmxhdE1hcChmdW5jLCBpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjdXJyaWVkSXRlcmFibGUgPT4gZmxhdE1hcChmdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyKGkgPT4gaSAhPT0gdW5kZWZpbmVkICYmIGkgIT09IG51bGwsIGZsYXR0ZW4obWFwKGZ1bmMsIGl0ZXJhYmxlKSkpO1xufVxuXG5mdW5jdGlvbiBfZmxhdFRyYW5zZm9ybShjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICBjb25zdCByZXN1bHRRdWV1ZSA9IFtdO1xuICAgIGNvbnN0IHJlYWRRdWV1ZSA9IFtdO1xuICAgIGxldCBlbmRlZCA9IGZhbHNlO1xuICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG4gICAgbGV0IGluZmxpZ2h0Q291bnQgPSAwO1xuICAgIGxldCBsYXN0RXJyb3IgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGZ1bGZpbGxSZWFkUXVldWUoKSB7XG4gICAgICAgIHdoaWxlIChyZWFkUXVldWUubGVuZ3RoID4gMCAmJiByZXN1bHRRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlc29sdmUgfSA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRvbmU6IGZhbHNlLCB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocmVhZFF1ZXVlLmxlbmd0aCA+IDAgJiYgaW5mbGlnaHRDb3VudCA9PT0gMCAmJiBlbmRlZCkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNvbHZlLCByZWplY3QgfSA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChsYXN0RXJyb3IpO1xuICAgICAgICAgICAgICAgIGxhc3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmaWxsUXVldWUoKSB7XG4gICAgICAgIGlmIChlbmRlZCkge1xuICAgICAgICAgICAgZnVsZmlsbFJlYWRRdWV1ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZmxpZ2h0Q291bnQgKyByZXN1bHRRdWV1ZS5sZW5ndGggPj0gY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgaW5mbGlnaHRDb3VudCsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICBlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaW5mbGlnaHRDb3VudC0tO1xuICAgICAgICAgICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hcEFuZFF1ZXVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZmxpZ2h0Q291bnQtLTtcbiAgICAgICAgICAgIGxhc3RFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgZnVsZmlsbFJlYWRRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG1hcEFuZFF1ZXVlKGl0clZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGZ1bmMoaXRyVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkge1xuICAgICAgICAgICAgICAgIGZvciBhd2FpdCAoY29uc3QgYXN5bmNWYWwgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaChhc3luY1ZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0RXJyb3IgPSBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpbmZsaWdodENvdW50LS07XG4gICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIGlmIChyZXN1bHRRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgICAgICAgIHJlYWRRdWV1ZS5wdXNoKGRlZmVycmVkKTtcbiAgICAgICAgICAgIGZpbGxRdWV1ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBmaWxsUXVldWUoKTtcbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlIH07XG4gICAgfVxuICAgIGNvbnN0IGFzeW5jSXRlcmFibGVJdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dCxcbiAgICAgICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTogKCkgPT4gYXN5bmNJdGVyYWJsZUl0ZXJhdG9yLFxuICAgIH07XG4gICAgcmV0dXJuIGFzeW5jSXRlcmFibGVJdGVyYXRvcjtcbn1cbmZ1bmN0aW9uIGZsYXRUcmFuc2Zvcm0oY29uY3VycmVuY3ksIGZ1bmMsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGZ1bmMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gKGN1cnJpZWRGdW5jLCBjdXJyaWVkSXRlcmFibGUpID0+IGN1cnJpZWRJdGVyYWJsZVxuICAgICAgICAgICAgPyBmbGF0VHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBjdXJyaWVkRnVuYywgY3VycmllZEl0ZXJhYmxlKVxuICAgICAgICAgICAgOiBmbGF0VHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBjdXJyaWVkRnVuYyk7XG4gICAgfVxuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEl0ZXJhYmxlKSA9PiBmbGF0VHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBmdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyKGkgPT4gaSAhPT0gdW5kZWZpbmVkICYmIGkgIT09IG51bGwsIGZsYXR0ZW4oX2ZsYXRUcmFuc2Zvcm0oY29uY3VycmVuY3ksIGZ1bmMsIGl0ZXJhYmxlKSkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvbmNlUmVhZGFibGUoc3RyZWFtKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBzdHJlYW0ub25jZSgncmVhZGFibGUnLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuYXN5bmMgZnVuY3Rpb24qIF9mcm9tU3RyZWFtKHN0cmVhbSkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzdHJlYW0ucmVhZCgpO1xuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgeWllbGQgZGF0YTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJlYW0uX3JlYWRhYmxlU3RhdGUuZW5kZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG9uY2VSZWFkYWJsZShzdHJlYW0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZyb21TdHJlYW0oc3RyZWFtKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJlYW1bU3ltYm9sLmFzeW5jSXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfVxuICAgIHJldHVybiBfZnJvbVN0cmVhbShzdHJlYW0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiogbWVyZ2UoLi4uaXRlcmFibGVzKSB7XG4gICAgY29uc3Qgc291cmNlcyA9IG5ldyBTZXQoaXRlcmFibGVzLm1hcChnZXRJdGVyYXRvcikpO1xuICAgIHdoaWxlIChzb3VyY2VzLnNpemUgPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2Ygc291cmNlcykge1xuICAgICAgICAgICAgY29uc3QgbmV4dFZhbCA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChuZXh0VmFsLmRvbmUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VzLmRlbGV0ZShpdGVyYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXh0VmFsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZShmaXJzdEZuLCAuLi5mbnMpIHtcbiAgICBsZXQgcHJldmlvdXNGbiA9IGZpcnN0Rm4oKTtcbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgZm5zKSB7XG4gICAgICAgIHByZXZpb3VzRm4gPSBmdW5jKHByZXZpb3VzRm4pO1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlvdXNGbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24qIF9wYXJhbGxlbE1hcChjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBsZXQgdHJhbnNmb3JtRXJyb3IgPSBudWxsO1xuICAgIGNvbnN0IHdyYXBGdW5jID0gdmFsdWUgPT4gKHtcbiAgICAgICAgdmFsdWU6IGZ1bmModmFsdWUpLFxuICAgIH0pO1xuICAgIGNvbnN0IHN0b3BPbkVycm9yID0gYXN5bmMgZnVuY3Rpb24qIChzb3VyY2UpIHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1FcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHlpZWxkIHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvdXRwdXQgPSBwaXBlbGluZSgoKSA9PiBpdGVyYWJsZSwgYnVmZmVyKDEpLCBzdG9wT25FcnJvciwgbWFwKHdyYXBGdW5jKSwgYnVmZmVyKGNvbmN1cnJlbmN5IC0gMSkpO1xuICAgIGNvbnN0IGl0ciA9IGdldEl0ZXJhdG9yKG91dHB1dCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gYXdhaXQgaXRyLm5leHQoKTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBhd2FpdCB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghdHJhbnNmb3JtRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1FcnJvciA9IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0cmFuc2Zvcm1FcnJvcikge1xuICAgICAgICB0aHJvdyB0cmFuc2Zvcm1FcnJvcjtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXJhbGxlbE1hcChjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBpZiAoZnVuYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEZ1bmMsIGN1cnJpZWRJdGVyYWJsZSkgPT4gcGFyYWxsZWxNYXAoY29uY3VycmVuY3ksIGN1cnJpZWRGdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICBpZiAoaXRlcmFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY3VycmllZEl0ZXJhYmxlID0+IHBhcmFsbGVsTWFwKGNvbmN1cnJlbmN5LCBmdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICBpZiAoY29uY3VycmVuY3kgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG1hcChmdW5jLCBpdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfcGFyYWxsZWxNYXAoY29uY3VycmVuY3ksIGZ1bmMsIGl0ZXJhYmxlKTtcbn1cblxuZnVuY3Rpb24gcGFyYWxsZWxGbGF0TWFwKGNvbmN1cnJlbmN5LCBmdW5jLCBpdGVyYWJsZSkge1xuICAgIGlmIChmdW5jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyaWVkRnVuYywgY3VycmllZEl0ZXJhYmxlKSA9PiBjdXJyaWVkSXRlcmFibGVcbiAgICAgICAgICAgID8gcGFyYWxsZWxGbGF0TWFwKGNvbmN1cnJlbmN5LCBjdXJyaWVkRnVuYywgY3VycmllZEl0ZXJhYmxlKVxuICAgICAgICAgICAgOiBwYXJhbGxlbEZsYXRNYXAoY29uY3VycmVuY3ksIGN1cnJpZWRGdW5jKTtcbiAgICB9XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyaWVkSXRlcmFibGUpID0+IHBhcmFsbGVsRmxhdE1hcChjb25jdXJyZW5jeSwgZnVuYywgY3VycmllZEl0ZXJhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcihpID0+IGkgIT09IHVuZGVmaW5lZCAmJiBpICE9PSBudWxsLCBmbGF0dGVuKHBhcmFsbGVsTWFwKGNvbmN1cnJlbmN5LCBmdW5jLCBpdGVyYWJsZSkpKTtcbn1cblxuLy8vIDxyZWZlcmVuY2UgbGliPVwiZXNuZXh0LmFzeW5jaXRlcmFibGVcIiAvPlxuYXN5bmMgZnVuY3Rpb24qIHBhcmFsbGVsTWVyZ2UoLi4uaXRlcmFibGVzKSB7XG4gICAgY29uc3QgaW5wdXRzID0gaXRlcmFibGVzLm1hcChnZXRJdGVyYXRvcik7XG4gICAgY29uc3QgY29uY3VycmVudFdvcmsgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdmFsdWVzID0gbmV3IE1hcCgpO1xuICAgIGxldCBsYXN0RXJyb3IgPSBudWxsO1xuICAgIGxldCBlcnJDYiA9IG51bGw7XG4gICAgbGV0IHZhbHVlQ2IgPSBudWxsO1xuICAgIGNvbnN0IG5vdGlmeUVycm9yID0gZXJyID0+IHtcbiAgICAgICAgbGFzdEVycm9yID0gZXJyO1xuICAgICAgICBpZiAoZXJyQ2IpIHtcbiAgICAgICAgICAgIGVyckNiKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG5vdGlmeURvbmUgPSB2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZUNiKSB7XG4gICAgICAgICAgICB2YWx1ZUNiKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgd2FpdEZvclF1ZXVlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAobGFzdEVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QobGFzdEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlQ2IgPSByZXNvbHZlO1xuICAgICAgICBlcnJDYiA9IHJlamVjdDtcbiAgICB9KTtcbiAgICBjb25zdCBxdWV1ZU5leHQgPSBpbnB1dCA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRWYWwgPSBQcm9taXNlLnJlc29sdmUoaW5wdXQubmV4dCgpKS50aGVuKGFzeW5jICh7IGRvbmUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5zZXQoaW5wdXQsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmN1cnJlbnRXb3JrLmRlbGV0ZShuZXh0VmFsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmN1cnJlbnRXb3JrLmFkZChuZXh0VmFsKTtcbiAgICAgICAgbmV4dFZhbC50aGVuKG5vdGlmeURvbmUsIG5vdGlmeUVycm9yKTtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRzKSB7XG4gICAgICAgIHF1ZXVlTmV4dChpbnB1dCk7XG4gICAgfVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIC8vIFdlIHRlY2huaWNhbGx5IGRvbid0IGhhdmUgdG8gY2hlY2sgYHZhbHVlcy5zaXplYCBhcyB0aGUgZm9yIGxvb3Agc2hvdWxkIGhhdmUgZW1wdGllZCBpdFxuICAgICAgICAvLyBIb3dldmVyIEkgaGF2ZW4ndCB5ZXQgZm91bmQgc3BlY3MgdmVyaWZ5aW5nIHRoYXQgYmVoYXZpb3IsIG9ubHkgdGVzdHNcbiAgICAgICAgLy8gdGhlIGd1YXJkIGluIHdhaXRGb3JRdWV1ZSgpIGNoZWNraW5nIGZvciB2YWx1ZXMgaXMgaW4gcGxhY2UgZm9yIHRoZSBzYW1lIHJlYXNvblxuICAgICAgICBpZiAoY29uY3VycmVudFdvcmsuc2l6ZSA9PT0gMCAmJiB2YWx1ZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHdhaXRGb3JRdWV1ZSgpO1xuICAgICAgICBmb3IgKGNvbnN0IFtpbnB1dCwgdmFsdWVdIG9mIHZhbHVlcykge1xuICAgICAgICAgICAgdmFsdWVzLmRlbGV0ZShpbnB1dCk7XG4gICAgICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgICAgICAgIHF1ZXVlTmV4dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIF9yZWR1Y2UoZnVuYywgc3RhcnQsIGl0ZXJhYmxlKSB7XG4gICAgbGV0IHZhbHVlID0gc3RhcnQ7XG4gICAgZm9yIGF3YWl0IChjb25zdCBuZXh0SXRlbSBvZiBpdGVyYWJsZSkge1xuICAgICAgICB2YWx1ZSA9IGF3YWl0IGZ1bmModmFsdWUsIG5leHRJdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gcmVkdWNlKGZ1bmMsIHN0YXJ0LCBpdGVyYWJsZSkge1xuICAgIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZFN0YXJ0LCBjdXJyaWVkSXRlcmFibGUpID0+IGN1cnJpZWRJdGVyYWJsZSA/IF9yZWR1Y2UoZnVuYywgY3VycmllZFN0YXJ0LCBjdXJyaWVkSXRlcmFibGUpIDogcmVkdWNlKGZ1bmMsIGN1cnJpZWRTdGFydCk7XG4gICAgfVxuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEl0ZXJhYmxlKSA9PiByZWR1Y2UoZnVuYywgc3RhcnQsIGN1cnJpZWRJdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVkdWNlKGZ1bmMsIHN0YXJ0LCBpdGVyYWJsZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uKiBfdGFrZShjb3VudCwgaXRlcmFibGUpIHtcbiAgICBsZXQgdGFrZW4gPSAwO1xuICAgIGZvciBhd2FpdCAoY29uc3QgdmFsIG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgIHlpZWxkIGF3YWl0IHZhbDtcbiAgICAgICAgdGFrZW4rKztcbiAgICAgICAgaWYgKHRha2VuID49IGNvdW50KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uKiBfc3luY1Rha2UoY291bnQsIGl0ZXJhYmxlKSB7XG4gICAgbGV0IHRha2VuID0gMDtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBpdGVyYWJsZSkge1xuICAgICAgICB5aWVsZCB2YWw7XG4gICAgICAgIHRha2VuKys7XG4gICAgICAgIGlmICh0YWtlbiA+PSBjb3VudCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB0YWtlKGNvdW50LCBpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjdXJyaWVkSXRlcmFibGUgPT4gdGFrZShjb3VudCwgY3VycmllZEl0ZXJhYmxlKTtcbiAgICB9XG4gICAgaWYgKGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkge1xuICAgICAgICByZXR1cm4gX3Rha2UoY291bnQsIGl0ZXJhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIF9zeW5jVGFrZShjb3VudCwgaXRlcmFibGUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiogX2FzeW5jVGFwKGZ1bmMsIGl0ZXJhYmxlKSB7XG4gICAgZm9yIGF3YWl0IChjb25zdCB2YWwgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgYXdhaXQgZnVuYyh2YWwpO1xuICAgICAgICB5aWVsZCB2YWw7XG4gICAgfVxufVxuZnVuY3Rpb24gdGFwKGZ1bmMsIGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIChjdXJyaWVkSXRlcmFibGUpID0+IF9hc3luY1RhcChmdW5jLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gX2FzeW5jVGFwKGZ1bmMsIGl0ZXJhYmxlKTtcbn1cblxuZnVuY3Rpb24gYWRkVGltZShhLCBiKSB7XG4gICAgbGV0IHNlY29uZHMgPSBhWzBdICsgYlswXTtcbiAgICBsZXQgbmFub3NlY29uZHMgPSBhWzFdICsgYlsxXTtcbiAgICBpZiAobmFub3NlY29uZHMgPj0gMTAwMDAwMDAwMCkge1xuICAgICAgICBjb25zdCByZW1haW5kZXIgPSBuYW5vc2Vjb25kcyAlIDEwMDAwMDAwMDA7XG4gICAgICAgIHNlY29uZHMgKz0gKG5hbm9zZWNvbmRzIC0gcmVtYWluZGVyKSAvIDEwMDAwMDAwMDA7XG4gICAgICAgIG5hbm9zZWNvbmRzID0gcmVtYWluZGVyO1xuICAgIH1cbiAgICByZXR1cm4gW3NlY29uZHMsIG5hbm9zZWNvbmRzXTtcbn1cbmFzeW5jIGZ1bmN0aW9uKiBfYXN5bmNUaW1lKGNvbmZpZywgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdHIgPSBpdGVyYWJsZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTtcbiAgICBsZXQgdG90YWwgPSBbMCwgMF07XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBhd2FpdCBpdHIubmV4dCgpO1xuICAgICAgICBjb25zdCBkZWx0YSA9IHByb2Nlc3MuaHJ0aW1lKHN0YXJ0KTtcbiAgICAgICAgdG90YWwgPSBhZGRUaW1lKHRvdGFsLCBkZWx0YSk7XG4gICAgICAgIGlmIChjb25maWcucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGNvbmZpZy5wcm9ncmVzcyhkZWx0YSwgdG90YWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnRvdGFsKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRvdGFsKHRvdGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiogX3N5bmNUaW1lKGNvbmZpZywgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdHIgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgbGV0IHRvdGFsID0gWzAsIDBdO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcHJvY2Vzcy5ocnRpbWUoKTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gaXRyLm5leHQoKTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBwcm9jZXNzLmhydGltZShzdGFydCk7XG4gICAgICAgIHRvdGFsID0gYWRkVGltZSh0b3RhbCwgZGVsdGEpO1xuICAgICAgICBpZiAoY29uZmlnLnByb2dyZXNzKSB7XG4gICAgICAgICAgICBjb25maWcucHJvZ3Jlc3MoZGVsdGEsIHRvdGFsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy50b3RhbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy50b3RhbCh0b3RhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxufVxuZnVuY3Rpb24gdGltZShjb25maWcgPSB7fSwgaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY3VycmllZEl0ZXJhYmxlID0+IHRpbWUoY29uZmlnLCBjdXJyaWVkSXRlcmFibGUpO1xuICAgIH1cbiAgICBpZiAoaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIF9hc3luY1RpbWUoY29uZmlnLCBpdGVyYWJsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gX3N5bmNUaW1lKGNvbmZpZywgaXRlcmFibGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3RyYW5zZm9ybShjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBjb25zdCBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICBjb25zdCByZXN1bHRRdWV1ZSA9IFtdO1xuICAgIGNvbnN0IHJlYWRRdWV1ZSA9IFtdO1xuICAgIGxldCBlbmRlZCA9IGZhbHNlO1xuICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG4gICAgbGV0IGluZmxpZ2h0Q291bnQgPSAwO1xuICAgIGxldCBsYXN0RXJyb3IgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGZ1bGZpbGxSZWFkUXVldWUoKSB7XG4gICAgICAgIHdoaWxlIChyZWFkUXVldWUubGVuZ3RoID4gMCAmJiByZXN1bHRRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlc29sdmUgfSA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRvbmU6IGZhbHNlLCB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocmVhZFF1ZXVlLmxlbmd0aCA+IDAgJiYgaW5mbGlnaHRDb3VudCA9PT0gMCAmJiBlbmRlZCkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNvbHZlLCByZWplY3QgfSA9IHJlYWRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChsYXN0RXJyb3IpO1xuICAgICAgICAgICAgICAgIGxhc3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmaWxsUXVldWUoKSB7XG4gICAgICAgIGlmIChlbmRlZCkge1xuICAgICAgICAgICAgZnVsZmlsbFJlYWRRdWV1ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZmxpZ2h0Q291bnQgKyByZXN1bHRRdWV1ZS5sZW5ndGggPj0gY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgaW5mbGlnaHRDb3VudCsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICBlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaW5mbGlnaHRDb3VudC0tO1xuICAgICAgICAgICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hcEFuZFF1ZXVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZmxpZ2h0Q291bnQtLTtcbiAgICAgICAgICAgIGxhc3RFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgZnVsZmlsbFJlYWRRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG1hcEFuZFF1ZXVlKGl0clZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGZ1bmMoaXRyVmFsdWUpO1xuICAgICAgICAgICAgcmVzdWx0UXVldWUucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0RXJyb3IgPSBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpbmZsaWdodENvdW50LS07XG4gICAgICAgIGZ1bGZpbGxSZWFkUXVldWUoKTtcbiAgICAgICAgZmlsbFF1ZXVlKCk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIGlmIChyZXN1bHRRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgICAgICAgIHJlYWRRdWV1ZS5wdXNoKGRlZmVycmVkKTtcbiAgICAgICAgICAgIGZpbGxRdWV1ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBmaWxsUXVldWUoKTtcbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlIH07XG4gICAgfVxuICAgIGNvbnN0IGFzeW5jSXRlcmFibGVJdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dCxcbiAgICAgICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTogKCkgPT4gYXN5bmNJdGVyYWJsZUl0ZXJhdG9yLFxuICAgIH07XG4gICAgcmV0dXJuIGFzeW5jSXRlcmFibGVJdGVyYXRvcjtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybShjb25jdXJyZW5jeSwgZnVuYywgaXRlcmFibGUpIHtcbiAgICBpZiAoZnVuYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEZ1bmMsIGN1cnJpZWRJdGVyYWJsZSkgPT4gY3VycmllZEl0ZXJhYmxlXG4gICAgICAgICAgICA/IHRyYW5zZm9ybShjb25jdXJyZW5jeSwgY3VycmllZEZ1bmMsIGN1cnJpZWRJdGVyYWJsZSlcbiAgICAgICAgICAgIDogdHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBjdXJyaWVkRnVuYyk7XG4gICAgfVxuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEl0ZXJhYmxlKSA9PiB0cmFuc2Zvcm0oY29uY3VycmVuY3ksIGZ1bmMsIGN1cnJpZWRJdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfdHJhbnNmb3JtKGNvbmN1cnJlbmN5LCBmdW5jLCBpdGVyYWJsZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIF93cml0ZVRvU3RyZWFtKHN0cmVhbSwgaXRlcmFibGUpIHtcbiAgICBsZXQgbGFzdEVycm9yID0gbnVsbDtcbiAgICBsZXQgZXJyQ2IgPSBudWxsO1xuICAgIGxldCBkcmFpbkNiID0gbnVsbDtcbiAgICBjb25zdCBub3RpZnlFcnJvciA9IGVyciA9PiB7XG4gICAgICAgIGxhc3RFcnJvciA9IGVycjtcbiAgICAgICAgaWYgKGVyckNiKSB7XG4gICAgICAgICAgICBlcnJDYihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBub3RpZnlEcmFpbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGRyYWluQ2IpIHtcbiAgICAgICAgICAgIGRyYWluQ2IoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG5vdGlmeUVycm9yKTtcbiAgICAgICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdkcmFpbicsIG5vdGlmeURyYWluKTtcbiAgICB9O1xuICAgIHN0cmVhbS5vbmNlKCdlcnJvcicsIG5vdGlmeUVycm9yKTtcbiAgICBjb25zdCB3YWl0Rm9yRHJhaW4gPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChsYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobGFzdEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ub25jZSgnZHJhaW4nLCBub3RpZnlEcmFpbik7XG4gICAgICAgIGRyYWluQ2IgPSByZXNvbHZlO1xuICAgICAgICBlcnJDYiA9IHJlamVjdDtcbiAgICB9KTtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgIGlmIChzdHJlYW0ud3JpdGUodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYXdhaXQgd2FpdEZvckRyYWluKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RFcnJvcikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICAgIGlmIChsYXN0RXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbGFzdEVycm9yO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHdyaXRlVG9TdHJlYW0oc3RyZWFtLCBpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoY3VycmllZEl0ZXJhYmxlKSA9PiBfd3JpdGVUb1N0cmVhbShzdHJlYW0sIGN1cnJpZWRJdGVyYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiBfd3JpdGVUb1N0cmVhbShzdHJlYW0sIGl0ZXJhYmxlKTtcbn1cblxuZXhwb3J0IHsgYmF0Y2gsIGJ1ZmZlciwgY29sbGVjdCwgY29uY2F0LCBjb25zdW1lLCBmaWx0ZXIsIGZsYXRNYXAsIGZsYXRUcmFuc2Zvcm0sIGZsYXR0ZW4sIGZyb21TdHJlYW0sIGdldEl0ZXJhdG9yLCBtYXAsIG1lcmdlLCBwYXJhbGxlbEZsYXRNYXAsIHBhcmFsbGVsTWFwLCBwYXJhbGxlbE1lcmdlLCBwaXBlbGluZSwgcmVkdWNlLCB0YWtlLCB0YXAsIHRpbWUsIHRyYW5zZm9ybSwgd3JpdGVUb1N0cmVhbSB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlYWRcblxudmFyIE1TQiA9IDB4ODBcbiAgLCBSRVNUID0gMHg3RlxuXG5mdW5jdGlvbiByZWFkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciByZXMgICAgPSAwXG4gICAgLCBvZmZzZXQgPSBvZmZzZXQgfHwgMFxuICAgICwgc2hpZnQgID0gMFxuICAgICwgY291bnRlciA9IG9mZnNldFxuICAgICwgYlxuICAgICwgbCA9IGJ1Zi5sZW5ndGhcblxuICBkbyB7XG4gICAgaWYgKGNvdW50ZXIgPj0gbCB8fCBzaGlmdCA+IDQ5KSB7XG4gICAgICByZWFkLmJ5dGVzID0gMFxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0NvdWxkIG5vdCBkZWNvZGUgdmFyaW50JylcbiAgICB9XG4gICAgYiA9IGJ1Zltjb3VudGVyKytdXG4gICAgcmVzICs9IHNoaWZ0IDwgMjhcbiAgICAgID8gKGIgJiBSRVNUKSA8PCBzaGlmdFxuICAgICAgOiAoYiAmIFJFU1QpICogTWF0aC5wb3coMiwgc2hpZnQpXG4gICAgc2hpZnQgKz0gN1xuICB9IHdoaWxlIChiID49IE1TQilcblxuICByZWFkLmJ5dGVzID0gY291bnRlciAtIG9mZnNldFxuXG4gIHJldHVybiByZXNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZW5jb2RlXG5cbnZhciBNU0IgPSAweDgwXG4gICwgUkVTVCA9IDB4N0ZcbiAgLCBNU0JBTEwgPSB+UkVTVFxuICAsIElOVCA9IE1hdGgucG93KDIsIDMxKVxuXG5mdW5jdGlvbiBlbmNvZGUobnVtLCBvdXQsIG9mZnNldCkge1xuICBpZiAoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgJiYgbnVtID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICBlbmNvZGUuYnl0ZXMgPSAwXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0NvdWxkIG5vdCBlbmNvZGUgdmFyaW50JylcbiAgfVxuICBvdXQgPSBvdXQgfHwgW11cbiAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDBcbiAgdmFyIG9sZE9mZnNldCA9IG9mZnNldFxuXG4gIHdoaWxlKG51bSA+PSBJTlQpIHtcbiAgICBvdXRbb2Zmc2V0KytdID0gKG51bSAmIDB4RkYpIHwgTVNCXG4gICAgbnVtIC89IDEyOFxuICB9XG4gIHdoaWxlKG51bSAmIE1TQkFMTCkge1xuICAgIG91dFtvZmZzZXQrK10gPSAobnVtICYgMHhGRikgfCBNU0JcbiAgICBudW0gPj4+PSA3XG4gIH1cbiAgb3V0W29mZnNldF0gPSBudW0gfCAwXG4gIFxuICBlbmNvZGUuYnl0ZXMgPSBvZmZzZXQgLSBvbGRPZmZzZXQgKyAxXG4gIFxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBlbmNvZGU6IHJlcXVpcmUoJy4vZW5jb2RlLmpzJylcbiAgLCBkZWNvZGU6IHJlcXVpcmUoJy4vZGVjb2RlLmpzJylcbiAgLCBlbmNvZGluZ0xlbmd0aDogcmVxdWlyZSgnLi9sZW5ndGguanMnKVxufVxuIiwiXG52YXIgTjEgPSBNYXRoLnBvdygyLCAgNylcbnZhciBOMiA9IE1hdGgucG93KDIsIDE0KVxudmFyIE4zID0gTWF0aC5wb3coMiwgMjEpXG52YXIgTjQgPSBNYXRoLnBvdygyLCAyOClcbnZhciBONSA9IE1hdGgucG93KDIsIDM1KVxudmFyIE42ID0gTWF0aC5wb3coMiwgNDIpXG52YXIgTjcgPSBNYXRoLnBvdygyLCA0OSlcbnZhciBOOCA9IE1hdGgucG93KDIsIDU2KVxudmFyIE45ID0gTWF0aC5wb3coMiwgNjMpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPCBOMSA/IDFcbiAgOiB2YWx1ZSA8IE4yID8gMlxuICA6IHZhbHVlIDwgTjMgPyAzXG4gIDogdmFsdWUgPCBONCA/IDRcbiAgOiB2YWx1ZSA8IE41ID8gNVxuICA6IHZhbHVlIDwgTjYgPyA2XG4gIDogdmFsdWUgPCBONyA/IDdcbiAgOiB2YWx1ZSA8IE44ID8gOFxuICA6IHZhbHVlIDwgTjkgPyA5XG4gIDogICAgICAgICAgICAgIDEwXG4gIClcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZW1vQ29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0RlbW9Db21wb25lbnQuY3NzJztcblxuY29uc3QgRU5EX1BPSU5UID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0lQRlNfRU5EX1BPSU5UO1xuLy8gY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9JUEZTX0FQSV9LRVk7XG4vLyBjb25zdCBJUEZTX1BBVEggPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfSVBGU19QQVRIO1xuXG5cbmNsYXNzIERlbW9Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmxvZ28gPSBcImh0dHBzOi8vdGguYmluZy5jb20vdGgvaWQvT0lQLmZpSVoyWUtiTWZUTUdrcEVHUTBZdWdIYUhhP3BpZD1JbWdEZXQmcnM9MVwiO1xuICB9XG5cbiAgaGFuZGxlT25DbGljayA9IChlKSA9PiB7XG4gICAgYWxlcnQoXCJDbGlja2VkXCIpO1xuICB9XG5cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25DbGlja30+PGltZyBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwiaW1nXCIgc3JjPXt0aGlzLmxvZ299Lz48L2J1dHRvbj5cbiAgICAgICAgPGRpdj5FTkQgUE9JTlQ6IHtFTkRfUE9JTlR9PC9kaXY+IFxuICAgICAgICA8c3Bhbj57TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAxKX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGVtb0NvbXBvbmVudDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTGF6eUlwZnNJbWFnZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9MYXp5SXBmc0ltYWdlLmNzcydcbmltcG9ydCAnLi9TcGlubmVyLmNzcydcbmltcG9ydCB7IExhenlJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktaW1hZ2VzJ1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTkZUU3RvcmFnZSB9IGZyb20gJ25mdC5zdG9yYWdlJ1xuaW1wb3J0IHsgZGVmYXVsdFJlZHVjZXIgfSBmcm9tICcuL2RlZmF1bHRSZWR1Y2VyJ1xuXG5jb25zdCBMYXp5SXBmc0ltYWdlID0gKHtlbmRwb2ludCwgdG9rZW4sIGlwZnNwYXRofSkgPT4ge1xuXG4gICAgaWYgKCFlbmRwb2ludCB8fCAhdG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHBhc3MgbmZ0LnN0b3JhZ2UgZW5kcG9pbnQgYW5kIHRva2VuIHRvIExhenlJcGZzSW1hZ2UgY29tcG9uZW50LlwiKVxuICAgIH1cblxuICAgIGNvbnN0IGlwZnNQcmVmaXggPSBpcGZzcGF0aCA/IGlwZnNwYXRoIDogXCJodHRwczovL2lwZnMuaW8vaXBmcyBcIlxuXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGRlZmF1bHRSZWR1Y2VyLFxuICAgICAgICB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHVyaTogbnVsbCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG51bGxcbiAgICAgICAgfSlcblxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbaXBmc1VyaSwgc2V0SXBmc10gPSB1c2VTdGF0ZSgpXG5cbiAgICBjb25zdCB1cGxvYWRBcnR3b3JrID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCBkb0ZldGNoID0gYXN5bmMgKHJlcSkgPT4ge1xuICAgICAgICAgICAgZmV0Y2gocmVxKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMudGV4dCgpLnRoZW4odGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVSUk9SXCIsIG1lc3NhZ2U6IHRleHQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmJsb2IoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oaW1nQmxvYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWdCbG9iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmkgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGltZ0Jsb2IpXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1VDQ0VTU1wiLCBtZXNzYWdlOiBpcGZzVXJpLCBwYXlsb2FkOiB1cmkgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgY2hvb3NlIGZpbGUgZmlyc3RcIilcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJQUk9DRVNTSU5HXCIsIG1lc3NhZ2U6IFwiVXBsb2FkaW5nIHRvIElQRlMsIHBsZWFzZSB3YWl0IC4uLlwiIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBuZXcgTkZUU3RvcmFnZSh7IGVuZHBvaW50LCB0b2tlbiB9KVxuICAgICAgICAgICAgY29uc3QgY2lkID0gYXdhaXQgc3RvcmFnZS5zdG9yZUJsb2IobmV3IEJsb2IoW2ZpbGVdKSlcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHN0b3JhZ2Uuc3RhdHVzKGNpZClcblxuICAgICAgICAgICAgLy8gVE9ETzogZm9yIHRlc3Rpbmcgb25seVxuICAgICAgICAgICAgLy8gY29uc3QgY2lkID0gXCJiYWZrcmVpZjd0ejNpZHFqMnBzZzdtZnQyb3o3aGdqY3V6aGk0aXZhZDV6bGN6dzJuNzZqNjM2aHIzaVwiXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7IGNpZCB9KVxuICAgICAgICAgICAgLy8gY29uc3Qgc2xlZXAgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuICAgICAgICAgICAgLy8gYXdhaXQgc2xlZXAgKDIqMTAwMClcblxuICAgICAgICAgICAgc2V0RmlsZShudWxsKVxuXG4gICAgICAgICAgICBjb25zdCBpcGZzVXJpID0gYCR7aXBmc1ByZWZpeH0vJHtjaWR9YFxuICAgICAgICAgICAgc2V0SXBmcyhpcGZzVXJpKVxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIklORk9cIiwgbWVzc2FnZTogYFVwbG9hZCBzdWNjZXNzIGF0ICR7aXBmc1VyaX1gIH0pXG4gICAgICAgICAgICBkb0ZldGNoKGlwZnNVcmkpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRVJST1JcIiwgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uRmlsZUNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBzZXRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZF9fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfX2ZyYW1lXCI+XG4gICAgICAgICAgICAgICAge3N0YXRlLnVyaSAmJlxuICAgICAgICAgICAgICAgICAgICA8TGF6eUltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cGxvYWRfX2FydHdvcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzdGF0ZS51cml9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBcnR3b3JrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYm91bmNlRHVyYXRpb25Ncz17NDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyh7IGltYWdlUHJvcHMsIHJlZiB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZiBpcyBmb3IgdGhlIGNvbXBvbmVudCdzIG93biByZWZlcmVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXN0YXRlLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX19wbGFjZWhvbGRlclwiIHJlZj17cmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxlYXNlIGJlIHBhdGllbnQsIGl0IGNvdWxkIHRha2UgYSBmZXcgbWludXRlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw9eyh7IGltYWdlUHJvcHMgfSkgPT4gPGltZyB7Li4uaW1hZ2VQcm9wc30gLz59XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge3N0YXRlLmxvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfX3BsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QbGVhc2UgYmUgcGF0aWVudCwgaXQgY291bGQgdGFrZSBhIGZldyBtaW51dGVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7KCFzdGF0ZS51cmkgJiYgIXN0YXRlLmxvYWRpbmcpICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX19wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXBsb2FkX19wcm9tcHRcIj5QbGVhc2UgdXBsb2FkIG5vIGxlc3MgdGhhbiBbMzAwMHgyMDAwXTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaWxlX2lucHV0XCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpID0+IG9uRmlsZUNoYW5nZShlKX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1iZyByb3VuZGVkXCIgb25DbGljaz17ZSA9PiB1cGxvYWRBcnR3b3JrKGUpfT5VcGxvYWQgQXJ0d29yazwvZGl2PlxuICAgICAgICAgICAge3N0YXRlLm1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgeyFzdGF0ZS5lcnJvciA/IDxzcGFuPuKchTwvc3Bhbj4gOiA8c3Bhbj7inYw8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUubWVzc2FnZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF6eUlwZnNJbWFnZTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3Bpbm5lci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBjb25zdCBkZWZhdWx0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGFjdGlvbi5tZXNzYWdlID8gYWN0aW9uLm1lc3NhZ2UgOiBzdGF0ZS5tZXNzYWdlXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdQUk9DRVNTSU5HJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXJpOiBudWxsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnU1VDQ0VTUyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cmk6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnSU5GTyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnRVJST1InOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmk6IG51bGwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKClcbiAgICB9XG59IiwiaW1wb3J0IExhenlJcGZzSW1hZ2UgZnJvbSBcIi4vTGF6eUlwZnNJbWFnZVwiO1xuaW1wb3J0IERlbW9Db21wb25lbnQgZnJvbSBcIi4vRGVtb0NvbXBvbmVudFwiO1xuXG5leHBvcnQgeyBMYXp5SXBmc0ltYWdlLCBEZW1vQ29tcG9uZW50IH07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGF6eS1pbWFnZXNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==