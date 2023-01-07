// // document
// //   .querySelector('#meta-form')
// //   .addEventListener('submit', function (event) {
// //     event.preventDefault();
// //     var url = document.querySelector('input[name=url]').value;
// //     fetch(url)
// //       .then((response) => response.text())
// //       .then((html) => {
// //         var parser = new DOMParser();
// //         var doc = parser.parseFromString(html, 'text/html');
// //         var metaTags = doc.querySelectorAll('meta');
// //         var titleTag = doc.querySelector('title');
// //         var outputDiv = document.querySelector('#output');
// //         outputDiv.innerHTML = '<p>Meta tags:</p>';
// //         metaTags.forEach(function (tag) {
// //           var name = tag.getAttribute('name');
// //           var content = tag.getAttribute('content');
// //           if (name && content) {
// //             outputDiv.innerHTML += '<p>' + name + ': ' + content + '</p>';
// //           } else {
// //             var charset = tag.getAttribute('charset');
// //             if (charset) {
// //               outputDiv.innerHTML += '<p>charset: ' + charset + '</p>';
// //             }
// //           }
// //         });
// //         outputDiv.innerHTML += '<p>title: ' + titleTag.textContent + '</p>';
// //       });
// //   });
// document
//   .querySelector('#meta-form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();
//     var url = document.querySelector('input[name=url]').value;
//     fetch(url)
//       .then((response) => response.text())
//       .then((html) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(html, 'text/html');
//         var metaTags = doc.querySelectorAll('meta');
//         var titleTag = doc.querySelector('title');
//         var outputDiv = document.querySelector('#output');
//         outputDiv.innerHTML = '<p>Meta tags:</p>';
//         if (metaTags.length === 0) {
//           // no meta tags found
//           outputDiv.innerHTML = '<p>Error: No meta tags found.</p>';
//         } else {
//           metaTags.forEach(function (tag) {
//             var name = tag.getAttribute('name');
//             var content = tag.getAttribute('content');
//             if (name && content) {
//               outputDiv.innerHTML += '<p>' + name + ': ' + content + '</p>';
//             } else {
//               var charset = tag.getAttribute('charset');
//               if (charset) {
//                 outputDiv.innerHTML += '<p>charset: ' + charset + '</p>';
//               }
//             }
//           });
//         }
//         if (titleTag) {
//           outputDiv.innerHTML += '<p>title: ' + titleTag.textContent + '</p>';
//         } else {
//           outputDiv.innerHTML += '<p>Error: No title tag found.</p>';
//         }
//       });
//   });
// document
//   .querySelector('#meta-form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();
//     var url = document.querySelector('input[name=url]').value;
//     fetch(url)
//       .then((response) => response.text())
//       .then((html) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(html, 'text/html');
//         var metaTags = doc.querySelectorAll('meta');
//         var titleTag = doc.querySelector('title');
//         var outputDiv = document.querySelector('#output');
//         outputDiv.innerHTML = '<p>Meta tags:</p>';
//         if (metaTags.length === 0) {
//           // no meta tags found
//           outputDiv.innerHTML = '<p>Error: No meta tags found.</p>';
//         } else {
//           var hasDescription = false;
//           metaTags.forEach(function (tag) {
//             var name = tag.getAttribute('name');
//             var content = tag.getAttribute('content');
//             if (name && content) {
//               outputDiv.innerHTML += '<p>' + name + ': ' + content + '</p>';
//               if (name === 'description') {
//                 hasDescription = true;
//               }
//             } else {
//               var charset = tag.getAttribute('charset');
//               if (charset) {
//                 outputDiv.innerHTML += '<p>charset: ' + charset + '</p>';
//               }
//             }
//           });
//           if (!hasDescription) {
//             outputDiv.innerHTML += '<p>Error: No meta description found.</p>';
//           }
//         }
//         if (titleTag) {
//           outputDiv.innerHTML += '<p>title: ' + titleTag.textContent + '</p>';
//         } else {
//           outputDiv.innerHTML += '<p>Error: No title tag found.</p>';
//         }
//       });
//   });
// document
//   .querySelector('#meta-form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();
//     var url = document.querySelector('input[name=url]').value;
//     fetch(url)
//       .then((response) => response.text())
//       .then((html) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(html, 'text/html');
//         var metaTags = doc.querySelectorAll('meta');
//         var titleTag = doc.querySelector('title');
//         var images = doc.querySelectorAll('img');
//         var outputDiv = document.querySelector('#output');
//         outputDiv.innerHTML = '<p>Meta tags:</p>';
//         if (metaTags.length === 0) {
//           // no meta tags found
//           outputDiv.innerHTML = '<p>Error: No meta tags found.</p>';
//         } else {
//           var hasDescription = false;
//           metaTags.forEach(function (tag) {
//             var name = tag.getAttribute('name');
//             var content = tag.getAttribute('content');
//             if (name && content) {
//               outputDiv.innerHTML += '<p>' + name + ': ' + content + '</p>';
//               if (name === 'description') {
//                 hasDescription = true;
//               }
//             } else {
//               var charset = tag.getAttribute('charset');
//               if (charset) {
//                 outputDiv.innerHTML += '<p>charset: ' + charset + '</p>';
//               }
//             }
//           });
//           if (!hasDescription) {
//             outputDiv.innerHTML += '<p>Error: No meta description found.</p>';
//           }
//         }
//         if (titleTag) {
//           outputDiv.innerHTML += '<p>title: ' + titleTag.textContent + '</p>';
//         } else {
//           outputDiv.innerHTML += '<p>Error: No title tag found.</p>';
//         }
//         if (images.length === 0) {
//           // no images found
//           outputDiv.innerHTML += '<p>Error: No images found.</p>';
//         } else {
//           var hasAlt = true;
//           images.forEach(function (image) {
//             if (!image.hasAttribute('alt') || !image.getAttribute('alt')) {
//               hasAlt = false;
//             }
//           });
//           if (!hasAlt) {
//             outputDiv.innerHTML +=
//               '<p>Error: One or more images are missing alt attributes or have empty alt attributes.</p>';
//           }
//         }
//       });
//   });
// document
//   .querySelector('#meta-form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();
//     var url = document.querySelector('input[name=url]').value;
//     fetch(url)
//       .then((response) => response.text())
//       .then((html) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(html, 'text/html');
//         var metaTags = doc.querySelectorAll('meta');
//         var titleTag = doc.querySelector('title');
//         var images = doc.querySelectorAll('img');
//         var outputDiv = document.querySelector('#output');
//         outputDiv.innerHTML = '<p>Meta tags:</p>';
//         if (metaTags.length === 0) {
//           // no meta tags found
//           outputDiv.innerHTML = '<p>Error: No meta tags found.</p>';
//         } else {
//           var hasDescription = false;
//           metaTags.forEach(function (tag) {
//             var name = tag.getAttribute('name');
//             var content = tag.getAttribute('content');
//             if (name && content) {
//               outputDiv.innerHTML += '<p>' + name + ': ' + content + '</p>';
//               if (name === 'description') {
//                 hasDescription = true;
//               }
//             } else {
//               var charset = tag.getAttribute('charset');
//               if (charset) {
//                 outputDiv.innerHTML += '<p>charset: ' + charset + '</p>';
//               }
//             }
//           });
//           if (!hasDescription) {
//             outputDiv.innerHTML += '<p>Error: No meta description found.</p>';
//           }
//         }
//         if (titleTag) {
//           outputDiv.innerHTML += '<p>title: ' + titleTag.textContent + '</p>';
//         } else {
//           outputDiv.innerHTML += '<p>Error: No title tag found.</p>';
//         }
//         if (images.length === 0) {
//           // no images found
//           outputDiv.innerHTML += '<p>Error: No images found.</p>';
//         } else {
//           var hasAlt = true;
//           outputDiv.innerHTML += '<p>Images:</p>';
//           images.forEach(function (image) {
//             var src = image.getAttribute('src');
//             var alt = image.getAttribute('alt');
//             if (!image.hasAttribute('alt') || !alt) {
//               hasAlt = false;
//               outputDiv.innerHTML +=
//                 '<p>Error: Image ' +
//                 src +
//                 ' is missing alt attribute or has empty alt attribute.</p>';
//             } else {
//               outputDiv.innerHTML +=
//                 '<p>Image ' + src + ' has alt attribute: ' + alt + '</p>';
//             }
//           });
//           if (!hasAlt) {
//             outputDiv.innerHTML +=
//               '<p>Error: One or more images are missing alt attributes or have empty alt attributes.</p>';
//           }
//         }
//       });
//   });
// document
//   .querySelector('#meta-form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();
//     var url = document.querySelector('input[name=url]').value;
//     fetch(url)
//       .then((response) => response.text())
//       .then((html) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(html, 'text/html');
//         var metaTags = doc.querySelectorAll('meta');
//         var titleTag = doc.querySelector('title');
//         var images = doc.querySelectorAll('img');
//         var links = doc.querySelectorAll('a'); // find all links in the page
//         var outputDiv = document.querySelector('#output');
//         outputDiv.innerHTML = '<p>Meta tags:</p>';
//         if (metaTags.length === 0) {
//           // no meta tags found
//           outputDiv.innerHTML = '<p>Error: No meta tags found.</p>';
//         } else {
//           var hasDescription = false;
//           metaTags.forEach(function (tag) {
//             var name = tag.getAttribute('name');
//             var content = tag.getAttribute('content');
//             if (name && content) {
//               outputDiv.innerHTML += '<p>' + name + ': ' + content + '</p>';
//               if (name === 'description') {
//                 hasDescription = true;
//               }
//             } else {
//               var charset = tag.getAttribute('charset');
//               if (charset) {
//                 outputDiv.innerHTML += '<p>charset: ' + charset + '</p>';
//               }
//             }
//           });
//           if (!hasDescription) {
//             outputDiv.innerHTML += '<p>Error: No meta description found.</p>';
//           }
//         }
//         if (titleTag) {
//           outputDiv.innerHTML += '<p>title: ' + titleTag.textContent + '</p>';
//         } else {
//           outputDiv.innerHTML += '<p>Error: No title tag found.</p>';
//         }
//         if (images.length === 0) {
//           // no images found
//           outputDiv.innerHTML += '<p>Error: No images found.</p>';
//         } else {
//           var hasAlt = true;
//           outputDiv.innerHTML += '<p>Images:</p>';
//           images.forEach(function (image) {
//             var src = image.getAttribute('src');
//             var alt = image.getAttribute('alt');
//             if (!image.hasAttribute('alt') || !alt) {
//               hasAlt = false;
//               outputDiv.innerHTML +=
//                 '<p>Error: Image ' +
//                 src +
//                 ' is missing alt attribute or has empty alt attribute.</p>';
//             } else {
//               outputDiv.innerHTML +=
//                 '<p>Image ' + src + ' has alt attribute: ' + alt + '</p>';
//             }
//           });
//           if (!hasAlt) {
//             outputDiv.innerHTML +=
//               '<p>Error: One or more images are missing alt attributes or have empty alt attributes.</p>';
//           }
//         }
//         // loop through all links and fetch their data
//         if (links.length === 0) {
//           // no links found
//           outputDiv.innerHTML += '<p>Error: No links found.</p>';
//         } else {
//           links.forEach(function (link) {
//             var linkUrl = link.getAttribute('href');
//             fetch(linkUrl)
//               .then((response) => response.text())
//               .then((html) => {
//                 var parser = new DOMParser();
//                 var doc = parser.parseFromString(html, 'text/html');
//                 var metaTags = doc.querySelectorAll('meta');
//                 var titleTag = doc.querySelector('title');
//                 var images = doc.querySelectorAll('img');
//                 outputDiv.innerHTML += '<p>Links:</p>';
//                 if (metaTags.length === 0) {
//                   // no meta tags found
//                   outputDiv.innerHTML +=
//                     '<p>Error: No meta tags found for link ' + linkUrl + '</p>';
//                 } else {
//                   var hasDescription = false;
//                   metaTags.forEach(function (tag) {
//                     var name = tag.getAttribute('name');
//                     var content = tag.getAttribute('content');
//                     if (name && content) {
//                       outputDiv.innerHTML +=
//                         '<p>' + name + ': ' + content + '</p>';
//                       if (name === 'description') {
//                         hasDescription = true;
//                       }
//                     } else {
//                       var charset = tag.getAttribute('charset');
//                       if (charset) {
//                         outputDiv.innerHTML +=
//                           '<p>charset: ' + charset + '</p>';
//                       }
//                     }
//                   });
//                   if (!hasDescription) {
//                     outputDiv.innerHTML +=
//                       '<p>Error: No meta description found for link ' +
//                       linkUrl +
//                       '</p>';
//                   }
//                 }
//                 if (titleTag) {
//                   outputDiv.innerHTML +=
//                     '<p>title: ' + titleTag.textContent + '</p>';
//                 } else {
//                   outputDiv.innerHTML +=
//                     '<p>Error: No title tag found for link ' + linkUrl + '</p>';
//                 }
//                 if (images.length === 0) {
//                   // no images found
//                   outputDiv.innerHTML +=
//                     '<p>Error: No images found for link ' + linkUrl + '</p>';
//                 } else {
//                   var hasAlt = true;
//                   outputDiv.innerHTML += '<p>Images:</p>';
//                   images.forEach(function (image) {
//                     var src = image.getAttribute('src');
//                     var alt = image.getAttribute('alt');
//                     if (!image.hasAttribute('alt') || !alt) {
//                       hasAlt = false;
//                       outputDiv.innerHTML +=
//                         '<p>Error: Image ' +
//                         src +
//                         ' is missing alt attribute or has empty alt attribute for link ' +
//                         linkUrl +
//                         '</p>';
//                     } else {
//                       outputDiv.innerHTML +=
//                         '<p>Image ' +
//                         src +
//                         ' has alt attribute: ' +
//                         alt +
//                         ' for link ' +
//                         linkUrl +
//                         '</p>';
//                     }
//                   });
//                   if (!hasAlt) {
//                     outputDiv.innerHTML +=
//                       '<p>Error: One or more images are missing alt attributes or have empty alt attributes for link ' +
//                       linkUrl +
//                       '</p>';
//                   }
//                 }
//               });
//           });
//         }
//       });
//   });

document
  .querySelector('#meta-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var url = document.querySelector('input[name=url]').value;
    const urlSet = new Set(); // create a Set to store the URLs
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var metaTags = doc.querySelectorAll('meta');
        var titleTag = doc.querySelector('title');
        var images = doc.querySelectorAll('img');
        var links = doc.querySelectorAll('a'); // find all links in the page
        var outputDiv = document.querySelector('#output');
        outputDiv.innerHTML = '<p>Meta tags:</p>';
        if (metaTags.length === 0) {
          // no meta tags found
          outputDiv.innerHTML = '<p>Error: No meta tags found.</p>';
        } else {
          var hasDescription = false;
          metaTags.forEach(function (tag) {
            var name = tag.getAttribute('name');
            var content = tag.getAttribute('content');
            if (name && content) {
              outputDiv.innerHTML += '<p>' + name + ': ' + content + '</p>';
              if (name === 'description') {
                hasDescription = true;
              }
            } else {
              var charset = tag.getAttribute('charset');
              if (charset) {
                outputDiv.innerHTML += '<p>charset: ' + charset + '</p>';
              }
            }
          });
          if (!hasDescription) {
            outputDiv.innerHTML += '<p>Error: No meta description found.</p>';
          }
        }
        if (titleTag) {
          outputDiv.innerHTML += '<p>title: ' + titleTag.textContent + '</p>';
        } else {
          outputDiv.innerHTML += '<p>Error: No title tag found.</p>';
        }
        if (images.length === 0) {
          // no images found
          outputDiv.innerHTML += '<p>Error: No images found.</p>';
        } else {
          var hasAlt = true;
          outputDiv.innerHTML += '<p>Images:</p>';
          images.forEach(function (image) {
            var src = image.getAttribute('src');
            var alt = image.getAttribute('alt');
            if (!image.hasAttribute('alt') || !alt) {
              hasAlt = false;
              outputDiv.innerHTML +=
                '<p>Error: Image ' +
                src +
                ' is missing alt attribute or has empty alt attribute.</p>';
            } else {
              outputDiv.innerHTML +=
                '<p>Image ' + src + ' has alt attribute: ' + alt + '</p>';
            }
          });
          if (!hasAlt) {
            outputDiv.innerHTML +=
              '<p>Error: One or more images are missing alt attributes or have empty alt attributes.</p>';
          }
        }
        // loop through all links and fetch their data
        if (links.length === 0) {
          // no links found
          outputDiv.innerHTML += '<p>Error: No links found.</p>';
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
                outputDiv.innerHTML += '<p>Links:</p>';
                if (metaTags.length === 0) {
                  // no meta tags found
                  outputDiv.innerHTML +=
                    '<p>Error: No meta tags found for link ' + linkUrl + '</p>';
                } else {
                  var hasDescription = false;
                  metaTags.forEach(function (tag) {
                    var name = tag.getAttribute('name');
                    var content = tag.getAttribute('content');
                    if (name && content) {
                      outputDiv.innerHTML +=
                        '<p>' + name + ': ' + content + '</p>';
                      if (name === 'description') {
                        hasDescription = true;
                      }
                    } else {
                      var charset = tag.getAttribute('charset');
                      if (charset) {
                        outputDiv.innerHTML +=
                          '<p>charset: ' + charset + '</p>';
                      }
                    }
                  });
                  if (!hasDescription) {
                    outputDiv.innerHTML +=
                      '<p>Error: No meta description found for link ' +
                      linkUrl +
                      '</p>';
                  }
                }
                if (titleTag) {
                  outputDiv.innerHTML +=
                    '<p>title: ' + titleTag.textContent + '</p>';
                } else {
                  outputDiv.innerHTML +=
                    '<p>Error: No title tag found for link ' + linkUrl + '</p>';
                }
                if (images.length === 0) {
                  // no images found
                  outputDiv.innerHTML +=
                    '<p>Error: No images found for link ' + linkUrl + '</p>';
                } else {
                  var hasAlt = true;
                  outputDiv.innerHTML += '<p>Images:</p>';
                  images.forEach(function (image) {
                    var src = image.getAttribute('src');
                    var alt = image.getAttribute('alt');
                    if (!image.hasAttribute('alt') || !alt) {
                      hasAlt = false;
                      outputDiv.innerHTML +=
                        '<p>Error: Image ' +
                        src +
                        ' is missing alt attribute or has empty alt attribute for link ' +
                        linkUrl +
                        '</p>';
                    } else {
                      outputDiv.innerHTML +=
                        '<p>Image ' +
                        src +
                        ' has alt attribute: ' +
                        alt +
                        ' for link ' +
                        linkUrl +
                        '</p>';
                    }
                  });
                  if (!hasAlt) {
                    outputDiv.innerHTML +=
                      '<p>Error: One or more images are missing alt attributes or have empty alt attributes for link ' +
                      linkUrl +
                      '</p>';
                  }
                }
              });
          });
        }
        // show all URLs
        outputDiv.innerHTML += '<p>URLs:</p>';
        urlSet.forEach(function (url) {
          outputDiv.innerHTML += '<p>' + url + '</p>';
        });
      });
  });

