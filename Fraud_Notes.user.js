// ==UserScript==
// @name         Fraud Notes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fraud Notes
// @author       Qawsar
// @match        https://admin.callcentric.com/client_fraud.php*
// @match        https://admin1.callcentric.com/client_fraud.php*
// @updateURL    https://github.com/qawsar/cctools/raw/master/Fraud_Notes.user.js
// @downloadURL  https://github.com/qawsar/cctools/raw/master/Fraud_Notes.user.js
// @grant
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
     $(document).ready(function() {
         var tds = document.querySelectorAll('td');
         for (var i = 0; i < tds.length; i++) {
             if (i == 91){
                 var notes = document.createElement('div');
                 notes.innerHTML = "<textarea rows=\"10\" cols=\"130\"></textarea>"
                 tds[i].append(notes);
             }
         }
         var link = "";
         var y = 98;
         for (var z = 0; z < tds.length; z++) {
             var newel = document.createElement('div');
             y = y + 24;
             newel.innerHTML = "<button>Add</button>"
             tds[y].append(newel);
         }
     });
})();
