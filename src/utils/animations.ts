export const container = {
	show: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
		},
	},
};

export const fadeIn = {
	hidden: { opacity: 0, scale: 0.7 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
};

export const slideInLeft = {
	hidden: { width: 0 },
	show: {
		width: '100%',
		transition: {
			duration: 0.5,
			delay: 0.8,
		},
	},
};

export const fadeInLeft = {
	hidden: { opacity: 0, x: -100 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const fadeInRight = {
	hidden: { opacity: 0, x: 100 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};
