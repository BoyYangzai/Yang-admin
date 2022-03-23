import { vCopy } from "./Copy"
import { vWaterMarker } from "./WaterMarker"

export const yangDirective = {
    install(app: any,options: any) {
        app.directive('watermarker', vWaterMarker)
        app.directive('copy', vCopy)
    }
}