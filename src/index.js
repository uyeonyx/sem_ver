require('dotenv').config()
const args = process.argv.slice(2);
if (args[0] == 'check-env') {
    console.log(process.env.ENV)
} else {
    console.log('Hello, World!')
}