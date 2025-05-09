// app/cardapio/[slug]/page.tsx
'use client'

import { useParams } from 'next/navigation';
import Image from 'next/image';
import {CardapioInterface} from "@/types/cardapio.interface";
import RestaurantHeader from "@/components/RestaurantHeader";

const response: CardapioInterface =
{
    "uuid_restaurante": "123e4567-e89b-12d3-a456-426614174000",
    "slug": "lanchonete-da-cidade",
    "nome_restaurante": "Lanchonete Look Code",
    "descricao": "O melhor da comida caseira com um toque moderno.",
    "endereco": {
    "rua": "Rua das Flores, 123",
        "bairro": "Centro",
        "cidade": "São Paulo",
        "estado": "SP",
        "cep": "01234-000"
},
    "contato": {
    "telefone": "(11) 98765-4321",
        "whatsapp": "https://wa.me/5511987654321",
        "instagram": "@lanchonete.look-code"
},
    "horario_funcionamento": {
    "segunda_a_sexta": "10:00 - 22:00",
        "sabado": "12:00 - 23:00",
        "domingo": "Fechado"
},
    "modo_aberto": true,
    "exibir_precos": true,
    "tema_escolhido": "escuro",
    "foto_capa": "https://photo-cdn2.icons8.com/D6n5HW_3gcAR2nJxD0gjB_HhePnMyW01mlG4QsmDq2g/rs:fit:1905:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi84OGE3OGIwZTUz/NGY0MDNiOTQ4ZWI3/ZTIyYTlmMjAwMi5q/cGc.jpg",
    "foto_logo": "https://photo-cdn2.icons8.com/CG4l-aSCAf9xalMkM3XXFfdMnEYsa4u3YbdJdOPnasE/rs:fit:716:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMjA3LzAxYjM2/MDkxLTQxMDQtNDI3/Mi1iZjdjLTkzN2Q4/Y2E0ODE3MS5qcGc.jpg",

    "categorias": [
    { "nome_categoria": "Massas", "referencia_categoria": "#massas", "existem_produtos": true },
    { "nome_categoria": "Saladas", "referencia_categoria": "#saladas", "existem_produtos": false },
    { "nome_categoria": "Frangos", "referencia_categoria": "#frangos", "existem_produtos": true },
    { "nome_categoria": "Carnes Nobres", "referencia_categoria": "#carnes-nobres", "existem_produtos": true },
    { "nome_categoria": "Lanches", "referencia_categoria": "#lanches", "existem_produtos": true },
    { "nome_categoria": "Acompanhamentos", "referencia_categoria": "#acompanhamentos", "existem_produtos": true },
    { "nome_categoria": "Bebidas Alcoólicas", "referencia_categoria": "#bebidas-alcoolicas", "existem_produtos": false },
    { "nome_categoria": "Bebidas não Alcoólicas", "referencia_categoria": "#bebidas-nao-alcoolicas", "existem_produtos": false },
    { "nome_categoria": "Sobremesas", "referencia_categoria": "#sobremesas", "existem_produtos": false }
],

    "produtos": [
    {
        "uuid": "6a48b7e9-8150-470e-b1b6-1d5b0c9c1e00",
        "nome": "Strogonoff de Frango",
        "resumo": "Frango ao molho cremoso com arroz e batata palha",
        "valor": "28.90",
        "url_imagem": "https://foodish-api.com/images/butter-chicken/butter-chicken4.jpg",
        "categoria": "Frangos"
    },
    {
        "uuid": "8f4d9273-cf2d-4b97-9c7f-1f39b9a03cb9",
        "nome": "Macarronada",
        "resumo": "Macarrão simples com molho",
        "valor": "35.00",
        "url_imagem": "https://foodish-api.com/images/pasta/pasta3.jpg",
        "categoria": "Massas"
    },
    {
        "uuid": "3e3ce2f2-4c68-4a03-92b6-9d2c2a8e3f01",
        "nome": "Macarronada Especial",
        "resumo": "Macarrão especial com molho",
        "valor": "39.50",
        "url_imagem": "https://foodish-api.com/images/burger/burger6.jpg",
        "categoria": "Massas"
    },
    {
        "uuid": "e1dcaa3b-f119-4c2e-b7f5-3eec76461c4d",
        "nome": "Biryani",
        "resumo": "Biryani clássico com recheio",
        "valor": "45.00",
        "url_imagem": "https://foodish-api.com/images/biryani/biryani49.jpg",
        "categoria": "Carnes Nobres"
    },
    {
        "uuid": "4e0dfd8d-8d20-49c2-897b-2f56c5deacb1",
        "nome": "Dosa",
        "resumo": "Dosa completo com salada",
        "valor": "26.00",
        "url_imagem": "https://foodish-api.com/images/dosa/dosa34.jpg",
        "categoria": "Acompanhamentos"
    },
    {
        "uuid": "d012cc92-3f9c-4a56-b497-fcc1c748e6e6",
        "nome": "Idly",
        "resumo": "Idly ao molho cremoso",
        "valor": "38.00",
        "url_imagem": "https://foodish-api.com/images/idly/idly1.jpg",
        "categoria": "Acompanhamentos"
    },
    {
        "uuid": "b7ae149a-91f3-49c0-8c45-22f3182d0d33",
        "nome": "Pizza",
        "resumo": "Pizza de Pepperoni com queijo",
        "valor": "31.90",
        "url_imagem": "https://foodish-api.com/images/pizza/pizza85.jpg",
        "categoria": "Lanches"
    },
    {
        "uuid": "a163d2fc-507f-4ab1-940e-89a0e62f635e",
        "nome": "Arroz Biro-Biro",
        "resumo": "Arroz com diversos acompanhamentos",
        "valor": "29.50",
        "url_imagem": "https://foodish-api.com/images/rice/rice21.jpg",
        "categoria": "Acompanhamentos"
    }
]
}


function handleScrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function CardapioPage() {
    const params = useParams();
    const { slug } = params;

    return (
        <div className="min-h-screen bg-neutral-900 p-4 sm:p-8">
            <RestaurantHeader
                nome={response.nome_restaurante}
                descricao={response.descricao}
                fotoCapa={response.foto_capa}
                fotoLogo={response.foto_logo}
                endereco={response.endereco}
                contato={response.contato}
                modo_aberto={response.modo_aberto}
                horario_funcionamento={response.horario_funcionamento}
            />


            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
                Cardápio do Restaurante
            </h1>
            <p className="text-center text-gray-600 text-xs mb-4">
                identificador: <span className="font-mono text-blue-600">{slug}</span>
            </p>
            <div className="overflow-x-auto whitespace-nowrap flex gap-3 py-2">
                {response.categorias.map((cat) => (
                    cat.existem_produtos ?
                    <button
                        key={cat.referencia_categoria}
                        className="px-4 py-2 bg-neutral-800 text-white rounded-full hover:bg-emerald-500 transition whitespace-nowrap"
                        onClick={() => handleScrollTo(cat.referencia_categoria)}
                    >
                        {cat.nome_categoria}
                    </button> : null
                ))}
            </div>

            {response.categorias.map((cat) => (
                cat.existem_produtos ? (
                    <div key={cat.referencia_categoria}>
                        <h1
                            id={cat.referencia_categoria}
                            className="px-4 py-2 font-bold mt-10 mb-4  text-white text-xl rounded"
                        >
                            {cat.nome_categoria}
                        </h1>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {response.produtos
                                .filter((prato) => prato.categoria === cat.nome_categoria)
                                .map((prato) => (
                                    <div
                                        key={prato.uuid}
                                        className="border border-neutral-700 hover:bg-neutral-800 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                                    >
                                        <Image
                                            src={prato.url_imagem}
                                            alt={prato.nome}
                                            width={400}
                                            height={300}
                                            priority
                                            className="rounded-lg object-cover"
                                        />
                                        <h2 className="pt-2 font-semibold text-white text-lg">
                                            {prato.nome}
                                        </h2>
                                        <p className="text-gray-300 text-sm mt-1">{prato.resumo}</p>
                                        <p className="text-right font-bold text-emerald-400 mt-2">
                                            R$ {prato.valor.replace('.', ',')}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                ) : null
            ))}
        </div>
    );
}
