/* Página Inicial - Banner */

// Voltar Banner Principal
function voltarBannerPrincipal() {
    document.getElementById("bannerPrincipal").style.display = 'none';

    document.getElementById("bannerFeijoada").style.display = 'block';
}
// Avançar Banner Principal
function avancarBannerPrincipal() {
    document.getElementById("bannerPrincipal").style.display = 'none';

    document.getElementById("bannerFeijoada").style.display = 'block';
}
// Voltar Banner Feijoada
function voltarBannerFeijoada() {
    document.getElementById("bannerFeijoada").style.display = 'none';

    document.getElementById("bannerPrincipal").style.display = 'block';
}
// Avançar Banner Feijoada
function avancarBannerFeijoada() {
    document.getElementById("bannerFeijoada").style.display = 'none';

    document.getElementById("bannerPrincipal").style.display = 'block';
}


/* Página de Receita - Mais Informações */

// Mostrar Informações
function mostrarInformacoes() {
    document.getElementById("maisInformacoesBody").style.display = 'block';
}
// Ocultar Informações
function ocultarInformacoes() {
    document.getElementById("maisInformacoesBody").style.display = 'none';
}

