  module.exports.config = {
  name: "cosplay",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Random ảnh girl",
  commandCategory: "media",
  hasPrefix:true,
  usages: "japan",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/fwUBSqv.jpg",
"https://i.imgur.com/Yj6ZHiL.jpg",
"https://i.imgur.com/WR5uNY8.jpg",
"https://i.imgur.com/Wc1GtyQ.jpg",
"https://i.imgur.com/sXet1Cb.jpg",
"https://i.imgur.com/2Z1cT0C.jpg",
"https://i.imgur.com/UaXhcld.jpg",
"https://i.imgur.com/48rV8lP.jpg",
"https://i.imgur.com/MU5K9yF.jpg",
"https://i.imgur.com/QCW4uZ0.jpg",
"https://i.imgur.com/VjqTxXE.jpg",
"https://i.imgur.com/Yw3yZEi.jpg",
"https://i.imgur.com/3nxnRjX.jpg",
"https://i.imgur.com/3wrDJSr.jpg",
"https://i.imgur.com/g5IZqUB.jpg",
"https://i.imgur.com/5SdxqpG.jpg",
"https://i.imgur.com/MuHr7G8.jpg",
"https://i.imgur.com/arX0MGQ.jpg",
"https://i.imgur.com/6fjoIo9.jpg",
"https://i.imgur.com/0zukClm.jpg",
"https://i.imgur.com/ayFdgBa.jpg",
"https://i.imgur.com/yL5n4mE.jpg",
"https://i.imgur.com/z06WCi0.jpg",
"https://i.imgur.com/8KTFbDg.jpg",
"https://i.imgur.com/F76cjdZ.jpg",
"https://i.imgur.com/7vpEftm.jpg",
"https://i.imgur.com/VtP7c8D.jpg",
"https://i.imgur.com/1fxdbPm.jpg",
"https://i.imgur.com/9DlYBMQ.jpg",
"https://i.imgur.com/XykfG5r.jpg",
"https://i.imgur.com/YTEQ8Al.jpg",
"https://i.imgur.com/GooKtgv.jpg",
"https://i.imgur.com/ywObVqh.jpg",
"https://i.imgur.com/XexaeG4.jpg",
"https://i.imgur.com/4LZxYq2.jpg",
"https://i.imgur.com/RBgdTzo.jpg",
"https://i.imgur.com/TSgLXh5.jpg",
"https://i.imgur.com/Qq2QzQc.jpg",
"https://i.imgur.com/subMIdf.jpg",
"https://i.imgur.com/rhybBON.jpg",
"https://i.imgur.com/XCPT8AK.jpg",
"https://i.imgur.com/SAHJNvs.jpg",
"https://i.imgur.com/cZCRAA6.jpg",
"https://i.imgur.com/2uupFNp.jpg",
"https://i.imgur.com/S5bo8F6.jpg",
"https://i.imgur.com/6flCnc5.jpg",
"https://i.imgur.com/ZNNHfRs.jpg",
"https://i.imgur.com/jLUqNcb.jpg",
"https://i.imgur.com/F0UxAGl.jpg",
"https://i.imgur.com/uTdZ4RS.jpg",
"https://i.imgur.com/Mm5vIhJ.jpg",
"https://i.imgur.com/UVEpw3I.jpg",
"https://i.imgur.com/paeZs4c.jpg",
"https://i.imgur.com/XkGq4Z2.jpg",
"https://i.imgur.com/PanDHnN.jpg",
"https://i.imgur.com/eKveuhy.jpg",
"https://i.imgur.com/adz0S4x.jpg",
"https://i.imgur.com/QMbefMJ.jpg",
"https://i.imgur.com/NGeqHQq.jpg",
"https://i.imgur.com/MoYfaSH.jpg",
"https://i.imgur.com/U6PIktc.jpg",
"https://i.imgur.com/xMQR8As.jpg",
"https://i.imgur.com/xsJGgyY.jpg",
"https://i.imgur.com/AkI1qWk.jpg",
"https://i.imgur.com/2if0eJG.jpg",
"https://i.imgur.com/hfvcQMy.jpg",
"https://i.imgur.com/STzMELP.jpg",
"https://i.imgur.com/GA0E4i9.jpg",
"https://i.imgur.com/sUN7rrL.jpg",
"https://i.imgur.com/OGRCzUg.jpg",
"https://i.imgur.com/X7EfcU1.jpg",
"https://i.imgur.com/OXDA8Wn.jpg",
"https://i.imgur.com/gDEzN9U.jpg",
"https://i.imgur.com/H9jvmKq.jpg",
"https://i.imgur.com/5g1wbv6.jpg",
"https://i.imgur.com/AYuh4g5.jpg",
"https://i.imgur.com/179yVaW.jpg",
"https://i.imgur.com/QR510DL.jpg",
"https://i.imgur.com/75J0qyE.jpg",
"https://i.imgur.com/WE8p8tw.jpg",
"https://i.imgur.com/UEGJpd1.jpg",
"https://i.imgur.com/GW0shdH.jpg",
"https://i.imgur.com/RJZPJPq.jpg",
"https://i.imgur.com/gcL1fa9.jpg",
"https://i.imgur.com/GmbHsdk.jpg",
"https://i.imgur.com/k6ihzER.jpg",
"https://i.imgur.com/MGYIB8H.jpg",
"https://i.imgur.com/kFbOlQ5.jpg",
"https://i.imgur.com/ScST5Y6.jpg",
"https://i.imgur.com/R1OFe0O.jpg",
"https://i.imgur.com/DPYwxL2.jpg",
"https://i.imgur.com/3fimFne.jpg",
"https://i.imgur.com/UgRen3y.jpg",
"https://i.imgur.com/fzQZLnD.jpg",
"https://i.imgur.com/poGCe7O.jpg",
"https://i.imgur.com/QyPmclT.jpg",
"https://i.imgur.com/HIYrchn.jpg",
"https://i.imgur.com/XPfpjq4.jpg",
"https://i.imgur.com/gxMPh16.jpg",
"https://i.imgur.com/yaNbcAR.jpg",
"https://i.imgur.com/xU8w7o2.jpg",
"https://i.imgur.com/50yZTDQ.jpg",
"https://i.imgur.com/Sx8lOWW.jpg",
"https://i.imgur.com/KEk1Fi4.jpg",
"https://i.imgur.com/xhdHt0k.jpg",
"https://i.imgur.com/NkhA9Zr.jpg",
"https://i.imgur.com/x2ebMES.jpg",
"https://i.imgur.com/xtb2ccd.jpg",
"https://i.imgur.com/74KN9Bp.jpg",
"https://i.imgur.com/UcPpqQN.jpg",
"https://i.imgur.com/ao4W3OF.jpg",
"https://i.imgur.com/DTN5wgp.jpg",
"https://i.imgur.com/tdJPHkE.jpg",
"https://i.imgur.com/fXn2Xyv.jpg",
"https://i.imgur.com/CPFQmjP.jpg",
"https://i.imgur.com/L1YSiQA.jpg",
"https://i.imgur.com/dMb0ow7.jpg",
"https://i.imgur.com/w6TYGWN.jpg",
"https://i.imgur.com/UP0Ux7C.jpg",
"https://i.imgur.com/hw6ZW18.jpg",
"https://i.imgur.com/cGbSnD7.jpg",
"https://i.imgur.com/Y7XVA2q.jpg",
"https://i.imgur.com/gHKpxW9.jpg",
"https://i.imgur.com/k5QfBnq.jpg",
"https://i.imgur.com/6qiBuaA.jpg",
"https://i.imgur.com/6HggZYv.jpg",
"https://i.imgur.com/nFMTh3S.jpg",
"https://i.imgur.com/jXtwfM4.jpg",
"https://i.imgur.com/zDIYY74.jpg",
"https://i.imgur.com/YYaLvtr.jpg",
"https://i.imgur.com/8dLO2ki.jpg",
"https://i.imgur.com/ohCgNIU.jpg",
"https://i.imgur.com/QzkgqUS.jpg",
"https://i.imgur.com/hFS7a29.jpg",
"https://i.imgur.com/3abgf1Z.jpg",
"https://i.imgur.com/qXmtwuz.jpg",
"https://i.imgur.com/XRgrhVB.jpg",
"https://i.imgur.com/H5VZljb.jpg",
"https://i.imgur.com/Sm466sR.jpg",
"https://i.imgur.com/ebEd5GG.jpg",
"https://i.imgur.com/9rttyRQ.jpg",
"https://i.imgur.com/nPNxx0M.jpg",
"https://i.imgur.com/RMCkNmm.jpg",
"https://i.imgur.com/GDe9Ta5.jpg",
"https://i.imgur.com/WtbFd2p.jpg",
"https://i.imgur.com/07J6Bww.jpg",
"https://i.imgur.com/1IbNXKK.jpg",
"https://i.imgur.com/1zOhiLf.jpg",
"https://i.imgur.com/brBuzvl.jpg",
"https://i.imgur.com/Yn3lcga.jpg",
"https://i.imgur.com/xbQzHfQ.jpg",
"https://i.imgur.com/Vv2khoo.jpg",
"https://i.imgur.com/Jw6kLm8.jpg",
"https://i.imgur.com/eM8AaTP.jpg",
"https://i.imgur.com/eYcCeiy.jpg",
"https://i.imgur.com/zfhFdiD.jpg",
"https://i.imgur.com/89xG0HU.jpg",
"https://i.imgur.com/Wbacbwd.jpg",
"https://i.imgur.com/xOOHdjc.jpg",
"https://i.imgur.com/irKkg5L.jpg",
"https://i.imgur.com/JVSdEaw.jpg",
"https://i.imgur.com/mg7JV3O.jpg",
"https://i.imgur.com/JiqHFHY.jpg",
"https://i.imgur.com/J2WaFwP.jpg",
"https://i.imgur.com/A0CdSEe.jpg",
"https://i.imgur.com/1Lvt3ad.jpg",
"https://i.imgur.com/h6pFTbO.jpg",
"https://i.imgur.com/1EN2JaL.jpg",
"https://i.imgur.com/obBp56f.jpg",
"https://i.imgur.com/hx6U0zA.jpg",
"https://i.imgur.com/bMxLpXI.jpg",
"https://i.imgur.com/WKWvsyr.jpg",
"https://i.imgur.com/AUrzuiG.jpg",
"https://i.imgur.com/n3pl50S.jpg",
"https://i.imgur.com/M1MGZjc.jpg",
"https://i.imgur.com/KgdRaHY.jpg",
"https://i.imgur.com/J0BzEhS.jpg",
"https://i.imgur.com/EjvQKGf.jpg",
"https://i.imgur.com/TaiZ9wt.jpg",
"https://i.imgur.com/Kd65t3L.jpg",
"https://i.imgur.com/EZKUwol.jpg",
"https://i.imgur.com/p8bmchu.jpg",
"https://i.imgur.com/GA7t06f.jpg",
"https://i.imgur.com/85pRryp.jpg",
"https://i.imgur.com/FhC4jXa.jpg",
     ];
     var callback = () => api.sendMessage({body:`Cosplay Photo\nImage number: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
