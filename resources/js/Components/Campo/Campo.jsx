export default function Campo({label, id, tipo, funcion}) {
    return (
        <div className="block relative">
            <label
                htmlFor={id}
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >{label}</label>
            <input
                type={tipo} id={id} onChange={funcion} name={id}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px]
                            text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2
                            ring-gray-900 outline-0"/>
        </div>
    )
}
