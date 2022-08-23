export const load = async () => {
	const allPosts = import.meta.glob('./*{md,svx}');

	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	const posts = await Promise.all(body);
	posts.sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));
	return {
		posts: posts
	};
};
