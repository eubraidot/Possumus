import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Container, Menu, TableBody } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { personageContext } from '../../commons/context';
import { useStylesHome } from './CSS_home';

export default function Home() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { initialState, getInitialState, clearInitialState } = useContext(personageContext);
  const classes = useStylesHome();

  useEffect(() => { getInitialState(); }, [])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleListarPersonages = () => {
    getInitialState();
  }

  const handleClearInitialState = () => {
    clearInitialState();
  }

  const getPersonaId = (url: string) => {
    const personaId = url?.split('people/')?.pop()?.split('/')[0]
    return personaId;
  }

  const renderPersonages = () => {
    return initialState?.entities.map((row: any) => (
      <TableRow
        key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {/* <a href="/detail/1">{row.name}</a> */}
          <a href={`/detail/${getPersonaId(row.url)}`}>{row.name}</a>
        </TableCell>
        <TableCell align="right">{row.birth_year}</TableCell>
        <TableCell align="right">{row.created}</TableCell>
        <TableCell align="right">{row.edited}</TableCell>
        <TableCell align="right">{row.url}</TableCell>
      </TableRow>
    ))
  }
  return (
    <div className={classes.body}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              // startIcon="node"
              variant="contained"
            >
              <Typography variant="h6" color="inherit" component="div" align='left'>
                Personajes de Star Wars
              </Typography>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleListarPersonages}>Listar Personajes</MenuItem>
              <MenuItem onClick={handleClearInitialState}>Restaurar</MenuItem>
            </Menu>
            {/* </IconButton> */}

          </Toolbar>
        </AppBar>
      </Box>

      <Container fixed className={classes.tableBody}>
        {initialState?.totalItems > 0 ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">birth_year</TableCell>
                  <TableCell align="right">created</TableCell>
                  <TableCell align="right">edited</TableCell>
                  <TableCell align="right">url</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {renderPersonages()}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (!Object.is(initialState?.totalItems, -1) && Object.is(initialState?.totalItems, 0) ?
          (<Alert severity="error">No hay datos para mostrar!</Alert>) : '')}
      </Container>
    </div>
  );
}