import clsx from 'clsx';
import { motion } from 'framer-motion';
import useOnLoad from '../hooks/useOnLoad';
import useOnScroll from '../hooks/useOnScroll';

import { SectionTypes } from '../types/Section.types';
import { container, fadeInUp, fadeIn } from '../utils/animations';
import ArrowLink from './ArrowLink';
import LazyImage from './LazyImage';
import classes from './Section.module.scss';

const Section = ({
	heading,
	text,
	link,
	theme,
	btnText,
	desktopWebp,
	desktopAvif,
	tabletWebp,
	tabletAvif,
	mobileAvif,
	mobileWebp,
	alt,
	home,
}: SectionTypes) => {
	const { isLoaded, isVisible, setIsLoaded, containerRef } = useOnLoad();
	const { element, controls } = useOnScroll();

	const imageClasses = clsx({
		[classes.section__image]: true,
		container: true,
		containerLoaded: isLoaded,
	});

	const sectionClasses = clsx({
		[classes.section]: true,
		[classes.section__dark]: theme === 'dark',
		[classes.section__hero]: !home,
	});

	return (
		<section className={sectionClasses}>
			<div className={classes.section__text}>
				<motion.div
					variants={container}
					animate={controls}
					ref={element}
					className={classes.text__container}
				>
					<motion.h2 variants={fadeInUp}>{heading}</motion.h2>
					<motion.p variants={fadeInUp}>{text}</motion.p>
					{home && (
						<motion.div variants={fadeIn}>
							<ArrowLink
								link={link as string}
								theme={theme}
								btnText={btnText as string}
							/>
						</motion.div>
					)}
				</motion.div>
			</div>
			<div className={imageClasses} ref={containerRef}>
				<LazyImage
					isVisible={isVisible}
					isLoaded={isLoaded}
					setIsLoaded={setIsLoaded}
					desktopWebp={desktopWebp}
					desktopAvif={desktopAvif}
					tabletWebp={tabletWebp}
					tabletAvif={tabletAvif}
					mobileAvif={mobileAvif}
					mobileWebp={mobileWebp}
					alt={alt}
				/>
			</div>
		</section>
	);
};

export default Section;
