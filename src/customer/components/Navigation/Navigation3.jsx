import { Fragment, useState } from 'react'
import { Search, ShoppingBag, User } from "lucide-react";
import { NavLink } from 'react-router-dom'; // Import NavLink
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
    categories: [
        // ... (unchanged)
    ],
    pages: [
        { name: 'NEW ARRIVALS', to: '#' },
        { name: 'UNSTITCHED SUITS', to: '#' },
        { name: 'DUPATTAS', to: '#' },
        { name: 'BLOG', to: '#' },
        { name: 'SEARCH', to: '#' },
        { name: 'CONTACT US', to: '/contact' }, // Use to instead of href
    ],
}

export default function Navigation() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                {/* ... (unchanged) */}
            </Dialog>

            <header className="relative bg-white">
                <p className="flex h-12 items-center justify-center bg-pink-800 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    💖 USD CODE LEHERIYA 15 TO GET 15% OFF ON PURCHASE ABOVE ₹4000/ - ONLY💖
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-3 sm:px-2 lg:px-30">
                    <div className='flex h-20 items-center justify-center bg-white-300 px-10text-sm font-medium text-white sm:px-2 lg:px-8'>
                        <img src="https://www.leheriya.com/cdn/shop/files/logo_be55d2b1-210e-43b5-b911-3585765e88aa_50x@2x.png?v=1677655114" alt="" />
                    </div>
                    <div className="border-b border-red-30">
                        <div className="flex h-25 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-600 lg:non-hidden"
                            >
                                <span className="absolute -inset-0.9" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="size-10" />
                            </button>
                
                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-16">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {/* ... (unchanged) */}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <NavLink
                                            key={page.name}
                                            to={page.to} // Use to for NavLink
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </PopoverGroup>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Sign in
                                    </a>
                                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Create account
                                    </a>
                                </div>

                                {/* User */}
                                <div className="flex lg:ml-6">
                                    <NavLink to="/Login" className="p-4 text-gray-400 hover:text-gray-500">
                                        <span></span>
                                        <User aria-hidden="true" className="size-6" />
                                    </NavLink>
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <a href="#" className="p-4 text-gray-400 hover:text-gray-500">
                                        <span></span>
                                        <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                                    </a>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a href="#" className="group -m-2 flex items-center p-2">
                                        <ShoppingBagIcon
                                            aria-hidden="true"
                                            className="size-8 shrink-0 text-gray-400 group-hover:text-gray-400"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-800 group-hover:text-gray-800"></span>
                                        <span className="sr-only">items in cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}