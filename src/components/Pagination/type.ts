export interface IPagination {
    filmsPerPage   : number;
    totalFilms     : number;
    paginate       : any;
    setCurrentPage : any;
    currentPage    : number;
}