const form =document.getElementById('meta-form')
  form.addEventListener('submit',  (event) =>{
     event.preventDefault();

     const url = document.querySelector('input[name="url"]').value;
     const urlSet = new Set();
     const metaData = []; 

     function processMetaData(html) {
       const parser = new DOMParser();
       const doc = parser.parseFromString(html, 'text/html');

       const pageMetaData = {
         metaTags: [...doc.getElementsByTagName('meta')],
         title: doc.getElementsByTagName('title')[0],
         images: [...doc.getElementsByTagName('img')],
         links: [...doc.getElementsByTagName('a')],
       };

       metaData.push(pageMetaData);
     }

    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        processMetaData(html);

        const links = [...new Set(metaData[0].links.map((link) => link.href))];
        links.forEach((link) => {
          if (!urlSet.has(link)) {
            urlSet.add(link);
            fetch(link)
              .then((response) => response.text())
              .then((html) => processMetaData(html));
          }
        });

        
        var outputDiv = document.querySelector('#output');
        outputDiv.innerHTML = '<h1>Meta tags:</h1>';
        if (metaTags.length === 0) {
          // no meta tags found
          outputDiv.innerHTML = '<h1>Error: No meta tags found.</h1>';
        } else {
          var hasDescription = false;
          metaTags.forEach(function (tag) {
            var name = tag.getAttribute('name');
            var content = tag.getAttribute('content');
            if (name && content) {
              outputDiv.innerHTML += '<h1>' + name + ': ' + content + '</h1>';
              if (name === 'description') {
                hasDescription = true;
              }
            } else {
              var charset = tag.getAttribute('charset');
              if (charset) {
                outputDiv.innerHTML += '<h1>charset: ' + charset + '</h1>';
              }
            }
          });
          if (!hasDescription) {
            outputDiv.innerHTML += '<h1>Error: No meta description found.</h1>';
          }
        }
        if (titleTag) {
          outputDiv.innerHTML += '<h1>title: ' + titleTag.textContent + '</h1>';
        } else {
          outputDiv.innerHTML += '<h1>Error: No title tag found.</h1>';
        }
        if (images.length === 0) {
          // no images found
          outputDiv.innerHTML += '<h1>Error: Noimages found.</h1>';
        } else {
          var hasAlt = true;
          outputDiv.innerHTML += '<h1>Images:</h1>';
          images.forEach(function (image) {
            var src = image.getAttribute('src');
            var alt = image.getAttribute('alt');
            if (!image.hasAttribute('alt') || !alt) {
              hasAlt = false;
              outputDiv.innerHTML +=
                '<h1>Error: Image ' +
                src +
                ' is missing alt attribute or has empty alt attribute.</h1>';
            } else {
              outputDiv.innerHTML +=
                '<h1>Image ' + src + ' has alt attribute: ' + alt + '</h1>';
            }
          });
          if (!hasAlt) {
            outputDiv.innerHTML +=
              '<h1>Error: One or more images are missing alt attributes or have empty alt attributes.</h1>';
          }
        }
        // loop through all links and fetch their data
        if (links.length === 0) {
          // no links found
          outputDiv.innerHTML += '<h1>Error: No links found.</h1>';
        } else {
          links.forEach(function (link) {
            var linkUrl = link.getAttribute('href');
            urlSet.add(linkUrl); // add URL to the Set
            fetch(linkUrl)
              .then((response) => response.text())
              .then((html) => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, 'text/html');
                var metaTags = doc.querySelectorAll('meta');
                var titleTag = doc.querySelector('title');
                var images = doc.querySelectorAll('img');
                outputDiv.innerHTML += '<h1>Links:</h1>';
                if (metaTags.length === 0) {
                  // no meta tags found
                  outputDiv.innerHTML +=
                    '<h1>Error: No meta tags found in link: ' +
                    linkUrl +
                    '</h1>';
                } else {
                  var hasDescription = false;
                  metaTags.forEach(function (tag) {
                    var name = tag.getAttribute('name');
                    var content = tag.getAttribute('content');
                    if (name && content) {
                      outputDiv.innerHTML +=
                        '<h1"' + name + ': ' + content + '</h1>';
                      if (name === 'description') {
                        hasDescription = true;
                      }
                    } else {
                      var charset = tag.getAttribute('charset');
                      if (charset) {
                        outputDiv.innerHTML +=
                          '<h1>charset: ' + charset + '</h1>';
                      }
                    }
                  });
                  if (!hasDescription) {
                    outputDiv.innerHTML +=
                      '<h1>Error: No meta description found in link: ' +
                      linkUrl +
                      '</h1>';
                  }
                }
                if (titleTag) {
                  outputDiv.innerHTML +=
                    '<h1>title: ' + titleTag.textContent + '</h1>';
                } else {
                  outputDiv.innerHTML +=
                    '<h1>Error: No title tag found in link: ' +
                    linkUrl +
                    '</h1>';
                }
                if (images.length === 0) {
                  // no images found
                  outputDiv.innerHTML +=
                    '<h1>Error: No images found in link: ' + linkUrl + '</h1>';
                } else {
                  var hasAlt = true;
                  images.forEach(function (image) {
                    var src = image.getAttribute('src');
                    var alt = image.getAttribute('alt');
                    if (!image.hasAttribute('alt') || !alt) {
                      hasAlt = false;
                      outputDiv.innerHTML +=
                        '<h1>Error: Image ' +
                        src +
                        ' is missing alt attribute or has empty alt attribute in link: ' +
                        linkUrl +
                        '</h1>';
                    }
                  });
                  if (!hasAlt) {
                    outputDiv.innerHTML +=
                      '<h1>Error: One or more images are missing alt attributes or have empty alt attributes in link: ' +
                      linkUrl +
                      '</h1>';
                  }
                }
              });
          });
        }
      });
  });

// add some CSS to style the page
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.querySelector('#meta-form').style.maxWidth = '600px';
document.querySelector('#meta-form').style.margin = '0 auto';
document.querySelector('#meta-form').style.padding = '20px';
document.querySelector('#meta-form').style.border = '1px solid #ccc';
document.querySelector('#output').style.maxWidth = '600px';
document.querySelector('#output').style.margin = '20px auto';
document.querySelectorAll('h1').forEach(function (h1) {
  h1.style.fontSize = '20px';
  h1.style.margin = '10px 0';
});
