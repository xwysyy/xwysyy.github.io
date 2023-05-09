function obcboPic() {
    var backPicture = document.getElementById("page-header");
    if (backPicture.style.backgroundImage == "") {
        var background_urls = [
        'https://img1.imgtp.com/2023/03/20/E6dD0HKw.jpg',
        'https://img1.imgtp.com/2023/03/20/QfOtVQOf.jpg',
        'https://img1.imgtp.com/2023/03/20/TZlyFSUM.jpg',
        'https://img1.imgtp.com/2023/03/20/7HxhN9VP.jpg',
        'https://img1.imgtp.com/2023/03/20/2Wf9Efdh.jpg',
        'https://img1.imgtp.com/2023/03/20/R1ymadLP.jpg',
        'https://img1.imgtp.com/2023/03/20/MHSX4WAE.jpg',
        'https://img1.imgtp.com/2023/03/20/d5x6h0dL.jpg',
        'https://img1.imgtp.com/2023/03/20/nVXf0K8k.jpg',
        'https://img1.imgtp.com/2023/03/20/4y77kYrs.jpg',
        'https://img1.imgtp.com/2023/03/20/KqsOiRyj.jpg',
        'https://img1.imgtp.com/2023/03/20/kj23rsIT.jpg',
        'https://img1.imgtp.com/2023/03/20/ERPoXiLp.jpg',
        'https://img1.imgtp.com/2023/03/20/L1pMNGAr.jpg',
        'https://img1.imgtp.com/2023/03/20/GKZlM9oU.jpg',
        'https://img1.imgtp.com/2023/03/20/msEJwtKv.jpg',
        'https://img1.imgtp.com/2023/03/20/sI13r5do.jpg',
        'https://img1.imgtp.com/2023/03/20/GnAfEIGj.jpg',
        'https://img1.imgtp.com/2023/03/20/ECY7QFxh.jpg',
        'https://img1.imgtp.com/2023/03/20/ij2bhofk.jpg',
        'https://img1.imgtp.com/2023/03/20/e9b3hpQd.jpg',
        'https://img1.imgtp.com/2023/03/20/qAEDBp5I.jpg',
        'https://img1.imgtp.com/2023/03/20/gtl0h8aO.jpg',
        'https://img1.imgtp.com/2023/03/20/oU21VPLI.jpg',
        'https://img1.imgtp.com/2023/03/20/eLDHRP1S.jpg',
        'https://img1.imgtp.com/2023/03/20/j2vEcnfo.jpg',
        'https://img1.imgtp.com/2023/03/20/Lz3VAlMU.jpg',
        'https://img1.imgtp.com/2023/03/20/dJpank7Y.jpg',
        'https://img1.imgtp.com/2023/03/20/CjLT7t3X.jpg',
        'https://img1.imgtp.com/2023/03/20/hjD0R3Vu.jpg',
        'https://img1.imgtp.com/2023/03/20/Nucr6jWb.jpg',
        'https://img1.imgtp.com/2023/03/20/Sk21FDtT.jpg',
        'https://img1.imgtp.com/2023/03/20/x9wk3UYs.jpg',
        'https://img1.imgtp.com/2023/03/20/1WWc8EsB.jpg',
        'https://img1.imgtp.com/2023/03/20/1WWc8EsB.jpg',
        'https://img1.imgtp.com/2023/03/20/IPuAIWv8.jpg'
        ]
        var url = background_urls[Math.floor((Math.random() * background_urls.length))];
        var urlPhoto = ('background-image:url(' + url +') ');
        console.log("BackGround URL:" + url);
        backPicture.setAttribute("style", urlPhoto);
    }
}
