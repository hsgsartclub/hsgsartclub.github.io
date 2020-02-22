function loaded() {
    document.getElementsByClassName("home-page")[0].innerHTML = main;

    disable("logo-home-page")
    let title = document.getElementById('title-home-page')
    let des = document.getElementsByClassName('description')[0]

    title.className += " animate-fromTop"
    des.className += " animate-fromBottom"
    setTimeout(enable("logo-home-page"), 700)
}
function readyToMainPage() {
    disable("logo-home-page")
    setTimeout(enable("logo-home-page"), 1000)
    // let click = document.getElementById('click-logo')
    let des = document.getElementsByClassName('description')[0]
    let title = document.getElementById('title-home-page')
    let logo = document.getElementById('logo-home-page')
    let link = document.getElementsByClassName('link-to-main-page')[0]

    if (des.style.display == 'none') {
        des.className = "description be-vietnam-font animate-fromBottom";
        title.className = "title-home-page poppin-font animate-fromMiddle";
        link.style.display = 'none';
        // click.style.display = 'block';
        logo.className = "logo-blink";

        des.style.display = 'block'; 
        title.style.marginTop = '2vh'

        setTimeout(function () { }, 0);
    } else {
        des.className = "description be-vietnam-font animate-toBottom";
        title.className = "title-home-page poppin-font animate-toMiddle";
        // click.style.display = 'none';
        link.style.display = 'block';
        logo.className = "";

        setTimeout(function () { des.style.display = 'none'; title.style.marginTop = '10vh'; }, 1000)
    }
    
}

function navIconMobileTransform() {
    let x = document.getElementById("nav-icon-mobile")
    x.classList.toggle("nav-icon-mobile-change")
}

function navTitle() {
    navIconMobileTransform()
    let navTi = document.getElementsByClassName("nav-e")
    let nav = document.getElementsByClassName("nav")[0]
    let body = document.getElementById("body-main-page")
    let x = document.getElementById("nav-icon-mobile")
    let contact = document.getElementById("contact-icons")

    let navs = document.getElementsByClassName("nav")[0].children
    for (let i=4; i<navs.length+4; i++) {
        navTitleTrans(i, navTi)
    }

    function navTitleTrans(i, navTi) {
        if (navTi[i].style.display == "block") {
            navTi[i].className = "nav-e navTransOut";
            body.style.overflow = "scroll"
            x.classList = "nav-icon-mobile"
            setTimeout((function() {contact.style.display = "none"}), 300)
            setTimeout(function () { navTi[i].style.display = "none"; nav.style.display = "none" }, 300);
        } else {
            navTi[i].className = "nav-e navTransIn";
            navTi[i].style.display = "block";
            navTi[i].style.paddingLeft = "20vw";
            body.style.overflow = "hidden"
            nav.style.backgroundColor = "rgb(43, 43, 43)";
            nav.style.display = "flex";
            x.classList = "nav-icon-mobile  nav-icon-mobile-change"
            contact.style.display = "flex"
        }
    }
}

function openFooterNav() {
    let navF = document.getElementById("navF")
    navF.style.display = "block"
}

function chooseNav(id) {
    let title = document.getElementById("current-title");
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    const titles = {
        tin: "tin tức",
        hoa: "hoạt động",
        anh: "ảnh",
        san: "sản phẩm",
        vec: "về HAC"
    }
    switch (id) {
        case 'tin': {
            title.innerHTML = titles.tin;
            showComponents('content-main-page', components.tin)
                break
            }
        case 'hoa': {
        title.innerHTML = titles.hoa;
            showComponents('content-main-page', components.hoa)
            break
        }
        case 'vec': {
        title.innerHTML = titles.vec;
            showComponents('content-main-page', components.vec)
            break
        }
        case 'san': {
        title.innerHTML = titles.san;
            showComponents('content-main-page', components.san)
            break
        }
        case 'anh': {
        title.innerHTML = titles.anh;
        showComponents('content-main-page', components.anh)
            break
        }
    }
}

function onLoadMainPage() {
    let nav = document.getElementsByClassName("nav")[0]
    nav.style.display = "none"
}

function showComponents(idb, body) {
    let x = document.getElementById(idb)
    x.innerHTML = body
}

function onLoadveh() {
    console.log('run')
    let ctla = document.getElementById("ctla")
    ctla.className += " fadeIn"
}

function disable(id) {
    document.getElementById(id).style.pointerEvents = 'none'
}
function enable(id) {
    document.getElementById(id).style.pointerEvents = ''
}

components = {}

components.tin = `
<div>
<div class="heading-main-page montserrat-font">oops.</div>
    <div class="content-text-main-page be-vietnam-font">thông tin đang được hoàn thiện, hẹn các bạn sau nhé hê!</div>
    <div class="title-bar center"><span></span></div>
</div>
`

components.hoa = `
<div id="hoatdong">                
<div class="post-web">
    <div id="hdtn" class="heading-main-page montserrat-font">HOẠT ĐỘNG THƯỜNG NIÊN</div>
    <div id="title-img"><img src="./imghd/hac-logo.jpg" alt="" width="100%"></div>
    <div class="leading-text-main-page center be-vietnam-font">Những ngày mới thành lập, câu lạc bộ chỉ đơn thuần biểu diễn ở các sự kiện của nhà trường và thu sản phẩm âm nhạc đăng trên fanpage riêng. Dần dà mãi đến năm 2016, HAC trở nên bùng nổ mạnh mẽ với bước tiến táo bạo, nhiều hoạt động được tổ chức hơn nhằm chia sẻ đam mê nghệ thuật với mọi người xung quanh dưới các hình thức mới mẻ.</div>
</div>
<div class="title-bar center"><span></span></div>

<div class="post-web">
    <div class="heading-main-page-left montserrat-font">/ SHOWCASE</div>
    <div><img src="./imghd/aumilieu.jpg" alt="" width="100%"></div>
    <div class="content-text-main-page be-vietnam-font">Đây là chương trình nghệ thuật được tổ chức hàng năm với các tiết mục đến từ ban Nhạc và các nhóm nhạc khác mời khác, ngoài ra còn có sự hỗ trợ truyền thông và hình ảnh không hề nhỏ từ ban Mĩ Thuật cũng như ban Đối ngoại của HAC. </div>
</div>
<div class="title-bar center"><span></span></div>

<div class="post-web post-web-right">
    <div class="heading-main-page-left montserrat-font">/ TRAINING</div>
    <div><img src="./imghd/training.png" alt="" width="100%"></div>
    <div class="content-text-main-page be-vietnam-font">Khi là thành viên chính thức của ban Nhạc và ban Mĩ thuật HAC, các bạn sẽ có cơ hội được đi giao lưu tập luyện cùng những người bạn cùng đam mê trong ban của mình. </div>
<div class="title-bar center"><span></span></div>
</div>


<div class="flashlight-img"><img src="./imghd/online2.png" alt="" width="100%"></div>
<div class="post-web">
    <div class="heading-main-page-left montserrat-font">/ HOẠT ĐỘNG ONLINE</div>
    <div><img src="./imghd/online1.jpg" alt="" width="100%"></div>
    <div class="content-text-main-page be-vietnam-font">Trong các buổi training các thành viên sẽ cùng lên ý tưởng tạo ra những bộ ảnh nghệ thuật hay các sản phẩm âm nhạc để đăng lên facebook page.</div>
</div>
<div class="title-bar center"><span></span></div>

<div class="post-web post-web-right">
    <div class="heading-main-page-left montserrat-font">/ CÁC HOẠT ĐỘNG KHÁC</div>
    <div><img src="./imghd/duca.jpg" alt="" width="100%"></div>
    <div class="content-text-main-page be-vietnam-font">Ngoài ra trong năm học, ban Nhạc sẽ có một (vài) buổi cùng nhau đi du ca, ngồi quây quần đầm ấm bên khu phố đi bộ Hồ Gươm.<br>Ban Nhạc HAC cũng khẳng định được vị trí của mình khi nhận được lời mời đi diễn của nhiều dự án tổ chức của các bạn học sinh sinh viên.
    </div>
</div>
<div class="title-bar center"><span></span></div>

<div class="post-web">
    <div id="danb" class="heading-main-page montserrat-font">DỰ ÁN NỔI BẬT</div>
    <div id="danb-img"><img src="./imghd/collab.jpg" alt="" width="100%"></div>
    <div class="leading-text-main-page center be-vietnam-font">Không chỉ có những hoạt động thường niên, HAC cũng có những dự án collab với các câu lạc bộ THPT khác</div>
</div>

<div class="grid-prj-web">
    <div class="post-web post-web-right">
        <div class="heading-main-page-left montserrat-font hover-text">/ KHUNG EXHIBITION (2017)</div>
        <div class="hover-pic"><img src="./imghd/khung.png" alt="" width="100%"></div>
        <div class="content-text-main-page be-vietnam-font hover-text">Khung Exhibition là dự án nhằm đem lại một cái nhìn hoàn toàn mới lạ cho toàn xã hội về truyện tranh, được tổ chức bởi sự collab giữa ban Mĩ thuật HAC và PTC Media CSP.</div>
        <div class="title-bar center"><span></span></div>
    </div>
    <div class="post-web post-web-right">
        <div class="heading-main-page-left montserrat-font hover-text">/ PUER (2019)</div>
        <div class="hover-pic"><img src="./imghd/puer.jpg" alt="" width="100%"></div>
        <div class="content-text-main-page be-vietnam-font hover-text">“PUER” là dự án nghệ thuật thường niên hướng về tuổi trẻ; đánh dấu sự hợp tác giữa Việt Đức Drama Club, HSGS Art Club và Chu The Medley.</div>
        </div>
    </div>
</div>
`

components.vec = `
<div class="vehac">
<div class="ctla-leading-wrapper">
    <div id="imgvh1"><img src="./imgvh/hac-cover.png" width="100%"></div>
    <div class="grid-ctla">
    <div id="ctla" class="heading-main-page montserrat-font">CHÚNG TỚ<br>LÀ AI?</div>
    <div class="leading-text-main-page be-vietnam-font">năm 2010, HAC đã được thành lập với, là mái nhà chung dành riêng cho các bạn học sinh yêu thích <span>Âm Nhạc</span> và <span>Mĩ Thuật</span> của trường THPT Chuyên Khoa học tự nhiên</div>
    </div> 
</div>

<div class="ctla-md-li">
<div class="ctla-md">
    <div class="heading-main-page-right montserrat-font"><span>MỤC ĐÍCH?</span></div>
    <div class="content-text-main-page be-vietnam-font">HAC đã được thành lập với mục đích đưa nghệ thuật tới HSGSers nói riêng và tất cả những người có tình yêu với nghệ thuật nói chung</div>
</div>
<div>
    <div class="heading-main-page-left montserrat-font"><span>LỢI ÍCH?</span></div>
    <div class="content-text-main-page be-vietnam-font">1. Giao lưu, học hỏi</div>
    <div class="content-text-main-page be-vietnam-font">2. Làm quen bạn bè cùng chung đam mê</div>
    <div class="content-text-main-page be-vietnam-font">3. Cơ hội thể hiện bản thân</div>
</div>
</div>

<div class="ctla-core">
<div id="crown-pic" class="center" style="margin-bottom: -4vh"><img src="./imgvh/crown.png" width="35px"></div>
<div id="core-title" class="heading-main-page montserrat-font">CORE</div>
<div class="leading-text-main-page center be-vietnam-font">những con người đặc biệt của HAC.</div>
<!-- <div class="italic-leading center be-vietnam-font">(nhấn từng ảnh để xem chi tiết)</div> -->

<div class="heading-main-page-center montserrat-font"><span>2019</span></div>
    <div class="core-pics">
        <div></div>
        <div>
            <img src="imgvh/tich19.jpg" width="100%">
            <div class="center core-tags montserrat-font">tịch</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/pt191.jpg" width="100%">
            <div class="center core-tags montserrat-font">phó tịch</div>
        </div>
        <div></div>
        <div class="excess-box"></div>
        <div>
            <img src="imgvh/ns19.jpg" width="100%">
            <div class="center core-tags montserrat-font">nhân sự</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/mt19.jpg" width="100%">
            <div class="center core-tags montserrat-font">mĩ thuật</div>
        </div>
        <div></div>
        <div class="excess-box"></div>
        <div>
            <img src="imgvh/nhac19.jpg" width="100%">
            <div class="center core-tags montserrat-font">nhạc</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/dn19.jpg" width="100%">
            <div class="center core-tags montserrat-font">đối ngoại</div>
        </div>
        <div></div>
    </div>

    <div class="heading-main-page-center montserrat-font"><span>2018</span></div>
    <div class="core-pics">
        <div></div>
        <div>
            <img src="imgvh/tich18.jpg" width="100%">
            <div class="center core-tags montserrat-font">tịch</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/pt181.jpg" width="100%">
            <div class="center core-tags montserrat-font">phó tịch</div>
        </div>
        <div></div>
        <div class="excess-box"></div>
        <div>
            <img src="imgvh/pt182.jpg" width="100%">
            <div class="center core-tags montserrat-font">phó tịch</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/mt18.jpg" width="100%">
            <div class="center core-tags montserrat-font">mĩ thuật</div>
        </div>
        <div></div>
        <div class="excess-box"></div>
        <div>
            <img src="imgvh/nhac18.jpg" width="100%">
            <div class="center core-tags montserrat-font">nhạc</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/dn18.jpg" width="100%">
            <div class="center core-tags montserrat-font">đối ngoại</div>
        </div>
        <div></div>
    </div>

    <div class="heading-main-page-center montserrat-font"><span>2017</span></div>
    <div class="core-pics">
        <div></div>
        <div>
            <img src="imgvh/nhac171.jpg" width="100%">
            <div class="center core-tags montserrat-font">nhạc</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/mt17.jpg" width="100%">
            <div class="center core-tags montserrat-font">mĩ thuật</div>
        </div>
        <div></div>
        <div class="excess-box"></div>
        <div>
            <img src="imgvh/nhac172.jpg" width="100%">
            <div class="center core-tags montserrat-font">nhạc</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/dn17.jpg" width="100%">
            <div class="center core-tags montserrat-font">đối ngoại</div>
        </div>
        <div></div>
    </div>

    <div class="heading-main-page-center montserrat-font"><span>2016</span></div>
    <div class="core-pics">
        <div></div>
        <div>
            <img src="imgvh/tich16.jpg" width="100%">
            <div class="center core-tags montserrat-font">tịch</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/mt16.jpg" width="100%">
            <div class="center core-tags montserrat-font">mĩ thuật</div>
        </div>
        <div></div>
        <div class="excess-box"></div>
        <div>
            <img src="imgvh/core20191.jpg" width="100%">
            <div class="center core-tags montserrat-font">nhạc</div>
        </div>
        <div></div>
        <div>
            <img src="imgvh/core20191.jpg" width="100%">
            <div class="center core-tags montserrat-font">đối ngoại</div>
        </div>
        <div></div>
    </div>

    <div class="heading-main-page-center montserrat-font">updating...</div>
    </div>
</div>
`

components.san = `
<div>
<div id="spbn" class="heading-main-page-left montserrat-font">ban nhạc.</div>
<div>
    <a href="#spbv" class="link-products be-vietnam-font"> > xem sản phẩm ban vẽ</a>
</div>
    <div class="vid-product">
        <div class="caption be-vietnam-font">
        <span class="bold">Bài hát: Thắc mắc</span><br>
        Vocalist: Bình Dương, Hạnh Nguyên<br>
        Guitarist: Thái Trường Giang<br>
        Năm: 2019</br></br>
        </div>
        
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fvideos%2F528171731293341%2F&show_text=0&width=560" width="560" height="285" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>

    <div class="vid-product">
        <div class="caption be-vietnam-font">
        <span class="bold">Bài hát: Đâu cần một bài ca tình yêu</span><br>
        Vocalist : Trang My<br>
        Guitarist: Đăng Nguyễn<br>
        Pianist : Sinh Phúc<br>
        Cajon : Nguyễn Hoàng Minh<br>
        Năm: 2019</br></br>
        </div>
        
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fvideos%2F542364059653568%2F&show_text=0&width=560" width="560" height="285" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>

    <div class="vid-product">
        <div class="caption be-vietnam-font">
        <span class="bold">Bài hát: Pumpkin Song</span><br>
        Vocalist: Hạnh Nguyên<br>
        Năm: 2019</br></br>
        </div>
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fvideos%2F1510078399155885%2F&show_text=0&width=560" width="560" height="345" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>

    <div class="vid-product">
        <div class="caption be-vietnam-font">
        <span class="bold">Bài hát: Hongkong1</span><br>
        Vocalist: Huy Bùi<br>
        Rapper: Đình Quang<br>
        Guitarist: Sinh Huy<br>
        Năm: 2018</br></br>
        </div>
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fvideos%2F973345556388555%2F&show_text=0&width=560" width="560" height="285" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>

    <div class="vid-product"> 
        <div class="caption be-vietnam-font">
        <span class="bold">Bài hát: What are you doing new year's eve</span><br>
        Vocalist: Mai Thu Huyền<br>
        Guitarist: Nguyễn Mạnh Tiến<br>
        Năm: 2018</br></br>
        </div>
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fvideos%2F1549567091796597%2F&show_text=0&width=560" width="560" height="285" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>

    <div class="vid-product">
        <div class="caption be-vietnam-font">
        <span class="bold">Bài hát: Flashlight</span><br>
        Vocalist: Minh Hà<br>
        Guitarist: Lê Dũng<br>
        Quay phim: Ta Ha Phuong<br>
        Năm: 2017</br></br>
        </div>
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fvideos%2F1381214631965178%2F&show_text=0&width=560" width="560" height="285" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
    </div>
</br></br></br></br>    
<div id="spbv" class="heading-main-page-left montserrat-font">ban vẽ.</div>
<div>
    <a href="#spbn" class="link-products be-vietnam-font"> > xem sản phẩm ban nhạc</a>
</div>
<div class="spbv-grid">
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fphotos%2Fa.343470929072892%2F2462256900527607%2F%3Ftype%3D3&width=500" width="500" height="501" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fphotos%2Fa.343470929072892%2F2462256793860951%2F%3Ftype%3D3&width=500" width="500" height="501" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fphotos%2Fa.2450203968399567%2F2450207501732547%2F%3Ftype%3D3&width=500" width="500" height="501" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fphotos%2Fa.2450203968399567%2F2450206931732604%2F%3Ftype%3D3&width=500" width="500" height="503" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fphotos%2Fa.2450203968399567%2F2450207648399199%2F%3Ftype%3D3&width=500" width="500" height="501" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fphotos%2Fa.2450203968399567%2F2450205565066074%2F%3Ftype%3D3&width=500" width="500" height="503" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fphotos%2Fa.2450203968399567%2F2450207298399234%2F%3Ftype%3D3&width=500" width="500" height="501" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHSGSArtClub%2Fphotos%2Fa.2450203968399567%2F2450205851732712%2F%3Ftype%3D3&width=500" width="500" height="484" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
</div>
</div>
`

components.anh = `
<div class="gallery">
    <div id="g" class="gallery-title poppin-font">hac<br>gallery.</div>
    <p class="content-text-main-page be-vietnam-font instruction">hãy click vào slide ảnh bạn muốn xem & sử dụng phím mũi tên để xem qua các bức ảnh.</p>
<div class="heading-main-page-right be-vietnam-font" >first meeting (2019)/</div>
<div class="photos">
    <div><img src="./imgg/fm20191.jpg" height="170"></div>
    <div><img src="./imgg/fm20192.jpg" height="170"></div>
    <div><img src="./imgg/fm20193.jpg" height="170"></div>
    <div><img src="./imgg/fm20194.jpg" height="170"></div>
    <div><img src="./imgg/fm20195.jpg" height="170"></div>
    <div><img src="./imgg/fm20196.jpg" height="170"></div>                    
</div>

<div class="heading-main-page-right be-vietnam-font" >phỏng vấn (2019)/</div>
<div class="photos">
    <div><img src="./imgg/pv20191.jpg" height="170"></div>
    <div><img src="./imgg/pv20192.jpg" height="170"></div>
    <div><img src="./imgg/pv20193.jpg" height="170"></div>
    <div><img src="./imgg/pv20194.jpg" height="170"></div>
    <div><img src="./imgg/pv20195.jpg" height="170"></div>
    <div><img src="./imgg/pv20196.jpg" height="170"></div>                    
</div>

<div class="heading-main-page-right be-vietnam-font" >club fair (2019)/</div>
<div class="photos">
    <div><img src="./imgg/cf20191.jpg" height="170"></div>
    <div><img src="./imgg/cf20192.jpg" height="170"></div>
    <div><img src="./imgg/cf20193.jpg" height="170"></div>
    <div><img src="./imgg/cf20194.jpg" height="170"></div>
    <div><img src="./imgg/cf20195.jpg" height="170"></div>
    <div><img src="./imgg/cf20196.jpg" height="170"></div>                    
    <div><img src="./imgg/cf20197.jpg" height="170"></div>
    <div><img src="./imgg/cf20198.jpg" height="170"></div>                    
</div>

<div class="heading-main-page-right be-vietnam-font" >puer (2019)/</div>
<div class="photos">
    <div><img src="./imgg/puer1.jpg" height="170"></div>
    <div><img src="./imgg/puer2.jpg" height="170"></div>
    <div><img src="./imgg/puer3.jpg" height="170"></div>
    <div><img src="./imgg/puer4.jpg" height="170"></div>
    <div><img src="./imgg/puer5.jpg" height="170"></div>  
</div>

<div class="heading-main-page-right be-vietnam-font" >"au milieu" showcase/</div>
<div class="photos">
    <div><img src="./imgg/aumilieu1.jpg" height="170"></div>
    <div><img src="./imgg/aumilieu2.jpg" height="170"></div>    
    <div><img src="./imgg/aumilieu3.jpg" height="170"></div>    
    <div><img src="./imgg/aumilieu4.jpg" height="170"></div>    
    <div><img src="./imgg/aumilieu5.jpg" height="170"></div>    
    <div><img src="./imgg/aumilieu6.jpg" height="170"></div>    
    <div><img src="./imgg/aumilieu7.jpg" height="170"></div>    
    <div><img src="./imgg/aumilieu8.jpg" height="170"></div>    
    <div><img src="./imgg/aumilieu9.jpg" height="170"></div>    
</div>

</div>
`
let main = `
<div class="header-home-page">
    <div class="contact-icons">
        <span><a href="https://www.facebook.com/HSGSArtClub/">
        <img class="facebook-logo" src="./imghd/fb.png"></a></span>
        <span><a href="./index.html">
        <img class="hac-logo" src="./imghd/hac-nobg.png"></a></span>
        <span class="soundcloud-logo"><a href="https://soundcloud.com/hsgsartclub">
        <img src="./imghd/sc.png"></a></span>
    </div>
    <div class="quote-wrapper poppin-font">
        <div>Hate us cuz you ain't us</div>
    </div>
</div>
<div class="body-home-page">
    <p id="click-logo" class="be-vietnam-font logo-blink" style="border: none">nhấn vô logo nè</p>
    <div class="logo-home-page">
        <img id="logo-home-page" src="./imghd/hac-nobg.png" class="logo-blink" onclick="readyToMainPage()">
    </div>
    <div id="title-home-page" class="title-home-page poppin-font">hsgs art club</div>
    <div class="to-main-page-wrapper"><a href="./mainpage.html">
        <button class="link-to-main-page be-vietnam-font">đến trang chủ ></button></a>
    </div>
    <div class="description be-vietnam-font">Hsgs Art Club là câu lạc bộ nghệ thuật đầu tiên 
    và duy nhất trường THPT Chuyên Khoa học tự nhiên, 
    với mong muốn phá tan định kiến: "chuyên Tổng Hợp vô cùng khô khan."</div>
    <div class="home-page-cover">
        <div>
            <img src="./imghd/h2.png">
        </div>
    </div>

</div>
<div class="footer-home-page">
    <div class="creator-wrapper be-vietnam-font">created by truong ban Nhac hac 2017</div>
</div>
`