// new 🇨ode
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
      headings: [...doc.querySelectorAll('h1, h2, h3, h4, h5, h6')],
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
      container.classList.add('container');
      const heading = document.createElement('h1');
      const list = document.createElement('ul');

      heading.textContent = 'Page Data';
      container.appendChild(heading);
      container.appendChild(list);

      metaData.forEach((page) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `

<h2 class="title-tag" title="The Title Tag">${page.title.textContent}</h2>
<p>Meta tags:</p>
<ul>

${page.metaTags
  .filter((tag) => !(tag.name === 'charset' && tag.content === 'UTF-8'))
  .map((tag) => {
    let errorMessage = '';

    return tag.httpEquiv === 'X-UA-Compatible'
      ? `<li class="list-item"><span  class="meta-tag">${tag.httpEquiv}</span> <span class="meta-content">${tag.content}</span>${errorMessage}</li>`
      : `<li class="list-item"><span class="meta-tag">${tag.name}</span> <span class="meta-content">${tag.content}</span>${errorMessage}</li>`;
  })
  .join('')}


</ul>

<p>Images:</p>
<ul>
 
${page.images
  .map(
    (image) =>
      `<li class="list-item"><span class="meta-tag">${image.src}</span>${
        image.alt === ''
          ? '<span class="meta-tag error">Error: Empty alt attribute</span>'
          : !image.alt
          ? '<span class="meta-tag error">Error: Missing alt attribute</span>'
          : `<span class="meta-content"> ${image.alt}</span>`
      }</li>`
  )
  .join('')}



</ul>
<p>Headings:</p>
<ul>

 ${page.headings
   .map((heading, index) => {
     if (heading.tagName === 'h1' && index > 0) {
       return `<li class="heading list-item"><span class="heading-level meta-tag error">Error: You can only have one h1 tag in each page</span></li>`;
     }
     return `<li class="heading list-item"><span class="heading-level meta-tag">${heading.tagName}</span> <span class="heading-content meta-content">${heading.textContent}</span></li>`;
   })
   .join('')}

</ul>

<p>Links:</p>
<ul>
  ${page.links.map((link) => `<li class="link">${link.href}</li>`).join('')}
</ul>

`;
        list.appendChild(listItem);
      });

      document.body.appendChild(container);
    });
});
