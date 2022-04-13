import { makeStyles } from '@mui/styles';
// import background from '../background.png';

export const useStylesHome= makeStyles({
  body: {
    backgroundImage: `url(background.png)`,
    width: '100vw',
    height: '100vh',
  },
  tableBody: {
      marginTop:'50px',
    }
});