// alert(`hello`);

var imageGallery = [];

for(var i = 0; i < 21; i++){
	imageGallery.push(`https://picsum.photos/500/300?random=${i}`);
};

var result = ``;

imageGallery.forEach(function(img,i){
	
	result += `
				<div class="col-sm-4 mb-4 text-center">
					
					<div class="card">
						<div class="card-header">Image</div>
						<div class="card-body text-center">
							<img src="${img}" class="img-fluid">
							<figcaption class="mt-2 text-uppercase">Image Name ${i} </figcaption>
						</div>
					</div>
				</div>
	`;
});

var gallery = document.getElementById('img-gallery');
gallery.innerHTML = result;

