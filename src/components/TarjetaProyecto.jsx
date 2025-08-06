export default function TarjetaProyecto({ proyecto, onOpen, onEdit, onDelete }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100"
        style={{ cursor: 'pointer' }}
        onClick={() => onOpen(proyecto)}
      >
        <img
          src={`./src/assets/${proyecto.imagen}`}
          className="card-img-top"
          alt={proyecto.nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{proyecto.nombre}</h5>
          <p className="card-text">{proyecto.tecnologias.join(', ')}</p>
        </div>
      </div>
            <div className="mt-4 flex justify-end space-x-2">
        <button className="px-2 py-1 bg-yellow-400 text-white rounded" onClick={onEdit}>
          Editar
        </button>
        <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={onDelete}>
          Eliminar
        </button>
      </div>
    </div>

  );
}
