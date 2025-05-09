export interface CardapioInterface {
    uuid_restaurante: string;
    slug: string;
    nome_restaurante: string;
    descricao: string;
    endereco: {
        rua: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
    };
    contato: {
        telefone: string;
        whatsapp?: string;
        instagram?: string;
    };
    horario_funcionamento: {
        segunda_a_sexta: string;
        sabado: string;
        domingo: string;
    };
    modo_aberto: boolean;
    exibir_precos: boolean;
    tema_escolhido: "claro" | "escuro";
    foto_capa: string;
    foto_logo: string;
    categorias: Categoria[];
    produtos: Produto[];
}

export interface Categoria {
    nome_categoria: string;
    referencia_categoria: string;
    existem_produtos: boolean;
}

export interface Produto {
    uuid: string;
    nome: string;
    resumo: string;
    valor: string;
    url_imagem: string;
    categoria: string;
}