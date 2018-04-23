module.exports = ({ componentHTML, styleTags, css, ids }) => `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <!-- <link rel="manifest" href="%PUBLIC_URL%/manifest.json"> -->
  <!-- <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"> -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <title>CM App</title>
  <style>${css}</style>
  ${styleTags}
</head>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root">${componentHTML}</div>
  <script type="text/javascript" src="/static/js/bundle.js"></script>
</body>
</body>

</html>

`;