import React from 'react'


export default function FormProducto() {
    return (
        <div>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>
                        Nombre Producto
                    </label>
                    <input type='text' className='form-control' name='prod_nombre'>
                    </input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>
                        Descripcion Producto
                    </label>
                    <input type='text' className='form-control' name='prod_descripcion'>
                    </input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>
                        Precio Producto
                    </label>
                    <input type='number' className='form-control' name='prod_precio'>
                    </input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>
                        Stock Producto
                    </label>
                    <input type='number' className='form-control' name='prod_stock'>
                    </input>
                </div>
                <div className='form-check mb-3'>
                    <input type='checkbox' className='form-check-label' name='prod_oferta' />
                    <label className='form-check-label'>
                         Oferta Producto
                    </label>
                    
                </div>
            </form>
        </div>
    )
}
