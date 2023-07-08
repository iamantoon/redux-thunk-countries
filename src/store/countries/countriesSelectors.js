export const selectCountriesInfo = state => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.countries.length,
})

export const selectAllCountries = state => state.countries.countries;

export const selectVisibleCountries = (state, {search = '', region = ''}) => {
    return state.countries.countries.filter(country => {
        return country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
    })
}