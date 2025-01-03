interface Props {
    children: React.ReactNode;
    imagenTarjeta: string;
    titulo: string;
    subtitulo: string;
    link: string;
}

export default function ComponenteTarjeta({ children, imagenTarjeta, titulo, subtitulo, link }:Props) {
    return (
        <a
            href={link}
            className={`w-2/5 min-w-80 h-[22rem] object-cover bg-no-repeat bg-cover bg-total rounded-md ${imagenTarjeta}`}
            target="_blank"
            title="Contenido"
        >
            <div
                className={`w-full !min-h-full max-h-full flex flex-col rounded-md justify-around items-center transition ease-in-out gap-4 duration-300 opacity-0 overflow-y-auto overflow-x-hidden hover:opacity-100 hover:bg-BlancoTransparente`}
            >
                <div className="w-full h-1/2 flex justify-center items-end">
                    <div className="w-auto h-auto flex flex-col font-semibold ">
                        <p className="italic font-semibold text-[2em] max-w-[90%] text-ellipsis whitespace-nowrap md:text-[4vw]" >{`${titulo}`}</p>
                        <p className="text-center">{`${subtitulo}`}</p>
                    </div>
                </div>
                <div className="w-full h-1/2 flex flex-wrap justify-center items-center ">
                    {children}
                </div>
            </div>
        </a>

    );
}