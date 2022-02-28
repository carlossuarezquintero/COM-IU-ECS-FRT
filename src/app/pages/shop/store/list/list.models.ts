export interface Product{
  productoId: number;
  nombre: string;
  descripcion: string;
  stock: number;
  marcaId: number;
  marcaNombre: string;
  categoriaId: number;
  categoriaNombre: string;
  precio: number;
  imagen: string;
}

export interface PaginationRequest{
  pageIndex: number | null;
  pageSize: number | null;
  search: string | null;
  sort: string | null;
  marca: number | null;
  categoria: number | null;
}

export interface Pagination {
  total: number;
  pagina: number;
  pageSize: number;
  paginas: number;
  data: Product[]
}


