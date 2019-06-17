// ==UserScript==
// @name         Quick Actions
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Add's various quick actions to the Admin portal
// @author       Qawsar
// @match        https://admin.callcentric.com/client_view.php*
// @updateURL    https://github.com/FatePGN/toolbox/raw/master/IP_Check.user.js
// @downloadURL  https://github.com/FatePGN/toolbox/raw/master/IP_Check.user.js
// @grant
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        var tds = document.querySelectorAll('td.small8pt');
        var tda = ""; //IP Value
        var ip = -1;
        var ip2 = -1;
        var ip3 = -1;
        var ip4 = -1;
        var ip5 = -1;
        var ip6 = -1;
        var ipcheck = new RegExp("^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$");

        for (var i = 0; i < tds.length; i++) {
            if (tds[i].textContent == "Subscription IP"){
                ip = i+1
            } else if (i == ip) {
                tda = tds[i].textContent
                var newel = document.createElement('div');
                newel.innerHTML = "<a href=\"https://ip2location.com/demo/" + tda + "\" target=\"_blank\" style=\"color:red\">Go to IP2Location</a>"
                tds[i].append(newel);
            } else {
            }

            if (tds[i].textContent == "Last time login"){
                ip2 = i+2
                ip3 = i+5
                ip4 = i+8
                ip5 = i+11
                ip6 = i+14
                var newheader = document.createElement('div');
                newheader.innerHTML = "<font color=\"red\"><b>IP2Location Links:</b></font>"
                tds[i].append(newheader);
            } else if (i == ip2) {
                tda = tds[i].textContent
                if (ipcheck.test(tda)){
                    var newel2 = document.createElement('div');
                    newel2.innerHTML = "<a href=\"https://ip2location.com/demo/" + tda + "\" target=\"_blank\" style=\"color:blue\">" + tda + "</a>"
                    tds[i-2].append(newel2);
                }
            } else if (i == ip3) {
                tda = tds[i].textContent
                if (ipcheck.test(tda)){
                    var newel3 = document.createElement('div');
                    newel3.innerHTML = "<a href=\"https://ip2location.com/demo/" + tda + "\" target=\"_blank\" style=\"color:blue\">" + tda + "</a>"
                    tds[i-5].append(newel3);
                }
            } else if (i == ip4) {
                tda = tds[i].textContent
                if (ipcheck.test(tda)){
                    var newel4 = document.createElement('div');
                    newel4.innerHTML = "<a href=\"https://ip2location.com/demo/" + tda + "\" target=\"_blank\" style=\"color:blue\">" + tda + "</a>"
                    tds[i-8].append(newel4);
                }
            } else if (i == ip5) {
                tda = tds[i].textContent
                if (ipcheck.test(tda)){
                    var newel5 = document.createElement('div');
                    newel5.innerHTML = "<a href=\"https://ip2location.com/demo/" + tda + "\" target=\"_blank\" style=\"color:blue\">" + tda + "</a>"
                    tds[i-11].append(newel5);
                }
            } else if (i == ip6) {
                tda = tds[i].textContent
                if (ipcheck.test(tda)){
                    var newel6 = document.createElement('div');
                    newel6.innerHTML = "<a href=\"https://ip2location.com/demo/" + tda + "\" target=\"_blank\" style=\"color:blue\">" + tda + "</a>"
                    tds[i-14].append(newel6);
                }
            } else {
            }
        }
    });

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
	.scrollbar {
		width: 100%;
		height: 0px;
		overflow: auto;
		position: relative;
	}
	.innerDiv {
		height: 900px;
	}
	.floatingBtn {
		background: #050684;
		color: #fff;
		width: 150px;
		right: 0px;
		top: 80px;
		position: fixed;
	}
    .button {
        background-color: #D6F8D5;
        border: none;
        border: 2px solid black;
        padding: 4px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }';`;
    document.getElementsByTagName('head')[0].appendChild(style);

    var tools = document.createElement('tools');
    tools.innerHTML = `
        <div class="scrollbar" style="visibility: hidden">
            <div class="innerDiv" style="visibility: hidden">
                <div class="btnContainer" style="visibility: visible">
                    <div class="floatingBtn">
                        <center>
                        <br><strong>Quick Actions</strong><br><br>
                        <button id="pblock" class="button">Block Payment</button><br><br>
                        <button id="fblock" class="button">Fraud Block</button><br><br>
                        <button id="sblock" class="button">Secuirity Block</button><br><br>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <script>
        $(document).ready(function(){
            $(".button").click(function () {
                 $('.allow_add_cc').val('n').trigger('change');
            });
        });
        </script>`;
    document.getElementsByTagName('body')[0].appendChild(tools);

    document.getElementById ("pblock").addEventListener (
    "click", pBlock, false
    );
    document.getElementById ("fblock").addEventListener (
    "click", fBlock, false
    );
    document.getElementById ("sblock").addEventListener (
    "click", sBlock, false
    );

    function pBlock (zEvent) {
    document.getElementsByName('allow_add_cc')[0].selectedIndex = 1;
    document.getElementsByName('allow_add_cc')[0].setAttribute("style", "background-color: #FDBE1E;");
    document.getElementsByName('block_paypal')[0].selectedIndex = 1;
    document.getElementsByName('block_paypal')[0].setAttribute("style", "background-color: #FDBE1E;");
}

    function fBlock (zEvent) {
    document.getElementsByName('fraud_flag')[0].selectedIndex = 1;
    document.getElementsByName('fraud_flag')[0].setAttribute("style", "background-color: #FDBE1E;");
    document.getElementsByName('tmp_fraud_block')[0].selectedIndex = 1;
    document.getElementsByName('tmp_fraud_block')[0].setAttribute("style", "background-color: #FDBE1E;");
    document.getElementsByName('cc_status')[0].selectedIndex = 0;
    document.getElementsByName('cc_status')[0].setAttribute("style", "background-color: white;");
    document.getElementsByName('security_block')[0].selectedIndex = 0;
    document.getElementsByName('security_block')[0].setAttribute("style", "background-color: white;");
}

    function sBlock (zEvent) {
    document.getElementsByName('cc_status')[0].selectedIndex = 1;
    document.getElementsByName('cc_status')[0].setAttribute("style", "background-color: #FDBE1E;");
    document.getElementsByName('security_block')[0].selectedIndex = 1;
    document.getElementsByName('security_block')[0].setAttribute("style", "background-color: #FDBE1E;");
    document.getElementsByName('fraud_flag')[0].selectedIndex = 1;
    document.getElementsByName('fraud_flag')[0].setAttribute("style", "background-color: #FDBE1E;");
    document.getElementsByName('allow_add_cc')[0].selectedIndex = 1;
    document.getElementsByName('allow_add_cc')[0].setAttribute("style", "background-color: #FDBE1E;");
    document.getElementsByName('block_paypal')[0].selectedIndex = 1;
    document.getElementsByName('block_paypal')[0].setAttribute("style", "background-color: #FDBE1E;");
    document.getElementsByName('tmp_fraud_block')[0].selectedIndex = 0;
    document.getElementsByName('tmp_fraud_block')[0].setAttribute("style", "background-color: white;");
}

})();
