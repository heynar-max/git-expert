import { useState } from "react"
import{ AddCategory, GifGrid} from "./components";


const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'hola ']);

    const onAddCategory = (newCategory) => {
        
            if(categories.includes(newCategory)) return;  //para validar que solo hay busqueda con el mismo nombre
            // para agregar una nueva categoria
            setCategories([newCategory, ...categories, ])
            // o si quiere que sea de primero
            // setCategories(['Valorant', ...categories, ])
    }

    return (
        <>
        {/* titulo */}
    <h1>GifExpertApp</h1>

      {/* input */}
        <AddCategory 
        // AddCategories={setCategories}
        onNewCategory={onAddCategory}
        />

        {/* Listado de gif */}
        
        
        { 
        categories.map( category => (
                <GifGrid 
                key={category} 
                category={category}
                />
            )
        )  
        }
        

            {/* gif item */}
    </>
    )
}

export default GifExpertApp