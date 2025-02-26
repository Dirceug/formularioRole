import { Timestamp } from "firebase/firestore";

const eventos = [
    {
        // ... (outros campos do evento)
        "barracas": {
            "nomeBarraca1": {
                "nome": "...", // Nome da barraca
                "descricao": "...", // Descrição da barraca
                "responsavel": { // Agora é um array de responsáveis
                "usuarioId1": {
                    "nome": "...",
                    "apelido": "..."
                },
                "usuarioId2": {
                    "nome": "...",
                    "apelido": "..."
                }
                },
                "funcionarios": {
                "usuarioId1": {
                    "nome": "...",
                    "apelido": "...",
                    "ativo": true // Status do funcionário (ativo ou inativo)
                },
                "usuarioId2": {
                    "nome": "...",
                    "apelido": "...",
                    "ativo": false
                }
                },
                "cardapio": [ 
                    {
                        nome: "Fogazza de Frango",
                        id: "kutgluglujukgjçgu",//gerado automaticamente
                        ingredientes: "Lorem ipsum dolor sit amet, consectetur.",
                        valor: 12.50,
                        imagem: "https://drive.google.com/uc?export=download&id=1tww6Nx7Q9FMlTo5NcqEC8T5D6h61OfAA",
                        estoque: 50,
                        status: "ativo"
                    },
                    {
                        nome: "Fogazza Vegetariana",
                        id: "kutgluglujukgjçgl",//gerado automaticamente
                        ingredientes: "Lorem ipsum dolor sit amet, consectetur.",
                        valor: 12.50,
                        imagem: "https://drive.google.com/uc?export=download&id=1OrPOJPT17-LwqjHIjLdScccKPaNuu771",
                        estoque: 50,
                        status: "ativo"
                    },
                ],
                "pedidos":{
                "Pedido1":{
                        "id": "wkjgwkjgfwekgfw",//gerado automaticamente
                        "numero": 123,//auto imcrementado
                        "senha": "A2-ER-T5", //Hash do usuário
                        "produtos":[
                            {
                                "idProduto": "...",
                                "quantidade": 1
                            }
                        ],
                        "hora": "2025-03-21 21:32:57", //Timestamp
                        "status": "recebido", //recebido, em preparo, pronto, enviado?, entregue
                        "cliente":{
                            "nome":"..."
                        }                  
                    }
                }
            },
            "nomeBarraca2": {
                // ... (outra barraca)
            }
        }
    }
]

const users = {
	"uid": "...", // UID do usuário (gerado pelo Firebase Auth)
	"displayName": "...", // Nome do usuário (obtido do Google/Facebook)
	"email": "...", // Email do usuário (obtido do Google/Facebook)
	"photoURL": "...", // URL da foto do usuário (obtido do Google/Facebook)
	"hash": "...", // Hash hexadecimal único (gerado pela aplicação)
	"cpf": "...", // CPF do usuário (cadastrado pelo usuário)
	"status": "ativo", // Status do usuário (ativo, inativo, suspenso, hibernando, deletado)
	"endereco": {  // Dados de endereço
		"casa": { // Apelido do endereço (ex: "casa", "trabalho", "mãe")
            "cep": "...",
            "rua": "...",
            "numero": "...",
            "complemento": "...",
            "bairro": "...",
            "cidade": "...",
            "estado": "...",
            "status": "..."//ativo, inativo, deletado
        },
        "trabalho": { // Outro endereço
            "cep": "...",
            "rua": "...",
            "numero": "...",
            "complemento": "...",
            "bairro": "...",
            "cidade": "...",
            "estado": "...",
            "status": "..."//ativo, inativo, deletado
        }
	},
	"contaBancaria": { // Dados da conta bancária
		"banco": "...",
		"agencia": "...",
		"conta": "..."
	}, 
	"chavePIX": "...", // Chave PIX do usuário
	"saldo": { // Saldo com valor, tipo da moeda e ID da carteira virtual
        "valor": 0.00, // Valor do saldo
        "moeda": "BRL", // Tipo da moeda (ISO 4217)
        "carteiraId": "..." // ID da carteira virtual (se aplicável)
	}, 
	"favoritos": [ 
	    { // Lista de eventos favoritos
            "eventoId": "...", // ID do evento favorito
            "titulo": "...", // Título do evento
            "data": "...", // Data do evento
            "tipo": "..." // Tipo de evento
	    }
	], 
	"conexoes": { // Conexões com amigos/familiares
        "amigos": {
            "uid1": true, // ID do amigo e um valor booleano (true)
            "uid2": true,
            "uid3": true
        },
        "familiares": {
            "uid4": true,
            "uid5": true
        }
	} 
}

const transacoes =  [
    {
        "id": "...", // ID único da transação (gerado pelo Firestore)
        "usuarioId": "...", // ID do usuário (referência ao documento do usuário no Firestore)
        "saldo": {
            "valor": 0.00, // Valor do saldo (positivo para crédito, negativo para débito)
            "moeda": "BRL", // Tipo da moeda (ISO 4217)
            "status": "ativo" // Status do saldo (ativo, inativo)
        },
        "tipo": "compra", // Tipo de transação (compra, adição de saldo, transferência, etc.)
        "detalhes": { // Detalhes da transação (específicos para cada tipo)
            "compra": {
                "idCompra": "...", // ID da compra (se aplicável)
                "produtos": [ // Lista de produtos comprados
                    {
                        "idProduto": "...", // ID do produto
                        "valor": 0.00, // Valor do produto no momento da compra
                        "quantidade": 1 // Quantidade de produtos
                    }
                ],
                "valorTotal": 0.00, // Valor total da compra
                "dataHora": "..." // Data e hora da compra (timestamp)
            },
            "adicaoSaldo": {
                "idTransacao": "...", // ID da transação de adição de saldo
                "tipoPagamento": "...", // Tipo de pagamento (cartão, boleto, PIX, etc.)
                "dataHora": "..." // Data e hora da adição de saldo (timestamp)
            },
            "transferencia":
            {
                "paraUsuarioId": "...", // ID do usuário para o qual a transferência foi feita
                "valor": 0.00, // Valor da transferência
                "dataHora": "..." // Data e hora da transferência (timestamp)
            }
        },
        "dataHora": "..." // Data e hora da transação (timestamp)
    }
]

