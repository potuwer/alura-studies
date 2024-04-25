export function tempoParaSegundos(tempo: string) {
    const [horas = "0", mins = "0", segs = "0"] = tempo.split(":")

    const HorasEmSegundos = Number(horas) * 3600
    const minutosEmSegundos = Number(mins) * 60
    return HorasEmSegundos + minutosEmSegundos + Number(segs)
}