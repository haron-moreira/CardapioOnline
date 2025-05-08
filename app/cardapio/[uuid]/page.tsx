// app/cardapio/[uuid]/page.tsx
'use client'

import { useParams } from 'next/navigation';
import Image from 'next/image';



const pratos = [
    {
        uuid: "6a48b7e9-8150-470e-b1b6-1d5b0c9c1e00",
        nome: "Strogonoff de Frango",
        resumo: "Frango ao molho cremoso com arroz e batata palha",
        valor: "28.90",
        url_imagem: "https://foodish-api.com/images/butter-chicken/butter-chicken4.jpg"
    },
    {
        uuid: "8f4d9273-cf2d-4b97-9c7f-1f39b9a03cb9",
        nome: "Macarronada",
        resumo: "Macarrão simples com molho",
        valor: "35.00",
        url_imagem: "https://foodish-api.com/images/pasta/pasta3.jpg"
    },
    {
        uuid: "3e3ce2f2-4c68-4a03-92b6-9d2c2a8e3f01",
        nome: "Macarronada Especial",
        resumo: "Macarrão especial com molho",
        valor: "39.50",
        url_imagem: "https://foodish-api.com/images/burger/burger6.jpg"
    },
    {
        uuid: "e1dcaa3b-f119-4c2e-b7f5-3eec76461c4d",
        nome: "Biryani",
        resumo: "Biryani clássico com recheio",
        valor: "45.00",
        url_imagem: "https://foodish-api.com/images/biryani/biryani49.jpg"
    },
    {
        uuid: "4e0dfd8d-8d20-49c2-897b-2f56c5deacb1",
        nome: "Dosa",
        resumo: "Dosa completo com salada",
        valor: "26.00",
        url_imagem: "https://foodish-api.com/images/dosa/dosa34.jpg"
    },
    {
        uuid: "d012cc92-3f9c-4a56-b497-fcc1c748e6e6",
        nome: "Idly",
        resumo: "Idly ao molho cremoso",
        valor: "38.00",
        url_imagem: "https://foodish-api.com/images/idly/idly1.jpg"
    },
    {
        uuid: "b7ae149a-91f3-49c0-8c45-22f3182d0d33",
        nome: "Pizza",
        resumo: "Pizza de Pepperoni com queijo",
        valor: "31.90",
        url_imagem: "https://foodish-api.com/images/pizza/pizza85.jpg"
    },
    {
        uuid: "a163d2fc-507f-4ab1-940e-89a0e62f635e",
        nome: "Arroz Biro-Biro",
        resumo: "Arroz com diversos acompanhamentos",
        valor: "29.50",
        url_imagem: "https://foodish-api.com/images/rice/rice21.jpg"
    }
];




export default function CardapioPage() {
    const params = useParams();
    const { uuid } = params;

    return (
        <div className="min-h-screen bg-black p-4 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
                Cardápio do Restaurante
            </h1>
            <p className="text-center text-gray-600 text-sm mb-4">
                UUID do restaurante: <span className="font-mono text-blue-600">{uuid}</span>
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Exemplo de pratos mockados */}
                {pratos.map((prato) => (
                    <div
                        key={prato.uuid}
                        className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                    >
                        <Image
                            src={prato.url_imagem}
                            alt={prato.nome}
                            width={300}
                            height={300}
                            priority
                            className="rounded-lg object-cover	"
                        />
                        <h2 className="pt-2 font-semibold text-white text-lg">{prato.nome}</h2>
                        <p className="text-gray-300 text-sm mt-1">
                            {prato.resumo}
                        </p>
                        <p className="text-right font-bold text-green-600 mt-2">R$ {prato.valor.replace(".", ",")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
