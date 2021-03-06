import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_SEARCH_ONE,
  GET_ACTIVITIES,
  FILTER_CONTINENT,
  FILTER_BY_ALPHABET,
  FILTER_BY_AREA,
  FILTER_BY_ACTIVITY,
} from '../actions';
//--------------------
const initialState = {
  countries: [],
  country: [],
  countriesBackUp: [],
  activities: [],
};
//---------------------------------------------------
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesBackUp: action.payload,
      };
//---------------------------
    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        country: action.payload,
      };
//-----------------------
    case GET_SEARCH_ONE:
      return {
        ...state,
        countries: action.payload,
      };
//----------------------
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
//------------------------
    case FILTER_CONTINENT:
      const allCountries = state.countriesBackUp;
      const continentFound =
        action.payload === 'All'
          ? allCountries
          : allCountries.filter((c) => c.continent === action.payload);
      return {
        ...state,
        countries: continentFound,
      };
//--------------------------
    case FILTER_BY_ALPHABET:
      const countriesToOrder = state.countries;
      const orderedCountries = countriesToOrder.sort(function (a, b) {
        if (action.payload === 'ascending') {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        } else if (action.payload === 'descending') {
          if (a.name > b.name) {
            return -1;
          } else if (a.name < b.name) {
            return 1;
          } else {
            return 0;
          }
        }

        return 'Ordered';
      });
      return {
        ...state,
        countries: orderedCountries,
      };
//----------------------
    case FILTER_BY_AREA:
      const areasForSearch = state.countries;
      const areaFound =
        action.payload === 'All'
          ? areasForSearch
          : areasForSearch.sort(function (a, b) {
              if (action.payload === 'ascending') {
                if (a.area < b.area) {
                  return -1;
                } else if (a.area > b.area) {
                  return 1;
                } else {
                  return 0;
                }
              } else if (action.payload === 'descending') {
                if (a.area > b.area) {
                  return -1;
                } else if (a.area < b.area) {
                  return 1;
                } else {
                  return 0;
                }
              }
              return areasForSearch;
            });
      return {
        ...state,
        countries: areaFound,
      };
//--------------------------      
    case FILTER_BY_ACTIVITY:
      let countriesToOrderByAct = state.countriesBackUp;
      let filteredByAct = [];
      
      for (let j = 0; j < countriesToOrderByAct.length; j++) {

        if (countriesToOrderByAct[j].activities.length > 0) {
          for (let i = 0; i < countriesToOrderByAct[j].activities.length; i++) {
            if (
              countriesToOrderByAct[j].activities[i].name === action.payload
            ) {
              filteredByAct.push(countriesToOrderByAct[j]);
            }
          }
        }
      }

      // countriesToOrderByAct.forEach((element) =>{
      //   if(element.activities.length > 0){
      //     for (let i = 0; i < element.activities.length; i++) {
      //       if (element.activities[i].name === action.payload) {
      //         filteredByAct.push(element);
      //       }
      //     }
      //   }
      // })

      return {
        ...state,
        countries: filteredByAct,
      };

    default:
      return state;
  }
}

export default rootReducer;
