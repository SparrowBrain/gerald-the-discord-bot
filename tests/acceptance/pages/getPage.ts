import { NewsItem } from './types';
const formatToZeroTimeZone = (date:Date):string => {
  return date.toISOString().split('.')[0] + '+00:00';
};

const formatToUTC = (date:Date): string => {
  return date.toISOString().split('T')[0] + ' ' + date.toISOString().split('T')[1].split('.')[0] + ' UTC';
};

const formatNewsItem = ({ title, url, date }:NewsItem):string => {
  return `
  <div class="hoverable-box item news-item news-list-item news-cat-freebie active initialised-trimNewsLead">
  <a class="full-link" href="${url}"></a>    <div class="news-image-wrapper">
    <img srcset="https://img.gg.deals/60/aa/453a79b4ee59a52dbd71755e1bdf1ed05632_352cr184.jpg 352w,https://img.gg.deals/60/aa/453a79b4ee59a52dbd71755e1bdf1ed05632_704cr372.jpg 704w,https://img.gg.deals/60/aa/453a79b4ee59a52dbd71755e1bdf1ed05632_162cr87.jpg 162w,https://img.gg.deals/60/aa/453a79b4ee59a52dbd71755e1bdf1ed05632_324cr174.jpg 324w,https://img.gg.deals/60/aa/453a79b4ee59a52dbd71755e1bdf1ed05632_300cr156.jpg 300w,https://img.gg.deals/60/aa/453a79b4ee59a52dbd71755e1bdf1ed05632_600cr312.jpg 600w,https://img.gg.deals/60/aa/453a79b4ee59a52dbd71755e1bdf1ed05632_259cr135.jpg 259w,https://img.gg.deals/60/aa/453a79b4ee59a52dbd71755e1bdf1ed05632_518cr270.jpg 518w" sizes="(min-width: 1030px) 352px, 108px" loading="lazy" src="https://img.gg.deals/60/aa/453a79b4ee59a52dbd71755e1bdf1ed05632_352cr184.jpg" alt="${title}" width="352" height="184">  </div>
  <div class="news-info-wrapper">
    <div class="news-badges labels-container labels-single-line">
      <span class="date no-label label">Added <time class="timeago-short tippy-initialized initialised-timeagoShort" datetime="${formatToZeroTimeZone(date)}" data-tippy-theme="translucent" data-tippy-arrow="false" data-tippy-followcursor="1" data-tippy-animatefill="false" data-tippy-duration="0" data-tippy="" data-original-title="${formatToUTC(date)}" data-tid="87">10h ago</time></span>      <a class="label category-freebie" href="/news/freebies/">Freebies</a>          </div>
    <div class="news-title-wrapper">
      <h3 class="news-title"><a data-tippy-theme="translucent" data-tippy-arrow="false" data-tippy-followcursor="1" data-tippy-animatefill="false" data-tippy-duration="0" href="${url}" class="tippy-initialized" data-tippy="" data-original-title="${title}" style="overflow-wrap: break-word;">${title}</a></h3>    </div>
    <div class="news-lead" style="overflow-wrap: break-word;">
      This is a test!</div>
  </div>
  <div class="news-read-more">
    <a href="${url}" class="widget-link-more widget-link-more-ext">Read more</a>
  </div>
</div>
`;
};

const formatNewsItems = (items:NewsItem[]):string => {
  return items.map(item => formatNewsItem(item)).join('');
};

const getPage = (newsItems:NewsItem[]) :string => {
  const formattedNews = formatNewsItems(newsItems);

  return `<html class="js" lang="en-US">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="csrf-param" content="gg_csrf">
  <meta name="csrf-token"
    content="MVg2S1hvMm14NXdDYUVUNWllUThpQ0tzQkdXcUdDMlSzAtMCcmQv5zvC5Ud1V77S9VxGXSTfd0zql0noFdyg2A==">
  <meta property="og:title" content="Game freebies - free game keys and game giveaways">
  <meta name="twitter:title" content="Game freebies - free game keys and game giveaways">
  <meta name="description"
    content="Keep track of free pc games with GG.deals! View currently available free Steam keys, free Uplay keys and Epic Games giveaways. All game freebies gathered in one place.">
  <meta property="og:description"
    content="Keep track of free pc games with GG.deals! View currently available free Steam keys, free Uplay keys and Epic Games giveaways. All game freebies gathered in one place.">
  <meta name="twitter:description"
    content="Keep track of free pc games with GG.deals! View currently available free Steam keys, free Uplay keys and Epic Games giveaways. All game freebies gathered in one place.">
  <meta property="og:image"
    content="https://img.gg.deals/9c/57/e5b4729a12a9558f8f0f162d87151cde5c32_1920xt1080_Q100.png">
  <meta property="og:image:height" content="630">
  <meta property="og:image:width" content="1200">
  <meta name="twitter:image:src"
    content="https://img.gg.deals/9c/57/e5b4729a12a9558f8f0f162d87151cde5c32_1920xt1080_Q100.png">
  <meta name="keywords"
    content="game deals, digital distribution, giveaway, Steam, pc game, cheap game, steam summer sale, steam winter sale, price tracker, price comparison, Uplay, Origin">
  <meta name="apple-mobile-web-app-title" content="GG.deals">
  <meta name="application-name" content="GG.deals">
  <meta name="theme-color" content="#00191f">
  <meta property="og:url" content="https://gg.deals/news/freebies/">
  <meta name="twitter:domain" content="GG.deals">
  <meta name="twitter:site" content="@GGdeals">
  <meta name="twitter:card" content="summary_large_image">
  <meta property="fb:app_id" content="919367574751107">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="GG.deals">
  <link sizes="180x180" rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link color="#00191f" rel="mask-icon" href="/safari-pinned-tab.svg">
  <link sizes="48x48" rel="icon" type="image/png" href="/favicon-48x48.png">
  <link sizes="32x32" rel="icon" type="image/png" href="/favicon-32x32.png">
  <link sizes="16x16" rel="icon" type="image/png" href="/favicon-16x16.png">
  <link rel="manifest" href="/manifest.json">
  <link hreflang="en-AU" rel="alternate" href="https://gg.deals/au/news/freebies/">
  <link hreflang="nl-BE" rel="alternate" href="https://gg.deals/be/news/freebies/">
  <link hreflang="pt-BR" rel="alternate" href="https://gg.deals/br/news/freebies/">
  <link hreflang="en-CA" rel="alternate" href="https://gg.deals/ca/news/freebies/">
  <link hreflang="de-CH" rel="alternate" href="https://gg.deals/ch/news/freebies/">
  <link hreflang="de-DE" rel="alternate" href="https://gg.deals/de/news/freebies/">
  <link hreflang="da-DK" rel="alternate" href="https://gg.deals/dk/news/freebies/">
  <link hreflang="es-ES" rel="alternate" href="https://gg.deals/es/news/freebies/">
  <link hreflang="en-EU" rel="alternate" href="https://gg.deals/eu/news/freebies/">
  <link hreflang="fi-FI" rel="alternate" href="https://gg.deals/fi/news/freebies/">
  <link hreflang="fr-FR" rel="alternate" href="https://gg.deals/fr/news/freebies/">
  <link hreflang="en-GB" rel="alternate" href="https://gg.deals/gb/news/freebies/">
  <link hreflang="en-IE" rel="alternate" href="https://gg.deals/ie/news/freebies/">
  <link hreflang="it-IT" rel="alternate" href="https://gg.deals/it/news/freebies/">
  <link hreflang="nl-NL" rel="alternate" href="https://gg.deals/nl/news/freebies/">
  <link hreflang="no-NO" rel="alternate" href="https://gg.deals/no/news/freebies/">
  <link hreflang="pl-PL" rel="alternate" href="https://gg.deals/pl/news/freebies/">
  <link hreflang="ru-RU" rel="alternate" href="https://gg.deals/ru/news/freebies/">
  <link hreflang="sv-SE" rel="alternate" href="https://gg.deals/se/news/freebies/">
  <link hreflang="en-US" rel="alternate" href="https://gg.deals/us/news/freebies/">
  <link hreflang="x-default" rel="alternate" href="https://gg.deals/news/freebies/">
  <link rel="canonical" href="https://gg.deals/news/freebies/">
  <link rel="alternate" type="application/rss+xml" href="https://gg.deals/us/news/feed/" class="tippy-initialized"
    data-tippy="" data-original-title="GG.deals - News">
  <title class="pjax-inner-replace">Game freebies - free game keys and game giveaways</title>
  <link rel="stylesheet" href="/styles/main.css?v=4f28f4ad">

  <!-- Google Tag Manager -->
  <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
  <script type="text/javascript" async=""
    src="https://www.google-analytics.com/gtm/js?id=OPT-WGJGTCP&amp;t=gtm10&amp;cid=1741420543.1637005658"></script>
  <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
  <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-5LMCTMZ"></script>
  <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start': new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-5LMCTMZ');
  </script>
  <!-- End Google Tag Manager -->

  <script>
    (function (h, o, t, j, a, r) {
      h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
      h._hjSettings = { hjid: 994870, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script'); r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  </script>
  <script async="" src="https://static.hotjar.com/c/hotjar-994870.js?sv=6"></script>

  <style></style>
  <script type="text/javascript" data-name="TokenSigning">(function () {
      // Promises
      var _eid_promises = {};
      // Turn the incoming message from extension
      // into pending Promise resolving
      window.addEventListener("message", function (event) {
        if (event.source !== window) return;
        if (event.data.src && (event.data.src === "background.js")) {
          console.log("Page received: ");
          console.log(event.data);
          // Get the promise
          if (event.data.nonce) {
            var p = _eid_promises[event.data.nonce];
            // resolve
            if (event.data.result === "ok") {
              if (event.data.signature !== undefined) {
                p.resolve({ hex: event.data.signature });
              } else if (event.data.version !== undefined) {
                p.resolve(event.data.extension + "/" + event.data.version);
              } else if (event.data.cert !== undefined) {
                p.resolve({ hex: event.data.cert });
              } else {
                console.log("No idea how to handle message");
                console.log(event.data);
              }
            } else {
              // reject
              p.reject(new Error(event.data.result));
            }
            delete _eid_promises[event.data.nonce];
          } else {
            console.log("No nonce in event msg");
          }
        }
      }, false);

      window.TokenSigning = function () {
        function nonce() {
          var val = "";
          var hex = "abcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < 16; i++) val += hex.charAt(Math.floor(Math.random() * hex.length));
          return val;
        }

        function messagePromise(msg) {
          return new Promise(function (resolve, reject) {
            // amend with necessary metadata
            msg["nonce"] = nonce();
            msg["src"] = "page.js";
            // send message

            // and store promise callbacks
            _eid_promises[msg.nonce] = {
              resolve: resolve,
              reject: reject
            };
          });
        }
        this.getCertificate = function (options) {
          var msg = { type: "CERT", lang: options.lang, filter: options.filter };
          console.log("getCertificate()");
          return messagePromise(msg);
        };
        this.sign = function (cert, hash, options) {
          var msg = { type: "SIGN", cert: cert.hex, hash: hash.hex, hashtype: hash.type, lang: options.lang, info: options.info };
          console.log("sign()");
          return messagePromise(msg);
        };
        this.getVersion = function () {
          console.log("getVersion()");
          return messagePromise({
            type: "VERSION"
          });
        };
      };
    })();</script>
  <script async="" src="https://script.hotjar.com/modules.95d56a8fe70e88a7dcd9.js" charset="utf-8"></script>
  <style type="text/css">
    iframe#_hjRemoteVarsFrame {
      display: none !important;
      width: 1px !important;
      height: 1px !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
  </style>
</head>

<body class="news-list-page presets-view initialised-pinNewsSideBoxes initialised-pinNewsSideBoxes-onscroll">
  <div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc"
    class="cc-window cc-banner cc-type-info cc-theme-classic cc-bottom cc-color-override-530831885 " style="">
    <!--googleoff: all--><span id="cookieconsent:desc" class="cc-message">By using the website, you accept our
      privacy policy (<a aria-label="read privacy policy" role="button" tabindex="0" class="cc-link"
        href="/privacy/">read more</a>).</span>
    <div class="cc-compliance"><a aria-label="dismiss cookie message" role="button" tabindex="0"
        class="cc-btn cc-dismiss">Got it!</a></div>
    <!--googleon: all-->
  </div>
  <div class="main-content">

    <div class="settings-menu" id="menu-settings" data-nosnippet="true">
      <div class="container">
        <div class="settings-menu-wrapper">
          <div class="settings-menu-col">

            <div class="dropdown dropdown-toggle settings-menu-dropdown" id="settings-menu-keyshops">
              <button class="settings-menu-select-action" data-toggle="dropdown" aria-expanded="false">
                <span class="settings-menu-select-action-label">Keyshops:</span>
                <span class="settings-menu-select-action-value">
                  Enabled </span>
              </button>

              <ul class="dropdown-menu settings-menu-select-list">
                <li class="settings-menu-select-option">
                  <a class="settings-menu-select-option-link" rel="nofollow"
                    href="/settings/keyshopVisible/?visible=1&amp;return=%2Fnews%2Ffreebies%2F&amp;token=gdX8srpX">Enable</a>
                </li>
                <li class="settings-menu-select-option">
                  <a class="settings-menu-select-option-link" rel="nofollow"
                    href="/settings/keyshopVisible/?visible=0&amp;return=%2Fnews%2Ffreebies%2F&amp;token=gdX8srpX">Disable</a>
                </li>
                <li class="settings-menu-select-option settings-menu-select-option-separator">
                  <a class="settings-menu-select-option-link" rel="noopener" target="_blank"
                    href="https://forum.gg.deals/d/492-keyshop-integration-on-gg-deals-process-explained"><svg
                      pointer-events="all" class="svg-icon svg-icon-info_circle">
                      <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-info_circle">
                      </use>
                    </svg> More info</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="settings-menu-col">
            <div class="dropdown dropdown-toggle settings-menu-dropdown" id="settings-menu-region">
              <button class="settings-menu-select-action" data-toggle="dropdown" aria-expanded="false">
                <span class="settings-menu-select-action-label">Region:</span>
                <span class="settings-menu-select-action-value">
                  <span class="region-icon region-icon-round"><span
                      class="flag-regular-icon flag-regular-icon-us"></span></span> United States
                </span>
              </button>

              <ul class="dropdown-menu settings-menu-select-list">
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/au/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-au"></span></span>
                    Australia</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/be/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-be"></span></span>
                    Belgium</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/br/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-br"></span></span>
                    Brazil</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/ca/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-ca"></span></span>
                    Canada</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/dk/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-dk"></span></span>
                    Denmark</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/eu/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-eu"></span></span>
                    Europe</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/fi/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-fi"></span></span>
                    Finland</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/fr/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-fr"></span></span>
                    France</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/de/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-de"></span></span>
                    Germany</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/ie/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-ie"></span></span>
                    Ireland</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/it/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-it"></span></span>
                    Italy</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/nl/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-nl"></span></span>
                    Netherlands</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/no/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-no"></span></span>
                    Norway</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/pl/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-pl"></span></span>
                    Poland</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/ru/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-ru"></span></span>
                    Russia</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/es/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-es"></span></span>
                    Spain</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/se/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-se"></span></span>
                    Sweden</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/ch/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-ch"></span></span>
                    Switzerland</a></li>
                <li class="settings-menu-select-option "><a class="settings-menu-select-option-link"
                    rel="nofollow" href="/gb/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-gb"></span></span>
                    United Kingdom</a></li>
                <li class="settings-menu-select-option active"><a
                    class="settings-menu-select-option-link" rel="nofollow"
                    href="/us/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                      class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-us"></span></span>
                    United States</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-new-wrapper" id="main-menu-wrapper" data-nosnippet="true">
      <nav class="navbar-new" id="main-menu" role="navigation">
        <div class="container">
          <div class="main-menu-wrapper">
            <button class="top-mobile-menu-trigger">
              <span></span><span></span><span></span>
            </button>

            <div class="top-logo" id="gg-logo">
              <a href="/"><img class="gg-logo full" src="/images/logo/logo-white.svg?v=e5f3dd3a"
                  alt="GG.deals" width="149" height="20"><img class="gg-logo symbol"
                  src="/images/logo/symbol-white.svg?v=07c79d2c" alt="GG.deals" width="35"
                  height="20"></a>
            </div>
            <div class="top-menu bottom-mobile-wrapper">
              <span class="top-menu-hover-bar visible" style="left: 193.967px;"></span>
              <ul class="top-menu-list top-menu-hover-bar-initialized">
                <li class="top-menu-list-item" data-not-tippy="1" title="Game Deals"><a
                    class="top-menu-list-link" href="/deals/">Deals</a></li>
                <li class="top-menu-list-item" data-not-tippy="1" title="Game deals"><a
                    class="top-menu-list-link" href="/games/">Games</a></li>
                <li class="top-menu-list-item active" data-not-tippy="1" title="Latest game news"><a
                    class="top-menu-list-link" href="/news/">News</a></li>
                <li class="dropdown dropdown-toggle top-menu-list-item more"><button
                    class="top-menu-list-more-button" data-toggle="dropdown"
                    aria-expanded="false"><span></span><span></span><span></span></button>
                  <ul class="dropdown-menu top-menu-list-more">
                    <li class="top-menu-list-item" data-not-tippy="1" title="Vouchers for Games"><a
                        class="top-menu-list-link" href="/vouchers/">Vouchers</a></li>
                    <li class="top-menu-list-item" data-not-tippy="1"
                      title="Community of Good Game Deals"><a class="top-menu-list-link"
                        href="https://forum.gg.deals/">Community</a></li>
                  </ul>
                </li>
              </ul>

              <ul class="bottom-mobile-menu ">
                <li class="bottom-mobile-menu-item">
                  <a href="#" class="bottom-mobile-menu-link bottom-mobile-screen-link"
                    data-mobile-screen-target="region-currency">
                    <span class="region-icon region-icon-round"><span
                        class="flag-regular-icon flag-regular-icon-us"></span></span>
                    <span>Region &amp; Currency</span>
                  </a>
                </li>
                <li class="bottom-mobile-menu-item">
                  <a href="#" class="bottom-mobile-menu-link bottom-mobile-screen-link"
                    data-mobile-screen-target="keyshops">
                    <svg pointer-events="all" class="svg-icon svg-icon-key">
                      <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-key"></use>
                    </svg> <span>Keyshops: Enabled</span>
                  </a>
                </li>
              </ul>
              <div class="bottom-mobile-screen-wrapper " data-mobile-screen-id="region-currency">
                <a href="#" class="bottom-mobile-screen-back">
                  <span class="region-icon region-icon-round"><span
                      class="flag-regular-icon flag-regular-icon-us"></span></span> <span>Region
                    &amp; Currency</span>
                </a>
                <div class="bottom-mobile-screen-content">
                  <ul class="settings-menu-select-list">
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/au/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-au"></span></span>
                        Australia</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/be/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-be"></span></span>
                        Belgium</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/br/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-br"></span></span>
                        Brazil</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/ca/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-ca"></span></span>
                        Canada</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/dk/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-dk"></span></span>
                        Denmark</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/eu/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-eu"></span></span>
                        Europe</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/fi/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-fi"></span></span>
                        Finland</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/fr/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-fr"></span></span>
                        France</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/de/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-de"></span></span>
                        Germany</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/ie/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-ie"></span></span>
                        Ireland</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/it/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-it"></span></span>
                        Italy</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/nl/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-nl"></span></span>
                        Netherlands</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/no/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-no"></span></span>
                        Norway</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/pl/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-pl"></span></span>
                        Poland</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/ru/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-ru"></span></span>
                        Russia</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/es/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-es"></span></span>
                        Spain</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/se/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-se"></span></span>
                        Sweden</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/ch/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-ch"></span></span>
                        Switzerland</a></li>
                    <li class="settings-menu-select-option "><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/gb/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-gb"></span></span>
                        United Kingdom</a></li>
                    <li class="settings-menu-select-option active"><a
                        class="settings-menu-select-option-link" rel="nofollow"
                        href="/us/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                          class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-us"></span></span>
                        United States</a></li>
                  </ul>
                </div>
              </div>
              <div class="bottom-mobile-screen-wrapper " data-mobile-screen-id="keyshops">
                <a href="#" class="bottom-mobile-screen-back">
                  <svg pointer-events="all" class="svg-icon svg-icon-key">
                    <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-key"></use>
                  </svg> <span>Keyshops: Enabled</span>
                </a>
                <div class="bottom-mobile-screen-content">
                  <p>
                    Keyshops are usually cheaper than official stores and will help you save money.
                    However, buying there comes with some risks.
                  </p>
                  <a class="read-more" href="/page/keyshops-risks/">Read more</a>
                  <div class="keyshop-switch-wrapper">
                    <a href="/settings/keyshopVisible/?visible=0&amp;return=%2Fnews%2Ffreebies%2F&amp;token=gdX8srpX"
                      class="filter-switch menu-keyshops-switch active" rel="nofollow">
                      <span class="switch" data-disabled="0" data-enabled=""
                        data-filter="enable-keyshops"><span class="position"></span></span>
                      <label class="keyshop-switch-label">Enable Keyshops</label>
                    </a>
                  </div>

                  <p>
                    Note: keyshop integration on GG.deals in not completed yet.
                    We will gradually expand keyshop support in upcoming updates.
                  </p>
                  <a class="read-more" rel="noopener" target="_blank"
                    href="https://forum.gg.deals/d/492-keyshop-integration-on-gg-deals-process-explained">Read
                    more</a>
                </div>
              </div>
            </div>
            <div class="top-search">
              <form id="global-search-form" name="global-search-form" action="/games/" method="GET"
                data-search-games-url="/us/mainpage/ajaxGamesSearch/?showKeyshops=1"
                data-search-news-url="/us/mainpage/ajaxNewsSearch/?showKeyshops=1"
                data-dashlane-rid="54ac8e442803b79c" data-form-type="">
                <div class="input-wrapper">
                  <svg class="search-input-icon-in svg-icon svg-icon-zoom" pointer-events="all">
                    <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-zoom"></use>
                  </svg> <input autocomplete="off" class="search-input" id="global-search-input"
                    name="title" type="text" value="" placeholder="What game are you searching for?"
                    aria-label="What game are you searching for?" maxlength="100"
                    data-dashlane-rid="1768b84fa594bcba" data-form-type="">
                  <button class="reset-button clear-search" id="reset-global-search" type="reset"
                    value="reset">
                    <svg pointer-events="all" class="svg-icon svg-icon-icon-clear-input">
                      <use
                        xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-clear-input">
                      </use>
                    </svg> </button>
                  <svg class="search-input-icon-out svg-icon svg-icon-zoom" pointer-events="all">
                    <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-zoom"></use>
                  </svg>
                </div>

                <div class="search-results" id="search-results">
                  <div class="search-results-inner" id="search-results-inner">
                    <ul class="search-results-tabs" data-search-active-tab="1">
                      <li data-search-tab="1" class="search-results-tab-games active">
                        <button class="search-results-tab">Games</button>
                      </li>
                      <li data-search-tab="2" class="search-results-tab-news">
                        <button class="search-results-tab">News <span
                            class="badge">12</span></button>
                      </li>
                    </ul>
                    <div class="search-results-main" id="search-results-main" data-active-tab="1">
                      <div class="search-results-col search-results-col-games"></div>
                      <div class="search-results-col search-results-col-news"></div>
                    </div>
                    <div class="search-results-trending" id="search-results-trending">
                      <h3>Trending Searches:</h3>
                      <ul class="search-results-trending-list">
                        <li class="search-results-trending-item">
                          <a href="#" class="search-results-trending-link">Halo: Infinite</a>
                        </li>
                        <li class="search-results-trending-item">
                          <a href="#" class="search-results-trending-link">Battlefield
                            2042</a>
                        </li>
                        <li class="search-results-trending-item">
                          <a href="#" class="search-results-trending-link">FINAL FANTASY XIV:
                            Endwalker</a>
                        </li>
                        <li class="search-results-trending-item">
                          <a href="#" class="search-results-trending-link">Call Of Duty
                            Vanguard</a>
                        </li>
                        <li class="search-results-trending-item">
                          <a href="#" class="search-results-trending-link">FIFA 22</a>
                        </li>
                        <li class="search-results-trending-item">
                          <a href="#" class="search-results-trending-link">Red Dead Redemption
                            2</a>
                        </li>
                        <li class="search-results-trending-item">
                          <a href="#" class="search-results-trending-link">Forza Horizon 5</a>
                        </li>
                        <li class="search-results-trending-item">
                          <a href="#" class="search-results-trending-link">GTA 5</a>
                        </li>
                        <li class="search-results-trending-item">
                          <a href="#" class="search-results-trending-link">Xbox Game Pass</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form> <button class="search-close-btn"></button>
            </div>
            <div class="top-side-menu">
              <ul class="top-side-menu-list">
                <li class="top-side-menu-item login"><a class="top-side-menu-link steam-login"
                    rel="nofollow" href="/user/login/?return=%2Fnews%2Ffreebies%2F"><svg
                      pointer-events="all" class="svg-icon svg-icon-drm-steam">
                      <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-drm-steam">
                      </use>
                    </svg><span>Sign in through <strong>Steam</strong></span></a></li>
                <li
                  class="top-side-menu-item top-side-menu-item-profile dropdown dropdown-toggle menu-profile-dropdown">
                  <button class="top-side-menu-link profile profile-default" data-toggle="dropdown"
                    aria-expanded="false"><span class="avatar-default"><svg pointer-events="all"
                        class="svg-icon svg-icon-icon-profile-circle">
                        <use
                          xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-profile-circle">
                        </use>
                      </svg></span></button>
                  <div class="dropdown-menu dropdown-menu-right bottom-mobile-wrapper">
                    <ul class="menu-profile-list">
                      <li class="menu-profile-list-item avatar-item"><a
                          class="menu-profile-list-login"
                          href="/user/login/?return=%2Fnews%2Ffreebies%2F"><span
                            class="menu-profile-avatar"><svg pointer-events="all"
                              class="svg-icon svg-icon-icon-profile-circle">
                              <use
                                xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-profile-circle">
                              </use>
                            </svg></span><span class="menu-profile-label">Login with
                            Steam</span></a></li>
                      <li class="menu-profile-list-item"><a class="menu-profile-list-link"
                          id="profile-menu-link-wishlist" href="#login-form"><span
                            class="profile-link-label">Wishlist <span
                              class="count-badge badge">Sign in</span></span></a></li>
                      <li class="menu-profile-list-item"><a class="menu-profile-list-link"
                          id="profile-menu-link-alerts" href="#login-form"><span
                            class="profile-link-label">Alerts<span
                              class="count-badge badge">Sign in</span></span></a></li>
                      <li class="menu-profile-list-item"><a class="menu-profile-list-link"
                          id="profile-menu-link-collection" href="#login-form"><span
                            class="profile-link-label">Collection<span
                              class="count-badge badge">Sign in</span></span></a></li>
                      <li class="menu-profile-list-item"><a class="menu-profile-list-link"
                          id="profile-menu-link-notifications" href="#login-form"><span
                            class="profile-link-label">Notifications<span
                              class="count-badge badge">Sign in</span></span></a></li>
                      <li class="menu-profile-list-item"><a class="menu-profile-list-link"
                          id="profile-menu-link-settings" href="#login-form"><span
                            class="profile-link-label">Settings<span
                              class="count-badge badge">Sign in</span></span></a></li>
                    </ul>

                    <ul class="bottom-mobile-menu bottom-desktop-menu">
                      <li class="bottom-mobile-menu-item">
                        <a href="#" class="bottom-mobile-menu-link bottom-mobile-screen-link"
                          data-mobile-screen-target="region-currency">
                          <span class="region-icon region-icon-round"><span
                              class="flag-regular-icon flag-regular-icon-us"></span></span>
                          <span>Region &amp; Currency</span>
                        </a>
                      </li>
                      <li class="bottom-mobile-menu-item">
                        <a href="#" class="bottom-mobile-menu-link bottom-mobile-screen-link"
                          data-mobile-screen-target="keyshops">
                          <svg pointer-events="all" class="svg-icon svg-icon-key">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-key">
                            </use>
                          </svg> <span>Keyshops: Enabled</span>
                        </a>
                      </li>
                    </ul>
                    <div class="bottom-mobile-screen-wrapper bottom-desktop-screen-wrapper"
                      data-mobile-screen-id="region-currency">
                      <a href="#" class="bottom-mobile-screen-back">
                        <span class="region-icon region-icon-round"><span
                            class="flag-regular-icon flag-regular-icon-us"></span></span>
                        <span>Region &amp; Currency</span>
                      </a>
                      <div class="bottom-mobile-screen-content">
                        <ul class="settings-menu-select-list">
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/au/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-au"></span></span>
                              Australia</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/be/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-be"></span></span>
                              Belgium</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/br/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-br"></span></span>
                              Brazil</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/ca/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-ca"></span></span>
                              Canada</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/dk/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-dk"></span></span>
                              Denmark</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/eu/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-eu"></span></span>
                              Europe</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/fi/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-fi"></span></span>
                              Finland</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/fr/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-fr"></span></span>
                              France</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/de/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-de"></span></span>
                              Germany</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/ie/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-ie"></span></span>
                              Ireland</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/it/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-it"></span></span>
                              Italy</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/nl/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-nl"></span></span>
                              Netherlands</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/no/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-no"></span></span>
                              Norway</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/pl/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-pl"></span></span>
                              Poland</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/ru/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-ru"></span></span>
                              Russia</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/es/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-es"></span></span>
                              Spain</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/se/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-se"></span></span>
                              Sweden</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/ch/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-ch"></span></span>
                              Switzerland</a></li>
                          <li class="settings-menu-select-option "><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/gb/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-gb"></span></span>
                              United Kingdom</a></li>
                          <li class="settings-menu-select-option active"><a
                              class="settings-menu-select-option-link" rel="nofollow"
                              href="/us/region/switch/?return=%2Fnews%2Ffreebies%2F"><span
                                class="region-icon region-icon-round"><span
                                  class="flag-regular-icon flag-regular-icon-us"></span></span>
                              United States</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="bottom-mobile-screen-wrapper bottom-desktop-screen-wrapper"
                      data-mobile-screen-id="keyshops">
                      <a href="#" class="bottom-mobile-screen-back">
                        <svg pointer-events="all" class="svg-icon svg-icon-key">
                          <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-key">
                          </use>
                        </svg> <span>Keyshops: Enabled</span>
                      </a>
                      <div class="bottom-mobile-screen-content">
                        <p>
                          Keyshops are usually cheaper than official stores and will help you
                          save money.
                          However, buying there comes with some risks.
                        </p>
                        <a class="read-more" href="/page/keyshops-risks/">Read more</a>
                        <div class="keyshop-switch-wrapper">
                          <a href="/settings/keyshopVisible/?visible=0&amp;return=%2Fnews%2Ffreebies%2F&amp;token=gdX8srpX"
                            class="filter-switch menu-keyshops-switch active"
                            rel="nofollow">
                            <span class="switch" data-disabled="0" data-enabled=""
                              data-filter="enable-keyshops"><span
                                class="position"></span></span>
                            <label class="keyshop-switch-label">Enable Keyshops</label>
                          </a>
                        </div>

                        <p>
                          Note: keyshop integration on GG.deals in not completed yet.
                          We will gradually expand keyshop support in upcoming updates.
                        </p>
                        <a class="read-more" rel="noopener" target="_blank"
                          href="https://forum.gg.deals/d/492-keyshop-integration-on-gg-deals-process-explained">Read
                          more</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div id="page">
      <div class="flash-container-wrapper">
        <div id="flash-container" class="flash-container container no-padding-sm empty init"></div>
      </div>


      <div class="breadcrumbs-widget pjax-inner-replace">
        <div class="container">
          <ul class="breadcrumbs-list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
              <a href="/" itemprop="item">
                <span itemprop="name">Home</span>
              </a>
              <meta itemprop="position" content="1">
            </li>
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
              <a href="/news/" itemprop="item">
                <span itemprop="name">News</span>
              </a>
              <meta itemprop="position" content="2">
            </li>
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
              <a href="/news/freebies/" class="active" itemprop="item">
                <span itemprop="name">Game freebies</span>
              </a>
              <meta itemprop="position" content="3">
            </li>
          </ul>
        </div>
      </div>

      <div class="container pjax-inner-replace no-padding-sm presets-wrapper page-info-widget">
        <div class="relative">
          <h1 class="sm-side-padding main-title">Game freebies</h1>
        </div>
        <div class="sm-side-padding main-description ddd-truncate" style="overflow-wrap: break-word;">
          <p>Follow this page to find<strong> free games to claim</strong>. Keep track of all giveaways of
            Steam, Epic and Uplay free keys. We search, find and gather all&nbsp;<strong>game
              freebies</strong>&nbsp;in one place so you don’t have to do anything but view
            and&nbsp;<strong>claim free games</strong>. Stay up to date with everything that digital game
            shops have to offer for free.</p><a class="read-more-btn ddd-keep" href="#"
            onclick="scrollToAnchor('footer-main-description'); return false;">Read more</a>
        </div>
      </div>


      <div class="container pjax-inner-replace presets-wrapper">
        <span class="presets-heading">Presets:</span>
        <nav id="presets-nav" class="nav-sm">
          <div id="presets-menu"
            class="presets-menu presets-initialized presets-cropped initialised-presetsMenu">
            <div class="menu-item" data-name="All news"><a class="menu-item-link" href="/news/">All news</a>
            </div>
            <div class="menu-item" data-name="Deals"><a class="menu-item-link" href="/news/deals/">Deals</a>
            </div>
            <div class="menu-item" data-name="Bundles"><a class="menu-item-link"
                href="/news/bundles/">Bundles</a></div>
            <div class="menu-item active" data-name="Freebies"><a class="menu-item-link"
                href="/news/freebies/">Freebies</a></div>
            <div class="menu-item" data-name="Blog"><a class="menu-item-link" href="/news/blog/">Blog</a>
            </div>
            <div class="menu-item overflowing-preset hidden" data-name="Subscriptions"><a
                class="menu-item-link" href="/news/subscriptions/">Subscriptions</a></div>
            <div class="menu-item overflowing-preset hidden" data-name="Giveaways"><a class="menu-item-link"
                href="/news/giveaways/">Giveaways</a></div>
            <div class="menu-item overflowing-preset hidden" data-name="Announcements"><a
                class="menu-item-link" href="/news/announcements/">Announcements</a></div>
            <div class="menu-item overflowing-preset hidden" data-name="Hot news"><a class="menu-item-link"
                href="/news/hot/">Hot news</a></div>
            <div class="menu-item overflowing-preset hidden" data-name="Epic free games"><a
                class="menu-item-link" href="/news/epic-games-store-free-games/">Epic free games</a>
            </div>
            <div class="menu-item overflowing-preset hidden" data-name="Prime Gaming"><a
                class="menu-item-link" href="/news/prime-gaming-free-games/">Prime Gaming</a></div>
            <div class="menu-item overflowing-preset hidden" data-name="Humble Choice"><a
                class="menu-item-link" href="/news/humble-choice/">Humble Choice</a></div>
            <div class="menu-item overflowing-preset hidden" data-name="Humble Bundles"><a
                class="menu-item-link" href="/news/humble-bundles/">Humble Bundles</a></div>
            <div class="menu-item overflowing-preset hidden" data-name="Fanatical bundles"><a
                class="menu-item-link" href="/news/fanatical-bundles/">Fanatical bundles</a></div>
            <div class="menu-item overflowing-preset hidden" data-name="Game Pass Additions"><a
                class="menu-item-link" href="/news/new-on-game-pass/">Game Pass Additions</a></div>
            <div class="menu-item overflowing-preset hidden" data-name="EA Play Additions"><a
                class="menu-item-link" href="/news/new-on-ea-play/">EA Play Additions</a></div>
            <div class="menu-item preset-more-btn"><a class="menu-item-link" href="#"><span
                  class="text">More</span></a></div>
          </div>
        </nav>
      </div>
      <div class="container news-container content-isle no-padding-sm" id="news-container">
        <div id="filter-widget" class="filter-widget filter-news-widget">

          <div class="form filter-form view-selected-grid">
            <form id="news-filter-search" action="/news/" method="get" data-dashlane-rid="5d1e3479ab418a57"
              data-form-type="">
              <div data-filter-type="filter-list" class="main-filter-line mobile-filter filter-dropdown"
                data-open-body-class="open-filter full-overlay" data-auto-margin="1"><span
                  class="current"><span class="text">Filters</span><span class="close-tab"><svg
                      pointer-events="all" class="svg-icon svg-icon-icon-x">
                      <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x"></use>
                    </svg></span></span>
                <div class="content filter-mobile-style isDropdown filter-line dropdown-content"
                  data-content="1">
                  <div class="filters-line-container">
                    <div id="MainNewsSearch_title-filter" class="filter main-name search-bar"
                      data-filter-type="main-name"><svg class="icon-in svg-icon svg-icon-zoom"
                        pointer-events="all">
                        <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-zoom"></use>
                      </svg><svg class="icon-out svg-icon svg-icon-zoom" pointer-events="all">
                        <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-zoom"></use>
                      </svg><label for="search-by-main-name"><span
                          class="fake-placeholder">Search</span></label><input
                        data-limit-text="1" data-update-timeout="500" pjax-search="1"
                        class="search-input form-control" autocomplete="off"
                        id="search-by-main-name" name="title" type="text" value=""
                        data-placeholder="" data-dashlane-rid="02a5da6268725336"
                        data-form-type=""><span class="clear-search"><svg pointer-events="all"
                          class="svg-icon svg-icon-icon-x-circle">
                          <use
                            xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x-circle">
                          </use>
                        </svg></span>
                    </div>
                    <div id="MainNewsSearch_availability-filter" class="filter single-checkbox"
                      data-filter-type="single-checkbox">
                      <div class="single-filter-switch filter-switch">
                        <input data-limit-text="1" data-update-timeout="500" pjax-search="1"
                          data-name="Hide expired" data-label="Hide expired"
                          name="availability" id="availability" type="hidden" value=""> <span
                          class="switch" data-disabled="" data-enabled="1"
                          data-filter="availability" data-name="Hide expired"><span
                            class="position"></span></span> <label>Hide expired</label>
                      </div>
                    </div>
                    <div class="filter-dropdown active"
                      data-open-body-class="open-filter full-overlay" data-auto-margin="1"><span
                        class="current"><span class="text">Type</span><span
                          class="arrow-icon hide-on-open"><svg pointer-events="all"
                            class="svg-icon svg-icon-icon-back">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-back">
                            </use>
                          </svg></span><span class="close-tab"><svg pointer-events="all"
                            class="svg-icon svg-icon-icon-x">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x">
                            </use>
                          </svg></span></span>
                      <div class="filter-content dropdown-content" data-content="1">
                        <div id="MainNewsSearch_type-filter"
                          class="filter isDropdown active checkboxes-list"
                          data-filter-type="checkboxes-list"><input data-all-text="all"
                            data-empty-text="all" value="6" data-limit-text="1"
                            data-update-timeout="1000" pjax-search="1" name="type" id="type"
                            type="hidden">
                          <div class="list without-search">
                            <div class="item filter-switch type-item" data-id="1"
                              data-name="Bundles"><span
                                class="filter-name item-bundles">Bundles</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch type-item" data-id="2"
                              data-name="Deals"><span
                                class="filter-name item-deals">Deals</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch type-item" data-id="8"
                              data-name="Subscriptions"><span
                                class="filter-name item-subscriptions">Subscriptions</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch type-item" data-id="4"
                              data-name="Announcements"><span
                                class="filter-name item-announcements">Announcements</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch type-item" data-id="5"
                              data-name="Giveaways"><span
                                class="filter-name item-giveaways">Giveaways</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch type-item active" data-id="6"
                              data-name="Freebies"><span
                                class="filter-name item-freebies">Freebies</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch type-item" data-id="7"
                              data-name="Blog"><span
                                class="filter-name item-blog">Blog</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="filter-dropdown" data-open-body-class="open-filter full-overlay"
                      data-auto-margin="1"><span class="current"><span
                          class="text">Store</span><span class="arrow-icon hide-on-open"><svg
                            pointer-events="all" class="svg-icon svg-icon-icon-back">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-back">
                            </use>
                          </svg></span><span class="close-tab"><svg pointer-events="all"
                            class="svg-icon svg-icon-icon-x">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x">
                            </use>
                          </svg></span></span>
                      <div class="filter-content dropdown-content" data-content="1">
                        <div id="MainNewsSearch_store-filter"
                          class="filter isDropdown checkboxes-list"
                          data-filter-type="checkboxes-list"><input data-all-text="all"
                            data-empty-text="all" value="" data-limit-text="1"
                            data-update-timeout="1000" pjax-search="1" name="store"
                            id="store" type="hidden">
                          <div class="search"><svg class="search-icon svg-icon svg-icon-zoom"
                              pointer-events="all">
                              <use
                                xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-zoom">
                              </use>
                            </svg><label for="MainNewsSearchstore-filter-search">Search
                              stores</label><input id="MainNewsSearchstore-filter-search"
                              autocomplete="off" data-search-name="store"
                              class="form-control" type="text" value="" name=""><span
                              class="clear-wrap hidden"><svg
                                class="clear-icon svg-icon svg-icon-icon-x-circle"
                                pointer-events="all">
                                <use
                                  xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x-circle">
                                </use>
                              </svg></span></div>
                          <div class="empty-states hidden empty-filter-content">
                            <div class="icon">
                              <span class="emoji emoji-crystal-ball">🔮</span>
                            </div>
                            <div class="title">
                              No result found for "<span class="search-pattern"></span>"
                            </div>
                          </div>
                          <div
                            class="list content-scroll with-search initialised-filterScrollOnDropdownFilterOpen">
                            <div class="item filter-switch store-item" data-id="43"
                              data-name="2Game"><span class="filter-name item-2game"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/51/2d/af786a38fcad31d96ab4704bcd4e99232cd2_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/51/2d/af786a38fcad31d96ab4704bcd4e99232cd2_90xt35_Q100.png 1x,https://img.gg.deals/51/2d/af786a38fcad31d96ab4704bcd4e99232cd2_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="2Game"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="52"
                              data-name="Allyouplay"><span
                                class="filter-name item-allyouplay"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/fc/4d/0098e85b68abbb6831511036a67b21e2d804_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/fc/4d/0098e85b68abbb6831511036a67b21e2d804_90xt35_Q100.png 1x,https://img.gg.deals/fc/4d/0098e85b68abbb6831511036a67b21e2d804_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Allyouplay"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="6"
                              data-name="Amazon.com"><span
                                class="filter-name item-amazoncom"><img class="lazyload"
                                  data-src="https://img.gg.deals/2d/54/47056e75b53cbad214b2a9b2e46106ea39a9.svg"
                                  data-srcset="https://img.gg.deals/2d/54/47056e75b53cbad214b2a9b2e46106ea39a9.svg 1x,https://img.gg.deals/2d/54/47056e75b53cbad214b2a9b2e46106ea39a9.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Amazon.com"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="135"
                              data-name="ArenaNet"><span
                                class="filter-name item-arenanet"><img class="lazyload"
                                  data-src="https://img.gg.deals/ac/ff/88d018e11f0901cc30e1068bef0fdd9abb83.svg"
                                  data-srcset="https://img.gg.deals/ac/ff/88d018e11f0901cc30e1068bef0fdd9abb83.svg 1x,https://img.gg.deals/ac/ff/88d018e11f0901cc30e1068bef0fdd9abb83.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="ArenaNet"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="22"
                              data-name="Battle.net"><span
                                class="filter-name item-battlenet"><img class="lazyload"
                                  data-src="https://img.gg.deals/a6/3b/3851e726d18d470045d14e504e8e7712cade.svg"
                                  data-srcset="https://img.gg.deals/a6/3b/3851e726d18d470045d14e504e8e7712cade.svg 1x,https://img.gg.deals/a6/3b/3851e726d18d470045d14e504e8e7712cade.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Battle.net"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="133"
                              data-name="Bethesda"><span
                                class="filter-name item-bethesda"><img class="lazyload"
                                  data-src="https://img.gg.deals/e8/70/278108065003ba7fa7ab47f28f54d13af3d6_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/e8/70/278108065003ba7fa7ab47f28f54d13af3d6_90xt35_Q100.png 1x,https://img.gg.deals/e8/70/278108065003ba7fa7ab47f28f54d13af3d6_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Bethesda"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="59"
                              data-name="CDKeys.com"><span
                                class="filter-name item-cdkeyscom"><img class="lazyload"
                                  data-src="https://img.gg.deals/60/de/c317e405fa36be3886dd098963324b1c7ac1_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/60/de/c317e405fa36be3886dd098963324b1c7ac1_90xt35_Q100.png 1x,https://img.gg.deals/60/de/c317e405fa36be3886dd098963324b1c7ac1_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="CDKeys.com"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="160"
                              data-name="Daily Indie Game"><span
                                class="filter-name item-daily-indie-game"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/16/21/341836aeed72da2a661bca3f9bb198613045_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/16/21/341836aeed72da2a661bca3f9bb198613045_90xt35_Q100.png 1x,https://img.gg.deals/16/21/341836aeed72da2a661bca3f9bb198613045_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Daily Indie Game"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="30"
                              data-name="DLGamer.com"><span
                                class="filter-name item-dlgamercom"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/9c/ea/fd465d5f6e49d95c5126a1085a038b8c27ac_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/9c/ea/fd465d5f6e49d95c5126a1085a038b8c27ac_90xt35_Q100.png 1x,https://img.gg.deals/9c/ea/fd465d5f6e49d95c5126a1085a038b8c27ac_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="DLGamer.com"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="49"
                              data-name="Dreamgame"><span
                                class="filter-name item-dreamgame"><img class="lazyload"
                                  data-src="https://img.gg.deals/a5/87/ff5428cbee71f1250fcff1c76b328ca7b392_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/a5/87/ff5428cbee71f1250fcff1c76b328ca7b392_90xt35_Q100.png 1x,https://img.gg.deals/a5/87/ff5428cbee71f1250fcff1c76b328ca7b392_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Dreamgame"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="60"
                              data-name="Eneba"><span class="filter-name item-eneba"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/7f/fc/0519b5d0810864027e297a768faa8e922506_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/7f/fc/0519b5d0810864027e297a768faa8e922506_90xt35_Q100.png 1x,https://img.gg.deals/7f/fc/0519b5d0810864027e297a768faa8e922506_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Eneba"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="57"
                              data-name="Epic Games Store"><span
                                class="filter-name item-epic-games-store"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/31/f0/f443dc6e18c2a93ba59fb9a42cbb9eba41e3_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/31/f0/f443dc6e18c2a93ba59fb9a42cbb9eba41e3_90xt35_Q100.png 1x,https://img.gg.deals/31/f0/f443dc6e18c2a93ba59fb9a42cbb9eba41e3_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Epic Games Store"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="166"
                              data-name="Escape From Tarkov"><span
                                class="filter-name item-escape-from-tarkov"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/33/e2/8494530815775ef502c2a87817d73cc954ee_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/33/e2/8494530815775ef502c2a87817d73cc954ee_90xt35_Q100.png 1x,https://img.gg.deals/33/e2/8494530815775ef502c2a87817d73cc954ee_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Escape From Tarkov"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="40"
                              data-name="Fanatical"><span
                                class="filter-name item-fanatical"><img class="lazyload"
                                  data-src="https://img.gg.deals/18/93/128a5dc7abdb6ca529957c94d56f02f53331.svg"
                                  data-srcset="https://img.gg.deals/18/93/128a5dc7abdb6ca529957c94d56f02f53331.svg 1x,https://img.gg.deals/18/93/128a5dc7abdb6ca529957c94d56f02f53331.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Fanatical"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="58"
                              data-name="G2A"><span class="filter-name item-g2a"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/6e/67/057fb90629fd628003980b92477276c4594f.svg"
                                  data-srcset="https://img.gg.deals/6e/67/057fb90629fd628003980b92477276c4594f.svg 1x,https://img.gg.deals/6e/67/057fb90629fd628003980b92477276c4594f.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="G2A"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="62"
                              data-name="G2Play"><span
                                class="filter-name item-g2play"><img class="lazyload"
                                  data-src="https://img.gg.deals/65/ab/93451cc4c8425c0f14621752e6710b020f76.svg"
                                  data-srcset="https://img.gg.deals/65/ab/93451cc4c8425c0f14621752e6710b020f76.svg 1x,https://img.gg.deals/65/ab/93451cc4c8425c0f14621752e6710b020f76.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="G2Play"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="45"
                              data-name="Gamebillet"><span
                                class="filter-name item-gamebillet"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/d9/f7/1c0556dd97fdc3eca891cf716432e68603ff_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/d9/f7/1c0556dd97fdc3eca891cf716432e68603ff_90xt35_Q100.png 1x,https://img.gg.deals/d9/f7/1c0556dd97fdc3eca891cf716432e68603ff_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Gamebillet"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="8"
                              data-name="GamersGate"><span
                                class="filter-name item-gamersgate"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/b5/bf/f6a2641666e4fd0055e7d7fb2bcb20beb455_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/b5/bf/f6a2641666e4fd0055e7d7fb2bcb20beb455_90xt35_Q100.png 1x,https://img.gg.deals/b5/bf/f6a2641666e4fd0055e7d7fb2bcb20beb455_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="GamersGate"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="76"
                              data-name="GAMESLOAD"><span
                                class="filter-name item-gamesload"><img class="lazyload"
                                  data-src="https://img.gg.deals/0e/83/14c0c24aae8ee78282a4375d70d56095432c_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/0e/83/14c0c24aae8ee78282a4375d70d56095432c_90xt35_Q100.png 1x,https://img.gg.deals/0e/83/14c0c24aae8ee78282a4375d70d56095432c_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="GAMESLOAD"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="16"
                              data-name="Gamesplanet DE"><span
                                class="filter-name item-gamesplanet-de"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/6b/e1/bbf281ee046ebc40496f806e6be40e1678a7_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/6b/e1/bbf281ee046ebc40496f806e6be40e1678a7_90xt35_Q100.png 1x,https://img.gg.deals/6b/e1/bbf281ee046ebc40496f806e6be40e1678a7_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Gamesplanet DE"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="17"
                              data-name="Gamesplanet FR"><span
                                class="filter-name item-gamesplanet-fr"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/22/31/af04da0ffff7efda44880619f64ab6ce2eff_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/22/31/af04da0ffff7efda44880619f64ab6ce2eff_90xt35_Q100.png 1x,https://img.gg.deals/22/31/af04da0ffff7efda44880619f64ab6ce2eff_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Gamesplanet FR"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="18"
                              data-name="Gamesplanet UK"><span
                                class="filter-name item-gamesplanet-uk"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/33/b5/c5c1b9e0400cf76722ba084565beddf7ee43_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/33/b5/c5c1b9e0400cf76722ba084565beddf7ee43_90xt35_Q100.png 1x,https://img.gg.deals/33/b5/c5c1b9e0400cf76722ba084565beddf7ee43_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Gamesplanet UK"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="53"
                              data-name="Gamesplanet US"><span
                                class="filter-name item-gamesplanet-us"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/3f/48/7620a934bbe6b03a9828c29e1573929aa39f_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/3f/48/7620a934bbe6b03a9828c29e1573929aa39f_90xt35_Q100.png 1x,https://img.gg.deals/3f/48/7620a934bbe6b03a9828c29e1573929aa39f_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Gamesplanet US"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="63"
                              data-name="GAMIVO"><span
                                class="filter-name item-gamivo"><img class="lazyload"
                                  data-src="https://img.gg.deals/a0/08/b2e0a43b1ddb4ae2f7c8118d851d64088f49.svg"
                                  data-srcset="https://img.gg.deals/a0/08/b2e0a43b1ddb4ae2f7c8118d851d64088f49.svg 1x,https://img.gg.deals/a0/08/b2e0a43b1ddb4ae2f7c8118d851d64088f49.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="GAMIVO"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="10"
                              data-name="Gog.com"><span
                                class="filter-name item-gogcom"><img class="lazyload"
                                  data-src="https://img.gg.deals/84/97/41332eaef689576ca0f10b3f53c51aa24976.svg"
                                  data-srcset="https://img.gg.deals/84/97/41332eaef689576ca0f10b3f53c51aa24976.svg 1x,https://img.gg.deals/84/97/41332eaef689576ca0f10b3f53c51aa24976.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Gog.com"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="3"
                              data-name="Green Man Gaming"><span
                                class="filter-name item-green-man-gaming"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/ba/f8/ac55a33003c12dea18e851a90ce12a1b7bf9.svg"
                                  data-srcset="https://img.gg.deals/ba/f8/ac55a33003c12dea18e851a90ce12a1b7bf9.svg 1x,https://img.gg.deals/ba/f8/ac55a33003c12dea18e851a90ce12a1b7bf9.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Green Man Gaming"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="102"
                              data-name="Groupees"><span
                                class="filter-name item-groupees"><img class="lazyload"
                                  data-src="https://img.gg.deals/0e/a8/81f464940bde2716527c87b85b2800bf4213_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/0e/a8/81f464940bde2716527c87b85b2800bf4213_90xt35_Q100.png 1x,https://img.gg.deals/0e/a8/81f464940bde2716527c87b85b2800bf4213_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Groupees"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="70"
                              data-name="HRK Game"><span
                                class="filter-name item-hrk-game"><img class="lazyload"
                                  data-src="https://img.gg.deals/17/c1/09fd29fa9a61da4bfa1dc42f1813f99b1915_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/17/c1/09fd29fa9a61da4bfa1dc42f1813f99b1915_90xt35_Q100.png 1x,https://img.gg.deals/17/c1/09fd29fa9a61da4bfa1dc42f1813f99b1915_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="HRK Game"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="100"
                              data-name="Humble Bundle"><span
                                class="filter-name item-humble-bundle"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/87/5d/4f71a778083a9461f19b5769507978090412.svg"
                                  data-srcset="https://img.gg.deals/87/5d/4f71a778083a9461f19b5769507978090412.svg 1x,https://img.gg.deals/87/5d/4f71a778083a9461f19b5769507978090412.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Humble Bundle"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="20"
                              data-name="Humble Store"><span
                                class="filter-name item-humble-store"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/21/b9/7834744c7ec3704a4ed2a7d3dc0ecee46057_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/21/b9/7834744c7ec3704a4ed2a7d3dc0ecee46057_90xt35_Q100.png 1x,https://img.gg.deals/21/b9/7834744c7ec3704a4ed2a7d3dc0ecee46057_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Humble Store"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="101"
                              data-name="Indie Gala"><span
                                class="filter-name item-indie-gala"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/24/1d/74025a3e1227586d54fa0bb3cc0e5336ef8a.svg"
                                  data-srcset="https://img.gg.deals/24/1d/74025a3e1227586d54fa0bb3cc0e5336ef8a.svg 1x,https://img.gg.deals/24/1d/74025a3e1227586d54fa0bb3cc0e5336ef8a.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Indie Gala"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="54"
                              data-name="Indie Gala Store"><span
                                class="filter-name item-indie-gala-store"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/ed/6f/c5fa653023a97e46c8b0fa895cf33c64cc4f_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/ed/6f/c5fa653023a97e46c8b0fa895cf33c64cc4f_90xt35_Q100.png 1x,https://img.gg.deals/ed/6f/c5fa653023a97e46c8b0fa895cf33c64cc4f_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Indie Gala Store"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="64"
                              data-name="Instant Gaming"><span
                                class="filter-name item-instant-gaming"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/93/17/21766f0641306ce050cbf322e5fbe1bb6729.svg"
                                  data-srcset="https://img.gg.deals/93/17/21766f0641306ce050cbf322e5fbe1bb6729.svg 1x,https://img.gg.deals/93/17/21766f0641306ce050cbf322e5fbe1bb6729.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Instant Gaming"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="80"
                              data-name="JoyBuggy"><span
                                class="filter-name item-joybuggy"><img class="lazyload"
                                  data-src="https://img.gg.deals/37/15/59badd21c17bb6f793d46667686986fe78be_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/37/15/59badd21c17bb6f793d46667686986fe78be_90xt35_Q100.png 1x,https://img.gg.deals/37/15/59badd21c17bb6f793d46667686986fe78be_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="JoyBuggy"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="79"
                              data-name="K4G.com"><span
                                class="filter-name item-k4gcom"><img class="lazyload"
                                  data-src="https://img.gg.deals/93/90/d19b88367ee8d52977848ab54abf081ba573.svg"
                                  data-srcset="https://img.gg.deals/93/90/d19b88367ee8d52977848ab54abf081ba573.svg 1x,https://img.gg.deals/93/90/d19b88367ee8d52977848ab54abf081ba573.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="K4G.com"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="61"
                              data-name="Kinguin"><span
                                class="filter-name item-kinguin"><img class="lazyload"
                                  data-src="https://img.gg.deals/fc/75/c090bec5e90c0e254c898cbbcce2fb95ad21_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/fc/75/c090bec5e90c0e254c898cbbcce2fb95ad21_90xt35_Q100.png 1x,https://img.gg.deals/fc/75/c090bec5e90c0e254c898cbbcce2fb95ad21_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Kinguin"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="72"
                              data-name="Microsoft Store"><span
                                class="filter-name item-microsoft-store"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/a6/4f/c0e24320970b5b0563d67784f43a182a9250.svg"
                                  data-srcset="https://img.gg.deals/a6/4f/c0e24320970b5b0563d67784f43a182a9250.svg 1x,https://img.gg.deals/a6/4f/c0e24320970b5b0563d67784f43a182a9250.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Microsoft Store"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="174"
                              data-name="Minecraft.net"><span
                                class="filter-name item-minecraftnet"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/d7/f7/ef59006a3db0dc177f8c99a49838b3540841_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/d7/f7/ef59006a3db0dc177f8c99a49838b3540841_90xt35_Q100.png 1x,https://img.gg.deals/d7/f7/ef59006a3db0dc177f8c99a49838b3540841_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Minecraft.net"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="65"
                              data-name="MMOGA DE"><span
                                class="filter-name item-mmoga-de"><img class="lazyload"
                                  data-src="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png 1x,https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="MMOGA DE"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="67"
                              data-name="MMOGA ES"><span
                                class="filter-name item-mmoga-es"><img class="lazyload"
                                  data-src="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png 1x,https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="MMOGA ES"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="68"
                              data-name="MMOGA FR"><span
                                class="filter-name item-mmoga-fr"><img class="lazyload"
                                  data-src="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png 1x,https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="MMOGA FR"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="71"
                              data-name="MMOGA SE"><span
                                class="filter-name item-mmoga-se"><img class="lazyload"
                                  data-src="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png 1x,https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="MMOGA SE"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="66"
                              data-name="MMOGA UK"><span
                                class="filter-name item-mmoga-uk"><img class="lazyload"
                                  data-src="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png 1x,https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="MMOGA UK"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="69"
                              data-name="MMOGA US"><span
                                class="filter-name item-mmoga-us"><img class="lazyload"
                                  data-src="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_90xt35_Q100.png 1x,https://img.gg.deals/9b/a3/f18ecd3ab527d9ee004a11109b3e316232db_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="MMOGA US"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="81"
                              data-name="Newegg"><span
                                class="filter-name item-newegg"><img class="lazyload"
                                  data-src="https://img.gg.deals/77/95/1e2444e51329516a30a1e16a3d61215ba670.svg"
                                  data-srcset="https://img.gg.deals/77/95/1e2444e51329516a30a1e16a3d61215ba670.svg 1x,https://img.gg.deals/77/95/1e2444e51329516a30a1e16a3d61215ba670.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Newegg"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="56"
                              data-name="Nuuvem"><span
                                class="filter-name item-nuuvem"><img class="lazyload"
                                  data-src="https://img.gg.deals/53/0e/fbc31eb9b0fa0d8d7cc4534d559fd48977a3_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/53/0e/fbc31eb9b0fa0d8d7cc4534d559fd48977a3_90xt35_Q100.png 1x,https://img.gg.deals/53/0e/fbc31eb9b0fa0d8d7cc4534d559fd48977a3_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Nuuvem"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="5"
                              data-name="Origin"><span
                                class="filter-name item-origin"><img class="lazyload"
                                  data-src="https://img.gg.deals/5f/a8/a91c821c84665db168496fb2147029afe533.svg"
                                  data-srcset="https://img.gg.deals/5f/a8/a91c821c84665db168496fb2147029afe533.svg 1x,https://img.gg.deals/5f/a8/a91c821c84665db168496fb2147029afe533.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Origin"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="172"
                              data-name="PlayStation Store"><span
                                class="filter-name item-playstation-store"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/d6/e2/a34eaf7fe3095f627d94c89f8fbaef0fcb22_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/d6/e2/a34eaf7fe3095f627d94c89f8fbaef0fcb22_90xt35_Q100.png 1x,https://img.gg.deals/d6/e2/a34eaf7fe3095f627d94c89f8fbaef0fcb22_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="PlayStation Store"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="169"
                              data-name="Rockstar Store"><span
                                class="filter-name item-rockstar-store"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/9f/77/b5827f636b71fc60ef46187971e7b481eea6_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/9f/77/b5827f636b71fc60ef46187971e7b481eea6_90xt35_Q100.png 1x,https://img.gg.deals/9f/77/b5827f636b71fc60ef46187971e7b481eea6_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Rockstar Store"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="170"
                              data-name="Square Enix Store"><span
                                class="filter-name item-square-enix-store"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/73/a6/6403374c18968db33f1221d6f39794d6807e_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/73/a6/6403374c18968db33f1221d6f39794d6807e_90xt35_Q100.png 1x,https://img.gg.deals/73/a6/6403374c18968db33f1221d6f39794d6807e_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Square Enix Store"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="4"
                              data-name="Steam"><span class="filter-name item-steam"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/55/68/f5ab472cbb0587c9f5e1b66561498e6927d8.svg"
                                  data-srcset="https://img.gg.deals/55/68/f5ab472cbb0587c9f5e1b66561498e6927d8.svg 1x,https://img.gg.deals/55/68/f5ab472cbb0587c9f5e1b66561498e6927d8.svg 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Steam"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="130"
                              data-name="Tiltify"><span
                                class="filter-name item-tiltify"><img class="lazyload"
                                  data-src="https://img.gg.deals/06/cc/fbee74a6e8deb5111493991a9f02d48d151d_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/06/cc/fbee74a6e8deb5111493991a9f02d48d151d_90xt35_Q100.png 1x,https://img.gg.deals/06/cc/fbee74a6e8deb5111493991a9f02d48d151d_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Tiltify"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="38"
                              data-name="Ubisoft Store"><span
                                class="filter-name item-ubisoft-store"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/98/5e/0498c04f9205aae17d198e75782b9470d87b_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/98/5e/0498c04f9205aae17d198e75782b9470d87b_90xt35_Q100.png 1x,https://img.gg.deals/98/5e/0498c04f9205aae17d198e75782b9470d87b_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Ubisoft Store"></span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch store-item" data-id="41"
                              data-name="Voidu"><span class="filter-name item-voidu"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/c0/04/5061992dfafd8a77209e9edac78f6656e237_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/c0/04/5061992dfafd8a77209e9edac78f6656e237_90xt35_Q100.png 1x,https://img.gg.deals/c0/04/5061992dfafd8a77209e9edac78f6656e237_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="Voidu"></span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch store-item" data-id="14"
                              data-name="WinGameStore"><span
                                class="filter-name item-wingamestore"><img
                                  class="lazyload"
                                  data-src="https://img.gg.deals/63/06/c2664d916ee13c4aee10e0659238f5898eaf_90xt35_Q100.png"
                                  data-srcset="https://img.gg.deals/63/06/c2664d916ee13c4aee10e0659238f5898eaf_90xt35_Q100.png 1x,https://img.gg.deals/63/06/c2664d916ee13c4aee10e0659238f5898eaf_180xt70_Q100.png 2x"
                                  style="max-width:90px; max-height:35px"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  alt="WinGameStore"></span><span class="switch"><span
                                  class="position"></span></span></div>
                          </div>
                          <div class="more">
                            <span class="turn-all turn-all-off disabled">Turn all off</span>
                            <span class="turn-all turn-all-on">Turn all on</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="filter-dropdown" data-open-body-class="open-filter full-overlay"
                      data-auto-margin="1"><span class="current"><span
                          class="text">Time</span><span class="arrow-icon hide-on-open"><svg
                            pointer-events="all" class="svg-icon svg-icon-icon-back">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-back">
                            </use>
                          </svg></span><span class="close-tab"><svg pointer-events="all"
                            class="svg-icon svg-icon-icon-x">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x">
                            </use>
                          </svg></span></span>
                      <div class="filter-content dropdown-content" data-content="1">
                        <div id="MainNewsSearch_date-list-filter"
                          class="filter isDropdown filter-list"
                          data-filter-type="filter-list">
                          <div
                            class="list content-scroll initialised-filterScrollOnDropdownFilterOpen">
                            <div class="filter-part filter-side-padding">
                              <div class="title">Time added</div>
                              <div class="subtitle">Determines when the news was added.
                              </div>
                              <div id="MainNewsSearch_dateRange-filter"
                                class="filter radio-list" data-filter-type="radio-list">
                                <input data-limit-text="1" data-update-timeout="500"
                                  pjax-search="1" name="dateRange" id="dateRange"
                                  type="hidden">
                                <div class="list">
                                  <div class="range-wrapper">
                                    <span
                                      class="filter-radio-item range-item predefine-item"
                                      data-value="today"
                                      data-name="Today">Today</span> <span
                                      class="filter-radio-item range-item predefine-item"
                                      data-value="last7days"
                                      data-name="Last 7 days">Last 7 days</span>
                                    <span
                                      class="filter-radio-item range-item predefine-item"
                                      data-value="last30days"
                                      data-name="Last 30 days">Last 30 days</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="filter-part filter-side-padding">
                              <div class="title">News expires</div>
                              <div class="subtitle">Determines when the news will expire.
                              </div>
                              <div id="MainNewsSearch_expiryRange-filter"
                                class="filter radio-list" data-filter-type="radio-list">
                                <input data-limit-text="1" data-update-timeout="500"
                                  pjax-search="1" name="expiryRange" id="expiryRange"
                                  type="hidden">
                                <div class="list">
                                  <div class="range-wrapper">
                                    <span
                                      class="filter-radio-item range-item predefine-item"
                                      data-value="within24h"
                                      data-name="Within 24h">Within 24h</span>
                                    <span
                                      class="filter-radio-item range-item predefine-item"
                                      data-value="within48h"
                                      data-name="Within 48h">Within 48h</span>
                                    <span
                                      class="filter-radio-item range-item predefine-item"
                                      data-value="withinWeek"
                                      data-name="Within week">Within week</span>
                                    <span
                                      class="filter-radio-item range-item predefine-item"
                                      data-value="within2Weeks"
                                      data-name="Within 2 weeks">Within 2
                                      weeks</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="filter-dropdown" data-open-body-class="open-filter full-overlay"
                      data-auto-margin="1"><span class="current"><span
                          class="text">Tag</span><span class="arrow-icon hide-on-open"><svg
                            pointer-events="all" class="svg-icon svg-icon-icon-back">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-back">
                            </use>
                          </svg></span><span class="close-tab"><svg pointer-events="all"
                            class="svg-icon svg-icon-icon-x">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x">
                            </use>
                          </svg></span></span>
                      <div class="filter-content dropdown-content" data-content="1">
                        <div id="MainNewsSearch_tags-filter"
                          class="filter isDropdown checkboxes-list"
                          data-filter-type="checkboxes-list"><input data-all-text="all"
                            data-empty-text="all" value="" data-limit-text="1"
                            data-update-timeout="1000" pjax-search="1" name="tags" id="tags"
                            type="hidden">
                          <div class="search"><svg class="search-icon svg-icon svg-icon-zoom"
                              pointer-events="all">
                              <use
                                xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-zoom">
                              </use>
                            </svg><label for="MainNewsSearchtags-filter-search">Search
                              tags</label><input id="MainNewsSearchtags-filter-search"
                              autocomplete="off" data-search-name="tags"
                              class="form-control" type="text" value="" name=""><span
                              class="clear-wrap hidden"><svg
                                class="clear-icon svg-icon svg-icon-icon-x-circle"
                                pointer-events="all">
                                <use
                                  xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x-circle">
                                </use>
                              </svg></span></div>
                          <div class="empty-states hidden empty-filter-content">
                            <div class="icon">
                              <span class="emoji emoji-crystal-ball">🔮</span>
                            </div>
                            <div class="title">
                              No result found for "<span class="search-pattern"></span>"
                            </div>
                          </div>
                          <div
                            class="list content-scroll with-search initialised-filterScrollOnDropdownFilterOpen">
                            <div class="item filter-switch tags-item" data-id="40"
                              data-name="Black Friday PC game deals 2021"><span
                                class="filter-name item-black-friday-pc-game-deals-2021">Black
                                Friday PC game deals 2021</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch tags-item" data-id="45"
                              data-name="Blizzard Black Friday 2021"><span
                                class="filter-name item-blizzard-black-friday-2021">Blizzard
                                Black Friday 2021</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="48"
                              data-name="Blizzard Holiday Sale 2021"><span
                                class="filter-name item-blizzard-holiday-sale-2021">Blizzard
                                Holiday Sale 2021</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="31"
                              data-name="Build a bundle"><span
                                class="filter-name item-build-a-bundle">Build a
                                bundle</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="43"
                              data-name="Cyber Monday gaming deals 2021"><span
                                class="filter-name item-cyber-monday-gaming-deals-2021">Cyber
                                Monday gaming deals 2021</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch tags-item" data-id="17"
                              data-name="EA Play new games"><span
                                class="filter-name item-ea-play-new-games">EA Play new
                                games</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="44"
                              data-name="Epic coupon"><span
                                class="filter-name item-epic-coupon">Epic
                                coupon</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="42"
                              data-name="Epic Games Black Friday 2021"><span
                                class="filter-name item-epic-games-black-friday-2021">Epic
                                Games Black Friday 2021</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="24"
                              data-name="Epic Store free games"><span
                                class="filter-name item-epic-store-free-games">Epic
                                Store free games</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="25"
                              data-name="Fanatical bundles"><span
                                class="filter-name item-fanatical-bundles">Fanatical
                                bundles</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="30"
                              data-name="Free beta keys"><span
                                class="filter-name item-free-beta-keys">Free beta
                                keys</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="29"
                              data-name="Free game trials"><span
                                class="filter-name item-free-game-trials">Free game
                                trials</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="21"
                              data-name="Free GOG games"><span
                                class="filter-name item-free-gog-games">Free GOG
                                games</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="18"
                              data-name="Free Steam keys"><span
                                class="filter-name item-free-steam-keys">Free Steam
                                keys</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="39"
                              data-name="GOG Weekly Sale"><span
                                class="filter-name item-gog-weekly-sale">GOG Weekly
                                Sale</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="12"
                              data-name="Hot news"><span
                                class="filter-name item-hot-news">Hot news</span><span
                                class="switch"><span class="position"></span></span>
                            </div>
                            <div class="item filter-switch tags-item" data-id="27"
                              data-name="Humble Bundle free games"><span
                                class="filter-name item-humble-bundle-free-games">Humble
                                Bundle free games</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="26"
                              data-name="Humble bundles"><span
                                class="filter-name item-humble-bundles">Humble
                                bundles</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="15"
                              data-name="Humble Choice"><span
                                class="filter-name item-humble-choice">Humble
                                Choice</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="28"
                              data-name="Indie Gala bundles"><span
                                class="filter-name item-indie-gala-bundles">Indie Gala
                                bundles</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="32"
                              data-name="Mystery bundle"><span
                                class="filter-name item-mystery-bundle">Mystery
                                bundle</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="47"
                              data-name="Origin Black Friday 2021"><span
                                class="filter-name item-origin-black-friday-2021">Origin
                                Black Friday 2021</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="20"
                              data-name="Origin free games"><span
                                class="filter-name item-origin-free-games">Origin free
                                games</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="11"
                              data-name="Prime Gaming free games"><span
                                class="filter-name item-prime-gaming-free-games">Prime
                                Gaming free games</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="33"
                              data-name="Steam Autumn Sale"><span
                                class="filter-name item-steam-autumn-sale">Steam Autumn
                                Sale</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="41"
                              data-name="Steam Black Friday sale 2021"><span
                                class="filter-name item-steam-black-friday-sale-2021">Steam
                                Black Friday sale 2021</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="22"
                              data-name="Steam free weekend"><span
                                class="filter-name item-steam-free-weekend">Steam free
                                weekend</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="37"
                              data-name="Steam Halloween Sale"><span
                                class="filter-name item-steam-halloween-sale">Steam
                                Halloween Sale</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="36"
                              data-name="Steam Lunar Sale"><span
                                class="filter-name item-steam-lunar-sale">Steam Lunar
                                Sale</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="35"
                              data-name="Steam Summer Sale"><span
                                class="filter-name item-steam-summer-sale">Steam Summer
                                Sale</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="38"
                              data-name="Steam Weeklong Deals"><span
                                class="filter-name item-steam-weeklong-deals">Steam
                                Weeklong Deals</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="34"
                              data-name="Steam Winter Sale"><span
                                class="filter-name item-steam-winter-sale">Steam Winter
                                Sale</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="46"
                              data-name="Ubisoft Black Friday 2021"><span
                                class="filter-name item-ubisoft-black-friday-2021">Ubisoft
                                Black Friday 2021</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="19"
                              data-name="Uplay free games"><span
                                class="filter-name item-uplay-free-games">Uplay free
                                games</span><span class="switch"><span
                                  class="position"></span></span></div>
                            <div class="item filter-switch tags-item" data-id="16"
                              data-name="Xbox Game Pass new games"><span
                                class="filter-name item-xbox-game-pass-new-games">Xbox
                                Game Pass new games</span><span class="switch"><span
                                  class="position"></span></span></div>
                          </div>
                          <div class="more">
                            <span class="turn-all turn-all-off disabled">Turn all off</span>
                            <span class="turn-all turn-all-on">Turn all on</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="MainNewsSearch_view-filter"
                      class="filter active view-radio-list not-clear"
                      data-filter-type="view-radio-list">
                      <div class="filter-view">
                        <div class="list view-action">
                          <input data-limit-text="1" data-update-timeout="500" pjax-search="1"
                            pjax-post="/settings/viewLayout/?type=news%2Findex" name="view"
                            id="view" type="hidden" value="list">
                          <div class="item filter-radio-item filter-view-item active"
                            data-value="list">
                            <span class="link"><svg data-tippy-distance="6"
                                pointer-events="all"
                                class="svg-icon svg-icon-icon-list tippy-initialized"
                                data-tippy="" data-original-title="List">
                                <use
                                  xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-list">
                                </use>
                              </svg></span>
                          </div>
                          <div class="item filter-radio-item filter-view-item"
                            data-value="grid">
                            <span class="link"><svg data-tippy-distance="6"
                                pointer-events="all"
                                class="svg-icon svg-icon-icon-grid tippy-initialized"
                                data-tippy="" data-original-title="Grid">
                                <use
                                  xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-grid">
                                </use>
                              </svg></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="selected-filters pjax-replace active" id="selected-filters">

                    <span class="filter active remove-filter type-filter"
                      data-filter-id="MainNewsSearch_type-filter">
                      <span class="content">
                        <span class="title">Type:</span>
                        <span class="value">Freebies</span>
                      </span>
                      <span class="remove-filter-icon"><svg pointer-events="all"
                          class="svg-icon svg-icon-icon-x-circle">
                          <use
                            xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x-circle">
                          </use>
                        </svg></span>
                    </span>

                  </div>

                </div>
              </div>
            </form>
          </div><!-- form -->
        </div>

        <div class="news-section section-row">
          <div class="col-left list-view" data-form="news-filter-search" id="news-list">
            <div class="wrap_items list ">
              <div class="list-items news-list">
                            ${formattedNews}
              </div>
              <div class="navigation-line">
                <div class="navigation pagination">
                  <div class="list-pager">
                    <ul class="bottom-pagination initialised-paginationScroll-19b2e096"
                      id="news-list-pagination-page-links">
                      <li class="page prev-page disabled"><a class="pjax-link"
                          aria-label="Previous page" href="/news/freebies/"
                          data-pjax-state=""><svg
                            class="svg-icon-prev svg-icon svg-icon-full-arrow-left"
                            pointer-events="all">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-full-arrow-left">
                            </use>
                          </svg><span class="page-label-text"> Previous</span></a></li>
                      <li class="page page-input selected" data-dashlane-rid="7ccd1fcb7bd77646"
                        data-form-type="other"><input class="page-current-input form-control"
                          data-current-page="1" pattern="\d*" maxlength="5" data-min="1"
                          data-max="117" type="text" value="1" name="page-current-input"
                          id="page-current-input" data-dashlane-rid="7819762a84053214"
                          data-form-type="other"><a class="pjax-link" id="page-input-trigger"
                          href="/news/freebies/" data-pjax-state="">1</a></li>
                      <li class="page"><a class="pjax-link" aria-label="Page 2"
                          href="/news/freebies/?page=2" data-pjax-state="">2</a></li>
                      <li class="page"><a class="pjax-link" aria-label="Page 3"
                          href="/news/freebies/?page=3" data-pjax-state="">3</a></li>
                      <li class="page"><a class="pjax-link" aria-label="Page 4"
                          href="/news/freebies/?page=4" data-pjax-state="">4</a></li>
                      <li class="page last-page with-spacer"><a class="pjax-link"
                          aria-label="Last page" href="/news/freebies/?page=117"
                          data-pjax-state=""><span class="page-spacer">...</span>117</a></li>
                      <li class="page next-page"><a class="pjax-link" aria-label="Next page"
                          href="/news/freebies/?page=2" data-pjax-state=""><span
                            class="page-label-text">Next </span><svg
                            class="svg-icon-next svg-icon svg-icon-full-arrow-right"
                            pointer-events="all">
                            <use
                              xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-full-arrow-right">
                            </use>
                          </svg></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="keys tippy-initialized" style="display:none" data-tippy=""
              data-original-title="/news/freebies/">
              <span>9653</span><span>9645</span><span>9644</span><span>9643</span><span>9642</span><span>9630</span><span>9627</span><span>9626</span><span>9624</span><span>9625</span><span>9623</span><span>9619</span><span>9620</span><span>9618</span><span>9617</span><span>9616</span><span>9610</span><span>9609</span>
            </div>
          </div>
          <div class="col-right col-news-content-right pjax-replace with-pagination">
            <div class="widget-side-wrapper">

              <div class="widget-side-box">
                <div class="widget-side-header">
                  <div class="widget-side-title">
                    <h3>Hot news</h3>
                  </div>
                  <div class="widget-side-options">
                    <a href="/news/hot/" class="widget-link-more widget-link-more-ext">More news</a>
                  </div>
                </div>
                <div class="widget-side-content">
                  <div class="widget-side-item-row">
                    <a href="/bundle/the-upcoming-changes-for-humble-choice-in-february-2022/"
                      class="widget-side-full-link"></a>
                    <div class="widget-side-image widget-side-image-news">
                      <img srcset="https://img.gg.deals/16/88/a1f860e29a9078c9946656fe1ce9a9fd615a_90cr48.jpg 1x,https://img.gg.deals/16/88/a1f860e29a9078c9946656fe1ce9a9fd615a_180cr96.jpg 2x"
                        loading="lazy"
                        src="https://img.gg.deals/16/88/a1f860e29a9078c9946656fe1ce9a9fd615a_90cr48.jpg"
                        alt="The upcoming changes for Humble Choice in February 2022" width="90"
                        height="48">
                    </div>
                    <div class="widget-side-info">
                      <a href="/bundle/the-upcoming-changes-for-humble-choice-in-february-2022/"
                        class="widget-side-item-title">The upcoming changes for Humble Choice in
                        February 2022</a>
                    </div>
                  </div>
                  <div class="widget-side-item-row">
                    <a href="/subscription-news/mass-effect-legendary-edition-is-now-available-on-ea-play/"
                      class="widget-side-full-link"></a>
                    <div class="widget-side-image widget-side-image-news">
                      <img srcset="https://img.gg.deals/19/69/cf3791a58be1030aaa53577c63f9c892cc1f_90cr48.jpg 1x,https://img.gg.deals/19/69/cf3791a58be1030aaa53577c63f9c892cc1f_180cr96.jpg 2x"
                        loading="lazy"
                        src="https://img.gg.deals/19/69/cf3791a58be1030aaa53577c63f9c892cc1f_90cr48.jpg"
                        alt="Mass Effect Legendary Edition is now available on EA Play"
                        width="90" height="48">
                    </div>
                    <div class="widget-side-info">
                      <a href="/subscription-news/mass-effect-legendary-edition-is-now-available-on-ea-play/"
                        class="widget-side-item-title">Mass Effect Legendary Edition is now
                        available on EA Play</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="widget-side-pin-wrapper">
                <div class="widget-side-box" id="best-deals-sidebar">
                  <div class="widget-side-header">
                    <div class="widget-side-title">
                      <h3>Best deals</h3>
                    </div>
                    <div class="widget-side-options">
                      <a href="/deals/" class="widget-link-more widget-link-more-ext">More
                        deals</a>
                    </div>
                  </div>
                  <div class="widget-side-content">
                    <div class="widget-side-item-row">
                      <a class="widget-side-full-link" href="/game/gods-will-fall/"></a>
                      <div class="widget-side-image widget-side-image-deals">
                        <img srcset="https://img.gg.deals/d6/6f/7c989a4ddd05fb07e16ee5d966a46e52313d_103x48.jpg 1x,https://img.gg.deals/d6/6f/7c989a4ddd05fb07e16ee5d966a46e52313d_206x96.jpg 2x"
                          loading="lazy"
                          src="https://img.gg.deals/d6/6f/7c989a4ddd05fb07e16ee5d966a46e52313d_103x48.jpg"
                          alt="Gods Will Fall" width="103" height="48">
                      </div>
                      <div class="widget-side-info">
                        <a class="widget-side-item-title" href="/game/gods-will-fall/">Gods Will
                          Fall</a> <span class="widget-side-deal-store">Store: Epic Games
                          Store</span>
                        <span class="widget-side-deal-price price-hl">Free</span>
                      </div>
                    </div>
                    <div class="widget-side-item-row">
                      <a class="widget-side-full-link" href="/game/supraland/"></a>
                      <div class="widget-side-image widget-side-image-deals">
                        <img srcset="https://img.gg.deals/11/f2/05266ecfb7851d92d4b98c679438904c4012_103x48.jpg 1x,https://img.gg.deals/11/f2/05266ecfb7851d92d4b98c679438904c4012_206x96.jpg 2x"
                          loading="lazy"
                          src="https://img.gg.deals/11/f2/05266ecfb7851d92d4b98c679438904c4012_103x48.jpg"
                          alt="Supraland" width="103" height="48">
                      </div>
                      <div class="widget-side-info">
                        <a class="widget-side-item-title" href="/game/supraland/">Supraland</a>
                        <span class="widget-side-deal-store">Store: Fanatical</span>
                        <span class="widget-side-deal-price">$4.99</span>
                      </div>
                    </div>
                    <div class="widget-side-item-row">
                      <a class="widget-side-full-link" href="/game/seven-the-days-long-gone/"></a>
                      <div class="widget-side-image widget-side-image-deals">
                        <img srcset="https://img.gg.deals/13/1c/17612ca9068c96356c6dc74b5227fea6168f_103x48.jpg 1x,https://img.gg.deals/13/1c/17612ca9068c96356c6dc74b5227fea6168f_206x96.jpg 2x"
                          loading="lazy"
                          src="https://img.gg.deals/13/1c/17612ca9068c96356c6dc74b5227fea6168f_103x48.jpg"
                          alt="Seven: Enhanced Edition" width="103" height="48">
                      </div>
                      <div class="widget-side-info">
                        <a class="widget-side-item-title"
                          href="/game/seven-the-days-long-gone/">Seven: Enhanced Edition</a>
                        <span class="widget-side-deal-store">Store: Fanatical</span>
                        <span class="widget-side-deal-price">$3.89</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="clear"></div>
    </div><!-- page -->
  </div>

  <div id="footer-main-description" class="container title-container no-padding-sm page-info-widget">
    <div class="sm-side-padding main-description">
      <h2>Why do shops give away free games?</h2>
      <p>New gamers that are not familiar with the gaming industry can be surprised with the fact that that a
        title can be just given for free. But this is actually true and it’s not dodgy at all. Moreover, there
        are a handful of PC game shops that run <strong>free game giveaways</strong> on a regular basis. Most of
        the time, they so in order to attract new users or persuade existing customers to use their services
        more often or generate interest in its product.&nbsp;</p>
      <h2>Game giveaways in one place</h2>
      <p><span style="font-weight: 400;">Freebie games tend to pop around on a regular basis. For example,
        </span><a href="https://gg.deals/news/free-steam-keys/"><strong>free Steam keys</strong></a>
        giveaways<span style="font-weight: 400;"> occur frequently. Most of the time, these are small games,
          which may seem insignificant. However, this doesn’t change the fact that getting a product and not
          paying a penny still feels great. In addition to that, </span><a
          href="https://gg.deals/news/epic-games-store-free-games/"><strong>Epic Games Store free
            games</strong></a><span style="font-weight: 400;"> are given away every Thursday. Among them you
          can find truly interesting titles: everything from indie freebies to major AAA games. On top of
          that, if you are subscribed to Amazon Prime, you are eligible for </span><a
          href="https://gg.deals/news/prime-gaming-free-games/"><strong>Prime Gaming free
            games</strong></a><span style="font-weight: 400;"> which works as a great bonus to the service
          you’re already using. In the beginning of every month the full lineup of freebies is revealed.
          Occasionally, you can encounter some other interesting items, like free Uplay keys and free Origin
          keys. But the attraction of unprecedented generosity does not stop here. On GG.deals you can browse
        </span><a href="https://gg.deals/games/free-games/"><strong>Free To Play Games</strong></a><span
          style="font-weight: 400;"> that let you enjoy great titles without spending a penny.&nbsp;</span>
      </p>
      <h2>Find free game keys with GG.deals</h2>
      <p>Sometimes, the sudden game giveaway can be organised by other stores or directly by the game developers.
        Learning about such a rare occurrence may be difficult for someone who does not search for them on a
        regular basis. GG.deals team covers as many <strong>freebies games</strong> through its article as it
        can. Moreover, in our articles you will find the instructions on how to <strong>download a free
          game</strong>, should the process appear confusing at first sight.&nbsp;</p>
    </div>
  </div>
  <div class="go-to-top-wrapper">
    <div class="container">
      <button id="global-go-to-top" class="btn btn-radius go-to-top btn-white-light pull-right"><svg
          pointer-events="all" class="svg-icon svg-icon-drop-arrow">
          <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-drop-arrow"></use>
        </svg></button>
    </div>
  </div>
  <footer id="ggdeals-footer">
    <div class="container sm-side-padding footer-container">
      <div class="social-row">
        <a class="facebook" target="_blank" rel="nofollow noopener external"
          href="https://www.facebook.com/GG.deals.site"><svg pointer-events="all"
            class="svg-icon svg-icon-social-facebook">
            <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-social-facebook"></use>
          </svg>29.2k likes</a> <a class="twitter" target="_blank" rel="nofollow noopener external"
          href="https://twitter.com/GGdeals/"><svg pointer-events="all"
            class="svg-icon svg-icon-social-twitter">
            <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-social-twitter"></use>
          </svg>17.8k followers</a> <a class="steam" target="_blank" rel="nofollow noopener external"
          href="https://steamcommunity.com/groups/gg_deals"><svg pointer-events="all"
            class="svg-icon svg-icon-drm-steam">
            <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-drm-steam"></use>
          </svg>31.5k users</a>
      </div>
      <div class="content">
        <div class="row description">
          <div class="about tutorials col-md-6">
            <div>
              <strong>Tutorials</strong>
              <ul class="list-unstyled">
                <li>
                  <a href="/page/how-to-activate-steam-cd-key/">How to activate Steam CD key?</a>
                </li>
                <li>
                  <a href="/page/how-to-activate-origin-cd-key/">How to activate Origin CD key?</a>
                </li>
                <li>
                  <a href="/page/how-to-activate-uplay-cd-key/">How to activate Uplay CD key?</a>
                </li>
                <li>
                  <a href="/page/how-to-activate-epic-games-cd-key/">How to activate Epic Games CD
                    key?</a>
                </li>
                <li>
                  <a href="/page/how-to-activate-gog-cd-key/">How to activate GOG CD key?</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="about disclaimer col-md-6">
            <p>
              <strong>Disclaimer.</strong> Powered by Steam, a registered trademark of Valve Corporation.
              GG.deals is in no way affiliated with or endorsed by Valve Corporation.
              We can not guarantee the accuracy or availability of the displayed offers - before you buy
              something in a store, make sure that the prices are correct.
              We make use of affiliate programs for monetizing links on our site.
              GG.deals is a participant in the Amazon Services LLC Associates Program.
            </p>
          </div>
        </div>
        <nav class="nav">
          <a href="#coming">Store list</a>
          <a href="/presets/">Presets</a> <a href="/contact/">Contact us</a> <a href="/privacy/">Privacy
            policy</a> <a href="/terms/">Terms &amp; conditions</a>
          <!--<a href="/faq/">FAQ</a>-->
          <a class="rss" href="/us/news/feed/"><svg pointer-events="all" class="svg-icon svg-icon-social-rss">
              <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-social-rss"></use>
            </svg></a>
        </nav>
        <img class="logo" alt="GG.deals" src="/images/logo/logo-black.svg?v=9f4f8e7b">
        <div class="copyrights">
          © Copyrights. 2022 GG.deals.
          All rights reserved.
          All trademarks are the property of their respective owners.
        </div>
      </div>
    </div>
  </footer>


  <!-- Modal -->
  <div class="login-popup modal popup-modal" id="login-form-modal" role="dialog">
    <div class="modal-dialog">
      <div class="animate zoom">
        <div class="close-popup">
          <span class="close-box" data-dismiss="modal"><svg pointer-events="all"
              class="svg-icon svg-icon-icon-x-circle">
              <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x-circle"></use>
            </svg></span>
        </div>
        <!-- Modal content-->
        <div class="modal-content">
          <div class="popup-content-wrapper">
            <div class="popup-content">
              <header>
                <h4 class="popup-title ellipsis">Sign in</h4>
                <h5 class="popup-subtitle">Sign in through Steam to customize your experience!<br><span
                    class="underline">Don't worry - Steam never shares your login and password with
                    3rd parties.</span> GG.deals will only access your public profile to sync your
                  wishlist and collection.</h5>
              </header>
              <div class="cover-game-box">
                <div class="overlay-grey-48"></div>
                <img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/a6/42/2f57e4ea29930596d2778e4a3a511f7b2abc_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="STAR WARS Jedi: Fallen Order" width="460" height="215"><img
                  class="divider-5 lazyload"
                  data-src="https://img.gg.deals/c7/e8/ff2def77dd932efcd235c2857d05dec5d09c_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="God of War" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/b7/0d/bdd01b745db47c85be7942e2432168c7f0bf_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="MONSTER HUNTER RISE" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/80/b6/51d3ac7685176554d27b9a4fb89f7fe91459_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Ready or Not" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/7d/40/e86985696436d70364df0ecfc05f212be965_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Project Zomboid" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/50/7b/39b5a406597fca528b4d8eb2204189fa3869_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Refunct" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/e9/71/81a2472e19faf2081b0f4b5d1599cb7df585_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Mass Effect Legendary Edition" width="460" height="215"><img
                  class="divider-5 lazyload"
                  data-src="https://img.gg.deals/62/91/9510dd9e1d7a3508297cfe819e0fb5d85ca8_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="ELDEN RING" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/d5/03/3b5d2d91ea92166535c408b53a4abdfded10_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Dead Cells" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/22/d0/283b9abd99e11152149d1def466919ef2c3a_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Red Dead Redemption 2" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/ac/e9/299713c75ee0ce56320173a547dcdc52a876_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Cyberpunk 2077" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/6f/2e/c299218ab55870e8ad984a60d9290f23de93_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Resident Evil Village" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/9c/6a/b1e81818b27ebc7e4fc0a92e514f47b5fb4f_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Internet Cafe Simulator 2" width="460" height="215"><img
                  class="divider-5 lazyload"
                  data-src="https://img.gg.deals/e6/cb/441c02b2e1056e5d288d55d0810298ab7f03_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Dying Light 2 Stay Human" width="460" height="215"><img
                  class="divider-5 lazyload"
                  data-src="https://img.gg.deals/a5/ab/eca204f15643f2ec8ef9e1a88f198974f433_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Death and Taxes" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/fb/1f/9c277e3d40fd4220458939cc92eeef87302f_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Tom Clancy's Rainbow Six Extraction" width="460" height="215"><img
                  class="divider-5 lazyload"
                  data-src="https://img.gg.deals/d3/97/a650841caba48ee1a2a6c4809be67c00932f_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Onimusha: Warlords" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/87/8c/2db7ead21ef9894b27e7292eb875e0a673f3_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Escape From Tarkov" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/10/75/87fdfeef80547670025912e9da1010aa93ca_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Command &amp; Conquer Remastered Collection" width="460" height="215"><img
                  class="divider-5 lazyload"
                  data-src="https://img.gg.deals/42/84/34c2aee4b741a785371ca4826ebb597b7eb7_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="It Takes Two" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/d8/30/91b7552d66f3926c9a5489588ffdfffb9d23_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Battlefield 2042" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/21/6c/0976538d2f1e568575242a359f02c35933f1_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Mafia: Definitive Edition" width="460" height="215"><img
                  class="divider-5 lazyload"
                  data-src="https://img.gg.deals/b2/ec/43b192ac818ee2c784740da6a1b9d180a55c_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Forza Horizon 5" width="460" height="215"><img class="divider-5 lazyload"
                  data-src="https://img.gg.deals/c6/78/e018c914489b4b17be900a208868da8aa9d6_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Call of Duty: Vanguard" width="460" height="215"><img
                  class="divider-5 lazyload"
                  data-src="https://img.gg.deals/2b/7f/f81600bfe2fd824f706bc638c441fd05343c_92x43.jpg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt="Dragon Cliff" width="460" height="215">
                <img class="gg-logo" src="/images/logo/logo-white.svg?v=e5f3dd3a" alt="GG.deals"
                  width="312" height="42">
              </div>

              <ul class="features-list icon-list">
                <li><svg pointer-events="all" class="svg-icon svg-icon-icon-tick">
                    <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-tick"></use>
                  </svg>Create price drop alerts</li>
                <li><svg pointer-events="all" class="svg-icon svg-icon-icon-tick">
                    <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-tick"></use>
                  </svg>Link your Steam wishlist and library</li>
                <li><svg pointer-events="all" class="svg-icon svg-icon-icon-tick">
                    <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-tick"></use>
                  </svg> Save filters as custom presets</li>
              </ul>
              <div class="form-actions">
                <button data-dismiss="modal" class="btn btn-grey-light" name="yt0"
                  type="button">Cancel</button> <a class="btn btn-black flex-pull-right"
                  rel="nofollow" href="/user/login/?return=%2Fnews%2Ffreebies%2F">Sign in through
                  Steam</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="coming-popup with-close-btn modal popup-modal" id="coming-modal" role="dialog">
    <div class="modal-dialog">
      <div class="animate zoom">
        <div class="close-popup">
          <span class="close-box" data-dismiss="modal"><svg pointer-events="all"
              class="svg-icon svg-icon-icon-x-circle">
              <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x-circle"></use>
            </svg></span>
        </div>
        <!-- Modal content-->
        <div class="modal-content">
          <div class="popup-content-wrapper">
            <div class="popup-content">
              <header>
                <h4 class="popup-title ellipsis">Coming soon</h4>
                <h5 class="popup-subtitle">We're working hard to implement this feature. Please be
                  patient and check back soon!</h5>
              </header><span class="emoji emoji-racket">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div id="ajax-modal" class="modal popup-modal" role="dialog">
    <div class="modal-dialog">
      <div class="animate ">
        <div class="close-popup">
          <span class="close-box" data-dismiss="modal"><svg pointer-events="all"
              class="svg-icon svg-icon-icon-x-circle">
              <use xlink:href="/images/svgs/icons.svg?v=aa291c9c#svg-icon-icon-x-circle"></use>
            </svg></span>
        </div>
        <!-- Modal content-->
        <div class="modal-content">
        </div>
      </div>
    </div>
  </div>

  <script src="/scripts/vendor.js?v=2842e779"></script>
  <script src="/scripts/main.js?v=20ebae45"></script>
  <script>
    window.cookieconsent.initialise({ "palette": { "popup": { "background": "#252e39" }, "button": { "background": "#14a7d0" } }, "theme": "classic", "content": { "message": "By using the website, you accept our privacy policy", "dismiss": "Got it!", "link": "read more", "href": "\/privacy\/" }, "elements": { "messagelink": "\u003Cspan id=\u0022cookieconsent:desc\u0022 class=\u0022cc-message\u0022\u003E{{message}} (\u003Ca aria-label=\u0022read privacy policy\u0022 role=button tabindex=\u00220\u0022 class=\u0022cc-link\u0022 href=\u0022{{href}}\u0022\u003E{{link}}\u003C\/a\u003E).\u003C\/span\u003E" } });
    jQuery(function ($) {
      (function () { const csrfParam = $("meta[name=csrf-param]").attr("content"); const csrfToken = $("meta[name=csrf-token]").attr("content"); if (csrfParam && csrfToken) { $.ajaxPrefilter(function (options, originalOptions) { if ((options.type === "POST" || options.type === "post") && (originalOptions.type === "POST" || originalOptions.type === "post")) { let csrfObj = {}; csrfObj[csrfParam] = csrfToken; options.data = $.param($.extend($.deparam(options.data || ""), csrfObj)); } }); } })();
      initScripts('presetsMenu', function (elements) {
        elements.each(function () {
          var presetsContainer = $(this); var presetsLimit = 5; function presetsContainerInit() {
            presetsContainer.removeClass('presets-initialized presets-cropped'); presetsContainer.find('.menu-item').removeClass('overflowing-preset hidden'); if (presetsContainer.find('.preset-more-btn').length) { presetsContainer.find('.preset-more-btn').remove(); }
            var presetsContainerData = { top: presetsContainer.offset().top, height: presetsContainer.innerHeight(), cropped: false, }; var presetsCounter = 0; presetsContainer.find('.menu-item').each(function () {
              presetsCounter++; if ($(this).offset().top > (presetsContainerData['top'] + presetsContainerData['height']) || presetsCounter > presetsLimit) {
                if (!$(this).hasClass('active')) { $(this).addClass('overflowing-preset hidden'); }
                presetsContainerData['cropped'] = true;
              }
            }); presetsContainer.addClass('presets-initialized'); if (presetsContainerData['cropped']) { presetsContainer.addClass('presets-cropped'); presetsContainer.append('<div class="menu-item preset-more-btn"><a class="menu-item-link" href="#"><span class="text">More</span></a></div>'); if (presetsContainer.find('.preset-more-btn').offset().top > (presetsContainerData['top'] + presetsContainerData['height'])) { $(presetsContainer.find('.menu-item:not(.overflowing-preset):not(.preset-more-btn)').get().reverse()).each(function () { if (presetsContainer.find('.preset-more-btn').offset().top > (presetsContainerData['top'] + presetsContainerData['height'])) { $(this).addClass('overflowing-preset hidden'); } }); } }
          }
          presetsContainerInit(); function presetsContainerToggle() { var presetsMoreBtn = presetsContainer.find('.preset-more-btn'); if (presetsContainer.hasClass('expanded')) { presetsContainer.find('.menu-item.overflowing-preset:not(.active)').each(function () { $(this).addClass('hidden'); }); presetsContainer.removeClass('expanded'); presetsMoreBtn.find('.text').text('More'); } else { presetsContainer.find('.menu-item.overflowing-preset').each(function () { $(this).removeClass('hidden'); }); presetsContainer.addClass('expanded'); presetsMoreBtn.find('.text').text('Less'); } }
          presetsContainer.on('click', '.preset-more-btn > a', function (e) { e.preventDefault(); presetsContainerToggle(); }); var windowWidth = $(window).width(); var windowTO; $(window).on('resize', function () { clearTimeout(windowTO); if (windowWidth != $(window).width()) { windowWidth = $(window).width(); windowTO = setTimeout(function () { presetsContainerInit(); }, 200); } });
        });
      });
      Forms.Filter.ListSearch.create(document.getElementById("MainNewsSearch_store-filter"), {});
      initScripts('filterScrollOnDropdownFilterOpen', function (elements) { Widgets.Scroller.initOnDropdownFilterOpen(elements.toArray(), { "scrollbars": { "autoHide": "never" }, "overflowBehavior": { "x": "hidden" }, "onlyOverflowed": false, "className": "os-theme-thin-dark" }); });
      Forms.Filter.ListSearch.create(document.getElementById("MainNewsSearch_tags-filter"), {});
      Forms.Filter.Manager.initFilters("[data-filter-type]");
      jQuery('#news-list').yiiListView({ 'ajaxUpdate': [], 'ajaxVar': false, 'pagerClass': 'list\x2Dpager', 'loadingClass': 'list\x2Dview\x2Dloading', 'sorterClass': 'sorter', 'enableHistory': true, 'afterAjaxUpdate': function () { initDescriptionDotDot(); Forms.Filter.Manager.triggerInit(); $(document).trigger('initTooltips'); $(document).trigger('swalLink'); Component.Tags.autoHideForList('news-container'); initSideGallery(200); } });
      initScripts('timeagoShort', function (elements) { timeagoInstance.render(elements.toArray(), "en_short"); });
      initScripts('trimNewsLead', function (elements) { trimNewsLead(elements); });
      initScripts('timeago', function (elements) { timeagoInstance.render(elements.toArray(), "en_full"); });
      initScripts('paginationScroll-19b2e096', function (elements) {
        elements.find('li a').on('click', function () { scrollToAnchor('news-container'); }); elements.find('#page-current-input').on('keyup', function () { var pageInput = $(this).closest('.page-input'); var thisPage = $(this).val() == '' ? 1 : parseInt($(this).val()); pageInput.find('.pjax-link').text(thisPage); }); elements.find('#page-current-input').on('change', function () {
          var pageInput = $(this).closest('.page-input'); var pageValue = parseInt($(this).val()); var thisPage = Number.isInteger(pageValue) ? pageValue : 1; var thisPageCurrent = parseInt($(this).attr('data-current-page')); var thisPageMin = $(this).attr('data-min'); var thisPageMax = $(this).attr('data-max'); if (thisPage != thisPageCurrent) {
            if (thisPage < thisPageMin) { thisPage = thisPageMin; }
            if (thisPage > thisPageMax) { thisPage = thisPageMax; }
            $(this).val(thisPage); var thisPageLinkUrl = pageInput.find('.pjax-link').attr('href'); var newPageParam = updateURLParameter(thisPageLinkUrl, 'page', thisPage); pageInput.find('.pjax-link').attr('href', newPageParam)[0].click();
          }
        });
      });
      Forms.FilterForm.instance('news-filter-search', 'news-list'); Component.Tags.autoHideForList('news-container');
      initGlobalScript('pinNewsSideBoxes', function () {
        let oldWidth = window.innerWidth; window.addEventListener('resize', function () {
          if (oldWidth !== window.innerWidth) {
            oldWidth = window.innerWidth
            if (window.innerWidth >= 1200) { initGlobalScript('pinNewsSideBoxes-onscroll', function () { $(window).on('scroll', function () { pinNewsSideBoxes(); }); }); }
          }
        });
      });
      if (window.innerWidth >= 1200) { initGlobalScript('pinNewsSideBoxes-onscroll', function () { $(window).on('scroll', function () { pinNewsSideBoxes(); }); }); };
      setToastrOptions({ "closeButton": true, "closeHtml": "\u003Cbutton\u003E\u003Csvg pointer-events=\u0022all\u0022 class=\u0022svg-icon svg-icon-icon-x-circle-white\u0022\u003E\u003Cuse xlink:href=\u0022\/images\/svgs\/icons.svg?v=aa291c9c#svg-icon-icon-x-circle-white\u0022\u003E\u003C\/use\u003E\u003C\/svg\u003E\u003C\/button\u003E", "progressBar": true, "progressBarSideMargin": 0, "positionClass": "toast-bottom-center", "showDuration": "300", "hideDuration": "0", "timeOut": 6000 });
      swalLinkSetCloseIcon("\u003Csvg pointer-events=\u0022all\u0022 class=\u0022svg-icon svg-icon-icon-x-circle\u0022\u003E\u003Cuse xlink:href=\u0022\/images\/svgs\/icons.svg?v=aa291c9c#svg-icon-icon-x-circle\u0022\u003E\u003C\/use\u003E\u003C\/svg\u003E");
    });
  </script>


  <script type="text/javascript"
    id="">window.jQuery && jQuery("a").mousedown(function (a) { 2 == a.which && dataLayer.push({ "nonleft.href": this.href, "nonleft.text": this.text, "nonleft.id": this.id, "gtm.element": this, "gtm.elementClasses": this.className, "gtm.elementUrl": this.href, event: "gtm.click" }) });</script>
  <iframe
    style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"
    name="_hjRemoteVarsFrame" title="_hjRemoteVarsFrame" id="_hjRemoteVarsFrame"
    src="https://vars.hotjar.com/box-21ccaa45726c0f3c8c458f7a87eb2298.html"
    data-dashlane-frameid="307090161666"></iframe>
  <script type="text/javascript" id="">"function" === typeof gaExperiment && gaExperiment();</script>
</body>

</html>`;
};

export default getPage;
