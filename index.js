import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'

lista()

function lista() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'css',
            message: 'O seu CSS',
            choices: [
                'Adicionar propriedades',
                'Ver propriedades',
                'Sair'
            ],
        },
    ])
        .then((resposta) => {
            const propriedade = resposta['css']

            if (propriedade === 'Adicionar propriedades') {
                creatProp()
            } else if (propriedade === 'Ver propriedades') {
                verProp()
            } else if (propriedade === 'Sair') {
                console.log(chalk.bgBlue.black('Até a proxima!'))
                
            }
        })
        .catch((err) => console.log(err))
}

/* adicionando as propriedades ao json, usei o appendFile do js pra isso */

function creatProp() {
    inquirer.prompt([
        {
            name: 'prop',
            message: 'Digite uma propriedade do CSS3:'
        }
    ])
        .then((resposta) => {

            const resp = resposta['prop']
            
            while (resp != 'sair'){
            fs.appendFile(
                'propriedades.json',
                `${resp}:,
`,
                function (err) {
                    console.log(err)
                },
            )
            return creatProp() 
        } 
         verProp()
         console.log(chalk.blue('Até a proxima!!'))
         process.exit
        }) 
}


function verProp(){
 const json = fs.readFileSync('./propriedades.json', 
        {encoding:'utf8', flag:'r'},
        );
 const ver = JSON.stringify(json);
 console.log(ver)

} 