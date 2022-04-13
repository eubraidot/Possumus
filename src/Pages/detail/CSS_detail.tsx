import { makeStyles } from '@mui/styles';
// import background from '../images/snowspeeder.png';

export const useStyles = makeStyles({
    body: {
        backgroundColor: 'lightblue',
        backgroundImage: `url(../snowspeeder.png)`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: '90%'
    },
    box: {
        sx: {
            width: 300,
            height: 300,
            bgcolor: 'primary.main',
        },
        opacity: '100%',
        alignitems: 'self-end',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        width: 'fit-content',
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: 30,
        margin: 50,
},
});