function headers() {
    var link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../css/styles.css";
    document.head.appendChild(link1);

    var link2 = document.createElement("link");
    link2.rel = "preconnect";
    link2.href = "https://fonts.googleapis.com";
    document.head.appendChild(link2);

    var link3 = document.createElement("link");
    link3.rel = "preconnect";
    link3.href = "https://fonts.gstatic.com";
    link3.crossOrigin = "anonymous";
    document.head.appendChild(link3);

    var link4 = document.createElement("link");
    link4.rel = "stylesheet";
    link4.href = "https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed&display=swap";
    document.head.appendChild(link4);
}

headers();
/*
    <head>
        <link rel="stylesheet" href="css/styles.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed&display=swap" rel="stylesheet">
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </head>
*/