const pedido = {
    cliente: {
        nome: "Guilherme Queiroz",
        email: "guielihan@outlook.com"
    },
    itens: [
        {
            id: 1,
            nome: "Notebook",
            quantidade: 1,
            preco: 3500.00
        },
        {
            id: 2,
            nome: "Teclado Mecânico",
            quantidade: 1,
            preco: 450.00
        },
        {
            id: 3,
            nome: "Webcam HD",
            quantidade: 1,
            preco: 280.00
        }
    ],
    endereco: {
        rua: "Digital College",
        numero: "1510",
        complemento: "Apto 01",
        cidade: "Fortaleza",
        estado: "CE",
        cep: "60150-161"
    }
};

const { nome, email } = pedido.cliente;

const [primeiroItem, , ultimoItem] = pedido.itens;

const { rua, numero, complemento, cidade, estado, cep } = pedido.endereco;

function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function gerarResumoPedido() {
    return `
        <div class="secao">
            <h2>Informações do Cliente</h2>
            <div class="cliente-info">
                <div class="info-item">
                    <label>Nome</label>
                    <p>${nome}</p>
                </div>
                <div class="info-item">
                    <label>E-mail</label>
                    <p>${email}</p>
                </div>
            </div>
        </div>

        <div class="secao">
            <h2>Itens do Pedido</h2>
            <div class="itens-destaques">
                <div class="item-destaque">
                    <h3>${primeiroItem.nome} <span class="badge">Primeiro</span></h3>
                    <div class="item-detalhes">
                        <span><label>Quantidade:</label> ${primeiroItem.quantidade}</span>
                        <span><label>Preço Unitário:</label> ${formatarMoeda(primeiroItem.preco)}</span>
                        <span><label>Subtotal:</label> ${formatarMoeda(primeiroItem.quantidade * primeiroItem.preco)}</span>
                    </div>
                </div>

                <div class="item-destaque">
                    <h3>${ultimoItem.nome} <span class="badge">Último</span></h3>
                    <div class="item-detalhes">
                        <span><label>Quantidade:</label> ${ultimoItem.quantidade}</span>
                        <span><label>Preço Unitário:</label> ${formatarMoeda(ultimoItem.preco)}</span>
                        <span><label>Subtotal:</label> ${formatarMoeda(ultimoItem.quantidade * ultimoItem.preco)}</span>
                    </div>
                </div>
            </div>
            <p style="margin-top: 15px; color: #666; font-style: italic;">
                Total de itens no pedido: <strong>${pedido.itens.length}</strong>
            </p>
        </div>

        <div class="secao">
            <h2>Endereço de Entrega</h2>
            <div class="endereco-info">
                <div class="info-item">
                    <label>Rua</label>
                    <p>${rua}, ${numero} ${complemento ? '- ' + complemento : ''}</p>
                </div>
                <div class="info-item">
                    <label>Cidade</label>
                    <p>${cidade} - ${estado}</p>
                </div>
                <div class="info-item">
                    <label>CEP</label>
                    <p>${cep}</p>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const resumoPedidoDiv = document.getElementById('resumoPedido');
    resumoPedidoDiv.innerHTML = gerarResumoPedido();
    
    console.log('=== DESTRUCTURING DO PEDIDO ===');
    console.log('Cliente extraído por destructuring:', { nome, email });
    console.log('Primeiro item (destructuring de array):', primeiroItem);
    console.log('Último item (destructuring de array):', ultimoItem);
    console.log('Endereço extraído por destructuring:', { rua, numero, complemento, cidade, estado, cep });
});