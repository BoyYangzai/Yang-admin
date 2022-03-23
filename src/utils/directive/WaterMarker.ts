export const vWaterMarker = {
  mounted(el: HTMLElement, args: any) {
    let str = args.value.text;
    let font = args.value.font;
    let textColor = args.value.textColor;
    var can = document.createElement("canvas");
    can.className = "waterMarker";
    can.style.display = "none";
    el.appendChild(can);
    can.width = 250;
    can.height = 180;
    el.style.position = "relative";
    can.style.position = "absolute";
    var cans = can.getContext("2d") as any;
    cans.rotate((-20 * Math.PI) / 180);
    cans.font = font || "16px Microsoft JhengHei";
    cans.fillStyle = "rgba(191,146,81,0.8)";
    cans.textAlign = "left";
    cans.textBaseline = "Middle";
    cans.fillText(str, can.width / 10, can.height / 2);
    el.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
}
}