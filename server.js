const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Digital Herbarium running at http://localhost${PORT}`);
});