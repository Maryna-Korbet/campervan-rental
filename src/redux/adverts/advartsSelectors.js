export const selectAdverts = state => state.adverts.adverts;

export const selectIsLoading = state => state.adverts && state.adverts.isLoading;

export const selectIsError = state => state.adverts && state.adverts.isError;

export const selectNextPage = state => state.adverts.nextPage;