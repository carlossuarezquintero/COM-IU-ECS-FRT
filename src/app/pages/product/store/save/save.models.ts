import {Product} from '@app/models/backend/product';
export {Product as ProductResponse} from '@app/models/backend/product';

export type ProductCreateRequest = Omit<Product, 'id' | 'categoriaNombre' | 'marcaNombre'>;

export type ProductUpdateRequest = Omit<Product, 'categoriaNombre' | 'marcaNombre'>;



