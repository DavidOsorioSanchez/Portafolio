import "././css/index.css";
import "././css/App.css";

function ComponenteTarjeta({ children, imagenTarjeta, titulo, subtitulo, link }) {
  return (
    <a
    className={`w-2/5 min-w-80  max-h-max h-96 rounded-lg animate-bajada object-cover bg-no-repeat bg-cover bg-total ${imagenTarjeta}`}
    href={link}
    target="_blank"
    >
        <div
          className={`w-full h-full flex flex-col transition ease-in-out duration-300 rounded-lg opacity-0 hover:opacity-100 hover:bg-BlancoTransparente`}
        >
          <div className="w-full h-1/2 flex justify-center items-end">
            <div className="w-auto h-auto flex flex-col font-semibold ">
              <p className="italic text-5xl text-nowrap">{`${titulo}`}</p>
              <p className="text-center">{`${subtitulo}`}</p>
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-wrap justify-around items-center ">
            {children}
          </div>
        </div>
    </a>
    
  );
}

export default ComponenteTarjeta;
