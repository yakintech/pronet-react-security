export function onRenderCallback(
    id: string, // İzleme ID'si
    phase: "mount" | "update" | "nested-update",
    actualDuration: number, // Son render süresi
    baseDuration: number, // render süresi
    startTime: number, // render başlangıç zamanı
    commitTime: number, // render bitiş zamanı
) {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
}