const API = 'https://genius-song-lyrics1.p.rapidapi.com/artists/1421/albums?per_page=20&page=1'
const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'Bq0QGOFeCtmshAGubOXhR5jTbAovp1Qpfn2jsn4PufvcFWDPbt',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

async function getAlbums() {
    const response = await fetch(API, options);
    const data = await response.json();
    console.log(data);
    return data
}

(async () => {
    try{
        const results = await getAlbums();
        let view = `
            ${results.response.albums.map(album => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${album.cover_art_url}" alt="${album.full_title}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${album.name}
                        </h3>
                    </div>
                </div>
            `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    }catch(error){
        console.log(error);
    }
})();
