let actions = {
    agregarTarea: (tarea:any) => ({type: 'AGREGAR_TAREA', payload: tarea}),
    editarTarea: (tarea:any) => ({type:'EDITAR_TAREA', payload: tarea}),
    eliminarTarea: (key: string) => ({type:'ELIMINAR_TAREA', payload: key}),
    traerTarea: (tarea:any) => ({type:'BUSCAR_TAREA', payload: tarea}),
    listarTarea: () => ({type:'LISTAR_TAREA'})
}
export default actions