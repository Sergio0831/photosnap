import clsx from 'clsx';
import { motion } from 'framer-motion';
import useOnLoad from '../hooks/useOnLoad';
import useOnScroll from '../hooks/useOnScroll';
import { StoryTypes } from '../types/Story.types';
import { container, fadeInUp, slideInLeft, fadeIn } from '../utils/animations';
import ArrowLink from './ArrowLink';
import Button from './Button';
import LazyImage from './LazyImage';
import classes from './Story.module.scss';

type StoryProps = {
	story: StoryTypes;
	pathname?: string;
};

const Story = ({ story, pathname }: StoryProps) => {
	const { isLoaded, isVisible, setIsLoaded, containerRef } = useOnLoad();
	const { controls, element } = useOnScroll();

	const articleClasses = clsx({
		[classes.story]: true,
		container: true,
		containerLoaded: isLoaded,
	});

	return (
		<article ref={containerRef} className={articleClasses}>
			<Button
				ariaLabel={story.title}
				link={`/stories/${story.id}`}
				className={classes.story__link}
			/>
			<div className={classes.story__img}>
				<LazyImage
					isVisible={isVisible}
					isLoaded={isLoaded}
					setIsLoaded={setIsLoaded}
					desktopAvif={story.desktopAvif}
					mobileAvif={story.mobileAvif}
					desktopWebp={story.desktopWebp}
					mobileWebp={story.mobileWebp}
					alt={story.alt}
				/>
			</div>
			<div className={classes.story__overlay}>
				<motion.div
					className={classes.story__text}
					variants={container}
					animate={controls}
					ref={element}
				>
					{pathname !== '/' && (
						<motion.p variants={fadeInUp}>{story.date}</motion.p>
					)}
					<motion.h3 className={classes.story__title} variants={fadeInUp}>
						{story.title}
					</motion.h3>
					<motion.p variants={fadeInUp}>by {story.author}</motion.p>
					<motion.div
						className={classes.story__line}
						variants={slideInLeft}
					></motion.div>
					<motion.div variants={fadeIn}>
						<ArrowLink
							link={`/stories/${story.id}`}
							btnText='read story'
							theme='dark'
						/>
					</motion.div>
				</motion.div>
			</div>
		</article>
	);
};

export default Story;
