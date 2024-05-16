function formatarNumeroParaWhatsApp(numero) {
    // Removendo tudo que não é dígito
    let numerosLimpos = numero.replace(/\D/g, '');

    // Checando se já tem o código do país, se não tiver, adiciona
    if (!numerosLimpos.startsWith('55')) {
        numerosLimpos = '55' + numerosLimpos;
    }

    // Garantindo que o número tenha o tamanho correto
    if (numerosLimpos.length !== 13) {
        console.error('Número fornecido tem tamanho incorreto após ajuste: ', numerosLimpos);
        return null; // ou você pode lançar um erro, dependendo da necessidade
    }

    // Retorna o número no formato correto para URLs do WhatsApp
    return `+${numerosLimpos}`;
}


export function criarWhatsAppLink(numeroCelular, mensagem) {
    return `https://wa.me/${formatarNumeroParaWhatsApp(numeroCelular)}?text=${encodeURIComponent(mensagem)}`;
}
