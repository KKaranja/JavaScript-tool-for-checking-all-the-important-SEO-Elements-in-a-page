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
      container.classList.add('container');
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
   
      ${page.metaTags

        .filter((tag) => !(tag.name === 'charset' && tag.content === 'UTF-8'))
        .map((tag) =>
          tag.httpEquiv === 'X-UA-Compatible'
            ? `<li class="list-item"><span  class="meta-tag">${tag.httpEquiv}</span> <span class="meta-content">${tag.content}</span></li>`
            : `<li class="list-item"><span class="meta-tag">${tag.name}</span> <span class="meta-content">${tag.content}</span></li>`
        )
        .join('')}
    </ul>
    <p>Images:</p>
    <ul>
      ${page.images
        .map(
          (image) =>
            `<li class="list-item"><span class="meta-tag">${image.src}</span><span class="meta-content"> ${image.alt}</span></li>`
        )
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
