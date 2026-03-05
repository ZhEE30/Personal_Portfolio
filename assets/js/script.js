window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
        setTimeout(() => {
            loader.style.display = 'none';
            window.dispatchEvent(new Event('resize'));
            AOS.init({
                duration: 1000,
                once: true,
                offset: 50,
                disableMutationObserver: true 
				});
			}, 800);
		}, 500);
	});