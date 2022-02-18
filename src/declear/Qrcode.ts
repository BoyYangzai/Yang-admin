import { MaybeRef } from "@vueuse/core";
import { Ref } from "vue";

/**
 * Wrapper for qrcode.
 *
 * @see https://vueuse.org/useQRCode
 * @param text
 * @param options
 */
export declare function useQRCode(
  text: MaybeRef<string>,
): Ref<string>;
