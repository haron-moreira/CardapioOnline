'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
    ArrowDownCircleIcon,
    ArrowPathIcon,
    ArrowUpCircleIcon,
    Bars3Icon,
    PlusSmallIcon,
} from '@heroicons/react/20/solid'
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import AcessoSemanal from "@/app/restaurante/components/AcessoSemanal";
import FaturamentoEstimadoSemanal from "@/app/restaurante/components/FaturamentoEstimadoSemanal";

const navigation = [
    { name: 'Dashboard', href: '#' },
    { name: 'Cardápios', href: '#' },
    { name: 'Configurações', href: '#' },
    { name: 'Cozinha', href: '#' },
    { name: 'Suporte', href: '#' },
]
const secondaryNavigation = [
    { name: 'Últimos 7 dias', href: '#', current: true },
    { name: 'Últimos 30 dias', href: '#', current: false },
    { name: 'Sempre', href: '#', current: false },
]
const stats = [
    { name: 'Acessos únicos', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
    { name: 'Bebidas', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
    { name: 'Pratos', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
    { name: 'Faturamento Estimado', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-1 items-center gap-x-6">
                        <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-3 p-3 md:hidden">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-5 text-gray-900" />
                        </button>
                        <img
                            alt="Your Company"
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
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your profile</span>
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="size-8 rounded-full bg-gray-800"
                            />
                        </a>
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
                                    <img
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
                            <h1 className="text-base/7 font-semibold text-gray-900">Painel</h1>
                            <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-0 sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7">
                                {secondaryNavigation.map((item) => (
                                    <a key={item.name} href={item.href} className={item.current ? 'text-indigo-600' : 'text-gray-700'}>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <a
                                href="#"
                                className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <PlusSmallIcon aria-hidden="true" className="-ml-1.5 size-5" />
                                New invoice
                            </a>
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

                <div className="mx-auto flex mt-4 rounded-xl gap-4 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex mt-4 rounded-xl bg-gray-100 flex-col w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-4">
                        <div className="px-4 py-5 sm:px-6">
                            <h1 className="text-base/7 font-semibold text-gray-900">Acessos únicos por dia</h1>
                        </div>
                        <div className="px-4 py-5 sm:p-6 w-full">
                            <AcessoSemanal />
                        </div>
                    </div>


                    <div className="mx-auto flex mt-4 rounded-xl bg-gray-100 flex-col w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-4">
                        <div className="px-4 py-5 sm:px-6">
                            <h1 className="text-base/7 font-semibold text-gray-900">Faturamento estimado por dia</h1>
                        </div>
                        <div className="px-4 py-5 sm:p-6 w-full">
                            <FaturamentoEstimadoSemanal />
                        </div>
                    </div>
                </div>

                <div className="space-y-16 py-16 xl:space-y-20">

                    {/* Recent activity table */}
                    <div>

                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none">
                                Pedidos recentes
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}