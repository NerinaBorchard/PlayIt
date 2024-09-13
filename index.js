//Nerina Borchard 21537144
const app = require('express')();
const path = require('path')

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'html/index.html'));
})

app.get('/date', (req, res) => {
    return res.json({ date: new Date() });
})

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})