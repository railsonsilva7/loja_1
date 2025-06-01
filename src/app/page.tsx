import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard
          title="Ordens Abertas"
          value="12"
          description="Ordens em andamento"
          trend="up"
        />
        <SummaryCard
          title="Aguardando Peças"
          value="5"
          description="Ordens pendentes"
          trend="neutral"
        />
        <SummaryCard
          title="Concluídas Hoje"
          value="8"
          description="Ordens finalizadas"
          trend="up"
        />
        <SummaryCard
          title="Faturamento Hoje"
          value="R$ 2.450"
          description="Total do dia"
          trend="up"
        />
      </div>

      {/* Últimas Ordens */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Últimas Ordens de Serviço</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Número
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#1001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">João Silva</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Em Andamento
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-03-20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Alertas de Estoque */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Alertas de Estoque</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div>
              <h3 className="text-sm font-medium text-red-800">Bateria iPhone 11</h3>
              <p className="text-sm text-red-600">Estoque abaixo do mínimo</p>
            </div>
            <span className="text-red-600 font-medium">2 unidades</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
            <div>
              <h3 className="text-sm font-medium text-yellow-800">Tela Samsung A51</h3>
              <p className="text-sm text-yellow-600">Estoque baixo</p>
            </div>
            <span className="text-yellow-600 font-medium">5 unidades</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SummaryCard({ title, value, description, trend }: {
  title: string
  value: string
  description: string
  trend: 'up' | 'down' | 'neutral'
}) {
  const trendColor = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-500'
  }[trend]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className={`ml-2 flex items-baseline text-sm font-semibold ${trendColor}`}>
          {trend === 'up' && '↑'}
          {trend === 'down' && '↓'}
          {trend === 'neutral' && '→'}
        </p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  )
}
