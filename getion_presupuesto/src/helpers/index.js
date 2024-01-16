export const generarID = () => {
    // Generar un ID aleatorio para cada tarea que se cree en la app
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return fecha+random;
};
export const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    const opciones ={
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
    };