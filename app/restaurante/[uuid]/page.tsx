'use client'

import {useEffect, useState} from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
    Bars3Icon,
} from '@heroicons/react/20/solid'
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import AcessoSemanal from "@/app/restaurante/components/AcessoSemanal";
import FaturamentoEstimadoSemanal from "@/app/restaurante/components/FaturamentoEstimadoSemanal";
import PratosPedidosNoDia from "@/app/restaurante/components/PratosPedidosNoDia";
import Image from "next/image";

const navigation = [
    { name: 'Dashboard', href: '#' },
    { name: 'Cardápios', href: '#' },
    { name: 'Configurações', href: '#' },
    { name: 'Cozinha', href: '#' },
    { name: 'Suporte', href: '#' },
]

const stats = [
    { name: 'Acessos únicos (mês)', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
    { name: 'Bebidas (mês)', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
    { name: 'Pratos (mês)', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
    { name: 'Faturamento estimado (mês)', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [restaurante, setRestaurante] = useState("")
    const [ano, setAno] = useState<number>(0)

    useEffect(() => {
        const date = new Date();
        setAno(date.getFullYear())
        setRestaurante("Restaurante LookCode")
    }, [])

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-1 items-center gap-x-6">
                        <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-3 p-3 md:hidden">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-5 text-gray-900" />
                        </button>
                        <Image
                            alt={restaurante}
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </div>
                    <nav className="hidden md:flex md:gap-x-11 md:text-sm/6 md:font-semibold md:text-gray-700">
                        {navigation.map((item, itemIdx) => (
                            <a key={itemIdx} href={item.href}>
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex flex-1 items-center justify-end gap-x-8">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                </div>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
                        <div className="-ml-0.5 flex h-16 items-center gap-x-6">
                            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                            <div className="-ml-0.5">
                                <a href="#" className="-m-1.5 block p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <Image
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 space-y-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <main>
                <div className="relative isolate overflow-hidden pt-16">
                    {/* Secondary navigation */}
                    <header className="pt-6 pb-4 sm:pb-6">
                        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
                            <h1 className="text-base/7 font-semibold text-gray-900">Painel: {restaurante}</h1>
                        </div>
                    </header>

                    {/* Stats */}
                    <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
                        <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
                            {stats.map((stat, statIdx) => (
                                <div
                                    key={stat.name}
                                    className={classNames(
                                        statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                                        'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8',
                                    )}
                                >
                                    <dt className="text-sm/6 font-medium text-gray-500">{stat.name}</dt>
                                    <dd
                                        className={classNames(
                                            stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
                                            'text-xs font-medium',
                                        )}
                                    >
                                        {stat.change}
                                    </dd>
                                    <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div
                        aria-hidden="true"
                        className="absolute top-full left-0 -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-mt-10 sm:-ml-96 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                            }}
                            className="aspect-1154/678 w-288.5 bg-linear-to-br from-[#FF80B5] to-[#9089FC]"
                        />
                    </div>
                </div>

                <div className="mx-auto flex mt-4 rounded-xl gap-8 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex mt-4 rounded-xl bg-gray-50 flex-col w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-4">
                        <div className="px-4 py-5 sm:px-6">
                            <h1 className="text-base/7 font-semibold text-gray-900">Acessos únicos por dia</h1>
                        </div>
                        <div className="px-4 py-5 sm:p-6 w-full">
                            <AcessoSemanal />
                        </div>
                    </div>


                    <div className="mx-auto flex mt-4 rounded-xl bg-gray-50 flex-col w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-4">
                        <div className="px-4 py-5 sm:px-6">
                            <h1 className="text-base/7 font-semibold text-gray-900">Faturamento estimado por dia</h1>
                        </div>
                        <div className="px-4 py-5 sm:p-6 w-full">
                            <FaturamentoEstimadoSemanal />
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex my-4 rounded-xl flex-col gap-4 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex mt-4 rounded-xl bg-gray-50 flex-col w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-4">
                        <div className="px-4 py-5 sm:px-6">
                            <h1 className="text-base/7 font-semibold text-gray-900">Pratos mais pedidos hoje</h1>
                        </div>
                        <div className="px-4 py-5 sm:p-6 w-full">
                            <PratosPedidosNoDia />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
                        <span className="block sm:inline">&copy; {ano} LookCode, LTDA.</span>{' '}
                        <span className="block sm:inline">All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}