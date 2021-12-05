let inicio = {
    ListaTareas: [
        {key:'key02', name:'Escuela', descripcion:'Realizar mi tarea'},
        {key:'key01', name:'Deberes', descripcion:'Ir a comprar al supermercado'},
    ]
}

const buscar = (list:any, key:string) => list.find((item:any) => item.key == key)
const editar = (list:any, item:any) => {
    let indice = -1; 
    list.map((element:any, index:number) => {
        console.log(element.key, item.key)
        if(element.key == item.key) {
            indice = index;
        }
    })

    if(indice !== -1)
        list[indice] = item;
    
    return list;
}
const eliminar = (list:any, key:any) => {
    let indice = -1; 
    
    list.map((element:any, index:number) => {
        if(element.key === key) {
            indice = index;
        }
    })

    if(indice != -1) list.splice(indice, 1);
    return list;
}

const reducer = (state=inicio, action:any) => {
    switch (action.type) {
      case 'AGREGAR_TAREA': {
        return {
            ...state,
            ListaTareas: [
                ...state.ListaTareas,
                action.payload
            ]
        };
      }
      case 'EDITAR_TAREA': {
        const nuevaLista = editar(state.ListaTareas, action.payload);
        return {
            ...state,
            ListaTareas: [...nuevaLista]
        }
      }
      case 'BUSCAR_TAREA': {
          const onlyOne = buscar(state.ListaTareas, action.payload);
        return {
            ...state,
            onlyOne: onlyOne
        }
      }
      case 'ELIMINAR_TAREA': {
          const nuevaLista = eliminar(state.ListaTareas, action.payload)
          return {
              ...state,
              ListaTareas: [...nuevaLista]
          }
      }
      case 'LISTAR_TAREA': {
          return {
              ...state,
              ListaTareas: [...state.ListaTareas]
          }
      }
      default:
        return state;
    }
}

export default reducer;