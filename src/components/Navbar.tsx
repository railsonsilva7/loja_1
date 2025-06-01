import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Tech Assist
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <NavLink href="/service-orders">Ordens de Serviço</NavLink>
            <NavLink href="/customers">Clientes</NavLink>
            <NavLink href="/products">Produtos</NavLink>
            <NavLink href="/services">Serviços</NavLink>
            <NavLink href="/reports">Relatórios</NavLink>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button - to be implemented */}
            <button className="p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </Link>
  )
} 