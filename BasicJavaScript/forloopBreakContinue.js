

for(var i = 0; i <= 10; i++) {
    if(i == 6) {
        break;
    }
    console.log(i);
}

console.log("=====================");

for(var i = 0; i <= 6; i++) {
    if(i == 4) {
        continue;
    }
    console.log(i);
}

//
PS D:\forloopbreak.js
0
1
2
3
4
5
=====================
0
1
2
3
5
6
