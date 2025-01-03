interface Props {
    primerApunte?: string | undefined;
    otroApunte: boolean;
    segundoApunte?: string | undefined;
}

export default function Apuntes({ primerApunte, segundoApunte, otroApunte }:Props) {
    return (
        <ul className="w-full flex items-center justify-center flex-col p-4 gap-4 text-sm list-square">
            <li className="text-pretty w-5/6">{primerApunte}</li>
            {otroApunte ? <li className="text-pretty w-5/6">{segundoApunte}</li> : <></>}
        </ul>
    )
}