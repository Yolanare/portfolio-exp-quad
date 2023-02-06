import Swup from 'swup';
import SwupScrollPlugin from '@swup/scroll-plugin';
import Parallax from 'parallax-js';

import "./index.html"
import "./photo/index.html"
import "./video/index.html"
import "./contact/index.html"
import "./main.scss"

const swup = new Swup({
    animateHistoryBrowsing: true,
    plugins: [new SwupScrollPlugin({
        scrollFriction: 0.8,
        scrollAcceleration: 0.6,
    })]
});

var parallaxBG = new Parallax(document.getElementById('parallax-bg'), {
    invertX: false,
    invertY: false,
    frictionX: 0.2,
    frictionY: 0.2
});

var doc = document.documentElement,
    isMobile = undefined,
    svgNS = 'http://www.w3.org/2000/svg',
    vhtrpColor = {'accueil' : '#4B4B4B', 'photo' : '#F7F7F7', 'video' : '#0F0F0F', 'contact' : '#D2D2D2'};

function checkWinSize() { if(window.innerWidth > 727) { isMobile = false; } else { isMobile = true; }};
checkWinSize(); window.addEventListener('resize', checkWinSize);


//-- VIDEO PLAYLIST --
// thumbnails: "./assets/medias/video/thumbnails/"
var videoList = [
    {
        url : 'ej2sugsP67A',
        thumbnail : 'c418.jpg',
        title : 'Independent Accident - C418',
        date : "2013.01"
    },
    {
        url : '-pY__IYHYMc',
        thumbnail : 'nujabes.jpg',
        title : 'Nujabes - Luv (sic.) pt3',
        date : "2005.11"
    },
    {
        url : '2HE4xf-3qE0',
        thumbnail : 'haruka-nakamura.jpg',
        title : 'MELODICA (feat. ARAKI Shin)',
        date : "2013.09"
    },
];


parallaxBG.scalar(1, 2);
window.addEventListener('devicemotion', function(event) { // check if device has gyroscope
    if(event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma) {
        parallaxBG.scalar(5, 3);
        var pagebgAdd = getComputedStyle(doc).getPropertyValue('--pagebg-add'),
            parallaxBGgrp = document.querySelector('#parallax-bg'),
            parallaxBGgrpW = parallaxBGgrp.offsetWidth,
            parallaxBGgrpH = parallaxBGgrp.offsetHeight;
        parallaxBG.limit(parallaxBGgrpW * pagebgAdd / 100, parallaxBGgrpH * pagebgAdd / 100);
    }
});

function addClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(function(el) { el.classList.add(c); }); }
}
function removeClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(function(el) { el.classList.remove(c); }); }
}


function yAdShowTxt() {
    if(isMobile) {
        if((window.innerHeight + window.scrollY + 5) >= ((doc && doc.scrollHeight) || document.body.scrollHeight)) {
            document.querySelector('#y-ad a').classList.add('hover');
        } else {
            document.querySelector('#y-ad a').classList.remove('hover');
        }
    } else {
        document.querySelector('#y-ad a').classList.remove('hover');
    }
}

function init() {
    var navPos = document.querySelector('#nav-pos');

    var pathDir;
    function getPageID() {
        pathDir = ("/test" + window.location.pathname).replace("index.html", "").replace(/\/[^/]*$/, '').replace(/^\//, ''); // remove "index.thml", start and end "/"
        const pathDirMatchPage = pathDir.match(/([^\/]+$)/)[0]; // match if page dir after last "/"
        if(pathDir == "" || !["photo", "video", "contact"].includes(pathDirMatchPage)) { pathDir = 'accueil'; } // check if home
        else { pathDir = pathDirMatchPage; }
        return pathDir;
    }
    getPageID();

    if(pathDir == 'accueil' || pathDir == 'contact') { parallaxBG.enable(); } else { parallaxBG.disable(); }

    if (navPos.hasChildNodes() == false) { // NAVIGATION
        const urlBegin = window.location.href.replace(/\/(index.html|photo|video|contact)(.*)/, "").replace(/\/$/, "");

        navPos.innerHTML = `
            <div>
                <div id="navaccueil-content">
                    <a id="accueil" class="navlink" href="${urlBegin}">
                        <div>
                            <div id="wn-v" class="nav-name">QUAD-PAGE</div>
                            <div id="wn-h" class="nav-name">PORTFOLIO</div>
                        </div>
                    </a>
                    <div class="nav-separator"></div>
                </div>
                <nav>
                    <a id="photo" class="navlink navlink-p" href="${urlBegin}/photo/">
                        <div>
                            <div class="nav-sel"></div>
                            <div class="navbtns-content">
                                <div class="icon-container">
                                    <svg class="navicons" viewBox="0 0 32 32">
                                        <g>
                                            <g id="sun">
                                                <g>
                                                    <circle class="stroke" stroke-width="2.5" cx="10.7" cy="10.6" r="4.2"/>
                                                    <circle class="fill stroke" stroke-width="2.5" cx="25.6" cy="57" r="4.2"/>
                                                </g>
                                            </g>
                                            <g id="mountain">
                                                <polyline class="to-fill" points="8.3,29.5 19.1,18.8 29.8,29.5 8.3,29.5"/>
                                            </g>
                                            <polygon class="fill" points="7.1,31.7 4.6,29.2 17.8,16 20.3,16 30.6,26.3 28.1,28.7 19.1,19.7"/>

                                            <path id="frame" class="fill" d="M26.8,3L29,5.2v21.5L26.8,29H5.2L3,26.8V5.2L5.2,3H26.8 M28,0H4C2.4,1.6,1.6,2.4,0,4v24c1.6,1.6,2.4,2.4,4,4h24c1.6-1.6,2.4-2.4,4-4V4C30.4,2.4,29.6,1.6,28,0L28,0z"/>
                                        </g>
                                    </svg>
                                </div>
                                <span>PHOTO</span>
                            </div>
                        </div>
                    </a>
                    <a id="video" class="navlink navlink-p" href="${urlBegin}/video/">
                        <div>
                            <div class="nav-sel"></div>
                            <div class="navbtns-content">
                                <div class="icon-container">
                                    <svg class="navicons" viewBox="0 0 32 32">
                                    <g>
                                        <g>
                                            <polygon class="to-fill" points="9.6,8.5 9.6,23.5 22.6,16"/>
                                        </g>
                                        <path class="fill" d="M9.4,26.3l-2.1-1.2V6.9l2.1-1.2l15.7,9.1v2.4L9.4,26.3z M10.1,9.3v13.3L21.7,16L10.1,9.3z"/>

                                        <path id="frame" class="fill" d="M26.8,3L29,5.2v21.5L26.8,29H5.2L3,26.8V5.2L5.2,3H26.8 M28,0H4C2.4,1.6,1.6,2.4,0,4v24c1.6,1.6,2.4,2.4,4,4h24c1.6-1.6,2.4-2.4,4-4V4C30.4,2.4,29.6,1.6,28,0L28,0z"/>
                                    </g>
                                    </svg>
                                </div>
                                <span>VIDEO</span>
                            </div>
                        </div>
                    </a>
                    <a id="contact" class="navlink navlink-p" href="${urlBegin}/contact/">
                        <div>
                            <div class="nav-sel"></div>
                            <div class="navbtns-content">
                                <div class="icon-container">
                                    <svg class="navicons" viewBox="0 0 32 32">
                                    <g>
                                        <rect class="to-fill" x="7.7" y="9.2" width="16.5" height="12.8"/>
                                        <path class="fill" d="M8.2,10.5v11.1h15.5V10.5H8.2z M24.7,8l1.6,2v14H5.8V10l1.6-2H24.7z"/>
                                        <polygon class="fill to-trnsprnt" points="7.3,8 16,14.4 24.7,8 26.3,8 26.3,10 16.8,17 15.2,17 5.8,10 5.8,8"/>

                                        <path id="frame" class="fill" d="M26.8,3L29,5.2v21.5L26.8,29H5.2L3,26.8V5.2L5.2,3H26.8 M28,0H4C2.4,1.6,1.6,2.4,0,4v24c1.6,1.6,2.4,2.4,4,4h24c1.6-1.6,2.4-2.4,4-4V4C30.4,2.4,29.6,1.6,28,0L28,0z"/>
                                    </g>
                                    </svg>
                                </div>
                                <span>CONTACT</span>
                            </div>
                        </div>
                    </a>
                    <div id="nl-free-paddingtop"></div>
                </nav>
            </div>
        `;

        function navIconsTr(tr) {
            document.querySelectorAll('.navlink .navbtns-content svg.navicons > g *').forEach(function(ni) { ni.style.transition = tr; });
        }
        navIconsTr("none");

        const navIcons = document.querySelectorAll('.navlink .navbtns-content svg.navicons'),
              navDiv = document.querySelectorAll('a.navlink > div'),
              nav = document.querySelector('nav'),
              navAC = document.querySelector('#navaccueil-content'),
              navA = document.querySelector('.navlink#accueil'),
              navASep = document.querySelector('.nav-separator'),
              navLBG = document.querySelector('#nav-layerbg'),
              contentC = document.querySelector('#content-container');

        var mNavLBG = {
            heightMin : 'clamp(40px, 8vw, 45px)',
            heightMax : 'clamp(47.5px, 8vw, 55px)',
            marginTopMin : 11,
            marginBottomMin : 10,
            marginTopMax : 10,
            marginBottomMax : 10,
        };

        function contentMarginCheck() {
            if(isMobile == false) { contentC.style.marginLeft = navPos.offsetWidth + 'px';
            } else {
                var c = document.querySelector('#nl-free-paddingtop').offsetHeight + document.getElementById('navaccueil-content').offsetHeight + mNavLBG.marginTopMax + mNavLBG.marginBottomMax
                contentC.style.marginTop = 'calc(' + c + 'px + ' + mNavLBG.heightMax + ')';
            }
            mobileTopNav();
        };
        contentMarginCheck();
        window.addEventListener('resize', contentMarginCheck);
        window.addEventListener('resize', function() { setTimeout(contentMarginCheck, 200); });

        function applyBGColor(ID) {
            function pageBGClass(ID) {
                if(ID == 'accueil') { document.querySelector('.parallax-el').innerHTML = `<video id="page-bg" autoplay muted loop><source src="https://yolan.art/portfolio-exp-quad/dev/assets/medias/accueil/prllx/bg.mp4" type="video/mp4"></video>`;
                } else { document.querySelector('.parallax-el').innerHTML = `<div id="page-bg"></div>`; }
                var pageBG = document.querySelector('#page-bg');
                //var fg = document.querySelector('#fg');
                pageBG.className = '';
                pageBG.classList.add(ID);
                //fg.className = ''; fg.classList.add(ID);
            }
            pageBGClass(ID);
            doc.style.setProperty('--bgpage-f', vhtrpColor[ID]);
            accenttxtContentUpdate();
        }
        function accenttxtContentUpdate() {
            doc.style.setProperty('--accenttxt', getComputedStyle(doc).getPropertyValue('--accenttxt-nav'));
        }

        var toAccueil;
        function applyPageTheme(ID) {
            function navCurrentStyle(nlID) {
                var nl = document.querySelector('.navlink#' + nlID),
                    nlPath = '.navlink#' + nlID,
                    nlpPath = '.navlink-p#' + nlID,
                    nliPath = nlpPath + ' .navbtns-content svg.navicons';

                if(nl.classList.contains('navlink-p')) { // NORMAL
                    document.querySelector(nlpPath + ' .nav-sel').classList.add('nlsel-current');
                    nl.classList.add('nl-current');

                    document.querySelector(nlpPath + ' .navbtns-content .icon-container').classList.add('nlsvgc-current');
                    addClassAll(nliPath + ' g', 'nli-current');
                    addClassAll(nliPath + ' .to-fill', 'nli-current-fill');
                    addClassAll(nliPath + ' .to-trnsprnt', 'nli-current-trnsprnt');
                } else { // ACCUEIL
                    document.querySelector(nlPath + ' .nav-separator').classList.add('nl-current');
                }
            }
            if(ID == 'accueil') { toAccueil = true; } else { toAccueil = false; navCurrentStyle(ID); }
            doc.id = ID;
        }
        applyPageTheme(pathDir);
        applyBGColor(pathDir);
        doc.style.setProperty('--bgpage', vhtrpColor[pathDir]);

        function pagetrBull(event, histbr, nl) {
            if(histbr == true) { event = getPageID(); }
            if(nl == null) { nl = document.querySelector('.navlink#' + event); }

            var pageW = doc.clientWidth,
                pageH = doc.clientHeight,
                nlID = nl.id,
                nlNotPath = '.navlink-p:not(#' + nlID + ')',
                nliNotPath = nlNotPath + ' .navbtns-content svg.navicons';

            applyPageTheme(nlID);
            doc.style.setProperty('--bgpage', vhtrpColor[nlID]);

            removeClassAll(nlNotPath, 'nl-current');
            removeClassAll(nlNotPath + ' .nav-sel', 'nlsel-current');
            removeClassAll(nlNotPath + ' .navbtns-content .icon-container', 'nlsvgc-current');
            removeClassAll(nliNotPath + ' g', 'nli-current');
            removeClassAll(nliNotPath + ' .to-fill', 'nli-current-fill');
            removeClassAll(nliNotPath + ' .to-trnsprnt', 'nli-current-trnsprnt');

            // MOBILE
            if(isMobile == true) { swup.scrollTo(document.body, 0); }

            // VHTRP
            var newVHTRC = document.createElementNS(svgNS, 'svg'),
                newVHTRCc = document.createElementNS(svgNS, 'circle');
            newVHTRC.classList.add('vhtrp-circle'); newVHTRC.id = nlID;
            newVHTRC.setAttribute('viewBox', '0 0 ' + (pageW / 100) + ' ' + (pageH / 100));
            newVHTRC.style.fill = vhtrpColor[nlID];
            newVHTRC.appendChild(newVHTRCc);
            document.querySelector('#vhtrp').appendChild(newVHTRC);

            if(histbr == false) { // normal
                if(nl.mouseIsOver == true) {
                    var curX = event.clientX,
                        curY = event.clientY,
                        VHTRcPosX = (curX / 100),
                        VHTRcPosY = (curY / 100),
                        nlTLenW = pageW - curX,
                        nlTLenH = pageH - (pageH - curY);
                    if(curX > (pageW / 2)) { nlTLenW = pageW - (pageW - curX); }
                    if(curY < (pageH / 2)) { nlTLenH = pageH - curY; }
                }
            } else { // history browsing
                var nltxt = nl;
                if(nl.classList.contains('navlink-p')) { nltxt = document.querySelector('.navlink#' + event + ' .navbtns-content'); }
                var nlposX = nltxt.getBoundingClientRect().left + (nltxt.offsetWidth / 2),
                    nlposY = nltxt.getBoundingClientRect().top + (nltxt.offsetHeight / 2),
                    VHTRcPosX = (Math.round(nltxt.getBoundingClientRect().left + (nltxt.offsetWidth / 2)) / 100),
                    VHTRcPosY = (Math.round(nltxt.getBoundingClientRect().top + (nltxt.offsetHeight / 2)) / 100),
                    nlTLenW = pageW - (nltxt.getBoundingClientRect().left + (nltxt.offsetWidth / 2)),
                    nlTLenH = pageH - (pageH - nlposY);
                if(nlposX > (pageW / 2)) { nlTLenW = pageW - (pageW - nlposX); }
                if(nlposY < (pageH / 2)) { nlTLenH = pageH - (nltxt.getBoundingClientRect().top + (nltxt.offsetHeight / 2)); }
            }
            var nlCR = (Math.round(((nlTLenW)**2 + (nlTLenH)**2)**(1/2)) / 100) + 0.1;

            newVHTRCc.setAttribute('cx', VHTRcPosX)
            newVHTRCc.setAttribute('cy', VHTRcPosY)
            setTimeout(function() {
                newVHTRCc.style.transition = 'r 900ms cubic-bezier(0.5, 0.7, 0, 1)';
                newVHTRCc.setAttribute('r', nlCR)
            }, 10);
            setTimeout(function() {
                accenttxtContentUpdate();
            }, 400);
            setTimeout(function() {
                applyBGColor(nlID);
            }, 600);
            setTimeout(function() {
                newVHTRC.style.transition = 'opacity 600ms ease';
                newVHTRC.style.opacity = '0';
                setTimeout(function() {
                    newVHTRC.remove();
                }, 600);
            }, 900);
        }
        document.querySelectorAll('.navlink').forEach(function(nl) {
            nl.mouseIsOver = false;
            nl.onmouseover = function() { this.mouseIsOver = true; };
            nl.onmouseout = function() { this.mouseIsOver = false; };

            nl.addEventListener('click', function(event) { pagetrBull(event, false, nl); });
        });
        swup.on('popState', function() { pagetrBull(null, true, null); });

        function mobileTopNavA_reset() {
            navA.style.transform = null;
            navASep.style.transform = null;
            navAC.style.opacity = null;
        }
        function mobileTopNavN_reset() {
            navDiv.forEach(function(ni) { ni.style.margin = null; });
            navIcons.forEach(function(ni) { ni.style.height = null; });
        }

        var mNavLockState;
        function mobileTopNav() {
            if(isMobile == true) {
                const topnavH = document.querySelector('#nl-free-paddingtop').offsetHeight + document.getElementById('navaccueil-content').offsetHeight + 10;
                if(window.scrollY > topnavH) { // MOBILE free
                    if(mNavLockState != true) {
                        mNavLockState = true;
                        navPos.style.top = -(topnavH + 10) + 'px';
                        navDiv.forEach(function(ni) { ni.style.margin = mNavLBG.marginTopMin + 'px clamp(15px, 5vw, 30px) ' + mNavLBG.marginBottomMin + 'px'; });
                        navIcons.forEach(function(ni) { ni.style.height = mNavLBG.heightMin; });
                        mobileTopNavA_reset();
                        navLBG.style.opacity = '1';
                    }
                } else { // MOBILE lock
                    mNavLockState = false;
                    var scrollPercent = window.scrollY / topnavH;
                    navA.style.transform = 'translateY(-' + (scrollPercent / 0.275) + 'vw)';
                    navASep.style.transform = 'translateY(-' + (scrollPercent / 0.75) + 'vw)';
                    navAC.style.opacity = 1.3 - (scrollPercent * 1.4);
                    navPos.style.top = -window.scrollY + 'px';
                    mobileTopNavN_reset();
                    navLBG.style.opacity = '0';
                }
            } else { // PC
                mNavLockState = false;
                navA.style.transform = null;
                navPos.style.top = null;
                mobileTopNavA_reset();
                mobileTopNavN_reset();
            }
        }

        navLBG.style.height = 'calc(' + mNavLBG.heightMin + ' + ' + mNavLBG.marginTopMin + 'px + ' + mNavLBG.marginBottomMin + 'px)';

        mobileTopNav();
        window.addEventListener('scroll', mobileTopNav);
        window.addEventListener('resize', function() { setTimeout(mobileTopNav, 500); });

        navIconsTr(null);
    }

    if(pathDir == 'photo') {
        var pViewer = document.querySelector('#photo-viewer');
        if(!pViewer) {
            var pViewer = document.createElement('div');
            pViewer.id = "photo-viewer";
            document.querySelector('#container').appendChild(pViewer);
        }


        function viewPic(ev) {
            const thumbSRC = this.firstChild.getAttribute('src');

            var content = ``, picName;
            if (!thumbSRC) { // no img
                content = `<div class="picv-img empty"></div>`;
            } else {
                picName = thumbSRC.substr(thumbSRC.lastIndexOf('/') + 1);

                content = `<img class="picv-img" src="https://yolan.art/portfolio-exp-quad/dev/assets/medias/photo/thumbnails/${picName}">`;
            }
            this.classList.add("focus");

            var picVC = document.createElement('div');
            picVC.classList.add("picv-container");
            document.querySelector('#photo-viewer').appendChild(picVC);

            picVC.innerHTML = `
                <div class="bgblocker"></div>
                <div class="picv-bg"></div>
                <div class="picv-img-c">${content}</div>
                <div class="pv-curclose">
                    <svg viewBox="0 0 32 32">
                        <line x1="26.3" y1="26.3" x2="5.7" y2="5.7"/>
                        <line x1="5.7" y1="26.3" x2="26.3" y2="5.7"/>
                    </svg>
                </div>
            `

            var picVbg = picVC.querySelector('.picv-bg'),
                picVimgC = picVC.querySelector('.picv-img-c'),
                picVimg = picVC.querySelector('.picv-img'),
                thumbTop = this.getBoundingClientRect().top,
                thumbLeft = this.getBoundingClientRect().left,
                thumbW = this.offsetWidth,
                thumbH = this.offsetHeight;

            // Cursor Close on BG hover
            function moveCurClose(event) {
                var cursorX = event.clientX,
                    cursorY = event.clientY;
                const iconClose = picVC.querySelector('.pv-curclose');
                iconClose.style.top = cursorY + 'px';
                iconClose.style.left = cursorX + 'px';
            }
            function showCurClose(picVC) {
                picVC.querySelector('.pv-curclose').classList.add("hover");
            }
            function hideCurClose(picVC) {
                picVC.querySelector('.pv-curclose').classList.remove("hover");
            }
            moveCurClose(ev);
            picVbg.addEventListener('mousemove', moveCurClose);
            picVbg.addEventListener('mouseover', function() { showCurClose(picVC); });
            picVbg.addEventListener('mouseout', function() { hideCurClose(picVC); });

            picVC.addEventListener('mousemove', moveCurClose);
            setTimeout(function() { picVC.removeEventListener('mousemove', moveCurClose); }, 800);

            if (thumbSRC != null) { // img
                // Load Higher Res Picture (https://stackoverflow.com/a/54123157)
                function loadHighResImage(elem, highResUrl) {
                    let image = new Image();
                    image.addEventListener('load', () => elem.src = highResUrl);
                    image.src = highResUrl;
                };
                picVimg.style.backgroundImage = 'url("https://yolan.art/portfolio-exp-quad/dev/assets/medias/photo/thumbnails/' + picName + '")';
                loadHighResImage(picVimg, 'https://yolan.art/portfolio-exp-quad/dev/assets/medias/photo/high/' + picName);
            }

            picVC.querySelectorAll('div[class^="picv-"]').forEach(function(p) {
                p.style.top = (thumbTop - 2) + 'px';
                p.style.left = (thumbLeft - 2) + 'px';
                p.style.width = (thumbW + 2) + 'px';
                p.style.height = (thumbH + 2) + 'px';
            });

            if(thumbW * (window.innerHeight / thumbH) >  window.innerWidth) {
                picVimgC.style.flexDirection = "row";
                picVimg.style.width = "100%";
            } else {
                picVimgC.style.flexDirection = "column";
                picVimg.style.height = "100%";
            }

            function picVScaleUpAnim() {
                picVC.classList.add('full');
            }
            setTimeout(picVScaleUpAnim, 25);

            // Quit Photo Viewer
            function QuitPV(picVC,t) {
                window.removeEventListener('scroll', function() { QuitPV(picVC,"s"); });
                picVC.classList.remove('full');
                picVC.style.pointerEvents = 'none';
                if(t == "c") { picVC.querySelector('.pv-curclose svg').classList.add("quit"); }
                hideCurClose(picVC);
                setTimeout(function() {
                    document.querySelectorAll('.pic-tile.focus').forEach(function(pt) { pt.classList.remove("focus"); });
                }, 425);
                setTimeout(function() {
                    window.removeEventListener('scroll', QuitPVScroll);
                    picVC.remove();
                }, 1000);
            }
            function QuitPVScroll() {
                picVC.querySelectorAll('div[class^="picv-"]').forEach(function(p) {
                    p.style.transform = 'translateY(' + (initScrollY - window.scrollY) + 'px)';
                });
            }
            picVbg.addEventListener('click', function() { QuitPV(picVC,"c"); });
            window.addEventListener('scroll', function() { QuitPV(picVC,"s"); });
            var initScrollY = window.scrollY;
            window.addEventListener('scroll', QuitPVScroll);
        }

        document.querySelectorAll('.pic-tile').forEach(function(pic) {
            pic.addEventListener('click', viewPic);
        });

    } else{
        var pViewer = document.querySelector('#photo-viewer');
        if(pViewer) { pViewer.remove(); }
    }

    if(pathDir == 'video') {
        videoList.forEach(function(vid) {
            var vidTile = document.createElement('div');
            vidTile.classList.add("vid-tile");
            vidTile.innerHTML = `
                <div class="anim-fill"></div>
                <div class="anim-flash"></div>
                <div class="vid-thumb-c"><img class="vid-thumbnail" src="https://yolan.art/portfolio-exp-quad/dev/assets/medias/video/thumbnails/` + vid.thumbnail + `"><div class="blocker"></div></div>
                <div class="vid-title"><span>` + vid.title + `</span></div>
            `
            document.querySelector('.video-list').appendChild(vidTile);


            function vidSelect(d) {
                document.querySelectorAll('.vid-tile').forEach(function(v) { v.classList.remove("focus"); });
                vidTile.classList.add("focus");

                document.querySelector('#player').innerHTML = `
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/` + vid.url + `?rel=0&color=white" frameborder="0" allowfullscreen></iframe>
                `
                document.querySelectorAll('.mvid-txt').forEach(function(t) { t.classList.add("quit"); });
                setTimeout(function() {
                    document.querySelector('.mvid-text-d').innerHTML = `
                        <div class="mvid-txt mvid-date">` + vid.date + `&nbsp;</div>
                    `;
                    document.querySelector('.mvid-text-t').innerHTML = `
                        <div class="mvid-txt mvid-title">` + vid.title + `</div>
                    `;
                }, d);
            }
            if(vidTile == document.querySelector('.video-list').firstChild) { vidSelect(0); };
            vidTile.addEventListener('click', function() {
                if(this.classList.contains('focus') != true) {
                    vidSelect(550);
                    setTimeout(function() { swup.scrollTo(document.body, 0); }, 900);
                }
            });
        });
    }

    if(pathDir == 'contact') {
        // FORM FOCUS (https://github.com/sefyudem/Contact-Form-HTML-CSS)
        const inputs = document.querySelectorAll('form input, form textarea');
        function inputFocus(input) {
          let parent = input.parentNode;
          parent.classList.add('focus');
          parent.querySelector('.line').classList.add('focus');
          input.classList.remove('notfocus');
          input.classList.remove('fieldError');
        }
        function inputFocusBlur() {
            let parent = this.parentNode;
            if(this.value == '') {
                parent.classList.remove('focus');
                parent.querySelector('.line').classList.remove('focus');
                this.classList.add('notfocus');
            }
        }
        inputs.forEach((input) => {
            input.addEventListener('focus', function() { inputFocus(input) });
            input.addEventListener('blur', inputFocusBlur);
            if(input.value != '') { inputFocus(input); }
        });

        // FORM VALIDATION (https://www.codebrainer.com/blog/contact-form-in-javascript)
        var cmFields = {};
        cmFields.name = document.querySelector('form #name');
        cmFields.email = document.querySelector('form #email');
        cmFields.msg = document.querySelector('form #msg');

        function isValid() {
            function isNotEmpty(value) {
                if (value == null || typeof value == 'undefined') return false;
                return (value.length > 0);
            }
            function isEmail(value) {
                let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
                return regex.test(String(value).toLowerCase());
            }
            function fieldValidation(field, validationFunction) {
                if (field == null) return false;
                let isFieldValid = validationFunction(field.value)
                if (!isFieldValid) {
                    field.classList.add('fieldError');
                } else {
                    field.classList.remove('fieldError');
                }
                return isFieldValid;
            }
            var valid = true;
            valid &= fieldValidation(cmFields.name, isNotEmpty);
            valid &= fieldValidation(cmFields.email, isEmail);
            valid &= fieldValidation(cmFields.msg, isNotEmpty);
            return valid;
        }
        document.querySelector('form button#send').addEventListener('click', function() {
            if(isValid()) {
                // MAILTO (https://stackoverflow.com/a/31664656)
                var body;
                body =  document.location.href + '\n';
                body += '\nEmail adress: ' + cmFields.email.value;
                body +=  '\nName: ' + cmFields.name.value;
                body += '\nMessage:\n' + cmFields.msg.value;
                window.location.href = 'mailto:example@example.com?body=' + encodeURIComponent(body) + '&subject=Contact - ' + cmFields.name.value;
            }
        });

        // Y-AD
        window.addEventListener('scroll', yAdShowTxt);
    } else {
        window.removeEventListener('scroll', yAdShowTxt);
    }
}
init();
swup.on('contentReplaced', init);
