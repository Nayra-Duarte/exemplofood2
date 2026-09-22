import { useState } from "react";

const cardapio = [
    { id: 1, nome: "Combo-01", preco: 25.00, disponivel: true, quantidade: 0 },
    { id: 2, nome: "Combo-02", preco: 35.00, disponivel: true, quantidade: 0 },
    { id: 3, nome: "Combo-03", preco: 45.00, disponivel: true, quantidade: 0 },
    { id: 4, nome: "Combo-04", preco: 55.00, disponivel: true, quantidade: 0 },
]

const Pedido = () => {

    const [items, setItems] = useState(cardapio);
    const [status, setStatus] = useState("");
    const [enviar, setEnviar] = useState(false);

    const taxaEntrega = 5.00;

    const alterarQuantidade = (id, valor) => {
        setItems(alt =>
            //MAP: cria um novo array e percorre os itens sem modificar o original(imutabilidade)
            //TERNARIO: verifica se o item da iteração atual é que deve ser alterado
            //SPREAD: (...item) - mantém os valores antigos e adiciona os novos

            
            alt.map(item => 
                item.id === id ? {...item, quantidade: Math.max(0, item.quantidade + valor)}:item
            )
        )

        const produtosDisponiveis = items.filter(item=>item.disponivel);
        const carrinho = items.filter(item => item.quantidade > 0);

        //REDUCE: calcula a soma dos itens (preço + qtde) e adiciona a taxa de entrega
        
        const subTotal = carrinho.reduce((ac, item)=>ac + item.preco * item.quantidade, 0);
        const total = subTotal > 0 ? subTotal + taxaEntrega: 0;

        const ConfirmarPedido = () => {
            setEnviar(true);
            setStatus('Restaurante confirmou  pagamento, preparando seu pedido!')
            setTimeout(()=> {
                setStatus('Seu pedido saiu para a entrega!')
                setEnviar(false)
            },5000)
            setTimeout(() => {
                setStatus('Seu pedido foi entregue com sucesso')
                setEnviar(false)
            }, 10000)
        }
    
    }
    return (
        <div>

        </div>
    )
}

export default Pedido
