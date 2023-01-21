export async function createRoot(): Promise<HTMLDivElement> {
	return new Promise((fulfil, reject) => {
		const root = document.querySelector<HTMLDivElement>('#root');

		if (root?.tagName.toLowerCase() === 'div') {
			fulfil(root);
		} else {
			reject('HTML Root not found!');
		}
	});
}
