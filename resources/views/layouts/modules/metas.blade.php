@if (env('APP_ENV') == 'production')
    <link rel="icon" type="image/png" href="{{ asset('favicon/favicon-96x96.png') }}" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon/favicon.svg') }}" />
    <link rel="shortcut icon" href="{{ asset('favicon/favicon.ico') }}" />
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('favicon/apple-touch-icon.png') }}" />
    <meta name="apple-mobile-web-app-title" content="Almasur" />
    <link rel="manifest" href="{{ asset('favicon/site.webmanifest') }}" />


    <meta name="description"
        content="Tu vida est&aacute; siempre en movimiento, por eso lo que necesitas es un lugar donde los tuyos vivan felices y con todos los servicios al alcance de la mano.&iexcl;Almasur ser&aacute; el centro de tu vida!" />
    <meta name="author" content="{{ config('app.name', 'Almasur') }}" />
    <meta property="og:type" content="es_MX" />
    <meta property="og:locale" content="website" />
    <meta property="og:site_name" content="{{ config('app.name', 'Almasur') }}" />
    <meta property="og:title" content="{{ config('app.name', 'Almasur') }}" />
    <meta property="og:url" content="{{ config('app.url') }}" />
    <meta property="og:description"
        content="Tu vida est&aacute; siempre en movimiento, por eso lo que necesitas es un lugar donde los tuyos vivan felices y con todos los servicios al alcance de la mano.&iexcl;Almasur ser&aacute; el centro de tu vida!" />
    <meta property="og:image" content="{{ asset('img/fb.png') }}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />

    <script type="text/javascript">
        (function(c, l, a, r, i, t, y) {
            c[a] = c[a] || function() {
                (c[a].q = c[a].q || []).push(arguments)
            };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "qezn73wnvb");
    </script>


    <!-- Meta Pixel Code -->
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 1181515380176616);
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1181515380176616&ev=PageView&noscript=1" /></noscript>
@endif
