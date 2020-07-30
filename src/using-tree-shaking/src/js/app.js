/**
 * tree shakingをした場合
 *     Asset      Size  Chunks             Chunk Names
 * bundle.js  5.79 KiB       0  [emitted]  main
 */

// import { upperCase } from "lodash-es";
// const text = upperCase("hello webpack app");



/**
 * モジュールの全てを読み込みtree shakingされない場合
 *     Asset      Size  Chunks             Chunk Names
 * bundle.js  85.6 KiB       0  [emitted]  main
 */

import _ from "lodash-es";
const text = _.upperCase("hello webpack app");


console.log(text);