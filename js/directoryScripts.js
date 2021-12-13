document.addEventListener('DOMContentLoaded', () => { 
    listenViewChange();
});

//Fetching json data from directory.json
fetch('../data/directory.json')
    .then(res => res.json())
    .then(data => {
        createHtml(data);
    })

function createHtml(data) {
    const $container = document.getElementById('directoryContainer');
    //The view by default is list
    
    $container.classList.add('grid');
    data.forEach(item => { 
        const $card = document.createElement('div');
        $card.classList.add('card');
        $card.innerHTML = `
        <div class="card-img-container">
            <img class="card-img" src="${item.logo}" alt="Logo of ${item.title}">
        </div>

        <div class="card-info-container">
            <h3>${item.title}</h3>
            <a href="${item.website}" target="_blank">Go to ${item.title}</a>
            <p>Contact: ${item.contact}</p>
        </div>`;

        $container.appendChild($card);
    });
}

function listenViewChange() {
    const $gridBtn = document.getElementById('gridBtn');
    const $listBtn = document.getElementById('listBtn');
    const $container = document.getElementById('directoryContainer');

    $gridBtn.addEventListener('click', () => { 
        if($container.classList.contains('grid')) {
            return;
        }
        $container.classList.add('grid');
    });
    $listBtn.addEventListener('click', () => { 
        if(!$container.classList.contains('grid')) {
            return;
        }
        $container.classList.remove('grid');
    });
}