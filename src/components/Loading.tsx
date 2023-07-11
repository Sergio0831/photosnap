import classes from './Loading.module.scss';

const Loading = () => {
	return (
		<div className={classes.loading}>
			<div className={classes.loader}></div>
		</div>
	);
};

export default Loading;
