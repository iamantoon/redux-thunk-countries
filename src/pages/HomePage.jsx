import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {List} from '../components/List';
import {Card} from '../components/Card';
import {Controls} from '../components/Controls';
import {loadCountries} from './../store/countries/countriesActions';
import {selectCountriesInfo, selectVisibleCountries} from './../store/countries/countriesSelectors';
import {selectControls} from './../store/controls/controlsSelectors';

export const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {region, search} = useSelector(selectControls);
    const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
    const {status, error, qty} = useSelector(selectCountriesInfo);

    useEffect(() => {
        if (!qty){
            dispatch(loadCountries());
        }
    }, [qty, dispatch]);
   
    return (
        <>
            <Controls />
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'received' && (
                <List>
                    {countries.map((c) => {
                        const countryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                            ],
                        };
                        return (
                            <Card
                            key={c.name}
                            onClick={() => navigate(`/country/${c.name}`)}
                            {...countryInfo}
                            />
                        );
                    })}
            </List>
            )}
        </>
    );
}