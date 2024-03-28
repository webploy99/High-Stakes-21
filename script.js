// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/high-stakes-21/id6480044233";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3f/04/69/3f046918-4d21-15ac-d9ae-b8688773d81a/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};
var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;

// ======== get img url ========
imgUrl ({
  img1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  img2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  img3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  img4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  img5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/67/ee/68/67ee6822-34da-667e-1c4a-be916c66e7c5/548f3bea-9d69-4f89-a545-b30c0089c4f2_ipad.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/f8/6d/a8/f86da84a-fb1e-407e-8151-7971702741ea/919edff3-deae-4bbc-a766-9931b85adf35_ipad-1.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8c/51/32/8c513244-93c8-9f8a-a1d5-4b0e07bcf29d/42072bd0-4e56-4a23-9d11-4e7742b279aa_ipad-2.png/434x0w.webp",
})

function imgUrl ({img1, img2, img3, img4, img5, appImg1, appImg2, appImg3}) {
  document.getElementById('img1').src = img1
  document.getElementById('img2').src = img2
  document.getElementById('img3').src = img3
  document.getElementById('img4').src = img4
  document.getElementById('img5').src = img5
  document.getElementById('pic1').src = appImg1
  document.getElementById('pic2').src = appImg2
  document.getElementById('pic3').src = appImg3
}