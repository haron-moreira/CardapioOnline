import Image from 'next/image';
import {useTraducao} from "@/hooks/useTraducao";

interface Props {
    nome: string;
    descricao: string;
    fotoCapa: string;
    fotoLogo: string;
    endereco: {
        rua: string;
        bairro: string;
        cidade: string;
        estado: string;
    };
    contato: {
        telefone: string;
        whatsapp?: string;
        instagram?: string;
    };
    modo_aberto: boolean;
    horario_funcionamento: {
        segunda_a_sexta: string;
        sabado: string;
        domingo: string;
    };
}

export default function RestaurantHeader({
                                             nome,
                                             descricao,
                                             fotoCapa,
                                             fotoLogo,
                                             endereco,
                                             contato,
                                             modo_aberto,
                                             horario_funcionamento,
                                         }: Props) {

    const t = useTraducao();
    return (
        <div className="w-full rounded-lg overflow-hidden shadow mb-6 bg-white dark:bg-neutral-900 transition-colors">
            {/* Capa */}
            <div className="relative h-48 w-full">
                <Image
                    src={fotoCapa}
                    alt={`Capa do restaurante ${nome}`}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Logo + dados */}
            <div className="px-4 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow">
                    <Image
                        src={fotoLogo}
                        alt={`Logo do restaurante ${nome}`}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="text-black dark:text-white flex-1">
                    <h2 className="text-2xl font-bold">{nome}</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{descricao}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {endereco.rua}, {endereco.bairro} - {endereco.cidade}/{endereco.estado}
                    </p>

                    <div className="mt-3 text-sm space-y-1">
                        <p className="text-gray-600 dark:text-gray-400">
                            📞 Tel: <span className="text-black dark:text-white">{contato.telefone}</span>
                        </p>
                        {contato.whatsapp && (
                            <p className="text-gray-600 dark:text-gray-400">
                                💬 WhatsApp:{' '}
                                <a href={contato.whatsapp} className="text-emerald-600 dark:text-emerald-400 underline" target="_blank">
                                    Abrir
                                </a>
                            </p>
                        )}
                        {contato.instagram && (
                            <p className="text-gray-600 dark:text-gray-400">
                                📷 Instagram:{' '}
                                <a
                                    href={`https://instagram.com/${contato.instagram.replace('@', '')}`}
                                    className="text-emerald-600 dark:text-emerald-400 underline"
                                    target="_blank"
                                >
                                    {contato.instagram}
                                </a>
                            </p>
                        )}
                    </div>

                    <div className="mt-4">
                        <p
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                modo_aberto ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                            }`}
                        >
                            {modo_aberto ? t.aberto : t.fechado}
                        </p>
                    </div>

                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <p>🕒 <strong>{t.segSex}:</strong> {horario_funcionamento.segunda_a_sexta}</p>
                        <p>🕒 <strong>{t.sabado}:</strong> {horario_funcionamento.sabado}</p>
                        <p>🕒 <strong>{t.domingo}:</strong> {horario_funcionamento.domingo}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
