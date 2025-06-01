export default function NewServiceOrder() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Nova Ordem de Serviço</h1>
      
      <form className="bg-white shadow-md rounded-lg p-6">
        {/* Informações do Cliente */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações do Cliente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cliente
              </label>
              <select className="w-full border rounded-md px-3 py-2">
                <option value="">Selecione um cliente</option>
                {/* Será preenchido dinamicamente */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Informações do Equipamento */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações do Equipamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Equipamento
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2"
                placeholder="Ex: Notebook, Smartphone, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Marca/Modelo
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2"
                placeholder="Ex: Samsung Galaxy S21"
              />
            </div>
          </div>
        </div>

        {/* Descrição do Problema */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Descrição do Problema</h2>
          <textarea
            className="w-full border rounded-md px-3 py-2 h-32"
            placeholder="Descreva o problema relatado pelo cliente..."
          />
        </div>

        {/* Técnico Responsável */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Técnico Responsável</h2>
          <select className="w-full border rounded-md px-3 py-2">
            <option value="">Selecione um técnico</option>
            {/* Será preenchido dinamicamente */}
          </select>
        </div>

        {/* Botões */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Criar Ordem de Serviço
          </button>
        </div>
      </form>
    </div>
  )
} 