var data=[];
var dataStr = '1、理工白花<br>\
<br>\
拍摄地点：哈尔滨理工大学   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：梦雨姐姐<br>\
<br>\<br>\
2、彩虹牵桥<br>\
<br>\
拍摄地点：哈尔滨商业大学   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：皮卡丘-璨<br>\
<br>\
<br>\
3、星空下的孤塔<br>\
<br>\
拍摄地点：哈尔滨对青山镇   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：理工天文协会<br>\
<br>\
<br>\
4、璀璨星空<br>\
<br>\
拍摄地点：哈尔滨对青山镇   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：理工天文协会<br>\
<br>\
<br>\
5、星空下的骄傲<br>\
<br>\
拍摄地点：哈尔滨对青山镇   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：理工天文协会<br>\
<br>\
<br>\
6、星空下的安眠灯<br>\
<br>\
拍摄地点：哈尔滨对青山镇   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：理工天文协会<br>\
<br>\
<br>\
7、行者的旅途<br>\
<br>\
拍摄地点：哈尔滨对青山镇   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：理工天文协会<br>\
<br>\
<br>\
8、夕阳余晖<br>\
<br>\
拍摄地点：哈尔滨沿江大道   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：夜枫林<br>\
<br>\
<br>\
9、理工春色<br>\
<br>\
拍摄地点：哈尔滨理工大学   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：梦雨姐姐<br>\
<br>\
<br>\
10、理工春色<br>\
<br>\
拍摄地点：哈尔滨理工大学   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：梦雨姐姐<br>\
<br>\
<br>\
10、哈尔滨夏荷<br>\
<br>\
拍摄地点：哈尔滨郊区小村   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp拍摄者：夜枫林<br>\
<br>\
<br>\
';
//下面的代码是将dataStr中的内容拆分存放到data数组中
var d = dataStr.split('<br><br><br>');
for(var i = 0;i < d.length; i++) {
 var c = d[i].split('<br><br>');
 data.push({
 img:'photo_'+(i+1)+'.jpg',
 caption:c[0].split('、')[1],
 desc:c[1]
 });
}