import chalk from 'chalk';
import fs from 'fs';
//encadear métodos para colorir texto, cor de fundo e texto em negrito
console.log(chalk.blue.bgWhite.bold('Alura'));

//receber múltiplos argumentos
console.log(chalk.blue('curso', 'de', 'NodeJS'));

//métodos aninhados
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

// uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
// Chalk = Encontrar uma palavra específica dentro do console, por exemplo.
function getError(err){
    throw new Error(chalk.red(err.code, 'Dont have any archive on this way'))
}
function getArchive(wayArchive){
    //fs.readFile(wayArchive, encoding = 'utf-8')
    const encoding = 'utf-8'
    fs.readFile(wayArchive, encoding, (err, text) => {
        if(err){
            getError(err);
        }
        console.log(chalk.black(text))
    })
}
getArchive('./')
