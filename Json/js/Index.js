console.log("conectado")

const LlamaJson = async() => {
    try {
        const Respuesta = await fetch("Familia.json")
        const Resultado = await Respuesta.json()

        console.log("Resultado.DatosDeFamilia")
        ListarFamilias(Resultado.DatosDeFamilia)
    } catch (error) {
        return error
    }
}

LlamaJson()

const ListarFamilias = (Familia) => {
    Familia.forEach(InformacionDeFamilia => {
        const { Familiar, Nombres, Apellidos, Edad } = InformacionDeFamilia
        const ListarFamilia = document.querySelector('#MyTable')
        if (ListarFamilia) {
            ListarFamilia.innerHTML += `
                    <tr>
                        <td class="px-6 py-4 whitespace-no-wradp border-b border-gray-200"
                        <p class="text-gray-600 font-bold">${Familiar}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wradp border-b border-gray-200 leading-5 text-gray-600"
                        <p class="text-gray-600 font-bold">${Nombres}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wradp border-b border-gray-200 leading-5 text-gray-600"
                        <p class="text-gray-600 font-bold">${Apellidos}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wradp border-b border-gray-200 leading-5 text-gray-600"
                        <p class="text-gray-600 font-bold">${Edad}</p>
                        </td>
                    </tr>
                        `
        }
    })
}