import React from "react";
import{ Proyectos } from "../../Proyectos.ts";
import ComponenteTarjeta from "./ComponenteTarjeta.tsx";
import Organizador from "./Organizador.tsx";

export default function Portafolio() {
    const [front, setFront] = React.useState(false);
    const estadoFont = front
        ? "bg-colorActivoFront text-blancoEstrella"
        : "bg-blancoEstrella ";
    const [back, setBack] = React.useState(false);
    const estadoBack = back
        ? "bg-colorActivoBack text-blancoEstrella"
        : "bg-blancoEstrella ";

    const mostrarFront = () => {
        setFront(!front);
    };

    const mostrarBack = () => {
        setBack(!back);
    };



    return (
        <div className="w-screen h-auto bg-Fondo-Estrellas my-12">
            <div className="w-screen h-auto flex flex-col py-12 gap-8">
                <p className="w-screen h-auto text-4xl flex justify-center text-nowrap text-blancoEstrella font-bold min-[400px]:text-5xl">
                    Trabajos Hechos
                </p>
                <div className="w-screen h-auto flex justify-center gap-6 text-colorFondo  font-bold text-lg">
                    <button
                        className={`w-40 rounded-md ${estadoFont} transition ease-in duration-100 active:bg-colorDeAccion active:text-blancoEstrella`}
                        onClick={mostrarFront}
                    >
                        Frond-End
                    </button>
                    <button
                        className={`w-40 rounded-md ${estadoBack} transition ease-in duration-100 active:bg-colorDeAccion active:text-blancoEstrella`}
                        onClick={mostrarBack}
                    >
                        Back-End
                    </button>
                </div>
            </div>
            <div className="w-screen h-auto p-4  flex flex-wrap justify-around gap-x-2 gap-y-12 items-center">
                {
                    Proyectos.map((proyecto : any) => {
                        return (
                            <>
                                { back && front ? (
                                    (proyecto.esFront === true) && (proyecto.esBack === true) ? (
                                        <ComponenteTarjeta
                                            key={proyecto.id}
                                            imagenTarjeta={proyecto.imagenTarjeta}
                                            titulo={proyecto.titulo}
                                            subtitulo={proyecto.subtitulo}
                                            link={proyecto.link}
                                        >
                                            <Organizador etiquetas={proyecto.Tecnologias} />
                                        </ComponenteTarjeta>
                                    ):(
                                        <></>
                                    )
                                ): front && !back ? (
                                    (proyecto.esFront === true) && (proyecto.esBack === false) ? (
                                        <ComponenteTarjeta
                                            key={proyecto.id}
                                            imagenTarjeta={proyecto.imagenTarjeta}
                                            titulo={proyecto.titulo}
                                            subtitulo={proyecto.subtitulo}
                                            link={proyecto.link}
                                        >
                                            <Organizador etiquetas={proyecto.Tecnologias} />
                                        </ComponenteTarjeta>
                                    ):(
                                        <></>
                                    )
                                ): !front && back ? (
                                    (proyecto.esFront === false) && (proyecto.esBack === true) ? (
                                        <ComponenteTarjeta
                                            key={proyecto.id}
                                            imagenTarjeta={proyecto.imagenTarjeta}
                                            titulo={proyecto.titulo}
                                            subtitulo={proyecto.subtitulo}
                                            link={proyecto.link}
                                        >
                                            <Organizador etiquetas={proyecto.Tecnologias} />
                                        </ComponenteTarjeta>
                                    ):(
                                        <></>
                                    )
                                ): !front && !back ? (
                                    <ComponenteTarjeta
                                            key={proyecto.id}
                                            imagenTarjeta={proyecto.imagenTarjeta}
                                            titulo={proyecto.titulo}
                                            subtitulo={proyecto.subtitulo}
                                            link={proyecto.link}
                                        >
                                            <Organizador etiquetas={proyecto.Tecnologias} />
                                    </ComponenteTarjeta>
                                ):(
                                    <></>
                                )}
                            </>
                            
                        );
                    })
                }
            </div>
        </div>
    );
}
