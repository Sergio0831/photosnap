import classes from "./Youtube.module.scss";

const Youtube = () => {
  return (
    <svg
      className={classes.youtube}
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='Shape'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.33 0C4.80752 0 0.330017 4.4775 0.330017 10C0.330017 15.5225 4.80752 20 10.33 20C15.8525 20 20.33 15.5225 20.33 10C20.33 4.4775 15.8525 0 10.33 0ZM14.0308 14.0767C12.2792 14.1967 8.37752 14.1967 6.62835 14.0767C4.73168 13.9467 4.51085 13.0183 4.49668 10C4.51085 6.97583 4.73418 6.05333 6.62835 5.92333C8.37752 5.80333 12.28 5.80333 14.0308 5.92333C15.9284 6.05333 16.1484 6.98167 16.1634 10C16.1484 13.0242 15.9258 13.9467 14.0308 14.0767ZM12.7608 9.99667L8.66335 8.04833V11.9517L12.7608 9.99667Z'
        fill='url(#paint0_linear_0_4017)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_0_4017'
          x1='10.33'
          y1='30'
          x2='30.33'
          y2='10'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#fff' />
          <stop offset='1' stopColor='#fff' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Youtube;