import { InjectionKey } from '@nuxtjs/composition-api'
import { ImageStore } from './use-image'

const ImageKey: InjectionKey<ImageStore> = Symbol('ImageStore')
export default ImageKey;
