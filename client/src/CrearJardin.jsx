import React, { useState } from 'react';
import axios from 'axios';

function CrearJardin() {
    const [name, setName] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Obtener el token del localStorage (debes implementar la lógica para guardar el token al hacer login)

        try {
            // Aquí debes tener lógica para obtener el userId del token o de alguna otra fuente segura
            // En este ejemplo, asumiré que ya tienes el userId disponible en una variable
            const userId = '6658e0b625846171a08aa516';

            const response = await axios.post('http://localhost:3001/jardines', {
                name,
                location: {
                    type: 'Point',
                    coordinates: [parseFloat(longitude), parseFloat(latitude)]
                },
                userId: userId  // Aquí asignamos el userId al objeto que se enviará al backend
            }, {
                headers: {
                    'Authorization': `Bearer ${token}` // Agregar el token JWT como header de autorización
                }
            });

            console.log('Jardín creado exitosamente:', response.data);
        } catch (error) {
            console.error('Error al crear el jardín:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Crear Nuevo Jardín</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nombre:</label>
                                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="longitude">Longitud:</label>
                                    <input type="number" step="any" className="form-control" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="latitude">Latitud:</label>
                                    <input type="number" step="any" className="form-control" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Crear Jardín</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrearJardin;
