import * as React from 'react';
import { Box, Paper, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Attributes({ character }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12}>
                    <Paper>
                        <Box sx={{ flexGrow: 1, padding: '1rem' }}>
                            <Grid container spacing={2} justifyContent="space-around">
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        size="small"
                                        id="outlined-required"
                                        label="Name"
                                        value={character.name}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        size="small"
                                        id="outlined"
                                        label="Class"
                                        value={character.class}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}