exports.writeConfig = function(ssid, pass) {
  var fs  = require('fs');

  fs.writeFileSync('/etc/wpa_supplicant/wpa_supplicant.conf', '');

  fs.appendFileSync('./assets/compile/build/build.cpp', 'network={' + '\n');
  fs.appendFileSync('./assets/compile/build/build.cpp', '\tssid="' + ssid + '"\n');
  fs.appendFileSync('./assets/compile/build/build.cpp', '\tpsk="' + pass + '"\n}');
  /*fs.readFileSync(/etc/wpa_supplicant/wpa_supplicant.conf).toString().split('\n').forEach(function(line) {
    //console.log(line);
    if (line.toString().indexOf('${SETUP}') >= 0) {
      for (var i = 0; i < array.length; i++) {
        fs.appendFileSync('./assets/compile/build/build.cpp', array[i] + '\n');
      }
    } else {
      fs.appendFileSync('./assets/compile/build/build.cpp', line.toString() + '\n');
    }
  });*/
};
