import styles from './Forms.css'

function Forms() {
    return(
        <form className={styles.form}>
            
            <div id="contato">

            <Input
            type='text'
            text='Nome'
            name='nome'
            placeholder='Insira seu Nome'
            />

            <Input
            type='text'
            text='Email'
            name='email'
            placeholder='Insira seu Email'
            />

            <Input
            type='text'
            text='Telefone'
            name='telefone'
            placeholder='Insira seu Telefone'
            />
            </div>

            <div id="endereco">

            <Input
            type='text'
            text='Rua'
            name='rua'
            placeholder='Insira o nome da sua Rua'
            />

            <Input
            type='text'
            text='Número'
            name='numero'
            placeholder='Insira o Número'
            />

            <Input
            type='text'
            text='Bairro'
            name='bairro'
            placeholder='Insira seu Bairro'
            />

            <Input
            type='text'
            text='Complemente'
            name='complemento'
            placeholder='Insira o Complemento'
            />

            <Input
            type='text'
            text='CEP'
            name='cep'
            placeholder='Insira seu CEP'
            />

            <Input
            type='text'
            text='Cidade'
            name='cidade'
            placeholder='Insira sua Cidade'
            />

            </div>

            <div id="sobrevc">

            <Input
            type='text'
            text='Sobre Você'
            name='sobre'
            placeholder='Nos conte um pouco sobre você!'
            />

            </div>

                        
        </form>

    )
}

export default Forms