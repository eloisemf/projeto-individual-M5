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
                verProp()
                console.log(chalk.bgBlue.black('Até a proxima!'))
                
            }
        })
        .catch((err) => console.log(err))
}



function creatProp() {
    inquirer.prompt([
        {
            name: 'prop',
            message: 'Digite uma propriedade do CSS3:'
        }
    ])
        .then((resposta) => {

            const resp = resposta['prop'];
            while (resp != 'sair'){
                
                fs.appendFile("propriedades.txt", `"${resp}":
`,  (err) => {
    
                    if (err) throw err;  
                });
            return creatProp() 
        } 
         verProp()
         console.log(chalk.blue('Até a proxima!!'))
         process.exit
        }) 
}


function verProp(){
    fs.readFile('propriedades.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })

 
} 
