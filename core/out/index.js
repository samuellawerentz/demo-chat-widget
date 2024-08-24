var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// node_modules/object-hash/dist/object_hash.js
var require_object_hash = __commonJS((exports, module) => {
  (function(e) {
    var t;
    typeof exports == "object" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (typeof window != "undefined" ? t = window : typeof global != "undefined" ? t = global : typeof self != "undefined" && (t = self), t.objectHash = e());
  })(function() {
    return function r(o, i, u) {
      function s(n, e2) {
        if (!i[n]) {
          if (!o[n]) {
            var t = __require;
            if (!e2 && t)
              return t(n, true);
            if (a)
              return a(n, true);
            throw new Error("Cannot find module '" + n + "'");
          }
          e2 = i[n] = { exports: {} };
          o[n][0].call(e2.exports, function(e3) {
            var t2 = o[n][1][e3];
            return s(t2 || e3);
          }, e2, e2.exports, r, o, i, u);
        }
        return i[n].exports;
      }
      for (var a = __require, e = 0;e < u.length; e++)
        s(u[e]);
      return s;
    }({ 1: [function(w, b, m) {
      (function(e, n, s, c, d, h, p, g, y) {
        var r = w("crypto");
        function t(e2, t2) {
          t2 = u(e2, t2);
          var n2;
          return (n2 = t2.algorithm !== "passthrough" ? r.createHash(t2.algorithm) : new l).write === undefined && (n2.write = n2.update, n2.end = n2.update), f(t2, n2).dispatch(e2), n2.update || n2.end(""), n2.digest ? n2.digest(t2.encoding === "buffer" ? undefined : t2.encoding) : (e2 = n2.read(), t2.encoding !== "buffer" ? e2.toString(t2.encoding) : e2);
        }
        (m = b.exports = t).sha1 = function(e2) {
          return t(e2);
        }, m.keys = function(e2) {
          return t(e2, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
        }, m.MD5 = function(e2) {
          return t(e2, { algorithm: "md5", encoding: "hex" });
        }, m.keysMD5 = function(e2) {
          return t(e2, { algorithm: "md5", encoding: "hex", excludeValues: true });
        };
        var o = r.getHashes ? r.getHashes().slice() : ["sha1", "md5"], i = (o.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
        function u(e2, t2) {
          var n2 = {};
          if (n2.algorithm = (t2 = t2 || {}).algorithm || "sha1", n2.encoding = t2.encoding || "hex", n2.excludeValues = !!t2.excludeValues, n2.algorithm = n2.algorithm.toLowerCase(), n2.encoding = n2.encoding.toLowerCase(), n2.ignoreUnknown = t2.ignoreUnknown === true, n2.respectType = t2.respectType !== false, n2.respectFunctionNames = t2.respectFunctionNames !== false, n2.respectFunctionProperties = t2.respectFunctionProperties !== false, n2.unorderedArrays = t2.unorderedArrays === true, n2.unorderedSets = t2.unorderedSets !== false, n2.unorderedObjects = t2.unorderedObjects !== false, n2.replacer = t2.replacer || undefined, n2.excludeKeys = t2.excludeKeys || undefined, e2 === undefined)
            throw new Error("Object argument required.");
          for (var r2 = 0;r2 < o.length; ++r2)
            o[r2].toLowerCase() === n2.algorithm.toLowerCase() && (n2.algorithm = o[r2]);
          if (o.indexOf(n2.algorithm) === -1)
            throw new Error('Algorithm "' + n2.algorithm + '"  not supported. supported values: ' + o.join(", "));
          if (i.indexOf(n2.encoding) === -1 && n2.algorithm !== "passthrough")
            throw new Error('Encoding "' + n2.encoding + '"  not supported. supported values: ' + i.join(", "));
          return n2;
        }
        function a(e2) {
          if (typeof e2 == "function")
            return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e2)) != null;
        }
        function f(o2, t2, i2) {
          i2 = i2 || [];
          function u2(e2) {
            return t2.update ? t2.update(e2, "utf8") : t2.write(e2, "utf8");
          }
          return { dispatch: function(e2) {
            return this["_" + ((e2 = o2.replacer ? o2.replacer(e2) : e2) === null ? "null" : typeof e2)](e2);
          }, _object: function(t3) {
            var n2, e2 = Object.prototype.toString.call(t3), r2 = /\[object (.*)\]/i.exec(e2);
            r2 = (r2 = r2 ? r2[1] : "unknown:[" + e2 + "]").toLowerCase();
            if (0 <= (e2 = i2.indexOf(t3)))
              return this.dispatch("[CIRCULAR:" + e2 + "]");
            if (i2.push(t3), s !== undefined && s.isBuffer && s.isBuffer(t3))
              return u2("buffer:"), u2(t3);
            if (r2 === "object" || r2 === "function" || r2 === "asyncfunction")
              return e2 = Object.keys(t3), o2.unorderedObjects && (e2 = e2.sort()), o2.respectType === false || a(t3) || e2.splice(0, 0, "prototype", "__proto__", "constructor"), o2.excludeKeys && (e2 = e2.filter(function(e3) {
                return !o2.excludeKeys(e3);
              })), u2("object:" + e2.length + ":"), n2 = this, e2.forEach(function(e3) {
                n2.dispatch(e3), u2(":"), o2.excludeValues || n2.dispatch(t3[e3]), u2(",");
              });
            if (!this["_" + r2]) {
              if (o2.ignoreUnknown)
                return u2("[" + r2 + "]");
              throw new Error('Unknown object type "' + r2 + '"');
            }
            this["_" + r2](t3);
          }, _array: function(e2, t3) {
            t3 = t3 !== undefined ? t3 : o2.unorderedArrays !== false;
            var n2 = this;
            if (u2("array:" + e2.length + ":"), !t3 || e2.length <= 1)
              return e2.forEach(function(e3) {
                return n2.dispatch(e3);
              });
            var r2 = [], t3 = e2.map(function(e3) {
              var t4 = new l, n3 = i2.slice();
              return f(o2, t4, n3).dispatch(e3), r2 = r2.concat(n3.slice(i2.length)), t4.read().toString();
            });
            return i2 = i2.concat(r2), t3.sort(), this._array(t3, false);
          }, _date: function(e2) {
            return u2("date:" + e2.toJSON());
          }, _symbol: function(e2) {
            return u2("symbol:" + e2.toString());
          }, _error: function(e2) {
            return u2("error:" + e2.toString());
          }, _boolean: function(e2) {
            return u2("bool:" + e2.toString());
          }, _string: function(e2) {
            u2("string:" + e2.length + ":"), u2(e2.toString());
          }, _function: function(e2) {
            u2("fn:"), a(e2) ? this.dispatch("[native]") : this.dispatch(e2.toString()), o2.respectFunctionNames !== false && this.dispatch("function-name:" + String(e2.name)), o2.respectFunctionProperties && this._object(e2);
          }, _number: function(e2) {
            return u2("number:" + e2.toString());
          }, _xml: function(e2) {
            return u2("xml:" + e2.toString());
          }, _null: function() {
            return u2("Null");
          }, _undefined: function() {
            return u2("Undefined");
          }, _regexp: function(e2) {
            return u2("regex:" + e2.toString());
          }, _uint8array: function(e2) {
            return u2("uint8array:"), this.dispatch(Array.prototype.slice.call(e2));
          }, _uint8clampedarray: function(e2) {
            return u2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e2));
          }, _int8array: function(e2) {
            return u2("int8array:"), this.dispatch(Array.prototype.slice.call(e2));
          }, _uint16array: function(e2) {
            return u2("uint16array:"), this.dispatch(Array.prototype.slice.call(e2));
          }, _int16array: function(e2) {
            return u2("int16array:"), this.dispatch(Array.prototype.slice.call(e2));
          }, _uint32array: function(e2) {
            return u2("uint32array:"), this.dispatch(Array.prototype.slice.call(e2));
          }, _int32array: function(e2) {
            return u2("int32array:"), this.dispatch(Array.prototype.slice.call(e2));
          }, _float32array: function(e2) {
            return u2("float32array:"), this.dispatch(Array.prototype.slice.call(e2));
          }, _float64array: function(e2) {
            return u2("float64array:"), this.dispatch(Array.prototype.slice.call(e2));
          }, _arraybuffer: function(e2) {
            return u2("arraybuffer:"), this.dispatch(new Uint8Array(e2));
          }, _url: function(e2) {
            return u2("url:" + e2.toString());
          }, _map: function(e2) {
            u2("map:");
            e2 = Array.from(e2);
            return this._array(e2, o2.unorderedSets !== false);
          }, _set: function(e2) {
            u2("set:");
            e2 = Array.from(e2);
            return this._array(e2, o2.unorderedSets !== false);
          }, _file: function(e2) {
            return u2("file:"), this.dispatch([e2.name, e2.size, e2.type, e2.lastModfied]);
          }, _blob: function() {
            if (o2.ignoreUnknown)
              return u2("[blob]");
            throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
          }, _domwindow: function() {
            return u2("domwindow");
          }, _bigint: function(e2) {
            return u2("bigint:" + e2.toString());
          }, _process: function() {
            return u2("process");
          }, _timer: function() {
            return u2("timer");
          }, _pipe: function() {
            return u2("pipe");
          }, _tcp: function() {
            return u2("tcp");
          }, _udp: function() {
            return u2("udp");
          }, _tty: function() {
            return u2("tty");
          }, _statwatcher: function() {
            return u2("statwatcher");
          }, _securecontext: function() {
            return u2("securecontext");
          }, _connection: function() {
            return u2("connection");
          }, _zlib: function() {
            return u2("zlib");
          }, _context: function() {
            return u2("context");
          }, _nodescript: function() {
            return u2("nodescript");
          }, _httpparser: function() {
            return u2("httpparser");
          }, _dataview: function() {
            return u2("dataview");
          }, _signal: function() {
            return u2("signal");
          }, _fsevent: function() {
            return u2("fsevent");
          }, _tlswrap: function() {
            return u2("tlswrap");
          } };
        }
        function l() {
          return { buf: "", write: function(e2) {
            this.buf += e2;
          }, end: function(e2) {
            this.buf += e2;
          }, read: function() {
            return this.buf;
          } };
        }
        m.writeToStream = function(e2, t2, n2) {
          return n2 === undefined && (n2 = t2, t2 = {}), f(t2 = u(e2, t2), n2).dispatch(e2);
        };
      }).call(this, w("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
    }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(e, t, f) {
      (function(e2, t2, n, r, o, i, u, s, a) {
        (function(e3) {
          var a2 = typeof Uint8Array != "undefined" ? Uint8Array : Array, t3 = "+".charCodeAt(0), n2 = "/".charCodeAt(0), r2 = "0".charCodeAt(0), o2 = "a".charCodeAt(0), i2 = "A".charCodeAt(0), u2 = "-".charCodeAt(0), s2 = "_".charCodeAt(0);
          function f2(e4) {
            e4 = e4.charCodeAt(0);
            return e4 === t3 || e4 === u2 ? 62 : e4 === n2 || e4 === s2 ? 63 : e4 < r2 ? -1 : e4 < r2 + 10 ? e4 - r2 + 26 + 26 : e4 < i2 + 26 ? e4 - i2 : e4 < o2 + 26 ? e4 - o2 + 26 : undefined;
          }
          e3.toByteArray = function(e4) {
            var t4, n3;
            if (0 < e4.length % 4)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var r3 = e4.length, r3 = e4.charAt(r3 - 2) === "=" ? 2 : e4.charAt(r3 - 1) === "=" ? 1 : 0, o3 = new a2(3 * e4.length / 4 - r3), i3 = 0 < r3 ? e4.length - 4 : e4.length, u3 = 0;
            function s3(e5) {
              o3[u3++] = e5;
            }
            for (t4 = 0;t4 < i3; t4 += 4, 0)
              s3((16711680 & (n3 = f2(e4.charAt(t4)) << 18 | f2(e4.charAt(t4 + 1)) << 12 | f2(e4.charAt(t4 + 2)) << 6 | f2(e4.charAt(t4 + 3)))) >> 16), s3((65280 & n3) >> 8), s3(255 & n3);
            return r3 == 2 ? s3(255 & (n3 = f2(e4.charAt(t4)) << 2 | f2(e4.charAt(t4 + 1)) >> 4)) : r3 == 1 && (s3((n3 = f2(e4.charAt(t4)) << 10 | f2(e4.charAt(t4 + 1)) << 4 | f2(e4.charAt(t4 + 2)) >> 2) >> 8 & 255), s3(255 & n3)), o3;
          }, e3.fromByteArray = function(e4) {
            var t4, n3, r3, o3, i3 = e4.length % 3, u3 = "";
            function s3(e5) {
              return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e5);
            }
            for (t4 = 0, r3 = e4.length - i3;t4 < r3; t4 += 3)
              n3 = (e4[t4] << 16) + (e4[t4 + 1] << 8) + e4[t4 + 2], u3 += s3((o3 = n3) >> 18 & 63) + s3(o3 >> 12 & 63) + s3(o3 >> 6 & 63) + s3(63 & o3);
            switch (i3) {
              case 1:
                u3 = (u3 += s3((n3 = e4[e4.length - 1]) >> 2)) + s3(n3 << 4 & 63) + "==";
                break;
              case 2:
                u3 = (u3 = (u3 += s3((n3 = (e4[e4.length - 2] << 8) + e4[e4.length - 1]) >> 10)) + s3(n3 >> 4 & 63)) + s3(n3 << 2 & 63) + "=";
            }
            return u3;
          };
        })(f === undefined ? this.base64js = {} : f);
      }).call(this, e("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
    }, { buffer: 3, lYpoI2: 11 }], 3: [function(O, e, H) {
      (function(e2, n, f, r, h, p, g, y, w) {
        var a = O("base64-js"), i = O("ieee754");
        function f(e3, t2, n2) {
          if (!(this instanceof f))
            return new f(e3, t2, n2);
          var r2, o2, i2, u2, s2 = typeof e3;
          if (t2 === "base64" && s2 == "string")
            for (e3 = (u2 = e3).trim ? u2.trim() : u2.replace(/^\s+|\s+$/g, "");e3.length % 4 != 0; )
              e3 += "=";
          if (s2 == "number")
            r2 = j(e3);
          else if (s2 == "string")
            r2 = f.byteLength(e3, t2);
          else {
            if (s2 != "object")
              throw new Error("First argument needs to be a number, array or string.");
            r2 = j(e3.length);
          }
          if (f._useTypedArrays ? o2 = f._augment(new Uint8Array(r2)) : ((o2 = this).length = r2, o2._isBuffer = true), f._useTypedArrays && typeof e3.byteLength == "number")
            o2._set(e3);
          else if (C(u2 = e3) || f.isBuffer(u2) || u2 && typeof u2 == "object" && typeof u2.length == "number")
            for (i2 = 0;i2 < r2; i2++)
              f.isBuffer(e3) ? o2[i2] = e3.readUInt8(i2) : o2[i2] = e3[i2];
          else if (s2 == "string")
            o2.write(e3, 0, t2);
          else if (s2 == "number" && !f._useTypedArrays && !n2)
            for (i2 = 0;i2 < r2; i2++)
              o2[i2] = 0;
          return o2;
        }
        function b(e3, t2, n2, r2) {
          return f._charsWritten = c(function(e4) {
            for (var t3 = [], n3 = 0;n3 < e4.length; n3++)
              t3.push(255 & e4.charCodeAt(n3));
            return t3;
          }(t2), e3, n2, r2);
        }
        function m(e3, t2, n2, r2) {
          return f._charsWritten = c(function(e4) {
            for (var t3, n3, r3 = [], o2 = 0;o2 < e4.length; o2++)
              n3 = e4.charCodeAt(o2), t3 = n3 >> 8, n3 = n3 % 256, r3.push(n3), r3.push(t3);
            return r3;
          }(t2), e3, n2, r2);
        }
        function v(e3, t2, n2) {
          var r2 = "";
          n2 = Math.min(e3.length, n2);
          for (var o2 = t2;o2 < n2; o2++)
            r2 += String.fromCharCode(e3[o2]);
          return r2;
        }
        function o(e3, t2, n2, r2) {
          r2 || (d(typeof n2 == "boolean", "missing or invalid endian"), d(t2 != null, "missing offset"), d(t2 + 1 < e3.length, "Trying to read beyond buffer length"));
          var o2, r2 = e3.length;
          if (!(r2 <= t2))
            return n2 ? (o2 = e3[t2], t2 + 1 < r2 && (o2 |= e3[t2 + 1] << 8)) : (o2 = e3[t2] << 8, t2 + 1 < r2 && (o2 |= e3[t2 + 1])), o2;
        }
        function u(e3, t2, n2, r2) {
          r2 || (d(typeof n2 == "boolean", "missing or invalid endian"), d(t2 != null, "missing offset"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length"));
          var o2, r2 = e3.length;
          if (!(r2 <= t2))
            return n2 ? (t2 + 2 < r2 && (o2 = e3[t2 + 2] << 16), t2 + 1 < r2 && (o2 |= e3[t2 + 1] << 8), o2 |= e3[t2], t2 + 3 < r2 && (o2 += e3[t2 + 3] << 24 >>> 0)) : (t2 + 1 < r2 && (o2 = e3[t2 + 1] << 16), t2 + 2 < r2 && (o2 |= e3[t2 + 2] << 8), t2 + 3 < r2 && (o2 |= e3[t2 + 3]), o2 += e3[t2] << 24 >>> 0), o2;
        }
        function _(e3, t2, n2, r2) {
          if (r2 || (d(typeof n2 == "boolean", "missing or invalid endian"), d(t2 != null, "missing offset"), d(t2 + 1 < e3.length, "Trying to read beyond buffer length")), !(e3.length <= t2))
            return r2 = o(e3, t2, n2, true), 32768 & r2 ? -1 * (65535 - r2 + 1) : r2;
        }
        function E(e3, t2, n2, r2) {
          if (r2 || (d(typeof n2 == "boolean", "missing or invalid endian"), d(t2 != null, "missing offset"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length")), !(e3.length <= t2))
            return r2 = u(e3, t2, n2, true), 2147483648 & r2 ? -1 * (4294967295 - r2 + 1) : r2;
        }
        function I(e3, t2, n2, r2) {
          return r2 || (d(typeof n2 == "boolean", "missing or invalid endian"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length")), i.read(e3, t2, n2, 23, 4);
        }
        function A(e3, t2, n2, r2) {
          return r2 || (d(typeof n2 == "boolean", "missing or invalid endian"), d(t2 + 7 < e3.length, "Trying to read beyond buffer length")), i.read(e3, t2, n2, 52, 8);
        }
        function s(e3, t2, n2, r2, o2) {
          o2 || (d(t2 != null, "missing value"), d(typeof r2 == "boolean", "missing or invalid endian"), d(n2 != null, "missing offset"), d(n2 + 1 < e3.length, "trying to write beyond buffer length"), Y(t2, 65535));
          o2 = e3.length;
          if (!(o2 <= n2))
            for (var i2 = 0, u2 = Math.min(o2 - n2, 2);i2 < u2; i2++)
              e3[n2 + i2] = (t2 & 255 << 8 * (r2 ? i2 : 1 - i2)) >>> 8 * (r2 ? i2 : 1 - i2);
        }
        function l(e3, t2, n2, r2, o2) {
          o2 || (d(t2 != null, "missing value"), d(typeof r2 == "boolean", "missing or invalid endian"), d(n2 != null, "missing offset"), d(n2 + 3 < e3.length, "trying to write beyond buffer length"), Y(t2, 4294967295));
          o2 = e3.length;
          if (!(o2 <= n2))
            for (var i2 = 0, u2 = Math.min(o2 - n2, 4);i2 < u2; i2++)
              e3[n2 + i2] = t2 >>> 8 * (r2 ? i2 : 3 - i2) & 255;
        }
        function B(e3, t2, n2, r2, o2) {
          o2 || (d(t2 != null, "missing value"), d(typeof r2 == "boolean", "missing or invalid endian"), d(n2 != null, "missing offset"), d(n2 + 1 < e3.length, "Trying to write beyond buffer length"), F(t2, 32767, -32768)), e3.length <= n2 || s(e3, 0 <= t2 ? t2 : 65535 + t2 + 1, n2, r2, o2);
        }
        function L(e3, t2, n2, r2, o2) {
          o2 || (d(t2 != null, "missing value"), d(typeof r2 == "boolean", "missing or invalid endian"), d(n2 != null, "missing offset"), d(n2 + 3 < e3.length, "Trying to write beyond buffer length"), F(t2, 2147483647, -2147483648)), e3.length <= n2 || l(e3, 0 <= t2 ? t2 : 4294967295 + t2 + 1, n2, r2, o2);
        }
        function U(e3, t2, n2, r2, o2) {
          o2 || (d(t2 != null, "missing value"), d(typeof r2 == "boolean", "missing or invalid endian"), d(n2 != null, "missing offset"), d(n2 + 3 < e3.length, "Trying to write beyond buffer length"), D(t2, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000)), e3.length <= n2 || i.write(e3, t2, n2, r2, 23, 4);
        }
        function x(e3, t2, n2, r2, o2) {
          o2 || (d(t2 != null, "missing value"), d(typeof r2 == "boolean", "missing or invalid endian"), d(n2 != null, "missing offset"), d(n2 + 7 < e3.length, "Trying to write beyond buffer length"), D(t2, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)), e3.length <= n2 || i.write(e3, t2, n2, r2, 52, 8);
        }
        H.Buffer = f, H.SlowBuffer = f, H.INSPECT_MAX_BYTES = 50, f.poolSize = 8192, f._useTypedArrays = function() {
          try {
            var e3 = new ArrayBuffer(0), t2 = new Uint8Array(e3);
            return t2.foo = function() {
              return 42;
            }, t2.foo() === 42 && typeof t2.subarray == "function";
          } catch (e4) {
            return false;
          }
        }(), f.isEncoding = function(e3) {
          switch (String(e3).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "raw":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, f.isBuffer = function(e3) {
          return !(e3 == null || !e3._isBuffer);
        }, f.byteLength = function(e3, t2) {
          var n2;
          switch (e3 += "", t2 || "utf8") {
            case "hex":
              n2 = e3.length / 2;
              break;
            case "utf8":
            case "utf-8":
              n2 = T(e3).length;
              break;
            case "ascii":
            case "binary":
            case "raw":
              n2 = e3.length;
              break;
            case "base64":
              n2 = M(e3).length;
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              n2 = 2 * e3.length;
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return n2;
        }, f.concat = function(e3, t2) {
          if (d(C(e3), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), e3.length === 0)
            return new f(0);
          if (e3.length === 1)
            return e3[0];
          if (typeof t2 != "number")
            for (o2 = t2 = 0;o2 < e3.length; o2++)
              t2 += e3[o2].length;
          for (var n2 = new f(t2), r2 = 0, o2 = 0;o2 < e3.length; o2++) {
            var i2 = e3[o2];
            i2.copy(n2, r2), r2 += i2.length;
          }
          return n2;
        }, f.prototype.write = function(e3, t2, n2, r2) {
          isFinite(t2) ? isFinite(n2) || (r2 = n2, n2 = undefined) : (a2 = r2, r2 = t2, t2 = n2, n2 = a2), t2 = Number(t2) || 0;
          var o2, i2, u2, s2, a2 = this.length - t2;
          switch ((!n2 || a2 < (n2 = Number(n2))) && (n2 = a2), r2 = String(r2 || "utf8").toLowerCase()) {
            case "hex":
              o2 = function(e4, t3, n3, r3) {
                n3 = Number(n3) || 0;
                var o3 = e4.length - n3;
                (!r3 || o3 < (r3 = Number(r3))) && (r3 = o3), d((o3 = t3.length) % 2 == 0, "Invalid hex string"), o3 / 2 < r3 && (r3 = o3 / 2);
                for (var i3 = 0;i3 < r3; i3++) {
                  var u3 = parseInt(t3.substr(2 * i3, 2), 16);
                  d(!isNaN(u3), "Invalid hex string"), e4[n3 + i3] = u3;
                }
                return f._charsWritten = 2 * i3, i3;
              }(this, e3, t2, n2);
              break;
            case "utf8":
            case "utf-8":
              i2 = this, u2 = t2, s2 = n2, o2 = f._charsWritten = c(T(e3), i2, u2, s2);
              break;
            case "ascii":
            case "binary":
              o2 = b(this, e3, t2, n2);
              break;
            case "base64":
              i2 = this, u2 = t2, s2 = n2, o2 = f._charsWritten = c(M(e3), i2, u2, s2);
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              o2 = m(this, e3, t2, n2);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return o2;
        }, f.prototype.toString = function(e3, t2, n2) {
          var r2, o2, i2, u2, s2 = this;
          if (e3 = String(e3 || "utf8").toLowerCase(), t2 = Number(t2) || 0, (n2 = n2 !== undefined ? Number(n2) : s2.length) === t2)
            return "";
          switch (e3) {
            case "hex":
              r2 = function(e4, t3, n3) {
                var r3 = e4.length;
                (!t3 || t3 < 0) && (t3 = 0);
                (!n3 || n3 < 0 || r3 < n3) && (n3 = r3);
                for (var o3 = "", i3 = t3;i3 < n3; i3++)
                  o3 += k(e4[i3]);
                return o3;
              }(s2, t2, n2);
              break;
            case "utf8":
            case "utf-8":
              r2 = function(e4, t3, n3) {
                var r3 = "", o3 = "";
                n3 = Math.min(e4.length, n3);
                for (var i3 = t3;i3 < n3; i3++)
                  e4[i3] <= 127 ? (r3 += N(o3) + String.fromCharCode(e4[i3]), o3 = "") : o3 += "%" + e4[i3].toString(16);
                return r3 + N(o3);
              }(s2, t2, n2);
              break;
            case "ascii":
            case "binary":
              r2 = v(s2, t2, n2);
              break;
            case "base64":
              o2 = s2, u2 = n2, r2 = (i2 = t2) === 0 && u2 === o2.length ? a.fromByteArray(o2) : a.fromByteArray(o2.slice(i2, u2));
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              r2 = function(e4, t3, n3) {
                for (var r3 = e4.slice(t3, n3), o3 = "", i3 = 0;i3 < r3.length; i3 += 2)
                  o3 += String.fromCharCode(r3[i3] + 256 * r3[i3 + 1]);
                return o3;
              }(s2, t2, n2);
              break;
            default:
              throw new Error("Unknown encoding");
          }
          return r2;
        }, f.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        }, f.prototype.copy = function(e3, t2, n2, r2) {
          if (t2 = t2 || 0, (r2 = r2 || r2 === 0 ? r2 : this.length) !== (n2 = n2 || 0) && e3.length !== 0 && this.length !== 0) {
            d(n2 <= r2, "sourceEnd < sourceStart"), d(0 <= t2 && t2 < e3.length, "targetStart out of bounds"), d(0 <= n2 && n2 < this.length, "sourceStart out of bounds"), d(0 <= r2 && r2 <= this.length, "sourceEnd out of bounds"), r2 > this.length && (r2 = this.length);
            var o2 = (r2 = e3.length - t2 < r2 - n2 ? e3.length - t2 + n2 : r2) - n2;
            if (o2 < 100 || !f._useTypedArrays)
              for (var i2 = 0;i2 < o2; i2++)
                e3[i2 + t2] = this[i2 + n2];
            else
              e3._set(this.subarray(n2, n2 + o2), t2);
          }
        }, f.prototype.slice = function(e3, t2) {
          var n2 = this.length;
          if (e3 = S(e3, n2, 0), t2 = S(t2, n2, n2), f._useTypedArrays)
            return f._augment(this.subarray(e3, t2));
          for (var r2 = t2 - e3, o2 = new f(r2, undefined, true), i2 = 0;i2 < r2; i2++)
            o2[i2] = this[i2 + e3];
          return o2;
        }, f.prototype.get = function(e3) {
          return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e3);
        }, f.prototype.set = function(e3, t2) {
          return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e3, t2);
        }, f.prototype.readUInt8 = function(e3, t2) {
          if (t2 || (d(e3 != null, "missing offset"), d(e3 < this.length, "Trying to read beyond buffer length")), !(e3 >= this.length))
            return this[e3];
        }, f.prototype.readUInt16LE = function(e3, t2) {
          return o(this, e3, true, t2);
        }, f.prototype.readUInt16BE = function(e3, t2) {
          return o(this, e3, false, t2);
        }, f.prototype.readUInt32LE = function(e3, t2) {
          return u(this, e3, true, t2);
        }, f.prototype.readUInt32BE = function(e3, t2) {
          return u(this, e3, false, t2);
        }, f.prototype.readInt8 = function(e3, t2) {
          if (t2 || (d(e3 != null, "missing offset"), d(e3 < this.length, "Trying to read beyond buffer length")), !(e3 >= this.length))
            return 128 & this[e3] ? -1 * (255 - this[e3] + 1) : this[e3];
        }, f.prototype.readInt16LE = function(e3, t2) {
          return _(this, e3, true, t2);
        }, f.prototype.readInt16BE = function(e3, t2) {
          return _(this, e3, false, t2);
        }, f.prototype.readInt32LE = function(e3, t2) {
          return E(this, e3, true, t2);
        }, f.prototype.readInt32BE = function(e3, t2) {
          return E(this, e3, false, t2);
        }, f.prototype.readFloatLE = function(e3, t2) {
          return I(this, e3, true, t2);
        }, f.prototype.readFloatBE = function(e3, t2) {
          return I(this, e3, false, t2);
        }, f.prototype.readDoubleLE = function(e3, t2) {
          return A(this, e3, true, t2);
        }, f.prototype.readDoubleBE = function(e3, t2) {
          return A(this, e3, false, t2);
        }, f.prototype.writeUInt8 = function(e3, t2, n2) {
          n2 || (d(e3 != null, "missing value"), d(t2 != null, "missing offset"), d(t2 < this.length, "trying to write beyond buffer length"), Y(e3, 255)), t2 >= this.length || (this[t2] = e3);
        }, f.prototype.writeUInt16LE = function(e3, t2, n2) {
          s(this, e3, t2, true, n2);
        }, f.prototype.writeUInt16BE = function(e3, t2, n2) {
          s(this, e3, t2, false, n2);
        }, f.prototype.writeUInt32LE = function(e3, t2, n2) {
          l(this, e3, t2, true, n2);
        }, f.prototype.writeUInt32BE = function(e3, t2, n2) {
          l(this, e3, t2, false, n2);
        }, f.prototype.writeInt8 = function(e3, t2, n2) {
          n2 || (d(e3 != null, "missing value"), d(t2 != null, "missing offset"), d(t2 < this.length, "Trying to write beyond buffer length"), F(e3, 127, -128)), t2 >= this.length || (0 <= e3 ? this.writeUInt8(e3, t2, n2) : this.writeUInt8(255 + e3 + 1, t2, n2));
        }, f.prototype.writeInt16LE = function(e3, t2, n2) {
          B(this, e3, t2, true, n2);
        }, f.prototype.writeInt16BE = function(e3, t2, n2) {
          B(this, e3, t2, false, n2);
        }, f.prototype.writeInt32LE = function(e3, t2, n2) {
          L(this, e3, t2, true, n2);
        }, f.prototype.writeInt32BE = function(e3, t2, n2) {
          L(this, e3, t2, false, n2);
        }, f.prototype.writeFloatLE = function(e3, t2, n2) {
          U(this, e3, t2, true, n2);
        }, f.prototype.writeFloatBE = function(e3, t2, n2) {
          U(this, e3, t2, false, n2);
        }, f.prototype.writeDoubleLE = function(e3, t2, n2) {
          x(this, e3, t2, true, n2);
        }, f.prototype.writeDoubleBE = function(e3, t2, n2) {
          x(this, e3, t2, false, n2);
        }, f.prototype.fill = function(e3, t2, n2) {
          if (t2 = t2 || 0, n2 = n2 || this.length, d(typeof (e3 = typeof (e3 = e3 || 0) == "string" ? e3.charCodeAt(0) : e3) == "number" && !isNaN(e3), "value is not a number"), d(t2 <= n2, "end < start"), n2 !== t2 && this.length !== 0) {
            d(0 <= t2 && t2 < this.length, "start out of bounds"), d(0 <= n2 && n2 <= this.length, "end out of bounds");
            for (var r2 = t2;r2 < n2; r2++)
              this[r2] = e3;
          }
        }, f.prototype.inspect = function() {
          for (var e3 = [], t2 = this.length, n2 = 0;n2 < t2; n2++)
            if (e3[n2] = k(this[n2]), n2 === H.INSPECT_MAX_BYTES) {
              e3[n2 + 1] = "...";
              break;
            }
          return "<Buffer " + e3.join(" ") + ">";
        }, f.prototype.toArrayBuffer = function() {
          if (typeof Uint8Array == "undefined")
            throw new Error("Buffer.toArrayBuffer not supported in this browser");
          if (f._useTypedArrays)
            return new f(this).buffer;
          for (var e3 = new Uint8Array(this.length), t2 = 0, n2 = e3.length;t2 < n2; t2 += 1)
            e3[t2] = this[t2];
          return e3.buffer;
        };
        var t = f.prototype;
        function S(e3, t2, n2) {
          return typeof e3 != "number" ? n2 : t2 <= (e3 = ~~e3) ? t2 : 0 <= e3 || 0 <= (e3 += t2) ? e3 : 0;
        }
        function j(e3) {
          return (e3 = ~~Math.ceil(+e3)) < 0 ? 0 : e3;
        }
        function C(e3) {
          return (Array.isArray || function(e4) {
            return Object.prototype.toString.call(e4) === "[object Array]";
          })(e3);
        }
        function k(e3) {
          return e3 < 16 ? "0" + e3.toString(16) : e3.toString(16);
        }
        function T(e3) {
          for (var t2 = [], n2 = 0;n2 < e3.length; n2++) {
            var r2 = e3.charCodeAt(n2);
            if (r2 <= 127)
              t2.push(e3.charCodeAt(n2));
            else
              for (var o2 = n2, i2 = (55296 <= r2 && r2 <= 57343 && n2++, encodeURIComponent(e3.slice(o2, n2 + 1)).substr(1).split("%")), u2 = 0;u2 < i2.length; u2++)
                t2.push(parseInt(i2[u2], 16));
          }
          return t2;
        }
        function M(e3) {
          return a.toByteArray(e3);
        }
        function c(e3, t2, n2, r2) {
          for (var o2 = 0;o2 < r2 && !(o2 + n2 >= t2.length || o2 >= e3.length); o2++)
            t2[o2 + n2] = e3[o2];
          return o2;
        }
        function N(e3) {
          try {
            return decodeURIComponent(e3);
          } catch (e4) {
            return String.fromCharCode(65533);
          }
        }
        function Y(e3, t2) {
          d(typeof e3 == "number", "cannot write a non-number as a number"), d(0 <= e3, "specified a negative value for writing an unsigned value"), d(e3 <= t2, "value is larger than maximum value for type"), d(Math.floor(e3) === e3, "value has a fractional component");
        }
        function F(e3, t2, n2) {
          d(typeof e3 == "number", "cannot write a non-number as a number"), d(e3 <= t2, "value larger than maximum allowed value"), d(n2 <= e3, "value smaller than minimum allowed value"), d(Math.floor(e3) === e3, "value has a fractional component");
        }
        function D(e3, t2, n2) {
          d(typeof e3 == "number", "cannot write a non-number as a number"), d(e3 <= t2, "value larger than maximum allowed value"), d(n2 <= e3, "value smaller than minimum allowed value");
        }
        function d(e3, t2) {
          if (!e3)
            throw new Error(t2 || "Failed assertion");
        }
        f._augment = function(e3) {
          return e3._isBuffer = true, e3._get = e3.get, e3._set = e3.set, e3.get = t.get, e3.set = t.set, e3.write = t.write, e3.toString = t.toString, e3.toLocaleString = t.toString, e3.toJSON = t.toJSON, e3.copy = t.copy, e3.slice = t.slice, e3.readUInt8 = t.readUInt8, e3.readUInt16LE = t.readUInt16LE, e3.readUInt16BE = t.readUInt16BE, e3.readUInt32LE = t.readUInt32LE, e3.readUInt32BE = t.readUInt32BE, e3.readInt8 = t.readInt8, e3.readInt16LE = t.readInt16LE, e3.readInt16BE = t.readInt16BE, e3.readInt32LE = t.readInt32LE, e3.readInt32BE = t.readInt32BE, e3.readFloatLE = t.readFloatLE, e3.readFloatBE = t.readFloatBE, e3.readDoubleLE = t.readDoubleLE, e3.readDoubleBE = t.readDoubleBE, e3.writeUInt8 = t.writeUInt8, e3.writeUInt16LE = t.writeUInt16LE, e3.writeUInt16BE = t.writeUInt16BE, e3.writeUInt32LE = t.writeUInt32LE, e3.writeUInt32BE = t.writeUInt32BE, e3.writeInt8 = t.writeInt8, e3.writeInt16LE = t.writeInt16LE, e3.writeInt16BE = t.writeInt16BE, e3.writeInt32LE = t.writeInt32LE, e3.writeInt32BE = t.writeInt32BE, e3.writeFloatLE = t.writeFloatLE, e3.writeFloatBE = t.writeFloatBE, e3.writeDoubleLE = t.writeDoubleLE, e3.writeDoubleBE = t.writeDoubleBE, e3.fill = t.fill, e3.inspect = t.inspect, e3.toArrayBuffer = t.toArrayBuffer, e3;
        };
      }).call(this, O("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, O("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
    }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(c, d, e) {
      (function(e2, t, a, n, r, o, i, u, s) {
        var a = c("buffer").Buffer, f = 4, l = new a(f);
        l.fill(0);
        d.exports = { hash: function(e3, t2, n2, r2) {
          for (var o2 = t2(function(e4, t3) {
            e4.length % f != 0 && (n3 = e4.length + (f - e4.length % f), e4 = a.concat([e4, l], n3));
            for (var n3, r3 = [], o3 = t3 ? e4.readInt32BE : e4.readInt32LE, i3 = 0;i3 < e4.length; i3 += f)
              r3.push(o3.call(e4, i3));
            return r3;
          }(e3 = a.isBuffer(e3) ? e3 : new a(e3), r2), 8 * e3.length), t2 = r2, i2 = new a(n2), u2 = t2 ? i2.writeInt32BE : i2.writeInt32LE, s2 = 0;s2 < o2.length; s2++)
            u2.call(i2, o2[s2], 4 * s2, true);
          return i2;
        } };
      }).call(this, c("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 5: [function(v, e, _) {
      (function(l, c, u, d, h, p, g, y, w) {
        var u = v("buffer").Buffer, e2 = v("./sha"), t = v("./sha256"), n = v("./rng"), b = { sha1: e2, sha256: t, md5: v("./md5") }, s = 64, a = new u(s);
        function r(e3, n2) {
          var r2 = b[e3 = e3 || "sha1"], o2 = [];
          return r2 || i("algorithm:", e3, "is not yet supported"), { update: function(e4) {
            return u.isBuffer(e4) || (e4 = new u(e4)), o2.push(e4), e4.length, this;
          }, digest: function(e4) {
            var t2 = u.concat(o2), t2 = n2 ? function(e5, t3, n3) {
              u.isBuffer(t3) || (t3 = new u(t3)), u.isBuffer(n3) || (n3 = new u(n3)), t3.length > s ? t3 = e5(t3) : t3.length < s && (t3 = u.concat([t3, a], s));
              for (var r3 = new u(s), o3 = new u(s), i2 = 0;i2 < s; i2++)
                r3[i2] = 54 ^ t3[i2], o3[i2] = 92 ^ t3[i2];
              return n3 = e5(u.concat([r3, n3])), e5(u.concat([o3, n3]));
            }(r2, n2, t2) : r2(t2);
            return o2 = null, e4 ? t2.toString(e4) : t2;
          } };
        }
        function i() {
          var e3 = [].slice.call(arguments).join(" ");
          throw new Error([e3, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"));
        }
        a.fill(0), _.createHash = function(e3) {
          return r(e3);
        }, _.createHmac = r, _.randomBytes = function(e3, t2) {
          if (!t2 || !t2.call)
            return new u(n(e3));
          try {
            t2.call(this, undefined, new u(n(e3)));
          } catch (e4) {
            t2(e4);
          }
        };
        var o, f = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], m = function(e3) {
          _[e3] = function() {
            i("sorry,", e3, "is not implemented yet");
          };
        };
        for (o in f)
          m(f[o], o);
      }).call(this, v("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, v("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(w, b, e) {
      (function(e2, r, o, i, u, a, f, l, y) {
        var t = w("./helpers");
        function n(e3, t2) {
          e3[t2 >> 5] |= 128 << t2 % 32, e3[14 + (t2 + 64 >>> 9 << 4)] = t2;
          for (var n2 = 1732584193, r2 = -271733879, o2 = -1732584194, i2 = 271733878, u2 = 0;u2 < e3.length; u2 += 16) {
            var s2 = n2, a2 = r2, f2 = o2, l2 = i2, n2 = c(n2, r2, o2, i2, e3[u2 + 0], 7, -680876936), i2 = c(i2, n2, r2, o2, e3[u2 + 1], 12, -389564586), o2 = c(o2, i2, n2, r2, e3[u2 + 2], 17, 606105819), r2 = c(r2, o2, i2, n2, e3[u2 + 3], 22, -1044525330);
            n2 = c(n2, r2, o2, i2, e3[u2 + 4], 7, -176418897), i2 = c(i2, n2, r2, o2, e3[u2 + 5], 12, 1200080426), o2 = c(o2, i2, n2, r2, e3[u2 + 6], 17, -1473231341), r2 = c(r2, o2, i2, n2, e3[u2 + 7], 22, -45705983), n2 = c(n2, r2, o2, i2, e3[u2 + 8], 7, 1770035416), i2 = c(i2, n2, r2, o2, e3[u2 + 9], 12, -1958414417), o2 = c(o2, i2, n2, r2, e3[u2 + 10], 17, -42063), r2 = c(r2, o2, i2, n2, e3[u2 + 11], 22, -1990404162), n2 = c(n2, r2, o2, i2, e3[u2 + 12], 7, 1804603682), i2 = c(i2, n2, r2, o2, e3[u2 + 13], 12, -40341101), o2 = c(o2, i2, n2, r2, e3[u2 + 14], 17, -1502002290), n2 = d(n2, r2 = c(r2, o2, i2, n2, e3[u2 + 15], 22, 1236535329), o2, i2, e3[u2 + 1], 5, -165796510), i2 = d(i2, n2, r2, o2, e3[u2 + 6], 9, -1069501632), o2 = d(o2, i2, n2, r2, e3[u2 + 11], 14, 643717713), r2 = d(r2, o2, i2, n2, e3[u2 + 0], 20, -373897302), n2 = d(n2, r2, o2, i2, e3[u2 + 5], 5, -701558691), i2 = d(i2, n2, r2, o2, e3[u2 + 10], 9, 38016083), o2 = d(o2, i2, n2, r2, e3[u2 + 15], 14, -660478335), r2 = d(r2, o2, i2, n2, e3[u2 + 4], 20, -405537848), n2 = d(n2, r2, o2, i2, e3[u2 + 9], 5, 568446438), i2 = d(i2, n2, r2, o2, e3[u2 + 14], 9, -1019803690), o2 = d(o2, i2, n2, r2, e3[u2 + 3], 14, -187363961), r2 = d(r2, o2, i2, n2, e3[u2 + 8], 20, 1163531501), n2 = d(n2, r2, o2, i2, e3[u2 + 13], 5, -1444681467), i2 = d(i2, n2, r2, o2, e3[u2 + 2], 9, -51403784), o2 = d(o2, i2, n2, r2, e3[u2 + 7], 14, 1735328473), n2 = h(n2, r2 = d(r2, o2, i2, n2, e3[u2 + 12], 20, -1926607734), o2, i2, e3[u2 + 5], 4, -378558), i2 = h(i2, n2, r2, o2, e3[u2 + 8], 11, -2022574463), o2 = h(o2, i2, n2, r2, e3[u2 + 11], 16, 1839030562), r2 = h(r2, o2, i2, n2, e3[u2 + 14], 23, -35309556), n2 = h(n2, r2, o2, i2, e3[u2 + 1], 4, -1530992060), i2 = h(i2, n2, r2, o2, e3[u2 + 4], 11, 1272893353), o2 = h(o2, i2, n2, r2, e3[u2 + 7], 16, -155497632), r2 = h(r2, o2, i2, n2, e3[u2 + 10], 23, -1094730640), n2 = h(n2, r2, o2, i2, e3[u2 + 13], 4, 681279174), i2 = h(i2, n2, r2, o2, e3[u2 + 0], 11, -358537222), o2 = h(o2, i2, n2, r2, e3[u2 + 3], 16, -722521979), r2 = h(r2, o2, i2, n2, e3[u2 + 6], 23, 76029189), n2 = h(n2, r2, o2, i2, e3[u2 + 9], 4, -640364487), i2 = h(i2, n2, r2, o2, e3[u2 + 12], 11, -421815835), o2 = h(o2, i2, n2, r2, e3[u2 + 15], 16, 530742520), n2 = p(n2, r2 = h(r2, o2, i2, n2, e3[u2 + 2], 23, -995338651), o2, i2, e3[u2 + 0], 6, -198630844), i2 = p(i2, n2, r2, o2, e3[u2 + 7], 10, 1126891415), o2 = p(o2, i2, n2, r2, e3[u2 + 14], 15, -1416354905), r2 = p(r2, o2, i2, n2, e3[u2 + 5], 21, -57434055), n2 = p(n2, r2, o2, i2, e3[u2 + 12], 6, 1700485571), i2 = p(i2, n2, r2, o2, e3[u2 + 3], 10, -1894986606), o2 = p(o2, i2, n2, r2, e3[u2 + 10], 15, -1051523), r2 = p(r2, o2, i2, n2, e3[u2 + 1], 21, -2054922799), n2 = p(n2, r2, o2, i2, e3[u2 + 8], 6, 1873313359), i2 = p(i2, n2, r2, o2, e3[u2 + 15], 10, -30611744), o2 = p(o2, i2, n2, r2, e3[u2 + 6], 15, -1560198380), r2 = p(r2, o2, i2, n2, e3[u2 + 13], 21, 1309151649), n2 = p(n2, r2, o2, i2, e3[u2 + 4], 6, -145523070), i2 = p(i2, n2, r2, o2, e3[u2 + 11], 10, -1120210379), o2 = p(o2, i2, n2, r2, e3[u2 + 2], 15, 718787259), r2 = p(r2, o2, i2, n2, e3[u2 + 9], 21, -343485551), n2 = g(n2, s2), r2 = g(r2, a2), o2 = g(o2, f2), i2 = g(i2, l2);
          }
          return Array(n2, r2, o2, i2);
        }
        function s(e3, t2, n2, r2, o2, i2) {
          return g((t2 = g(g(t2, e3), g(r2, i2))) << o2 | t2 >>> 32 - o2, n2);
        }
        function c(e3, t2, n2, r2, o2, i2, u2) {
          return s(t2 & n2 | ~t2 & r2, e3, t2, o2, i2, u2);
        }
        function d(e3, t2, n2, r2, o2, i2, u2) {
          return s(t2 & r2 | n2 & ~r2, e3, t2, o2, i2, u2);
        }
        function h(e3, t2, n2, r2, o2, i2, u2) {
          return s(t2 ^ n2 ^ r2, e3, t2, o2, i2, u2);
        }
        function p(e3, t2, n2, r2, o2, i2, u2) {
          return s(n2 ^ (t2 | ~r2), e3, t2, o2, i2, u2);
        }
        function g(e3, t2) {
          var n2 = (65535 & e3) + (65535 & t2);
          return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
        }
        b.exports = function(e3) {
          return t.hash(e3, n, 16);
        };
      }).call(this, w("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(e, l, t) {
      (function(e2, t2, n, r, o, i, u, s, f) {
        var a;
        l.exports = a || function(e3) {
          for (var t3, n2 = new Array(e3), r2 = 0;r2 < e3; r2++)
            (3 & r2) == 0 && (t3 = 4294967296 * Math.random()), n2[r2] = t3 >>> ((3 & r2) << 3) & 255;
          return n2;
        };
      }).call(this, e("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { buffer: 3, lYpoI2: 11 }], 8: [function(c, d, e) {
      (function(e2, t, n, r, o, s, a, f, l) {
        var i = c("./helpers");
        function u(l2, c2) {
          l2[c2 >> 5] |= 128 << 24 - c2 % 32, l2[15 + (c2 + 64 >> 9 << 4)] = c2;
          for (var e3, t2, n2, r2 = Array(80), o2 = 1732584193, i2 = -271733879, u2 = -1732584194, s2 = 271733878, d2 = -1009589776, h = 0;h < l2.length; h += 16) {
            for (var p = o2, g = i2, y = u2, w = s2, b = d2, a2 = 0;a2 < 80; a2++) {
              r2[a2] = a2 < 16 ? l2[h + a2] : v(r2[a2 - 3] ^ r2[a2 - 8] ^ r2[a2 - 14] ^ r2[a2 - 16], 1);
              var f2 = m(m(v(o2, 5), (f2 = i2, t2 = u2, n2 = s2, (e3 = a2) < 20 ? f2 & t2 | ~f2 & n2 : !(e3 < 40) && e3 < 60 ? f2 & t2 | f2 & n2 | t2 & n2 : f2 ^ t2 ^ n2)), m(m(d2, r2[a2]), (e3 = a2) < 20 ? 1518500249 : e3 < 40 ? 1859775393 : e3 < 60 ? -1894007588 : -899497514)), d2 = s2, s2 = u2, u2 = v(i2, 30), i2 = o2, o2 = f2;
            }
            o2 = m(o2, p), i2 = m(i2, g), u2 = m(u2, y), s2 = m(s2, w), d2 = m(d2, b);
          }
          return Array(o2, i2, u2, s2, d2);
        }
        function m(e3, t2) {
          var n2 = (65535 & e3) + (65535 & t2);
          return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
        }
        function v(e3, t2) {
          return e3 << t2 | e3 >>> 32 - t2;
        }
        d.exports = function(e3) {
          return i.hash(e3, u, 20, true);
        };
      }).call(this, c("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(c, d, e) {
      (function(e2, t, n, r, u, s, a, f, l) {
        function b(e3, t2) {
          var n2 = (65535 & e3) + (65535 & t2);
          return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
        }
        function o(e3, l2) {
          var c2, d2 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), t2 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), n2 = new Array(64);
          e3[l2 >> 5] |= 128 << 24 - l2 % 32, e3[15 + (l2 + 64 >> 9 << 4)] = l2;
          for (var r2, o2, h = 0;h < e3.length; h += 16) {
            for (var i2 = t2[0], u2 = t2[1], s2 = t2[2], p = t2[3], a2 = t2[4], g = t2[5], y = t2[6], w = t2[7], f2 = 0;f2 < 64; f2++)
              n2[f2] = f2 < 16 ? e3[f2 + h] : b(b(b((o2 = n2[f2 - 2], m(o2, 17) ^ m(o2, 19) ^ v(o2, 10)), n2[f2 - 7]), (o2 = n2[f2 - 15], m(o2, 7) ^ m(o2, 18) ^ v(o2, 3))), n2[f2 - 16]), c2 = b(b(b(b(w, m(o2 = a2, 6) ^ m(o2, 11) ^ m(o2, 25)), a2 & g ^ ~a2 & y), d2[f2]), n2[f2]), r2 = b(m(r2 = i2, 2) ^ m(r2, 13) ^ m(r2, 22), i2 & u2 ^ i2 & s2 ^ u2 & s2), w = y, y = g, g = a2, a2 = b(p, c2), p = s2, s2 = u2, u2 = i2, i2 = b(c2, r2);
            t2[0] = b(i2, t2[0]), t2[1] = b(u2, t2[1]), t2[2] = b(s2, t2[2]), t2[3] = b(p, t2[3]), t2[4] = b(a2, t2[4]), t2[5] = b(g, t2[5]), t2[6] = b(y, t2[6]), t2[7] = b(w, t2[7]);
          }
          return t2;
        }
        var i = c("./helpers"), m = function(e3, t2) {
          return e3 >>> t2 | e3 << 32 - t2;
        }, v = function(e3, t2) {
          return e3 >>> t2;
        };
        d.exports = function(e3) {
          return i.hash(e3, o, 32, true);
        };
      }).call(this, c("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
    }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(e, t, f) {
      (function(e2, t2, n, r, o, i, u, s, a) {
        f.read = function(e3, t3, n2, r2, o2) {
          var i2, u2, l = 8 * o2 - r2 - 1, c = (1 << l) - 1, d = c >> 1, s2 = -7, a2 = n2 ? o2 - 1 : 0, f2 = n2 ? -1 : 1, o2 = e3[t3 + a2];
          for (a2 += f2, i2 = o2 & (1 << -s2) - 1, o2 >>= -s2, s2 += l;0 < s2; i2 = 256 * i2 + e3[t3 + a2], a2 += f2, s2 -= 8)
            ;
          for (u2 = i2 & (1 << -s2) - 1, i2 >>= -s2, s2 += r2;0 < s2; u2 = 256 * u2 + e3[t3 + a2], a2 += f2, s2 -= 8)
            ;
          if (i2 === 0)
            i2 = 1 - d;
          else {
            if (i2 === c)
              return u2 ? NaN : 1 / 0 * (o2 ? -1 : 1);
            u2 += Math.pow(2, r2), i2 -= d;
          }
          return (o2 ? -1 : 1) * u2 * Math.pow(2, i2 - r2);
        }, f.write = function(e3, t3, l, n2, r2, c) {
          var o2, i2, u2 = 8 * c - r2 - 1, s2 = (1 << u2) - 1, a2 = s2 >> 1, d = r2 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f2 = n2 ? 0 : c - 1, h = n2 ? 1 : -1, c = t3 < 0 || t3 === 0 && 1 / t3 < 0 ? 1 : 0;
          for (t3 = Math.abs(t3), isNaN(t3) || t3 === 1 / 0 ? (i2 = isNaN(t3) ? 1 : 0, o2 = s2) : (o2 = Math.floor(Math.log(t3) / Math.LN2), t3 * (n2 = Math.pow(2, -o2)) < 1 && (o2--, n2 *= 2), 2 <= (t3 += 1 <= o2 + a2 ? d / n2 : d * Math.pow(2, 1 - a2)) * n2 && (o2++, n2 /= 2), s2 <= o2 + a2 ? (i2 = 0, o2 = s2) : 1 <= o2 + a2 ? (i2 = (t3 * n2 - 1) * Math.pow(2, r2), o2 += a2) : (i2 = t3 * Math.pow(2, a2 - 1) * Math.pow(2, r2), o2 = 0));8 <= r2; e3[l + f2] = 255 & i2, f2 += h, i2 /= 256, r2 -= 8)
            ;
          for (o2 = o2 << r2 | i2, u2 += r2;0 < u2; e3[l + f2] = 255 & o2, f2 += h, o2 /= 256, u2 -= 8)
            ;
          e3[l + f2 - h] |= 128 * c;
        };
      }).call(this, e("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
    }, { buffer: 3, lYpoI2: 11 }], 11: [function(e, h, t) {
      (function(e2, t2, n, r, o, f, l, c, d) {
        var i, u, s;
        function a() {
        }
        (e2 = h.exports = {}).nextTick = (u = typeof window != "undefined" && window.setImmediate, s = typeof window != "undefined" && window.postMessage && window.addEventListener, u ? function(e3) {
          return window.setImmediate(e3);
        } : s ? (i = [], window.addEventListener("message", function(e3) {
          var t3 = e3.source;
          t3 !== window && t3 !== null || e3.data !== "process-tick" || (e3.stopPropagation(), 0 < i.length && i.shift()());
        }, true), function(e3) {
          i.push(e3), window.postMessage("process-tick", "*");
        }) : function(e3) {
          setTimeout(e3, 0);
        }), e2.title = "browser", e2.browser = true, e2.env = {}, e2.argv = [], e2.on = a, e2.addListener = a, e2.once = a, e2.off = a, e2.removeListener = a, e2.removeAllListeners = a, e2.emit = a, e2.binding = function(e3) {
          throw new Error("process.binding is not supported");
        }, e2.cwd = function() {
          return "/";
        }, e2.chdir = function(e3) {
          throw new Error("process.chdir is not supported");
        };
      }).call(this, e("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
    }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
  });
});

// src/utils/log.ts
var log = (() => {
  let isEnabled = false;
  if (typeof window !== "undefined" && typeof window.localStorage !== "undefined") {
    isEnabled = !!window.localStorage.getItem("loggingEnabled");
  } else {
    isEnabled = false;
  }
  function makeLogger(fnName) {
    return (...args) => {
      if (!isEnabled)
        return;
      console[fnName](...args);
    };
  }
  return {
    info: makeLogger("info"),
    debug: makeLogger("debug"),
    error: makeLogger("error")
  };
})();
var log_default = log;

// src/utils/weakHash.ts
var import_object_hash = __toESM(require_object_hash(), 1);
var weakHash = import_object_hash.MD5;
var weakHash_default = weakHash;

// node_modules/immer/dist/immer.esm.mjs
function n(n2) {
  for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1;e < r; e++)
    t[e - 1] = arguments[e];
  if (true) {
    var i = Y[n2], o = i ? typeof i == "function" ? i.apply(null, t) : i : "unknown error nr: " + n2;
    throw Error("[Immer] " + o);
  }
  throw Error("[Immer] minified error nr: " + n2 + (t.length ? " " + t.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var r2 = Object.getPrototypeOf(n3);
    if (r2 === null)
      return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  t2 === undefined && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
    t2 && typeof e == "symbol" || r2(e, n2[e], n2);
  }) : n2.forEach(function(t3, e) {
    return r2(e, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return o(n2) === 2 ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e = o(n2);
  e === 2 ? n2.set(r2, t2) : e === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e = 0;e < t2.length; e++) {
    var i2 = t2[e], o2 = r2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e) {
  return e === undefined && (e = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true), n2);
}
function h() {
  n(2);
}
function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _() {
  return U || n(0), U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}
function P(r2, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = r2 !== undefined && r2 !== i2;
  return e.h.g || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (O(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q].t, r2, e.u, e.s)) : r2 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : undefined;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e = r2[Q];
  if (!e)
    return i(r2, function(i2, o3) {
      return A(n2, e, r2, i2, o3, t2);
    }, true), r2;
  if (e.A !== n2)
    return r2;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = e.i === 4 || e.i === 5 ? e.o = l(e.k) : e.o;
    i(e.i === 3 ? new Set(o2) : o2, function(r3, i2) {
      return A(n2, e, o2, r3, i2, t2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e, t2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2) {
  if (c2 === o2 && n(5), r(c2)) {
    var v2 = M(e, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : undefined);
    if (f(o2, a2, v2), !r(v2))
      return;
    e.m = false;
  }
  if (t(c2) && !y(c2)) {
    if (!e.h.F && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, r2, t2) {
  t2 === undefined && (t2 = false), n2.h.F && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2);t2; ) {
      var e = Object.getOwnPropertyDescriptor(t2, r2);
      if (e)
        return e;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R(n2, r2, t2) {
  var e = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
    t3 && (i2 = [e2], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e), e;
}
function D(e) {
  return r(e) || n(22, e), function n(r2) {
    if (!t(r2))
      return r2;
    var e2, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = F(r2, c2), u2.I = false;
    } else
      e2 = F(r2, c2);
    return i(e2, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e2, r3, n(t2));
    }), c2 === 3 ? new Set(e2) : e2;
  }(e);
}
function F(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function C() {
  function r2(n2, r3) {
    function t2() {
      this.constructor = n2;
    }
    a2(n2, r3), n2.prototype = (t2.prototype = r3.prototype, new t2);
  }
  function e(n2) {
    n2.o || (n2.D = new Map, n2.o = new Map(n2.t));
  }
  function o2(n2) {
    n2.o || (n2.o = new Set, n2.t.forEach(function(r3) {
      if (t(r3)) {
        var e2 = R(n2.A.h, r3, n2);
        n2.p.set(r3, e2), n2.o.add(e2);
      } else
        n2.o.add(r3);
    }));
  }
  function u2(r3) {
    r3.O && n(3, JSON.stringify(p(r3)));
  }
  var a2 = function(n2, r3) {
    return (a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n3, r4) {
      n3.__proto__ = r4;
    } || function(n3, r4) {
      for (var t2 in r4)
        r4.hasOwnProperty(t2) && (n3[t2] = r4[t2]);
    })(n2, r3);
  }, f2 = function() {
    function n2(n3, r3) {
      return this[Q] = { i: 2, l: r3, A: r3 ? r3.A : _(), P: false, I: false, o: undefined, D: undefined, t: n3, k: this, C: false, O: false }, this;
    }
    r2(n2, Map);
    var o3 = n2.prototype;
    return Object.defineProperty(o3, "size", { get: function() {
      return p(this[Q]).size;
    } }), o3.has = function(n3) {
      return p(this[Q]).has(n3);
    }, o3.set = function(n3, r3) {
      var t2 = this[Q];
      return u2(t2), p(t2).has(n3) && p(t2).get(n3) === r3 || (e(t2), k(t2), t2.D.set(n3, true), t2.o.set(n3, r3), t2.D.set(n3, true)), this;
    }, o3.delete = function(n3) {
      if (!this.has(n3))
        return false;
      var r3 = this[Q];
      return u2(r3), e(r3), k(r3), r3.t.has(n3) ? r3.D.set(n3, false) : r3.D.delete(n3), r3.o.delete(n3), true;
    }, o3.clear = function() {
      var n3 = this[Q];
      u2(n3), p(n3).size && (e(n3), k(n3), n3.D = new Map, i(n3.t, function(r3) {
        n3.D.set(r3, false);
      }), n3.o.clear());
    }, o3.forEach = function(n3, r3) {
      var t2 = this;
      p(this[Q]).forEach(function(e2, i2) {
        n3.call(r3, t2.get(i2), i2, t2);
      });
    }, o3.get = function(n3) {
      var r3 = this[Q];
      u2(r3);
      var i2 = p(r3).get(n3);
      if (r3.I || !t(i2))
        return i2;
      if (i2 !== r3.t.get(n3))
        return i2;
      var o4 = R(r3.A.h, i2, r3);
      return e(r3), r3.o.set(n3, o4), o4;
    }, o3.keys = function() {
      return p(this[Q]).keys();
    }, o3.values = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V] = function() {
        return r3.values();
      }, n3.next = function() {
        var n4 = t2.next();
        return n4.done ? n4 : { done: false, value: r3.get(n4.value) };
      }, n3;
    }, o3.entries = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V] = function() {
        return r3.entries();
      }, n3.next = function() {
        var n4 = t2.next();
        if (n4.done)
          return n4;
        var e2 = r3.get(n4.value);
        return { done: false, value: [n4.value, e2] };
      }, n3;
    }, o3[V] = function() {
      return this.entries();
    }, n2;
  }(), c2 = function() {
    function n2(n3, r3) {
      return this[Q] = { i: 3, l: r3, A: r3 ? r3.A : _(), P: false, I: false, o: undefined, t: n3, k: this, p: new Map, O: false, C: false }, this;
    }
    r2(n2, Set);
    var t2 = n2.prototype;
    return Object.defineProperty(t2, "size", { get: function() {
      return p(this[Q]).size;
    } }), t2.has = function(n3) {
      var r3 = this[Q];
      return u2(r3), r3.o ? !!r3.o.has(n3) || !(!r3.p.has(n3) || !r3.o.has(r3.p.get(n3))) : r3.t.has(n3);
    }, t2.add = function(n3) {
      var r3 = this[Q];
      return u2(r3), this.has(n3) || (o2(r3), k(r3), r3.o.add(n3)), this;
    }, t2.delete = function(n3) {
      if (!this.has(n3))
        return false;
      var r3 = this[Q];
      return u2(r3), o2(r3), k(r3), r3.o.delete(n3) || !!r3.p.has(n3) && r3.o.delete(r3.p.get(n3));
    }, t2.clear = function() {
      var n3 = this[Q];
      u2(n3), p(n3).size && (o2(n3), k(n3), n3.o.clear());
    }, t2.values = function() {
      var n3 = this[Q];
      return u2(n3), o2(n3), n3.o.values();
    }, t2.entries = function() {
      var n3 = this[Q];
      return u2(n3), o2(n3), n3.o.entries();
    }, t2.keys = function() {
      return this.values();
    }, t2[V] = function() {
      return this.values();
    }, t2.forEach = function(n3, r3) {
      for (var t3 = this.values(), e2 = t3.next();!e2.done; )
        n3.call(r3, e2.value, e2.value, this), e2 = t3.next();
    }, n2;
  }();
  m("MapSet", { N: function(n2, r3) {
    return new f2(n2, r3);
  }, T: function(n2, r3) {
    return new c2(n2, r3);
  } });
}
var G;
var U;
var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
var X = typeof Map != "undefined";
var q = typeof Set != "undefined";
var B = typeof Proxy != "undefined" && Proxy.revocable !== undefined && typeof Reflect != "undefined";
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== undefined ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames;
var rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
};
var tn = {};
var en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e = p(n2);
  if (!u(e, r2))
    return function(n3, r3, t2) {
      var e2, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e2 = i3.get) === null || e2 === undefined ? undefined : e2.call(n3.k) : undefined;
    }(n2, e, r2);
  var i2 = e[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e = I(p(n2), r2);
  if (e == null ? undefined : e.set)
    return e.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = i2 == null ? undefined : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c(t2, i2) && (t2 !== undefined || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== undefined || (r2 in n2.o)) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return z(n2.t, r2) !== undefined || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e.enumerable, value: t2[r2] } : e;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return isNaN(parseInt(t2)) && n(13), on.set.call(this, r2, t2, undefined);
}, on.set = function(r2, t2, e) {
  return t2 !== "length" && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e, r2[0]);
};
var un = function() {
  function e(r2) {
    var e2 = this;
    this.g = B, this.F = true, this.produce = function(r3, i3, o2) {
      if (typeof r3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r3;
        var a2 = e2;
        return function(n2) {
          var r4 = this;
          n2 === undefined && (n2 = u2);
          for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1;o3 < t2; o3++)
            e3[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n(6), o2 !== undefined && typeof o2 != "function" && n(7), t(r3)) {
        var c2 = w(e2), s2 = R(e2, r3, undefined), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === undefined && (f2 = r3), f2 === H && (f2 = undefined), e2.F && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if (typeof n2 == "function")
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1;o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e2.produceWithPatches(r4, function(r5) {
            return n2.apply(undefined, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e2.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, typeof (r2 == null ? undefined : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? undefined : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e.prototype;
  return i2.createDraft = function(e2) {
    t(e2) || n(8), r(e2) && (e2 = D(e2));
    var i3 = w(this), o2 = R(this, e2, undefined);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e2 = r2 && r2[Q];
    e2 && e2.C || n(9), e2.I && n(10);
    var i3 = e2.A;
    return j(i3, t2), P(undefined, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e2;
    for (e2 = t2.length - 1;e2 >= 0; e2--) {
      var i3 = t2[e2];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    e2 > -1 && (t2 = t2.slice(e2 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e;
}();
var an = new un;
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);

// src/utils/object.js
function areObjectKeysEqual(a2, b2) {
  const ak = Object.keys(a2);
  const bk = Object.keys(b2);
  return ak.length === bk.length && Object.keys(a2).every((k2) => b2.hasOwnProperty(k2));
}
function areObjectsShallowEqual(obj1, obj2) {
  return Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
}
function areObjectsDeepEqual(obj1, obj2) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }
  if (!areObjectKeysEqual(obj1, obj2)) {
    return false;
  }
  return Object.keys(obj1).every((key) => areObjectsDeepEqual(obj1[key], obj2[key]));
}
function immutableDeepMerge(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  const result = {};
  for (const key of Object.keys(target)) {
    result[key] = target[key];
  }
  for (const key of Object.keys(source)) {
    if (source[key] === null)
      continue;
    const areBothObjects = isObject(target[key]) && isObject(source[key]);
    result[key] = areBothObjects ? immutableDeepMerge(target[key], source[key]) : source[key];
  }
  return result;
}
function immutableDeepReplace(target, replaceValue, replacementValue) {
  if (!isObject(target)) {
    return target;
  }
  const result = {};
  for (const [key, value] of Object.entries(target)) {
    result[key] = isObject(value) ? immutableDeepReplace(value, replaceValue, replacementValue) : value === replaceValue ? replacementValue : value;
  }
  return result;
}
function isObject(val) {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

// src/store.js
function hasEA(attr) {
  return attr["cardinality"] === "one";
}
function isRef(attr) {
  return attr["value-type"] === "ref";
}
function isBlob(attr) {
  return attr["value-type"] === "blob";
}
function getAttr(attrs, attrId) {
  return attrs[attrId];
}
function getInMap(obj, path) {
  return path.reduce((acc, key) => acc && acc.get(key), obj);
}
function deleteInMap(m2, path) {
  if (path.length === 0)
    throw new Error("path must have at least one element");
  if (path.length === 1) {
    m2.delete(path[0]);
    return;
  }
  const [head, ...tail] = path;
  if (!m2.has(head))
    return;
  deleteInMap(m2.get(head), tail);
}
function setInMap(m2, path, value) {
  if (path.length === 0)
    throw new Error("path must have at least one element");
  if (path.length === 1) {
    m2.set(path[0], value);
    return;
  }
  const [head, ...tail] = path;
  let nextM = m2.get(head);
  if (!nextM) {
    nextM = new Map;
    m2.set(head, nextM);
  }
  setInMap(nextM, tail, value);
}
function createIndexMap(attrs, triples) {
  const eav = new Map;
  const aev = new Map;
  const vae = new Map;
  for (const triple of triples) {
    const [eid, aid, v2, t2] = triple;
    const attr = getAttr(attrs, aid);
    if (!attr) {
      console.warn("no such attr", eid, attrs);
      continue;
    }
    if (isRef(attr)) {
      setInMap(vae, [v2, aid, eid], triple);
    }
    setInMap(eav, [eid, aid, v2], triple);
    setInMap(aev, [aid, eid, v2], triple);
  }
  return { eav, aev, vae };
}
function createStore(attrs, triples) {
  const store = createIndexMap(attrs, triples);
  store.attrs = attrs;
  return store;
}
function resolveLookupRefs(store, triple) {
  let eid;
  if (Array.isArray(triple[0])) {
    const [a2, v2] = triple[0];
    const eMaps = store.aev.get(a2);
    if (!eMaps) {
      return null;
    }
    const triples = allMapValues(eMaps, 2);
    eid = triples.find((x2) => x2[2] === v2)?.[0];
  } else {
    eid = triple[0];
  }
  if (!eid) {
    return null;
  }
  const lookupV = triple[2];
  if (Array.isArray(lookupV) && lookupV.length === 2 && store.aev.get(lookupV[0])) {
    const [a2, v2] = lookupV;
    const eMaps = store.aev.get(a2);
    if (!eMaps) {
      return null;
    }
    const triples = allMapValues(eMaps, 2);
    const value = triples.find((x2) => x2[2] === v2)?.[0];
    if (!value) {
      return null;
    }
    const [_e, aid, _v, ...rest] = triple;
    return [eid, aid, value, ...rest];
  } else {
    const [_2, ...rest] = triple;
    return [eid, ...rest];
  }
}
function retractTriple(store, rawTriple) {
  const triple = resolveLookupRefs(store, rawTriple);
  if (!triple) {
    return;
  }
  const [eid, aid, v2] = triple;
  const attr = getAttr(store.attrs, aid);
  if (!attr) {
    return;
  }
  deleteInMap(store.eav, [eid, aid, v2]);
  deleteInMap(store.aev, [aid, eid, v2]);
  if (isRef(attr)) {
    deleteInMap(store.vae, [v2, aid, eid]);
  }
}
function getCreatedAt(store, attr, triple) {
  const [eid, aid, v2] = triple;
  let createdAt;
  const t2 = getInMap(store.ea, [eid, aid, v2]);
  if (t2) {
    createdAt = t2[3];
  }
  return createdAt || Date.now() * 10 + _seed++;
}
function addTriple(store, rawTriple) {
  const triple = resolveLookupRefs(store, rawTriple);
  if (!triple) {
    return;
  }
  const [eid, aid, v2] = triple;
  const attr = getAttr(store.attrs, aid);
  if (!attr) {
    return;
  }
  const enhancedTriple = [...triple, getCreatedAt(store, attr, triple)];
  if (hasEA(attr)) {
    setInMap(store.eav, [eid, aid], new Map([[v2, enhancedTriple]]));
    setInMap(store.aev, [aid, eid], new Map([[v2, enhancedTriple]]));
  } else {
    setInMap(store.eav, [eid, aid, v2], enhancedTriple);
    setInMap(store.aev, [aid, eid, v2], enhancedTriple);
  }
  if (isRef(attr)) {
    setInMap(store.vae, [v2, aid, eid], enhancedTriple);
  }
}
function mergeTriple(store, rawTriple) {
  const triple = resolveLookupRefs(store, rawTriple);
  if (!triple) {
    return;
  }
  const [eid, aid, update] = triple;
  const attr = getAttr(store.attrs, aid);
  if (!attr)
    return;
  if (!isBlob(attr))
    throw new Error("merge operation is not supported for links");
  const eavValuesMap = getInMap(store.eav, [eid, aid]);
  if (!eavValuesMap)
    return;
  const currentTriple = eavValuesMap.values().next()?.value;
  if (!currentTriple)
    return;
  const currentValue = currentTriple[2];
  const updatedValue = immutableDeepMerge(currentValue, update);
  const enhancedTriple = [
    eid,
    aid,
    updatedValue,
    getCreatedAt(store, attr, currentTriple)
  ];
  setInMap(store.eav, [eid, aid], new Map([[updatedValue, enhancedTriple]]));
}
function deleteEntity(store, rawTriple) {
  const triple = resolveLookupRefs(store, rawTriple);
  if (!triple) {
    return;
  }
  const [id] = triple;
  const eMap = store.eav.get(id);
  if (eMap) {
    for (const a2 of eMap.keys()) {
      deleteInMap(store.aev, [a2, id]);
    }
  }
  deleteInMap(store.eav, [id]);
  const vaeTriples = store.vae.get(id) && allMapValues(store.vae.get(id), 2);
  if (vaeTriples) {
    vaeTriples.forEach((triple2) => {
      const [e, a2, v2] = triple2;
      deleteInMap(store.eav, [e, a2, v2]);
      deleteInMap(store.aev, [a2, e, v2]);
    });
  }
  deleteInMap(store.vae, [id]);
}
function resetIndexMap(store, newTriples) {
  const newIndexMap = createIndexMap(store.attrs, newTriples);
  Object.keys(newIndexMap).forEach((key) => {
    store[key] = newIndexMap[key];
  });
}
function addAttr(store, [attr]) {
  store.attrs[attr.id] = attr;
}
function getAllTriples(store) {
  return allMapValues(store.eav, 3);
}
function deleteAttr(store, [id]) {
  if (!store.attrs[id])
    return;
  const newTriples = getAllTriples(store).filter(([_2, aid]) => aid !== id);
  delete store.attrs[id];
  resetIndexMap(store, newTriples);
}
function updateAttr(store, [partialAttr]) {
  const attr = store.attrs[partialAttr.id];
  if (!attr)
    return;
  store.attrs[partialAttr.id] = { ...attr, ...partialAttr };
  resetIndexMap(store, getAllTriples(store));
}
function applyTxStep(store, txStep) {
  const [action, ...args] = txStep;
  switch (action) {
    case "add-triple":
      addTriple(store, args);
      break;
    case "deep-merge-triple":
      mergeTriple(store, args);
      break;
    case "retract-triple":
      retractTriple(store, args);
      break;
    case "delete-entity":
      deleteEntity(store, args);
      break;
    case "add-attr":
      addAttr(store, args);
      break;
    case "delete-attr":
      deleteAttr(store, args);
      break;
    case "update-attr":
      updateAttr(store, args);
      break;
    default:
      throw new Error(`unhandled transaction action: ${action}`);
  }
}
function allMapValues(m2, level, res = []) {
  if (!m2) {
    return res;
  }
  if (level === 0) {
    return res;
  }
  if (level === 1) {
    for (const v2 of m2.values()) {
      res.push(v2);
    }
    return res;
  }
  for (const v2 of m2.values()) {
    allMapValues(v2, level - 1, res);
  }
  return res;
}
function triplesByValue(m2, v2) {
  const res = [];
  const values = v2.in ? v2.in : [v2];
  for (const value of values) {
    const triple = m2.get(value);
    if (triple) {
      res.push(triple);
    }
  }
  return res;
}
function whichIdx(e, a2, v2) {
  let res = "";
  if (e !== undefined) {
    res += "e";
  }
  if (a2 !== undefined) {
    res += "a";
  }
  if (v2 !== undefined) {
    res += "v";
  }
  return res;
}
function getTriples(store, [e, a2, v2]) {
  const idx = whichIdx(e, a2, v2);
  switch (idx) {
    case "e": {
      const eMap = store.eav.get(e);
      return allMapValues(eMap, 2);
    }
    case "ea": {
      const aMap = store.eav.get(e)?.get(a2);
      return allMapValues(aMap, 1);
    }
    case "eav": {
      const aMap = store.eav.get(e)?.get(a2);
      if (!aMap) {
        return [];
      }
      return triplesByValue(aMap, v2);
    }
    case "ev": {
      const eMap = store.eav.get(e);
      if (!eMap) {
        return [];
      }
      const res = [];
      for (const aMap of eMap.values()) {
        res.push(...triplesByValue(aMap, v2));
      }
      return res;
    }
    case "av": {
      const aMap = store.aev.get(a2);
      if (!aMap) {
        return [];
      }
      const res = [];
      for (const eMap of aMap.values()) {
        res.push(...triplesByValue(eMap, v2));
      }
      return res;
    }
    case "v": {
      const res = [];
      for (const eMap of store.eav.values()) {
        for (const aMap of eMap.values()) {
          res.push(...triplesByValue(aMap, v2));
        }
      }
    }
    default: {
      return allMapValues(store.eav, 3);
    }
  }
}
function transact(store, txSteps) {
  return fn(store, (draft) => {
    txSteps.forEach((txStep) => {
      applyTxStep(draft, txStep);
    });
  });
}
C();
var _seed = 0;

// src/datalog.js
function isVariable(x2) {
  return typeof x2 === "string" && x2.startsWith("?");
}
function matchVariable(variable, triplePart, context) {
  if (context.hasOwnProperty(variable)) {
    const bound = context[variable];
    return matchPart(bound, triplePart, context);
  }
  return { ...context, [variable]: triplePart };
}
function matchExact(patternPart, triplePart, context) {
  return patternPart === triplePart ? context : null;
}
function matchWithArgMap(patternPart, triplePart, context) {
  const { in: inList } = patternPart;
  if (inList && inList.includes(triplePart)) {
    return context;
  }
  return null;
}
function matcherForPatternPart(patternPart) {
  switch (typeof patternPart) {
    case "string":
      return patternPart.startsWith("?") ? matchVariable : matchExact;
    case "object":
      return matchWithArgMap;
    default:
      return matchExact;
  }
}
function matchPart(patternPart, triplePart, context) {
  if (!context)
    return null;
  const matcher = matcherForPatternPart(patternPart);
  return matcher(patternPart, triplePart, context);
}
function matchPattern(pattern, triple, context) {
  return pattern.reduce((context2, patternPart, idx) => {
    const triplePart = triple[idx];
    return matchPart(patternPart, triplePart, context2);
  }, context);
}
function querySingle(store2, pattern, context) {
  return relevantTriples(store2, pattern, context).map((triple) => matchPattern(pattern, triple, context)).filter((x2) => x2);
}
function queryPattern(store2, pattern, contexts) {
  if (pattern.or) {
    return pattern.or.patterns.flatMap((patterns) => {
      return queryWhere(store2, patterns, contexts);
    });
  }
  if (pattern.and) {
    return pattern.and.patterns.reduce((contexts2, patterns) => {
      return queryWhere(store2, patterns, contexts2);
    }, contexts);
  }
  return contexts.flatMap((context) => querySingle(store2, pattern, context));
}
function queryWhere(store2, patterns, contexts = [{}]) {
  return patterns.reduce((contexts2, pattern) => {
    return queryPattern(store2, pattern, contexts2);
  }, contexts);
}
function actualize(context, find) {
  if (Array.isArray(find)) {
    return find.map((findPart) => actualize(context, findPart));
  }
  return isVariable(find) ? context[find] : find;
}
function query(store2, { find, where }) {
  const contexts = queryWhere(store2, where);
  return contexts.map((context) => actualize(context, find));
}
function relevantTriples(store2, pattern, context) {
  return getTriples(store2, actualize(context, pattern));
}

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/stringify.js
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
var byteToHex = [];
for (let i2 = 0;i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).slice(1));
}

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i2 = 0;i2 < 16; ++i2) {
      buf[offset + i2] = rnds[i2];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;
// src/utils/uuid.ts
function uuidToByteArray(uuid) {
  const hex = uuid.replace(/-/g, "");
  const bytes = [];
  for (let i2 = 0;i2 < hex.length; i2 += 2) {
    bytes.push(parseInt(hex.substring(i2, i2 + 2), 16));
  }
  return bytes;
}
function compareByteArrays(a2, b2) {
  for (let i2 = 0;i2 < a2.length; i2++) {
    if (a2[i2] < b2[i2])
      return -1;
    if (a2[i2] > b2[i2])
      return 1;
  }
  return 0;
}
function uuidCompare(uuid_a, uuid_b) {
  return compareByteArrays(uuidToByteArray(uuid_a), uuidToByteArray(uuid_b));
}
var uuid_default = v4_default;

// src/instatx.ts
function transactionChunk(etype, id, prevOps) {
  return new Proxy({}, {
    get: (_target, cmd) => {
      if (cmd === "__ops")
        return prevOps;
      return (args) => {
        return transactionChunk(etype, id, [
          ...prevOps,
          [cmd, etype, id, args]
        ]);
      };
    }
  });
}
function lookup(attribute, value) {
  return `lookup__${attribute}__${JSON.stringify(value)}`;
}
function isLookup(k2) {
  return k2.startsWith("lookup__");
}
function parseLookup(k2) {
  const [_2, eid, ...vJSON] = k2.split("__");
  return [eid, JSON.parse(vJSON.join("__"))];
}
function etypeChunk(etype) {
  return new Proxy({}, {
    get(_target, id) {
      if (isLookup(id)) {
        return transactionChunk(etype, parseLookup(id), []);
      }
      return transactionChunk(etype, id, []);
    }
  });
}
function emptyChunk() {
  return new Proxy({}, {
    get(_target, ns) {
      return etypeChunk(ns);
    }
  });
}
function getOps(x2) {
  return x2.__ops;
}
var tx = emptyChunk();

// src/instaml.js
function getAttrByFwdIdentName(attrs, inputEtype, inputIdentName) {
  return Object.values(attrs).find((attr) => {
    const [_id, etype, label] = attr["forward-identity"];
    return etype === inputEtype && label === inputIdentName;
  });
}
function getAttrByReverseIdentName(attrs, inputEtype, inputIdentName) {
  return Object.values(attrs).find((attr) => {
    const revIdent = attr["reverse-identity"];
    if (!revIdent)
      return false;
    const [_id, etype, label] = revIdent;
    return etype === inputEtype && label === inputIdentName;
  });
}
function explodeLookupRef(eid) {
  if (Array.isArray(eid)) {
    return eid;
  }
  const entries = Object.entries(eid);
  if (entries.length !== 1) {
    throw new Error("lookup must be an object with a single unique attr and value.");
  }
  return entries[0];
}
function extractLookup(attrs, etype, eid) {
  if (typeof eid === "string" && !isLookup(eid)) {
    return eid;
  }
  const [identName, value] = typeof eid === "string" && isLookup(eid) ? parseLookup(eid) : explodeLookupRef(eid);
  const attr = getAttrByFwdIdentName(attrs, etype, identName);
  if (!attr || !attr["unique?"]) {
    throw new Error(`${identName} is not a unique attribute.`);
  }
  return [attr.id, value];
}
function expandLink(attrs, [etype, eidA, obj]) {
  const addTriples = Object.entries(obj).flatMap(([label, eidOrEids]) => {
    const eids = Array.isArray(eidOrEids) ? eidOrEids : [eidOrEids];
    const fwdAttr = getAttrByFwdIdentName(attrs, etype, label);
    const revAttr = getAttrByReverseIdentName(attrs, etype, label);
    return eids.map((eidB) => {
      const txStep = fwdAttr ? [
        "add-triple",
        extractLookup(attrs, etype, eidA),
        fwdAttr.id,
        extractLookup(attrs, fwdAttr["reverse-identity"][1], eidB)
      ] : [
        "add-triple",
        extractLookup(attrs, revAttr["forward-identity"][1], eidB),
        revAttr.id,
        extractLookup(attrs, etype, eidA)
      ];
      return txStep;
    });
  });
  return addTriples;
}
function expandUnlink(attrs, [etype, eidA, obj]) {
  const retractTriples = Object.entries(obj).flatMap(([label, eidOrEids]) => {
    const eids = Array.isArray(eidOrEids) ? eidOrEids : [eidOrEids];
    const fwdAttr = getAttrByFwdIdentName(attrs, etype, label);
    const revAttr = getAttrByReverseIdentName(attrs, etype, label);
    return eids.map((eidB) => {
      const txStep = fwdAttr ? [
        "retract-triple",
        extractLookup(attrs, etype, eidA),
        fwdAttr.id,
        extractLookup(attrs, fwdAttr["reverse-identity"][1], eidB)
      ] : [
        "retract-triple",
        extractLookup(attrs, revAttr["forward-identity"][1], eidB),
        revAttr.id,
        extractLookup(attrs, etype, eidA)
      ];
      return txStep;
    });
  });
  return retractTriples;
}
function expandUpdate(attrs, [etype, eid, obj]) {
  const lookup2 = extractLookup(attrs, etype, eid);
  const attrTuples = Object.entries(obj).concat([["id", extractLookup(attrs, etype, eid)]]).map(([identName, value]) => {
    const attr = getAttrByFwdIdentName(attrs, etype, identName);
    return ["add-triple", lookup2, attr.id, value];
  });
  return attrTuples;
}
function expandDelete(attrs, [etype, eid]) {
  const lookup2 = extractLookup(attrs, etype, eid);
  return [["delete-entity", lookup2]];
}
function expandDeepMerge(attrs, [etype, eid, obj]) {
  const lookup2 = extractLookup(attrs, etype, eid);
  const attrTuples = Object.entries(obj).map(([identName, value]) => {
    const attr = getAttrByFwdIdentName(attrs, etype, identName);
    const coercedValue = immutableDeepReplace(value, undefined, null);
    return ["deep-merge-triple", lookup2, attr.id, coercedValue];
  });
  const idTuple = [
    "add-triple",
    lookup2,
    getAttrByFwdIdentName(attrs, etype, "id").id,
    lookup2
  ];
  return attrTuples.concat([idTuple]);
}
function toTxSteps(attrs, [action, ...args]) {
  switch (action) {
    case "merge":
      return expandDeepMerge(attrs, args);
    case "update":
      return expandUpdate(attrs, args);
    case "link":
      return expandLink(attrs, args);
    case "unlink":
      return expandUnlink(attrs, args);
    case "delete":
      return expandDelete(attrs, args);
    default:
      throw new Error(`unsupported action ${action}`);
  }
}
function extractIdents([_action, etype, _eid, obj]) {
  const ks = new Set(Object.keys(obj).concat("id"));
  const idents = [...ks].map((label) => [etype, label]);
  return idents;
}
function createObjectAttr([etype, label]) {
  const attrId = uuid_default();
  const fwdIdentId = uuid_default();
  const fwdIdent = [fwdIdentId, etype, label];
  return {
    id: attrId,
    "forward-identity": fwdIdent,
    "value-type": "blob",
    cardinality: "one",
    "unique?": false,
    "index?": false,
    isUnsynced: true
  };
}
function createRefAttr([etype, label]) {
  const attrId = uuid_default();
  const fwdIdentId = uuid_default();
  const revIdentId = uuid_default();
  const fwdIdent = [fwdIdentId, etype, label];
  const revIdent = [revIdentId, label, etype];
  return {
    id: attrId,
    "forward-identity": fwdIdent,
    "reverse-identity": revIdent,
    "value-type": "ref",
    cardinality: "many",
    "unique?": false,
    "index?": false,
    isUnsynced: true
  };
}
function uniqueIdents(idents) {
  const seen = new Set;
  const acc = [];
  idents.forEach((ident) => {
    const [etype, label] = ident;
    const key = `${etype}:${label}`;
    if (!seen.has(key)) {
      seen.add(key);
      acc.push(ident);
    }
  });
  return acc;
}
function createMissingObjectAttrs(attrs, ops) {
  const objectOps = ops.filter(([action]) => action === "update" || action === "merge");
  const objectIdents = uniqueIdents(objectOps.flatMap(extractIdents));
  const missingIdents = objectIdents.filter(([etype, label]) => !getAttrByFwdIdentName(attrs, etype, label));
  const objectAttrs = missingIdents.map(createObjectAttr);
  const newAttrs = objectAttrs.reduce((acc, attr) => {
    acc[attr.id] = attr;
    return acc;
  }, { ...attrs });
  const attrTxSteps = objectAttrs.map((attr) => ["add-attr", attr]);
  const localAttrs = objectIdents.flatMap(([etype, label]) => {
    const ret = [];
    const attr = getAttrByFwdIdentName(attrs, etype, label);
    if (attr?.isUnsynced) {
      ret.push(attr);
    }
    return ret;
  });
  const localAttrTxSteps = localAttrs.map((attr) => ["add-attr", attr]);
  const txSteps = [...attrTxSteps, ...localAttrTxSteps];
  return [newAttrs, txSteps];
}
function createMissingRefAttrs(attrs, ops) {
  const objectOps = ops.filter(([action]) => action === "link" || action === "unlink");
  const objectIdents = uniqueIdents(objectOps.flatMap(extractIdents));
  const missingIdents = objectIdents.filter(([etype, label]) => !getAttrByFwdIdentName(attrs, etype, label) && !getAttrByReverseIdentName(attrs, etype, label));
  const refAttrs = missingIdents.map(createRefAttr);
  const newAttrs = refAttrs.reduce((acc, attr) => {
    acc[attr.id] = attr;
    return acc;
  }, { ...attrs });
  const attrTxSteps = refAttrs.map((attr) => ["add-attr", attr]);
  const localAttrs = objectIdents.flatMap(([etype, label]) => {
    const ret = [];
    const fwdAttr = getAttrByFwdIdentName(attrs, etype, label);
    const revAttr = getAttrByReverseIdentName(attrs, etype, label);
    if (fwdAttr?.isUnsynced) {
      ret.push(fwdAttr);
    }
    if (revAttr?.isUnsynced) {
      ret.push(revAttr);
    }
    return ret;
  });
  const localAttrTxSteps = localAttrs.map((attr) => ["add-attr", attr]);
  const txSteps = [...attrTxSteps, ...localAttrTxSteps];
  return [newAttrs, txSteps];
}
function transform(attrs, inputChunks) {
  const chunks = Array.isArray(inputChunks) ? inputChunks : [inputChunks];
  const ops = chunks.flatMap((tx2) => getOps(tx2));
  const [withNewObjAttrs, addObjAttrTxSteps] = createMissingObjectAttrs(attrs, ops);
  const [withNewRefAttrs, addRefAttrTxSteps] = createMissingRefAttrs(withNewObjAttrs, ops);
  const txSteps = ops.flatMap((op) => toTxSteps(withNewRefAttrs, op));
  return [...addObjAttrTxSteps, ...addRefAttrTxSteps, ...txSteps];
}

// src/instaql.js
function wildcard(friendlyName) {
  return makeVarImpl(`_${friendlyName}`, _seed2++);
}
function makeVarImpl(x2, level) {
  return `?${x2}-${level}`;
}
function getPrimaryKeyAttr(store2, ns) {
  const primary = Object.values(store2.attrs).find((a2) => a2["primary?"] && a2["forward-identity"]?.[1] === ns);
  if (primary) {
    return primary;
  }
  return getAttrByFwdIdentName(store2.attrs, ns, "id");
}
function idAttr(store2, ns) {
  const attr = getPrimaryKeyAttr(store2, ns);
  if (!attr) {
    throw new AttrNotFoundError(`Could not find id attr for ${ns}`);
  }
  return attr;
}
function defaultWhere(makeVar, store2, etype, level) {
  return [
    eidWhere(makeVar, store2, etype, level),
    attrWhere(makeVar, etype, level)
  ];
}
function eidWhere(makeVar, store2, etype, level) {
  return [
    makeVar(etype, level),
    idAttr(store2, etype).id,
    makeVar(etype, level),
    wildcard("time")
  ];
}
function attrWhere(makeVar, etype, level) {
  return [
    makeVar(etype, level),
    makeVar("attr", level),
    makeVar("val", level),
    makeVar("time", level)
  ];
}
function replaceInAttrPat(attrPat, needle, v2) {
  return attrPat.map((x2) => x2 === needle ? v2 : x2);
}
function refAttrPat(makeVar, store2, etype, level, label) {
  const fwdAttr = getAttrByFwdIdentName(store2.attrs, etype, label);
  const revAttr = getAttrByReverseIdentName(store2.attrs, etype, label);
  const attr = fwdAttr || revAttr;
  if (!attr) {
    throw new AttrNotFoundError(`Could not find attr for ${[etype, label]}`);
  }
  if (attr["value-type"] !== "ref") {
    throw new Error(`Attr ${attr.id} is not a ref`);
  }
  const [_f, fwdEtype] = attr["forward-identity"];
  const [_r, revEtype] = attr["reverse-identity"];
  const nextLevel = level + 1;
  const attrPat = fwdAttr ? [
    makeVar(fwdEtype, level),
    attr.id,
    makeVar(revEtype, nextLevel),
    wildcard("time")
  ] : [
    makeVar(fwdEtype, nextLevel),
    attr.id,
    makeVar(revEtype, level),
    wildcard("time")
  ];
  const nextEtype = fwdAttr ? revEtype : fwdEtype;
  return [nextEtype, nextLevel, attrPat];
}
function valueAttrPat(makeVar, store2, valueEtype, valueLevel, valueLabel, v2) {
  const attr = getAttrByFwdIdentName(store2.attrs, valueEtype, valueLabel);
  if (!attr) {
    throw new AttrNotFoundError(`No attr for etype = ${valueEtype} label = ${valueLabel} value-label`);
  }
  return [makeVar(valueEtype, valueLevel), attr.id, v2, wildcard("time")];
}
function refAttrPats(makeVar, store2, etype, level, refsPath) {
  const [lastEtype, lastLevel, attrPats] = refsPath.reduce((acc, label) => {
    const [etype2, level2, attrPats2] = acc;
    const [nextEtype, nextLevel, attrPat] = refAttrPat(makeVar, store2, etype2, level2, label);
    return [nextEtype, nextLevel, [...attrPats2, attrPat]];
  }, [etype, level, []]);
  return [lastEtype, lastLevel, attrPats];
}
function whereCondAttrPats(makeVar, store2, etype, level, path, v2) {
  const refsPath = path.slice(0, path.length - 1);
  const valueLabel = path[path.length - 1];
  const [lastEtype, lastLevel, refPats] = refAttrPats(makeVar, store2, etype, level, refsPath);
  const valuePat = valueAttrPat(makeVar, store2, lastEtype, lastLevel, valueLabel, v2);
  return refPats.concat([valuePat]);
}
function withJoin(where, join) {
  return join ? [join].concat(where) : where;
}
function isOrClauses([k2, v2]) {
  return k2 === "or" && Array.isArray(v2);
}
function isAndClauses([k2, v2]) {
  return k2 === "and" && Array.isArray(v2);
}
function genMakeVar(baseMakeVar, etype, orIdx) {
  return (x2, lvl) => {
    if (x2 == etype) {
      return baseMakeVar(x2, lvl);
    }
    return `${baseMakeVar(x2, lvl)}-${orIdx}`;
  };
}
function parseWhereClauses(makeVar, clauseType, store2, etype, level, whereValue) {
  const patterns = whereValue.map((w2, i2) => {
    const makeNamespacedVar = genMakeVar(makeVar, etype, i2);
    return parseWhere(makeNamespacedVar, store2, etype, level, w2);
  });
  const joinSym = makeVar(etype, level);
  return { [clauseType]: { patterns, joinSym } };
}
function parseWhere(makeVar, store2, etype, level, where) {
  return Object.entries(where).flatMap(([k2, v2]) => {
    if (isOrClauses([k2, v2])) {
      return parseWhereClauses(makeVar, "or", store2, etype, level, v2);
    }
    if (isAndClauses([k2, v2])) {
      return parseWhereClauses(makeVar, "and", store2, etype, level, v2);
    }
    const path = k2.split(".");
    return whereCondAttrPats(makeVar, store2, etype, level, path, v2);
  });
}
function makeWhere(store2, etype, level, where) {
  const makeVar = makeVarImpl;
  if (!where) {
    return defaultWhere(makeVar, store2, etype, level);
  }
  const parsedWhere = parseWhere(makeVar, store2, etype, level, where);
  return parsedWhere.concat(defaultWhere(makeVar, store2, etype, level));
}
function makeFind(makeVar, etype, level) {
  return [
    makeVar(etype, level),
    makeVar("attr", level),
    makeVar("val", level),
    makeVar("time", level)
  ];
}
function makeJoin(makeVar, store2, etype, level, label, eid) {
  const [nextEtype, nextLevel, pat] = refAttrPat(makeVar, store2, etype, level, label);
  const actualized = replaceInAttrPat(pat, makeVar(etype, level), eid);
  return [nextEtype, nextLevel, actualized];
}
function extendObjects(makeVar, store2, { etype, level, form }, objects) {
  const children = Object.keys(form).filter((c2) => c2 !== "$");
  if (!children.length) {
    return Object.values(objects);
  }
  return Object.entries(objects).map(([eid, parent]) => {
    const childResults = children.map((label) => {
      try {
        const [nextEtype, nextLevel, join] = makeJoin(makeVar, store2, etype, level, label, eid);
        const child = queryOne(store2, {
          etype: nextEtype,
          level: nextLevel,
          form: form[label],
          join
        });
        return { [label]: child };
      } catch (e) {
        if (e instanceof AttrNotFoundError) {
          return { [label]: [] };
        }
        throw e;
      }
    });
    return childResults.reduce((parent2, child) => {
      return { ...parent2, ...child };
    }, parent);
  });
}
function shouldIgnoreAttr(attrs, id) {
  const attr = attrs[id];
  return attr["value-type"] === "ref" && attr["forward-identity"][2] !== "id";
}
function cursorCompare(direction, typ) {
  switch (direction) {
    case "asc":
      switch (typ) {
        case "number":
          return (x2, y2) => x2 < y2;
        case "uuid":
          return (x2, y2) => uuidCompare(x2, y2) === -1;
      }
    case "desc":
      switch (typ) {
        case "number":
          return (x2, y2) => x2 > y2;
        case "uuid":
          return (x2, y2) => uuidCompare(x2, y2) === 1;
      }
  }
}
function isBefore(startCursor, direction, [e, a2, _v, t2]) {
  return cursorCompare(direction, "number")(t2, startCursor[3]) || t2 === startCursor[3] && cursorCompare(direction, "uuid")(e, startCursor[0]);
}
function runDataloadAndReturnObjects(store2, etype, direction, pageInfo, dq) {
  const startCursor = pageInfo?.["start-cursor"];
  const toRemove = [];
  const res = query(store2, dq).sort((tripleA, tripleB) => {
    const tsA = tripleA[3];
    const tsB = tripleB[3];
    return direction === "desc" ? tsB - tsA : tsA - tsB;
  }).reduce((res2, triple) => {
    const [e, a2, v2] = triple;
    if (shouldIgnoreAttr(store2.attrs, a2)) {
      return res2;
    }
    const attr = store2.attrs[a2];
    const [_2, attrEtype, label] = attr["forward-identity"];
    if (attrEtype !== etype) {
      return res2;
    }
    if (startCursor && a2 === startCursor[1] && isBefore(startCursor, direction, triple)) {
      toRemove.push(e);
    }
    res2[e] = res2[e] || {};
    res2[e][label] = v2;
    return res2;
  }, {});
  for (const e of toRemove) {
    delete res[e];
  }
  return res;
}
function determineOrder(form) {
  const orderOpts = form.$?.order;
  if (!orderOpts) {
    return "asc";
  }
  return orderOpts[Object.keys(orderOpts)[0]] || "asc";
}
function resolveObjects(store2, { etype, level, form, join, pageInfo }) {
  const limit = form.$?.limit || form.$?.first || form.$?.last;
  const offset = form.$?.offset;
  const before = form.$?.before;
  const after = form.$?.after;
  if ((offset || before || after) && (!pageInfo || !pageInfo["start-cursor"])) {
    return [];
  }
  const where = withJoin(makeWhere(store2, etype, level, form.$?.where), join);
  const find = makeFind(makeVarImpl, etype, level);
  const objs = runDataloadAndReturnObjects(store2, etype, determineOrder(form), pageInfo, { where, find });
  if (limit != null) {
    const entries = Object.entries(objs);
    if (entries.length <= limit) {
      return objs;
    }
    return Object.fromEntries(entries.slice(0, limit));
  }
  return objs;
}
function guardedResolveObjects(store2, opts) {
  try {
    return resolveObjects(store2, opts);
  } catch (e) {
    if (e instanceof AttrNotFoundError) {
      return {};
    }
    throw e;
  }
}
function queryOne(store2, opts) {
  const objects = guardedResolveObjects(store2, opts);
  return extendObjects(makeVarImpl, store2, opts, objects);
}
function formatPageInfo(pageInfo) {
  const res = {};
  for (const [k2, v2] of Object.entries(pageInfo)) {
    res[k2] = {
      startCursor: v2["start-cursor"],
      endCursor: v2["end-cursor"],
      hasNextPage: v2["has-next-page?"],
      hasPreviousPage: v2["has-previous-page?"]
    };
  }
  return res;
}
var _seed2 = 0;

class AttrNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "AttrNotFoundError";
  }
}
function query2({ store: store2, pageInfo, aggregate }, q2) {
  const data = Object.keys(q2).reduce((res, k2) => {
    if (aggregate?.[k2]) {
      return res;
    }
    res[k2] = queryOne(store2, {
      etype: k2,
      form: q2[k2],
      level: 0,
      pageInfo: pageInfo?.[k2]
    });
    return res;
  }, {});
  const result = { data };
  if (pageInfo) {
    result.pageInfo = formatPageInfo(pageInfo);
  }
  if (aggregate) {
    result.aggregate = aggregate;
  }
  return result;
}

// src/IndexedDBStorage.js
class IndexedDBStorage {
  constructor(dbName) {
    this.dbName = dbName;
    this._storeName = "kv";
    this._dbPromise = this._init();
  }
  _init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);
      request.onerror = (event) => {
        reject(event);
      };
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore(this._storeName);
      };
    });
  }
  async getItem(k2) {
    const db = await this._dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([this._storeName], "readonly");
      const objectStore = transaction.objectStore(this._storeName);
      const request = objectStore.get(k2);
      request.onerror = (event) => {
        reject(event);
      };
      request.onsuccess = (_event) => {
        if (request.result) {
          resolve(request.result);
        } else {
          resolve(null);
        }
      };
    });
  }
  async setItem(k2, v2) {
    const db = await this._dbPromise;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([this._storeName], "readwrite");
      const objectStore = transaction.objectStore(this._storeName);
      const request = objectStore.put(v2, k2);
      request.onerror = (event) => {
        reject(event);
      };
      request.onsuccess = (_event) => {
        resolve();
      };
    });
  }
}

// src/WindowNetworkListener.js
class WindowNetworkListener {
  static async getIsOnline() {
    return window.navigator.onLine;
  }
  static listen(f2) {
    const onOnline = () => {
      f2(true);
    };
    const onOffline = () => {
      f2(false);
    };
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }
}

// src/utils/fetch.ts
async function jsonFetch(input, init) {
  const res = await fetch(input, init);
  const json = await res.json();
  return res.status === 200 ? Promise.resolve(json) : Promise.reject({ status: res.status, body: json });
}

// src/authAPI.js
function sendMagicCode({ apiURI, appId, email }) {
  return jsonFetch(`${apiURI}/runtime/auth/send_magic_code`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ "app-id": appId, email })
  });
}
async function verifyMagicCode({ apiURI, appId, email, code }) {
  const res = await jsonFetch(`${apiURI}/runtime/auth/verify_magic_code`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ "app-id": appId, email, code })
  });
  return res;
}
async function verifyRefreshToken({ apiURI, appId, refreshToken }) {
  const res = await jsonFetch(`${apiURI}/runtime/auth/verify_refresh_token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      "app-id": appId,
      "refresh-token": refreshToken
    })
  });
  return res;
}
async function exchangeCodeForToken({
  apiURI,
  appId,
  code,
  codeVerifier
}) {
  const res = await jsonFetch(`${apiURI}/runtime/oauth/token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      app_id: appId,
      code,
      code_verifier: codeVerifier
    })
  });
  return res;
}
async function signInWithIdToken({
  apiURI,
  appId,
  nonce,
  idToken,
  clientName
}) {
  const res = await jsonFetch(`${apiURI}/runtime/oauth/id_token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      app_id: appId,
      nonce,
      id_token: idToken,
      client_name: clientName
    })
  });
  return res;
}

// src/StorageAPI.ts
async function getSignedUploadUrl({
  apiURI,
  appId,
  fileName,
  refreshToken,
  metadata = {}
}) {
  const { data } = await jsonFetch(`${apiURI}/storage/signed-upload-url`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${refreshToken}`
    },
    body: JSON.stringify({
      app_id: appId,
      filename: fileName
    })
  });
  return data;
}
async function upload(presignedUrl, file) {
  const response = await fetch(presignedUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type
    }
  });
  return response.ok;
}
async function getDownloadUrl({
  apiURI,
  appId,
  path,
  refreshToken
}) {
  const { data } = await jsonFetch(`${apiURI}/storage/signed-download-url?app_id=${appId}&filename=${path}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${refreshToken}`
    }
  });
  return data;
}

// src/utils/pick.js
function pick(obj, keys) {
  if (!keys)
    return obj;
  const ret = {};
  keys.forEach((key) => {
    ret[key] = obj[key];
  });
  return ret;
}

// src/presence.ts
function buildPresenceSlice(data, opts) {
  const slice = {
    peers: {}
  };
  const includeUser = opts && "user" in opts ? opts.user : true;
  if (includeUser) {
    const user = pick(data.user ?? {}, opts?.keys);
    slice.user = user;
  }
  for (const id of Object.keys(data.peers ?? {})) {
    const shouldIncludeAllPeers = opts?.peers === undefined;
    const isPeerIncluded = Array.isArray(opts?.peers) && opts?.peers.includes(id);
    if (shouldIncludeAllPeers || isPeerIncluded) {
      const peer = pick(data.peers[id], opts?.keys);
      slice.peers[id] = peer;
    }
  }
  return slice;
}
function hasPresenceResponseChanged(a2, b2) {
  if (a2.isLoading !== b2.isLoading)
    return true;
  if (a2.error !== b2.error)
    return true;
  if (a2.user || b2.user) {
    if (!a2.user || !b2.user)
      return true;
    const same = areObjectsShallowEqual(a2.user, b2.user);
    if (!same)
      return true;
  }
  const sameKeys = areObjectKeysEqual(a2.peers, b2.peers);
  if (!sameKeys)
    return true;
  for (const id of Object.keys(a2.peers)) {
    const same = areObjectsShallowEqual(a2.peers[id], b2.peers[id]);
    if (!same)
      return true;
  }
  return false;
}

// src/utils/Deferred.js
class Deferred {
  promise;
  _resolve;
  _reject;
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }
  resolve(value) {
    this._resolve(value);
  }
  reject(reason) {
    this._reject(reason);
  }
}

// src/utils/PersistedObject.js
class PersistedObject {
  constructor(persister, key, defaultValue, onMerge, toJSON = (x2) => {
    return JSON.stringify(x2);
  }, fromJSON = (x2) => {
    return JSON.parse(x2);
  }) {
    this._persister = persister;
    this._key = key;
    this._onMerge = onMerge;
    this._loadedCbs = [];
    this._isLoading = true;
    this.currentValue = defaultValue;
    this.toJSON = toJSON;
    this.fromJSON = fromJSON;
    this._load();
  }
  async _load() {
    const fromStorage = this.fromJSON(await this._persister.getItem(this._key));
    this._isLoading = false;
    this._onMerge(fromStorage, this.currentValue);
    for (const cb of this._loadedCbs) {
      cb();
    }
  }
  async waitForLoaded() {
    if (!this._isLoading) {
      return;
    }
    const loadedPromise = new Promise((resolve) => {
      this._loadedCbs.push(resolve);
    });
    await loadedPromise;
  }
  set(f2, cb) {
    this.currentValue = f2(this.currentValue);
    if (!this._isLoading) {
      setTimeout(() => {
        this._persister.setItem(this._key, this.toJSON(this.currentValue));
        if (cb) {
          cb();
        }
      }, 0);
    }
  }
}

// src/model/instaqlResult.js
function _extractTriplesHelper(idNodes, acc = []) {
  idNodes.forEach((idNode) => {
    const { data } = idNode;
    const { "datalog-result": datalogResult } = data;
    const { "join-rows": joinRows } = datalogResult;
    for (const rows of joinRows) {
      for (const triple of rows) {
        acc.push(triple);
      }
    }
    _extractTriplesHelper(idNode["child-nodes"], acc);
  });
}
function extractTriples(idNodes) {
  const triples = [];
  _extractTriplesHelper(idNodes, triples);
  return triples;
}

// src/utils/json.ts
function jsonReplacer(_k, value) {
  if (value instanceof Map) {
    return {
      __type: "m",
      entries: [...value.entries()]
    };
  }
  return value;
}
function jsonReviver(_k, value) {
  if (value && typeof value === "object" && value.__type === "m") {
    return new Map(value.entries);
  }
  return value;
}
function toJSONWithMaps(x2) {
  return JSON.stringify(x2, jsonReplacer);
}
function fromJSONWithMaps(s2) {
  return JSON.parse(s2, jsonReviver);
}

// src/Reactor.js
var STATUS = {
  CONNECTING: "connecting",
  OPENED: "opened",
  AUTHENTICATED: "authenticated",
  CLOSED: "closed",
  ERRORED: "errored"
};
var WS_OPEN_STATUS = 1;
var defaultConfig = {
  apiURI: "https://api.instantdb.com",
  websocketURI: "wss://api.instantdb.com/runtime/session"
};
var OAUTH_REDIRECT_PARAM = "_instant_oauth_redirect";
var currentUserKey = `currentUser`;

class Reactor {
  attrs;
  _isOnline = true;
  _isShutdown = false;
  status = STATUS.CONNECTING;
  querySubs;
  queryCbs = {};
  authCbs = [];
  attrsCbs = [];
  mutationErrorCbs = [];
  config;
  _persister;
  pendingMutations;
  mutationDeferredStore = new Map;
  _reconnectTimeoutId = null;
  _reconnectTimeoutMs = 0;
  _ws;
  _localIdPromises = {};
  _errorMessage = null;
  _oauthCallbackResponse = null;
  _broadcastChannel;
  _presence = {};
  _broadcastSubs = {};
  constructor(config, Storage = IndexedDBStorage, NetworkListener = WindowNetworkListener) {
    this.config = { ...defaultConfig, ...config };
    if (typeof window === "undefined") {
      return;
    }
    if ("BroadcastChannel" in window && typeof BroadcastChannel === "function") {
      this._broadcastChannel = new BroadcastChannel("@instantdb");
      this._broadcastChannel.addEventListener("message", async (e) => {
        if (e.data?.type === "auth") {
          const res = await this.getCurrentUser();
          this.updateUser(res.user);
        }
      });
    }
    this._oauthCallbackResponse = this._oauthLoginInit();
    this._initStorage(Storage);
    NetworkListener.getIsOnline().then((isOnline) => {
      this._isOnline = isOnline;
      this._startSocket();
      NetworkListener.listen((isOnline2) => {
        if (isOnline2 === this._isOnline) {
          return;
        }
        this._isOnline = isOnline2;
        if (this._isOnline) {
          this._startSocket();
        }
      });
    });
  }
  _initStorage(Storage) {
    this._persister = new Storage(`instant_${this.config.appId}_4`);
    this.querySubs = new PersistedObject(this._persister, "querySubs", {}, this._onMergeQuerySubs, toJSONWithMaps, fromJSONWithMaps);
    this.pendingMutations = new PersistedObject(this._persister, "pendingMutations", new Map, this._onMergePendingMutations, (x2) => {
      return JSON.stringify([...x2.entries()]);
    }, (x2) => {
      return new Map(JSON.parse(x2));
    });
  }
  _finishTransaction(ok, status, clientId, errDetails) {
    const dfd = this.mutationDeferredStore.get(clientId);
    this.mutationDeferredStore.delete(clientId);
    if (!dfd && !ok) {
      console.error("Mutation failed", { status, clientId, ...errDetails });
    }
    if (!dfd) {
      return;
    }
    if (ok) {
      dfd.resolve({ status, clientId });
    } else {
      dfd.reject({ status, clientId, ...errDetails });
    }
  }
  _setStatus(status, err) {
    this.status = status;
    this._errorMessage = err;
  }
  _onMergeQuerySubs = (_storageSubs, inMemorySubs) => {
    const storageSubs = _storageSubs || {};
    const ret = { ...inMemorySubs };
    Object.entries(inMemorySubs).forEach(([hash, querySub]) => {
      const storageResult = storageSubs?.[hash]?.result;
      const memoryResult = querySub.result;
      if (storageResult && !memoryResult) {
        ret[hash].result = storageResult;
      }
    });
    const storageKsToAdd = Object.keys(storageSubs).filter((k2) => !inMemorySubs[k2]).slice(0, 10);
    storageKsToAdd.forEach((k2) => {
      ret[k2] = storageSubs[k2];
    });
    this.querySubs.set((_2) => ret);
    this.notifyAll();
  };
  _onMergePendingMutations = (storageMuts, inMemoryMuts) => {
    const ret = new Map([...storageMuts.entries(), ...inMemoryMuts.entries()]);
    this.pendingMutations.set((_2) => ret);
    const rewrittenStorageMuts = this._rewriteMutations(this.attrs, storageMuts);
    rewrittenStorageMuts.forEach((mut, k2) => {
      if (!inMemoryMuts.has(k2) && !mut["tx-id"]) {
        this._sendMutation(k2, mut);
      }
    });
  };
  _cleanPendingMutations(txId) {
    this.pendingMutations.set((prev) => {
      const copy = new Map(prev);
      [...prev.entries()].forEach(([eventId, mut]) => {
        if (mut["tx-id"] <= txId) {
          copy.delete(eventId);
        }
      });
      return copy;
    });
  }
  _handleReceive(msg) {
    switch (msg.op) {
      case "init-ok":
        this._setStatus(STATUS.AUTHENTICATED);
        this._reconnectTimeoutMs = 0;
        this._setAttrs(msg.attrs);
        this._flushPendingMessages();
        this._sessionId = msg["session-id"];
        break;
      case "add-query-ok":
        const { q: q2, result, "processed-tx-id": addQueryTxId } = msg;
        this._cleanPendingMutations(addQueryTxId);
        const hash = weakHash_default(q2);
        const pageInfo = result?.[0]?.data?.["page-info"];
        const aggregate = result?.[0]?.data?.["aggregate"];
        const triples = extractTriples(result);
        const store2 = createStore(this.attrs, triples);
        this.querySubs.set((prev) => {
          prev[hash].result = { store: store2, pageInfo, aggregate };
          return prev;
        });
        this.notifyOne(hash);
        break;
      case "refresh-ok":
        const { computations, attrs, "processed-tx-id": refreshOkTxId } = msg;
        this._cleanPendingMutations(refreshOkTxId);
        this._setAttrs(attrs);
        const updates = computations.map((x2) => {
          const q3 = x2["instaql-query"];
          const result2 = x2["instaql-result"];
          const hash2 = weakHash_default(q3);
          const triples2 = extractTriples(result2);
          const store3 = createStore(this.attrs, triples2);
          const pageInfo2 = result2?.[0]?.data?.["page-info"];
          const aggregate2 = result2?.[0]?.data?.["aggregate"];
          return { hash: hash2, store: store3, pageInfo: pageInfo2, aggregate: aggregate2 };
        });
        updates.forEach(({ hash: hash2, store: store3, pageInfo: pageInfo2, aggregate: aggregate2 }) => {
          this.querySubs.set((prev) => {
            prev[hash2].result = { store: store3, pageInfo: pageInfo2, aggregate: aggregate2 };
            return prev;
          });
        });
        updates.forEach(({ hash: hash2 }) => {
          this.notifyOne(hash2);
        });
        break;
      case "transact-ok":
        const { "client-event-id": eventId, "tx-id": txId } = msg;
        const muts = this._rewriteMutations(this.attrs, this.pendingMutations.currentValue);
        const prevMutation = muts.get(eventId);
        if (!prevMutation) {
          break;
        }
        const mut = { ...prevMutation, "tx-id": txId };
        this.pendingMutations.set((prev) => {
          prev.set(eventId, mut);
          return prev;
        });
        this._finishTransaction(true, "synced", eventId);
        const newAttrs = prevMutation["tx-steps"].filter(([action, ..._args]) => action === "add-attr").map(([_action, attr]) => attr).concat(Object.values(this.attrs));
        this._setAttrs(newAttrs);
        break;
      case "refresh-presence":
        const roomId = msg["room-id"];
        this._setPresencePeers(roomId, msg.data);
        this._notifyPresenceSubs(roomId);
        break;
      case "server-broadcast":
        const room = msg["room-id"];
        const topic = msg.topic;
        this._notifyBroadcastSubs(room, topic, msg);
        break;
      case "join-room-ok":
        const loadingRoomId = msg["room-id"];
        const loadingRoom = this._presence[loadingRoomId];
        if (loadingRoom) {
          loadingRoom.isLoading = false;
        }
        this._notifyPresenceSubs(loadingRoomId);
        break;
      case "join-room-error":
        const errorRoomId = msg["room-id"];
        const errorRoom = this._presence[errorRoomId];
        if (errorRoom) {
          errorRoom.error = msg["error"];
        }
        this._notifyPresenceSubs(errorRoomId);
        break;
      case "error":
        this._handleReceiveError(msg);
        break;
      default:
        break;
    }
  }
  _handleReceiveError(msg) {
    const eventId = msg["client-event-id"];
    const prevMutation = this.pendingMutations.currentValue.get(eventId);
    if (prevMutation) {
      this.pendingMutations.set((prev) => {
        prev.delete(eventId);
        return prev;
      });
      this.notifyAll();
      this.notifyAttrsSubs();
      this.notifyMutationErrorSubs(msg);
      const errDetails = {
        message: msg.message,
        hint: msg.hint
      };
      this._finishTransaction(false, "error", eventId, errDetails);
      return;
    }
    const q2 = msg.q || msg["original-event"]?.q;
    if (q2) {
      this.querySubs.set((prev) => {
        const hash = weakHash_default(q2);
        delete prev[hash];
        return prev;
      });
      this.notifyQueryError(weakHash_default(q2), {
        message: msg.message || "Uh-oh, something went wrong. Ping Joe & Stopa."
      });
      return;
    }
    const isInitError = msg["original-event"]?.op === "init";
    if (isInitError) {
      const errorMessage = {
        message: msg.message || "Uh-oh, something went wrong. Ping Joe & Stopa."
      };
      this._setStatus(STATUS.ERRORED, errorMessage);
      this.notifyAll();
      return;
    }
    const errorObj = { ...msg };
    delete errorObj.message;
    delete errorObj.hint;
    console.error(msg.message, errorObj);
    if (msg.hint) {
      console.error("This error comes with some debugging information. Here it is: \n", msg.hint);
    }
  }
  _setAttrs(attrs) {
    this.attrs = attrs.reduce((acc, attr) => {
      acc[attr.id] = attr;
      return acc;
    }, {});
    this.notifyAttrsSubs();
  }
  subscribeQuery(q2, cb) {
    const eventId = uuid_default();
    const hash = weakHash_default(q2);
    this.queryCbs[hash] = this.queryCbs[hash] || [];
    this.queryCbs[hash].push(cb);
    this.querySubs.set((prev) => {
      prev[hash] = prev[hash] || { q: q2, result: null, eventId };
      return prev;
    });
    this._trySendAuthed(eventId, { op: "add-query", q: q2 });
    const errorMessage = this._errorMessage;
    const prevResult = this.querySubs.currentValue?.[hash]?.result;
    if (errorMessage) {
      cb({ error: errorMessage });
    } else if (prevResult) {
      cb(this.dataForResult(q2, prevResult));
    }
    return () => {
      this.queryCbs[hash] = this.queryCbs[hash].filter((x2) => x2 !== cb);
    };
  }
  _rewriteMutations(attrs, muts) {
    if (!attrs)
      return muts;
    const findExistingAttr = ([action, attr]) => {
      if (action !== "add-attr") {
        return;
      }
      const [_3, etype, label] = attr["forward-identity"];
      const existing = getAttrByFwdIdentName(attrs, etype, label);
      return existing;
    };
    const rewriteTxSteps = (mapping, txSteps) => {
      return txSteps.reduce(([mapping2, retTxSteps], txStep) => {
        const existing = findExistingAttr(txStep);
        if (existing) {
          const [_action, attr] = txStep;
          mapping2[attr.id] = existing.id;
          return [mapping2, retTxSteps];
        }
        const [action, eid, attrId, ...rest] = txStep;
        const newTxStep = mapping2[attrId] ? [action, eid, mapping2[attrId], ...rest] : txStep;
        retTxSteps.push(newTxStep);
        return [mapping2, retTxSteps];
      }, [mapping, []]);
    };
    const [_2, __, rewritten] = [...muts.entries()].reduce(([attrs2, mapping, newMuts], [k2, mut]) => {
      const [newMapping, newTxSteps] = rewriteTxSteps(mapping, mut["tx-steps"]);
      newMuts.set(k2, { ...mut, "tx-steps": newTxSteps });
      return [attrs2, newMapping, newMuts];
    }, [attrs, {}, new Map]);
    return rewritten;
  }
  optimisticAttrs() {
    const pendingMutationSteps = [
      ...this.pendingMutations.currentValue.values()
    ].flatMap((x2) => x2["tx-steps"]);
    const deletedAttrIds = new Set(pendingMutationSteps.filter(([action, _attr]) => action === "delete-attr").map(([_action, id]) => id));
    const pendingAttrs = [];
    for (const [_action, attr] of pendingMutationSteps) {
      if (_action === "add-attr") {
        pendingAttrs.push(attr);
      } else if (_action === "update-attr" && attr.id && this.attrs?.[attr.id]) {
        const fullAttr = { ...this.attrs[attr.id], ...attr };
        pendingAttrs.push(fullAttr);
      }
    }
    const attrsWithoutDeleted = [
      ...Object.values(this.attrs || {}),
      ...pendingAttrs
    ].filter((a2) => !deletedAttrIds.has(a2.id));
    const attrsRecord = Object.fromEntries(attrsWithoutDeleted.map((a2) => [a2.id, a2]));
    return attrsRecord;
  }
  dataForResult(q2, { store: store2, pageInfo, aggregate }) {
    const muts = this._rewriteMutations(store2.attrs, this.pendingMutations.currentValue);
    const txSteps = [...muts.values()].flatMap((x2) => x2["tx-steps"]);
    const newStore = transact(store2, txSteps);
    const resp = query2({ store: newStore, pageInfo, aggregate }, q2);
    return resp;
  }
  notifyOne = (hash) => {
    const cbs = this.queryCbs[hash] || [];
    if (!cbs)
      return;
    const errorMessage = this._errorMessage;
    if (errorMessage) {
      cbs.forEach((cb) => cb({ error: errorMessage }));
      return;
    }
    const { q: q2, result, iqlResult } = this.querySubs.currentValue[hash] || {};
    if (!result)
      return;
    const resp = this.dataForResult(q2, result);
    if (areObjectsDeepEqual(resp.data, iqlResult))
      return;
    this.querySubs.currentValue[hash].iqlResult = result.data;
    cbs.forEach((cb) => cb(resp));
  };
  notifyQueryError = (hash, msg) => {
    const cbs = this.queryCbs[hash] || [];
    cbs.forEach((cb) => cb({ error: msg }));
  };
  notifyAll() {
    Object.keys(this.queryCbs).forEach((hash) => {
      this.notifyOne(hash);
    });
  }
  pushTx = (chunks) => {
    const txSteps = transform(this.optimisticAttrs(), chunks);
    return this.pushOps(txSteps);
  };
  pushOps = (txSteps) => {
    const eventId = uuid_default();
    const mutation = {
      op: "transact",
      "tx-steps": txSteps
    };
    this.pendingMutations.set((prev) => {
      prev.set(eventId, mutation);
      return prev;
    });
    const dfd = new Deferred;
    this.mutationDeferredStore.set(eventId, dfd);
    this._sendMutation(eventId, mutation);
    this.notifyAll();
    return dfd.promise;
  };
  shutdown() {
    this._isShutdown = true;
    this._ws.close();
  }
  _sendMutation(eventId, mutation) {
    if (this.status !== STATUS.AUTHENTICATED) {
      this._finishTransaction(true, "enqueued", eventId);
      return;
    }
    const timeoutMs = Math.max(5000, this.pendingMutations.currentValue.size * 5000);
    if (!this._isOnline) {
      this._finishTransaction(true, "enqueued", eventId);
    } else {
      this._trySend(eventId, mutation);
      window.setTimeout(() => {
        this._finishTransaction(true, "pending", eventId);
      }, 3000);
      window.setTimeout(() => {
        if (!this._isOnline) {
          return;
        }
        const mut = this.pendingMutations.currentValue.get(eventId);
        if (mut && !mut["tx-id"]) {
          this.pendingMutations.set((prev) => {
            prev.delete(eventId);
            return prev;
          });
          this._finishTransaction(false, "timeout", eventId);
          console.error("mutation timed out", mut);
        }
      }, timeoutMs);
    }
  }
  _flushPendingMessages() {
    const subs = Object.keys(this.queryCbs).map((hash) => {
      return this.querySubs.currentValue[hash];
    });
    const safeSubs = subs.filter((x2) => x2);
    safeSubs.forEach(({ eventId, q: q2 }) => {
      this._trySendAuthed(eventId, { op: "add-query", q: q2 });
    });
    const muts = this._rewriteMutations(this.attrs, this.pendingMutations.currentValue);
    muts.forEach((mut, eventId) => {
      if (!mut["tx-id"]) {
        this._sendMutation(eventId, mut);
      }
    });
    const roomIds = Object.keys(this._presence);
    roomIds.forEach((roomId) => {
      this._trySendAuthed(uuid_default(), { op: "join-room", "room-id": roomId });
    });
    const presence2 = Object.entries(this._presence);
    presence2.forEach(([roomId, { result }]) => {
      const user = result?.user;
      if (!user)
        return;
      this._trySendAuthed(uuid_default(), {
        op: "set-presence",
        "room-id": roomId,
        data: user
      });
    });
  }
  _trySendAuthed(eventId, msg) {
    if (this.status !== STATUS.AUTHENTICATED) {
      return;
    }
    this._trySend(eventId, msg);
  }
  _trySend(eventId, msg) {
    if (this._ws.readyState !== WS_OPEN_STATUS) {
      return;
    }
    this._ws.send(JSON.stringify({ "client-event-id": eventId, ...msg }));
  }
  _wsOnOpen = () => {
    log_default.info("[socket] connected");
    this._setStatus(STATUS.OPENED);
    this.getCurrentUser().then((resp) => {
      this._trySend(uuid_default(), {
        op: "init",
        "app-id": this.config.appId,
        "refresh-token": resp.user?.["refresh_token"],
        "__admin-token": this.config.__adminToken
      });
    });
  };
  _wsOnMessage = (e) => {
    this._handleReceive(JSON.parse(e.data.toString()));
  };
  _wsOnError = (e) => {
    log_default.error("[socket] error: ", e);
  };
  _wsOnClose = () => {
    this._setStatus(STATUS.CLOSED);
    if (this._isShutdown) {
      log_default.info("[socket-close] socket has been shut down and will not reconnect");
      return;
    }
    log_default.info("[socket-close] scheduling reconnect", this._reconnectTimeoutMs);
    setTimeout(() => {
      this._reconnectTimeoutMs = Math.min(this._reconnectTimeoutMs + 1000, 1e4);
      if (!this._isOnline) {
        log_default.info("[socket-close] we are offline, no need to start socket");
        return;
      }
      this._startSocket();
    }, this._reconnectTimeoutMs);
  };
  _startSocket() {
    this._ws = new WebSocket(`${this.config.websocketURI}?app_id=${this.config.appId}`);
    this._ws.onopen = this._wsOnOpen;
    this._ws.onmessage = this._wsOnMessage;
    this._ws.onclose = this._wsOnClose;
  }
  async getLocalId(name) {
    const k2 = `localToken_${name}`;
    const id = await this._persister.getItem(k2);
    if (id)
      return id;
    if (this._localIdPromises[k2]) {
      return this._localIdPromises[k2];
    }
    const newId = uuid_default();
    this._localIdPromises[k2] = this._persister.setItem(k2, newId).then(() => newId);
    return this._localIdPromises[k2];
  }
  _replaceUrlAfterOAuth() {
    if (typeof URL === "undefined") {
      return;
    }
    const url = new URL(window.location.href);
    if (url.searchParams.get(OAUTH_REDIRECT_PARAM)) {
      const startUrl = url.toString();
      url.searchParams.delete(OAUTH_REDIRECT_PARAM);
      url.searchParams.delete("code");
      url.searchParams.delete("error");
      const newPath = url.pathname + (url.searchParams.size ? "?" + url.searchParams : "") + url.hash;
      history.replaceState(history.state, "", newPath);
      if (typeof navigation === "object" && typeof navigation.addEventListener === "function" && typeof navigation.removeEventListener === "function") {
        let ran = false;
        const listener = (e) => {
          if (!ran) {
            ran = true;
            navigation.removeEventListener("navigate", listener);
            if (!e.userInitiated && e.navigationType === "replace" && e.destination?.url === startUrl) {
              history.replaceState(history.state, "", newPath);
            }
          }
        };
        navigation.addEventListener("navigate", listener);
      }
    }
  }
  async _oauthLoginInit() {
    if (typeof window === "undefined" || typeof window.location === "undefined" || typeof URLSearchParams === "undefined") {
      return null;
    }
    const params = new URLSearchParams(window.location.search);
    if (!params.get(OAUTH_REDIRECT_PARAM)) {
      return null;
    }
    const error = params.get("error");
    if (error) {
      this._replaceUrlAfterOAuth();
      return { error: { message: error } };
    }
    const code = params.get("code");
    if (!code) {
      return null;
    }
    this._replaceUrlAfterOAuth();
    try {
      const { user } = await exchangeCodeForToken({
        apiURI: this.config.apiURI,
        appId: this.config.appId,
        code
      });
      this.setCurrentUser(user);
      return null;
    } catch (e) {
      if (e?.body?.type === "record-not-found" && e?.body?.hint?.["record-type"] === "app-oauth-code" && await this._hasCurrentUser()) {
        return null;
      }
      const message = e?.body?.message || "Error logging in.";
      return { error: { message } };
    }
  }
  async _waitForOAuthCallbackResponse() {
    return await this._oauthCallbackResponse;
  }
  __subscribeMutationErrors(cb) {
    this.mutationErrorCbs.push(cb);
    return () => {
      this.mutationErrorCbs = this.mutationErrorCbs.filter((x2) => x2 !== cb);
    };
  }
  subscribeAuth(cb) {
    this.authCbs.push(cb);
    let unsubbed = false;
    this.getCurrentUser().then((resp) => {
      if (unsubbed)
        return;
      cb(resp);
    });
    return () => {
      unsubbed = true;
      this.authCbs = this.authCbs.filter((x2) => x2 !== cb);
    };
  }
  subscribeAttrs(cb) {
    this.attrsCbs.push(cb);
    if (this.attrs) {
      cb(this.attrs);
    }
    return () => {
      this.attrsCbs = this.attrsCbs.filter((x2) => x2 !== cb);
    };
  }
  notifyAuthSubs(user) {
    this.authCbs.forEach((cb) => cb(user));
  }
  notifyMutationErrorSubs(error) {
    this.mutationErrorCbs.forEach((cb) => cb(error));
  }
  notifyAttrsSubs() {
    if (!this.attrs)
      return;
    const oas = this.optimisticAttrs();
    this.attrsCbs.forEach((cb) => cb(oas));
  }
  async setCurrentUser(user) {
    await this._persister.setItem(currentUserKey, JSON.stringify(user));
  }
  async getCurrentUser() {
    const oauthResp = await this._waitForOAuthCallbackResponse();
    if (oauthResp?.error) {
      return { error: oauthResp.error };
    }
    const user = await this._persister.getItem(currentUserKey);
    return { user: JSON.parse(user) };
  }
  async _hasCurrentUser() {
    const user = await this._persister.getItem(currentUserKey);
    return JSON.parse(user) != null;
  }
  async changeCurrentUser(newUser) {
    await this.setCurrentUser(newUser);
    this.updateUser(newUser);
    try {
      this._broadcastChannel?.postMessage({ type: "auth" });
    } catch (error) {
      console.error("Error posting message to broadcast channel", error);
    }
  }
  updateUser(newUser) {
    this.querySubs.set((prev) => {
      Object.keys(prev).forEach((k2) => {
        delete prev[k2].result;
      });
      return prev;
    });
    this._reconnectTimeoutMs = 0;
    this._ws.close();
    this._oauthCallbackResponse = null;
    this.notifyAuthSubs({ user: newUser });
  }
  sendMagicCode({ email }) {
    return sendMagicCode({
      apiURI: this.config.apiURI,
      appId: this.config.appId,
      email
    });
  }
  async signInWithMagicCode({ email, code }) {
    const res = await verifyMagicCode({
      apiURI: this.config.apiURI,
      appId: this.config.appId,
      email,
      code
    });
    this.changeCurrentUser(res.user);
    return res;
  }
  async signInWithCustomToken(authToken) {
    const res = await verifyRefreshToken({
      apiURI: this.config.apiURI,
      appId: this.config.appId,
      refreshToken: authToken
    });
    this.changeCurrentUser(res.user);
  }
  signOut() {
    this.changeCurrentUser(null);
  }
  createAuthorizationURL({ clientName, redirectURL }) {
    const { apiURI, appId } = this.config;
    return `${apiURI}/runtime/oauth/start?app_id=${appId}&client_name=${clientName}&redirect_uri=${redirectURL}`;
  }
  async exchangeCodeForToken({ code, codeVerifier }) {
    const res = await exchangeCodeForToken({
      apiURI: this.config.apiURI,
      appId: this.config.appId,
      code,
      codeVerifier
    });
    this.changeCurrentUser(res.user);
    return res;
  }
  issuerURI() {
    const { apiURI, appId } = this.config;
    return `${apiURI}/runtime/${appId}`;
  }
  async signInWithIdToken({ idToken, clientName, nonce }) {
    const res = await signInWithIdToken({
      apiURI: this.config.apiURI,
      appId: this.config.appId,
      idToken,
      clientName,
      nonce
    });
    this.changeCurrentUser(res.user);
    return res;
  }
  joinRoom(roomId) {
    this._trySendAuthed(uuid_default(), { op: "join-room", "room-id": roomId });
    return () => {
      this._cleanupRoom(roomId);
    };
  }
  _cleanupRoom(roomId) {
    if (!this._presence[roomId]?.handlers?.length && !Object.keys(this._broadcastSubs[roomId] ?? {}).length) {
      delete this._presence[roomId];
      delete this._broadcastSubs[roomId];
      this._trySendAuthed(uuid_default(), { op: "leave-room", "room-id": roomId });
    }
  }
  getPresence(roomType, roomId, opts = {}) {
    const room = this._presence[roomId];
    if (!room || !room.result)
      return null;
    return {
      ...buildPresenceSlice(room.result, opts),
      isLoading: room.isLoading,
      error: room.error
    };
  }
  publishPresence(roomType, roomId, partialData) {
    const data = {
      ...this._presence[roomId]?.result?.user,
      ...partialData
    };
    this._trySendAuthed(uuid_default(), {
      op: "set-presence",
      "room-id": roomId,
      data
    });
    this._presence[roomId] = this._presence[roomId] || {};
    this._presence[roomId].result = this._presence[roomId].result || {};
    this._presence[roomId].result.user = data;
    this._notifyPresenceSubs(roomId);
  }
  subscribePresence(roomType, roomId, opts, cb) {
    const leaveRoom = this.joinRoom(roomId);
    const handler = { ...opts, roomId, cb, prev: null };
    this._presence[roomId] = this._presence[roomId] || {};
    this._presence[roomId].isLoading = true;
    this._presence[roomId].handlers = this._presence[roomId].handlers || [];
    this._presence[roomId].handlers.push(handler);
    this._notifyPresenceSub(roomId, handler);
    return () => {
      this._presence[roomId].handlers = this._presence[roomId]?.handlers?.filter((x2) => x2 !== handler) ?? [];
      leaveRoom();
    };
  }
  _notifyPresenceSubs(roomId) {
    this._presence[roomId]?.handlers?.forEach((handler) => {
      this._notifyPresenceSub(roomId, handler);
    });
  }
  _notifyPresenceSub(roomId, handler) {
    const slice = this.getPresence("", roomId, handler);
    if (!slice) {
      return;
    }
    if (handler.prev && !hasPresenceResponseChanged(slice, handler.prev)) {
      return;
    }
    handler.prev = slice;
    handler.cb(slice);
  }
  _setPresencePeers(roomId, data) {
    const sessions = { ...data };
    delete sessions[this._sessionId];
    const peers = Object.fromEntries(Object.entries(sessions).map(([k2, v2]) => [k2, v2.data]));
    this._presence[roomId] = this._presence[roomId] || {};
    this._presence[roomId].result = this._presence[roomId].result || {};
    this._presence[roomId].result.peers = peers;
  }
  publishTopic({ roomType, roomId, topic, data }) {
    this._trySendAuthed(uuid_default(), {
      op: "client-broadcast",
      "room-id": roomId,
      roomType,
      topic,
      data
    });
  }
  subscribeTopic(roomId, topic, cb) {
    const leaveRoom = this.joinRoom(roomId);
    this._broadcastSubs[roomId] = this._broadcastSubs[roomId] || {};
    this._broadcastSubs[roomId][topic] = this._broadcastSubs[roomId][topic] || [];
    this._broadcastSubs[roomId][topic].push(cb);
    this._presence[roomId] = this._presence[roomId] || {};
    return () => {
      this._broadcastSubs[roomId][topic] = this._broadcastSubs[roomId][topic].filter((x2) => x2 !== cb);
      if (!this._broadcastSubs[roomId][topic].length) {
        delete this._broadcastSubs[roomId][topic];
      }
      leaveRoom();
    };
  }
  _notifyBroadcastSubs(room, topic, msg) {
    this._broadcastSubs?.[room]?.[topic]?.forEach((cb) => {
      const data = msg.data?.data;
      const peer = msg.data["peer-id"] === this._sessionId ? this._presence[room]?.result?.user : this._presence[room]?.result?.peers?.[msg.data["peer-id"]];
      return cb(data, peer);
    });
  }
  async upload(path, file) {
    const currentUser = await this.getCurrentUser();
    const refreshToken = currentUser?.user?.refresh_token;
    const fileName = path || file.name;
    const url = await getSignedUploadUrl({
      apiURI: this.config.apiURI,
      appId: this.config.appId,
      fileName,
      refreshToken
    });
    const success = await upload(url, file);
    return this.getDownloadUrl(fileName);
  }
  async getDownloadUrl(path) {
    const currentUser = await this.getCurrentUser();
    const refreshToken = currentUser?.user?.refresh_token;
    const url = await getDownloadUrl({
      apiURI: this.config.apiURI,
      appId: this.config.appId,
      path,
      refreshToken
    });
    return url;
  }
}

// src/schema.ts
var exports_schema = {};
__export(exports_schema, {
  string: () => string,
  number: () => number,
  json: () => json2,
  graph: () => graph,
  entity: () => entity,
  boolean: () => boolean,
  any: () => any
});
function graph(appId, entities, links) {
  return new InstantGraph(appId, enrichEntitiesWithLinks(entities, links), links);
}
function entity(attrs) {
  return { attrs, links: {} };
}
function string() {
  return new DataAttrDef("string", true);
}
function number() {
  return new DataAttrDef("number", true);
}
function boolean() {
  return new DataAttrDef("boolean", true);
}
function json2() {
  return new DataAttrDef("json", true);
}
function any() {
  return new DataAttrDef("json", true);
}
function enrichEntitiesWithLinks(entities, links) {
  const linksIndex = { fwd: {}, rev: {} };
  for (const linkDef of Object.values(links)) {
    linksIndex.fwd[linkDef.forward.on] ||= {};
    linksIndex.rev[linkDef.reverse.on] ||= {};
    linksIndex.fwd[linkDef.forward.on][linkDef.forward.label] = {
      entityName: linkDef.reverse.on,
      cardinality: linkDef.forward.has
    };
    linksIndex.rev[linkDef.reverse.on][linkDef.reverse.label] = {
      entityName: linkDef.forward.on,
      cardinality: linkDef.reverse.has
    };
  }
  const enrichedEntities = Object.fromEntries(Object.entries(entities).map(([name, def]) => [
    name,
    {
      ...def,
      links: { ...linksIndex.fwd[name], ...linksIndex.rev[name] }
    }
  ]));
  return enrichedEntities;
}
class DataAttrDef {
  valueType;
  required;
  config;
  constructor(valueType, required, config = { indexed: false, unique: false }) {
    this.valueType = valueType;
    this.required = required;
    this.config = config;
  }
  optional() {
    return new DataAttrDef(this.valueType, false);
  }
  unique() {
    return new DataAttrDef(this.valueType, this.required, {
      ...this.config,
      unique: true
    });
  }
  indexed() {
    return new DataAttrDef(this.valueType, this.required, {
      ...this.config,
      indexed: true
    });
  }
}

class InstantGraph {
  appId;
  entities;
  links;
  constructor(appId, entities, links) {
    this.appId = appId;
    this.entities = entities;
    this.links = links;
  }
}

// src/devtool.ts
function createDevtool(appId) {
  currentDevtool?.dispose();
  const container = createContainer();
  const toggler = createToggler(toggleView);
  const iframe = createIframe(getSrc(appId));
  function onPostMessage(event) {
    if (event.source !== iframe.element.contentWindow)
      return;
    if (event.data?.type === "close" && container.isVisible()) {
      toggleView();
    }
  }
  function onKeyDown(event) {
    const isToggleShortcut = event.shiftKey && event.ctrlKey && event.key === "0";
    const isEsc = event.key === "Escape" || event.key === "Esc";
    if (isToggleShortcut || isEsc) {
      toggleView();
    }
  }
  function toggleView() {
    if (container.isVisible()) {
      container.element.style.display = "none";
    } else {
      container.element.style.display = "block";
      if (!container.element.contains(iframe.element)) {
        container.element.appendChild(iframe.element);
      }
    }
  }
  function dispose() {
    container.element.remove();
    toggler.element.remove();
    removeEventListener("keydown", onKeyDown);
    removeEventListener("message", onPostMessage);
  }
  function create() {
    document.body.appendChild(container.element);
    document.body.appendChild(toggler.element);
    addEventListener("keydown", onKeyDown);
    addEventListener("message", onPostMessage);
    currentDevtool = {
      dispose
    };
  }
  return create();
}
function getSrc(appId) {
  const isDev = window.DEV_DEVTOOL;
  const src = `${isDev ? "http://localhost:3000" : "https://instantdb.com"}/_devtool?appId=${appId}`;
  return src;
}
function createIframe(src) {
  const element = document.createElement("iframe");
  element.src = src;
  Object.assign(element.style, {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    backgroundColor: "white"
  });
  return { element };
}
function createToggler(onClick) {
  const logoSVG = `
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="black"/>
      <rect x="97.0973" y="91.3297" width="140" height="330" fill="white"/>
    </svg>
  `;
  const element = document.createElement("button");
  element.innerHTML = logoSVG;
  Object.assign(element.style, {
    position: "fixed",
    bottom: "24px",
    left: "24px",
    height: "32px",
    width: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  });
  element.addEventListener("click", onClick);
  return { element };
}
function createContainer() {
  const element = document.createElement("div");
  Object.assign(element.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    left: "60px",
    top: "72px",
    display: "block",
    borderRadius: "4px",
    border: "1px #ccc solid",
    boxShadow: "0px 0px 8px #00000044",
    backgroundColor: "#eee",
    zIndex: "999990"
  });
  element.style.display = "none";
  function isVisible() {
    return element.style.display !== "none";
  }
  return { element, isVisible };
}
var currentDevtool;

// src/index.ts
function initGlobalInstantCoreStore() {
  if (typeof window !== "undefined") {
    window.__instantDbStore = window.__instantDbStore ?? {};
    return window.__instantDbStore;
  }
  return {};
}
function init(config, Storage, NetworkListener) {
  const existingClient = globalInstantCoreStore[config.appId];
  if (existingClient) {
    return existingClient;
  }
  const reactor = new Reactor({
    ...defaultConfig2,
    ...config
  }, Storage || IndexedDBStorage, NetworkListener || WindowNetworkListener);
  const client = new InstantCore(reactor);
  globalInstantCoreStore[config.appId] = client;
  if (typeof window !== "undefined" && typeof window.location !== "undefined") {
    const showDevtool = ("devtool" in config ? Boolean(config.devtool) : defaultOpenDevtool) && window.location.hostname === "localhost" && !Boolean(globalThis._nodevtool);
    if (showDevtool) {
      createDevtool(config.appId);
    }
  }
  return client;
}
function coerceQuery(o2) {
  return JSON.parse(JSON.stringify(o2));
}
var defaultOpenDevtool = true;
var defaultConfig2 = {
  apiURI: "https://api.instantdb.com",
  websocketURI: "wss://api.instantdb.com/runtime/session"
};
var globalInstantCoreStore = initGlobalInstantCoreStore();

class InstantCore {
  _reactor;
  auth;
  storage;
  constructor(reactor) {
    this._reactor = reactor;
    this.auth = new Auth(this._reactor);
    this.storage = new Storage(this._reactor);
  }
  transact(chunks) {
    return this._reactor.pushTx(chunks);
  }
  getLocalId(name) {
    return this._reactor.getLocalId(name);
  }
  subscribeQuery(query3, cb) {
    return this._reactor.subscribeQuery(query3, cb);
  }
  subscribeAuth(cb) {
    return this._reactor.subscribeAuth(cb);
  }
  joinRoom(roomType = "_defaultRoomType", roomId = "_defaultRoomId") {
    const leaveRoom = this._reactor.joinRoom(roomId);
    return {
      leaveRoom,
      subscribeTopic: (topic, onEvent) => this._reactor.subscribeTopic(roomId, topic, onEvent),
      subscribePresence: (opts, onChange) => this._reactor.subscribePresence(roomType, roomId, opts, onChange),
      publishTopic: (topic, data) => this._reactor.publishTopic({ roomType, roomId, topic, data }),
      publishPresence: (data) => this._reactor.publishPresence(roomType, roomId, data),
      getPresence: (opts) => this._reactor.getPresence(roomType, roomId, opts)
    };
  }
  shutdown() {
    delete globalInstantCoreStore[this._reactor.config.appId];
    this._reactor.shutdown();
  }
}

class Auth {
  db;
  constructor(db) {
    this.db = db;
  }
  sendMagicCode = (params) => {
    return this.db.sendMagicCode(params);
  };
  signInWithMagicCode = (params) => {
    return this.db.signInWithMagicCode(params);
  };
  signInWithToken = (token) => {
    return this.db.signInWithCustomToken(token);
  };
  createAuthorizationURL = (params) => {
    return this.db.createAuthorizationURL(params);
  };
  signInWithIdToken = (params) => {
    return this.db.signInWithIdToken(params);
  };
  exchangeOAuthCode = (params) => {
    return this.db.exchangeCodeForToken(params);
  };
  issuerURI = () => {
    return this.db.issuerURI();
  };
  signOut = () => {
    this.db.signOut();
  };
}

class Storage {
  db;
  constructor(db) {
    this.db = db;
  }
  put = (pathname, file) => {
    return this.db.upload(pathname, file);
  };
  getDownloadUrl = (pathname) => {
    return this.db.getDownloadUrl(pathname);
  };
}
export {
  weakHash_default as weakHash,
  tx,
  lookup,
  init,
  uuid_default as id,
  exports_schema as i,
  getOps,
  coerceQuery,
  WindowNetworkListener,
  Storage,
  InstantCore as InstantClient,
  IndexedDBStorage,
  Auth
};
