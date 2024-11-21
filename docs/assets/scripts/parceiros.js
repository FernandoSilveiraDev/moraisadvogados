const logos = [
	'01-Logo-Empresa-Avenida.png',
	'02-Logo-Empresa-Santander.png',
	'03-Logo-Empresa-Itapeva.png',
	'04-Logo-Empresa-Grupo-Ser-Educacional.png',
	'05-Logo-Empresa-Voltz.png',
	'06-Logo-Empresa-Super-Logica.png',
	'07-Logo-Empresa-Return.png',
	'08-Logo-Empresa-Impper.png',
	'09-Logo-Empresa-Uninassau.png',
	'10-Logo-Empresa-Unifael.png',
	'11-Logo-Empresa-Dotz.png',
	'12-Logo-Empresa-Santa-Rita.png',
	'13-Logo-Empresa-Uniao-Educacional-LTDA.png',
	'14-Logo-Empresa-Brincadeira-de-Crianca.png',
	'15-Logo-Empresa-Milho-de-Ouro.png',
	'16-Logo-Empresa-Faculdade-Pascoal-Dantas.png',
	'17-Logo-Empresa-DSOP-Educacao-Financeira.png',
	'18-Logo-Empresa-Liceu-Sao-Paulo.png',
	'19-Logo-Empresa-CONEXLED.png',
	'20-Logo-Empresa-Colegio-Luterano-Arthur-konrath.png',
	'21-Logo-Empresa-Optitex.png',
	'22-Logo-Empresa-CNA.png',
	'23-Logo-Empresa-Feltrin-Motos.png',
	'24-Logo-Empresa-FCAMP.png',
	'25-Logo-Empresa-Grupo-Mousano.png',
	'26-Logo-Empresa-PBF-English-Espanol-Sertaozinho.png',
	'27-Logo-Empresa-LaFontaine.png'
	];

function createCarouselItems() {
	const logoContainer = document.getElementById('logo-container');
	logoContainer.innerHTML = '';

	logos.forEach((logo, index) => {
		const item = document.createElement('div');
		item.className = '';
		item.id = `logo-${index + 1}`;
		const img = document.createElement('img');
		img.src = `assets/images/aba11/${logo}`;
		img.alt = logo.split('-')[2];
		item.appendChild(img);
		logoContainer.appendChild(item);
	});
}

function shiftArray(direction) {
	const logoContainer = document.getElementById('logo-container');
	const items = Array.from(logoContainer.children);

	items.forEach((item) => {
		item.classList.add('fade-out');
	});

	setTimeout(() => {
		if (direction === 1) {
			logoContainer.appendChild(logoContainer.firstElementChild);
		} else if (direction === -1) {
			logoContainer.insertBefore(logoContainer.lastElementChild, logoContainer.firstElementChild);
		}

		items.forEach((item) => {
			item.classList.remove('fade-out');
			item.classList.add('fade-in');
		});

		setTimeout(() => {
			items.forEach((item) => {
				item.classList.remove('fade-in');
			});
        }, 500); // O tempo deve corresponder à duração da transição
    }, 500); // O tempo deve corresponder à duração da transição
}

window.addEventListener('load', createCarouselItems);
