/* eslint-disable no-undef */
import app from './src/app.js';

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server start on port: ${port}`);
})