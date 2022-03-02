import app from './app'

app.listen(app.get('port'))

console.log('Servidor en ejecución en puerto', app.get('port'))