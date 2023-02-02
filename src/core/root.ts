export async function createRoot(refrence: HTMLElement | string): Promise<HTMLElement> {
	let htmlElement: HTMLElement | null = null;
	let htmlFetched: HTMLElement | null = null;

	if (typeof refrence === 'string') {
		htmlFetched = document.querySelector(refrence);
		htmlElement = htmlFetched;
	} else {
		htmlElement = refrence;
	}

	if (htmlElement?.isConnected) return Promise.resolve(htmlElement);

	throw 'Invalid refrence!';
}
