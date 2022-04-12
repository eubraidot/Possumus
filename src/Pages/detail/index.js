import { useLocation } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { createBrowserHistory } from 'history';
import { useEffect, useState } from 'react';
import {useStyles} from './CSS_detail'


function Detail(props) {
    const history = createBrowserHistory();
    const classes=useStyles();
    const [initialState, setInitialState] = useState({
        loading: false,
        errorMessage: null,
        errorCode: '',
        entities: [],
        totalItems: -1,
    });

    const { pathname } = useLocation();
    const personaId = pathname.split("/").pop();
    console.log(personaId);

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://swapi.dev/api/people/${personaId}`)
            setInitialState({
                entities: await response.json()
            })
        })();
    }, [personaId])

    function handleGoBack() {
        history.back();
    };

    const card = (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {initialState.entities.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Age: {initialState.entities.birth_year}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Eye color: {initialState.entities.eye_color}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Gender: {initialState.entities.gender}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Height: {initialState.entities.height}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Skin color: {initialState.entities.skin_color}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleGoBack}>GoBack</Button>
                </CardActions>
            </Card>
    );

    return (
        <div className={classes.body}>
        <Box className={classes.box}>
            <Card variant="outlined">{card}</Card>
        </Box>
        </div>
    )
}
export default Detail