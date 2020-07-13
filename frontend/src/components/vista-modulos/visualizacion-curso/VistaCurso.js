import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TablaGrupos from "./TablaGrupos";
import BotonAgregar from "./BotonAgregar";
import BotonGestionar from "./BotonGestionar";


const useStyles = makeStyles({
    root: {
        margin: "1em",
        minWidth: "250px",
        boxSizing: "border-box"

    },
    tarjetaGrupo:{
        margin: "1em",
        minWidth: 400,
        boxSizing: "border-box"
    },
    bullet: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '12px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,


    },
    pos: {
        marginBottom: 5,
        textAlign: 'center',
    },
    centrado: {
        textAlign: "center",
    },

});


export default function VistaCurso() {
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Grid container spacing={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <BotonAgregar></BotonAgregar>{/* Agregar acción de redirección */}
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Grupos</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">6</Typography>
                    </CardContent>
                    <CardActions>
                        <BotonGestionar></BotonGestionar>{/* Agregar acción de redirección */}
                    </CardActions>
                </Card>


                <Card className={classes.root}>
                    <CardContent>
                        <BotonAgregar></BotonAgregar>{/* Agregar acción de redirección */}
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Proyectos</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">2</Typography>
                    </CardContent>
                    <CardActions>
                        <BotonGestionar></BotonGestionar>{/* Agregar acción de redirección */}
                    </CardActions>
                </Card>


                <Card className={classes.root}>
                    <CardContent>
                        <BotonAgregar></BotonAgregar>{/* Agregar acción de redirección */}
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Integrantes</Typography>
                        <Typography className={classes.pos} color="textSecondary" variant="h3" component="h2">28</Typography>
                    </CardContent>
                    <CardActions>
                        <BotonGestionar></BotonGestionar>{/* Agregar acción de redirección */}
                    </CardActions>
                </Card>

                <Card className={classes.root}>
                    <CardContent>
                        <BotonAgregar></BotonAgregar>{/* Agregar acción de redirección */}
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Ayudante
                        </Typography>
                        <Typography className={classes.pos}  component="h2">Andres Andrade Norambuena</Typography>
                        <Typography className={classes.pos} color="textSecondary" component="h2">Ayudantías Lunes Bloque 2 y 3</Typography>
                    </CardContent>
                    <CardActions>
                        <BotonGestionar></BotonGestionar>{/* Agregar acción de redirección */}
                    </CardActions>
                </Card>


                <Card className={classes.tarjetaGrupo}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>Resumen Grupos</Typography>
                        <TablaGrupos></TablaGrupos>
                    </CardContent>
                </Card>

            </Grid>

        </div>
    );
}