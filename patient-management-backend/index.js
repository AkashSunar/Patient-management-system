console.log('hello akas');
const {PORT}=require('./utils/config')
const app=require("./app")
app.listen(PORT);
console.log(`server running in port ${PORT}`)
