import { widgetVariablesStyle } from "./widgetVariables.style";

export const widgetGlobalStyle = `
  .widget-global-style {
    html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
    }
    .bg-Auto {
      background-color: ${widgetVariablesStyle["$car-color"]};
    }
    // .bg-Casa {
    //   background-color: ${widgetVariablesStyle["$house-color"]};
    // }
    // .bg-Famiglia {
    //   background-color: ${widgetVariablesStyle["$famiglia-color"]};
    // }
    // .bg-Salute {
    //   background-color: ${widgetVariablesStyle["$salute-color"]};
    // }
    .bg-Mobilita {
      background-color: ${widgetVariablesStyle["$mobility-color"]};
    }
    // .bg-Viaggi {
    //   background-color: ${widgetVariablesStyle["$viaggi-color"]};
    // }
    // .bg-Pet {
    //   background-color: ${widgetVariablesStyle["$pet-color"]};
    // }
    // .bg-Infortuni {
    //   background-color: ${widgetVariablesStyle["$infortuni-color"]};
    // }
    
    .bg-Casa {
      background-color: ${widgetVariablesStyle["$house-color"]} !important;
    }
    .bg-Famiglia {
      background-color: ${widgetVariablesStyle["$house-color"]} !important;
    }
    .bg-Infortuni {
      background-color: ${widgetVariablesStyle["$infortuni-color"]} !important;
    }
    .bg-Pet {
      background-color: ${widgetVariablesStyle["$pet-color"]} !important;
    }
    .bg-Veicolo {
      background-color: ${widgetVariablesStyle["$car-color"]} !important;
    }
    .bg-Viaggi {
      background-color: ${widgetVariablesStyle["$viaggi-color"]} !important;
    }
    .bg-Mobilità {
      background-color: ${widgetVariablesStyle["$mobility-color"]} !important;
    }
    .bg-Salute {
      background-color: ${widgetVariablesStyle["$salute-color"]} !important;
    }
    .bg-Persona {
      background-color: ${widgetVariablesStyle["$salute-color"]} !important;
    }
  
    .bd-Casa {
      border-color: ${widgetVariablesStyle["$house-color"]} !important;
    }
    .bd-Famiglia {
      border-color: ${widgetVariablesStyle["$house-color"]} !important;
    }
    .bd-Infortuni {
      border-color: ${widgetVariablesStyle["$infortuni-color"]} !important;
    }
    .bd-Pet {
      border-color: ${widgetVariablesStyle["$pet-color"]} !important;
    }
    .bd-Veicolo {
      border-color: ${widgetVariablesStyle["$car-color"]} !important;
    }
    .bd-Viaggi {
      border-color: ${widgetVariablesStyle["$viaggi-color"]} !important;
    }
    .bd-Mobilità {
      border-color: ${widgetVariablesStyle["$mobility-color"]} !important;
    }
    .bd-Salute {
      border-color: ${widgetVariablesStyle["$salute-color"]} !important;
    }
    .bd-Persona {
      border-color: ${widgetVariablesStyle["$salute-color"]} !important;
    }
  
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section,
    summary {
      display: block;
    }
    audio,
    canvas,
    progress,
    video {
      display: inline-block;
      vertical-align: baseline;
    }
    audio:not([controls]) {
      display: none;
      height: 0;
    }
    [hidden],
    template {
      display: none;
    }
    a {
      background-color: transparent;
      text-decoration: underline;
    }
    a:active,
    a:hover {
      outline: 0;
    }
    abbr[title] {
      border-bottom: 1px dotted;
    }
    b,
    strong {
      font-weight: 700;
      font-family: ${widgetVariablesStyle["$bold"]};
    }
    dfn {
      font-style: italic;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    mark {
      background: #ff0;
      color: #000;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sup {
      top: -0.5em;
    }
    sub {
      bottom: -0.25em;
    }
    img {
      border: 0;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    figure {
      margin: 1em 40px;
    }
    hr {
      box-sizing: content-box;
      height: 0;
    }
    pre {
      overflow: auto;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      color: inherit;
      font: inherit;
      margin: 0;
    }
    button {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
      -webkit-appearance: button;
      cursor: pointer;
    }
    button[disabled],
    html input[disabled] {
      cursor: default;
    }
    button::-moz-focus-inner,
    input::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    input {
      line-height: normal;
    }
    input[type="checkbox"],
    input[type="radio"] {
      box-sizing: border-box;
      padding: 0;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    input[type="search"] {
      -webkit-appearance: textfield;
      box-sizing: content-box;
    }
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
    }
    legend {
      border: 0;
      padding: 0;
    }
    textarea {
      overflow: auto;
    }
    optgroup {
      font-weight: 700;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    td,
    th {
      padding: 0;
    } /*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
    @media print {
      *,
      :after,
      :before {
        background: 0 0 !important;
        color: #000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
      }
      a,
      a:visited {
        text-decoration: underline;
      }
      a[href]:after {
        content: " (" attr(href) ")";
      }
      abbr[title]:after {
        content: " (" attr(title) ")";
      }
      a[href^="#"]:after,
      a[href^="javascript:"]:after {
        content: "";
      }
      blockquote,
      pre {
        border: 1px solid #999;
        page-break-inside: avoid;
      }
      thead {
        display: table-header-group;
      }
      img,
      tr {
        page-break-inside: avoid;
      }
      img {
        max-width: 100% !important;
      }
      h2,
      h3,
      p {
        orphans: 3;
        widows: 3;
      }
      h2,
      h3 {
        page-break-after: avoid;
      }
      .navbar {
        display: none;
      }
      .btn > .caret,
      .dropup > .btn > .caret {
        border-top-color: #000 !important;
      }
      .label {
        border: 1px solid #000;
      }
      .table {
        border-collapse: collapse !important;
      }
      .table td,
      .table th {
        background-color: ${widgetVariablesStyle["$white"]} !important;
      }
      .table-bordered td,
      .table-bordered th {
        border: 1px solid #ddd !important;
      }
    }
  
    * {
      box-sizing: border-box;
    }
    :after,
    :before {
      box-sizing: border-box;
    }
    html {
      font-size: 10px;
      -webkit-tap-highlight-color: transparent;
    }
    body {
      line-height: 1.42857143;
      color: #333;
      background-color: ${widgetVariablesStyle["$white"]};
    }
    button,
    input,
    select,
    textarea {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    a, a:not([href]):not([class]) {
      color: #183a56;
      text-decoration: underline;
      font-family: 'Unipol Bold';
    }
    a:focus,
    a:hover {
      color: #23527c;
      text-decoration: underline;
    }
    a:focus,
    button:focus {
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: -2px;
    }
    figure {
      margin: 0;
    }
    img {
      vertical-align: middle;
    }
    .img-responsive {
      display: block;
      max-width: 100%;
      height: auto;
    }
    .img-rounded {
      border-radius: 6px;
    }
    .img-thumbnail {
      padding: 4px;
      line-height: 1.42857143;
      background-color: ${widgetVariablesStyle["$white"]};
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
      display: inline-block;
      max-width: 100%;
      height: auto;
    }
    .img-circle {
      border-radius: 50%;
    }
    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 0;
      border-top: 1px solid #eee;
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
    .sr-only-focusable:active,
    .sr-only-focusable:focus {
      position: static;
      width: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      clip: auto;
    }
    [role="button"] {
      cursor: pointer;
    }
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;
      color: inherit;
    }
    .h1 .small,
    .h1 small,
    .h2 .small,
    .h2 small,
    .h3 .small,
    .h3 small,
    .h4 .small,
    .h4 small,
    .h5 .small,
    .h5 small,
    .h6 .small,
    .h6 small,
    h1 .small,
    h1 small,
    h2 .small,
    h2 small,
    h3 .small,
    h3 small,
    h4 .small,
    h4 small,
    h5 .small,
    h5 small,
    h6 .small,
    h6 small {
      font-weight: 400;
      line-height: 1;
      color: #777;
    }
    .h1,
    .h2,
    .h3,
    h1,
    h2,
    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .h1 .small,
    .h1 small,
    .h2 .small,
    .h2 small,
    .h3 .small,
    .h3 small,
    h1 .small,
    h1 small,
    h2 .small,
    h2 small,
    h3 .small,
    h3 small {
      font-size: 65%;
    }
    .h4,
    .h5,
    .h6,
    h4,
    h5,
    h6 {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .h4 .small,
    .h4 small,
    .h5 .small,
    .h5 small,
    .h6 .small,
    .h6 small,
    h4 .small,
    h4 small,
    h5 .small,
    h5 small,
    h6 .small,
    h6 small {
      font-size: 75%;
    }
    .h1,
    h1 {
      font-size: 36px;
    }
    .h2,
    h2 {
      font-size: 30px;
    }
    .h3,
    h3 {
      font-size: 24px;
    }
    .h4,
    h4 {
      font-size: 18px;
    }
    .h5,
    h5 {
      font-size: 14px;
    }
    .h6,
    h6 {
      font-size: 12px;
    }
    p {
      margin: 0 0 10px;
    }
    .lead {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.4;
    }
    @media (min-width: 768px) {
      .lead {
        font-size: 21px;
      }
    }
    .small,
    small {
      font-size: 85%;
    }
    .mark,
    mark {
      background-color: #fcf8e3;
      padding: 0.2em;
    }
    .text-left {
      text-align: left;
    }
    .text-right {
      text-align: right;
    }
    .text-center {
      text-align: center;
    }
    .text-justify {
      text-align: justify;
    }
    .text-nowrap {
      white-space: nowrap;
    }
    .text-lowercase {
      text-transform: lowercase;
    }
    .initialism,
    .text-uppercase {
      text-transform: uppercase;
    }
    .text-capitalize {
      text-transform: capitalize;
    }
    .text-muted {
      color: #777;
    }
    .text-primary {
      color: #337ab7;
    }
    a.text-primary:focus,
    a.text-primary:hover {
      color: #286090;
    }
    .text-success {
      color: #3c763d;
    }
    a.text-success:focus,
    a.text-success:hover {
      color: #2b542c;
    }
    .text-info {
      color: #31708f;
    }
    a.text-info:focus,
    a.text-info:hover {
      color: #245269;
    }
    .text-warning {
      color: #8a6d3b;
    }
    a.text-warning:focus,
    a.text-warning:hover {
      color: #66512c;
    }
    .text-danger {
      color: #a94442;
    }
    a.text-danger:focus,
    a.text-danger:hover {
      color: #843534;
    }
    .bg-primary {
      color: ${widgetVariablesStyle["$white"]};
    }
    .bg-primary {
      background-color: #337ab7;
    }
    a.bg-primary:focus,
    a.bg-primary:hover {
      background-color: #286090;
    }
    .bg-success {
      background-color: #dff0d8;
    }
    a.bg-success:focus,
    a.bg-success:hover {
      background-color: #c1e2b3;
    }
    .bg-info {
      background-color: #d9edf7;
    }
    a.bg-info:focus,
    a.bg-info:hover {
      background-color: #afd9ee;
    }
    .bg-warning {
      background-color: #fcf8e3;
    }
    a.bg-warning:focus,
    a.bg-warning:hover {
      background-color: #f7ecb5;
    }
    .bg-danger {
      background-color: #f2dede;
    }
    a.bg-danger:focus,
    a.bg-danger:hover {
      background-color: #e4b9b9;
    }
    .page-header {
      padding-bottom: 9px;
      margin: 40px 0 20px;
      border-bottom: 1px solid #eee;
    }
    ol,
    ul {
      margin-top: 0;
      margin-bottom: 10px;
    }
    ol ol,
    ol ul,
    ul ol,
    ul ul {
      margin-bottom: 0;
    }
    .list-unstyled {
      padding-left: 0;
      list-style: none;
    }
    .list-inline {
      padding-left: 0;
      list-style: none;
      margin-left: -5px;
    }
    .list-inline > li {
      display: inline-block;
      padding-left: 5px;
      padding-right: 5px;
    }
    dl {
      margin-top: 0;
      margin-bottom: 20px;
    }
    dd,
    dt {
      line-height: 1.42857143;
    }
    dt {
      font-weight: 700;
    }
    dd {
      margin-left: 0;
    }
    .dl-horizontal dd:after,
    .dl-horizontal dd:before {
      content: " ";
      display: table;
    }
    .dl-horizontal dd:after {
      clear: both;
    }
    @media (min-width: 768px) {
      .dl-horizontal dt {
        float: left;
        width: 160px;
        clear: left;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .dl-horizontal dd {
        margin-left: 180px;
      }
    }
    abbr[data-original-title],
    abbr[title] {
      cursor: help;
      border-bottom: 1px dotted #777;
    }
    .initialism {
      font-size: 90%;
    }
    blockquote {
      padding: 10px 20px;
      margin: 0 0 20px;
      font-size: 17.5px;
      border-left: 5px solid #eee;
    }
    blockquote ol:last-child,
    blockquote p:last-child,
    blockquote ul:last-child {
      margin-bottom: 0;
    }
    blockquote .small,
    blockquote footer,
    blockquote small {
      display: block;
      font-size: 80%;
      line-height: 1.42857143;
      color: #777;
    }
    blockquote .small:before,
    blockquote footer:before,
    blockquote small:before {
      content: "\\2014 \\00A0";
    }
    .blockquote-reverse,
    blockquote.pull-right {
      padding-right: 15px;
      padding-left: 0;
      border-right: 5px solid #eee;
      border-left: 0;
      text-align: right;
    }
    .blockquote-reverse .small:before,
    .blockquote-reverse footer:before,
    .blockquote-reverse small:before,
    blockquote.pull-right .small:before,
    blockquote.pull-right footer:before,
    blockquote.pull-right small:before {
      content: "";
    }
    .blockquote-reverse .small:after,
    .blockquote-reverse footer:after,
    .blockquote-reverse small:after,
    blockquote.pull-right .small:after,
    blockquote.pull-right footer:after,
    blockquote.pull-right small:after {
      content: "\\00A0 \\2014";
    }
    address {
      margin-bottom: 20px;
      font-style: normal;
      line-height: 1.42857143;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    }
    code {
      padding: 2px 4px;
      font-size: 90%;
      color: #c7254e;
      background-color: #f9f2f4;
      border-radius: 4px;
    }
    kbd {
      padding: 2px 4px;
      font-size: 90%;
      color: ${widgetVariablesStyle["$white"]};
      background-color: #333;
      border-radius: 3px;
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
    }
    kbd kbd {
      padding: 0;
      font-size: 100%;
      font-weight: 700;
      box-shadow: none;
    }
    pre {
      display: block;
      padding: 9.5px;
      margin: 0 0 10px;
      font-size: 13px;
      line-height: 1.42857143;
      word-break: break-all;
      word-wrap: break-word;
      color: #333;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    pre code {
      padding: 0;
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      border-radius: 0;
    }
    .pre-scrollable {
      max-height: 340px;
      overflow-y: scroll;
    }
    .container {
      margin-right: auto;
      margin-left: auto;
      padding-left: 4px;
      padding-right: 4px;
    }
    .container:after,
    .container:before {
      content: " ";
      display: table;
    }
    .container:after {
      clear: both;
    }
    @media (min-width: 768px) {
      .container {
        width: 328px;
      }
    }
    @media (min-width: 768px) {
      .container {
        width: 776px;
      }
    }
    @media (min-width: 1280px) {
      .container {
        width: 1280px;
      }
    }
    .container-fluid {
      margin-right: auto;
      margin-left: auto;
      padding-left: 4px;
      padding-right: 4px;
    }
    .container-fluid:after,
    .container-fluid:before {
      content: " ";
      display: table;
    }
    .container-fluid:after {
      clear: both;
    }
    .us-row {
      margin-left: -4px;
      margin-right: -4px;
    }
    .us-row:after,
    .us-row:before {
      content: " ";
      display: table;
    }
    .us-row:after {
      clear: both;
    }
    .col-lg-1,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-13,
    .col-lg-14,
    .col-lg-15,
    .col-lg-16,
    .col-lg-17,
    .col-lg-18,
    .col-lg-19,
    .col-lg-2,
    .col-lg-20,
    .col-lg-21,
    .col-lg-22,
    .col-lg-23,
    .col-lg-24,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-md-1,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-13,
    .col-md-14,
    .col-md-15,
    .col-md-16,
    .col-md-17,
    .col-md-18,
    .col-md-19,
    .col-md-2,
    .col-md-20,
    .col-md-21,
    .col-md-22,
    .col-md-23,
    .col-md-24,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-sm-1,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-13,
    .col-sm-14,
    .col-sm-15,
    .col-sm-16,
    .col-sm-17,
    .col-sm-18,
    .col-sm-19,
    .col-sm-2,
    .col-sm-20,
    .col-sm-21,
    .col-sm-22,
    .col-sm-23,
    .col-sm-24,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-xs-1,
    .col-xs-10,
    .col-xs-11,
    .col-xs-12,
    .col-xs-13,
    .col-xs-14,
    .col-xs-15,
    .col-xs-16,
    .col-xs-17,
    .col-xs-18,
    .col-xs-19,
    .col-xs-2,
    .col-xs-20,
    .col-xs-21,
    .col-xs-22,
    .col-xs-23,
    .col-xs-24,
    .col-xs-3,
    .col-xs-4,
    .col-xs-5,
    .col-xs-6,
    .col-xs-7,
    .col-xs-8,
    .col-xs-9 {
      position: relative;
      min-height: 1px;
      padding-left: 4px;
      padding-right: 4px;
    }
    .col-xs-1,
    .col-xs-10,
    .col-xs-11,
    .col-xs-12,
    .col-xs-13,
    .col-xs-14,
    .col-xs-15,
    .col-xs-16,
    .col-xs-17,
    .col-xs-18,
    .col-xs-19,
    .col-xs-2,
    .col-xs-20,
    .col-xs-21,
    .col-xs-22,
    .col-xs-23,
    .col-xs-24,
    .col-xs-3,
    .col-xs-4,
    .col-xs-5,
    .col-xs-6,
    .col-xs-7,
    .col-xs-8,
    .col-xs-9 {
      float: left;
    }
    .col-xs-1 {
      width: 4.16666667%;
    }
    .col-xs-2 {
      width: 8.33333333%;
    }
    .col-xs-3 {
      width: 12.5%;
    }
    .col-xs-4 {
      width: 16.66666667%;
    }
    .col-xs-5 {
      width: 20.83333333%;
    }
    .col-xs-6 {
      width: 25%;
    }
    .col-xs-7 {
      width: 29.16666667%;
    }
    .col-xs-8 {
      width: 33.33333333%;
    }
    .col-xs-9 {
      width: 37.5%;
    }
    .col-xs-10 {
      width: 41.66666667%;
    }
    .col-xs-11 {
      width: 45.83333333%;
    }
    .col-xs-12 {
      width: 50%;
    }
    .col-xs-13 {
      width: 54.16666667%;
    }
    .col-xs-14 {
      width: 58.33333333%;
    }
    .col-xs-15 {
      width: 62.5%;
    }
    .col-xs-16 {
      width: 66.66666667%;
    }
    .col-xs-17 {
      width: 70.83333333%;
    }
    .col-xs-18 {
      width: 75%;
    }
    .col-xs-19 {
      width: 79.16666667%;
    }
    .col-xs-20 {
      width: 83.33333333%;
    }
    .col-xs-21 {
      width: 87.5%;
    }
    .col-xs-22 {
      width: 91.66666667%;
    }
    .col-xs-23 {
      width: 95.83333333%;
    }
    .col-xs-24 {
      width: 100%;
    }
    .col-xs-pull-0 {
      right: auto;
    }
    .col-xs-pull-1 {
      right: 4.16666667%;
    }
    .col-xs-pull-2 {
      right: 8.33333333%;
    }
    .col-xs-pull-3 {
      right: 12.5%;
    }
    .col-xs-pull-4 {
      right: 16.66666667%;
    }
    .col-xs-pull-5 {
      right: 20.83333333%;
    }
    .col-xs-pull-6 {
      right: 25%;
    }
    .col-xs-pull-7 {
      right: 29.16666667%;
    }
    .col-xs-pull-8 {
      right: 33.33333333%;
    }
    .col-xs-pull-9 {
      right: 37.5%;
    }
    .col-xs-pull-10 {
      right: 41.66666667%;
    }
    .col-xs-pull-11 {
      right: 45.83333333%;
    }
    .col-xs-pull-12 {
      right: 50%;
    }
    .col-xs-pull-13 {
      right: 54.16666667%;
    }
    .col-xs-pull-14 {
      right: 58.33333333%;
    }
    .col-xs-pull-15 {
      right: 62.5%;
    }
    .col-xs-pull-16 {
      right: 66.66666667%;
    }
    .col-xs-pull-17 {
      right: 70.83333333%;
    }
    .col-xs-pull-18 {
      right: 75%;
    }
    .col-xs-pull-19 {
      right: 79.16666667%;
    }
    .col-xs-pull-20 {
      right: 83.33333333%;
    }
    .col-xs-pull-21 {
      right: 87.5%;
    }
    .col-xs-pull-22 {
      right: 91.66666667%;
    }
    .col-xs-pull-23 {
      right: 95.83333333%;
    }
    .col-xs-pull-24 {
      right: 100%;
    }
    .col-xs-push-0 {
      left: auto;
    }
    .col-xs-push-1 {
      left: 4.16666667%;
    }
    .col-xs-push-2 {
      left: 8.33333333%;
    }
    .col-xs-push-3 {
      left: 12.5%;
    }
    .col-xs-push-4 {
      left: 16.66666667%;
    }
    .col-xs-push-5 {
      left: 20.83333333%;
    }
    .col-xs-push-6 {
      left: 25%;
    }
    .col-xs-push-7 {
      left: 29.16666667%;
    }
    .col-xs-push-8 {
      left: 33.33333333%;
    }
    .col-xs-push-9 {
      left: 37.5%;
    }
    .col-xs-push-10 {
      left: 41.66666667%;
    }
    .col-xs-push-11 {
      left: 45.83333333%;
    }
    .col-xs-push-12 {
      left: 50%;
    }
    .col-xs-push-13 {
      left: 54.16666667%;
    }
    .col-xs-push-14 {
      left: 58.33333333%;
    }
    .col-xs-push-15 {
      left: 62.5%;
    }
    .col-xs-push-16 {
      left: 66.66666667%;
    }
    .col-xs-push-17 {
      left: 70.83333333%;
    }
    .col-xs-push-18 {
      left: 75%;
    }
    .col-xs-push-19 {
      left: 79.16666667%;
    }
    .col-xs-push-20 {
      left: 83.33333333%;
    }
    .col-xs-push-21 {
      left: 87.5%;
    }
    .col-xs-push-22 {
      left: 91.66666667%;
    }
    .col-xs-push-23 {
      left: 95.83333333%;
    }
    .col-xs-push-24 {
      left: 100%;
    }
    .col-xs-offset-0 {
      margin-left: 0;
    }
    .col-xs-offset-1 {
      margin-left: 4.16666667%;
    }
    .col-xs-offset-2 {
      margin-left: 8.33333333%;
    }
    .col-xs-offset-3 {
      margin-left: 12.5%;
    }
    .col-xs-offset-4 {
      margin-left: 16.66666667%;
    }
    .col-xs-offset-5 {
      margin-left: 20.83333333%;
    }
    .col-xs-offset-6 {
      margin-left: 25%;
    }
    .col-xs-offset-7 {
      margin-left: 29.16666667%;
    }
    .col-xs-offset-8 {
      margin-left: 33.33333333%;
    }
    .col-xs-offset-9 {
      margin-left: 37.5%;
    }
    .col-xs-offset-10 {
      margin-left: 41.66666667%;
    }
    .col-xs-offset-11 {
      margin-left: 45.83333333%;
    }
    .col-xs-offset-12 {
      margin-left: 50%;
    }
    .col-xs-offset-13 {
      margin-left: 54.16666667%;
    }
    .col-xs-offset-14 {
      margin-left: 58.33333333%;
    }
    .col-xs-offset-15 {
      margin-left: 62.5%;
    }
    .col-xs-offset-16 {
      margin-left: 66.66666667%;
    }
    .col-xs-offset-17 {
      margin-left: 70.83333333%;
    }
    .col-xs-offset-18 {
      margin-left: 75%;
    }
    .col-xs-offset-19 {
      margin-left: 79.16666667%;
    }
    .col-xs-offset-20 {
      margin-left: 83.33333333%;
    }
    .col-xs-offset-21 {
      margin-left: 87.5%;
    }
    .col-xs-offset-22 {
      margin-left: 91.66666667%;
    }
    .col-xs-offset-23 {
      margin-left: 95.83333333%;
    }
    .col-xs-offset-24 {
      margin-left: 100%;
    }
    @media (min-width: 768px) {
      .col-sm-1,
      .col-sm-10,
      .col-sm-11,
      .col-sm-12,
      .col-sm-13,
      .col-sm-14,
      .col-sm-15,
      .col-sm-16,
      .col-sm-17,
      .col-sm-18,
      .col-sm-19,
      .col-sm-2,
      .col-sm-20,
      .col-sm-21,
      .col-sm-22,
      .col-sm-23,
      .col-sm-24,
      .col-sm-3,
      .col-sm-4,
      .col-sm-5,
      .col-sm-6,
      .col-sm-7,
      .col-sm-8,
      .col-sm-9 {
        float: left;
      }
      .col-sm-1 {
        width: 4.16666667%;
      }
      .col-sm-2 {
        width: 8.33333333%;
      }
      .col-sm-3 {
        width: 12.5%;
      }
      .col-sm-4 {
        width: 16.66666667%;
      }
      .col-sm-5 {
        width: 20.83333333%;
      }
      .col-sm-6 {
        width: 25%;
      }
      .col-sm-7 {
        width: 29.16666667%;
      }
      .col-sm-8 {
        width: 33.33333333%;
      }
      .col-sm-9 {
        width: 37.5%;
      }
      .col-sm-10 {
        width: 41.66666667%;
      }
      .col-sm-11 {
        width: 45.83333333%;
      }
      .col-sm-12 {
        width: 50%;
      }
      .col-sm-13 {
        width: 54.16666667%;
      }
      .col-sm-14 {
        width: 58.33333333%;
      }
      .col-sm-15 {
        width: 62.5%;
      }
      .col-sm-16 {
        width: 66.66666667%;
      }
      .col-sm-17 {
        width: 70.83333333%;
      }
      .col-sm-18 {
        width: 75%;
      }
      .col-sm-19 {
        width: 79.16666667%;
      }
      .col-sm-20 {
        width: 83.33333333%;
      }
      .col-sm-21 {
        width: 87.5%;
      }
      .col-sm-22 {
        width: 91.66666667%;
      }
      .col-sm-23 {
        width: 95.83333333%;
      }
      .col-sm-24 {
        width: 100%;
      }
      .col-sm-pull-0 {
        right: auto;
      }
      .col-sm-pull-1 {
        right: 4.16666667%;
      }
      .col-sm-pull-2 {
        right: 8.33333333%;
      }
      .col-sm-pull-3 {
        right: 12.5%;
      }
      .col-sm-pull-4 {
        right: 16.66666667%;
      }
      .col-sm-pull-5 {
        right: 20.83333333%;
      }
      .col-sm-pull-6 {
        right: 25%;
      }
      .col-sm-pull-7 {
        right: 29.16666667%;
      }
      .col-sm-pull-8 {
        right: 33.33333333%;
      }
      .col-sm-pull-9 {
        right: 37.5%;
      }
      .col-sm-pull-10 {
        right: 41.66666667%;
      }
      .col-sm-pull-11 {
        right: 45.83333333%;
      }
      .col-sm-pull-12 {
        right: 50%;
      }
      .col-sm-pull-13 {
        right: 54.16666667%;
      }
      .col-sm-pull-14 {
        right: 58.33333333%;
      }
      .col-sm-pull-15 {
        right: 62.5%;
      }
      .col-sm-pull-16 {
        right: 66.66666667%;
      }
      .col-sm-pull-17 {
        right: 70.83333333%;
      }
      .col-sm-pull-18 {
        right: 75%;
      }
      .col-sm-pull-19 {
        right: 79.16666667%;
      }
      .col-sm-pull-20 {
        right: 83.33333333%;
      }
      .col-sm-pull-21 {
        right: 87.5%;
      }
      .col-sm-pull-22 {
        right: 91.66666667%;
      }
      .col-sm-pull-23 {
        right: 95.83333333%;
      }
      .col-sm-pull-24 {
        right: 100%;
      }
      .col-sm-push-0 {
        left: auto;
      }
      .col-sm-push-1 {
        left: 4.16666667%;
      }
      .col-sm-push-2 {
        left: 8.33333333%;
      }
      .col-sm-push-3 {
        left: 12.5%;
      }
      .col-sm-push-4 {
        left: 16.66666667%;
      }
      .col-sm-push-5 {
        left: 20.83333333%;
      }
      .col-sm-push-6 {
        left: 25%;
      }
      .col-sm-push-7 {
        left: 29.16666667%;
      }
      .col-sm-push-8 {
        left: 33.33333333%;
      }
      .col-sm-push-9 {
        left: 37.5%;
      }
      .col-sm-push-10 {
        left: 41.66666667%;
      }
      .col-sm-push-11 {
        left: 45.83333333%;
      }
      .col-sm-push-12 {
        left: 50%;
      }
      .col-sm-push-13 {
        left: 54.16666667%;
      }
      .col-sm-push-14 {
        left: 58.33333333%;
      }
      .col-sm-push-15 {
        left: 62.5%;
      }
      .col-sm-push-16 {
        left: 66.66666667%;
      }
      .col-sm-push-17 {
        left: 70.83333333%;
      }
      .col-sm-push-18 {
        left: 75%;
      }
      .col-sm-push-19 {
        left: 79.16666667%;
      }
      .col-sm-push-20 {
        left: 83.33333333%;
      }
      .col-sm-push-21 {
        left: 87.5%;
      }
      .col-sm-push-22 {
        left: 91.66666667%;
      }
      .col-sm-push-23 {
        left: 95.83333333%;
      }
      .col-sm-push-24 {
        left: 100%;
      }
      .col-sm-offset-0 {
        margin-left: 0;
      }
      .col-sm-offset-1 {
        margin-left: 4.16666667%;
      }
      .col-sm-offset-2 {
        margin-left: 8.33333333%;
      }
      .col-sm-offset-3 {
        margin-left: 12.5%;
      }
      .col-sm-offset-4 {
        margin-left: 16.66666667%;
      }
      .col-sm-offset-5 {
        margin-left: 20.83333333%;
      }
      .col-sm-offset-6 {
        margin-left: 25%;
      }
      .col-sm-offset-7 {
        margin-left: 29.16666667%;
      }
      .col-sm-offset-8 {
        margin-left: 33.33333333%;
      }
      .col-sm-offset-9 {
        margin-left: 37.5%;
      }
      .col-sm-offset-10 {
        margin-left: 41.66666667%;
      }
      .col-sm-offset-11 {
        margin-left: 45.83333333%;
      }
      .col-sm-offset-12 {
        margin-left: 50%;
      }
      .col-sm-offset-13 {
        margin-left: 54.16666667%;
      }
      .col-sm-offset-14 {
        margin-left: 58.33333333%;
      }
      .col-sm-offset-15 {
        margin-left: 62.5%;
      }
      .col-sm-offset-16 {
        margin-left: 66.66666667%;
      }
      .col-sm-offset-17 {
        margin-left: 70.83333333%;
      }
      .col-sm-offset-18 {
        margin-left: 75%;
      }
      .col-sm-offset-19 {
        margin-left: 79.16666667%;
      }
      .col-sm-offset-20 {
        margin-left: 83.33333333%;
      }
      .col-sm-offset-21 {
        margin-left: 87.5%;
      }
      .col-sm-offset-22 {
        margin-left: 91.66666667%;
      }
      .col-sm-offset-23 {
        margin-left: 95.83333333%;
      }
      .col-sm-offset-24 {
        margin-left: 100%;
      }
    }
    @media (min-width: 768px) {
      .col-md-1,
      .col-md-10,
      .col-md-11,
      .col-md-12,
      .col-md-13,
      .col-md-14,
      .col-md-15,
      .col-md-16,
      .col-md-17,
      .col-md-18,
      .col-md-19,
      .col-md-2,
      .col-md-20,
      .col-md-21,
      .col-md-22,
      .col-md-23,
      .col-md-24,
      .col-md-3,
      .col-md-4,
      .col-md-5,
      .col-md-6,
      .col-md-7,
      .col-md-8,
      .col-md-9 {
        float: left;
      }
      .col-md-1 {
        width: 4.16666667%;
      }
      .col-md-2 {
        width: 8.33333333%;
      }
      .col-md-3 {
        width: 12.5%;
      }
      .col-md-4 {
        width: 16.66666667%;
      }
      .col-md-5 {
        width: 20.83333333%;
      }
      .col-md-6 {
        width: 25%;
      }
      .col-md-7 {
        width: 29.16666667%;
      }
      .col-md-8 {
        width: 33.33333333%;
      }
      .col-md-9 {
        width: 37.5%;
      }
      .col-md-10 {
        width: 41.66666667%;
      }
      .col-md-11 {
        width: 45.83333333%;
      }
      .col-md-12 {
        width: 50%;
      }
      .col-md-13 {
        width: 54.16666667%;
      }
      .col-md-14 {
        width: 58.33333333%;
      }
      .col-md-15 {
        width: 62.5%;
      }
      .col-md-16 {
        width: 66.66666667%;
      }
      .col-md-17 {
        width: 70.83333333%;
      }
      .col-md-18 {
        width: 75%;
      }
      .col-md-19 {
        width: 79.16666667%;
      }
      .col-md-20 {
        width: 83.33333333%;
      }
      .col-md-21 {
        width: 87.5%;
      }
      .col-md-22 {
        width: 91.66666667%;
      }
      .col-md-23 {
        width: 95.83333333%;
      }
      .col-md-24 {
        width: 100%;
      }
      .col-md-pull-0 {
        right: auto;
      }
      .col-md-pull-1 {
        right: 4.16666667%;
      }
      .col-md-pull-2 {
        right: 8.33333333%;
      }
      .col-md-pull-3 {
        right: 12.5%;
      }
      .col-md-pull-4 {
        right: 16.66666667%;
      }
      .col-md-pull-5 {
        right: 20.83333333%;
      }
      .col-md-pull-6 {
        right: 25%;
      }
      .col-md-pull-7 {
        right: 29.16666667%;
      }
      .col-md-pull-8 {
        right: 33.33333333%;
      }
      .col-md-pull-9 {
        right: 37.5%;
      }
      .col-md-pull-10 {
        right: 41.66666667%;
      }
      .col-md-pull-11 {
        right: 45.83333333%;
      }
      .col-md-pull-12 {
        right: 50%;
      }
      .col-md-pull-13 {
        right: 54.16666667%;
      }
      .col-md-pull-14 {
        right: 58.33333333%;
      }
      .col-md-pull-15 {
        right: 62.5%;
      }
      .col-md-pull-16 {
        right: 66.66666667%;
      }
      .col-md-pull-17 {
        right: 70.83333333%;
      }
      .col-md-pull-18 {
        right: 75%;
      }
      .col-md-pull-19 {
        right: 79.16666667%;
      }
      .col-md-pull-20 {
        right: 83.33333333%;
      }
      .col-md-pull-21 {
        right: 87.5%;
      }
      .col-md-pull-22 {
        right: 91.66666667%;
      }
      .col-md-pull-23 {
        right: 95.83333333%;
      }
      .col-md-pull-24 {
        right: 100%;
      }
      .col-md-push-0 {
        left: auto;
      }
      .col-md-push-1 {
        left: 4.16666667%;
      }
      .col-md-push-2 {
        left: 8.33333333%;
      }
      .col-md-push-3 {
        left: 12.5%;
      }
      .col-md-push-4 {
        left: 16.66666667%;
      }
      .col-md-push-5 {
        left: 20.83333333%;
      }
      .col-md-push-6 {
        left: 25%;
      }
      .col-md-push-7 {
        left: 29.16666667%;
      }
      .col-md-push-8 {
        left: 33.33333333%;
      }
      .col-md-push-9 {
        left: 37.5%;
      }
      .col-md-push-10 {
        left: 41.66666667%;
      }
      .col-md-push-11 {
        left: 45.83333333%;
      }
      .col-md-push-12 {
        left: 50%;
      }
      .col-md-push-13 {
        left: 54.16666667%;
      }
      .col-md-push-14 {
        left: 58.33333333%;
      }
      .col-md-push-15 {
        left: 62.5%;
      }
      .col-md-push-16 {
        left: 66.66666667%;
      }
      .col-md-push-17 {
        left: 70.83333333%;
      }
      .col-md-push-18 {
        left: 75%;
      }
      .col-md-push-19 {
        left: 79.16666667%;
      }
      .col-md-push-20 {
        left: 83.33333333%;
      }
      .col-md-push-21 {
        left: 87.5%;
      }
      .col-md-push-22 {
        left: 91.66666667%;
      }
      .col-md-push-23 {
        left: 95.83333333%;
      }
      .col-md-push-24 {
        left: 100%;
      }
      .col-md-offset-0 {
        margin-left: 0;
      }
      .col-md-offset-1 {
        margin-left: 4.16666667%;
      }
      .col-md-offset-2 {
        margin-left: 8.33333333%;
      }
      .col-md-offset-3 {
        margin-left: 12.5%;
      }
      .col-md-offset-4 {
        margin-left: 16.66666667%;
      }
      .col-md-offset-5 {
        margin-left: 20.83333333%;
      }
      .col-md-offset-6 {
        margin-left: 25%;
      }
      .col-md-offset-7 {
        margin-left: 29.16666667%;
      }
      .col-md-offset-8 {
        margin-left: 33.33333333%;
      }
      .col-md-offset-9 {
        margin-left: 37.5%;
      }
      .col-md-offset-10 {
        margin-left: 41.66666667%;
      }
      .col-md-offset-11 {
        margin-left: 45.83333333%;
      }
      .col-md-offset-12 {
        margin-left: 50%;
      }
      .col-md-offset-13 {
        margin-left: 54.16666667%;
      }
      .col-md-offset-14 {
        margin-left: 58.33333333%;
      }
      .col-md-offset-15 {
        margin-left: 62.5%;
      }
      .col-md-offset-16 {
        margin-left: 66.66666667%;
      }
      .col-md-offset-17 {
        margin-left: 70.83333333%;
      }
      .col-md-offset-18 {
        margin-left: 75%;
      }
      .col-md-offset-19 {
        margin-left: 79.16666667%;
      }
      .col-md-offset-20 {
        margin-left: 83.33333333%;
      }
      .col-md-offset-21 {
        margin-left: 87.5%;
      }
      .col-md-offset-22 {
        margin-left: 91.66666667%;
      }
      .col-md-offset-23 {
        margin-left: 95.83333333%;
      }
      .col-md-offset-24 {
        margin-left: 100%;
      }
    }
    @media (min-width: 1280px) {
      .col-lg-1,
      .col-lg-10,
      .col-lg-11,
      .col-lg-12,
      .col-lg-13,
      .col-lg-14,
      .col-lg-15,
      .col-lg-16,
      .col-lg-17,
      .col-lg-18,
      .col-lg-19,
      .col-lg-2,
      .col-lg-20,
      .col-lg-21,
      .col-lg-22,
      .col-lg-23,
      .col-lg-24,
      .col-lg-3,
      .col-lg-4,
      .col-lg-5,
      .col-lg-6,
      .col-lg-7,
      .col-lg-8,
      .col-lg-9 {
        float: left;
      }
      .col-lg-1 {
        width: 4.16666667%;
      }
      .col-lg-2 {
        width: 8.33333333%;
      }
      .col-lg-3 {
        width: 12.5%;
      }
      .col-lg-4 {
        width: 16.66666667%;
      }
      .col-lg-5 {
        width: 20.83333333%;
      }
      .col-lg-6 {
        width: 25%;
      }
      .col-lg-7 {
        width: 29.16666667%;
      }
      .col-lg-8 {
        width: 33.33333333%;
      }
      .col-lg-9 {
        width: 37.5%;
      }
      .col-lg-10 {
        width: 41.66666667%;
      }
      .col-lg-11 {
        width: 45.83333333%;
      }
      .col-lg-12 {
        width: 50%;
      }
      .col-lg-13 {
        width: 54.16666667%;
      }
      .col-lg-14 {
        width: 58.33333333%;
      }
      .col-lg-15 {
        width: 62.5%;
      }
      .col-lg-16 {
        width: 66.66666667%;
      }
      .col-lg-17 {
        width: 70.83333333%;
      }
      .col-lg-18 {
        width: 75%;
      }
      .col-lg-19 {
        width: 79.16666667%;
      }
      .col-lg-20 {
        width: 83.33333333%;
      }
      .col-lg-21 {
        width: 87.5%;
      }
      .col-lg-22 {
        width: 91.66666667%;
      }
      .col-lg-23 {
        width: 95.83333333%;
      }
      .col-lg-24 {
        width: 100%;
      }
      .col-lg-pull-0 {
        right: auto;
      }
      .col-lg-pull-1 {
        right: 4.16666667%;
      }
      .col-lg-pull-2 {
        right: 8.33333333%;
      }
      .col-lg-pull-3 {
        right: 12.5%;
      }
      .col-lg-pull-4 {
        right: 16.66666667%;
      }
      .col-lg-pull-5 {
        right: 20.83333333%;
      }
      .col-lg-pull-6 {
        right: 25%;
      }
      .col-lg-pull-7 {
        right: 29.16666667%;
      }
      .col-lg-pull-8 {
        right: 33.33333333%;
      }
      .col-lg-pull-9 {
        right: 37.5%;
      }
      .col-lg-pull-10 {
        right: 41.66666667%;
      }
      .col-lg-pull-11 {
        right: 45.83333333%;
      }
      .col-lg-pull-12 {
        right: 50%;
      }
      .col-lg-pull-13 {
        right: 54.16666667%;
      }
      .col-lg-pull-14 {
        right: 58.33333333%;
      }
      .col-lg-pull-15 {
        right: 62.5%;
      }
      .col-lg-pull-16 {
        right: 66.66666667%;
      }
      .col-lg-pull-17 {
        right: 70.83333333%;
      }
      .col-lg-pull-18 {
        right: 75%;
      }
      .col-lg-pull-19 {
        right: 79.16666667%;
      }
      .col-lg-pull-20 {
        right: 83.33333333%;
      }
      .col-lg-pull-21 {
        right: 87.5%;
      }
      .col-lg-pull-22 {
        right: 91.66666667%;
      }
      .col-lg-pull-23 {
        right: 95.83333333%;
      }
      .col-lg-pull-24 {
        right: 100%;
      }
      .col-lg-push-0 {
        left: auto;
      }
      .col-lg-push-1 {
        left: 4.16666667%;
      }
      .col-lg-push-2 {
        left: 8.33333333%;
      }
      .col-lg-push-3 {
        left: 12.5%;
      }
      .col-lg-push-4 {
        left: 16.66666667%;
      }
      .col-lg-push-5 {
        left: 20.83333333%;
      }
      .col-lg-push-6 {
        left: 25%;
      }
      .col-lg-push-7 {
        left: 29.16666667%;
      }
      .col-lg-push-8 {
        left: 33.33333333%;
      }
      .col-lg-push-9 {
        left: 37.5%;
      }
      .col-lg-push-10 {
        left: 41.66666667%;
      }
      .col-lg-push-11 {
        left: 45.83333333%;
      }
      .col-lg-push-12 {
        left: 50%;
      }
      .col-lg-push-13 {
        left: 54.16666667%;
      }
      .col-lg-push-14 {
        left: 58.33333333%;
      }
      .col-lg-push-15 {
        left: 62.5%;
      }
      .col-lg-push-16 {
        left: 66.66666667%;
      }
      .col-lg-push-17 {
        left: 70.83333333%;
      }
      .col-lg-push-18 {
        left: 75%;
      }
      .col-lg-push-19 {
        left: 79.16666667%;
      }
      .col-lg-push-20 {
        left: 83.33333333%;
      }
      .col-lg-push-21 {
        left: 87.5%;
      }
      .col-lg-push-22 {
        left: 91.66666667%;
      }
      .col-lg-push-23 {
        left: 95.83333333%;
      }
      .col-lg-push-24 {
        left: 100%;
      }
      .col-lg-offset-0 {
        margin-left: 0;
      }
      .col-lg-offset-1 {
        margin-left: 4.16666667%;
      }
      .col-lg-offset-2 {
        margin-left: 8.33333333%;
      }
      .col-lg-offset-3 {
        margin-left: 12.5%;
      }
      .col-lg-offset-4 {
        margin-left: 16.66666667%;
      }
      .col-lg-offset-5 {
        margin-left: 20.83333333%;
      }
      .col-lg-offset-6 {
        margin-left: 25%;
      }
      .col-lg-offset-7 {
        margin-left: 29.16666667%;
      }
      .col-lg-offset-8 {
        margin-left: 33.33333333%;
      }
      .col-lg-offset-9 {
        margin-left: 37.5%;
      }
      .col-lg-offset-10 {
        margin-left: 41.66666667%;
      }
      .col-lg-offset-11 {
        margin-left: 45.83333333%;
      }
      .col-lg-offset-12 {
        margin-left: 50%;
      }
      .col-lg-offset-13 {
        margin-left: 54.16666667%;
      }
      .col-lg-offset-14 {
        margin-left: 58.33333333%;
      }
      .col-lg-offset-15 {
        margin-left: 62.5%;
      }
      .col-lg-offset-16 {
        margin-left: 66.66666667%;
      }
      .col-lg-offset-17 {
        margin-left: 70.83333333%;
      }
      .col-lg-offset-18 {
        margin-left: 75%;
      }
      .col-lg-offset-19 {
        margin-left: 79.16666667%;
      }
      .col-lg-offset-20 {
        margin-left: 83.33333333%;
      }
      .col-lg-offset-21 {
        margin-left: 87.5%;
      }
      .col-lg-offset-22 {
        margin-left: 91.66666667%;
      }
      .col-lg-offset-23 {
        margin-left: 95.83333333%;
      }
      .col-lg-offset-24 {
        margin-left: 100%;
      }
    }
    table {
      background-color: transparent;
    }
    caption {
      padding-top: 8px;
      padding-bottom: 8px;
      color: #777;
      text-align: left;
    }
    th {
      text-align: left;
    }
    .table {
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
    }
    .table > tbody > tr > td,
    .table > tbody > tr > th,
    .table > tfoot > tr > td,
    .table > tfoot > tr > th,
    .table > thead > tr > td,
    .table > thead > tr > th {
      padding: 8px;
      line-height: 1.42857143;
      vertical-align: top;
      border-top: 1px solid #ddd;
    }
    .table > thead > tr > th {
      vertical-align: bottom;
      border-bottom: 2px solid #ddd;
    }
    .table > caption + thead > tr:first-child > td,
    .table > caption + thead > tr:first-child > th,
    .table > colgroup + thead > tr:first-child > td,
    .table > colgroup + thead > tr:first-child > th,
    .table > thead:first-child > tr:first-child > td,
    .table > thead:first-child > tr:first-child > th {
      border-top: 0;
    }
    .table > tbody + tbody {
      border-top: 2px solid #ddd;
    }
    .table .table {
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .table-condensed > tbody > tr > td,
    .table-condensed > tbody > tr > th,
    .table-condensed > tfoot > tr > td,
    .table-condensed > tfoot > tr > th,
    .table-condensed > thead > tr > td,
    .table-condensed > thead > tr > th {
      padding: 5px;
    }
    .table-bordered {
      border: 1px solid #ddd;
    }
    .table-bordered > tbody > tr > td,
    .table-bordered > tbody > tr > th,
    .table-bordered > tfoot > tr > td,
    .table-bordered > tfoot > tr > th,
    .table-bordered > thead > tr > td,
    .table-bordered > thead > tr > th {
      border: 1px solid #ddd;
    }
    .table-bordered > thead > tr > td,
    .table-bordered > thead > tr > th {
      border-bottom-width: 2px;
    }
    .table-striped > tbody > tr:nth-of-type(odd) {
      background-color: #f9f9f9;
    }
    .table-hover > tbody > tr:hover {
      background-color: #f5f5f5;
    }
    table col[class*="col-"] {
      position: static;
      float: none;
      display: table-column;
    }
    table td[class*="col-"],
    table th[class*="col-"] {
      position: static;
      float: none;
      display: table-cell;
    }
    .table > tbody > tr.active > td,
    .table > tbody > tr.active > th,
    .table > tbody > tr > td.active,
    .table > tbody > tr > th.active,
    .table > tfoot > tr.active > td,
    .table > tfoot > tr.active > th,
    .table > tfoot > tr > td.active,
    .table > tfoot > tr > th.active,
    .table > thead > tr.active > td,
    .table > thead > tr.active > th,
    .table > thead > tr > td.active,
    .table > thead > tr > th.active {
      background-color: #f5f5f5;
    }
    .table-hover > tbody > tr.active:hover > td,
    .table-hover > tbody > tr.active:hover > th,
    .table-hover > tbody > tr:hover > .active,
    .table-hover > tbody > tr > td.active:hover,
    .table-hover > tbody > tr > th.active:hover {
      background-color: #e8e8e8;
    }
    .table > tbody > tr.success > td,
    .table > tbody > tr.success > th,
    .table > tbody > tr > td.success,
    .table > tbody > tr > th.success,
    .table > tfoot > tr.success > td,
    .table > tfoot > tr.success > th,
    .table > tfoot > tr > td.success,
    .table > tfoot > tr > th.success,
    .table > thead > tr.success > td,
    .table > thead > tr.success > th,
    .table > thead > tr > td.success,
    .table > thead > tr > th.success {
      background-color: #dff0d8;
    }
    .table-hover > tbody > tr.success:hover > td,
    .table-hover > tbody > tr.success:hover > th,
    .table-hover > tbody > tr:hover > .success,
    .table-hover > tbody > tr > td.success:hover,
    .table-hover > tbody > tr > th.success:hover {
      background-color: #d0e9c6;
    }
    .table > tbody > tr.info > td,
    .table > tbody > tr.info > th,
    .table > tbody > tr > td.info,
    .table > tbody > tr > th.info,
    .table > tfoot > tr.info > td,
    .table > tfoot > tr.info > th,
    .table > tfoot > tr > td.info,
    .table > tfoot > tr > th.info,
    .table > thead > tr.info > td,
    .table > thead > tr.info > th,
    .table > thead > tr > td.info,
    .table > thead > tr > th.info {
      background-color: #d9edf7;
    }
    .table-hover > tbody > tr.info:hover > td,
    .table-hover > tbody > tr.info:hover > th,
    .table-hover > tbody > tr:hover > .info,
    .table-hover > tbody > tr > td.info:hover,
    .table-hover > tbody > tr > th.info:hover {
      background-color: #c4e3f3;
    }
    .table > tbody > tr.warning > td,
    .table > tbody > tr.warning > th,
    .table > tbody > tr > td.warning,
    .table > tbody > tr > th.warning,
    .table > tfoot > tr.warning > td,
    .table > tfoot > tr.warning > th,
    .table > tfoot > tr > td.warning,
    .table > tfoot > tr > th.warning,
    .table > thead > tr.warning > td,
    .table > thead > tr.warning > th,
    .table > thead > tr > td.warning,
    .table > thead > tr > th.warning {
      background-color: #fcf8e3;
    }
    .table-hover > tbody > tr.warning:hover > td,
    .table-hover > tbody > tr.warning:hover > th,
    .table-hover > tbody > tr:hover > .warning,
    .table-hover > tbody > tr > td.warning:hover,
    .table-hover > tbody > tr > th.warning:hover {
      background-color: #faf2cc;
    }
    .table > tbody > tr.danger > td,
    .table > tbody > tr.danger > th,
    .table > tbody > tr > td.danger,
    .table > tbody > tr > th.danger,
    .table > tfoot > tr.danger > td,
    .table > tfoot > tr.danger > th,
    .table > tfoot > tr > td.danger,
    .table > tfoot > tr > th.danger,
    .table > thead > tr.danger > td,
    .table > thead > tr.danger > th,
    .table > thead > tr > td.danger,
    .table > thead > tr > th.danger {
      background-color: #f2dede;
    }
    .table-hover > tbody > tr.danger:hover > td,
    .table-hover > tbody > tr.danger:hover > th,
    .table-hover > tbody > tr:hover > .danger,
    .table-hover > tbody > tr > td.danger:hover,
    .table-hover > tbody > tr > th.danger:hover {
      background-color: #ebcccc;
    }
    .table-responsive {
      overflow-x: auto;
      min-height: 0.01%;
    }
    @media screen and (max-width: 767px) {
      .table-responsive {
        width: 100%;
        margin-bottom: 15px;
        overflow-y: hidden;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        border: 1px solid #ddd;
      }
      .table-responsive > .table {
        margin-bottom: 0;
      }
      .table-responsive > .table > tbody > tr > td,
      .table-responsive > .table > tbody > tr > th,
      .table-responsive > .table > tfoot > tr > td,
      .table-responsive > .table > tfoot > tr > th,
      .table-responsive > .table > thead > tr > td,
      .table-responsive > .table > thead > tr > th {
        white-space: nowrap;
      }
      .table-responsive > .table-bordered {
        border: 0;
      }
      .table-responsive > .table-bordered > tbody > tr > td:first-child,
      .table-responsive > .table-bordered > tbody > tr > th:first-child,
      .table-responsive > .table-bordered > tfoot > tr > td:first-child,
      .table-responsive > .table-bordered > tfoot > tr > th:first-child,
      .table-responsive > .table-bordered > thead > tr > td:first-child,
      .table-responsive > .table-bordered > thead > tr > th:first-child {
        border-left: 0;
      }
      .table-responsive > .table-bordered > tbody > tr > td:last-child,
      .table-responsive > .table-bordered > tbody > tr > th:last-child,
      .table-responsive > .table-bordered > tfoot > tr > td:last-child,
      .table-responsive > .table-bordered > tfoot > tr > th:last-child,
      .table-responsive > .table-bordered > thead > tr > td:last-child,
      .table-responsive > .table-bordered > thead > tr > th:last-child {
        border-right: 0;
      }
      .table-responsive > .table-bordered > tbody > tr:last-child > td,
      .table-responsive > .table-bordered > tbody > tr:last-child > th,
      .table-responsive > .table-bordered > tfoot > tr:last-child > td,
      .table-responsive > .table-bordered > tfoot > tr:last-child > th {
        border-bottom: 0;
      }
    }
    fieldset {
      padding: 0;
      margin: 0;
      border: 0;
      min-width: 0;
    }
    legend {
      display: block;
      width: 100%;
      padding: 0;
      margin-bottom: 20px;
      font-size: 21px;
      line-height: inherit;
      color: #333;
      border: 0;
      border-bottom: 1px solid #e5e5e5;
    }
    label {
      display: inline-block;
      max-width: 100%;
      margin-bottom: 5px;
      font-weight: 700;
    }
    input[type="search"] {
      box-sizing: border-box;
    }
    input[type="checkbox"],
    input[type="radio"] {
      margin: 4px 0 0;
      line-height: normal;
    }
    input[type="file"] {
      display: block;
    }
    input[type="range"] {
      display: block;
      width: 100%;
    }
    select[multiple],
    select[size] {
      height: auto;
    }
    input[type="checkbox"]:focus,
    input[type="file"]:focus,
    input[type="radio"]:focus {
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: -2px;
    }
    output {
      display: block;
      padding-top: 7px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
    }
    .form-control {
      display: block;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: ${widgetVariablesStyle["$white"]};
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    }
    .form-control:focus {
      border-color: #66afe9;
      outline: 0;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
    }
    .form-control::-moz-placeholder {
      color: #999;
      opacity: 1;
    }
    .form-control:-ms-input-placeholder {
      color: #999;
    }
    .form-control::-webkit-input-placeholder {
      color: #999;
    }
    .form-control::-ms-expand {
      border: 0;
      background-color: transparent;
    }
    .form-control[disabled],
    .form-control[readonly],
    fieldset[disabled] .form-control {
      background-color: #eee;
      opacity: 1;
    }
    .form-control[disabled],
    fieldset[disabled] .form-control {
      cursor: not-allowed;
    }
    textarea.form-control {
      height: auto;
    }
    input[type="search"] {
      -webkit-appearance: none;
    }
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
      input[type="date"].form-control,
      input[type="datetime-local"].form-control,
      input[type="month"].form-control,
      input[type="time"].form-control {
        line-height: 34px;
      }
      .input-group-sm input[type="date"],
      .input-group-sm input[type="datetime-local"],
      .input-group-sm input[type="month"],
      .input-group-sm input[type="time"],
      .input-group-sm > .input-group-btn > input[type="date"].btn,
      .input-group-sm > .input-group-btn > input[type="datetime-local"].btn,
      .input-group-sm > .input-group-btn > input[type="month"].btn,
      .input-group-sm > .input-group-btn > input[type="time"].btn,
      .input-group-sm > input[type="date"].form-control,
      .input-group-sm > input[type="date"].input-group-addon,
      .input-group-sm > input[type="datetime-local"].form-control,
      .input-group-sm > input[type="datetime-local"].input-group-addon,
      .input-group-sm > input[type="month"].form-control,
      .input-group-sm > input[type="month"].input-group-addon,
      .input-group-sm > input[type="time"].form-control,
      .input-group-sm > input[type="time"].input-group-addon,
      input[type="date"].input-sm,
      input[type="datetime-local"].input-sm,
      input[type="month"].input-sm,
      input[type="time"].input-sm {
        line-height: 30px;
      }
      .input-group-lg input[type="date"],
      .input-group-lg input[type="datetime-local"],
      .input-group-lg input[type="month"],
      .input-group-lg input[type="time"],
      .input-group-lg > .input-group-btn > input[type="date"].btn,
      .input-group-lg > .input-group-btn > input[type="datetime-local"].btn,
      .input-group-lg > .input-group-btn > input[type="month"].btn,
      .input-group-lg > .input-group-btn > input[type="time"].btn,
      .input-group-lg > input[type="date"].form-control,
      .input-group-lg > input[type="date"].input-group-addon,
      .input-group-lg > input[type="datetime-local"].form-control,
      .input-group-lg > input[type="datetime-local"].input-group-addon,
      .input-group-lg > input[type="month"].form-control,
      .input-group-lg > input[type="month"].input-group-addon,
      .input-group-lg > input[type="time"].form-control,
      .input-group-lg > input[type="time"].input-group-addon,
      input[type="date"].input-lg,
      input[type="datetime-local"].input-lg,
      input[type="month"].input-lg,
      input[type="time"].input-lg {
        line-height: 46px;
      }
    }
    .form-group {
      margin-bottom: 15px;
    }
    .checkbox,
    .radio {
      position: relative;
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .checkbox label,
    .radio label {
      min-height: 20px;
      padding-left: 20px;
      margin-bottom: 0;
      font-weight: 400;
      cursor: pointer;
    }
    .checkbox input[type="checkbox"],
    .checkbox-inline input[type="checkbox"],
    .radio input[type="radio"],
    .radio-inline input[type="radio"] {
      position: absolute;
      margin-left: -20px;
    }
    .checkbox + .checkbox,
    .radio + .radio {
      margin-top: -5px;
    }
    .checkbox-inline,
    .radio-inline {
      position: relative;
      display: inline-block;
      padding-left: 20px;
      margin-bottom: 0;
      vertical-align: middle;
      font-weight: 400;
      cursor: pointer;
    }
    .checkbox-inline + .checkbox-inline,
    .radio-inline + .radio-inline {
      margin-top: 0;
      margin-left: 10px;
    }
    fieldset[disabled] input[type="checkbox"],
    fieldset[disabled] input[type="radio"],
    input[type="checkbox"].disabled,
    input[type="checkbox"][disabled],
    input[type="radio"].disabled,
    input[type="radio"][disabled] {
      cursor: not-allowed;
    }
    .checkbox-inline.disabled,
    .radio-inline.disabled,
    fieldset[disabled] .checkbox-inline,
    fieldset[disabled] .radio-inline {
      cursor: not-allowed;
    }
    .checkbox.disabled label,
    .radio.disabled label,
    fieldset[disabled] .checkbox label,
    fieldset[disabled] .radio label {
      cursor: not-allowed;
    }
    .form-control-static {
      padding-top: 7px;
      padding-bottom: 7px;
      margin-bottom: 0;
      min-height: 34px;
    }
    .form-control-static.input-lg,
    .form-control-static.input-sm,
    .input-group-lg > .form-control-static.form-control,
    .input-group-lg > .form-control-static.input-group-addon,
    .input-group-lg > .input-group-btn > .form-control-static.btn,
    .input-group-sm > .form-control-static.form-control,
    .input-group-sm > .form-control-static.input-group-addon,
    .input-group-sm > .input-group-btn > .form-control-static.btn {
      padding-left: 0;
      padding-right: 0;
    }
    .input-group-sm > .form-control,
    .input-group-sm > .input-group-addon,
    .input-group-sm > .input-group-btn > .btn,
    .input-sm {
      height: 30px;
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
    .input-group-sm > .input-group-btn > select.btn,
    .input-group-sm > select.form-control,
    .input-group-sm > select.input-group-addon,
    select.input-sm {
      height: 30px;
      line-height: 30px;
    }
    .input-group-sm > .input-group-btn > select[multiple].btn,
    .input-group-sm > .input-group-btn > textarea.btn,
    .input-group-sm > select[multiple].form-control,
    .input-group-sm > select[multiple].input-group-addon,
    .input-group-sm > textarea.form-control,
    .input-group-sm > textarea.input-group-addon,
    select[multiple].input-sm,
    textarea.input-sm {
      height: auto;
    }
    .form-group-sm .form-control {
      height: 30px;
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
    .form-group-sm select.form-control {
      height: 30px;
      line-height: 30px;
    }
    .form-group-sm select[multiple].form-control,
    .form-group-sm textarea.form-control {
      height: auto;
    }
    .form-group-sm .form-control-static {
      height: 30px;
      min-height: 32px;
      padding: 6px 10px;
      font-size: 12px;
      line-height: 1.5;
    }
    .input-group-lg > .form-control,
    .input-group-lg > .input-group-addon,
    .input-group-lg > .input-group-btn > .btn,
    .input-lg {
      height: 46px;
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
      border-radius: 6px;
    }
    .input-group-lg > .input-group-btn > select.btn,
    .input-group-lg > select.form-control,
    .input-group-lg > select.input-group-addon,
    select.input-lg {
      height: 46px;
      line-height: 46px;
    }
    .input-group-lg > .input-group-btn > select[multiple].btn,
    .input-group-lg > .input-group-btn > textarea.btn,
    .input-group-lg > select[multiple].form-control,
    .input-group-lg > select[multiple].input-group-addon,
    .input-group-lg > textarea.form-control,
    .input-group-lg > textarea.input-group-addon,
    select[multiple].input-lg,
    textarea.input-lg {
      height: auto;
    }
    .form-group-lg .form-control {
      height: 46px;
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
      border-radius: 6px;
    }
    .form-group-lg select.form-control {
      height: 46px;
      line-height: 46px;
    }
    .form-group-lg select[multiple].form-control,
    .form-group-lg textarea.form-control {
      height: auto;
    }
    .form-group-lg .form-control-static {
      height: 46px;
      min-height: 38px;
      padding: 11px 16px;
      font-size: 18px;
      line-height: 1.3333333;
    }
    .has-feedback {
      position: relative;
    }
    .has-feedback .form-control {
      padding-right: 42.5px;
    }
    .form-control-feedback {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      display: block;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      pointer-events: none;
    }
    .form-group-lg .form-control + .form-control-feedback,
    .input-group-lg + .form-control-feedback,
    .input-group-lg > .form-control + .form-control-feedback,
    .input-group-lg > .input-group-addon + .form-control-feedback,
    .input-group-lg > .input-group-btn > .btn + .form-control-feedback,
    .input-lg + .form-control-feedback {
      width: 46px;
      height: 46px;
      line-height: 46px;
    }
    .form-group-sm .form-control + .form-control-feedback,
    .input-group-sm + .form-control-feedback,
    .input-group-sm > .form-control + .form-control-feedback,
    .input-group-sm > .input-group-addon + .form-control-feedback,
    .input-group-sm > .input-group-btn > .btn + .form-control-feedback,
    .input-sm + .form-control-feedback {
      width: 30px;
      height: 30px;
      line-height: 30px;
    }
    .has-success .checkbox,
    .has-success .checkbox-inline,
    .has-success .control-label,
    .has-success .help-block,
    .has-success .radio,
    .has-success .radio-inline,
    .has-success.checkbox label,
    .has-success.checkbox-inline label,
    .has-success.radio label,
    .has-success.radio-inline label {
      color: #3c763d;
    }
    .has-success .form-control {
      border-color: #3c763d;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    }
    .has-success .form-control:focus {
      border-color: #2b542c;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
    }
    .has-success .input-group-addon {
      color: #3c763d;
      border-color: #3c763d;
      background-color: #dff0d8;
    }
    .has-success .form-control-feedback {
      color: #3c763d;
    }
    .has-warning .checkbox,
    .has-warning .checkbox-inline,
    .has-warning .control-label,
    .has-warning .help-block,
    .has-warning .radio,
    .has-warning .radio-inline,
    .has-warning.checkbox label,
    .has-warning.checkbox-inline label,
    .has-warning.radio label,
    .has-warning.radio-inline label {
      color: #8a6d3b;
    }
    .has-warning .form-control {
      border-color: #8a6d3b;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    }
    .has-warning .form-control:focus {
      border-color: #66512c;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
    }
    .has-warning .input-group-addon {
      color: #8a6d3b;
      border-color: #8a6d3b;
      background-color: #fcf8e3;
    }
    .has-warning .form-control-feedback {
      color: #8a6d3b;
    }
    .has-error .checkbox,
    .has-error .checkbox-inline,
    .has-error .control-label,
    .has-error .help-block,
    .has-error .radio,
    .has-error .radio-inline,
    .has-error.checkbox label,
    .has-error.checkbox-inline label,
    .has-error.radio label,
    .has-error.radio-inline label {
      color: #a94442;
    }
    .has-error .form-control {
      border-color: #a94442;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    }
    .has-error .form-control:focus {
      border-color: #843534;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
    }
    .has-error .input-group-addon {
      color: #a94442;
      border-color: #a94442;
      background-color: #f2dede;
    }
    .has-error .form-control-feedback {
      color: #a94442;
    }
    .has-feedback label ~ .form-control-feedback {
      top: 25px;
    }
    .has-feedback label.sr-only ~ .form-control-feedback {
      top: 0;
    }
    .help-block {
      display: block;
      margin-top: 5px;
      margin-bottom: 10px;
      color: #737373;
    }
    @media (min-width: 768px) {
      .form-inline .form-group {
        display: inline-block;
        margin-bottom: 0;
        vertical-align: middle;
      }
      .form-inline .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle;
      }
      .form-inline .form-control-static {
        display: inline-block;
      }
      .form-inline .input-group {
        display: inline-table;
        vertical-align: middle;
      }
      .form-inline .input-group .form-control,
      .form-inline .input-group .input-group-addon,
      .form-inline .input-group .input-group-btn {
        width: auto;
      }
      .form-inline .input-group > .form-control {
        width: 100%;
      }
      .form-inline .control-label {
        margin-bottom: 0;
        vertical-align: middle;
      }
      .form-inline .checkbox,
      .form-inline .radio {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 0;
        vertical-align: middle;
      }
      .form-inline .checkbox label,
      .form-inline .radio label {
        padding-left: 0;
      }
      .form-inline .checkbox input[type="checkbox"],
      .form-inline .radio input[type="radio"] {
        position: relative;
        margin-left: 0;
      }
      .form-inline .has-feedback .form-control-feedback {
        top: 0;
      }
    }
    .form-horizontal .checkbox,
    .form-horizontal .checkbox-inline,
    .form-horizontal .radio,
    .form-horizontal .radio-inline {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 7px;
    }
    .form-horizontal .checkbox,
    .form-horizontal .radio {
      min-height: 27px;
    }
    .form-horizontal .form-group {
      margin-left: -4px;
      margin-right: -4px;
    }
    .form-horizontal .form-group:after,
    .form-horizontal .form-group:before {
      content: " ";
      display: table;
    }
    .form-horizontal .form-group:after {
      clear: both;
    }
    @media (min-width: 768px) {
      .form-horizontal .control-label {
        text-align: right;
        margin-bottom: 0;
        padding-top: 7px;
      }
    }
    .form-horizontal .has-feedback .form-control-feedback {
      right: 4px;
    }
    @media (min-width: 768px) {
      .form-horizontal .form-group-lg .control-label {
        padding-top: 11px;
        font-size: 18px;
      }
    }
    @media (min-width: 768px) {
      .form-horizontal .form-group-sm .control-label {
        padding-top: 6px;
        font-size: 12px;
      }
    }
    .btn {
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      white-space: nowrap;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      border-radius: 4px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .btn.active.focus,
    .btn.active:focus,
    .btn.focus,
    .btn:active.focus,
    .btn:active:focus,
    .btn:focus {
      outline: 5px auto -webkit-focus-ring-color;
      outline-offset: -2px;
    }
    .btn.focus,
    .btn:focus,
    .btn:hover {
      color: #333;
      text-decoration: none;
    }
    .btn.active,
    .btn:active {
      outline: 0;
      background-image: none;
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .btn.disabled,
    .btn[disabled],
    fieldset[disabled] .btn {
      cursor: not-allowed;
      opacity: 0.65;
      box-shadow: none;
    }
    a.btn.disabled,
    fieldset[disabled] a.btn {
      pointer-events: none;
    }
    .btn-default {
      color: #333;
      background-color: ${widgetVariablesStyle["$white"]};
      border-color: #ccc;
    }
    .btn-default.focus,
    .btn-default:focus {
      color: #333;
      background-color: #e6e5e5;
      border-color: #8c8c8c;
    }
    .btn-default:hover {
      color: #333;
      background-color: #e6e5e5;
      border-color: #adadad;
    }
    .btn-default.active,
    .btn-default:active,
    .open > .btn-default.dropdown-toggle {
      color: #333;
      background-color: #e6e5e5;
      border-color: #adadad;
    }
    .btn-default.active.focus,
    .btn-default.active:focus,
    .btn-default.active:hover,
    .btn-default:active.focus,
    .btn-default:active:focus,
    .btn-default:active:hover,
    .open > .btn-default.dropdown-toggle.focus,
    .open > .btn-default.dropdown-toggle:focus,
    .open > .btn-default.dropdown-toggle:hover {
      color: #333;
      background-color: #d4d4d4;
      border-color: #8c8c8c;
    }
    .btn-default.active,
    .btn-default:active,
    .open > .btn-default.dropdown-toggle {
      background-image: none;
    }
    .btn-default.disabled.focus,
    .btn-default.disabled:focus,
    .btn-default.disabled:hover,
    .btn-default[disabled].focus,
    .btn-default[disabled]:focus,
    .btn-default[disabled]:hover,
    fieldset[disabled] .btn-default.focus,
    fieldset[disabled] .btn-default:focus,
    fieldset[disabled] .btn-default:hover {
      background-color: ${widgetVariablesStyle["$white"]};
      border-color: #ccc;
    }
    .btn-default .badge {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #333;
    }
    .btn-primary {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #337ab7;
      border-color: #2e6da4;
    }
    .btn-primary.focus,
    .btn-primary:focus {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #286090;
      border-color: #122b40;
    }
    .btn-primary:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #286090;
      border-color: #204d74;
    }
    .btn-primary.active,
    .btn-primary:active,
    .open > .btn-primary.dropdown-toggle {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #286090;
      border-color: #204d74;
    }
    .btn-primary.active.focus,
    .btn-primary.active:focus,
    .btn-primary.active:hover,
    .btn-primary:active.focus,
    .btn-primary:active:focus,
    .btn-primary:active:hover,
    .open > .btn-primary.dropdown-toggle.focus,
    .open > .btn-primary.dropdown-toggle:focus,
    .open > .btn-primary.dropdown-toggle:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #204d74;
      border-color: #122b40;
    }
    .btn-primary.active,
    .btn-primary:active,
    .open > .btn-primary.dropdown-toggle {
      background-image: none;
    }
    .btn-primary.disabled.focus,
    .btn-primary.disabled:focus,
    .btn-primary.disabled:hover,
    .btn-primary[disabled].focus,
    .btn-primary[disabled]:focus,
    .btn-primary[disabled]:hover,
    fieldset[disabled] .btn-primary.focus,
    fieldset[disabled] .btn-primary:focus,
    fieldset[disabled] .btn-primary:hover {
      background-color: #337ab7;
      border-color: #2e6da4;
    }
    .btn-primary .badge {
      color: #337ab7;
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .btn-success {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #5cb85c;
      border-color: #4cae4c;
    }
    .btn-success.focus,
    .btn-success:focus {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #449d44;
      border-color: #255625;
    }
    .btn-success:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #449d44;
      border-color: #398439;
    }
    .btn-success.active,
    .btn-success:active,
    .open > .btn-success.dropdown-toggle {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #449d44;
      border-color: #398439;
    }
    .btn-success.active.focus,
    .btn-success.active:focus,
    .btn-success.active:hover,
    .btn-success:active.focus,
    .btn-success:active:focus,
    .btn-success:active:hover,
    .open > .btn-success.dropdown-toggle.focus,
    .open > .btn-success.dropdown-toggle:focus,
    .open > .btn-success.dropdown-toggle:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #398439;
      border-color: #255625;
    }
    .btn-success.active,
    .btn-success:active,
    .open > .btn-success.dropdown-toggle {
      background-image: none;
    }
    .btn-success.disabled.focus,
    .btn-success.disabled:focus,
    .btn-success.disabled:hover,
    .btn-success[disabled].focus,
    .btn-success[disabled]:focus,
    .btn-success[disabled]:hover,
    fieldset[disabled] .btn-success.focus,
    fieldset[disabled] .btn-success:focus,
    fieldset[disabled] .btn-success:hover {
      background-color: #5cb85c;
      border-color: #4cae4c;
    }
    .btn-success .badge {
      color: #5cb85c;
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .btn-info {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #5bc0de;
      border-color: #46b8da;
    }
    .btn-info.focus,
    .btn-info:focus {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #31b0d5;
      border-color: #1b6d85;
    }
    .btn-info:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #31b0d5;
      border-color: #269abc;
    }
    .btn-info.active,
    .btn-info:active,
    .open > .btn-info.dropdown-toggle {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #31b0d5;
      border-color: #269abc;
    }
    .btn-info.active.focus,
    .btn-info.active:focus,
    .btn-info.active:hover,
    .btn-info:active.focus,
    .btn-info:active:focus,
    .btn-info:active:hover,
    .open > .btn-info.dropdown-toggle.focus,
    .open > .btn-info.dropdown-toggle:focus,
    .open > .btn-info.dropdown-toggle:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #269abc;
      border-color: #1b6d85;
    }
    .btn-info.active,
    .btn-info:active,
    .open > .btn-info.dropdown-toggle {
      background-image: none;
    }
    .btn-info.disabled.focus,
    .btn-info.disabled:focus,
    .btn-info.disabled:hover,
    .btn-info[disabled].focus,
    .btn-info[disabled]:focus,
    .btn-info[disabled]:hover,
    fieldset[disabled] .btn-info.focus,
    fieldset[disabled] .btn-info:focus,
    fieldset[disabled] .btn-info:hover {
      background-color: #5bc0de;
      border-color: #46b8da;
    }
    .btn-info .badge {
      color: #5bc0de;
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .btn-warning {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #f0ad4e;
      border-color: #eea236;
    }
    .btn-warning.focus,
    .btn-warning:focus {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #ec971f;
      border-color: #985f0d;
    }
    .btn-warning:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #ec971f;
      border-color: #d58512;
    }
    .btn-warning.active,
    .btn-warning:active,
    .open > .btn-warning.dropdown-toggle {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #ec971f;
      border-color: #d58512;
    }
    .btn-warning.active.focus,
    .btn-warning.active:focus,
    .btn-warning.active:hover,
    .btn-warning:active.focus,
    .btn-warning:active:focus,
    .btn-warning:active:hover,
    .open > .btn-warning.dropdown-toggle.focus,
    .open > .btn-warning.dropdown-toggle:focus,
    .open > .btn-warning.dropdown-toggle:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #d58512;
      border-color: #985f0d;
    }
    .btn-warning.active,
    .btn-warning:active,
    .open > .btn-warning.dropdown-toggle {
      background-image: none;
    }
    .btn-warning.disabled.focus,
    .btn-warning.disabled:focus,
    .btn-warning.disabled:hover,
    .btn-warning[disabled].focus,
    .btn-warning[disabled]:focus,
    .btn-warning[disabled]:hover,
    fieldset[disabled] .btn-warning.focus,
    fieldset[disabled] .btn-warning:focus,
    fieldset[disabled] .btn-warning:hover {
      background-color: #f0ad4e;
      border-color: #eea236;
    }
    .btn-warning .badge {
      color: #f0ad4e;
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .btn-danger {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #d9534f;
      border-color: #d43f3a;
    }
    .btn-danger.focus,
    .btn-danger:focus {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #c9302c;
      border-color: #761c19;
    }
    .btn-danger:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #c9302c;
      border-color: #ac2925;
    }
    .btn-danger.active,
    .btn-danger:active,
    .open > .btn-danger.dropdown-toggle {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #c9302c;
      border-color: #ac2925;
    }
    .btn-danger.active.focus,
    .btn-danger.active:focus,
    .btn-danger.active:hover,
    .btn-danger:active.focus,
    .btn-danger:active:focus,
    .btn-danger:active:hover,
    .open > .btn-danger.dropdown-toggle.focus,
    .open > .btn-danger.dropdown-toggle:focus,
    .open > .btn-danger.dropdown-toggle:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #ac2925;
      border-color: #761c19;
    }
    .btn-danger.active,
    .btn-danger:active,
    .open > .btn-danger.dropdown-toggle {
      background-image: none;
    }
    .btn-danger.disabled.focus,
    .btn-danger.disabled:focus,
    .btn-danger.disabled:hover,
    .btn-danger[disabled].focus,
    .btn-danger[disabled]:focus,
    .btn-danger[disabled]:hover,
    fieldset[disabled] .btn-danger.focus,
    fieldset[disabled] .btn-danger:focus,
    fieldset[disabled] .btn-danger:hover {
      background-color: #d9534f;
      border-color: #d43f3a;
    }
    .btn-danger .badge {
      color: #d9534f;
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .btn-link {
      color: #337ab7;
      font-weight: 400;
      border-radius: 0;
    }
    .btn-link,
    .btn-link.active,
    .btn-link:active,
    .btn-link[disabled],
    fieldset[disabled] .btn-link {
      background-color: transparent;
      box-shadow: none;
    }
    .btn-link,
    .btn-link:active,
    .btn-link:focus,
    .btn-link:hover {
      border-color: transparent;
    }
    .btn-link:focus,
    .btn-link:hover {
      color: #23527c;
      text-decoration: underline;
      background-color: transparent;
    }
    .btn-link[disabled]:focus,
    .btn-link[disabled]:hover,
    fieldset[disabled] .btn-link:focus,
    fieldset[disabled] .btn-link:hover {
      color: #777;
      text-decoration: none;
    }
    .btn-group-lg > .btn,
    .btn-lg {
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
      border-radius: 6px;
    }
    .btn-group-sm > .btn,
    .btn-sm {
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
    .btn-group-xs > .btn,
    .btn-xs {
      padding: 1px 5px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
    .btn-block {
      display: block;
      width: 100%;
    }
    .btn-block + .btn-block {
      margin-top: 5px;
    }
    input[type="button"].btn-block,
    input[type="reset"].btn-block,
    input[type="submit"].btn-block {
      width: 100%;
    }
    .fade {
      opacity: 0;
      transition: opacity 0.15s linear;
    }
    .fade.in,
    .fade.show {
      opacity: 1;
    }
    .collapse {
      display: none;
    }
    .collapse.in {
      display: block;
    }
    tr.collapse.in {
      display: table-row;
    }
    tbody.collapse.in {
      display: table-row-group;
    }
    .collapsing {
      position: relative;
      height: 0;
      overflow: hidden;
      transition-property: height, visibility;
      transition-duration: 0.35s;
      transition-timing-function: ease;
    }
    .caret {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 2px;
      vertical-align: middle;
      border-top: 4px dashed;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
    }
    .dropdown,
    .dropup {
      position: relative;
    }
    .dropdown-toggle:focus {
      outline: 0;
    }
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
      display: none;
      float: left;
      min-width: 160px;
      padding: 5px 0;
      margin: 2px 0 0;
      list-style: none;
      font-size: 14px;
      text-align: left;
      background-color: ${widgetVariablesStyle["$white"]};
      border: 1px solid #ccc;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
      background-clip: padding-box;
    }
    .dropdown-menu.pull-right {
      right: 0;
      left: auto;
    }
    .dropdown-menu .divider {
      height: 1px;
      margin: 9px 0;
      overflow: hidden;
      background-color: #e5e5e5;
    }
    .dropdown-menu > li > a {
      display: block;
      padding: 3px 20px;
      clear: both;
      font-weight: 400;
      line-height: 1.42857143;
      color: #333;
      white-space: nowrap;
    }
    .dropdown-menu > li > a:focus,
    .dropdown-menu > li > a:hover {
      text-decoration: none;
      color: #262626;
      background-color: #f5f5f5;
    }
    .dropdown-menu > .active > a,
    .dropdown-menu > .active > a:focus,
    .dropdown-menu > .active > a:hover {
      color: ${widgetVariablesStyle["$white"]};
      text-decoration: none;
      outline: 0;
      background-color: #337ab7;
    }
    .dropdown-menu > .disabled > a,
    .dropdown-menu > .disabled > a:focus,
    .dropdown-menu > .disabled > a:hover {
      color: #777;
    }
    .dropdown-menu > .disabled > a:focus,
    .dropdown-menu > .disabled > a:hover {
      text-decoration: none;
      background-color: transparent;
      background-image: none;
      cursor: not-allowed;
    }
    .open > .dropdown-menu {
      display: block;
    }
    .open > a {
      outline: 0;
    }
    .dropdown-menu-right {
      left: auto;
      right: 0;
    }
    .dropdown-menu-left {
      left: 0;
      right: auto;
    }
    .dropdown-header {
      display: block;
      padding: 3px 20px;
      font-size: 12px;
      line-height: 1.42857143;
      color: #777;
      white-space: nowrap;
    }
    .dropdown-backdrop {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 990;
    }
    .pull-right > .dropdown-menu {
      right: 0;
      left: auto;
    }
    .dropup .caret,
    .navbar-fixed-bottom .dropdown .caret {
      border-top: 0;
      border-bottom: 4px dashed;
      content: "";
    }
    .dropup .dropdown-menu,
    .navbar-fixed-bottom .dropdown .dropdown-menu {
      top: auto;
      bottom: 100%;
      margin-bottom: 2px;
    }
    @media (min-width: 768px) {
      .navbar-right .dropdown-menu {
        right: 0;
        left: auto;
      }
      .navbar-right .dropdown-menu-left {
        left: 0;
        right: auto;
      }
    }
    .btn-group,
    .btn-group-vertical {
      position: relative;
      display: inline-block;
      vertical-align: middle;
    }
    .btn-group-vertical > .btn,
    .btn-group > .btn {
      position: relative;
      float: left;
    }
    .btn-group-vertical > .btn.active,
    .btn-group-vertical > .btn:active,
    .btn-group-vertical > .btn:focus,
    .btn-group-vertical > .btn:hover,
    .btn-group > .btn.active,
    .btn-group > .btn:active,
    .btn-group > .btn:focus,
    .btn-group > .btn:hover {
      z-index: 2;
    }
    .btn-group .btn + .btn,
    .btn-group .btn + .btn-group,
    .btn-group .btn-group + .btn,
    .btn-group .btn-group + .btn-group {
      margin-left: -1px;
    }
    .btn-toolbar {
      margin-left: -5px;
    }
    .btn-toolbar:after,
    .btn-toolbar:before {
      content: " ";
      display: table;
    }
    .btn-toolbar:after {
      clear: both;
    }
    .btn-toolbar .btn,
    .btn-toolbar .btn-group,
    .btn-toolbar .input-group {
      float: left;
    }
    .btn-toolbar > .btn,
    .btn-toolbar > .btn-group,
    .btn-toolbar > .input-group {
      margin-left: 5px;
    }
    .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
      border-radius: 0;
    }
    .btn-group > .btn:first-child {
      margin-left: 0;
    }
    .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .btn-group > .btn:last-child:not(:first-child),
    .btn-group > .dropdown-toggle:not(:first-child) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .btn-group > .btn-group {
      float: left;
    }
    .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
      border-radius: 0;
    }
    .btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
    .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .btn-group .dropdown-toggle:active,
    .btn-group.open .dropdown-toggle {
      outline: 0;
    }
    .btn-group > .btn + .dropdown-toggle {
      padding-left: 8px;
      padding-right: 8px;
    }
    .btn-group-lg.btn-group > .btn + .dropdown-toggle,
    .btn-group > .btn-lg + .dropdown-toggle {
      padding-left: 12px;
      padding-right: 12px;
    }
    .btn-group.open .dropdown-toggle {
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    .btn-group.open .dropdown-toggle.btn-link {
      box-shadow: none;
    }
    .btn .caret {
      margin-left: 0;
    }
    .btn-group-lg > .btn .caret,
    .btn-lg .caret {
      border-width: 5px 5px 0;
      border-bottom-width: 0;
    }
    .dropup .btn-group-lg > .btn .caret,
    .dropup .btn-lg .caret {
      border-width: 0 5px 5px;
    }
    .btn-group-vertical > .btn,
    .btn-group-vertical > .btn-group,
    .btn-group-vertical > .btn-group > .btn {
      display: block;
      float: none;
      width: 100%;
      max-width: 100%;
    }
    .btn-group-vertical > .btn-group:after,
    .btn-group-vertical > .btn-group:before {
      content: " ";
      display: table;
    }
    .btn-group-vertical > .btn-group:after {
      clear: both;
    }
    .btn-group-vertical > .btn-group > .btn {
      float: none;
    }
    .btn-group-vertical > .btn + .btn,
    .btn-group-vertical > .btn + .btn-group,
    .btn-group-vertical > .btn-group + .btn,
    .btn-group-vertical > .btn-group + .btn-group {
      margin-top: -1px;
      margin-left: 0;
    }
    .btn-group-vertical > .btn:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    .btn-group-vertical > .btn:first-child:not(:last-child) {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .btn-group-vertical > .btn:last-child:not(:first-child) {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
      border-radius: 0;
    }
    .btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
    .btn-group-vertical
      > .btn-group:first-child:not(:last-child)
      > .dropdown-toggle {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .btn-group-vertical
      > .btn-group:last-child:not(:first-child)
      > .btn:first-child {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
    .btn-group-justified {
      display: table;
      width: 100%;
      table-layout: fixed;
      border-collapse: separate;
    }
    .btn-group-justified > .btn,
    .btn-group-justified > .btn-group {
      float: none;
      display: table-cell;
      width: 1%;
    }
    .btn-group-justified > .btn-group .btn {
      width: 100%;
    }
    .btn-group-justified > .btn-group .dropdown-menu {
      left: auto;
    }
    [data-toggle="buttons"] > .btn input[type="checkbox"],
    [data-toggle="buttons"] > .btn input[type="radio"],
    [data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"],
    [data-toggle="buttons"] > .btn-group > .btn input[type="radio"] {
      position: absolute;
      clip: rect(0, 0, 0, 0);
      pointer-events: none;
    }
    .input-group {
      position: relative;
      display: table;
      border-collapse: separate;
    }
    .input-group[class*="col-"] {
      float: none;
      padding-left: 0;
      padding-right: 0;
    }
    .input-group .form-control {
      position: relative;
      z-index: 2;
      float: left;
      width: 100%;
      margin-bottom: 0;
    }
    .input-group .form-control:focus {
      z-index: 3;
    }
    .input-group .form-control,
    .input-group-addon,
    .input-group-btn {
      display: table-cell;
    }
    .input-group .form-control:not(:first-child):not(:last-child),
    .input-group-addon:not(:first-child):not(:last-child),
    .input-group-btn:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    .input-group-addon,
    .input-group-btn {
      width: 1%;
      white-space: nowrap;
      vertical-align: middle;
    }
    .input-group-addon {
      padding: 6px 12px;
      font-size: 14px;
      font-weight: 400;
      line-height: 1;
      color: #555;
      text-align: center;
      background-color: #eee;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .input-group-addon.input-sm,
    .input-group-sm > .input-group-addon,
    .input-group-sm > .input-group-btn > .input-group-addon.btn {
      padding: 5px 10px;
      font-size: 12px;
      border-radius: 3px;
    }
    .input-group-addon.input-lg,
    .input-group-lg > .input-group-addon,
    .input-group-lg > .input-group-btn > .input-group-addon.btn {
      padding: 10px 16px;
      font-size: 18px;
      border-radius: 6px;
    }
    .input-group-addon input[type="checkbox"],
    .input-group-addon input[type="radio"] {
      margin-top: 0;
    }
    .input-group .form-control:first-child,
    .input-group-addon:first-child,
    .input-group-btn:first-child > .btn,
    .input-group-btn:first-child > .btn-group > .btn,
    .input-group-btn:first-child > .dropdown-toggle,
    .input-group-btn:last-child > .btn-group:not(:last-child) > .btn,
    .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .input-group-addon:first-child {
      border-right: 0;
    }
    .input-group .form-control:last-child,
    .input-group-addon:last-child,
    .input-group-btn:first-child > .btn-group:not(:first-child) > .btn,
    .input-group-btn:first-child > .btn:not(:first-child),
    .input-group-btn:last-child > .btn,
    .input-group-btn:last-child > .btn-group > .btn,
    .input-group-btn:last-child > .dropdown-toggle {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .input-group-addon:last-child {
      border-left: 0;
    }
    .input-group-btn {
      position: relative;
      font-size: 0;
      white-space: nowrap;
    }
    .input-group-btn > .btn {
      position: relative;
    }
    .input-group-btn > .btn + .btn {
      margin-left: -1px;
    }
    .input-group-btn > .btn:active,
    .input-group-btn > .btn:focus,
    .input-group-btn > .btn:hover {
      z-index: 2;
    }
    .input-group-btn:first-child > .btn,
    .input-group-btn:first-child > .btn-group {
      margin-right: -1px;
    }
    .input-group-btn:last-child > .btn,
    .input-group-btn:last-child > .btn-group {
      z-index: 2;
      margin-left: -1px;
    }
    .nav {
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
    }
    .nav:after,
    .nav:before {
      content: " ";
      display: table;
    }
    .nav:after {
      clear: both;
    }
    .nav > li {
      position: relative;
      display: block;
    }
    .nav > li > a {
      position: relative;
      display: block;
      padding: 10px 15px;
    }
    .nav > li > a:focus,
    .nav > li > a:hover {
      text-decoration: none;
      background-color: #eee;
    }
    .nav > li.disabled > a {
      color: #777;
    }
    .nav > li.disabled > a:focus,
    .nav > li.disabled > a:hover {
      color: #777;
      text-decoration: none;
      background-color: transparent;
      cursor: not-allowed;
    }
    .nav .open > a,
    .nav .open > a:focus,
    .nav .open > a:hover {
      background-color: #eee;
      border-color: #337ab7;
    }
    .nav .nav-divider {
      height: 1px;
      margin: 9px 0;
      overflow: hidden;
      background-color: #e5e5e5;
    }
    .nav > li > a > img {
      max-width: none;
    }
    .nav-tabs {
      border-bottom: 1px solid #ddd;
    }
    .nav-tabs > li {
      float: left;
      margin-bottom: -1px;
    }
    .nav-tabs > li > a {
      margin-right: 2px;
      line-height: 1.42857143;
      border: 1px solid transparent;
      border-radius: 4px 4px 0 0;
    }
    .nav-tabs > li > a:hover {
      border-color: #eee #eee #ddd;
    }
    .nav-tabs > li.active > a,
    .nav-tabs > li.active > a:focus,
    .nav-tabs > li.active > a:hover {
      color: #555;
      background-color: ${widgetVariablesStyle["$white"]};
      border: 1px solid #ddd;
      border-bottom-color: transparent;
      cursor: default;
    }
    .nav-pills > li {
      float: left;
    }
    .nav-pills > li > a {
      border-radius: 4px;
    }
    .nav-pills > li + li {
      margin-left: 2px;
    }
    .nav-pills > li.active > a,
    .nav-pills > li.active > a:focus,
    .nav-pills > li.active > a:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #337ab7;
    }
    .nav-stacked > li {
      float: none;
    }
    .nav-stacked > li + li {
      margin-top: 2px;
      margin-left: 0;
    }
    .nav-justified,
    .nav-tabs.nav-justified {
      width: 100%;
    }
    .nav-justified > li,
    .nav-tabs.nav-justified > li {
      float: none;
    }
    .nav-justified > li > a,
    .nav-tabs.nav-justified > li > a {
      text-align: center;
      margin-bottom: 5px;
    }
    .nav-justified > .dropdown .dropdown-menu {
      top: auto;
      left: auto;
    }
    @media (min-width: 768px) {
      .nav-justified > li,
      .nav-tabs.nav-justified > li {
        display: table-cell;
        width: 1%;
      }
      .nav-justified > li > a,
      .nav-tabs.nav-justified > li > a {
        margin-bottom: 0;
      }
    }
    .nav-tabs-justified,
    .nav-tabs.nav-justified {
      border-bottom: 0;
    }
    .nav-tabs-justified > li > a,
    .nav-tabs.nav-justified > li > a {
      margin-right: 0;
      border-radius: 4px;
    }
    .nav-tabs-justified > .active > a,
    .nav-tabs-justified > .active > a:focus,
    .nav-tabs-justified > .active > a:hover,
    .nav-tabs.nav-justified > .active > a,
    .nav-tabs.nav-justified > .active > a:focus,
    .nav-tabs.nav-justified > .active > a:hover {
      border: 1px solid #ddd;
    }
    @media (min-width: 768px) {
      .nav-tabs-justified > li > a,
      .nav-tabs.nav-justified > li > a {
        border-bottom: 1px solid #ddd;
        border-radius: 4px 4px 0 0;
      }
      .nav-tabs-justified > .active > a,
      .nav-tabs-justified > .active > a:focus,
      .nav-tabs-justified > .active > a:hover,
      .nav-tabs.nav-justified > .active > a,
      .nav-tabs.nav-justified > .active > a:focus,
      .nav-tabs.nav-justified > .active > a:hover {
        border-bottom-color: ${widgetVariablesStyle["$white"]};
      }
    }
    .tab-content > .tab-pane {
      display: none;
    }
    .tab-content > .active {
      display: block;
    }
    .nav-tabs .dropdown-menu {
      margin-top: -1px;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
    .navbar {
      position: relative;
      min-height: 50px;
      margin-bottom: 20px;
      border: 1px solid transparent;
    }
    .navbar:after,
    .navbar:before {
      content: " ";
      display: table;
    }
    .navbar:after {
      clear: both;
    }
    @media (min-width: 768px) {
      .navbar {
        border-radius: 4px;
      }
    }
    .navbar-header:after,
    .navbar-header:before {
      content: " ";
      display: table;
    }
    .navbar-header:after {
      clear: both;
    }
    @media (min-width: 768px) {
      .navbar-header {
        float: left;
      }
    }
    .navbar-collapse {
      overflow-x: visible;
      padding-right: 4px;
      padding-left: 4px;
      border-top: 1px solid transparent;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
      -webkit-overflow-scrolling: touch;
    }
    .navbar-collapse:after,
    .navbar-collapse:before {
      content: " ";
      display: table;
    }
    .navbar-collapse:after {
      clear: both;
    }
    .navbar-collapse.in {
      overflow-y: auto;
    }
    @media (min-width: 768px) {
      .navbar-collapse {
        width: auto;
        border-top: 0;
        box-shadow: none;
      }
      .navbar-collapse.collapse {
        display: block !important;
        height: auto !important;
        padding-bottom: 0;
        overflow: visible !important;
      }
      .navbar-collapse.in {
        overflow-y: visible;
      }
      .navbar-fixed-bottom .navbar-collapse,
      .navbar-fixed-top .navbar-collapse,
      .navbar-static-top .navbar-collapse {
        padding-left: 0;
        padding-right: 0;
      }
    }
    .navbar-fixed-bottom .navbar-collapse,
    .navbar-fixed-top .navbar-collapse {
      max-height: 340px;
    }
    @media (max-device-width: 0px) and (orientation: landscape) {
      .navbar-fixed-bottom .navbar-collapse,
      .navbar-fixed-top .navbar-collapse {
        max-height: 200px;
      }
    }
    .container-fluid > .navbar-collapse,
    .container-fluid > .navbar-header,
    .container > .navbar-collapse,
    .container > .navbar-header {
      margin-right: -4px;
      margin-left: -4px;
    }
    @media (min-width: 768px) {
      .container-fluid > .navbar-collapse,
      .container-fluid > .navbar-header,
      .container > .navbar-collapse,
      .container > .navbar-header {
        margin-right: 0;
        margin-left: 0;
      }
    }
    .navbar-static-top {
      z-index: 1000;
      border-width: 0 0 1px;
    }
    @media (min-width: 768px) {
      .navbar-static-top {
        border-radius: 0;
      }
    }
    .navbar-fixed-bottom,
    .navbar-fixed-top {
      position: fixed;
      right: 0;
      left: 0;
      z-index: 1030;
    }
    @media (min-width: 768px) {
      .navbar-fixed-bottom,
      .navbar-fixed-top {
        border-radius: 0;
      }
    }
    .navbar-fixed-top {
      top: 0;
      border-width: 0 0 1px;
    }
    .navbar-fixed-bottom {
      bottom: 0;
      margin-bottom: 0;
      border-width: 1px 0 0;
    }
    .navbar-brand {
      float: left;
      padding: 15px 4px;
      font-size: 18px;
      line-height: 20px;
      height: 50px;
    }
    .navbar-brand:focus,
    .navbar-brand:hover {
      text-decoration: none;
    }
    .navbar-brand > img {
      display: block;
    }
    @media (min-width: 768px) {
      .navbar > .container .navbar-brand,
      .navbar > .container-fluid .navbar-brand {
        margin-left: -4px;
      }
    }
    .navbar-toggle {
      position: relative;
      float: right;
      margin-right: 4px;
      padding: 9px 10px;
      margin-top: 8px;
      margin-bottom: 8px;
      background-color: transparent;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    .navbar-toggle:focus {
      outline: 0;
    }
    .navbar-toggle .icon-bar {
      display: block;
      width: 22px;
      height: 2px;
      border-radius: 1px;
    }
    .navbar-toggle .icon-bar + .icon-bar {
      margin-top: 4px;
    }
    @media (min-width: 768px) {
      .navbar-toggle {
        display: none;
      }
    }
    .navbar-nav {
      margin: 7.5px -4px;
    }
    .navbar-nav > li > a {
      padding-top: 10px;
      padding-bottom: 10px;
      line-height: 20px;
    }
    @media (max-width: 767px) {
      .navbar-nav .open .dropdown-menu {
        position: static;
        float: none;
        width: auto;
        margin-top: 0;
        background-color: transparent;
        border: 0;
        box-shadow: none;
      }
      .navbar-nav .open .dropdown-menu .dropdown-header,
      .navbar-nav .open .dropdown-menu > li > a {
        padding: 5px 15px 5px 25px;
      }
      .navbar-nav .open .dropdown-menu > li > a {
        line-height: 20px;
      }
      .navbar-nav .open .dropdown-menu > li > a:focus,
      .navbar-nav .open .dropdown-menu > li > a:hover {
        background-image: none;
      }
    }
    @media (min-width: 768px) {
      .navbar-nav {
        float: left;
        margin: 0;
      }
      .navbar-nav > li {
        float: left;
      }
      .navbar-nav > li > a {
        padding-top: 15px;
        padding-bottom: 15px;
      }
    }
    .navbar-form {
      margin-left: -4px;
      margin-right: -4px;
      padding: 10px 4px;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 1px 0 rgba(255, 255, 255, 0.1);
      margin-top: 8px;
      margin-bottom: 8px;
    }
    @media (min-width: 768px) {
      .navbar-form .form-group {
        display: inline-block;
        margin-bottom: 0;
        vertical-align: middle;
      }
      .navbar-form .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle;
      }
      .navbar-form .form-control-static {
        display: inline-block;
      }
      .navbar-form .input-group {
        display: inline-table;
        vertical-align: middle;
      }
      .navbar-form .input-group .form-control,
      .navbar-form .input-group .input-group-addon,
      .navbar-form .input-group .input-group-btn {
        width: auto;
      }
      .navbar-form .input-group > .form-control {
        width: 100%;
      }
      .navbar-form .control-label {
        margin-bottom: 0;
        vertical-align: middle;
      }
      .navbar-form .checkbox,
      .navbar-form .radio {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 0;
        vertical-align: middle;
      }
      .navbar-form .checkbox label,
      .navbar-form .radio label {
        padding-left: 0;
      }
      .navbar-form .checkbox input[type="checkbox"],
      .navbar-form .radio input[type="radio"] {
        position: relative;
        margin-left: 0;
      }
      .navbar-form .has-feedback .form-control-feedback {
        top: 0;
      }
    }
    @media (max-width: 767px) {
      .navbar-form .form-group {
        margin-bottom: 5px;
      }
      .navbar-form .form-group:last-child {
        margin-bottom: 0;
      }
    }
    @media (min-width: 768px) {
      .navbar-form {
        width: auto;
        border: 0;
        margin-left: 0;
        margin-right: 0;
        padding-top: 0;
        padding-bottom: 0;
        box-shadow: none;
      }
    }
    .navbar-nav > li > .dropdown-menu {
      margin-top: 0;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
    .navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
      margin-bottom: 0;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .navbar-btn {
      margin-top: 8px;
      margin-bottom: 8px;
    }
    .btn-group-sm > .navbar-btn.btn,
    .navbar-btn.btn-sm {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .btn-group-xs > .navbar-btn.btn,
    .navbar-btn.btn-xs {
      margin-top: 14px;
      margin-bottom: 14px;
    }
    .navbar-text {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    @media (min-width: 768px) {
      .navbar-text {
        float: left;
        margin-left: 4px;
        margin-right: 4px;
      }
    }
    @media (min-width: 768px) {
      .navbar-left {
        float: left !important;
      }
      .navbar-right {
        float: right !important;
        margin-right: -4px;
      }
      .navbar-right ~ .navbar-right {
        margin-right: 0;
      }
    }
    .navbar-default {
      background-color: #f8f8f8;
      border-color: #e7e7e7;
    }
    .navbar-default .navbar-brand {
      color: #777;
    }
    .navbar-default .navbar-brand:focus,
    .navbar-default .navbar-brand:hover {
      color: #5e5d5d;
      background-color: transparent;
    }
    .navbar-default .navbar-text {
      color: #777;
    }
    .navbar-default .navbar-nav > li > a {
      color: #777;
    }
    .navbar-default .navbar-nav > li > a:focus,
    .navbar-default .navbar-nav > li > a:hover {
      color: #333;
      background-color: transparent;
    }
    .navbar-default .navbar-nav > .active > a,
    .navbar-default .navbar-nav > .active > a:focus,
    .navbar-default .navbar-nav > .active > a:hover {
      color: #555;
      background-color: #e7e7e7;
    }
    .navbar-default .navbar-nav > .disabled > a,
    .navbar-default .navbar-nav > .disabled > a:focus,
    .navbar-default .navbar-nav > .disabled > a:hover {
      color: #ccc;
      background-color: transparent;
    }
    .navbar-default .navbar-toggle {
      border-color: #ddd;
    }
    .navbar-default .navbar-toggle:focus,
    .navbar-default .navbar-toggle:hover {
      background-color: #ddd;
    }
    .navbar-default .navbar-toggle .icon-bar {
      background-color: #888;
    }
    .navbar-default .navbar-collapse,
    .navbar-default .navbar-form {
      border-color: #e7e7e7;
    }
    .navbar-default .navbar-nav > .open > a,
    .navbar-default .navbar-nav > .open > a:focus,
    .navbar-default .navbar-nav > .open > a:hover {
      background-color: #e7e7e7;
      color: #555;
    }
    @media (max-width: 767px) {
      .navbar-default .navbar-nav .open .dropdown-menu > li > a {
        color: #777;
      }
      .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus,
      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover {
        color: #333;
        background-color: transparent;
      }
      .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
      .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus,
      .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover {
        color: #555;
        background-color: #e7e7e7;
      }
      .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
      .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus,
      .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover {
        color: #ccc;
        background-color: transparent;
      }
    }
    .navbar-default .navbar-link {
      color: #777;
    }
    .navbar-default .navbar-link:hover {
      color: #333;
    }
    .navbar-default .btn-link {
      color: #777;
    }
    .navbar-default .btn-link:focus,
    .navbar-default .btn-link:hover {
      color: #333;
    }
    .navbar-default .btn-link[disabled]:focus,
    .navbar-default .btn-link[disabled]:hover,
    fieldset[disabled] .navbar-default .btn-link:focus,
    fieldset[disabled] .navbar-default .btn-link:hover {
      color: #ccc;
    }
    .navbar-inverse {
      background-color: #222;
      border-color: #090909;
    }
    .navbar-inverse .navbar-brand {
      color: #9d9d9d;
    }
    .navbar-inverse .navbar-brand:focus,
    .navbar-inverse .navbar-brand:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: transparent;
    }
    .navbar-inverse .navbar-text {
      color: #9d9d9d;
    }
    .navbar-inverse .navbar-nav > li > a {
      color: #9d9d9d;
    }
    .navbar-inverse .navbar-nav > li > a:focus,
    .navbar-inverse .navbar-nav > li > a:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: transparent;
    }
    .navbar-inverse .navbar-nav > .active > a,
    .navbar-inverse .navbar-nav > .active > a:focus,
    .navbar-inverse .navbar-nav > .active > a:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #090909;
    }
    .navbar-inverse .navbar-nav > .disabled > a,
    .navbar-inverse .navbar-nav > .disabled > a:focus,
    .navbar-inverse .navbar-nav > .disabled > a:hover {
      color: #444;
      background-color: transparent;
    }
    .navbar-inverse .navbar-toggle {
      border-color: #333;
    }
    .navbar-inverse .navbar-toggle:focus,
    .navbar-inverse .navbar-toggle:hover {
      background-color: #333;
    }
    .navbar-inverse .navbar-toggle .icon-bar {
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .navbar-inverse .navbar-collapse,
    .navbar-inverse .navbar-form {
      border-color: #101010;
    }
    .navbar-inverse .navbar-nav > .open > a,
    .navbar-inverse .navbar-nav > .open > a:focus,
    .navbar-inverse .navbar-nav > .open > a:hover {
      background-color: #090909;
      color: ${widgetVariablesStyle["$white"]};
    }
    @media (max-width: 767px) {
      .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
        border-color: #090909;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
        background-color: #090909;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
        color: #9d9d9d;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus,
      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover {
        color: ${widgetVariablesStyle["$white"]};
        background-color: transparent;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
      .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus,
      .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover {
        color: ${widgetVariablesStyle["$white"]};
        background-color: #090909;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
      .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus,
      .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover {
        color: #444;
        background-color: transparent;
      }
    }
    .navbar-inverse .navbar-link {
      color: #9d9d9d;
    }
    .navbar-inverse .navbar-link:hover {
      color: ${widgetVariablesStyle["$white"]};
    }
    .navbar-inverse .btn-link {
      color: #9d9d9d;
    }
    .navbar-inverse .btn-link:focus,
    .navbar-inverse .btn-link:hover {
      color: ${widgetVariablesStyle["$white"]};
    }
    .navbar-inverse .btn-link[disabled]:focus,
    .navbar-inverse .btn-link[disabled]:hover,
    fieldset[disabled] .navbar-inverse .btn-link:focus,
    fieldset[disabled] .navbar-inverse .btn-link:hover {
      color: #444;
    }
    .breadcrumb {
      padding: 8px 15px;
      margin-bottom: 20px;
      list-style: none;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    .breadcrumb > li {
      display: inline-block;
    }
    .breadcrumb > li + li:before {
      content: "/ ";
      padding: 0 5px;
      color: #ccc;
    }
    .breadcrumb > .active {
      color: #777;
    }
    .pagination {
      display: inline-block;
      padding-left: 0;
      margin: 20px 0;
      border-radius: 4px;
    }
    .pagination > li {
      display: inline;
    }
    .pagination > li > a,
    .pagination > li > span {
      position: relative;
      float: left;
      padding: 6px 12px;
      line-height: 1.42857143;
      text-decoration: none;
      color: #337ab7;
      background-color: ${widgetVariablesStyle["$white"]};
      border: 1px solid #ddd;
      margin-left: -1px;
    }
    .pagination > li:first-child > a,
    .pagination > li:first-child > span {
      margin-left: 0;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }
    .pagination > li:last-child > a,
    .pagination > li:last-child > span {
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
    .pagination > li > a:focus,
    .pagination > li > a:hover,
    .pagination > li > span:focus,
    .pagination > li > span:hover {
      z-index: 2;
      color: #23527c;
      background-color: #eee;
      border-color: #ddd;
    }
    .pagination > .active > a,
    .pagination > .active > a:focus,
    .pagination > .active > a:hover,
    .pagination > .active > span,
    .pagination > .active > span:focus,
    .pagination > .active > span:hover {
      z-index: 3;
      color: ${widgetVariablesStyle["$white"]};
      background-color: #337ab7;
      border-color: #337ab7;
      cursor: default;
    }
    .pagination > .disabled > a,
    .pagination > .disabled > a:focus,
    .pagination > .disabled > a:hover,
    .pagination > .disabled > span,
    .pagination > .disabled > span:focus,
    .pagination > .disabled > span:hover {
      color: #777;
      background-color: ${widgetVariablesStyle["$white"]};
      border-color: #ddd;
      cursor: not-allowed;
    }
    .pagination-lg > li > a,
    .pagination-lg > li > span {
      padding: 10px 16px;
      font-size: 18px;
      line-height: 1.3333333;
    }
    .pagination-lg > li:first-child > a,
    .pagination-lg > li:first-child > span {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }
    .pagination-lg > li:last-child > a,
    .pagination-lg > li:last-child > span {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
    }
    .pagination-sm > li > a,
    .pagination-sm > li > span {
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
    }
    .pagination-sm > li:first-child > a,
    .pagination-sm > li:first-child > span {
      border-bottom-left-radius: 3px;
      border-top-left-radius: 3px;
    }
    .pagination-sm > li:last-child > a,
    .pagination-sm > li:last-child > span {
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
    }
    .pager {
      padding-left: 0;
      margin: 20px 0;
      list-style: none;
      text-align: center;
    }
    .pager:after,
    .pager:before {
      content: " ";
      display: table;
    }
    .pager:after {
      clear: both;
    }
    .pager li {
      display: inline;
    }
    .pager li > a,
    .pager li > span {
      display: inline-block;
      padding: 5px 14px;
      background-color: ${widgetVariablesStyle["$white"]};
      border: 1px solid #ddd;
      border-radius: 15px;
    }
    .pager li > a:focus,
    .pager li > a:hover {
      text-decoration: none;
      background-color: #eee;
    }
    .pager .next > a,
    .pager .next > span {
      float: right;
    }
    .pager .previous > a,
    .pager .previous > span {
      float: left;
    }
    .pager .disabled > a,
    .pager .disabled > a:focus,
    .pager .disabled > a:hover,
    .pager .disabled > span {
      color: #777;
      background-color: ${widgetVariablesStyle["$white"]};
      cursor: not-allowed;
    }
    .label {
      display: inline;
      padding: 0.2em 0.6em 0.3em;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      color: ${widgetVariablesStyle["$white"]};
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25em;
    }
    .label:empty {
      display: none;
    }
    .btn .label {
      position: relative;
      top: -1px;
    }
    a.label:focus,
    a.label:hover {
      color: ${widgetVariablesStyle["$white"]};
      text-decoration: none;
      cursor: pointer;
    }
    .label-default {
      background-color: #777;
    }
    .label-default[href]:focus,
    .label-default[href]:hover {
      background-color: #5e5e5e;
    }
    .label-primary {
      background-color: #337ab7;
    }
    .label-primary[href]:focus,
    .label-primary[href]:hover {
      background-color: #286090;
    }
    .label-success {
      background-color: #5cb85c;
    }
    .label-success[href]:focus,
    .label-success[href]:hover {
      background-color: #449d44;
    }
    .label-info {
      background-color: #5bc0de;
    }
    .label-info[href]:focus,
    .label-info[href]:hover {
      background-color: #31b0d5;
    }
    .label-warning {
      background-color: #f0ad4e;
    }
    .label-warning[href]:focus,
    .label-warning[href]:hover {
      background-color: #ec971f;
    }
    .label-danger {
      background-color: #d9534f;
    }
    .label-danger[href]:focus,
    .label-danger[href]:hover {
      background-color: #c9302c;
    }
    .badge {
      display: inline-block;
      min-width: 10px;
      padding: 3px 7px;
      font-size: 12px;
      font-weight: 700;
      color: ${widgetVariablesStyle["$white"]};
      line-height: 1;
      vertical-align: middle;
      white-space: nowrap;
      text-align: center;
      background-color: #777;
      border-radius: 10px;
    }
    .badge:empty {
      display: none;
    }
    .btn .badge {
      position: relative;
      top: -1px;
    }
    .btn-group-xs > .btn .badge,
    .btn-xs .badge {
      top: 0;
      padding: 1px 5px;
    }
    .list-group-item.active > .badge,
    .nav-pills > .active > a > .badge {
      color: #337ab7;
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .list-group-item > .badge {
      float: right;
    }
    .list-group-item > .badge + .badge {
      margin-right: 5px;
    }
    .nav-pills > li > a > .badge {
      margin-left: 3px;
    }
    a.badge:focus,
    a.badge:hover {
      color: ${widgetVariablesStyle["$white"]};
      text-decoration: none;
      cursor: pointer;
    }
    .jumbotron {
      padding-top: 30px;
      padding-bottom: 30px;
      margin-bottom: 30px;
      color: inherit;
      background-color: #eee;
    }
    .jumbotron .h1,
    .jumbotron h1 {
      color: inherit;
    }
    .jumbotron p {
      margin-bottom: 15px;
      font-size: 21px;
      font-weight: 200;
    }
    .jumbotron > hr {
      border-top-color: #d5d5d5;
    }
    .container .jumbotron,
    .container-fluid .jumbotron {
      border-radius: 6px;
      padding-left: 4px;
      padding-right: 4px;
    }
    .jumbotron .container {
      max-width: 100%;
    }
    @media screen and (min-width: 768px) {
      .jumbotron {
        padding-top: 48px;
        padding-bottom: 48px;
      }
      .container .jumbotron,
      .container-fluid .jumbotron {
        padding-left: 60px;
        padding-right: 60px;
      }
      .jumbotron .h1,
      .jumbotron h1 {
        font-size: 63px;
      }
    }
    .thumbnail {
      display: block;
      padding: 4px;
      margin-bottom: 20px;
      line-height: 1.42857143;
      background-color: ${widgetVariablesStyle["$white"]};
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: border 0.2s ease-in-out;
    }
    .thumbnail a > img,
    .thumbnail > img {
      display: block;
      max-width: 100%;
      height: auto;
      margin-left: auto;
      margin-right: auto;
    }
    .thumbnail .caption {
      padding: 9px;
      color: #333;
    }
    a.thumbnail.active,
    a.thumbnail:focus,
    a.thumbnail:hover {
      border-color: #337ab7;
    }
    .alert {
      padding: 15px;
      margin-bottom: 20px;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    .alert h4 {
      margin-top: 0;
      color: inherit;
    }
    .alert .alert-link {
      font-weight: 700;
    }
    .alert > p,
    .alert > ul {
      margin-bottom: 0;
    }
    .alert > p + p {
      margin-top: 5px;
    }
    .alert-dismissable,
    .alert-dismissible {
      padding-right: 35px;
    }
    .alert-dismissable .close,
    .alert-dismissible .close {
      position: relative;
      top: -2px;
      right: -21px;
      color: inherit;
    }
    .alert-success {
      background-color: #dff0d8;
      border-color: #d6e9c6;
      color: #3c763d;
    }
    .alert-success hr {
      border-top-color: #c9e2b3;
    }
    .alert-success .alert-link {
      color: #2b542c;
    }
    .alert-info {
      background-color: #d9edf7;
      border-color: #bce8f1;
      color: #31708f;
    }
    .alert-info hr {
      border-top-color: #a6e1ec;
    }
    .alert-info .alert-link {
      color: #245269;
    }
    .alert-warning {
      background-color: #fcf8e3;
      border-color: #faebcc;
      color: #8a6d3b;
    }
    .alert-warning hr {
      border-top-color: #f7e1b5;
    }
    .alert-warning .alert-link {
      color: #66512c;
    }
    .alert-danger {
      background-color: #f2dede;
      border-color: #ebccd1;
      color: #a94442;
    }
    .alert-danger hr {
      border-top-color: #e4b9c0;
    }
    .alert-danger .alert-link {
      color: #843534;
    }
    @keyframes progress-bar-stripes {
      from {
        background-position: 40px 0;
      }
      to {
        background-position: 0 0;
      }
    }
    .progress {
      overflow: hidden;
      height: 20px;
      margin-bottom: 20px;
      background-color: #f5f5f5;
      border-radius: 4px;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    .progress-bar {
      float: left;
      width: 0;
      height: 100%;
      font-size: 12px;
      line-height: 20px;
      color: ${widgetVariablesStyle["$white"]};
      text-align: center;
      background-color: #337ab7;
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
      transition: width 0.6s ease;
    }
    .progress-bar-striped,
    .progress-striped .progress-bar {
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: 40px 40px;
    }
    .progress-bar.active,
    .progress.active .progress-bar {
      animation: progress-bar-stripes 2s linear infinite;
    }
    .progress-bar-success {
      background-color: #5cb85c;
    }
    .progress-striped .progress-bar-success {
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
    }
    .progress-bar-info {
      background-color: #5bc0de;
    }
    .progress-striped .progress-bar-info {
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
    }
    .progress-bar-warning {
      background-color: #f0ad4e;
    }
    .progress-striped .progress-bar-warning {
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
    }
    .progress-bar-danger {
      background-color: #d9534f;
    }
    .progress-striped .progress-bar-danger {
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
    }
    .media {
      margin-top: 15px;
    }
    .media:first-child {
      margin-top: 0;
    }
    .media,
    .media-body {
      zoom: 1;
      overflow: hidden;
    }
    .media-body {
      width: 10000px;
    }
    .media-object {
      display: block;
    }
    .media-object.img-thumbnail {
      max-width: none;
    }
    .media-right,
    .media > .pull-right {
      padding-left: 10px;
    }
    .media-left,
    .media > .pull-left {
      padding-right: 10px;
    }
    .media-body,
    .media-left,
    .media-right {
      display: table-cell;
      vertical-align: top;
    }
    .media-middle {
      vertical-align: middle;
    }
    .media-bottom {
      vertical-align: bottom;
    }
    .media-heading {
      margin-top: 0;
      margin-bottom: 5px;
    }
    .media-list {
      padding-left: 0;
      list-style: none;
    }
    .list-group {
      margin-bottom: 20px;
      padding-left: 0;
    }
    .list-group-item {
      position: relative;
      display: block;
      padding: 10px 15px;
      margin-bottom: -1px;
      background-color: ${widgetVariablesStyle["$white"]};
      border: 1px solid #ddd;
    }
    .list-group-item:first-child {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }
    .list-group-item:last-child {
      margin-bottom: 0;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    a.list-group-item,
    button.list-group-item {
      color: #555;
    }
    a.list-group-item .list-group-item-heading,
    button.list-group-item .list-group-item-heading {
      color: #333;
    }
    a.list-group-item:focus,
    a.list-group-item:hover,
    button.list-group-item:focus,
    button.list-group-item:hover {
      text-decoration: none;
      color: #555;
      background-color: #f5f5f5;
    }
    button.list-group-item {
      width: 100%;
      text-align: left;
    }
    .list-group-item.disabled,
    .list-group-item.disabled:focus,
    .list-group-item.disabled:hover {
      background-color: #eee;
      color: #777;
      cursor: not-allowed;
    }
    .list-group-item.disabled .list-group-item-heading,
    .list-group-item.disabled:focus .list-group-item-heading,
    .list-group-item.disabled:hover .list-group-item-heading {
      color: inherit;
    }
    .list-group-item.disabled .list-group-item-text,
    .list-group-item.disabled:focus .list-group-item-text,
    .list-group-item.disabled:hover .list-group-item-text {
      color: #777;
    }
    .list-group-item.active,
    .list-group-item.active:focus,
    .list-group-item.active:hover {
      z-index: 2;
      color: ${widgetVariablesStyle["$white"]};
      background-color: #337ab7;
      border-color: #337ab7;
    }
    .list-group-item.active .list-group-item-heading,
    .list-group-item.active .list-group-item-heading > .small,
    .list-group-item.active .list-group-item-heading > small,
    .list-group-item.active:focus .list-group-item-heading,
    .list-group-item.active:focus .list-group-item-heading > .small,
    .list-group-item.active:focus .list-group-item-heading > small,
    .list-group-item.active:hover .list-group-item-heading,
    .list-group-item.active:hover .list-group-item-heading > .small,
    .list-group-item.active:hover .list-group-item-heading > small {
      color: inherit;
    }
    .list-group-item.active .list-group-item-text,
    .list-group-item.active:focus .list-group-item-text,
    .list-group-item.active:hover .list-group-item-text {
      color: #c7ddef;
    }
    .list-group-item-success {
      color: #3c763d;
      background-color: #dff0d8;
    }
    a.list-group-item-success,
    button.list-group-item-success {
      color: #3c763d;
    }
    a.list-group-item-success .list-group-item-heading,
    button.list-group-item-success .list-group-item-heading {
      color: inherit;
    }
    a.list-group-item-success:focus,
    a.list-group-item-success:hover,
    button.list-group-item-success:focus,
    button.list-group-item-success:hover {
      color: #3c763d;
      background-color: #d0e9c6;
    }
    a.list-group-item-success.active,
    a.list-group-item-success.active:focus,
    a.list-group-item-success.active:hover,
    button.list-group-item-success.active,
    button.list-group-item-success.active:focus,
    button.list-group-item-success.active:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #3c763d;
      border-color: #3c763d;
    }
    .list-group-item-info {
      color: #31708f;
      background-color: #d9edf7;
    }
    a.list-group-item-info,
    button.list-group-item-info {
      color: #31708f;
    }
    a.list-group-item-info .list-group-item-heading,
    button.list-group-item-info .list-group-item-heading {
      color: inherit;
    }
    a.list-group-item-info:focus,
    a.list-group-item-info:hover,
    button.list-group-item-info:focus,
    button.list-group-item-info:hover {
      color: #31708f;
      background-color: #c4e3f3;
    }
    a.list-group-item-info.active,
    a.list-group-item-info.active:focus,
    a.list-group-item-info.active:hover,
    button.list-group-item-info.active,
    button.list-group-item-info.active:focus,
    button.list-group-item-info.active:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #31708f;
      border-color: #31708f;
    }
    .list-group-item-warning {
      color: #8a6d3b;
      background-color: #fcf8e3;
    }
    a.list-group-item-warning,
    button.list-group-item-warning {
      color: #8a6d3b;
    }
    a.list-group-item-warning .list-group-item-heading,
    button.list-group-item-warning .list-group-item-heading {
      color: inherit;
    }
    a.list-group-item-warning:focus,
    a.list-group-item-warning:hover,
    button.list-group-item-warning:focus,
    button.list-group-item-warning:hover {
      color: #8a6d3b;
      background-color: #faf2cc;
    }
    a.list-group-item-warning.active,
    a.list-group-item-warning.active:focus,
    a.list-group-item-warning.active:hover,
    button.list-group-item-warning.active,
    button.list-group-item-warning.active:focus,
    button.list-group-item-warning.active:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #8a6d3b;
      border-color: #8a6d3b;
    }
    .list-group-item-danger {
      color: #a94442;
      background-color: #f2dede;
    }
    a.list-group-item-danger,
    button.list-group-item-danger {
      color: #a94442;
    }
    a.list-group-item-danger .list-group-item-heading,
    button.list-group-item-danger .list-group-item-heading {
      color: inherit;
    }
    a.list-group-item-danger:focus,
    a.list-group-item-danger:hover,
    button.list-group-item-danger:focus,
    button.list-group-item-danger:hover {
      color: #a94442;
      background-color: #ebcccc;
    }
    a.list-group-item-danger.active,
    a.list-group-item-danger.active:focus,
    a.list-group-item-danger.active:hover,
    button.list-group-item-danger.active,
    button.list-group-item-danger.active:focus,
    button.list-group-item-danger.active:hover {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #a94442;
      border-color: #a94442;
    }
    .list-group-item-heading {
      margin-top: 0;
      margin-bottom: 5px;
    }
    .list-group-item-text {
      margin-bottom: 0;
      line-height: 1.3;
    }
    .panel {
      margin-bottom: 20px;
      background-color: ${widgetVariablesStyle["$white"]};
      border: 1px solid transparent;
      border-radius: 4px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    }
    .panel-body {
      padding: 15px;
    }
    .panel-body:after,
    .panel-body:before {
      content: " ";
      display: table;
    }
    .panel-body:after {
      clear: both;
    }
    .panel-heading {
      padding: 10px 15px;
      border-bottom: 1px solid transparent;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
    .panel-heading > .dropdown .dropdown-toggle {
      color: inherit;
    }
    .panel-title {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 16px;
      color: inherit;
    }
    .panel-title > .small,
    .panel-title > .small > a,
    .panel-title > a,
    .panel-title > small,
    .panel-title > small > a {
      color: inherit;
    }
    .panel-footer {
      padding: 10px 15px;
      background-color: #f5f5f5;
      border-top: 1px solid #ddd;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .panel > .list-group,
    .panel > .panel-collapse > .list-group {
      margin-bottom: 0;
    }
    .panel > .list-group .list-group-item,
    .panel > .panel-collapse > .list-group .list-group-item {
      border-width: 1px 0;
      border-radius: 0;
    }
    .panel > .list-group:first-child .list-group-item:first-child,
    .panel
      > .panel-collapse
      > .list-group:first-child
      .list-group-item:first-child {
      border-top: 0;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
    .panel > .list-group:last-child .list-group-item:last-child,
    .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
      border-bottom: 0;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .panel
      > .panel-heading
      + .panel-collapse
      > .list-group
      .list-group-item:first-child {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
    .panel-heading + .list-group .list-group-item:first-child {
      border-top-width: 0;
    }
    .list-group + .panel-footer {
      border-top-width: 0;
    }
    .panel > .panel-collapse > .table,
    .panel > .table,
    .panel > .table-responsive > .table {
      margin-bottom: 0;
    }
    .panel > .panel-collapse > .table caption,
    .panel > .table caption,
    .panel > .table-responsive > .table caption {
      padding-left: 15px;
      padding-right: 15px;
    }
    .panel > .table-responsive:first-child > .table:first-child,
    .panel > .table:first-child {
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > tbody:first-child
      > tr:first-child,
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > thead:first-child
      > tr:first-child,
    .panel > .table:first-child > tbody:first-child > tr:first-child,
    .panel > .table:first-child > thead:first-child > tr:first-child {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > tbody:first-child
      > tr:first-child
      td:first-child,
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > tbody:first-child
      > tr:first-child
      th:first-child,
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > thead:first-child
      > tr:first-child
      td:first-child,
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > thead:first-child
      > tr:first-child
      th:first-child,
    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
    .panel
      > .table:first-child
      > thead:first-child
      > tr:first-child
      th:first-child {
      border-top-left-radius: 3px;
    }
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > tbody:first-child
      > tr:first-child
      td:last-child,
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > tbody:first-child
      > tr:first-child
      th:last-child,
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > thead:first-child
      > tr:first-child
      td:last-child,
    .panel
      > .table-responsive:first-child
      > .table:first-child
      > thead:first-child
      > tr:first-child
      th:last-child,
    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child {
      border-top-right-radius: 3px;
    }
    .panel > .table-responsive:last-child > .table:last-child,
    .panel > .table:last-child {
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tbody:last-child
      > tr:last-child,
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tfoot:last-child
      > tr:last-child,
    .panel > .table:last-child > tbody:last-child > tr:last-child,
    .panel > .table:last-child > tfoot:last-child > tr:last-child {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tbody:last-child
      > tr:last-child
      td:first-child,
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tbody:last-child
      > tr:last-child
      th:first-child,
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tfoot:last-child
      > tr:last-child
      td:first-child,
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tfoot:last-child
      > tr:last-child
      th:first-child,
    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
      border-bottom-left-radius: 3px;
    }
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tbody:last-child
      > tr:last-child
      td:last-child,
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tbody:last-child
      > tr:last-child
      th:last-child,
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tfoot:last-child
      > tr:last-child
      td:last-child,
    .panel
      > .table-responsive:last-child
      > .table:last-child
      > tfoot:last-child
      > tr:last-child
      th:last-child,
    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
      border-bottom-right-radius: 3px;
    }
    .panel > .panel-body + .table,
    .panel > .panel-body + .table-responsive,
    .panel > .table + .panel-body,
    .panel > .table-responsive + .panel-body {
      border-top: 1px solid #ddd;
    }
    .panel > .table > tbody:first-child > tr:first-child td,
    .panel > .table > tbody:first-child > tr:first-child th {
      border-top: 0;
    }
    .panel > .table-bordered,
    .panel > .table-responsive > .table-bordered {
      border: 0;
    }
    .panel > .table-bordered > tbody > tr > td:first-child,
    .panel > .table-bordered > tbody > tr > th:first-child,
    .panel > .table-bordered > tfoot > tr > td:first-child,
    .panel > .table-bordered > tfoot > tr > th:first-child,
    .panel > .table-bordered > thead > tr > td:first-child,
    .panel > .table-bordered > thead > tr > th:first-child,
    .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
    .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
    .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child,
    .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
    .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
    .panel > .table-responsive > .table-bordered > thead > tr > th:first-child {
      border-left: 0;
    }
    .panel > .table-bordered > tbody > tr > td:last-child,
    .panel > .table-bordered > tbody > tr > th:last-child,
    .panel > .table-bordered > tfoot > tr > td:last-child,
    .panel > .table-bordered > tfoot > tr > th:last-child,
    .panel > .table-bordered > thead > tr > td:last-child,
    .panel > .table-bordered > thead > tr > th:last-child,
    .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
    .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
    .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child,
    .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
    .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
    .panel > .table-responsive > .table-bordered > thead > tr > th:last-child {
      border-right: 0;
    }
    .panel > .table-bordered > tbody > tr:first-child > td,
    .panel > .table-bordered > tbody > tr:first-child > th,
    .panel > .table-bordered > thead > tr:first-child > td,
    .panel > .table-bordered > thead > tr:first-child > th,
    .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
    .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th,
    .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
    .panel > .table-responsive > .table-bordered > thead > tr:first-child > th {
      border-bottom: 0;
    }
    .panel > .table-bordered > tbody > tr:last-child > td,
    .panel > .table-bordered > tbody > tr:last-child > th,
    .panel > .table-bordered > tfoot > tr:last-child > td,
    .panel > .table-bordered > tfoot > tr:last-child > th,
    .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
    .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
    .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
    .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
      border-bottom: 0;
    }
    .panel > .table-responsive {
      border: 0;
      margin-bottom: 0;
    }
    .panel-group {
      margin-bottom: 20px;
    }
    .panel-group .panel {
      margin-bottom: 0;
      border-radius: 4px;
    }
    .panel-group .panel + .panel {
      margin-top: 5px;
    }
    .panel-group .panel-heading {
      border-bottom: 0;
    }
    .panel-group .panel-heading + .panel-collapse > .list-group,
    .panel-group .panel-heading + .panel-collapse > .panel-body {
      border-top: 1px solid #ddd;
    }
    .panel-group .panel-footer {
      border-top: 0;
    }
    .panel-group .panel-footer + .panel-collapse .panel-body {
      border-bottom: 1px solid #ddd;
    }
    .panel-default {
      border-color: #ddd;
    }
    .panel-default > .panel-heading {
      color: #333;
      background-color: #f5f5f5;
      border-color: #ddd;
    }
    .panel-default > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #ddd;
    }
    .panel-default > .panel-heading .badge {
      color: #f5f5f5;
      background-color: #333;
    }
    .panel-default > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #ddd;
    }
    .panel-primary {
      border-color: #337ab7;
    }
    .panel-primary > .panel-heading {
      color: ${widgetVariablesStyle["$white"]};
      background-color: #337ab7;
      border-color: #337ab7;
    }
    .panel-primary > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #337ab7;
    }
    .panel-primary > .panel-heading .badge {
      color: #337ab7;
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .panel-primary > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #337ab7;
    }
    .panel-success {
      border-color: #d6e9c6;
    }
    .panel-success > .panel-heading {
      color: #3c763d;
      background-color: #dff0d8;
      border-color: #d6e9c6;
    }
    .panel-success > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #d6e9c6;
    }
    .panel-success > .panel-heading .badge {
      color: #dff0d8;
      background-color: #3c763d;
    }
    .panel-success > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #d6e9c6;
    }
    .panel-info {
      border-color: #bce8f1;
    }
    .panel-info > .panel-heading {
      color: #31708f;
      background-color: #d9edf7;
      border-color: #bce8f1;
    }
    .panel-info > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #bce8f1;
    }
    .panel-info > .panel-heading .badge {
      color: #d9edf7;
      background-color: #31708f;
    }
    .panel-info > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #bce8f1;
    }
    .panel-warning {
      border-color: #faebcc;
    }
    .panel-warning > .panel-heading {
      color: #8a6d3b;
      background-color: #fcf8e3;
      border-color: #faebcc;
    }
    .panel-warning > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #faebcc;
    }
    .panel-warning > .panel-heading .badge {
      color: #fcf8e3;
      background-color: #8a6d3b;
    }
    .panel-warning > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #faebcc;
    }
    .panel-danger {
      border-color: #ebccd1;
    }
    .panel-danger > .panel-heading {
      color: #a94442;
      background-color: #f2dede;
      border-color: #ebccd1;
    }
    .panel-danger > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #ebccd1;
    }
    .panel-danger > .panel-heading .badge {
      color: #f2dede;
      background-color: #a94442;
    }
    .panel-danger > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #ebccd1;
    }
    .embed-responsive {
      position: relative;
      display: block;
      height: 0;
      padding: 0;
      overflow: hidden;
    }
    .embed-responsive .embed-responsive-item,
    .embed-responsive embed,
    .embed-responsive iframe,
    .embed-responsive object,
    .embed-responsive video {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      border: 0;
    }
    .embed-responsive-16by9 {
      padding-bottom: 56.25%;
    }
    .embed-responsive-4by3 {
      padding-bottom: 75%;
    }
    .well {
      min-height: 20px;
      padding: 19px;
      margin-bottom: 20px;
      background-color: #f5f5f5;
      border: 1px solid #e3e3e3;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    }
    .well blockquote {
      border-color: #ddd;
      border-color: rgba(0, 0, 0, 0.15);
    }
    .well-lg {
      padding: 24px;
      border-radius: 6px;
    }
    .well-sm {
      padding: 9px;
      border-radius: 3px;
    }
    .close {
      float: right;
      font-size: 21px;
      font-weight: 700;
      line-height: 1;
      color: #000;
      text-shadow: 0 1px 0 ${widgetVariablesStyle["$white"]};
      opacity: 0.2;
    }
    .close:focus,
    .close:hover {
      color: #000;
      text-decoration: none;
      cursor: pointer;
      opacity: 0.5;
    }
    button.close {
      padding: 0;
      cursor: pointer;
      background: 0 0;
      border: 0;
      -webkit-appearance: none;
    }
    .modal-open {
      overflow: hidden;
    }
    .modal {
      display: none;
      overflow: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1050;
      -webkit-overflow-scrolling: touch;
      outline: 0;
    }
    .modal.show {
      overflow-y: auto;
    }
    .modal.fade .modal-dialog {
      transform: translate(0, -25%);
      transition: transform 0.3s ease-out;
    }
    .modal.in .modal-dialog {
      transform: translate(0, 0);
    }
    .modal-open .modal {
      overflow-x: hidden;
      overflow-y: auto;
    }
    .modal-dialog {
      position: relative;
      width: auto;
      margin: 10px;
    }
    // .modal-content {
    //   position: relative;
    //   background-color: ${widgetVariablesStyle["$white"]};
    //   border: 1px solid #999;
    //   border: 1px solid rgba(0, 0, 0, 0.2);
    //   box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    //   background-clip: padding-box;
    //   outline: 0;
    // }
    .modal-backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1040;
      background-color: #000;
    }
    .modal-backdrop.fade {
      opacity: 0;
    }
    .modal-backdrop.show,
    .modal-backdrop.in {
      opacity: 0.5;
    }
    .modal-header {
      padding: 15px;
      border-bottom: 1px solid #e5e5e5;
    }
    .modal-header:after,
    .modal-header:before {
      content: " ";
      display: table;
    }
    .modal-header:after {
      clear: both;
    }
    .modal-header .close {
      margin-top: -2px;
    }
    .modal-title {
      margin: 0;
      line-height: 1.42857143;
    }
    .modal-body {
      position: relative;
      padding: 15px;
    }
    .modal-footer {
      padding: 15px;
      text-align: right;
      border-top: 1px solid #e5e5e5;
    }
    .modal-footer:after,
    .modal-footer:before {
      content: " ";
      display: table;
    }
    .modal-footer:after {
      clear: both;
    }
    .modal-footer .btn + .btn {
      margin-left: 5px;
      margin-bottom: 0;
    }
    .modal-footer .btn-group .btn + .btn {
      margin-left: -1px;
    }
    .modal-footer .btn-block + .btn-block {
      margin-left: 0;
    }
    .modal-scrollbar-measure {
      position: absolute;
      top: -9999px;
      width: 50px;
      height: 50px;
      overflow: scroll;
    }
    @media (min-width: 768px) {
      .modal-dialog {
        width: 600px;
        margin: 30px auto;
      }
      .modal-content {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      }
      .modal-sm {
        width: 300px;
      }
    }
    @media (min-width: 768px) {
      .modal-lg {
        width: 900px;
      }
    }
    // .tooltip {
    //   position: absolute;
    //   z-index: 1070;
    //   display: block;
    //   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    //   font-style: normal;
    //   font-weight: 400;
    //   letter-spacing: normal;
    //   line-break: auto;
    //   line-height: 1.42857143;
    //   text-align: left;
    //   text-align: start;
    //   text-decoration: none;
    //   text-shadow: none;
    //   text-transform: none;
    //   white-space: normal;
    //   word-break: normal;
    //   word-spacing: normal;
    //   word-wrap: normal;
    //   font-size: 12px;
    //   opacity: 0;
    // }
    .tooltip.in {
      opacity: 0.9;
    }
    .tooltip.top {
      margin-top: -3px;
      padding: 5px 0;
    }
    .tooltip.right {
      margin-left: 3px;
      padding: 0 5px;
    }
    .tooltip.bottom {
      margin-top: 3px;
      padding: 5px 0;
    }
    .tooltip.left {
      margin-left: -3px;
      padding: 0 5px;
    }
    .tooltip-inner {
      max-width: 200px;
      padding: 3px 8px;
      color: ${widgetVariablesStyle["$white"]};
      text-align: center;
      background-color: #000;
      border-radius: 4px;
    }
    .tooltip-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
    }
    .tooltip.top .tooltip-arrow {
      bottom: 0;
      left: 50%;
      margin-left: -5px;
      border-width: 5px 5px 0;
      border-top-color: #000;
    }
    .tooltip.top-left .tooltip-arrow {
      bottom: 0;
      right: 5px;
      margin-bottom: -5px;
      border-width: 5px 5px 0;
      border-top-color: #000;
    }
    .tooltip.top-right .tooltip-arrow {
      bottom: 0;
      left: 5px;
      margin-bottom: -5px;
      border-width: 5px 5px 0;
      border-top-color: #000;
    }
    .tooltip.right .tooltip-arrow {
      top: 50%;
      left: 0;
      margin-top: -5px;
      border-width: 5px 5px 5px 0;
      border-right-color: #000;
    }
    .tooltip.left .tooltip-arrow {
      top: 50%;
      right: 0;
      margin-top: -5px;
      border-width: 5px 0 5px 5px;
      border-left-color: #000;
    }
    .tooltip.bottom .tooltip-arrow {
      top: 0;
      left: 50%;
      margin-left: -5px;
      border-width: 0 5px 5px;
      border-bottom-color: #000;
    }
    .tooltip.bottom-left .tooltip-arrow {
      top: 0;
      right: 5px;
      margin-top: -5px;
      border-width: 0 5px 5px;
      border-bottom-color: #000;
    }
    .tooltip.bottom-right .tooltip-arrow {
      top: 0;
      left: 5px;
      margin-top: -5px;
      border-width: 0 5px 5px;
      border-bottom-color: #000;
    }
    .popover {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1060;
      display: none;
      max-width: 276px;
      padding: 1px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-style: normal;
      font-weight: 400;
      letter-spacing: normal;
      line-break: auto;
      line-height: 1.42857143;
      text-align: left;
      text-align: start;
      text-decoration: none;
      text-shadow: none;
      text-transform: none;
      white-space: normal;
      word-break: normal;
      word-spacing: normal;
      word-wrap: normal;
      font-size: 14px;
      background-color: ${widgetVariablesStyle["$white"]};
      background-clip: padding-box;
      border: 1px solid #ccc;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
    .popover.top {
      margin-top: -10px;
    }
    .popover.right {
      margin-left: 10px;
    }
    .popover.bottom {
      margin-top: 10px;
    }
    .popover.left {
      margin-left: -10px;
    }
    .popover-title {
      margin: 0;
      padding: 8px 14px;
      font-size: 14px;
      background-color: #f7f7f7;
      border-bottom: 1px solid #ebebeb;
      border-radius: 5px 5px 0 0;
    }
    .popover-content {
      padding: 9px 14px;
    }
    .popover > .arrow,
    .popover > .arrow:after {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
    }
    .popover > .arrow {
      border-width: 11px;
    }
    .popover > .arrow:after {
      border-width: 10px;
      content: "";
    }
    .popover.top > .arrow {
      left: 50%;
      margin-left: -11px;
      border-bottom-width: 0;
      border-top-color: #999;
      border-top-color: rgba(0, 0, 0, 0.25);
      bottom: -11px;
    }
    .popover.top > .arrow:after {
      content: " ";
      bottom: 1px;
      margin-left: -10px;
      border-bottom-width: 0;
      border-top-color: ${widgetVariablesStyle["$white"]};
    }
    .popover.right > .arrow {
      top: 50%;
      left: -11px;
      margin-top: -11px;
      border-left-width: 0;
      border-right-color: #999;
      border-right-color: rgba(0, 0, 0, 0.25);
    }
    .popover.right > .arrow:after {
      content: " ";
      left: 1px;
      bottom: -10px;
      border-left-width: 0;
      border-right-color: ${widgetVariablesStyle["$white"]};
    }
    .popover.bottom > .arrow {
      left: 50%;
      margin-left: -11px;
      border-top-width: 0;
      border-bottom-color: #999;
      border-bottom-color: rgba(0, 0, 0, 0.25);
      top: -11px;
    }
    .popover.bottom > .arrow:after {
      content: " ";
      top: 1px;
      margin-left: -10px;
      border-top-width: 0;
      border-bottom-color: ${widgetVariablesStyle["$white"]};
    }
    .popover.left > .arrow {
      top: 50%;
      right: -11px;
      margin-top: -11px;
      border-right-width: 0;
      border-left-color: #999;
      border-left-color: rgba(0, 0, 0, 0.25);
    }
    .popover.left > .arrow:after {
      content: " ";
      right: 1px;
      border-right-width: 0;
      border-left-color: ${widgetVariablesStyle["$white"]};
      bottom: -10px;
    }
    .carousel {
      position: relative;
    }
    .carousel-inner {
      position: relative;
      overflow: hidden;
      width: 100%;
    }
    .carousel-inner > .item {
      display: none;
      position: relative;
      transition: 0.6s ease-in-out left;
    }
    .carousel-inner > .item > a > img,
    .carousel-inner > .item > img {
      display: block;
      max-width: 100%;
      height: auto;
      line-height: 1;
    }
    @media all and (transform-3d), (-webkit-transform-3d) {
      .carousel-inner > .item {
        transition: transform 0.6s ease-in-out;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        perspective: 1000px;
      }
      .carousel-inner > .item.active.right,
      .carousel-inner > .item.next {
        transform: translate3d(100%, 0, 0);
        left: 0;
      }
      .carousel-inner > .item.active.left,
      .carousel-inner > .item.prev {
        transform: translate3d(-100%, 0, 0);
        left: 0;
      }
      .carousel-inner > .item.active,
      .carousel-inner > .item.next.left,
      .carousel-inner > .item.prev.right {
        transform: translate3d(0, 0, 0);
        left: 0;
      }
    }
    .carousel-inner > .active,
    .carousel-inner > .next,
    .carousel-inner > .prev {
      display: block;
    }
    .carousel-inner > .active {
      left: 0;
    }
    .carousel-inner > .next,
    .carousel-inner > .prev {
      position: absolute;
      top: 0;
      width: 100%;
    }
    .carousel-inner > .next {
      left: 100%;
    }
    .carousel-inner > .prev {
      left: -100%;
    }
    .carousel-inner > .next.left,
    .carousel-inner > .prev.right {
      left: 0;
    }
    .carousel-inner > .active.left {
      left: -100%;
    }
    .carousel-inner > .active.right {
      left: 100%;
    }
    .carousel-control {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 15%;
      opacity: 0.5;
      font-size: 20px;
      color: ${widgetVariablesStyle["$white"]};
      text-align: center;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
      background-color: transparent;
    }
    .carousel-control.left {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5) 0,
        rgba(0, 0, 0, 0.0001) 100%
      );
      background-repeat: repeat-x;
    }
    .carousel-control.right {
      left: auto;
      right: 0;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.0001) 0,
        rgba(0, 0, 0, 0.5) 100%
      );
      background-repeat: repeat-x;
    }
    .carousel-control:focus,
    .carousel-control:hover {
      outline: 0;
      color: ${widgetVariablesStyle["$white"]};
      text-decoration: none;
      opacity: 0.9;
    }
    .carousel-control .glyphicon-chevron-left,
    .carousel-control .glyphicon-chevron-right,
    .carousel-control .icon-next,
    .carousel-control .icon-prev {
      position: absolute;
      top: 50%;
      margin-top: -10px;
      z-index: 5;
      display: inline-block;
    }
    .carousel-control .glyphicon-chevron-left,
    .carousel-control .icon-prev {
      left: 50%;
      margin-left: -10px;
    }
    .carousel-control .glyphicon-chevron-right,
    .carousel-control .icon-next {
      right: 50%;
      margin-right: -10px;
    }
    .carousel-control .icon-next,
    .carousel-control .icon-prev {
      width: 20px;
      height: 20px;
      line-height: 1;
      font-family: serif;
    }
    .carousel-control .icon-prev:before {
      content: "\\2039";
    }
    .carousel-control .icon-next:before {
      content: "\\203a";
    }
    .carousel-indicators {
      position: absolute;
      bottom: 10px;
      left: 50%;
      z-index: 15;
      width: 60%;
      margin-left: -30%;
      padding-left: 0;
      list-style: none;
      text-align: center;
    }
    .carousel-indicators li {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 1px;
      text-indent: -999px;
      border: 1px solid ${widgetVariablesStyle["$white"]};
      border-radius: 10px;
      cursor: pointer;
      background-color: transparent;
    }
    .carousel-indicators .active {
      margin: 0;
      width: 12px;
      height: 12px;
      background-color: ${widgetVariablesStyle["$white"]};
    }
    .carousel-caption {
      position: absolute;
      left: 15%;
      right: 15%;
      bottom: 20px;
      z-index: 10;
      padding-top: 20px;
      padding-bottom: 20px;
      color: ${widgetVariablesStyle["$white"]};
      text-align: center;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    }
    .carousel-caption .btn {
      text-shadow: none;
    }
    @media screen and (min-width: 768px) {
      .carousel-control .glyphicon-chevron-left,
      .carousel-control .glyphicon-chevron-right,
      .carousel-control .icon-next,
      .carousel-control .icon-prev {
        width: 30px;
        height: 30px;
        margin-top: -10px;
        font-size: 30px;
      }
      .carousel-control .glyphicon-chevron-left,
      .carousel-control .icon-prev {
        margin-left: -10px;
      }
      .carousel-control .glyphicon-chevron-right,
      .carousel-control .icon-next {
        margin-right: -10px;
      }
      .carousel-caption {
        left: 20%;
        right: 20%;
        padding-bottom: 30px;
      }
      .carousel-indicators {
        bottom: 20px;
      }
    }
  
    .tpd-title {
      font-family: ${widgetVariablesStyle["$bold"]};
      font-size: 26px;
      text-align: center;
      color: ${widgetVariablesStyle["$medium-light-blue"]};
    }
  
    .clearfix:after,
    .clearfix:before {
      content: " ";
      display: table;
    }
    .clearfix:after {
      clear: both;
    }
    .center-block {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .pull-right {
      float: right !important;
    }
    .pull-left {
      float: left !important;
    }
    .hide {
      display: none !important;
    }
    .show {
      display: block !important;
    }
    .invisible {
      visibility: hidden;
    }
    .text-hide {
      // font: 0/0 a;
      color: transparent;
      text-shadow: none;
      background-color: transparent;
      border: 0;
    }
    .hidden {
      display: none !important;
    }
    .affix {
      position: fixed;
    }
    @-ms-viewport {
      width: device-width;
    }
    .visible-xs {
      display: none !important;
    }
    .visible-sm {
      display: none !important;
    }
    .visible-md {
      display: none !important;
    }
    .visible-lg {
      display: none !important;
    }
    .visible-lg-block,
    .visible-lg-inline,
    .visible-lg-inline-block,
    .visible-md-block,
    .visible-md-inline,
    .visible-md-inline-block,
    .visible-sm-block,
    .visible-sm-inline,
    .visible-sm-inline-block,
    .visible-xs-block,
    .visible-xs-inline,
    .visible-xs-inline-block {
      display: none !important;
    }
    @media (max-width: 767px) {
      .visible-xs {
        display: block !important;
      }
      table.visible-xs {
        display: table !important;
      }
      tr.visible-xs {
        display: table-row !important;
      }
      td.visible-xs,
      th.visible-xs {
        display: table-cell !important;
      }
    }
    @media (max-width: 767px) {
      .visible-xs-block {
        display: block !important;
      }
    }
    @media (max-width: 767px) {
      .visible-xs-inline {
        display: inline !important;
      }
    }
    @media (max-width: 767px) {
      .visible-xs-inline-block {
        display: inline-block !important;
      }
    }
    @media (min-width: 768px) and (max-width: 767px) {
      .visible-sm {
        display: block !important;
      }
      table.visible-sm {
        display: table !important;
      }
      tr.visible-sm {
        display: table-row !important;
      }
      td.visible-sm,
      th.visible-sm {
        display: table-cell !important;
      }
    }
    @media (min-width: 768px) and (max-width: 767px) {
      .visible-sm-block {
        display: block !important;
      }
    }
    @media (min-width: 768px) and (max-width: 767px) {
      .visible-sm-inline {
        display: inline !important;
      }
    }
    @media (min-width: 768px) and (max-width: 767px) {
      .visible-sm-inline-block {
        display: inline-block !important;
      }
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      .visible-md {
        display: block !important;
      }
      table.visible-md {
        display: table !important;
      }
      tr.visible-md {
        display: table-row !important;
      }
      td.visible-md,
      th.visible-md {
        display: table-cell !important;
      }
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      .visible-md-block {
        display: block !important;
      }
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      .visible-md-inline {
        display: inline !important;
      }
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      .visible-md-inline-block {
        display: inline-block !important;
      }
    }
    @media (min-width: 1280px) {
      .visible-lg {
        display: block !important;
      }
      table.visible-lg {
        display: table !important;
      }
      tr.visible-lg {
        display: table-row !important;
      }
      td.visible-lg,
      th.visible-lg {
        display: table-cell !important;
      }
    }
    @media (min-width: 1280px) {
      .visible-lg-block {
        display: block !important;
      }
    }
    @media (min-width: 1280px) {
      .visible-lg-inline {
        display: inline !important;
      }
    }
    @media (min-width: 1280px) {
      .visible-lg-inline-block {
        display: inline-block !important;
      }
    }
    @media (max-width: 767px) {
      .hidden-xs {
        display: none !important;
      }
    }
    @media (min-width: 768px) and (max-width: 767px) {
      .hidden-sm {
        display: none !important;
      }
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      .hidden-md {
        display: none !important;
      }
    }
    @media (min-width: 1280px) {
      .hidden-lg {
        display: none !important;
      }
    }
    .visible-print {
      display: none !important;
    }
    @media print {
      .visible-print {
        display: block !important;
      }
      table.visible-print {
        display: table !important;
      }
      tr.visible-print {
        display: table-row !important;
      }
      td.visible-print,
      th.visible-print {
        display: table-cell !important;
      }
    }
    .visible-print-block {
      display: none !important;
    }
    @media print {
      .visible-print-block {
        display: block !important;
      }
    }
    .visible-print-inline {
      display: none !important;
    }
    @media print {
      .visible-print-inline {
        display: inline !important;
      }
    }
    .visible-print-inline-block {
      display: none !important;
    }
    @media print {
      .visible-print-inline-block {
        display: inline-block !important;
      }
    }
    @media print {
      .hidden-print {
        display: none !important;
      }
    }
  
    .tpd-form-input {
      border: 1px solid;
      height: 40px;
      outline: none;
      padding-left: 20px;
      width: 100%;
  
      &.grey {
        border-color: ${widgetVariablesStyle["$grey"]};
        color: ${widgetVariablesStyle["$Tgrey"]};
      }
    }
  
    .tpd-button {
      font-family: ${widgetVariablesStyle["$medium"]};
      border: none;
      display: inline-block;
      height: auto;
      padding: 7px;
      width: 100%;
  
      &.red {
        font-size: 18px;
        background-color: ${widgetVariablesStyle["$main_red"]};
        border: 2px solid ${widgetVariablesStyle["$main_red"]};
        color: ${widgetVariablesStyle["$white"]};
        text-align: center;
        width: 100%;
  
        &:hover {
          background-color: ${widgetVariablesStyle["$main_red_hover"]};
          border: 2px solid ${widgetVariablesStyle["$main_red_hover"]};
        }
  
        &.disabled {
          background-color: ${widgetVariablesStyle["$grey"]};
          color: ${widgetVariablesStyle["$soft-grey"]};
        }
      }
  
      &.whiteRed {
        border: 1px solid ${widgetVariablesStyle["$grey"]};
        background-color: ${widgetVariablesStyle["$white"]};
        color: ${widgetVariablesStyle["$main_color"]};
        padding: 7px 20px;
        box-shadow: inset 0 -5px 0 ${widgetVariablesStyle["$main_red"]};
        width: 200px;
  
        &:hover {
          color: ${widgetVariablesStyle["$main_red"]};
        }
      }
  
      &.whiteRed-details {
        background-color: ${widgetVariablesStyle["$white"]};
        color: ${widgetVariablesStyle["$main_color"]};
        padding: 7px 20px;
        box-shadow: inset 0 -5px 0 ${widgetVariablesStyle["$main_red"]};
        width: 200px;
  
        &:hover {
          color: ${widgetVariablesStyle["$main_red"]};
        }
      }
  
      &.blue {
        width: 100%;
        background-color: ${widgetVariablesStyle["$medium-light-blue"]};
        color: ${widgetVariablesStyle["$white"]};
        padding: 10px 20px;
        text-transform: uppercase;
        margin: 0px 0;
        border-radius: 0 !important;
  
        &:hover {
          background-color: ${widgetVariablesStyle["$dark_blue"]};
        }
  
        &.disabled {
          background-color: ${widgetVariablesStyle["$grey"]};
        }
      }
  
      &.white-blue {
        width: 100%;
        text-transform: uppercase;
        background-color: ${widgetVariablesStyle["$white"]};
        color: ${widgetVariablesStyle["$medium-light-blue"]};
        padding: 10px 20px;
        margin: 5px 0;
        border-radius: 0 !important;
  
        &.active {
          background-color: ${widgetVariablesStyle["$medium-light-blue"]};
          color: ${widgetVariablesStyle["$white"]};
        }
      }
  
      &.white-prin {
        width: 100%;
        background-color: ${widgetVariablesStyle["$white"]};
        color: ${widgetVariablesStyle["$blue"]};
        padding: 7px 20px;
        margin: 5px 0;
        border-radius: 0 !important;
        border: 2px solid ${widgetVariablesStyle["$white"]};
  
        &:hover {
          border: 2px solid ${widgetVariablesStyle["$blue"]};
        }
  
        &.disabled {
          background-color: ${widgetVariablesStyle["$white"]};
          color: ${widgetVariablesStyle["$grey_border_form"]};
        }
      }
  
      &.light-blue {
        font-size: 18px;
        background-color: ${widgetVariablesStyle["$light_blue"]};
        color: ${widgetVariablesStyle["$medium-light-blue"]};
        padding: 7px 20px;
        width: 100%;
        border: 2px solid ${widgetVariablesStyle["$light_blue"]};
  
        &:hover {
          border: 2px solid ${widgetVariablesStyle["$medium-light-blue"]};
        }
  
        &.active {
          background-color: ${widgetVariablesStyle["$medium-light-blue"]};
          border: 2px solid ${widgetVariablesStyle["$medium-light-blue"]};
          color: ${widgetVariablesStyle["$white"]};
        }
  
        &.disabled {
          background-color: ${widgetVariablesStyle["$grey"]};
          color: ${widgetVariablesStyle["$soft-grey"]};
        }
      }
  
      &.btn-trasparent {
        background-color: transparent;
        text-transform: uppercase;
        color: ${widgetVariablesStyle["$white"]};
        padding: 7px 20px;
        width: 100%;
        border: 2px solid ${widgetVariablesStyle["$white"]};
  
        &:hover {
          color: ${widgetVariablesStyle["$dark_blue"]};
          border: 2px solid ${widgetVariablesStyle["$dark_blue"]};
        }
      }
    }
  
    .tpd-button-square {
      height: 30vw;
      width: 75%;
      color: ${widgetVariablesStyle["$white"]};
      text-align: center;
      padding: 0 5px;
      border: none;
      font-family: ${widgetVariablesStyle["$normal"]};
      font-size: 18px;
  
      @media only screen and (min-width: 768px) {
        width: 100%;
        height: 160px;
      }
  
      &[class*="icon-"] {
        font-size: 60px;
        margin: 20px;
      }
  
      &.blue {
        background-color: ${widgetVariablesStyle["$medium-light-blue"]};
      }
  
      &.green {
        background-color: ${widgetVariablesStyle["$green"]};
      }
  
      &.soft-green {
        background-color: ${widgetVariablesStyle["$blue"]};
        color: ${widgetVariablesStyle["$white"]};
      }
  
      &.orange {
        background-color: ${widgetVariablesStyle["$orange"]};
      }
  
      &.aqua {
        background-color: ${widgetVariablesStyle["$blue"]};
      }
    }
  }
`;
