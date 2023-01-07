document.querySelector('#form').addEventListener('submit', function (event) {
  event.preventDefault();
  var url = document.querySelector('input[name=url]').value;
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      var startPos = html.indexOf('<meta');
      var endPos = html.indexOf('>', startPos);
      var metaTag = html.substring(startPos, endPos + 1);
      var attributes = metaTag.split('" "');
      var metaTags = [];

      attributes.forEach(function (attribute) {
        var parts = attribute.split('=');
        var key = parts[0].trim();
        var value = parts[1].replace(/^"|"$/g, '');
        metaTags.push(key);
      });
      console.log('Meta tags:');
      attributes.forEach(function (attribute) {
        var parts = attribute.split('=');
        var key = parts[0].trim();
        var value = parts[1].replace(/^"|"$/g, '');
        console.log(key + ': ' + value);
      });
      var outputTable = document.querySelector('#output table');
      attributes.forEach(function (attribute) {
        var parts = attribute.split('=');
        var key = parts[0].trim();
        var value = parts[1].replace(/^"|"$/g, '');
        outputTable.innerHTML +=
          '<tr><td>' + key + '</td><td>' + value + '</td></tr>';
      });
      var requiredTags = ['title', 'description', 'keywords'];

      //   var attributes = {};
      //   var attributeRegex = /([\w-]+)="([^"]+)"/g;
      //   var match;
      //   while ((match = attributeRegex.exec(metaTag))) {
      //     attributes[match[1]] = match[2];
      //   }
      //   console.log(attributes);
      // Check for presence of required tags
      requiredTags.forEach(function (tag) {
        if (!metaTags.includes(tag)) {
          console.warn('Missing required meta tag: ' + tag);
        }
      });

      // Highlight missing or incomplete tags
      metaTags.forEach(function (tag) {
        if (!tag.includes('content=')) {
          console.warn('Incomplete meta tag: ' + tag);
        }
      });
    });
});
