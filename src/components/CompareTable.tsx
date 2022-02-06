import classes from "./CompareTable.module.scss";
import Icon from "./Icon";

const CompareTable = () => {
  return (
    <div className={classes.table}>
      <div className={classes.table__head}>
        <ul className={classes.row}>
          <li className={classes.table__heading}>
            <h6>the features</h6>
          </li>
          <li className={classes.table__heading}>
            <h6>basic</h6>
          </li>
          <li className={classes.table__heading}>
            <h6>pro</h6>
          </li>
          <li className={classes.table__heading}>
            <h6>business</h6>
          </li>
        </ul>
      </div>
      <div className={classes.table__body}>
        <ul className={classes.row}>
          <li className={classes.table__data}>
            <h6>unlimited story posting</h6>
          </li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
        </ul>
        <ul className={classes.row}>
          <li className={classes.table__data}>
            <h6>unlimited photo upload</h6>
          </li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
        </ul>
        <ul className={classes.row}>
          <li className={classes.table__data}>
            <h6>embedding custom content</h6>
          </li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
        </ul>
        <ul className={classes.row}>
          <li className={classes.table__data}>
            <h6>customize metadata</h6>
          </li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
        </ul>
        <ul className={classes.row}>
          <li className={classes.table__data}>
            <h6>advanced metrics</h6>
          </li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
        </ul>
        <ul className={classes.row}>
          <li className={classes.table__data}>
            <h6>photo downloads</h6>
          </li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
        </ul>
        <ul className={classes.row}>
          <li className={classes.table__data}>
            <h6>search engine indexing</h6>
          </li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
        </ul>
        <ul className={classes.row}>
          <li className={classes.table__data}>
            <h6>custom analytics</h6>
          </li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}></li>
          <li className={classes.table__data}>
            <Icon icon='check' size='1.6rem' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompareTable;
