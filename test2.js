//   document.querySelector('#meta-form').addEventListener('submit', function (event) {
// document
//   .querySelector('#meta-form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();
//     var url = document.querySelector('input[name=url]').value;

//     const processMetaData = (html) => {
//       var parser = new DOMParser();
//       var doc = parser.parseFromString(html, 'text/html');
//       var metaTags = doc.querySelectorAll('meta');
//       var titleTag = doc.querySelector('title');
//       var images = doc.querySelectorAll('img');
//       var links = doc.querySelectorAll('a');

//       const pageMetaData = {
//         url: url,
//         metaTags: [],
//         title: null,
//         images: [],
//         links: [],
//       };

//       metaTags.forEach(function (tag) {
//         var name = tag.getAttribute('name');
//         var content = tag.getAttribute('content');
//         if (name && content) {
//           pageMetaData.metaTags.push({ name: name, content: content });
//         } else {
//           var charset = tag.getAttribute('charset');
//           if (charset) {
//             pageMetaData.metaTags.push({ charset: charset });
//           }
//         }
//       });

//       if (titleTag) {
//         pageMetaData.title = titleTag.textContent;
//       }

//       images.forEach(function (image) {
//         var src = image.getAttribute('src');
//         var alt = image.getAttribute('alt');
//         pageMetaData.images.push({ src: src, alt: alt });
//       });

//       links.forEach(function (link) {
//         var linkUrl = link.getAttribute('href');
//         pageMetaData.links.push(linkUrl);
//       });

//       return pageMetaData;
//     };

//     fetch(url)
//       .then((response) => response.text())
//       .then((html) => {
//         const metaData = processMetaData(html);

//         // create a container element to hold the page data
//         const container = document.createElement('div');
//         container.classList.add('container');

//         // create a heading for the page data
//         const pagesHeading = document.createElement('h2');
//         pagesHeading.textContent = 'Pages';
//         pagesHeading.classList.add('pages-heading');
//         container.appendChild(pagesHeading);

//         // create a list element to hold the page data
//         const pagesList = document.createElement('ul');
//         pagesList.classList.add('pages-list');
//         container.appendChild(pagesList);

//         // create a list item for the page
//         const pageItem = document.createElement('li');
//         pageItem.classList.add('page-item');
//         pagesList.appendChild(pageItem);

//         // create a heading for the page
//         const pageHeading = document.createElement('h3');
//         pageHeading.textContent = metaData.url;
//         pageHeading.classList.add('page-heading');

//         pageItem.appendChild(pageHeading);

//         // create a div to hold the meta data
//         const metaContainer = document.createElement('div');
//         metaContainer.classList.add('meta-container');
//         pageItem.appendChild(metaContainer);

//         // create a heading for the meta data
//         const metaHeading = document.createElement('h4');
//         metaHeading.textContent = 'Meta Data';
//         metaHeading.classList.add('meta-heading');
//         metaContainer.appendChild(metaHeading);

//         // create a list element to hold the meta data
//         const metaList = document.createElement('ul');
//         metaList.classList.add('meta-list');
//         metaContainer.appendChild(metaList);

//         // loop through all meta tags and add them to the list
//         metaData.metaTags.forEach((metaTag) => {
//           // create a list item for the meta tag
//           const metaItem = document.createElement('li');
//           metaItem.classList.add('meta-item');
//           metaList.appendChild(metaItem);

//           // create a heading for the meta tag
//           const metaTagHeading = document.createElement('h5');
//           metaTagHeading.classList.add('meta-tag-heading');
//           metaItem.appendChild(metaTagHeading);

//           // create a span element to hold the name of the meta tag
//           const metaTagName = document.createElement('span');
//           metaTagName.textContent = 'Name: ';
//           metaTagName.classList.add('meta-tag-name');
//           metaTagHeading.appendChild(metaTagName);

//           // create a span element to hold the value of the meta tag
//           const metaTagContent = document.createElement('span');
//           metaTagContent.textContent = 'Content: ';
//           metaTagContent.classList.add('meta-tag-content');
//           metaTagHeading.appendChild(metaTagContent);

//           if (metaTag.name) {
//             // add the name and content of the meta tag to the list item
//             metaTagName.textContent += metaTag.name;
//             metaTagContent.textContent += metaTag.content;
//           } else {
//             // add the charset to the list item
//             metaTagContent.textContent += metaTag.charset;
//           }
//         });

//         // create a div to hold the title data
//         const titleContainer = document.createElement('div');
//         titleContainer.classList.add('title-container');
//         pageItem.appendChild(titleContainer);

//         // create a heading for the title data
//         const titleHeading = document.createElement('h4');
//         titleHeading.textContent = 'Title';
//         titleHeading.classList.add('title-heading');
//         titleContainer.appendChild(titleHeading);

//         // create a div to hold the image data
//         const imageContainer = document.createElement('div');
//         imageContainer.classList.add('image-container');
//         pageItem.appendChild(imageContainer);

//         // create a heading for the image data
//         const imageHeading = document.createElement('h4');
//         imageHeading.textContent = 'Images';
//         imageHeading.classList.add('image-heading');
//         imageContainer.appendChild(imageHeading);

//         // create a list element to hold the image data
//         const imageList = document.createElement('ul');
//         imageList.classList.add('image-list');
//         imageContainer.appendChild(imageList);

//         // loop through all images and add them to the list
//         metaData.images.forEach((image) => {
//           // create a list item for the image
//           const imageItem = document.createElement('li');
//           imageItem.classList.add('image-item');
//           imageList.appendChild(imageItem);

//           // create a heading for the image
//           const imageHeading = document.createElement('h5');
//           imageHeading.classList.add('image-heading');
//           imageItem.appendChild(imageHeading);

//           // create a span element to hold the src of the image
//           const imageSrc = document.createElement('span');
//           imageSrc.textContent = 'Src: ';
//           imageSrc.classList.add('image-src');
//           imageHeading.appendChild(imageSrc);

//           // create a span element to hold the alt text of the image
//           const imageAlt = document.createElement('span');
//           imageAlt.textContent = 'Alt: ';
//           imageAlt.classList.add('image-alt');
//           imageHeading.appendChild(imageAlt);

//           // add the src and alt text of the image to the list item
//           imageSrc.textContent += image.src;
//           imageAlt.textContent += image.alt;
//         });

//         // create a div to hold the link data
//         const linkContainer = document.createElement('div');
//         linkContainer.classList.add('link-container');
//         pageItem.appendChild(linkContainer);

//         // create a heading for the link data
//         const linkHeading = document.createElement('h4');
//         linkHeading.textContent = 'Links';
//         linkHeading.classList.add('link-heading');
//         linkContainer.appendChild(linkHeading);

//         // create a list element to hold the link data
//         const linkList = document.createElement('ul');
//         linkList.classList.add('link-list');
//         linkContainer.appendChild(linkList);

//         // loop through all links and add them to the list
//         metaData.links.forEach((link) => {
//           // create a list item for the link
//           const linkItem = document.createElement('li');
//           linkItem.classList.add('link-item');
//           linkList.appendChild(linkItem);

//           // create a heading for the link
//           const linkHeading = document.createElement('h5');
//           linkHeading.textContent = link;
//           linkHeading.classList.add('link-heading');
//           linkItem.appendChild(linkHeading);
//         });

//         // add the page's meta data to the list
//         pagesList.appendChild(pageItem);
//       });

//     // add the container element to the DOM
//     document.body.appendChild(container);
//   });

const form = document.getElementById('meta-form');

form.addEventListener('submit', (event) => {
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

      const container = document.createElement('div');
      const heading = document.createElement('h1');
      const list = document.createElement('ul');

      heading.textContent = 'Page Data';
      container.appendChild(heading);
      container.appendChild(list);

      metaData.forEach((page) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <h2>${page.title.textContent}</h2>
          <p>Meta tags:</p>
       <ul>
      <li>title: ${page.title.textContent}</li>
      ${page.metaTags
        .filter((tag) => !(tag.name === 'charset' && tag.content === 'UTF-8'))
        .map((tag) =>
          tag.httpEquiv === 'X-UA-Compatible'
            ? `<li>${tag.httpEquiv}: ${tag.content}</li>`
            : `<li>${tag.name}: ${tag.content}</li>`
        )
        .join('')}
    
      <li>charset: ${document.characterSet}</li>
    </ul>
          <p>Images:</p>
          <ul>
      ${page.images
        .map((image) => `<li>${image.src}: ${image.alt}</li>`)
        .join('')}
    </ul>
          <p>Links:</p>
          <ul>
            ${page.links.map((link) => `<li>${link.href}</li>`).join('')}
          </ul>
        `;
        list.appendChild(listItem);
      });

      document.body.appendChild(container);
    });
});
