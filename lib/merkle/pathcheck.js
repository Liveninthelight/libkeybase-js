// Generated by IcedCoffeeScript 1.7.1-g
(function() {
  var BaseTree, C, LegacyUidNameTree, MainTree, PathChecker, a_json_parse, hash, iced, make_esc, merkle, pathcheck, __iced_k, __iced_k_noop,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-runtime');
  __iced_k = __iced_k_noop = function() {};

  C = require('../constants');

  make_esc = require('iced-error').make_esc;

  hash = require('triplesec').hash;

  merkle = require('merkle-tree');

  a_json_parse = require('iced-utils').util.a_json_parse;

  module.exports = pathcheck = function(_arg, cb) {
    var err, km, pc, res, server_reply, ___iced_passed_deferral, __iced_deferrals, __iced_k;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    server_reply = _arg.server_reply, km = _arg.km;
    pc = new PathChecker({
      server_reply: server_reply,
      km: km
    });
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced"
        });
        pc.run(__iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              err = arguments[0];
              return res = arguments[1];
            };
          })(),
          lineno: 22
        }));
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        return cb(err, res);
      };
    })(this));
  };

  PathChecker = (function() {
    function PathChecker(_arg) {
      this.server_reply = _arg.server_reply, this.km = _arg.km;
    }

    PathChecker.prototype.run = function(cb) {
      var esc, leaf, uid, username, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "PathChecker::run");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
            funcname: "PathChecker.run"
          });
          _this._verify_sig(esc(__iced_deferrals.defer({
            lineno: 35
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
              funcname: "PathChecker.run"
            });
            _this._verify_username(esc(__iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  uid = arguments[0];
                  return username = arguments[1];
                };
              })(),
              lineno: 36
            })));
            __iced_deferrals._fulfill();
          })(function() {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
                funcname: "PathChecker.run"
              });
              _this._verify_path({
                uid: uid
              }, esc(__iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return leaf = arguments[0];
                  };
                })(),
                lineno: 37
              })));
              __iced_deferrals._fulfill();
            })(function() {
              return cb(null, {
                leaf: leaf,
                uid: uid,
                username: username
              });
            });
          });
        };
      })(this));
    };

    PathChecker.prototype._verify_sig = function(cb) {
      var esc, raw, sigeng, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "_verify_sig");
      sigeng = this.km.make_sig_eng();
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
            funcname: "PathChecker._verify_sig"
          });
          sigeng.unbox(_this.server_reply.root.sig, esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return raw = arguments[0];
              };
            })(),
            lineno: 45
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
              funcname: "PathChecker._verify_sig"
            });
            a_json_parse(raw.toString('utf8'), esc(__iced_deferrals.defer({
              assign_fn: (function(__slot_1) {
                return function() {
                  return __slot_1._signed_payload = arguments[0];
                };
              })(_this),
              lineno: 46
            })));
            __iced_deferrals._fulfill();
          })(function() {
            return cb(null);
          });
        };
      })(this));
    };

    PathChecker.prototype._extract_nodes = function(list) {
      var node, ret, _i, _len;
      ret = {};
      for (_i = 0, _len = list.length; _i < _len; _i++) {
        node = list[_i].node;
        ret[node.hash] = JSON.parse(node.val);
      }
      return ret;
    };

    PathChecker.prototype._verify_username_legacy = function(_arg, cb) {
      var err, esc, leaf, nodes, root, tree, uid, username, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      uid = _arg.uid, username = _arg.username;
      esc = make_esc(cb, "PathChecker::_verify_username_legacy");
      root = this._signed_payload.body.legacy_uid_root;
      nodes = this._extract_nodes(this.server_reply.uid_proof_path);
      tree = new LegacyUidNameTree({
        root: root,
        nodes: nodes
      });
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
            funcname: "PathChecker._verify_username_legacy"
          });
          tree.find({
            key: username
          }, esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return leaf = arguments[0];
              };
            })(),
            lineno: 64
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          err = leaf === uid ? null : new Error("UID mismatch " + leaf + " != " + uid + " in tree for " + username);
          return cb(err);
        };
      })(this));
    };

    PathChecker.prototype._verify_path = function(_arg, cb) {
      var err, leaf, nodes, root, tree, uid, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      uid = _arg.uid;
      root = this._signed_payload.body.root;
      nodes = this._extract_nodes(this.server_reply.path);
      tree = new MainTree({
        root: root,
        nodes: nodes
      });
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
            funcname: "PathChecker._verify_path"
          });
          tree.find({
            key: uid
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return leaf = arguments[1];
              };
            })(),
            lineno: 75
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err, leaf);
        };
      })(this));
    };

    PathChecker.prototype._verify_username = function(cb) {
      var err, h, uid, uid2, username, ___iced_passed_deferral, __iced_deferrals, __iced_k, _ref;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      _ref = this.server_reply, uid = _ref.uid, username = _ref.username;
      err = null;
      (function(_this) {
        return (function(__iced_k) {
          if (uid.slice(-2) === '00') {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/libkeybase-js/src/merkle/pathcheck.iced",
                funcname: "PathChecker._verify_username"
              });
              _this._verify_username_legacy({
                username: username,
                uid: uid
              }, __iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return err = arguments[0];
                  };
                })(),
                lineno: 84
              }));
              __iced_deferrals._fulfill();
            })(__iced_k);
          } else {
            h = (new hash.SHA256).bufhash(new Buffer(username, "utf8"));
            uid2 = h.slice(0, 15).toString('hex') + '19';
            return __iced_k(uid !== uid2 ? err = new Error("bad UID: " + uid + " != " + uid2 + " for username " + username) : void 0);
          }
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    return PathChecker;

  })();

  BaseTree = (function(_super) {
    __extends(BaseTree, _super);

    function BaseTree(_arg) {
      this.root = _arg.root, this.nodes = _arg.nodes;
      BaseTree.__super__.constructor.call(this, {});
    }

    BaseTree.prototype.cb_unimplemented = function(cb) {
      return cb(new Error("not a storage engine"));
    };

    BaseTree.prototype.store_node = function(args, cb) {
      return this.cb_unimplemented(cb);
    };

    BaseTree.prototype.store_root = function(args, cb) {
      return this.cb_unimplemented(cb);
    };

    BaseTree.prototype.lookup_root = function(cb) {
      return cb(null, this.root);
    };

    BaseTree.prototype.lookup_node = function(_arg, cb) {
      var err, key, ret;
      key = _arg.key;
      ret = this.nodes[key];
      err = ret != null ? null : new Error("key '" + key + "' not found");
      return cb(err, ret);
    };

    return BaseTree;

  })(merkle.Base);

  LegacyUidNameTree = (function(_super) {
    __extends(LegacyUidNameTree, _super);

    function LegacyUidNameTree() {
      return LegacyUidNameTree.__super__.constructor.apply(this, arguments);
    }

    LegacyUidNameTree.prototype.hash_fn = function(s) {
      return (new hash.SHA256).bufhash(new Buffer(s, 'utf8')).toString('hex');
    };

    return LegacyUidNameTree;

  })(BaseTree);

  MainTree = (function(_super) {
    __extends(MainTree, _super);

    function MainTree() {
      return MainTree.__super__.constructor.apply(this, arguments);
    }

    MainTree.prototype.hash_fn = function(s) {
      return (new hash.SHA512).bufhash(new Buffer(s, 'utf8')).toString('hex');
    };

    return MainTree;

  })(BaseTree);

}).call(this);