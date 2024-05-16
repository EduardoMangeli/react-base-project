export function criarWhatsAppLink(numeroCelular, mensagem) {
    return `https://wa.me/${numeroCelular}?text=${encodeURIComponent(mensagem)}`;
}
